import { Types } from "mongoose";
import { Tickets } from "./tickets.interface";
import { ticketModel } from "./tickets.model";

const addTicketService = async (ticketData: Tickets) => {
  const result = await ticketModel.create(ticketData);
  return result;
};

const getAllTicketService = async () => {
  const result = await ticketModel.find({ availability: true });
  return result;
};

const updateTicketService = async (id: string, ticketData: Tickets) => {
  const result = await ticketModel.findByIdAndUpdate(id, ticketData, {
    new: true,
  });
  return result;
};

const deleteTicketService = async (id: string) => {
  const result = await ticketModel.findByIdAndDelete(id);
  return result;
};

const purchaseTicketService = async (
  ticketId: Types.ObjectId,
  busId: Types.ObjectId,
  quantity: number
) => {
  // Find the ticket by ID
  const ticket = await ticketModel.findById(ticketId);

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  // Check if the ticket is available and has enough quantity
  if (!ticket.availability || ticket.quantity < quantity) {
    throw new Error("Ticket is unavailable or insufficient quantity");
  }

  // Deduct the purchased quantity
  ticket.quantity -= quantity;

  // Update availability if no tickets are left
  if (ticket.quantity === 0) {
    ticket.availability = false;
  }

  // Save the updated ticket
  await ticket.save();

  // Return purchase details
  return {
    busId,
    ticketId: ticket._id,
    quantity,
    pricePerTicket: ticket.price,
    totalPrice: ticket.price * quantity,
  };
};
export const ticketService = {
  addTicketService,
  getAllTicketService,
  updateTicketService,
  deleteTicketService,
  purchaseTicketService,
};
