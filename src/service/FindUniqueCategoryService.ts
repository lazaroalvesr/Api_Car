import { prisma } from "../prisma/prisma";

class FindUniqueCategoryService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("id is required");
    }

    const findId = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!findId) {
      throw new Error("id no exists");
    }

    await prisma.category.findUnique({
      where: {
        id: findId.id,
      },
    });

    return findId;
  }
}

export { FindUniqueCategoryService };
