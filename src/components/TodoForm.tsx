"use client";

import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

interface TodoFormProps {
    todoToEdit?: { id: string; title: string } | null;
    onSave: (title: string, id?: string) => void;
}

export default function TodoForm({ todoToEdit, onSave }: TodoFormProps) {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (todoToEdit) setTitle(todoToEdit.title);
    }, [todoToEdit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSave(title, todoToEdit?.id);
        setTitle("");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mt: 3 }}>
            <TextField
                label="Todo"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                {todoToEdit ? "Update" : "Add"}
            </Button>
        </Box>
    );
}
