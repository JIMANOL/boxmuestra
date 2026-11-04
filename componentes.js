// componentes.js

const TELEFONO_CONTACTO = "521234567890"; 

document.addEventListener("DOMContentLoaded", function () {
    
    // --- INYECTAR HEADER ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const msgGeneral = encodeURIComponent("Hola, quiero información sobre las clases de box");
        
        headerPlaceholder.innerHTML = `
        <header class="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="index.html" class="text-xl font-black text-red-500 uppercase flex items-center gap-2">
                    🥊 <span>Escuela de Box</span>
                </a>

                <nav class="hidden md:flex gap-6 font-medium text-sm text-slate-300">
                    <a href="index.html" class="hover:text-red-500 transition-colors">Inicio</a>
                    <a href="disciplinas.html" class="hover:text-red-500 transition-colors">Disciplinas</a>
                    <a href="horarios.html" class="hover:text-red-500 transition-colors">Horarios</a>
                    <a href="nosotros.html" class="hover:text-red-500 transition-colors">Nosotros</a>
                    <a href="faqs.html" class="hover:text-red-500 transition-colors">FAQs</a>
                </nav>

                <a href="https://wa.me/${TELEFONO_CONTACTO}?text=${msgGeneral}" target="_blank" class="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all shadow-lg shadow-emerald-900/20">
                    WhatsApp
                </a>

                <button id="menu-btn" class="md:hidden text-slate-300 p-2 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>

            <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
                <a href="index.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Inicio</a>
                <a href="disciplinas.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Disciplinas</a>
                <a href="horarios.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Horarios</a>
                <a href="nosotros.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Nosotros</a>
                <a href="faqs.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">FAQs</a>
                <a href="https://wa.me/${TELEFONO_CONTACTO}?text=${msgGeneral}" target="_blank" class="block w-full text-center bg-emerald-600 text-white font-bold py-2.5 rounded-xl mt-2">
                    WhatsApp
                </a>
            </div>
        </header>
        `;

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // --- INYECTAR FOOTER ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-500 bg-slate-950">
            <p>© 2026 Escuela de Boxeo. Todos los derechos reservados.</p>
        </footer>
        `;
    }

    // --- BOTONES DINÁMICOS DE DISCIPLINAS (Auto-detección) ---
    document.querySelectorAll('.btn-whatsapp').forEach(boton => {
        const disciplina = boton.getAttribute('data-disciplina') || 'esta clase';
        const mensaje = encodeURIComponent(`Hola, me interesan las clases de ${disciplina}`);
        boton.href = `https://wa.me/${TELEFONO_CONTACTO}?text=${mensaje}`;
        boton.target = '_blank';
    });

});