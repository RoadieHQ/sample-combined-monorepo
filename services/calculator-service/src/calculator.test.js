import assert from 'assert';

import add from './calculator.js';

describe('Calculator#add', function () {
  it('should add two numbers', function () {
    assert.equal(add(5, 2), 7);
  });
});
