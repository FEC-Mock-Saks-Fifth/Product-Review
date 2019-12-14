DROP DATABASE IF EXISTS reviews

CREATE DATABASE reviews

USE reviews

CREATE TABLE revs (
  id int auto_increment PRIMARY KEY,
  dateAdded varchar(300),
  rating varchar(300),
  ps varchar(300),
  width varchar(300),
  reccomend varchar(300),
  fit varchar(300),
  revTitle varchar(300),
  rev_desc varchar(300),
  country varchar(300),
  city varchar(300),
  states varchar(300),
  gender varchar(300),
  age varchar(300),
  yes varchar(300),
  nah varchar(300),
  item_id varchar(300)
)