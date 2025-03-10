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
                justifyContent: "center",
                marginTop: 3,
            }}
        >
            {articles.map((article, index) => (
                <Box key={index} sx={{ flexBasis: "calc(25% - 16px)", maxWidth: "calc(25% - 16px)" }}>
                    <ArticleCard {...article} />
                </Box>
            ))}
        </Box>
    );
};

export default ArticleList;
