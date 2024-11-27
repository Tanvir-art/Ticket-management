import { Bus } from "./bus.interface";
import { busModel } from "./bus.model";

const addBusService = async (busData: Bus) => {
  const result = await busModel.create(busData);
  return result;
};
const updateBusService = async (id: string, busData: Bus) => {
  const result = await busModel.findByIdAndUpdate(id, busData, { new: true });
  return result;
};
const getAllBusService = async () => {
  const result = await busModel.find();
  return result;
};
const deleteBusService = async (id: string) => {
  const result = await busModel.findByIdAndDelete(id);
  return result;
};
export const busService = {
  addBusService,
  deleteBusService,
  getAllBusService,
  updateBusService,
};
