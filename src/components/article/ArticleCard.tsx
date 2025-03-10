"use client"
import { FC } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface ArticleCardProps {
    image: string;
    title: string;
    duration: number;
    description: string;
    articleUrl: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ image, title, duration, description, articleUrl }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(articleUrl);
    };

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
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;