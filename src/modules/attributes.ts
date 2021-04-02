import {paramCase} from 'change-case';

export interface HTMLAttrs {
  [prop: string]: any;
  id?: string;
  class?: string | string[];
  style?: {[styleProp: string]: string | number};
}

interface HTMLAttrItem {
  name: string;
  value: string | number;
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

    return `style="${styleAttrs.join('; ')}"`;
  }

  const attrsToOmit = ['id', 'class', 'style'];

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
    attributesStrings.push(`${name}="${value}"`);
  });

  return attributesStrings.join('; ');
}
