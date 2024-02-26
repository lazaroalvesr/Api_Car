/*
  Warnings:

  - You are about to drop the column `IPVAPAGO` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "IPVAPAGO",
ADD COLUMN     "Blindado" "Select",
ADD COLUMN     "IPVA_PAGO" "Select";
