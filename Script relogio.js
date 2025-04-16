//script.js//

function AtualizarRelogio() { 
     const agora = new Date(); // pega a data e hora atual

     let horas = agora.getHours(); // pega as horas
     let minutos = agora.getMinutes(); // pega os minutos
     let segundos = agora.getSeconds(); // pega os segundos

    // adiciona um zero a esquerda se o número for menor que 10

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const HoraFormatada = " " + horas + ":" + minutos + ":" + segundos; // formata a hora 
   
    document.getElementById("relogio").textContent = HoraFormatada; // coloca a hora no elemento com id relogio

}

 // atualiza relogio a cada 1000ms (1 segundo) 
   setInterval( AtualizarRelogio, 1000); // chama a função AtualizarRelogio a cada 1 segundo

//Também chama a função uma vez para que o relógio apareça imediatamente ao carregar a página
    AtualizarRelogio(); 
    // chama a função AtualizarRelogio para que o relógio apareça imediatamente ao carregar a página






















