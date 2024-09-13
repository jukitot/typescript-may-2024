create table cities
(
    id int primary key auto_increment,
    city varchar(20)
);

create table users
(
    id int primary key auto_increment,
    name varchar(20) not null ,
    age int not null ,
    city_id int,
    foreign key (city_id) references cities (id)
);

select * from users
                  join cities on cities.id = users.city_id;

select * from users
                  left join cities c on c.id = users.city_id;


select * from users
                  right join cities c on c.id = users.city_id;

select client.*, CountOfWorkers from client
                                         join application a on client.idClient = a.Client_idClient
                                         join department d on client.Department_idDepartment = d.idDepartment
where Sum > 10000;
