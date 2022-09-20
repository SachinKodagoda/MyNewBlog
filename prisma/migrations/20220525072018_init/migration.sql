-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NULL,
    `mobileNo` VARCHAR(255) NULL,
    `fName` VARCHAR(255) NULL,
    `lName` VARCHAR(255) NULL,
    `role` ENUM('user', 'admin', 'supplier', 'hr', 'finance') NOT NULL DEFAULT 'user',
    `website` VARCHAR(191) NULL,
    `gitHub` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `gender` ENUM('male', 'female', 'other') NOT NULL DEFAULT 'male',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `onlineStatus` ENUM('available', 'busy', 'away', 'offline') NOT NULL DEFAULT 'available',
    `lastModifiedBy` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Offer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    `offerCode` VARCHAR(255) NOT NULL,
    `discount` DECIMAL(65, 30) NOT NULL,
    `startDate` TIMESTAMP(3) NOT NULL,
    `endDate` TIMESTAMP(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rooms` (
    `roomID` INTEGER NOT NULL AUTO_INCREMENT,
    `availability` VARCHAR(255) NOT NULL,
    `priceCategory` VARCHAR(255) NOT NULL,
    `unAvailableDays` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`roomID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomCategory` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(255) NOT NULL,
    `bedCount` VARCHAR(255) NOT NULL,
    `numberOfPeople` VARCHAR(255) NOT NULL,
    `view` VARCHAR(255) NOT NULL,
    `area` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `roomType` ENUM('single', 'double', 'deluxe') NOT NULL,
    `offerId` INTEGER NULL,
    `meal` ENUM('full_board', 'half_board') NOT NULL,
    `note` VARCHAR(191) NULL,
    `numberOfRooms` INTEGER NOT NULL DEFAULT 1,
    `userEmail` VARCHAR(191) NULL,
    `totalPayment` DOUBLE NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `itemId` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierName` VARCHAR(255) NOT NULL,
    `orderDate` TIMESTAMP(3) NOT NULL,
    `itemCode` VARCHAR(255) NOT NULL,
    `itemName` VARCHAR(255) NOT NULL,
    `quanitity` VARCHAR(255) NOT NULL,
    `unitePrice` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplier` (
    `supplierId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `supplierEmail` VARCHAR(191) NOT NULL,
    `supplierNIC` VARCHAR(191) NOT NULL,
    `CompanyName` VARCHAR(191) NOT NULL,
    `PhoneNumber` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`supplierId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
