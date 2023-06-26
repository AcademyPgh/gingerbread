CREATE TABLE `races` (
	`id` serial AUTO_INCREMENT,
	`name` varchar(255),
	`routeurl` varchar(2048),
	`herourl` varchar(2048),
	`starttime` datetime,
	`endtime` datetime,
	`description` text,
	`contactemail` varchar(255),
	`instagram` varchar(255),
	`facebook` varchar(255),
	`twitter` varchar(255),
	`created_at` timestamp,
	`updated_at` timestamp);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT,
	`username` varchar(255),
	`firstname` varchar(255),
	`lastname` varchar(255),
	`email` varchar(255),
	`phone` varchar(255),
	`emergencyname` varchar(255),
	`emergencyphone` varchar(255),
	`role` text,
	`created_at` timestamp,
	`updated_at` timestamp);
