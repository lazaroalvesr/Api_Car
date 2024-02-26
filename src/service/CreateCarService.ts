import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";
import { prisma } from "../prisma/prisma";

const categoryMap: Record<string, string> = {
  Picape: "d95ae46b-9782-4377-83a8-6ce8ed0f8329",
  Sedan: "870b5bc5-1f19-4313-bf2f-9efb76b861a4",
  SUV: "0a719577-0abe-431b-87e0-1292c190c414",
  Eletrico: "9d4e9069-546a-4435-906a-52b49a73ac58",
  Hibrido: "c6a29d70-3d98-477a-9d8a-4b26ac5c434e",
  UtilitarioEsportivo: "cb669dab-1f44-4415-8c0d-002d1b93959d",
  Hatchback: "3a907d2f-9428-4c57-9007-f5f37c3a53c7",
  Van_Utilitario: "322c6089-3b1f-480c-af01-5da4a3e53a37",
};

const brandMap: Record<string, string> = {
  TOYOTA: "da22d67d-bc89-4c6e-9ba3-b87d1cbfe5ad",
  HONDA: "60ed6c50-a593-47a9-8036-7722c7abb132",
  Volkswagen: "c4d9fb36-65a2-4c19-aa52-dd3130d6bee7",
  HYUNDAI: "4a9fc17c-1aa3-457b-9d1b-d3518c68233f",
  FIAT: "54ce102a-0c0f-401f-8f92-e6229064b77a",
  CAOA_Chery: "51293c9e-e0b8-43b2-be02-4c10224f90a2",
  BYD: "10aaf76d-c69a-40ce-9445-48d6c74682f0",
  BMW: "20adb251-d5dc-45e2-82cb-018e411febce",
  RENAULT: "595ba946-33c2-41d2-b26b-2e146df68c4e",
  JEEP: "0d163608-91a7-434d-8b5f-151b35eb1f05",
  RAM: "d704b4cc-a866-45d9-b4af-bd53f594f861",
  NISSAN: "0c19cbae-8d47-455e-8f1f-68fe5e014c25",
  PEUGEOT: "2aac9de5-bc6e-4883-a351-e5de2236cf09",
  CHEVROLET: "e6f2a86b-2259-4c54-b5fe-0b087a54c29b",
  JAC_Motors: "41907f58-f5e0-4bd2-963c-e125bbe734be",
  LANDROVER: "482e39bc-a382-463a-a04e-c4e9d3612f05",
  MERCEDES: "afc48adb-8cbf-4f79-ae2e-b1795ba70f76",
  MITSUBISHI: "d3eb33f2-a5de-4c9b-8a7f-9ab2b3563d8e",
  VOLVO: "74b8ed83-f0b3-4da3-b37a-5e66d2cb0412",
  ROLLSROYCE: "21fe25ae-3e9a-4b36-b430-3fff14174fb0",
  SUBARU: "2999b21a-507d-4c29-bf07-69d6198c1564",
  PORSCHE: "e08fbf72-83b0-4b2f-9e10-49c31a2b1c86",
  SUZUKI: "4745cc6d-02e8-4826-85f4-f978a8808807",
  MERCEDESAMG: "d859f6f6-587e-4f9a-989b-8d6e3f82a29f",
  LEXUS: "42b34ae8-a2bd-4928-906d-87142c14d8a5",
  KIA: "76812811-2535-4dc6-b9fc-fe7dd4372cd2",
  MASERATI: "19110f41-0d56-439f-a8d5-85b5412bd903",
  MINI: "8a6e2443-3cd6-4675-a02c-fb68726c9114",
  MCLAREN: "417a464e-f34f-466f-a217-0440ec32f3aa",
  JAGUAR: "5729b6c7-cd0a-4da8-8771-a5e6b889bb56",
  HAVAL: "c475af8e-b6ee-486a-a338-0cba93773ab0",
  AUDI: "9412b955-ce23-4793-9b47-a4c780bbb02a",
  CITROEN: "b73b4252-fff8-4ef1-a87a-c293cfd7f25c",
  FORD: "33f56d12-5ec2-420f-8f94-058099e556cc",
  ASTONMARTIN: "0bd033b3-270c-46fa-b0cf-f088216c087a",
  Tesla: ""
};

const getCategoryByName = async (categoryName: string) => {
  const categoryId = categoryMap[categoryName];

  if (!categoryId) {
    throw new Error(`Category '${categoryName}' not found in categoryMap`);
  }

  const category = await prisma.category.findFirst({
    where: { id: categoryId },
  });

  if (!category) {
    throw new Error(`Category '${categoryName}' not found`);
  }

  return category;
};

const getBrandByName = async (brandName: string) => {
  const brandId = brandMap[brandName];

  if (!brandId) {
    throw new Error(`Brand '${brandName}' not found in brandMap`);
  }

  const brand = await prisma.brand.findFirst({
    where: { id: brandId },
  });

  if (!brand) {
    throw new Error(`Brand '${brandName}' not found`);
  }

  return brand;
};

interface CreateCarProps {
  linkImg: string;
  name: string;
  model: string;
  City: string;
  description: string;
  Year: string;
  kmRounds: string;
  Cambio: CambioEnun[];
  categoryName: string;
  brandName: string;
  Combustivel: CombustivelEnun[];
  FinalDaPlaca: string;
  cor: string;
  AceitaTroca: Select[];
  Garantia_De_Fabrica: string[];
  Price: string;
  vehicleItems: string;
  NomeDoVendedor: string;
  Whatsapp: string;
}

class CreateCarService {
  async execute({
    linkImg,
    name,
    model,
    City,
    description,
    Year,
    kmRounds,
    Cambio,
    categoryName,
    brandName,
    Combustivel,
    FinalDaPlaca,
    cor,
    AceitaTroca,
    Garantia_De_Fabrica,
    Price,
    vehicleItems,
    NomeDoVendedor,
    Whatsapp,
  }: CreateCarProps) {
    try {
      const category = await getCategoryByName(categoryName);

      const brand = await getBrandByName(brandName);

      const createCar = await prisma.car.create({
        data: {
          linkImg,
          name,
          model,
          description,
          cor,
          vehicleItems,
          Price,
          Cambio,
          Garantia_De_Fabrica,
          Combustivel,
          kmRounds,
          Year,
          City,
          FinalDaPlaca,
          AceitaTroca,
          NomeDoVendedor,
          Whatsapp,
          category: { connect: { id: category.id } },
          brand: { connect: { id: brand.id } },
        },
      });

      return createCar;
    } catch (error) {
      console.error("Error creating car:", error);
      throw error;
    }
  }
}

export default CreateCarService;
