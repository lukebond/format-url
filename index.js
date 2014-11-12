var url = require('url');

module.exports = function formatUrl(u) {
  var protocol = 'http';
  var protoMatch = u.match(/^http[s]*:\/\//);
  if (protoMatch) {
    protocol = protoMatch[0].substr(0, protoMatch[0].length - 3);
    u = u.substr(protocol.length + 3);
  }
  var host = u;
  var path = '';
  if (u.indexOf('/') !== -1) {
    var parts = u.split('/');
    host = parts[0];
    path = u.substr(u.indexOf(parts[1]));
  }
  return url.format({ host: host, pathname: path, protocol: protocol });
};
