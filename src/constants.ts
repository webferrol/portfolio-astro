const WORDPRESS_URL = 'https://www.webferrol.com/wp-json/wp/v2/'

const PUBLIC_URL = 'https://webferrol.netlify.app/'

interface keysValueStr {
  [key: string]: string; 
}

interface Links {
  text: string;
  href: string;
}

const UNESCAPE_HTML_OBJECT: keysValueStr = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&#39;': "'",
  '&quot;': '"',
  '&#8221;': '"',
  '&#8220;': '"',
  '&#8211;': '-',
}

const LINKS: Links[] = [
  {
    text: "Página de Pacto polo emprego de Santiago",
    href: "https://pactoempregosantiago.org/"
  },
  {
    text: "Tic tac toe React",
    href: "https://github.com/webferrol/tic-tac-toe-react-ts"
  },
  {
    text: "Senllap (Android)",
    href: "https://play.google.com/store/apps/details?id=com.xurxo.senlleirasapp&hl=es"
  },
  {
    text: "Poboar (Android)",
    href: "https://play.google.com/store/search?q=poboar&c=apps&hl=es"
  },
  {
    text: "O misterio do Monte Viso (Android)",
    href: "https://play.google.com/store/apps/details?id=com.Cersia.OMisteriodoMonteViso&hl=es"
  },
]

export {
  LINKS,
  PUBLIC_URL,
  UNESCAPE_HTML_OBJECT,
  WORDPRESS_URL
}