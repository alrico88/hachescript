const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

/**
 * Returns if the HTML tag is a self closing tag
 *
 * @export
 * @param {string} tag The HTML tag
 * @return {boolean}
 */
export function isSelfClosingTag(tag: string): boolean {
  return selfClosingTags.includes(tag);
}
