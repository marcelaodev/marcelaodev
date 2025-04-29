O objetivo desse projeto é te introduzir aos testes automatizados utilizando Jest.

Basicamente os testes vão estabelecer um conjunto de "perguntas" e "respostas".  
As perguntas são os valores que serão passados para o seu código.  
As respostas são os valores que são esperados receber como resultado do seu código.  
Se a resposta real for diferente da resposta esperada, o teste automatizado irá falhar.

Escrever testes automatizados vai te beneficiar ao:
    - facilitar perceber um erro de lógica do código;
    - garantir que mudanças futuras não estão causando efeitos colaterais no que já funciona.

Geralmente os testes são apresentados aos novatos em um ponto mais avançado nos estudos. Mas será útil estar familiarizado desde já, pois praticamente todos os projetos a seguir possuem exemplos ou requerem a escrita de testes. Além disso, começar já agora vai evitar que você se acostume a não escrever testes, sendo um hábito difícil de ser quebrado posteriormente.

O projeto em si envolve corrigir erros dos testes automatizados ou da lógica do código em si.  
[Na pasta do projeto de testes](https://github.com/irmaos-dev/irmaos.dev/trilha/docs/javascript/testes) você encontrará 10 arquivos. 5 deles são o código em si e 5 são seus respectivos testes.  
Rode `npm install` nessa pasta para instalar a ferramenta de testes (Jest). Logo a seguir, rode o comando `npm run test` para executar os testes.
Cada um dos 5 algoritmos possui um erro que você deve corrigir. Os problemas podem estar no código em si, ser um teste mal feito ou um teste incompleto.

Materiais de apoio:

- [Documentação oficial](https://jestjs.io/pt-BR/docs/getting-started)
- [Teste unitário com Jest](https://www.devmedia.com.br/teste-unitario-com-jest/41234)