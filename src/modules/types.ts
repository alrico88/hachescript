/**
 * Checks if element's type is string
 *
 * @export
 * @param {(string | string[])} element Element to check
 * @return {boolean}
 */
export function isString(element: string | string[] | {[name: string]: any}): boolean {
  return typeof element === 'string';
}

/**
 * Checks if element is array
 *
 * @export
 * @param {(string | string[])} element Element to check
 * @return {boolean}
 */
export function isArray(element: string | string[] | {[name: string]: any}): boolean {
  return Array.isArray(element);
}

/**
 * Checks if element is object
 *
 * @export
 * @param {(string | string[] | {[name: string]: any})} element Element to check
 * @return {boolean}
 */
export function isObject(element: string | string[] | {[name: string]: any}): boolean {
  return typeof element === 'object';
}

/**
 * Checks if element is boolean
 *
 * @export
 * @param {(string | string[] | number | boolean)} element Element to check
 * @return {boolean}
 */
export function isBoolean(element: string | string[] | number | boolean): boolean {
  return typeof element === 'boolean';
}
