import type React from "react";
import { Container, FormWrapper, TaskListWrapper } from "./styles";
import { use, useEffect, useState } from "react";
import type { Task } from "../@types/task.declarations";
import { addTask, fetchTasks } from "../common/api";

export const TaskPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const Tasks = () => {
        return (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        );
    };

    const AddTaskForm = () => {
        const [title, setTitle] = useState("");

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!title) return;

            const newTask = await addTask({ title, completed: false });
            setTasks((prev) => [...prev, newTask]);
            setTitle("");
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const tasks = await fetchTasks();
            setTasks(tasks);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <FormWrapper>
                <AddTaskForm />
            </FormWrapper>
            <TaskListWrapper>
                <Tasks />
            </TaskListWrapper>
        </Container>
    )
}