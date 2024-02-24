import fastify from "fastify";
import Cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

const start = async () => {
  await app.register(routes);
  await app.register(Cors);

  try {
    await app.listen({ port: 3333 });
  } catch (e) {
    console.log(e);
  }
};

start();
