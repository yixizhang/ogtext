const assert = require('assert');
const resolver = require('../');

describe("og resolver", function() {
  it("github repo page should resolve", function(done) {
    resolver.resolve("https://github.com/yixizhang/ogtext", function(data) {
      assert.deepEqual(data, {
        title: 'yixizhang/ogtext',
        desc: 'ogtext - Text resolver plugin via Open Graph protocol'
      });
      assert(true);
      done();
    });
  });
});
