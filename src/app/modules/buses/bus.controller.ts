import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import sendResponse from "../../utils/sendresponse";
import { busService } from "./bus.service";

const addBus = catchAsync(async (req: Request, res: Response) => {
  const result = await busService.addBusService(req.body);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Bus added successfully",
    data: result,
  });
});

const updateBus = catchAsync(async (req: Request, res: Response) => {
  const result = await busService.updateBusService(req.params.id, req.body);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Bus updated successfully",
    data: result,
  });
});

const getAllBus = catchAsync(async (req: Request, res: Response) => {
  const result = await busService.getAllBusService();

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Bus fetched successfully",
    data: result,
  });
});

const deleteBus = catchAsync(async (req: Request, res: Response) => {
  const result = await busService.deleteBusService(req.params.id);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "Bus deleted successfully",
    data: result,
  });
});

export const busController = {
  addBus,
  deleteBus,
  updateBus,
  getAllBus,
};
