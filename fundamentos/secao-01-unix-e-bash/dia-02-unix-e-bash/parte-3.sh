#Exercício 1
echo 'Liste todos os processos' 

ps 

#Exercício 2
echo 'Agora use o comando sleep 30 &'

sleep 30 &

#Exercício 3
echo 'Use a listagem de processos para encontrar o PID do processo que está executando
 o comando sleep 30 e termine a sua execução (mate o processo)'

 ps
 kill 47078

 #Exercício 4
 echo 'Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que 
 ele continue executando em background'

 sleep 30
 ctrl+Z
 bg 

 #Exercício 5
 echo 'Crie um processo em background que rode o comando sleep por 300 segundos'

 sleep 300 &

 #Exercício 6
 echo 'Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, 
 respectivamente.'
    Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) 
    após cada um começar a executar.

sleep 200
ctrl+Z 
bg
sleep 100
ctrl+Z 
bg

#Exercício 7
echo 'Verifique que apenas o processo sleep 300 está em execução com o comando jobs.
 Suspenda a execução desse processo.'
    Você vai precisar trazer o processo para foreground (fg) 
    e suspendê-lo (ctrl+z), ou enviar um sinal.

jobs
fg %1
ctrl+Z 

#Exercício 8
echo 'Retome a execução do processo sleep 100 em background com o comando bg'

bg %3

#Exercício 9
echo 'Termine a execução de todos os processos sleep'

kill %1
kill %2
kill %3