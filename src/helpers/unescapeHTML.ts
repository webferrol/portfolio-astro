import { UNESCAPE_HTML_OBJECT } from '@/constants'

interface unescapeHTML {
  [key: string]: string; 
}


const properties = Object.getOwnPropertyNames(UNESCAPE_HTML_OBJECT).join('|')

export const unescapeHTML = (str: string) =>
  str.replace(
    new RegExp(properties, 'g'),
    tag =>
      (UNESCAPE_HTML_OBJECT[tag] || tag)
  );