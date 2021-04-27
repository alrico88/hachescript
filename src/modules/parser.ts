import {HTMLAttrs} from './attributes';
import {isArray, isObject, isString} from './types';

export interface Selector {
  tag: string;
  id?: string;
  classNames?: string[];
}

/**
 * Parses the HTML from a string selector
 *
 * @param {string} selector The HTML selector
 * @return {string} The HTML tag
 */
function parseTag(selector: string): string {
  const hasNoTag = selector.startsWith('#') || selector.startsWith('.') || selector.length === 0;

  return hasNoTag ? 'div' : selector.split(/[#,.]/g)[0];
}

/**
 * Parses id from a string selector
 *
 * @param {string} selector The HTML selector
 * @param {HTMLAttrs} attributes Attributes object
 * @return {(string | undefined)}
 */
function parseId(selector: string, attributes: HTMLAttrs): string | undefined {
  if (attributes.id !== undefined) {
    return attributes.id;
  }

  const start = selector.indexOf('#');

  if (start !== -1) {
    const stringFromStart = selector.slice(start + 1);

    const end = stringFromStart.indexOf('.');

    if (end === -1) {
      return stringFromStart;
    } else {
      return stringFromStart.slice(0, end);
    }
  } else {
    return undefined;
  }
}

/**
 * Parses classes from selector and attributes
 *
 * @param {string} selector The HTML tag selector
 * @param {string} [id] The ID, to remove it from the selector
 * @param {HTMLAttrs} [attributes] Attributes object
 * @return {string[]} The resulting classnames
 */
function parseClasses(selector: string, id?: string, attributes?: HTMLAttrs): string[] {
  let selectorToUse = selector;

  if (id !== undefined) {
    selectorToUse = selectorToUse.replace(`#${id}`, '');
  }

  const [, ...classes] = selectorToUse.split('.');

  const additionalClasses: string[] = [];

  if (attributes?.class !== undefined) {
    if (isString(attributes.class)) {
      additionalClasses.push(attributes.class as string);
    } else if (isArray(attributes.class)) {
      additionalClasses.push(...attributes.class as string[]);
    } else if (isObject(attributes.class)) {
      Object.entries(attributes.class).forEach(([className, enabled]) => {
        if (enabled === true) {
          additionalClasses.push(className);
        }
      });
    }
  }

  const merged = [...classes, ...additionalClasses];

  return Array.from(new Set(merged));
}

/**
 * Parses a selector into tag, id, and classNames
 *
 * @export
 * @param {string} selector The HTML selector. Supports tag, #id, and .class.names
 * @param {HTMLAttrs} [attributes={}] Additional attributes to use
 * @return {Selector}
 */
export function parseSelector(selector: string, attributes: HTMLAttrs = {}): Selector {
  const tag = parseTag(selector);

  const id = parseId(selector, attributes);

  return {
    tag,
    id,
    classNames: parseClasses(selector, id, attributes),
  };
}
