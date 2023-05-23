import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GetAllTodos() {
  const todos = await prisma.todo.findMany();
  return { todos };
}

export async function CreateNewTodo(newTodoInput) {
  const newTodo = await prisma.todo.create({
    data: { title: newTodoInput.title, description: newTodoInput.description },
  });
  return newTodo;
}
