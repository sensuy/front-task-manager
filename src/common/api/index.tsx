import type { Task } from "../../@types/task.declarations";

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await fetch(`${import.meta.env.VITE_API_TASK_MANAGER}/api/tasks`);
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    return response.json();
};

export const addTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await fetch(`${import.meta.env.VITE_API_TASK_MANAGER}/api/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) {
        throw new Error("Failed to add task");
    }
    return response.json();
};
