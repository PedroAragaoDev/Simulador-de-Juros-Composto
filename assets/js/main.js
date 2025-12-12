function calcular(){
    let capital = Number(document.getElementById('capital').value)
    let aporte = Number(document.getElementById('aporte').value)
    let taxa = Number(document.getElementById('taxa').value)/100;
    let periodo = Number(document.getElementById('periodo').value)
    let unidade = document.getElementById('unidade').value;
    let unidadeTaxa = document.getElementById('unidadeTaxa').value
    let resultado = document.getElementById('totalAcumulado');
    let totalInvestido = document.getElementById('totalInvestido');
    let totalJuros = document.getElementById('totalJuros');

    if(unidadeTaxa === "anos"){
        taxa = Math.pow(1 + taxa, 1/12) - 1;
    }

    if(unidade === "anos"){
        periodo = periodo * 12
    }

    let montante = capital * Math.pow(1 + taxa, periodo);

    
    if(taxa !== 0) {
        montante += aporte * ((Math.pow(1 + taxa, periodo) - 1) / taxa);
    } else {
        montante += aporte * periodo;
    }

      
        let totalInvestidoNum = capital + (aporte * periodo );
        let totalJurosNum = montante - totalInvestidoNum

        function formatarReal(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


        resultado.value = formatarReal(montante);
        totalInvestido.value = formatarReal(totalInvestidoNum);
        totalJuros.value = formatarReal(totalJurosNum);
}
