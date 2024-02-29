import { FastifyReply, FastifyRequest } from "fastify";
import { FindUniqueCategoryService } from "../service/FindUniqueCategoryService";

class FindUniqueCategoryController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const categoryFind = new FindUniqueCategoryService();
    const findUniqueCategoryId = await categoryFind.execute({ id });
    rep.send(findUniqueCategoryId);
  }
}

export { FindUniqueCategoryController };