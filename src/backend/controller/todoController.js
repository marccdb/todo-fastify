import { GetAllTodos, CreateNewTodo } from "../services/todoService.js";
/**
 @param {FastifyInstance} fastify
 @param {Object} options
  */

export default async function routes(fastify, options) {
  fastify.get("/", async (req, reply) => {
    return GetAllTodos();
  });

  fastify.post("/", async (req, reply) => {
    const data = req.body;
    CreateNewTodo(data);
  });
}
