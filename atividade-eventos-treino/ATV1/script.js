
document.getElementById('somarBtn').addEventListener('click', function() {

    var numA = parseInt(document.getElementById('numA').value);
    var numB = parseInt(document.getElementById('numB').value);
    
    var resultado = numA + numB;

    alert("A soma é: " + resultado)
    
});

