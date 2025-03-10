import { Card, CardContent, Typography, IconButton, Box, Switch } from "@mui/material";
import { Edit, Delete, DragIndicator } from "@mui/icons-material";

interface TodoCardProps {
  id: string;
  title: string;
  completed: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

export default function TodoCard({ id, title, completed, onEdit, onDelete, onToggleComplete }: TodoCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        mb: 2,
        opacity: completed ? 0.6 : 1,
        bgcolor: completed ? "lightgray" : "white",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <DragIndicator sx={{ cursor: "grab", mr: 1 }} />
        <Typography variant="h6" sx={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </Typography>
      </CardContent>
      <Box>
        <Switch checked={completed} onChange={onToggleComplete} color="success" />
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
