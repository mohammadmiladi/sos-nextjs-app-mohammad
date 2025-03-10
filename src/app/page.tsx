import Header from "@/components/Header";
import { Container } from "@mui/material";
import ArticleList from "@/components/article/ArticleList";

const articlesData = [
  {
    id: "1",
    image: "/images/articles/arctic-fox.webp",
    title: "Article 1",
    duration: 10,
    description: "This is a short description of article 1.",
    articleUrl: "/articles/article-1",
  },
  {
    id: "2",
    image: "/images/articles/elephants.webp",
    title: "Article 2",
    duration: 15,
    description: "This is a short description of article 2.",
    articleUrl: "/articles/article-2",
  },
  {
    id: "3",
    image: "/images/articles/honey-bee.webp",
    title: "Article 3",
    duration: 20,
    description: "This is a short description of article 3.",
    articleUrl: "/articles/article-3",
  },
  {
    id: "4",
    image: "/images/articles/whale.webp",
    title: "Article 4",
    duration: 20,
    description: "This is a short description of article 3.",
    articleUrl: "/articles/article-3",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <h1>مقاله‌ها</h1>
        <ArticleList articles={articlesData} />
      </Container>
    </div>
  );
}
