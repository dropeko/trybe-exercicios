#Exercício 1

echo 'Na pasta unix_tests baixe um arquivo countries.txt usando o curl'
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#Exercício 2

echo 'Mostre todo o conteúdo do arquivo countries.txt na tela'
cat countries.txt

#Exercício 3

echo 'Mostre o conteúdo do arquivo, página por página, até encontrar Zambia'
less countries.txt

#Exercício 4 

echo 'Mostre novamente página por página mas agora utilize o comando para buscar por 
Zambia'
less countries.txt
/Zambia 

#Exercício 5

echo 'Busque por Brazil no countries.txt'
grep Brazil countries.txt

#Exercício 6

echo 'Busque por brazil, utilizando o lower case'
grep -i brazil countries.txt

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione 
algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

#Exercício 7

echo 'Busque pelas frases que não contenham a palavra fox'
grep -iv 'fox' phrases.txt

#Exercício 8

echo 'Conte o número de palavras do arquivo phrases.txt'
wc -w phrases.txt

#Exercício 9

echo 'Conte o número de linhas do arquivo phrases.txt'
wc -l phrases.txt

#Exercício 10

echo 'Crie os arquivos empty.tbt e empty.pdf'
cat > empty.tbt 
cat > empty.pdf

#Exercício 11

echo 'Liste todos os arquivos do diretório unix_tests'
cd unix_tests
ls

#Exercício 12

echo 'Liste todos os arquivos que terminem em .txt'
ls *.txt

#Exercício 13

echo 'Liste todos os arquivos que terminem em .txt ou .tbt'
ls *.txt *.tbt

#Exercício 14 

echo 'Acesse o manual do comando ls'
man ls
