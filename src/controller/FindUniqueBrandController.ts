import { FastifyReply, FastifyRequest } from "fastify";
import { FindUniqueBrandService } from "../service/FindUniqueBrandService";

class FindUniqueBrandController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const brandId = new FindUniqueBrandService();
    const brandIdRequired = await brandId.execute({ id });
    rep.send(brandIdRequired);
  }
}

export { FindUniqueBrandController };
