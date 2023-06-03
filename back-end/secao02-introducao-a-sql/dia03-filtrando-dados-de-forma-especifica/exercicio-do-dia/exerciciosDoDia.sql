# Chamando o banco de dados para usa-lo nos exercicios abaixo
USE store;

# 1 - Vamos lá! Faça uma consulta na tabela item que retorne todos os dados em que a coluna name comece com as letras GR.
SELECT * FROM itens
WHERE name LIKE 'GR%';

# 2 - Agora, escreva uma query para retornar da tabela supplies os dados em que a coluna item_id possua o valor 2. Organize o resultado por ordem alfabética de supplier_id.
SELECT * FROM supplies
WHERE item_id = 2
ORDER BY supplier_id;

# 3 - Em seguida, faça uma consulta para exibir item_id, price e supplier_id de supplies em que o valor de supplier_id tenha a letra N.
SELECT item_id, price, supplier_id FROM supplies
WHERE supplier_id LIKE '%N%';

# 4 - Escreva uma query para exibir todas as informações de supplier que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM suppliers
WHERE name LIKE '%LTDA';







