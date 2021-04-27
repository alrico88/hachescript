import {paramCase} from 'param-case';
import {isBoolean} from './types';

export interface HTMLAttrs {
  [prop: string]: any;
  id?: string;
  class?: string | string[] | {[className: string]: boolean};
  style?: {[styleProp: string]: string | number};
  selected?: boolean;
}

interface HTMLAttrItem {
  name: string;
  value: string | number | boolean;
}

/**
 * Fills HTML attributes according to object
 *
 * @export
 * @param {HTMLAttrs} attributes Attributes object
 * @return {string} The attributes object parsed as string
 */
export function populateAttributes(attributes: HTMLAttrs): string {
  const attributesStrings: string[] = [];

  if (attributes.style) {
    const styleAttrs: string[] = [];

    Object.entries(attributes.style).forEach(([prop, value]) => {
      styleAttrs.push(`${paramCase(prop)}: ${value}`);
    });

    attributesStrings.push(`style="${styleAttrs.join('; ')}"`);
  }

  if (attributes.selected === true) {
    attributesStrings.push('selected');
  }

  const attrsToOmit = ['id', 'class', 'style', 'selected'];

  const initHTMLArray: HTMLAttrItem[] = [];

  const attrsAsArray: HTMLAttrItem[] = Object.entries(attributes).reduce((agg, [attributeKey, attributeValue]) => {
    if (!attrsToOmit.includes(attributeKey)) {
      agg.push({
        name: paramCase(attributeKey),
        value: attributeValue,
      });
    }

    return agg;
  }, initHTMLArray);

  attrsAsArray.forEach(({name, value}) => {
    attributesStrings.push(isBoolean(value) ? name : `${name}="${value}"`);
  });

  return attributesStrings.join(' ');
}
