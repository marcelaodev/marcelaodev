function mediaIdades(pessoas) {
    const total = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return pessoas.length ? total / pessoas.length : 0;
}

module.exports = mediaIdades;