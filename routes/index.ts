import { Router } from "express";
import AUthRoutes from "./auth.route";
import userRouter from "./user.route";
import parkingSlotOrderRoutes from "./parkingSlot-order.route";
import parkingSlotRoutes from "./parkingSlot.route";
import vehicleRoutes from "./vehicle.route";
import parkingRoutes from "./parking.route";

const router = Router();

// auth routes
router.use(
  "/auth",
  AUthRoutes
  /*
        #swagger.tags = ['Auth']
        #swagger.security = [] 
    */
);
router.use(
  "/user",
  userRouter
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

router.use(
  "/parkingSlot-orders",
  parkingSlotOrderRoutes
  /*
      #swagger.tags = ['ParkingSlot Orders']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

router.use(
  "/parkingSlots",
  parkingSlotRoutes
  /*
      #swagger.tags = ['ParkingSlots']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

router.use(
  "/vehicles",
  vehicleRoutes
  /*
      #swagger.tags = ['Vehicles']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

router.use(
  "/parking",
  parkingRoutes
  /*
      #swagger.tags = ['Parking']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
export default router;
