Hooks
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

Comunicação com uma API
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

gerenciamento de estados / compartilhamento de dados entre componentes distantes
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

suspense / lazy

estilização dinâmica
    - cn
    - styled components

router

testes
