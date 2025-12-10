import React, { useState, useRef } from 'react';
import { Twitter, MessageCircle, Github, Shield, Megaphone, BookOpen, ExternalLink } from 'lucide-react';

const BuidlersLanding = () => {
  // Estado para el efecto 3D del logo
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = logoRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Invertir eje Y
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans selection:bg-green-500 selection:text-black">
      {/* Fondo con gradiente sutil boliviano */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-600 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-yellow-500 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        
        {/* HEADER & 3D LOGO AREA */}
        <div 
          className="perspective-1000 mt-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={logoRef}
            className="w-48 h-48 md:w-64 md:h-64 relative transition-transform duration-100 ease-out preserve-3d cursor-pointer"
            style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
          >
            {/* Círculo base del Logo */}
            <div className="absolute inset-0 bg-neutral-900 rounded-full border border-neutral-700 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden">
               {/* AQUÍ VA TU IMAGEN REAL. Usa un <img> tag si prefieres */}
               <div className="text-8xl font-bold tracking-tighter text-white relative">
                 <span className="absolute -top-6 left-2 text-6xl">~</span>
                 B
               </div>
               
               {/* Badge Bandera Bolivia */}
               <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-black overflow-hidden flex flex-col shadow-lg">
                 <div className="h-1/3 bg-red-600"></div>
                 <div className="h-1/3 bg-yellow-400"></div>
                 <div className="h-1/3 bg-green-600"></div>
               </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            BUIDLERS BOLIVIA
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto">
            Construyendo el futuro descentralizado desde el corazón de Sudamérica.
          </p>
        </div>

        {/* BENTO GRID DE LINKS Y REGLAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
          
          {/* Link Principal - Telegram */}
          <a href="#" className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 hover:border-neutral-600 transition-all hover:bg-neutral-900/80">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-6 h-6" />
            </div>
            <div className="h-full flex flex-col justify-end">
              <MessageCircle className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white">Unirse al Telegram</h3>
              <p className="text-neutral-400">La comunidad principal. Debate, anuncios y networking.</p>
            </div>
          </a>

          {/* Link Secundario - Twitter/X */}
          <a href="#" className="col-span-1 group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 hover:border-neutral-600 transition-all hover:bg-neutral-900/80">
             <div className="h-full flex flex-col justify-between">
               <Twitter className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
               <div>
                 <h3 className="text-xl font-bold text-white mt-4">Twitter / X</h3>
                 <p className="text-neutral-500 text-sm">@buidlersbolivia</p>
               </div>
             </div>
          </a>

          {/* REGLAS DEL GRUPO (Visualización Glassmorphism) */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
             {/* Regla 1 */}
             <div className="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-green-900/50 transition-colors">
               <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                 <BookOpen size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-200">Educación Web3</h4>
                 <p className="text-xs text-neutral-400 mt-1">Espacio dedicado exclusivamente al aprendizaje de tecnología Blockchain.</p>
               </div>
             </div>

             {/* Regla 2 */}
             <div className="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-yellow-900/50 transition-colors">
               <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                 <Megaphone size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-200">Anuncios</h4>
                 <p className="text-xs text-neutral-400 mt-1">Solicita permiso a los administradores antes de publicar promociones.</p>
               </div>
             </div>

             {/* Regla 3 */}
             <div className="rounded-xl bg-neutral-950/40 border border-neutral-800 p-5 flex items-start gap-4 hover:border-red-900/50 transition-colors">
               <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                 <Shield size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-200">Respeto Mutuo</h4>
                 <p className="text-xs text-neutral-400 mt-1">Mantengamos un ambiente seguro y constructivo para todos.</p>
               </div>
             </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-12 text-neutral-600 text-sm flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           Buidlers Bolivia © 2025
        </footer>

      </div>
    </div>
  );
};

export default BuidlersLanding;
