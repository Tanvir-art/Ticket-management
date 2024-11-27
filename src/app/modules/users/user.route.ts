import express from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post("/register", userController.signUpUser);

router.post("/login", userController.loginUser);

router.post(
  "/logout",
  auth(USER_ROLE.admin, USER_ROLE.user),
  userController.logoutUser
);

export const userRoute = router;
