import { Router, Request, Response } from "express";
import { addTask, deleteTask, getSpecificTask, getTasks, updateTask } from "../services/taskServices";

export const appTest = (req: Request, res: Response) => {
    res.send("Test okay");
}

export const getAlltasksController = (req: Request, res: Response) => {
    
    let tasks = getTasks();
    // console.log(tasks);
    res.json(tasks);
    // console.log("here");
    
    ;
}
export const getAllSpecificTasksController = (req: Request, res: Response) => {
    let { taskID } = req.params;
    let parsedID = parseInt(taskID);
    let task = getSpecificTask(parsedID);
    res.json(task);
};

export const deletetasksController = (req: Request, res: Response) => {
  let { taskID } = req.params;
  let parsedID = parseInt(taskID);

  let result = deleteTask(parsedID);

  if (result !== null) {
    res.send(`Task on index: ${result} deleted`);
  } else {
    res.send("Task not found");
  }
};

export const addTaskController = (req: Request, res: Response) => {
  let new_task = req.body;
  let id = Date.now();
  new_task.id = id;

  addTask(new_task);
  res.json({
    id,
    sucess: true,
  });
};

export const updateTaskController = (req: Request, res: Response) => {
  let { taskID } = req.params;
  let parsedID = parseInt(taskID);
  let updatedTask = req.body;

  let result = updateTask(parsedID, updatedTask);
  if (result) {
    return res.json({
      id: parsedID,
      success: true,
    });
  }
  return res.json({
    success: false,
  });
};