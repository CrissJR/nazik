import * as express from "express";
const router = express.Router();
import UserController from "../controllers/UserController";
import AuthMiddleWare from "../middleware/AuthMiddleWare";

router.post("/registration", UserController.registration),
  router.post("/login", UserController.login);
router.get("/auth", AuthMiddleWare, UserController.check);

export default router;
