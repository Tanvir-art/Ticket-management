import { model, Schema } from "mongoose";
import { Tickets } from "./tickets.interface";

const ticketSchema = new Schema<Tickets>({
  busId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "bus",
  },
  timeSlot: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const ticketModel = model<Tickets>("ticket", ticketSchema);
