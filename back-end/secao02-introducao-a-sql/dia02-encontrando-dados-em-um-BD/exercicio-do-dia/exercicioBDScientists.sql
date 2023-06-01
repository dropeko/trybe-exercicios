USE Scientists;

# 1 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
SELECT 'This is SQL Exercise, Practice and Solution' AS 'Paraphrase';

# 2 - Escreva uma query para exibir três números em três colunas.
SELECT Name AS 'Nome Cientista', SSN AS 'Scientist Number' FROM Scientists LIMIT 3;

# 3 - Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS 'Soma';

# 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT (3 * 4) + 12;

# 5 - Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT Name AS 'Nome Cientista', SSN AS 'Scientist Number' FROM Scientists