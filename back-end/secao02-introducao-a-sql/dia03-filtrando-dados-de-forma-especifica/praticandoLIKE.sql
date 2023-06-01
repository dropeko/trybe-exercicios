# Resultado da pesquisa. Encontra qualquer resultado finalizando com DON
SELECT * FROM sakila.film
WHERE title LIKE '%don';

# Resultado da pesquisa. Encontra qualquer resultado iniciando com PLU
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

# Resultado da pesquisa. Encontra qualquer resultado que contém PLU
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

# Resultado da pesquisa. Encontra qualquer resultado que inicia com P e termina com R
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

# Resultado da pesquisa. Encontra qualquer resultado em que o segundo caractere da frase é C
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

# Resultado da pesquisa. Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';



