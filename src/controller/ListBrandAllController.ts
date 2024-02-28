import { FastifyReply, FastifyRequest } from "fastify";
import { ListBrandAllService } from "../service/ListBrandAllService";

class ListBrandAllController{
  async handle(req: FastifyRequest, rep: FastifyReply){
    const brandAll = new ListBrandAllService()
    const listAllBrand = await brandAll.execute()
    rep.send(listAllBrand)
  }
}

export { ListBrandAllController}