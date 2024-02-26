import { FastifyReply, FastifyRequest } from "fastify";
import CreateCarService from "../service/CreateCarService";

class CreateCarController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const {
      linkImg,
      name,
      model,
      description,
      kmRounds,
      AceitaTroca,
      Cambio,
      Combustivel,
      cor,
      ownerOfTheProduct,
      vehicleItems,
      Year,
      Price,
      Models,
      Whatsapp,
      categoryName,
      brandName, // Alterado de brandId para brandName
    } = req.body as {
      linkImg: string;
      name: string;
      model: string;
      AceitaTroca: string;
      Cambio: string;
      Combustivel: string;
      cor: string;
      ownerOfTheProduct: string;
      vehicleItems: string;
      description: string;
      kmRounds: string;
      Year: string;
      Price: string
      Models: string;
      Whatsapp: string;
      categoryName: string;
      brandName: string; // Alterado de brandId para brandName
    };

    const create = new CreateCarService();
    const createCar = await create.execute({
      linkImg,
      name,
      model,
      AceitaTroca,
      description,
      Cambio,
      Combustivel,
      cor,
      ownerOfTheProduct,
      vehicleItems,
      kmRounds,
      Year,
      Price,
      Whatsapp,
      categoryName,
      brandName,
    });

    rep.send(createCar);
  }
}

export { CreateCarController };
