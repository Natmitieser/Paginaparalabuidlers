// 1. Inicializar Iconos
lucide.createIcons();

// 2. Lógica del efecto 3D al mover el mouse
const container = document.getElementById('logo-container');
const card = document.getElementById('logo-card');

if (container && card) {
    container.addEventListener('mousemove', (e) => {
        // Pausar la animación de flotar mientras interactúas
        card.classList.remove('animate-float');
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calcular rotación
        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        // Aplicar transformación
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    container.addEventListener('mouseleave', () => {
        // Al salir, resetear posición
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        
        // Volver a activar la flotación suave
        setTimeout(() => {
            card.classList.add('animate-float');
        }, 500);
    });
}
