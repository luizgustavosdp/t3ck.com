// script.js (Eu poderia ter feito no CSS)


(function() { // Função autoexecutável para evitar poluição do escopo global
  const bemVindo = document.createElement('div'); // Cria o div bemVindo
  bemVindo.textContent = "Bem-vindo à T3ck!"; // Texto de boas-vindas
  Object.assign(bemVindo.style, { // Aplica estilos
    backgroundColor: "rgba(140, 0, 255, 1)", 
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%", 
    height: "100vh", // Usa 100vh para cobrir a altura total da viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column-reverse",
    fontSize: "7em",
    fontWeight: "bold",
    zIndex: "100",
    transform: "translateY(60px)",
    opacity: "0",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  });
    // Adiciona a imagem
    const img = document.createElement('img');
    img.src = "img/t3cklogo.jpg"; 
    img.style.width = "300px";
    img.style.height = "auto";
    img.style.marginBottom = "20px"; // Espaço entre o texto e a imagem
    img.style.position = "center ";
    img.style.borderRadius = "25%"; 

    // Adiciona a imagem ao div bemVindo
    bemVindo.appendChild(img); 

   // Adiciona ao corpo do documento/Faz ficar visivel, já que foi criado via JS, e não no HTML
   document.body.appendChild(bemVindo);

  // --- Animação de entrada ---
   let start = null; 
   const duration = 800; // duração em ms
   function animateIn(timestamp) {
     if (!start) start = timestamp;

     // Calcula o progresso da animação
    const progress = Math.min((timestamp - start) / duration, 1);
     bemVindo.style.transform = `translateY(${60 - 60 * progress}px)`; // Move de 60px para 0px
     bemVindo.style.opacity = progress.toString(); 
    if (progress < 1) {
      requestAnimationFrame(animateIn);
    }
  }
  requestAnimationFrame(animateIn);

  // --- Animação de saída ao rolar ---
  let jaSumiu = false;
  window.addEventListener("scroll", () => {
    if (!jaSumiu && window.scrollY > 50) {
      jaSumiu = true;
      let progress = 0.1; //
      const fadeOut = setInterval(() => {
        progress += 0.05;
        bemVindo.style.opacity = (1 - progress).toString();
        bemVindo.style.transform = `translateY(${-1 * progress}px)`;
        if (progress >= 1) {
          clearInterval(fadeOut);
          bemVindo.remove();
          document.body.style.backgroundColor = "white"; //  
        }
      }, 50);
    }

     });
  // Animação com TimeOut caso fosse necessario
  setTimeout(() => { 
    let progress = 0;
    const fadeOut = setInterval(() => {
        progress += 0.1; //
        bemVindo.style.opacity = (1 - progress).toString();
        bemVindo.style.transform = `translateY(${-10 * progress}px)`;
        if (progress >= 1) {
            clearInterval(fadeOut);
            bemVindo.remove();
            document.body.style.backgroundColor = "white";  
        }
    }, 50);
}, 2000); // 1000ms = 1 segundo
})();

function abrirContatos() {
  document.getElementById('menuContatos').style.display = 'block';
}

function fecharContatos() {
  document.getElementById('menuContatos').style.display = 'none';
}