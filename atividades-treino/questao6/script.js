// Menu de seleção de todas as atividades

function opcao1() {
    var nome = prompt("Digite o nome do funcionário: ")
    var salario = parseFloat(prompt("Digite o salário: "))

    var novoSalario = salario * 1.10

    alert("O funcionário " + nome + "tem o novo salário de: " + novoSalario)
}

function opcao2() {
    var numA = parseInt(prompt("Digite o número A: "))
    var numB = parseInt(prompt("Digite o número B: "))

    if (numA === numB){
        let numC = numA + numB
        alert("A soma de A e B é: " + numC)
    }
    else{
        let Cnum = numA*numB
        alert("A multiplicação de A e B é: " + Cnum)
    }
}

function opcao3() {
    let precoAVista = parseFloat(prompt("Digite o preço à vista do produto:"))
    let opcaoParcelamento = parseInt(prompt("Escolha a opção de parcelamento (3 ou 5):"))

    if (opcaoParcelamento === 3){
        precoTotal = precoAVista * 1.1;
        valorPrestacao = precoTotal / 3;
        alert("O preço dividido em três parcelas será de: " + valorPrestacao + " E o total será de: " + precoTotal)
    } else if (opcaoParcelamento === 5){
        precoTotal = precoAVista * 1.2;
        valorPrestacao = precoTotal / 5;
        alert("O preço dividido em cinco parcelas será de: " + valorPrestacao + " E o total será de: " + precoTotal)
    } else{
        alert("Só pode parcelar de 3 ou 5 vezes.")
    }
}

function opcao4() {
    var nome = prompt("Digite o nome do aluno(a): ")
    var nota1 = parseFloat(prompt("Digite a primeira nota: "))
    var nota2 = parseFloat(prompt("Digite a segunda nota: "))
    var nota3 = parseFloat(prompt("Digite a terceira nota: "))

    var media = nota1 + nota2 + nota3 / 3
    var aprovacao = media >= 7 ? "Aprovado" : "Reprovado"

    alert("O resultado do aluno(a), " + nome + ", é: " + aprovacao)
}

function opcao5() {
    var num = parseInt(prompt("Digite um número de 1 a 12: "))
    if(num === 1){
        alert("O mês " + num + " é Janeiro.")
    }
    else if (num === 2){
        alert("O mês " + num + " é Fevereiro.")
    }
    else if (num === 3){
        alert("O mês " + num + " é Março.")
    }
    else if (num === 4){
        alert("O mês " + num + " é Abril.")
    }
    else if (num === 5){
        alert("O mês " + num + " é Maio.")
    }
    else if (num === 6){
        alert("O mês " + num + " é Junho.")
    }
    else if (num === 7){
        alert("O mês " + num + " é Julho.")
    }
    else if (num === 8){
        alert("O mês " + num + " é Agosto.")
    }
    else if (num === 9){
        alert("O mês " + num + " é Setembro.")
    }
    else if (num === 10){
        alert("O mês " + num + " é Outubro.")
    }
    else if (num === 11){
        alert("O mês " + num + " é Novembro.")
    }
    else if (num === 12){
        alert("O mês " + num + " é Dezembro.")
    }
    else{
        alert("Número inválido.")
    }
}

while (true) {

    let escolha = prompt(
        "Escolha uma exercício:\n" +
        "1. EX 1\n" +
        "2. EX 2\n" +
        "3. EX 3\n" +
        "4. EX 4\n" +
        "5. EX 5\n" +
        "0. Sair"
    );

    escolha = parseInt(escolha);

    switch (escolha) {
        case 1:
            opcao1();
            break;
        case 2:
            opcao2();
            break;
        case 3:
            opcao3();
            break;
        case 4:
            opcao4();
            break;
        case 5:
            opcao5();
            break;
        case 0:
            alert("Bye! :)");
        default:
            alert("Opção inválida. Tente novamente.");
    }

    if (escolha === 0) {
        break;
    }
}
