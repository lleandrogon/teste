function letraA(string) {

    const letra = 'a';
    let contador = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === letra) {
            contador++;
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vez(es) na string.`;
    } else {
        return "A letra 'a' não foi encontrada na string.";
    }
}

console.log(letraA('Amanda é amada pelo povo.'));
console.log(letraA('Leandro merece essa vaga de emprego.'));
console.log(letraA('Fui correr de noite'));