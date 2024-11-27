import express from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";
import { busController } from "../buses/bus.controller";

const router = express.Router();

router.get("/", auth(USER_ROLE.user), busController.getAllBus);

export const userAllBus = router;
