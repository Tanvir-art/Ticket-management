import { Types } from "mongoose";

export type Tickets = {
  busId: Types.ObjectId;
  timeSlot: string;
  price: number;
  availability: boolean;
  quantity: number;
};
