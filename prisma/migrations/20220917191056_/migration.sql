/*
  Warnings:

  - You are about to drop the column `peliculaId` on the `generos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `generos_peliculaId_fkey` ON `generos`;

-- AlterTable
ALTER TABLE `generos` DROP COLUMN `peliculaId`;
