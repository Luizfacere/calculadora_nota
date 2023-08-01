
const nota1 = 7.3;
const nota2 = 8.4;
const nota3 = 9.8;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
    console.log('voce foi reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('voce esta de recuperaçao');
} else{
    console.log('voce foi aprovado');
}










