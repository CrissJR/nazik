import * as express from "express";
const router = express.Router();
import BrandController from "../controllers/BrandController";

router.post("/", BrandController.create);
router.get("/", BrandController.getall);

export default router;
