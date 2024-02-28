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
import { ListCategoryAllController } from "./controller/ListCategoryAllControler";
import { ListBrandAllController } from "./controller/ListBrandAllController";

export const routes = async (
  fastify: FastifyInstance,
  plugins: FastifyPluginOptions
) => {
  fastify.post("/create", async (req: FastifyRequest, rep: FastifyReply) => {
    return new CreateCarController().handle(req, rep);
  });

  fastify.get("/carAll", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ListCarController().handle(req, rep);
  });

  fastify.get(
    "/categoryAll",
    async (req: FastifyRequest, rep: FastifyReply) => {
      return new ListCategoryAllController().handle(req, rep);
    }
  );

  fastify.get(
    "/brandAll",
    async (req: FastifyRequest, rep: FastifyReply) => {
      return new ListBrandAllController().handle(req, rep);
    }
  );

  fastify.get("/unique", async (req: FastifyRequest, rep: FastifyReply) => {
    return new FindUniqueController().handle(req, rep);
  });

  fastify.delete("/delete", async (req: FastifyRequest, rep: FastifyReply) => {
    return new DeleteCarController().handle(req, rep);
  });
};
