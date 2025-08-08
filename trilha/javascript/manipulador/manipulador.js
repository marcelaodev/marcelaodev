#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Função para exibir o menu de ajuda
function mostrarAjuda() {
    console.log(`
Uso:
  node manipulador.js <comando> [argumentos]

Comandos disponíveis:

  exibir <caminho_arquivo>
      Exibe o conteúdo do arquivo na tela.

  criar <caminho_arquivo> "<conteudo>"
      Cria um arquivo com o conteúdo especificado.

  alterar <caminho_arquivo> "<novo_conteudo>"
      Altera o conteúdo de um arquivo existente.

  remover <caminho_arquivo>
      Remove o arquivo especificado.

  mover <origem> <destino>
      Move o arquivo para o novo caminho.

  help
      Exibe esta ajuda.
`);
}

// Funções principais
function exibirArquivo(caminho) {
    if (!fs.existsSync(caminho)) {
        console.error("Erro: Arquivo não encontrado.");
        return;
    }
    const conteudo = fs.readFileSync(caminho, 'utf8');
    console.log(conteudo);
}

function criarArquivo(caminho, conteudo) {
    if (fs.existsSync(caminho)) {
        console.error("Erro: Arquivo já existe. Não é possível sobrescrever.");
        return;
    }

    const dir = path.dirname(caminho);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(caminho, conteudo, 'utf8');
    console.log(`Arquivo criado: ${caminho}`);
}

function alterarArquivo(caminho, conteudo) {
    if (!fs.existsSync(caminho)) {
        console.error("Erro: Arquivo não encontrado.");
        return;
    }
    fs.writeFileSync(caminho, conteudo, 'utf8');
    console.log(`Arquivo alterado: ${caminho}`);
}

function removerArquivo(caminho) {
    if (!fs.existsSync(caminho)) {
        console.error("Erro: Arquivo não encontrado.");
        return;
    }
    fs.unlinkSync(caminho);
    console.log(`Arquivo removido: ${caminho}`);
}

function moverArquivo(origem, destino) {
    if (fs.existsSync(destino)) {
        console.error("Erro: Arquivo de destino já existe. Não é possível sobrescrever.");
        return;
    }

    if (!fs.existsSync(origem)) {
        console.error("Erro: Arquivo de origem não encontrado.");
        return;
    }

    const pastaDestino = path.dirname(destino);
    if (!fs.existsSync(pastaDestino)) {
        fs.mkdirSync(pastaDestino, { recursive: true });
    }

    fs.renameSync(origem, destino);
    console.log(`Arquivo movido para: ${destino}`);
}

// Início do CLI
const args = process.argv.slice(2);
const comando = args[0];

switch (comando) {
    case 'exibir':
        if (args.length !== 2) return mostrarAjuda();
        exibirArquivo(args[1]);
        break;

    case 'criar':
        if (args.length !== 3) return mostrarAjuda();
        criarArquivo(args[1], args[2]);
        break;

    case 'alterar':
        if (args.length !== 3) return mostrarAjuda();
        alterarArquivo(args[1], args[2]);
        break;

    case 'remover':
        if (args.length !== 2) return mostrarAjuda();
        removerArquivo(args[1]);
        break;

    case 'mover':
        if (args.length !== 3) return mostrarAjuda();
        moverArquivo(args[1], args[2]);
        break;

    case 'help':
    case undefined:
        mostrarAjuda();
        break;

    default:
        console.error("Erro: Comando inválido.");
        mostrarAjuda();
        break;
}
