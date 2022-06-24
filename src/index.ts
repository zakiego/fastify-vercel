import type { FastifyReply, FastifyRequest } from "fastify";

export default async function routes(fastify, options) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.get("/hi", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hi: "zakiego" };
  });
}
