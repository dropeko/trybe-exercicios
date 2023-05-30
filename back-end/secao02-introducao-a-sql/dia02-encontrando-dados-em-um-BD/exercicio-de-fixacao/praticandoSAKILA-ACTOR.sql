USE sakila;

# Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name AS 'Sobrenomes Unicos' FROM actor;

# Quantos sobrenomes únicos temos na tabela?
SELECT COUNT( DISTINCT last_name) AS 'Quantidade de sobrenomes unicos' FROM actor;

# Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT last_name, first_name FROM actor
ORDER BY last_name ASC, first_name DESC;

