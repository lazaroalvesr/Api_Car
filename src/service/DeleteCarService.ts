import { prisma } from "../prisma/prisma";

interface DeleteProps {
  id: string;
}

class DeleteCarService {
  async execute({ id }: DeleteProps) {
    if (!id) {
      throw new Error("id is required");
    }

    const deleteCar = await prisma.car.findFirst({
      where: {
        id,
      },
    });

    if (!deleteCar) {
      throw new Error("car no exist");
    }

    await prisma.car.delete({
      where: {
        id: deleteCar.id,
      },
    });

    return deleteCar;
  }
}
export { DeleteCarService };
