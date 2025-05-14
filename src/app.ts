import express from 'express';
import { Request, Response } from 'express';
import "reflect-metadata";
import taskController from './controller/taskController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', taskController);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({"data": "Hello World."});
});
