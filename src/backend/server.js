import Fastify from 'fastify'
import routes from "./controller/todoController.js"
/**
 @type {import('fastify').FastifyInstance}
 */
const fastify = Fastify()


fastify.register(routes)


fastify.listen({port: 3000})