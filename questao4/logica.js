function sequenciaA() {
    let resultado = [];
    for (let i = 1; i <= 9; i += 2) {
        resultado.push(i);
    }
    return resultado;
}

function sequenciaB() {
    let resultado = [];
    for (let i = 1; i <= 7; i++) {
        resultado.push(Math.pow(2, i));
    }
    return resultado;
}

function sequenciaC() {
    let resultado = [];
    for (let i = 0; i <= 6; i++) {
        resultado.push(i * i);
    }
    return resultado;
}

function sequenciaD() {
    let resultado = [];
    for (let i = 2; i <= 10; i += 2) {
        resultado.push(i * i);
    }
    return resultado;
}

function sequenciaE() {
    let resultado = [1, 1];
    for (let i = 2; i < 8; i++) {
        resultado.push(resultado[i - 1] + resultado[i - 2]);
    }
    return resultado;
}

function sequenciaF() {
    let resultado = [2, 10, 12, 16];
    for (let i = 17; i < 21; i++) {
        if (i % 5 !== 0) {
            resultado.push(i);
        }
    }
    return resultado;
}

console.log("Sequência A:", sequenciaA());
console.log("Sequência B:", sequenciaB());
console.log("Sequência C:", sequenciaC());
console.log("Sequência D:", sequenciaD());
console.log("Sequência E:", sequenciaE());
console.log("Sequência F:", sequenciaF());