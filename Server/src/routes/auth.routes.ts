import express from "express";
import { registerUser, loginUser ,getUserProfile } from "../controllers/User.controller";
import {authMiddleware} from "../Middlewares/authorizationMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile); 

export default router;