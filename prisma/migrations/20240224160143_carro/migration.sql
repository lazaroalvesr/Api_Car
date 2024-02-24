-- CreateEnum
CREATE TYPE "CategoryProps" AS ENUM ('Sedan', 'Hatch', 'Eletrico', 'Picape', 'Hibrido', 'OffRoad', 'SUV', 'Crossover', 'Perua', 'MiniVan', 'Esportivo', 'Furgao', 'Jipe', 'AventureiroCompacto', 'HatchSubcompacto', 'HatchCompacto', 'HatchMedio', 'SedanCompacto', 'SedanMedio', 'SedanGrande', 'FamiliarCompacto', 'FamiliarMedio', 'FamiliarGrande', 'PicapeCompacta', 'PicapeMedio', 'PicapeGrande', 'SUVCompacto', 'SUVMedio', 'SUVGrande', 'EsportivoCompacto', 'EsportivoMedio', 'EsportivoGrande', 'ConversivelCompacto', 'ConversivelMedio', 'ConversivelGrande', 'VanMedio', 'VanGrande', 'FurgaoCompacto', 'FurgaoMedio', 'CaminhaoUrbano');

-- CreateEnum
CREATE TYPE "BrandProps" AS ENUM ('Toyota', 'Honda', 'Volkswagen', 'Hyundai', 'Fiat', 'Caoa_Chery', 'Bmw', 'Renautlt', 'Jeep', 'Ram', 'Nissan', 'Peugeot', 'Chevrolet', 'Jac', 'Land_Rover', 'Mercedes', 'Mitsubishi', 'Volvo', 'Rolls_Royce', 'Subaru', 'Porsche', 'Suzuki', 'Mercedes_AMG', 'Lexus', 'Kia', 'Maserati', 'Mini', 'MCLaren', 'Jaguar', 'Haval', 'Audi', 'Citroen', 'Ford', 'Aston_Martin');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "linkImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerOfTheProduct" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "Cambio" TEXT NOT NULL,
    "vehicleItems" TEXT NOT NULL,
    "kmRounds" TEXT NOT NULL,
    "Combustivel" TEXT NOT NULL,
    "Year" TEXT NOT NULL,
    "AceitaTroca" TEXT NOT NULL,
    "Whatsapp" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "categoria" "CategoryProps"[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "brand" "BrandProps"[],

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
