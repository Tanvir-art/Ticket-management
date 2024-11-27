import { model, Schema } from "mongoose";
import { Bus } from "./bus.interface";

const BusSchema = new Schema<Bus>({
  busName: {
    type: String,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },
  busNumber: {
    type: String,
    required: true,
  },
  busRoute: {
    type: String,
    required: true,
  },
  busSchedule: {
    type: [String],
    required: true,
  },
});

export const busModel = model<Bus>("bus", BusSchema);
