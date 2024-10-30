function verificador(){
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if(numero % 2 === 0){
        resultado.textContent = "Este número é par.";
    } else {
        resultado.textContent = "Este número é ímpar.";
    }
}