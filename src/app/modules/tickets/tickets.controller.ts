import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import sendResponse from "../../utils/sendresponse";
import { ticketService } from "./ticket.service";

const addTicket = catchAsync(async (req: Request, res: Response) => {
  const result = await ticketService.addTicketService(req.body);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Ticket added successfully",
    data: result,
  });
});

const getAllTicket = catchAsync(async (req: Request, res: Response) => {
  const result = await ticketService.getAllTicketService();

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Get all tickets successfully",
    data: result,
  });
});

const updateTicket = catchAsync(async (req: Request, res: Response) => {
  const result = await ticketService.updateTicketService(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Ticket updated successfully",
    data: result,
  });
});

const deleteTicket = catchAsync(async (req: Request, res: Response) => {
  const result = await ticketService.deleteTicketService(req.params.id);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Ticket deleted successfully",
    data: result,
  });
});

const purchaseTicket = catchAsync(async (req: Request, res: Response) => {
  const { busId, ticketId, quantity } = req.body;

  if (!ticketId || !quantity) {
    throw new Error("Ticket ID and quantity are required");
  }

  const result = await ticketService.purchaseTicketService(
    ticketId,
    busId,
    quantity
  );

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Ticket purchased successfully",
    data: result,
  });
});

export const ticketController = {
  addTicket,
  getAllTicket,
  updateTicket,
  deleteTicket,
  purchaseTicket,
};
