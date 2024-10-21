function descobrirLamps() {
    const lamps = {
        'interruptor 1': 'desligada',
        'interruptor 2': 'desligada',
        'interruptor 3': 'desligada',
    };

    lamps['interruptor 1'] = 'ligada';

    lamps['interruptor 1'] = 'desligada';
    lamps['interruptor 2'] = 'ligada';

    const resultado = verificarLamps(lamps);
    return resultado;
}

function verificarLamps(lamps) {
    let lampasAcesas = [];
    let lampasDesligadas = [];

    lampasAcesas.push('A lâmpada do interruptor 2 está acesa.');

    lampasDesligadas.push('A lâmpada do interruptor 1 está desligada, porém aquecida.');

    lampasDesligadas.push('A lâmpada do interruptor 3 está desligada e fria.');

    return {
        lampsAcesas: lampasAcesas,
        lampsDesligadas: lampasDesligadas,
    };
}

const resultado = descobrirLamps();
console.log(resultado.lampsAcesas);
console.log(resultado.lampsDesligadas);