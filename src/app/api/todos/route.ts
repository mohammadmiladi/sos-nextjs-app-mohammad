import { NextResponse } from "next/server";

let todos = [
  { id: "1", title: "Buy groceries", completed: false },
  { id: "2", title: "Read a book", completed: true },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const newTodo = { id: Date.now().toString(), title, completed: false };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, title, completed } = await req.json();
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, title, completed } : todo
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ success: true });
}
