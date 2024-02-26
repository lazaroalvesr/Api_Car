-- CreateEnum
CREATE TYPE "CategoryProps" AS ENUM ('Picape', 'Sedan', 'SUV', 'Eletrico', 'Hibrido', 'UtilitarioEsportivo', 'Hatchback', 'Van_Utilitario');

-- CreateEnum
CREATE TYPE "BrandProps" AS ENUM ('Toyota', 'Honda', 'Volkswagen', 'Hyundai', 'Tesla', 'Fiat', 'Caoa_Chery', 'Byd', 'Bmw', 'Renault', 'Jeep', 'Ram', 'Nissan', 'Peugeot', 'Chevrolet', 'Jac', 'Land_Rover', 'Mercedes', 'Mitsubishi', 'Volvo', 'Rolls_Royce', 'Subaru', 'Porsche', 'Suzuki', 'Mercedes_AMG', 'Lexus', 'Kia', 'Maserati', 'Mini', 'MCLaren', 'Jaguar', 'Haval', 'Audi', 'Citroen', 'Ford', 'Aston_Martin');

-- CreateEnum
CREATE TYPE "CambioEnun" AS ENUM ('Automatico', 'Manual');

-- CreateEnum
CREATE TYPE "CombustivelEnun" AS ENUM ('Gasolina_E_Alcool', 'Alcool', 'Diesel', 'Eletrico', 'Hibrido', 'Gasolina');

-- CreateEnum
CREATE TYPE "Select" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "linkImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "description" TEXT,
    "Year" TEXT NOT NULL,
    "kmRounds" TEXT NOT NULL,
    "Cambio" "CambioEnun"[],
    "Combustivel" "CombustivelEnun"[],
    "FinalDaPlaca" TEXT,
    "cor" TEXT,
    "AceitaTroca" "Select"[],
    "Garantia_De_Fabrica" "Select",
    "IPVAPAGO" "Select",
    "Licenciado" "Select",
    "Price" TEXT NOT NULL,
    "vehicleItems" TEXT NOT NULL,
    "NomeDoVendedor" TEXT NOT NULL,
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
