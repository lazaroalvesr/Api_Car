import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCarService } from "../service/DeleteCarService";

class DeleteCarController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const deleteCar = new DeleteCarService();
    const carDelete = await deleteCar.execute({ id });
    rep.send(carDelete);
  }
}

export { DeleteCarController };
