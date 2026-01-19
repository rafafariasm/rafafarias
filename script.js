document.addEventListener('DOMContentLoaded', () => {
    // Aqui você pode adicionar lógica para abrir/fechar menu mobile
    console.log("Site carregado com sucesso!");
    
    // Efeito simples de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
