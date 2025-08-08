### Estilização Dinâmica  
- Crie um botão que  
    - ao clicá-lo ele recebe a classe "clicado"  
    - ao clicar novamente, a classe é removida  
    - a classe "clicado" deve ter uma cor de fundo vermelha  
    - utilizar a biblioteca "classnames"  
- Crie um container que  
    - a cor de fundo é determinada pelo conteúdo de um input  
    - utilizar a biblioteca "styled-components"  
  
### Hooks  
- Conheça os hooks nativos, quando usar e, principalmente, quando NÃO usar  
    - useState, useEffect  
    - useRef, useMemo, useCallback, useContext  
    - others  
- Compreenda a utilidade de criar hooks customizados  
- Crie uma página que contém dois contadores que permitem incrementar, decrementar ou resetar o contador  
    - Faça sem hook customizado  
    - Faça usando um hook customizado chamado "useContador"  
    - faça commits de cada pequena funcionalidade criada  
    - crie testes automatizados para cada funcionalidade  
- Leia exemplos de outros hooks customizados como:  
    - usePrevious  
    - useFetch  
    - useLocalStorage  
    - useDebounce  
    - useForm  
    - useEventListener  
    - useAuth  

### Comunicação com uma API  
- Criar uma aplicação para exibir o resultado de uma requisição usando a função "fetch"  
    - Crie um input para que o usuário insira uma URL a ser chamada  
    - Crie um botão verde que envia a requisição à URL inserida no input  
        - Enquanto a requisição não retornar um resultado, exibir o texto "Carregando"  
        - Se a requisição retornar status 200, exibir um alerta de sucesso  
        - Se a requisição retornar outros status, exibir um alerta de erro  
        - Ao enviar uma nova requisição:  
            - Caso o texto "Carregando" esteja sendo exibir, oculte-o  
            - Caso o resultado esteja sendo exibido, oculte-o  
            - Não exibir o alerta de erro ou sucesso da requisição anterior  
        - Utilize as seguintes URLs para testar:  
            - https://httpstat.us/200?sleep=3000  
            - https://httpstat.us/500?sleep=3000  
- Refazer a aplicação utilizando Tanstack Query  
- faça commits de cada pequena funcionalidade criada  
- crie testes automatizados para cada funcionalidade  

### Gerenciamento de estados / compartilhamento de dados entre componentes distantes  
- Compreenda:  
    - A utilidade de usar uma biblioteca de gerenciamento de estados  
    - Funcionalidades:  
        - Muitos componentes precisam dos mesmos dados  
        - Mudanças em um lugar devem refletir em vários componentes  
        - A lógica de atualização do estado é complicada  
        - Histórico de mudanças do estado  
        - Persistência automática no local storage  
    - O que é o Prop Drilling?     
    - Soluções para o "prop drilling"?  
        - Context API  
        - Zustand  
        - Redux  
    - Prós e contras das soluções de gerenciamento de estados  
- Crie uma aplicação simples que exibam e atualizem os mesmos dados em componentes diferentes  
- Altere ambas implementações da aplicação TodoMVC com as seguintes funcionalidades:  
    - salvar automaticamente no local storage  
    - crie um botão que abre uma modal que exibe:  
        - o total de tarefas  
        - o total de tarefas pendentes  
        - o total de tarefas concluídas  
    - crie um botão que delete todas as tarefas  
    - crie um registro de atividades que exiba:  
        - a data e a hora da atividade  
        - o conteúdo  
        - a ação feita:  
            - item adicionado  
            - item removido  
            - item alterado (exibir o conteúdo anterior)  
            - item marcado como concluido  
            - item marcado como pendente  
            - todos os itens concluídos foram removidos  
            - todos os itens foram removidos  
    - crie um repositório e adicione o TodoMVC como o primeiro commit  
    - faça commits de cada pequena funcionalidade criada  
    - crie testes automatizados para cada funcionalidade  

### Suspense / Skeleton / Lazy Loading / Promises  
- Crie uma aplicação que:  
    - utilize o componente "Suspense" do React  
    - exiba o resultado de uma chamada à URL "https://httpstat.us/200?sleep=3000"  
    - exiba um componente contendo o texto "Carregando..." enquanto a chamada não retornar  
- Crie uma nova aplicação que:  
    - faça duas chamadas à mesma URL ao mesmo tempo, porém alterando o parâmetro "sleep" para valores aleatórios  
    - exiba um componente Suspense enquanto ambas as chamadas não retornarem  
    - utilize Promise.all  
- Crie uma nova aplicação que:  
    - faça duas chamadas em sequência à mesma URL  
    - exiba um componente Suspense enquanto a segunda chamada não retornar  

### Roteamento  
- Crie uma aplicação que:  
    - contenha um menu com 3 links para páginas simples (Início, Sobre, Contato)  
    - ao clicar em qualquer um dos links,  
        - a aplicação deve deixar de exibir a página atual e exibir a página destino  
        - nenhuma requisição deve acontecer na aba Rede do DevTools  
        - a barra de URL do navegador deve ser atualizado com a rota da página destino  
    - ao acessar qualquer rota, o link correspondente deve receber uma estilização diferente (negrito, por exemplo)  
    - ao acessar diretamente as rotas "/", "/sobre" e "/contato", a aplicação deve carregar as páginas Início, Sobre e Contato, respectivamente. O conteúdo em si das páginas pode ser qualquer coisa  
    - ao acessar qualquer outra rota, como /teste, a aplicação deve carregar uma página com uma mensagem "Página inexistente"  
- Refaça a mesma aplicação usando a biblioteca react-router-dom  

###  Formulários e validação  
- Crie uma aplicação que:  
    - contenha os inputs com as seguintes verificações:  
        - Nome  
            - deve ter no mínimo 3 caracteres  
        - Email  
            - deve passar no teste de uma expressão regular (regex) que avalia se a string é um email válido  
        - Senha  
            - deve ter no mínimo 6 caracteres  
            - pelo menos uma letra  
            - pelo menos um número  
            - pelo menos um caractere especial  
        - Confirmar Senha  
            - deve ser igual ao campo "senha"  
        - Aceitar Termos (checkbox)  
            - deve ser marcado  
    - contenha um botão "Enviar" que apenas fica ativado quando todas as restrições são cumpridas  
    - contenha um botão "Limpar" que limpa o valor de todos os inputs  
    - contenha um feedback próximo ao input de qual das restrições aquele input está violando  
- Crie a mesma aplicação, mas usando as bibliotecas Formik e Zod  

### Testes  
- compreenda a diferença entre testes unitários e testes end-to-end  
- compreenda a utilidade de criar testes automatizados:  
    - garantir que as funcionalidades testadas vão continuar funcionando ao alterar algo, ou ao atualizar uma biblioteca  
    - melhorar a qualidade geral ao evidenciar casos especiais (encontrar bugs mais cedo)  
    - possibilitar desenvolver abrindo pouco o navegador  
- compreenda as melhores práticas de testes e o que não é necessário testar  
    - [Test Cases for React JS: A Starter Guide](https://daily.dev/blog/test-cases-for-react-js-a-starter-guide)
    - [What NOT To Assert in React Component Tests](https://zaicevas.com/blog/what-not-to-assert-in-react-component-tests)
    - [Avoid Nesting when you're Testing](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)
- Crie pequenas aplicações que contenham um teste que:  
    - testa que um componente é renderizado ao clicar em um botão  
    - testa que um input é carregado já com um valor padrão  
    - testa que um spinner é exibido enquanto uma Promise não é resolvida  
    - testa que a página é alterada após uma Promise ser resolvida  

### Boas práticas  
- [How to Use React Developer Tools](https://www.freecodecamp.org/news/how-to-use-react-devtools/)
- [React Anti-Patterns and Best Practices](https://www.perssondennis.com/articles/react-anti-patterns-and-best-practices-dos-and-donts)
- [Common Mistakes in React Component Structure](https://medium.com/@Blochware/common-mistakes-in-react-component-structure-avoiding-unnecessary-nesting-and-keeping-components-dcbf626ab568)
- [React Optimization Techniques to Help You Write More Performant Code](https://www.freecodecamp.org/news/react-performance-optimization-techniques/)