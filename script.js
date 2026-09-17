function botao() {
    alert ("Kwaii. UwU :)")
}

let nota1tri;
let nota2tri;
let resultadonota;

function Calcularnota() {
    nota1tri = Number(prompt("Digite sua nota do 1º Trimestre"));
    nota2tri = Number(prompt("Digite sua nota do 2º Trimestre"));

    resultadonota = 180 - nota1tri + nota2tri;
    Number(alert (resultadonota));
}