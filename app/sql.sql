SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`organizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`organizacao` (
  `org_id` INT NOT NULL AUTO_INCREMENT,
  `org_razao` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`org_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pessoa` (
  `pes_id` INT NOT NULL AUTO_INCREMENT,
  `pes_nome` VARCHAR(45) NOT NULL,
  `pes_sobrenome` VARCHAR(45) NOT NULL,
  `pes_emal` VARCHAR(45) NULL,
  PRIMARY KEY (`pes_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `usu_id` INT NOT NULL AUTO_INCREMENT,
  `usu_nome` VARCHAR(45) NOT NULL,
  `usu_senha` VARCHAR(100) NOT NULL,
  `org_id` INT NOT NULL,
  `pes_id` INT NOT NULL,
  PRIMARY KEY (`usu_id`, `org_id`, `pes_id`),
  INDEX `fk_usuario_organizacao_idx` (`org_id` ASC),
  INDEX `fk_usuario_pessoa1_idx` (`pes_id` ASC),
  CONSTRAINT `fk_usuario_organizacao`
    FOREIGN KEY (`org_id`)
    REFERENCES `mydb`.`organizacao` (`org_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_pessoa1`
    FOREIGN KEY (`pes_id`)
    REFERENCES `mydb`.`pessoa` (`pes_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`organizacao`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`organizacao` (`org_id`, `org_razao`) VALUES (1, 'Capheezzi');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`pessoa`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`pessoa` (`pes_id`, `pes_nome`, `pes_sobrenome`, `pes_emal`) VALUES (1, 'Jeferson', 'Belgamazzi', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`usuario` (`usu_id`, `usu_nome`, `usu_senha`, `org_id`, `pes_id`) VALUES (NULL, 'jbelgamazzi', '123', 1, 1);

COMMIT;

