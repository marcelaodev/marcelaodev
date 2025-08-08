const validarFormatoCPF = require('./4');

test('CPF válido: 123.456.789-00', () => {
    expect(validarFormatoCPF("123.456.789-00")).toBe(true);
});

test('CPF inválido sem pontos e traço', () => {
    expect(validarFormatoCPF("12345678900")).toBe(false);
});

test('CPF inválido (letras em vez de números)', {
    // implemente aqui
})