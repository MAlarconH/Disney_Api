-- CreateTable
CREATE TABLE `personajes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagen` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `Peso` DOUBLE NOT NULL,
    `historia` VARCHAR(191) NOT NULL,
    `p_s_asociada` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peliculas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagen` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `fecha_ini` DATETIME(3) NOT NULL,
    `calificacion` DOUBLE NOT NULL,
    `psnjs_asociado` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `p_s_asociada` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
