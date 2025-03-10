import { NextResponse } from "next/server";

const articlesData = [
  {
    id: "1",
    image: "/images/articles/arctic-fox.webp",
    title: "راهنمای دریافت معرفی‌نامه",
    duration: 10,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...",
  },
  {
    id: "2",
    image: "/images/articles/elephants.webp",
    title: "راهنمای دریافت معرفی‌نامه",
    duration: 10,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...",
  },
  {
    id: "3",
    image: "/images/articles/honey-bee.webp",
    title: "راهنمای دریافت معرفی‌نامه",
    duration: 10,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...",
  },
  {
    id: "4",
    image: "/images/articles/whale.webp",
    title: "راهنمای دریافت معرفی‌نامه",
    duration: 10,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...",
  },
];

export async function GET() {
  return NextResponse.json(articlesData);
}
