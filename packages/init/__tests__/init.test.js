'use strict';


const init = require('..');

describe('@lerna2/init', () => {
  it('test init', () => {
    expect(init()).toBe("init");
  });
});
