import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import { userModel } from "../modules/users/user.model";
import { UserRole } from "../modules/users/user.constant";
import { BlacklistModel } from "../modules/users/user.blacklist";

const auth = (...requiredRoles: UserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    // Ensure the Authorization header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError(401, "You are not authorized!"); // 401: Unauthorized
    }

    // Extract the token from the Bearer header
    const token = authHeader.split(" ")[1];

    const isBlacklisted = await BlacklistModel.findOne({ token });
    if (isBlacklisted) {
      throw new AppError(401, "Token is invalid or expired!");
    }

    // Verify the token
    const decoded = jwt.verify(
      token,
      config.jwt_secret as string
    ) as JwtPayload;

    const { role, email } = decoded;

    // Check if the user exists in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new AppError(404, "This user is not found!"); // 404: Not Found
    }

    // Verify if the user's role matches the required roles
    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new AppError(
        403,
        "You are not authorized to access this resource!"
      ); // 403: Forbidden
    }

    // Attach the decoded token to the request object
    req.user = decoded;
    next();
  });
};

export default auth;
