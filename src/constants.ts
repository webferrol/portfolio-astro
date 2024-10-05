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
    text: "Apps (Obradoiros de emprego de Santiago de Compostela)",
    href: "https://play.google.com/store/apps/developer?id=CONCELLO+DE+SANTIAGO+DE+COMPOSTELA&hl=es_419"
  }
]

export {
  LINKS,
  PUBLIC_URL,
  UNESCAPE_HTML_OBJECT,
  WORDPRESS_URL
}