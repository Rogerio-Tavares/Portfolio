function toggleMenu(){
    document.getElementById('menu').classList.toggle('active');
    document.querySelector('.menu-btn').classList.toggle('active');
}

//document.getElementById("IP").src = "/imagens/teste2.png";

// Faz a página recarregar ao clicar no título do header.
document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    titulo.addEventListener('click', function() {
        // Move o scroll para o topo imediatamente após recarregar.
        window.scrollTo(0, 0);
        // Redireciona para a própria URL, o que força um estado limpo no histórico.
        window.location.href = window.location.pathname;
    });
});
