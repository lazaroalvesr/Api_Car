import { prisma } from "../prisma/prisma";

class ListBrandAllService {
  async execute() {
    const listBrandAll = await prisma.brand.findMany({
      include: {
        cars: true,
      },
    });
    return listBrandAll;
  }
}

export { ListBrandAllService };
