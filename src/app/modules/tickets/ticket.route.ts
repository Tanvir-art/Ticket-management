import express from "express";
import validateRequest from "../../middleware/valdateRequest";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../users/user.constant";
import { ticketValidation } from "./ticket.validation";
import { ticketController } from "./tickets.controller";

const router = express.Router();
router.post(
  "/ticket",
  auth(USER_ROLE.admin),
  validateRequest(ticketValidation.ticketValidationAddSchema),
  ticketController.addTicket
);

router.put(
  "/ticket/:id",
  auth(USER_ROLE.admin),
  validateRequest(ticketValidation.updateTicketValidationSchema),
  ticketController.updateTicket
);

router.delete(
  "/ticket/:id",
  auth(USER_ROLE.admin),
  ticketController.deleteTicket
);

export const ticketAdminRoute = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFudmlyIEhhc2FuIiwiZW1haWwiOiJ0YW52aXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcHMueTZ2OG43WGNTRGpKdGNFOUMvTzFTelYzNmxYTW9VdWx6QVpMUVNZeDh1R3FBa0Z0NUsiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzI2ODQ3NDgsImV4cCI6MTczMjg1NzU0OH0.at9RruQkStuy49h3mZcvdMfbstpmpoWVDssT9LQx_zE
