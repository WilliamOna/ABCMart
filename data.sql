-- Run this SQL script to generate a test DB for this express server
drop table if exists paper;
create table paper(
	id serial,
	type varchar,
	price numeric,
	color varchar,
	size varchar,
	supplier varchar
);

insert into paper(type, price, color, size, supplier) 
values('notebook', 2, 'white','legal','paper co.');
insert into paper(type, price, color,size, supplier) 
values('wrapping', 5, 'white','long','paper co.');
insert into paper(type, price, color,size, supplier) 
values('construction', 7, 'white','small','paper co.');

select * from paper;