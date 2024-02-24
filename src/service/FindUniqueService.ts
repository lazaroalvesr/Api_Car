import { prisma } from "../prisma/prisma";

class FindUniqueService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("id is required");
    }

    const FindId = await prisma.car.findUnique({
      where: {
        id,
      },
    });

    if (!FindId) {
      throw new Error("id no exists");
    }

    await prisma.car.findUnique({
      where: {
        id: FindId.id,
      },
    });

    return FindId;
  }
}

export { FindUniqueService };
