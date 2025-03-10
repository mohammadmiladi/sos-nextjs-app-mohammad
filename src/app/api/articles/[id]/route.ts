import { NextResponse } from "next/server";

const articlesData = [
  {
    id: "1",
    image: "/images/articles/arctic-fox.webp",
    title: "Article 1",
    duration: 10,
    description: "This is a detailed article about arctic foxes...",
  },
  {
    id: "2",
    image: "/images/articles/elephants.webp",
    title: "Article 2",
    duration: 15,
    description: "This is a detailed article about elephants...",
  },
  {
    id: "3",
    image: "/images/articles/honey-bee.webp",
    title: "Article 3",
    duration: 20,
    description: "This is a detailed article about honey bees...",
  },
  {
    id: "4",
    image: "/images/articles/whale.webp",
    title: "Article 4",
    duration: 20,
    description: "This is a detailed article about whales...",
  },
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const article = articlesData.find((art) => art.id === id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}
