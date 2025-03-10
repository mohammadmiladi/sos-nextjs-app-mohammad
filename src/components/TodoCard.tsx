import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

interface TodoCardProps {
    id: string;
    title: string;
    onEdit: () => void;
    onDelete: () => void;
}

export default function TodoCard({ title, onEdit, onDelete }: TodoCardProps) {
    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
            </CardContent>
            <Box>
                <IconButton onClick={onEdit} color="primary">
                    <Edit />
                </IconButton>
                <IconButton onClick={onDelete} color="error">
                    <Delete />
                </IconButton>
            </Box>
        </Card>
    );
}
