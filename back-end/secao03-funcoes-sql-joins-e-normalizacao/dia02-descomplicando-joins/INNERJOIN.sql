# INNER JOIN
# Como foi visto no vídeo, o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

# Exemplo:
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

