import { useEffect } from "preact/hooks";


function changeIcon(icon: string) {
  // Obtener el elemento <link> que hace referencia al favicon
  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  const isFavicon = favicon instanceof HTMLLinkElement
  if (!isFavicon || favicon === null) return
  favicon.rel = 'icon';

  // Cambiar la ruta del nuevo icono
  favicon.href = icon; // Reemplaza 'nuevo_icono.png' con la ruta de tu nuevo icono

  // Agregar el nuevo icono al encabezado del documento
  document.head.appendChild(favicon);

}

export function useFaviconChange() {
  useEffect(() => {
    // Escuchar el evento visibilitychange
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        // El usuario cambió de pestaña, ejecuta tu código aquí
        changeIcon('/favicon.webp')
      } else {
        // El usuario volvió a la pestaña original, ejecuta tu código aquí
        changeIcon('/favicon.ico')
      }
    });
  }, [])
}