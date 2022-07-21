'use strict';

const cli = require('..');

describe('@lerna2/cli', () => {
    it('test cli', () => {
        expect(cli()).toBe("cli");
    });
});
