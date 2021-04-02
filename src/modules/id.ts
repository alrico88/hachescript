/**
 * Gets the ID string for the HTML string
 *
 * @export
 * @param {(string | undefined)} id ID to use for the tag
 * @return {string} The id string to add
 */
export function populateId(id: string | undefined): string {
  if (id !== undefined) {
    return `id="${id}"`;
  } else {
    return '';
  }
}
