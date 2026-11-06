// Constantes globales
const TELEFONO_CONTACTO = "525532429406"; 

// 1. Cargar Header con Logo de Huella
function cargarHeader() {
    const headerContainer = document.getElementById('header-placeholder');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header class="bg-slate-950/90 backdrop-blur-md border-b border-red-950/40 sticky top-0 z-50 transition-all">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="assets/img/huella-roja.png" alt="Osos Sauces Logo" class="h-9 w-auto group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                <div class="flex flex-col">
                    <span class="font-extrabold text-lg sm:text-xl text-white tracking-wider leading-none">OSOS <span class="text-red-600">SAUCES</span></span>
                    <span class="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">Club de Box & Kickboxing</span>
                </div>
            </a>

            <!-- Menú Desktop -->
            <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
                <a href="index.html" class="hover:text-red-500 transition-colors">Inicio</a>
                <a href="disciplinas.html" class="hover:text-red-500 transition-colors">Disciplinas</a>
                <a href="horarios.html" class="hover:text-red-500 transition-colors">Horarios</a>
                <a href="nosotros.html" class="hover:text-red-500 transition-colors">Nosotros</a>
                <a href="faqs.html" class="hover:text-red-500 transition-colors">FAQs</a>
            </nav>

            <!-- Botón Móvil Menú -->
            <button id="menu-btn" class="md:hidden text-slate-300 hover:text-white p-2" aria-label="Abrir menú">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>

        <!-- Desplegable Móvil -->
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900/95 border-b border-slate-800 px-4 py-4 space-y-3">
            <a href="index.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Inicio</a>
            <a href="disciplinas.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Disciplinas</a>
            <a href="horarios.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Horarios</a>
            <a href="nosotros.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">Nosotros</a>
            <a href="faqs.html" class="block text-slate-200 hover:text-red-500 font-medium py-1">FAQs</a>
        </div>
    </header>
    `;

    // Lógica toggle menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
}

// 2. Cargar Footer
function cargarFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer class="bg-slate-950 border-t border-slate-900 py-10 px-4 text-slate-400 text-sm">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class=" space-y-3">
                <div class="flex items-center gap-2">
                    <img src="assets/img/huella-roja.png" alt="Huella" class="h-6 w-auto">
                    <span class="font-bold text-white text-base">OSOS SAUCES</span>
                </div>
                <ul class="space-y-1.5 text-xs pl-4">
                    <li><a href="disciplinas.html" class="hover:text-red-400">Disciplinas</a></li>
                    <li><a href="horarios.html" class="hover:text-red-400">Horarios</a></li>
                    <li><a href="nosotros.html" class="hover:text-red-400">Sobre Nosotros</a></li>
                    <li><a href="faqs.html" class="hover:text-red-400">Preguntas Frecuentes</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h4 class="text-white font-bold text-xs uppercase tracking-wider">Contacto & Ubicación</h4>
                
                <div class="space-y-2 text-xs pl-4">
                    <p class="flex items-start gap-2 text-slate-300">
                        <span class="text-red-500 font-bold shrink-0">📍</span>
                        <span>Carlos Arruza y Silverio Pérez, Villas Santín, Toluca.</span>
                    </p>
                    <p class="flex items-center gap-2 text-slate-300">
                        <span class="text-emerald-500 font-bold shrink-0">📱</span>
                        <span>722 664 7697</span>
                    </p>
                </div>

                <!--
                    <div class="pt-2">
                        <div class="whatsapp-btn-placeholder" 
                            data-texto="Escribir por WhatsApp" 
                            data-mensaje="Hola, quiero pedir informes sobre las clases" 
                            data-clases="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold">
                        </div>
                    </div>
                -->
            </div>
        </div>
        <div class="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-400">
            © ${new Date().getFullYear()} Club de Box & Kickboxing Osos Sauces. Todos los derechos reservados.
        </div>
    </footer>
    `;
}

// 3. Botones Dinámicos de WhatsApp
function inicializarBotonesWhatsApp() {
    const contenedores = document.querySelectorAll('.whatsapp-btn-placeholder');
    contenedores.forEach(contenedor => {
        const texto = contenedor.getAttribute('data-texto') || 'Contactar por WhatsApp';
        const mensaje = contenedor.getAttribute('data-mensaje') || 'Hola, quiero pedir informes';
        const clasesPersonalizadas = contenedor.getAttribute('data-clases') || '';

        const mensajeEncoded = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${TELEFONO_CONTACTO}?text=${mensajeEncoded}`;

        contenedor.innerHTML = `
            <a href="${urlWhatsApp}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-950/50 ${clasesPersonalizadas}">
                <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>${texto}</span>
            </a>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarHeader();
    cargarFooter();
    inicializarBotonesWhatsApp();
});