# Exercício 1

echo 'Crie um diretório chamado unix_tests'
mkdir unix_tests
echo 'Navegue até o novo diretório'
cd unix_tests

# Exercício 2

echo 'Crie um arquivo com nome trybe.txt'
cat > trybe.txt

#Exercício 3

echo 'Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt'
cp trybe.txt trybe_backup.txt

#Exercício 4

echo 'Renomeie o arquivo trybe.txt'
mv trybe.txt trybe2.txt

#Exercício 5

echo 'Dentro de unix_tests, crie um novo diretório backup'
cd unix_tests
mkdir backup

#Exercício 6 

echo 'Mova o arquivo trybe_bakcup.txt para o diretório backup'
mv trybe_backup.txt backup

#Exercício 7

echo 'Dentro de unix_tests, crie um novo diretório backup2'
cd unix_tests
mkdir backup2

#Exercício 8

echo 'Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2'
mv backup/trybe_backup.txt backup2

#Exercício 9

echo 'Apague a pasta backup'
rm -rf backup

#Exercício 10

echo 'Renomeie a pasta backup2 para backup'
mv backup2 backup

#Exercício 11

echo  'Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele'
pwd 
ls

#Exercício 12

echo 'Apague o diretório backup'
rm -rf backup

#Exercício 13

echo 'Limpe o terminal'
clear

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema 
operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado 
skills.txt

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

#Exercício 14

echo 'Mostre na tela as 5 primeiras skills do arquivo skills.txt'
head -5 skills.txt

#Exercício 15

echo 'Mostre na tela as últimas 4 skills do arquivo skills.txt'
Tail -4 skills.txt

#Exercício 16

echo 'Apague todos os arquivos que terminem em .txt'
rm -rf *.txt