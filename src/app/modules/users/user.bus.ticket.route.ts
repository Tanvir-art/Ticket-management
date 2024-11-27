import express from "express";
// import { busController } from "../buses/bus.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";
import { ticketController } from "../tickets/tickets.controller";

const router = express.Router();

router.post("/purchase", auth(USER_ROLE.user), ticketController.purchaseTicket);
router.get("/", auth(USER_ROLE.user), ticketController.getAllTicket);

export const userBusTicketRoute = router;
