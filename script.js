function botao() {
    alert ("Kwaii. UwU :)")
}

function hello() {
    alert("hello world/ olá mundo")
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


function Domain() {
    document.body.style.backgroundImage = "url('shadowgarden.gif')";
    console.log("Funcionou!"); // Usei IA nisso
}

function MaiorMenor() {
    let Numero1
    let Numero2

    Numero1 = Number(prompt("Informe o primeiro número:"));
    Numero2 = Number(prompt("Informe o segundo número:"));

    if(Numero1 > Numero2) {
            alert("O " + Numero1 + " é maior que o " + Numero2 + ".")
    }else if(Numero2 > Numero1){
            alert("O " + Numero2 + " é maior que o " + Numero1 + ".")
    }else{
            alert("os 2 números são iguais")
    }
    


}

function site() {
    let nome;
    let mostrar
    nome = prompt("qual é o seu nome?")
    mostrar = document.getElementById('mostrar')

    mostrar.innerHTML = `<p>Olá <mark>${nome}!</mark> Seja bem vindo </p>`;

   switch(nome){

    case "flavio":
        mostrar.innerHTML = `<img src="flavio.jpeg" alt="foto do flavio hipotético" height="300" widith="200">`;
        break;
        
   }

}

function aleatorio() {

    let minimo = 1
    let maximo = 100
    let dif = maximo - minimo /*diferença*/
    let aleatorio = Math.random()
    let num = minimo + Math.trunc(dif * aleatorio)

    let mostrar = document.getElementById('ResultadoAleatorio')

     
    mostrar.innerHTML = `<p>resultado: ${num}</p>`


    if(num == 67) {
        alert("Você acabou de mogarf uns betinhas por aí, + 100 de aura")
        mostrar.innerHTML = `<img src="6-6-7.gif" height="100" width="100">`
    }else{
    
    }

}



