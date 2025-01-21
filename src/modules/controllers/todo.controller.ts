import { ResponseFormat, ITodo } from "../shared/interfaces";
import { TodoService } from "../shared/services";
import { ERRORS, MESSAGES } from "../shared/constants/constants";

export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    async getAllTasks(): Promise<ResponseFormat<ITodo[]>> {
        try {
            const tasks = await this.todoService.getAll();

            return {
                statusCode: 200,
                wasSuccess: true,
                message: MESSAGES.QUERY_SUCCESSFULL,
                response: tasks,
            };
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return {
                statusCode: 500,
                wasSuccess: false,
                message: ERRORS.INTERNAL_SERVER_ERROR,
                response: [],
            };
        }
    }

    async getTask(id: number): Promise<ResponseFormat<ITodo | null>> {
        try {
            const task = await this.todoService.get(id);

            if (!task) {
                return {
                    statusCode: 404,
                    wasSuccess: false,
                    message: ERRORS.TASK_NOT_FOUND,
                    response: null,
                };
            }

            return {
                statusCode: 200,
                wasSuccess: true,
                message: MESSAGES.QUERY_SUCCESSFULL,
                response: task,
            };
        } catch (error) {
            console.error("Error fetching task:", error);
            return {
                statusCode: 500,
                wasSuccess: false,
                message: ERRORS.INTERNAL_SERVER_ERROR,
                response: null,
            };
        }
    }

    async createTask(body: ITodo): Promise<ResponseFormat<ITodo | null>> {
        try {

            if (!body.title || !body.color || typeof body.status !== 'boolean') {
                return {
                    statusCode: 400,
                    wasSuccess: false,
                    message: 'Invalid body data. Ensure title, color, and status are provided.',
                    response: null,
                };
            }

            const task = await this.todoService.create(body);


            return {
                statusCode: 201,
                wasSuccess: true,
                message: MESSAGES.TASK_CREATED_SUCCESSFULLY,
                response: task,
            };
        } catch (error) {
            return {
                statusCode: 500,
                wasSuccess: false,
                message: ERRORS.INTERNAL_SERVER_ERROR,
                response: null,
            };
        }
    }

    async updateTask(id: number, body: ITodo): Promise<ResponseFormat<ITodo | null>> {
        try {
            const task = await this.todoService.update(id, body);

            if (!task) {
                return {
                    statusCode: 404,
                    wasSuccess: false,
                    message: ERRORS.TASK_NOT_FOUND,
                    response: null,
                };
            }

            return {
                statusCode: 200,
                wasSuccess: true,
                message: MESSAGES.TASK_UPDATED_SUCCESSFULLY,
                response: task,
            };
        } catch (error) {
            console.error("Error updating task:", error);
            return {
                statusCode: 500,
                wasSuccess: false,
                message: ERRORS.INTERNAL_SERVER_ERROR,
                response: null,
            };
        }
    }

    async deleteTask(id: number): Promise<ResponseFormat<ITodo | null>> {
        try {
            const task = await this.todoService.delete(id);
            if (!task) {
                return {
                    statusCode: 404,
                    wasSuccess: false,
                    message: ERRORS.TASK_NOT_FOUND,
                    response: null,
                };
            }

            return {
                statusCode: 200,
                wasSuccess: true,
                message: MESSAGES.TASK_DELETED_SUCCESSFULLY,
                response: task,
            };
        } catch (error) {
            console.error("Error deleting task:", error);
            return {
                statusCode: 500,
                wasSuccess: false,
                message: ERRORS.INTERNAL_SERVER_ERROR,
                response: null,
            };
        }
    }

}
