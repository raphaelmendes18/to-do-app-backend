import { Task } from "../model/task";

export class TaskService{

    async listTasks(): Promise<Task[]>{
        return [{
                name: "test",
                dueDate: "22/04/1993"
            }]
    }

    async getTaskById(id: string): Promise<Task>{
        return {
                name: "test",
                dueDate: "22/04/1993"
            }
    }

    async deleteTask(id: string): Promise<Task>{
        return {
                name: "test",
                dueDate: "22/04/1993"
            }
    }

    async updateTask(id: string, task: Task): Promise<Task>{
        return {
                name: "test",
                dueDate: "22/04/1993"
            }
    }

    async insertTask(task: Task): Promise<Task>{
        return {
                name: "test",
                dueDate: "22/04/1993"
            }
    }

}