function contagemAniversario() { 

    const agora = new Date(); 
    const aniversario = new Date(2008, 8, 5, 4, 47); 

    let anos = agora.getFullYear() - aniversario.getFullYear();
    let tempoPassado = agora.getTime() - aniversario.getTime(); 
    let diasPassados = Math.floor(tempoPassado / (1000 * 60 * 60 * 24)); 
    let horasPassadas = Math.floor((tempoPassado - diasPassados * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutoPassados = Math.floor((tempoPassado - diasPassados * (1000 * 60 * 60 * 24)  - horasPassadas * (1000 * 60 * 60))  / (1000 * 60)); 
    let segundosPassados = Math.floor((tempoPassado - diasPassados * (1000 * 60 * 60 * 24) - horasPassadas * (1000 * 60 * 60) - minutoPassados * (1000 * 60)) / 1000 );

    let segundosBruto = Math.floor(tempoPassado / 1000);
    let minutosBruto = Math.floor(tempoPassado / (1000 * 60));
    let horasBruto = Math.floor(tempoPassado / (1000 * 60 * 60));
    let meses = Math.floor(agora.getFullYear() - aniversario.getFullYear()) * 12 + (agora.getMonth() - aniversario.getMonth());
    let semanas = Math.floor(tempoPassado / (1000 * 60 * 60 * 24 * 7));

    if (agora.getDate() < aniversario.getDate()) {
    meses--;
    }

    if ( agora.getMonth() < aniversario.getMonth() ||
        (
            agora.getMonth() === aniversario.getMonth() &&

            agora.getDate() < aniversario.getDate()
        )

    ) {

        anos--;

    }

    if (diasPassados < 10) diasPassados = "0" + diasPassados;
    if (minutoPassados < 10) minutoPassados = "0" + minutoPassados;
    if (horasPassadas < 10) horasPassadas = "0" + horasPassadas;
    if (segundosPassados < 10) segundosPassados = "0" + segundosPassados;


    document.getElementById("dias").innerText = diasPassados; 
    document.getElementById("horas").innerText = horasPassadas; 
    document.getElementById("minutos").innerText = minutoPassados; 
    document.getElementById("segundos").innerText = segundosPassados; 

    
    document.getElementById("segundos-bruto").innerText = segundosBruto.toLocaleString("pt-BR");
    document.getElementById("minutos-bruto").innerText = minutosBruto.toLocaleString("pt-BR");
    document.getElementById("horas-bruto").innerText = horasBruto.toLocaleString("pt-BR");
    document.getElementById("anos-bruto").innerText = anos.toLocaleString("pt-BR");
    document.getElementById("meses-bruto").innerText = meses.toLocaleString("pt-BR");
    document.getElementById("semanas-bruto").innerText = semanas.toLocaleString("pt-BR");
}

contagemAniversario();
const relogio = setInterval(contagemAniversario, 1000);