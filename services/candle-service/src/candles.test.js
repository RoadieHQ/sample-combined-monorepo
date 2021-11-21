import assert from 'assert';

import lightCandles from './candles.js';

describe('Candles#lightCandles', function () {
  it('lights a candle', function () {
    assert.equal(lightCandles(), 'lit');
  });
});
