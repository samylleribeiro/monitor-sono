function calcularhoras() {
   let horas = parseFloat(document.getElementById("horas").value);
   let resultado = document.getElementById("resultado");

   if (isNaN(horas) || horas <= 0) {
      resultado.innerText = "Por favor, insira um número válido de horas❌";
      resultado.style.color = "#c62828"; // Um vermelho mais forte para o texto
      document.body.style.backgroundColor = "#ffebee"; // Um vermelho bem suave
      return;
   }
  if (horas < 7) {
    resultado.innerText = "Você deveria ter dormir mais nessa noite! 😴";
     document.body.style.backgroundColor = "#e3f2fd"; // Um azul bem bonito
    resultado.style.color = "#1565c0"; // Um azul mais forte para o texto
  }
  else if (horas >= 7 && horas < 9) {
    resultado.innerText = "Seu sono foi ótimo nessa noite!✨🌙";
 document.body.style.backgroundColor = "#e3f2fd"; // Um azul bem bonito
    resultado.style.color = "#1565c0"; // Um azul mais forte para o texto
  }
  else {
    resultado.innerText = "Uau, você dormiu bastante! Mas cuidado para não exagerar! 😴💤";
     document.body.style.backgroundColor = "#e3f2fd"; // Um azul bem bonito
    resultado.style.color = "#1565c0"; // Um azul mais forte para o texto
  }
}
// Lembre-se de resetar o bonequinho no limpar()
function limpar() {
    document.getElementById('horas').value = "";
    document.getElementById('resultado').innerText = "";
    document.body.style.backgroundColor = ""; 
}
