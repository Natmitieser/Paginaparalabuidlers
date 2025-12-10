<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buidlers Bolivia</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        /* Configuraciones extra para el efecto 3D */
        .perspective-1000 {
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        body {
            background-color: black;
            color: white;
        }
        ::selection {
            background-color: #22c55e; /* Verde Bolivia */
            color: black;
        }
    </style>
</head>
<body class="min-h-screen font-sans overflow-x-hidden selection:bg-green-500 selection:text-black">

    <div class="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-600 rounded-full blur-[120px]"></div>
        <div class="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-yellow-500 rounded-full blur-[100px] opacity-50"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 p-4 md:p-8">
        
        <div class="perspective-1000 mt-10" id="logo-container">
            <div id="logo-card" class="w-48 h-48 md:w-64 md:h-64 relative transition-transform duration-100 ease-out preserve-3d cursor-pointer">
                
                <div class="absolute inset-0 bg-neutral-900 rounded-full border border-neutral-700 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden">
                   
                   <img src="image_ed1bb6.png" alt="Buidlers Logo" class="w-full h-full object-cover p-2 rounded-full">
                   
                   <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-black overflow-hidden flex flex-col shadow-lg z-20">
                     <div class="h-1/3 bg-red-600"></div>
                     <div class="h-1/3 bg-yellow-400"></div>
                     <div class="h-1/3 bg-green-600"></div>
                   </div>
                </div>
            </div>
        </div>

        <div class="text-center space-y-2">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                BUIDLERS BOLIVIA
            </h1>
            <p class="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto">
                Espacio de educación y construcción sobre tecnología Blockchain y Web3.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
          
            <a href="https://t.me/TU_GRUPO_AQUI" target="_blank" class="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 hover:border-blue-500/50 transition-all hover:bg-neutral-900/80">
                <div class="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <i data-lucide="external-link" class="w-6 h-6 text-white"></i>
                </div>
                <div class="h-full flex flex-col justify-end">
                    <i data-lucide="message-circle" class="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold text-white">Unirse al Telegram</h3>
                    <p class="text-neutral-400">La comunidad principal. Debate, anuncios y networking.</p>
                </div>
            </a>

            <a href="https://twitter.com/buidlersbolivia" target="_blank" class="col-span-1 group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 hover:border-white/50 transition-all hover:bg-neutral-900/80">
                <div class="h-full flex flex-col justify-between">
                    <i data-lucide="twitter" class="w-8 h-8 text-white group-hover:rotate-12 transition-transform"></i>
                    <div>
                        <h3 class="text-xl font-bold text-white mt-4">Twitter / X</h3>
                        <p class="text-neutral-500 text-sm">@buidlersbolivia</p>
                    </div>
                </div>
            </a>

            <div class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div class="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-green-900/50 transition-colors backdrop-blur-sm">
                    <div class="p-2 bg-green-500/10 rounded-lg text-green-400">
                        <i data-lucide="book-open"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-200">Educación Web3</h4>
                        <p class="text-xs text-neutral-400 mt-1">Espacio para aprender tecnología Blockchain 🧑‍💻.</p>
                    </div>
                </div>

                <div class="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-yellow-900/50 transition-colors backdrop-blur-sm">
                    <div class="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                        <i data-lucide="megaphone"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-200">Anuncios</h4>
                        <p class="text-xs text-neutral-400 mt-1">Pedir permiso a administradores antes de anunciar 👀.</p>
                    </div>
                </div>

                <div class="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-red-900/50 transition-colors backdrop-blur-sm">
                    <div class="p-2 bg-red-500/10 rounded-lg text-red-400">
                        <i data-lucide="shield"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-200">Respeto</h4>
                        <p class="text-xs text-neutral-400 mt-1">Respeto absoluto entre miembros de la comunidad.</p>
                    </div>
                </div>
            </div>

        </div>

        <footer class="mt-12 text-neutral-600 text-sm flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Buidlers Bolivia © 2025
        </footer>

    </div>

    <script>
        // 1. Activar los iconos
        lucide.createIcons();

        // 2. Lógica del efecto 3D en el logo
        const container = document.getElementById('logo-container');
        const card = document.getElementById('logo-card');

        container.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculamos la rotación (invertimos Y para que se sienta natural)
            const rotateX = ((y - centerY) / centerY) * -15; 
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseleave', () => {
            // Regresar a la posición original suavemente
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    </script>
</body>
</html>
