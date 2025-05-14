import { Task } from "../model/task";

export class TaskService{

    private tasks: Task[] = [];

    async listTasks(): Promise<Task[]>{
        return this.tasks;
    }

    async getTaskById(id: string): Promise<Task>{
        return this.tasks[parseInt(id)];
    }

    async deleteTask(id: string): Promise<Task>{
        const returnTask: Task = await this.getTaskById(id);
        this.tasks.splice(parseInt(id), 1);
        return returnTask;
    }

    // async updateTask(id: string, task: Task): Promise<Task>{
        
    // }

    // async patchTask(id: string, task: Task): Promise<Task>{
    //     return {
    //             name: "testa",
    //             dueDate: "22/04/1993"
    //         }
    // }

    async insertTask(task: Task): Promise<Task>{
        this.tasks.push(task);
        return task;
    }

}