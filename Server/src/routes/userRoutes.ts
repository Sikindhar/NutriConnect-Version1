import express from "express";
import { getUserProfile } from "../controllers/User.controller";
import { authMiddleware } from "../Middlewares/authorizationMiddleware";

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile); 

export default router;
