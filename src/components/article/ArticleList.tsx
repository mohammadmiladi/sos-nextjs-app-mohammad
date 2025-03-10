"use client"
import { FC } from "react";
import { Box, useMediaQuery } from "@mui/material";
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
    const isMobile = useMediaQuery('(max-width:600px)');
    const flexBasis = isMobile ? "100%" : "calc(25% - 16px)";
    const maxWidth = isMobile ? "100%" : "calc(25% - 16px)";

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
                <Box key={index} sx={{ flexBasis: flexBasis, maxWidth: maxWidth }}>
                    <ArticleCard {...article} />
                </Box>
            ))}
        </Box>
    );
};

export default ArticleList;
