const WORDPRESS_URL = 'https://www.webferrol.com/wp-json/wp/v2/'

const PUBLIC_URL = 'https://webferrol.netlify.app/'

interface keysValueStr {
  [key: string]: string; 
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

export {
  PUBLIC_URL,
  UNESCAPE_HTML_OBJECT,
  WORDPRESS_URL
}