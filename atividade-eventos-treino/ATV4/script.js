document.getElementById('cores').addEventListener('change', function() {


    var CorSelecionada = this.value;

    document.body.style.backgroundColor = CorSelecionada;

    if (CorSelecionada === "vermelho") {

        document.body.style.backgroundColor = 'red';

    } else if (CorSelecionada === "amarelo") {

        document.body.style.backgroundColor = 'yellow';

    } else if (CorSelecionada === "verde") {

        document.body.style.backgroundColor = 'green';

    } else if (CorSelecionada === "azul") {

        document.body.style.backgroundColor = 'blue';

    }
    
});