import { prisma } from "../prisma/prisma";

// Mapeamento dos nomes das categorias para os IDs correspondentes
const categoryMap: Record<string, string> = {
  Hatches: "b950cdda-5042-4b7c-80ff-9a7fe7b25916",
  Picapes: "90a545e6-0975-405b-a0ab-ef5aa49523cc	",
  Sedan: "820c7b07-2e11-45ea-8ee9-632520dd999e	",
  SUVs: "45572f4e-6275-4705-ba82-891a74813d89	",
  Carros_Eletricos: "e0b8645a-2f63-4e4b-b7fc-ca43884ba0c0	",
  Carros_economicos: "b502029b-bb87-4dfa-8d45-83ba06d26f8e	",
  Carros_para_Familia: "57cf1eec-7ed7-47cf-9126-a43198a5b6d1	",
  Carros_a_Diesel: "55b2a70f-9439-4289-8382-5db182c8f6f4	",
  Carros_de_Luxo: "758ecf92-85f2-4c46-b9d6-d2c5eaa79367	",
};

// Mapeamento dos nomes das marcas para os IDs correspondentes
const brandMap: Record<string, string> = {
  TOYOTA: "15858ad1-623a-407f-be38-1c56c88569f1",
  HONDA: "32075df3-531a-4d5a-b872-73f2f41aa1b1",
  Volkswagen: "565e33e9-ba11-4eed-a818-82529deb114a",
  HYUNDAI: "5c45e710-a924-4393-9dcf-8db031244f00",
  FIAT: "87e5d581-dc3c-4193-a1f5-f18c23ac989c",
  CAOA_Chery: "4b8fc618-e3e8-46e3-8087-c3019bdd2503",
  BMW: "b4dc33a2-dfac-458c-a493-ef72584844ea",
  RENAULT: "a6ae78af-7d5b-4a2c-850e-2c2a332a76a9",
  JEEP: "8204d4c1-e958-4194-98eb-bb064341acc6",
  RAM: "923ff675-59b1-43f2-9e4c-5053b6fbb7a6	",
  NISSAN: "22b34715-dec8-4a59-a144-b53f6a55667d",
  PEUGEOT: "6c51ff2c-a62e-4c72-a6ec-8a12730e9853",
  CHEVROLET: "9bd0e44e-56e0-498d-b8eb-",
  JAC: "e9b827b6-3c55-46e7-a5e1-6054eb211de2",
  LANDROVER: "6604d3c6-c8d0-48e7-9119-afa960ad97ff",
  MERCEDES: "fbb6a26e-9e7a-4c7b-8135-a3c0b5e1762d",
  MITSUBISHI: "c33b6e83-6104-4c2f-8856-1ed9c5d2ca72",
  VOLVO: "28272c5f-23ef-494f-a980-3c33c593315e",
  ROLLSROYCE: "ff3ea25a-4540-4b77-9fc5-8dc00bbb6995	",
  SUBARU: "8a1e17a2-bf08-48d2-972b-25a4329d143e",
  PORSCHE: "67657984-9325-45cd-bb7b-a3b2de3d49c1",
  SUZUKI: "f6833989-01ed-4cfe-a52c-d651978b936f",
  MERCEDESAMG: "50b92b88-6631-44e5-ba8f-e5be806853d6",
  LEXUS: "883834a1-bd08-477e-933e-c94dfbbae71c",
  KIA: "0b6adf4d-0b1f-4829-88b8-cc4965bf3e57",
  MASERATI: "5f44d670-1e57-4754-9a86-1aa0696e8c90",
  MINI: "358dac9d-0315-405a-ae8b-9e72ff78c59f",
  MCLAREN: "2233b331-dfb8-48c4-bfe7-ab5d145e924d",
  JAGUAR: "376ce20c-b9da-4a63-83f5-e11b2099b3c2",
  HAVAL: "c81b173e-9466-4014-87ff-8b4ad9320ca8",
  AUDI: "a966f7f7-e928-465d-ae5b-aac9831cc14f",
  CITROEN: "a794a513-8c2c-4acd-8ef0-193e4de3aa80",
  FORD: "077f3695-2b08-4330-92ae-d08187470bab",
  ASTONMARTIN: "29c4ff03-808c-4cb4-ae3e-31dd4291cc7a",
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
  ownerOfTheProduct: string;
  description: string;
  cor: string;
  Cambio: string;
  Combustivel: string;
  vehicleItems: string;
  kmRounds: string;
  Year: string;
  Price: string;
  AceitaTroca: string;
  Whatsapp: string;
  categoryName: string; // Usando string para o nome da categoria
  brandName: string;
}

class CreateCarService {
  async execute({
    linkImg,
    name,
    model,
    ownerOfTheProduct,
    description,
    kmRounds,
    cor,
    Cambio,
    Combustivel,
    Price,
    vehicleItems,
    Year,
    AceitaTroca,
    Whatsapp,
    categoryName,
    brandName,
  }: CreateCarProps) {
    try {
      const category = await getCategoryByName(categoryName);

      const brand = await getBrandByName(brandName);

      const createCar = await prisma.car.create({
        data: {
          linkImg,
          name,
          model,
          ownerOfTheProduct,
          description,
          cor,
          Price,
          Cambio,
          Combustivel,
          vehicleItems,
          kmRounds,
          Year,
          AceitaTroca,
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
