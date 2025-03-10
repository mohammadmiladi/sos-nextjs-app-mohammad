"use client";

import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import TodoForm from "@/components/TodoForm";
import TodoCard from "@/components/TodoCard";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  // Fetch Todos
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

  // Add or Update Todo
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

  // Delete Todo
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

  // Toggle Completed
  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));

      await fetch("/api/todos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, completed }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Drag-and-Drop Reordering
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newTodos = [...todos];
    const [movedTodo] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, movedTodo);

    setTodos(newTodos);
  };

  if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />;

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        Todo List
      </Typography>
      <TodoForm todoToEdit={todoToEdit} onSave={handleSave} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoCard
                        {...todo}
                        onEdit={() => setTodoToEdit(todo)}
                        onDelete={() => handleDelete(todo.id)}
                        onToggleComplete={() => handleToggleComplete(todo.id, !todo.completed)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}
