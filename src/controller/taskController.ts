import { Request, Response, Router } from 'express';
import { TaskService } from '../service/taskService';

const taskController = Router();

taskController.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await new TaskService().listTasks());
});

taskController.get('/:id', async (req: Request, res: Response) => {
    res.status(200).send(await new TaskService().getTaskById(req.params.id));
});

taskController.post('/', async (req: Request, res: Response) => {
    res.status(200).send(await new TaskService().insertTask(req.body));
});

taskController.patch('/:id', async (req: Request, res: Response) => {
    res.status(200).send(await new TaskService().updateTask(req.params.id, req.body));
});

taskController.delete('/:id', async (req: Request, res: Response) => {
    res.status(200).json(await new TaskService().deleteTask(req.params.id));
});

export default taskController;
