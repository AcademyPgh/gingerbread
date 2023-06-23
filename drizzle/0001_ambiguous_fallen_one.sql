ALTER TABLE `user` RENAME COLUMN `name` TO `username`;--> statement-breakpoint
ALTER TABLE `user` ADD `firstname` text;--> statement-breakpoint
ALTER TABLE `user` ADD `lastname` text;--> statement-breakpoint
ALTER TABLE `user` ADD `emergencyname` text;--> statement-breakpoint
ALTER TABLE `user` ADD `emergencyphone` text;