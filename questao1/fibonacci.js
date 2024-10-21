function fibonacci(num) {
    if (num < 0) {
        return `Números negativos não pertencem a sequência.`;
    }

    let a = 0;
    let b = 1;
    let sequencia = [a, b];

    if (num === a || num === b) {
        return `${num} pertence a sequência de Fibonacci: ${sequencia}`
    }

    for (let proximo = a + b; proximo <= num; proximo = a + b) {
        sequencia.push(proximo)
        if (proximo === num) {
            return `${num} pertence a sequência de Fibonacci: ${sequencia}`;
        }
        a = b;
        b = proximo;
    }

    return `${num} não pertence a sequência de Fibonacci: ${sequencia}`
}

console.log(fibonacci(21));
console.log(fibonacci(4));