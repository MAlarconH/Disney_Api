/*
  Warnings:

  - You are about to drop the column `p_s_asociada` on the `generos` table. All the data in the column will be lost.
  - Added the required column `peliculaId` to the `generos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `generos` DROP COLUMN `p_s_asociada`,
    ADD COLUMN `peliculaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `generos` ADD CONSTRAINT `generos_peliculaId_fkey` FOREIGN KEY (`peliculaId`) REFERENCES `peliculas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
