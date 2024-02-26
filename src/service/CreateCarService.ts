import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";
import { prisma } from "../prisma/prisma";

const categoryMap: Record<string, string> = {
  Picape: "e05b29ec-3bf7-4ae1-a23a-79584f8315b2",
  Sedan: "b6b1798e-47e3-4639-aea2-dd07012fd509",
  SUV: "e740b1fa-f223-4765-a1da-fe65a0b40aa8",
  Eletrico: "ce7feebd-9d82-44ad-96f1-4790010f371a",
  Hibrido: "db51a1df-4157-4cae-92c5-38e73b0cfc7c",
  UtilitarioEsportivo: "e58c69b5-217e-47d9-aaac-f99a13840870",
  Hatchback: "c37965f8-5d78-4a84-8dd2-359c913f2d30",
  Van_Utilitario: "72074e2b-4213-47f2-84d5-06b2a5691782",
};

const brandMap: Record<string, string> = {
  TOYOTA: "6e29dda5-9e11-4e37-8380-02e771b775d2",
  HONDA: "9f96248f-6bf4-4d69-9fc8-1b23e727fdb1",
  Volkswagen: "3f200f06-4a26-4470-8d18-1fbb166fb88a",
  HYUNDAI: "c75d9c8d-6d58-404d-a437-51307a522191",
  FIAT: "b3fe7f9e-e664-41b6-a8ba-8ad426ce4e1a",
  CAOA_Chery: "6ff77d67-366b-42f2-b8a1-49f3ce4c22d2",
  BYD: "8e4ab3f5-f4a3-48d6-a608-6c38d7f45a9e",
  BMW: "529ef13a-81da-4714-9d14-fce7e91fdd09",
  RENAULT: "6bb96ffe-05d6-46c1-9486-37a5dd50cfa5",
  JEEP: "eb6fd668-0247-4807-aa05-7ca17345c62b",
  RAM: "ed4938f5-417f-4b23-beac-9c4b0746e9e9",
  NISSAN: "a0b0ab82-045e-4fa0-aa7a-a5740cebc1a4",
  PEUGEOT: "00cf196c-5cd2-4027-964b-835c6e11834d",
  CHEVROLET: "15db108e-7ace-488d-8ac6-66870678ee1c",
  JAC_Motors: "ec92318d-7836-4a69-bb06-eb2fb38cd05b",
  LANDROVER: "903a4c90-6001-4942-a9f7-d174647dc904",
  MERCEDES: "fb2b3e81-b65d-4cc9-94ec-b33fa0d6ff8b	",
  VOLVO: "15b185f0-fbd9-4261-8050-907de9347e94",
  ROLLSROYCE: "31123638-e0f2-488d-8537-e6882ed7a77c",
  SUBARU: "ed36144f-1bcc-4586-bf68-0a4c451092c2",
  PORSCHE: "e3bc4b6e-d95f-4850-98ab-a86766c497ab",
  SUZUKI: "dd6bd5e0-f326-4b72-8e67-494af5648374",
  MERCEDESAMG: "dbd28efc-2c27-4dde-b859-0264eda1149d",
  LEXUS: "6452cb27-d704-4a83-9106-e3432edeaa34",
  KIA: "f9d2f445-c8fe-4eed-adc6-6d5e91453baa",
  MASERATI: "dd452899-1683-4ff3-9190-95b379428e38",
  MINI: "676b86c6-c861-40b7-ae1c-dd37174d10f6",
  MCLAREN: "6a910a2d-14e9-4adb-ac91-d3ba3691a836",
  JAGUAR: "40a16b0f-1bba-4964-9016-1703a8f7205c",
  HAVAL: "de3c9d20-528d-4dcf-97b9-22be0e76b19e",
  AUDI: "67fa8912-7d63-4ec3-830f-0d848910bbbf",
  CITROEN: "76dc4bd1-9359-4a13-9ce5-5b8aa3a1d781",
  FORD: "66f01b02-5fb6-47ff-8db7-ba42cc2304f9",
  ASTONMARTIN: "8c152ecf-722c-4784-8069-03eaa85b1939",
  Tesla: "1d91f749-a6b4-464f-8e9d-1dc442371625",
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
