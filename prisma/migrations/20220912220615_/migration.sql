/*
  Warnings:

  - You are about to drop the column `psnjs_asociado` on the `peliculas` table. All the data in the column will be lost.
  - You are about to drop the column `p_s_asociada` on the `personajes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `peliculas` DROP COLUMN `psnjs_asociado`;

-- AlterTable
ALTER TABLE `personajes` DROP COLUMN `p_s_asociada`;

-- CreateTable
CREATE TABLE `peliculas_personajes` (
    `peliculaId` INTEGER NOT NULL,
    `personajeId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`peliculaId`, `personajeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `peliculas_personajes` ADD CONSTRAINT `peliculas_personajes_peliculaId_fkey` FOREIGN KEY (`peliculaId`) REFERENCES `peliculas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peliculas_personajes` ADD CONSTRAINT `peliculas_personajes_personajeId_fkey` FOREIGN KEY (`personajeId`) REFERENCES `personajes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
