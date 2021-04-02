/**
 * Parses a classNames array to string
 *
 * @export
 * @param {(string[] | undefined)} classNames Classes to add to HTML element
 * @return {string}
 */
export function populateClass(classNames: string[] | undefined): string {
  return classNames !== undefined && classNames.length > 0 ? `class="${classNames.join(' ')}"` : '';
}
