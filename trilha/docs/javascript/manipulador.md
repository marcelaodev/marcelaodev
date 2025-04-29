Neste projeto, você deverá desenvolver um script utilitário para rodar no terminal que é capaz de exibir, criar, alterar, remover e mover arquivos do seu sistema conforme o argumento que for passado na linha de comando.

Além disso, você deverá usar [o conjunto de testes automatizados disponíveis no nosso repositório](https://github.com/irmaos-dev/irmaos.dev/trilha/docs/javascript/manipulador/) que fará uma verificação rigorosa da corretude do seu programa. Baixe os arquivos do link (package.json e manipulador.test.js) para a mesma pasta do seu script, abra o terminal na pasta e rode `npm install` e depois `npm test`. A ferramenta "Jest" irá executar todos os testes contra o seu script e te indicará as funcionalidades que estão corretas ou erradas. Seu script deve ser nomeado como `manipulador.js` para que os testes sejam feitos.

Exemplo de cada comando do programa:

`node manipulador.js exibir meu_arquivo_teste.txt`  
O conteúdo do arquivo deve aparecer integralmente na tela.

`node manipulador.js criar meu_arquivo_teste.txt "Meu texto a ser gravado no arquivo"`  
Deve criar um arquivo com o nome passado no segundo argumento (meu_arquivo_teste.txt) e contendo o texto que foi passado como terceiro argumento ("Meu texto a ser gravado no arquivo").

`node manipulador.js alterar meu_arquivo_teste.txt "Mudei o texto aqui"`  
Deve alterar o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt) para que seu conteúdo seja o texto que foi passado como terceiro argumento ("Mudei o texto aqui").

`node manipulador.js remover meu_arquivo_teste.txt`  
Deve deletar o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt).

`node manipulador.js mover meu_arquivo_teste.txt C:/pasta_destino/meu_arquivo_teste.txt`  
Deve mover o arquivo de nome passado no segundo argumento (meu_arquivo_teste.txt) para o caminho passado no terceiro argumento (C:/pasta_destino/meu_arquivo_teste.txt).

`node manipulador.js OU node manipulador.js help`  
Deve exibir a lista de comandos possíveis e uma descrição de como usá-los.
Você deve validar todos os parâmetros, de forma que ao passar parâmetros inválidos, seu programa deverá exibir uma mensagem de erro e exibir a lista de comandos e suas instruções de uso.
