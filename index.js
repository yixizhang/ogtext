/**
 * Text resolver plugin via Open Graph protocol
 */

const $ = require('cheerio');
const request = require('request');

module.exports = {
  resolve(url, cb) {
    request(url, function(err, resp, html) {
      if (err) {
        return console.error(err);
      }
      var metas = $.load(html)('meta');
      var result = {};
      for(var idx in metas) {
        var attrs = metas[idx].attribs;
        if (attrs && attrs.property === 'og:title') {
          result.title = attrs.content;
        }
        if (attrs && attrs.property === 'og:description') {
          result.desc = attrs.content;
        }
      }
      if (result.title || result.desc) {
        cb(result);
      } else {
        cb(null);
      }
    });
  }
};
