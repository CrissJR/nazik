import * as express from "express";
const router = express.Router();
import DeviceController from "../controllers/DeviceController";

router.post("/", DeviceController.create);
router.get("/", DeviceController.getall);
router.get("/:id", DeviceController.getone);

export default router;
