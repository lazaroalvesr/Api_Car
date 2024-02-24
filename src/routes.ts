import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCarController } from "./controller/CreateCarController";
import { ListCarController } from "./controller/ListCarController";
import { DeleteCarController } from "./controller/DeleteCarController";
import { FindUniqueController } from "./controller/FindUniqueController";

export const routes = async (
  fastify: FastifyInstance,
  plugins: FastifyPluginOptions
) => {
  fastify.post("/create", async (req: FastifyRequest, rep: FastifyReply) => {
    return new CreateCarController().handle(req, rep);
  });

  fastify.get("/all", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ListCarController().handle(req, rep);
  });

  fastify.get("/unique", async (req: FastifyRequest, rep: FastifyReply) => {
    return new FindUniqueController().handle(req, rep);
  });

  fastify.delete("/delete", async (req: FastifyRequest, rep: FastifyReply) => {
    return new DeleteCarController().handle(req, rep);
  });
};
