import express, { Request, Response } from 'express';
import path from 'path';
import todoRoutes from './routes/todo'
import dotenv from 'dotenv';
import cors from 'cors'


dotenv.config();

const server = express();
server.use(cors())

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(todoRoutes)
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);