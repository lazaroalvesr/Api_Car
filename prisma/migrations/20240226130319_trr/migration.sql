/*
  Warnings:

  - Added the required column `Price` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "Price" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;
