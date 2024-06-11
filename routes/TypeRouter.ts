import * as express from "express";
const router = express.Router();
import TypeController from "../controllers/TypeController";

router.post("/", TypeController.create);
router.get("/", TypeController.getall);

export default router;
