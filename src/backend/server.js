import Fastify from "fastify";
import routes from "./controller/todoController.js";
/**
 @type {import('fastify').FastifyInstance}
 */
const fastify = Fastify({ logger: true });
const PORT = "3000";

fastify.register(routes);

fastify.listen({ port: PORT }, () => {
  fastify.log.info(`server is listening on port ${PORT}`);
});
