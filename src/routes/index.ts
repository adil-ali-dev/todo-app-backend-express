import { Router } from "express";
import todoRoutes from "./todo.routes";

const router = Router();

// Import module routes
router.use("/tasks", todoRoutes);

export default router;
