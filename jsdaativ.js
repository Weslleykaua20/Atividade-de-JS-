

function MAIOR_MENOR(a, b, c, d, e) {
    const numeros = [a, b, c, d, e];
    return `Maior: ${Math.max(...numeros)} | Menor: ${Math.min(...numeros)}`;
}

function VOGAL(c) {
    if (!c) return 0;
    const char = c.toLowerCase()[0];
    return ['a', 'e', 'i', 'o', 'u'].includes(char) ? 1 : 0;
}

function LIMITES(li, ls) {
    let pares = [];
    let somatorio = 0;
    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            somatorio += i;
        }
    }
    return `Pares: [${pares.join(', ')}] | Somatório: ${somatorio}`;
}

function ORDEM(a, b, c) {
    const numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return `Ordem crescente: ${numeros.join(', ')}`;
}

function POSITIVO_NEGATIVO(x) {
    return x >= 0;
}

function PAR_IMPAR(x) {
    return x % 2 === 0;
}


function dispararEx1() {
    const a = parseInt(document.getElementById('ex1_a').value);
    const b = parseInt(document.getElementById('ex1_b').value);
    const c = parseInt(document.getElementById('ex1_c').value);
    const d = parseInt(document.getElementById('ex1_d').value);
    const e = parseInt(document.getElementById('ex1_e').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
        document.getElementById('res_ex1').innerHTML = "Por favor, preencha todos os 5 campos.";
        return;
    }
    document.getElementById('res_ex1').innerHTML = `Resultado: ${MAIOR_MENOR(a, b, c, d, e)}.`;
}

function dispararEx2() {
    const caractere = document.getElementById('ex2_c').value;
    if (!caractere) {
        document.getElementById('res_ex2').innerHTML = "Insira um caractere.";
        return;
    }
    const resultado = VOGAL(caractere);
    const textoResultado = resultado === 1 ? "É uma vogal" : "Não é uma vogal";
    document.getElementById('res_ex2').innerHTML = `Resultado: ${textoResultado}.`;
}

function dispararEx3() {
    const li = parseInt(document.getElementById('ex3_li').value);
    const ls = parseInt(document.getElementById('ex3_ls').value);

    if (isNaN(li) || isNaN(ls)) {
        document.getElementById('res_ex3').innerHTML = "Insira os dois limites.";
        return;
    }
    if (li >= ls) {
        document.getElementById('res_ex3').innerHTML = "O limite inferior deve ser menor que o superior.";
        return;
    }
    document.getElementById('res_ex3').innerHTML = `Resultado: ${LIMITES(li, ls)}.`;
}

function dispararEx4() {
    const a = parseInt(document.getElementById('ex4_a').value);
    const b = parseInt(document.getElementById('ex4_b').value);
    const c = parseInt(document.getElementById('ex4_c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('res_ex4').innerHTML = "Preencha os 3 valores.";
        return;
    }
    document.getElementById('res_ex4').innerHTML = `Resultado: ${ORDEM(a, b, c)}.`;
}

function dispararEx5() {
    const x = parseInt(document.getElementById('ex5_x').value);
    if (isNaN(x)) {
        document.getElementById('res_ex5').innerHTML = "Insira um número.";
        return;
    }
    const res = POSITIVO_NEGATIVO(x);
    document.getElementById('res_ex5').innerHTML = `Resultado: ${res ? 'Positivo' : 'Negativo'}.`;
}

function dispararEx6() {
    const x = parseInt(document.getElementById('ex6_x').value);
    if (isNaN(x)) {
        document.getElementById('res_ex6').innerHTML = "Insira um número.";
        return;
    }
    const res = PAR_IMPAR(x);
    document.getElementById('res_ex6').innerHTML = `Resultado: ${res ? 'Par' : 'Ímpar'}.`;
}