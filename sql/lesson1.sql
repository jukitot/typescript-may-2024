use jukito;

show tables;

create table users
(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null ,
    gender varchar(6) not null
);

insert into users values (null, 'Max', 18, 'male');

select * from users;

select id, name from users;

select *
from users
where name = 'oleg';

select * from users
where name like 'o%';

select * from users
where name like '%o%';

select * from users
where name like '__e%';

select * from users
where age = 30;

select * from users
where age > 20;

select * from users
where age between 20 and 30;

select * from users
where age not between 20 and 30;

select * from users
where name = 'oleg' or name = 'olha' and age = 20;

select * from users
where age in(18, 24, 30, 45);

select * from users
where age not in(18, 24, 30, 45);

select * from users
where length(name) <= 4;

select * from users
order by age desc;