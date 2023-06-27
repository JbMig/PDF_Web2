CREATE TABLE `sensor`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `room_id` INT UNSIGNED NOT NULL,
    `type_id` INT UNSIGNED NOT NULL,
    `value` INT NOT NULL,
    `margin` INT NULL,
    `short_lived` BOOLEAN NULL
);

CREATE TABLE `room_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `room`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `building_id` INT UNSIGNED NOT NULL,
    `type` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `planning`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `starts_at` DATETIME NOT NULL,
    `ends_at` DATETIME NOT NULL,
    `sensor_id` INT UNSIGNED NOT NULL,
    `target_value` INT NOT NULL
);

CREATE TABLE `building`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NULL
);

CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `mail` VARCHAR(255) NOT NULL
);

CREATE TABLE `sensor_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `default_value` INT NULL,
    `default_margin` INT NULL
);

 ALTER TABLE `room_type` ADD CONSTRAINT `room_type_id_foreign` FOREIGN KEY(`id`) REFERENCES `room`(`id`);

 ALTER TABLE `building` ADD CONSTRAINT `building_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);

 ALTER TABLE `planning` ADD CONSTRAINT `planning_sensor_id_foreign` FOREIGN KEY(`sensor_id`) REFERENCES `sensor`(`id`);

 ALTER TABLE `room` ADD CONSTRAINT `room_building_id_foreign` FOREIGN KEY(`building_id`) REFERENCES `building`(`id`);

 ALTER TABLE `sensor` ADD CONSTRAINT `sensor_room_id_foreign` FOREIGN KEY(`room_id`) REFERENCES `room`(`id`);

 ALTER TABLE `sensor` ADD CONSTRAINT `sensor_type_id_foreign` FOREIGN KEY(`type_id`) REFERENCES `sensor_type`(`id`);