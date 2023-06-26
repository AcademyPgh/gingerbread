CREATE TABLE `races` (
	`id` serial AUTO_INCREMENT,
	`name` varchar(50),
	`routeurl` text,
	`herourl` text,
	`starttime` datetime,
	`endtime` datetime,
	`description` text,
	`contact` text,
	`socials` text,
	`created_at` timestamp,
	`updated_at` timestamp);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `username` varchar(50);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `firstname` varchar(50);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `lastname` varchar(50);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `phone` varchar(50);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `emergencyname` varchar(50);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `emergencyphone` varchar(50);--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `password`;