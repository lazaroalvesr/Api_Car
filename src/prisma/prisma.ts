import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

enum CategoryProps {
  SEDAN = "SEDAN",
  HATCH = "HATCH",
  ELETRICO = "ELETRICO",
  PICKUP = "PICKUP",
  HIBRIDO = "HIBRIDO",
  OFFROAD = "OFFROAD",
}

export default CategoryProps;
