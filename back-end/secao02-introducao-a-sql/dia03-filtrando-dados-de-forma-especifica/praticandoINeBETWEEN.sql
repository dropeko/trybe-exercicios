# Forma de fazer essa pesquisa usando o IN:
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

# Você poderia fazer esse mesmo processo para números também:
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);

# MEIOS DE FAZER PESQUISA/QUERIES USANDO O IN ---->
SELECT * FROM banco_de_dados
WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

-- ou também
SELECT * FROM banco_de_dados
WHERE coluna IN (expressão);

------------------------------------------------------------------------------------------------------
# Forma de fazer pesquisa usando o BEETWEEN --->
expressão BETWEEN valor1 AND valor2;
-- a expressão é a sua query
-- e valor1 e valor2 delimitam o resultado
# Ex:
-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

# Usando o BETWEEN com strings
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

# Usando o BETWEEN com datas
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';


