import { UNESCAPE_HTML_OBJECT } from '@/constants'

const properties = Object.getOwnPropertyNames(UNESCAPE_HTML_OBJECT).join('|')

export const unescapeHTML = (str: string) =>
  str.replace(
    new RegExp(properties, 'g'),
    tag =>
      (UNESCAPE_HTML_OBJECT[tag] || tag)
  );