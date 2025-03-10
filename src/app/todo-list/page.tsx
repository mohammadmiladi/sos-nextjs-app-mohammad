"use client";

import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import TodoForm from "@/components/TodoForm";
import TodoCard from "@/components/TodoCard";

interface Todo {
    id: string;
    title: string;
}

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await fetch("/api/todos");
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const handleSave = async (title: string, id?: string) => {
        try {
            const res = await fetch("/api/todos", {
                method: id ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(id ? { id, title } : { title }),
            });

            if (!res.ok) throw new Error("Error saving todo");

            const newTodo = await res.json();
            setTodos((prev) =>
                id ? prev.map((todo) => (todo.id === id ? { ...todo, title } : todo)) : [...prev, newTodo]
            );
            setTodoToEdit(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await fetch("/api/todos", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />;

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" textAlign="center" fontWeight="bold">
                Todo List
            </Typography>
            <TodoForm todoToEdit={todoToEdit} onSave={handleSave} />
            {todos.map((todo) => (
                <TodoCard key={todo.id} {...todo} onEdit={() => setTodoToEdit(todo)} onDelete={() => handleDelete(todo.id)} />
            ))}
        </Container>
    );
}
