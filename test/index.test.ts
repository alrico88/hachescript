import {h, joinArrayOfH, parseSelector} from '../src';

const tagWithIdAndClasses = 'div#myCoolId.myClass.myOtherClass';
const tagWithClass = 'span.text-muted';
const tagWithoutTag = '#noTag';
const tagWithId = 'div#withId';

describe('Test selector parser TAGS', () => {
  test('Should detect tags correctly', () => {
    expect(parseSelector(tagWithClass).tag).toBe('span');
  });

  test('Should return a div tag if no tag is present', () => {
    expect(parseSelector(tagWithoutTag).tag).toBe('div');
  });
});

describe('Test selector parser IDs', () => {
  test('Should detect ids correctly', () => {
    expect(parseSelector(tagWithId).id).toBe('withId');
  });

  test('Should detect ids correctly even with classes', () => {
    expect(parseSelector(tagWithIdAndClasses).id).toBe('myCoolId');
  });

  test('If no ID is present, id should be undefined', () => {
    expect(parseSelector(tagWithClass).id).toBe(undefined);
  });

  test('Passing ids in attributes should override id in selector', () => {
    expect(parseSelector(tagWithId, {id: 'overriden'}).id).toBe('overriden');
  });
});

describe('Test selector parser classNames', () => {
  test('Should detect classes correctly', () => {
    expect(parseSelector(tagWithClass).classNames).toStrictEqual(['text-muted']);
  });

  test('Should detect multiple classes in selector', () => {
    expect(parseSelector(tagWithIdAndClasses).classNames).toStrictEqual(['myClass', 'myOtherClass']);
  });

  test('If attributes contains additional classes, it should merge them', () => {
    expect(parseSelector(tagWithClass, {
      class: 'additionalClass',
    }).classNames).toStrictEqual(['text-muted', 'additionalClass']);
  });

  test('If attributes contains a classes object, only those set to true should be added', () => {
    expect(parseSelector(tagWithClass, {
      class: {
        active: true,
        disabled: false,
      },
    }).classNames).toStrictEqual(['text-muted', 'active']);
  });

  test('Passing the same class in selector and attributes should not create duplicate classNames', () => {
    expect(parseSelector(tagWithClass, {class: 'text-muted'}).classNames).toStrictEqual(['text-muted']);
  });

  test('Passing classes array in attributes should merge them all', () => {
    expect(parseSelector(tagWithClass, {class: ['text-small', 'text-uppercase']}).classNames).toStrictEqual(['text-muted', 'text-small', 'text-uppercase']);
  });
});

describe('Test creating HTML strings', () => {
  test('Creating a normal tag should work as expected', () => {
    expect(h('div#myId.myClass', 'hello world', {
      dataIndex: 'hello',
      class: ['text-muted', 'text-primary']}))
      .toBe('<div id="myId" class="myClass text-muted text-primary" data-index="hello">hello world</div>');
  });

  test('Creating a self closing tag should work as expected', () => {
    expect(h('img', '', {
      src: 'dog.png',
      class: 'rounded'}))
      .toBe('<img class="rounded" src="dog.png"/>');
  });

  test('Nesting elements should work as expected', () => {
    expect(h('div#myId.myClass', h('img', '', {src: 'dog.png'}), {
      dataIndex: 'hello',
      class: ['text-muted', 'text-primary']}))
      .toBe('<div id="myId" class="myClass text-muted text-primary" data-index="hello"><img src="dog.png"/></div>');
  });
});

describe('Test styles parsing', () => {
  test('Styles should be parsed correctly and style attributes should be converted to kebab-case', () => {
    expect(h('div', 'hello world', {
      style: {
        backgroundColor: '#ffffaa',
        border: '1px solid #ffffaa',
        'text-transform': 'uppercase',
      },
    })).toBe('<div style="background-color: #ffffaa; border: 1px solid #ffffaa; text-transform: uppercase">hello world</div>');
  });
});

describe('Test attributes parsing', () => {
  test('Boolean attributes should only have the attribute and no value', () => {
    expect(h('option', 'hello world', {
      checked: true,
      hidden: true,
      value: 'hello',
    })).toBe('<option checked hidden value="hello">hello world</option>');
  });

  test('If no attributes are provided, parsing still works', () => {
    expect(h('option', 'hello world')).toBe('<option>hello world</option>');
  });
});

describe('Test content parsing', () => {
  test('String content should work as expected', () => {
    expect(h('div', 'hello world')).toBe('<div>hello world</div>');
  });

  test('Array content should work as expected', () => {
    expect(h('div', [h('img', '', {src: 'dog.png'}), h('img', '', {src: 'cat.png'})])).toBe('<div><img src="dog.png"/><img src="cat.png"/></div>');
  });

  test('Deep nesting should work as expected', () => {
    expect(h('div', h('div', h('img', '', {src: 'cat.png'})))).toBe('<div><div><img src="cat.png"/></div></div>');
  });
});

describe('Test hachescript joiner', () => {
  test('String content should work as expected', () => {
    expect(joinArrayOfH([h('div', 'hello'), h('div', 'world')])).toBe('<div>hello</div><div>world</div>');
  });
});
