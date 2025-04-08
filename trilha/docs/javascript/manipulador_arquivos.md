Neste projeto, você deverá exibir, criar, alterar, remover e mover arquivos do seu sistema.
Além disso, seu código deverá ser capaz de receber argumentos pela linha de comando.

Crie um código a ser executado pelo terminal que aceite os seguintes argumentos:

`node meu_cli.js exibir meu_arquivo_teste.txt`  
O conteúdo do arquivo deve aparecer integralmente na tela.

`node meu_cli.js criar meu_arquivo_teste.txt "Meu texto a ser gravado no arquivo"`  
Deve criar um arquivo com o nome passado no segundo argumento (meu_arquivo_teste.txt) e contendo o texto que foi passado como terceiro argumento ("Meu texto a ser gravado no arquivo").

`node meu_cli.js alterar meu_arquivo_teste.txt "Mudei o texto aqui"`  
Deve alterar o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt) para que seu conteúdo seja o texto que foi passado como terceiro argumento ("Mudei o texto aqui").

`node meu_cli.js remover meu_arquivo_teste.txt`  
Deve deletar o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt).

`node meu_cli.js mover meu_arquivo_teste.txt C:/pasta_destino/meu_arquivo_teste.txt`  
Deve mover o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt) para o caminho passado no terceiro argumento (C:/pasta_destino/meu_arquivo_teste.txt).

`node meu_cli.js OU node meu_cli.js help`  
Deve exibir a lista de comandos possíveis e uma descrição de como usá-los.
Você deve validar todos os parâmetros, de forma que ao passar parâmetros inválidos, seu programa deverá exibir uma mensagem de erro e exibir a lista de comandos e suas instruções de uso.

Uma outra ideia é fazer o programa renomear todos os arquivos de uma pasta conforme um dado critério.
Ou ainda, agrupar os arquivos em diferentes pastas conforme sua extensão.