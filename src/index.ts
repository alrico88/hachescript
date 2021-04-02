import {HTMLAttrs, populateAttributes} from './modules/attributes';
import {populateClass} from './modules/classNames';
import {preventSpaces} from './modules/format';
import {populateId} from './modules/id';
import {parseSelector} from './modules/parser';
import {isSelfClosingTag} from './modules/tags';

/**
 * Creates an HTML string from a selector, content, and attributes
 * @example h('div#welcome', 'hello world', {class: 'text-muted'}) // returns "<div id="welcome" class="text-muted">hello world</div>"
 *
 * @export
 * @param {string} selector The tag with optional ID (#) and classNames (.). If no tag is provided, a <div> will be used
 * @param {(string | string[])} content The content of the HTML. Can be a simple string or an array of hachescript-created HTML strings
 * @param {HTMLAttrs} [attributes={}] Additional attributes to add to the tag
 * @return {string} The resulting HTML string
 */
export function h(selector: string, content: string | string[], attributes: HTMLAttrs = {}): string {
  const {tag, id, classNames} = parseSelector(selector, attributes);

  const isSelfClosing = isSelfClosingTag(tag);

  const cleanAttributes = preventSpaces([populateId(id), populateClass(classNames), populateAttributes(attributes)]);

  const closeBeginningTag = isSelfClosing ? '/>' : '>';

  const closeEndingTag = !isSelfClosing ? `</${tag}>` : '';

  return `<${tag} ${cleanAttributes}${closeBeginningTag}${content}${closeEndingTag}`;
}

export {parseSelector} from './modules/parser';

export {HTMLAttrs};
