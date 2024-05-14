import express from "express";

import { login } from "@/controllers/users";

const router = express.Router();

// public routes
router.route("/login").post(login);
export default router;
