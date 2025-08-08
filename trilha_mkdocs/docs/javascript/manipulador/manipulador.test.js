const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// caminho do script
const CLI_PATH = path.join(__dirname, 'manipulador.js');
// caminho do arquivo teste a ser criado
const TEST_FILE = path.join(__dirname, 'teste.txt');
// caminho da pasta teste a ser criada
const DEST_DIR = path.join(__dirname, 'destino');
// caminho que o arquivo teste será movido
const DEST_FILE = path.join(DEST_DIR, 'teste.txt');

describe('CLI utilitário de arquivos', () => {
    const origem = path.join(__dirname, 'origem.txt');
    const pastaNova = path.join(__dirname, 'nova_pasta');
    const caminhoArquivo = path.join(pastaNova, 'destino.txt');
    const absolutePath = path.resolve(__dirname, 'teste_absoluto.txt');

    afterEach(() => {
        // deleta os arquivos ou pastas criados temporariamente para o teste
        if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
        if (fs.existsSync(DEST_FILE)) fs.unlinkSync(DEST_FILE);
        if (fs.existsSync(DEST_DIR)) fs.rmdirSync(DEST_DIR);
        if (fs.existsSync(caminhoArquivo)) fs.unlinkSync(caminhoArquivo);
        if (fs.existsSync(pastaNova)) fs.rmdirSync(pastaNova);
        if (fs.existsSync(origem)) fs.unlinkSync(origem);
        if (fs.existsSync(absolutePath)) fs.unlinkSync(absolutePath);
    });

    test('criar um arquivo com conteúdo', () => {
        const conteudo = "Olá mundo!";
        // executa "node manipulador.js criar teste.txt "Olá mundo!""
        execSync(`node ${CLI_PATH} criar ${TEST_FILE} "${conteudo}"`);
        // le o arquivo criado no disco
        const resultado = fs.readFileSync(TEST_FILE, 'utf8');
        // confere se o arquivo tem o conteúdo esperado
        expect(resultado).toBe(conteudo);
    });

    test('criar com caminho absoluto', () => {
        // roda o script para criar um arquivo usando um caminho absoluto
        execSync(`node ${CLI_PATH} criar ${absolutePath} "Absoluto"`);
        // verifica se o arquivo existe
        expect(fs.existsSync(absolutePath)).toBe(true);
    });    

    test('cria arquivo em nova pasta que não existia antes', () => {
        const conteudo = "Texto em nova pasta";
        // executa o script
        execSync(`node ${CLI_PATH} criar ${caminhoArquivo} "${conteudo}"`);
        // verifica que o arquivo agora existe no caminho destino
        expect(fs.existsSync(caminhoArquivo)).toBe(true);
        const resultado = fs.readFileSync(caminhoArquivo, 'utf8');
        expect(resultado).toBe(conteudo);
    });

    test('exibir conteúdo do arquivo', () => {
        const conteudo = 'Conteúdo de teste';
        // cria um arquivo no disco já com um conteudo
        fs.writeFileSync(TEST_FILE, conteudo);
        // roda o comando de exibir
        const output = execSync(`node ${CLI_PATH} exibir ${TEST_FILE}`).toString().trim();
        // verifica se o conteúdo criado é o mesmo do resultado do script
        expect(output).toBe(conteudo);
    });

    test('alterar conteúdo de um arquivo', () => {
        const antigo = 'Texto antigo';
        const novo = "Texto novo";
        // cria um arquivo no disco
        fs.writeFileSync(TEST_FILE, antigo);
        // roda o script para alterar o conteúdo do arquivo
        execSync(`node ${CLI_PATH} alterar ${TEST_FILE} "${novo}"`);
        // le o arquivo no disco
        const resultado = fs.readFileSync(TEST_FILE, 'utf8');
        // verifica se o arquivo foi de fato alterado (tem o conteúdo novo)
        expect(resultado).toBe(novo);
    });

    test('remover arquivo existente', () => {
        // cria um arquivo no disco
        fs.writeFileSync(TEST_FILE, 'Teste');
        // roda o script para remover arquivo
        execSync(`node ${CLI_PATH} remover ${TEST_FILE}`);
        // verifica que o arquivo já não existe no disco mais
        expect(fs.existsSync(TEST_FILE)).toBe(false);
    });

    test('mover arquivo para outra pasta', () => {
        // cria o arquivo no disco
        fs.writeFileSync(TEST_FILE, 'Mover isso');
        // roda o script para mover o arquivo
        execSync(`node ${CLI_PATH} mover ${TEST_FILE} ${DEST_FILE}`);
        // verifica que o arquivo agora existe no caminho destino
        expect(fs.existsSync(DEST_FILE)).toBe(true);
        // verifica que o arquivo agora não existe no caminho de origem
        expect(fs.existsSync(TEST_FILE)).toBe(false);
    });

    test('move arquivo para nova pasta que não existia antes', () => {
        // cria o arquivo no disco
        fs.writeFileSync(origem, 'Conteúdo original');
        // executa o script para mover o arquivo
        execSync(`node ${CLI_PATH} mover ${origem} ${caminhoArquivo}`);
        // confere se o arquivo existe no destino
        expect(fs.existsSync(caminhoArquivo)).toBe(true);
        // confere que o arquivo não existe mais na origem
        expect(fs.existsSync(origem)).toBe(false);
    });

    test('comando inválido exibe ajuda', () => {
        const output = execSync(`node ${CLI_PATH} comando_invalido`).toString();
        expect(output).toMatch(/Comandos disponíveis/);
    });

    test('comando help exibe a lista de comandos', () => {
        const output = execSync(`node ${CLI_PATH} help`).toString();
        expect(output).toMatch(/Comandos disponíveis/);
    });
});

describe('Validações de erro e entradas inválidas', () => {

    afterEach(() => {
        // deleta os arquivos ou pastas criados temporariamente para o teste
        if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
        if (fs.existsSync(DEST_FILE)) fs.unlinkSync(DEST_FILE);
        if (fs.existsSync(DEST_DIR)) fs.rmdirSync(DEST_DIR);
    });

    test('erro ao tentar exibir arquivo inexistente', () => {
        try {
            execSync(`node ${CLI_PATH} exibir arquivo_nao_existe.txt`);
        } catch (error) {
            expect(error.stdout.toString()).toMatch(/Erro: Arquivo não encontrado/);
        }
    });

    test('erro ao tentar alterar arquivo inexistente', () => {
        try {
            execSync(`node ${CLI_PATH} alterar arquivo_nao_existe.txt "texto"`);
        } catch (error) {
            expect(error.stdout.toString()).toMatch(/Erro: Arquivo não encontrado/);
        }
    });

    test('erro ao tentar remover arquivo inexistente', () => {
        try {
            execSync(`node ${CLI_PATH} remover arquivo_nao_existe.txt`);
        } catch (error) {
            expect(error.stdout.toString()).toMatch(/Erro: Arquivo não encontrado/);
        }
    });

    test('erro ao tentar mover arquivo inexistente', () => {
        const destino = path.join(DEST_DIR, 'qualquer.txt');
        try {
            execSync(`node ${CLI_PATH} mover arquivo_nao_existe.txt ${destino}`);
        } catch (error) {
            expect(error.stdout.toString()).toMatch(/Erro: Arquivo de origem não encontrado/);
        }
    });

    test('erro ao passar comando inválido', () => {
        try {
            execSync(`node ${CLI_PATH} banana`);
        } catch (error) {
            expect(error.stdout.toString()).toMatch(/Erro: Comando inválido/);
        }
    });

    test('erro ao tentar criar arquivo que já existe', () => {
        fs.writeFileSync(TEST_FILE, 'Texto original');
        try {
            execSync(`node ${CLI_PATH} criar ${TEST_FILE} "Novo conteúdo"`);
        } catch (error) {
            const output = error.stdout.toString();
            expect(output).toMatch(/Arquivo já existe/);
            const conteudo = fs.readFileSync(TEST_FILE, 'utf8');
            expect(conteudo).toBe('Texto original');
        }
    });
    
    test('erro ao tentar mover arquivo para destino já existente', () => {
        const origem = path.join(__dirname, 'mover_origem.txt');
        const destino = path.join(__dirname, 'mover_destino.txt');
    
        fs.writeFileSync(origem, 'Origem');
        fs.writeFileSync(destino, 'Destino');
    
        try {
            execSync(`node ${CLI_PATH} mover ${origem} ${destino}`);
        } catch (error) {
            const output = error.stdout.toString();
            expect(output).toMatch(/Arquivo de destino já existe/);
            expect(fs.existsSync(origem)).toBe(true); // Não removeu
            expect(fs.readFileSync(destino, 'utf8')).toBe('Destino'); // Não sobrescreveu
        } finally {
            fs.unlinkSync(origem);
            fs.unlinkSync(destino);
        }
    });
    
});

describe('Erro ao passar comandos sem argumentos suficientes', () => {
    const comandosInvalidos = [
        { comando: 'exibir', args: '' },
        { comando: 'criar', args: '' },
        { comando: 'criar', args: 'teste.txt' },
        { comando: 'alterar', args: '' },
        { comando: 'alterar', args: 'teste.txt' },
        { comando: 'remover', args: '' },
        { comando: 'mover', args: '' },
        { comando: 'mover', args: 'teste.txt' },
    ];

    comandosInvalidos.forEach(({ comando, args }) => {
        test(`erro ao executar: ${comando} ${args}`, () => {
            try {
                execSync(`node ${CLI_PATH} ${comando} ${args}`);
            } catch (error) {
                const output = error.stdout.toString();
                expect(output).toMatch(/Uso:/);
            }
        });
    });
});
