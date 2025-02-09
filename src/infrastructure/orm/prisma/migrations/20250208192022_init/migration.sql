-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isbn` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'BORROWED', 'LOST') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `Book_isbn_key`(`isbn`),
    INDEX `Book_name_isbn_idx`(`name`, `isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
