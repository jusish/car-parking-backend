import { Router } from "express";
import { ParkingController } from "../controllers/parking.controller";
import { checkLoggedIn, checkAdmin } from "../middleware/auth.middleware";

const router = Router();

router.post("/", checkLoggedIn, checkAdmin, ParkingController.createParking);
router.get("/", checkLoggedIn, ParkingController.getParkings);
router.get("/:id", checkLoggedIn, ParkingController.getParkingById);
router.put(
  "/:id",
  checkLoggedIn,
  checkAdmin,
  ParkingController.updateParking
);
router.delete(
  "/:id",
  checkLoggedIn,
  checkAdmin,
  ParkingController.deleteParking
);

export default router;
