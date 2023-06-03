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

# 5 - 








