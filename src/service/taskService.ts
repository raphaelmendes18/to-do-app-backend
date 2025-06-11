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

    async updateTask(id: string, task: Task): Promise<Task>{
        const index = parseInt(id);
        if(index >= 0 && index < this.tasks.length){
            this.tasks[index] = task;
            return task;
        }else{
            throw new Error("Task not found");
        }
    }

    async patchTask(id: string, task: Task): Promise<Task>{
        const index = parseInt(id);
        if(index >= 0 && index < this.tasks.length){
            const oldtask = this.tasks[index];
            const newtask = {...oldtask, ...task};
            this.tasks[index] = newtask; 
            return newtask;    
        } else {
            throw new Error("Task not found");
        }
    }

    async insertTask(task: Task): Promise<Task>{
        this.tasks.push(task);
        return task;
    }

}