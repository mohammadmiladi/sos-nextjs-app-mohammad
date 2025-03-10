"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Container, Typography, CircularProgress, Card, CardMedia, CardContent } from "@mui/material";

interface Article {
    id: string;
    image: string;
    title: string;
    duration: number;
    description: string;
}

export default function ArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchArticle = async () => {
            try {
                const res = await fetch(`/api/articles/${id}`);
                if (!res.ok) throw new Error("Failed to fetch article");

                const data = await res.json();
                setArticle(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />;
    if (!article) return <Typography variant="h5" textAlign="center" mt={5}>Article not found</Typography>;

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Card>
                <CardMedia component="img" height="300" image={article.image} alt={article.title} />
                <CardContent>
                    <Typography variant="h4" fontWeight="bold">{article.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        ⏳ {article.duration} min read
                    </Typography>
                    <Typography variant="body1">{article.description}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
