import {isArray} from './types';

/**
 * Only adds spaces if they're needed
 *
 * @export
 * @param {string[]} elements HTML attributes to add to main string
 * @return {string} The string without unneeded spaces
 */
export function preventSpaces(elements: string[]): string {
  const elementsWithContent = elements.filter((d) => d !== '');
  const len = elementsWithContent.length;

  return elementsWithContent.reduce((agg, element, index) => {
    const doesNotNeedSpace = index === len - 1;

    agg += doesNotNeedSpace ? element : `${element} `;

    return agg;
  }, '');
}

/**
 * Formats content to support both string and string arrays
 *
 * @export
 * @param {(string | string[])} content The content
 * @return {string} The resulting HTML
 */
export function formatContent(content: string | string[]): string {
  if (isArray(content)) {
    const casted = content as string[];

    return casted.join('');
  } else {
    return content as string;
  }
}
