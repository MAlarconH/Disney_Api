/*
  Warnings:

  - You are about to alter the column `fecha_ini` on the `peliculas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.

*/
-- AlterTable
ALTER TABLE `peliculas` MODIFY `fecha_ini` DATE NOT NULL;
