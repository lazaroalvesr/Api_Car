import { FastifyReply, FastifyRequest } from "fastify";
import CreateCarService from "../service/CreateCarService";
import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";

class CreateCarController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const {
      linkImg,
      name,
      model,
      City,
      description,
      Year,
      kmRounds,
      Cambio,
      categoryName,
      brandName,
      Combustivel,
      FinalDaPlaca,
      cor,
      Blindado,
      AceitaTroca,
      Garantia_De_Fabrica,
      IPVA_PAGO,
      Licenciado,
      Price,
      vehicleItems,
      NomeDoVendedor,
      Whatsapp,
    } = req.body as {
      linkImg: string;
      name: string;
      model: string;
      City: string;
      description: string;
      Year: string;
      kmRounds: string;
      Cambio: CambioEnun[];
      categoryName: string;
      brandName: string;
      Combustivel: CombustivelEnun[];
      FinalDaPlaca: string;
      cor: string;
      Blindado: Select[];
      AceitaTroca: Select[];
      Garantia_De_Fabrica: string[];
      IPVA_PAGO: Select[];
      Licenciado: Select[];
      Price: string;
      vehicleItems: string;
      NomeDoVendedor: string;
      Whatsapp: string;
    };

    const create = new CreateCarService();
    const createCar = await create.execute({
      linkImg,
      name,
      model,
      City,
      description,
      Year,
      kmRounds,
      Cambio,
      categoryName,
      brandName,
      Combustivel,
      FinalDaPlaca,
      cor,
      Blindado,
      AceitaTroca,
      Garantia_De_Fabrica,
      IPVA_PAGO,
      Licenciado,
      Price,
      vehicleItems,
      NomeDoVendedor,
      Whatsapp,
    });

    rep.send(createCar);
  }
}

export { CreateCarController };
