import { prisma } from "../prisma/prisma";

class ListCategoryAllService {
  async execute() {
    const listAll = await prisma.category.findMany({
      include: {
        cars: true,
      },
    });
    return listAll;
  }
}

export { ListCategoryAllService };
