Este projeto objetiva criar um backend que interaja com o [projeto de front-end Interação com uma API fake](../front/api/projeto.md), substituindo o serviço [CrudCrud](https://crudcrud.com/) pelo nosso próprio servidor.

Crie um servidor web utilizando Express.JS, com um banco de dados MySQL ou MongoDB (sugiro que faça os dois, um de cada vez) contendo as seguintes rotas:

- GET /pessoas  
Deve retornar um JSON contendo todas as pessoas cadastradas.

- POST /pessoas  
Deve receber um JSON contendo os dados de uma pessoa a ser cadastrada.

- PUT /pessoas/{ID}  
Deve receber um JSON contendo os dados de uma pessoa e alterar os dados da pessoa com o ID passado na rota (exemplo: /pessoas/123 altera a pessoa ID 123)

- DELETE /pessoas/{ID}  
A pessoa do ID passado deve ser removida do banco de dados.

Para utilizar a sua API, coloque o endereço IP do seu backend no frontend, em vez do endereço do CrudCrud. Garanta que o frontend esteja funcionando sem problemas com o backend criado.

**Testar com o Supertest**

Agora que finalizamos a API, você deve criar testes automatizados para ela usando o Supertest.

O Supertest é uma ferramenta que simula as interações que o frontend faria com o backend.

Faça um código que envie requisições HTTP para a aplicação backend que você construiu no projeto anterior. Ela deve testar todas as rotas, simulando um uso real da aplicação.

Exemplos de casos de testes:

verificar que a listagem de pessoas está vazia;
inserir uma nova pessoa e conferir se foi adicionado na rota de listagem;
editar/deletar e conferir;
editar/deletar um usuário que não existe;
fazer requisições inválidas que retornem erros (caso sua API tenha alguma validação).