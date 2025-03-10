"use client"
import { FC } from "react";
import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";

interface Article {
    id: string;
    image: string;
    title: string;
    duration: number;
    description: string;
    articleUrl: string;
}

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "start",
                marginTop: 3,
            }}
        >
            {articles.map((article, index) => (
                <Box key={index} >
                    <ArticleCard {...article} />
                </Box>
            ))}
        </Box>
    );
};

export default ArticleList;
