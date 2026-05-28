// script.js

function calcular() {

  // LEITURAS

  let atual =
    Number(document.getElementById("leituraAtual").value);

  let anterior =
    Number(document.getElementById("leituraAnterior").value);

  // TARIFA MANUAL

  let tarifaManual =
    document.getElementById("tarifaManual").value;

  let tarifa;

  if (tarifaManual != "") {

    tarifa = Number(tarifaManual);

  }

  else {

    tarifa =
      Number(document.getElementById("concessionaria").value);

  }

  // CONSUMO

  let consumo = atual - anterior;

  // VALOR

  let valor = consumo * tarifa;

  // RESULTADOS

  document.getElementById("consumo").innerHTML =
    "Consumo: " + consumo + " kWh";

  document.getElementById("valor").innerHTML =
    "Valor estimado: R$ " + valor.toFixed(2);

  // ALERTAS

  let alerta =
    document.getElementById("alerta");

  if (consumo <= 150) {

    alerta.innerHTML =
      "✅ Consumo baixo";

    alerta.style.color = "green";

  }

  else if (consumo <= 300) {

    alerta.innerHTML =
      "⚠ Consumo moderado";

    alerta.style.color = "orange";

  }

  else {

    alerta.innerHTML =
      "🚨 Consumo elevado";

    alerta.style.color = "red";

  }

}