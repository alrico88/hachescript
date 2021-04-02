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
