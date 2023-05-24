import {
  GetAllTodos,
  GetTodo,
  CreateNewTodo,
  UpdateTodo,
} from "../services/todoService.js";
/**
 @param {FastifyInstance} fastify
 @param {Object} options
  */

export default async function routes(fastify, options) {
  fastify.get("/", async () => {
    return GetAllTodos();
  });

  fastify.get("/:id", async (req) => {
    const id = req.params.id;
    return GetTodo(id);
  });

  fastify.post("/", async (req) => {
    const data = req.body;
    CreateNewTodo(data);
    return data;
  });

  fastify.put("/:id", async (req) => {
    const id = req.params.id;
    const data = req.body;
    UpdateTodo(id, data);
    return data;
  });
}
