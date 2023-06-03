# Chamando o BD que será usado nos exercicios abaixo
USE pixar;

# 1 - Insira as produções da Pixar na tabela movies
INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Dock', 2001, 92),
         ('Procurando Nemo', 'John Lasseter', 2003, 107),
         ('Os Incriveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM movies;

UPDATE movies
SET director = 'Pete Docter'
WHERE director = 'Pete Dock' AND id = 8;

# 2 - O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);

SELECT * FROM box_office;

# 3 - O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.
UPDATE movies
SET director = 'Andrew Stanton'
WHERE id = 9;

SELECT * FROM movies;

# 4 - O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
UPDATE movies
SET title = 'Ratatouille'
WHERE id = 3;

SELECT * FROM movies;

# 5 - Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);

SELECT * FROM box_office;

# 6 - Exclua da tabela movies o filme “WALL-E”.
DELETE FROM box_office
WHERE movie_id = 11; -- este é o id do filme WALL-E

# 7 - Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)
SELECT id FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN (2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';
















