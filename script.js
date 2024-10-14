document.getElementById("pedidoBtn").addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("hidden");
    mensagem.innerHTML = "Quer namorar comigo? ❤️";
    mensagem.style.animation = "fadeIn 1s";
});
