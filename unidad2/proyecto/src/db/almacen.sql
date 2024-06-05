drop database if exists Almacen;
create database if not exists Almacen;
use almacen;

drop table clientes if exists;
create table if not exists clientes(
id int primary key not null auto_increment,
apellido varchar(50) not null,
nombre varchar(50) not null,
direccion varchar(250) null,
fecha_nacimiento date not null,
telefono varchar(20) null);
insert into clientes VALUES(null, 'sánchez', 'cristopher', 'mi casa', '2003-02-11', '+56952186811');
select * from clientes;

drop table empleados if exists;
create table if not exists empleados(
id int primary key not null auto_increment,
apellido varchar(50) not null,
nombre varchar(50) not null,
cargo set('vendedor', 'reponedor', 'atencion_cliente', 'cajero') not null,
fecha_nacimiento date not null,
fecha_contratado timestamp default current_timestamp,
desempleado boolean default false not null,
salario int not null check(salario >=0));
insert into empleados VALUES(null, 'henríquez', 'alejandro', 'cajero', '2003-02-11', null, false, 1500);
select * from empleados;

drop table productos if exists;
create table if not exists productos(
id int primary key not null auto_increment,
nombre varchar(100) not null,
descripcion text null,
precio int not null,
stock int not null check (stock >=0));
insert into productos VALUES(null, 'chocolate', 'barra bañada en chocolate', 500, 29);
select * from productos;

drop table boletas if exists;
create table if not exists boletas(
id int primary key not null auto_increment,
id_cliente_fk int not null,
id_empleado_fk int not null,
emision timestamp default current_timestamp,
total int not null,
foreign key (id_cliente_fk) references clientes(id),
foreign key (id_empleado_fk) references empleados(id));

drop table detalle_boletas if exists;
create table if not exists detalle_boletas(
id int primary key not null auto_increment,
id_boleta_fk int not null,
id_producto_fk int not null,
cantidad int not null check(cantidad > 0),
precio_unitario int not null check(precio_unitario > 0),
sub_total int not null check(sub_total > 0),
foreign key (id_boleta_fk) references boletas(id),
foreign key (id_producto_fk) references productos(id));