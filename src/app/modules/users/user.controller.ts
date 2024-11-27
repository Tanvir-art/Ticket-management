import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import sendResponse from "../../utils/sendresponse";
import { userService } from "./user.service";
import { BlacklistModel } from "./user.blacklist";
import jwt from "jsonwebtoken";

const signUpUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.signupUser(req.body);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userService.loginUser(req.body);

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "User logged in successfully",
    token: result.accessToken,
    data: result.user,
  });
});

const logoutUser = catchAsync(async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authorization header missing!");
  }

  const token = authHeader.split(" ")[1];

  // Decode token to get expiry
  const decoded = jwt.decode(token) as jwt.JwtPayload;
  const expiryDate = new Date(decoded.exp! * 1000); // Convert expiry to date

  // Add token to blacklist
  await BlacklistModel.create({
    token,
    expiry: expiryDate,
  });

  sendResponse(res, {
    statuseCode: 200,
    success: true,
    message: "User logged out successfully",
    data: null,
  });
});

export const userController = {
  signUpUser,
  loginUser,
  logoutUser,
};
