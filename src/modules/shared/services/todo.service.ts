import { ITodo } from "../interfaces";
import prisma from "../driver/prisma.client";

export class TodoService {

    async create(data: ITodo) {
        const { title, color, status } = data;

        const newTask = await prisma.todo.create({
            data: {
                title, color, status
            },
        });

        return newTask;
    }

    async get(id: number) {
        const todo = await prisma.todo.findFirst({
            where: { id: Number(id) },
        });

        if (!todo) {
            return null;
        }

        return todo;
    }

    async getAll(): Promise<ITodo[]> {
        const todos = await prisma.todo.findMany();
        return todos;
    }


    async update(id: number, body: any) {
        const { title, color, status } = body;
        const todo = await prisma.todo.findFirst({
            where: { id: Number(id) },
        });

        if (!todo) {
            return null;
        }

        const updatedTask = await prisma.todo.update({
            where: { id: Number(id) },
            data: { title, color, status },
        });

        return updatedTask;
    }

    async delete(id: number) {
        const todo = await prisma.todo.findFirst({
            where: { id: Number(id) },
        });

        if (!todo) {
            return null;
        }

        const deletedTask = await prisma.todo.delete({
            where: { id: Number(id) },
        });
        return deletedTask;
    }
}