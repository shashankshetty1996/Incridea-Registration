
drop table if exists college;
drop table if exists eventlist;
drop table if exists issue;
drop table if exists participants;
drop table if exists users;

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
USN varchar(100) NOT NULL,
Email_ID varchar(255) DEFAULT NULL,
Phone decimal(10,0) DEFAULT NULL,
College_code int(11) NOT NULL,
PID varchar(10),
PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE users (
SI_NO int(11) NOT NULL AUTO_INCREMENT,
username varchar(255) NOT NULL,
password varchar(512) NOT NULL,
flag tinyint(4) DEFAULT '0',
PRIMARY KEY (SI_NO),
UNIQUE KEY username (username)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into users(username, password, flag) values('admin', 'crook@incridea', 0);
insert into users(username, password, flag) values('user1', 'abcd1234', 0);
insert into users(username, password, flag) values('user2', 'abcd1234', 0);
insert into users(username, password, flag) values('user3', 'abcd1234', 0);
insert into users(username, password, flag) values('user4', 'abcd1234', 0);
insert into users(username, password, flag) values('user5', 'abcd1234', 0);
insert into users(username, password, flag) values('user6', 'abcd1234', 0);
insert into users(username, password, flag) values('user7', 'abcd1234', 0);
insert into users(username, password, flag) values('user8', 'abcd1234', 0);
insert into users(username, password, flag) values('user9', 'abcd1234', 0);
insert into users(username, password, flag) values('user10', 'abcd1234', 0);
insert into users(username, password, flag) values('user11', 'abcd1234', 0);
insert into users(username, password, flag) values('user12', 'abcd1234', 0);
insert into users(username, password, flag) values('user13', 'abcd1234', 0);
insert into users(username, password, flag) values('user14', 'abcd1234', 0);
insert into users(username, password, flag) values('user15', 'abcd1234', 0);

insert into college (Name) values('N.M.A.M. Institute of Technology');

