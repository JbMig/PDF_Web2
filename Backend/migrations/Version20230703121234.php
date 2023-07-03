<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230703121234 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE buildings (id INT AUTO_INCREMENT NOT NULL, user_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, type VARCHAR(255) DEFAULT NULL, INDEX IDX_9A51B6A79D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE plannings (id INT AUTO_INCREMENT NOT NULL, starts_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', ends_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', target_value INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE plannings_sensors (plannings_id INT NOT NULL, sensors_id INT NOT NULL, INDEX IDX_F75B3CF78DFC1B84 (plannings_id), INDEX IDX_F75B3CF76ADBF749 (sensors_id), PRIMARY KEY(plannings_id, sensors_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE room_types (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rooms (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rooms_buildings (rooms_id INT NOT NULL, buildings_id INT NOT NULL, INDEX IDX_6FB97AB68E2368AB (rooms_id), INDEX IDX_6FB97AB61485E613 (buildings_id), PRIMARY KEY(rooms_id, buildings_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensor_types (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, default_value INT DEFAULT NULL, default_margin INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensors (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value INT NOT NULL, margin INT DEFAULT NULL, short_lived TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensors_rooms (sensors_id INT NOT NULL, rooms_id INT NOT NULL, INDEX IDX_50138BF26ADBF749 (sensors_id), INDEX IDX_50138BF28E2368AB (rooms_id), PRIMARY KEY(sensors_id, rooms_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensors_sensor_types (sensors_id INT NOT NULL, sensor_types_id INT NOT NULL, INDEX IDX_3654353A6ADBF749 (sensors_id), INDEX IDX_3654353A18A6825E (sensor_types_id), PRIMARY KEY(sensors_id, sensor_types_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE buildings ADD CONSTRAINT FK_9A51B6A79D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE plannings_sensors ADD CONSTRAINT FK_F75B3CF78DFC1B84 FOREIGN KEY (plannings_id) REFERENCES plannings (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE plannings_sensors ADD CONSTRAINT FK_F75B3CF76ADBF749 FOREIGN KEY (sensors_id) REFERENCES sensors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE rooms_buildings ADD CONSTRAINT FK_6FB97AB68E2368AB FOREIGN KEY (rooms_id) REFERENCES rooms (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE rooms_buildings ADD CONSTRAINT FK_6FB97AB61485E613 FOREIGN KEY (buildings_id) REFERENCES buildings (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sensors_rooms ADD CONSTRAINT FK_50138BF26ADBF749 FOREIGN KEY (sensors_id) REFERENCES sensors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sensors_rooms ADD CONSTRAINT FK_50138BF28E2368AB FOREIGN KEY (rooms_id) REFERENCES rooms (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sensors_sensor_types ADD CONSTRAINT FK_3654353A6ADBF749 FOREIGN KEY (sensors_id) REFERENCES sensors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sensors_sensor_types ADD CONSTRAINT FK_3654353A18A6825E FOREIGN KEY (sensor_types_id) REFERENCES sensor_types (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE buildings DROP FOREIGN KEY FK_9A51B6A79D86650F');
        $this->addSql('ALTER TABLE plannings_sensors DROP FOREIGN KEY FK_F75B3CF78DFC1B84');
        $this->addSql('ALTER TABLE plannings_sensors DROP FOREIGN KEY FK_F75B3CF76ADBF749');
        $this->addSql('ALTER TABLE rooms_buildings DROP FOREIGN KEY FK_6FB97AB68E2368AB');
        $this->addSql('ALTER TABLE rooms_buildings DROP FOREIGN KEY FK_6FB97AB61485E613');
        $this->addSql('ALTER TABLE sensors_rooms DROP FOREIGN KEY FK_50138BF26ADBF749');
        $this->addSql('ALTER TABLE sensors_rooms DROP FOREIGN KEY FK_50138BF28E2368AB');
        $this->addSql('ALTER TABLE sensors_sensor_types DROP FOREIGN KEY FK_3654353A6ADBF749');
        $this->addSql('ALTER TABLE sensors_sensor_types DROP FOREIGN KEY FK_3654353A18A6825E');
        $this->addSql('DROP TABLE buildings');
        $this->addSql('DROP TABLE plannings');
        $this->addSql('DROP TABLE plannings_sensors');
        $this->addSql('DROP TABLE room_types');
        $this->addSql('DROP TABLE rooms');
        $this->addSql('DROP TABLE rooms_buildings');
        $this->addSql('DROP TABLE sensor_types');
        $this->addSql('DROP TABLE sensors');
        $this->addSql('DROP TABLE sensors_rooms');
        $this->addSql('DROP TABLE sensors_sensor_types');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
