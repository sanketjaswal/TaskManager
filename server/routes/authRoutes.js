import express from "express";
import { signup } from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);

// router.post("/login", login);

// router.post("/logout", logout);

export default authRoutes;
