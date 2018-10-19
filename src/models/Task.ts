import { Difficulty } from './Difficulty';

export interface Task {
    id: string;
    goalID?: string;
    title: string;
    content: string;
    difficulty?: Difficulty;
    complete: boolean;
}