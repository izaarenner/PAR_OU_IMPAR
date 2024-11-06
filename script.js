function verificarNota() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = (nota1 + nota2 + nota3) / 3;
   
    if (media >= 60) {
        document.getElementById('resultado').innerText = `Você passou! Média: ${media.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = `Você reprovou! Média: ${media.toFixed(2)}`;
    }
}