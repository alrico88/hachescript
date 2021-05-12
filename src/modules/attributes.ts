import {paramCase} from 'param-case';
import {isBoolean} from './types';

const booleanAttributes = [
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'controls',
  'default',
  'disabled',
  'formnovalidate',
  'hidden',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
  'truespeed',
];

export interface HTMLAttrs {
  [prop: string]: any;
  id?: string;
  class?: string | string[] | {[className: string]: boolean};
  style?: {[styleProp: string]: string | number};
  allowfullscreen?: boolean;
  allowpaymentrequest?: boolean;
  async?: boolean;
  autofocus?: boolean;
  autoplay?: boolean;
  checked?: boolean;
  controls?: boolean;
  default?: boolean;
  disabled?: boolean;
  formnovalidate?: boolean;
  hidden?: boolean;
  ismap?: boolean;
  itemscope?: boolean;
  loop?: boolean;
  multiple?: boolean;
  muted?: boolean;
  nomodule?: boolean;
  novalidate?: boolean;
  open?: boolean;
  playsinline?: boolean;
  readonly?: boolean;
  required?: boolean;
  reversed?: boolean;
  selected?: boolean;
  truespeed?: boolean;
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

  booleanAttributes.forEach((attr) => {
    if (attributes[attr] === true) {
      attributesStrings.push(attr);
    }
  });

  const attrsToOmit = ['id', 'class', 'style', ...booleanAttributes];

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
