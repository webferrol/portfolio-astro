const URLBASE = 'https://webferrol.netlify.app/'
const WORDPRESS_URL = 'https://www.webferrol.com/wp-json/wp/v2/posts'

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
  UNESCAPE_HTML_OBJECT,
  URLBASE,
  WORDPRESS_URL
}