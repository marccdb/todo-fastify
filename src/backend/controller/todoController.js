/**
 @param {FastifyInstance} fastify
 @param {Object} options
  */

export default async function routes(fastify, options){

fastify.get("/", async (req, reply)=>{
    return {
        route: "/"
    }
})

fastify.post("/", (req, reply)=>{
    const data = req.body
    return { msg: "Received message"}
}) 


}
