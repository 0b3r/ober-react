import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createHeader from 'components/header';

const Header = createHeader(React);
const render = reactDom.renderToStaticMarkup;

test('Header', assert => {
  const headerText = 'This is a header';
  const headerClass = 'site-header';
  const props = {
    headerContent: headerText,
    headerClass: headerClass
  };
  const re = new RegExp(headerText, 'g');

  const el = <Header { ...props } />;
  const $ = dom.load(render(el));

  const msg = 'should output the right header text';
  const output = $(`.${headerClass}`).html();
  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected, msg);

  assert.end();
});
