import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";
import { prisma } from "../prisma/prisma";

const categoryMap: Record<string, string> = {
  Picape: "3372b695-b87c-412c-9d1e-56ac72c6b033",
  Sedan: "cf6fa010-f61f-450e-9e8e-2a9b708ea9f5",
  SUV: "d2ed2f2c-8113-47fe-9e77-80df7c9b2bfe",
  Eletrico: "56f1fd76-ff34-4847-af36-4b8e62d6157f",
  Hibrido: "543c9943-6905-49bb-ab1e-9b6e954dbdde",
  UtilitarioEsportivo: "7e247828-8ba3-4050-b7d8-88fbd071e14c",
  Hatchback: "c8ad353a-1610-458e-9a2a-13637010e291",
  Van_Utilitario: "9a1649d8-3ceb-497c-99f9-5ae8bb2abeb7",
};

const brandMap: Record<string, string> = {
  TOYOTA: "380cd0fb-be07-422e-a0f7-54eebe6dad2a",
  HONDA: "70d7d917-3df4-493f-9d91-af8909ea1f00",
  Volkswagen: "4c584ae9-f0ae-40ec-a3cb-079eebe1993c",
  HYUNDAI: "971fe8a0-1f49-4530-b1b8-ed0c59163bcd",
  FIAT: "624ab232-abb5-418e-9103-9b5b54945f51",
  CAOA_Chery: "6f4fa4ab-b6fa-43cf-a6ad-251199c8e763",
  BYD: "2d1fbd59-da9a-499e-a1cd-365ae83a01d5",
  BMW: "a36a5fe0-f5d0-40aa-baf3-0b37e2aef228",
  RENAULT: "3caf4c06-64d3-4e6f-927d-2731199b2f86",
  JEEP: "cfb15bc3-92fa-4964-92a9-4f83d570fdbd",
  RAM: "8f3507b6-3a66-4999-b0aa-1c55713dcc3d",
  NISSAN: "bf1f9cd9-ecf1-42c6-a205-97faf38d09da",
  PEUGEOT: "0213409e-fa42-400f-a99b-d2d6ccefd989",
  CHEVROLET: "c0158428-5cda-4406-9fa1-01939bd46c51",
  JAC_Motors: "435d02c6-f547-4c70-beb7-ccd18b83503b",
  LANDROVER: "4fb8e8ee-5951-4b12-93aa-b519d626d0ac",
  MERCEDES: "a3c162e5-6cfc-4628-a654-37ccd2e2d1b4",
  VOLVO: "cd436e03-f62e-44d4-a003-7e85e393d9e5",
  Mitsubishi: "477f7162-0810-49fc-a0c5-b1a78eb3a08c",
  ROLLSROYCE: "75c40451-dcc9-49c7-aacb-7fc47aa29677",
  SUBARU: "20ddb9e9-4d41-40cc-adac-694de11511b3",
  PORSCHE: "bf646912-4916-4e9e-999c-82a4fe68508d",
  SUZUKI: "e5f0869e-6e7a-4767-bf04-a44638a8c29c",
  MERCEDESAMG: "e94d2d61-766f-452d-9cc8-004fd51ccb83",
  LEXUS: "250be4df-3506-4a34-a744-f2849ecb45a4",
  KIA: "63346b8a-bc64-48e6-b197-a8d3b61fb666",
  MASERATI: "eb930c3d-3f5d-457c-a7a7-8f2d79d6ca14",
  MINI: "722671dd-699b-4e21-b10a-a9d801b95a80",
  MCLAREN: "a81190ae-834a-4831-bd01-fa6b94b7f1b2",
  JAGUAR: "5edfd349-2c91-4d9e-b5c1-1aa005e5ff4b",
  HAVAL: "c4788608-c3d6-4ef7-8dbd-e162da256e11",
  AUDI: "65f0febd-be9f-44be-a0a8-7d5e85dacd8b",
  CITROEN: "e8b985a7-24a6-45bd-9e8a-4847f4dd0273",
  FORD: "3df4fa93-a947-48a5-879c-b4da30734894",
  ASTONMARTIN: "cb858a32-6119-48dd-8885-49444dec5a59",
  Tesla: "a06f1d1f-5c50-499c-991a-876769c11b5e",
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
  Blindado: Select[]
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
          linkImg,
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
