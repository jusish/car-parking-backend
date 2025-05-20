import express from "express";
import { ParkingSlotController } from "../controllers/parkingSlot.controller";
import { checkLoggedIn } from "../middleware/auth.middleware";

const router = express.Router();
// Get all parkingSlots
router.get("/", checkLoggedIn, ParkingSlotController.getParkingSlots);
// Get parkingSlot by ID
router.get("/:id", checkLoggedIn, ParkingSlotController.getParkingSlotById);
// Create new parkingSlot
router.post("/", checkLoggedIn, ParkingSlotController.createParkingSlot);
//create many parkingSlots
router.post(
  "/many",
  checkLoggedIn,
  ParkingSlotController.createManyParkingSlots
);
// Update parkingSlot
router.patch("/:id", checkLoggedIn, ParkingSlotController.updateParkingSlot);
// Delete parkingSlot
router.delete("/:id", checkLoggedIn, ParkingSlotController.deleteParkingSlot);

export default router;
