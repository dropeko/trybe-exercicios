# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
# Sintaxe: 
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

# Podemos utilizar o GROUP BY para agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.
SELECT first_name FROM sakila.actor
GROUP BY first_name;

# Porém, é mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

# Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.
SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

# Agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, por meio de alguns exemplos feitos com o nosso banco de dados sakila.
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;













