import { FastifyReply, FastifyRequest } from "fastify";
import { ListCategoryAllService } from "../service/ListCategoryAllService";

class ListCategoryAllController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const allCategory = new ListCategoryAllService();
    const listAll = await allCategory.execute();
    rep.send(listAll);
  }
}


export {ListCategoryAllController}