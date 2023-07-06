RENAME TABLE `user_races` TO `signups`;--> statement-breakpoint
ALTER TABLE `signups` DROP FOREIGN KEY `user_races_userid_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `signups` DROP FOREIGN KEY `user_races_raceid_races_id_fk`;
--> statement-breakpoint
ALTER TABLE `signups` ADD `checkedin` boolean;--> statement-breakpoint
ALTER TABLE `signups` ADD CONSTRAINT `signups_userid_users_id_fk` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `signups` ADD CONSTRAINT `signups_raceid_races_id_fk` FOREIGN KEY (`raceid`) REFERENCES `races`(`id`) ON DELETE no action ON UPDATE no action;