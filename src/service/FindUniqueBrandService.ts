import { prisma } from "../prisma/prisma";

class FindUniqueBrandService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("id is required");
    }

    const idRequire = await prisma.brand.findUnique({
      where: {
        id,
      },
      include: {
        cars: true,
      },
    });

    if (!idRequire) {
      throw new Error("id no exist");
    }

    await prisma.brand.findUnique({
      where: {
        id: idRequire.id,
      },
    });

    return idRequire;
  }
}

export { FindUniqueBrandService };
