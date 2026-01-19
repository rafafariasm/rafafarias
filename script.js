document.addEventListener('DOMContentLoaded', () => {
    console.log("Site carregado com sucesso!");
    
    // --- INÍCIO DO CÓDIGO DO CARROSSEL ---
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Se houver slides, inicia a lógica
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5000ms = 5 segundos

        function nextSlide() {
            // Remove a classe 'active' do slide atual (ele começa a desaparecer)
            slides[currentSlide].classList.remove('active');

            // Calcula o próximo índice (usando módulo % para voltar ao zero no final)
            currentSlide = (currentSlide + 1) % slides.length;

            // Adiciona a classe 'active' ao próximo slide (ele começa a aparecer)
            slides[currentSlide].classList.add('active');
        }

        // Inicia o temporizador
        setInterval(nextSlide, slideInterval);
    }
    // --- FIM DO CÓDIGO DO CARROSSEL ---


    // Efeito simples de scroll suave para links internos (Código antigo mantido)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Verifica se o elemento alvo existe antes de tentar rolar
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Código do Menu Burguer (Opcional - para mobile)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if(burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
});
