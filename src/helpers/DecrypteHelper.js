var _0xc0e = [
  "",
  "split",
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/",
  "slice",
  "indexOf",
  "",
  "",
  ".",
  "pow",
  "reduce",
  "reverse",
  "0",
];
function _0xe0c(d, e, f) {
  var g = _0xc0e[2][_0xc0e[1]](_0xc0e[0]);
  var h = g[_0xc0e[3]](0, e);
  var i = g[_0xc0e[3]](0, f);
  var j = d[_0xc0e[1]](_0xc0e[0])
    [_0xc0e[10]]()
    [_0xc0e[9]](function (a, b, c) {
      if (h[_0xc0e[4]](b) !== -1) {
        return (a += h[_0xc0e[4]](b) * Math[_0xc0e[8]](e, c));
      }
    }, 0);
  var k = _0xc0e[0];
  while (j > 0) {
    k = i[j % f] + k;
    j = (j - (j % f)) / f;
  }
  return k || _0xc0e[11];
}
export default function getCode(h, u, n, t, e, r) {
  r = "";
  var i = 0;
  for (var len = h.length; i < len; i++) {
    var s = "";
    while (h[i] !== n[e]) {
      s += h[i];
      i++;
    }
    for (var j = 0; j < n.length; j++) {
      s = s.replace(new RegExp(n[j], "g"), j);
    }
    r += String.fromCharCode(_0xe0c(s, e, 10) - t);
  }
  return decodeURIComponent(r);
}
