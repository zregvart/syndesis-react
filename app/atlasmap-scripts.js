!function (t, e) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";

  var n = [],
      i = t.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      a = n.concat,
      s = n.push,
      l = n.indexOf,
      u = {},
      c = u.toString,
      d = u.hasOwnProperty,
      h = d.toString,
      f = h.call(Object),
      p = {},
      g = function g(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      m = function m(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function b(t, e, n) {
    var o,
        r = (e = e || i).createElement("script");
    if (r.text = t, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }
    e.head.appendChild(r).parentNode.removeChild(r);
  }

  function y(t) {
    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t;
  }

  var x = function x(t, e) {
    return new x.fn.init(t, e);
  },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function _(t) {
    var e = !!t && "length" in t && t.length,
        n = y(t);
    return !g(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }

  x.fn = x.prototype = {
    jquery: "3.3.1",
    constructor: x,
    length: 0,
    toArray: function toArray() {
      return r.call(this);
    },
    get: function get(t) {
      return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function pushStack(t) {
      var e = x.merge(this.constructor(), t);
      return e.prevObject = this, e;
    },
    each: function each(t) {
      return x.each(this, t);
    },
    map: function map(t) {
      return this.pushStack(x.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);
      return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, x.extend = x.fn.extend = function () {
    var t,
        e,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;

    for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++) {
      if (null != (t = arguments[s])) for (e in t) {
        n = a[e], a !== (i = t[e]) && (u && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && x.isPlainObject(n) ? n : {}, a[e] = x.extend(u, r, i)) : void 0 !== i && (a[e] = i));
      }
    }

    return a;
  }, x.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(t) {
      throw new Error(t);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(t) {
      var e, n;
      return !(!t || "[object Object]" !== c.call(t) || (e = o(t)) && ("function" != typeof (n = d.call(e, "constructor") && e.constructor) || h.call(n) !== f));
    },
    isEmptyObject: function isEmptyObject(t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(t) {
      b(t);
    },
    each: function each(t, e) {
      var n,
          i = 0;
      if (_(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {
        ;
      } else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }
      return t;
    },
    trim: function trim(t) {
      return null == t ? "" : (t + "").replace(w, "");
    },
    makeArray: function makeArray(t, e) {
      var n = e || [];
      return null != t && (_(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n;
    },
    inArray: function inArray(t, e, n) {
      return null == e ? -1 : l.call(e, t, n);
    },
    merge: function merge(t, e) {
      for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
        t[o++] = e[i];
      }

      return t.length = o, t;
    },
    grep: function grep(t, e, n) {
      for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) {
        !e(t[o], o) !== a && i.push(t[o]);
      }

      return i;
    },
    map: function map(t, e, n) {
      var i,
          o,
          r = 0,
          s = [];
      if (_(t)) for (i = t.length; r < i; r++) {
        null != (o = e(t[r], r, n)) && s.push(o);
      } else for (r in t) {
        null != (o = e(t[r], r, n)) && s.push(o);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: p
  }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    u["[object " + e + "]"] = e.toLowerCase();
  });

  var C = function (t) {
    var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        g,
        m,
        v,
        b,
        y,
        x = "sizzle" + 1 * new Date(),
        w = t.document,
        _ = 0,
        C = 0,
        k = at(),
        T = at(),
        S = at(),
        D = function D(t, e) {
      return t === e && (d = !0), 0;
    },
        E = {}.hasOwnProperty,
        A = [],
        M = A.pop,
        I = A.push,
        P = A.push,
        O = A.slice,
        N = function N(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        if (t[n] === e) return n;
      }

      return -1;
    },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        F = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        j = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
        B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
        W = new RegExp(F + "+", "g"),
        z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
        H = new RegExp("^" + F + "*," + F + "*"),
        q = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
        U = new RegExp(B),
        Y = new RegExp("^" + R + "$"),
        X = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + j),
      PSEUDO: new RegExp("^" + B),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + L + ")$", "i"),
      needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
    },
        $ = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
        tt = function tt(t, e, n) {
      var i = "0x" + e - 65536;
      return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function nt(t, e) {
      return e ? "\0" === t ? "\uFFFD" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        it = function it() {
      h();
    },
        ot = bt(function (t) {
      return !0 === t.disabled && ("form" in t || "label" in t);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      P.apply(A = O.call(w.childNodes), w.childNodes);
    } catch (t) {
      P = {
        apply: A.length ? function (t, e) {
          I.apply(t, O.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {
            ;
          }

          t.length = n - 1;
        }
      };
    }

    function rt(t, e, i, o) {
      var r,
          s,
          u,
          c,
          d,
          p,
          v,
          b = e && e.ownerDocument,
          _ = e ? e.nodeType : 9;

      if (i = i || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return i;

      if (!o && ((e ? e.ownerDocument || e : w) !== f && h(e), e = e || f, g)) {
        if (11 !== _ && (d = K.exec(t))) if (r = d[1]) {
          if (9 === _) {
            if (!(u = e.getElementById(r))) return i;
            if (u.id === r) return i.push(u), i;
          } else if (b && (u = b.getElementById(r)) && y(e, u) && u.id === r) return i.push(u), i;
        } else {
          if (d[2]) return P.apply(i, e.getElementsByTagName(t)), i;
          if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(i, e.getElementsByClassName(r)), i;
        }

        if (n.qsa && !S[t + " "] && (!m || !m.test(t))) {
          if (1 !== _) b = e, v = t;else if ("object" !== e.nodeName.toLowerCase()) {
            for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = x), s = (p = a(t)).length; s--;) {
              p[s] = "#" + c + " " + vt(p[s]);
            }

            v = p.join(","), b = J.test(t) && gt(e.parentNode) || e;
          }
          if (v) try {
            return P.apply(i, b.querySelectorAll(v)), i;
          } catch (t) {} finally {
            c === x && e.removeAttribute("id");
          }
        }
      }

      return l(t.replace(z, "$1"), e, i, o);
    }

    function at() {
      var t = [];
      return function e(n, o) {
        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
      };
    }

    function st(t) {
      return t[x] = !0, t;
    }

    function lt(t) {
      var e = f.createElement("fieldset");

      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }

    function ut(t, e) {
      for (var n = t.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = e;
      }
    }

    function ct(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }
      return t ? 1 : -1;
    }

    function dt(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function ht(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && e.type === t;
      };
    }

    function ft(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function pt(t) {
      return st(function (e) {
        return e = +e, st(function (n, i) {
          for (var o, r = t([], n.length, e), a = r.length; a--;) {
            n[o = r[a]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }

    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }

    for (e in n = rt.support = {}, r = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }, h = rt.setDocument = function (t) {
      var e,
          o,
          a = t ? t.ownerDocument || t : w;
      return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, g = !r(f), w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), n.getElementsByTagName = lt(function (t) {
        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = lt(function (t) {
        return p.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length;
      }), n.getById ? (i.filter.ID = function (t) {
        var e = t.replace(Z, tt);
        return function (t) {
          return t.getAttribute("id") === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && g) {
          var n = e.getElementById(t);
          return n ? [n] : [];
        }
      }) : (i.filter.ID = function (t) {
        var e = t.replace(Z, tt);
        return function (t) {
          var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
          return n && n.value === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && g) {
          var n,
              i,
              o,
              r = e.getElementById(t);

          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];

            for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
            }
          }

          return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            o = 0,
            r = e.getElementsByTagName(t);

        if ("*" === t) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }

          return i;
        }

        return r;
      }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
      }, v = [], m = [], (n.qsa = Q.test(f.querySelectorAll)) && (lt(function (t) {
        p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
      }), lt(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var e = f.createElement("input");
        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = Q.test(b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (t) {
        n.disconnectedMatch = b.call(t, "*"), b.call(t, "[s!='']:x"), v.push("!=", B);
      }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(p.compareDocumentPosition), y = e || Q.test(p.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }
        return !1;
      }, D = e ? function (t, e) {
        if (t === e) return d = !0, 0;
        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && y(w, t) ? -1 : e === f || e.ownerDocument === w && y(w, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1);
      } : function (t, e) {
        if (t === e) return d = !0, 0;
        var n,
            i = 0,
            o = t.parentNode,
            r = e.parentNode,
            a = [t],
            s = [e];
        if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
        if (o === r) return ct(t, e);

        for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }

        for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }

        for (; a[i] === s[i];) {
          i++;
        }

        return i ? ct(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0;
      }, f) : f;
    }, rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }, rt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== f && h(t), e = e.replace(V, "='$1']"), n.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
        var i = b.call(t, e);
        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
      } catch (t) {}
      return rt(e, f, null, [t]).length > 0;
    }, rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== f && h(t), y(t, e);
    }, rt.attr = function (t, e) {
      (t.ownerDocument || t) !== f && h(t);
      var o = i.attrHandle[e.toLowerCase()],
          r = o && E.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
      return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
    }, rt.escape = function (t) {
      return (t + "").replace(et, nt);
    }, rt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, rt.uniqueSort = function (t) {
      var e,
          i = [],
          o = 0,
          r = 0;

      if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(D), d) {
        for (; e = t[r++];) {
          e === t[r] && (o = i.push(r));
        }

        for (; o--;) {
          t.splice(i[o], 1);
        }
      }

      return c = null, t;
    }, o = rt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          r = t.nodeType;

      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof t.textContent) return t.textContent;

          for (t = t.firstChild; t; t = t.nextSibling) {
            n += o(t);
          }
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += o(e);
      }

      return n;
    }, (i = rt.selectors = {
      cacheLength: 50,
      createPseudo: st,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(t) {
          return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        },
        CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
        },
        PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[6] && t[2];
          return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(t) {
          var e = t.replace(Z, tt).toLowerCase();
          return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        },
        CLASS: function CLASS(t) {
          var e = k[t + " "];
          return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && k(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(t, e, n) {
          return function (i) {
            var o = rt.attr(i, t);
            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(t, e, n, i, o) {
          var r = "nth" !== t.slice(0, 3),
              a = "last" !== t.slice(-4),
              s = "of-type" === e;
          return 1 === i && 0 === o ? function (t) {
            return !!t.parentNode;
          } : function (e, n, l) {
            var u,
                c,
                d,
                h,
                f,
                p,
                g = r !== a ? "nextSibling" : "previousSibling",
                m = e.parentNode,
                v = s && e.nodeName.toLowerCase(),
                b = !l && !s,
                y = !1;

            if (m) {
              if (r) {
                for (; g;) {
                  for (h = e; h = h[g];) {
                    if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }

                  p = g = "only" === t && !p && "nextSibling";
                }

                return !0;
              }

              if (p = [a ? m.firstChild : m.lastChild], a && b) {
                for (y = (f = (u = (c = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (y = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++y && h === e) {
                    c[t] = [_, f, y];
                    break;
                  }
                }
              } else if (b && (y = f = (u = (c = (d = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && u[1]), !1 === y) for (; (h = ++f && h && h[g] || (y = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && ((c = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [_, y]), h !== e));) {
                ;
              }

              return (y -= o) === i || y % i == 0 && y / i >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(t, e) {
          var n,
              o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
          return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, n) {
            for (var i, r = o(t, e), a = r.length; a--;) {
              t[i = N(t, r[a])] = !(n[i] = r[a]);
            }
          }) : function (t) {
            return o(t, 0, n);
          }) : o;
        }
      },
      pseudos: {
        not: st(function (t) {
          var e = [],
              n = [],
              i = s(t.replace(z, "$1"));
          return i[x] ? st(function (t, e, n, o) {
            for (var r, a = i(t, null, o, []), s = t.length; s--;) {
              (r = a[s]) && (t[s] = !(e[s] = r));
            }
          }) : function (t, o, r) {
            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
          };
        }),
        has: st(function (t) {
          return function (e) {
            return rt(t, e).length > 0;
          };
        }),
        contains: st(function (t) {
          return t = t.replace(Z, tt), function (e) {
            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
          };
        }),
        lang: st(function (t) {
          return Y.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(), function (e) {
            var n;

            do {
              if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var n = t.location && t.location.hash;
          return n && n.slice(1) === e.id;
        },
        root: function root(t) {
          return t === p;
        },
        focus: function focus(t) {
          return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: ft(!1),
        disabled: ft(!0),
        checked: function checked(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected;
        },
        selected: function selected(t) {
          return !0 === t.selected;
        },
        empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(t) {
          return !i.pseudos.empty(t);
        },
        header: function header(t) {
          return G.test(t.nodeName);
        },
        input: function input(t) {
          return $.test(t.nodeName);
        },
        button: function button(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e;
        },
        text: function text(t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: pt(function () {
          return [0];
        }),
        last: pt(function (t, e) {
          return [e - 1];
        }),
        eq: pt(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }),
        even: pt(function (t, e) {
          for (var n = 0; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        odd: pt(function (t, e) {
          for (var n = 1; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        lt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; --i >= 0;) {
            t.push(i);
          }

          return t;
        }),
        gt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) {
            t.push(i);
          }

          return t;
        })
      }
    }).pseudos.nth = i.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      i.pseudos[e] = dt(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      i.pseudos[e] = ht(e);
    }

    function mt() {}

    function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) {
        i += t[e].value;
      }

      return i;
    }

    function bt(t, e, n) {
      var i = e.dir,
          o = e.next,
          r = o || i,
          a = n && "parentNode" === r,
          s = C++;
      return e.first ? function (e, n, o) {
        for (; e = e[i];) {
          if (1 === e.nodeType || a) return t(e, n, o);
        }

        return !1;
      } : function (e, n, l) {
        var u,
            c,
            d,
            h = [_, s];

        if (l) {
          for (; e = e[i];) {
            if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
          }
        } else for (; e = e[i];) {
          if (1 === e.nodeType || a) if (c = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
            if ((u = c[r]) && u[0] === _ && u[1] === s) return h[2] = u[2];
            if (c[r] = h, h[2] = t(e, n, l)) return !0;
          }
        }

        return !1;
      };
    }

    function yt(t) {
      return t.length > 1 ? function (e, n, i) {
        for (var o = t.length; o--;) {
          if (!t[o](e, n, i)) return !1;
        }

        return !0;
      } : t[0];
    }

    function xt(t, e, n, i, o) {
      for (var r, a = [], s = 0, l = t.length, u = null != e; s < l; s++) {
        (r = t[s]) && (n && !n(r, i, o) || (a.push(r), u && e.push(s)));
      }

      return a;
    }

    function wt(t, e, n, i, o, r) {
      return i && !i[x] && (i = wt(i)), o && !o[x] && (o = wt(o, r)), st(function (r, a, s, l) {
        var u,
            c,
            d,
            h = [],
            f = [],
            p = a.length,
            g = r || function (t, e, n) {
          for (var i = 0, o = e.length; i < o; i++) {
            rt(t, e[i], n);
          }

          return n;
        }(e || "*", s.nodeType ? [s] : s, []),
            m = !t || !r && e ? g : xt(g, h, t, s, l),
            v = n ? o || (r ? t : p || i) ? [] : a : m;

        if (n && n(m, v, s, l), i) for (u = xt(v, f), i(u, [], s, l), c = u.length; c--;) {
          (d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
        }

        if (r) {
          if (o || t) {
            if (o) {
              for (u = [], c = v.length; c--;) {
                (d = v[c]) && u.push(m[c] = d);
              }

              o(null, v = [], u, l);
            }

            for (c = v.length; c--;) {
              (d = v[c]) && (u = o ? N(r, d) : h[c]) > -1 && (r[u] = !(a[u] = d));
            }
          }
        } else v = xt(v === a ? v.splice(p, v.length) : v), o ? o(null, a, v, l) : P.apply(a, v);
      });
    }

    function _t(t) {
      for (var e, n, o, r = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = bt(function (t) {
        return t === e;
      }, s, !0), d = bt(function (t) {
        return N(e, t) > -1;
      }, s, !0), h = [function (t, n, i) {
        var o = !a && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
        return e = null, o;
      }]; l < r; l++) {
        if (n = i.relative[t[l].type]) h = [bt(yt(h), n)];else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
            for (o = ++l; o < r && !i.relative[t[o].type]; o++) {
              ;
            }

            return wt(l > 1 && yt(h), l > 1 && vt(t.slice(0, l - 1).concat({
              value: " " === t[l - 2].type ? "*" : ""
            })).replace(z, "$1"), n, l < o && _t(t.slice(l, o)), o < r && _t(t = t.slice(o)), o < r && vt(t));
          }

          h.push(n);
        }
      }

      return yt(h);
    }

    function Ct(t, e) {
      var n = e.length > 0,
          o = t.length > 0,
          r = function (_r) {
        function r(_x, _x2, _x3, _x4, _x5) {
          return _r.apply(this, arguments);
        }

        r.toString = function () {
          return _r.toString();
        };

        return r;
      }(function (r, a, s, l, c) {
        var d,
            p,
            m,
            v = 0,
            b = "0",
            y = r && [],
            x = [],
            w = u,
            C = r || o && i.find.TAG("*", c),
            k = _ += null == w ? 1 : Math.random() || .1,
            T = C.length;

        for (c && (u = a === f || a || c); b !== T && null != (d = C[b]); b++) {
          if (o && d) {
            for (p = 0, a || d.ownerDocument === f || (h(d), s = !g); m = t[p++];) {
              if (m(d, a || f, s)) {
                l.push(d);
                break;
              }
            }

            c && (_ = k);
          }

          n && ((d = !m && d) && v--, r && y.push(d));
        }

        if (v += b, n && b !== v) {
          for (p = 0; m = e[p++];) {
            m(y, x, a, s);
          }

          if (r) {
            if (v > 0) for (; b--;) {
              y[b] || x[b] || (x[b] = M.call(l));
            }
            x = xt(x);
          }

          P.apply(l, x), c && !r && x.length > 0 && v + e.length > 1 && rt.uniqueSort(l);
        }

        return c && (_ = k, u = w), y;
      });

      return n ? st(r) : r;
    }

    return mt.prototype = i.filters = i.pseudos, i.setFilters = new mt(), a = rt.tokenize = function (t, e) {
      var n,
          o,
          r,
          a,
          s,
          l,
          u,
          c = T[t + " "];
      if (c) return e ? 0 : c.slice(0);

      for (s = t, l = [], u = i.preFilter; s;) {
        for (a in n && !(o = H.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = q.exec(s)) && (n = o.shift(), r.push({
          value: n,
          type: o[0].replace(z, " ")
        }), s = s.slice(n.length)), i.filter) {
          !(o = X[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), r.push({
            value: n,
            type: a,
            matches: o
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return e ? s.length : s ? rt.error(t) : T(t, l).slice(0);
    }, s = rt.compile = function (t, e) {
      var n,
          i = [],
          o = [],
          r = S[t + " "];

      if (!r) {
        for (e || (e = a(t)), n = e.length; n--;) {
          (r = _t(e[n]))[x] ? i.push(r) : o.push(r);
        }

        (r = S(t, Ct(o, i))).selector = t;
      }

      return r;
    }, l = rt.select = function (t, e, n, o) {
      var r,
          l,
          u,
          c,
          d,
          h = "function" == typeof t && t,
          f = !o && a(t = h.selector || t);

      if (n = n || [], 1 === f.length) {
        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
          if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0])) return n;
          h && (e = e.parentNode), t = t.slice(l.shift().value.length);
        }

        for (r = X.needsContext.test(t) ? 0 : l.length; r-- && !i.relative[c = (u = l[r]).type];) {
          if ((d = i.find[c]) && (o = d(u.matches[0].replace(Z, tt), J.test(l[0].type) && gt(e.parentNode) || e))) {
            if (l.splice(r, 1), !(t = o.length && vt(l))) return P.apply(n, o), n;
            break;
          }
        }
      }

      return (h || s(t, f))(o, e, !g, n, !e || J.test(t) && gt(e.parentNode) || e), n;
    }, n.sortStable = x.split("").sort(D).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = lt(function (t) {
      return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
    }), lt(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || ut("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), n.attributes && lt(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || ut("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
    }), lt(function (t) {
      return null == t.getAttribute("disabled");
    }) || ut(L, function (t, e, n) {
      var i;
      if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), rt;
  }(t);

  x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;

  var k = function k(t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
      if (1 === t.nodeType) {
        if (o && x(t).is(n)) break;
        i.push(t);
      }
    }

    return i;
  },
      T = function T(t, e) {
    for (var n = []; t; t = t.nextSibling) {
      1 === t.nodeType && t !== e && n.push(t);
    }

    return n;
  },
      S = x.expr.match.needsContext;

  function D(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }

  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function A(t, e, n) {
    return g(e) ? x.grep(t, function (t, i) {
      return !!e.call(t, i, t) !== n;
    }) : e.nodeType ? x.grep(t, function (t) {
      return t === e !== n;
    }) : "string" != typeof e ? x.grep(t, function (t) {
      return l.call(e, t) > -1 !== n;
    }) : x.filter(e, t, n);
  }

  x.filter = function (t, e, n) {
    var i = e[0];
    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, x.fn.extend({
    find: function find(t) {
      var e,
          n,
          i = this.length,
          o = this;
      if ("string" != typeof t) return this.pushStack(x(t).filter(function () {
        for (e = 0; e < i; e++) {
          if (x.contains(o[e], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), e = 0; e < i; e++) {
        x.find(t, o[e], n);
      }

      return i > 1 ? x.uniqueSort(n) : n;
    },
    filter: function filter(t) {
      return this.pushStack(A(this, t || [], !1));
    },
    not: function not(t) {
      return this.pushStack(A(this, t || [], !0));
    },
    is: function is(t) {
      return !!A(this, "string" == typeof t && S.test(t) ? x(t) : t || [], !1).length;
    }
  });
  var M,
      I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (x.fn.init = function (t, e, n) {
    var o, r;
    if (!t) return this;

    if (n = n || M, "string" == typeof t) {
      if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);

      if (o[1]) {
        if (x.merge(this, x.parseHTML(o[1], (e = e instanceof x ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i, !0)), E.test(o[1]) && x.isPlainObject(e)) for (o in e) {
          g(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
        }
        return this;
      }

      return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }

    return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this);
  }).prototype = x.fn, M = x(i);
  var P = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function N(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {
      ;
    }

    return t;
  }

  x.fn.extend({
    has: function has(t) {
      var e = x(t, this),
          n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) {
          if (x.contains(this, e[t])) return !0;
        }
      });
    },
    closest: function closest(t, e) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof t && x(t);
      if (!S.test(t)) for (; i < o; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
            r.push(n);
            break;
          }
        }
      }
      return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r);
    },
    index: function index(t) {
      return t ? "string" == typeof t ? l.call(x(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(t, e) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
    },
    addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }), x.each({
    parent: function parent(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    },
    parents: function parents(t) {
      return k(t, "parentNode");
    },
    parentsUntil: function parentsUntil(t, e, n) {
      return k(t, "parentNode", n);
    },
    next: function next(t) {
      return N(t, "nextSibling");
    },
    prev: function prev(t) {
      return N(t, "previousSibling");
    },
    nextAll: function nextAll(t) {
      return k(t, "nextSibling");
    },
    prevAll: function prevAll(t) {
      return k(t, "previousSibling");
    },
    nextUntil: function nextUntil(t, e, n) {
      return k(t, "nextSibling", n);
    },
    prevUntil: function prevUntil(t, e, n) {
      return k(t, "previousSibling", n);
    },
    siblings: function siblings(t) {
      return T((t.parentNode || {}).firstChild, t);
    },
    children: function children(t) {
      return T(t.firstChild);
    },
    contents: function contents(t) {
      return D(t, "iframe") ? t.contentDocument : (D(t, "template") && (t = t.content || t), x.merge([], t.childNodes));
    }
  }, function (t, e) {
    x.fn[t] = function (n, i) {
      var o = x.map(this, e, n);
      return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (O[t] || x.uniqueSort(o), P.test(t) && o.reverse()), this.pushStack(o);
    };
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function F(t) {
    return t;
  }

  function R(t) {
    throw t;
  }

  function j(t, e, n, i) {
    var o;

    try {
      t && g(o = t.promise) ? o.call(t).done(e).fail(n) : t && g(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }

  x.Callbacks = function (t) {
    t = "string" == typeof t ? function (t) {
      var e = {};
      return x.each(t.match(L) || [], function (t, n) {
        e[n] = !0;
      }), e;
    }(t) : x.extend({}, t);

    var e,
        n,
        i,
        o,
        r = [],
        a = [],
        s = -1,
        l = function l() {
      for (o = o || t.once, i = e = !0; a.length; s = -1) {
        for (n = a.shift(); ++s < r.length;) {
          !1 === r[s].apply(n[0], n[1]) && t.stopOnFalse && (s = r.length, n = !1);
        }
      }

      t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
    },
        u = {
      add: function add() {
        return r && (n && !e && (s = r.length - 1, a.push(n)), function e(n) {
          x.each(n, function (n, i) {
            g(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== y(i) && e(i);
          });
        }(arguments), n && !e && l()), this;
      },
      remove: function remove() {
        return x.each(arguments, function (t, e) {
          for (var n; (n = x.inArray(e, r, n)) > -1;) {
            r.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(t) {
        return t ? x.inArray(t, r) > -1 : r.length > 0;
      },
      empty: function empty() {
        return r && (r = []), this;
      },
      disable: function disable() {
        return o = a = [], r = n = "", this;
      },
      disabled: function disabled() {
        return !r;
      },
      lock: function lock() {
        return o = a = [], n || e || (r = n = ""), this;
      },
      locked: function locked() {
        return !!o;
      },
      fireWith: function fireWith(t, n) {
        return o || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this;
      },
      fire: function fire() {
        return u.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return u;
  }, x.extend({
    Deferred: function Deferred(e) {
      var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = {
        state: function state() {
          return i;
        },
        always: function always() {
          return r.done(arguments).fail(arguments), this;
        },
        catch: function _catch(t) {
          return o.then(null, t);
        },
        pipe: function pipe() {
          var t = arguments;
          return x.Deferred(function (e) {
            x.each(n, function (n, i) {
              var o = g(t[i[4]]) && t[i[4]];
              r[i[1]](function () {
                var t = o && o.apply(this, arguments);
                t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments);
              });
            }), t = null;
          }).promise();
        },
        then: function then(e, i, o) {
          var r = 0;

          function a(e, n, i, o) {
            return function () {
              var s = this,
                  l = arguments,
                  u = function u() {
                var t, u;

                if (!(e < r)) {
                  if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  g(u = t && ("object" == typeof t || "function" == typeof t) && t.then) ? o ? u.call(t, a(r, n, F, o), a(r, n, R, o)) : u.call(t, a(++r, n, F, o), a(r, n, R, o), a(r, n, F, n.notifyWith)) : (i !== F && (s = void 0, l = [t]), (o || n.resolveWith)(s, l));
                }
              },
                  c = o ? u : function () {
                try {
                  u();
                } catch (t) {
                  x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= r && (i !== R && (s = void 0, l = [t]), n.rejectWith(s, l));
                }
              };

              e ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), t.setTimeout(c));
            };
          }

          return x.Deferred(function (t) {
            n[0][3].add(a(0, t, g(o) ? o : F, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : F)), n[2][3].add(a(0, t, g(i) ? i : R));
          }).promise();
        },
        promise: function promise(t) {
          return null != t ? x.extend(t, o) : o;
        }
      },
          r = {};
      return x.each(n, function (t, e) {
        var a = e[2],
            s = e[5];
        o[e[1]] = a.add, s && a.add(function () {
          i = s;
        }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), r[e[0]] = function () {
          return r[e[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[e[0] + "With"] = a.fireWith;
      }), o.promise(r), e && e.call(r, r), r;
    },
    when: function when(t) {
      var e = arguments.length,
          n = e,
          i = Array(n),
          o = r.call(arguments),
          a = x.Deferred(),
          s = function s(t) {
        return function (n) {
          i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || a.resolveWith(i, o);
        };
      };

      if (e <= 1 && (j(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || g(o[n] && o[n].then))) return a.then();

      for (; n--;) {
        j(o[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  x.Deferred.exceptionHook = function (e, n) {
    t.console && t.console.warn && e && B.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }, x.readyException = function (e) {
    t.setTimeout(function () {
      throw e;
    });
  };
  var W = x.Deferred();

  function z() {
    i.removeEventListener("DOMContentLoaded", z), t.removeEventListener("load", z), x.ready();
  }

  x.fn.ready = function (t) {
    return W.then(t).catch(function (t) {
      x.readyException(t);
    }), this;
  }, x.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(t) {
      (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== t && --x.readyWait > 0 || W.resolveWith(i, [x]));
    }
  }), x.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", z), t.addEventListener("load", z));

  var H = function H(t, e, n, i, o, r, a) {
    var s = 0,
        l = t.length,
        u = null == n;
    if ("object" === y(n)) for (s in o = !0, n) {
      H(t, e, s, n[s], !0, r, a);
    } else if (void 0 !== i && (o = !0, g(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function e(t, _e2, n) {
      return u.call(x(t), n);
    })), e)) for (; s < l; s++) {
      e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
    }
    return o ? t : u ? e.call(t) : l ? e(t[0], n) : r;
  },
      q = /^-ms-/,
      V = /-([a-z])/g;

  function U(t, e) {
    return e.toUpperCase();
  }

  function Y(t) {
    return t.replace(q, "ms-").replace(V, U);
  }

  var X = function X(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };

  function $() {
    this.expando = x.expando + $.uid++;
  }

  $.uid = 1, $.prototype = {
    cache: function cache(t) {
      var e = t[this.expando];
      return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
        value: e,
        configurable: !0
      }))), e;
    },
    set: function set(t, e, n) {
      var i,
          o = this.cache(t);
      if ("string" == typeof e) o[Y(e)] = n;else for (i in e) {
        o[Y(i)] = e[i];
      }
      return o;
    },
    get: function get(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
    },
    access: function access(t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    },
    remove: function remove(t, e) {
      var n,
          i = t[this.expando];

      if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(L) || []).length;

          for (; n--;) {
            delete i[e[n]];
          }
        }

        (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    },
    hasData: function hasData(t) {
      var e = t[this.expando];
      return void 0 !== e && !x.isEmptyObject(e);
    }
  };
  var G = new $(),
      Q = new $(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
      try {
        n = function (t) {
          return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : K.test(t) ? JSON.parse(t) : t);
        }(n);
      } catch (t) {}

      Q.set(t, e, n);
    } else n = void 0;
    return n;
  }

  x.extend({
    hasData: function hasData(t) {
      return Q.hasData(t) || G.hasData(t);
    },
    data: function data(t, e, n) {
      return Q.access(t, e, n);
    },
    removeData: function removeData(t, e) {
      Q.remove(t, e);
    },
    _data: function _data(t, e, n) {
      return G.access(t, e, n);
    },
    _removeData: function _removeData(t, e) {
      G.remove(t, e);
    }
  }), x.fn.extend({
    data: function data(t, e) {
      var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;

      if (void 0 === t) {
        if (this.length && (o = Q.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
          for (n = a.length; n--;) {
            a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), Z(r, i, o[i]));
          }

          G.set(r, "hasDataAttrs", !0);
        }

        return o;
      }

      return "object" == typeof t ? this.each(function () {
        Q.set(this, t);
      }) : H(this, function (e) {
        var n;

        if (r && void 0 === e) {
          if (void 0 !== (n = Q.get(r, t))) return n;
          if (void 0 !== (n = Z(r, t))) return n;
        } else this.each(function () {
          Q.set(this, t, e);
        });
      }, null, e, arguments.length > 1, null, !0);
    },
    removeData: function removeData(t) {
      return this.each(function () {
        Q.remove(this, t);
      });
    }
  }), x.extend({
    queue: function queue(t, e, n) {
      var i;
      if (t) return i = G.get(t, e = (e || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = G.access(t, e, x.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function dequeue(t, e) {
      var n = x.queue(t, e = e || "fx"),
          i = n.length,
          o = n.shift(),
          r = x._queueHooks(t, e);

      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
        x.dequeue(t, e);
      }, r)), !i && r && r.empty.fire();
    },
    _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";
      return G.get(t, n) || G.access(t, n, {
        empty: x.Callbacks("once memory").add(function () {
          G.remove(t, [e + "queue", n]);
        })
      });
    }
  }), x.fn.extend({
    queue: function queue(t, e) {
      var n = 2;
      return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var n = x.queue(this, t, e);
        x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t);
      });
    },
    dequeue: function dequeue(t) {
      return this.each(function () {
        x.dequeue(this, t);
      });
    },
    clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    },
    promise: function promise(t, e) {
      var n,
          i = 1,
          o = x.Deferred(),
          r = this,
          a = this.length,
          s = function s() {
        --i || o.resolveWith(r, [r]);
      };

      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
        (n = G.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      }

      return s(), o.promise(e);
    }
  });

  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      nt = ["Top", "Right", "Bottom", "Left"],
      it = function it(t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && x.contains(t.ownerDocument, t) && "none" === x.css(t, "display");
  },
      ot = function ot(t, e, n, i) {
    var o,
        r,
        a = {};

    for (r in e) {
      a[r] = t.style[r], t.style[r] = e[r];
    }

    for (r in o = n.apply(t, i || []), e) {
      t.style[r] = a[r];
    }

    return o;
  };

  function rt(t, e, n, i) {
    var o,
        r,
        a = 20,
        s = i ? function () {
      return i.cur();
    } : function () {
      return x.css(t, e, "");
    },
        l = s(),
        u = n && n[3] || (x.cssNumber[e] ? "" : "px"),
        c = (x.cssNumber[e] || "px" !== u && +l) && et.exec(x.css(t, e));

    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; a--;) {
        x.style(t, e, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
      }

      x.style(t, e, (c *= 2) + u), n = n || [];
    }

    return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o;
  }

  var at = {};

  function st(t) {
    var e,
        n = t.ownerDocument,
        i = t.nodeName,
        o = at[i];
    return o || (e = n.body.appendChild(n.createElement(i)), o = x.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), at[i] = o, o);
  }

  function lt(t, e) {
    for (var n, i, o = [], r = 0, a = t.length; r < a; r++) {
      (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && it(i) && (o[r] = st(i))) : "none" !== n && (o[r] = "none", G.set(i, "display", n)));
    }

    for (r = 0; r < a; r++) {
      null != o[r] && (t[r].style.display = o[r]);
    }

    return t;
  }

  x.fn.extend({
    show: function show() {
      return lt(this, !0);
    },
    hide: function hide() {
      return lt(this);
    },
    toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        it(this) ? x(this).show() : x(this).hide();
      });
    }
  });
  var ut = /^(?:checkbox|radio)$/i,
      ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      dt = /^$|^module$|\/(?:java|ecma)script/i,
      ht = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ft(t, e) {
    var n;
    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? x.merge([t], n) : n;
  }

  function pt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) {
      G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"));
    }
  }

  ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
  var gt = /<|&#?\w+;/;

  function mt(t, e, n, i, o) {
    for (var r, a, s, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++) {
      if ((r = t[f]) || 0 === r) if ("object" === y(r)) x.merge(h, r.nodeType ? [r] : r);else if (gt.test(r)) {
        for (a = a || d.appendChild(e.createElement("div")), s = (ct.exec(r) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = ht[s] || ht._default)[1] + x.htmlPrefilter(r) + l[2], c = l[0]; c--;) {
          a = a.lastChild;
        }

        x.merge(h, a.childNodes), (a = d.firstChild).textContent = "";
      } else h.push(e.createTextNode(r));
    }

    for (d.textContent = "", f = 0; r = h[f++];) {
      if (i && x.inArray(r, i) > -1) o && o.push(r);else if (u = x.contains(r.ownerDocument, r), a = ft(d.appendChild(r), "script"), u && pt(a), n) for (c = 0; r = a[c++];) {
        dt.test(r.type || "") && n.push(r);
      }
    }

    return d;
  }

  !function () {
    var t = i.createDocumentFragment().appendChild(i.createElement("div")),
        e = i.createElement("input");
    e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), p.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();
  var vt = i.documentElement,
      bt = /^key/,
      yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xt = /^([^.]*)(?:\.(.+)|)/;

  function wt() {
    return !0;
  }

  function _t() {
    return !1;
  }

  function Ct() {
    try {
      return i.activeElement;
    } catch (t) {}
  }

  function kt(t, e, n, i, o, r) {
    var a, s;

    if ("object" == typeof e) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), e) {
        kt(t, s, n, i, e[s], r);
      }

      return t;
    }

    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = _t;else if (!o) return t;
    return 1 === r && (a = o, (o = function o(t) {
      return x().off(t), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = x.guid++)), t.each(function () {
      x.event.add(this, e, o, i, n);
    });
  }

  x.event = {
    global: {},
    add: function add(t, e, n, i, o) {
      var r,
          a,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          g,
          m = G.get(t);
      if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(vt, o), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
        return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0;
      }), u = (e = (e || "").match(L) || [""]).length; u--;) {
        f = g = (s = xt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, d = x.event.special[f = (o ? d.delegateType : d.bindType) || f] || {}, c = x.extend({
          type: f,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && x.expr.match.needsContext.test(o),
          namespace: p.join(".")
        }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(f, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), x.event.global[f] = !0);
      }
    },
    remove: function remove(t, e, n, i, o) {
      var r,
          a,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          g,
          m = G.hasData(t) && G.get(t);

      if (m && (l = m.events)) {
        for (u = (e = (e || "").match(L) || [""]).length; u--;) {
          if (f = g = (s = xt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
            for (d = x.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) {
              c = h[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
            }

            a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || x.removeEvent(t, f, m.handle), delete l[f]);
          } else for (f in l) {
            x.event.remove(t, f + e[u], n, i, !0);
          }
        }

        x.isEmptyObject(l) && G.remove(t, "handle events");
      }
    },
    dispatch: function dispatch(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s = x.event.fix(t),
          l = new Array(arguments.length),
          u = (G.get(this, "events") || {})[s.type] || [],
          c = x.event.special[s.type] || {};

      for (l[0] = s, e = 1; e < arguments.length; e++) {
        l[e] = arguments[e];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = x.event.handlers.call(this, s, u), e = 0; (o = a[e++]) && !s.isPropagationStopped();) {
          for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
            s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(t, e) {
      var n,
          i,
          o,
          r,
          a,
          s = [],
          l = e.delegateCount,
          u = t.target;
      if (l && u.nodeType && !("click" === t.type && t.button >= 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
          for (r = [], a = {}, n = 0; n < l; n++) {
            void 0 === a[o = (i = e[n]).selector + " "] && (a[o] = i.needsContext ? x(o, this).index(u) > -1 : x.find(o, this, null, [u]).length), a[o] && r.push(i);
          }

          r.length && s.push({
            elem: u,
            handlers: r
          });
        }
      }
      return u = this, l < e.length && s.push({
        elem: u,
        handlers: e.slice(l)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(x.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: g(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(t) {
      return t[x.expando] ? t : new x.Event(t);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Ct() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Ct() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
        },
        _default: function _default(t) {
          return D(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }, x.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, x.Event = function (t, e) {
    if (!(this instanceof x.Event)) return new x.Event(t, e);
    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0;
  }, x.Event.prototype = {
    constructor: x.Event,
    isDefaultPrevented: _t,
    isPropagationStopped: _t,
    isImmediatePropagationStopped: _t,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var t = this.originalEvent;
      this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var t = this.originalEvent;
      this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    }
  }, x.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(t) {
      var e = t.button;
      return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    }
  }, x.event.addProp), x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, e) {
    x.event.special[t] = {
      delegateType: e,
      bindType: e,
      handle: function handle(t) {
        var n,
            i = t.relatedTarget,
            o = t.handleObj;
        return i && (i === this || x.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
      }
    };
  }), x.fn.extend({
    on: function on(t, e, n, i) {
      return kt(this, t, e, n, i);
    },
    one: function one(t, e, n, i) {
      return kt(this, t, e, n, i, 1);
    },
    off: function off(t, e, n) {
      var i, o;
      if (t && t.preventDefault && t.handleObj) return i = t.handleObj, x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == typeof t) {
        for (o in t) {
          this.off(o, e, t[o]);
        }

        return this;
      }

      return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _t), this.each(function () {
        x.event.remove(this, t, n, e);
      });
    }
  });
  var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      St = /<script|<style|<link/i,
      Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function At(t, e) {
    return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t;
  }

  function Mt(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }

  function It(t) {
    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
  }

  function Pt(t, e) {
    var n, i, o, r, a, s, l, u;

    if (1 === e.nodeType) {
      if (G.hasData(t) && (r = G.access(t), a = G.set(e, r), u = r.events)) for (o in delete a.handle, a.events = {}, u) {
        for (n = 0, i = u[o].length; n < i; n++) {
          x.event.add(e, o, u[o][n]);
        }
      }
      Q.hasData(t) && (s = Q.access(t), l = x.extend({}, s), Q.set(e, l));
    }
  }

  function Ot(t, e) {
    var n = e.nodeName.toLowerCase();
    "input" === n && ut.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
  }

  function Nt(t, e, n, i) {
    e = a.apply([], e);
    var o,
        r,
        s,
        l,
        u,
        c,
        d = 0,
        h = t.length,
        f = h - 1,
        m = e[0],
        v = g(m);
    if (v || h > 1 && "string" == typeof m && !p.checkClone && Dt.test(m)) return t.each(function (o) {
      var r = t.eq(o);
      v && (e[0] = m.call(this, o, r.html())), Nt(r, e, n, i);
    });

    if (h && (r = (o = mt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (s = x.map(ft(o, "script"), Mt)).length; d < h; d++) {
        u = o, d !== f && (u = x.clone(u, !0, !0), l && x.merge(s, ft(u, "script"))), n.call(t[d], u, d);
      }

      if (l) for (c = s[s.length - 1].ownerDocument, x.map(s, It), d = 0; d < l; d++) {
        dt.test((u = s[d]).type || "") && !G.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(u.src) : b(u.textContent.replace(Et, ""), c, u));
      }
    }

    return t;
  }

  function Lt(t, e, n) {
    for (var i, o = e ? x.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || x.cleanData(ft(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
    }

    return t;
  }

  x.extend({
    htmlPrefilter: function htmlPrefilter(t) {
      return t.replace(Tt, "<$1></$2>");
    },
    clone: function clone(t, e, n) {
      var i,
          o,
          r,
          a,
          s = t.cloneNode(!0),
          l = x.contains(t.ownerDocument, t);
      if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t))) for (a = ft(s), i = 0, o = (r = ft(t)).length; i < o; i++) {
        Ot(r[i], a[i]);
      }
      if (e) if (n) for (r = r || ft(t), a = a || ft(s), i = 0, o = r.length; i < o; i++) {
        Pt(r[i], a[i]);
      } else Pt(t, s);
      return (a = ft(s, "script")).length > 0 && pt(a, !l && ft(t, "script")), s;
    },
    cleanData: function cleanData(t) {
      for (var e, n, i, o = x.event.special, r = 0; void 0 !== (n = t[r]); r++) {
        if (X(n)) {
          if (e = n[G.expando]) {
            if (e.events) for (i in e.events) {
              o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
            }
            n[G.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), x.fn.extend({
    detach: function detach(t) {
      return Lt(this, t, !0);
    },
    remove: function remove(t) {
      return Lt(this, t);
    },
    text: function text(t) {
      return H(this, function (t) {
        return void 0 === t ? x.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    },
    append: function append() {
      return Nt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t);
      });
    },
    prepend: function prepend() {
      return Nt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = At(this, t);
          e.insertBefore(t, e.firstChild);
        }
      });
    },
    before: function before() {
      return Nt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    },
    after: function after() {
      return Nt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (x.cleanData(ft(t, !1)), t.textContent = "");
      }

      return this;
    },
    clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return x.clone(this, t, e);
      });
    },
    html: function html(t) {
      return H(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

        if ("string" == typeof t && !St.test(t) && !ht[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = x.htmlPrefilter(t);

          try {
            for (; n < i; n++) {
              1 === (e = this[n] || {}).nodeType && (x.cleanData(ft(e, !1)), e.innerHTML = t);
            }

            e = 0;
          } catch (t) {}
        }

        e && this.empty().append(t);
      }, null, t, arguments.length);
    },
    replaceWith: function replaceWith() {
      var t = [];
      return Nt(this, arguments, function (e) {
        var n = this.parentNode;
        x.inArray(this, t) < 0 && (x.cleanData(ft(this)), n && n.replaceChild(e, this));
      }, t);
    }
  }), x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, e) {
    x.fn[t] = function (t) {
      for (var n, i = [], o = x(t), r = o.length - 1, a = 0; a <= r; a++) {
        n = a === r ? this : this.clone(!0), x(o[a])[e](n), s.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  var Ft = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Rt = function Rt(e) {
    var n = e.ownerDocument.defaultView;
    return n && n.opener || (n = t), n.getComputedStyle(e);
  },
      jt = new RegExp(nt.join("|"), "i");

  function Bt(t, e, n) {
    var i,
        o,
        r,
        a,
        s = t.style;
    return (n = n || Rt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || x.contains(t.ownerDocument, t) || (a = x.style(t, e)), !p.pixelBoxStyles() && Ft.test(a) && jt.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a;
  }

  function Wt(t, e) {
    return {
      get: function get() {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (c) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(u).appendChild(c);
        var e = t.getComputedStyle(c);
        o = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", vt.removeChild(u), c = null;
      }
    }

    function n(t) {
      return Math.round(parseFloat(t));
    }

    var o,
        r,
        a,
        s,
        l,
        u = i.createElement("div"),
        c = i.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(p, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), s;
      },
      pixelPosition: function pixelPosition() {
        return e(), o;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), l;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), a;
      }
    }));
  }();
  var zt = /^(none|table(?!-c[ea]).+)/,
      Ht = /^--/,
      qt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Vt = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ut = ["Webkit", "Moz", "ms"],
      Yt = i.createElement("div").style;

  function Xt(t) {
    var e = x.cssProps[t];
    return e || (e = x.cssProps[t] = function (t) {
      if (t in Yt) return t;

      for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;) {
        if ((t = Ut[n] + e) in Yt) return t;
      }
    }(t) || t), e;
  }

  function $t(t, e, n) {
    var i = et.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }

  function Gt(t, e, n, i, o, r) {
    var a = "width" === e ? 1 : 0,
        s = 0,
        l = 0;
    if (n === (i ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (l += x.css(t, n + nt[a], !0, o)), i ? ("content" === n && (l -= x.css(t, "padding" + nt[a], !0, o)), "margin" !== n && (l -= x.css(t, "border" + nt[a] + "Width", !0, o))) : (l += x.css(t, "padding" + nt[a], !0, o), "padding" !== n ? l += x.css(t, "border" + nt[a] + "Width", !0, o) : s += x.css(t, "border" + nt[a] + "Width", !0, o));
    }

    return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - s - .5))), l;
  }

  function Qt(t, e, n) {
    var i = Rt(t),
        o = Bt(t, e, i),
        r = "border-box" === x.css(t, "boxSizing", !1, i),
        a = r;

    if (Ft.test(o)) {
      if (!n) return o;
      o = "auto";
    }

    return a = a && (p.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === x.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (o = parseFloat(o) || 0) + Gt(t, e, n || (r ? "border" : "content"), a, i, o) + "px";
  }

  function Kt(t, e, n, i, o) {
    return new Kt.prototype.init(t, e, n, i, o);
  }

  x.extend({
    cssHooks: {
      opacity: {
        get: function get(t, e) {
          if (e) {
            var n = Bt(t, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            r,
            a,
            s = Y(e),
            l = Ht.test(e),
            u = t.style;
        if (l || (e = Xt(s)), a = x.cssHooks[e] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : u[e];
        "string" == (r = typeof n) && (o = et.exec(n)) && o[1] && (n = rt(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (x.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n));
      }
    },
    css: function css(t, e, n, i) {
      var o,
          r,
          a,
          s = Y(e);
      return Ht.test(e) || (e = Xt(s)), (a = x.cssHooks[e] || x.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = Bt(t, e, i)), "normal" === o && e in Vt && (o = Vt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    }
  }), x.each(["height", "width"], function (t, e) {
    x.cssHooks[e] = {
      get: function get(t, n, i) {
        if (n) return !zt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, i) : ot(t, qt, function () {
          return Qt(t, e, i);
        });
      },
      set: function set(t, n, i) {
        var o,
            r = Rt(t),
            a = "border-box" === x.css(t, "boxSizing", !1, r),
            s = i && Gt(t, e, i, a, r);
        return a && p.scrollboxSize() === r.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Gt(t, e, "border", !1, r) - .5)), s && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = x.css(t, e)), $t(0, n, s);
      }
    };
  }), x.cssHooks.marginLeft = Wt(p.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(Bt(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, {
      marginLeft: 0
    }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (t, e) {
    x.cssHooks[t + e] = {
      expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[t + nt[i] + e] = r[i] || r[i - 2] || r[0];
        }

        return o;
      }
    }, "margin" !== t && (x.cssHooks[t + e].set = $t);
  }), x.fn.extend({
    css: function css(t, e) {
      return H(this, function (t, e, n) {
        var i,
            o,
            r = {},
            a = 0;

        if (Array.isArray(e)) {
          for (i = Rt(t), o = e.length; a < o; a++) {
            r[e[a]] = x.css(t, e[a], !1, i);
          }

          return r;
        }

        return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
      }, t, e, arguments.length > 1);
    }
  }), x.Tween = Kt, (Kt.prototype = {
    constructor: Kt,
    init: function init(t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var t = Kt.propHooks[this.prop];
      return t && t.get ? t.get(this) : Kt.propHooks._default.get(this);
    },
    run: function run(t) {
      var e,
          n = Kt.propHooks[this.prop];
      return this.pos = e = this.options.duration ? x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Kt.propHooks._default.set(this), this;
    }
  }).init.prototype = Kt.prototype, (Kt.propHooks = {
    _default: {
      get: function get(t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      },
      set: function set(t) {
        x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit);
      }
    }
  }).scrollTop = Kt.propHooks.scrollLeft = {
    set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }
  }, x.easing = {
    linear: function linear(t) {
      return t;
    },
    swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    },
    _default: "swing"
  }, x.fx = Kt.prototype.init, x.fx.step = {};
  var Jt,
      Zt,
      te = /^(?:toggle|show|hide)$/,
      ee = /queueHooks$/;

  function ne() {
    Zt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ne) : t.setTimeout(ne, x.fx.interval), x.fx.tick());
  }

  function ie() {
    return t.setTimeout(function () {
      Jt = void 0;
    }), Jt = Date.now();
  }

  function oe(t, e) {
    var n,
        i = 0,
        o = {
      height: t
    };

    for (e = e ? 1 : 0; i < 4; i += 2 - e) {
      o["margin" + (n = nt[i])] = o["padding" + n] = t;
    }

    return e && (o.opacity = o.width = t), o;
  }

  function re(t, e, n) {
    for (var i, o = (ae.tweeners[e] || []).concat(ae.tweeners["*"]), r = 0, a = o.length; r < a; r++) {
      if (i = o[r].call(n, e, t)) return i;
    }
  }

  function ae(t, e, n) {
    var i,
        o,
        r = 0,
        a = ae.prefilters.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;

      for (var e = Jt || ie(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) {
        u.tweens[r].run(i);
      }

      return s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1);
    },
        u = s.promise({
      elem: t,
      props: x.extend({}, e),
      opts: x.extend(!0, {
        specialEasing: {},
        easing: x.easing._default
      }, n),
      originalProperties: e,
      originalOptions: n,
      startTime: Jt || ie(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(e, n) {
        var i = x.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
        return u.tweens.push(i), i;
      },
      stop: function stop(e) {
        var n = 0,
            i = e ? u.tweens.length : 0;
        if (o) return this;

        for (o = !0; n < i; n++) {
          u.tweens[n].run(1);
        }

        return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this;
      }
    }),
        c = u.props;

    for (function (t, e) {
      var n, i, o, r, a;

      for (n in t) {
        if (o = e[i = Y(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = x.cssHooks[i]) && ("expand" in a)) for (n in r = a.expand(r), delete t[i], r) {
          (n in t) || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
      }
    }(c, u.opts.specialEasing); r < a; r++) {
      if (i = ae.prefilters[r].call(u, t, c, u.opts)) return g(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    }

    return x.map(c, re, u), g(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
      elem: t,
      anim: u,
      queue: u.opts.queue
    })), u;
  }

  x.Animation = x.extend(ae, {
    tweeners: {
      "*": [function (t, e) {
        var n = this.createTween(t, e);
        return rt(n.elem, t, et.exec(e), n), n;
      }]
    },
    tweener: function tweener(t, e) {
      g(t) ? (e = t, t = ["*"]) : t = t.match(L);

      for (var n, i = 0, o = t.length; i < o; i++) {
        (ae.tweeners[n = t[i]] = ae.tweeners[n] || []).unshift(e);
      }
    },
    prefilters: [function (t, e, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c,
          d = "width" in e || "height" in e,
          h = this,
          f = {},
          p = t.style,
          g = t.nodeType && it(t),
          m = G.get(t, "fxshow");

      for (i in n.queue || (null == (a = x._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, h.always(function () {
        h.always(function () {
          a.unqueued--, x.queue(t, "fx").length || a.empty.fire();
        });
      })), e) {
        if (te.test(o = e[i])) {
          if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
            if ("show" !== o || !m || void 0 === m[i]) continue;
            g = !0;
          }

          f[i] = m && m[i] || x.style(t, i);
        }
      }

      if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f)) for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = G.get(t, "display")), "none" === (c = x.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = x.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(t, "float") && (l || (h.done(function () {
        p.display = u;
      }), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, f) {
        l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(t, "fxshow", {
          display: u
        }), r && (m.hidden = !g), g && lt([t], !0), h.done(function () {
          for (i in g || lt([t]), G.remove(t, "fxshow"), f) {
            x.style(t, i, f[i]);
          }
        })), l = re(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
      }
    }],
    prefilter: function prefilter(t, e) {
      e ? ae.prefilters.unshift(t) : ae.prefilters.push(t);
    }
  }), x.speed = function (t, e, n) {
    var i = t && "object" == typeof t ? x.extend({}, t) : {
      complete: n || !n && e || g(t) && t,
      duration: t,
      easing: n && e || e && !g(e) && e
    };
    return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
    }, i;
  }, x.fn.extend({
    fadeTo: function fadeTo(t, e, n, i) {
      return this.filter(it).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, n, i);
    },
    animate: function animate(t, e, n, i) {
      var o = x.isEmptyObject(t),
          r = x.speed(e, n, i),
          a = function a() {
        var e = ae(this, x.extend({}, t), r);
        (o || G.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
    },
    stop: function stop(t, e, n) {
      var i = function i(t) {
        var e = t.stop;
        delete t.stop, e(n);
      };

      return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
        var e = !0,
            o = null != t && t + "queueHooks",
            r = x.timers,
            a = G.get(this);
        if (o) a[o] && a[o].stop && i(a[o]);else for (o in a) {
          a[o] && a[o].stop && ee.test(o) && i(a[o]);
        }

        for (o = r.length; o--;) {
          r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
        }

        !e && n || x.dequeue(this, t);
      });
    },
    finish: function finish(t) {
      return !1 !== t && (t = t || "fx"), this.each(function () {
        var e,
            n = G.get(this),
            i = n[t + "queue"],
            o = n[t + "queueHooks"],
            r = x.timers,
            a = i ? i.length : 0;

        for (n.finish = !0, x.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
          r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
        }

        for (e = 0; e < a; e++) {
          i[e] && i[e].finish && i[e].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), x.each(["toggle", "show", "hide"], function (t, e) {
    var n = x.fn[e];

    x.fn[e] = function (t, i, o) {
      return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(oe(e, !0), t, i, o);
    };
  }), x.each({
    slideDown: oe("show"),
    slideUp: oe("hide"),
    slideToggle: oe("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (t, e) {
    x.fn[t] = function (t, n, i) {
      return this.animate(e, t, n, i);
    };
  }), x.timers = [], x.fx.tick = function () {
    var t,
        e = 0,
        n = x.timers;

    for (Jt = Date.now(); e < n.length; e++) {
      (t = n[e])() || n[e] !== t || n.splice(e--, 1);
    }

    n.length || x.fx.stop(), Jt = void 0;
  }, x.fx.timer = function (t) {
    x.timers.push(t), x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Zt || (Zt = !0, ne());
  }, x.fx.stop = function () {
    Zt = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fn.delay = function (e, n) {
    return e = x.fx && x.fx.speeds[e] || e, this.queue(n = n || "fx", function (n, i) {
      var o = t.setTimeout(n, e);

      i.stop = function () {
        t.clearTimeout(o);
      };
    });
  }, function () {
    var t = i.createElement("input"),
        e = i.createElement("select").appendChild(i.createElement("option"));
    t.type = "checkbox", p.checkOn = "" !== t.value, p.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", p.radioValue = "t" === t.value;
  }();
  var se,
      le = x.expr.attrHandle;
  x.fn.extend({
    attr: function attr(t, e) {
      return H(this, x.attr, t, e, arguments.length > 1);
    },
    removeAttr: function removeAttr(t) {
      return this.each(function () {
        x.removeAttr(this, t);
      });
    }
  }), x.extend({
    attr: function attr(t, e, n) {
      var i,
          o,
          r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === r && x.isXMLDoc(t) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? se : void 0)), void 0 !== n ? null === n ? void x.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(t, e) {
          if (!p.radioValue && "radio" === e && D(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e;
          }
        }
      }
    },
    removeAttr: function removeAttr(t, e) {
      var n,
          i = 0,
          o = e && e.match(L);
      if (o && 1 === t.nodeType) for (; n = o[i++];) {
        t.removeAttribute(n);
      }
    }
  }), se = {
    set: function set(t, e, n) {
      return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var n = le[e] || x.find.attr;

    le[e] = function (t, e, i) {
      var o,
          r,
          a = e.toLowerCase();
      return i || (r = le[a], le[a] = o, o = null != n(t, e, i) ? a : null, le[a] = r), o;
    };
  });
  var ue = /^(?:input|select|textarea|button)$/i,
      ce = /^(?:a|area)$/i;

  function de(t) {
    return (t.match(L) || []).join(" ");
  }

  function he(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }

  function fe(t) {
    return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || [];
  }

  x.fn.extend({
    prop: function prop(t, e) {
      return H(this, x.prop, t, e, arguments.length > 1);
    },
    removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[x.propFix[t] || t];
      });
    }
  }), x.extend({
    prop: function prop(t, e, n) {
      var i,
          o,
          r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(t) || (o = x.propHooks[e = x.propFix[e] || e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
    },
    propHooks: {
      tabIndex: {
        get: function get(t) {
          var e = x.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : ue.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), p.optSelected || (x.propHooks.selected = {
    get: function get(t) {
      return null;
    },
    set: function set(t) {}
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
      if (g(t)) return this.each(function (e) {
        x(this).addClass(t.call(this, e, he(this)));
      });
      if ((e = fe(t)).length) for (; n = this[l++];) {
        if (o = he(n), i = 1 === n.nodeType && " " + de(o) + " ") {
          for (a = 0; r = e[a++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }

          o !== (s = de(i)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
      if (g(t)) return this.each(function (e) {
        x(this).removeClass(t.call(this, e, he(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = fe(t)).length) for (; n = this[l++];) {
        if (o = he(n), i = 1 === n.nodeType && " " + de(o) + " ") {
          for (a = 0; r = e[a++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }

          o !== (s = de(i)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(t, e) {
      var n = typeof t,
          i = "string" === n || Array.isArray(t);
      return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function (n) {
        x(this).toggleClass(t.call(this, n, he(this), e), e);
      }) : this.each(function () {
        var e, o, r, a;
        if (i) for (o = 0, r = x(this), a = fe(t); e = a[o++];) {
          r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
        } else void 0 !== t && "boolean" !== n || ((e = he(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(t) {
      var e,
          n,
          i = 0;

      for (e = " " + t + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + de(he(n)) + " ").indexOf(e) > -1) return !0;
      }

      return !1;
    }
  });
  var pe = /\r/g;
  x.fn.extend({
    val: function val(t) {
      var e,
          n,
          i,
          o = this[0];
      return arguments.length ? (i = g(t), this.each(function (n) {
        var o;
        1 === this.nodeType && (null == (o = i ? t.call(this, n, x(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, function (t) {
          return null == t ? "" : t + "";
        })), (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
      })) : o ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(pe, "") : null == n ? "" : n : void 0;
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function get(t) {
          var e = x.find.attr(t, "value");
          return null != e ? e : de(x.text(t));
        }
      },
      select: {
        get: function get(t) {
          var e,
              n,
              i,
              o = t.options,
              r = t.selectedIndex,
              a = "select-one" === t.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;

          for (i = r < 0 ? l : a ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (e = x(n).val(), a) return e;
              s.push(e);
            }
          }

          return s;
        },
        set: function set(t, e) {
          for (var n, i, o = t.options, r = x.makeArray(e), a = o.length; a--;) {
            ((i = o[a]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
          }

          return n || (t.selectedIndex = -1), r;
        }
      }
    }
  }), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = {
      set: function set(t, e) {
        if (Array.isArray(e)) return t.checked = x.inArray(x(t).val(), e) > -1;
      }
    }, p.checkOn || (x.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), p.focusin = "onfocusin" in t;

  var ge = /^(?:focusinfocus|focusoutblur)$/,
      me = function me(t) {
    t.stopPropagation();
  };

  x.extend(x.event, {
    trigger: function trigger(e, n, o, r) {
      var a,
          s,
          l,
          u,
          c,
          h,
          f,
          p,
          v = [o || i],
          b = d.call(e, "type") ? e.type : e,
          y = d.call(e, "namespace") ? e.namespace.split(".") : [];

      if (s = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !ge.test(b + x.event.triggered) && (b.indexOf(".") > -1 && (b = (y = b.split(".")).shift(), y.sort()), c = b.indexOf(":") < 0 && "on" + b, (e = e[x.expando] ? e : new x.Event(b, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : x.makeArray(n, [e]), f = x.event.special[b] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
        if (!r && !f.noBubble && !m(o)) {
          for (ge.test((u = f.delegateType || b) + b) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), l = s;
          }

          l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t);
        }

        for (a = 0; (s = v[a++]) && !e.isPropagationStopped();) {
          p = s, e.type = a > 1 ? u : f.bindType || b, (h = (G.get(s, "events") || {})[e.type] && G.get(s, "handle")) && h.apply(s, n), (h = c && s[c]) && h.apply && X(s) && (e.result = h.apply(s, n), !1 === e.result && e.preventDefault());
        }

        return e.type = b, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !X(o) || c && g(o[b]) && !m(o) && ((l = o[c]) && (o[c] = null), x.event.triggered = b, e.isPropagationStopped() && p.addEventListener(b, me), o[b](), e.isPropagationStopped() && p.removeEventListener(b, me), x.event.triggered = void 0, l && (o[c] = l)), e.result;
      }
    },
    simulate: function simulate(t, e, n) {
      var i = x.extend(new x.Event(), n, {
        type: t,
        isSimulated: !0
      });
      x.event.trigger(i, null, e);
    }
  }), x.fn.extend({
    trigger: function trigger(t, e) {
      return this.each(function () {
        x.event.trigger(t, e, this);
      });
    },
    triggerHandler: function triggerHandler(t, e) {
      var n = this[0];
      if (n) return x.event.trigger(t, e, n, !0);
    }
  }), p.focusin || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    var n = function n(t) {
      x.event.simulate(e, t.target, x.event.fix(t));
    };

    x.event.special[e] = {
      setup: function setup() {
        var i = this.ownerDocument || this,
            o = G.access(i, e);
        o || i.addEventListener(t, n, !0), G.access(i, e, (o || 0) + 1);
      },
      teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = G.access(i, e) - 1;
        o ? G.access(i, e, o) : (i.removeEventListener(t, n, !0), G.remove(i, e));
      }
    };
  });
  var ve = t.location,
      be = Date.now(),
      ye = /\?/;

  x.parseXML = function (e) {
    var n;
    if (!e || "string" != typeof e) return null;

    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), n;
  };

  var xe = /\[\]$/,
      we = /\r?\n/g,
      _e = /^(?:submit|button|image|reset|file)$/i,
      Ce = /^(?:input|select|textarea|keygen)/i;

  function ke(t, e, n, i) {
    var o;
    if (Array.isArray(e)) x.each(e, function (e, o) {
      n || xe.test(t) ? i(t, o) : ke(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
    });else if (n || "object" !== y(e)) i(t, e);else for (o in e) {
      ke(t + "[" + o + "]", e[o], n, i);
    }
  }

  x.param = function (t, e) {
    var n,
        i = [],
        o = function o(t, e) {
      var n = g(e) ? e() : e;
      i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, function () {
      o(this.name, this.value);
    });else for (n in t) {
      ke(n, t[n], e, o);
    }
    return i.join("&");
  }, x.fn.extend({
    serialize: function serialize() {
      return x.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var t = x.prop(this, "elements");
        return t ? x.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !x(this).is(":disabled") && Ce.test(this.nodeName) && !_e.test(t) && (this.checked || !ut.test(t));
      }).map(function (t, e) {
        var n = x(this).val();
        return null == n ? null : Array.isArray(n) ? x.map(n, function (t) {
          return {
            name: e.name,
            value: t.replace(we, "\r\n")
          };
        }) : {
          name: e.name,
          value: n.replace(we, "\r\n")
        };
      }).get();
    }
  });
  var Te = /%20/g,
      Se = /#.*$/,
      De = /([?&])_=[^&]*/,
      Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ae = /^(?:GET|HEAD)$/,
      Me = /^\/\//,
      Ie = {},
      Pe = {},
      Oe = "*/".concat("*"),
      Ne = i.createElement("a");

  function Le(t) {
    return function (e, n) {
      "string" != typeof e && (n = e, e = "*");
      var i,
          o = 0,
          r = e.toLowerCase().match(L) || [];
      if (g(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
      }
    };
  }

  function Fe(t, e, n, i) {
    var o = {},
        r = t === Pe;

    function a(s) {
      var l;
      return o[s] = !0, x.each(t[s] || [], function (t, s) {
        var u = s(e, n, i);
        return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1);
      }), l;
    }

    return a(e.dataTypes[0]) || !o["*"] && a("*");
  }

  function Re(t, e) {
    var n,
        i,
        o = x.ajaxSettings.flatOptions || {};

    for (n in e) {
      void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    }

    return i && x.extend(!0, t, i), t;
  }

  Ne.href = ve.href, x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ve.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Oe,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(t, e) {
      return e ? Re(Re(t, x.ajaxSettings), e) : Re(x.ajaxSettings, t);
    },
    ajaxPrefilter: Le(Ie),
    ajaxTransport: Le(Pe),
    ajax: function ajax(e, n) {
      "object" == typeof e && (n = e, e = void 0);
      var o,
          r,
          a,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p = x.ajaxSetup({}, n = n || {}),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event,
          v = x.Deferred(),
          b = x.Callbacks("once memory"),
          y = p.statusCode || {},
          w = {},
          _ = {},
          C = "canceled",
          k = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(t) {
          var e;

          if (c) {
            if (!s) for (s = {}; e = Ee.exec(a);) {
              s[e[1].toLowerCase()] = e[2];
            }
            e = s[t.toLowerCase()];
          }

          return null == e ? null : e;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(t, e) {
          return null == c && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, w[t] = e), this;
        },
        overrideMimeType: function overrideMimeType(t) {
          return null == c && (p.mimeType = t), this;
        },
        statusCode: function statusCode(t) {
          var e;
          if (t) if (c) k.always(t[k.status]);else for (e in t) {
            y[e] = [y[e], t[e]];
          }
          return this;
        },
        abort: function abort(t) {
          var e = t || C;
          return o && o.abort(e), T(0, e), this;
        }
      };

      if (v.promise(k), p.url = ((e || p.url || ve.href) + "").replace(Me, ve.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""], null == p.crossDomain) {
        u = i.createElement("a");

        try {
          u.href = p.url, u.href = u.href, p.crossDomain = Ne.protocol + "//" + Ne.host != u.protocol + "//" + u.host;
        } catch (t) {
          p.crossDomain = !0;
        }
      }

      if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Fe(Ie, p, n, k), c) return k;

      for (h in (d = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ae.test(p.type), r = p.url.replace(Se, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Te, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (ye.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(De, "$1"), f = (ye.test(r) ? "&" : "?") + "_=" + be++ + f), p.url = r + f), p.ifModified && (x.lastModified[r] && k.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && k.setRequestHeader("If-None-Match", x.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        k.setRequestHeader(h, p.headers[h]);
      }

      if (p.beforeSend && (!1 === p.beforeSend.call(g, k, p) || c)) return k.abort();

      if (C = "abort", b.add(p.complete), k.done(p.success), k.fail(p.error), o = Fe(Pe, p, n, k)) {
        if (k.readyState = 1, d && m.trigger("ajaxSend", [k, p]), c) return k;
        p.async && p.timeout > 0 && (l = t.setTimeout(function () {
          k.abort("timeout");
        }, p.timeout));

        try {
          c = !1, o.send(w, T);
        } catch (t) {
          if (c) throw t;
          T(-1, t);
        }
      } else T(-1, "No Transport");

      function T(e, n, i, s) {
        var u,
            h,
            f,
            w,
            _,
            C = n;

        c || (c = !0, l && t.clearTimeout(l), o = void 0, a = s || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (w = function (t, e, n) {
          for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          }

          if (i) for (o in s) {
            if (s[o] && s[o].test(i)) {
              l.unshift(o);
              break;
            }
          }
          if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                r = o;
                break;
              }

              a || (a = o);
            }

            r = r || a;
          }
          if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, k, i)), w = function (t, e, n, i) {
          var o,
              r,
              a,
              s,
              l,
              u = {},
              c = t.dataTypes.slice();
          if (c[1]) for (a in t.converters) {
            u[a.toLowerCase()] = t.converters[a];
          }

          for (r = c.shift(); r;) {
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(a = u[l + " " + r] || u["* " + r])) for (o in u) {
                if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                  !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && t.throws) e = a(e);else try {
                e = a(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: a ? t : "No conversion from " + l + " to " + r
                };
              }
            }
          }

          return {
            state: "success",
            data: e
          };
        }(p, w, k, u), u ? (p.ifModified && ((_ = k.getResponseHeader("Last-Modified")) && (x.lastModified[r] = _), (_ = k.getResponseHeader("etag")) && (x.etag[r] = _)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, h = w.data, u = !(f = w.error))) : (f = C, !e && C || (C = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || C) + "", u ? v.resolveWith(g, [h, C, k]) : v.rejectWith(g, [k, C, f]), k.statusCode(y), y = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? h : f]), b.fireWith(g, [k, C]), d && (m.trigger("ajaxComplete", [k, p]), --x.active || x.event.trigger("ajaxStop")));
      }

      return k;
    },
    getJSON: function getJSON(t, e, n) {
      return x.get(t, e, n, "json");
    },
    getScript: function getScript(t, e) {
      return x.get(t, void 0, e, "script");
    }
  }), x.each(["get", "post"], function (t, e) {
    x[e] = function (t, n, i, o) {
      return g(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({
        url: t,
        type: e,
        dataType: o,
        data: n,
        success: i
      }, x.isPlainObject(t) && t));
    };
  }), x._evalUrl = function (t) {
    return x.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, x.fn.extend({
    wrapAll: function wrapAll(t) {
      var e;
      return this[0] && (g(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }

        return t;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(t) {
      return g(t) ? this.each(function (e) {
        x(this).wrapInner(t.call(this, e));
      }) : this.each(function () {
        var e = x(this),
            n = e.contents();
        n.length ? n.wrapAll(t) : e.append(t);
      });
    },
    wrap: function wrap(t) {
      var e = g(t);
      return this.each(function (n) {
        x(this).wrapAll(e ? t.call(this, n) : t);
      });
    },
    unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        x(this).replaceWith(this.childNodes);
      }), this;
    }
  }), x.expr.pseudos.hidden = function (t) {
    return !x.expr.pseudos.visible(t);
  }, x.expr.pseudos.visible = function (t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }, x.ajaxSettings.xhr = function () {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  };
  var je = {
    0: 200,
    1223: 204
  },
      Be = x.ajaxSettings.xhr();
  p.cors = !!Be && "withCredentials" in Be, p.ajax = Be = !!Be, x.ajaxTransport(function (e) {
    var _n, i;

    if (p.cors || Be && !e.crossDomain) return {
      send: function send(o, r) {
        var a,
            s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
          s[a] = e.xhrFields[a];
        }

        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          s.setRequestHeader(a, o[a]);
        }

        _n = function n(t) {
          return function () {
            _n && (_n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(je[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), i = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && t.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");

        try {
          s.send(e.hasContent && e.data || null);
        } catch (t) {
          if (_n) throw t;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), x.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(t) {
        return x.globalEval(t), t;
      }
    }
  }), x.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), x.ajaxTransport("script", function (t) {
    var e, _n2;

    if (t.crossDomain) return {
      send: function send(o, r) {
        e = x("<script>").prop({
          charset: t.scriptCharset,
          src: t.url
        }).on("load error", _n2 = function n(t) {
          e.remove(), _n2 = null, t && r("error" === t.type ? 404 : 200, t.type);
        }), i.head.appendChild(e[0]);
      },
      abort: function abort() {
        _n2 && _n2();
      }
    };
  });
  var We = [],
      ze = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var t = We.pop() || x.expando + "_" + be++;
      return this[t] = !0, t;
    }
  }), x.ajaxPrefilter("json jsonp", function (e, n, i) {
    var o,
        r,
        a,
        s = !1 !== e.jsonp && (ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ze, "$1" + o) : !1 !== e.jsonp && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
      return a || x.error(o + " was not called"), a[0];
    }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
      a = arguments;
    }, i.always(function () {
      void 0 === r ? x(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, We.push(o)), a && g(r) && r(a[0]), a = r = void 0;
    }), "script";
  }), p.createHTMLDocument = function () {
    var t = i.implementation.createHTMLDocument("").body;
    return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
  }(), x.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), a = !n && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = mt([t], e, a), a && a.length && x(a).remove(), x.merge([], r.childNodes)));
    var o, r, a;
  }, x.fn.load = function (t, e, n) {
    var i,
        o,
        r,
        a = this,
        s = t.indexOf(" ");
    return s > -1 && (i = de(t.slice(s)), t = t.slice(0, s)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && x.ajax({
      url: t,
      type: o || "GET",
      dataType: "html",
      data: e
    }).done(function (t) {
      r = arguments, a.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t);
    }).always(n && function (t, e) {
      a.each(function () {
        n.apply(this, r || [t.responseText, e, t]);
      });
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    x.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), x.expr.pseudos.animated = function (t) {
    return x.grep(x.timers, function (e) {
      return t === e.elem;
    }).length;
  }, x.offset = {
    setOffset: function setOffset(t, e, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          u = x.css(t, "position"),
          c = x(t),
          d = {};
      "static" === u && (t.style.position = "relative"), s = c.offset(), r = x.css(t, "top"), l = x.css(t, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), g(e) && (e = e.call(t, n, x.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + o), "using" in e ? e.using.call(t, d) : c.css(d);
    }
  }, x.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        x.offset.setOffset(this, t, e);
      });
      var e,
          n,
          i = this[0];
      return i ? i.getClientRects().length ? {
        top: (e = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
        left: e.left + n.pageXOffset
      } : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var t,
            e,
            n,
            i = this[0],
            o = {
          top: 0,
          left: 0
        };
        if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();else {
          for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position");) {
            t = t.parentNode;
          }

          t && t !== i && 1 === t.nodeType && ((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0), o.left += x.css(t, "borderLeftWidth", !0));
        }
        return {
          top: e.top - o.top - x.css(i, "marginTop", !0),
          left: e.left - o.left - x.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === x.css(t, "position");) {
          t = t.offsetParent;
        }

        return t || vt;
      });
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, e) {
    var n = "pageYOffset" === e;

    x.fn[t] = function (i) {
      return H(this, function (t, i, o) {
        var r;
        if (m(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
      }, t, i, arguments.length);
    };
  }), x.each(["top", "left"], function (t, e) {
    x.cssHooks[e] = Wt(p.pixelPosition, function (t, n) {
      if (n) return n = Bt(t, e), Ft.test(n) ? x(t).position()[e] + "px" : n;
    });
  }), x.each({
    Height: "height",
    Width: "width"
  }, function (t, e) {
    x.each({
      padding: "inner" + t,
      content: e,
      "": "outer" + t
    }, function (n, i) {
      x.fn[i] = function (o, r) {
        var a = arguments.length && (n || "boolean" != typeof o),
            s = n || (!0 === o || !0 === r ? "margin" : "border");
        return H(this, function (e, n, o) {
          var r;
          return m(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? x.css(e, n, s) : x.style(e, n, o, s);
        }, e, a ? o : void 0, a);
      };
    });
  }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
    x.fn[e] = function (t, n) {
      return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
    };
  }), x.fn.extend({
    hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }
  }), x.fn.extend({
    bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    },
    unbind: function unbind(t, e) {
      return this.off(t, null, e);
    },
    delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    },
    undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    }
  }), x.proxy = function (t, e) {
    var n, i, o;
    if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return i = r.call(arguments, 2), (o = function o() {
      return t.apply(e || this, i.concat(r.call(arguments)));
    }).guid = t.guid = t.guid || x.guid++, o;
  }, x.holdReady = function (t) {
    t ? x.readyWait++ : x.ready(!0);
  }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = D, x.isFunction = g, x.isWindow = m, x.camelCase = Y, x.type = y, x.now = Date.now, x.isNumeric = function (t) {
    var e = x.type(t);
    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return x;
  });
  var He = t.jQuery,
      qe = t.$;
  return x.noConflict = function (e) {
    return t.$ === x && (t.$ = qe), e && t.jQuery === x && (t.jQuery = He), x;
  }, e || (t.jQuery = t.$ = x), x;
}), function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  var e = -1,
      n = -1,
      i = function i(t) {
    return parseFloat(t) || 0;
  },
      o = function o(e) {
    var n = t(e),
        o = null,
        r = [];
    return n.each(function () {
      var e = t(this),
          n = e.offset().top - i(e.css("margin-top")),
          a = r.length > 0 ? r[r.length - 1] : null;
      null === a ? r.push(e) : Math.floor(Math.abs(o - n)) <= 1 ? r[r.length - 1] = a.add(e) : r.push(e), o = n;
    }), r;
  },
      r = function r(e) {
    var n = {
      byRow: !0,
      property: "height",
      target: null,
      remove: !1
    };
    return "object" == typeof e ? t.extend(n, e) : ("boolean" == typeof e ? n.byRow = e : "remove" === e && (n.remove = !0), n);
  },
      a = t.fn.matchHeight = function (e) {
    var n = r(e);

    if (n.remove) {
      var i = this;
      return this.css(n.property, ""), t.each(a._groups, function (t, e) {
        e.elements = e.elements.not(i);
      }), this;
    }

    return this.length <= 1 && !n.target ? this : (a._groups.push({
      elements: this,
      options: n
    }), a._apply(this, n), this);
  };

  a.version = "0.7.2", a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._rows = o, a._parse = i, a._parseOptions = r, a._apply = function (e, n) {
    var s = r(n),
        l = t(e),
        u = [l],
        c = t(window).scrollTop(),
        d = t("html").outerHeight(!0),
        h = l.parents().filter(":hidden");
    return h.each(function () {
      var e = t(this);
      e.data("style-cache", e.attr("style"));
    }), h.css("display", "block"), s.byRow && !s.target && (l.each(function () {
      var e = t(this),
          n = e.css("display");
      "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), e.data("style-cache", e.attr("style")), e.css({
        display: n,
        "padding-top": "0",
        "padding-bottom": "0",
        "margin-top": "0",
        "margin-bottom": "0",
        "border-top-width": "0",
        "border-bottom-width": "0",
        height: "100px",
        overflow: "hidden"
      });
    }), u = o(l), l.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || "");
    })), t.each(u, function (e, n) {
      var o = t(n),
          r = 0;
      if (s.target) r = s.target.outerHeight(!1);else {
        if (s.byRow && o.length <= 1) return void o.css(s.property, "");
        o.each(function () {
          var e = t(this),
              n = e.attr("style"),
              i = e.css("display");
          "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
          var o = {
            display: i
          };
          o[s.property] = "", e.css(o), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), n ? e.attr("style", n) : e.css("display", "");
        });
      }
      o.each(function () {
        var e = t(this),
            n = 0;
        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (n += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), n += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, r - n + "px"));
      });
    }), h.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || null);
    }), a._maintainScroll && t(window).scrollTop(c / d * t("html").outerHeight(!0)), this;
  }, a._applyDataApi = function () {
    var e = {};
    t("[data-match-height], [data-mh]").each(function () {
      var n = t(this),
          i = n.attr("data-mh") || n.attr("data-match-height");
      e[i] = i in e ? e[i].add(n) : n;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };

  var s = function s(e) {
    a._beforeUpdate && a._beforeUpdate(e, a._groups), t.each(a._groups, function () {
      a._apply(this.elements, this.options);
    }), a._afterUpdate && a._afterUpdate(e, a._groups);
  };

  a._update = function (i, o) {
    if (o && "resize" === o.type) {
      var r = t(window).width();
      if (r === e) return;
      e = r;
    }

    i ? -1 === n && (n = setTimeout(function () {
      s(o), n = -1;
    }, a._throttle)) : s(o);
  }, t(a._applyDataApi);
  var l = t.fn.on ? "on" : "bind";
  t(window)[l]("load", function (t) {
    a._update(!1, t);
  }), t(window)[l]("resize orientationchange", function (t) {
    a._update(!0, t);
  });
}), function (t, e) {
  "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Tether = e();
}(this, function () {
  "use strict";

  var t = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }();

  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var n = void 0;
  void 0 === n && (n = {
    modules: []
  });
  var i = null;

  function o(t) {
    var e = t.getBoundingClientRect(),
        n = {};

    for (var i in e) {
      n[i] = e[i];
    }

    if (t.ownerDocument !== document) {
      var r = t.ownerDocument.defaultView.frameElement;

      if (r) {
        var a = o(r);
        n.top += a.top, n.bottom += a.top, n.left += a.left, n.right += a.left;
      }
    }

    return n;
  }

  function r(t) {
    var e = (getComputedStyle(t) || {}).position,
        n = [];
    if ("fixed" === e) return [t];

    for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
      var o = void 0;

      try {
        o = getComputedStyle(i);
      } catch (r) {}

      if (null == o) return n.push(i), n;
      /(auto|scroll|overlay)/.test(o.overflow + o.overflowY + o.overflowX) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && n.push(i);
    }

    return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n;
  }

  var a,
      s = (a = 0, function () {
    return ++a;
  }),
      l = {},
      u = function u() {
    var t = i;
    t && document.body.contains(t) || ((t = document.createElement("div")).setAttribute("data-tether-id", s()), g(t.style, {
      top: 0,
      left: 0,
      position: "absolute"
    }), document.body.appendChild(t), i = t);
    var e = t.getAttribute("data-tether-id");
    return void 0 === l[e] && (l[e] = o(t), C(function () {
      delete l[e];
    })), l[e];
  };

  function c() {
    i && document.body.removeChild(i), i = null;
  }

  function d(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var n = e.documentElement,
        i = o(t),
        r = u();
    return i.top -= r.top, i.left -= r.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }

  function h(t) {
    return t.offsetParent || document.documentElement;
  }

  var f = null;

  function p() {
    if (f) return f;
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    g(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var n = t.offsetWidth;
    e.style.overflow = "scroll";
    var i = t.offsetWidth;
    n === i && (i = e.clientWidth), document.body.removeChild(e);
    var o = n - i;
    return f = {
      width: o,
      height: o
    };
  }

  function g() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var n in e) {
        ({}).hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }), t;
  }

  function m(t, e) {
    if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          i = y(t).replace(n, " ");
      x(t, i);
    }
  }

  function v(t, e) {
    if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      m(t, e);
      var n = y(t) + " " + e;
      x(t, n);
    }
  }

  function b(t, e) {
    if (void 0 !== t.classList) return t.classList.contains(e);
    var n = y(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(n);
  }

  function y(t) {
    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
  }

  function x(t, e) {
    t.setAttribute("class", e);
  }

  function w(t, e, n) {
    n.forEach(function (n) {
      -1 === e.indexOf(n) && b(t, n) && m(t, n);
    }), e.forEach(function (e) {
      b(t, e) || v(t, e);
    });
  }

  var _ = [],
      C = function C(t) {
    _.push(t);
  },
      k = function k() {
    for (var t = void 0; t = _.pop();) {
      t();
    }
  },
      T = function () {
    function n() {
      e(this, n);
    }

    return t(n, [{
      key: "on",
      value: function value(t, e, n) {
        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
          handler: e,
          ctx: n,
          once: i
        });
      }
    }, {
      key: "once",
      value: function value(t, e, n) {
        this.on(t, e, n, !0);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        if (void 0 !== this.bindings && void 0 !== this.bindings[t]) if (void 0 === e) delete this.bindings[t];else for (var n = 0; n < this.bindings[t].length;) {
          this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n;
        }
      }
    }, {
      key: "trigger",
      value: function value(t) {
        if (void 0 !== this.bindings && this.bindings[t]) {
          for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
            i[o - 1] = arguments[o];
          }

          for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                a = r.once,
                s = r.ctx;
            void 0 === s && (s = this), r.handler.apply(s, i), a ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      }
    }]), n;
  }();

  n.Utils = {
    getActualBoundingClientRect: o,
    getScrollParents: r,
    getBounds: d,
    getOffsetParent: h,
    extend: g,
    addClass: v,
    removeClass: m,
    hasClass: b,
    updateClasses: w,
    defer: C,
    flush: k,
    uniqueId: s,
    Evented: T,
    getScrollBarSize: p,
    removeUtilElements: c
  };

  var S = function S(t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;

      try {
        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) {
          ;
        }
      } catch (l) {
        o = !0, r = l;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (o) throw r;
        }
      }

      return n;
    }(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
      D = (t = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(), function (t, e, n) {
    for (var i = !0; i;) {
      var o = t,
          r = e,
          a = n;
      i = !1, null === o && (o = Function.prototype);
      var s = Object.getOwnPropertyDescriptor(o, r);

      if (void 0 !== s) {
        if ("value" in s) return s.value;
        var l = s.get;
        if (void 0 === l) return;
        return l.call(a);
      }

      var u = Object.getPrototypeOf(o);
      if (null === u) return;
      t = u, e = r, n = a, i = !0, s = u = void 0;
    }
  });

  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  if (void 0 === n) throw new Error("You must include the utils.js file before tether.js");
  var r = ($ = n.Utils).getScrollParents,
      h = (d = $.getBounds, $.getOffsetParent),
      v = (g = $.extend, $.addClass),
      m = $.removeClass,
      p = (w = $.updateClasses, C = $.defer, k = $.flush, $.getScrollBarSize),
      c = $.removeUtilElements;

  function E(t, e) {
    var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + n >= e && e >= t - n;
  }

  var A,
      M,
      I,
      P,
      O = function () {
    if ("undefined" == typeof document) return "";

    for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
      var i = e[n];
      if (void 0 !== t.style[i]) return i;
    }
  }(),
      N = [],
      L = function L() {
    N.forEach(function (t) {
      t.position(!1);
    }), k();
  };

  function F() {
    return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date();
  }

  A = null, M = null, I = null, P = function t() {
    if (void 0 !== M && M > 16) return M = Math.min(M - 16, 250), void (I = setTimeout(t, 250));
    void 0 !== A && F() - A < 10 || (null != I && (clearTimeout(I), I = null), A = F(), L(), M = F() - A);
  }, "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
    window.addEventListener(t, P);
  });

  var R = {
    center: "center",
    left: "right",
    right: "left"
  },
      j = {
    middle: "middle",
    top: "bottom",
    bottom: "top"
  },
      B = {
    top: 0,
    left: 0,
    middle: "50%",
    center: "50%",
    bottom: "100%",
    right: "100%"
  },
      W = function W(t) {
    var e = t.left,
        n = t.top;
    return void 0 !== B[t.left] && (e = B[t.left]), void 0 !== B[t.top] && (n = B[t.top]), {
      left: e,
      top: n
    };
  };

  function z() {
    for (var t = {
      top: 0,
      left: 0
    }, e = arguments.length, n = Array(e), i = 0; i < e; i++) {
      n[i] = arguments[i];
    }

    return n.forEach(function (e) {
      var n = e.top,
          i = e.left;
      "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i;
    }), t;
  }

  function H(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }

  var q = function q(t) {
    var e = t.split(" "),
        n = S(e, 2);
    return {
      top: n[0],
      left: n[1]
    };
  },
      V = q,
      U = function (i) {
    function o(t) {
      var i = this;
      e(this, o), D(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.position = this.position.bind(this), N.push(this), this.history = [], this.setOptions(t, !1), n.modules.forEach(function (t) {
        void 0 !== t.initialize && t.initialize.call(i);
      }), this.position();
    }

    return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }(o, T), t(o, [{
      key: "getClass",
      value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      }
    }, {
      key: "setOptions",
      value: function value(t) {
        var e = this,
            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
        this.options = g({
          offset: "0 0",
          targetOffset: "0 0",
          targetAttachment: "auto auto",
          classPrefix: "tether"
        }, t);
        var i = this.options,
            o = i.target,
            a = i.targetModifier;
        if (this.element = i.element, this.target = o, this.targetModifier = a, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
          void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), v(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && v(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
        this.targetAttachment = V(this.options.targetAttachment), this.attachment = V(this.options.attachment), this.offset = q(this.options.offset), this.targetOffset = q(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), this.scrollParents = "scroll-handle" === this.targetModifier ? [this.target] : r(this.target), !1 !== this.options.enabled && this.enable(n);
      }
    }, {
      key: "getTargetBounds",
      value: function value() {
        if (void 0 === this.targetModifier) return d(this.target);
        if ("visible" === this.targetModifier) return this.target === document.body ? {
          top: pageYOffset,
          left: pageXOffset,
          height: innerHeight,
          width: innerWidth
        } : ((r = {
          height: (t = d(this.target)).height,
          width: t.width,
          top: t.top,
          left: t.left
        }).height = Math.min(r.height, t.height - (pageYOffset - t.top)), r.height = Math.min(r.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), r.height = Math.min(innerHeight, r.height), r.height -= 2, r.width = Math.min(r.width, t.width - (pageXOffset - t.left)), r.width = Math.min(r.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), r.width = Math.min(innerWidth, r.width), r.width -= 2, r.top < pageYOffset && (r.top = pageYOffset), r.left < pageXOffset && (r.left = pageXOffset), r);

        if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              e = this.target;
          e === document.body ? (e = document.documentElement, t = {
            left: pageXOffset,
            top: pageYOffset,
            height: innerHeight,
            width: innerWidth
          }) : t = d(e);
          var n = getComputedStyle(e),
              i = 0;
          (e.scrollWidth > e.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (i = 15);
          var o = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - i,
              r = {
            width: 15,
            height: .975 * o * (o / e.scrollHeight),
            left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
          },
              a = 0;
          return o < 408 && this.target === document.body && (a = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (r.height = Math.max(r.height, 24)), r.top = this.target.scrollTop / (e.scrollHeight - o) * (o - r.height - a) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (r.height = Math.max(r.height, 24)), r;
        }
      }
    }, {
      key: "clearCache",
      value: function value() {
        this._cache = {};
      }
    }, {
      key: "cache",
      value: function value(t, e) {
        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      }
    }, {
      key: "enable",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
        !1 !== this.options.addTargetClasses && v(this.target, this.getClass("enabled")), v(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
          e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
        }), e && this.position();
      }
    }, {
      key: "disable",
      value: function value() {
        var t = this;
        m(this.target, this.getClass("enabled")), m(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.position);
        });
      }
    }, {
      key: "destroy",
      value: function value() {
        var t = this;
        this.disable(), N.forEach(function (e, n) {
          e === t && N.splice(n, 1);
        }), 0 === N.length && c();
      }
    }, {
      key: "updateAttachClasses",
      value: function value(t, e) {
        var n = this;
        t = t || this.attachment, e = e || this.targetAttachment, void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
        var i = this._addAttachClasses;
        t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
        var o = [];
        ["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
          o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t);
        }), C(function () {
          void 0 !== n._addAttachClasses && (w(n.element, n._addAttachClasses, o), !1 !== n.options.addTargetClasses && w(n.target, n._addAttachClasses, o), delete n._addAttachClasses);
        });
      }
    }, {
      key: "position",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];

        if (this.enabled) {
          this.clearCache();

          var i = function (t, e) {
            var n = t.left,
                i = t.top;
            return "auto" === n && (n = R[e.left]), "auto" === i && (i = j[e.top]), {
              left: n,
              top: i
            };
          }(this.targetAttachment, this.attachment);

          this.updateAttachClasses(this.attachment, i);
          var o = this.cache("element-bounds", function () {
            return d(t.element);
          }),
              r = o.width,
              a = o.height;

          if (0 === r && 0 === a && void 0 !== this.lastSize) {
            var s = this.lastSize;
            r = s.width, a = s.height;
          } else this.lastSize = {
            width: r,
            height: a
          };

          var l = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
              u = l,
              c = H(W(this.attachment), {
            width: r,
            height: a
          }),
              f = H(W(i), u),
              g = H(this.offset, {
            width: r,
            height: a
          }),
              m = H(this.targetOffset, u);
          c = z(c, g), f = z(f, m);

          for (var v = l.left + f.left - c.left, b = l.top + f.top - c.top, y = 0; y < n.modules.length; ++y) {
            var x = n.modules[y].position.call(this, {
              left: v,
              top: b,
              targetAttachment: i,
              targetPos: l,
              elementPos: o,
              offset: c,
              targetOffset: f,
              manualOffset: g,
              manualTargetOffset: m,
              scrollbarSize: M,
              attachment: this.attachment
            });
            if (!1 === x) return !1;
            void 0 !== x && "object" == typeof x && (b = x.top, v = x.left);
          }

          var w,
              _,
              C,
              T,
              S,
              D = {
            page: {
              top: b,
              left: v
            },
            viewport: {
              top: b - pageYOffset,
              bottom: pageYOffset - b - a + innerHeight,
              left: v - pageXOffset,
              right: pageXOffset - v - r + innerWidth
            }
          },
              E = this.target.ownerDocument,
              A = E.defaultView,
              M = void 0;

          return A.innerHeight > E.documentElement.clientHeight && (M = this.cache("scrollbar-size", p), D.viewport.bottom -= M.height), A.innerWidth > E.documentElement.clientWidth && (M = this.cache("scrollbar-size", p), D.viewport.right -= M.width), -1 !== ["", "static"].indexOf(E.body.style.position) && -1 !== ["", "static"].indexOf(E.body.parentElement.style.position) || (D.page.bottom = E.body.scrollHeight - b - a, D.page.right = E.body.scrollWidth - v - r), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && (w = t.cache("target-offsetparent", function () {
            return h(t.target);
          }), _ = t.cache("target-offsetparent-bounds", function () {
            return d(w);
          }), C = getComputedStyle(w), T = _, S = {}, ["Top", "Left", "Bottom", "Right"].forEach(function (t) {
            S[t.toLowerCase()] = parseFloat(C["border" + t + "Width"]);
          }), _.right = E.body.scrollWidth - _.left - T.width + S.right, _.bottom = E.body.scrollHeight - _.top - T.height + S.bottom, D.page.top >= _.top + S.top && D.page.bottom >= _.bottom && D.page.left >= _.left + S.left && D.page.right >= _.right && (D.offset = {
            top: D.page.top - _.top + w.scrollTop - S.top,
            left: D.page.left - _.left + w.scrollLeft - S.left
          })), this.move(D), this.history.unshift(D), this.history.length > 3 && this.history.pop(), e && k(), !0;
        }
      }
    }, {
      key: "move",
      value: function value(t) {
        var e = this;

        if (void 0 !== this.element.parentNode) {
          var n = {};

          for (var i in t) {
            for (var o in n[i] = {}, t[i]) {
              for (var r = !1, a = 0; a < this.history.length; ++a) {
                var s = this.history[a];

                if (void 0 !== s[i] && !E(s[i][o], t[i][o])) {
                  r = !0;
                  break;
                }
              }

              r || (n[i][o] = !0);
            }
          }

          var l,
              u,
              c = {
            top: "",
            left: "",
            right: "",
            bottom: ""
          },
              d = function d(t, n) {
            if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
              var i = void 0,
                  o = void 0;
              t.top ? (c.top = 0, i = n.top) : (c.bottom = 0, i = -n.bottom), t.left ? (c.left = 0, o = n.left) : (c.right = 0, o = -n.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), i = Math.round(i))), c[O] = "translateX(" + o + "px) translateY(" + i + "px)", "msTransform" !== O && (c[O] += " translateZ(0)");
            } else t.top ? c.top = n.top + "px" : c.bottom = n.bottom + "px", t.left ? c.left = n.left + "px" : c.right = n.right + "px";
          },
              f = !1;

          if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", d(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", d(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function () {
            c.position = "absolute";
            var i = e.cache("target-offsetparent", function () {
              return h(e.target);
            });
            h(e.element) !== i && C(function () {
              e.element.parentNode.removeChild(e.element), i.appendChild(e.element);
            }), d(n.offset, t.offset), f = !0;
          }() : (c.position = "absolute", d({
            top: !0,
            left: !0
          }, t.page)), !f) if (this.options.bodyElement) this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);else {
            for (var p = !0, m = this.element.parentNode; m && 1 === m.nodeType && "BODY" !== m.tagName && ((u = (l = m).ownerDocument).fullscreenElement || u.webkitFullscreenElement || u.mozFullScreenElement || u.msFullscreenElement) !== l;) {
              if ("static" !== getComputedStyle(m).position) {
                p = !1;
                break;
              }

              m = m.parentNode;
            }

            p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
          }
          var v = {},
              b = !1;

          for (var o in c) {
            var y = c[o];
            this.element.style[o] !== y && (b = !0, v[o] = y);
          }

          b && C(function () {
            g(e.element.style, v), e.trigger("repositioned");
          });
        }
      }
    }]), o;
  }();

  U.modules = [], n.position = L;
  var Y = g(U, n),
      g = (S = function S(t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;

      try {
        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) {
          ;
        }
      } catch (l) {
        o = !0, r = l;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (o) throw r;
        }
      }

      return n;
    }(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, d = ($ = n.Utils).getBounds, $.extend),
      X = (w = $.updateClasses, C = $.defer, ["left", "top", "right", "bottom"]);
  n.modules.push({
    position: function position(t) {
      var e = this,
          n = t.top,
          i = t.left,
          o = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var r = this.cache("element-bounds", function () {
        return d(e.element);
      }),
          a = r.height,
          s = r.width;

      if (0 === s && 0 === a && void 0 !== this.lastSize) {
        var l = this.lastSize;
        s = l.width, a = l.height;
      }

      var u = this.cache("target-bounds", function () {
        return e.getTargetBounds();
      }),
          c = u.height,
          h = u.width,
          f = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            n = t.pinnedClass;
        e && f.push(e), n && f.push(n);
      }), f.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          f.push(t + "-" + e);
        });
      });
      var p = [],
          m = g({}, o),
          v = g({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
            l = t.attachment,
            u = t.pin;
        void 0 === l && (l = "");
        var f = void 0,
            g = void 0;

        if (l.indexOf(" ") >= 0) {
          var b = l.split(" "),
              y = S(b, 2);
          g = y[0], f = y[1];
        } else f = g = l;

        var x = function (t, n) {
          return "scrollParent" === n ? n = e.scrollParents[0] : "window" === n && (n = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), n === document && (n = n.documentElement), void 0 !== n.nodeType && function () {
            var t = n,
                e = d(n),
                i = e,
                o = getComputedStyle(n);

            if (n = [i.left, i.top, e.width + i.left, e.height + i.top], t.ownerDocument !== document) {
              var r = t.ownerDocument.defaultView;
              n[0] += r.pageXOffset, n[1] += r.pageYOffset, n[2] += r.pageXOffset, n[3] += r.pageYOffset;
            }

            X.forEach(function (t, e) {
              "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? n[e] += parseFloat(o["border" + t + "Width"]) : n[e] -= parseFloat(o["border" + t + "Width"]);
            });
          }(), n;
        }(0, r);

        "target" !== g && "both" !== g || (n < x[1] && "top" === m.top && (n += c, m.top = "bottom"), n + a > x[3] && "bottom" === m.top && (n -= c, m.top = "top")), "together" === g && ("top" === m.top && ("bottom" === v.top && n < x[1] ? (n += c, m.top = "bottom", n += a, v.top = "top") : "top" === v.top && n + a > x[3] && n - (a - c) >= x[1] && (n -= a - c, m.top = "bottom", v.top = "bottom")), "bottom" === m.top && ("top" === v.top && n + a > x[3] ? (n -= c, m.top = "top", n -= a, v.top = "bottom") : "bottom" === v.top && n < x[1] && n + (2 * a - c) <= x[3] && (n += a - c, m.top = "top", v.top = "top")), "middle" === m.top && (n + a > x[3] && "top" === v.top ? (n -= a, v.top = "bottom") : n < x[1] && "bottom" === v.top && (n += a, v.top = "top"))), "target" !== f && "both" !== f || (i < x[0] && "left" === m.left && (i += h, m.left = "right"), i + s > x[2] && "right" === m.left && (i -= h, m.left = "left")), "together" === f && (i < x[0] && "left" === m.left ? "right" === v.left ? (i += h, m.left = "right", i += s, v.left = "left") : "left" === v.left && (i += h, m.left = "right", i -= s, v.left = "right") : i + s > x[2] && "right" === m.left ? "left" === v.left ? (i -= h, m.left = "left", i -= s, v.left = "right") : "right" === v.left && (i -= h, m.left = "left", i += s, v.left = "left") : "center" === m.left && (i + s > x[2] && "left" === v.left ? (i -= s, v.left = "right") : i < x[0] && "right" === v.left && (i += s, v.left = "left"))), "element" !== g && "both" !== g || (n < x[1] && "bottom" === v.top && (n += a, v.top = "top"), n + a > x[3] && "top" === v.top && (n -= a, v.top = "bottom")), "element" !== f && "both" !== f || (i < x[0] && ("right" === v.left ? (i += s, v.left = "left") : "center" === v.left && (i += s / 2, v.left = "left")), i + s > x[2] && ("left" === v.left ? (i -= s, v.left = "right") : "center" === v.left && (i -= s / 2, v.left = "right"))), "string" == typeof u ? u = u.split(",").map(function (t) {
          return t.trim();
        }) : !0 === u && (u = ["top", "left", "right", "bottom"]), u = u || [];

        var w,
            _,
            C = [],
            k = [];

        n < x[1] && (u.indexOf("top") >= 0 ? (n = x[1], C.push("top")) : k.push("top")), n + a > x[3] && (u.indexOf("bottom") >= 0 ? (n = x[3] - a, C.push("bottom")) : k.push("bottom")), i < x[0] && (u.indexOf("left") >= 0 ? (i = x[0], C.push("left")) : k.push("left")), i + s > x[2] && (u.indexOf("right") >= 0 ? (i = x[2] - s, C.push("right")) : k.push("right")), C.length && (w = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), p.push(w), C.forEach(function (t) {
          p.push(w + "-" + t);
        })), k.length && (_ = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), p.push(_), k.forEach(function (t) {
          p.push(_ + "-" + t);
        })), (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (v.left = m.left = !1), (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (v.top = m.top = !1), m.top === o.top && m.left === o.left && v.top === e.attachment.top && v.left === e.attachment.left || (e.updateAttachClasses(v, m), e.trigger("update", {
          attachment: v,
          targetAttachment: m
        }));
      }), C(function () {
        !1 !== e.options.addTargetClasses && w(e.target, p, f), w(e.element, p, f);
      }), {
        top: n,
        left: i
      };
    }
  });
  var $,
      d = ($ = n.Utils).getBounds,
      w = $.updateClasses;
  return C = $.defer, n.modules.push({
    position: function position(t) {
      var e = this,
          n = t.top,
          i = t.left,
          o = this.cache("element-bounds", function () {
        return d(e.element);
      }),
          r = o.height,
          a = o.width,
          s = this.getTargetBounds(),
          l = n + r,
          u = i + a,
          c = [];
      n <= s.bottom && l >= s.top && ["left", "right"].forEach(function (t) {
        var e = s[t];
        e !== i && e !== u || c.push(t);
      }), i <= s.right && u >= s.left && ["top", "bottom"].forEach(function (t) {
        var e = s[t];
        e !== n && e !== l || c.push(t);
      });
      var h = [],
          f = [];
      return h.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function (t) {
        h.push(e.getClass("abutted") + "-" + t);
      }), c.length && f.push(this.getClass("abutted")), c.forEach(function (t) {
        f.push(e.getClass("abutted") + "-" + t);
      }), C(function () {
        !1 !== e.options.addTargetClasses && w(e.target, f, h), w(e.element, f, h);
      }), !0;
    }
  }), S = function S(t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;

      try {
        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) {
          ;
        }
      } catch (l) {
        o = !0, r = l;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (o) throw r;
        }
      }

      return n;
    }(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, n.modules.push({
    position: function position(t) {
      var e = t.top,
          n = t.left;

      if (this.options.shift) {
        var i = this.options.shift;
        "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
          top: e,
          left: n
        }));
        var o = void 0,
            r = void 0;

        if ("string" == typeof i) {
          (i = i.split(" "))[1] = i[1] || i[0];
          var a = S(i, 2);
          o = a[0], r = a[1], o = parseFloat(o, 10), r = parseFloat(r, 10);
        } else o = i.top, r = i.left;

        return {
          top: e += o,
          left: n += r
        };
      }
    }
  }), Y;
}), function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function a(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      }))), i.forEach(function (e) {
        r(t, e, n[e]);
      });
    }

    return t;
  }

  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var s = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (i) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var n = e(t).css("transition-duration"),
          i = e(t).css("transition-delay"),
          o = parseFloat(n),
          r = parseFloat(i);
      return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      e(t).trigger("transitionend");
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean("transitionend");
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              a = r && s.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }
      }
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;

      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }

      return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null;
    }
  };
  e.fn.emulateTransitionEnd = function (t) {
    var n = this,
        i = !1;
    return e(this).one(s.TRANSITION_END, function () {
      i = !0;
    }), setTimeout(function () {
      i || s.triggerTransitionEnd(n);
    }, t), this;
  }, e.event.special[s.TRANSITION_END] = {
    bindType: "transitionend",
    delegateType: "transitionend",
    handle: function handle(t) {
      if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var l = e.fn.alert,
      u = function () {
    function t(t) {
      this._element = t;
    }

    var n = t.prototype;
    return n.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, n.dispose = function () {
      e.removeData(this._element, "bs.alert"), this._element = null;
    }, n._getRootElement = function (t) {
      var n = s.getSelectorFromElement(t),
          i = !1;
      return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
    }, n._triggerCloseEvent = function (t) {
      var n = e.Event("close.bs.alert");
      return e(t).trigger(n), n;
    }, n._removeElement = function (t) {
      var n = this;

      if (e(t).removeClass("show"), e(t).hasClass("fade")) {
        var i = s.getTransitionDurationFromElement(t);
        e(t).one(s.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(i);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      e(t).detach().trigger("closed.bs.alert").remove();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.alert");
        o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), t;
  }();

  e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u())), e.fn.alert = u._jQueryInterface, e.fn.alert.Constructor = u, e.fn.alert.noConflict = function () {
    return e.fn.alert = l, u._jQueryInterface;
  };

  var c = e.fn.button,
      d = function () {
    function t(t) {
      this._element = t;
    }

    var n = t.prototype;
    return n.toggle = function () {
      var t = !0,
          n = !0,
          i = e(this._element).closest('[data-toggle="buttons"]')[0];

      if (i) {
        var o = this._element.querySelector('input:not([type="hidden"])');

        if (o) {
          if ("radio" === o.type) if (o.checked && this._element.classList.contains("active")) t = !1;else {
            var r = i.querySelector(".active");
            r && e(r).removeClass("active");
          }

          if (t) {
            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
            o.checked = !this._element.classList.contains("active"), e(o).trigger("change");
          }

          o.focus(), n = !1;
        }
      }

      n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active");
    }, n.dispose = function () {
      e.removeData(this._element, "bs.button"), this._element = null;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.button");
        i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), t;
  }();

  e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    t.preventDefault();
    var n = t.target;
    e(n).hasClass("btn") || (n = e(n).closest(".btn")), d._jQueryInterface.call(e(n), "toggle");
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var n = e(t.target).closest(".btn")[0];
    e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
  }), e.fn.button = d._jQueryInterface, e.fn.button.Constructor = d, e.fn.button.noConflict = function () {
    return e.fn.button = c, d._jQueryInterface;
  };

  var h = "carousel",
      f = e.fn[h],
      p = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      g = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      m = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    ITEM_IMG: ".carousel-item img",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  },
      v = {
    TOUCH: "touch",
    PEN: "pen"
  },
      b = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(m.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var n = t.prototype;
    return n.next = function () {
      this._isSliding || this._slide("next");
    }, n.nextWhenVisible = function () {
      !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide("prev");
    }, n.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(m.NEXT_PREV) && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var n = this;
      this._activeElement = this._element.querySelector(m.ACTIVE_ITEM);

      var i = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one("slid.bs.carousel", function () {
        return n.to(t);
      });else {
        if (i === t) return this.pause(), void this.cycle();

        this._slide(t > i ? "next" : "prev", this._items[t]);
      }
    }, n.dispose = function () {
      e(this._element).off(".bs.carousel"), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = a({}, p, t), s.typeCheckConfig(h, t, g), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        e > 0 && this.prev(), e < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var t = this;
      this._config.keyboard && e(this._element).on("keydown.bs.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", function (e) {
        return t.pause(e);
      }).on("mouseleave.bs.carousel", function (e) {
        return t.cycle(e);
      }), this._config.touch && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this;

      if (this._touchSupported) {
        var n = function n(e) {
          t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
        },
            i = function i(e) {
          t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval));
        };

        e(this._element.querySelectorAll(m.ITEM_IMG)).on("dragstart.bs.carousel", function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
          return n(t);
        }), e(this._element).on("pointerup.bs.carousel", function (t) {
          return i(t);
        }), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", function (t) {
          return n(t);
        }), e(this._element).on("touchmove.bs.carousel", function (e) {
          return function (e) {
            t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX;
          }(e);
        }), e(this._element).on("touchend.bs.carousel", function (t) {
          return i(t);
        }));
      }
    }, n._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(m.ITEM)) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = "next" === t,
          i = "prev" === t,
          o = this._getItemIndex(e);

      if ((i && 0 === o || n && o === this._items.length - 1) && !this._config.wrap) return e;
      var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }, n._triggerSlideEvent = function (t, n) {
      var i = this._getItemIndex(t),
          o = this._getItemIndex(this._element.querySelector(m.ACTIVE_ITEM)),
          r = e.Event("slide.bs.carousel", {
        relatedTarget: t,
        direction: n,
        from: o,
        to: i
      });

      return e(this._element).trigger(r), r;
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var n = [].slice.call(this._indicatorsElement.querySelectorAll(m.ACTIVE));
        e(n).removeClass("active");

        var i = this._indicatorsElement.children[this._getItemIndex(t)];

        i && e(i).addClass("active");
      }
    }, n._slide = function (t, n) {
      var i,
          o,
          r,
          a = this,
          l = this._element.querySelector(m.ACTIVE_ITEM),
          u = this._getItemIndex(l),
          c = n || l && this._getItemByDirection(t, l),
          d = this._getItemIndex(c),
          h = Boolean(this._interval);

      if ("next" === t ? (i = "carousel-item-left", o = "carousel-item-next", r = "left") : (i = "carousel-item-right", o = "carousel-item-prev", r = "right"), c && e(c).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && l && c) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
        var f = e.Event("slid.bs.carousel", {
          relatedTarget: c,
          direction: r,
          from: u,
          to: d
        });

        if (e(this._element).hasClass("slide")) {
          e(c).addClass(o), s.reflow(c), e(l).addClass(i), e(c).addClass(i);
          var p = parseInt(c.getAttribute("data-interval"), 10);
          p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var g = s.getTransitionDurationFromElement(l);
          e(l).one(s.TRANSITION_END, function () {
            e(c).removeClass(i + " " + o).addClass("active"), e(l).removeClass("active " + o + " " + i), a._isSliding = !1, setTimeout(function () {
              return e(a._element).trigger(f);
            }, 0);
          }).emulateTransitionEnd(g);
        } else e(l).removeClass("active"), e(c).addClass("active"), this._isSliding = !1, e(this._element).trigger(f);

        h && this.cycle();
      }
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.carousel"),
            o = a({}, p, e(this).data());
        "object" == typeof n && (o = a({}, o, n));
        var r = "string" == typeof n ? n : o.slide;
        if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);else if ("string" == typeof r) {
          if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
          i[r]();
        } else o.interval && o.ride && (i.pause(), i.cycle());
      });
    }, t._dataApiClickHandler = function (n) {
      var i = s.getSelectorFromElement(this);

      if (i) {
        var o = e(i)[0];

        if (o && e(o).hasClass("carousel")) {
          var r = a({}, e(o).data(), e(this).data()),
              l = this.getAttribute("data-slide-to");
          l && (r.interval = !1), t._jQueryInterface.call(e(o), r), l && e(o).data("bs.carousel").to(l), n.preventDefault();
        }
      }
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return p;
      }
    }]), t;
  }();

  e(document).on("click.bs.carousel.data-api", m.DATA_SLIDE, b._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll(m.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
      var o = e(t[n]);

      b._jQueryInterface.call(o, o.data());
    }
  }), e.fn[h] = b._jQueryInterface, e.fn[h].Constructor = b, e.fn[h].noConflict = function () {
    return e.fn[h] = f, b._jQueryInterface;
  };

  var y = "collapse",
      x = e.fn[y],
      w = {
    toggle: !0,
    parent: ""
  },
      _ = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      C = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  },
      k = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(C.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            a = s.getSelectorFromElement(r),
            l = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
          return e === t;
        });
        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var n = t.prototype;
    return n.toggle = function () {
      e(this._element).hasClass("show") ? this.hide() : this.show();
    }, n.show = function () {
      var n,
          i,
          o = this;

      if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(C.ACTIVES)).filter(function (t) {
        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
      })).length && (n = null), n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
        var r = e.Event("show.bs.collapse");

        if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
          n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));

          var a = this._getDimension();

          e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
          var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
              u = s.getTransitionDurationFromElement(this._element);
          e(this._element).one(s.TRANSITION_END, function () {
            e(o._element).removeClass("collapsing").addClass("collapse").addClass("show"), o._element.style[a] = "", o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(u), this._element.style[a] = this._element[l] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;

      if (!this._isTransitioning && e(this._element).hasClass("show")) {
        var n = e.Event("hide.bs.collapse");

        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
          var i = this._getDimension();

          this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse").removeClass("show");
          var o = this._triggerArray.length;
          if (o > 0) for (var r = 0; r < o; r++) {
            var a = this._triggerArray[r],
                l = s.getSelectorFromElement(a);
            null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1));
          }
          this.setTransitioning(!0), this._element.style[i] = "";
          var u = s.getTransitionDurationFromElement(this._element);
          e(this._element).one(s.TRANSITION_END, function () {
            t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(u);
        }
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = a({}, w, t)).toggle = Boolean(t.toggle), s.typeCheckConfig(y, t, _), t;
    }, n._getDimension = function () {
      return e(this._element).hasClass("width") ? "width" : "height";
    }, n._getParent = function () {
      var n,
          i = this;
      s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
      var o = [].slice.call(n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
      return e(o).each(function (e, n) {
        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
      }), n;
    }, n._addAriaAndCollapsedClass = function (t, n) {
      var i = e(t).hasClass("show");
      n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
    }, t._getTargetFromElement = function (t) {
      var e = s.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.collapse"),
            r = a({}, w, i.data(), "object" == typeof n && n ? n : {});

        if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
          o[n]();
        }
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return w;
      }
    }]), t;
  }();

  e(document).on("click.bs.collapse.data-api", C.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = e(this),
        i = s.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
    e(o).each(function () {
      var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();

      k._jQueryInterface.call(t, i);
    });
  }), e.fn[y] = k._jQueryInterface, e.fn[y].Constructor = k, e.fn[y].noConflict = function () {
    return e.fn[y] = x, k._jQueryInterface;
  };

  var T = "dropdown",
      S = e.fn[T],
      D = new RegExp("38|40|27"),
      E = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      A = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      M = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var i = t.prototype;
    return i.toggle = function () {
      if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
        var i = t._getParentFromElement(this._element),
            o = e(this._menu).hasClass("show");

        if (t._clearMenus(), !o) {
          var r = {
            relatedTarget: this._element
          },
              a = e.Event("show.bs.dropdown", r);

          if (e(i).trigger(a), !a.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var l = this._element;
              "parent" === this._config.reference ? l = i : s.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(i).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === e(i).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(i).toggleClass("show").trigger(e.Event("shown.bs.dropdown", r));
          }
        }
      }
    }, i.show = function () {
      if (!(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
        var n = {
          relatedTarget: this._element
        },
            i = e.Event("show.bs.dropdown", n),
            o = t._getParentFromElement(this._element);

        e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("shown.bs.dropdown", n)));
      }
    }, i.hide = function () {
      if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
        var n = {
          relatedTarget: this._element
        },
            i = e.Event("hide.bs.dropdown", n),
            o = t._getParentFromElement(this._element);

        e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
      }
    }, i.dispose = function () {
      e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, i.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, i._addEventListeners = function () {
      var t = this;
      e(this._element).on("click.bs.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, i._getConfig = function (t) {
      return t = a({}, this.constructor.Default, e(this._element).data(), t), s.typeCheckConfig(T, t, this.constructor.DefaultType), t;
    }, i._getMenuElement = function () {
      if (!this._menu) {
        var e = t._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(".dropdown-menu"));
      }

      return this._menu;
    }, i._getPlacement = function () {
      var t = e(this._element.parentNode),
          n = "bottom-start";
      return t.hasClass("dropup") ? (n = "top-start", e(this._menu).hasClass("dropdown-menu-right") && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n;
    }, i._detectNavbar = function () {
      return e(this._element).closest(".navbar").length > 0;
    }, i._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
      } : e.offset = this._config.offset, e;
    }, i._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.dropdown");

        if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, t._clearMenus = function (n) {
      if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
        var a = t._getParentFromElement(i[o]),
            s = e(i[o]).data("bs.dropdown"),
            l = {
          relatedTarget: i[o]
        };

        if (n && "click" === n.type && (l.clickEvent = n), s) {
          var u = s._menu;

          if (e(a).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(a, n.target))) {
            var c = e.Event("hide.bs.dropdown", l);
            e(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(u).removeClass("show"), e(a).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
          }
        }
      }
    }, t._getParentFromElement = function (t) {
      var e,
          n = s.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, t._dataApiKeydownHandler = function (n) {
      if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length)) : D.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass("disabled"))) {
        var i = t._getParentFromElement(this),
            o = e(i).hasClass("show");

        if (o && (!o || 27 !== n.which && 32 !== n.which)) {
          var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));

          if (0 !== r.length) {
            var a = r.indexOf(n.target);
            38 === n.which && a > 0 && a--, 40 === n.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
          }
        } else {
          if (27 === n.which) {
            var s = i.querySelector('[data-toggle="dropdown"]');
            e(s).trigger("focus");
          }

          e(this).trigger("click");
        }
      }
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return E;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return A;
      }
    }]), t;
  }();

  e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', M._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", M._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", M._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), M._jQueryInterface.call(e(this), "toggle");
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }), e.fn[T] = M._jQueryInterface, e.fn[T].Constructor = M, e.fn[T].noConflict = function () {
    return e.fn[T] = S, M._jQueryInterface;
  };

  var I = e.fn.modal,
      P = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      O = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      N = {
    DIALOG: ".modal-dialog",
    MODAL_BODY: ".modal-body",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top"
  },
      L = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(N.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var n = t.prototype;
    return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var n = this;

      if (!this._isShown && !this._isTransitioning) {
        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
        var i = e.Event("show.bs.modal", {
          relatedTarget: t
        });
        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", N.DATA_DISMISS, function (t) {
          return n.hide(t);
        }), e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
          e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return n._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var n = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var i = e.Event("hide.bs.modal");

        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
          this._isShown = !1;
          var o = e(this._element).hasClass("fade");

          if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
            var r = s.getTransitionDurationFromElement(this._element);
            e(this._element).one(s.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return e(t).off(".bs.modal");
      }), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = a({}, P, t), s.typeCheckConfig("modal", t, O), t;
    }, n._showElement = function (t) {
      var n = this,
          i = e(this._element).hasClass("fade");
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(N.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();

      var o = e.Event("shown.bs.modal", {
        relatedTarget: t
      }),
          r = function r() {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o);
      };

      if (i) {
        var a = s.getTransitionDurationFromElement(this._dialog);
        e(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
      } else r();
    }, n._enforceFocus = function () {
      var t = this;
      e(document).off("focusin.bs.modal").on("focusin.bs.modal", function (n) {
        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
    }, n._setResizeEvent = function () {
      var t = this;
      this._isShown ? e(window).on("resize.bs.modal", function (e) {
        return t.handleUpdate(e);
      }) : e(window).off("resize.bs.modal");
    }, n._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
      });
    }, n._removeBackdrop = function () {
      this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
    }, n._showBackdrop = function (t) {
      var n = this,
          i = e(this._element).hasClass("fade") ? "fade" : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", function (t) {
          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
        }), i && s.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
        if (!i) return void t();
        var o = s.getTransitionDurationFromElement(this._backdrop);
        e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(o);
      } else if (!this._isShown && this._backdrop) {
        e(this._backdrop).removeClass("show");

        var r = function r() {
          n._removeBackdrop(), t && t();
        };

        if (e(this._element).hasClass("fade")) {
          var a = s.getTransitionDurationFromElement(this._backdrop);
          e(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();
      } else t && t();
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        var n = [].slice.call(document.querySelectorAll(N.FIXED_CONTENT)),
            i = [].slice.call(document.querySelectorAll(N.STICKY_CONTENT));
        e(n).each(function (n, i) {
          var o = i.style.paddingRight,
              r = e(i).css("padding-right");
          e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
        }), e(i).each(function (n, i) {
          var o = i.style.marginRight,
              r = e(i).css("margin-right");
          e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
        });
        var o = document.body.style.paddingRight,
            r = e(document.body).css("padding-right");
        e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }

      e(document.body).addClass("modal-open");
    }, n._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(N.FIXED_CONTENT));
      e(t).each(function (t, n) {
        var i = e(n).data("padding-right");
        e(n).removeData("padding-right"), n.style.paddingRight = i || "";
      });
      var n = [].slice.call(document.querySelectorAll("" + N.STICKY_CONTENT));
      e(n).each(function (t, n) {
        var i = e(n).data("margin-right");
        void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
      });
      var i = e(document.body).data("padding-right");
      e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t._jQueryInterface = function (n, i) {
      return this.each(function () {
        var o = e(this).data("bs.modal"),
            r = a({}, P, e(this).data(), "object" == typeof n && n ? n : {});

        if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
          o[n](i);
        } else r.show && o.show(i);
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return P;
      }
    }]), t;
  }();

  e(document).on("click.bs.modal.data-api", N.DATA_TOGGLE, function (t) {
    var n,
        i = this,
        o = s.getSelectorFromElement(this);
    o && (n = document.querySelector(o));
    var r = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), e(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var l = e(n).one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || l.one("hidden.bs.modal", function () {
        e(i).is(":visible") && i.focus();
      });
    });

    L._jQueryInterface.call(e(n), r, this);
  }), e.fn.modal = L._jQueryInterface, e.fn.modal.Constructor = L, e.fn.modal.noConflict = function () {
    return e.fn.modal = I, L._jQueryInterface;
  };
  var F = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      R = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      j = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

  function B(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function a(t, n) {
      var i = r[t],
          a = i.nodeName.toLowerCase();
      if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
      var s = [].slice.call(i.attributes),
          l = [].concat(e["*"] || [], e[a] || []);
      s.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === F.indexOf(n) || Boolean(t.nodeValue.match(R) || t.nodeValue.match(j));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, l) || i.removeAttribute(t.nodeName);
      });
    }, s = 0, l = r.length; s < l; s++) {
      a(s);
    }

    return i.body.innerHTML;
  }

  var W = e.fn.tooltip,
      z = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      H = ["sanitize", "whiteList", "sanitizeFn"],
      q = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      V = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      U = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }
  },
      Y = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      X = function () {
    function t(t, e) {
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var i = t.prototype;
    return i.enable = function () {
      this._isEnabled = !0;
    }, i.disable = function () {
      this._isEnabled = !1;
    }, i.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, i.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var n = this.constructor.DATA_KEY,
            i = e(t.currentTarget).data(n);
        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
      } else {
        if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, i.dispose = function () {
      clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, i.show = function () {
      var t = this;
      if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
      var i = e.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        e(this.element).trigger(i);
        var o = s.findShadowRoot(this.element),
            r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
        if (i.isDefaultPrevented() || !r) return;
        var a = this.getTipElement(),
            l = s.getUID(this.constructor.NAME);
        a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass("fade");

        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
            c = this._getAttachment(u);

        this.addAttachmentClass(c);

        var d = this._getContainer();

        e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
          placement: c,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function onUpdate(e) {
            return t._handlePopperPlacementChange(e);
          }
        }), e(a).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);

        var h = function h() {
          t.config.animation && t._fixTransition();
          var n = t._hoverState;
          t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
        };

        if (e(this.tip).hasClass("fade")) {
          var f = s.getTransitionDurationFromElement(this.tip);
          e(this.tip).one(s.TRANSITION_END, h).emulateTransitionEnd(f);
        } else h();
      }
    }, i.hide = function (t) {
      var n = this,
          i = this.getTipElement(),
          o = e.Event(this.constructor.Event.HIDE),
          r = function r() {
        "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
      };

      if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
          var a = s.getTransitionDurationFromElement(i);
          e(i).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();

        this._hoverState = "";
      }
    }, i.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, i.isWithContent = function () {
      return Boolean(this.getTitle());
    }, i.addAttachmentClass = function (t) {
      e(this.getTipElement()).addClass("bs-tooltip-" + t);
    }, i.getTipElement = function () {
      return this.tip = this.tip || e(this.config.template)[0], this.tip;
    }, i.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
    }, i.setElementContent = function (t, n) {
      "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = B(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text());
    }, i.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, i._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this.config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
      } : e.offset = this.config.offset, e;
    }, i._getContainer = function () {
      return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
    }, i._getAttachment = function (t) {
      return V[t.toUpperCase()];
    }, i._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (n) {
        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== n) {
          var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          e(t.element).on(i, t.config.selector, function (e) {
            return t._enter(e);
          }).on(o, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), e(this.element).closest(".modal").on("hide.bs.modal", function () {
        t.element && t.hide();
      }), this.config.selector ? this.config = a({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, i._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, i._enter = function (t, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
        "show" === n._hoverState && n.show();
      }, n.config.delay.show) : n.show());
    }, i._leave = function (t, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
        "out" === n._hoverState && n.hide();
      }, n.config.delay.hide) : n.hide());
    }, i._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, i._getConfig = function (t) {
      var n = e(this.element).data();
      return Object.keys(n).forEach(function (t) {
        -1 !== H.indexOf(t) && delete n[t];
      }), "number" == typeof (t = a({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), s.typeCheckConfig("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = B(t.template, t.whiteList, t.sanitizeFn)), t;
    }, i._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, i._cleanTipClass = function () {
      var t = e(this.getTipElement()),
          n = t.attr("class").match(z);
      null !== n && n.length && t.removeClass(n.join(""));
    }, i._handlePopperPlacementChange = function (t) {
      this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, i._fixTransition = function () {
      var t = this.getTipElement(),
          n = this.config.animation;
      null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.tooltip"),
            o = "object" == typeof n && n;

        if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return U;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Y;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return q;
      }
    }]), t;
  }();

  e.fn.tooltip = X._jQueryInterface, e.fn.tooltip.Constructor = X, e.fn.tooltip.noConflict = function () {
    return e.fn.tooltip = W, X._jQueryInterface;
  };

  var $ = e.fn.popover,
      G = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Q = a({}, X.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      K = a({}, X.DefaultType, {
    content: "(string|element|function)"
  }),
      J = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  },
      Z = function (t) {
    var n, i;

    function r() {
      return t.apply(this, arguments) || this;
    }

    i = t, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
    var a = r.prototype;
    return a.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, a.addAttachmentClass = function (t) {
      e(this.getTipElement()).addClass("bs-popover-" + t);
    }, a.getTipElement = function () {
      return this.tip = this.tip || e(this.config.template)[0], this.tip;
    }, a.setContent = function () {
      var t = e(this.getTipElement());
      this.setElementContent(t.find(".popover-header"), this.getTitle());

      var n = this._getContent();

      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
    }, a._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a._cleanTipClass = function () {
      var t = e(this.getTipElement()),
          n = t.attr("class").match(G);
      null !== n && n.length > 0 && t.removeClass(n.join(""));
    }, r._jQueryInterface = function (t) {
      return this.each(function () {
        var n = e(this).data("bs.popover"),
            i = "object" == typeof t ? t : null;

        if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Q;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return J;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return K;
      }
    }]), r;
  }(X);

  e.fn.popover = Z._jQueryInterface, e.fn.popover.Constructor = Z, e.fn.popover.noConflict = function () {
    return e.fn.popover = $, Z._jQueryInterface;
  };

  var tt = "scrollspy",
      et = e.fn[tt],
      nt = {
    offset: 10,
    method: "auto",
    target: ""
  },
      it = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      ot = {
    ACTIVATE: "activate.bs.scrollspy",
    SCROLL: "scroll.bs.scrollspy",
    LOAD_DATA_API: "load.bs.scrollspy.data-api"
  },
      rt = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  },
      at = function () {
    function t(t, n) {
      var i = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + rt.NAV_LINKS + "," + this._config.target + " " + rt.LIST_ITEMS + "," + this._config.target + " " + rt.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(ot.SCROLL, function (t) {
        return i._process(t);
      }), this.refresh(), this._process();
    }

    var n = t.prototype;
    return n.refresh = function () {
      var t = this,
          n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : "position" : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var o,
            r = s.getSelectorFromElement(t);

        if (r && (o = document.querySelector(r)), o) {
          var a = o.getBoundingClientRect();
          if (a.width || a.height) return [e(o)[n]().top + i, r];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = a({}, nt, "object" == typeof t && t ? t : {})).target) {
        var n = e(t.target).attr("id");
        n || (n = s.getUID(tt), e(t.target).attr("id", n)), t.target = "#" + n;
      }

      return s.typeCheckConfig(tt, t, it), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();

      var n = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          i = e([].slice.call(document.querySelectorAll(n.join(","))));

      i.hasClass("dropdown-item") ? (i.closest(rt.DROPDOWN).find(rt.DROPDOWN_TOGGLE).addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(rt.NAV_LIST_GROUP).prev(rt.NAV_LINKS + ", " + rt.LIST_ITEMS).addClass("active"), i.parents(rt.NAV_LIST_GROUP).prev(rt.NAV_ITEMS).children(rt.NAV_LINKS).addClass("active")), e(this._scrollElement).trigger(ot.ACTIVATE, {
        relatedTarget: t
      });
    }, n._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains("active");
      }).forEach(function (t) {
        return t.classList.remove("active");
      });
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.scrollspy");

        if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return nt;
      }
    }]), t;
  }();

  e(window).on(ot.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(rt.DATA_SPY)), n = t.length; n--;) {
      var i = e(t[n]);

      at._jQueryInterface.call(i, i.data());
    }
  }), e.fn[tt] = at._jQueryInterface, e.fn[tt].Constructor = at, e.fn[tt].noConflict = function () {
    return e.fn[tt] = et, at._jQueryInterface;
  };

  var st = e.fn.tab,
      lt = function () {
    function t(t) {
      this._element = t;
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
        var n,
            i,
            o = e(this._element).closest(".nav, .list-group")[0],
            r = s.getSelectorFromElement(this._element);

        if (o) {
          var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
          i = (i = e.makeArray(e(o).find(a)))[i.length - 1];
        }

        var l = e.Event("hide.bs.tab", {
          relatedTarget: this._element
        }),
            u = e.Event("show.bs.tab", {
          relatedTarget: i
        });

        if (i && e(i).trigger(l), e(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
          r && (n = document.querySelector(r)), this._activate(this._element, o);

          var c = function c() {
            var n = e.Event("hidden.bs.tab", {
              relatedTarget: t._element
            }),
                o = e.Event("shown.bs.tab", {
              relatedTarget: i
            });
            e(i).trigger(n), e(t._element).trigger(o);
          };

          n ? this._activate(n, n.parentNode, c) : c();
        }
      }
    }, n.dispose = function () {
      e.removeData(this._element, "bs.tab"), this._element = null;
    }, n._activate = function (t, n, i) {
      var o = this,
          r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0],
          a = i && r && e(r).hasClass("fade"),
          l = function l() {
        return o._transitionComplete(t, r, i);
      };

      if (r && a) {
        var u = s.getTransitionDurationFromElement(r);
        e(r).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(u);
      } else l();
    }, n._transitionComplete = function (t, n, i) {
      if (n) {
        e(n).removeClass("active");
        var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
        o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
      }

      if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
        var r = e(t).closest(".dropdown")[0];

        if (r) {
          var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
          e(a).addClass("active");
        }

        t.setAttribute("aria-expanded", !0);
      }

      i && i();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.tab");

        if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
          o[n]();
        }
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), t;
  }();

  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), lt._jQueryInterface.call(e(this), "show");
  }), e.fn.tab = lt._jQueryInterface, e.fn.tab.Constructor = lt, e.fn.tab.noConflict = function () {
    return e.fn.tab = st, lt._jQueryInterface;
  };

  var ut = e.fn.toast,
      ct = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      dt = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ht = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;
      e(this._element).trigger("show.bs.toast"), this._config.animation && this._element.classList.add("fade");

      var n = function n() {
        t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove("hide"), this._element.classList.add("showing"), this._config.animation) {
        var i = s.getTransitionDurationFromElement(this._element);
        e(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, n.hide = function (t) {
      var n = this;
      this._element.classList.contains("show") && (e(this._element).trigger("hide.bs.toast"), t ? this._close() : this._timeout = setTimeout(function () {
        n._close();
      }, this._config.delay));
    }, n.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, n._getConfig = function (t) {
      return t = a({}, dt, e(this._element).data(), "object" == typeof t && t ? t : {}), s.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;
      e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
        return t.hide(!0);
      });
    }, n._close = function () {
      var t = this,
          n = function n() {
        t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
      };

      if (this._element.classList.remove("show"), this._config.animation) {
        var i = s.getTransitionDurationFromElement(this._element);
        e(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.toast");

        if (o || (o = new t(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
          o[n](this);
        }
      });
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ct;
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), t;
  }();

  e.fn.toast = ht._jQueryInterface, e.fn.toast.Constructor = ht, e.fn.toast.noConflict = function () {
    return e.fn.toast = ut, ht._jQueryInterface;
  }, function () {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = s, t.Alert = u, t.Button = d, t.Carousel = b, t.Collapse = k, t.Dropdown = M, t.Modal = L, t.Popover = Z, t.Scrollspy = at, t.Tab = lt, t.Toast = ht, t.Tooltip = X, Object.defineProperty(t, "__esModule", {
    value: !0
  });
}), function (t) {
  "use strict";

  t.patternfly = {
    version: "3.59.0",
    pfBreakpoints: {
      tablet: 768,
      desktop: 1200
    }
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  t.patternfly.pfPaletteColors = {
    black: "#030303",
    black100: "#fafafa",
    black200: "#ededed",
    black300: "#d1d1d1",
    black400: "#bbbbbb",
    black500: "#8b8d8f",
    black600: "#72767b",
    black700: "#4d5258",
    black800: "#393f44",
    black900: "#292e34",
    blue: "#0088ce",
    blue100: "#bee1f4",
    blue200: "#7dc3e8",
    blue300: "#39a5dc",
    blue400: "#0088ce",
    blue500: "#00659c",
    blue600: "#004368",
    blue700: "#002235",
    gold: "#f0ab00",
    gold100: "#fbeabc",
    gold200: "#f9d67a",
    gold300: "#f5c12e",
    gold400: "#f0ab00",
    gold500: "#b58100",
    gold600: "#795600",
    gold700: "#3d2c00",
    orange: "#ec7a08",
    orange100: "#fbdebf",
    orange200: "#f7bd7f",
    orange300: "#f39d3c",
    orange400: "#ec7a08",
    orange500: "#b35c00",
    orange600: "#773d00",
    orange700: "#3b1f00",
    lightBlue: "#00b9e4",
    lightBlue100: "#beedf9",
    lightBlue200: "#7cdbf3",
    lightBlue300: "#35caed",
    lightBlue400: "#00b9e4",
    lightBlue500: "#008bad",
    lightBlue600: "#005c73",
    lightBlue700: "#002d39",
    green: "#3f9c35",
    green100: "#cfe7cd",
    green200: "#9ecf99",
    green300: "#6ec664",
    green400: "#3f9c35",
    green500: "#2d7623",
    green600: "#1e4f18",
    green700: "#0f280d",
    lightGreen: "#92d400",
    lightGreen100: "#e4f5bc",
    lightGreen200: "#c8eb79",
    lightGreen300: "#ace12e",
    lightGreen400: "#92d400",
    lightGreen500: "#6ca100",
    lightGreen600: "#486b00",
    lightGreen700: "#253600",
    cyan: "#007a87",
    cyan100: "#bedee1",
    cyan200: "#7dbdc3",
    cyan300: "#3a9ca6",
    cyan400: "#007a87",
    cyan500: "#005c66",
    cyan600: "#003d44",
    cyan700: "#001f22",
    purple: "#703fec",
    purple100: "#c7bfff",
    purple200: "#a18fff",
    purple300: "#8461f7",
    purple400: "#703fec",
    purple500: "#582fc0",
    purple600: "#40199a",
    purple700: "#1f0066",
    red: "#cc0000",
    red100: "#cc0000",
    red200: "#a30000",
    red300: "#8b0000",
    red400: "#470000",
    red500: "#2c0000"
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  var e = t.patternfly;
  e.pfSetDonutChartTitle = function (e, n, i) {
    var o = t.d3.select(e).select("text.c3-chart-arcs-title");
    o.text(""), o.insert("tspan").text(n).classed("donut-title-big-pf", !0).attr("dy", 0).attr("x", 0), o.insert("tspan").text(i).classed("donut-title-small-pf", !0).attr("dy", 20).attr("x", 0);
  }, e.pfDonutTooltipContents = function (t, e, n, i) {
    return '<table class="c3-tooltip">  <tr>    <td><span style="background-color:' + i(t[0].id) + '"></span><strong>' + t[0].value + "</strong> " + t[0].name + "</td>    <td>" + Math.round(1e3 * t[0].ratio) / 10 + "%</td>  </tr></table>";
  }, e.pfGetUtilizationDonutTooltipContentsFn = function (t) {
    return function (e) {
      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' + Math.round(1e3 * e[0].ratio) / 10 + "% " + t + " " + e[0].name + "</span>";
    };
  }, e.pfGetBarChartTooltipContentsFn = function (t) {
    return function (e) {
      return '<table class="c3-tooltip">  <tr>    <td><strong>' + (t ? t[e[0].index] : e[0].index) + ":</td>    <td>" + e[0].value + "</td>  </tr></table>";
    };
  }, e.pfSingleLineChartTooltipContentsFn = function (t) {
    return function (e) {
      return '<table class="c3-tooltip">  <tr>    <td><strong>' + (t ? t[e[0].index] : e[0].index) + ":</td>    <td>" + e[0].value + "</td>  </tr></table>";
    };
  }, e.pfPieTooltipContents = function (t, n, i, o) {
    return e.pfDonutTooltipContents(t, n, i, o);
  }, e.c3ChartDefaults = function () {
    var t = function t() {
      return {
        pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.blue300, e.pfPaletteColors.green, e.pfPaletteColors.orange, e.pfPaletteColors.red]
      };
    },
        n = function n() {
      return {
        contents: e.pfGetBarChartTooltipContentsFn()
      };
    },
        i = function i() {
      return {
        contents: e.pfGetBarChartTooltipContentsFn()
      };
    };

    return {
      getDefaultColors: t,
      getDefaultBarGrid: function getDefaultBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultBarTooltip: function getDefaultBarTooltip(t) {
        return {
          contents: e.pfGetBarChartTooltipContentsFn(t)
        };
      },
      getDefaultBarLegend: function getDefaultBarLegend() {
        return {
          show: !1
        };
      },
      getDefaultBarConfig: function getDefaultBarConfig(t) {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultBarGrid(),
          tooltip: this.getDefaultBarTooltip(t),
          legend: this.getDefaultBarLegend()
        };
      },
      getDefaultGroupedBarGrid: function getDefaultGroupedBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultGroupedBarLegend: function getDefaultGroupedBarLegend() {
        return {
          show: !0,
          position: "bottom"
        };
      },
      getDefaultGroupedBarConfig: function getDefaultGroupedBarConfig() {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultGroupedBarGrid(),
          legend: this.getDefaultGroupedBarLegend()
        };
      },
      getDefaultStackedBarGrid: function getDefaultStackedBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultStackedBarLegend: function getDefaultStackedBarLegend() {
        return {
          show: !0,
          position: "bottom"
        };
      },
      getDefaultStackedBarConfig: function getDefaultStackedBarConfig() {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultStackedBarGrid(),
          legend: this.getDefaultStackedBarLegend()
        };
      },
      getDefaultDonut: function getDefaultDonut(t) {
        return {
          title: t,
          label: {
            show: !1
          },
          width: 11
        };
      },
      getDefaultDonutSize: function getDefaultDonutSize() {
        return {
          height: 171
        };
      },
      getDefaultDonutColors: function getDefaultDonutColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.black300]
        };
      },
      getDefaultDonutTooltip: function getDefaultDonutTooltip() {
        return {
          show: !1
        };
      },
      getDefaultDonutLegend: function getDefaultDonutLegend() {
        return {
          show: !1
        };
      },
      getDefaultDonutConfig: function getDefaultDonutConfig(t) {
        return {
          donut: this.getDefaultDonut(t),
          size: this.getDefaultDonutSize(),
          legend: this.getDefaultDonutLegend(),
          color: this.getDefaultDonutColors(),
          tooltip: this.getDefaultDonutTooltip()
        };
      },
      getDefaultRelationshipDonutConfig: function getDefaultRelationshipDonutConfig(t) {
        return {
          donut: this.getDefaultDonut(t),
          size: this.getDefaultDonutSize(),
          legend: this.getDefaultDonutLegend(),
          color: this.getDefaultRelationshipDonutColors(),
          tooltip: this.getDefaultDonutTooltip()
        };
      },
      getDefaultPie: function getDefaultPie() {
        return {
          expand: !0,
          label: {
            show: !1
          }
        };
      },
      getDefaultPieSize: function getDefaultPieSize() {
        return {
          height: 171
        };
      },
      getDefaultPieColors: function getDefaultPieColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.black300]
        };
      },
      getDefaultRelationshipDonutColors: function getDefaultRelationshipDonutColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.red100, e.pfPaletteColors.orange400, e.pfPaletteColors.green400, e.pfPaletteColors.cyan500, e.pfPaletteColors.gold200]
        };
      },
      getDefaultPieTooltip: function getDefaultPieTooltip() {
        return {
          contents: e.pfPieTooltipContents
        };
      },
      getDefaultPieLegend: function getDefaultPieLegend() {
        return {
          show: !1
        };
      },
      getDefaultPieConfig: function getDefaultPieConfig() {
        return {
          pie: this.getDefaultPie(),
          size: this.getDefaultPieSize(),
          legend: this.getDefaultPieLegend(),
          color: this.getDefaultPieColors(),
          tooltip: this.getDefaultPieTooltip()
        };
      },
      getDefaultSparklineArea: function getDefaultSparklineArea() {
        return {
          zerobased: !0
        };
      },
      getDefaultSparklineSize: function getDefaultSparklineSize() {
        return {
          height: 60
        };
      },
      getDefaultSparklineAxis: function getDefaultSparklineAxis() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !1
          }
        };
      },
      getDefaultSparklineLegend: function getDefaultSparklineLegend() {
        return {
          show: !1
        };
      },
      getDefaultSparklinePoint: function getDefaultSparklinePoint() {
        return {
          r: 1,
          focus: {
            expand: {
              r: 4
            }
          }
        };
      },
      getDefaultSparklineTooltip: function getDefaultSparklineTooltip() {
        return {
          contents: function contents(t) {
            return '<span class="c3-tooltip-sparkline">' + t[0].value + " " + t[0].name + "</span>";
          }
        };
      },
      getDefaultSparklineConfig: function getDefaultSparklineConfig() {
        return {
          area: {
            zerobased: !0
          },
          size: {
            height: 60
          },
          axis: {
            x: {
              show: !1
            },
            y: {
              show: !1
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          tooltip: {
            contents: function contents(t) {
              return '<span class="c3-tooltip-sparkline">' + t[0].value + " " + t[0].name + "</span>";
            }
          }
        };
      },
      getDefaultLineAxis: function getDefaultLineAxis() {
        return {
          x: {
            show: !0
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultLineGrid: function getDefaultLineGrid() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultLineLegend: function getDefaultLineLegend() {
        return {
          show: !0
        };
      },
      getDefaultLinePoint: function getDefaultLinePoint() {
        return {
          r: 3,
          focus: {
            expand: {
              r: 5
            }
          }
        };
      },
      getDefaultLineConfig: function getDefaultLineConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !0
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          }
        };
      },
      getDefaultSingleLineTooltip: n,
      getDefaultSingleLineConfig: function getDefaultSingleLineConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          },
          tooltip: n()
        };
      },
      getDefaultAreaAxis: function getDefaultAreaAxis() {
        return {
          x: {
            show: !0
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultAreaGrid: function getDefaultAreaGrid() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultAreaLegend: function getDefaultAreaLegend() {
        return {
          show: !0
        };
      },
      getDefaultAreaPoint: function getDefaultAreaPoint() {
        return {
          r: 3,
          focus: {
            expand: {
              r: 5
            }
          }
        };
      },
      getDefaultAreaConfig: function getDefaultAreaConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !0
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          }
        };
      },
      getDefaultSingleAreaTooltip: i,
      getDefaultSingleAreaConfig: function getDefaultSingleAreaConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          },
          tooltip: i()
        };
      }
    };
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  void 0 !== patternfly && (t.pfBreakpoints = patternfly.pfBreakpoints);
}(jQuery), function (t) {
  "use strict";

  t.fn.pfList = function () {
    function e(e) {
      var o, r, a, s;
      (r = (o = t(e)).parentsUntil(".list-pf", "[data-list=expansion]").first()).length || (r = o.closest(".list-pf-item, .list-pf-expansion")), (a = r.find(".collapse").first()).toggleClass("in"), i(r, a.hasClass("in")), n(s = r.closest(".list-pf-item"), s.find(".collapse").first().hasClass("in"));
    }

    function n(t, e) {
      e ? t.addClass("active") : t.removeClass("active");
    }

    function i(t, e) {
      var n = t.find(".list-pf-chevron .fa").first();
      e ? (n.removeClass("fa-angle-right"), n.addClass("fa-angle-down")) : (n.addClass("fa-angle-right"), n.removeClass("fa-angle-down"));
    }

    var o;
    return (o = this).find("[data-list=expansion], .list-pf-item, .list-pf-expansion").each(function (e, o) {
      var r = t(o),
          a = r.find(".collapse").first().hasClass("in");
      i(r, a), r.hasClass("list-pf-item") && n(r, a);
    }), o.find(".list-pf-container").each(function (n, i) {
      var o = t(i),
          r = o.find("[data-list=toggle]");
      r.length || (r = o), r.on("keydown", function (t) {
        13 !== t.keyCode && 32 !== t.keyCode || (e(this), t.stopPropagation(), t.preventDefault());
      }), r.on("click", function (t) {
        e(this), t.stopPropagation(), t.preventDefault();
      });
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.sidebar = function () {
    var e = 0;
    t(".navbar-pf .navbar-toggle").is(":hidden") && (e = t(document).height() - t(".navbar-pf").outerHeight()), t(".sidebar-pf").parent(".row").children('[class*="col-"]').css({
      "min-height": e
    });
  }, t(document).ready(function () {
    t(".sidebar-pf").length > 0 && 0 === t(".datatable").length && t.fn.sidebar();
  }), t(window).on("resize", function () {
    t(".sidebar-pf").length > 0 && t.fn.sidebar();
  });
}(jQuery), function (t) {
  "use strict";

  t.fn.popovers = function () {
    return this.popover(), this.filter("[data-close=true]").each(function (e, n) {
      var i = t(n),
          o = i.attr("data-original-title") + '<button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>';
      i.attr("data-original-title", o);
    }), this.on("click", function (e) {
      var n = t(this),
          i = n.next(".popover").find(".popover-title");
      i.find(".close").parent(".popover-title").addClass("closable"), i.find(".close").on("click", function () {
        n.popover("hide");
      }), e.preventDefault();
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.dataTableExt && (t.extend(!0, t.fn.dataTable.defaults, {
    bDestroy: !0,
    bAutoWidth: !1,
    iDisplayLength: 20,
    sDom: "<'dataTables_header' f i r ><'table-responsive'  t ><'dataTables_footer' p >",
    oLanguage: {
      sInfo: "Showing <b>_START_</b> to <b>_END_</b> of <b>_TOTAL_</b> Items",
      sInfoFiltered: "(of <b>_MAX_</b>)",
      sInfoEmpty: "Showing <b>0</b> Results",
      sZeroRecords: "<p>Suggestions</p><ul><li>Check the javascript regular expression syntax of the search term.</li><li>Check that the correct menu option is chosen (token ID vs. user ID).</li><li>Use wildcards (* to match 0 or more characters, + to match 1 or more characters, ? to match 0 or 1 character).</li><li>Clear the search field, then click Search to return to the 20 most recent records.</li></ul>",
      sSearch: ""
    },
    sPaginationType: "bootstrap_input",
    oSearch: {
      sSearch: "",
      bRegex: !0,
      bSmart: !1
    }
  }), t.extend(t.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper"
  }), t.fn.dataTableExt.oApi.fnPagingInfo = function (t) {
    return {
      iStart: t._iDisplayStart,
      iEnd: t.fnDisplayEnd(),
      iLength: t._iDisplayLength,
      iTotal: t.fnRecordsTotal(),
      iFilteredTotal: t.fnRecordsDisplay(),
      iPage: -1 === t._iDisplayLength ? 0 : Math.ceil(t._iDisplayStart / t._iDisplayLength),
      iTotalPages: -1 === t._iDisplayLength ? 0 : Math.ceil(t.fnRecordsDisplay() / t._iDisplayLength)
    };
  }, t.extend(t.fn.dataTableExt.oPagination, {
    bootstrap_input: {
      fnInit: function fnInit(e, n, i) {
        var o,
            r,
            a = function a(t) {
          t.preventDefault(), e.oApi._fnPageChange(e, t.data.action) && i(e);
        };

        t(n).append('<ul class="pagination">  <li class="first disabled"><span class="i fa fa-angle-double-left"></span></li>  <li class="prev disabled"><span class="i fa fa-angle-left"></span></li></ul><div class="pagination-input">  <input type="text" class="paginate_input">  <span class="paginate_of">of <b>3</b></span></div><ul class="pagination">  <li class="next disabled"><span class="i fa fa-angle-right"></span></li>  <li class="last disabled"><span class="i fa fa-angle-double-right"></span></li></ul>'), o = t("li", n), t(o[0]).bind("click.DT", {
          action: "first"
        }, a), t(o[1]).bind("click.DT", {
          action: "previous"
        }, a), t(o[2]).bind("click.DT", {
          action: "next"
        }, a), t(o[3]).bind("click.DT", {
          action: "last"
        }, a), r = t("input", n), t(r).keyup(function (t) {
          var n;

          if (38 === t.which || 39 === t.which ? this.value += 1 : (37 === t.which || 40 === t.which) && this.value > 1 && (this.value -= 1), "" !== this.value && this.value.match(/[0-9]/)) {
            if ((n = e._iDisplayLength * (this.value - 1)) >= e.fnRecordsDisplay()) return e._iDisplayStart = (Math.ceil((e.fnRecordsDisplay() - 1) / e._iDisplayLength) - 1) * e._iDisplayLength, void i(e);
            e._iDisplayStart = n, i(e);
          }
        });
      },
      fnUpdate: function fnUpdate(e, n) {
        var i,
            o = e.oInstance.fnPagingInfo(),
            r = e.aanFeatures.p,
            a = r.length,
            s = Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength),
            l = Math.ceil(e._iDisplayStart / e._iDisplayLength) + 1;

        for (i = 0; i < a; i += 1) {
          t(".paginate_input", r[i]).val(l).siblings(".paginate_of").find("b").html(s), 0 === o.iPage ? (t("li.first", r[i]).addClass("disabled"), t("li.prev", r[i]).addClass("disabled")) : (t("li.first", r[i]).removeClass("disabled"), t("li.prev", r[i]).removeClass("disabled")), o.iPage === o.iTotalPages - 1 || 0 === o.iTotalPages ? (t("li.next", r[i]).addClass("disabled"), t("li.last", r[i]).addClass("disabled")) : (t("li.next", r[i]).removeClass("disabled"), t("li.last", r[i]).removeClass("disabled"));
        }
      }
    }
  }));
}(jQuery), function (t) {
  "use strict";

  t.fn.navigation = function () {
    var e = t(".layout-pf-alt-fixed .nav-pf-vertical-alt"),
        n = t(".container-pf-alt-nav-pf-vertical-alt"),
        i = t(".navbar-toggle"),
        o = !1,
        r = function r() {
      var i = t(window).width();
      e.removeClass("hidden show-mobile-nav collapsed"), n.removeClass("collapsed-nav hidden-nav"), (i < t.pfBreakpoints.desktop || o) && (e.addClass("collapsed"), n.addClass("collapsed-nav")), i < t.pfBreakpoints.tablet && (e.addClass("hidden"), e.removeClass("collapsed"), n.removeClass("collapsed-nav"), n.addClass("hidden-nav"));
    },
        a = function a() {
      t("html").addClass("transitions");
    };

    t(window).on("resize", function () {
      r(), a();
    }), r(), i.on("click", function (t) {
      var i = n.hasClass("hidden-nav");
      a(), i && e.hasClass("show-mobile-nav") ? e.removeClass("show-mobile-nav") : i ? e.addClass("show-mobile-nav") : e.hasClass("collapsed") ? (e.removeClass("collapsed"), n.removeClass("collapsed-nav"), o = !1) : (e.addClass("collapsed"), n.addClass("collapsed-nav"), o = !0);
    }), t('.nav-pf-vertical-alt [data-toggle="tooltip"]').tooltip({
      container: "body",
      delay: {
        show: "500",
        hide: "200"
      }
    }), t(".nav-pf-vertical-alt").on("show.bs.tooltip", function (e) {
      return t(this).hasClass("collapsed");
    });
  }, t(document).ready(function () {
    t(".nav-pf-vertical-alt").length > 0 && t.fn.navigation();
  });
}(jQuery), function (t) {
  "use strict";

  t.fn.countRemainingChars = function (e) {
    var n = t.extend({
      charsMaxLimit: 100,
      charsWarnRemaining: 5,
      blockInputAtMaxLimit: !1
    }, e),
        i = this,
        o = t("#" + n.countFld).text(n.charsMaxLimit),
        r = function r(t) {
      var e = n.charsMaxLimit - t;
      o.text(e), o.toggleClass("chars-warn-remaining-pf", e <= n.charsWarnRemaining), i.trigger(e < 0 ? "overCharsMaxLimitEvent" : "underCharsMaxLimitEvent", i.attr("id"));
    };

    return this.on("paste", function (t) {
      setTimeout(function () {
        var t,
            e = i.val().length;
        n.blockInputAtMaxLimit && e > n.charsMaxLimit && (t = (t = i.val()).substring(0, n.charsMaxLimit), i.val(t), e = i.val().length), r(e);
      }, 100);
    }), this.keyup(function (t) {
      r(i.val().length);
    }), this.keydown(function (t) {
      var e = i.val().length;
      n.blockInputAtMaxLimit && e >= n.charsMaxLimit && 8 !== t.keyCode && t.preventDefault();
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  void 0 !== patternfly && (t.pfPaletteColors = patternfly.pfPaletteColors);
}(jQuery), function (t) {
  "use strict";

  void 0 !== patternfly && (t.fn.pfSetDonutChartTitle = patternfly.pfSetDonutChartTitle, t.fn.pfDonutTooltipContents = patternfly.pfDonutTooltipContents, t.fn.pfGetUtilizationDonutTooltipContentsFn = patternfly.pfGetUtilizationDonutTooltipContentsFn, t.fn.pfGetBarChartTooltipContentsFn = patternfly.pfGetBarChartTooltipContentsFn, t.fn.pfSingleLineChartTooltipContentsFn = patternfly.pfSingleLineChartTooltipContentsFn, t.fn.pfPieTooltipContents = patternfly.pfPieTooltipContents, t.fn.c3ChartDefaults = patternfly.c3ChartDefaults);
}(jQuery), function (t) {
  "use strict";

  t.fn.initCollapseHeights = function (e) {
    var n,
        i = this,
        o = e;
    (n = function n() {
      var e,
          n,
          r,
          a,
          s = "hidden";
      e = i.height(), (n = i.find(".collapse.in")) && n.length > 0 && n.removeClass("in"), r = 0, i.children().each(t.proxy(function (e, n) {
        var i = t(n);
        r += i.outerHeight(!0);
      }, i)).end(), (a = e - r) < 25 && (a = 25, s = "auto"), n && n.length > 0 && n.addClass("in"), setTimeout(function () {
        i.find('[data-toggle="collapse"]').each(t.proxy(function (e, n) {
          var i,
              r,
              s,
              l,
              u = 0;
          (r = (i = t(n)).attr("data-target")) || (r = i.attr("href")), s = t(r), l = s, o && (1 === (l = s.find(o)).length ? (u = 0, s.children().each(t.proxy(function (e, n) {
            var i = t(n);
            n !== l[0] && (u += i.outerHeight(!0));
          }, s)).end(), a -= u) : l = s), l.css({
            "max-height": a - u + "px",
            "overflow-y": "auto"
          });
        }, i)).end(), i.css({
          "overflow-y": s
        });
      }, 100);
    })(), t(window).on("resize", n);
  }, t.fn.initFixedAccordion = function () {
    var e;
    this.on("show.bs.collapse", ".collapse", function (e) {
      t(e.target.parentNode).addClass("panel-open");
    }), this.on("hide.bs.collapse", ".collapse", function (e) {
      t(e.target.parentNode).removeClass("panel-open");
    }), this.find(".panel").each(function (e, n) {
      t(n).removeClass("panel-open");
    }), (e = t(this.find(".collapse.in"))[0]) && t(e.parentNode).addClass("panel-open");
  };
}(jQuery), function (t) {
  "use strict";

  function e(e, n) {
    var i = n.attr("data-parent");
    if ("string" == typeof i) return isNaN(i) ? (i = t(i)).length > 1 && (i = e.closest(i)) : i = t(e[parseInt(i, 10)]), i;
  }

  function n(t, e) {
    e && (e.find(".treegrid-node > span.expand-icon").toggleClass("fa-angle-right", e.hasClass("collapsed")).toggleClass("fa-angle-down", !e.hasClass("collapsed")), t.toggleClass("hidden", e.hasClass("collapsed")), e.hasClass("collapsed") && t.addClass("collapsed"));
  }

  function i(t) {
    t.find("tbody > tr").removeClass("odd"), t.find("tbody > tr:not(.hidden):odd").addClass("odd");
  }

  t.fn.treegrid = function (o) {
    var r, a, s;
    a = this.find("tbody > tr"), s = this, t.each(a, function () {
      var l, u;

      if (l = t(this), u = e(a, l), l.children(".treegrid-node").prepend('<span class="icon expand-icon fa"/>'), l.children(".treegrid-node").on("click", function (r) {
        var u = l.find("span.expand-icon");
        o && "function" == typeof o.callback && o.callback(r), u.hasClass("fa-angle-right") && l.removeClass("collapsed"), u.hasClass("fa-angle-down") && l.addClass("collapsed"), t.each(a.slice(a.index(l) + 1), function () {
          n(t(this), e(a, t(this)));
        }), i(s);
      }), u) {
        for (r = u.find(".treegrid-node > span.indent").length + 1; r > 0; r -= 1) {
          l.children(".treegrid-node").prepend('<span class="indent"/>');
        }

        n(l, u);
      }
    }), i(s);
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.setupVerticalNavigation = function (e, n, i) {
    var o = t.extend({
      hoverDelay: 500,
      hideDelay: 700,
      rememberOpenState: !0,
      storage: "localStorage"
    }, i || {}),
        r = t(".nav-pf-vertical"),
        a = t(".container-pf-nav-pf-vertical"),
        s = t(".navbar-toggle"),
        l = !0,
        u = !1,
        c = !1,
        d = "sessionStorage" === o.storage ? "sessionStorage" : "localStorage",
        h = function h() {
      return a.hasClass("hidden-nav");
    },
        f = function f(e) {
      setTimeout(function () {
        t(window).trigger("resize");
      }, e);
    },
        p = function p() {
      !h() && c || (r.addClass("secondary-visible-pf"), a.addClass("secondary-visible-pf")), c || f(100);
    },
        g = function g() {
      r.removeClass("secondary-visible-pf"), a.removeClass("secondary-visible-pf"), r.find(".secondary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-secondary-nav-pf"), r.find(".mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      }), r.find(".is-hover").each(function (e, n) {
        t(n).removeClass("is-hover");
      });
    },
        m = function m(e) {
      t(".nav-pf-vertical .list-group-item.active").removeClass("active"), e.addClass("active").parents(".list-group-item").addClass("active");
    },
        v = function v() {
      h() ? (r.removeClass("show-mobile-nav"), g(), r.find(".mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      })) : p();
    },
        b = function b(e, n) {
      e ? (n.addClass("collapsed"), r.addClass("collapsed-secondary-nav-pf"), a.addClass("collapsed-secondary-nav-pf")) : (n ? n.removeClass("collapsed") : r.find('[data-toggle="collapse-secondary-nav"]').each(function (e, n) {
        t(n).removeClass("collapsed");
      }), r.removeClass("collapsed-secondary-nav-pf"), a.removeClass("collapsed-secondary-nav-pf"));
    },
        y = function y(e, n) {
      e ? (n.addClass("collapsed"), r.addClass("collapsed-tertiary-nav-pf"), a.addClass("collapsed-tertiary-nav-pf"), b(!1)) : (n ? n.removeClass("collapsed") : r.find('[data-toggle="collapse-tertiary-nav"]').each(function (e, n) {
        t(n).removeClass("collapsed");
      }), r.removeClass("collapsed-tertiary-nav-pf"), a.removeClass("collapsed-tertiary-nav-pf"));
    },
        x = function x(e, n) {
      t(document).find(".list-group-item.mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      }), t(document).find(".list-group-item.mobile-secondary-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-secondary-item-pf");
      }), e ? (e.addClass("mobile-nav-item-pf"), n ? (n.addClass("mobile-secondary-item-pf"), r.removeClass("show-mobile-secondary"), r.addClass("show-mobile-tertiary")) : (r.addClass("show-mobile-secondary"), r.removeClass("show-mobile-tertiary"))) : (r.removeClass("show-mobile-secondary"), r.removeClass("show-mobile-tertiary"));
    },
        w = function w() {
      r.hasClass("hidden") || (r.addClass("hidden"), r.removeClass("collapsed"), a.removeClass("collapsed-nav"), a.addClass("hidden-nav"), b(!1), y(!1), u = !1);
    },
        _ = function _() {
      r.removeClass("hidden show-mobile-nav"), a.removeClass("hidden-nav");
    },
        C = function C() {
      var e,
          n = t(window).width();
      l && (n < t.pfBreakpoints.tablet && !u ? w() : r.hasClass("hidden") && _(), n < t.pfBreakpoints.desktop ? (c || (r.addClass("collapsed"), a.addClass("collapsed-nav")), n >= t.pfBreakpoints.tablet && g(), c = !0) : (e = c && r.find(".secondary-nav-item-pf.active").length > 0, c = !1, e && p()), u ? (r.addClass("collapsed"), a.addClass("collapsed-nav")) : (r.removeClass("collapsed"), a.removeClass("collapsed-nav")));
    },
        k = function k() {
      r.addClass("collapsed"), a.addClass("collapsed-nav"), c && g(), u = !0;
    },
        T = function T() {
      t("html").addClass("transitions");
    },
        S = function S() {
      r.addClass("force-hide-secondary-nav-pf"), setTimeout(function () {
        r.removeClass("force-hide-secondary-nav-pf");
      }, 500);
    };

    return t.fn.setupVerticalNavigation.self || (t.fn.setupVerticalNavigation.self = {
      hideMenu: function hideMenu() {
        l = !1, w();
      },
      showMenu: function showMenu() {
        l = !0, _();
      },
      isVisible: function isVisible() {
        return l;
      }
    }, t(window).on("resize", function () {
      C(), T();
    }), function (e) {
      var i;
      r.addClass("hide-nav-pf"), a.addClass("hide-nav-pf"), C(), s.on("click", function (e) {
        var i;
        T(), h() ? r.hasClass("show-mobile-nav") ? r.removeClass("show-mobile-nav") : (x(), r.addClass("show-mobile-nav"), n || (i = t(".drawer-pf")).length && (t(".drawer-pf-trigger").removeClass("open"), i.addClass("hide"))) : r.hasClass("collapsed") ? (o.rememberOpenState && window[d].setItem("patternfly-navigation-primary", "expanded"), r.removeClass("collapsed"), a.removeClass("collapsed-nav"), u = !1, c || f(100)) : (o.rememberOpenState && window[d].setItem("patternfly-navigation-primary", "collapsed"), k());
      }), i = e, t(document).find(".nav-pf-vertical .list-group-item").each(function (e, n) {
        var o,
            s = t(n),
            l = s.closest('[class*="nav-pf-"]');
        l.hasClass("nav-pf-vertical") ? o = function o(e) {
          var n,
              o,
              a = t(this);
          a.hasClass("secondary-nav-item-pf") ? h() ? x(a) : i && (o = n = s.find(".nav-pf-secondary-nav > .list-group > .list-group-item").eq(0), n.hasClass("tertiary-nav-item-pf") && (o = n.find(".nav-pf-tertiary-nav > .list-group > .list-group-item").eq(0)), m(o), e.stopImmediatePropagation()) : (g(), h() && (x(), r.removeClass("show-mobile-nav")), i && (m(a), e.stopImmediatePropagation()));
        } : l.hasClass("nav-pf-secondary-nav") ? o = function o(e) {
          var n,
              o,
              a = t(this);
          a.hasClass("tertiary-nav-item-pf") ? h() ? (o = s.parents(".list-group-item"), x(a, o), e.stopImmediatePropagation()) : i && (n = s.find(".nav-pf-tertiary-nav > .list-group > .list-group-item").eq(0), m(n), e.stopImmediatePropagation()) : (h() && (x(), r.removeClass("show-mobile-nav")), v(), i && (m(s), g(), e.stopImmediatePropagation()));
        } : l.hasClass("nav-pf-tertiary-nav") && (o = function o(e) {
          h() && (x(), r.removeClass("show-mobile-nav")), v(), i && (m(s), r.removeClass("tertiary-visible-pf"), a.removeClass("tertiary-visible-pf"), r.find(".tertiary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-tertiary-nav-pf"), r.find(".mobile-nav-item-pf").each(function (e, n) {
            t(n).removeClass("mobile-nav-item-pf");
          }), r.find(".is-hover").each(function (e, n) {
            t(n).removeClass("is-hover");
          }), g(), e.stopImmediatePropagation());
        }), s.on("click.pf.secondarynav.data-api", o);
      }), t(document).find(".secondary-nav-item-pf").each(function (e, n) {
        var a = t(n);
        a.on("click.pf.secondarynav.data-api", '[data-toggle="collapse-secondary-nav"]', function (e) {
          var n = t(this);
          h() ? (x(), e.stopImmediatePropagation()) : n.hasClass("collapsed") ? (o.rememberOpenState && (window[d].setItem("patternfly-navigation-secondary", "expanded"), window[d].setItem("patternfly-navigation-tertiary", "expanded")), b(!1, n), S()) : (o.rememberOpenState && window[d].setItem("patternfly-navigation-secondary", "collapsed"), b(!0, n)), r.removeClass("hover-secondary-nav-pf"), i && e.stopImmediatePropagation();
        }), a.find(".tertiary-nav-item-pf").each(function (e, n) {
          t(n).on("click.pf.tertiarynav.data-api", '[data-toggle="collapse-tertiary-nav"]', function (e) {
            var n = t(this);
            h() ? (x(a), e.stopImmediatePropagation()) : n.hasClass("collapsed") ? (o.rememberOpenState && (window[d].setItem("patternfly-navigation-secondary", "expanded"), window[d].setItem("patternfly-navigation-tertiary", "expanded")), y(!1, n), S()) : (o.rememberOpenState && window[d].setItem("patternfly-navigation-tertiary", "collapsed"), y(!0, n)), r.removeClass("hover-secondary-nav-pf"), r.removeClass("hover-tertiary-nav-pf"), i && e.stopImmediatePropagation();
          });
        });
      }), t(document).on("mouseenter.pf.tertiarynav.data-api", ".secondary-nav-item-pf", function (e) {
        var n = t(this);
        h() || (void 0 !== n[0].navUnHoverTimeout ? (clearTimeout(n[0].navUnHoverTimeout), n[0].navUnHoverTimeout = void 0) : void 0 === n[0].navHoverTimeout && (n[0].navHoverTimeout = setTimeout(function () {
          r.addClass("hover-secondary-nav-pf"), n.addClass("is-hover"), n[0].navHoverTimeout = void 0;
        }, o.hoverDelay)));
      }), t(document).on("mouseleave.pf.tertiarynav.data-api", ".secondary-nav-item-pf", function (e) {
        var n = t(this);
        void 0 !== n[0].navHoverTimeout ? (clearTimeout(n[0].navHoverTimeout), n[0].navHoverTimeout = void 0) : void 0 === n[0].navUnHoverTimeout && r.find(".secondary-nav-item-pf.is-hover").length > 0 && (n[0].navUnHoverTimeout = setTimeout(function () {
          r.find(".secondary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-secondary-nav-pf"), n.removeClass("is-hover"), n[0].navUnHoverTimeout = void 0;
        }, o.hideDelay));
      }), t(document).on("mouseover.pf.tertiarynav.data-api", ".tertiary-nav-item-pf", function (e) {
        var n = t(this);
        h() || (void 0 !== n[0].navUnHoverTimeout ? (clearTimeout(n[0].navUnHoverTimeout), n[0].navUnHoverTimeout = void 0) : void 0 === n[0].navHoverTimeout && (n[0].navHoverTimeout = setTimeout(function () {
          r.addClass("hover-tertiary-nav-pf"), n.addClass("is-hover"), n[0].navHoverTimeout = void 0;
        }, o.hoverDelay)));
      }), t(document).on("mouseout.pf.tertiarynav.data-api", ".tertiary-nav-item-pf", function (e) {
        var n = t(this);
        void 0 !== n[0].navHoverTimeout ? (clearTimeout(n[0].navHoverTimeout), n[0].navHoverTimeout = void 0) : void 0 === n[0].navUnHoverTimeout && (n[0].navUnHoverTimeout = setTimeout(function () {
          r.find(".tertiary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-tertiary-nav-pf"), n.removeClass("is-hover"), n[0].navUnHoverTimeout = void 0;
        }, o.hideDelay));
      }), t('.nav-pf-vertical [data-toggle="tooltip"]').tooltip({
        container: "body",
        placement: "bottom",
        delay: {
          show: "500",
          hide: "200"
        },
        template: '<div class="nav-pf-vertical-tooltip tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
      }), t(".nav-pf-vertical").on("show.bs.tooltip", function (e) {
        return t(this).hasClass("collapsed");
      }), o.rememberOpenState && (h() || ("collapsed" === window[d].getItem("patternfly-navigation-primary") && k(), t(".nav-pf-vertical.nav-pf-vertical-collapsible-menus").length > 0 && ("collapsed" === window[d].getItem("patternfly-navigation-secondary") && b(!0, t(".secondary-nav-item-pf.active [data-toggle=collapse-secondary-nav]")), "collapsed" === window[d].getItem("patternfly-navigation-tertiary") && y(!0, t(".tertiary-nav-item-pf.active [data-toggle=collapse-tertiary-nav]"))))), r.removeClass("hide-nav-pf"), a.removeClass("hide-nav-pf"), f(250);
    }(e)), t.fn.setupVerticalNavigation.self;
  };
}(jQuery), function (t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t();
}(function () {
  return function t(e, n, i) {
    function o(a, s) {
      if (!n[a]) {
        if (!e[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (r) return r(a, !0);
          var u = new Error("Cannot find module '" + a + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var c = n[a] = {
          exports: {}
        };
        e[a][0].call(c.exports, function (t) {
          return o(e[a][1][t] || t);
        }, c, c.exports, t, e, n, i);
      }

      return n[a].exports;
    }

    for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) {
      o(i[a]);
    }

    return o;
  }({
    1: [function (t, e, n) {}, {}],
    2: [function (t, e, n) {
      var i = t(6);

      function o(t) {
        if (t) {
          var e = [0, 0, 0],
              n = 1,
              o = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (o) {
            o = o[1];

            for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(o[r] + o[r], 16);
            }
          } else if (o = t.match(/^#([a-fA-F0-9]{6})$/i)) for (o = o[1], r = 0; r < e.length; r++) {
            e[r] = parseInt(o.slice(2 * r, 2 * r + 2), 16);
          } else if (o = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(o[r + 1]);
            }

            n = parseFloat(o[4]);
          } else if (o = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = Math.round(2.55 * parseFloat(o[r + 1]));
            }

            n = parseFloat(o[4]);
          } else if (o = t.match(/(\w+)/)) {
            if ("transparent" == o[1]) return [0, 0, 0, 0];
            if (!(e = i[o[1]])) return;
          }

          for (r = 0; r < e.length; r++) {
            e[r] = c(e[r], 0, 255);
          }

          return n = n || 0 == n ? c(n, 0, 1) : 1, e[3] = n, e;
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function a(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function c(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }

      function d(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      e.exports = {
        getRgba: o,
        getHsla: r,
        getRgb: function getRgb(t) {
          var e = o(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = r(t);
          return e && e.slice(0, 3);
        },
        getHwb: a,
        getAlpha: function getAlpha(t) {
          var e = o(t);
          return e ? e[3] : (e = r(t)) ? e[3] : (e = a(t)) ? e[3] : void 0;
        },
        hexString: function hexString(t) {
          return "#" + d(t[0]) + d(t[1]) + d(t[2]);
        },
        rgbString: function rgbString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: s,
        percentString: function percentString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? l(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? u(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: u,
        hwbString: function hwbString(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return h[t.slice(0, 3)];
        }
      };
      var h = {};

      for (var f in i) {
        h[i[f]] = f;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, n) {
      var i = t(5),
          o = t(2),
          r = function r(t) {
        return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }, void ("string" == typeof t ? (e = o.getRgba(t)) ? this.setValues("rgb", e) : (e = o.getHsla(t)) ? this.setValues("hsl", e) : (e = o.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
        var e;
      };

      r.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return o.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return o.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return o.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return o.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return o.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return o.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return o.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return o.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              n = t.luminosity();
          return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              n = (e[0] + t) % 360;
          return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var n = t,
              i = void 0 === e ? .5 : e,
              o = 2 * i - 1,
              r = this.alpha() - n.alpha(),
              a = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              s = 1 - a;
          return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              n = new r(),
              i = this.values,
              o = n.values;

          for (var a in i) {
            i.hasOwnProperty(a) && ("[object Array]" === (e = {}.toString.call(t = i[a])) ? o[a] = t.slice(0) : "[object Number]" === e ? o[a] = t : console.error("unexpected color value:", t));
          }

          return n;
        }
      }, r.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, r.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, r.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
          n[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (n.a = e.alpha), n;
      }, r.prototype.setValues = function (t, e) {
        var n,
            o,
            r = this.values,
            a = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (n = 0; n < t.length; n++) {
            r[t][n] = e[t.charAt(n)];
          }

          l = e.a;
        } else if (void 0 !== e[a[t][0]]) {
          var u = a[t];

          for (n = 0; n < t.length; n++) {
            r[t][n] = e[u[n]];
          }

          l = e.alpha;
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;

        for (n = 0; n < t.length; n++) {
          o = Math.max(0, Math.min(s[t][n], r[t][n])), r[t][n] = Math.round(o);
        }

        for (var c in a) {
          c !== t && (r[c] = i[t][c](r[t]));
        }

        return !0;
      }, r.prototype.setSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
      }, r.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = r), e.exports = r;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, n) {
      function i(t) {
        var e,
            n,
            i = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            a = Math.min(i, o, r),
            s = Math.max(i, o, r),
            l = s - a;
        return s == a ? e = 0 : i == s ? e = (o - r) / l : o == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n];
      }

      function o(t) {
        var e,
            n,
            i = t[0],
            o = t[1],
            r = t[2],
            a = Math.min(i, o, r),
            s = Math.max(i, o, r),
            l = s - a;
        return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : i == s ? e = (o - r) / l : o == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10];
      }

      function a(t) {
        var e = t[0],
            n = t[1],
            o = t[2];
        return [i(t)[0], 1 / 255 * Math.min(e, Math.min(n, o)) * 100, 100 * (o = 1 - 1 / 255 * Math.max(e, Math.max(n, o)))];
      }

      function s(t) {
        var e,
            n = t[0] / 255,
            i = t[1] / 255,
            o = t[2] / 255;
        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - o))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e];
      }

      function l(t) {
        return T[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)];
      }

      function c(t) {
        var e = u(t),
            n = e[0],
            i = e[1],
            o = e[2];
        return i /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
      }

      function d(t) {
        var e,
            n,
            i,
            o,
            r,
            a = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o[u] = 255 * (r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e);
        }

        return o;
      }

      function h(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            o = Math.floor(e) % 6,
            r = e - Math.floor(e),
            a = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r));

        switch (i *= 255, o) {
          case 0:
            return [i, l, a];

          case 1:
            return [s, i, a];

          case 2:
            return [a, i, l];

          case 3:
            return [a, s, i];

          case 4:
            return [l, a, i];

          case 5:
            return [i, a, s];
        }
      }

      function f(t) {
        var e,
            n,
            i,
            o,
            a = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;

        switch (u > 1 && (s /= u, l /= u), i = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), e) {
          default:
          case 6:
          case 0:
            r = n, g = o, b = s;
            break;

          case 1:
            r = o, g = n, b = s;
            break;

          case 2:
            r = s, g = n, b = o;
            break;

          case 3:
            r = s, g = o, b = n;
            break;

          case 4:
            r = o, g = s, b = n;
            break;

          case 5:
            r = n, g = s, b = o;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function p(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            i = t[3] / 100;
        return [255 * (1 - Math.min(1, t[0] / 100 * (1 - i) + i)), 255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))];
      }

      function m(t) {
        var e,
            n,
            i,
            o = t[0] / 100,
            r = t[1] / 100,
            a = t[2] / 100;
        return n = -.9689 * o + 1.8758 * r + .0415 * a, i = .0557 * o + -.204 * r + 1.057 * a, e = (e = 3.2406 * o + -1.5372 * r + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))];
      }

      function v(t) {
        var e = t[0],
            n = t[1],
            i = t[2];
        return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))];
      }

      function y(t) {
        var e,
            n,
            i,
            o,
            r = t[0],
            a = t[1],
            s = t[2];
        return r <= 8 ? o = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)];
      }

      function x(t) {
        var e,
            n = t[0],
            i = t[1],
            o = t[2];
        return (e = 360 * Math.atan2(o, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + o * o), e];
      }

      function w(t) {
        return m(y(t));
      }

      function _(t) {
        var e,
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)];
      }

      function C(t) {
        return k[t];
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: o,
        rgb2hwb: a,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: u,
        rgb2lab: c,
        rgb2lch: function rgb2lch(t) {
          return x(c(t));
        },
        hsl2rgb: d,
        hsl2hsv: function hsl2hsv(t) {
          var e = t[1] / 100,
              n = t[2] / 100;
          return 0 === n ? [0, 0, 0] : [t[0], 2 * (e *= (n *= 2) <= 1 ? n : 2 - n) / (n + e) * 100, (n + e) / 2 * 100];
        },
        hsl2hwb: function hsl2hwb(t) {
          return a(d(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return s(d(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return l(d(t));
        },
        hsv2rgb: h,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              n,
              i = t[1] / 100,
              o = t[2] / 100;
          return e = i * o, [t[0], 100 * (e = (e /= (n = (2 - i) * o) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)];
        },
        hsv2hwb: function hsv2hwb(t) {
          return a(h(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return s(h(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return l(h(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return i(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return o(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        },
        cmyk2rgb: p,
        cmyk2hsl: function cmyk2hsl(t) {
          return i(p(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return o(p(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return a(p(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return l(p(t));
        },
        keyword2rgb: C,
        keyword2hsl: function keyword2hsl(t) {
          return i(C(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return o(C(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return a(C(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return s(C(t));
        },
        keyword2lab: function keyword2lab(t) {
          return c(C(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(C(t));
        },
        xyz2rgb: m,
        xyz2lab: v,
        xyz2lch: function xyz2lch(t) {
          return x(v(t));
        },
        lab2xyz: y,
        lab2rgb: w,
        lab2lch: x,
        lch2lab: _,
        lch2xyz: function lch2xyz(t) {
          return y(_(t));
        },
        lch2rgb: function lch2rgb(t) {
          return w(_(t));
        }
      };
      var k = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          T = {};

      for (var S in k) {
        T[JSON.stringify(k[S])] = S;
      }
    }, {}],
    5: [function (t, e, n) {
      var i = t(4),
          o = function o() {
        return new u();
      };

      for (var r in i) {
        o[r + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(r);

        var a = /(\w+)2(\w+)/.exec(r),
            s = a[1],
            l = a[2];

        (o[s] = o[s] || {})[l] = o[r] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var n = i[t](e);
            if ("string" == typeof n || void 0 === n) return n;

            for (var o = 0; o < n.length; o++) {
              n[o] = Math.round(n[o]);
            }

            return n;
          };
        }(r);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var n = this.space;
          e = o[n][t](this.convs[n]), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = o;
    }, {
      4: 4
    }],
    6: [function (t, e, n) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, n) {
      var i = t(30)();
      i.helpers = t(46), t(28)(i), i.Animation = t(22), i.animationService = t(23), i.defaults = t(26), i.Element = t(27), i.elements = t(41), i.Interaction = t(29), i.layouts = t(31), i.platform = t(49), i.plugins = t(32), i.Scale = t(33), i.scaleService = t(34), i.Ticks = t(35), i.Tooltip = t(36), t(24)(i), t(25)(i), t(56)(i), t(54)(i), t(55)(i), t(57)(i), t(58)(i), t(59)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
      var o = t(50);

      for (var r in o) {
        o.hasOwnProperty(r) && i.plugins.register(o[r]);
      }

      i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = o.legend._element, i.Title = o.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      41: 41,
      46: 46,
      49: 49,
      50: 50,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      59: 59,
      8: 8,
      9: 9
    }],
    8: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, n) {
          return n.type = "bar", new t(e, n);
        };
      };
    }, {}],
    9: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, n) {
          return n.type = "bubble", new t(e, n);
        };
      };
    }, {}],
    10: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, n) {
          return n.type = "doughnut", new t(e, n);
        };
      };
    }, {}],
    11: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, n) {
          return n.type = "line", new t(e, n);
        };
      };
    }, {}],
    12: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, n) {
          return n.type = "polarArea", new t(e, n);
        };
      };
    }, {}],
    13: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, n) {
          return n.type = "radar", new t(e, n);
        };
      };
    }, {}],
    14: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, n) {
          return n.type = "scatter", new t(e, n);
        };
      };
    }, {}],
    15: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), i._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var n = "";
              return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: o.Rectangle,
          initialize: function initialize() {
            var e;
            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                n,
                i = this.getMeta().data;

            for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) {
              this.updateElement(i[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                o = i.chart,
                a = i.getMeta(),
                s = i.getDataset(),
                l = t.custom || {},
                u = o.options.elements.rectangle;
            t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
              datasetLabel: s.label,
              label: o.data.labels[e],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
            }, i.updateElementGeometry(t, e, n), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, n) {
            var i = this,
                o = t._model,
                r = i.getValueScale(),
                a = r.getBasePixel(),
                s = r.isHorizontal(),
                l = i._ruler || i.getRuler(),
                u = i.calculateBarValuePixels(i.index, e),
                c = i.calculateBarIndexPixels(i.index, e, l);
            o.horizontal = s, o.base = n ? a : u.base, o.x = s ? n ? a : u.head : c.center, o.y = s ? c.center : n ? a : u.head, o.height = s ? c.size : void 0, o.width = s ? void 0 : c.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          _getStacks: function _getStacks(t) {
            var e,
                n,
                i = this.chart,
                o = this.getIndexScale().options.stacked,
                r = void 0 === t ? i.data.datasets.length : t + 1,
                a = [];

            for (e = 0; e < r; ++e) {
              (n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === a.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
            }

            return a;
          },
          getStackCount: function getStackCount() {
            return this._getStacks().length;
          },
          getStackIndex: function getStackIndex(t, e) {
            var n = this._getStacks(t),
                i = void 0 !== e ? n.indexOf(e) : -1;

            return -1 === i ? n.length - 1 : i;
          },
          getRuler: function getRuler() {
            var t,
                e,
                n = this.getIndexScale(),
                i = this.getStackCount(),
                o = this.index,
                a = n.isHorizontal(),
                s = a ? n.left : n.top,
                l = s + (a ? n.width : n.height),
                u = [];

            for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              u.push(n.getPixelForValue(null, t, o));
            }

            return {
              min: r.isNullOrUndef(n.options.barThickness) ? function (t, e) {
                var n,
                    i,
                    o,
                    r,
                    a = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();

                for (o = 1, r = e.length; o < r; ++o) {
                  a = Math.min(a, e[o] - e[o - 1]);
                }

                for (o = 0, r = s.length; o < r; ++o) {
                  i = t.getPixelForTick(o), a = o > 0 ? Math.min(a, i - n) : a, n = i;
                }

                return a;
              }(n, u) : -1,
              pixels: u,
              start: s,
              end: l,
              stackCount: i,
              scale: n
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var n,
                i,
                o,
                r,
                a,
                s,
                l = this.chart,
                u = this.getMeta(),
                c = this.getValueScale(),
                d = l.data.datasets,
                h = c.getRightValue(d[t].data[e]),
                f = c.options.stacked,
                p = u.stack,
                g = 0;
            if (f || void 0 === f && void 0 !== p) for (n = 0; n < t; ++n) {
              (i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (o = c.getRightValue(d[n].data[e]), (h < 0 && o < 0 || h >= 0 && o > 0) && (g += o));
            }
            return r = c.getPixelForValue(g), {
              size: s = ((a = c.getPixelForValue(g + h)) - r) / 2,
              base: r,
              head: a,
              center: a + s / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
            var i = n.scale.options,
                o = "flex" === i.barThickness ? function (t, e, n) {
              var i = e.pixels,
                  o = i[t],
                  r = t > 0 ? i[t - 1] : null,
                  a = t < i.length - 1 ? i[t + 1] : null,
                  s = n.categoryPercentage;
              return null === r && (r = o - (null === a ? e.end - o : a - o)), null === a && (a = o + o - r), {
                chunk: (a - r) / 2 * s / e.stackCount,
                ratio: n.barPercentage,
                start: o - (o - r) / 2 * s
              };
            }(e, n, i) : function (t, e, n) {
              var i,
                  o,
                  a = n.barThickness,
                  s = e.stackCount,
                  l = e.pixels[t];
              return r.isNullOrUndef(a) ? (i = e.min * n.categoryPercentage, o = n.barPercentage) : (i = a * s, o = 1), {
                chunk: i / s,
                ratio: o,
                start: l - i / 2
              };
            }(e, n, i),
                a = this.getStackIndex(t, this.getMeta().stack),
                s = o.start + o.chunk * a + o.chunk / 2,
                l = Math.min(r.valueOrDefault(i.maxBarThickness, 1 / 0), o.chunk * o.ratio);
            return {
              base: s - l / 2,
              head: s + l / 2,
              center: s,
              size: l
            };
          },
          draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                n = this.getMeta().data,
                i = this.getDataset(),
                o = n.length,
                a = 0;

            for (r.canvas.clipArea(t.ctx, t.chartArea); a < o; ++a) {
              isNaN(e.getRightValue(i.data[a])) || n[a].draw();
            }

            r.canvas.unclipArea(t.ctx);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    16: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.datasets[t.datasetIndex].data[t.index].r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: o.Point,
          update: function update(t) {
            var e = this,
                n = e.getMeta();
            r.each(n.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                o = i.getMeta(),
                r = t.custom || {},
                a = i.getScaleForId(o.xAxisID),
                s = i.getScaleForId(o.yAxisID),
                l = i._resolveElementOptions(t, e),
                u = i.getDataset().data[e],
                c = i.index,
                d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);

            t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              radius: n ? 0 : l.radius,
              skip: r.skip || isNaN(d) || isNaN(h),
              x: d,
              y: h
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                n = t._options;
            t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius
            }, e.backgroundColor = r.valueOrDefault(n.hoverBackgroundColor, r.getHoverColor(n.backgroundColor)), e.borderColor = r.valueOrDefault(n.hoverBorderColor, r.getHoverColor(n.borderColor)), e.borderWidth = r.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var n,
                i,
                o,
                a = this.chart,
                s = a.data.datasets[this.index],
                l = t.custom || {},
                u = a.options.elements.point,
                c = r.options.resolve,
                d = s.data[e],
                h = {},
                f = {
              chart: a,
              dataIndex: e,
              dataset: s,
              datasetIndex: this.index
            },
                p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];

            for (n = 0, i = p.length; n < i; ++n) {
              h[o = p[n]] = c([l[o], s[o], u[o]], f, e);
            }

            return h.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], f, e), h;
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    17: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              o = n.labels;
          if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var o = t.getDatasetMeta(0),
                    a = e.datasets[0],
                    s = o.data[i],
                    l = s && s.custom || {},
                    u = r.valueAtIndexOrDefault,
                    c = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(a.backgroundColor, i, c.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(a.borderColor, i, c.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(a.borderWidth, i, c.borderWidth),
                  hidden: isNaN(a.data[i]) || o.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                o,
                r = e.index,
                a = this.chart;

            for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
              (o = a.getDatasetMeta(n)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
            }

            a.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var n = e.labels[t.index],
                  i = ": " + e.datasets[t.datasetIndex].data[t.index];
              return r.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
            }
          }
        }
      }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: o.Arc,
          linkScales: r.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, n = 0; n < t; ++n) {
              this.chart.isDatasetVisible(n) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                n = e.chart,
                i = n.chartArea,
                o = n.options,
                a = o.elements.arc,
                s = i.right - i.left - a.borderWidth,
                l = i.bottom - i.top - a.borderWidth,
                u = Math.min(s, l),
                c = {
              x: 0,
              y: 0
            },
                d = e.getMeta(),
                h = o.cutoutPercentage,
                f = o.circumference;

            if (f < 2 * Math.PI) {
              var p = o.rotation % (2 * Math.PI),
                  g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                  m = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  v = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  b = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                  y = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                  x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                  w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                  _ = h / 100,
                  C = {
                x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : _), v.x * (v.x < 0 ? 1 : _)),
                y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : _), v.y * (v.y < 0 ? 1 : _))
              },
                  k = {
                x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : _), v.x * (v.x > 0 ? 1 : _)),
                y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : _), v.y * (v.y > 0 ? 1 : _))
              },
                  T = {
                width: .5 * (k.x - C.x),
                height: .5 * (k.y - C.y)
              };

              u = Math.min(s / T.width, l / T.height), c = {
                x: -.5 * (k.x + C.x),
                y: -.5 * (k.y + C.y)
              };
            }

            n.borderWidth = e.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), r.each(d.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                o = i.chart,
                a = o.chartArea,
                s = o.options,
                l = s.animation,
                u = (a.left + a.right) / 2,
                c = (a.top + a.bottom) / 2,
                d = s.rotation,
                h = s.rotation,
                f = i.getDataset(),
                p = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI));
            r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _model: {
                x: u + o.offsetX,
                y: c + o.offsetY,
                startAngle: d,
                endAngle: h,
                circumference: p,
                outerRadius: n && l.animateScale ? 0 : i.outerRadius,
                innerRadius: n && l.animateScale ? 0 : i.innerRadius,
                label: (0, r.valueAtIndexOrDefault)(f.label, e, o.data.labels[e])
              }
            });
            var g = t._model,
                m = t.custom || {},
                v = r.valueAtIndexOrDefault,
                b = this.chart.options.elements.arc;
            g.backgroundColor = m.backgroundColor ? m.backgroundColor : v(f.backgroundColor, e, b.backgroundColor), g.borderColor = m.borderColor ? m.borderColor : v(f.borderColor, e, b.borderColor), g.borderWidth = m.borderWidth ? m.borderWidth : v(f.borderWidth, e, b.borderWidth), n && l.animateRotate || (g.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), t.pivot();
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return r.each(n.data, function (n, o) {
              t = e.data[o], isNaN(t) || n.hidden || (i += Math.abs(t));
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, n, i = 0, o = this.index, r = t.length, a = 0; a < r; a++) {
              i = (n = t[a]._chart ? t[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (i = (e = t[a]._model ? t[a]._model.borderWidth : 0) > i ? e : i) ? n : i;
            }

            return i;
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    18: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return r.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: o.Line,
          dataElementType: o.Point,
          update: function update(t) {
            var n,
                i,
                o,
                a = this,
                s = a.getMeta(),
                l = s.dataset,
                u = s.data || [],
                c = a.chart.options,
                d = c.elements.line,
                h = a.getScaleForId(s.yAxisID),
                f = a.getDataset(),
                p = e(f, c);

            for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = a.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
              tension: o.tension ? o.tension : r.valueOrDefault(f.lineTension, d.tension),
              backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || d.backgroundColor,
              borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || d.borderWidth,
              borderColor: o.borderColor ? o.borderColor : f.borderColor || d.borderColor,
              borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
              borderDash: o.borderDash ? o.borderDash : f.borderDash || d.borderDash,
              borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
              borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
              fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : d.fill,
              steppedLine: o.steppedLine ? o.steppedLine : r.valueOrDefault(f.steppedLine, d.stepped),
              cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
            }, l.pivot()), n = 0, i = u.length; n < i; ++n) {
              a.updateElement(u[n], n, t);
            }

            for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) {
              u[n].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var n = this.chart.options.elements.point.backgroundColor,
                i = this.getDataset(),
                o = t.custom || {};
            return o.backgroundColor ? n = o.backgroundColor : i.pointBackgroundColor ? n = r.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var n = this.chart.options.elements.point.borderColor,
                i = this.getDataset(),
                o = t.custom || {};
            return o.borderColor ? n = o.borderColor : i.pointBorderColor ? n = r.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var n = this.chart.options.elements.point.borderWidth,
                i = this.getDataset(),
                o = t.custom || {};
            return isNaN(o.borderWidth) ? !isNaN(i.pointBorderWidth) || r.isArray(i.pointBorderWidth) ? n = r.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = o.borderWidth, n;
          },
          getPointRotation: function getPointRotation(t, e) {
            var n = this.chart.options.elements.point.rotation,
                i = this.getDataset(),
                o = t.custom || {};
            return isNaN(o.rotation) ? isNaN(i.pointRotation) && !r.isArray(i.pointRotation) || (n = r.valueAtIndexOrDefault(i.pointRotation, e, n)) : n = o.rotation, n;
          },
          updateElement: function updateElement(t, e, n) {
            var i,
                o,
                a = this,
                s = a.getMeta(),
                l = t.custom || {},
                u = a.getDataset(),
                c = a.index,
                d = u.data[e],
                h = a.getScaleForId(s.yAxisID),
                f = a.getScaleForId(s.xAxisID),
                p = a.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof d ? d : NaN, e, c), o = n ? h.getBasePixel() : a.calculatePointY(d, e, c), t._xScale = f, t._yScale = h, t._datasetIndex = c, t._index = e, t._model = {
              x: i,
              y: o,
              skip: l.skip || isNaN(i) || isNaN(o),
              radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
              pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
              rotation: a.getPointRotation(t, e),
              backgroundColor: a.getPointBackgroundColor(t, e),
              borderColor: a.getPointBorderColor(t, e),
              borderWidth: a.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
              hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, n) {
            var i,
                o,
                r,
                a = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                c = 0;

            if (l.options.stacked) {
              for (i = 0; i < n; i++) {
                if (o = a.data.datasets[i], "line" === (r = a.getDatasetMeta(i)).type && r.yAxisID === l.id && a.isDatasetVisible(i)) {
                  var d = Number(l.getRightValue(o.data[e]));
                  d < 0 ? c += d || 0 : u += d || 0;
                }
              }

              var h = Number(l.getRightValue(t));
              return l.getPixelForValue(h < 0 ? c + h : u + h);
            }

            return l.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                n,
                i,
                o = this.getMeta(),
                a = this.chart.chartArea,
                s = o.data || [];

            function l(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }

            if (o.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === o.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              n = s[t]._model, i = r.splineCurve(r.previousItem(s, t)._model, n, r.nextItem(s, t)._model, o.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
            }
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, a.left, a.right), n.controlPointPreviousY = l(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = l(n.controlPointNextX, a.left, a.right), n.controlPointNextY = l(n.controlPointNextY, a.top, a.bottom);
            }
          },
          draw: function draw() {
            var t,
                n = this.chart,
                i = this.getMeta(),
                o = i.data || [],
                a = n.chartArea,
                s = o.length,
                l = 0;

            for (e(this.getDataset(), n.options) && (r.canvas.clipArea(n.ctx, {
              left: a.left,
              right: a.right,
              top: a.top - (t = (i.dataset._model.borderWidth || 0) / 2),
              bottom: a.bottom + t
            }), i.dataset.draw(), r.canvas.unclipArea(n.ctx)); l < s; ++l) {
              o[l].draw(a);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                o = t._model;
            t.$previousStyle = {
              backgroundColor: o.backgroundColor,
              borderColor: o.borderColor,
              borderWidth: o.borderWidth,
              radius: o.radius
            }, o.backgroundColor = i.hoverBackgroundColor || r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor || r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth || r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth), o.radius = i.hoverRadius || r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius);
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    19: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              o = n.labels;
          if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var o = t.getDatasetMeta(0),
                    a = e.datasets[0],
                    s = o.data[i].custom || {},
                    l = r.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, i, u.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, i, u.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, i, u.borderWidth),
                  hidden: isNaN(a.data[i]) || o.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                o,
                r = e.index,
                a = this.chart;

            for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
              (o = a.getDatasetMeta(n)).data[r].hidden = !o.data[r].hidden;
            }

            a.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: o.Arc,
          linkScales: r.noop,
          update: function update(t) {
            var e,
                n,
                i,
                o = this,
                a = o.getDataset(),
                s = o.getMeta(),
                l = o.chart.options.startAngle || 0,
                u = o._starts = [],
                c = o._angles = [];

            for (o._updateRadius(), s.count = o.countVisibleElements(), e = 0, n = a.data.length; e < n; e++) {
              u[e] = l, i = o._computeAngle(e), c[e] = i, l += i;
            }

            r.each(s.data, function (e, n) {
              o.updateElement(e, n, t);
            });
          },
          _updateRadius: function _updateRadius() {
            var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                o = i.elements.arc,
                r = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max((r - o.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                o = i.chart,
                a = i.getDataset(),
                s = o.options,
                l = s.animation,
                u = o.scale,
                c = o.data.labels,
                d = u.xCenter,
                h = u.yCenter,
                f = s.startAngle,
                p = t.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[e]),
                g = i._starts[e],
                m = g + (t.hidden ? 0 : i._angles[e]),
                v = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[e]);
            r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: u,
              _model: {
                x: d,
                y: h,
                innerRadius: 0,
                outerRadius: n ? v : p,
                startAngle: n && l.animateRotate ? f : g,
                endAngle: n && l.animateRotate ? f : m,
                label: r.valueAtIndexOrDefault(c, e, c[e])
              }
            });
            var b = this.chart.options.elements.arc,
                y = t.custom || {},
                x = r.valueAtIndexOrDefault,
                w = t._model;
            w.backgroundColor = y.backgroundColor ? y.backgroundColor : x(a.backgroundColor, e, b.backgroundColor), w.borderColor = y.borderColor ? y.borderColor : x(a.borderColor, e, b.borderColor), w.borderWidth = y.borderWidth ? y.borderWidth : x(a.borderWidth, e, b.borderWidth), t.pivot();
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return r.each(e.data, function (e, i) {
              isNaN(t.data[i]) || e.hidden || n++;
            }), n;
          },
          _computeAngle: function _computeAngle(t) {
            var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                o = e.getMeta();
            return isNaN(i.data[t]) || o.data[t].hidden ? 0 : r.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / n], {
              chart: e.chart,
              dataIndex: t,
              dataset: i,
              datasetIndex: e.index
            }, t);
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    20: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);
      i._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: o.Line,
          dataElementType: o.Point,
          linkScales: r.noop,
          update: function update(t) {
            var e = this,
                n = e.getMeta(),
                i = n.data,
                o = n.dataset.custom || {},
                a = e.getDataset(),
                s = e.chart.options.elements.line,
                l = e.chart.scale;
            void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension), r.extend(n.dataset, {
              _datasetIndex: e.index,
              _scale: l,
              _children: i,
              _loop: !0,
              _model: {
                tension: o.tension ? o.tension : r.valueOrDefault(a.lineTension, s.tension),
                backgroundColor: o.backgroundColor ? o.backgroundColor : a.backgroundColor || s.backgroundColor,
                borderWidth: o.borderWidth ? o.borderWidth : a.borderWidth || s.borderWidth,
                borderColor: o.borderColor ? o.borderColor : a.borderColor || s.borderColor,
                fill: o.fill ? o.fill : void 0 !== a.fill ? a.fill : s.fill,
                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                borderDash: o.borderDash ? o.borderDash : a.borderDash || s.borderDash,
                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : a.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : a.borderJoinStyle || s.borderJoinStyle
              }
            }), n.dataset.pivot(), r.each(i, function (n, i) {
              e.updateElement(n, i, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                o = t.custom || {},
                a = i.getDataset(),
                s = i.chart.scale,
                l = i.chart.options.elements.point,
                u = s.getPointPositionForValue(e, a.data[e]);
            void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: s,
              _model: {
                x: n ? s.xCenter : u.x,
                y: n ? s.yCenter : u.y,
                tension: o.tension ? o.tension : r.valueOrDefault(a.lineTension, i.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : r.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : r.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : r.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : r.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : r.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                rotation: o.rotation ? o.rotation : r.valueAtIndexOrDefault(a.pointRotation, e, l.rotation),
                hitRadius: o.hitRadius ? o.hitRadius : r.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
              }
            }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            r.each(e.data, function (n, i) {
              var o = n._model,
                  a = r.splineCurve(r.previousItem(e.data, i, !0)._model, o, r.nextItem(e.data, i, !0)._model, o.tension);
              o.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), n.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t.custom || {},
                i = t._index,
                o = t._model;
            t.$previousStyle = {
              backgroundColor: o.backgroundColor,
              borderColor: o.borderColor,
              borderWidth: o.borderWidth,
              radius: o.radius
            }, o.radius = n.hoverRadius ? n.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, r.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, i, r.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
          }
        });
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    21: [function (t, e, n) {
      "use strict";

      t(26)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      26: 26
    }],
    22: [function (t, e, n) {
      "use strict";

      var i = t(27);
      n = e.exports = i.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
      }), Object.defineProperty(n.prototype, "animationObject", {
        get: function get() {
          return this;
        }
      }), Object.defineProperty(n.prototype, "chartInstance", {
        get: function get() {
          return this.chart;
        },
        set: function set(t) {
          this.chart = t;
        }
      });
    }, {
      27: 27
    }],
    23: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(46);
      i._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: o.noop,
          onComplete: o.noop
        }
      }), e.exports = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        request: null,
        addAnimation: function addAnimation(t, e, n, i) {
          var o,
              r,
              a = this.animations;

          for (e.chart = t, i || (t.animating = !0), o = 0, r = a.length; o < r; ++o) {
            if (a[o].chart === t) return void (a[o] = e);
          }

          a.push(e), 1 === a.length && this.requestAnimationFrame();
        },
        cancelAnimation: function cancelAnimation(t) {
          var e = o.findIndex(this.animations, function (e) {
            return e.chart === t;
          });
          -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
        },
        requestAnimationFrame: function requestAnimationFrame() {
          var t = this;
          null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
            t.request = null, t.startDigest();
          }));
        },
        startDigest: function startDigest() {
          var t = this,
              e = Date.now(),
              n = 0;
          t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
          var i = Date.now();
          t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
        },
        advance: function advance(t) {
          for (var e, n, i = this.animations, r = 0; r < i.length;) {
            n = (e = i[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(r, 1)) : ++r;
          }
        }
      };
    }, {
      26: 26,
      46: 46
    }],
    24: [function (t, e, n) {
      "use strict";

      var i = t(22),
          o = t(23),
          r = t(26),
          a = t(46),
          s = t(29),
          l = t(31),
          u = t(49),
          c = t(32),
          d = t(34),
          h = t(36);

      e.exports = function (t) {
        function e(t) {
          return "top" === t || "bottom" === t;
        }

        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(e, n) {
            var i = this;

            n = function (t) {
              var e = (t = t || {}).data = t.data || {};
              return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(r.global, r[t.type], t.options || {}), t;
            }(n);

            var o = u.acquireContext(e, n),
                s = o && o.canvas,
                l = s && s.height,
                c = s && s.width;
            i.id = a.uid(), i.ctx = o, i.canvas = s, i.config = n, i.width = c, i.height = l, i.aspectRatio = l ? c / l : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, t.instances[i.id] = i, Object.defineProperty(i, "data", {
              get: function get() {
                return i.config.data;
              },
              set: function set(t) {
                i.config.data = t;
              }
            }), o && s ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return c.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), c.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return o.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                o = n.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(a.getMaximumWidth(i))),
                s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(i)));

            if ((e.width !== r || e.height !== s) && (i.width = e.width = r, i.height = e.height = s, i.style.width = r + "px", i.style.height = s + "px", a.retinaScale(e, n.devicePixelRatio), !t)) {
              var l = {
                width: r,
                height: s
              };
              c.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                duration: e.options.responsiveAnimationDuration
              });
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), n && (n.id = n.id || "scale");
          },
          buildOrUpdateScales: function buildOrUpdateScales() {
            var t = this,
                n = t.options,
                i = t.scales || {},
                o = [],
                r = Object.keys(i).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});
            n.scales && (o = o.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && o.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(o, function (n) {
              var o = n.options,
                  s = o.id,
                  l = a.valueOrDefault(o.type, n.dtype);
              e(o.position) !== e(n.dposition) && (o.position = n.dposition), r[s] = !0;
              var u = null;
              if (s in i && i[s].type === l) (u = i[s]).options = o, u.ctx = t.ctx, u.chart = t;else {
                var c = d.getScaleConstructor(l);
                if (!c) return;
                u = new c({
                  id: s,
                  type: l,
                  options: o,
                  ctx: t.ctx,
                  chart: t
                }), i[u.id] = u;
              }
              u.mergeTicksOptions(), n.isDefault && (t.scale = u);
            }), a.each(r, function (t, e) {
              t || delete i[e];
            }), t.scales = i, d.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                n = [],
                i = [];
            return a.each(e.data.datasets, function (o, r) {
              var a = e.getDatasetMeta(r),
                  s = o.type || e.config.type;
              if (a.type && a.type !== s && (e.destroyDatasetMeta(r), a = e.getDatasetMeta(r)), a.type = s, n.push(a.type), a.controller) a.controller.updateIndex(r), a.controller.linkScales();else {
                var l = t.controllers[a.type];
                if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                a.controller = new l(e, r), i.push(a.controller);
              }
            }, e), i;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(e) {
            var n,
                i,
                o = this;

            if (e && "object" == typeof e || (e = {
              duration: e,
              lazy: arguments[1]
            }), i = (n = o).options, a.each(n.scales, function (t) {
              l.removeBox(n, t);
            }), i = a.configMerge(t.defaults.global, t.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), c._invalidate(o), !1 !== c.notify(o, "beforeUpdate")) {
              o.tooltip._data = o.data;
              var r = o.buildOrUpdateControllers();
              a.each(o.data.datasets, function (t, e) {
                o.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(r, function (t) {
                t.reset();
              }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], c.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                duration: e.duration,
                easing: e.easing,
                lazy: e.lazy
              } : o.render(e);
            }
          },
          updateLayout: function updateLayout() {
            !1 !== c.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), c.notify(this, "afterScaleUpdate"), c.notify(this, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            if (!1 !== c.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
                this.updateDataset(t);
              }

              c.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this.getDatasetMeta(t),
                n = {
              meta: e,
              index: t
            };
            !1 !== c.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), c.notify(this, "afterDatasetUpdate", [n]));
          },
          render: function render(t) {
            var e = this;
            t && "object" == typeof t || (t = {
              duration: t,
              lazy: arguments[1]
            });
            var n = t.duration,
                r = t.lazy;

            if (!1 !== c.notify(e, "beforeRender")) {
              var s = e.options.animation,
                  l = function l(t) {
                c.notify(e, "afterRender"), a.callback(s && s.onComplete, [t], e);
              };

              if (s && (void 0 !== n && 0 !== n || void 0 === n && 0 !== s.duration)) {
                var u = new i({
                  numSteps: (n || s.duration) / 16.66,
                  easing: t.easing || s.easing,
                  render: function render(t, e) {
                    var n = e.currentStep,
                        i = n / e.numSteps;
                    t.draw((0, a.easing.effects[e.easing])(i), i, n);
                  },
                  onAnimationProgress: s.onProgress,
                  onAnimationComplete: l
                });
                o.addAnimation(e, u, n, r);
              } else e.draw(), l(new i({
                numSteps: 0,
                chart: e
              }));

              return e;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== c.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), c.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }

            this.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (!1 !== c.notify(e, "beforeDatasetsDraw", [t])) {
              for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
                e.isDatasetVisible(n) && e.drawDataset(n, t);
              }

              c.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var n = this.getDatasetMeta(t),
                i = {
              meta: n,
              index: t,
              easingValue: e
            };
            !1 !== c.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), c.notify(this, "afterDatasetDraw", [i]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var e = this.tooltip,
                n = {
              tooltip: e,
              easingValue: t
            };
            !1 !== c.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), c.notify(this, "afterTooltipDraw", [n]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return s.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return s.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return s.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
            var i = s.modes[e];
            return "function" == typeof i ? i(this, t, n) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return s.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return n || (n = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), n;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]);
          },
          destroy: function destroy() {
            var e,
                n,
                i = this,
                o = i.canvas;

            for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) {
              i.destroyDatasetMeta(e);
            }

            o && (i.unbindEvents(), a.canvas.clear(i), u.releaseContext(i.ctx), i.canvas = null, i.ctx = null), c.notify(i, "destroy"), delete t.instances[i.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var t = this;
            t.tooltip = new h({
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips
            }, t);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                n = function n() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (i) {
              u.addEventListener(t, i, n), e[i] = n;
            }), t.options.responsive && (n = function n() {
              t.resize();
            }, u.addEventListener(t, "resize", n), e.resize = n);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, n) {
              u.removeEventListener(t, n, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, n) {
            var i,
                o,
                r,
                a = n ? "setHoverStyle" : "removeHoverStyle";

            for (o = 0, r = t.length; o < r; ++o) {
              (i = t[o]) && this.getDatasetMeta(i._datasetIndex).controller[a](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                n = e.tooltip;

            if (!1 !== c.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var i = e.handleEvent(t);
              n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), c.notify(e, "afterEvent", [t]);
              var o = e._bufferedRequest;
              return o ? e.render(o) : i && !e.animating && (e.stop(), e.render({
                duration: e.options.hover.animationDuration,
                lazy: !0
              })), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                n = this,
                i = n.options || {},
                o = i.hover;
            return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, o.mode, o), a.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), e = !a.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e;
          }
        }), t.Controller = t;
      };
    }, {
      22: 22,
      23: 23,
      26: 26,
      29: 29,
      31: 31,
      32: 32,
      34: 34,
      36: 36,
      46: 46,
      49: 49
    }],
    25: [function (t, e, n) {
      "use strict";

      var i = t(46);

      e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function n(t, n) {
          var i = t._chartjs;

          if (i) {
            var o = i.listeners,
                r = o.indexOf(n);
            -1 !== r && o.splice(r, 1), o.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                n = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && n(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                n = this.getMeta(),
                i = this.getDataset().data || [],
                o = n.data;

            for (t = 0, e = i.length; t < e; ++t) {
              o[t] = o[t] || this.createMetaData(t);
            }

            n.dataset = n.dataset || this.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                o,
                r = this,
                a = r.getDataset(),
                s = a.data || (a.data = []);
            r._data !== s && (r._data && n(r._data, r), o = r, (t = s)._chartjs ? t._chartjs.listeners.push(o) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [o]
              }
            }), e.forEach(function (e) {
              var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  o = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      r = o.apply(this, e);
                  return i.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[n] && t[n].apply(t, e);
                  }), r;
                }
              });
            })), r._data = s), r.resyncElements();
          },
          update: i.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, o = 0; o < i; ++o) {
              n[o].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;

            for (t.dataset && t.dataset.draw(); i < n; ++i) {
              e[i].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t) {
            i.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = i.valueAtIndexOrDefault,
                a = i.getHoverColor,
                s = t._model;
            t.$previousStyle = {
              backgroundColor: s.backgroundColor,
              borderColor: s.borderColor,
              borderWidth: s.borderWidth
            }, s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(e.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(e.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(e.hoverBorderWidth, n, s.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
          },
          insertElements: function insertElements(t, e) {
            for (var n = 0; n < e; ++n) {
              this.addElementAndReset(t + n);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = i.inherits;
      };
    }, {
      46: 46
    }],
    26: [function (t, e, n) {
      "use strict";

      var i = t(46);
      e.exports = {
        _set: function _set(t, e) {
          return i.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      46: 46
    }],
    27: [function (t, e, n) {
      "use strict";

      var i = t(3),
          o = t(46),
          r = function r(t) {
        o.extend(this, t), this.initialize.apply(this, arguments);
      };

      o.extend(r.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = o.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              n = e._model,
              o = e._start,
              r = e._view;
          return n && 1 !== t ? (r || (r = e._view = {}), o || (o = e._start = {}), function (t, e, n, o) {
            var r,
                a,
                s,
                l,
                u,
                c,
                d,
                h,
                f,
                p = Object.keys(n);

            for (r = 0, a = p.length; r < a; ++r) {
              if (c = n[s = p[r]], e.hasOwnProperty(s) || (e[s] = c), (l = e[s]) !== c && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (d = typeof c) == typeof (u = t[s])) if ("string" === d) {
                  if ((h = i(u)).valid && (f = i(c)).valid) {
                    e[s] = f.mix(h, o).rgbString();
                    continue;
                  }
                } else if ("number" === d && isFinite(u) && isFinite(c)) {
                  e[s] = u + (c - u) * o;
                  continue;
                }
                e[s] = c;
              }
            }
          }(o, r, n, t), e) : (e._view = n, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return o.isNumber(this._model.x) && o.isNumber(this._model.y);
        }
      }), r.extend = o.inherits, e.exports = r;
    }, {
      3: 3,
      46: 46
    }],
    28: [function (t, e, n) {
      "use strict";

      var i = t(3),
          o = t(26),
          r = t(46),
          a = t(34);

      e.exports = function () {
        function t(t, e, n) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }

        function e(t) {
          return null != t && "none" !== t;
        }

        function n(n, i, o) {
          var a = document.defaultView,
              s = r._getParentNode(n),
              l = a.getComputedStyle(n)[i],
              u = a.getComputedStyle(s)[i],
              c = e(l),
              d = e(u),
              h = Number.POSITIVE_INFINITY;

          return c || d ? Math.min(c ? t(l, n, o) : h, d ? t(u, s, o) : h) : "none";
        }

        r.configMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(t, e, n, i) {
              var o = e[t] || {},
                  s = n[t];
              "scales" === t ? e[t] = r.scaleMerge(o, s) : "scale" === t ? e[t] = r.merge(o, [a.getScaleDefaults(s.type), s]) : r._merger(t, e, n, i);
            }
          });
        }, r.scaleMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(t, e, n, i) {
              if ("xAxes" === t || "yAxes" === t) {
                var o,
                    s,
                    l,
                    u = n[t].length;

                for (e[t] || (e[t] = []), o = 0; o < u; ++o) {
                  s = r.valueOrDefault((l = n[t][o]).type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), r.merge(e[t][o], !e[t][o].type || l.type && l.type !== e[t][o].type ? [a.getScaleDefaults(s), l] : l);
                }
              } else r._merger(t, e, n, i);
            }
          });
        }, r.where = function (t, e) {
          if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return r.each(t, function (t) {
            e(t) && n.push(t);
          }), n;
        }, r.findIndex = Array.prototype.findIndex ? function (t, e, n) {
          return t.findIndex(e, n);
        } : function (t, e, n) {
          n = void 0 === n ? t : n;

          for (var i = 0, o = t.length; i < o; ++i) {
            if (e.call(n, t[i], i, t)) return i;
          }

          return -1;
        }, r.findNextWhere = function (t, e, n) {
          r.isNullOrUndef(n) && (n = -1);

          for (var i = n + 1; i < t.length; i++) {
            var o = t[i];
            if (e(o)) return o;
          }
        }, r.findPreviousWhere = function (t, e, n) {
          r.isNullOrUndef(n) && (n = t.length);

          for (var i = n - 1; i >= 0; i--) {
            var o = t[i];
            if (e(o)) return o;
          }
        }, r.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, r.almostEquals = function (t, e, n) {
          return Math.abs(t - e) < n;
        }, r.almostWhole = function (t, e) {
          var n = Math.round(t);
          return n - e < t && n + e > t;
        }, r.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              n = Math.round(e);
          return t === Math.pow(10, n) ? n : e;
        }, r.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, r.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, r.getAngleFromPoint = function (t, e) {
          var n = e.x - t.x,
              i = e.y - t.y,
              o = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);
          return r < -.5 * Math.PI && (r += 2 * Math.PI), {
            angle: r,
            distance: o
          };
        }, r.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, r.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, r.splineCurve = function (t, e, n, i) {
          var o = t.skip ? e : t,
              r = e,
              a = n.skip ? e : n,
              s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
              u = s / (s + l),
              c = l / (s + l),
              d = i * (u = isNaN(u) ? 0 : u),
              h = i * (c = isNaN(c) ? 0 : c);
          return {
            previous: {
              x: r.x - d * (a.x - o.x),
              y: r.y - d * (a.y - o.y)
            },
            next: {
              x: r.x + h * (a.x - o.x),
              y: r.y + h * (a.y - o.y)
            }
          };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
          var e,
              n,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              d = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              h = d.length;

          for (e = 0; e < h; ++e) {
            if (!(i = d[e]).model.skip) {
              if (n = e > 0 ? d[e - 1] : null, (o = e < h - 1 ? d[e + 1] : null) && !o.model.skip) {
                var f = o.model.x - i.model.x;
                i.deltaK = 0 !== f ? (o.model.y - i.model.y) / f : 0;
              }

              i.mK = !n || n.model.skip ? i.deltaK : !o || o.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? 0 : (n.deltaK + i.deltaK) / 2;
            }
          }

          for (e = 0; e < h - 1; ++e) {
            o = d[e + 1], (i = d[e]).model.skip || o.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (a = i.mK / i.deltaK, s = o.mK / i.deltaK, (u = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = a * l * i.deltaK, o.mK = s * l * i.deltaK)));
          }

          for (e = 0; e < h; ++e) {
            (i = d[e]).model.skip || (o = e < h - 1 ? d[e + 1] : null, (n = e > 0 ? d[e - 1] : null) && !n.model.skip && (i.model.controlPointPreviousX = i.model.x - (c = (i.model.x - n.model.x) / 3), i.model.controlPointPreviousY = i.model.y - c * i.mK), o && !o.model.skip && (i.model.controlPointNextX = i.model.x + (c = (o.model.x - i.model.x) / 3), i.model.controlPointNextY = i.model.y + c * i.mK));
          }
        }, r.nextItem = function (t, e, n) {
          return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, r.previousItem = function (t, e, n) {
          return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, r.niceNum = function (t, e) {
          var n = Math.floor(r.log10(t)),
              i = t / Math.pow(10, n);
          return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
        }, r.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, r.getRelativePosition = function (t, e) {
          var n,
              i,
              o = t.originalEvent || t,
              a = t.target || t.srcElement,
              s = a.getBoundingClientRect(),
              l = o.touches;
          l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = o.clientX, i = o.clientY);
          var u = parseFloat(r.getStyle(a, "padding-left")),
              c = parseFloat(r.getStyle(a, "padding-top")),
              d = parseFloat(r.getStyle(a, "padding-right")),
              h = parseFloat(r.getStyle(a, "padding-bottom")),
              f = s.bottom - s.top - c - h;
          return {
            x: n = Math.round((n - s.left - u) / (s.right - s.left - u - d) * a.width / e.currentDevicePixelRatio),
            y: i = Math.round((i - s.top - c) / f * a.height / e.currentDevicePixelRatio)
          };
        }, r.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, r.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, r._calculatePadding = function (t, e, n) {
          return (e = r.getStyle(t, e)).indexOf("%") > -1 ? n / parseInt(e, 10) : parseInt(e, 10);
        }, r._getParentNode = function (t) {
          var e = t.parentNode;
          return e && e.host && (e = e.host), e;
        }, r.getMaximumWidth = function (t) {
          var e = r._getParentNode(t);

          if (!e) return t.clientWidth;

          var n = e.clientWidth,
              i = n - r._calculatePadding(e, "padding-left", n) - r._calculatePadding(e, "padding-right", n),
              o = r.getConstraintWidth(t);

          return isNaN(o) ? i : Math.min(i, o);
        }, r.getMaximumHeight = function (t) {
          var e = r._getParentNode(t);

          if (!e) return t.clientHeight;

          var n = e.clientHeight,
              i = n - r._calculatePadding(e, "padding-top", n) - r._calculatePadding(e, "padding-bottom", n),
              o = r.getConstraintHeight(t);

          return isNaN(o) ? i : Math.min(i, o);
        }, r.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, r.retinaScale = function (t, e) {
          var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;

          if (1 !== n) {
            var i = t.canvas,
                o = t.height,
                r = t.width;
            i.height = o * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = o + "px", i.style.width = r + "px");
          }
        }, r.fontString = function (t, e, n) {
          return e + " " + t + "px " + n;
        }, r.longestText = function (t, e, n, i) {
          var o = (i = i || {}).data = i.data || {},
              a = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (o = i.data = {}, a = i.garbageCollect = [], i.font = e), t.font = e;
          var s = 0;
          r.each(n, function (e) {
            null != e && !0 !== r.isArray(e) ? s = r.measureText(t, o, a, s, e) : r.isArray(e) && r.each(e, function (e) {
              null == e || r.isArray(e) || (s = r.measureText(t, o, a, s, e));
            });
          });
          var l = a.length / 2;

          if (l > n.length) {
            for (var u = 0; u < l; u++) {
              delete o[a[u]];
            }

            a.splice(0, l);
          }

          return s;
        }, r.measureText = function (t, e, n, i, o) {
          var r = e[o];
          return r || (r = e[o] = t.measureText(o).width, n.push(o)), r > i && (i = r), i;
        }, r.numberOfLabelLines = function (t) {
          var e = 1;
          return r.each(t, function (t) {
            r.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, r.color = i ? function (t) {
          return t instanceof CanvasGradient && (t = o.global.defaultColor), i(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, r.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      26: 26,
      3: 3,
      34: 34,
      46: 46
    }],
    29: [function (t, e, n) {
      "use strict";

      var i = t(46);

      function o(t, e) {
        return t.native ? {
          x: t.x,
          y: t.y
        } : i.getRelativePosition(t, e);
      }

      function r(t, e) {
        var n, i, o, r, a;

        for (i = 0, r = t.data.datasets.length; i < r; ++i) {
          if (t.isDatasetVisible(i)) for (o = 0, a = (n = t.getDatasetMeta(i)).data.length; o < a; ++o) {
            var s = n.data[o];
            s._view.skip || e(s);
          }
        }
      }

      function a(t, e) {
        var n = [];
        return r(t, function (t) {
          t.inRange(e.x, e.y) && n.push(t);
        }), n;
      }

      function s(t, e, n, i) {
        var o = Number.POSITIVE_INFINITY,
            a = [];
        return r(t, function (t) {
          if (!n || t.inRange(e.x, e.y)) {
            var r = t.getCenterPoint(),
                s = i(e, r);
            s < o ? (a = [t], o = s) : s === o && a.push(t);
          }
        }), a;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function (t, i) {
          var o = e ? Math.abs(t.x - i.x) : 0,
              r = n ? Math.abs(t.y - i.y) : 0;
          return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
        };
      }

      function u(t, e, n) {
        var i = o(e, t);
        n.axis = n.axis || "x";
        var r = l(n.axis),
            u = n.intersect ? a(t, i) : s(t, i, !1, r),
            c = [];
        return u.length ? (t.data.datasets.forEach(function (e, n) {
          if (t.isDatasetVisible(n)) {
            var i = t.getDatasetMeta(n).data[u[0]._index];

            i && !i._view.skip && c.push(i);
          }
        }), c) : [];
      }

      e.exports = {
        modes: {
          single: function single(t, e) {
            var n = o(e, t),
                i = [];
            return r(t, function (t) {
              if (t.inRange(n.x, n.y)) return i.push(t), i;
            }), i.slice(0, 1);
          },
          label: u,
          index: u,
          dataset: function dataset(t, e, n) {
            var i = o(e, t);
            n.axis = n.axis || "xy";
            var r = l(n.axis),
                u = n.intersect ? a(t, i) : s(t, i, !1, r);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return u(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return a(t, o(e, t));
          },
          nearest: function nearest(t, e, n) {
            var i = o(e, t);
            n.axis = n.axis || "xy";
            var r = l(n.axis),
                a = s(t, i, n.intersect, r);
            return a.length > 1 && a.sort(function (t, e) {
              var n = t.getArea() - e.getArea();
              return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
            }), a.slice(0, 1);
          },
          x: function x(t, e, n) {
            var i = o(e, t),
                a = [],
                s = !1;
            return r(t, function (t) {
              t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (s = !0);
            }), n.intersect && !s && (a = []), a;
          },
          y: function y(t, e, n) {
            var i = o(e, t),
                a = [],
                s = !1;
            return r(t, function (t) {
              t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (s = !0);
            }), n.intersect && !s && (a = []), a;
          }
        }
      };
    }, {
      46: 46
    }],
    30: [function (t, e, n) {
      "use strict";

      t(26)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t2, e) {
          return this.construct(_t2, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      26: 26
    }],
    31: [function (t, e, n) {
      "use strict";

      var i = t(46);

      function o(t, e) {
        return i.where(t, function (t) {
          return t.position === e;
        });
      }

      function r(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, n) {
          var i = e ? n : t,
              o = e ? t : n;
          return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }

      e.exports = {
        defaults: {},
        addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        },
        removeBox: function removeBox(t, e) {
          var n = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== n && t.boxes.splice(n, 1);
        },
        configure: function configure(t, e, n) {
          for (var i, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) {
            n.hasOwnProperty(i = o[a]) && (e[i] = n[i]);
          }
        },
        update: function update(t, e, n) {
          if (t) {
            var a = i.options.toPadding((t.options.layout || {}).padding),
                s = a.left,
                l = a.right,
                u = a.top,
                c = a.bottom,
                d = o(t.boxes, "left"),
                h = o(t.boxes, "right"),
                f = o(t.boxes, "top"),
                p = o(t.boxes, "bottom"),
                g = o(t.boxes, "chartArea");
            r(d, !0), r(h, !1), r(f, !0), r(p, !1);
            var m = e - s - l,
                v = n - u - c,
                b = (e - m / 2) / (d.length + h.length),
                y = (n - v / 2) / (f.length + p.length),
                x = m,
                w = v,
                _ = [];
            i.each(d.concat(h, f, p), function (t) {
              var e,
                  n = t.isHorizontal();
              n ? (e = t.update(t.fullWidth ? m : x, y), w -= e.height) : (e = t.update(b, w), x -= e.width), _.push({
                horizontal: n,
                minSize: e,
                box: t
              });
            });
            var C = 0,
                k = 0,
                T = 0,
                S = 0;
            i.each(f.concat(p), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                C = Math.max(C, e.left), k = Math.max(k, e.right);
              }
            }), i.each(d.concat(h), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                T = Math.max(T, e.top), S = Math.max(S, e.bottom);
              }
            });
            var D = s,
                E = l,
                A = u,
                M = c;
            i.each(d.concat(h), R), i.each(d, function (t) {
              D += t.width;
            }), i.each(h, function (t) {
              E += t.width;
            }), i.each(f.concat(p), R), i.each(f, function (t) {
              A += t.height;
            }), i.each(p, function (t) {
              M += t.height;
            }), i.each(d.concat(h), function (t) {
              var e = i.findNextWhere(_, function (e) {
                return e.box === t;
              });
              e && t.update(e.minSize.width, w, {
                left: 0,
                right: 0,
                top: A,
                bottom: M
              });
            }), D = s, E = l, A = u, M = c, i.each(d, function (t) {
              D += t.width;
            }), i.each(h, function (t) {
              E += t.width;
            }), i.each(f, function (t) {
              A += t.height;
            }), i.each(p, function (t) {
              M += t.height;
            });
            var I = Math.max(C - D, 0);
            D += I, E += Math.max(k - E, 0);
            var P = Math.max(T - A, 0);
            A += P, M += Math.max(S - M, 0);
            var O = n - A - M,
                N = e - D - E;
            N === x && O === w || (i.each(d, function (t) {
              t.height = O;
            }), i.each(h, function (t) {
              t.height = O;
            }), i.each(f, function (t) {
              t.fullWidth || (t.width = N);
            }), i.each(p, function (t) {
              t.fullWidth || (t.width = N);
            }), w = O, x = N);
            var L = s + I,
                F = u + P;
            i.each(d.concat(f), j), L += x, F += w, i.each(h, j), i.each(p, j), t.chartArea = {
              left: D,
              top: A,
              right: D + x,
              bottom: A + w
            }, i.each(g, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(x, w);
            });
          }

          function R(t) {
            var e = i.findNextWhere(_, function (e) {
              return e.box === t;
            });
            if (e) if (t.isHorizontal()) {
              var n = {
                left: Math.max(D, C),
                right: Math.max(E, k),
                top: 0,
                bottom: 0
              };
              t.update(t.fullWidth ? m : x, v / 2, n);
            } else t.update(e.minSize.width, w);
          }

          function j(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? s : D, t.right = t.fullWidth ? e - l : D + x, t.top = F, t.bottom = F + t.height, F = t.bottom) : (t.left = L, t.right = L + t.width, t.top = A, t.bottom = A + w, L = t.right);
          }
        }
      };
    }, {
      46: 46
    }],
    32: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(46);
      i._set("global", {
        plugins: {}
      }), e.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function register(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        },
        unregister: function unregister(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
          }), this._cacheId++;
        },
        clear: function clear() {
          this._plugins = [], this._cacheId++;
        },
        count: function count() {
          return this._plugins.length;
        },
        getAll: function getAll() {
          return this._plugins;
        },
        notify: function notify(t, e, n) {
          var i,
              o,
              r,
              a,
              s,
              l = this.descriptors(t),
              u = l.length;

          for (i = 0; i < u; ++i) {
            if ("function" == typeof (s = (r = (o = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(o.options), !1 === s.apply(r, a))) return !1;
          }

          return !0;
        },
        descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});
          if (e.id === this._cacheId) return e.descriptors;
          var n = [],
              r = [],
              a = t && t.config || {},
              s = a.options && a.options.plugins || {};
          return this._plugins.concat(a.plugins || []).forEach(function (t) {
            if (-1 === n.indexOf(t)) {
              var e = t.id,
                  a = s[e];
              !1 !== a && (!0 === a && (a = o.clone(i.global.plugins[e])), n.push(t), r.push({
                plugin: t,
                options: a || {}
              }));
            }
          }), e.descriptors = r, e.id = this._cacheId, r;
        },
        _invalidate: function _invalidate(t) {
          delete t.$plugins;
        }
      };
    }, {
      26: 26,
      46: 46
    }],
    33: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46),
          a = t(35);

      function s(t) {
        var e,
            n,
            i = [];

        for (e = 0, n = t.length; e < n; ++e) {
          i.push(t[e].label);
        }

        return i;
      }

      function l(t, e, n) {
        var i = t.getPixelForTick(e);
        return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
      }

      function u(t, e, n) {
        return r.isArray(e) ? r.longestText(t, n, e) : t.measureText(e).width;
      }

      function c(t) {
        var e = r.valueOrDefault,
            n = i.global,
            o = e(t.fontSize, n.defaultFontSize),
            a = e(t.fontStyle, n.defaultFontStyle),
            s = e(t.fontFamily, n.defaultFontFamily);
        return {
          size: o,
          style: a,
          family: s,
          font: r.fontString(o, a, s)
        };
      }

      function d(t) {
        return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, i.global.defaultFontSize));
      }

      i._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: a.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = o.extend({
        getPadding: function getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
          };
        },
        getTicks: function getTicks() {
          return this._ticks;
        },
        mergeTicksOptions: function mergeTicksOptions() {
          var t = this.options.ticks;

          for (var e in !1 === t.minor && (t.minor = {
            display: !1
          }), !1 === t.major && (t.major = {
            display: !1
          }), t) {
            "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
          }
        },
        beforeUpdate: function beforeUpdate() {
          r.callback(this.options.beforeUpdate, [this]);
        },
        update: function update(t, e, n) {
          var i,
              o,
              a,
              s,
              l,
              u,
              c = this;

          for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = r.extend({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), a = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = a, i = 0, o = a.length; i < o; ++i) {
            s = a[i], (u = l[i]) ? u.label = s : l.push(u = {
              label: s,
              major: !1
            });
          }

          return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize;
        },
        afterUpdate: function afterUpdate() {
          r.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function beforeSetDimensions() {
          r.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
        },
        afterSetDimensions: function afterSetDimensions() {
          r.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function beforeDataLimits() {
          r.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: r.noop,
        afterDataLimits: function afterDataLimits() {
          r.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function beforeBuildTicks() {
          r.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: r.noop,
        afterBuildTicks: function afterBuildTicks() {
          r.callback(this.options.afterBuildTicks, [this]);
        },
        beforeTickToLabelConversion: function beforeTickToLabelConversion() {
          r.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function convertTicksToLabels() {
          var t = this.options.ticks;
          this.ticks = this.ticks.map(t.userCallback || t.callback, this);
        },
        afterTickToLabelConversion: function afterTickToLabelConversion() {
          r.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function beforeCalculateTickRotation() {
          r.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function calculateTickRotation() {
          var t = this,
              e = t.ctx,
              n = t.options.ticks,
              i = s(t._ticks),
              o = c(n);
          e.font = o.font;
          var a = n.minRotation || 0;
          if (i.length && t.options.display && t.isHorizontal()) for (var l, u = r.longestText(e, o.font, i, t.longestTextCache), d = u, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > h && a < n.maxRotation;) {
            var f = r.toRadians(a);

            if (l = Math.cos(f), Math.sin(f) * u > t.maxHeight) {
              a--;
              break;
            }

            a++, d = l * u;
          }
          t.labelRotation = a;
        },
        afterCalculateTickRotation: function afterCalculateTickRotation() {
          r.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function beforeFit() {
          r.callback(this.options.beforeFit, [this]);
        },
        fit: function fit() {
          var t = this,
              e = t.minSize = {
            width: 0,
            height: 0
          },
              n = s(t._ticks),
              i = t.options,
              o = i.ticks,
              a = i.scaleLabel,
              l = i.gridLines,
              h = i.display,
              f = t.isHorizontal(),
              p = c(o),
              g = i.gridLines.tickMarkLength;

          if (e.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && l.drawTicks ? g : 0, e.height = f ? h && l.drawTicks ? g : 0 : t.maxHeight, a.display && h) {
            var m = d(a) + r.options.toPadding(a.padding).height;
            f ? e.height += m : e.width += m;
          }

          if (o.display && h) {
            var v = r.longestText(t.ctx, p.font, n, t.longestTextCache),
                b = r.numberOfLabelLines(n),
                y = .5 * p.size,
                x = t.options.ticks.padding;

            if (f) {
              t.longestLabelWidth = v;

              var w = r.toRadians(t.labelRotation),
                  _ = Math.cos(w),
                  C = Math.sin(w);

              e.height = Math.min(t.maxHeight, e.height + (C * v + p.size * b + y * (b - 1) + y) + x), t.ctx.font = p.font;
              var k = u(t.ctx, n[0], p.font),
                  T = u(t.ctx, n[n.length - 1], p.font);
              0 !== t.labelRotation ? (t.paddingLeft = "bottom" === i.position ? _ * k + 3 : _ * y + 3, t.paddingRight = "bottom" === i.position ? _ * y + 3 : _ * T + 3) : (t.paddingLeft = k / 2 + 3, t.paddingRight = T / 2 + 3);
            } else o.mirror ? v = 0 : v += x + y, e.width = Math.min(t.maxWidth, e.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2;
          }

          t.handleMargins(), t.width = e.width, t.height = e.height;
        },
        handleMargins: function handleMargins() {
          var t = this;
          t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
        },
        afterFit: function afterFit() {
          r.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        isFullWidth: function isFullWidth() {
          return this.options.fullWidth;
        },
        getRightValue: function getRightValue(t) {
          if (r.isNullOrUndef(t)) return NaN;
          if ("number" == typeof t && !isFinite(t)) return NaN;
          if (t) if (this.isHorizontal()) {
            if (void 0 !== t.x) return this.getRightValue(t.x);
          } else if (void 0 !== t.y) return this.getRightValue(t.y);
          return t;
        },
        getLabelForIndex: r.noop,
        getPixelForValue: r.noop,
        getValueForPixel: r.noop,
        getPixelForTick: function getPixelForTick(t) {
          var e = this,
              n = e.options.offset;

          if (e.isHorizontal()) {
            var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                o = i * t + e.paddingLeft;
            return n && (o += i / 2), e.left + Math.round(o) + (e.isFullWidth() ? e.margins.left : 0);
          }

          return e.top + t * ((e.height - (e.paddingTop + e.paddingBottom)) / (e._ticks.length - 1));
        },
        getPixelForDecimal: function getPixelForDecimal(t) {
          var e = this;
          return e.isHorizontal() ? e.left + Math.round((e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft) + (e.isFullWidth() ? e.margins.left : 0) : e.top + t * e.height;
        },
        getBasePixel: function getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function getBaseValue() {
          var t = this.min,
              e = this.max;
          return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        },
        _autoSkip: function _autoSkip(t) {
          var e,
              n,
              i,
              o,
              a = this,
              s = a.isHorizontal(),
              l = a.options.ticks.minor,
              u = t.length,
              c = r.toRadians(a.labelRotation),
              d = Math.cos(c),
              h = a.longestLabelWidth * d,
              f = [];

          for (l.maxTicksLimit && (o = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (a.width - (a.paddingLeft + a.paddingRight)))), o && u > o && (e = Math.max(e, Math.floor(u / o)))), n = 0; n < u; n++) {
            i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
          }

          return f;
        },
        draw: function draw(t) {
          var e = this,
              n = e.options;

          if (n.display) {
            var o = e.ctx,
                a = i.global,
                s = n.ticks.minor,
                u = n.ticks.major || s,
                h = n.gridLines,
                f = n.scaleLabel,
                p = 0 !== e.labelRotation,
                g = e.isHorizontal(),
                m = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                v = r.valueOrDefault(s.fontColor, a.defaultFontColor),
                b = c(s),
                y = r.valueOrDefault(u.fontColor, a.defaultFontColor),
                x = c(u),
                w = h.drawTicks ? h.tickMarkLength : 0,
                _ = r.valueOrDefault(f.fontColor, a.defaultFontColor),
                C = c(f),
                k = r.options.toPadding(f.padding),
                T = r.toRadians(e.labelRotation),
                S = [],
                D = e.options.gridLines.lineWidth,
                E = "right" === n.position ? e.left : e.right - D - w,
                A = "right" === n.position ? e.left + w : e.right,
                M = "bottom" === n.position ? e.top + D : e.bottom - w - D,
                I = "bottom" === n.position ? e.top + D + w : e.bottom + D;

            if (r.each(m, function (i, o) {
              if (!r.isNullOrUndef(i.label)) {
                var u,
                    c,
                    d,
                    f,
                    v,
                    b,
                    y,
                    x,
                    _,
                    C,
                    k,
                    P,
                    O,
                    N,
                    L = i.label;

                o === e.zeroLineIndex && n.offset === h.offsetGridLines ? (u = h.zeroLineWidth, c = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (u = r.valueAtIndexOrDefault(h.lineWidth, o), c = r.valueAtIndexOrDefault(h.color, o), d = r.valueOrDefault(h.borderDash, a.borderDash), f = r.valueOrDefault(h.borderDashOffset, a.borderDashOffset));
                var F = "middle",
                    R = "middle",
                    j = s.padding;

                if (g) {
                  var B = w + j;
                  "bottom" === n.position ? (R = p ? "middle" : "top", F = p ? "right" : "center", N = e.top + B) : (R = p ? "middle" : "bottom", F = p ? "left" : "center", N = e.bottom - B);
                  var W = l(e, o, h.offsetGridLines && m.length > 1);
                  W < e.left && (c = "rgba(0,0,0,0)"), W += r.aliasPixel(u), O = e.getPixelForTick(o) + s.labelOffset, v = y = _ = k = W, b = M, x = I, C = t.top, P = t.bottom + D;
                } else {
                  var z,
                      H = "left" === n.position;
                  s.mirror ? (F = H ? "left" : "right", z = j) : (F = H ? "right" : "left", z = w + j), O = H ? e.right - z : e.left + z;
                  var q = l(e, o, h.offsetGridLines && m.length > 1);
                  q < e.top && (c = "rgba(0,0,0,0)"), q += r.aliasPixel(u), N = e.getPixelForTick(o) + s.labelOffset, v = E, y = A, _ = t.left, k = t.right + D, b = x = C = P = q;
                }

                S.push({
                  tx1: v,
                  ty1: b,
                  tx2: y,
                  ty2: x,
                  x1: _,
                  y1: C,
                  x2: k,
                  y2: P,
                  labelX: O,
                  labelY: N,
                  glWidth: u,
                  glColor: c,
                  glBorderDash: d,
                  glBorderDashOffset: f,
                  rotation: -1 * T,
                  label: L,
                  major: i.major,
                  textBaseline: R,
                  textAlign: F
                });
              }
            }), r.each(S, function (t) {
              if (h.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), h.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
                o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? x.font : b.font, o.fillStyle = t.major ? y : v, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                var n = t.label;
                if (r.isArray(n)) for (var i = n.length, a = 1.5 * b.size, l = e.isHorizontal() ? 0 : -a * (i - 1) / 2, u = 0; u < i; ++u) {
                  o.fillText("" + n[u], 0, l), l += a;
                } else o.fillText(n, 0, 0);
                o.restore();
              }
            }), f.display) {
              var P,
                  O,
                  N = 0,
                  L = d(f) / 2;
              if (g) P = e.left + (e.right - e.left) / 2, O = "bottom" === n.position ? e.bottom - L - k.bottom : e.top + L + k.top;else {
                var F = "left" === n.position;
                P = F ? e.left + L + k.top : e.right - L - k.top, O = e.top + (e.bottom - e.top) / 2, N = F ? -.5 * Math.PI : .5 * Math.PI;
              }
              o.save(), o.translate(P, O), o.rotate(N), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = _, o.font = C.font, o.fillText(f.labelString, 0, 0), o.restore();
            }

            if (h.drawBorder) {
              o.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), o.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
              var R = e.left,
                  j = e.right + D,
                  B = e.top,
                  W = e.bottom + D,
                  z = r.aliasPixel(o.lineWidth);
              g ? (B = W = "top" === n.position ? e.bottom : e.top, B += z, W += z) : (R = j = "left" === n.position ? e.right : e.left, R += z, j += z), o.beginPath(), o.moveTo(R, B), o.lineTo(j, W), o.stroke();
            }
          }
        }
      });
    }, {
      26: 26,
      27: 27,
      35: 35,
      46: 46
    }],
    34: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(46),
          r = t(31);
      e.exports = {
        constructors: {},
        defaults: {},
        registerScaleType: function registerScaleType(t, e, n) {
          this.constructors[t] = e, this.defaults[t] = o.clone(n);
        },
        getScaleConstructor: function getScaleConstructor(t) {
          return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
        },
        getScaleDefaults: function getScaleDefaults(t) {
          return this.defaults.hasOwnProperty(t) ? o.merge({}, [i.scale, this.defaults[t]]) : {};
        },
        updateScaleDefaults: function updateScaleDefaults(t, e) {
          this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e));
        },
        addScalesToLayout: function addScalesToLayout(t) {
          o.each(t.scales, function (e) {
            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, r.addBox(t, e);
          });
        }
      };
    }, {
      26: 26,
      31: 31,
      46: 46
    }],
    35: [function (t, e, n) {
      "use strict";

      var i = t(46);
      e.exports = {
        formatters: {
          values: function values(t) {
            return i.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, n) {
            var o = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
            Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
            var r = i.log10(Math.abs(o)),
                a = "";
            if (0 !== t) {
              if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                var s = i.log10(Math.abs(t));
                a = t.toExponential(Math.floor(s) - Math.floor(r));
              } else {
                var l = -1 * Math.floor(r);
                l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l);
              }
            } else a = "0";
            return a;
          },
          logarithmic: function logarithmic(t, e, n) {
            var o = t / Math.pow(10, Math.floor(i.log10(t)));
            return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === e || e === n.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      46: 46
    }],
    36: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46);

      i._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: r.noop,
            title: function title(t, e) {
              var n = "",
                  i = e.labels,
                  o = i ? i.length : 0;

              if (t.length > 0) {
                var r = t[0];
                r.xLabel ? n = r.xLabel : o > 0 && r.index < o && (n = i[r.index]);
              }

              return n;
            },
            afterTitle: r.noop,
            beforeBody: r.noop,
            beforeLabel: r.noop,
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return n && (n += ": "), n + t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: r.noop,
            afterBody: r.noop,
            beforeFooter: r.noop,
            footer: r.noop,
            afterFooter: r.noop
          }
        }
      });

      var a = {
        average: function average(t) {
          if (!t.length) return !1;
          var e,
              n,
              i = 0,
              o = 0,
              r = 0;

          for (e = 0, n = t.length; e < n; ++e) {
            var a = t[e];

            if (a && a.hasValue()) {
              var s = a.tooltipPosition();
              i += s.x, o += s.y, ++r;
            }
          }

          return {
            x: Math.round(i / r),
            y: Math.round(o / r)
          };
        },
        nearest: function nearest(t, e) {
          var n,
              i,
              o,
              a = e.x,
              s = e.y,
              l = Number.POSITIVE_INFINITY;

          for (n = 0, i = t.length; n < i; ++n) {
            var u = t[n];

            if (u && u.hasValue()) {
              var c = u.getCenterPoint(),
                  d = r.distanceBetweenPoints(e, c);
              d < l && (l = d, o = u);
            }
          }

          if (o) {
            var h = o.tooltipPosition();
            a = h.x, s = h.y;
          }

          return {
            x: a,
            y: s
          };
        }
      };

      function s(t, e) {
        var n = r.color(t);
        return n.alpha(e * n.alpha()).rgbaString();
      }

      function l(t, e) {
        return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }

      function u(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
      }

      function c(t) {
        var e = i.global,
            n = r.valueOrDefault;
        return {
          xPadding: t.xPadding,
          yPadding: t.yPadding,
          xAlign: t.xAlign,
          yAlign: t.yAlign,
          bodyFontColor: t.bodyFontColor,
          _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
          _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
          _bodyAlign: t.bodyAlign,
          bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
          bodySpacing: t.bodySpacing,
          titleFontColor: t.titleFontColor,
          _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
          _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
          titleFontSize: n(t.titleFontSize, e.defaultFontSize),
          _titleAlign: t.titleAlign,
          titleSpacing: t.titleSpacing,
          titleMarginBottom: t.titleMarginBottom,
          footerFontColor: t.footerFontColor,
          _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
          _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
          footerFontSize: n(t.footerFontSize, e.defaultFontSize),
          _footerAlign: t.footerAlign,
          footerSpacing: t.footerSpacing,
          footerMarginTop: t.footerMarginTop,
          caretSize: t.caretSize,
          cornerRadius: t.cornerRadius,
          backgroundColor: t.backgroundColor,
          opacity: 0,
          legendColorBackground: t.multiKeyBackground,
          displayColors: t.displayColors,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        };
      }

      function d(t) {
        return l([], u(t));
      }

      (e.exports = o.extend({
        initialize: function initialize() {
          this._model = c(this._options), this._lastActive = [];
        },
        getTitle: function getTitle() {
          var t = this._options.callbacks,
              e = t.beforeTitle.apply(this, arguments),
              n = t.title.apply(this, arguments),
              i = t.afterTitle.apply(this, arguments),
              o = [];
          return o = l(o, u(e)), o = l(o, u(n)), l(o, u(i));
        },
        getBeforeBody: function getBeforeBody() {
          return d(this._options.callbacks.beforeBody.apply(this, arguments));
        },
        getBody: function getBody(t, e) {
          var n = this,
              i = n._options.callbacks,
              o = [];
          return r.each(t, function (t) {
            var r = {
              before: [],
              lines: [],
              after: []
            };
            l(r.before, u(i.beforeLabel.call(n, t, e))), l(r.lines, i.label.call(n, t, e)), l(r.after, u(i.afterLabel.call(n, t, e))), o.push(r);
          }), o;
        },
        getAfterBody: function getAfterBody() {
          return d(this._options.callbacks.afterBody.apply(this, arguments));
        },
        getFooter: function getFooter() {
          var t = this._options.callbacks,
              e = t.beforeFooter.apply(this, arguments),
              n = t.footer.apply(this, arguments),
              i = t.afterFooter.apply(this, arguments),
              o = [];
          return o = l(o, u(e)), o = l(o, u(n)), l(o, u(i));
        },
        update: function update(t) {
          var e,
              n,
              i,
              o,
              s,
              l,
              u,
              d = this,
              h = d._options,
              f = d._model,
              p = d._model = c(h),
              g = d._active,
              m = d._data,
              v = {
            xAlign: f.xAlign,
            yAlign: f.yAlign
          },
              b = {
            x: f.x,
            y: f.y
          },
              y = {
            width: f.width,
            height: f.height
          },
              x = {
            x: f.caretX,
            y: f.caretY
          };

          if (g.length) {
            p.opacity = 1;
            var w = [],
                _ = [];
            x = a[h.position].call(d, g, d._eventPosition);
            var C = [];

            for (e = 0, n = g.length; e < n; ++e) {
              C.push((o = void 0, s = void 0, s = (i = g[e])._yScale || i._scale, l = i._index, u = i._datasetIndex, {
                xLabel: (o = i._xScale) ? o.getLabelForIndex(l, u) : "",
                yLabel: s ? s.getLabelForIndex(l, u) : "",
                index: l,
                datasetIndex: u,
                x: i._model.x,
                y: i._model.y
              }));
            }

            h.filter && (C = C.filter(function (t) {
              return h.filter(t, m);
            })), h.itemSort && (C = C.sort(function (t, e) {
              return h.itemSort(t, e, m);
            })), r.each(C, function (t) {
              w.push(h.callbacks.labelColor.call(d, t, d._chart)), _.push(h.callbacks.labelTextColor.call(d, t, d._chart));
            }), p.title = d.getTitle(C, m), p.beforeBody = d.getBeforeBody(C, m), p.body = d.getBody(C, m), p.afterBody = d.getAfterBody(C, m), p.footer = d.getFooter(C, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = _, p.dataPoints = C, y = function (t, e) {
              var n = t._chart.ctx,
                  i = 2 * e.yPadding,
                  o = 0,
                  a = e.body,
                  s = a.reduce(function (t, e) {
                return t + e.before.length + e.lines.length + e.after.length;
              }, 0),
                  l = e.title.length,
                  u = e.footer.length,
                  c = e.titleFontSize,
                  d = e.bodyFontSize,
                  h = e.footerFontSize;
              i += l * c, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += (s += e.beforeBody.length + e.afterBody.length) * d, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;

              var f = 0,
                  p = function p(t) {
                o = Math.max(o, n.measureText(t).width + f);
              };

              return n.font = r.fontString(c, e._titleFontStyle, e._titleFontFamily), r.each(e.title, p), n.font = r.fontString(d, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? d + 2 : 0, r.each(a, function (t) {
                r.each(t.before, p), r.each(t.lines, p), r.each(t.after, p);
              }), f = 0, n.font = r.fontString(h, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, p), {
                width: o += 2 * e.xPadding,
                height: i
              };
            }(this, p), b = function (t, e, n, i) {
              var o = t.x,
                  r = t.y,
                  a = t.caretPadding,
                  s = n.xAlign,
                  l = n.yAlign,
                  u = t.caretSize + a,
                  c = t.cornerRadius + a;
              return "right" === s ? o -= e.width : "center" === s && ((o -= e.width / 2) + e.width > i.width && (o = i.width - e.width), o < 0 && (o = 0)), "top" === l ? r += u : r -= "bottom" === l ? e.height + u : e.height / 2, "center" === l ? "left" === s ? o += u : "right" === s && (o -= u) : "left" === s ? o -= c : "right" === s && (o += c), {
                x: o,
                y: r
              };
            }(p, y, v = function (t, e) {
              var n,
                  i,
                  o,
                  r,
                  a,
                  s = t._model,
                  l = t._chart,
                  u = t._chart.chartArea,
                  c = "center",
                  d = "center";
              s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
              var h = (u.left + u.right) / 2,
                  f = (u.top + u.bottom) / 2;
              "center" === d ? (n = function n(t) {
                return t <= h;
              }, i = function i(t) {
                return t > h;
              }) : (n = function n(t) {
                return t <= e.width / 2;
              }, i = function i(t) {
                return t >= l.width - e.width / 2;
              }), o = function o(t) {
                return t + e.width + s.caretSize + s.caretPadding > l.width;
              }, r = function r(t) {
                return t - e.width - s.caretSize - s.caretPadding < 0;
              }, a = function a(t) {
                return t <= f ? "top" : "bottom";
              }, n(s.x) ? (c = "left", o(s.x) && (c = "center", d = a(s.y))) : i(s.x) && (c = "right", r(s.x) && (c = "center", d = a(s.y)));
              var p = t._options;
              return {
                xAlign: p.xAlign ? p.xAlign : c,
                yAlign: p.yAlign ? p.yAlign : d
              };
            }(this, y), d._chart);
          } else p.opacity = 0;

          return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d;
        },
        drawCaret: function drawCaret(t, e) {
          var n = this._chart.ctx,
              i = this.getCaretPosition(t, e, this._view);
          n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
        },
        getCaretPosition: function getCaretPosition(t, e, n) {
          var i,
              o,
              r,
              a,
              s,
              l,
              u = n.caretSize,
              c = n.cornerRadius,
              d = n.xAlign,
              h = n.yAlign,
              f = t.x,
              p = t.y,
              g = e.width,
              m = e.height;
          if ("center" === h) s = p + m / 2, "left" === d ? (o = (i = f) - u, r = i, a = s + u, l = s - u) : (o = (i = f + g) + u, r = i, a = s - u, l = s + u);else if ("left" === d ? (i = (o = f + c + u) - u, r = o + u) : "right" === d ? (i = (o = f + g - c - u) - u, r = o + u) : (i = (o = n.caretX) - u, r = o + u), "top" === h) s = (a = p) - u, l = a;else {
            s = (a = p + m) + u, l = a;
            var v = r;
            r = i, i = v;
          }
          return {
            x1: i,
            x2: o,
            x3: r,
            y1: a,
            y2: s,
            y3: l
          };
        },
        drawTitle: function drawTitle(t, e, n, i) {
          var o = e.title;

          if (o.length) {
            n.textAlign = e._titleAlign, n.textBaseline = "top";
            var a,
                l,
                u = e.titleFontSize,
                c = e.titleSpacing;

            for (n.fillStyle = s(e.titleFontColor, i), n.font = r.fontString(u, e._titleFontStyle, e._titleFontFamily), a = 0, l = o.length; a < l; ++a) {
              n.fillText(o[a], t.x, t.y), t.y += u + c, a + 1 === o.length && (t.y += e.titleMarginBottom - c);
            }
          }
        },
        drawBody: function drawBody(t, e, n, i) {
          var o = e.bodyFontSize,
              a = e.bodySpacing,
              l = e.body;
          n.textAlign = e._bodyAlign, n.textBaseline = "top", n.font = r.fontString(o, e._bodyFontStyle, e._bodyFontFamily);

          var u = 0,
              c = function c(e) {
            n.fillText(e, t.x + u, t.y), t.y += o + a;
          };

          n.fillStyle = s(e.bodyFontColor, i), r.each(e.beforeBody, c);
          var d = e.displayColors;
          u = d ? o + 2 : 0, r.each(l, function (a, l) {
            var u = s(e.labelTextColors[l], i);
            n.fillStyle = u, r.each(a.before, c), r.each(a.lines, function (r) {
              d && (n.fillStyle = s(e.legendColorBackground, i), n.fillRect(t.x, t.y, o, o), n.lineWidth = 1, n.strokeStyle = s(e.labelColors[l].borderColor, i), n.strokeRect(t.x, t.y, o, o), n.fillStyle = s(e.labelColors[l].backgroundColor, i), n.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), n.fillStyle = u), c(r);
            }), r.each(a.after, c);
          }), u = 0, r.each(e.afterBody, c), t.y -= a;
        },
        drawFooter: function drawFooter(t, e, n, i) {
          var o = e.footer;
          o.length && (t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = s(e.footerFontColor, i), n.font = r.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), r.each(o, function (i) {
            n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
          }));
        },
        drawBackground: function drawBackground(t, e, n, i, o) {
          n.fillStyle = s(e.backgroundColor, o), n.strokeStyle = s(e.borderColor, o), n.lineWidth = e.borderWidth;
          var r = e.xAlign,
              a = e.yAlign,
              l = t.x,
              u = t.y,
              c = i.width,
              d = i.height,
              h = e.cornerRadius;
          n.beginPath(), n.moveTo(l + h, u), "top" === a && this.drawCaret(t, i), n.lineTo(l + c - h, u), n.quadraticCurveTo(l + c, u, l + c, u + h), "center" === a && "right" === r && this.drawCaret(t, i), n.lineTo(l + c, u + d - h), n.quadraticCurveTo(l + c, u + d, l + c - h, u + d), "bottom" === a && this.drawCaret(t, i), n.lineTo(l + h, u + d), n.quadraticCurveTo(l, u + d, l, u + d - h), "center" === a && "left" === r && this.drawCaret(t, i), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke();
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view;

          if (0 !== e.opacity) {
            var n = {
              width: e.width,
              height: e.height
            },
                i = {
              x: e.x,
              y: e.y
            },
                o = Math.abs(e.opacity < .001) ? 0 : e.opacity;
            this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (this.drawBackground(i, e, t, n, o), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, o), this.drawBody(i, e, t, o), this.drawFooter(i, e, t, o));
          }
        },
        handleEvent: function handleEvent(t) {
          var e,
              n = this,
              i = n._options;
          return n._lastActive = n._lastActive || [], n._active = "mouseout" === t.type ? [] : n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !r.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
            x: t.x,
            y: t.y
          }, n.update(!0), n.pivot())), e;
        }
      })).positioners = a;
    }, {
      26: 26,
      27: 27,
      46: 46
    }],
    37: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46);
      i._set("global", {
        elements: {
          arc: {
            backgroundColor: i.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = o.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var n = this._view;

          if (n) {
            for (var i = r.getAngleFromPoint(n, {
              x: t,
              y: e
            }), o = i.angle, a = i.distance, s = n.startAngle, l = n.endAngle; l < s;) {
              l += 2 * Math.PI;
            }

            for (; o > l;) {
              o -= 2 * Math.PI;
            }

            for (; o < s;) {
              o += 2 * Math.PI;
            }

            return o >= s && o <= l && a >= n.innerRadius && a <= n.outerRadius;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              n = e.startAngle,
              i = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      26: 26,
      27: 27,
      46: 46
    }],
    38: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46),
          a = i.global;
      i._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: a.defaultColor,
            borderWidth: 3,
            borderColor: a.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = o.extend({
        draw: function draw() {
          var t,
              e,
              n,
              i,
              o = this._view,
              s = this._chart.ctx,
              l = o.spanGaps,
              u = this._children.slice(),
              c = a.elements.line,
              d = -1;

          for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = o.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || c.borderDash), s.lineDashOffset = o.borderDashOffset || c.borderDashOffset, s.lineJoin = o.borderJoinStyle || c.borderJoinStyle, s.lineWidth = o.borderWidth || c.borderWidth, s.strokeStyle = o.borderColor || a.defaultColor, s.beginPath(), d = -1, t = 0; t < u.length; ++t) {
            e = u[t], n = r.previousItem(u, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), d = t) : (n = -1 === d ? n : u[d], i.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(i.x, i.y) : r.canvas.lineTo(s, n._view, e._view), d = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      26: 26,
      27: 27,
      46: 46
    }],
    39: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46),
          a = i.global.defaultColor;

      function s(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }

      i._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: a,
            borderColor: a,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = o.extend({
        inRange: function inRange(t, e) {
          var n = this._view;
          return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
        },
        inLabelRange: s,
        inXRange: s,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              n = this._model,
              o = this._chart.ctx,
              s = e.pointStyle,
              l = e.rotation,
              u = e.radius,
              c = e.x,
              d = e.y;
          e.skip || (void 0 === t || n.x >= t.left && 1.01 * t.right >= n.x && n.y >= t.top && 1.01 * t.bottom >= n.y) && (o.strokeStyle = e.borderColor || a, o.lineWidth = r.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), o.fillStyle = e.backgroundColor || a, r.canvas.drawPoint(o, s, u, c, d, l));
        }
      });
    }, {
      26: 26,
      27: 27,
      46: 46
    }],
    40: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27);

      function r(t) {
        return void 0 !== t._view.width;
      }

      function a(t) {
        var e,
            n,
            i,
            o,
            a = t._view;

        if (r(t)) {
          var s = a.width / 2;
          e = a.x - s, n = a.x + s, i = Math.min(a.y, a.base), o = Math.max(a.y, a.base);
        } else {
          var l = a.height / 2;
          e = Math.min(a.x, a.base), n = Math.max(a.x, a.base), i = a.y - l, o = a.y + l;
        }

        return {
          left: e,
          top: i,
          right: n,
          bottom: o
        };
      }

      i._set("global", {
        elements: {
          rectangle: {
            backgroundColor: i.global.defaultColor,
            borderColor: i.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = o.extend({
        draw: function draw() {
          var t,
              e,
              n,
              i,
              o,
              r,
              a,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;

          if (l.horizontal ? (n = l.y - l.height / 2, i = l.y + l.height / 2, o = (e = l.x) > (t = l.base) ? 1 : -1, r = 1, a = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, o = 1, r = (i = l.base) > (n = l.y) ? 1 : -1, a = l.borderSkipped || "bottom"), u) {
            var c = Math.min(Math.abs(t - e), Math.abs(n - i)),
                d = (u = u > c ? c : u) / 2,
                h = t + ("left" !== a ? d * o : 0),
                f = e + ("right" !== a ? -d * o : 0),
                p = n + ("top" !== a ? d * r : 0),
                g = i + ("bottom" !== a ? -d * r : 0);
            h !== f && (n = p, i = g), p !== g && (t = h, e = f);
          }

          s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
          var m = [[t, i], [t, n], [e, n], [e, i]],
              v = ["bottom", "left", "top", "right"].indexOf(a, 0);

          function b(t) {
            return m[(v + t) % 4];
          }

          -1 === v && (v = 0);
          var y = b(0);
          s.moveTo(y[0], y[1]);

          for (var x = 1; x < 4; x++) {
            y = b(x), s.lineTo(y[0], y[1]);
          }

          s.fill(), u && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var n = !1;

          if (this._view) {
            var i = a(this);
            n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
          }

          return n;
        },
        inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;
          var n = a(this);
          return r(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom;
        },
        inXRange: function inXRange(t) {
          var e = a(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = a(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              n = this._view;
          return r(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      26: 26,
      27: 27
    }],
    41: [function (t, e, n) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40);
    }, {
      37: 37,
      38: 38,
      39: 39,
      40: 40
    }],
    42: [function (t, e, n) {
      "use strict";

      var i = t(43);
      n = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, n, i, o, r) {
          if (r) {
            var a = Math.min(r, o / 2 - 1e-7, i / 2 - 1e-7);
            t.moveTo(e + a, n), t.lineTo(e + i - a, n), t.arcTo(e + i, n, e + i, n + a, a), t.lineTo(e + i, n + o - a), t.arcTo(e + i, n + o, e + i - a, n + o, a), t.lineTo(e + a, n + o), t.arcTo(e, n + o, e, n + o - a, a), t.lineTo(e, n + a), t.arcTo(e, n, e + a, n, a), t.closePath(), t.moveTo(e, n);
          } else t.rect(e, n, i, o);
        },
        drawPoint: function drawPoint(t, e, n, i, o, r) {
          var a, s, l, u, c, d;

          if (r = r || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
            if (!(isNaN(n) || n <= 0)) {
              switch (t.save(), t.translate(i, o), t.rotate(r * Math.PI / 180), t.beginPath(), e) {
                default:
                  t.arc(0, 0, n, 0, 2 * Math.PI), t.closePath();
                  break;

                case "triangle":
                  c = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-s / 2, c / 3), t.lineTo(s / 2, c / 3), t.lineTo(0, -2 * c / 3), t.closePath();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * n, t.rect(-d, -d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var h = n / Math.SQRT2,
                      f = Math.SQRT2 * n;
                  this.roundedRect(t, -h, -h, f, f, .425 * n);
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * n, t.moveTo(-d, 0), t.lineTo(0, d), t.lineTo(d, 0), t.lineTo(0, -d), t.closePath();
                  break;

                case "cross":
                  t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0);
                  break;

                case "crossRot":
                  l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                  break;

                case "star":
                  t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0), l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                  break;

                case "line":
                  t.moveTo(-n, 0), t.lineTo(n, 0);
                  break;

                case "dash":
                  t.moveTo(0, 0), t.lineTo(n, 0);
              }

              t.fill(), t.stroke(), t.restore();
            }
          } else t.drawImage(e, i - e.width / 2, o - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, n, i) {
          if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
          n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
        }
      }, i.clear = n.clear, i.drawRoundedRectangle = function (t) {
        t.beginPath(), n.roundedRect.apply(n, arguments);
      };
    }, {
      43: 43
    }],
    43: [function (t, e, n) {
      "use strict";

      var i,
          o = {
        noop: function noop() {},
        uid: (i = 0, function () {
          return i++;
        }),
        isNullOrUndef: function isNullOrUndef(t) {
          return null == t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
          return o.valueOrDefault(o.isArray(t) ? t[e] : t, n);
        },
        callback: function callback(t, e, n) {
          if (t && "function" == typeof t.call) return t.apply(n, e);
        },
        each: function each(t, e, n, i) {
          var r, a, s;
          if (o.isArray(t)) {
            if (a = t.length, i) for (r = a - 1; r >= 0; r--) {
              e.call(n, t[r], r);
            } else for (r = 0; r < a; r++) {
              e.call(n, t[r], r);
            }
          } else if (o.isObject(t)) for (a = (s = Object.keys(t)).length, r = 0; r < a; r++) {
            e.call(n, t[s[r]], s[r]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var n, i, r, a;
          if (!t || !e || t.length !== e.length) return !1;

          for (n = 0, i = t.length; n < i; ++n) {
            if (a = e[n], (r = t[n]) instanceof Array && a instanceof Array) {
              if (!o.arrayEquals(r, a)) return !1;
            } else if (r !== a) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (o.isArray(t)) return t.map(o.clone);

          if (o.isObject(t)) {
            for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) {
              e[n[r]] = o.clone(t[n[r]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, n, i) {
          var r = e[t],
              a = n[t];
          o.isObject(r) && o.isObject(a) ? o.merge(r, a, i) : e[t] = o.clone(a);
        },
        _mergerIf: function _mergerIf(t, e, n) {
          var i = e[t],
              r = n[t];
          o.isObject(i) && o.isObject(r) ? o.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = o.clone(r));
        },
        merge: function merge(t, e, n) {
          var i,
              r,
              a,
              s,
              l,
              u = o.isArray(e) ? e : [e],
              c = u.length;
          if (!o.isObject(t)) return t;

          for (i = (n = n || {}).merger || o._merger, r = 0; r < c; ++r) {
            if (o.isObject(e = u[r])) for (l = 0, s = (a = Object.keys(e)).length; l < s; ++l) {
              i(a[l], t, e, n);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return o.merge(t, e, {
            merger: o._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = function e(_e3, n) {
            t[n] = _e3;
          }, n = 1, i = arguments.length; n < i; ++n) {
            o.each(arguments[n], e);
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = n;
          };

          return i.prototype = e.prototype, n.prototype = new i(), n.extend = o.inherits, t && o.extend(n.prototype, t), n.__super__ = e.prototype, n;
        }
      };
      e.exports = o, o.callCallback = o.callback, o.indexOf = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
      }, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault;
    }, {}],
    44: [function (t, e, n) {
      "use strict";

      var i = t(43),
          o = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack: function easeOutBack(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - o.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: o
      }, i.easingEffects = o;
    }, {
      43: 43
    }],
    45: [function (t, e, n) {
      "use strict";

      var i = t(43);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!n || "normal" === n[1]) return 1.2 * e;

          switch (t = +n[2], n[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, n, o, r;
          return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, o = +t.bottom || 0, r = +t.left || 0) : e = n = o = r = +t || 0, {
            top: e,
            right: n,
            bottom: o,
            left: r,
            height: e + o,
            width: r + n
          };
        },
        resolve: function resolve(t, e, n) {
          var o, r, a;

          for (o = 0, r = t.length; o < r; ++o) {
            if (void 0 !== (a = t[o]) && (void 0 !== e && "function" == typeof a && (a = a(e)), void 0 !== n && i.isArray(a) && (a = a[n]), void 0 !== a)) return a;
          }
        }
      };
    }, {
      43: 43
    }],
    46: [function (t, e, n) {
      "use strict";

      e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45);
    }, {
      42: 42,
      43: 43,
      44: 44,
      45: 45
    }],
    47: [function (t, e, n) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    48: [function (t, e, n) {
      "use strict";

      var i = t(46),
          o = ["animationstart", "webkitAnimationStart"],
          r = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

      function a(t, e) {
        var n = i.getStyle(t, e),
            o = n && n.match(/^(\d+)(\.\d+)?px$/);
        return o ? Number(o[1]) : void 0;
      }

      var s = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (n) {}

        return t;
      }() && {
        passive: !0
      };

      function l(t, e, n) {
        t.addEventListener(e, n, s);
      }

      function u(t, e, n) {
        t.removeEventListener(e, n, s);
      }

      function c(t, e, n, i, o) {
        return {
          type: t,
          chart: e,
          native: o || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== i ? i : null
        };
      }

      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t,
              e,
              n = "from{opacity:0.99}to{opacity:1}";
          t = "@-webkit-keyframes chartjs-render-animation{" + n + "}@keyframes chartjs-render-animation{" + n + "}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}", e = this._style || document.createElement("style"), this._style || (this._style = e, t = "/* Chart.js */\n" + t, e.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(e)), e.appendChild(document.createTextNode(t));
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t ? (function (t, e) {
            var n = t.style,
                i = t.getAttribute("height"),
                o = t.getAttribute("width");

            if (t.$chartjs = {
              initial: {
                height: i,
                width: o,
                style: {
                  display: n.display,
                  height: n.height,
                  width: n.width
                }
              }
            }, n.display = n.display || "block", null === o || "" === o) {
              var r = a(t, "width");
              void 0 !== r && (t.width = r);
            }

            if (null === i || "" === i) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = a(t, "height");
              void 0 !== r && (t.height = s);
            }
          }(t, e), n) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e.$chartjs) {
            var n = e.$chartjs.initial;
            ["height", "width"].forEach(function (t) {
              var o = n[t];
              i.isNullOrUndef(o) ? e.removeAttribute(t) : e.setAttribute(t, o);
            }), i.each(n.style || {}, function (t, n) {
              e.style[n] = t;
            }), e.width = e.width, delete e.$chartjs;
          }
        },
        addEventListener: function addEventListener(t, e, n) {
          var a = t.canvas;

          if ("resize" !== e) {
            var s = n.$chartjs || (n.$chartjs = {});
            l(a, e, (s.proxies || (s.proxies = {}))[t.id + "_" + e] = function (e) {
              n(function (t, e) {
                var n = r[t.type] || t.type,
                    o = i.getRelativePosition(t, e);
                return c(n, e, o.x, o.y, t);
              }(e, t));
            });
          } else !function (t, e, n) {
            var r,
                a,
                s,
                u,
                d = t.$chartjs || (t.$chartjs = {}),
                h = d.resizer = function (t) {
              var e = document.createElement("div"),
                  n = "chartjs-size-monitor",
                  i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
              e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
              var o = e.childNodes[0],
                  r = e.childNodes[1];

              e._reset = function () {
                o.scrollLeft = 1e6, o.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6;
              };

              var a = function a() {
                e._reset(), t();
              };

              return l(o, "scroll", a.bind(o, "expand")), l(r, "scroll", a.bind(r, "shrink")), e;
            }((r = function r() {
              if (d.resizer) return e(c("resize", n));
            }, s = !1, u = [], function () {
              u = Array.prototype.slice.call(arguments), a = a || this, s || (s = !0, i.requestAnimFrame.call(window, function () {
                s = !1, r.apply(a, u);
              }));
            }));

            !function (t, e) {
              var n = t.$chartjs || (t.$chartjs = {}),
                  r = n.renderProxy = function (t) {
                "chartjs-render-animation" === t.animationName && e();
              };

              i.each(o, function (e) {
                l(t, e, r);
              }), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor");
            }(t, function () {
              if (d.resizer) {
                var e = t.parentNode;
                e && e !== h.parentNode && e.insertBefore(h, e.firstChild), h._reset();
              }
            });
          }(a, n, t);
        },
        removeEventListener: function removeEventListener(t, e, n) {
          var r,
              a,
              s,
              l = t.canvas;

          if ("resize" !== e) {
            var c = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
            c && u(l, e, c);
          } else s = (a = (r = l).$chartjs || {}).resizer, delete a.resizer, function (t) {
            var e = t.$chartjs || {},
                n = e.renderProxy;
            n && (i.each(o, function (e) {
              u(t, e, n);
            }), delete e.renderProxy), t.classList.remove("chartjs-render-monitor");
          }(r), s && s.parentNode && s.parentNode.removeChild(s);
        }
      }, i.addEvent = l, i.removeEvent = u;
    }, {
      46: 46
    }],
    49: [function (t, e, n) {
      "use strict";

      var i = t(46),
          o = t(47),
          r = t(48);
      e.exports = i.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, r._enabled ? r : o);
    }, {
      46: 46,
      47: 47,
      48: 48
    }],
    50: [function (t, e, n) {
      "use strict";

      e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53);
    }, {
      51: 51,
      52: 52,
      53: 53
    }],
    51: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(41),
          r = t(46);

      i._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      });

      var a = {
        dataset: function dataset(t) {
          var e = t.fill,
              n = t.chart,
              i = n.getDatasetMeta(e),
              o = i && n.isDatasetVisible(e) && i.dataset._children || [],
              r = o.length || 0;
          return r ? function (t, e) {
            return e < r && o[e]._view || null;
          } : null;
        },
        boundary: function boundary(t) {
          var e = t.boundary,
              n = e ? e.x : null,
              i = e ? e.y : null;
          return function (t) {
            return {
              x: null === n ? t.x : n,
              y: null === i ? t.y : i
            };
          };
        }
      };

      function s(t, e, n) {
        var i,
            o = t._model || {},
            r = o.fill;
        if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;

        switch (r) {
          case "bottom":
            return "start";

          case "top":
            return "end";

          case "zero":
            return "origin";

          case "origin":
          case "start":
          case "end":
            return r;

          default:
            return !1;
        }
      }

      function l(t) {
        var e,
            n = t.el._model || {},
            i = t.el._scale || {},
            o = t.fill,
            r = null;
        if (isFinite(o)) return null;

        if ("start" === o ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), null != r) {
          if (void 0 !== r.x && void 0 !== r.y) return r;
          if ("number" == typeof r && isFinite(r)) return {
            x: (e = i.isHorizontal()) ? r : null,
            y: e ? null : r
          };
        }

        return null;
      }

      function u(t, e, n) {
        var i,
            o = t[e].fill,
            r = [e];
        if (!n) return o;

        for (; !1 !== o && -1 === r.indexOf(o);) {
          if (!isFinite(o)) return o;
          if (!(i = t[o])) return !1;
          if (i.visible) return o;
          r.push(o), o = i.fill;
        }

        return !1;
      }

      function c(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), a[n](t));
      }

      function d(t) {
        return t && !t.skip;
      }

      function h(t, e, n, i, o) {
        var a;

        if (i && o) {
          for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a) {
            r.canvas.lineTo(t, e[a - 1], e[a]);
          }

          for (t.lineTo(n[o - 1].x, n[o - 1].y), a = o - 1; a > 0; --a) {
            r.canvas.lineTo(t, n[a], n[a - 1], !0);
          }
        }
      }

      e.exports = {
        id: "filler",
        afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var n,
              i,
              r,
              a,
              d = (t.data.datasets || []).length,
              h = e.propagate,
              f = [];

          for (i = 0; i < d; ++i) {
            a = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof o.Line && (a = {
              visible: t.isDatasetVisible(i),
              fill: s(r, i, d),
              chart: t,
              el: r
            }), n.$filler = a, f.push(a);
          }

          for (i = 0; i < d; ++i) {
            (a = f[i]) && (a.fill = u(f, i, h), a.boundary = l(a), a.mapper = c(a));
          }
        },
        beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var n = e.meta.$filler;

          if (n) {
            var o = t.ctx,
                a = n.el,
                s = a._view,
                l = a._children || [],
                u = n.mapper,
                c = s.backgroundColor || i.global.defaultColor;
            u && c && l.length && (r.canvas.clipArea(o, t.chartArea), function (t, e, n, i, o, r) {
              var a,
                  s,
                  l,
                  u,
                  c,
                  f,
                  p,
                  g = e.length,
                  m = i.spanGaps,
                  v = [],
                  b = [],
                  y = 0,
                  x = 0;

              for (t.beginPath(), a = 0, s = g + !!r; a < s; ++a) {
                c = n(u = e[l = a % g]._view, l, i), f = d(u), p = d(c), f && p ? (y = v.push(u), x = b.push(c)) : y && x && (m ? (f && v.push(u), p && b.push(c)) : (h(t, v, b, y, x), y = x = 0, v = [], b = []));
              }

              h(t, v, b, y, x), t.closePath(), t.fillStyle = o, t.fill();
            }(o, l, u, s, c, a._loop), r.canvas.unclipArea(o));
          }
        }
      };
    }, {
      26: 26,
      41: 41,
      46: 46
    }],
    52: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46),
          a = t(31),
          s = r.noop;

      function l(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
      }

      i._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var n = e.datasetIndex,
                i = this.chart,
                o = i.getDatasetMeta(n);
            o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return r.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                return {
                  text: e.label,
                  fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(n),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: n
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var n = 0; n < t.data.datasets.length; n++) {
            e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      });

      var u = o.extend({
        initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
        },
        beforeUpdate: s,
        update: function update(t, e, n) {
          var i = this;
          return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              n = r.callback(e.generateLabels, [t.chart], t) || [];
          e.filter && (n = n.filter(function (n) {
            return e.filter(n, t.chart.data);
          })), t.options.reverse && n.reverse(), t.legendItems = n;
        },
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = t.options,
              n = e.labels,
              o = e.display,
              a = t.ctx,
              s = i.global,
              u = r.valueOrDefault,
              c = u(n.fontSize, s.defaultFontSize),
              d = u(n.fontStyle, s.defaultFontStyle),
              h = u(n.fontFamily, s.defaultFontFamily),
              f = r.fontString(c, d, h),
              p = t.legendHitBoxes = [],
              g = t.minSize,
              m = t.isHorizontal();
          if (m ? (g.width = t.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = t.maxHeight), o) if (a.font = f, m) {
            var v = t.lineWidths = [0],
                b = t.legendItems.length ? c + n.padding : 0;
            a.textAlign = "left", a.textBaseline = "top", r.each(t.legendItems, function (e, i) {
              var o = l(n, c) + c / 2 + a.measureText(e.text).width;
              v[v.length - 1] + o + n.padding >= t.width && (b += c + n.padding, v[v.length] = t.left), p[i] = {
                left: 0,
                top: 0,
                width: o,
                height: c
              }, v[v.length - 1] += o + n.padding;
            }), g.height += b;
          } else {
            var y = n.padding,
                x = t.columnWidths = [],
                w = n.padding,
                _ = 0,
                C = 0,
                k = c + y;
            r.each(t.legendItems, function (t, e) {
              var i = l(n, c) + c / 2 + a.measureText(t.text).width;
              C + k > g.height && (w += _ + n.padding, x.push(_), _ = 0, C = 0), _ = Math.max(_, i), C += k, p[e] = {
                left: 0,
                top: 0,
                width: i,
                height: c
              };
            }), w += _, x.push(_), g.width += w;
          }
          t.width = g.width, t.height = g.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function draw() {
          var t = this,
              e = t.options,
              n = e.labels,
              o = i.global,
              a = o.elements.line,
              s = t.width,
              u = t.lineWidths;

          if (e.display) {
            var c,
                d = t.ctx,
                h = r.valueOrDefault,
                f = h(n.fontColor, o.defaultFontColor),
                p = h(n.fontSize, o.defaultFontSize),
                g = h(n.fontStyle, o.defaultFontStyle),
                m = h(n.fontFamily, o.defaultFontFamily),
                v = r.fontString(p, g, m);
            d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
            var b = l(n, p),
                y = t.legendHitBoxes,
                x = t.isHorizontal();
            c = x ? {
              x: t.left + (s - u[0]) / 2,
              y: t.top + n.padding,
              line: 0
            } : {
              x: t.left + n.padding,
              y: t.top + n.padding,
              line: 0
            };
            var w = p + n.padding;
            r.each(t.legendItems, function (i, l) {
              var f = d.measureText(i.text).width,
                  g = b + p / 2 + f,
                  m = c.x,
                  v = c.y;
              x ? m + g >= s && (v = c.y += w, c.line++, m = c.x = t.left + (s - u[c.line]) / 2) : v + w > t.bottom && (m = c.x = m + t.columnWidths[c.line] + n.padding, v = c.y = t.top + n.padding, c.line++), function (t, n, i) {
                if (!(isNaN(b) || b <= 0)) {
                  d.save(), d.fillStyle = h(i.fillStyle, o.defaultColor), d.lineCap = h(i.lineCap, a.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, a.borderDashOffset), d.lineJoin = h(i.lineJoin, a.borderJoinStyle), d.lineWidth = h(i.lineWidth, a.borderWidth), d.strokeStyle = h(i.strokeStyle, o.defaultColor);
                  var s = 0 === h(i.lineWidth, a.borderWidth);

                  if (d.setLineDash && d.setLineDash(h(i.lineDash, a.borderDash)), e.labels && e.labels.usePointStyle) {
                    var l = p * Math.SQRT2 / 2,
                        u = l / Math.SQRT2;
                    r.canvas.drawPoint(d, i.pointStyle, l, t + u, n + u);
                  } else s || d.strokeRect(t, n, b, p), d.fillRect(t, n, b, p);

                  d.restore();
                }
              }(m, v, i), y[l].left = m, y[l].top = v, function (t, e, n, i) {
                var o = p / 2,
                    r = b + o + t,
                    a = e + o;
                d.fillText(n.text, r, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(r, a), d.lineTo(r + i, a), d.stroke());
              }(m, v, i, f), x ? c.x += g + n.padding : c.y += w;
            });
          }
        },
        handleEvent: function handleEvent(t) {
          var e = this,
              n = e.options,
              i = "mouseup" === t.type ? "click" : t.type,
              o = !1;

          if ("mousemove" === i) {
            if (!n.onHover) return;
          } else {
            if ("click" !== i) return;
            if (!n.onClick) return;
          }

          var r = t.x,
              a = t.y;
          if (r >= e.left && r <= e.right && a >= e.top && a <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
            var u = s[l];

            if (r >= u.left && r <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
              if ("click" === i) {
                n.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                break;
              }

              if ("mousemove" === i) {
                n.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                break;
              }
            }
          }
          return o;
        }
      });

      function c(t, e) {
        var n = new u({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        a.configure(t, n, e), a.addBox(t, n), t.legend = n;
      }

      e.exports = {
        id: "legend",
        _element: u,
        beforeInit: function beforeInit(t) {
          var e = t.options.legend;
          e && c(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              n = t.legend;
          e ? (r.mergeIf(e, i.global.legend), n ? (a.configure(t, n, e), n.options = e) : c(t, e)) : n && (a.removeBox(t, n), delete t.legend);
        },
        afterEvent: function afterEvent(t, e) {
          var n = t.legend;
          n && n.handleEvent(e);
        }
      };
    }, {
      26: 26,
      27: 27,
      31: 31,
      46: 46
    }],
    53: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(27),
          r = t(46),
          a = t(31),
          s = r.noop;

      i._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });

      var l = o.extend({
        initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [];
        },
        beforeUpdate: s,
        update: function update(t, e, n) {
          var i = this;
          return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: s,
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = t.options,
              n = e.display,
              o = (0, r.valueOrDefault)(e.fontSize, i.global.defaultFontSize),
              a = t.minSize,
              s = r.isArray(e.text) ? e.text.length : 1,
              l = r.options.toLineHeight(e.lineHeight, o),
              u = n ? s * l + 2 * e.padding : 0;
          t.isHorizontal() ? (a.width = t.maxWidth, a.height = u) : (a.width = u, a.height = t.maxHeight), t.width = a.width, t.height = a.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function draw() {
          var t = this,
              e = t.ctx,
              n = r.valueOrDefault,
              o = t.options,
              a = i.global;

          if (o.display) {
            var s,
                l,
                u,
                c = n(o.fontSize, a.defaultFontSize),
                d = n(o.fontStyle, a.defaultFontStyle),
                h = n(o.fontFamily, a.defaultFontFamily),
                f = r.fontString(c, d, h),
                p = r.options.toLineHeight(o.lineHeight, c),
                g = p / 2 + o.padding,
                m = 0,
                v = t.top,
                b = t.left,
                y = t.bottom,
                x = t.right;
            e.fillStyle = n(o.fontColor, a.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (x - b) / 2, u = v + g, s = x - b) : (l = "left" === o.position ? b + g : x - g, u = v + (y - v) / 2, s = y - v, m = Math.PI * ("left" === o.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
            var w = o.text;
            if (r.isArray(w)) for (var _ = 0, C = 0; C < w.length; ++C) {
              e.fillText(w[C], 0, _, s), _ += p;
            } else e.fillText(w, 0, 0, s);
            e.restore();
          }
        }
      });

      function u(t, e) {
        var n = new l({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        a.configure(t, n, e), a.addBox(t, n), t.titleBlock = n;
      }

      e.exports = {
        id: "title",
        _element: l,
        beforeInit: function beforeInit(t) {
          var e = t.options.title;
          e && u(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              n = t.titleBlock;
          e ? (r.mergeIf(e, i.global.title), n ? (a.configure(t, n, e), n.options = e) : u(t, e)) : n && (a.removeBox(t, n), delete t.titleBlock);
        }
      };
    }, {
      26: 26,
      27: 27,
      31: 31,
      46: 46
    }],
    54: [function (t, e, n) {
      "use strict";

      var i = t(33),
          o = t(34);

      e.exports = function () {
        var t = i.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                n = e.getLabels();
            e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this,
                i = n.chart.data,
                o = n.isHorizontal();
            return i.yLabels && !o ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var n,
                i = this,
                o = i.options.offset,
                r = Math.max(i.maxIndex + 1 - i.minIndex - (o ? 0 : 1), 1);

            if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
              var a = i.getLabels().indexOf(t = n || t);
              e = -1 !== a ? a : e;
            }

            if (i.isHorizontal()) {
              var s = i.width / r,
                  l = s * (e - i.minIndex);
              return o && (l += s / 2), i.left + Math.round(l);
            }

            var u = i.height / r,
                c = u * (e - i.minIndex);
            return o && (c += u / 2), i.top + Math.round(c);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.options.offset,
                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                o = e.isHorizontal(),
                r = (o ? e.width : e.height) / i;
            return t -= o ? e.left : e.top, n && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        o.registerScaleType("category", t, {
          position: "bottom"
        });
      };
    }, {
      33: 33,
      34: 34
    }],
    55: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(46),
          r = t(34),
          a = t(35);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.linear
          }
        },
            n = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                n = t.chart,
                i = n.data.datasets,
                r = t.isHorizontal();

            function a(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null;
            var s = e.stacked;

            if (void 0 === s && o.each(i, function (t, e) {
              if (!s) {
                var i = n.getDatasetMeta(e);
                n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              o.each(i, function (i, r) {
                var s = n.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var c = l[u].positiveValues,
                    d = l[u].negativeValues;
                n.isDatasetVisible(r) && a(s) && o.each(i.data, function (n, i) {
                  var o = +t.getRightValue(n);
                  isNaN(o) || s.data[i].hidden || (c[i] = c[i] || 0, d[i] = d[i] || 0, e.relativePoints ? c[i] = 100 : o < 0 ? d[i] += o : c[i] += o);
                });
              }), o.each(l, function (e) {
                var n = e.positiveValues.concat(e.negativeValues),
                    i = o.min(n),
                    r = o.max(n);
                t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? r : Math.max(t.max, r);
              });
            } else o.each(i, function (e, i) {
              var r = n.getDatasetMeta(i);
              n.isDatasetVisible(i) && a(r) && o.each(e.data, function (e, n) {
                var i = +t.getRightValue(e);
                isNaN(i) || r.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
              });
            });

            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;
            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var n = o.valueOrDefault(e.fontSize, i.global.defaultFontSize);
              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e = this,
                n = e.start,
                i = +e.getRightValue(t),
                o = e.end - n;
            return e.isHorizontal() ? e.left + e.width / o * (i - n) : e.bottom - e.height / o * (i - n);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.isHorizontal();
            return e.start + (n ? t - e.left : e.bottom - t) / (n ? e.width : e.height) * (e.end - e.start);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        r.registerScaleType("linear", n, e);
      };
    }, {
      26: 26,
      34: 34,
      35: 35,
      46: 46
    }],
    56: [function (t, e, n) {
      "use strict";

      var i = t(46),
          o = t(33);

      e.exports = function (t) {
        var e = i.noop;
        t.LinearScaleBase = o.extend({
          getRightValue: function getRightValue(t) {
            return "string" == typeof t ? +t : o.prototype.getRightValue.call(this, t);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var n = i.sign(t.min),
                  o = i.sign(t.max);
              n < 0 && o < 0 ? t.max = 0 : n > 0 && o > 0 && (t.min = 0);
            }

            var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                a = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), r !== a && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = t.getTickLimit(),
                o = {
              maxTicks: n = Math.max(2, n),
              min: e.min,
              max: e.max,
              precision: e.precision,
              stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                r = t.ticks = function (t, e) {
              var n,
                  o,
                  r,
                  a = [];
              if (t.stepSize && t.stepSize > 0) r = t.stepSize;else {
                var s = i.niceNum(e.max - e.min, !1);
                r = i.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (o = t.precision) && (n = Math.pow(10, o), r = Math.ceil(r * n) / n);
              }
              var l = Math.floor(e.min / r) * r,
                  u = Math.ceil(e.max / r) * r;
              i.isNullOrUndef(t.min) || i.isNullOrUndef(t.max) || !t.stepSize || i.almostWhole((t.max - t.min) / t.stepSize, r / 1e3) && (l = t.min, u = t.max);
              var c = (u - l) / r;
              c = i.almostEquals(c, Math.round(c), r / 1e3) ? Math.round(c) : Math.ceil(c), o = 1, r < 1 && (o = Math.pow(10, 1 - Math.floor(i.log10(r))), l = Math.round(l * o) / o, u = Math.round(u * o) / o), a.push(void 0 !== t.min ? t.min : l);

              for (var d = 1; d < c; ++d) {
                a.push(Math.round((l + d * r) * o) / o);
              }

              return a.push(void 0 !== t.max ? t.max : u), a;
            }(o, t);

            t.handleDirectionalChanges(), t.max = i.max(r), t.min = i.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this;
            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), o.prototype.convertTicksToLabels.call(t);
          }
        });
      };
    }, {
      33: 33,
      46: 46
    }],
    57: [function (t, e, n) {
      "use strict";

      var i = t(46),
          o = t(33),
          r = t(34),
          a = t(35);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            n = o.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                n = t.chart,
                o = n.data.datasets,
                r = t.isHorizontal();

            function a(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null, t.minNotZero = null;
            var s = e.stacked;

            if (void 0 === s && i.each(o, function (t, e) {
              if (!s) {
                var i = n.getDatasetMeta(e);
                n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              i.each(o, function (o, r) {
                var s = n.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                n.isDatasetVisible(r) && a(s) && (void 0 === l[u] && (l[u] = []), i.each(o.data, function (e, n) {
                  var i = l[u],
                      o = +t.getRightValue(e);
                  isNaN(o) || s.data[n].hidden || o < 0 || (i[n] = i[n] || 0, i[n] += o);
                }));
              }), i.each(l, function (e) {
                if (e.length > 0) {
                  var n = i.min(e),
                      o = i.max(e);
                  t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o);
                }
              });
            } else i.each(o, function (e, o) {
              var r = n.getDatasetMeta(o);
              n.isDatasetVisible(o) && a(r) && i.each(e.data, function (e, n) {
                var i = +t.getRightValue(e);
                isNaN(i) || r.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i));
              });
            });

            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks,
                n = i.valueOrDefault;
            t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(i.log10(t.max))) : 1);
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = !t.isHorizontal(),
                o = t.ticks = function (t, e) {
              var n,
                  o,
                  r = [],
                  a = i.valueOrDefault,
                  s = a(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                  l = Math.floor(i.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));
              0 === s ? (n = Math.floor(i.log10(e.minNotZero)), o = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(s), s = o * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), o = Math.floor(s / Math.pow(10, n)));
              var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;

              do {
                r.push(s), 10 == ++o && (o = 1, c = ++n >= 0 ? 1 : c), s = Math.round(o * Math.pow(10, n) * c) / c;
              } while (n < l || n === l && o < u);

              var d = a(t.max, s);
              return r.push(d), r;
            }({
              min: e.min,
              max: e.max
            }, t);

            t.max = i.max(o), t.min = i.min(o), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && o.reverse();
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), o.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          _getFirstTickValue: function _getFirstTickValue(t) {
            var e = Math.floor(i.log10(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          },
          getPixelForValue: function getPixelForValue(e) {
            var n,
                o,
                r,
                a,
                s,
                l = this,
                u = l.options.ticks.reverse,
                c = i.log10,
                d = l._getFirstTickValue(l.minNotZero),
                h = 0;

            return e = +l.getRightValue(e), u ? (r = l.end, a = l.start, s = -1) : (r = l.start, a = l.end, s = 1), l.isHorizontal() ? (n = l.width, o = u ? l.right : l.left) : (n = l.height, s *= -1, o = u ? l.top : l.bottom), e !== r && (0 === r && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), r = d), 0 !== e && (h += n / (c(a) - c(r)) * (c(e) - c(r))), o += s * h), o;
          },
          getValueForPixel: function getValueForPixel(e) {
            var n,
                o,
                r,
                a,
                s = this,
                l = s.options.ticks.reverse,
                u = i.log10,
                c = s._getFirstTickValue(s.minNotZero);

            if (l ? (o = s.end, r = s.start) : (o = s.start, r = s.end), s.isHorizontal() ? (n = s.width, a = l ? s.right - e : e - s.left) : (n = s.height, a = l ? e - s.top : s.bottom - e), a !== o) {
              if (0 === o) {
                var d = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                a -= d, n -= d, o = c;
              }

              a *= u(r) - u(o), a /= n, a = Math.pow(10, u(o) + a);
            }

            return a;
          }
        });
        r.registerScaleType("logarithmic", n, e);
      };
    }, {
      33: 33,
      34: 34,
      35: 35,
      46: 46
    }],
    58: [function (t, e, n) {
      "use strict";

      var i = t(26),
          o = t(46),
          r = t(34),
          a = t(35);

      e.exports = function (t) {
        var e = i.global,
            n = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: a.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        };

        function s(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function l(t) {
          var n = t.options.pointLabels,
              i = o.valueOrDefault(n.fontSize, e.defaultFontSize),
              r = o.valueOrDefault(n.fontStyle, e.defaultFontStyle),
              a = o.valueOrDefault(n.fontFamily, e.defaultFontFamily);
          return {
            size: i,
            style: r,
            family: a,
            font: o.fontString(i, r, a)
          };
        }

        function u(t, e, n, i, o) {
          return t === i || t === o ? {
            start: e - n / 2,
            end: e + n / 2
          } : t < i || t > o ? {
            start: e - n - 5,
            end: e
          } : {
            start: e,
            end: e + n + 5
          };
        }

        function c(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }

        function d(t, e, n, i) {
          if (o.isArray(e)) for (var r = n.y, a = 1.5 * i, s = 0; s < e.length; ++s) {
            t.fillText(e[s], n.x, r), r += a;
          } else t.fillText(e, n.x, n.y);
        }

        function h(t, e, n) {
          90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
        }

        function f(t) {
          return o.isNumber(t) ? t : 0;
        }

        var p = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                n = t.options,
                i = n.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var r = o.min([t.height, t.width]),
                a = o.valueOrDefault(i.fontSize, e.defaultFontSize);
            t.drawingArea = n.display ? r / 2 - (a / 2 + i.backdropPaddingY) : r / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            o.each(e.data.datasets, function (r, a) {
              if (e.isDatasetVisible(a)) {
                var s = e.getDatasetMeta(a);
                o.each(r.data, function (e, o) {
                  var r = +t.getRightValue(e);
                  isNaN(r) || s.data[o].hidden || (n = Math.min(r, n), i = Math.max(r, i));
                });
              }
            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                n = o.valueOrDefault(t.fontSize, e.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t;
            this.options.pointLabels.display ? function (t) {
              var e,
                  n,
                  i,
                  r = l(t),
                  a = Math.min(t.height / 2, t.width / 2),
                  c = {
                r: t.width,
                l: 0,
                t: t.height,
                b: 0
              },
                  d = {};
              t.ctx.font = r.font, t._pointLabelSizes = [];
              var h,
                  f,
                  p,
                  g = s(t);

              for (e = 0; e < g; e++) {
                i = t.getPointPosition(e, a), h = t.ctx, f = r.size, n = o.isArray(p = t.pointLabels[e] || "") ? {
                  w: o.longestText(h, h.font, p),
                  h: p.length * f + 1.5 * (p.length - 1) * f
                } : {
                  w: h.measureText(p).width,
                  h: f
                }, t._pointLabelSizes[e] = n;
                var m = t.getIndexAngle(e),
                    v = o.toDegrees(m) % 360,
                    b = u(v, i.x, n.w, 0, 180),
                    y = u(v, i.y, n.h, 90, 270);
                b.start < c.l && (c.l = b.start, d.l = m), b.end > c.r && (c.r = b.end, d.r = m), y.start < c.t && (c.t = y.start, d.t = m), y.end > c.b && (c.b = y.end, d.b = m);
              }

              t.setReductions(a, c, d);
            }(this) : (t = Math.min(this.height / 2, this.width / 2), this.drawingArea = Math.round(t), this.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function setReductions(t, e, n) {
            var i = e.l / Math.sin(n.l),
                o = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                r = -e.t / Math.cos(n.t),
                a = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
            i = f(i), o = f(o), r = f(r), a = f(a), this.drawingArea = Math.min(Math.round(t - (i + o) / 2), Math.round(t - (r + a) / 2)), this.setCenterPoint(i, o, r, a);
          },
          setCenterPoint: function setCenterPoint(t, e, n, i) {
            var o = this,
                r = n + o.drawingArea,
                a = o.height - i - o.drawingArea;
            o.xCenter = Math.round((t + o.drawingArea + (o.width - e - o.drawingArea)) / 2 + o.left), o.yCenter = Math.round((r + a) / 2 + o.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function getPointPosition(t, e) {
            var n = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(n) * e) + this.xCenter,
              y: Math.round(Math.sin(n) * e) + this.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          },
          draw: function draw() {
            var t = this,
                n = t.options,
                i = n.gridLines,
                r = n.ticks,
                a = o.valueOrDefault;

            if (n.display) {
              var u = t.ctx,
                  f = this.getIndexAngle(0),
                  p = a(r.fontSize, e.defaultFontSize),
                  g = a(r.fontStyle, e.defaultFontStyle),
                  m = a(r.fontFamily, e.defaultFontFamily),
                  v = o.fontString(p, g, m);
              o.each(t.ticks, function (n, l) {
                if (l > 0 || r.reverse) {
                  var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);

                  if (i.display && 0 !== l && function (t, e, n, i) {
                    var r = t.ctx;
                    if (r.strokeStyle = o.valueAtIndexOrDefault(e.color, i - 1), r.lineWidth = o.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
                      var a = s(t);
                      if (0 === a) return;
                      r.beginPath();
                      var l = t.getPointPosition(0, n);
                      r.moveTo(l.x, l.y);

                      for (var u = 1; u < a; u++) {
                        l = t.getPointPosition(u, n), r.lineTo(l.x, l.y);
                      }

                      r.closePath(), r.stroke();
                    }
                  }(t, i, c, l), r.display) {
                    var d = a(r.fontColor, e.defaultFontColor);

                    if (u.font = v, u.save(), u.translate(t.xCenter, t.yCenter), u.rotate(f), r.showLabelBackdrop) {
                      var h = u.measureText(n).width;
                      u.fillStyle = r.backdropColor, u.fillRect(-h / 2 - r.backdropPaddingX, -c - p / 2 - r.backdropPaddingY, h + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY);
                    }

                    u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = d, u.fillText(n, 0, -c), u.restore();
                  }
                }
              }), (n.angleLines.display || n.pointLabels.display) && function (t) {
                var n = t.ctx,
                    i = t.options,
                    r = i.angleLines,
                    a = i.pointLabels;
                n.lineWidth = r.lineWidth, n.strokeStyle = r.color;
                var u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                    f = l(t);
                n.textBaseline = "top";

                for (var p = s(t) - 1; p >= 0; p--) {
                  if (r.display) {
                    var g = t.getPointPosition(p, u);
                    n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath();
                  }

                  if (a.display) {
                    var m = t.getPointPosition(p, u + 5),
                        v = o.valueAtIndexOrDefault(a.fontColor, p, e.defaultFontColor);
                    n.font = f.font, n.fillStyle = v;
                    var b = t.getIndexAngle(p),
                        y = o.toDegrees(b);
                    n.textAlign = c(y), h(y, t._pointLabelSizes[p], m), d(n, t.pointLabels[p] || "", m, f.size);
                  }
                }
              }(t);
            }
          }
        });
        r.registerScaleType("radialLinear", p, n);
      };
    }, {
      26: 26,
      34: 34,
      35: 35,
      46: 46
    }],
    59: [function (t, e, n) {
      "use strict";

      var i = t(1);
      i = "function" == typeof i ? i : window.moment;
      var o = t(26),
          r = t(46),
          a = t(33),
          s = t(34),
          l = Number.MIN_SAFE_INTEGER || -9007199254740991,
          u = Number.MAX_SAFE_INTEGER || 9007199254740991,
          c = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 15, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 15, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          d = Object.keys(c);

      function h(t, e) {
        return t - e;
      }

      function f(t) {
        var e,
            n,
            i,
            o = {},
            r = [];

        for (e = 0, n = t.length; e < n; ++e) {
          o[i = t[e]] || (o[i] = !0, r.push(i));
        }

        return r;
      }

      function p(t, e, n, i) {
        var o = function (t, e, n) {
          for (var i, o, r, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
            if (r = t[i = a + s >> 1], !(o = t[i - 1] || null)) return {
              lo: null,
              hi: r
            };
            if (r[e] < n) a = i + 1;else {
              if (!(o[e] > n)) return {
                lo: o,
                hi: r
              };
              s = i - 1;
            }
          }

          return {
            lo: r,
            hi: null
          };
        }(t, e, n),
            r = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
            a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
            s = a[e] - r[e];

        return r[i] + (a[i] - r[i]) * (s ? (n - r[e]) / s : 0);
      }

      function g(t, e) {
        var n = e.parser,
            o = e.parser || e.format;
        return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof o ? i(t, o) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof o ? o(t) : t);
      }

      function m(t, e) {
        if (r.isNullOrUndef(t)) return null;
        var n = e.options.time,
            i = g(e.getRightValue(t), n);
        return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null;
      }

      function v(t) {
        for (var e = d.indexOf(t) + 1, n = d.length; e < n; ++e) {
          if (c[d[e]].common) return d[e];
        }
      }

      e.exports = function () {
        var t = a.extend({
          initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), a.prototype.initialize.call(this);
          },
          update: function update() {
            var t = this.options;
            return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a.prototype.update.apply(this, arguments);
          },
          getRightValue: function getRightValue(t) {
            return t && void 0 !== t.t && (t = t.t), a.prototype.getRightValue.call(this, t);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                n,
                o,
                a,
                s,
                c = this,
                d = c.chart,
                p = c.options.time,
                g = p.unit || "day",
                v = u,
                b = l,
                y = [],
                x = [],
                w = [];

            for (t = 0, n = d.data.labels.length; t < n; ++t) {
              w.push(m(d.data.labels[t], c));
            }

            for (t = 0, n = (d.data.datasets || []).length; t < n; ++t) {
              if (d.isDatasetVisible(t)) {
                if (r.isObject((a = d.data.datasets[t].data)[0])) for (x[t] = [], e = 0, o = a.length; e < o; ++e) {
                  s = m(a[e], c), y.push(s), x[t][e] = s;
                } else y.push.apply(y, w), x[t] = w.slice(0);
              } else x[t] = [];
            }

            w.length && (w = f(w).sort(h), v = Math.min(v, w[0]), b = Math.max(b, w[w.length - 1])), y.length && (y = f(y).sort(h), v = Math.min(v, y[0]), b = Math.max(b, y[y.length - 1])), v = m(p.min, c) || v, b = m(p.max, c) || b, v = v === u ? +i().startOf(g) : v, b = b === l ? +i().endOf(g) + 1 : b, c.min = Math.min(v, b), c.max = Math.max(v + 1, b), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = {
              data: y,
              datasets: x,
              labels: w
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                n,
                o = this,
                a = o.min,
                s = o.max,
                l = o.options,
                h = l.time,
                f = [],
                b = [];

            switch (l.ticks.source) {
              case "data":
                f = o._timestamps.data;
                break;

              case "labels":
                f = o._timestamps.labels;
                break;

              case "auto":
              default:
                f = function (t, e, n, o) {
                  var a,
                      s = o.time,
                      l = s.unit || function (t, e, n, i) {
                    var o,
                        r,
                        a = d.length;

                    for (o = d.indexOf(s.minUnit); o < a - 1; ++o) {
                      if ((r = c[d[o]]).common && Math.ceil((n - e) / ((r.steps ? r.steps[r.steps.length - 1] : u) * r.size)) <= i) return d[o];
                    }

                    return d[a - 1];
                  }(0, t, e, n),
                      h = v(l),
                      f = r.valueOrDefault(s.stepSize, s.unitStepSize),
                      p = "week" === l && s.isoWeekday,
                      g = o.ticks.major.enabled,
                      m = c[l],
                      b = i(t),
                      y = i(e),
                      x = [];

                  for (f || (f = function (t, e, n, i) {
                    var o,
                        r,
                        a,
                        s = e - t,
                        u = c[l],
                        d = u.size,
                        h = u.steps;
                    if (!h) return Math.ceil(s / (i * d));

                    for (o = 0, r = h.length; o < r && (a = h[o], !(Math.ceil(s / (d * a)) <= i)); ++o) {
                      ;
                    }

                    return a;
                  }(t, e, 0, n)), p && (b = b.isoWeekday(p), y = y.isoWeekday(p)), b = b.startOf(p ? "day" : l), (y = y.startOf(p ? "day" : l)) < e && y.add(1, l), a = i(b), g && h && !p && !s.round && (a.startOf(h), a.add(~~((b - a) / (m.size * f)) * f, l)); a < y; a.add(f, l)) {
                    x.push(+a);
                  }

                  return x.push(+a), x;
                }(a, s, o.getLabelCapacity(a), l);

            }

            for ("ticks" === l.bounds && f.length && (a = f[0], s = f[f.length - 1]), a = m(h.min, o) || a, s = m(h.max, o) || s, t = 0, e = f.length; t < e; ++t) {
              (n = f[t]) >= a && n <= s && b.push(n);
            }

            return o.min = a, o.max = s, o._unit = h.unit || function (t, e, n, r) {
              var a,
                  s,
                  l = i.duration(i(o.max).diff(i(n)));

              for (a = d.length - 1; a >= d.indexOf(e); a--) {
                if (c[s = d[a]].common && l.as(s) >= t.length) return s;
              }

              return d[e ? d.indexOf(e) : 0];
            }(b, h.minUnit, o.min), o._majorUnit = v(o._unit), o._table = function (t, e, n, i) {
              if ("linear" === l.distribution || !t.length) return [{
                time: e,
                pos: 0
              }, {
                time: n,
                pos: 1
              }];
              var o,
                  r,
                  a,
                  s,
                  u,
                  c = [],
                  d = [e];

              for (o = 0, r = t.length; o < r; ++o) {
                (s = t[o]) > e && s < n && d.push(s);
              }

              for (d.push(n), o = 0, r = d.length; o < r; ++o) {
                u = d[o + 1], s = d[o], void 0 !== (a = d[o - 1]) && void 0 !== u && Math.round((u + a) / 2) === s || c.push({
                  time: s,
                  pos: o / (r - 1)
                });
              }

              return c;
            }(o._timestamps.data, a, s), o._offsets = function (t, e, n, i, o) {
              var r,
                  a = 0,
                  s = 0;
              return o.offset && e.length && (o.time.min || (r = e[0], a = (p(t, "time", e.length > 1 ? e[1] : i, "pos") - p(t, "time", r, "pos")) / 2), o.time.max || (r = e.length > 1 ? e[e.length - 2] : n, s = (p(t, "time", e[e.length - 1], "pos") - p(t, "time", r, "pos")) / 2)), {
                left: a,
                right: s
              };
            }(o._table, b, a, s, l), o._labelFormat = function (t, e) {
              var n,
                  i,
                  o,
                  r = t.length;

              for (n = 0; n < r; n++) {
                if (0 !== (i = g(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                0 === i.second() && 0 === i.minute() && 0 === i.hour() || (o = !0);
              }

              return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(o._timestamps.data, h), function (t, e) {
              var n,
                  o,
                  r,
                  a,
                  s = [];

              for (n = 0, o = t.length; n < o; ++n) {
                r = t[n], a = !!e && r === +i(r).startOf(e), s.push({
                  value: r,
                  major: a
                });
              }

              return s;
            }(b, o._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this.chart.data,
                i = this.options.time,
                o = n.labels && t < n.labels.length ? n.labels[t] : "",
                a = n.datasets[e].data[t];
            return r.isObject(a) && (o = this.getRightValue(a)), i.tooltipFormat ? g(o, i).format(i.tooltipFormat) : "string" == typeof o ? o : g(o, i).format(this._labelFormat);
          },
          tickFormatFunction: function tickFormatFunction(t, e, n, i) {
            var o = this.options,
                a = t.valueOf(),
                s = o.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                c = s[u],
                d = t.clone().startOf(u).valueOf(),
                h = o.ticks.major,
                f = h.enabled && u && c && a === d,
                p = t.format(i || (f ? c : l)),
                g = f ? h : o.ticks.minor,
                m = r.valueOrDefault(g.callback, g.userCallback);
            return m ? m(p, e, n) : p;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                n,
                o = [];

            for (e = 0, n = t.length; e < n; ++e) {
              o.push(this.tickFormatFunction(i(t[e].value), e, t));
            }

            return o;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                i = e._horizontal ? e.left : e.top,
                o = p(e._table, "time", t, "pos");
            return i + n * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = m(t, this)), null !== i) return this.getPixelForOffset(i);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                o = p(e._table, "pos", (n ? (t - (e._horizontal ? e.left : e.top)) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right, "time");
            return i(o);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = r.toRadians(e.maxRotation),
                a = Math.cos(i),
                s = Math.sin(i);
            return n * a + r.valueOrDefault(e.fontSize, o.global.defaultFontSize) * s;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                n = e.options.time.displayFormats.millisecond,
                o = e.tickFormatFunction(i(t), 0, [], n),
                r = e.getLabelWidth(o),
                a = e.isHorizontal() ? e.width : e.height,
                s = Math.floor(a / r);
            return s > 0 ? s : 1;
          }
        });
        s.registerScaleType("time", t, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      26: 26,
      33: 33,
      34: 34,
      46: 46
    }]
  }, {}, [7])(7);
});