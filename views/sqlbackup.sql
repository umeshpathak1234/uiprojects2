CREATE TABLE `persondb`.`contactinfo` (
  `contactId` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  PRIMARY KEY (`contactId`),
  UNIQUE INDEX `contactId_UNIQUE` (`contactId` ASC));


INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('John', 'Smith', 'Irving', 'john@htomail.com', '3124567896');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('Emily ', 'wilson', 'eulles', 'emjly@hotmail.com', '345-678-9087');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`) VALUES ('Hari', 'ganta', 'florida', 'hari@gmail.com');

CREATE TABLE `persondb`.`additionalinfo` (
  `infoId` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `contactId` INT NOT NULL,
  PRIMARY KEY (`infoId`),
  UNIQUE INDEX `infoid_UNIQUE` (`infoId` ASC),
  INDEX `contactId_idx` (`contactId` ASC),
  CONSTRAINT `contactId`
    FOREIGN KEY (`contactId`)
    REFERENCES `persondb`.`contactinfo` (`contactId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'USA', '34', '1');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Female', 'Mexico', '56', '2');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'Nepal', '23', '3');
