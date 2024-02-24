import { prisma } from "../prisma/prisma";

class ListCarService {
  async execute() {
    const listCars = await prisma.car.findMany();
    return listCars;
  }
}

export { ListCarService };
