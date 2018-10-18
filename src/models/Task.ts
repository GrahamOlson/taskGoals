import { Difficulty } from './Difficulty';

export interface Task {
    title: string;
    content: string;
    difficulty?: Difficulty;
    complete: boolean;
}