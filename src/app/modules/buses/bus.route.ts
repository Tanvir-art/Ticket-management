import express from "express";
import { busController } from "./bus.controller";
import validateRequest from "../../middleware/valdateRequest";
import { busValidation } from "./bus.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../users/user.constant";

const router = express.Router();
router.post(
  "/bus",
  auth(USER_ROLE.admin),
  validateRequest(busValidation.busAddValidation),
  busController.addBus
);
router.put(
  "/bus/:id",
  auth(USER_ROLE.admin),
  validateRequest(busValidation.busUpdateValidation),
  busController.updateBus
);
router.delete("/bus/:id", auth(USER_ROLE.admin), busController.deleteBus);

export const busRoute = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFudmlyIEhhc2FuIiwiZW1haWwiOiJ0YW52aXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcHMueTZ2OG43WGNTRGpKdGNFOUMvTzFTelYzNmxYTW9VdWx6QVpMUVNZeDh1R3FBa0Z0NUsiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzI2ODQ3NDgsImV4cCI6MTczMjg1NzU0OH0.at9RruQkStuy49h3mZcvdMfbstpmpoWVDssT9LQx_zE
