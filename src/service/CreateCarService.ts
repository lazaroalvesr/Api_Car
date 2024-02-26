import { CambioEnun, CombustivelEnun, Select } from "@prisma/client";
import { prisma } from "../prisma/prisma";

// Mapeamento dos nomes das categorias para os IDs correspondentes
const categoryMap: Record<string, string> = {
  Hatchs: "8bdd23dc-07fe-458d-b06f-edd09122325b",
  Picape: "08dae866-3826-4063-b17f-22298bcd21d7",
  Sedan: "e8708311-0184-40cf-b91b-9d50440e49c0",
  SUV: "1fea174e-6acd-444d-a057-02eca8e326f7",
  Carro_Eletrico: "2f890d9e-bea6-4552-a0f1-581eaa0f4689",
  Carro_economico: "c76d9467-4834-4fe3-b97a-bd2952295f1f",
  Carro_para_Familia: "bceb2b49-78d0-4bdb-8c25-b78d47ded5ac",
  Carro_a_Diesel: "6c6707aa-4737-4f4b-90ac-766448133af8",
  Carro_de_Luxo: "30da0d55-3762-4ea6-8cab-49627c138415",
};

// Mapeamento dos nomes das marcas para os IDs correspondentes
const brandMap: Record<string, string> = {
  TOYOTA: "8cf81ba2-f8be-4d02-9899-f828a9d3f74a",
  HONDA: "0abf4ad8-3be4-49c3-abc2-d67071825884",
  Volkswagen: "c4a4a54e-167d-4ae3-9c9a-828d1996f6c1",
  HYUNDAI: "4921eb35-528a-4b65-88f0-e91b64b90534",
  FIAT: "8b3749c7-36d0-4e82-8f76-5235f069d43c",
  CAOA_Chery: "e04830e6-1d6f-4c7c-8b71-0f61baf6c42b",
  BYD: "6a967afd-112d-4a98-b8a7-18f3bd7652d2",
  BMW: "6087095c-6395-4a9b-a781-7c79a20354d9",
  RENAULT: "09a70852-1513-4cff-bc65-d02fb3294e72",
  JEEP: "ac886cca-de61-4e0c-bfac-7655ef770bf1",
  RAM: "c9bd14a2-a54e-48c8-987a-b1864101e98f",
  NISSAN: "5bfd4395-34ee-4b76-996d-7396c4bf0c21",
  PEUGEOT: "45773c7d-e167-45b4-bfae-16c15e975d3c",
  CHEVROLET: "89c7dc7b-3145-48e7-ad34-8c36f5f60653",
  JAC: "d43362e6-749c-48dd-8a9d-2673e399f2b3",
  LANDROVER: "c321756d-174e-4374-aed7-39226814e695",
  MERCEDES: "214618bc-559a-4217-8eb4-999e10f17c26",
  MITSUBISHI: "310a0326-49bb-4627-84c3-5d0fe676395a",
  VOLVO: "d08d6988-d1d1-4f9a-8607-bf8ab5224815",
  ROLLSROYCE: "d768b20e-476e-4f32-b54b-a8a7adce92d0",
  SUBARU: "b7200b2d-bf98-42fd-9970-bff573b37258",
  PORSCHE: "e08fbf72-83b0-4b2f-9e10-49c31a2b1c86",
  SUZUKI: "47b3ccac-bfa4-456b-9098-01f2245f6cc9",
  MERCEDESAMG: "acf7791c-bb5e-4239-b213-5bdf1eba360b",
  LEXUS: "68452efc-b2f6-4d60-bdcb-fafcf74aeb57",
  KIA: "474a1720-2f1a-45bb-9314-85ea78eb158e",
  MASERATI: "17754f0a-3c2b-4fa0-859d-7437530386de",
  MINI: "1bb9f98b-f061-44ff-be8d-586df999378b",
  MCLAREN: "8fcda7e5-dd4d-4a86-ac8c-bdee3b13c153",
  JAGUAR: "133d0197-e618-4953-b747-bd69cb4dda70",
  HAVAL: "c475af8e-b6ee-486a-a338-0cba93773ab0",
  AUDI: "2af699b3-70f3-4047-b632-c3ebaad0673b	",
  CITROEN: "b54aab16-c67f-410f-a928-5359c16bb1d3",
  FORD: "db0d3a12-36d2-45ea-8d20-b321545e9e1c	",
  ASTONMARTIN: "ea0a27a1-f597-43a0-ac5f-602fc326838e",
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

// Constante para buscar a marca pelo nome
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
