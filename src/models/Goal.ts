import { Task } from './Task';

export interface Goal {
    id: string;
    title: string;
    description: string;
    tasks: Task[];
}