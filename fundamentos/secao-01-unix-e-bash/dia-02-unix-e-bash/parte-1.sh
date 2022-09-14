#Exercício 1
echo 'Navegue até a pasta unix_tests'

cd unix_tests

#Exercício 2
echo 'Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores
Internet, Unix, Bash'

cat > skills2.txt
    Internet
    Unix
    Bash

#Exercício 3
echo 'Adicione mais 5 linhas de skills'

cat >> skills2.txt
    Git 
    GitHub 
    VsCode 
    Comandos Input
    Comandos Output

echo 'e depois imprima a lista ordenada no terminal'
    sort skills2.txt

#Exercício 4
echo 'Conte quantas linhas tem o arquivo skills2.txt'

wc -l skills2.txt

#Exercício 5
echo 'Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 
primeiras skills em ordem alfabética'

cat skills2.txt| sort | head -3 | cat > top_skills.txt

#Exercício 6
echo 'Crie um arquivo chamado phrases2.txt pelo terminal e adicione algumas frases'

cat > phrases2.txt
    O que eu quero mais?
    Se eu sei que a vida é bela e linda
    O que eu quero mais?
    Se eu sei que eu estou de bem com vida 
    Jorge ben - Magnólia

#Exercício 7
echo 'Conte o número de linhas que contém as letras br'

grep -inc 'br' phrases2.txt 

#Exercício 8 
echo 'Conte o número de linhas que não contém as letras br'

grep -ivn 'br' phrases2.txt

#Exercício 9 
echo 'Adicione dois nomes de países ao final do arquivo phrases2.txt'

cat >> phrases2.txt
    Brasil
    Egito


#Exercício 10
echo 'Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos do phrases2.txt
e countries.txt'

cat phrases2.txt countries.txt > bunch_of_things.txt

#Exercício 11 
echo 'Crie um novo arquivo bunch_of_things_ordered.txt com o conteúdo do bunch_of_things.txt 
ordennado'

cat bunch_of_things.txt | sort | cat > bunch_of_things_ordered.txt


