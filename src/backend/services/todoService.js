import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GetAllTodos() {
  const todos = await prisma.todo.findMany();
  return { todos };
}

export async function GetTodo(id) {
  const parsedId = parseInt(id);
  const todo = await prisma.todo.findUnique({ where: { id: parsedId } });
  return { todo };
}
export async function CreateNewTodo(newTodoInput) {
  const newTodo = await prisma.todo.create({
    data: { title: newTodoInput.title, description: newTodoInput.description },
  });
  return newTodo;
}

export async function UpdateTodo(idToUpdate, updatedTodo) {
  const parsedId = parseInt(idToUpdate);
  await prisma.todo.update({
    where: { id: parsedId },
    data: {
      title: updatedTodo.title,
      description: updatedTodo.description,
      createdAt: updatedTodo.createdAt,
    },
  });
}

export async function DeleteTodo(id) {
  const parsedId = parseInt(id);
  await prisma.todo.delete({ where: { id: parsedId } });
}
