// Aguarda o carregamento completo do DOM antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Função para exibir o slide atual
    function showSlide(index) {
        // Remove a classe 'active' de todos os slides
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        
        // Trata os limites para navegação infinita
        slideIndex = index;
        if (slideIndex >= slides.length) { 
            slideIndex = 0; 
        }
        if (slideIndex < 0) { 
            slideIndex = slides.length - 1; 
        }
        
        // Adiciona a classe 'active' ao slide selecionado
        slides[slideIndex].classList.add('active');
    }

    // Função para avançar ou voltar
    function changeSlide(step) {
        showSlide(slideIndex + step);
    }

    // Eventos nos botões do Slider
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => changeSlide(-1));
        nextBtn.addEventListener('click', () => changeSlide(1));
    }

    // Troca automática de slides a cada 5 segundos
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});