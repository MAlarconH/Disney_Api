-- DropForeignKey
ALTER TABLE `generos` DROP FOREIGN KEY `generos_peliculaId_fkey`;

-- CreateTable
CREATE TABLE `generos_peliculas` (
    `generoId` INTEGER NOT NULL,
    `peliculaId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`generoId`, `peliculaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `generos_peliculas` ADD CONSTRAINT `generos_peliculas_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `generos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generos_peliculas` ADD CONSTRAINT `generos_peliculas_peliculaId_fkey` FOREIGN KEY (`peliculaId`) REFERENCES `peliculas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
