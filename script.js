function botao() {
    alert ("Kwaii. UwU :)")
}



function Calcularnota() {
    let nota1tri;
    let nota2tri;
    let resultadonota;
    nota1tri = Number(prompt("Digite sua nota do 1º Trimestre"));
    nota2tri = Number(prompt("Digite sua nota do 2º Trimestre"));

    resultadonota = 180 - (nota1tri + nota2tri);


    if (resultadonota <= 0 ){
        alert("Parabéns, está aprovado!")
    } else {
        alert("Estude mais, você precisa tirar "+ resultadonota+ " no 3 tri");
    }
}

function ParImpar() {
    let numero;
    let resultadoparimpar;
    numero = Number(prompt("informe um número:"));

    resultadoparimpar = numero % 2 /* % resto da divisão*/

    if (resultadoparimpar == 0){/* == é para comprarar */
        alert("O seu número " + numero + " é Par") 
    }else{
        alert("O seu número " + numero + " é Ímpar")
    }

}


function domain() {
    document.body.style.backgroundImage = "url(shadowgardenn.gif)"
}