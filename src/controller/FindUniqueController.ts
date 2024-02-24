import { FastifyReply, FastifyRequest } from "fastify";
import { FindUniqueService } from "../service/FindUniqueService";

class FindUniqueController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const FindId = new FindUniqueService();
    const FindUniqueId = await FindId.execute({ id });
    rep.send(FindUniqueId);
  }
}

export { FindUniqueController };
