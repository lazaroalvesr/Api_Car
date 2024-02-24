import { FastifyReply, FastifyRequest } from "fastify";
import { ListCarService } from "../service/ListCarService";

class ListCarController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const list = new ListCarService();
    const listCar = await list.execute();
    rep.send(listCar);
  }
}

export { ListCarController };
