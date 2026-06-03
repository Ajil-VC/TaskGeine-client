import { Priority } from "./enums";

export interface Task {
    title: string,
    estimatedTime: number,
    type: string,
    priority: Priority,
    isCompleted: boolean
}

export interface Day {
    day: number;
    date: string;
    totalEstimatedTime: number;
    tasks: Task[];
}

export interface Plan {
    planTitle: string,
    totalDays: number,
    estimatedHoursPerDay: number,
    days: Day[]
}
