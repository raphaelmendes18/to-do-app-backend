import { Request, Response, Router } from 'express';
import { TaskService } from '../service/taskService';

const taskController = Router();

const taskService = new TaskService();

taskController.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await taskService.listTasks());
});

taskController.get('/:id', async (req: Request, res: Response) => {
    res.status(200).send(await taskService.getTaskById(req.params.id));
});

taskController.post('/', async (req: Request, res: Response) => {
    res.status(200).send(await taskService.insertTask(req.body));
});

// taskController.put('/:id', async (req: Request, res: Response) => {
//     // Must update entire task object
//     res.status(200).send(await taskService.updateTask(req.params.id, req.body));
// });

// taskController.patch('/:id', async (req: Request, res: Response) => {
//     // Must update only attributes sent in request
//     res.status(200).send(await taskService.patchTask(req.params.id, req.body));
// });

taskController.delete('/:id', async (req: Request, res: Response) => {
    res.status(200).json(await taskService.deleteTask(req.params.id));
});

export default taskController;
