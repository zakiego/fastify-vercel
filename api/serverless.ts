// https://www.fastify.io/docs/latest/Guides/Serverless/

import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.register(import("../src"));

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
