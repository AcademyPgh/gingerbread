CREATE TABLE `user_races` (
	`id` serial AUTO_INCREMENT,
	`userid` int,
	`raceid` int,
	`bibnumber` int,
	`sensorid` int,
	`totaltime` float,
	`completed` boolean,
	`paid` boolean,
	`signupdate` timestamp);
--> statement-breakpoint
ALTER TABLE `races` ADD `location` varchar(2048);--> statement-breakpoint
ALTER TABLE `user_races` ADD CONSTRAINT `user_races_userid_users_id_fk` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_races` ADD CONSTRAINT `user_races_raceid_races_id_fk` FOREIGN KEY (`raceid`) REFERENCES `races`(`id`) ON DELETE no action ON UPDATE no action;