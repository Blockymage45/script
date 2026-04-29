// 1) declara a função
// valor de soma ()
// let x = "";
// console.log(x);
// x = "oi";

                    //string
function imprimeTexto(texto){
    console.log(texto);
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");
// imprimeTexto("outro texto")

// três formas de escrever funções

imprimeTexto(soma());

function soma(){
    return 2 + 2;
}
console.log(soma())

// console.log(soma())