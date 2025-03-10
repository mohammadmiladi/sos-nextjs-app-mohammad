"use client"
import { FC } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface ArticleCardProps {
    id: string;
    image: string;
    title: string;
    duration: number;
    description: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ id, image, title, duration, description }) => {
    const router = useRouter();

    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Duration: {duration} min
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => router.push(`/articles/${id}`)}
                >
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;