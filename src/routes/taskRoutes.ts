import { Router, Request, Response } from "express";
import {
  addTaskController,
  appTest,
  deletetasksController,
  getAllSpecificTasksController,
  getAlltasksController,
  updateTaskController,
} from "../controllers/taskControllers";

const router: Router = Router();

router.get("/", appTest);

router.get("/tasks", getAlltasksController);

router.get("/tasks/:taskID", getAllSpecificTasksController);

router.delete("/tasks/:taskID", deletetasksController);

router.post("/tasks", addTaskController);

router.put("/tasks/:taskID", updateTaskController);

export default router;
