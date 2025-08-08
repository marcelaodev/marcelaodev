Agora que temos a página finalizada, você deve criar testes automatizados para ela [usando o Playwright](https://playwright.dev/).

O Playwright é uma ferramenta que simula o uso real de uma página web utilizando um navegador. Com ela, você acessa páginas, clica em botões, lê textos e valores e mais.

Faça um código para o Playwright interagir com a sua página criada no projeto anterior. Ela deve pegar um link do [CrudCrud](https://crudcrud.com/), preencher no seu site e garantir o sucesso de cada operações possíveis e também garantir que operações inválidas não funcionem.

Exemplos de casos de testes:

- adicionar uma pessoa e verificar se os dados da pessoa estão sendo apresentados corretamente na tabela;
- remover a pessoa criada e verificar que não aparece mais na tabela;
- tentar adicionar uma pessoa sem seus dados e garantir que seja exibido um erro.