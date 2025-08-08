module.exports = vezes => {
    let str = '';
    for (let i = 0; i < vezes; i++) {
        str = str + '*';
    }
    return str;
}