import Fastify from 'fastify'
const fastify = Fastify()

fastify.get("/", async ()=>{
    return {
        name: "Hello World"
    }
})

fastify.listen({port: 3000})