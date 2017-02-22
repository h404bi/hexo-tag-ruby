/* global hexo */
'use strict';

/**
* Ruby character tag
*
* Syntax:
*   {% ruby Base|top %}
*
*   e.g.:
*     {% ruby 注音|zhùyīn %}
*     {% ruby 超電磁砲|レールガン %}
*/
hexo.extend.tag.register('ruby', function(args) {
  var splited = args.shift().split('|');
  var origin = splited[0].trim();
  var ruby = splited[1].trim();

  return "<ruby>" + origin + "<rp> (</rp><rt>" + ruby + "</rt><rp>) </rp></ruby>";
});
