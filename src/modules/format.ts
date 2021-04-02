/**
 * Only adds spaces if they're needed
 *
 * @export
 * @param {string[]} elements HTML attributes to add to main string
 * @return {string} The string without unneeded spaces
 */
export function preventSpaces(elements: string[]): string {
  const len = elements.length;

  return elements.reduce((agg, element, index) => {
    const isLastElement = index === len - 1;

    if (element !== '') {
      agg += isLastElement ? element : `${element} `;
    }

    return agg;
  }, '');
}
