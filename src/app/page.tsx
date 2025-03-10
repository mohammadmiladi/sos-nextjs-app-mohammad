import { Container } from "@mui/material";
import ArticleList from "@/components/article/ArticleList";
import { FC } from "react";

const fetchArticles = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/articles`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch articles");

  return res.json();
};

const Home: FC = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <Container>
        <h1>مقاله‌ها</h1>
        <ArticleList articles={articles} />
      </Container>
    </div>
  );
}

export default Home;
