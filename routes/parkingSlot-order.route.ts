import express from "express";
import { ParkingSlotOrderController } from "../controllers/parkingSlot-order.controller";
import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", checkAdmin, ParkingSlotOrderController.getParkingSlotOrders);

router.get(
  "/:id",
  checkLoggedIn,
  ParkingSlotOrderController.getParkingSlotOrderById
);

router.post(
  "/",
  checkLoggedIn,
  ParkingSlotOrderController.createParkingSlotOrder
);

router.patch(
  "/:id/status",
  checkAdmin,
  ParkingSlotOrderController.updateParkingSlotOrderStatus
);

// Get parkingSlot orders by user
router.get(
  "/user/:userId",
  checkLoggedIn,
  ParkingSlotOrderController.getParkingSlotOrdersByParkingSlotCustomerId
);

export default router;
