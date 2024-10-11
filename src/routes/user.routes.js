import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // 1  giving problem

const router = Router();


router.route("/register").post(registerUser) // 1  giving problem
export default router