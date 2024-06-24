// Calcula o preço de um produto a partir da quantidade de vezes parcelados (3 ou 5 vezes)

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