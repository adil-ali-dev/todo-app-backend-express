
import { Router, Request, Response } from "express";
import { TodoController } from "../modules/controllers";
import { TodoService } from "../modules/shared/services";
import { ITodo, ResponseFormat } from "../modules/shared/interfaces";
import { MESSAGES } from "../modules/shared/constants/constants";


const todoRoutes = Router();

const todoService = new TodoService();
const controller = new TodoController(todoService);

todoRoutes.get("/", async (req: Request, res: Response) => {
    const data = await controller.getAllTasks();

    res.json(data);
});

todoRoutes.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const numberId = parseInt(id, 10)
    const data = await controller.getTask(numberId);
    res.json(data);
});

todoRoutes.post("/", async (req: Request, res: Response) => {
    const data = await controller.createTask(req.body);
    res.json(data);
});

todoRoutes.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const numberId = parseInt(id, 10)
    const { title, color, status } = req.body;
    const data = await controller.updateTask(numberId, { title, color, status });

    res.json(data);
});

todoRoutes.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const numberId = parseInt(id, 10)
    const data = await controller.deleteTask(numberId)
    res.json(data);
});

export default todoRoutes;
