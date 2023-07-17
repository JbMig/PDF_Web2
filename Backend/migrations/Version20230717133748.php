<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230717133748 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE buildings (id INT AUTO_INCREMENT NOT NULL, user_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, type VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_9A51B6A79D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE plannings (id INT AUTO_INCREMENT NOT NULL, sensor_id_id INT NOT NULL, starts_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', ends_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', target_value INT NOT NULL, UNIQUE INDEX UNIQ_4F04019D3900C4BF (sensor_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE room_types (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rooms (id INT AUTO_INCREMENT NOT NULL, building_id_id INT NOT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_7CA11A9613E42FCD (building_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensor_types (id INT AUTO_INCREMENT NOT NULL, sensors_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, default_value INT DEFAULT NULL, default_margin INT DEFAULT NULL, INDEX IDX_1F74D3D853F60F33 (sensors_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sensors (id INT AUTO_INCREMENT NOT NULL, plannings_id_id INT NOT NULL, room_id_id INT NOT NULL, type_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, value INT NOT NULL, margin INT DEFAULT NULL, short_lived TINYINT(1) NOT NULL, INDEX IDX_D0D3FA909D40034C (plannings_id_id), UNIQUE INDEX UNIQ_D0D3FA9035F83FFC (room_id_id), UNIQUE INDEX UNIQ_D0D3FA90714819A0 (type_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE buildings ADD CONSTRAINT FK_9A51B6A79D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE plannings ADD CONSTRAINT FK_4F04019D3900C4BF FOREIGN KEY (sensor_id_id) REFERENCES sensors (id)');
        $this->addSql('ALTER TABLE rooms ADD CONSTRAINT FK_7CA11A9613E42FCD FOREIGN KEY (building_id_id) REFERENCES buildings (id)');
        $this->addSql('ALTER TABLE sensor_types ADD CONSTRAINT FK_1F74D3D853F60F33 FOREIGN KEY (sensors_id_id) REFERENCES sensors (id)');
        $this->addSql('ALTER TABLE sensors ADD CONSTRAINT FK_D0D3FA909D40034C FOREIGN KEY (plannings_id_id) REFERENCES plannings (id)');
        $this->addSql('ALTER TABLE sensors ADD CONSTRAINT FK_D0D3FA9035F83FFC FOREIGN KEY (room_id_id) REFERENCES rooms (id)');
        $this->addSql('ALTER TABLE sensors ADD CONSTRAINT FK_D0D3FA90714819A0 FOREIGN KEY (type_id_id) REFERENCES sensor_types (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE buildings DROP FOREIGN KEY FK_9A51B6A79D86650F');
        $this->addSql('ALTER TABLE plannings DROP FOREIGN KEY FK_4F04019D3900C4BF');
        $this->addSql('ALTER TABLE rooms DROP FOREIGN KEY FK_7CA11A9613E42FCD');
        $this->addSql('ALTER TABLE sensor_types DROP FOREIGN KEY FK_1F74D3D853F60F33');
        $this->addSql('ALTER TABLE sensors DROP FOREIGN KEY FK_D0D3FA909D40034C');
        $this->addSql('ALTER TABLE sensors DROP FOREIGN KEY FK_D0D3FA9035F83FFC');
        $this->addSql('ALTER TABLE sensors DROP FOREIGN KEY FK_D0D3FA90714819A0');
        $this->addSql('DROP TABLE buildings');
        $this->addSql('DROP TABLE plannings');
        $this->addSql('DROP TABLE room_types');
        $this->addSql('DROP TABLE rooms');
        $this->addSql('DROP TABLE sensor_types');
        $this->addSql('DROP TABLE sensors');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
