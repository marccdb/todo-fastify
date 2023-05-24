import {
  GetAllTodos,
  GetTodo,
  CreateNewTodo,
  UpdateTodo,
  DeleteTodo,
} from "../services/todoService.js";
/**
 @param {FastifyInstance} fastify
 @param {Object} options
  */

export default async function routes(fastify, options) {
  fastify.get("/", async (req, reply) => {
    reply.code(200);
    return GetAllTodos();
  });

  fastify.get("/:id", async (req) => {
    const id = req.params.id;
    reply.code(200);
    return GetTodo(id);
  });

  fastify.post("/", async (req) => {
    const data = JSON.parse(req.body);
    await CreateNewTodo(data);
    reply.code(201);
    return data;
  });

  fastify.put("/:id", async (req) => {
    const id = req.params.id;
    const data = req.body;
    await UpdateTodo(id, data);
    reply.code(201);
    return data;
  });

  fastify.delete("/:id", async (req, reply) => {
    const id = req.params.id;
    await DeleteTodo(id);
    reply.code(200);
    return { msg: "ToDo deleted" };
  });
}
