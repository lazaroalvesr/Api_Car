import { prisma } from "../prisma/prisma";

class ListBrandAllService {
  async execute() {
    const listBrandAll = await prisma.brand.findMany();
    return listBrandAll;
  }
}

export { ListBrandAllService };
