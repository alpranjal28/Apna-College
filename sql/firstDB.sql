create database instagram;
use instagram;

create table user(
id int primary key,
name varchar(30) not null,
age tinyint check(age>=13),
email varchar(50) unique,
followers int default 0,
following int default 0
);

insert into user(id,name,age,email,followers,following)
values
(1,"pranjal",26,"alpranjal@gmail.com",200,200),
(2,"kirti",28,"bhaira@gmail.com",20,220),
(3,"mukul",27,"pandeyji@gmail.com",220,20),
(4,"harsh",26,"sinha@gmail.com",200,300);

select * from users;


SELECT age, count(id), max(followers)
FROM user
group by age
having max(followers);

update user
set followers = 25
where id =2;

ALTER TABLE users
ADD COLUMN city VARCHAR (30) DEFAULT "ambikapur";

ALTER TABLE user
DROP COLUMN city;

ALTER TABLE user
RENAME TO users;

ALTER TABLE users
CHANGE livesIn city VARCHAR(30) DEFAULT "ambikapur";

TRUNCATE TABLE user; 
-- this will remove all data from table