! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
            "use strict";
            var n = [],
                i = e.document,
                r = Object.getPrototypeOf,
                o = n.slice,
                s = n.concat,
                a = n.push,
                l = n.indexOf,
                u = {},
                c = u.toString,
                f = u.hasOwnProperty,
                h = f.toString,
                d = h.call(Object),
                p = {},
                g = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                m = function(e) {
                    return null != e && e === e.window
                },
                v = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function y(e, t, n) {
                var r, o, s = (n = n || i).createElement("script");
                if (s.text = e, t)
                    for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, o);
                n.head.appendChild(s).parentNode.removeChild(s)
            }

            function _(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
            }
            var b = "3.4.1",
                w = function(e, t) {
                    return new w.fn.init(e, t)
                },
                E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = _(e);
                return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            w.fn = w.prototype = {
                jquery: b,
                constructor: w,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return w.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(w.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, i, r, o, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[t] = w.extend(u, o, i)) : void 0 !== i && (s[t] = i));
                return s
            }, w.extend({
                expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === d)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t) {
                    y(e, {
                        nonce: t && t.nonce
                    })
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (T(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(E, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r, o = 0,
                        a = [];
                    if (T(e))
                        for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                    else
                        for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                    return s.apply([], a)
                },
                guid: 1,
                support: p
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }));
            var x =
            /*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
            function(e) {
                var t, n, i, r, o, s, a, l, u, c, f, h, d, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    E = 0,
                    T = 0,
                    x = le(),
                    C = le(),
                    S = le(),
                    D = le(),
                    A = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    N = {}.hasOwnProperty,
                    I = [],
                    k = I.pop,
                    O = I.push,
                    L = I.push,
                    j = I.slice,
                    P = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    q = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    M = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
                    F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                    W = new RegExp(q + "+", "g"),
                    B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                    U = new RegExp("^" + q + "*," + q + "*"),
                    $ = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                    K = new RegExp(q + "|>"),
                    Q = new RegExp(F),
                    V = new RegExp("^" + R + "$"),
                    z = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + M),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + H + ")$", "i"),
                        needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /HTML$/i,
                    X = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
                    ne = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        h()
                    },
                    se = be((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    L.apply(I = j.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
                } catch (e) {
                    L = {
                        apply: I.length ? function(e, t) {
                            O.apply(e, j.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
            
                function ae(e, t, i, r) {
                    var o, a, u, c, f, p, v, y = t && t.ownerDocument,
                        E = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
                    if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), t = t || d, g)) {
                        if (11 !== E && (f = Z.exec(e)))
                            if (o = f[1]) {
                                if (9 === E) {
                                    if (!(u = t.getElementById(o))) return i;
                                    if (u.id === o) return i.push(u), i
                                } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i
                            } else {
                                if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                            } if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === E && K.test(e)) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = b), a = (p = s(e)).length; a--;) p[a] = "#" + c + " " + _e(p[a]);
                                v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                            }
                            try {
                                return L.apply(i, y.querySelectorAll(v)), i
                            } catch (t) {
                                D(e, !0)
                            } finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(B, "$1"), t, i, r)
                }
            
                function le() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                }
            
                function ue(e) {
                    return e[b] = !0, e
                }
            
                function ce(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }
            
                function fe(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                }
            
                function he(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }
            
                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
            
                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
            
                function ge(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }
            
                function me(e) {
                    return ue((function(t) {
                        return t = +t, ue((function(n, i) {
                            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        }))
                    }))
                }
            
                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }, h = ae.setDocument = function(e) {
                        var t, r, s = e ? e.ownerDocument || e : w;
                        return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), w !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ce((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ce((function(e) {
                            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ce((function(e) {
                            return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                        })), n.getById ? (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, i, r, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ce((function(e) {
                            p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + q + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                        })), ce((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                        })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return f = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === w && _(w, e) ? -1 : t === d || t.ownerDocument === w && _(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return f = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (r === o) return he(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? he(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                        }, d) : d
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== d && h(e), n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {
                            D(t, !0)
                        }
                        return ae(t, d, null, [e]).length > 0
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) !== d && h(e), _(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) !== d && h(e);
                        var r = i.attrHandle[t.toLowerCase()],
                            o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(ie, re)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, i = [],
                            r = 0,
                            o = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                            for (; t = e[o++];) t === e[o] && (r = i.push(o));
                            for (; r--;) e.splice(i[r], 1)
                        }
                        return c = null, e
                    }, r = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, i = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: z,
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
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = x[e + " "];
                                return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && x(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var r = ae.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var u, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        _ = !1;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (h = t; h = h[g];)
                                                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                p = g = "only" === e && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                            for (_ = (d = (u = (c = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop();)
                                                if (1 === h.nodeType && ++_ && h === t) {
                                                    c[e] = [E, d, _];
                                                    break
                                                }
                                        } else if (y && (_ = d = (u = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === _)
                                            for (;
                                                (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, _]), h !== t)););
                                        return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                    for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
                                })) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ue((function(e) {
                                var t = [],
                                    n = [],
                                    i = a(e.replace(B, "$1"));
                                return i[b] ? ue((function(e, t, n, r) {
                                    for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                })) : function(e, r, o) {
                                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ue((function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            })),
                            contains: ue((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || r(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ue((function(e) {
                                return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === p
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return G.test(e.nodeName)
                            },
                            input: function(e) {
                                return X.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: me((function() {
                                return [0]
                            })),
                            last: me((function(e, t) {
                                return [t - 1]
                            })),
                            eq: me((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: me((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: me((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: me((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                return e
                            })),
                            gt: me((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            }))
                        }
                    }, i.pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = de(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[t] = pe(t);
            
                function ye() {}
            
                function _e(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }
            
                function be(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        o = r || i,
                        s = n && "parentNode" === o,
                        a = T++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) return e(t, n, r);
                        return !1
                    } : function(t, n, l) {
                        var u, c, f, h = [E, a];
                        if (l) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || s)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else {
                                        if ((u = c[o]) && u[0] === E && u[1] === a) return h[2] = u[2];
                                        if (c[o] = h, h[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }
            
                function we(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }
            
                function Ee(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                    return s
                }
            
                function Te(e, t, n, i, r, o) {
                    return i && !i[b] && (i = Te(i)), r && !r[b] && (r = Te(r, o)), ue((function(o, s, a, l) {
                        var u, c, f, h = [],
                            d = [],
                            p = s.length,
                            g = o || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []),
                            m = !e || !o && t ? g : Ee(g, h, e, a, l),
                            v = n ? r || (o ? e : p || i) ? [] : s : m;
                        if (n && n(m, v, a, l), i)
                            for (u = Ee(v, d), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                                    r(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(f = v[c]) && (u = r ? P(o, f) : h[c]) > -1 && (o[u] = !(s[u] = f))
                            }
                        } else v = Ee(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
                    }))
                }
            
                function xe(e) {
                    for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = be((function(e) {
                            return e === t
                        }), a, !0), f = be((function(e) {
                            return P(t, e) > -1
                        }), a, !0), h = [function(e, n, i) {
                            var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                            return t = null, r
                        }]; l < o; l++)
                        if (n = i.relative[e[l].type]) h = [be(we(h), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                return Te(l > 1 && we(h), l > 1 && _e(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && _e(e))
                            }
                            h.push(n)
                        } return we(h)
                }
                return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
                    var n, r, o, s, a, l, u, c = C[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, l = [], u = i.preFilter; a;) {
                        for (s in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = $.exec(a)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }), a = a.slice(n.length)), i.filter) !(r = z[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: s,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
                }, a = ae.compile = function(e, t) {
                    var n, r = [],
                        o = [],
                        a = S[e + " "];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--;)(a = xe(t[n]))[b] ? r.push(a) : o.push(a);
                        a = S(e, function(e, t) {
                            var n = t.length > 0,
                                r = e.length > 0,
                                o = function(o, s, a, l, c) {
                                    var f, p, m, v = 0,
                                        y = "0",
                                        _ = o && [],
                                        b = [],
                                        w = u,
                                        T = o || r && i.find.TAG("*", c),
                                        x = E += null == w ? 1 : Math.random() || .1,
                                        C = T.length;
                                    for (c && (u = s === d || s || c); y !== C && null != (f = T[y]); y++) {
                                        if (r && f) {
                                            for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];)
                                                if (m(f, s || d, a)) {
                                                    l.push(f);
                                                    break
                                                } c && (E = x)
                                        }
                                        n && ((f = !m && f) && v--, o && _.push(f))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (p = 0; m = t[p++];) m(_, b, s, a);
                                        if (o) {
                                            if (v > 0)
                                                for (; y--;) _[y] || b[y] || (b[y] = k.call(l));
                                            b = Ee(b)
                                        }
                                        L.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                    }
                                    return c && (E = x, u = w), _
                                };
                            return n ? ue(o) : o
                        }(o, r)), a.selector = e
                    }
                    return a
                }, l = ae.select = function(e, t, n, r) {
                    var o, l, u, c, f, h = "function" == typeof e && e,
                        d = !r && s(e = h.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                            h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (o = z.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                            if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                if (l.splice(o, 1), !(e = r.length && _e(l))) return L.apply(n, r), n;
                                break
                            }
                    }
                    return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                })), ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || fe("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || fe("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ce((function(e) {
                    return null == e.getAttribute("disabled")
                })) || fe(H, (function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                })), ae
            }(e);
            w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
            var C = function(e, t, n) {
                    for (var i = [], r = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && w(e).is(n)) break;
                            i.push(e)
                        } return i
                },
                S = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                D = w.expr.match.needsContext;
            
            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            
            function I(e, t, n) {
                return g(t) ? w.grep(e, (function(e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? w.grep(e, (function(e) {
                    return e === t !== n
                })) : "string" != typeof t ? w.grep(e, (function(e) {
                    return l.call(t, e) > -1 !== n
                })) : w.filter(t, e, n)
            }
            w.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function(e) {
                    return 1 === e.nodeType
                })))
            }, w.fn.extend({
                find: function(e) {
                    var t, n, i = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                        for (t = 0; t < i; t++)
                            if (w.contains(r[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
                    return i > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(I(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(I(this, e || [], !0))
                },
                is: function(e) {
                    return !!I(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
                }
            });
            var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || k, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), N.test(r[1]) && w.isPlainObject(t))
                            for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, k = w(i);
            var L = /^(?:parents|prev(?:Until|All))/,
                j = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            
            function P(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    }))
                },
                closest: function(e, t) {
                    var n, i = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof e && w(e);
                    if (!D.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return P(e, "nextSibling")
                },
                prev: function(e) {
                    return P(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return S(e.firstChild)
                },
                contents: function(e) {
                    return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, (function(e, t) {
                w.fn[e] = function(n, i) {
                    var r = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (j[e] || w.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
                }
            }));
            var H = /[^\x20\t\r\n\f]+/g;
            
            function q(e) {
                return e
            }
            
            function R(e) {
                throw e
            }
            
            function M(e, t, n, i) {
                var r;
                try {
                    e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return w.each(e.match(H) || [], (function(e, n) {
                        t[n] = !0
                    })), t
                }(e) : w.extend({}, e);
                var t, n, i, r, o = [],
                    s = [],
                    a = -1,
                    l = function() {
                        for (r = r || e.once, i = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                    },
                    u = {
                        add: function() {
                            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                                w.each(n, (function(n, i) {
                                    g(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== _(i) && t(i)
                                }))
                            }(arguments), n && !t && l()), this
                        },
                        remove: function() {
                            return w.each(arguments, (function(e, t) {
                                for (var n;
                                    (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                            })), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return r = s = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return r = s = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return u
            }, w.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        i = "pending",
                        r = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return r.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred((function(t) {
                                    w.each(n, (function(n, i) {
                                        var r = g(e[i[4]]) && e[i[4]];
                                        o[i[1]]((function() {
                                            var e = r && r.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            },
                            then: function(t, i, r) {
                                var o = 0;
            
                                function s(t, n, i, r) {
                                    return function() {
                                        var a = this,
                                            l = arguments,
                                            u = function() {
                                                var e, u;
                                                if (!(t < o)) {
                                                    if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then, g(u) ? r ? u.call(e, s(o, n, q, r), s(o, n, R, r)) : (o++, u.call(e, s(o, n, q, r), s(o, n, R, r), s(o, n, q, n.notifyWith))) : (i !== q && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                                }
                                            },
                                            c = r ? u : function() {
                                                try {
                                                    u()
                                                } catch (e) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== R && (a = void 0, l = [e]), n.rejectWith(a, l))
                                                }
                                            };
                                        t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                                    }
                                }
                                return w.Deferred((function(e) {
                                    n[0][3].add(s(0, e, g(r) ? r : q, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : q)), n[2][3].add(s(0, e, g(i) ? i : R))
                                })).promise()
                            },
                            promise: function(e) {
                                return null != e ? w.extend(e, r) : r
                            }
                        },
                        o = {};
                    return w.each(n, (function(e, t) {
                        var s = t[2],
                            a = t[5];
                        r[t[1]] = s.add, a && s.add((function() {
                            i = a
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[t[0] + "With"] = s.fireWith
                    })), r.promise(o), t && t.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        i = Array(n),
                        r = o.call(arguments),
                        s = w.Deferred(),
                        a = function(e) {
                            return function(n) {
                                i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                            }
                        };
                    if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
                    for (; n--;) M(r[n], a(n), s.reject);
                    return s.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, w.readyException = function(t) {
                e.setTimeout((function() {
                    throw t
                }))
            };
            var W = w.Deferred();
            
            function B() {
                i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
            }
            w.fn.ready = function(e) {
                return W.then(e).catch((function(e) {
                    w.readyException(e)
                })), this
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || W.resolveWith(i, [w]))
                }
            }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
            var U = function(e, t, n, i, r, o, s) {
                    var a = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === _(n))
                        for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
                    else if (void 0 !== i && (r = !0, g(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                            return u.call(w(e), n)
                        })), t))
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
                },
                $ = /^-ms-/,
                K = /-([a-z])/g;
            
            function Q(e, t) {
                return t.toUpperCase()
            }
            
            function V(e) {
                return e.replace($, "ms-").replace(K, Q)
            }
            var z = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            
            function Y() {
                this.expando = w.expando + Y.uid++
            }
            Y.uid = 1, Y.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[V(t)] = n;
                    else
                        for (i in t) r[V(i)] = t[i];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(H) || []).length;
                            for (; n--;) delete i[t[n]]
                        }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var X = new Y,
                G = new Y,
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Z = /[A-Z]/g;
            
            function ee(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        G.set(e, t, n)
                    } else n = void 0;
                return n
            }
            w.extend({
                hasData: function(e) {
                    return G.hasData(e) || X.hasData(e)
                },
                data: function(e, t, n) {
                    return G.access(e, t, n)
                },
                removeData: function(e, t) {
                    G.remove(e, t)
                },
                _data: function(e, t, n) {
                    return X.access(e, t, n)
                },
                _removeData: function(e, t) {
                    X.remove(e, t)
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, i, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), ee(o, i, r[i]));
                            X.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each((function() {
                        G.set(this, e)
                    })) : U(this, (function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) || void 0 !== (n = ee(o, e)) ? n : void 0;
                        this.each((function() {
                            G.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        G.remove(this, e)
                    }))
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, w.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = w._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
                        w.dequeue(e, t)
                    }), o)), !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return X.get(e, n) || X.access(e, n, {
                        empty: w.Callbacks("once memory").add((function() {
                            X.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        w.dequeue(this, e)
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        r = w.Deferred(),
                        o = this,
                        s = this.length,
                        a = function() {
                            --i || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = X.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                    return a(), r.promise(t)
                }
            });
            var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                re = i.documentElement,
                oe = function(e) {
                    return w.contains(e.ownerDocument, e)
                },
                se = {
                    composed: !0
                };
            re.getRootNode && (oe = function(e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
            });
            var ae = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
                },
                le = function(e, t, n, i) {
                    var r, o, s = {};
                    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
                    return r
                };
            
            function ue(e, t, n, i) {
                var r, o, s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return w.css(e, t, "")
                    },
                    l = a(),
                    u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && ne.exec(w.css(e, t));
                if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; s--;) w.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                    c *= 2, w.style(e, t, c + u), n = n || []
                }
                return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
            }
            var ce = {};
            
            function fe(e) {
                var t, n = e.ownerDocument,
                    i = e.nodeName,
                    r = ce[i];
                return r || (t = n.body.appendChild(n.createElement(i)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[i] = r, r)
            }
            
            function he(e, t) {
                for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = X.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ae(i) && (r[o] = fe(i))) : "none" !== n && (r[o] = "none", X.set(i, "display", n)));
                for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                return e
            }
            w.fn.extend({
                show: function() {
                    return he(this, !0)
                },
                hide: function() {
                    return he(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        ae(this) ? w(this).show() : w(this).hide()
                    }))
                }
            });
            var de = /^(?:checkbox|radio)$/i,
                pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ge = /^$|^module$|\/(?:java|ecma)script/i,
                me = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            
            function ve(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
            }
            
            function ye(e, t) {
                for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
            }
            me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
            var _e, be, we = /<|&#?\w+;/;
            
            function Ee(e, t, n, i, r) {
                for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === _(o)) w.merge(h, o.nodeType ? [o] : o);
                        else if (we.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                    w.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
                } else h.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = h[d++];)
                    if (i && w.inArray(o, i) > -1) r && r.push(o);
                    else if (u = oe(o), s = ve(f.appendChild(o), "script"), u && ye(s), n)
                    for (c = 0; o = s[c++];) ge.test(o.type || "") && n.push(o);
                return f
            }
            _e = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), _e.appendChild(be), p.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked, _e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
            var Te = /^key/,
                xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;
            
            function Se() {
                return !0
            }
            
            function De() {
                return !1
            }
            
            function Ae(e, t) {
                return e === function() {
                    try {
                        return i.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }
            
            function Ne(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ne(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = De;
                else if (!r) return e;
                return 1 === o && (s = r, r = function(e) {
                    return w().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = w.guid++)), e.each((function() {
                    w.event.add(this, t, r, i, n)
                }))
            }
            
            function Ie(e, t, n) {
                n ? (X.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var i, r, s = X.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (s.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (s = o.call(arguments), X.set(this, t, s), i = n(this, t), this[t](), s !== (r = X.get(this, t)) || i ? X.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                        } else s.length && (X.set(this, t, {
                            value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === X.get(e, t) && w.event.add(e, t, Se)
            }
            w.event = {
                global: {},
                add: function(e, t, n, i, r) {
                    var o, s, a, l, u, c, f, h, d, p, g, m = X.get(e);
                    if (m)
                        for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(re, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                            }), u = (t = (t || "").match(H) || [""]).length; u--;) d = g = (a = Ce.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                            type: d,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && w.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[d] = !0)
                },
                remove: function(e, t, n, i, r) {
                    var o, s, a, l, u, c, f, h, d, p, g, m = X.hasData(e) && X.get(e);
                    if (m && (l = m.events)) {
                        for (u = (t = (t || "").match(H) || [""]).length; u--;)
                            if (d = g = (a = Ce.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                                for (f = w.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                                s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || w.removeEvent(e, d, m.handle), delete l[d])
                            } else
                                for (d in l) w.event.remove(e, d + t[u], n, i, !0);
                        w.isEmptyObject(l) && X.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, r, o, s, a = w.event.fix(e),
                        l = new Array(arguments.length),
                        u = (X.get(this, "events") || {})[a.type] || [],
                        c = w.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                        for (s = w.event.handlers.call(this, a, u), t = 0;
                            (r = s[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = r.elem, n = 0;
                                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, o, s, a = [],
                        l = t.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(u) > -1 : w.find(r, this, null, [u]).length), s[r] && o.push(i);
                                o.length && a.push({
                                    elem: u,
                                    handlers: o
                                })
                            } return u = this, l < t.length && a.push({
                        elem: u,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && Ie(t, "click", Se), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && Ie(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return de.test(t.type) && t.click && A(t, "input") && X.get(t, "click") || A(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: De,
                isPropagationStopped: De,
                isImmediatePropagationStopped: De,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({
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
                code: !0,
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp), w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                w.event.special[e] = {
                    setup: function() {
                        return Ie(this, e, Ae), !1
                    },
                    trigger: function() {
                        return Ie(this, e), !0
                    },
                    delegateType: t
                }
            })), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget,
                            r = e.handleObj;
                        return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), w.fn.extend({
                on: function(e, t, n, i) {
                    return Ne(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return Ne(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = De), this.each((function() {
                        w.event.remove(this, e, n, t)
                    }))
                }
            });
            var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Oe = /<script|<style|<link/i,
                Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            
            function Pe(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
            }
            
            function He(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }
            
            function qe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }
            
            function Re(e, t) {
                var n, i, r, o, s, a, l, u;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (o = X.access(e), s = X.set(t, o), u = o.events))
                        for (r in delete s.handle, s.events = {}, u)
                            for (n = 0, i = u[r].length; n < i; n++) w.event.add(t, r, u[r][n]);
                    G.hasData(e) && (a = G.access(e), l = w.extend({}, a), G.set(t, l))
                }
            }
            
            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            
            function Fe(e, t, n, i) {
                t = s.apply([], t);
                var r, o, a, l, u, c, f = 0,
                    h = e.length,
                    d = h - 1,
                    m = t[0],
                    v = g(m);
                if (v || h > 1 && "string" == typeof m && !p.checkClone && Le.test(m)) return e.each((function(r) {
                    var o = e.eq(r);
                    v && (t[0] = m.call(this, r, o.html())), Fe(o, t, n, i)
                }));
                if (h && (o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (l = (a = w.map(ve(r, "script"), He)).length; f < h; f++) u = r, f !== d && (u = w.clone(u, !0, !0), l && w.merge(a, ve(u, "script"))), n.call(e[f], u, f);
                    if (l)
                        for (c = a[a.length - 1].ownerDocument, w.map(a, qe), f = 0; f < l; f++) u = a[f], ge.test(u.type || "") && !X.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : y(u.textContent.replace(je, ""), u, c))
                }
                return e
            }
            
            function We(e, t, n) {
                for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(ve(i)), i.parentNode && (n && oe(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e.replace(ke, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0),
                        l = oe(e);
                    if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (s = ve(a), i = 0, r = (o = ve(e)).length; i < r; i++) Me(o[i], s[i]);
                    if (t)
                        if (n)
                            for (o = o || ve(e), s = s || ve(a), i = 0, r = o.length; i < r; i++) Re(o[i], s[i]);
                        else Re(e, a);
                    return (s = ve(a, "script")).length > 0 && ye(s, !l && ve(e, "script")), a
                },
                cleanData: function(e) {
                    for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (z(n)) {
                            if (t = n[X.expando]) {
                                if (t.events)
                                    for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                                n[X.expando] = void 0
                            }
                            n[G.expando] && (n[G.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return We(this, e, !0)
                },
                remove: function(e) {
                    return We(this, e)
                },
                text: function(e) {
                    return U(this, (function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function() {
                    return Fe(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                    }))
                },
                prepend: function() {
                    return Fe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Pe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function() {
                    return Fe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function() {
                    return Fe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return w.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return U(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Oe.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Fe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(r[s])[t](n), a.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var Be = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                Ue = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                $e = new RegExp(ie.join("|"), "i");
            
            function Ke(e, t, n) {
                var i, r, o, s, a = e.style;
                return (n = n || Ue(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Be.test(s) && $e.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }
            
            function Qe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function t() {
                    if (c) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(c);
                        var t = e.getComputedStyle(c);
                        r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", s = 12 === n(c.offsetWidth / 3), re.removeChild(u), c = null
                    }
                }
            
                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r, o, s, a, l, u = i.createElement("div"),
                    c = i.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
                    boxSizingReliable: function() {
                        return t(), o
                    },
                    pixelBoxStyles: function() {
                        return t(), a
                    },
                    pixelPosition: function() {
                        return t(), r
                    },
                    reliableMarginLeft: function() {
                        return t(), l
                    },
                    scrollboxSize: function() {
                        return t(), s
                    }
                }))
            }();
            var Ve = ["Webkit", "Moz", "ms"],
                ze = i.createElement("div").style,
                Ye = {};
            
            function Xe(e) {
                var t = w.cssProps[e] || Ye[e];
                return t || (e in ze ? e : Ye[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                        if ((e = Ve[n] + t) in ze) return e
                }(e) || e)
            }
            var Ge = /^(none|table(?!-c[ea]).+)/,
                Je = /^--/,
                Ze = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                et = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
            
            function tt(e, t, n) {
                var i = ne.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            
            function nt(e, t, n, i, r, o) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ie[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ie[s] + "Width", !0, r) : a += w.css(e, "border" + ie[s] + "Width", !0, r));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
            }
            
            function it(e, t, n) {
                var i = Ue(e),
                    r = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
                    o = r,
                    s = Ke(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Be.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!p.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
            }
            
            function rt(e, t, n, i, r) {
                return new rt.prototype.init(e, t, n, i, r)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ke(e, "opacity");
                                return "" === n ? "1" : n
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
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = V(t),
                            l = Je.test(t),
                            u = e.style;
                        if (l || (t = Xe(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                        "string" === (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var r, o, s, a = V(t);
                    return Je.test(t) || (t = Xe(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ke(e, t, i)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), w.each(["height", "width"], (function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return !Ge.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : le(e, Ze, (function() {
                            return it(e, t, i)
                        }))
                    },
                    set: function(e, n, i) {
                        var r, o = Ue(e),
                            s = !p.scrollboxSize() && "absolute" === o.position,
                            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                            l = i ? nt(e, t, i, a, o) : 0;
                        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), tt(0, n, l)
                    }
                }
            })), w.cssHooks.marginLeft = Qe(p.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = tt)
            })), w.fn.extend({
                css: function(e, t) {
                    return U(this, (function(e, t, n) {
                        var i, r, o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Ue(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), w.Tween = rt, rt.prototype = {
                constructor: rt,
                init: function(e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = rt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                }
            }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, w.fx = rt.prototype.init, w.fx.step = {};
            var ot, st, at = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;
            
            function ut() {
                st && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ut) : e.setTimeout(ut, w.fx.interval), w.fx.tick())
            }
            
            function ct() {
                return e.setTimeout((function() {
                    ot = void 0
                })), ot = Date.now()
            }
            
            function ft(e, t) {
                var n, i = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }
            
            function ht(e, t, n) {
                for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, t, e)) return i
            }
            
            function dt(e, t, n) {
                var i, r, o = 0,
                    s = dt.prefilters.length,
                    a = w.Deferred().always((function() {
                        delete l.elem
                    })),
                    l = function() {
                        if (r) return !1;
                        for (var t = ot || ct(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                        return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
                    },
                    u = a.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: ot || ct(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(i), i
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) u.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                        }
                    }),
                    c = u.props;
                for (! function(e, t) {
                        var n, i, r, o, s;
                        for (n in e)
                            if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                                for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                            else t[i] = r
                    }(c, u.opts.specialEasing); o < s; o++)
                    if (i = dt.prefilters[o].call(u, e, c, u.opts)) return g(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                return w.map(c, ht, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }
            w.Animation = w.extend(dt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, ne.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g(e) ? (t = e, e = ["*"]) : e = e.match(H);
                        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                            h = this,
                            d = {},
                            p = e.style,
                            g = e.nodeType && ae(e),
                            m = X.get(e, "fxshow");
                        for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || a()
                            }), s.unqueued++, h.always((function() {
                                h.always((function() {
                                    s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                                }))
                            }))), t)
                            if (r = t[i], at.test(r)) {
                                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                    if ("show" !== r || !m || void 0 === m[i]) continue;
                                    g = !0
                                }
                                d[i] = m && m[i] || w.style(e, i)
                            } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = X.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = w.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (h.done((function() {
                                    p.display = u
                                })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function() {
                                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                }))), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                                display: u
                            }), o && (m.hidden = !g), g && he([e], !0), h.done((function() {
                                for (i in g || he([e]), X.remove(e, "fxshow"), d) w.style(e, i, d[i])
                            }))), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                    }
                }), w.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? w.extend({}, e) : {
                        complete: n || !n && t || g(e) && e,
                        duration: e,
                        easing: n && t || t && !g(t) && t
                    };
                    return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
                    }, i
                }, w.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var r = w.isEmptyObject(e),
                            o = w.speed(t, n, i),
                            s = function() {
                                var t = dt(this, w.extend({}, e), o);
                                (r || X.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                o = w.timers,
                                s = X.get(this);
                            if (r) s[r] && s[r].stop && i(s[r]);
                            else
                                for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
                            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                            !t && n || w.dequeue(this, e)
                        }))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = X.get(this),
                                i = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                o = w.timers,
                                s = i ? i.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), w.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, r)
                    }
                })), w.each({
                    slideDown: ft("show"),
                    slideUp: ft("hide"),
                    slideToggle: ft("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    w.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                })), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), ot = void 0
                }, w.fx.timer = function(e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function() {
                    st || (st = !0, ut())
                }, w.fx.stop = function() {
                    st = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function(t, n) {
                    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
                        var r = e.setTimeout(n, t);
                        i.stop = function() {
                            e.clearTimeout(r)
                        }
                    }))
                },
                function() {
                    var e = i.createElement("input"),
                        t = i.createElement("select").appendChild(i.createElement("option"));
                    e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
                }();
            var pt, gt = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return U(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        w.removeAttr(this, e)
                    }))
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!p.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0,
                        r = t && t.match(H);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++];) e.removeAttribute(n)
                }
            }), pt = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = gt[t] || w.find.attr;
                gt[t] = function(e, t, i) {
                    var r, o, s = t.toLowerCase();
                    return i || (o = gt[s], gt[s] = r, r = null != n(e, t, i) ? s : null, gt[s] = o), r
                }
            }));
            var mt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;
            
            function yt(e) {
                return (e.match(H) || []).join(" ")
            }
            
            function _t(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            
            function bt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
            }
            w.fn.extend({
                prop: function(e, t) {
                    return U(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[w.propFix[e] || e]
                    }))
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), p.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                w.propFix[this.toLowerCase()] = this
            })), w.fn.extend({
                addClass: function(e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).addClass(e.call(this, t, _t(this)))
                    }));
                    if ((t = bt(e)).length)
                        for (; n = this[l++];)
                            if (r = _t(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                r !== (a = yt(i)) && n.setAttribute("class", a)
                            } return this
                },
                removeClass: function(e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).removeClass(e.call(this, t, _t(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = bt(e)).length)
                        for (; n = this[l++];)
                            if (r = _t(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                                for (s = 0; o = t[s++];)
                                    for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                                r !== (a = yt(i)) && n.setAttribute("class", a)
                            } return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        i = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                        w(this).toggleClass(e.call(this, n, _t(this), t), t)
                    })) : this.each((function() {
                        var t, r, o, s;
                        if (i)
                            for (r = 0, o = w(this), s = bt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = _t(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + yt(_t(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var wt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = g(e), this.each((function(n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    }))) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : yt(w.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, r = e.options,
                                o = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                l = s ? o + 1 : r.length;
                            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), s) return t;
                                    a.push(t)
                                } return a
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;)((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], (function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }, p.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), p.focusin = "onfocusin" in e;
            var Et = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function(e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(t, n, r, o) {
                    var s, a, l, u, c, h, d, p, v = [r || i],
                        y = f.call(t, "type") ? t.type : t,
                        _ = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                        if (!o && !d.noBubble && !m(r)) {
                            for (u = d.delegateType || y, Et.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                            l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                        }
                        for (s = 0;
                            (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = s > 1 ? u : d.bindType || y, (h = (X.get(a, "events") || {})[t.type] && X.get(a, "handle")) && h.apply(a, n), (h = c && a[c]) && h.apply && z(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                        return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !z(r) || c && g(r[y]) && !m(r) && ((l = r[c]) && (r[c] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, Tt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, Tt), w.event.triggered = void 0, l && (r[c] = l)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(i, null, t)
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        w.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0)
                }
            }), p.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                            r = X.access(i, t);
                        r || i.addEventListener(e, n, !0), X.access(i, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                            r = X.access(i, t) - 1;
                        r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0), X.remove(i, t))
                    }
                }
            }));
            var xt = e.location,
                Ct = Date.now(),
                St = /\?/;
            w.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
            };
            var Dt = /\[\]$/,
                At = /\r?\n/g,
                Nt = /^(?:submit|button|image|reset|file)$/i,
                It = /^(?:input|select|textarea|keygen)/i;
            
            function kt(e, t, n, i) {
                var r;
                if (Array.isArray(t)) w.each(t, (function(t, r) {
                    n || Dt.test(e) ? i(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                }));
                else if (n || "object" !== _(t)) i(e, t);
                else
                    for (r in t) kt(e + "[" + r + "]", t[r], n, i)
            }
            w.param = function(e, t) {
                var n, i = [],
                    r = function(e, t) {
                        var n = g(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
                    r(this.name, this.value)
                }));
                else
                    for (n in e) kt(n, e[n], t, r);
                return i.join("&")
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && It.test(this.nodeName) && !Nt.test(e) && (this.checked || !de.test(e))
                    })).map((function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(At, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(At, "\r\n")
                        }
                    })).get()
                }
            });
            var Ot = /%20/g,
                Lt = /#.*$/,
                jt = /([?&])_=[^&]*/,
                Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ht = /^(?:GET|HEAD)$/,
                qt = /^\/\//,
                Rt = {},
                Mt = {},
                Ft = "*/".concat("*"),
                Wt = i.createElement("a");
            
            function Bt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        o = t.toLowerCase().match(H) || [];
                    if (g(n))
                        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            
            function Ut(e, t, n, i) {
                var r = {},
                    o = e === Mt;
            
                function s(a) {
                    var l;
                    return r[a] = !0, w.each(e[a] || [], (function(e, a) {
                        var u = a(t, n, i);
                        return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
                    })), l
                }
                return s(t.dataTypes[0]) || !r["*"] && s("*")
            }
            
            function $t(e, t) {
                var n, i, r = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && w.extend(!0, e, i), e
            }
            Wt.href = xt.href, w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ft,
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
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? $t($t(e, w.ajaxSettings), t) : $t(w.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(Rt),
                ajaxTransport: Bt(Mt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var r, o, s, a, l, u, c, f, h, d, p = w.ajaxSetup({}, n),
                        g = p.context || p,
                        m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                        v = w.Deferred(),
                        y = w.Callbacks("once memory"),
                        _ = p.statusCode || {},
                        b = {},
                        E = {},
                        T = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a)
                                        for (a = {}; t = Pt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (p.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) x.always(e[x.status]);
                                    else
                                        for (t in e) _[t] = [_[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return r && r.abort(t), C(0, t), this
                            }
                        };
                    if (v.promise(x), p.url = ((t || p.url || xt.href) + "").replace(qt, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                        u = i.createElement("a");
                        try {
                            u.href = p.url, u.href = u.href, p.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Ut(Rt, p, n, x), c) return x;
                    for (h in (f = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), o = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (St.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(jt, "$1"), d = (St.test(o) ? "&" : "?") + "_=" + Ct++ + d), p.url = o + d), p.ifModified && (w.lastModified[o] && x.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && x.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
                    if (T = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = Ut(Mt, p, n, x)) {
                        if (x.readyState = 1, f && m.trigger("ajaxSend", [x, p]), c) return x;
                        p.async && p.timeout > 0 && (l = e.setTimeout((function() {
                            x.abort("timeout")
                        }), p.timeout));
                        try {
                            c = !1, r.send(b, C)
                        } catch (e) {
                            if (c) throw e;
                            C(-1, e)
                        }
                    } else C(-1, "No Transport");
            
                    function C(t, n, i, a) {
                        var u, h, d, b, E, T = n;
                        c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (b = function(e, t, n) {
                            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in a)
                                    if (a[r] && a[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    } if (l[0] in n) o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s || (s = r)
                                }
                                o = o || s
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(p, x, i)), b = function(e, t, n, i) {
                            var r, o, s, a, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, b, x, u), u ? (p.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (w.lastModified[o] = E), (E = x.getResponseHeader("etag")) && (w.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, h = b.data, u = !(d = b.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", u ? v.resolveWith(g, [h, T, x]) : v.rejectWith(g, [x, T, d]), x.statusCode(_), _ = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : d]), y.fireWith(g, [x, T]), f && (m.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return x
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }), w.each(["get", "post"], (function(e, t) {
                w[t] = function(e, n, i, r) {
                    return g(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, w.isPlainObject(e) && e))
                }
            })), w._evalUrl = function(e, t) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        w.globalEval(e, t)
                    }
                })
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each((function(t) {
                        w(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each((function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        w(this).replaceWith(this.childNodes)
                    })), this
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e)
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Kt = {
                    0: 200,
                    1223: 204
                },
                Qt = w.ajaxSettings.xhr();
            p.cors = !!Qt && "withCredentials" in Qt, p.ajax = Qt = !!Qt, w.ajaxTransport((function(t) {
                var n, i;
                if (p.cors || Qt && !t.crossDomain) return {
                    send: function(r, o) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                        n = function(e) {
                            return function() {
                                n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Kt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && e.setTimeout((function() {
                                n && i()
                            }))
                        }, n = n("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
            })), w.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            })), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), w.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, o) {
                        t = w("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), i.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }));
            var Vt, zt = [],
                Yt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = zt.pop() || w.expando + "_" + Ct++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", (function(t, n, i) {
                var r, o, s, a = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                    return s || w.error(r + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                    s = arguments
                }, i.always((function() {
                    void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && g(o) && o(s[0]), s = o = void 0
                })), "script"
            })), p.createHTMLDocument = ((Vt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), w.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = Ee([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
                var r, o, s
            }, w.fn.load = function(e, t, n) {
                var i, r, o, s = this,
                    a = e.indexOf(" ");
                return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && w.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
                })).always(n && function(e, t) {
                    s.each((function() {
                        n.apply(this, o || [e.responseText, t, e])
                    }))
                }), this
            }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, (function(t) {
                    return e === t.elem
                })).length
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var i, r, o, s, a, l, u = w.css(e, "position"),
                        c = w(e),
                        f = {};
                    "static" === u && (e.style.position = "relative"), a = c.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        w.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - w.css(i, "marginTop", !0),
                            left: t.left - r.left - w.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                        return e || re
                    }))
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(i) {
                    return U(this, (function(e, i, r) {
                        var o;
                        if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                    }), e, i, arguments.length)
                }
            })), w.each(["top", "left"], (function(e, t) {
                w.cssHooks[t] = Qe(p.pixelPosition, (function(e, n) {
                    if (n) return n = Ke(e, t), Be.test(n) ? w(e).position()[t] + "px" : n
                }))
            })), w.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, i) {
                    w.fn[i] = function(r, o) {
                        var s = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === o ? "margin" : "border");
                        return U(this, (function(t, n, r) {
                            var o;
                            return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a)
                        }), t, s ? r : void 0, s)
                    }
                }))
            })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            })), w.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), w.proxy = function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(o.call(arguments)))
                }, r.guid = e.guid = e.guid || w.guid++, r
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0)
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = m, w.camelCase = V, w.type = _, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, "function" == typeof define && define.amd && define("jquery", [], (function() {
                return w
            }));
            var Xt = e.jQuery,
                Gt = e.$;
            return w.noConflict = function(t) {
            return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Xt), w
            }, t || (e.jQuery = e.$ = w), w
            })), $(document).ready((function() {
                    $(".navbar .nav-link").on("click", (function(e) {
                        if ("" !== this.hash) {
                            e.preventDefault();
                            var t = this.hash;
                            $("html, body").animate({
                                scrollTop: $(t).offset().top
                            }, 700, (function() {
                                window.location.hash = t
                            }))
                        }
                    }))
                })),
                function(e) {
                    "use strict";
                    var t = function(n, i) {
                        this.options = e.extend({}, t.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                    };
            
                    function n(n) {
                        return this.each((function() {
                            var i = e(this),
                                r = i.data("bs.affix"),
                                o = "object" == typeof n && n;
                            r || i.data("bs.affix", r = new t(this, o)), "string" == typeof n && r[n]()
                        }))
                    }
                    t.VERSION = "3.3.6", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
                        offset: 0,
                        target: window
                    }, t.prototype.getState = function(e, t, n, i) {
                        var r = this.$target.scrollTop(),
                            o = this.$element.offset(),
                            s = this.$target.height();
                        if (null != n && "top" == this.affixed) return r < n && "top";
                        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
                        var a = null == this.affixed,
                            l = a ? r : o.top;
                        return null != n && r <= n ? "top" : null != i && l + (a ? s : t) >= e - i && "bottom"
                    }, t.prototype.getPinnedOffset = function() {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(t.RESET).addClass("affix");
                        var e = this.$target.scrollTop(),
                            n = this.$element.offset();
                        return this.pinnedOffset = n.top - e
                    }, t.prototype.checkPositionWithEventLoop = function() {
                        setTimeout(e.proxy(this.checkPosition, this), 1)
                    }, t.prototype.checkPosition = function() {
                        if (this.$element.is(":visible")) {
                            var n = this.$element.height(),
                                i = this.options.offset,
                                r = i.top,
                                o = i.bottom,
                                s = Math.max(e(document).height(), e(document.body).height());
                            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
                            var a = this.getState(s, n, r, o);
                            if (this.affixed != a) {
                                null != this.unpin && this.$element.css("top", "");
                                var l = "affix" + (a ? "-" + a : ""),
                                    u = e.Event(l + ".bs.affix");
                                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                            }
                            "bottom" == a && this.$element.offset({
                                top: s - n - o
                            })
                        }
                    };
                    var i = e.fn.affix;
                    e.fn.affix = n, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
                        return e.fn.affix = i, this
                    }, e(window).on("load", (function() {
                        e('[data-spy="affix"]').each((function() {
                            var t = e(this),
                                i = t.data();
                            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(t, i)
                        }))
                    }))
                }(jQuery),
            /*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
            function(e, t) {
                "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
            }(this, (function(e, t) {
                "use strict";
            
                function n(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
            
                function i(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            
                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            
                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function(t) {
                            r(e, t, n[t])
                        }))
                    }
                    return e
                }
                t = t && t.hasOwnProperty("default") ? t.default : t;
                var s = "transitionend";
            
                function a(e) {
                    var n = this,
                        i = !1;
                    return t(this).one(l.TRANSITION_END, (function() {
                        i = !0
                    })), setTimeout((function() {
                        i || l.triggerTransitionEnd(n)
                    }), e), this
                }
                var l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function(e) {
                        var t = e.getAttribute("data-target");
                        if (!t || "#" === t) {
                            var n = e.getAttribute("href");
                            t = n && "#" !== n ? n.trim() : ""
                        }
                        try {
                            return document.querySelector(t) ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(e) {
                        if (!e) return 0;
                        var n = t(e).css("transition-duration"),
                            i = t(e).css("transition-delay"),
                            r = parseFloat(n),
                            o = parseFloat(i);
                        return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
                    },
                    reflow: function(e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(s)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(s)
                    },
                    isElement: function(e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function(e, t, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var r = n[i],
                                    o = t[i],
                                    s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                            } var a
                    },
                    findShadowRoot: function(e) {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof e.getRootNode) {
                            var t = e.getRootNode();
                            return t instanceof ShadowRoot ? t : null
                        }
                        return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null
                    }
                };
                t.fn.emulateTransitionEnd = a, t.event.special[l.TRANSITION_END] = {
                    bindType: s,
                    delegateType: s,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                };
                var u = "alert",
                    c = "bs.alert",
                    f = "." + c,
                    h = t.fn[u],
                    d = {
                        CLOSE: "close" + f,
                        CLOSED: "closed" + f,
                        CLICK_DATA_API: "click" + f + ".data-api"
                    },
                    p = "alert",
                    g = "fade",
                    m = "show",
                    v = function() {
                        function e(e) {
                            this._element = e
                        }
                        var n = e.prototype;
                        return n.close = function(e) {
                            var t = this._element;
                            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                        }, n.dispose = function() {
                            t.removeData(this._element, c), this._element = null
                        }, n._getRootElement = function(e) {
                            var n = l.getSelectorFromElement(e),
                                i = !1;
                            return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + p)[0]), i
                        }, n._triggerCloseEvent = function(e) {
                            var n = t.Event(d.CLOSE);
                            return t(e).trigger(n), n
                        }, n._removeElement = function(e) {
                            var n = this;
                            if (t(e).removeClass(m), t(e).hasClass(g)) {
                                var i = l.getTransitionDurationFromElement(e);
                                t(e).one(l.TRANSITION_END, (function(t) {
                                    return n._destroyElement(e, t)
                                })).emulateTransitionEnd(i)
                            } else this._destroyElement(e)
                        }, n._destroyElement = function(e) {
                            t(e).detach().trigger(d.CLOSED).remove()
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this),
                                    r = i.data(c);
                                r || (r = new e(this), i.data(c, r)), "close" === n && r[n](this)
                            }))
                        }, e._handleDismiss = function(e) {
                            return function(t) {
                                t && t.preventDefault(), e.close(this)
                            }
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]), e
                    }();
                t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), t.fn[u] = v._jQueryInterface, t.fn[u].Constructor = v, t.fn[u].noConflict = function() {
                    return t.fn[u] = h, v._jQueryInterface
                };
                var y = "button",
                    _ = "bs.button",
                    b = "." + _,
                    w = ".data-api",
                    E = t.fn[y],
                    T = "active",
                    x = "btn",
                    C = "focus",
                    S = '[data-toggle^="button"]',
                    D = '[data-toggle="buttons"]',
                    A = 'input:not([type="hidden"])',
                    N = ".active",
                    I = ".btn",
                    k = {
                        CLICK_DATA_API: "click" + b + w,
                        FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
                    },
                    O = function() {
                        function e(e) {
                            this._element = e
                        }
                        var n = e.prototype;
                        return n.toggle = function() {
                            var e = !0,
                                n = !0,
                                i = t(this._element).closest(D)[0];
                            if (i) {
                                var r = this._element.querySelector(A);
                                if (r) {
                                    if ("radio" === r.type)
                                        if (r.checked && this._element.classList.contains(T)) e = !1;
                                        else {
                                            var o = i.querySelector(N);
                                            o && t(o).removeClass(T)
                                        } if (e) {
                                        if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                        r.checked = !this._element.classList.contains(T), t(r).trigger("change")
                                    }
                                    r.focus(), n = !1
                                }
                            }
                            n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && t(this._element).toggleClass(T)
                        }, n.dispose = function() {
                            t.removeData(this._element, _), this._element = null
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this).data(_);
                                i || (i = new e(this), t(this).data(_, i)), "toggle" === n && i[n]()
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]), e
                    }();
                t(document).on(k.CLICK_DATA_API, S, (function(e) {
                    e.preventDefault();
                    var n = e.target;
                    t(n).hasClass(x) || (n = t(n).closest(I)), O._jQueryInterface.call(t(n), "toggle")
                })).on(k.FOCUS_BLUR_DATA_API, S, (function(e) {
                    var n = t(e.target).closest(I)[0];
                    t(n).toggleClass(C, /^focus(in)?$/.test(e.type))
                })), t.fn[y] = O._jQueryInterface, t.fn[y].Constructor = O, t.fn[y].noConflict = function() {
                    return t.fn[y] = E, O._jQueryInterface
                };
                var L = "carousel",
                    j = "bs.carousel",
                    P = "." + j,
                    H = ".data-api",
                    q = t.fn[L],
                    R = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    M = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    F = "next",
                    W = "prev",
                    B = "left",
                    U = "right",
                    $ = {
                        SLIDE: "slide" + P,
                        SLID: "slid" + P,
                        KEYDOWN: "keydown" + P,
                        MOUSEENTER: "mouseenter" + P,
                        MOUSELEAVE: "mouseleave" + P,
                        TOUCHSTART: "touchstart" + P,
                        TOUCHMOVE: "touchmove" + P,
                        TOUCHEND: "touchend" + P,
                        POINTERDOWN: "pointerdown" + P,
                        POINTERUP: "pointerup" + P,
                        DRAG_START: "dragstart" + P,
                        LOAD_DATA_API: "load" + P + H,
                        CLICK_DATA_API: "click" + P + H
                    },
                    K = "carousel",
                    Q = "active",
                    V = "slide",
                    z = "carousel-item-right",
                    Y = "carousel-item-left",
                    X = "carousel-item-next",
                    G = "carousel-item-prev",
                    J = "pointer-event",
                    Z = ".active",
                    ee = ".active.carousel-item",
                    te = ".carousel-item",
                    ne = ".carousel-item img",
                    ie = ".carousel-item-next, .carousel-item-prev",
                    re = ".carousel-indicators",
                    oe = "[data-slide], [data-slide-to]",
                    se = '[data-ride="carousel"]',
                    ae = {
                        TOUCH: "touch",
                        PEN: "pen"
                    },
                    le = function() {
                        function e(e, t) {
                            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(re), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                        }
                        var n = e.prototype;
                        return n.next = function() {
                            this._isSliding || this._slide(F)
                        }, n.nextWhenVisible = function() {
                            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                        }, n.prev = function() {
                            this._isSliding || this._slide(W)
                        }, n.pause = function(e) {
                            e || (this._isPaused = !0), this._element.querySelector(ie) && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, n.cycle = function(e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, n.to = function(e) {
                            var n = this;
                            this._activeElement = this._element.querySelector(ee);
                            var i = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0))
                                if (this._isSliding) t(this._element).one($.SLID, (function() {
                                    return n.to(e)
                                }));
                                else {
                                    if (i === e) return this.pause(), void this.cycle();
                                    var r = e > i ? F : W;
                                    this._slide(r, this._items[e])
                                }
                        }, n.dispose = function() {
                            t(this._element).off(P), t.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, n._getConfig = function(e) {
                            return e = o({}, R, e), l.typeCheckConfig(L, e, M), e
                        }, n._handleSwipe = function() {
                            var e = Math.abs(this.touchDeltaX);
                            if (!(e <= 40)) {
                                var t = e / this.touchDeltaX;
                                t > 0 && this.prev(), t < 0 && this.next()
                            }
                        }, n._addEventListeners = function() {
                            var e = this;
                            this._config.keyboard && t(this._element).on($.KEYDOWN, (function(t) {
                                return e._keydown(t)
                            })), "hover" === this._config.pause && t(this._element).on($.MOUSEENTER, (function(t) {
                                return e.pause(t)
                            })).on($.MOUSELEAVE, (function(t) {
                                return e.cycle(t)
                            })), this._config.touch && this._addTouchEventListeners()
                        }, n._addTouchEventListeners = function() {
                            var e = this;
                            if (this._touchSupported) {
                                var n = function(t) {
                                        e._pointerEvent && ae[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                                    },
                                    i = function(t) {
                                        e._pointerEvent && ae[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                            return e.cycle(t)
                                        }), 500 + e._config.interval))
                                    };
                                t(this._element.querySelectorAll(ne)).on($.DRAG_START, (function(e) {
                                    return e.preventDefault()
                                })), this._pointerEvent ? (t(this._element).on($.POINTERDOWN, (function(e) {
                                    return n(e)
                                })), t(this._element).on($.POINTERUP, (function(e) {
                                    return i(e)
                                })), this._element.classList.add(J)) : (t(this._element).on($.TOUCHSTART, (function(e) {
                                    return n(e)
                                })), t(this._element).on($.TOUCHMOVE, (function(t) {
                                    return function(t) {
                                        t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                                    }(t)
                                })), t(this._element).on($.TOUCHEND, (function(e) {
                                    return i(e)
                                })))
                            }
                        }, n._keydown = function(e) {
                            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next()
                            }
                        }, n._getItemIndex = function(e) {
                            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(te)) : [], this._items.indexOf(e)
                        }, n._getItemByDirection = function(e, t) {
                            var n = e === F,
                                i = e === W,
                                r = this._getItemIndex(t),
                                o = this._items.length - 1;
                            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                            var s = (r + (e === W ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                        }, n._triggerSlideEvent = function(e, n) {
                            var i = this._getItemIndex(e),
                                r = this._getItemIndex(this._element.querySelector(ee)),
                                o = t.Event($.SLIDE, {
                                    relatedTarget: e,
                                    direction: n,
                                    from: r,
                                    to: i
                                });
                            return t(this._element).trigger(o), o
                        }, n._setActiveIndicatorElement = function(e) {
                            if (this._indicatorsElement) {
                                var n = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                                t(n).removeClass(Q);
                                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                                i && t(i).addClass(Q)
                            }
                        }, n._slide = function(e, n) {
                            var i, r, o, s = this,
                                a = this._element.querySelector(ee),
                                u = this._getItemIndex(a),
                                c = n || a && this._getItemByDirection(e, a),
                                f = this._getItemIndex(c),
                                h = Boolean(this._interval);
                            if (e === F ? (i = Y, r = X, o = B) : (i = z, r = G, o = U), c && t(c).hasClass(Q)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
                                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
                                var d = t.Event($.SLID, {
                                    relatedTarget: c,
                                    direction: o,
                                    from: u,
                                    to: f
                                });
                                if (t(this._element).hasClass(V)) {
                                    t(c).addClass(r), l.reflow(c), t(a).addClass(i), t(c).addClass(i);
                                    var p = parseInt(c.getAttribute("data-interval"), 10);
                                    p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                    var g = l.getTransitionDurationFromElement(a);
                                    t(a).one(l.TRANSITION_END, (function() {
                                        t(c).removeClass(i + " " + r).addClass(Q), t(a).removeClass(Q + " " + r + " " + i), s._isSliding = !1, setTimeout((function() {
                                            return t(s._element).trigger(d)
                                        }), 0)
                                    })).emulateTransitionEnd(g)
                                } else t(a).removeClass(Q), t(c).addClass(Q), this._isSliding = !1, t(this._element).trigger(d);
                                h && this.cycle()
                            }
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this).data(j),
                                    r = o({}, R, t(this).data());
                                "object" == typeof n && (r = o({}, r, n));
                                var s = "string" == typeof n ? n : r.slide;
                                if (i || (i = new e(this, r), t(this).data(j, i)), "number" == typeof n) i.to(n);
                                else if ("string" == typeof s) {
                                    if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                                    i[s]()
                                } else r.interval && r.ride && (i.pause(), i.cycle())
                            }))
                        }, e._dataApiClickHandler = function(n) {
                            var i = l.getSelectorFromElement(this);
                            if (i) {
                                var r = t(i)[0];
                                if (r && t(r).hasClass(K)) {
                                    var s = o({}, t(r).data(), t(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (s.interval = !1), e._jQueryInterface.call(t(r), s), a && t(r).data(j).to(a), n.preventDefault()
                                }
                            }
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return R
                            }
                        }]), e
                    }();
                t(document).on($.CLICK_DATA_API, oe, le._dataApiClickHandler), t(window).on($.LOAD_DATA_API, (function() {
                    for (var e = [].slice.call(document.querySelectorAll(se)), n = 0, i = e.length; n < i; n++) {
                        var r = t(e[n]);
                        le._jQueryInterface.call(r, r.data())
                    }
                })), t.fn[L] = le._jQueryInterface, t.fn[L].Constructor = le, t.fn[L].noConflict = function() {
                    return t.fn[L] = q, le._jQueryInterface
                };
                var ue = "collapse",
                    ce = "bs.collapse",
                    fe = "." + ce,
                    he = t.fn[ue],
                    de = {
                        toggle: !0,
                        parent: ""
                    },
                    pe = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    },
                    ge = {
                        SHOW: "show" + fe,
                        SHOWN: "shown" + fe,
                        HIDE: "hide" + fe,
                        HIDDEN: "hidden" + fe,
                        CLICK_DATA_API: "click" + fe + ".data-api"
                    },
                    me = "show",
                    ve = "collapse",
                    ye = "collapsing",
                    _e = "collapsed",
                    be = "width",
                    we = "height",
                    Ee = ".show, .collapsing",
                    Te = '[data-toggle="collapse"]',
                    xe = function() {
                        function e(e, t) {
                            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                            for (var n = [].slice.call(document.querySelectorAll(Te)), i = 0, r = n.length; i < r; i++) {
                                var o = n[i],
                                    s = l.getSelectorFromElement(o),
                                    a = [].slice.call(document.querySelectorAll(s)).filter((function(t) {
                                        return t === e
                                    }));
                                null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                            }
                            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        var n = e.prototype;
                        return n.toggle = function() {
                            t(this._element).hasClass(me) ? this.hide() : this.show()
                        }, n.show = function() {
                            var n, i, r = this;
                            if (!this._isTransitioning && !t(this._element).hasClass(me) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(Ee)).filter((function(e) {
                                    return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(ve)
                                }))).length && (n = null), !(n && (i = t(n).not(this._selector).data(ce)) && i._isTransitioning))) {
                                var o = t.Event(ge.SHOW);
                                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(ce, null));
                                    var s = this._getDimension();
                                    t(this._element).removeClass(ve).addClass(ye), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(_e).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                        u = l.getTransitionDurationFromElement(this._element);
                                    t(this._element).one(l.TRANSITION_END, (function() {
                                        t(r._element).removeClass(ye).addClass(ve).addClass(me), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger(ge.SHOWN)
                                    })).emulateTransitionEnd(u), this._element.style[s] = this._element[a] + "px"
                                }
                            }
                        }, n.hide = function() {
                            var e = this;
                            if (!this._isTransitioning && t(this._element).hasClass(me)) {
                                var n = t.Event(ge.HIDE);
                                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension();
                                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), t(this._element).addClass(ye).removeClass(ve).removeClass(me);
                                    var r = this._triggerArray.length;
                                    if (r > 0)
                                        for (var o = 0; o < r; o++) {
                                            var s = this._triggerArray[o],
                                                a = l.getSelectorFromElement(s);
                                            if (null !== a) t([].slice.call(document.querySelectorAll(a))).hasClass(me) || t(s).addClass(_e).attr("aria-expanded", !1)
                                        }
                                    this.setTransitioning(!0);
                                    this._element.style[i] = "";
                                    var u = l.getTransitionDurationFromElement(this._element);
                                    t(this._element).one(l.TRANSITION_END, (function() {
                                        e.setTransitioning(!1), t(e._element).removeClass(ye).addClass(ve).trigger(ge.HIDDEN)
                                    })).emulateTransitionEnd(u)
                                }
                            }
                        }, n.setTransitioning = function(e) {
                            this._isTransitioning = e
                        }, n.dispose = function() {
                            t.removeData(this._element, ce), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, n._getConfig = function(e) {
                            return (e = o({}, de, e)).toggle = Boolean(e.toggle), l.typeCheckConfig(ue, e, pe), e
                        }, n._getDimension = function() {
                            return t(this._element).hasClass(be) ? be : we
                        }, n._getParent = function() {
                            var n, i = this;
                            l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                o = [].slice.call(n.querySelectorAll(r));
                            return t(o).each((function(t, n) {
                                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                            })), n
                        }, n._addAriaAndCollapsedClass = function(e, n) {
                            var i = t(e).hasClass(me);
                            n.length && t(n).toggleClass(_e, !i).attr("aria-expanded", i)
                        }, e._getTargetFromElement = function(e) {
                            var t = l.getSelectorFromElement(e);
                            return t ? document.querySelector(t) : null
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this),
                                    r = i.data(ce),
                                    s = o({}, de, i.data(), "object" == typeof n && n ? n : {});
                                if (!r && s.toggle && /show|hide/.test(n) && (s.toggle = !1), r || (r = new e(this, s), i.data(ce, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                    r[n]()
                                }
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return de
                            }
                        }]), e
                    }();
                t(document).on(ge.CLICK_DATA_API, Te, (function(e) {
                    "A" === e.currentTarget.tagName && e.preventDefault();
                    var n = t(this),
                        i = l.getSelectorFromElement(this),
                        r = [].slice.call(document.querySelectorAll(i));
                    t(r).each((function() {
                        var e = t(this),
                            i = e.data(ce) ? "toggle" : n.data();
                        xe._jQueryInterface.call(e, i)
                    }))
                })), t.fn[ue] = xe._jQueryInterface, t.fn[ue].Constructor = xe, t.fn[ue].noConflict = function() {
                    return t.fn[ue] = he, xe._jQueryInterface
                };
                for (
            
                    var Ce = "undefined" != typeof window && "undefined" != typeof document, Se = ["Edge", "Trident", "Firefox"], De = 0, Ae = 0; Ae < Se.length; Ae += 1)
                    if (Ce && navigator.userAgent.indexOf(Se[Ae]) >= 0) {
                        De = 1;
                        break
                    } var Ne = Ce && window.Promise ? function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then((function() {
                            t = !1, e()
                        })))
                    }
                } : function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout((function() {
                            t = !1, e()
                        }), De))
                    }
                };
            
                function Ie(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }
            
                function ke(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n
                }
            
                function Oe(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }
            
                function Le(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var t = ke(e),
                        n = t.overflow,
                        i = t.overflowX,
                        r = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + r + i) ? e : Le(Oe(e))
                }
                var je = Ce && !(!window.MSInputMethodContext || !document.documentMode),
                    Pe = Ce && /MSIE 10/.test(navigator.userAgent);
            
                function He(e) {
                    return 11 === e ? je : 10 === e ? Pe : je || Pe
                }
            
                function qe(e) {
                    if (!e) return document.documentElement;
                    for (var t = He(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? qe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }
            
                function Re(e) {
                    return null !== e.parentNode ? Re(e.parentNode) : e
                }
            
                function Me(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? e : t,
                        r = n ? t : e,
                        o = document.createRange();
                    o.setStart(i, 0), o.setEnd(r, 0);
                    var s, a, l = o.commonAncestorContainer;
                    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && qe(s.firstElementChild) !== s ? qe(l) : l;
                    var u = Re(e);
                    return u.host ? Me(u.host, t) : Me(e, Re(t).host)
                }
            
                function Fe(e) {
                    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                        n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) {
                        var i = e.ownerDocument.documentElement;
                        return (e.ownerDocument.scrollingElement || i)[t]
                    }
                    return e[t]
                }
            
                function We(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
                }
            
                function Be(e, t, n, i) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], He(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                }
            
                function Ue(e) {
                    var t = e.body,
                        n = e.documentElement,
                        i = He(10) && getComputedStyle(n);
                    return {
                        height: Be("Height", t, n, i),
                        width: Be("Width", t, n, i)
                    }
                }
                var $e = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    Ke = function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    },
                    Qe = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    };
            
                function Ve(e) {
                    return Qe({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }
            
                function ze(e) {
                    var t = {};
                    try {
                        if (He(10)) {
                            t = e.getBoundingClientRect();
                            var n = Fe(e, "top"),
                                i = Fe(e, "left");
                            t.top += n, t.left += i, t.bottom += n, t.right += i
                        } else t = e.getBoundingClientRect()
                    } catch (e) {}
                    var r = {
                            left: t.left,
                            top: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        },
                        o = "HTML" === e.nodeName ? Ue(e.ownerDocument) : {},
                        s = o.width || e.clientWidth || r.right - r.left,
                        a = o.height || e.clientHeight || r.bottom - r.top,
                        l = e.offsetWidth - s,
                        u = e.offsetHeight - a;
                    if (l || u) {
                        var c = ke(e);
                        l -= We(c, "x"), u -= We(c, "y"), r.width -= l, r.height -= u
                    }
                    return Ve(r)
                }
            
                function Ye(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = He(10),
                        r = "HTML" === t.nodeName,
                        o = ze(e),
                        s = ze(t),
                        a = Le(e),
                        l = ke(t),
                        u = parseFloat(l.borderTopWidth, 10),
                        c = parseFloat(l.borderLeftWidth, 10);
                    n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                    var f = Ve({
                        top: o.top - s.top - u,
                        left: o.left - s.left - c,
                        width: o.width,
                        height: o.height
                    });
                    if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
                        var h = parseFloat(l.marginTop, 10),
                            d = parseFloat(l.marginLeft, 10);
                        f.top -= u - h, f.bottom -= u - h, f.left -= c - d, f.right -= c - d, f.marginTop = h, f.marginLeft = d
                    }
                    return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = Fe(t, "top"),
                            r = Fe(t, "left"),
                            o = n ? -1 : 1;
                        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                    }(f, t)), f
                }
            
                function Xe(e) {
                    var t = e.nodeName;
                    if ("BODY" === t || "HTML" === t) return !1;
                    if ("fixed" === ke(e, "position")) return !0;
                    var n = Oe(e);
                    return !!n && Xe(n)
                }
            
                function Ge(e) {
                    if (!e || !e.parentElement || He()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === ke(t, "transform");) t = t.parentElement;
                    return t || document.documentElement
                }
            
                function Je(e, t, n, i) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = {
                            top: 0,
                            left: 0
                        },
                        s = r ? Ge(e) : Me(e, t);
                    if ("viewport" === i) o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.ownerDocument.documentElement,
                            i = Ye(e, n),
                            r = Math.max(n.clientWidth, window.innerWidth || 0),
                            o = Math.max(n.clientHeight, window.innerHeight || 0),
                            s = t ? 0 : Fe(n),
                            a = t ? 0 : Fe(n, "left");
                        return Ve({
                            top: s - i.top + i.marginTop,
                            left: a - i.left + i.marginLeft,
                            width: r,
                            height: o
                        })
                    }(s, r);
                    else {
                        var a = void 0;
                        "scrollParent" === i ? "BODY" === (a = Le(Oe(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                        var l = Ye(a, s, r);
                        if ("HTML" !== a.nodeName || Xe(s)) o = l;
                        else {
                            var u = Ue(e.ownerDocument),
                                c = u.height,
                                f = u.width;
                            o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
                        }
                    }
                    var h = "number" == typeof(n = n || 0);
                    return o.left += h ? n : n.left || 0, o.top += h ? n : n.top || 0, o.right -= h ? n : n.right || 0, o.bottom -= h ? n : n.bottom || 0, o
                }
            
                function Ze(e, t, n, i, r) {
                    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var s = Je(n, i, o, r),
                        a = {
                            top: {
                                width: s.width,
                                height: t.top - s.top
                            },
                            right: {
                                width: s.right - t.right,
                                height: s.height
                            },
                            bottom: {
                                width: s.width,
                                height: s.bottom - t.bottom
                            },
                            left: {
                                width: t.left - s.left,
                                height: s.height
                            }
                        },
                        l = Object.keys(a).map((function(e) {
                            return Qe({
                                key: e
                            }, a[e], {
                                area: (t = a[e], t.width * t.height)
                            });
                            var t
                        })).sort((function(e, t) {
                            return t.area - e.area
                        })),
                        u = l.filter((function(e) {
                            var t = e.width,
                                i = e.height;
                            return t >= n.clientWidth && i >= n.clientHeight
                        })),
                        c = u.length > 0 ? u[0].key : l[0].key,
                        f = e.split("-")[1];
                    return c + (f ? "-" + f : "")
                }
            
                function et(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return Ye(n, i ? Ge(t) : Me(t, n), i)
                }
            
                function tt(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return {
                        width: e.offsetWidth + i,
                        height: e.offsetHeight + n
                    }
                }
            
                function nt(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return t[e]
                    }))
                }
            
                function it(e, t, n) {
                    n = n.split("-")[0];
                    var i = tt(e),
                        r = {
                            width: i.width,
                            height: i.height
                        },
                        o = -1 !== ["right", "left"].indexOf(n),
                        s = o ? "top" : "left",
                        a = o ? "left" : "top",
                        l = o ? "height" : "width",
                        u = o ? "width" : "height";
                    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[nt(a)], r
                }
            
                function rt(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }
            
                function ot(e, t, n) {
                    return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                        if (Array.prototype.findIndex) return e.findIndex((function(e) {
                            return e[t] === n
                        }));
                        var i = rt(e, (function(e) {
                            return e[t] === n
                        }));
                        return e.indexOf(i)
                    }(e, "name", n))).forEach((function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && Ie(n) && (t.offsets.popper = Ve(t.offsets.popper), t.offsets.reference = Ve(t.offsets.reference), t = n(t, e))
                    })), t
                }
            
                function st() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = et(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Ze(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = it(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = ot(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }
            
                function at(e, t) {
                    return e.some((function(e) {
                        var n = e.name;
                        return e.enabled && n === t
                    }))
                }
            
                function lt(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = r ? "" + r + n : e;
                        if (void 0 !== document.body.style[o]) return o
                    }
                    return null
                }
            
                function ut() {
                    return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }
            
                function ct(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }
            
                function ft(e, t, n, i) {
                    var r = "BODY" === e.nodeName,
                        o = r ? e.ownerDocument.defaultView : e;
                    o.addEventListener(t, n, {
                        passive: !0
                    }), r || ft(Le(o.parentNode), t, n, i), i.push(o)
                }
            
                function ht(e, t, n, i) {
                    n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var r = Le(e);
                    return ft(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                }
            
                function dt() {
                    this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate))
                }
            
                function pt() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }
            
                function gt(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }
            
                function mt(e, t) {
                    Object.keys(t).forEach((function(n) {
                        var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && gt(t[n]) && (i = "px"), e.style[n] = t[n] + i
                    }))
                }
                var vt = Ce && /Firefox/i.test(navigator.userAgent);
            
                function yt(e, t, n) {
                    var i = rt(e, (function(e) {
                            return e.name === t
                        })),
                        r = !!i && e.some((function(e) {
                            return e.name === n && e.enabled && e.order < i.order
                        }));
                    if (!r) {
                        var o = "`" + t + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                    }
                    return r
                }
                var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    bt = _t.slice(3);
            
                function wt(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = bt.indexOf(e),
                        i = bt.slice(n + 1).concat(bt.slice(0, n));
                    return t ? i.reverse() : i
                }
                var Et = "flip",
                    Tt = "clockwise",
                    xt = "counterclockwise";
            
                function Ct(e, t, n, i) {
                    var r = [0, 0],
                        o = -1 !== ["right", "left"].indexOf(i),
                        s = e.split(/(\+|\-)/).map((function(e) {
                            return e.trim()
                        })),
                        a = s.indexOf(rt(s, (function(e) {
                            return -1 !== e.search(/,|\s/)
                        })));
                    s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                    var l = /\s*,\s*|\s+/,
                        u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                    return u = u.map((function(e, i) {
                        var r = (1 === i ? !o : o) ? "height" : "width",
                            s = !1;
                        return e.reduce((function(e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                        }), []).map((function(e) {
                            return function(e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    s = r[2];
                                if (!o) return e;
                                if (0 === s.indexOf("%")) {
                                    return Ve("%p" === s ? n : i)[t] / 100 * o
                                }
                                if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                return o
                            }(e, r, t, n)
                        }))
                    })), u.forEach((function(e, t) {
                        e.forEach((function(n, i) {
                            gt(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                        }))
                    })), r
                }
                var St = {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var r = e.offsets,
                                        o = r.reference,
                                        s = r.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        u = a ? "width" : "height",
                                        c = {
                                            start: Ke({}, l, o[l]),
                                            end: Ke({}, l, o[l] + o[u] - s[u])
                                        };
                                    e.offsets.popper = Qe({}, s, c[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    r = e.offsets,
                                    o = r.popper,
                                    s = r.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = gt(+n) ? [+n, 0] : Ct(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || qe(e.instance.popper);
                                e.instance.reference === n && (n = qe(n));
                                var i = lt("transform"),
                                    r = e.instance.popper.style,
                                    o = r.top,
                                    s = r.left,
                                    a = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = Je(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                                var u = t.priority,
                                    c = e.offsets.popper,
                                    f = {
                                        primary: function(e) {
                                            var n = c[e];
                                            return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), Ke({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = c[n];
                                            return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), Ke({}, n, i)
                                        }
                                    };
                                return u.forEach((function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    c = Qe({}, c, f[t](e))
                                })), e.offsets.popper = c, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    r = e.placement.split("-")[0],
                                    o = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(r),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    u = s ? "width" : "height";
                                return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!yt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var r = e.placement.split("-")[0],
                                    o = e.offsets,
                                    s = o.popper,
                                    a = o.reference,
                                    l = -1 !== ["left", "right"].indexOf(r),
                                    u = l ? "height" : "width",
                                    c = l ? "Top" : "Left",
                                    f = c.toLowerCase(),
                                    h = l ? "left" : "top",
                                    d = l ? "bottom" : "right",
                                    p = tt(i)[u];
                                a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ve(e.offsets.popper);
                                var g = a[f] + a[u] / 2 - p / 2,
                                    m = ke(e.instance.popper),
                                    v = parseFloat(m["margin" + c], 10),
                                    y = parseFloat(m["border" + c + "Width"], 10),
                                    _ = g - e.offsets.popper[f] - v - y;
                                return _ = Math.max(Math.min(s[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (Ke(n = {}, f, Math.round(_)), Ke(n, h, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (at(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = Je(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    r = nt(i),
                                    o = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case Et:
                                        s = [i, r];
                                        break;
                                    case Tt:
                                        s = wt(i);
                                        break;
                                    case xt:
                                        s = wt(i, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach((function(a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    i = e.placement.split("-")[0], r = nt(i);
                                    var u = e.offsets.popper,
                                        c = e.offsets.reference,
                                        f = Math.floor,
                                        h = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom),
                                        d = f(u.left) < f(n.left),
                                        p = f(u.right) > f(n.right),
                                        g = f(u.top) < f(n.top),
                                        m = f(u.bottom) > f(n.bottom),
                                        v = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        _ = !!t.flipVariations && (y && "start" === o && d || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                                    (h || v || _) && (e.flipped = !0, (h || v) && (i = s[l + 1]), _ && (o = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = Qe({}, e.offsets.popper, it(e.instance.popper, e.offsets.reference, e.placement)), e = ot(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = nt(t), e.offsets.popper = Ve(r), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!yt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = rt(e.instance.modifiers, (function(e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    r = e.offsets.popper,
                                    o = rt(e.instance.modifiers, (function(e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== o ? o : t.gpuAcceleration,
                                    a = qe(e.instance.popper),
                                    l = ze(a),
                                    u = {
                                        position: r.position
                                    },
                                    c = function(e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            s = Math.floor,
                                            a = function(e) {
                                                return e
                                            },
                                            l = o(r.width),
                                            u = o(i.width),
                                            c = -1 !== ["left", "right"].indexOf(e.placement),
                                            f = -1 !== e.placement.indexOf("-"),
                                            h = t ? c || f || l % 2 == u % 2 ? o : s : a,
                                            d = t ? o : a;
                                        return {
                                            left: h(l % 2 == 1 && u % 2 == 1 && !f && t ? i.left - 1 : i.left),
                                            top: d(i.top),
                                            bottom: d(i.bottom),
                                            right: h(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !vt),
                                    f = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    d = lt("transform"),
                                    p = void 0,
                                    g = void 0;
                                if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, p = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, s && d) u[d] = "translate3d(" + p + "px, " + g + "px, 0)", u[f] = 0, u[h] = 0, u.willChange = "transform";
                                else {
                                    var m = "bottom" === f ? -1 : 1,
                                        v = "right" === h ? -1 : 1;
                                    u[f] = g * m, u[h] = p * v, u.willChange = f + ", " + h
                                }
                                var y = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = Qe({}, y, e.attributes), e.styles = Qe({}, u, e.styles), e.arrowStyles = Qe({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return mt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && mt(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, r) {
                                var o = et(r, t, e, n.positionFixed),
                                    s = Ze(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), mt(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    },
                    Dt = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: St
                    },
                    At = function() {
                        function e(t, n) {
                            var i = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.scheduleUpdate = function() {
                                return requestAnimationFrame(i.update)
                            }, this.update = Ne(this.update.bind(this)), this.options = Qe({}, e.Defaults, r), this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Qe({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                                i.options.modifiers[t] = Qe({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                            })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                                return Qe({
                                    name: e
                                }, i.options.modifiers[e])
                            })).sort((function(e, t) {
                                return e.order - t.order
                            })), this.modifiers.forEach((function(e) {
                                e.enabled && Ie(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                            })), this.update();
                            var o = this.options.eventsEnabled;
                            o && this.enableEventListeners(), this.state.eventsEnabled = o
                        }
                        return $e(e, [{
                            key: "update",
                            value: function() {
                                return st.call(this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return ut.call(this)
                            }
                        }, {
                            key: "enableEventListeners",
                            value: function() {
                                return dt.call(this)
                            }
                        }, {
                            key: "disableEventListeners",
                            value: function() {
                                return pt.call(this)
                            }
                        }]), e
                    }();
                At.Utils = ("undefined" != typeof window ? window : global).PopperUtils, At.placements = _t, At.Defaults = Dt;
                var Nt = "dropdown",
                    It = "bs.dropdown",
                    kt = "." + It,
                    Ot = ".data-api",
                    Lt = t.fn[Nt],
                    jt = new RegExp("38|40|27"),
                    Pt = {
                        HIDE: "hide" + kt,
                        HIDDEN: "hidden" + kt,
                        SHOW: "show" + kt,
                        SHOWN: "shown" + kt,
                        CLICK: "click" + kt,
                        CLICK_DATA_API: "click" + kt + Ot,
                        KEYDOWN_DATA_API: "keydown" + kt + Ot,
                        KEYUP_DATA_API: "keyup" + kt + Ot
                    },
                    Ht = "disabled",
                    qt = "show",
                    Rt = "dropup",
                    Mt = "dropright",
                    Ft = "dropleft",
                    Wt = "dropdown-menu-right",
                    Bt = "position-static",
                    Ut = '[data-toggle="dropdown"]',
                    $t = ".dropdown form",
                    Kt = ".dropdown-menu",
                    Qt = ".navbar-nav",
                    Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    zt = "top-start",
                    Yt = "top-end",
                    Xt = "bottom-start",
                    Gt = "bottom-end",
                    Jt = "right-start",
                    Zt = "left-start",
                    en = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent",
                        reference: "toggle",
                        display: "dynamic"
                    },
                    tn = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)",
                        reference: "(string|element)",
                        display: "string"
                    },
                    nn = function() {
                        function e(e, t) {
                            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                        }
                        var n = e.prototype;
                        return n.toggle = function() {
                            if (!this._element.disabled && !t(this._element).hasClass(Ht)) {
                                var n = e._getParentFromElement(this._element),
                                    i = t(this._menu).hasClass(qt);
                                if (e._clearMenus(), !i) {
                                    var r = {
                                            relatedTarget: this._element
                                        },
                                        o = t.Event(Pt.SHOW, r);
                                    if (t(n).trigger(o), !o.isDefaultPrevented()) {
                                        if (!this._inNavbar) {
                                            if (void 0 === At) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                            var s = this._element;
                                            "parent" === this._config.reference ? s = n : l.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass(Bt), this._popper = new At(s, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === t(n).closest(Qt).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(qt), t(n).toggleClass(qt).trigger(t.Event(Pt.SHOWN, r))
                                    }
                                }
                            }
                        }, n.show = function() {
                            if (!(this._element.disabled || t(this._element).hasClass(Ht) || t(this._menu).hasClass(qt))) {
                                var n = {
                                        relatedTarget: this._element
                                    },
                                    i = t.Event(Pt.SHOW, n),
                                    r = e._getParentFromElement(this._element);
                                t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(qt), t(r).toggleClass(qt).trigger(t.Event(Pt.SHOWN, n)))
                            }
                        }, n.hide = function() {
                            if (!this._element.disabled && !t(this._element).hasClass(Ht) && t(this._menu).hasClass(qt)) {
                                var n = {
                                        relatedTarget: this._element
                                    },
                                    i = t.Event(Pt.HIDE, n),
                                    r = e._getParentFromElement(this._element);
                                t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(qt), t(r).toggleClass(qt).trigger(t.Event(Pt.HIDDEN, n)))
                            }
                        }, n.dispose = function() {
                            t.removeData(this._element, It), t(this._element).off(kt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                        }, n.update = function() {
                            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                        }, n._addEventListeners = function() {
                            var e = this;
                            t(this._element).on(Pt.CLICK, (function(t) {
                                t.preventDefault(), t.stopPropagation(), e.toggle()
                            }))
                        }, n._getConfig = function(e) {
                            return e = o({}, this.constructor.Default, t(this._element).data(), e), l.typeCheckConfig(Nt, e, this.constructor.DefaultType), e
                        }, n._getMenuElement = function() {
                            if (!this._menu) {
                                var t = e._getParentFromElement(this._element);
                                t && (this._menu = t.querySelector(Kt))
                            }
                            return this._menu
                        }, n._getPlacement = function() {
                            var e = t(this._element.parentNode),
                                n = Xt;
                            return e.hasClass(Rt) ? (n = zt, t(this._menu).hasClass(Wt) && (n = Yt)) : e.hasClass(Mt) ? n = Jt : e.hasClass(Ft) ? n = Zt : t(this._menu).hasClass(Wt) && (n = Gt), n
                        }, n._detectNavbar = function() {
                            return t(this._element).closest(".navbar").length > 0
                        }, n._getOffset = function() {
                            var e = this,
                                t = {};
                            return "function" == typeof this._config.offset ? t.fn = function(t) {
                                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                            } : t.offset = this._config.offset, t
                        }, n._getPopperConfig = function() {
                            var e = {
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
                            return "static" === this._config.display && (e.modifiers.applyStyle = {
                                enabled: !1
                            }), e
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this).data(It);
                                if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(It, i)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            }))
                        }, e._clearMenus = function(n) {
                            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                                for (var i = [].slice.call(document.querySelectorAll(Ut)), r = 0, o = i.length; r < o; r++) {
                                    var s = e._getParentFromElement(i[r]),
                                        a = t(i[r]).data(It),
                                        l = {
                                            relatedTarget: i[r]
                                        };
                                    if (n && "click" === n.type && (l.clickEvent = n), a) {
                                        var u = a._menu;
                                        if (t(s).hasClass(qt) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                            var c = t.Event(Pt.HIDE, l);
                                            t(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(u).removeClass(qt), t(s).removeClass(qt).trigger(t.Event(Pt.HIDDEN, l)))
                                        }
                                    }
                                }
                        }, e._getParentFromElement = function(e) {
                            var t, n = l.getSelectorFromElement(e);
                            return n && (t = document.querySelector(n)), t || e.parentNode
                        }, e._dataApiKeydownHandler = function(n) {
                            if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(Kt).length) : !jt.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(Ht))) {
                                var i = e._getParentFromElement(this),
                                    r = t(i).hasClass(qt);
                                if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                                    var o = [].slice.call(i.querySelectorAll(Vt));
                                    if (0 !== o.length) {
                                        var s = o.indexOf(n.target);
                                        38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                                    }
                                } else {
                                    if (27 === n.which) {
                                        var a = i.querySelector(Ut);
                                        t(a).trigger("focus")
                                    }
                                    t(this).trigger("click")
                                }
                            }
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return en
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return tn
                            }
                        }]), e
                    }();
                t(document).on(Pt.KEYDOWN_DATA_API, Ut, nn._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, Kt, nn._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, nn._clearMenus).on(Pt.CLICK_DATA_API, Ut, (function(e) {
                    e.preventDefault(), e.stopPropagation(), nn._jQueryInterface.call(t(this), "toggle")
                })).on(Pt.CLICK_DATA_API, $t, (function(e) {
                    e.stopPropagation()
                })), t.fn[Nt] = nn._jQueryInterface, t.fn[Nt].Constructor = nn, t.fn[Nt].noConflict = function() {
                    return t.fn[Nt] = Lt, nn._jQueryInterface
                };
                var rn = "modal",
                    on = "bs.modal",
                    sn = "." + on,
                    an = t.fn[rn],
                    ln = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    un = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    cn = {
                        HIDE: "hide" + sn,
                        HIDDEN: "hidden" + sn,
                        SHOW: "show" + sn,
                        SHOWN: "shown" + sn,
                        FOCUSIN: "focusin" + sn,
                        RESIZE: "resize" + sn,
                        CLICK_DISMISS: "click.dismiss" + sn,
                        KEYDOWN_DISMISS: "keydown.dismiss" + sn,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + sn,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + sn,
                        CLICK_DATA_API: "click" + sn + ".data-api"
                    },
                    fn = "modal-dialog-scrollable",
                    hn = "modal-scrollbar-measure",
                    dn = "modal-backdrop",
                    pn = "modal-open",
                    gn = "fade",
                    mn = "show",
                    vn = ".modal-dialog",
                    yn = ".modal-body",
                    _n = '[data-toggle="modal"]',
                    bn = '[data-dismiss="modal"]',
                    wn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    En = ".sticky-top",
                    Tn = function() {
                        function e(e, t) {
                            this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(vn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                        }
                        var n = e.prototype;
                        return n.toggle = function(e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }, n.show = function(e) {
                            var n = this;
                            if (!this._isShown && !this._isTransitioning) {
                                t(this._element).hasClass(gn) && (this._isTransitioning = !0);
                                var i = t.Event(cn.SHOW, {
                                    relatedTarget: e
                                });
                                t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(cn.CLICK_DISMISS, bn, (function(e) {
                                    return n.hide(e)
                                })), t(this._dialog).on(cn.MOUSEDOWN_DISMISS, (function() {
                                    t(n._element).one(cn.MOUSEUP_DISMISS, (function(e) {
                                        t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    }))
                                })), this._showBackdrop((function() {
                                    return n._showElement(e)
                                })))
                            }
                        }, n.hide = function(e) {
                            var n = this;
                            if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                                var i = t.Event(cn.HIDE);
                                if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var r = t(this._element).hasClass(gn);
                                    if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(cn.FOCUSIN), t(this._element).removeClass(mn), t(this._element).off(cn.CLICK_DISMISS), t(this._dialog).off(cn.MOUSEDOWN_DISMISS), r) {
                                        var o = l.getTransitionDurationFromElement(this._element);
                                        t(this._element).one(l.TRANSITION_END, (function(e) {
                                            return n._hideModal(e)
                                        })).emulateTransitionEnd(o)
                                    } else this._hideModal()
                                }
                            }
                        }, n.dispose = function() {
                            [window, this._element, this._dialog].forEach((function(e) {
                                return t(e).off(sn)
                            })), t(document).off(cn.FOCUSIN), t.removeData(this._element, on), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                        }, n.handleUpdate = function() {
                            this._adjustDialog()
                        }, n._getConfig = function(e) {
                            return e = o({}, ln, e), l.typeCheckConfig(rn, e, un), e
                        }, n._showElement = function(e) {
                            var n = this,
                                i = t(this._element).hasClass(gn);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(fn) ? this._dialog.querySelector(yn).scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), t(this._element).addClass(mn), this._config.focus && this._enforceFocus();
                            var r = t.Event(cn.SHOWN, {
                                    relatedTarget: e
                                }),
                                o = function() {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                                };
                            if (i) {
                                var s = l.getTransitionDurationFromElement(this._dialog);
                                t(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o()
                        }, n._enforceFocus = function() {
                            var e = this;
                            t(document).off(cn.FOCUSIN).on(cn.FOCUSIN, (function(n) {
                                document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                            }))
                        }, n._setEscapeEvent = function() {
                            var e = this;
                            this._isShown && this._config.keyboard ? t(this._element).on(cn.KEYDOWN_DISMISS, (function(t) {
                                27 === t.which && (t.preventDefault(), e.hide())
                            })) : this._isShown || t(this._element).off(cn.KEYDOWN_DISMISS)
                        }, n._setResizeEvent = function() {
                            var e = this;
                            this._isShown ? t(window).on(cn.RESIZE, (function(t) {
                                return e.handleUpdate(t)
                            })) : t(window).off(cn.RESIZE)
                        }, n._hideModal = function() {
                            var e = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                                t(document.body).removeClass(pn), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(cn.HIDDEN)
                            }))
                        }, n._removeBackdrop = function() {
                            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                        }, n._showBackdrop = function(e) {
                            var n = this,
                                i = t(this._element).hasClass(gn) ? gn : "";
                            if (this._isShown && this._config.backdrop) {
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = dn, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(cn.CLICK_DISMISS, (function(e) {
                                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                    })), i && l.reflow(this._backdrop), t(this._backdrop).addClass(mn), !e) return;
                                if (!i) return void e();
                                var r = l.getTransitionDurationFromElement(this._backdrop);
                                t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(r)
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(mn);
                                var o = function() {
                                    n._removeBackdrop(), e && e()
                                };
                                if (t(this._element).hasClass(gn)) {
                                    var s = l.getTransitionDurationFromElement(this._backdrop);
                                    t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                                } else o()
                            } else e && e()
                        }, n._adjustDialog = function() {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, n._resetAdjustments = function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, n._checkScrollbar = function() {
                            var e = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, n._setScrollbar = function() {
                            var e = this;
                            if (this._isBodyOverflowing) {
                                var n = [].slice.call(document.querySelectorAll(wn)),
                                    i = [].slice.call(document.querySelectorAll(En));
                                t(n).each((function(n, i) {
                                    var r = i.style.paddingRight,
                                        o = t(i).css("padding-right");
                                    t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                                })), t(i).each((function(n, i) {
                                    var r = i.style.marginRight,
                                        o = t(i).css("margin-right");
                                    t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                                }));
                                var r = document.body.style.paddingRight,
                                    o = t(document.body).css("padding-right");
                                t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                            }
                            t(document.body).addClass(pn)
                        }, n._resetScrollbar = function() {
                            var e = [].slice.call(document.querySelectorAll(wn));
                            t(e).each((function(e, n) {
                                var i = t(n).data("padding-right");
                                t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                            }));
                            var n = [].slice.call(document.querySelectorAll("" + En));
                            t(n).each((function(e, n) {
                                var i = t(n).data("margin-right");
                                void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                            }));
                            var i = t(document.body).data("padding-right");
                            t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                        }, n._getScrollbarWidth = function() {
                            var e = document.createElement("div");
                            e.className = hn, document.body.appendChild(e);
                            var t = e.getBoundingClientRect().width - e.clientWidth;
                            return document.body.removeChild(e), t
                        }, e._jQueryInterface = function(n, i) {
                            return this.each((function() {
                                var r = t(this).data(on),
                                    s = o({}, ln, t(this).data(), "object" == typeof n && n ? n : {});
                                if (r || (r = new e(this, s), t(this).data(on, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                    r[n](i)
                                } else s.show && r.show(i)
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return ln
                            }
                        }]), e
                    }();
                t(document).on(cn.CLICK_DATA_API, _n, (function(e) {
                    var n, i = this,
                        r = l.getSelectorFromElement(this);
                    r && (n = document.querySelector(r));
                    var s = t(n).data(on) ? "toggle" : o({}, t(n).data(), t(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                    var a = t(n).one(cn.SHOW, (function(e) {
                        e.isDefaultPrevented() || a.one(cn.HIDDEN, (function() {
                            t(i).is(":visible") && i.focus()
                        }))
                    }));
                    Tn._jQueryInterface.call(t(n), s, this)
                })), t.fn[rn] = Tn._jQueryInterface, t.fn[rn].Constructor = Tn, t.fn[rn].noConflict = function() {
                    return t.fn[rn] = an, Tn._jQueryInterface
                };
                var xn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                    Cn = {
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
                    },
                    Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                    Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
            
                function An(e, t, n) {
                    if (0 === e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                            var i = o[e],
                                s = i.nodeName.toLowerCase();
                            if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                            var a = [].slice.call(i.attributes),
                                l = [].concat(t["*"] || [], t[s] || []);
                            a.forEach((function(e) {
                                (function(e, t) {
                                    var n = e.nodeName.toLowerCase();
                                    if (-1 !== t.indexOf(n)) return -1 === xn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn));
                                    for (var i = t.filter((function(e) {
                                            return e instanceof RegExp
                                        })), r = 0, o = i.length; r < o; r++)
                                        if (n.match(i[r])) return !0;
                                    return !1
                                })(e, l) || i.removeAttribute(e.nodeName)
                            }))
                        }, a = 0, l = o.length; a < l; a++) s(a);
                    return i.body.innerHTML
                }
                var Nn = "tooltip",
                    In = "bs.tooltip",
                    kn = "." + In,
                    On = t.fn[Nn],
                    Ln = "bs-tooltip",
                    jn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
                    Pn = ["sanitize", "whiteList", "sanitizeFn"],
                    Hn = {
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
                    qn = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    },
                    Rn = {
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
                        whiteList: Cn
                    },
                    Mn = "show",
                    Fn = "out",
                    Wn = {
                        HIDE: "hide" + kn,
                        HIDDEN: "hidden" + kn,
                        SHOW: "show" + kn,
                        SHOWN: "shown" + kn,
                        INSERTED: "inserted" + kn,
                        CLICK: "click" + kn,
                        FOCUSIN: "focusin" + kn,
                        FOCUSOUT: "focusout" + kn,
                        MOUSEENTER: "mouseenter" + kn,
                        MOUSELEAVE: "mouseleave" + kn
                    },
                    Bn = "fade",
                    Un = "show",
                    $n = ".tooltip-inner",
                    Kn = ".arrow",
                    Qn = "hover",
                    Vn = "focus",
                    zn = "click",
                    Yn = "manual",
                    Xn = function() {
                        function e(e, t) {
                            if (void 0 === At) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        var n = e.prototype;
                        return n.enable = function() {
                            this._isEnabled = !0
                        }, n.disable = function() {
                            this._isEnabled = !1
                        }, n.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled
                        }, n.toggle = function(e) {
                            if (this._isEnabled)
                                if (e) {
                                    var n = this.constructor.DATA_KEY,
                                        i = t(e.currentTarget).data(n);
                                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                } else {
                                    if (t(this.getTipElement()).hasClass(Un)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                        }, n.dispose = function() {
                            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                        }, n.show = function() {
                            var e = this;
                            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var n = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                t(this.element).trigger(n);
                                var i = l.findShadowRoot(this.element),
                                    r = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !r) return;
                                var o = this.getTipElement(),
                                    s = l.getUID(this.constructor.NAME);
                                o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(Bn);
                                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    u = this._getAttachment(a);
                                this.addAttachmentClass(u);
                                var c = this._getContainer();
                                t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new At(this.element, o, {
                                    placement: u,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: Kn
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function(t) {
                                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                    },
                                    onUpdate: function(t) {
                                        return e._handlePopperPlacementChange(t)
                                    }
                                }), t(o).addClass(Un), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                                var f = function() {
                                    e.config.animation && e._fixTransition();
                                    var n = e._hoverState;
                                    e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === Fn && e._leave(null, e)
                                };
                                if (t(this.tip).hasClass(Bn)) {
                                    var h = l.getTransitionDurationFromElement(this.tip);
                                    t(this.tip).one(l.TRANSITION_END, f).emulateTransitionEnd(h)
                                } else f()
                            }
                        }, n.hide = function(e) {
                            var n = this,
                                i = this.getTipElement(),
                                r = t.Event(this.constructor.Event.HIDE),
                                o = function() {
                                    n._hoverState !== Mn && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                                };
                            if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                                if (t(i).removeClass(Un), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[zn] = !1, this._activeTrigger[Vn] = !1, this._activeTrigger[Qn] = !1, t(this.tip).hasClass(Bn)) {
                                    var s = l.getTransitionDurationFromElement(i);
                                    t(i).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                                } else o();
                                this._hoverState = ""
                            }
                        }, n.update = function() {
                            null !== this._popper && this._popper.scheduleUpdate()
                        }, n.isWithContent = function() {
                            return Boolean(this.getTitle())
                        }, n.addAttachmentClass = function(e) {
                            t(this.getTipElement()).addClass(Ln + "-" + e)
                        }, n.getTipElement = function() {
                            return this.tip = this.tip || t(this.config.template)[0], this.tip
                        }, n.setContent = function() {
                            var e = this.getTipElement();
                            this.setElementContent(t(e.querySelectorAll($n)), this.getTitle()), t(e).removeClass(Bn + " " + Un)
                        }, n.setElementContent = function(e, n) {
                            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = An(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                        }, n.getTitle = function() {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }, n._getOffset = function() {
                            var e = this,
                                t = {};
                            return "function" == typeof this.config.offset ? t.fn = function(t) {
                                return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                            } : t.offset = this.config.offset, t
                        }, n._getContainer = function() {
                            return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                        }, n._getAttachment = function(e) {
                            return qn[e.toUpperCase()]
                        }, n._setListeners = function() {
                            var e = this;
                            this.config.trigger.split(" ").forEach((function(n) {
                                if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                    return e.toggle(t)
                                }));
                                else if (n !== Yn) {
                                    var i = n === Qn ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        r = n === Qn ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element).on(i, e.config.selector, (function(t) {
                                        return e._enter(t)
                                    })).on(r, e.config.selector, (function(t) {
                                        return e._leave(t)
                                    }))
                                }
                            })), t(this.element).closest(".modal").on("hide.bs.modal", (function() {
                                e.element && e.hide()
                            })), this.config.selector ? this.config = o({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, n._fixTitle = function() {
                            var e = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, n._enter = function(e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? Vn : Qn] = !0), t(n.getTipElement()).hasClass(Un) || n._hoverState === Mn ? n._hoverState = Mn : (clearTimeout(n._timeout), n._hoverState = Mn, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                                n._hoverState === Mn && n.show()
                            }), n.config.delay.show) : n.show())
                        }, n._leave = function(e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? Vn : Qn] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = Fn, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                                n._hoverState === Fn && n.hide()
                            }), n.config.delay.hide) : n.hide())
                        }, n._isWithActiveTrigger = function() {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }, n._getConfig = function(e) {
                            var n = t(this.element).data();
                            return Object.keys(n).forEach((function(e) {
                                -1 !== Pn.indexOf(e) && delete n[e]
                            })), "number" == typeof(e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                                show: e.delay,
                                hide: e.delay
                            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig(Nn, e, this.constructor.DefaultType), e.sanitize && (e.template = An(e.template, e.whiteList, e.sanitizeFn)), e
                        }, n._getDelegateConfig = function() {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }, n._cleanTipClass = function() {
                            var e = t(this.getTipElement()),
                                n = e.attr("class").match(jn);
                            null !== n && n.length && e.removeClass(n.join(""))
                        }, n._handlePopperPlacementChange = function(e) {
                            var t = e.instance;
                            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                        }, n._fixTransition = function() {
                            var e = this.getTipElement(),
                                n = this.config.animation;
                            null === e.getAttribute("x-placement") && (t(e).removeClass(Bn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this).data(In),
                                    r = "object" == typeof n && n;
                                if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(In, i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return Rn
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return Nn
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return In
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return Wn
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return kn
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return Hn
                            }
                        }]), e
                    }();
                t.fn[Nn] = Xn._jQueryInterface, t.fn[Nn].Constructor = Xn, t.fn[Nn].noConflict = function() {
                    return t.fn[Nn] = On, Xn._jQueryInterface
                };
                var Gn = "popover",
                    Jn = "bs.popover",
                    Zn = "." + Jn,
                    ei = t.fn[Gn],
                    ti = "bs-popover",
                    ni = new RegExp("(^|\\s)" + ti + "\\S+", "g"),
                    ii = o({}, Xn.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    }),
                    ri = o({}, Xn.DefaultType, {
                        content: "(string|element|function)"
                    }),
                    oi = "fade",
                    si = "show",
                    ai = ".popover-header",
                    li = ".popover-body",
                    ui = {
                        HIDE: "hide" + Zn,
                        HIDDEN: "hidden" + Zn,
                        SHOW: "show" + Zn,
                        SHOWN: "shown" + Zn,
                        INSERTED: "inserted" + Zn,
                        CLICK: "click" + Zn,
                        FOCUSIN: "focusin" + Zn,
                        FOCUSOUT: "focusout" + Zn,
                        MOUSEENTER: "mouseenter" + Zn,
                        MOUSELEAVE: "mouseleave" + Zn
                    },
                    ci = function(e) {
                        var n, r;
            
                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                        var s = o.prototype;
                        return s.isWithContent = function() {
                            return this.getTitle() || this._getContent()
                        }, s.addAttachmentClass = function(e) {
                            t(this.getTipElement()).addClass(ti + "-" + e)
                        }, s.getTipElement = function() {
                            return this.tip = this.tip || t(this.config.template)[0], this.tip
                        }, s.setContent = function() {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(ai), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(li), n), e.removeClass(oi + " " + si)
                        }, s._getContent = function() {
                            return this.element.getAttribute("data-content") || this.config.content
                        }, s._cleanTipClass = function() {
                            var e = t(this.getTipElement()),
                                n = e.attr("class").match(ni);
                            null !== n && n.length > 0 && e.removeClass(n.join(""))
                        }, o._jQueryInterface = function(e) {
                            return this.each((function() {
                                var n = t(this).data(Jn),
                                    i = "object" == typeof e ? e : null;
                                if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data(Jn, n)), "string" == typeof e)) {
                                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                    n[e]()
                                }
                            }))
                        }, i(o, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return ii
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return Gn
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return Jn
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return ui
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return Zn
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return ri
                            }
                        }]), o
                    }(Xn);
                t.fn[Gn] = ci._jQueryInterface, t.fn[Gn].Constructor = ci, t.fn[Gn].noConflict = function() {
                    return t.fn[Gn] = ei, ci._jQueryInterface
                };
                var fi = "scrollspy",
                    hi = "bs.scrollspy",
                    di = "." + hi,
                    pi = t.fn[fi],
                    gi = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    mi = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    vi = {
                        ACTIVATE: "activate" + di,
                        SCROLL: "scroll" + di,
                        LOAD_DATA_API: "load" + di + ".data-api"
                    },
                    yi = "dropdown-item",
                    _i = "active",
                    bi = '[data-spy="scroll"]',
                    wi = ".nav, .list-group",
                    Ei = ".nav-link",
                    Ti = ".nav-item",
                    xi = ".list-group-item",
                    Ci = ".dropdown",
                    Si = ".dropdown-item",
                    Di = ".dropdown-toggle",
                    Ai = "offset",
                    Ni = "position",
                    Ii = function() {
                        function e(e, n) {
                            var i = this;
                            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Ei + "," + this._config.target + " " + xi + "," + this._config.target + " " + Si, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(vi.SCROLL, (function(e) {
                                return i._process(e)
                            })), this.refresh(), this._process()
                        }
                        var n = e.prototype;
                        return n.refresh = function() {
                            var e = this,
                                n = this._scrollElement === this._scrollElement.window ? Ai : Ni,
                                i = "auto" === this._config.method ? n : this._config.method,
                                r = i === Ni ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                                var n, o = l.getSelectorFromElement(e);
                                if (o && (n = document.querySelector(o)), n) {
                                    var s = n.getBoundingClientRect();
                                    if (s.width || s.height) return [t(n)[i]().top + r, o]
                                }
                                return null
                            })).filter((function(e) {
                                return e
                            })).sort((function(e, t) {
                                return e[0] - t[0]
                            })).forEach((function(t) {
                                e._offsets.push(t[0]), e._targets.push(t[1])
                            }))
                        }, n.dispose = function() {
                            t.removeData(this._element, hi), t(this._scrollElement).off(di), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, n._getConfig = function(e) {
                            if ("string" != typeof(e = o({}, gi, "object" == typeof e && e ? e : {})).target) {
                                var n = t(e.target).attr("id");
                                n || (n = l.getUID(fi), t(e.target).attr("id", n)), e.target = "#" + n
                            }
                            return l.typeCheckConfig(fi, e, mi), e
                        }, n._getScrollTop = function() {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                        }, n._getScrollHeight = function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, n._getOffsetHeight = function() {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                        }, n._process = function() {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._getOffsetHeight();
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            } else {
                                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                for (var r = this._offsets.length; r--;) {
                                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                                }
                            }
                        }, n._activate = function(e) {
                            this._activeTarget = e, this._clear();
                            var n = this._selector.split(",").map((function(t) {
                                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                })),
                                i = t([].slice.call(document.querySelectorAll(n.join(","))));
                            i.hasClass(yi) ? (i.closest(Ci).find(Di).addClass(_i), i.addClass(_i)) : (i.addClass(_i), i.parents(wi).prev(Ei + ", " + xi).addClass(_i), i.parents(wi).prev(Ti).children(Ei).addClass(_i)), t(this._scrollElement).trigger(vi.ACTIVATE, {
                                relatedTarget: e
                            })
                        }, n._clear = function() {
                            [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                                return e.classList.contains(_i)
                            })).forEach((function(e) {
                                return e.classList.remove(_i)
                            }))
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this).data(hi);
                                if (i || (i = new e(this, "object" == typeof n && n), t(this).data(hi, i)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return gi
                            }
                        }]), e
                    }();
                t(window).on(vi.LOAD_DATA_API, (function() {
                    for (var e = [].slice.call(document.querySelectorAll(bi)), n = e.length; n--;) {
                        var i = t(e[n]);
                        Ii._jQueryInterface.call(i, i.data())
                    }
                })), t.fn[fi] = Ii._jQueryInterface, t.fn[fi].Constructor = Ii, t.fn[fi].noConflict = function() {
                    return t.fn[fi] = pi, Ii._jQueryInterface
                };
                var ki = "tab",
                    Oi = "bs.tab",
                    Li = "." + Oi,
                    ji = t.fn[ki],
                    Pi = {
                        HIDE: "hide" + Li,
                        HIDDEN: "hidden" + Li,
                        SHOW: "show" + Li,
                        SHOWN: "shown" + Li,
                        CLICK_DATA_API: "click" + Li + ".data-api"
                    },
                    Hi = "dropdown-menu",
                    qi = "active",
                    Ri = "disabled",
                    Mi = "fade",
                    Fi = "show",
                    Wi = ".dropdown",
                    Bi = ".nav, .list-group",
                    Ui = ".active",
                    $i = "> li > .active",
                    Ki = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    Qi = ".dropdown-toggle",
                    Vi = "> .dropdown-menu .active",
                    zi = function() {
                        function e(e) {
                            this._element = e
                        }
                        var n = e.prototype;
                        return n.show = function() {
                            var e = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(qi) || t(this._element).hasClass(Ri))) {
                                var n, i, r = t(this._element).closest(Bi)[0],
                                    o = l.getSelectorFromElement(this._element);
                                if (r) {
                                    var s = "UL" === r.nodeName || "OL" === r.nodeName ? $i : Ui;
                                    i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                                }
                                var a = t.Event(Pi.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    u = t.Event(Pi.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && t(i).trigger(a), t(this._element).trigger(u), !u.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                    o && (n = document.querySelector(o)), this._activate(this._element, r);
                                    var c = function() {
                                        var n = t.Event(Pi.HIDDEN, {
                                                relatedTarget: e._element
                                            }),
                                            r = t.Event(Pi.SHOWN, {
                                                relatedTarget: i
                                            });
                                        t(i).trigger(n), t(e._element).trigger(r)
                                    };
                                    n ? this._activate(n, n.parentNode, c) : c()
                                }
                            }
                        }, n.dispose = function() {
                            t.removeData(this._element, Oi), this._element = null
                        }, n._activate = function(e, n, i) {
                            var r = this,
                                o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Ui) : t(n).find($i))[0],
                                s = i && o && t(o).hasClass(Mi),
                                a = function() {
                                    return r._transitionComplete(e, o, i)
                                };
                            if (o && s) {
                                var u = l.getTransitionDurationFromElement(o);
                                t(o).removeClass(Fi).one(l.TRANSITION_END, a).emulateTransitionEnd(u)
                            } else a()
                        }, n._transitionComplete = function(e, n, i) {
                            if (n) {
                                t(n).removeClass(qi);
                                var r = t(n.parentNode).find(Vi)[0];
                                r && t(r).removeClass(qi), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                            }
                            if (t(e).addClass(qi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains(Mi) && e.classList.add(Fi), e.parentNode && t(e.parentNode).hasClass(Hi)) {
                                var o = t(e).closest(Wi)[0];
                                if (o) {
                                    var s = [].slice.call(o.querySelectorAll(Qi));
                                    t(s).addClass(qi)
                                }
                                e.setAttribute("aria-expanded", !0)
                            }
                            i && i()
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this),
                                    r = i.data(Oi);
                                if (r || (r = new e(this), i.data(Oi, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                    r[n]()
                                }
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]), e
                    }();
                t(document).on(Pi.CLICK_DATA_API, Ki, (function(e) {
                    e.preventDefault(), zi._jQueryInterface.call(t(this), "show")
                })), t.fn[ki] = zi._jQueryInterface, t.fn[ki].Constructor = zi, t.fn[ki].noConflict = function() {
                    return t.fn[ki] = ji, zi._jQueryInterface
                };
                var Yi = "toast",
                    Xi = "bs.toast",
                    Gi = "." + Xi,
                    Ji = t.fn[Yi],
                    Zi = {
                        CLICK_DISMISS: "click.dismiss" + Gi,
                        HIDE: "hide" + Gi,
                        HIDDEN: "hidden" + Gi,
                        SHOW: "show" + Gi,
                        SHOWN: "shown" + Gi
                    },
                    er = "fade",
                    tr = "hide",
                    nr = "show",
                    ir = "showing",
                    rr = {
                        animation: "boolean",
                        autohide: "boolean",
                        delay: "number"
                    },
                    or = {
                        animation: !0,
                        autohide: !0,
                        delay: 500
                    },
                    sr = '[data-dismiss="toast"]',
                    ar = function() {
                        function e(e, t) {
                            this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                        }
                        var n = e.prototype;
                        return n.show = function() {
                            var e = this;
                            t(this._element).trigger(Zi.SHOW), this._config.animation && this._element.classList.add(er);
                            var n = function() {
                                e._element.classList.remove(ir), e._element.classList.add(nr), t(e._element).trigger(Zi.SHOWN), e._config.autohide && e.hide()
                            };
                            if (this._element.classList.remove(tr), this._element.classList.add(ir), this._config.animation) {
                                var i = l.getTransitionDurationFromElement(this._element);
                                t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
                            } else n()
                        }, n.hide = function(e) {
                            var n = this;
                            this._element.classList.contains(nr) && (t(this._element).trigger(Zi.HIDE), e ? this._close() : this._timeout = setTimeout((function() {
                                n._close()
                            }), this._config.delay))
                        }, n.dispose = function() {
                            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(nr) && this._element.classList.remove(nr), t(this._element).off(Zi.CLICK_DISMISS), t.removeData(this._element, Xi), this._element = null, this._config = null
                        }, n._getConfig = function(e) {
                            return e = o({}, or, t(this._element).data(), "object" == typeof e && e ? e : {}), l.typeCheckConfig(Yi, e, this.constructor.DefaultType), e
                        }, n._setListeners = function() {
                            var e = this;
                            t(this._element).on(Zi.CLICK_DISMISS, sr, (function() {
                                return e.hide(!0)
                            }))
                        }, n._close = function() {
                            var e = this,
                                n = function() {
                                    e._element.classList.add(tr), t(e._element).trigger(Zi.HIDDEN)
                                };
                            if (this._element.classList.remove(nr), this._config.animation) {
                                var i = l.getTransitionDurationFromElement(this._element);
                                t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
                            } else n()
                        }, e._jQueryInterface = function(n) {
                            return this.each((function() {
                                var i = t(this),
                                    r = i.data(Xi);
                                if (r || (r = new e(this, "object" == typeof n && n), i.data(Xi, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                    r[n](this)
                                }
                            }))
                        }, i(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return rr
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return or
                            }
                        }]), e
                    }();
                t.fn[Yi] = ar._jQueryInterface, t.fn[Yi].Constructor = ar, t.fn[Yi].noConflict = function() {
                        return t.fn[Yi] = Ji, ar._jQueryInterface
                    },
                    function() {
                        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                        var e = t.fn.jquery.split(" ")[0].split(".");
                        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                    }(), e.Util = l, e.Alert = v, e.Button = O, e.Carousel = le, e.Collapse = xe, e.Dropdown = nn, e.Modal = Tn, e.Popover = ci, e.Scrollspy = Ii, e.Tab = zi, e.Toast = ar, e.Tooltip = Xn, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }));
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var player, firstScriptTag = document.getElementsByTagName("script")[0];
            
            function onYouTubeIframeAPIReady() {
                player = new YT.Player("videoIframe", {
                    events: {
                        onReady: function(e) {}
                    }
                })
            }
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag), $("#exampleModalCenter").on("hidden.bs.modal", (function() {
                player && player.pauseVideo()
            }));
            const carruselInner = document.querySelector(".carrusel-inner"),
                carruselItems = document.querySelectorAll(".carrusel-item"),
                totalItems = carruselItems.length;
            let index = 0;
            
            function getVisibleItemsCount() {
                return window.innerWidth <= 768 ? 1 : 3
            }
            
function moveToNext() {
    const e = getVisibleItemsCount(),
                    t = 100 / e;
                index = (index + 1) % totalItems, carruselInner.style.transition = "transform 1s ease", carruselInner.style.transform = `translateX(-${index*t}%)`, index >= totalItems - e && setTimeout((() => {
                    carruselInner.classList.add("fade-in"), carruselInner.style.transform = "translateX(0)", index = 0, setTimeout((() => {
                        carruselInner.classList.remove("fade-in"), carruselInner.style.transition = "transform 1s ease"
                    }), 500)
                }), 1e3)
            }
            setInterval(moveToNext, 3e3), window.addEventListener("resize", (() => {
                index = 0, carruselInner.style.transition = "none", carruselInner.style.transform = "translateX(0)"
            }));




document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('#navbarSupportedContent');
  
     
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
  
      // Desplaza la ventana hacia arriba suavemente
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300); 
    });
  });
  
  
  
  
  
  
  
  
  
  
  document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita la recarga de la página
  
    const formData = new FormData(this);
    const modal = document.getElementById('formSuccessModal');
  
    try {
        const response = await fetch('https://formspree.io/f/manyenwl', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
  
        if (response.ok) {
            showCustomModal(modal); // Muestra el modal
            this.reset(); // Limpia el formulario
        } else {
            const data = await response.json();
            console.error('Error en el envío:', data);
        }
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
  });
  
  
  // Lógica para cerrar el modal al hacer clic en el botón "X"
  document.querySelector('.close-modal').addEventListener('click', function () {
    const modal = document.getElementById('formSuccessModal');
    modal.classList.remove('show');
  });
  
  // Función para mostrar el modal
  function showCustomModal(modal) {
    modal.classList.add('show');
  
    // Cierra el modal automáticamente después de 3 segundos
    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
  }
  
  
  document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const modal = document.getElementById('formSuccessModal');
    const submitButton = this.querySelector('input[type="submit"]');
  
    // Deshabilitar el botón para evitar múltiples envíos
    submitButton.disabled = true;
    submitButton.value = 'Enviando...';
  
    try {
        const response = await fetch('https://formspree.io/f/manyenwl', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
  
        if (response.ok) {
            showCustomModal(modal);
            this.reset();
        } else {
            console.error('Error en el envío');
        }
    } catch (error) {
        console.error('Error en la conexión:', error);
    } finally {
        // Rehabilitar el botón
        submitButton.disabled = false;
        submitButton.value = 'Enviar mensaje';
    }
  });
  
  
  
      document.addEventListener("DOMContentLoaded", function() {
          const toggler = document.querySelector('.navbar-toggler');
          if (toggler) {
              toggler.classList.add('collapsed');
              toggler.setAttribute('aria-expanded', 'false');
          }
      });
  
  
  
  
  
      // Variable para almacenar el reproductor activo
      let activePlayer = null;
  
      // Función que se llama cuando la API de YouTube está lista
      function onYouTubeIframeAPIReady() {
          const players = document.querySelectorAll('.youtube-video');
          players.forEach(player => {
              const videoId = player.id;
              // Crear un nuevo reproductor de YouTube
              const ytPlayer = new YT.Player(videoId, {
                  events: {
                      'onStateChange': function(event) {
                          // Si se reproduce un video
                          if (event.data === YT.PlayerState.PLAYING) {
                              // Si ya hay un reproductor activo
                              if (activePlayer && activePlayer !== ytPlayer) {
                                  // Pausar el video activo
                                  activePlayer.pauseVideo();
                              }
                              // Actualizar el reproductor activo
                              activePlayer = ytPlayer;
                          }
                      }
                  }
              });
          });
          
     
      }
  
         // Obtén el iframe y el modal
         const videoIframe = document.getElementById('videoIframe');
         const modal = document.getElementById('exampleModalCenter');
     
         // Agrega un evento cuando el modal se cierra
         $('#exampleModalCenter').on('hidden.bs.modal', function () {
             // Detiene el video reiniciando el src del iframe
             videoIframe.src = videoIframe.src;
         });
  
  
  
          // Detectar cuando se abre el modal
      $('#exampleModalCenter').on('show.bs.modal', function () {
          document.body.classList.add('no-scroll');
      });
  
      // Detectar cuando se cierra el modal
      $('#exampleModalCenter').on('hidden.bs.modal', function () {
          document.body.classList.remove('no-scroll');
          // Detener el video en el iframe al cerrar el modal
          const videoIframe = document.getElementById('videoIframe');
          videoIframe.src = videoIframe.src;
      });
