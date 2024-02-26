import { prisma } from "../prisma/prisma";

// Mapeamento dos nomes das categorias para os IDs correspondentes
const categoryMap: Record<string, string> = {
  SEDAN: "515e2547-9ee4-4532-a8c8-d889cb3ce5eb",
  HATCH: "ba8cb75f-6742-48e2-9d33-49990a39e7d4",
  ELETRICO: "05143aa9-7308-489b-9f95-9a9e783c9ce6",
  PICKUP: "49b96aa3-9f7c-4659-a668-e8070f55d15b",
  HIBRIDO: "1a1723ba-362b-4578-8ed7-3e14c3c7d45c",
  OFFROAD: "29fe08dd-7551-44ed-84f8-a31dd69db81c",
  SUV: "8383fc3f-5154-4b06-99d4-f69b67ea1323",
  Crossover: "62d75e74-936d-4fd7-ba4d-2d2b3cd374d0",
  MINIVAN: "ddad43b8-c04e-4c95-92b1-7fc32d62cedd",
  FURGAO: "73e31f71-68cc-4178-ab27-d5011ab7c2d5",
  ESPORTIVO: "ecd30f86-53eb-4f7e-8d61-fe81ae8adfe5",
  PERUA: "866d1418-a3b1-4f20-bd1e-45e106e5945e",
  JIPE: "bfe74059-f9f8-41f1-82ea-f7711ea28c58	",
  AVENTUREIROCOMPACTO: "ca338927-dd43-4c86-9f56-a571e7d7c69a",
  HATCHSUBCOMPACTO: "3ea56169-d778-4b0e-afef-dc3f642761b2",
  HATCHCOMPACTO: "458385c9-0f16-44eb-a1f2-f542f1bf2f26",
  HATCHMEDIO: "23571438-5b98-47cb-b4ae-3dc82d25ab49",
  SEDANCOMPACTO: "f1b562e0-b252-419a-beaf-85728003f028",
  SEDANMEDIO: "6f2efb26-cf07-4601-ade6-c89d3168f1c2",
  SEDANGRANDE: "69646113-9ce8-4885-b0ff-785b6c979ec2",
  FAMILIARCOMPACTO: "e08a81fe-12fc-416e-80f3-814a12ba64d6",
  FAMILIARMEDIO: "c4c372ea-6f00-4034-b222-3c1f14feafcb",
  FAMILIARGRANDE: "ID Correspondente aqui",
  PICAPECOMPACTA: "5c10d5db-cac4-4783-a17d-6495608c0dff",
  PICAPEMEDIO: "153b4902-55f3-41c0-8df8-46bd90ff64e6",
  PICAPEGRANDE: "deabb1c8-ef34-49de-9c41-006d0029277f",
  SUVCOMPACTO: "dfd615b4-ed78-4082-b066-61d85d4f4fda",
  SUVMEDIO: "0fc34297-8760-4f45-a504-266982026209",
  SUVGRANDE: "577171de-ce56-4f0a-b196-77407a7bf139",
  ESPORTIVOCOMPACTO: "9b1f64a0-8c1c-4690-832c-d48ec4fa7305",
  ESPORTIVOMEDIO: "d1f6d2c2-6bf1-4ca5-89a6-073268bf40b9",
  ESPORTIVOGRANDE: "f1cac991-83d4-44e5-83fc-b1716c2fbe38",
  CONVERSIVELCOMPACTO: "dcda7000-b5ff-4caa-8008-f0f988a24ad3",
  CONVERSIVELMEDIO: "8a5c1d1d-bfb0-40f8-9f7f-31edfe19fe01",
  CONVERSIVELGRANDE: "ID Correspondente aqui",
  VANMEDIO: "277f2c22-ef27-49ab-99ba-c2859bd67914",
  VANGRANDE: "64c1581f-21ff-403c-af23-b3971cc7d99d",
  FURGAOCOMPACTO: "68b41c34-3a51-4d0f-ad6d-",
  FURGAOMEDIO: "64325415-e38a-438c-86fb-585fa9e8e220",
  CAMINHAOURBANO: "8bf34a59-3b59-4452-884c-2d23aaa4beff",
};

// Mapeamento dos nomes das marcas para os IDs correspondentes
const brandMap: Record<string, string> = {
  TOYOTA: "1c4716cd-12e9-45c5-b0ff-eff8821dd3df",
  HONDA: "4aa4ed7d-6bbb-4975-a434-43c7b1610812",
  Volkswagen: "48f26b4d-e204-461f-9586-29ebb77b73da",
  HYUNDAI: "1919b3cb-835f-4983-9363-4e0318bfa596",
  FIAT: "0517f194-37bd-4c90-982f-b7eb7b836bf3",
  CAOA: "524b0990-4a9b-4c4f-b53e-73c53d0b8d5c",
  BMW: "8b0f8403-7824-4ec0-982f-323e1b45a7c2",
  RENAULT: "93319ad9-7ccd-4dae-813c-e36399f65b05",
  JEEP: "3a4502a1-8002-4db6-bc31-dd314641d19e",
  RAM: "40edcaf5-61b4-42df-98bb-c68351efc985",
  NISSAN: "97bce1db-5233-485d-9858-c3ca46ad06a6",
  PEUGEOT: "fa2362c1-5157-4a52-b7f1-f77d8a480de0",
  CHEVROLET: "ce36746d-bdd0-4de4-a44e-da130ff639de",
  JAC: "026f2c5b-dced-41d2-93b7-54b28f4e7eaa",
  LANDROVER: "d11033a3-e398-413b-91c2-8cdac528123b",
  MERCEDES: "30f098a4-5380-4d8f-b70a-b1ec41045c2d",
  MITSUBISHI: "bb66033d-0c79-4632-962c-46574ea069d6",
  VOLVO: "38fe0f0d-892f-43b5-83f2-d49d4b15c395",
  ROLLSROYCE: "d81bb913-2f8d-4042-832a-5a7f9716d29e",
  SUBARU: "9b9b4978-bccf-4763-a330-90f1df51ebbb",
  PORSCHE: "54207228-6e12-4226-bd1c-3ec7c8a00ee4",
  SUZUKI: "be1801ca-f2b3-4611-ae78-5b45970e9582",
  MERCEDESAMG: "99be8ab7-9c8d-4e89-a6c2-9b42f122d259",
  LEXUS: "9bb30bca-6b90-467e-99f1-65986c758a38",
  KIA: "3413f38c-6b96-44b0-a8c7-093c974dc2cf",
  MASERATI: "a19e0cc1-c250-4d29-ad1b-bb011e5585a8",
  MINI: "f58cb29f-6d6b-4484-a58e-ce410af6466f",
  MCLAREN: "a6f5a136-4f33-405c-8095-4edbef7f0cbb",
  JAGUAR: "2fa01ede-3853-48d0-b937-f386c9e6f3f6",
  HAVAL: "db66ac8d-cc7b-4148-b979-dad250a3b367",
  AUDI: "34136325-a972-42ca-8901-0bf38a93d114",
  CITROEN: "1191fef2-f652-4f77-8ce7-e34d6669ecfc",
  FORD: "45153543-3d92-4fa2-9be7-51668accdb13",
  ASTONMARTIN: "82a26d55-06b1-4a64-a805-a601de642c98",
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
