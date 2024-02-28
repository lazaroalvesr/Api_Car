import { prisma } from "../prisma/prisma";

class ListCategoryAllService {
  async execute() {
    const listAll = await prisma.category.findMany();
    return listAll;
  }
}

export { ListCategoryAllService };
