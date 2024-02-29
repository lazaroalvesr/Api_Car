import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";
import { prisma } from "../prisma/prisma";

const categoryMap: Record<string, string> = {
  Picape: "79fe328d-0624-43f0-a375-fe15d160ab16",
  Sedan: "87c95a1b-2f82-4624-88fd-ba0ac88b6fac",
  SUV: "b833940c-7a6d-49b6-a853-40b78ca01360",
  Eletrico: "0f1b0279-d66e-4dbb-b5c2-ee38773cdc4c",
  Hibrido: "546cd1b7-c8ac-4425-9fe9-dbd445d0032b",
  UtilitarioEsportivo: "4b23c106-0824-4a1c-be0a-ac36e7487666",
  Hatchback: "b1bda791-6d9c-4c36-b0a8-403c56884976",
  Van_Utilitario: "f573d62c-7f88-4222-b963-caf62223fcb0",
};

const brandMap: Record<string, string> = {
  TOYOTA: "4b9f7fd4-8cbd-4985-9bf5-a809bf8ecc17",
  HONDA: "ac75a8a7-947b-4a75-ab92-c2c8883657f1",
  Volkswagen: "9ffd3e8a-8870-46af-863f-331c9ecf6478",
  HYUNDAI: "b5fa5cdb-3bf8-43ab-b4c8-42db1ad7b900",
  Tesla: "943b3556-a398-40c4-b903-0bc843cb2e96",
  FIAT: "d3522247-d2f6-4c4f-ac9f-a8c81392d8ba",
  CAOA_Chery: "8255eaa5-4e8f-4502-8a27-ca25778e9f3c",
  BYD: "0fb8cbd1-ce15-4b60-867f-6def73c842ce",
  BMW: "d5a184ac-ed39-420d-aa06-9ee28bef0ea7",
  RENAULT: "9da572ed-8945-4614-aa7e-17aa98e1ce32",
  JEEP: "d10d8951-d9eb-423f-b2f6-574793b8dc26",
  RAM: "8b5e348b-a1df-4549-bf41-f7b4cbe30dcf",
  NISSAN: "ffb003f5-1455-488b-a662-1253350ca406",
  PEUGEOT: "140dffd1-6f9f-4c69-9793-f07012e3ddd6",
  CHEVROLET: "c105e908-d42d-40fb-bd08-0d75de92d5f1",
  JAC_Motors: "28b02ed0-eb25-44b7-9098-25c2d7ffe784",
  LANDROVER: "8ac1b8e6-66da-43e8-bf04-af64f8c8d282",
  MERCEDES: "97b7e356-9c14-4647-8cd0-9996f3fd98a5",
  VOLVO: "0a1f79a2-8ba5-4e43-8670-97b17330bedf",
  Mitsubishi: "33d6ee2a-a842-4e66-94fd-fa728dce3e67",
  ROLLSROYCE: "12d2ad5c-501a-4450-9080-ccd7ed194816",
  SUBARU: "0a5162f7-4f2d-41ec-8abb-48b2fbd629db",
  PORSCHE: "fe9aa269-b741-4779-9fbb-7250262a734a",
  SUZUKI: "7dcae018-0fb0-42c2-a73f-c4ac650ac2b7",
  MERCEDES_AMG: "68f4ee9a-d7ee-4867-a1cd-8078961b3bd8",
  LEXUS: "5f1ae594-5ee3-444c-9177-b1c32515dad1",
  KIA: "5b1c4f81-857b-4f83-853c-0164fc9baee4",
  MASERATI: "30dded94-ba10-4007-8caf-1ddbef081926",
  MINI_COOPER: "2741deaf-33d7-456c-a217-5f2252e0564a",
  MCLAREN: "258cf7cc-1e99-44fe-a339-8671d27111d4",
  JAGUAR: "45b212af-9a52-426b-b5f1-0c09a9324851",
  HAVAL: "1d8de19b-36eb-4598-812d-f19fae5935b6",
  AUDI: "1e92fd70-5977-46a6-a93c-d5f396f2d371",
  CITROEN: "896e4fe1-79e8-4cff-888d-45a97e94c905",
  FORD: "f9fd714d-79fc-4255-b29d-eb0ef9793c99",
  ASTONMARTIN: "e5a6c0a4-c369-43bb-a6b7-2a6bf0d2b172",
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
  linkBanner: string;
  linkImg: string;
  linkImg2: string;
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
  Blindado: Select[];
  AceitaTroca: Select[];
  Garantia_De_Fabrica: string[];
  IPVA_PAGO: Select[];
  Licenciado: Select[];
  Price: string;
  vehicleItems: string;
  NomeDoVendedor: string;
  Whatsapp: string;
}

class CreateCarService {
  async execute({
    linkBanner,
    linkImg,
    linkImg2,
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
    Blindado,
    AceitaTroca,
    Garantia_De_Fabrica,
    IPVA_PAGO,
    Licenciado,
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
          linkBanner,
          linkImg,
          linkImg2,
          name,
          model,
          description,
          cor,
          Blindado,
          vehicleItems,
          Price,
          Cambio,
          Garantia_De_Fabrica,
          IPVA_PAGO,
          Licenciado,
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
