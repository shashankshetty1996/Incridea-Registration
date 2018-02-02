-- Adminer 4.3.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE TABLE college (
College_code int(11) NOT NULL AUTO_INCREMENT,
Name varchar(255) DEFAULT NULL,
Type varchar(10) DEFAULT 'normal',
PRIMARY KEY (College_code)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE eventlist (
id int(11) NOT NULL AUTO_INCREMENT,
Name varchar(50) DEFAULT NULL,
Branch varchar(50) DEFAULT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE issue (
id int(11) NOT NULL AUTO_INCREMENT,
message varchar(255) NOT NULL,
done tinyint(4) NOT NULL DEFAULT '0',
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE participants (
id int(11) NOT NULL AUTO_INCREMENT,
Name varchar(255) DEFAULT NULL,
USN varchar(100) DEFAULT NULL,
Email_ID varchar(255) DEFAULT NULL,
Phone decimal(10,0) DEFAULT NULL,
College_code int(11) NOT NULL,
PID varchar(10) NOT NULL,
PRIMARY KEY (id),
KEY College_code (College_code),
CONSTRAINT participants_ibfk_1 FOREIGN KEY (College_code) REFERENCES college (College_code) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE users (
SI_NO int(11) NOT NULL AUTO_INCREMENT,
username varchar(255) NOT NULL,
password varchar(512) NOT NULL,
flag tinyint(4) DEFAULT '0',
PRIMARY KEY (SI_NO),
UNIQUE KEY username (username)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 2018-02-02 06:51:13