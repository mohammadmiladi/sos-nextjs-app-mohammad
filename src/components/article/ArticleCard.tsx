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

const cardStyles = {
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid #0F5098",
    position: "relative",
    height: "366px",
    width: "100%",
    maxWidth: "348px"
}

const ArticleCard: FC<ArticleCardProps> = ({ id, image, title, duration, description }) => {
    const router = useRouter();

    return (
        <Card sx={cardStyles}>
            <CardMedia sx={{ borderRadius: "16px" }} component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Duration: {duration} min
                </Typography>
                <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ position: "absolute", bottom: "16px", left: "16px" }}
                    onClick={() => router.push(`/articles/${id}`)}
                >
                    ادامه
                </Button>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;