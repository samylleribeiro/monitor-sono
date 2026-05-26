function conferir() {
  // pegar os dados que o usuário digitou
   let horas = parseFloat(document.getElementById("horas").value);
   let resultado = document.getElementById("resultado");
  // conferir se os campos estão vazios
   if (isNaN(horas) || horas <= 0) {
      resultado.innerText = "Por favor, digite uma hora valida! ❌";
    
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#2d1a1a"; // Fundo vinho escuro
        resultado.style.color = "#ff8a80"; // 🌟 Vermelho bem clarinho/pastel (perfeito para ler no escuro!)
    } else {
        document.body.style.backgroundColor = "#ffebee"; // Fundo rosa claro
        resultado.style.color = "#c62828"; // Vermelho escuro
    } 
    
    document.querySelector('.container-resultado').style.display = 'block';
    document.getElementById('horas').focus();
    return;
  }
  // volta para cor original quando não estiver erro
  document.body.style.backgroundColor = "";
  resultado.style.color = ""; 

  if (horas < 7) {
    resultado.innerText = "Você deveria ter dormir mais nessa noite! 😴";
    document.body.style.backgroundColor = ""; 
    resultado.style.color = ""; 
    document.querySelector('.container-resultado').style.display = 'block';
  }
  else if (horas >= 7 && horas < 9) {
    resultado.innerText = "Seu sono foi ótimo nessa noite!✨🌙";
    document.body.style.backgroundColor = ""; 
    resultado.style.color = ""; 
    document.querySelector('.container-resultado').style.display = 'block';
  }
  else {
    resultado.innerText = "Uau, você dormiu bastante! Mas cuidado para não exagerar! 😴💤";
    document.body.style.backgroundColor = ""; 
    resultado.style.color = ""; 
    document.querySelector('.container-resultado').style.display = 'block';
  }
} 
// função limpar campos
function limpar() {
  document.getElementById('horas').value = "";
  document.getElementById('resultado').innerText = "";
  document.body.style.backgroundColor = "";
  document.getElementById('resultado').style.color = "";
  document.querySelector('.container-resultado').style.display = 'none';    // esconde caixinha branca
  document.getElementById('horas').focus();
}
// função do botão de modo noturno
function toggleDarkMode() {
   // lida e desliga o modo noturno
   document.body.classList.toggle("dark-mode");
   // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}
