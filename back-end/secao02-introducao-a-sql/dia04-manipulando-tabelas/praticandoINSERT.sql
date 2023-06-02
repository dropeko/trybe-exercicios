USE sakila;

# 1 - Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

# Confere se o valor foi inserido
SELECT * FROM staff;

# 2 - Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff
(first_name, last_name, address_id, email, store_id, active, username, password) 
VALUES 
('Bumblebee', 'Autobot', 5, 'weloveoptimus@gmail.com', 1, 1, 'bumbs', 'beeRocks'),
('Ricky', 'Sanchez', 3, 'smartestEver@gmail.com', 2, 1, 'R&M', 'MostInteligentBean');

# 3 - Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor(first_name, last_name)
    SELECT first_name, last_name
    FROM customer
    ORDER BY customer_id
    LIMIT 5;

# 4 - Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category(name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

# 5 - Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store(manager_staff_id, address_id)
VALUES (3, 3);
