// componentes.js

const TELEFONO_CONTACTO = "521234567890"; // <- Tu número centralizado

// Función auxiliar para generar el HTML completo de un botón de WhatsApp estilizado
function crearBotonWhatsApp(texto, mensajePersonalizado, clasesExtra = "") {
    const mensaje = encodeURIComponent(mensajePersonalizado);
    return `
        <a href="https://wa.me/${TELEFONO_CONTACTO}?text=${mensaje}" 
           target="_blank" 
           class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-900/20 ${clasesExtra}">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>${texto}</span>
        </a>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    
    // --- INYECTAR HEADER ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const btnHeaderWhatsApp = crearBotonWhatsApp("WhatsApp", "Hola, quiero información sobre las clases de box", "px-4 py-2 rounded-xl text-sm");
        
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

                <div class="hidden md:inline-flex">
                    ${btnHeaderWhatsApp}
                </div>

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
                <div class="pt-2">
                    ${crearBotonWhatsApp("WhatsApp", "Hola, quiero información sobre las clases de box", "w-full py-2.5 rounded-xl text-center")}
                </div>
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

    // --- BOTONES DE DISCIPLINAS ---
    document.querySelectorAll('.btn-whatsapp').forEach(boton => {
        const disciplina = boton.getAttribute('data-disciplina') || 'esta clase';
        const mensaje = encodeURIComponent(`Hola, me interesan las clases de ${disciplina}`);
        boton.href = `https://wa.me/${TELEFONO_CONTACTO}?text=${mensaje}`;
        boton.target = '_blank';
    });

    // --- INYECTAR BOTONES WHATSAPP PERSONALIZADOS ---
    document.querySelectorAll('.whatsapp-btn-placeholder').forEach(el => {
        const texto = el.getAttribute('data-texto') || 'Contactar por WhatsApp';
        const mensaje = el.getAttribute('data-mensaje') || 'Hola, quiero información';
        const clases = el.getAttribute('data-clases') || 'px-6 py-3 rounded-xl';
    
        el.innerHTML = crearBotonWhatsApp(texto, mensaje, clases);
    });

});