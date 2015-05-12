(function(e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {}, p = [],
		f = "1.10.2",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function(e, t) {
			return new x.fn.init(e, t, r)
		}, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function(e, t) {
			return t.toUpperCase()
		}, q = function(e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		}, _ = function() {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};
	x.fn = x.prototype = {
		jquery: f,
		constructor: x,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return g.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return x.each(this, e, t)
		},
		ready: function(e) {
			return x.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(g.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {}, l = 1,
			u = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--x.readyWait : !x.isReady) {
				if (!a.body) return setTimeout(x.ready);
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === x.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			var n;
			if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
			try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			if (x.support.ownLast) for (n in e) return v.call(e, n);
			for (n in e);
			return n === t || v.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && x.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(D, "ms-").replace(L, H)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
				} else for (i in e) if (r = t.apply(e[i], n), r === !1) break
			} else if (a) {
				for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
			} else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		},
		trim: b && !b.call("\ufeff ") ? function(e) {
			return null == e ? "" : b.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (m) return m.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
			else while (n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return d.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var l = 0,
				u = e.length,
				c = null == r;
			if ("object" === x.type(r)) {
				o = !0;
				for (l in r) x.access(e, n, l, r[l], !0, a, s)
			} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
				return c.call(x(e), n)
			})), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}), x.ready.promise = function(t) {
		if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
		else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
		else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r = !1;
			try {
				r = null == e.frameElement && a.documentElement
			} catch (i) {}
			r && r.doScroll && function o() {
				if (!x.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}()
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = x(a),
	function(e, t) {
		var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
			w = e.document,
			T = 0,
			C = 0,
			N = st(),
			k = st(),
			E = st(),
			S = !1,
			A = function(e, t) {
				return e === t ? (S = !0, 0) : 0
			}, j = typeof t,
			D = 1 << 31,
			L = {}.hasOwnProperty,
			H = [],
			q = H.pop,
			_ = H.push,
			M = H.push,
			O = H.slice,
			F = H.indexOf || function(e) {
				var t = 0,
					n = this.length;
				for (; n > t; t++) if (this[t] === e) return t;
				return -1
			}, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			P = "[\\x20\\t\\r\\n\\f]",
			R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			W = R.replace("w", "w#"),
			$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
			I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
			z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
			X = RegExp("^" + P + "*," + P + "*"),
			U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
			V = RegExp(P + "*[+~]"),
			Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
			J = RegExp(I),
			G = RegExp("^" + W + "$"),
			Q = {
				ID: RegExp("^#(" + R + ")"),
				CLASS: RegExp("^\\.(" + R + ")"),
				TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
				ATTR: RegExp("^" + $),
				PSEUDO: RegExp("^" + I),
				CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
				bool: RegExp("^(?:" + B + ")$", "i"),
				needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
			}, K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /^(?:input|select|textarea|button)$/i,
			tt = /^h\d$/i,
			nt = /'|\\/g,
			rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
			it = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
			};
		try {
			M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
		} catch (ot) {
			M = {
				apply: H.length ? function(e, t) {
					_.apply(e, O.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		function at(e, t, n, i) {
			var o, a, s, l, u, c, d, m, y, x;
			if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (l = t.nodeType) && 9 !== l) return [];
			if (h && !i) {
				if (o = Z.exec(e)) if (s = o[1]) {
					if (9 === l) {
						if (a = t.getElementById(s), !a || !a.parentNode) return n;
						if (a.id === s) return n.push(a), n
					} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
				} else {
					if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
					if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
				}
				if (r.qsa && (!g || !g.test(e))) {
					if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
						c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
						while (u--) c[u] = m + yt(c[u]);
						y = V.test(e) && t.parentNode || t, x = c.join(",")
					}
					if (x) try {
						return M.apply(n, y.querySelectorAll(x)), n
					} catch (T) {} finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return kt(e.replace(z, "$1"), t, n, i)
		}
		function st() {
			var e = [];

			function t(n, r) {
				return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
			}
			return t
		}
		function lt(e) {
			return e[b] = !0, e
		}
		function ut(e) {
			var t = f.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}
		function ct(e, t) {
			var n = e.split("|"),
				r = e.length;
			while (r--) o.attrHandle[n[r]] = t
		}
		function pt(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
			if (r) return r;
			if (n) while (n = n.nextSibling) if (n === t) return -1;
			return e ? 1 : -1
		}
		function ft(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function dt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function ht(e) {
			return lt(function(t) {
				return t = +t, lt(function(n, r) {
					var i, o = e([], n.length, t),
						a = o.length;
					while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		s = at.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, r = at.support = {}, p = at.setDocument = function(e) {
			var n = e ? e.ownerDocument || e : w,
				i = n.defaultView;
			return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
				p()
			}), r.attributes = ut(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), r.getElementsByTagName = ut(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), r.getElementsByClassName = ut(function(e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), r.getById = ut(function(e) {
				return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
			}), r.getById ? (o.find.ID = function(e, t) {
				if (typeof t.getElementById !== j && h) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, o.filter.ID = function(e) {
				var t = e.replace(rt, it);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete o.find.ID, o.filter.ID = function(e) {
				var t = e.replace(rt, it);
				return function(e) {
					var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), o.find.TAG = r.getElementsByTagName ? function(e, n) {
				return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, o.find.CLASS = r.getElementsByClassName && function(e, n) {
				return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
			}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
			}), ut(function(e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
			})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
				r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
			}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t) while (t = t.parentNode) if (t === e) return !0;
				return !1
			}, A = d.compareDocumentPosition ? function(e, t) {
				if (e === t) return S = !0, 0;
				var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
				return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function(e, t) {
				var r, i = 0,
					o = e.parentNode,
					a = t.parentNode,
					s = [e],
					l = [t];
				if (e === t) return S = !0, 0;
				if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
				if (o === a) return pt(e, t);
				r = e;
				while (r = r.parentNode) s.unshift(r);
				r = t;
				while (r = r.parentNode) l.unshift(r);
				while (s[i] === l[i]) i++;
				return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
			}, n) : f
		}, at.matches = function(e, t) {
			return at(e, null, null, t)
		}, at.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
				var n = y.call(e, t);
				if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (i) {}
			return at(t, f, null, [e]).length > 0
		}, at.contains = function(e, t) {
			return (e.ownerDocument || e) !== f && p(e), v(e, t)
		}, at.attr = function(e, n) {
			(e.ownerDocument || e) !== f && p(e);
			var i = o.attrHandle[n.toLowerCase()],
				a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
			return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
		}, at.error = function(e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		}, at.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				o = 0;
			if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
				while (t = e[o++]) t === e[o] && (i = n.push(o));
				while (i--) e.splice(n[i], 1)
			}
			return e
		}, a = at.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else for (; t = e[r]; r++) n += a(t);
			return n
		}, o = at.selectors = {
			cacheLength: 50,
			createPseudo: lt,
			match: Q,
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
					return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
				},
				PSEUDO: function(e) {
					var n, r = !e[5] && e[2];
					return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(rt, it).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = N[e + " "];
					return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = at.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							y = s && t.nodeName.toLowerCase(),
							v = !l && !s;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && v) {
								c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
								while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
									c[e] = [T, d, f];
									break
								}
							} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
							else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
							return f -= i, f === r || 0 === f % r && f / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
					return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
						var i, o = r(e, t),
							a = o.length;
						while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
					}) : function(e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: lt(function(e) {
					var t = [],
						n = [],
						r = l(e.replace(z, "$1"));
					return r[b] ? lt(function(e, t, n, i) {
						var o, a = r(e, null, i, []),
							s = e.length;
						while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}),
				has: lt(function(e) {
					return function(t) {
						return at(e, t).length > 0
					}
				}),
				contains: lt(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
					}
				}),
				lang: lt(function(e) {
					return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
					function(t) {
						var n;
						do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === d
				},
				focus: function(e) {
					return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
					return !0
				},
				parent: function(e) {
					return !o.pseudos.empty(e)
				},
				header: function(e) {
					return tt.test(e.nodeName)
				},
				input: function(e) {
					return et.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: ht(function() {
					return [0]
				}),
				last: ht(function(e, t) {
					return [t - 1]
				}),
				eq: ht(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: ht(function(e, t) {
					var n = 0;
					for (; t > n; n += 2) e.push(n);
					return e
				}),
				odd: ht(function(e, t) {
					var n = 1;
					for (; t > n; n += 2) e.push(n);
					return e
				}),
				lt: ht(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0;) e.push(r);
					return e
				}),
				gt: ht(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r;) e.push(r);
					return e
				})
			}
		}, o.pseudos.nth = o.pseudos.eq;
		for (n in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) o.pseudos[n] = ft(n);
		for (n in {
			submit: !0,
			reset: !0
		}) o.pseudos[n] = dt(n);

		function gt() {}
		gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

		function mt(e, t) {
			var n, r, i, a, s, l, u, c = k[e + " "];
			if (c) return t ? 0 : c.slice(0);
			s = e, l = [], u = o.preFilter;
			while (s) {
				(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
					value: n,
					type: r[0].replace(z, " ")
				}), s = s.slice(n.length));
				for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
					value: n,
					type: a,
					matches: r
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
		}
		function yt(e) {
			var t = 0,
				n = e.length,
				r = "";
			for (; n > t; t++) r += e[t].value;
			return r
		}
		function vt(e, t, n) {
			var r = t.dir,
				o = n && "parentNode" === r,
				a = C++;
			return t.first ? function(t, n, i) {
				while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i)
			} : function(t, n, s) {
				var l, u, c, p = T + " " + a;
				if (s) {
					while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
				} else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
					if ((l = u[1]) === !0 || l === i) return l === !0
				} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
			}
		}
		function bt(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while (i--) if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}
		function xt(e, t, n, r, i) {
			var o, a = [],
				s = 0,
				l = e.length,
				u = null != t;
			for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
			return a
		}
		function wt(e, t, n, r, i, o) {
			return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
				var u, c, p, f = [],
					d = [],
					h = a.length,
					g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
					m = !e || !o && t ? g : xt(g, f, e, s, l),
					y = n ? i || (o ? e : h || r) ? [] : a : m;
				if (n && n(m, y, s, l), r) {
					u = xt(y, d), r(u, [], s, l), c = u.length;
					while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
				}
				if (o) {
					if (i || e) {
						if (i) {
							u = [], c = y.length;
							while (c--)(p = y[c]) && u.push(m[c] = p);
							i(null, y = [], u, l)
						}
						c = y.length;
						while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
					}
				} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
			})
		}
		function Tt(e) {
			var t, n, r, i = e.length,
				a = o.relative[e[0].type],
				s = a || o.relative[" "],
				l = a ? 1 : 0,
				c = vt(function(e) {
					return e === t
				}, s, !0),
				p = vt(function(e) {
					return F.call(t, e) > -1
				}, s, !0),
				f = [function(e, n, r) {
					return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
				}];
			for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
			else {
				if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
					for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
					return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
						value: " " === e[l - 2].type ? "*" : ""
					})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
				}
				f.push(n)
			}
			return bt(f)
		}
		function Ct(e, t) {
			var n = 0,
				r = t.length > 0,
				a = e.length > 0,
				s = function(s, l, c, p, d) {
					var h, g, m, y = [],
						v = 0,
						b = "0",
						x = s && [],
						w = null != d,
						C = u,
						N = s || a && o.find.TAG("*", d && l.parentNode || l),
						k = T += null == C ? 1 : Math.random() || .1;
					for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
						if (a && h) {
							g = 0;
							while (m = e[g++]) if (m(h, l, c)) {
								p.push(h);
								break
							}
							w && (T = k, i = ++n)
						}
						r && ((h = !m && h) && v--, s && x.push(h))
					}
					if (v += b, r && b !== v) {
						g = 0;
						while (m = t[g++]) m(x, y, l, c);
						if (s) {
							if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
							y = xt(y)
						}
						M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
					}
					return w && (T = k, u = C), x
				};
			return r ? lt(s) : s
		}
		l = at.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = E[e + " "];
			if (!o) {
				t || (t = mt(e)), n = t.length;
				while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
				o = E(e, Ct(i, r))
			}
			return o
		};

		function Nt(e, t, n) {
			var r = 0,
				i = t.length;
			for (; i > r; r++) at(e, t[r], n);
			return n
		}
		function kt(e, t, n, i) {
			var a, s, u, c, p, f = mt(e);
			if (!i && 1 === f.length) {
				if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
					if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
					e = e.slice(s.shift().value.length)
				}
				a = Q.needsContext.test(e) ? 0 : s.length;
				while (a--) {
					if (u = s[a], o.relative[c = u.type]) break;
					if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
						if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
						break
					}
				}
			}
			return l(e, f)(i, t, !h, n, V.test(e)), n
		}
		r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
			return 1 & e.compareDocumentPosition(f.createElement("div"))
		}), ut(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ct("type|href|height|width", function(e, n, r) {
			return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
		}), r.attributes && ut(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ct("value", function(e, n, r) {
			return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
		}), ut(function(e) {
			return null == e.getAttribute("disabled")
		}) || ct(B, function(e, n, r) {
			var i;
			return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
		}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
	}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function(e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function(t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					r = !1;
					break
				}
				n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			}, p = {
				add: function() {
					if (l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function(t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return l && x.each(arguments, function(e, t) {
						var r;
						while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = u = r = t, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = t, r || p.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", x.Callbacks("once memory"), "resolved"],
				["reject", "fail", x.Callbacks("once memory"), "rejected"],
				["notify", "progress", x.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return x.Deferred(function(n) {
							x.each(t, function(t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? x.extend(e, r) : r
					}
				}, i = {};
			return r.pipe = r.then, x.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				}, s, l, u;
			if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function(t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! o.value, t.optSelected = u.selected, t.enctype = !! a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
			submit: !0,
			change: !0,
			focusin: !0
		}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (f in x(t)) break;
		return t.ownLast = "0" !== f, x(function() {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null,
		t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: x.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
		}
	}
	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while (i--) delete r[t[i]];
					if (n ? !I(r) : !x.isEmptyObject(r)) return
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !! e && !I(e)
		},
		data: function(e, t, n) {
			return R(e, t, n)
		},
		removeData: function(e, t) {
			return W(e, t)
		},
		_data: function(e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return W(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				x.removeData(this, e)
			})
		}
	});

	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch (o) {}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}
	function I(e) {
		var t;
		for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	x.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				a = function() {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function() {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				x.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				x.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = x.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
				o = 0;
				while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
				n.className = x.trim(r)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
				o = 0;
				while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
				n.className = e ? x.trim(r) : ""
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var t, r = 0,
						o = x(this),
						a = e.match(T) || [];
					while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						l = 0 > i ? s : o ? i : 0;
					for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
						if (t = x(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						a = i.length;
					while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function(e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function(e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function(e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function(e, n) {
		x.attrHooks[n] = {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
		x.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
		x.valHooks[this] = {
			set: function(e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}
	function ot() {
		return !1
	}
	function at() {
		try {
			return a.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
					p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
					while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
					l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
				} else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
				for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
				o.length && s.push({
					elem: u,
					handlers: o
				})
			}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[x.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while (t--) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== at() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function(e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function(e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function() {
				0 === n++ && a.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
				for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function(e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
				n = o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function pt(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x.sibling(e.firstChild)
		},
		contents: function(e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function(e, t) {
		x.fn[e] = function(n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return x.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function(e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}
	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) while (t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}, jt = dt(a),
		Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function(e) {
			return x.access(this, function(e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return x.clone(this, e, t)
			})
		},
		html: function(e) {
			return x.access(this, function(e) {
				var n = this[0] || {}, r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = x.map(this, function(e) {
				return [e.nextSibling, e.parentNode]
			}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}
	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function _t(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}
	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}
	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for (r in i.events) x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		x.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = x(e),
				a = o.length - 1;
			for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}
	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	x.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
			if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
			else Mt(e, o);
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
			else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--) s = s.lastChild;
				if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
					o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
				}
				x.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
				i = 0;
				while (o = s[i++]) kt.test(o.type || "") && n.push(o)
			}
			return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				l = x.expando,
				u = x.cache,
				c = x.support.deleteExpando,
				f = x.event.special;
			for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
				if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);

				u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
			}
		},
		_evalUrl: function(e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), x.fn.extend({
		wrapAll: function(e) {
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = x.isFunction(e);
			return this.each(function(n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		}, Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, Kt = {
			letterSpacing: 0,
			fontWeight: 400
		}, Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--) if (t = en[i] + n, t in e) return t;
		return r
	}
	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}
	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	x.fn.extend({
		css: function(e, n) {
			return x.access(this, function(e, n, r) {
				var i, o, a = {}, s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch (c) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}
	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}
	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function(e, n) {
		x.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function() {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
			x.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		x.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {}, o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function() {
			return x.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function(e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
			o(this.name, this.value)
		});
		else for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t)) x.each(t, function(t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x.type(t)) r(e, t);
		else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		x.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {}, jn = {}, Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function qn(e, n, r, i) {
		var o = {}, a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function(e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}
	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function(e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		x.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {}, y = {}, v = {}, b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];
						else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
			w = "abort";
			for (i in {
				success: 1,
				error: 1,
				complete: 1
			}) C[i](p[i]);
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(2 > b)) throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function(e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function(e, n) {
		x[n] = function(e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	});

	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o) for (s in l) if (l[s] && l[s].test(o)) {
			u.unshift(s);
			break
		}
		if (u[0] in r) a = u[0];
		else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}
	function On(e, t, n, r) {
		var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
		if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
				a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0) if (a && e["throws"]) t = a(t);
			else try {
				t = a(t)
			} catch (p) {
				return {
					state: "parsererror",
					error: a ? p : "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function(t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function() {
			var e;
			for (e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !! Rn && "withCredentials" in Rn, Rn = x.support.ajax = !! Rn, Rn && x.ajaxTransport(function(n) {
		if (!n.crossDomain || x.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) l.setRequestHeader(s, i[s])
					} catch (u) {}
					l.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
							else {
								p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
								try {
									c = l.statusText
								} catch (f) {
									c = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
							}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, x.style(n.elem, e, a + o);
					while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = x.now()
	}
	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]),
			o = 0,
			a = i.length;
		for (; a > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, u.startTime + u.duration - t),
					r = n / u.duration || 0,
					o = 1 - r,
					a = 0,
					l = u.tweens.length;
				for (; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			}, u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}
	function tr(e, t) {
		var n, r, i, o, a;
		for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
			o = a.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	x.Animation = x.extend(er, {
		tweener: function(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {}, p = e.style,
			f = e.nodeType && nn(e),
			d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], Vn.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
			c[r] = d && d[r] || x.style(e, r)
		}
		if (!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
				x(e).hide()
			}), u.done(function() {
				var t;
				x._removeData(e, "fxshow");
				for (t in c) x.style(e, t, c[t])
			});
			for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	x.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function(e, t) {
		var n = x.fn[t];
		x.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function() {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
			height: e
		}, i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		x.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
		var e, n = x.timers,
			r = 0;
		for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function(e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function() {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function() {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
		return x.grep(x.timers, function(t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {
			top: 0,
			left: 0
		}, a = this[0],
			s = a && a.ownerDocument;
		if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, x.offset = {
		setOffset: function(e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
				u = {}, c = {}, p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				}, r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function(i) {
			return x.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			x.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function(n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function() {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	}))
})(window);
window.Modernizr = function(a, b, c) {
	function z(a) {
		j.cssText = a
	}
	function A(a, b) {
		return z(m.join(a + ";") + (b || ""))
	}
	function B(a, b) {
		return typeof a === b
	}
	function C(a, b) {
		return !!~ ("" + a).indexOf(b)
	}
	function D(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
		}
		return !1
	}
	function E(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}
	function F(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1),
			e = (a + " " + o.join(d + " ") + d).split(" ");
		return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
	}
	var d = "2.7.1",
		e = {}, f = !0,
		g = b.documentElement,
		h = "modernizr",
		i = b.createElement(h),
		j = i.style,
		k, l = {}.toString,
		m = " -webkit- -moz- -o- -ms- ".split(" "),
		n = "Webkit Moz O ms",
		o = n.split(" "),
		p = n.toLowerCase().split(" "),
		q = {}, r = {}, s = {}, t = [],
		u = t.slice,
		v, w = function(a, c, d, e) {
			var f, i, j, k, l = b.createElement("div"),
				m = b.body,
				n = m || b.createElement("body");
			if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
			return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !! i
		}, x = {}.hasOwnProperty,
		y;
	!B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
		return x.call(a, b)
	} : y = function(a, b) {
		return b in a && B(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function(b) {
		var c = this;
		if (typeof c != "function") throw new TypeError;
		var d = u.call(arguments, 1),
			e = function() {
				if (this instanceof e) {
					var a = function() {};
					a.prototype = c.prototype;
					var f = new a,
						g = c.apply(f, d.concat(u.call(arguments)));
					return Object(g) === g ? g : f
				}
				return c.apply(b, d.concat(u.call(arguments)))
			};
		return e
	}), q.cssanimations = function() {
		return F("animationName")
	}, q.csscolumns = function() {
		return F("columnCount")
	}, q.csstransforms = function() {
		return !!F("transform")
	}, q.csstransforms3d = function() {
		var a = !! F("perspective");
		return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
			a = b.offsetLeft === 9 && b.offsetHeight === 3
		}), a
	}, q.csstransitions = function() {
		return F("transition")
	};
	for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
	return e.addTest = function(a, b) {
		if (typeof a == "object") for (var d in a) y(a, d) && e.addTest(d, a[d]);
		else {
			a = a.toLowerCase();
			if (e[a] !== c) return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, z(""), i = k = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
		return D([a])
	}, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
		return b ? F(a, b, c) : F(a, "pfx")
	}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document);
! function(a) {
	var b, c, d = "0.4.2",
		e = "hasOwnProperty",
		f = /[\.\/]/,
		g = "*",
		h = function() {}, i = function(a, b) {
			return a - b
		}, j = {
			n: {}
		}, k = function(a, d) {
			a = String(a);

			var e, f = c,
				g = Array.prototype.slice.call(arguments, 2),
				h = k.listeners(a),
				j = 0,
				l = [],
				m = {}, n = [],
				o = b;
			b = a, c = 0;
			for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
			for (l.sort(i); l[j] < 0;) if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
			for (p = 0; q > p; p++) if (e = h[p], "zIndex" in e) if (e.zIndex == l[j]) {
				if (n.push(e.apply(d, g)), c) break;
				do if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break;
				while (e)
			} else m[e.zIndex] = e;
			else if (n.push(e.apply(d, g)), c) break;
			return c = f, b = o, n.length ? n : null
		};
	k._events = j, k.listeners = function(a) {
		var b, c, d, e, h, i, k, l, m = a.split(f),
			n = j,
			o = [n],
			p = [];
		for (e = 0, h = m.length; h > e; e++) {
			for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
			o = l
		}
		return p
	}, k.on = function(a, b) {
		if (a = String(a), "function" != typeof b) return function() {};
		for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
			n: {}
		});
		for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++) if (d.f[e] == b) return h;
		return d.f.push(b),
		function(a) {
			+a == +a && (b.zIndex = +a)
		}
	}, k.f = function(a) {
		var b = [].slice.call(arguments, 1);
		return function() {
			k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
		}
	}, k.stop = function() {
		c = 1
	}, k.nt = function(a) {
		return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
	}, k.nts = function() {
		return b.split(f)
	}, k.off = k.unbind = function(a, b) {
		if (!a) return k._events = j = {
			n: {}
		}, void 0;
		var c, d, h, i, l, m, n, o = a.split(f),
			p = [j];
		for (i = 0, l = o.length; l > i; i++) for (m = 0; m < p.length; m += h.length - 2) {
			if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
			else for (d in c) c[e](d) && h.push(c[d]);
			p.splice.apply(p, h)
		}
		for (i = 0, l = p.length; l > i; i++) for (c = p[i]; c.n;) {
			if (b) {
				if (c.f) {
					for (m = 0, n = c.f.length; n > m; m++) if (c.f[m] == b) {
						c.f.splice(m, 1);
						break
					}!c.f.length && delete c.f
				}
				for (d in c.n) if (c.n[e](d) && c.n[d].f) {
					var q = c.n[d].f;
					for (m = 0, n = q.length; n > m; m++) if (q[m] == b) {
						q.splice(m, 1);
						break
					}!q.length && delete c.n[d].f
				}
			} else {
				delete c.f;
				for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
			}
			c = c.n
		}
	}, k.once = function(a, b) {
		var c = function() {
			return k.unbind(a, c), b.apply(this, arguments)
		};
		return k.on(a, c)
	}, k.version = d, k.toString = function() {
		return "You are running Eve " + d
	}, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
		return k
	}) : a.eve = k
}(this),
function(a, b) {
	"function" == typeof define && define.amd ? define(["eve"], function(c) {
		return b(a, c)
	}) : b(a, a.eve)
}(this, function(a, b) {
	var c = function(b) {
		var c = {}, d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
				setTimeout(a, 16)
			}, e = Array.isArray || function(a) {
				return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
			}, f = 0,
			g = "M" + (+new Date).toString(36),
			h = function() {
				return g + (f++).toString(36)
			}, i = Date.now || function() {
				return +new Date
			}, j = function(a) {
				var b = this;
				if (null == a) return b.s;
				var c = b.s - a;
				b.b += b.dur * c, b.B += b.dur * c, b.s = a
			}, k = function(a) {
				var b = this;
				return null == a ? b.spd : (b.spd = a, void 0)
			}, l = function(a) {
				var b = this;
				return null == a ? b.dur : (b.s = b.s * a / b.dur, b.dur = a, void 0)
			}, m = function() {
				var a = this;
				delete c[a.id], b("mina.stop." + a.id, a)
			}, n = function() {
				var a = this;
				a.pdif || (delete c[a.id], a.pdif = a.get() - a.b)
			}, o = function() {
				var a = this;
				a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
			}, p = function() {
				var a = 0;
				for (var f in c) if (c.hasOwnProperty(f)) {
					var g, h = c[f],
						i = h.get();
					if (a++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete c[f], h.s = 1, a--, function(a) {
						setTimeout(function() {
							b("mina.finish." + a.id, a)
						})
					}(h)), e(h.start)) {
						g = [];
						for (var j = 0, k = h.start.length; k > j; j++) g[j] = +h.start[j] + (h.end[j] - h.start[j]) * h.easing(h.s)
					} else g = +h.start + (h.end - h.start) * h.easing(h.s);
					h.set(g)
				}
				a && d(p)
			}, q = function(a, b, e, f, g, i, r) {
				var s = {
					id: h(),
					start: a,
					end: b,
					b: e,
					s: 0,
					dur: f - e,
					spd: 1,
					get: g,
					set: i,
					easing: r || q.linear,
					status: j,
					speed: k,
					duration: l,
					stop: m,
					pause: n,
					resume: o
				};
				c[s.id] = s;
				var t, u = 0;
				for (t in c) if (c.hasOwnProperty(t) && (u++, 2 == u)) break;
				return 1 == u && d(p), s
			};
		return q.time = i, q.getById = function(a) {
			return c[a] || null
		}, q.linear = function(a) {
			return a
		}, q.easeout = function(a) {
			return Math.pow(a, 1.7)
		}, q.easein = function(a) {
			return Math.pow(a, .48)
		}, q.easeinout = function(a) {
			if (1 == a) return 1;
			if (0 == a) return 0;
			var b = .48 - a / 1.04,
				c = Math.sqrt(.1734 + b * b),
				d = c - b,
				e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
				f = -c - b,
				g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
				h = e + g + .5;
			return 3 * (1 - h) * h * h + h * h * h
		}, q.backin = function(a) {
			if (1 == a) return 1;
			var b = 1.70158;
			return a * a * ((b + 1) * a - b)
		}, q.backout = function(a) {
			if (0 == a) return 0;
			a -= 1;
			var b = 1.70158;
			return a * a * ((b + 1) * a + b) + 1
		}, q.elastic = function(a) {
			return a == !! a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * 2 * Math.PI / .3) + 1
		}, q.bounce = function(a) {
			var b, c = 7.5625,
				d = 2.75;
			return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
		}, a.mina = q, q
	}("undefined" == typeof b ? function() {} : b),
		d = function() {
			function d(a, b) {
				if (a) {
					if (a.tagName) return z(a);
					if (a instanceof u) return a;
					if (null == b) return a = I.doc.querySelector(a), z(a)
				}
				return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b)
			}
			function e(a, b) {
				if (b) {
					if ("string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(fb, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(gb, b.substring(4)) : a.getAttribute(b);
					for (var c in b) if (b[J](c)) {
						var d = K(b[c]);
						d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(fb, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(gb, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
					}
				} else a = I.doc.createElementNS(gb, a);
				return a
			}
			function f(a, b) {
				return b = K.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || U.call(a).slice(8, -1).toLowerCase() == b
			}
			function h(a) {
				if ("function" == typeof a || Object(a) !== a) return a;
				var b = new a.constructor;
				for (var c in a) a[J](c) && (b[c] = h(a[c]));
				return b
			}
			function i(a, b) {
				for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0])
			}
			function j(a, b, c) {
				function d() {
					var e = Array.prototype.slice.call(arguments, 0),
						f = e.join("␀"),
						g = d.cache = d.cache || {}, h = d.count = d.count || [];
					return g[J](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
				}
				return d
			}
			function k(a, b, c, d, e, f) {
				if (null == e) {
					var g = a - c,
						h = b - d;
					return g || h ? (180 + 180 * N.atan2(-h, -g) / R + 360) % 360 : 0
				}
				return k(a, b, e, f) - k(c, d, e, f)
			}
			function l(a) {
				return a % 360 * R / 180
			}
			function m(a) {
				return 180 * a / R % 360
			}
			function n(a, b, c, d, e, f) {
				return null == b && "[object SVGMatrix]" == U.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, this.f = a.f, void 0) : (null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0)
			}
			function o(a) {
				var b = [];
				return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
					return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, N.tan(l(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, N.tan(l(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a
				}), b
			}
			function p(a, b) {
				var c = qb(a),
					d = new n;
				if (c) for (var e = 0, f = c.length; f > e; e++) {
					var g, h, i, j, k, l = c[e],
						m = l.length,
						o = K(l[0]).toLowerCase(),
						p = l[0] != o,
						q = p ? d.invert() : 0;
					"t" == o && 2 == m ? d.translate(l[1], 0) : "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6])
				}
				return d
			}
			function q(a, b) {
				if (null == b) {
					var c = !0;
					if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new n;
					b = o(b)
				} else b = d._.rgTransform.test(b) ? K(b).replace(/\.{3}|\u2026/g, a._.transform || S) : o(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : K(b)), a._.transform = b;
				var e = p(b, a.getBBox(1));
				return c ? e : (a.matrix = e, void 0)
			}
			function r(a) {
				var b = d._.someDefs;
				if (b && rb(b.ownerDocument.documentElement, b)) return b;
				var c = a.node.ownerSVGElement && z(a.node.ownerSVGElement) || a.node.parentNode && z(a.node.parentNode) || d.select("svg") || d(0, 0),
					e = c.select("defs"),
					f = null == e ? !1 : e.node;
				return f || (f = x("defs", c.node).node), d._.someDefs = f, f
			}
			function s(a, b, c) {
				function d(a) {
					return null == a ? S : a == +a ? a : (e(j, {
						width: a
					}), j.getBBox().width)
				}
				function f(a) {
					return null == a ? S : a == +a ? a : (e(j, {
						height: a
					}), j.getBBox().height)
				}
				function g(d, e) {
					null == b ? i[d] = e(a.attr(d)) : d == b && (i = e(null == c ? a.attr(d) : c))
				}
				var h = r(a),
					i = {}, j = h.querySelector(".svg---mgr");
				switch (j || (j = e("rect"), e(j, {
					width: 10,
					height: 10,
					"class": "svg---mgr"
				}), h.appendChild(j)), a.type) {
					case "rect":
						g("rx", d), g("ry", f);
					case "image":
						g("width", d), g("height", f);
					case "text":
						g("x", d), g("y", f);
						break;
					case "circle":
						g("cx", d), g("cy", f), g("r", d);
						break;
					case "ellipse":
						g("cx", d), g("cy", f), g("rx", d), g("ry", f);
						break;
					case "line":
						g("x1", d), g("x2", d), g("y1", f), g("y2", f);
						break;
					case "marker":
						g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
						break;
					case "radialGradient":
						g("fx", d), g("fy", f);
						break;
					case "tspan":
						g("dx", d), g("dy", f);
						break;
					default:
						g(b, d)
				}
				return i
			}
			function t(a) {
				f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
				for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
				for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
					d.appendChild(a.node)
				}) : d.appendChild(a[b].node);
				var e = d.childNodes;
				for (b = 0; b < e.length; b++) this[c++] = z(e[b]);
				return this
			}
			function u(a) {
				if (a.snap in hb) return hb[a.snap];
				var b, c = this.id = eb();
				try {
					b = a.ownerSVGElement
				} catch (d) {}
				if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, this._ = {
					transform: []
				}, a.snap = c, hb[c] = this, "g" == this.type) {
					this.add = t;
					for (var e in y.prototype) y.prototype[J](e) && (this[e] = y.prototype[e])
				}
			}
			function v(a) {
				for (var b, c = 0, d = a.length; d > c; c++) if (b = b || a[c]) return b
			}
			function w(a) {
				this.node = a
			}
			function x(a, b) {
				var c = e(a);
				b.appendChild(c);
				var d = z(c);
				return d.type = a, d
			}
			function y(a, b) {
				var c, d, f, g = y.prototype;
				if (a && "svg" == a.tagName) {
					if (a.snap in hb) return hb[a.snap];
					c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(I.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
					for (var h in g) g[J](h) && (c[h] = g[h]);
					c.paper = c.root = c
				} else c = x("svg", I.doc.body), e(c.node, {
					height: b,
					version: 1.1,
					width: a,
					xmlns: gb
				});
				return c
			}
			function z(a) {
				return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a
			}
			function A() {
				return this.selectAll("stop")
			}
			function B(a, b) {
				var c = e("stop"),
					f = {
						offset: +b + "%"
					};
				return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), e(c, f), this.node.appendChild(c), this
			}
			function C() {
				if ("linearGradient" == this.type) {
					var a = e(this.node, "x1") || 0,
						b = e(this.node, "x2") || 1,
						c = e(this.node, "y1") || 0,
						f = e(this.node, "y2") || 0;
					return d._.box(a, c, N.abs(b - a), N.abs(f - c))
				}
				var g = this.node.cx || .5,
					h = this.node.cy || .5,
					i = this.node.r || 0;
				return d._.box(g - i, h - i, 2 * i, 2 * i)
			}
			function D(a, c) {
				function d(a, b) {
					for (var c = (b - j) / (a - k), d = k; a > d; d++) h[d].offset = +(+j + c * (d - k)).toFixed(2);
					k = a, j = b
				}
				var f, g = v(b("snap.util.grad.parse", null, c));
				if (!g) return null;
				g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), g.type != g.type.toLowerCase() && e(f.node, {
					gradientUnits: "userSpaceOnUse"
				});
				var h = g.stops,
					i = h.length,
					j = 0,
					k = 0;
				i--;
				for (var l = 0; i > l; l++) "offset" in h[l] && d(l, h[l].offset);
				for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
					var m = h[l];
					f.addStop(m.color, m.offset)
				}
				return f
			}
			function E(a, b, c, d, f) {
				var g = x("linearGradient", a);
				return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, {
					x1: b,
					y1: c,
					x2: d,
					y2: f
				}), g
			}
			function F(a, b, c, d, f, g) {
				var h = x("radialGradient", a);
				return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, {
					cx: b,
					cy: c,
					r: d
				}), null != f && null != g && e(h.node, {
					fx: f,
					fy: g
				}), h
			}
			function G(a) {
				return function(c) {
					if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, r(this).appendChild(c), c = z(c)), c instanceof u) if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) {
						c.node.id || e(c.node, {
							id: c.id
						});
						var f = ib(c.node.id)
					} else f = c.attr(a);
					else if (f = d.color(c), f.error) {
						var g = D(r(this), c);
						g ? (g.node.id || e(g.node, {
							id: g.id
						}), f = ib(g.node.id)) : f = c
					} else f = K(f);
					var h = {};
					h[a] = f, e(this.node, h), this.node.style[a] = S
				}
			}
			function H(a) {
				for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
					var f = c[d];
					3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(H(f)))
				}
				return b
			}
			d.version = "0.2.0", d.toString = function() {
				return "Snap v" + this.version
			}, d._ = {};
			var I = {
				win: a,
				doc: a.document
			};
			d._.glob = I;
			var J = "hasOwnProperty",
				K = String,
				L = parseFloat,
				M = parseInt,
				N = Math,
				O = N.max,
				P = N.min,
				Q = N.abs,
				R = (N.pow, N.PI),
				S = (N.round, ""),
				T = " ",
				U = Object.prototype.toString,
				V = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
				W = /^url\(#?([^)]+)\)$/,
				X = "	\n\f\r   ᠎             　\u2028\u2029",
				Y = new RegExp("[," + X + "]+"),
				Z = (new RegExp("[" + X + "]", "g"), new RegExp("[" + X + "]*,[" + X + "]*")),
				$ = {
					hs: 1,
					rg: 1
				}, _ = new RegExp("([a-z])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
				ab = new RegExp("([rstm])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
				bb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + X + "]*,?[" + X + "]*", "ig"),
				cb = 0,
				db = "S" + (+new Date).toString(36),
				eb = function() {
					return db + (cb++).toString(36)
				}, fb = "http://www.w3.org/1999/xlink",
				gb = "http://www.w3.org/2000/svg",
				hb = {}, ib = d.url = function(a) {
					return "url('#" + a + "')"
				};
			d._.$ = e, d._.id = eb, d.format = function() {
				var a = /\{([^\}]+)\}/g,
					b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
					c = function(a, c, d) {
						var e = d;
						return c.replace(b, function(a, b, c, d, f) {
							b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
						}), e = (null == e || e == d ? a : e) + ""
					};
				return function(b, d) {
					return K(b).replace(a, function(a, b) {
						return c(a, b, d)
					})
				}
			}();
			var jb = function() {
				function a() {
					this.parentNode.removeChild(this)
				}
				return function(b, c) {
					var d = I.doc.createElement("img"),
						e = I.doc.body;
					d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
						c.call(d), d.onload = d.onerror = null, e.removeChild(d)
					}, d.onerror = a, e.appendChild(d), d.src = b
				}
			}();
			d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function(a, b, c) {
				if (c = f(c, "finite") ? c : 10, f(a, "array")) {
					for (var d = a.length; d--;) if (Q(a[d] - b) <= c) return a[d]
				} else {
					a = +a;
					var e = b % a;
					if (c > e) return b - e;
					if (e > a - c) return b - e + a
				}
				return b
			},
			function(a) {
				function b(a) {
					return a[0] * a[0] + a[1] * a[1]
				}
				function c(a) {
					var c = N.sqrt(b(a));
					a[0] && (a[0] /= c), a[1] && (a[1] /= c)
				}
				a.add = function(a, b, c, d, e, f) {
					var g, h, i, j, k = [
						[],
						[],
						[]
					],
						l = [
							[this.a, this.c, this.e],
							[this.b, this.d, this.f],
							[0, 0, 1]
						],
						m = [
							[a, c, e],
							[b, d, f],
							[0, 0, 1]
						];
					for (a && a instanceof n && (m = [
						[a.a, a.c, a.e],
						[a.b, a.d, a.f],
						[0, 0, 1]
					]), g = 0; 3 > g; g++) for (h = 0; 3 > h; h++) {
						for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
						k[g][h] = j
					}
					return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2], this
				}, a.invert = function() {
					var a = this,
						b = a.a * a.d - a.b * a.c;
					return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
				}, a.clone = function() {
					return new n(this.a, this.b, this.c, this.d, this.e, this.f)
				}, a.translate = function(a, b) {
					return this.add(1, 0, 0, 1, a, b)
				}, a.scale = function(a, b, c, d) {
					return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
				}, a.rotate = function(a, b, c) {
					a = l(a), b = b || 0, c = c || 0;
					var d = +N.cos(a).toFixed(9),
						e = +N.sin(a).toFixed(9);
					return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c)
				}, a.x = function(a, b) {
					return a * this.a + b * this.c + this.e
				}, a.y = function(a, b) {
					return a * this.b + b * this.d + this.f
				}, a.get = function(a) {
					return +this[K.fromCharCode(97 + a)].toFixed(4)
				}, a.toString = function() {
					return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
				}, a.offset = function() {
					return [this.e.toFixed(4), this.f.toFixed(4)]
				}, a.split = function() {
					var a = {};
					a.dx = this.e, a.dy = this.f;
					var d = [
						[this.a, this.c],
						[this.b, this.d]
					];
					a.scalex = N.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = N.sqrt(b(d[1])), c(d[1]), a.shear /= a.scaley;
					var e = -d[0][1],
						f = d[1][1];
					return 0 > f ? (a.rotate = m(N.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = m(N.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
				}, a.toTransformString = function(a) {
					var b = a || this.split();
					return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : S) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : S) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : S)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
				}
			}(n.prototype), d.Matrix = n, d.getRGB = j(function(a) {
				if (!a || (a = K(a)).indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: nb
				};
				if ("none" == a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: nb
				};
				if (!($[J](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = kb(a)), !a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: nb
				};
				var b, c, e, g, h, i, j = a.match(V);
				return j ? (j[2] && (e = M(j[2].substring(5), 16), c = M(j[2].substring(3, 5), 16), b = M(j[2].substring(1, 3), 16)), j[3] && (e = M((h = j[3].charAt(3)) + h, 16), c = M((h = j[3].charAt(2)) + h, 16), b = M((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = L(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = L(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = P(N.round(b), 255), c = P(N.round(c), 255), e = P(N.round(e), 255), g = P(O(g, 0), 1), j = {
					r: b,
					g: c,
					b: e,
					toString: nb
				}, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: nb
				}
			}, d), d.hsb = j(function(a, b, c) {
				return d.hsb2rgb(a, b, c).hex
			}), d.hsl = j(function(a, b, c) {
				return d.hsl2rgb(a, b, c).hex
			}), d.rgb = j(function(a, b, c, d) {
				if (f(d, "finite")) {
					var e = N.round;
					return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
				}
				return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
			});
			var kb = function(a) {
				var b = I.doc.getElementsByTagName("head")[0],
					c = "rgb(255, 0, 0)";
				return kb = j(function(a) {
					if ("red" == a.toLowerCase()) return c;
					b.style.color = c, b.style.color = a;
					var d = I.doc.defaultView.getComputedStyle(b, S).getPropertyValue("color");
					return d == c ? null : d
				}), kb(a)
			}, lb = function() {
				return "hsb(" + [this.h, this.s, this.b] + ")"
			}, mb = function() {
				return "hsl(" + [this.h, this.s, this.l] + ")"
			}, nb = function() {
				return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
			}, ob = function(a, b, c) {
				if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
					var e = d.getRGB(a);
					a = e.r, b = e.g, c = e.b
				}
				return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
			}, pb = function(a, b, c, e) {
				a = N.round(255 * a), b = N.round(255 * b), c = N.round(255 * c);
				var g = {
					r: a,
					g: b,
					b: c,
					opacity: f(e, "finite") ? e : 1,
					hex: d.rgb(a, b, c),
					toString: nb
				};
				return f(e, "finite") && (g.opacity = e), g
			};
			d.color = function(a) {
				var b;
				return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
					hex: "none"
				}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = nb, a
			}, d.hsb2rgb = function(a, b, c, d) {
				f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
				var e, g, h, i, j;
				return a = a % 360 / 60, j = c * b, i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d)
			}, d.hsl2rgb = function(a, b, c, d) {
				f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
				var e, g, h, i, j;
				return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d)
			}, d.rgb2hsb = function(a, b, c) {
				c = ob(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g;
				return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
					h: d,
					s: e,
					b: f,
					toString: lb
				}
			}, d.rgb2hsl = function(a, b, c) {
				c = ob(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g, h, i;
				return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
					h: d,
					s: e,
					l: f,
					toString: mb
				}
			}, d.parsePathString = function(a) {
				if (!a) return null;
				var b = d.path(a);
				if (b.arr) return d.path.clone(b.arr);
				var c = {
					a: 7,
					c: 6,
					o: 2,
					h: 1,
					l: 2,
					m: 2,
					r: 4,
					q: 4,
					s: 4,
					t: 2,
					v: 1,
					u: 3,
					z: 0
				}, e = [];
				return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || K(a).replace(_, function(a, b, d) {
					var f = [],
						g = b.toLowerCase();
					if (d.replace(bb, function(a, b) {
						b && f.push(+b)
					}), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
					else for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
				}), e.toString = d.path.toString, b.arr = d.path.clone(e), e
			};
			var qb = d.parseTransformString = function(a) {
				if (!a) return null;
				var b = [];
				return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || K(a).replace(ab, function(a, c, d) {
					var e = [];
					c.toLowerCase(), d.replace(bb, function(a, b) {
						b && e.push(+b)
					}), b.push([c].concat(e))
				}), b.toString = d.path.toString, b
			};
			d._.svgTransform2string = o, d._.rgTransform = new RegExp("^[a-z][" + X + "]*-?\\.?\\d", "i"), d._.transform2matrix = p, d._unit2px = s;
			var rb = I.doc.contains || I.doc.compareDocumentPosition ? function(a, b) {
					var c = 9 == a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b) for (; b;) if (b = b.parentNode, b == a) return !0;
					return !1
				};
			d._.getSomeDefs = r, d.select = function(a) {
				return z(I.doc.querySelector(a))
			}, d.selectAll = function(a) {
				for (var b = I.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
				return c
			},
			function(a) {
				function g(a) {
					function b(a, b) {
						var c = e(a.node, b);
						c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function(c) {
							var d = {};
							d[b] = ib(c), e(a.node, d)
						})))
					}
					function c(a) {
						var b = e(a.node, "xlink:href");
						b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
							a.attr("xlink:href", "#" + b)
						})))
					}
					for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
						d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
						var l = e(d.node, "id");
						l && (e(d.node, {
							id: d.id
						}), h.push({
							old: l,
							id: d.id
						}))
					}
					for (j = 0, k = h.length; k > j; j++) {
						var m = i[h[j].old];
						if (m) for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
					}
				}
				function h(a, b, c) {
					return function(d) {
						var e = d.slice(a, b);
						return 1 == e.length && (e = e[0]), c ? c(e) : e
					}
				}
				function i(a) {
					return function() {
						var b = a ? "<" + this.type : "",
							c = this.node.attributes,
							d = this.node.childNodes;
						if (a) for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
						if (d.length) {
							for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());
							a && (b += "</" + this.type + ">")
						} else a && (b += "/>");
						return b
					}
				}
				a.attr = function(a, c) {
					var d = this;
					if (d.node, !a) return d;
					if (f(a, "string")) {
						if (!(arguments.length > 1)) return v(b("snap.util.getattr." + a, d));
						var e = {};
						e[a] = c, a = e
					}
					for (var g in a) a[J](g) && b("snap.util.attr." + g, d, a[g]);
					return d
				}, a.getBBox = function(a) {
					var b = this;
					if ("use" == b.type && (b = b.original), b.removed) return {};
					var c = b._;
					return a ? (c.bboxwt = d.path.get[b.type] ? d.path.getBBox(b.realPath = d.path.get[b.type](b)) : d._.box(b.node.getBBox()), d._.box(c.bboxwt)) : (b.realPath = (d.path.get[b.type] || d.path.get.deflt)(b), c.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), d._.box(c.bbox))
				};
				var j = function() {
					return this.string
				};
				a.transform = function(a) {
					var b = this._;
					if (null == a) {
						var c = new n(this.node.getCTM()),
							d = q(this),
							f = d.toTransformString(),
							g = K(d) == K(this.matrix) ? b.transform : f;
						return {
							string: g,
							globalMatrix: c,
							localMatrix: d,
							diffMatrix: c.clone().add(d.invert()),
							global: c.toTransformString(),
							local: f,
							toString: j
						}
					}
					return a instanceof n && (a = a.toTransformString()), q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
						gradientTransform: this.matrix
					}) : "pattern" == this.type ? e(this.node, {
						patternTransform: this.matrix
					}) : e(this.node, {
						transform: this.matrix
					})), this
				}, a.parent = function() {
					return z(this.node.parentNode)
				}, a.append = a.add = function(a) {
					if (a) {
						if ("set" == a.type) {
							var b = this;
							return a.forEach(function(a) {
								b.add(a)
							}), this
						}
						a = z(a), this.node.appendChild(a.node), a.paper = this.paper
					}
					return this
				}, a.appendTo = function(a) {
					return a && (a = z(a), a.append(this)), this
				}, a.prepend = function(a) {
					if (a) {
						a = z(a);
						var b = a.parent();
						this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), b && b.add()
					}
					return this
				}, a.prependTo = function(a) {
					return a = z(a), a.prepend(this), this
				}, a.before = function(a) {
					if ("set" == a.type) {
						var b = this;
						return a.forEach(function(a) {
							var c = a.parent();
							b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
						}), this.parent().add(), this
					}
					a = z(a);
					var c = a.parent();
					return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
				}, a.after = function(a) {
					a = z(a);
					var b = a.parent();
					return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
				}, a.insertBefore = function(a) {
					a = z(a);
					var b = this.parent();
					return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
				}, a.insertAfter = function(a) {
					a = z(a);
					var b = this.parent();
					return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
				}, a.remove = function() {
					var a = this.parent();
					return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
				}, a.select = function(a) {
					return z(this.node.querySelector(a))
				}, a.selectAll = function(a) {
					for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
					return c
				}, a.asPX = function(a, b) {
					return null == b && (b = this.attr(a)), +s(this, a, b)
				}, a.use = function() {
					var a, b = this.node.id;
					return b || (b = this.id, e(this.node, {
						id: b
					})), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), e(a.node, {
						"xlink:href": "#" + b
					}), a.original = this, a
				}, a.clone = function() {
					var a = z(this.node.cloneNode(!0));
					return e(a.node, "id") && e(a.node, {
						id: a.id
					}), g(a), a.insertAfter(this), a
				}, a.toDefs = function() {
					var a = r(this);
					return a.appendChild(this.node), this
				}, a.pattern = function(a, b, c, d) {
					var g = x("pattern", r(this));
					return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
						x: a,
						y: b,
						width: c,
						height: d,
						patternUnits: "userSpaceOnUse",
						id: g.id,
						viewBox: [a, b, c, d].join(" ")
					}), g.node.appendChild(this.node), g
				}, a.marker = function(a, b, c, d, g, h) {
					var i = x("marker", r(this));
					return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
						viewBox: [a, b, c, d].join(T),
						markerWidth: c,
						markerHeight: d,
						orient: "auto",
						refX: g || 0,
						refY: h || 0,
						id: i.id
					}), i.node.appendChild(this.node), i
				};
				var k = function(a, b, d, e) {
					"function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
				};
				d.animation = function(a, b, c, d) {
					return new k(a, b, c, d)
				}, a.inAnim = function() {
					var a = this,
						b = [];
					for (var c in a.anims) a.anims[J](c) && ! function(a) {
						b.push({
							anim: new k(a._attrs, a.dur, a.easing, a._callback),
							curStatus: a.status(),
							status: function(b) {
								return a.status(b)
							},
							stop: function() {
								a.stop()
							}
						})
					}(a.anims[c]);
					return b
				}, d.animate = function(a, d, e, f, g, h) {
					"function" != typeof g || g.length || (h = g, g = c.linear);
					var i = c.time(),
						j = c(a, d, i, i + f, c.time, e, g);
					return h && b.once("mina.finish." + j.id, h), j
				}, a.stop = function() {
					for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
					return this
				}, a.animate = function(a, d, e, g) {
					"function" != typeof e || e.length || (g = e, e = c.linear), a instanceof k && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
					var i, j, l, m, n = [],
						o = [],
						p = {}, q = this;
					for (var r in a) if (a[J](r)) {
						q.equal ? (m = q.equal(r, K(a[r])), i = m.from, j = m.to, l = m.f) : (i = +q.attr(r), j = +a[r]);
						var s = f(i, "array") ? i.length : 1;
						p[r] = h(n.length, n.length + s, l), n = n.concat(i), o = o.concat(j)
					}
					var t = c.time(),
						u = c(n, o, t, t + d, c.time, function(a) {
							var b = {};
							for (var c in p) p[J](c) && (b[c] = p[c](a));
							q.attr(b)
						}, e);
					return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function() {
						delete q.anims[u.id], g && g.call(q)
					}), b.once("mina.stop." + u.id, function() {
						delete q.anims[u.id]
					}), q
				};
				var l = {};
				a.data = function(a, c) {
					var e = l[this.id] = l[this.id] || {};
					if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
					if (1 == arguments.length) {
						if (d.is(a, "object")) {
							for (var f in a) a[J](f) && this.data(f, a[f]);
							return this
						}
						return b("snap.data.get." + this.id, this, e[a], a), e[a]
					}
					return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
				}, a.removeData = function(a) {
					return null == a ? l[this.id] = {} : l[this.id] && delete l[this.id][a], this
				}, a.outerSVG = a.toString = i(1), a.innerSVG = i()
			}(u.prototype), d.parse = function(a) {
				var b = I.doc.createDocumentFragment(),
					c = !0,
					d = I.doc.createElement("div");
				if (a = K(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0]) if (c) b = a;
				else for (; a.firstChild;) b.appendChild(a.firstChild);
				return d.innerHTML = S, new w(b)
			}, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, d.fragment = function() {
				for (var a = Array.prototype.slice.call(arguments, 0), b = I.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
					var f = a[c];
					f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
				}
				return new w(b)
			},
			function(a) {
				a.el = function(a, b) {
					return x(a, this.node).attr(b)
				}, a.rect = function(a, b, c, d, e, g) {
					var h;
					return null == g && (g = e), f(a, "object") && "x" in a ? h = a : null != a && (h = {
						x: a,
						y: b,
						width: c,
						height: d
					}, null != e && (h.rx = e, h.ry = g)), this.el("rect", h)
				}, a.circle = function(a, b, c) {
					var d;
					return f(a, "object") && "cx" in a ? d = a : null != a && (d = {
						cx: a,
						cy: b,
						r: c
					}), this.el("circle", d)
				}, a.image = function(a, b, c, d, g) {
					var h = x("image", this.node);
					if (f(a, "object") && "src" in a) h.attr(a);
					else if (null != a) {
						var i = {
							"xlink:href": a,
							preserveAspectRatio: "none"
						};
						null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, i.height = g) : jb(a, function() {
							e(h.node, {
								width: this.offsetWidth,
								height: this.offsetHeight
							})
						}), e(h.node, i)
					}
					return h
				}, a.ellipse = function(a, b, c, d) {
					var e = x("ellipse", this.node);
					return f(a, "object") && "cx" in a ? e.attr(a) : null != a && e.attr({
						cx: a,
						cy: b,
						rx: c,
						ry: d
					}), e
				}, a.path = function(a) {
					var b = x("path", this.node);
					return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({
						d: a
					}), b
				}, a.group = a.g = function(b) {
					var c = x("g", this.node);
					c.add = t;
					for (var d in a) a[J](d) && (c[d] = a[d]);
					return 1 == arguments.length && b && !b.type ? c.attr(b) : arguments.length && c.add(Array.prototype.slice.call(arguments, 0)), c
				}, a.text = function(a, b, c) {
					var d = x("text", this.node);
					return f(a, "object") ? d.attr(a) : null != a && d.attr({
						x: a,
						y: b,
						text: c || ""
					}), d
				}, a.line = function(a, b, c, d) {
					var e = x("line", this.node);
					return f(a, "object") ? e.attr(a) : null != a && e.attr({
						x1: a,
						x2: c,
						y1: b,
						y2: d
					}), e
				}, a.polyline = function(a) {
					arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
					var b = x("polyline", this.node);
					return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
						points: a
					}), b
				}, a.polygon = function(a) {
					arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
					var b = x("polygon", this.node);
					return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
						points: a
					}), b
				},
				function() {
					a.gradient = function(a) {
						return D(this.defs, a)
					}, a.gradientLinear = function(a, b, c, d) {
						return E(this.defs, a, b, c, d)
					}, a.gradientRadial = function(a, b, c, d, e) {
						return F(this.defs, a, b, c, d, e)
					}, a.toString = function() {
						var a, b = I.doc.createDocumentFragment(),
							c = I.doc.createElement("div"),
							d = this.node.cloneNode(!0);
						return b.appendChild(c), c.appendChild(d), e(d, {
							xmlns: gb
						}), a = c.innerHTML, b.removeChild(b.firstChild), a
					}, a.clear = function() {
						for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), b = a
					}
				}()
			}(y.prototype), d.ajax = function(a, c, d, e) {
				var g = new XMLHttpRequest,
					h = eb();
				if (g) {
					if (f(c, "function")) e = d, d = c, c = null;
					else if (f(c, "object")) {
						var i = [];
						for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
						c = i.join("&")
					}
					return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
						4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
					}, 4 == g.readyState ? g : (g.send(c), g)
				}
			}, d.load = function(a, b, c) {
				d.ajax(a, function(a) {
					var e = d.parse(a.responseText);
					c ? b.call(c, e) : b(e)
				})
			}, b.on("snap.util.attr.mask", function(a) {
				if (a instanceof u || a instanceof w) {
					if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, r(this).appendChild(a), a = z(a)), "mask" == a.type) var c = a;
					else c = x("mask", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {
						id: c.id
					});
					e(this.node, {
						mask: ib(c.id)
					})
				}
			}),
			function(a) {
				b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
			}(function(a) {
				if (a instanceof u || a instanceof w) {
					if (b.stop(), "clipPath" == a.type) var c = a;
					else c = x("clipPath", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {
						id: c.id
					});
					e(this.node, {
						"clip-path": ib(c.id)
					})
				}
			}), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));
			var sb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
			b.on("snap.util.grad.parse", function(a) {
				a = K(a);
				var b = a.match(sb);
				if (!b) return null;
				var c = b[1],
					d = b[2],
					e = b[3];
				return d = d.split(/\s*,\s*/).map(function(a) {
					return +a == a ? +a : a
				}), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
					a = a.split(":");
					var b = {
						color: a[0]
					};
					return a[1] && (b.offset = a[1]), b
				}), {
					type: c,
					params: d,
					stops: e
				}
			}), b.on("snap.util.attr.d", function(a) {
				b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = K(a), a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, {
					d: a
				})
			})(-1), b.on("snap.util.attr.#text", function(a) {
				b.stop(), a = K(a);
				for (var c = I.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
				this.node.appendChild(c)
			})(-1), b.on("snap.util.attr.path", function(a) {
				b.stop(), this.attr({
					d: a
				})
			})(-1), b.on("snap.util.attr.viewBox", function(a) {
				var c;
				c = f(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : f(a, "array") ? a.join(" ") : a, e(this.node, {
					viewBox: c
				}), b.stop()
			})(-1), b.on("snap.util.attr.transform", function(a) {
				this.transform(a), b.stop()
			})(-1), b.on("snap.util.attr.r", function(a) {
				"rect" == this.type && (b.stop(), e(this.node, {
					rx: a,
					ry: a
				}))
			})(-1), b.on("snap.util.attr.textpath", function(a) {
				if (b.stop(), "text" == this.type) {
					var c, d, g;
					if (!a && this.textPath) {
						for (d = this.textPath; d.node.firstChild;) this.node.appendChild(d.node.firstChild);
						return d.remove(), delete this.textPath, void 0
					}
					if (f(a, "string")) {
						var h = r(this),
							i = z(h.parentNode).path(a);
						h.appendChild(i.node), c = i.id, i.attr({
							id: c
						})
					} else a = z(a), a instanceof u && (c = a.attr("id"), c || (c = a.id, a.attr({
						id: c
					})));
					if (c) if (d = this.textPath, g = this.node, d) d.attr({
						"xlink:href": "#" + c
					});
					else {
						for (d = e("textPath", {
							"xlink:href": "#" + c
						}); g.firstChild;) d.appendChild(g.firstChild);
						g.appendChild(d), this.textPath = z(d)
					}
				}
			})(-1), b.on("snap.util.attr.text", function(a) {
				if ("text" == this.type) {
					for (var c = this.node, d = function(a) {
						var b = e("tspan");
						if (f(a, "array")) for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
						else b.appendChild(I.doc.createTextNode(a));
						return b.normalize && b.normalize(), b
					}; c.firstChild;) c.removeChild(c.firstChild);
					for (var g = d(a); g.firstChild;) c.appendChild(g.firstChild)
				}
				b.stop()
			})(-1);
			var tb = {
				"alignment-baseline": 0,
				"baseline-shift": 0,
				clip: 0,
				"clip-path": 0,
				"clip-rule": 0,
				color: 0,
				"color-interpolation": 0,
				"color-interpolation-filters": 0,
				"color-profile": 0,
				"color-rendering": 0,
				cursor: 0,
				direction: 0,
				display: 0,
				"dominant-baseline": 0,
				"enable-background": 0,
				fill: 0,
				"fill-opacity": 0,
				"fill-rule": 0,
				filter: 0,
				"flood-color": 0,
				"flood-opacity": 0,
				font: 0,
				"font-family": 0,
				"font-size": 0,
				"font-size-adjust": 0,
				"font-stretch": 0,
				"font-style": 0,
				"font-variant": 0,
				"font-weight": 0,
				"glyph-orientation-horizontal": 0,
				"glyph-orientation-vertical": 0,
				"image-rendering": 0,
				kerning: 0,
				"letter-spacing": 0,
				"lighting-color": 0,
				marker: 0,
				"marker-end": 0,
				"marker-mid": 0,
				"marker-start": 0,
				mask: 0,
				opacity: 0,
				overflow: 0,
				"pointer-events": 0,
				"shape-rendering": 0,
				"stop-color": 0,
				"stop-opacity": 0,
				stroke: 0,
				"stroke-dasharray": 0,
				"stroke-dashoffset": 0,
				"stroke-linecap": 0,
				"stroke-linejoin": 0,
				"stroke-miterlimit": 0,
				"stroke-opacity": 0,
				"stroke-width": 0,
				"text-anchor": 0,
				"text-decoration": 0,
				"text-rendering": 0,
				"unicode-bidi": 0,
				visibility: 0,
				"word-spacing": 0,
				"writing-mode": 0
			};
			b.on("snap.util.attr", function(a) {
				var c = b.nt(),
					d = {};
				c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
				var f = c.replace(/-(\w)/gi, function(a, b) {
					return b.toUpperCase()
				}),
					g = c.replace(/[A-Z]/g, function(a) {
						return "-" + a.toLowerCase()
					});
				tb[J](g) ? this.node.style[f] = null == a ? S : a : e(this.node, d)
			}), b.on("snap.util.getattr.transform", function() {
				return b.stop(), this.transform()
			})(-1), b.on("snap.util.getattr.textpath", function() {
				return b.stop(), this.textPath
			})(-1),
			function() {
				function a(a) {
					return function() {
						b.stop();
						var c = I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a);
						return "none" == c ? c : d(I.doc.getElementById(c.match(W)[1]))
					}
				}
				function c(a) {
					return function(c) {
						b.stop();
						var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
						if ("" == c || !c) return this.node.style[d] = "none", void 0;
						if ("marker" == c.type) {
							var f = c.node.id;
							return f || e(c.node, {
								id: c.id
							}), this.node.style[d] = ib(f), void 0
						}
					}
				}
				b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1)
			}(), b.on("snap.util.getattr.r", function() {
				return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), e(this.node, "rx")) : void 0
			})(-1), b.on("snap.util.getattr.text", function() {
				if ("text" == this.type || "tspan" == this.type) {
					b.stop();
					var a = H(this.node);
					return 1 == a.length ? a[0] : a
				}
			})(-1), b.on("snap.util.getattr.#text", function() {
				return this.node.textContent
			})(-1), b.on("snap.util.getattr.viewBox", function() {
				b.stop();
				var a = e(this.node, "viewBox").split(Y);
				return d._.box(+a[0], +a[1], +a[2], +a[3])
			})(-1), b.on("snap.util.getattr.points", function() {
				var a = e(this.node, "points");
				return b.stop(), a.split(Y)
			}), b.on("snap.util.getattr.path", function() {
				var a = e(this.node, "d");
				return b.stop(), a
			}), b.on("snap.util.getattr", function() {
				var a = b.nt();
				a = a.substring(a.lastIndexOf(".") + 1);
				var c = a.replace(/[A-Z]/g, function(a) {
					return "-" + a.toLowerCase()
				});
				return tb[J](c) ? I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
			});
			var ub = function(a) {
				var b = a.getBoundingClientRect(),
					c = a.ownerDocument,
					d = c.body,
					e = c.documentElement,
					f = e.clientTop || d.clientTop || 0,
					h = e.clientLeft || d.clientLeft || 0,
					i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
					j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
				return {
					y: i,
					x: j
				}
			};
			return d.getElementByPoint = function(a, b) {
				var c = this,
					d = (c.canvas, I.doc.elementFromPoint(a, b));
				if (I.win.opera && "svg" == d.tagName) {
					var e = ub(d),
						f = d.createSVGRect();
					f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
					var g = d.getIntersectionList(f, null);
					g.length && (d = g[g.length - 1])
				}
				return d ? z(d) : null
			}, d.plugin = function(a) {
				a(d, u, y, I)
			}, I.win.Snap = d, d
		}();
	return d.plugin(function(a, b) {
		function c(a) {
			var b = c.ps = c.ps || {};
			return b[a] ? b[a].sleep = 100 : b[a] = {
				sleep: 100
			}, setTimeout(function() {
				for (var c in b) b[L](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
			}), b[a]
		}
		function d(a, b, c, d) {
			return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
				x: a,
				y: b,
				width: c,
				w: c,
				height: d,
				h: d,
				x2: a + c,
				y2: b + d,
				cx: a + c / 2,
				cy: b + d / 2,
				r1: O.min(c, d) / 2,
				r2: O.max(c, d) / 2,
				r0: O.sqrt(c * c + d * d) / 2,
				path: w(a, b, c, d),
				vb: [a, b, c, d].join(" ")
			}
		}
		function e() {
			return this.join(",").replace(M, "$1")
		}
		function f(a) {
			var b = K(a);
			return b.toString = e, b
		}
		function g(a, b, c, d, e, f, g, h, j) {
			return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
		}
		function h(c, d) {
			function e(a) {
				return +(+a).toFixed(3)
			}
			return a._.cacher(function(a, f, h) {
				a instanceof b && (a = a.attr("d")), a = F(a);
				for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
					if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
					else {
						if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
							if (d && !p.start) {
								if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
								p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
								continue
							}
							if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
						}
						q += m, j = +l[5], k = +l[6]
					}
					o += l.shift() + l
				}
				return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
			}, null, a._.clone)
		}
		function i(a, b, c, d, e, f, g, h, i) {
			var j = 1 - i,
				k = S(j, 3),
				l = S(j, 2),
				m = i * i,
				n = m * i,
				o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
				p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
				q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
				r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
				s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
				t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
				u = j * a + i * c,
				v = j * b + i * d,
				w = j * e + i * g,
				x = j * f + i * h,
				y = 90 - 180 * O.atan2(q - s, r - t) / P;
			return {
				x: o,
				y: p,
				m: {
					x: q,
					y: r
				},
				n: {
					x: s,
					y: t
				},
				start: {
					x: u,
					y: v
				},
				end: {
					x: w,
					y: x
				},
				alpha: y
			}
		}
		function j(b, c, e, f, g, h, i, j) {
			a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
			var k = E.apply(null, b);
			return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
		}
		function k(a, b, c) {
			return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
		}
		function l(a, b) {
			return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
		}
		function m(a, b, c, d, e) {
			var f = -3 * b + 9 * c - 9 * d + 3 * e,
				g = a * f + 6 * b - 12 * c + 6 * d;
			return a * g - 3 * b + 3 * c
		}
		function n(a, b, c, d, e, f, g, h, i) {
			null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
			for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
				var q = j * l[p] + j,
					r = m(q, a, c, e, g),
					s = m(q, b, d, f, h),
					t = r * r + s * s;
				o += n[p] * O.sqrt(t)
			}
			return j * o
		}
		function o(a, b, c, d, e, f, g, h, i) {
			if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
				var j, k = 1,
					l = k / 2,
					m = k - l,
					o = .01;
				for (j = n(a, b, c, d, e, f, g, h, m); T(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
				return m
			}
		}
		function p(a, b, c, d, e, f, g, h) {
			if (!(R(a, c) < Q(e, g) || Q(a, c) > R(e, g) || R(b, d) < Q(f, h) || Q(b, d) > R(f, h))) {
				var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
					j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
					k = (a - c) * (f - h) - (b - d) * (e - g);
				if (k) {
					var l = i / k,
						m = j / k,
						n = +l.toFixed(2),
						o = +m.toFixed(2);
					if (!(n < +Q(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +Q(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +Q(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +Q(f, h).toFixed(2) || o > +R(f, h).toFixed(2))) return {
						x: l,
						y: m
					}
				}
			}
		}
		function q(a, b, c) {
			var d = j(a),
				e = j(b);
			if (!l(d, e)) return c ? 0 : [];
			for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~ (f / 5), k = ~~ (g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
				var t = i.apply(0, a.concat(s / h));
				m.push({
					x: t.x,
					y: t.y,
					t: s / h
				})
			}
			for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
				x: t.x,
				y: t.y,
				t: s / k
			});
			for (s = 0; h > s; s++) for (var u = 0; k > u; u++) {
				var v = m[s],
					w = m[s + 1],
					x = o[u],
					y = o[u + 1],
					z = T(w.x - v.x) < .001 ? "y" : "x",
					A = T(y.x - x.x) < .001 ? "y" : "x",
					B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
				if (B) {
					if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
					q[B.x.toFixed(4)] = B.y.toFixed(4);
					var C = v.t + T((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
						D = x.t + T((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
					C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
						x: B.x,
						y: B.y,
						t1: C,
						t2: D
					}))
				}
			}
			return r
		}
		function r(a, b) {
			return t(a, b)
		}
		function s(a, b) {
			return t(a, b, 1)
		}
		function t(a, b, c) {
			a = F(a), b = F(b);
			for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
				var r = a[o];
				if ("M" == r[0]) d = h = r[1], e = i = r[2];
				else {
					"C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
					for (var s = 0, t = b.length; t > s; s++) {
						var u = b[s];
						if ("M" == u[0]) f = j = u[1], g = k = u[2];
						else {
							"C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
							var v = q(l, m, c);
							if (c) n += v;
							else {
								for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
								n = n.concat(v)
							}
						}
					}
				}
			}
			return n
		}
		function u(a, b, c) {
			var d = v(a);
			return k(d, b, c) && 1 == t(a, [
				["M", b, c],
				["H", d.x2 + 10]
			], 1) % 2
		}
		function v(a) {
			var b = c(a);
			if (b.bbox) return K(b.bbox);
			if (!a) return d();
			a = F(a);
			for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++) if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
			else {
				var l = E(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
				h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
			}
			var m = Q.apply(0, h),
				n = Q.apply(0, i),
				o = R.apply(0, h),
				p = R.apply(0, i),
				q = d(m, n, o - m, p - n);
			return b.bbox = K(q), q
		}
		function w(a, b, c, d, f) {
			if (f) return [["M", a + f, b], ["l", c - 2 * f, 0], ["a", f, f, 0, 0, 1, f, f], ["l", 0, d - 2 * f], ["a", f, f, 0, 0, 1, -f, f], ["l", 2 * f - c, 0], ["a", f, f, 0, 0, 1, -f, -f], ["l", 0, 2 * f - d], ["a", f, f, 0, 0, 1, f, -f], ["z"]];
			var g = [
				["M", a, b],
				["l", c, 0],
				["l", 0, d],
				["l", -c, 0],
				["z"]
			];
			return g.toString = e, g
		}
		function x(a, b, c, d, f) {
			if (null == f && null == d && (d = c), null != f) var g = Math.PI / 180,
				h = a + c * Math.cos(-d * g),
				i = a + c * Math.cos(-f * g),
				j = b + c * Math.sin(-d * g),
				k = b + c * Math.sin(-f * g),
				l = [
					["M", h, j],
					["A", c, c, 0, +(f - d > 180), 0, i, k]
				];
			else l = [
				["M", a, b],
				["m", 0, -d],
				["a", c, d, 0, 1, 1, 0, 2 * d],
				["a", c, d, 0, 1, 1, 0, -2 * d],
				["z"]
			];
			return l.toString = e, l
		}
		function y(b) {
			var d = c(b),
				g = String.prototype.toLowerCase;
			if (d.rel) return f(d.rel);
			a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
			var h = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
			for (var n = m, o = b.length; o > n; n++) {
				var p = h[n] = [],
					q = b[n];
				if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
					case "a":
						p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
						break;
					case "v":
						p[1] = +(q[1] - j).toFixed(3);
						break;
					case "m":
						k = q[1], l = q[2];
					default:
						for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
				} else {
					p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
					for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
				}
				var v = h[n].length;
				switch (h[n][0]) {
					case "z":
						i = k, j = l;
						break;
					case "h":
						i += +h[n][v - 1];
						break;
					case "v":
						j += +h[n][v - 1];
						break;
					default:
						i += +h[n][v - 2], j += +h[n][v - 1]
				}
			}
			return h.toString = e, d.rel = f(h), h
		}
		function z(b) {
			var d = c(b);
			if (d.abs) return f(d.abs);
			if (J(b, "array") && J(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];
			var g, h = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
			for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
				if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
					case "A":
						n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +(o[6] + i), n[7] = +(o[7] + j);
						break;
					case "V":
						n[1] = +o[1] + j;
						break;
					case "H":
						n[1] = +o[1] + i;
						break;
					case "R":
						for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
						h.pop(), h = h.concat(H(s, p));
						break;
					case "O":
						h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
						break;
					case "U":
						h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
						break;
					case "M":
						k = +o[1] + i, l = +o[2] + j;
					default:
						for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
				} else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(H(s, p)), n = ["R"].concat(o.slice(-2));
				else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
				else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
				else for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
				if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
					case "Z":
						i = k, j = l;
						break;
					case "H":
						i = n[1];
						break;
					case "V":
						j = n[1];
						break;
					case "M":
						k = n[n.length - 2], l = n[n.length - 1];
					default:
						i = n[n.length - 2], j = n[n.length - 1]
				}
			}
			return h.toString = e, d.abs = f(h), h
		}
		function A(a, b, c, d) {
			return [a, b, c, d, c, d]
		}
		function B(a, b, c, d, e, f) {
			var g = 1 / 3,
				h = 2 / 3;
			return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
		}
		function C(b, c, d, e, f, g, h, i, j, k) {
			var l, m = 120 * P / 180,
				n = P / 180 * (+f || 0),
				o = [],
				p = a._.cacher(function(a, b, c) {
					var d = a * O.cos(c) - b * O.sin(c),
						e = a * O.sin(c) + b * O.cos(c);
					return {
						x: d,
						y: e
					}
				});
			if (k) y = k[0], z = k[1], w = k[2], x = k[3];
			else {
				l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
				var q = (O.cos(P / 180 * f), O.sin(P / 180 * f), (b - i) / 2),
					r = (c - j) / 2,
					s = q * q / (d * d) + r * r / (e * e);
				s > 1 && (s = O.sqrt(s), d = s * d, e = s * e);
				var t = d * d,
					u = e * e,
					v = (g == h ? -1 : 1) * O.sqrt(T((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
					w = v * d * r / e + (b + i) / 2,
					x = v * -e * q / d + (c + j) / 2,
					y = O.asin(((c - x) / e).toFixed(9)),
					z = O.asin(((j - x) / e).toFixed(9));
				y = w > b ? P - y : y, z = w > i ? P - z : z, 0 > y && (y = 2 * P + y), 0 > z && (z = 2 * P + z), h && y > z && (y -= 2 * P), !h && z > y && (z -= 2 * P)
			}
			var A = z - y;
			if (T(A) > m) {
				var B = z,
					D = i,
					E = j;
				z = y + m * (h && z > y ? 1 : -1), i = w + d * O.cos(z), j = x + e * O.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
			}
			A = z - y;
			var F = O.cos(y),
				G = O.sin(y),
				H = O.cos(z),
				I = O.sin(z),
				J = O.tan(A / 4),
				K = 4 / 3 * d * J,
				L = 4 / 3 * e * J,
				M = [b, c],
				N = [b + K * G, c - L * F],
				Q = [i + K * I, j - L * H],
				R = [i, j];
			if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, Q, R].concat(o);
			o = [N, Q, R].concat(o).join().split(",");
			for (var S = [], U = 0, V = o.length; V > U; U++) S[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
			return S
		}
		function D(a, b, c, d, e, f, g, h, i) {
			var j = 1 - i;
			return {
				x: S(j, 3) * a + 3 * S(j, 2) * i * c + 3 * j * i * i * e + S(i, 3) * g,
				y: S(j, 3) * b + 3 * S(j, 2) * i * d + 3 * j * i * i * f + S(i, 3) * h
			}
		}
		function E(a, b, c, d, e, f, g, h) {
			var i, j = e - 2 * c + a - (g - 2 * e + c),
				k = 2 * (c - a) - 2 * (e - c),
				l = a - c,
				m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j,
				n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j,
				o = [b, h],
				p = [a, g];
			return T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
				min: {
					x: Q.apply(0, p),
					y: Q.apply(0, o)
				},
				max: {
					x: R.apply(0, p),
					y: R.apply(0, o)
				}
			}
		}
		function F(a, b) {
			var d = !b && c(a);
			if (!b && d.curve) return f(d.curve);
			for (var e = z(a), g = b && z(b), h = {
				x: 0,
				y: 0,
				bx: 0,
				by: 0,
				X: 0,
				Y: 0,
				qx: null,
				qy: null
			}, i = {
				x: 0,
				y: 0,
				bx: 0,
				by: 0,
				X: 0,
				Y: 0,
				qx: null,
				qy: null
			}, j = (function(a, b) {
				var c, d;
				if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
				switch (!(a[0] in {
					T: 1,
					Q: 1
				}) && (b.qx = b.qy = null), a[0]) {
					case "M":
						b.X = a[1], b.Y = a[2];
						break;
					case "A":
						a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
						break;
					case "S":
						c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d].concat(a.slice(1));
						break;
					case "T":
						b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
						break;
					case "Q":
						b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
						break;
					case "L":
						a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
						break;
					case "H":
						a = ["C"].concat(A(b.x, b.y, a[1], b.y));
						break;
					case "V":
						a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
						break;
					case "Z":
						a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
				}
				return a
			}), k = function(a, b) {
				if (a[b].length > 7) {
					a[b].shift();
					for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
					a.splice(b, 1), n = R(e.length, g && g.length || 0)
				}
			}, l = function(a, b, c, d, f) {
				a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], n = R(e.length, g && g.length || 0))
			}, m = 0, n = R(e.length, g && g.length || 0); n > m; m++) {
				e[m] = j(e[m], h), k(e, m), g && (g[m] = j(g[m], i)), g && k(g, m), l(e, g, h, i, m), l(g, e, i, h, m);
				var o = e[m],
					p = g && g[m],
					q = o.length,
					r = g && p.length;
				h.x = o[q - 2], h.y = o[q - 1], h.bx = N(o[q - 4]) || h.x, h.by = N(o[q - 3]) || h.y, i.bx = g && (N(p[r - 4]) || i.x), i.by = g && (N(p[r - 3]) || i.y), i.x = g && p[r - 2], i.y = g && p[r - 1]
			}
			return g || (d.curve = f(e)), g ? [e, g] : e
		}
		function G(a, b) {
			if (!b) return a;
			var c, d, e, f, g, h, i;
			for (a = F(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
			return a
		}
		function H(a, b) {
			for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
				var f = [{
					x: +a[d - 2],
					y: +a[d - 1]
				}, {
					x: +a[d],
					y: +a[d + 1]
				}, {
					x: +a[d + 2],
					y: +a[d + 3]
				}, {
					x: +a[d + 4],
					y: +a[d + 5]
				}];
				b ? d ? e - 4 == d ? f[3] = {
					x: +a[0],
					y: +a[1]
				} : e - 2 == d && (f[2] = {
					x: +a[0],
					y: +a[1]
				}, f[3] = {
					x: +a[2],
					y: +a[3]
				}) : f[0] = {
					x: +a[e - 2],
					y: +a[e - 1]
				} : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
					x: +a[d],
					y: +a[d + 1]
				}), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
			}
			return c
		}
		var I = b.prototype,
			J = a.is,
			K = a._.clone,
			L = "hasOwnProperty",
			M = /,?([a-z]),?/gi,
			N = parseFloat,
			O = Math,
			P = O.PI,
			Q = O.min,
			R = O.max,
			S = O.pow,
			T = O.abs,
			U = h(1),
			V = h(),
			W = h(0, 1),
			X = a._unit2px,
			Y = {
				path: function(a) {
					return a.attr("path")
				},
				circle: function(a) {
					var b = X(a);
					return x(b.cx, b.cy, b.r)
				},
				ellipse: function(a) {
					var b = X(a);
					return x(b.cx, b.cy, b.rx, b.ry)
				},
				rect: function(a) {
					var b = X(a);
					return w(b.x, b.y, b.width, b.height, b.rx, b.ry)
				},
				image: function(a) {
					var b = X(a);
					return w(b.x, b.y, b.width, b.height)
				},
				text: function(a) {
					var b = a.node.getBBox();
					return w(b.x, b.y, b.width, b.height)
				},
				g: function(a) {
					var b = a.node.getBBox();
					return w(b.x, b.y, b.width, b.height)
				},
				symbol: function(a) {
					var b = a.getBBox();
					return w(b.x, b.y, b.width, b.height)
				},
				line: function(a) {
					return "M" + [a.attr("x1"), a.attr("y1"), a.attr("x2"), a.attr("y2")]
				},
				polyline: function(a) {
					return "M" + a.attr("points")
				},
				polygon: function(a) {
					return "M" + a.attr("points") + "z"
				},
				svg: function(a) {
					var b = a.node.getBBox();
					return w(b.x, b.y, b.width, b.height)
				},
				deflt: function(a) {
					var b = a.node.getBBox();
					return w(b.x, b.y, b.width, b.height)
				}
			};
		a.path = c, a.path.getTotalLength = U, a.path.getPointAtLength = V, a.path.getSubpath = function(a, b, c) {
			if (this.getTotalLength(a) - c < 1e-6) return W(a, b).end;
			var d = W(a, c, 1);
			return b ? W(d, b).end : d
		}, I.getTotalLength = function() {
			return this.node.getTotalLength ? this.node.getTotalLength() : void 0
		}, I.getPointAtLength = function(a) {
			return V(this.attr("d"), a)
		}, I.getSubpath = function(b, c) {
			return a.path.getSubpath(this.attr("d"), b, c)
		}, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = Y, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = F, a.path.map = G, a.path.toString = e, a.path.clone = f
	}), d.plugin(function(a) {
		var b = Math.max,
			c = Math.min,
			d = function(a) {
				if (this.items = [], this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
			}, e = d.prototype;
		e.push = function() {
			for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
			return this
		}, e.pop = function() {
			return this.length && delete this[this.length--], this.items.pop()
		}, e.forEach = function(a, b) {
			for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
			return this
		}, e.remove = function() {
			for (; this.length;) this.pop().remove();
			return this
		}, e.attr = function(a) {
			for (var b = 0, c = this.items.length; c > b; b++) this.items[b].attr(a);
			return this
		}, e.clear = function() {
			for (; this.length;) this.pop()
		}, e.splice = function(a, e) {
			a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));
			var f, g = [],
				h = [],
				i = [];
			for (f = 2; f < arguments.length; f++) i.push(arguments[f]);
			for (f = 0; e > f; f++) h.push(this[a + f]);
			for (; f < this.length - a; f++) g.push(this[a + f]);
			var j = i.length;
			for (f = 0; f < j + g.length; f++) this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];
			for (f = this.items.length = this.length -= e - j; this[f];) delete this[f++];
			return new d(h)
		}, e.exclude = function(a) {
			for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), !0;
			return !1
		}, e.insertAfter = function(a) {
			for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
			return this
		}, e.getBBox = function() {
			for (var a = [], d = [], e = [], f = [], g = this.items.length; g--;) if (!this.items[g].removed) {
				var h = this.items[g].getBBox();
				a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height)
			}
			return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), {
				x: a,
				y: d,
				x2: e,
				y2: f,
				width: e - a,
				height: f - d,
				cx: a + (e - a) / 2,
				cy: d + (f - d) / 2
			}
		}, e.clone = function(a) {
			a = new d;
			for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
			return a
		}, e.toString = function() {
			return "Snap‘s set"
		}, e.type = "set", a.set = function() {
			var a = new d;
			return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
		}
	}), d.plugin(function(a, b) {
		function c(a) {
			var b = a[0];
			switch (b.toLowerCase()) {
				case "t":
					return [b, 0, 0];
				case "m":
					return [b, 1, 0, 0, 1, 0, 0];
				case "r":
					return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
				case "s":
					return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
			}
		}
		function d(b, d, e) {
			d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];
			for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
				if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
					b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [
						["m", b.a, b.b, b.c, b.d, b.e, b.f]
					], o = [
						["m", d.a, d.b, d.c, d.d, d.e, d.f]
					];
					break
				}
				for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++) f in j && (n[p][f] = j[f]), f in k && (o[p][f] = k[f])
			}
			return {
				from: i(n),
				to: i(o),
				f: h(n)
			}
		}
		function e(a) {
			return a
		}
		function f(a) {
			return function(b) {
				return +b.toFixed(3) + a
			}
		}
		function g(b) {
			return a.rgb(b[0], b[1], b[2])
		}
		function h(a) {
			var b, c, d, e, f, g, h = 0,
				i = [];
			for (b = 0, c = a.length; c > b; b++) {
				for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h+++"]";
				f += g + "]", i[b] = f
			}
			return Function("val", "return Snap.path.toString.call([" + i + "])")
		}
		function i(a) {
			for (var b = [], c = 0, d = a.length; d > c; c++) for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
			return b
		}
		var j = {}, k = /[a-z]+$/i,
			l = String;
		j.stroke = j.fill = "colour", b.prototype.equal = function(b, c) {
			var m, n, o = l(this.attr(b) || ""),
				p = this;
			if (o == +o && c == +c) return {
				from: +o,
				to: +c,
				f: e
			};
			if ("colour" == j[b]) return m = a.color(o), n = a.color(c), {
				from: [m.r, m.g, m.b, m.opacity],
				to: [n.r, n.g, n.b, n.opacity],
				f: g
			};
			if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), d(o, c, function() {
				return p.getBBox(1)
			});
			if ("d" == b || "path" == b) return m = a.path.toCubic(o, c), {
				from: i(m[0]),
				to: i(m[1]),
				f: h(m[0])
			};
			if ("points" == b) return m = l(o).split(","), n = l(c).split(","), {
				from: m,
				to: n,
				f: function(a) {
					return a
				}
			};
			var q = o.match(k),
				r = l(c).match(k);
			return q && q == r ? {
				from: parseFloat(o),
				to: parseFloat(c),
				f: f(q)
			} : {
				from: this.asPX(b),
				to: this.asPX(b, c),
				f: e
			}
		}
	}), d.plugin(function(a, c, d, e) {
		for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
			mousedown: "touchstart",
			mousemove: "touchmove",
			mouseup: "touchend"
		}, k = function(a) {
			var b = "y" == a ? "scrollTop" : "scrollLeft";
			return e.doc.documentElement[b] || e.doc.body[b]
		}, l = function() {
			this.returnValue = !1
		}, m = function() {
			return this.originalEvent.preventDefault()
		}, n = function() {
			this.cancelBubble = !0
		}, o = function() {
			return this.originalEvent.stopPropagation()
		}, p = function() {
			return e.doc.addEventListener ? function(a, b, c, d) {
				var e = h && j[b] ? j[b] : b,
					f = function(e) {
						var f = k("y"),
							i = k("x");
						if (h && j[g](b)) for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++) if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
							var p = e;
							e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
							break
						}
						var q = e.clientX + i,
							r = e.clientY + f;
						return c.call(d, e, q, r)
					};
				return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
				function() {
					return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
				}
			} : e.doc.attachEvent ? function(a, b, c, d) {
				var f = function(a) {
					a = a || e.win.event;
					var b = k("y"),
						f = k("x"),
						g = a.clientX + f,
						h = a.clientY + b;
					return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, g, h)
				};
				a.attachEvent("on" + b, f);
				var g = function() {
					return a.detachEvent("on" + b, f), !0
				};
				return g
			} : void 0
		}(), q = [], r = function(c) {
			for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--;) {
				if (d = q[j], h) {
					for (var l, m = c.touches && c.touches.length; m--;) if (l = c.touches[m], l.identifier == d.el._drag.id || d.el.node.contains(l.target)) {
						e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault();
						break
					}
				} else c.preventDefault();
				var n = d.el.node;
				a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c)
			}
		}, s = function(c) {
			a.unmousemove(r).unmouseup(s);
			for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
			q = []
		}, t = i.length; t--;)! function(b) {
			a[b] = f[b] = function(c, d) {
				return a.is(c, "function") && (this.events = this.events || [], this.events.push({
					name: b,
					f: c,
					unbind: p(this.shape || this.node || e.doc, b, c, d || this)
				})), this
			}, a["un" + b] = f["un" + b] = function(a) {
				for (var c = this.events || [], d = c.length; d--;) if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
				return this
			}
		}(i[t]);
		f.hover = function(a, b, c, d) {
			return this.mouseover(a, c).mouseout(b, d || c)
		}, f.unhover = function(a, b) {
			return this.unmouseover(a).unmouseout(b)
		};
		var u = [];
		f.drag = function(c, d, e, f, g, h) {
			function i(i, j, k) {
				(i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
					el: this,
					move_scope: f,
					start_scope: g,
					end_scope: h
				}), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
			}
			if (!arguments.length) {
				var j;
				return this.drag(function(a, b) {
					this.attr({
						transform: j + (j ? "T" : "t") + [a, b]
					})
				}, function() {
					j = this.transform().local
				})
			}
			return this._drag = {}, u.push({
				el: this,
				start: i
			}), this.mousedown(i), this
		}, f.undrag = function() {
			for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
			return !u.length && a.unmousemove(r).unmouseup(s), this
		}
	}), d.plugin(function(a, c, d) {
		var e = (c.prototype, d.prototype),
			f = /^\s*url\((.+)\)/,
			g = String,
			h = a._.$;
		a.filter = {}, e.filter = function(b) {
			var d = this;
			"svg" != d.type && (d = d.paper);
			var e = a.parse(g(b)),
				f = a._.id(),
				i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
			return h(i, {
				id: f,
				filterUnits: "userSpaceOnUse"
			}), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
		}, b.on("snap.util.getattr.filter", function() {
			b.stop();
			var c = h(this.node, "filter");
			if (c) {
				var d = g(c).match(f);
				return d && a.select(d[1])
			}
		}), b.on("snap.util.attr.filter", function(d) {
			if (d instanceof c && "filter" == d.type) {
				b.stop();
				var e = d.node.id;
				e || (h(d.node, {
					id: d.id
				}), e = d.id), h(this.node, {
					filter: a.url(e)
				})
			}
			d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
		}), a.filter.blur = function(b, c) {
			null == b && (b = 2);
			var d = null == c ? b : [b, c];
			return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
				def: d
			})
		}, a.filter.blur.toString = function() {
			return this()
		}, a.filter.shadow = function(b, c, d, e) {
			return e = e || "#000", null == d && (d = 4), "string" == typeof d && (e = d, d = 4), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
				color: e,
				dx: b,
				dy: c,
				blur: d
			})
		}, a.filter.shadow.toString = function() {
			return this()
		}, a.filter.grayscale = function(b) {
			return null == b && (b = 1),
			a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
				a: .2126 + .7874 * (1 - b),
				b: .7152 - .7152 * (1 - b),
				c: .0722 - .0722 * (1 - b),
				d: .2126 - .2126 * (1 - b),
				e: .7152 + .2848 * (1 - b),
				f: .0722 - .0722 * (1 - b),
				g: .2126 - .2126 * (1 - b),
				h: .0722 + .9278 * (1 - b)
			})
		}, a.filter.grayscale.toString = function() {
			return this()
		}, a.filter.sepia = function(b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
				a: .393 + .607 * (1 - b),
				b: .769 - .769 * (1 - b),
				c: .189 - .189 * (1 - b),
				d: .349 - .349 * (1 - b),
				e: .686 + .314 * (1 - b),
				f: .168 - .168 * (1 - b),
				g: .272 - .272 * (1 - b),
				h: .534 - .534 * (1 - b),
				i: .131 + .869 * (1 - b)
			})
		}, a.filter.sepia.toString = function() {
			return this()
		}, a.filter.saturate = function(b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
				amount: 1 - b
			})
		}, a.filter.saturate.toString = function() {
			return this()
		}, a.filter.hueRotate = function(b) {
			return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
				angle: b
			})
		}, a.filter.hueRotate.toString = function() {
			return this()
		}, a.filter.invert = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: 1 - b
			})
		}, a.filter.invert.toString = function() {
			return this()
		}, a.filter.brightness = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
				amount: b
			})
		}, a.filter.brightness.toString = function() {
			return this()
		}, a.filter.contrast = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: .5 - b / 2
			})
		}, a.filter.contrast.toString = function() {
			return this()
		}
	}), d
});
(function($, sr) {
	"use strict";
	var debounce = function(func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this,
				args = arguments;

			function delayed() {
				if (!execAsap) func.apply(obj, args);
				timeout = null
			}
			if (timeout) clearTimeout(timeout);
			else if (execAsap) func.apply(obj, args);
			timeout = setTimeout(delayed, threshold || 100)
		}
	};
	jQuery.fn[sr] = function(fn) {
		return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr)
	}
})(jQuery, "smartresize");

function FastClick(e) {
	"use strict";
	var t, n = this;
	this.trackingClick = false;
	this.trackingClickStart = 0;
	this.targetElement = null;
	this.touchStartX = 0;
	this.touchStartY = 0;
	this.lastTouchIdentifier = 0;
	this.touchBoundary = 10;
	this.layer = e;
	if (!e || !e.nodeType) {
		throw new TypeError("Layer must be a document node")
	}
	this.onClick = function() {
		return FastClick.prototype.onClick.apply(n, arguments)
	};
	this.onMouse = function() {
		return FastClick.prototype.onMouse.apply(n, arguments)
	};
	this.onTouchStart = function() {
		return FastClick.prototype.onTouchStart.apply(n, arguments)
	};
	this.onTouchMove = function() {
		return FastClick.prototype.onTouchMove.apply(n, arguments)
	};
	this.onTouchEnd = function() {
		return FastClick.prototype.onTouchEnd.apply(n, arguments)
	};
	this.onTouchCancel = function() {
		return FastClick.prototype.onTouchCancel.apply(n, arguments)
	};
	if (FastClick.notNeeded(e)) {
		return
	}
	if (this.deviceIsAndroid) {
		e.addEventListener("mouseover", this.onMouse, true);
		e.addEventListener("mousedown", this.onMouse, true);
		e.addEventListener("mouseup", this.onMouse, true)
	}
	e.addEventListener("click", this.onClick, true);
	e.addEventListener("touchstart", this.onTouchStart, false);
	e.addEventListener("touchmove", this.onTouchMove, false);
	e.addEventListener("touchend", this.onTouchEnd, false);
	e.addEventListener("touchcancel", this.onTouchCancel, false);
	if (!Event.prototype.stopImmediatePropagation) {
		e.removeEventListener = function(t, n, r) {
			var i = Node.prototype.removeEventListener;
			if (t === "click") {
				i.call(e, t, n.hijacked || n, r)
			} else {
				i.call(e, t, n, r)
			}
		};
		e.addEventListener = function(t, n, r) {
			var i = Node.prototype.addEventListener;
			if (t === "click") {
				i.call(e, t, n.hijacked || (n.hijacked = function(e) {
					if (!e.propagationStopped) {
						n(e)
					}
				}), r)
			} else {
				i.call(e, t, n, r)
			}
		}
	}
	if (typeof e.onclick === "function") {
		t = e.onclick;
		e.addEventListener("click", function(e) {
			t(e)
		}, false);
		e.onclick = null
	}
}
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(e) {
	"use strict";
	switch (e.nodeName.toLowerCase()) {
		case "button":
		case "select":
		case "textarea":
			if (e.disabled) {
				return true
			}
			break;
		case "input":
			if (this.deviceIsIOS && e.type === "file" || e.disabled) {
				return true
			}
			break;
		case "label":
		case "video":
			return true
	}
	return /\bneedsclick\b/.test(e.className)
};
FastClick.prototype.needsFocus = function(e) {
	"use strict";
	switch (e.nodeName.toLowerCase()) {
		case "textarea":
			return true;
		case "select":
			return !this.deviceIsAndroid;
		case "input":
			switch (e.type) {
				case "button":
				case "checkbox":
				case "file":
				case "image":
				case "radio":
				case "submit":
					return false
			}
			return !e.disabled && !e.readOnly;
		default:
			return /\bneedsfocus\b/.test(e.className)
	}
};
FastClick.prototype.sendClick = function(e, t) {
	"use strict";
	var n, r;
	if (document.activeElement && document.activeElement !== e) {
		document.activeElement.blur()
	}
	r = t.changedTouches[0];
	n = document.createEvent("MouseEvents");
	n.initMouseEvent(this.determineEventType(e), true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null);
	n.forwardedTouchEvent = true;
	e.dispatchEvent(n)
};
FastClick.prototype.determineEventType = function(e) {
	"use strict";
	if (this.deviceIsAndroid && e.tagName.toLowerCase() === "select") {
		return "mousedown"
	}
	return "click"
};
FastClick.prototype.focus = function(e) {
	"use strict";
	var t;
	if (this.deviceIsIOS && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time") {
		t = e.value.length;
		e.setSelectionRange(t, t)
	} else {
		e.focus()
	}
};
FastClick.prototype.updateScrollParent = function(e) {
	"use strict";
	var t, n;
	t = e.fastClickScrollParent;
	if (!t || !t.contains(e)) {
		n = e;
		do {
			if (n.scrollHeight > n.offsetHeight) {
				t = n;
				e.fastClickScrollParent = n;
				break
			}
			n = n.parentElement
		} while (n)
	}
	if (t) {
		t.fastClickLastScrollTop = t.scrollTop
	}
};
FastClick.prototype.getTargetElementFromEventTarget = function(e) {
	"use strict";
	if (e.nodeType === Node.TEXT_NODE) {
		return e.parentNode
	}
	return e
};
FastClick.prototype.onTouchStart = function(e) {
	"use strict";
	var t, n, r;
	if (e.targetTouches.length > 1) {
		return true
	}
	t = this.getTargetElementFromEventTarget(e.target);
	n = e.targetTouches[0];
	if (this.deviceIsIOS) {
		r = window.getSelection();
		if (r.rangeCount && !r.isCollapsed) {
			return true
		}
		if (!this.deviceIsIOS4) {
			if (n.identifier === this.lastTouchIdentifier) {
				e.preventDefault();
				return false
			}
			this.lastTouchIdentifier = n.identifier;
			this.updateScrollParent(t)
		}
	}
	this.trackingClick = true;
	this.trackingClickStart = e.timeStamp;
	this.targetElement = t;
	this.touchStartX = n.pageX;
	this.touchStartY = n.pageY;
	if (e.timeStamp - this.lastClickTime < 200) {
		e.preventDefault()
	}
	return true
};
FastClick.prototype.touchHasMoved = function(e) {
	"use strict";
	var t = e.changedTouches[0],
		n = this.touchBoundary;
	if (Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n) {
		return true
	}
	return false
};
FastClick.prototype.onTouchMove = function(e) {
	"use strict";
	if (!this.trackingClick) {
		return true
	}
	if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) {
		this.trackingClick = false;
		this.targetElement = null
	}
	return true
};
FastClick.prototype.findControl = function(e) {
	"use strict";
	if (e.control !== undefined) {
		return e.control
	}
	if (e.htmlFor) {
		return document.getElementById(e.htmlFor)
	}
	return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(e) {
	"use strict";
	var t, n, r, i, s, o = this.targetElement;
	if (!this.trackingClick) {
		return true
	}
	if (e.timeStamp - this.lastClickTime < 200) {
		this.cancelNextClick = true;
		return true
	}
	this.cancelNextClick = false;
	this.lastClickTime = e.timeStamp;
	n = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;
	if (this.deviceIsIOSWithBadTarget) {
		s = e.changedTouches[0];
		o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || o;
		o.fastClickScrollParent = this.targetElement.fastClickScrollParent
	}
	r = o.tagName.toLowerCase();
	if (r === "label") {
		t = this.findControl(o);
		if (t) {
			this.focus(o);
			if (this.deviceIsAndroid) {
				return false
			}
			o = t
		}
	} else if (this.needsFocus(o)) {
		if (e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && r === "input") {
			this.targetElement = null;
			return false
		}
		this.focus(o);
		this.sendClick(o, e);
		if (!this.deviceIsIOS4 || r !== "select") {
			this.targetElement = null;
			e.preventDefault()
		}
		return false
	}
	if (this.deviceIsIOS && !this.deviceIsIOS4) {
		i = o.fastClickScrollParent;
		if (i && i.fastClickLastScrollTop !== i.scrollTop) {
			return true
		}
	}
	if (!this.needsClick(o)) {
		e.preventDefault();
		this.sendClick(o, e)
	}
	return false
};
FastClick.prototype.onTouchCancel = function() {
	"use strict";
	this.trackingClick = false;
	this.targetElement = null
};
FastClick.prototype.onMouse = function(e) {
	"use strict";
	if (!this.targetElement) {
		return true
	}
	if (e.forwardedTouchEvent) {
		return true
	}
	if (!e.cancelable) {
		return true
	}
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation()
		} else {
			e.propagationStopped = true
		}
		e.stopPropagation();
		e.preventDefault();
		return false
	}
	return true
};
FastClick.prototype.onClick = function(e) {
	"use strict";
	var t;
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true
	}
	if (e.target.type === "submit" && e.detail === 0) {
		return true
	}
	t = this.onMouse(e);
	if (!t) {
		this.targetElement = null
	}
	return t
};
FastClick.prototype.destroy = function() {
	"use strict";
	var e = this.layer;
	if (this.deviceIsAndroid) {
		e.removeEventListener("mouseover", this.onMouse, true);
		e.removeEventListener("mousedown", this.onMouse, true);
		e.removeEventListener("mouseup", this.onMouse, true)
	}
	e.removeEventListener("click", this.onClick, true);
	e.removeEventListener("touchstart", this.onTouchStart, false);
	e.removeEventListener("touchmove", this.onTouchMove, false);
	e.removeEventListener("touchend", this.onTouchEnd, false);
	e.removeEventListener("touchcancel", this.onTouchCancel, false)
};
FastClick.notNeeded = function(e) {
	"use strict";
	var t;
	var n;
	if (typeof window.ontouchstart === "undefined") {
		return true
	}
	n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
	if (n) {
		if (FastClick.prototype.deviceIsAndroid) {
			t = document.querySelector("meta[name=viewport]");
			if (t) {
				if (t.content.indexOf("user-scalable=no") !== -1) {
					return true
				}
				if (n > 31 && window.innerWidth <= window.screen.width) {
					return true
				}
			}
		} else {
			return true
		}
	}
	if (e.style.msTouchAction === "none") {
		return true
	}
	return false
};
FastClick.attach = function(e) {
	"use strict";
	return new FastClick(e)
};
if (typeof define !== "undefined" && define.amd) {
	define(function() {
		"use strict";
		return FastClick
	})
} else if (typeof module !== "undefined" && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick
} else {
	window.FastClick = FastClick
}! function(a) {
	function b() {}
	function c(a) {
		function c(b) {
			b.prototype.option || (b.prototype.option = function(b) {
				a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
			})
		}
		function e(b, c) {
			a.fn[b] = function(e) {
				if ("string" == typeof e) {
					for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
						var j = this[h],
							k = a.data(j, b);
						if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
							var l = k[e].apply(k, g);
							if (void 0 !== l) return l
						} else f("no such method '" + e + "' for " + b + " instance");
						else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
					}
					return this
				}
				return this.each(function() {
					var d = a.data(this, b);
					d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
				})
			}
		}
		if (a) {
			var f = "undefined" == typeof console ? b : function(a) {
					console.error(a)
				};
			return a.bridget = function(a, b) {
				c(b), e(a, b)
			}, a.bridget
		}
	}
	var d = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
}(window),
function(a) {
	function b(b) {
		var c = a.event;
		return c.target = c.target || c.srcElement || b, c
	}
	var c = document.documentElement,
		d = function() {};
	c.addEventListener ? d = function(a, b, c) {
		a.addEventListener(b, c, !1)
	} : c.attachEvent && (d = function(a, c, d) {
		a[c + d] = d.handleEvent ? function() {
			var c = b(a);
			d.handleEvent.call(d, c)
		} : function() {
			var c = b(a);
			d.call(a, c)
		}, a.attachEvent("on" + c, a[c + d])
	});
	var e = function() {};
	c.removeEventListener ? e = function(a, b, c) {
		a.removeEventListener(b, c, !1)
	} : c.detachEvent && (e = function(a, b, c) {
		a.detachEvent("on" + b, a[b + c]);
		try {
			delete a[b + c]
		} catch (d) {
			a[b + c] = void 0
		}
	});
	var f = {
		bind: d,
		unbind: e
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(this),
function(a) {
	function b(a) {
		"function" == typeof a && (b.isReady ? a() : f.push(a))
	}
	function c(a) {
		var c = "readystatechange" === a.type && "complete" !== e.readyState;
		if (!b.isReady && !c) {
			b.isReady = !0;
			for (var d = 0, g = f.length; g > d; d++) {
				var h = f[d];
				h()
			}
		}
	}
	function d(d) {
		return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
	}
	var e = a.document,
		f = [];
	b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
}(this),
function() {
	function a() {}
	function b(a, b) {
		for (var c = a.length; c--;) if (a[c].listener === b) return c;
		return -1
	}
	function c(a) {
		return function() {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function(a) {
		var b, c, d = this._getEvents();
		if (a instanceof RegExp) {
			b = {};
			for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else b = d[a] || (d[a] = []);
		return b
	}, d.flattenListeners = function(a) {
		var b, c = [];
		for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
		return c
	}, d.getListenersAsObject = function(a) {
		var b, c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c), b || c
	}, d.addListener = function(a, c) {
		var d, e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
			listener: c,
			once: !1
		});
		return this
	}, d.on = c("addListener"), d.addOnceListener = function(a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	}, d.once = c("addOnceListener"), d.defineEvent = function(a) {
		return this.getListeners(a), this
	}, d.defineEvents = function(a) {
		for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
		return this
	}, d.removeListener = function(a, c) {
		var d, e, f = this.getListenersAsObject(a);
		for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	}, d.off = c("removeListener"), d.addListeners = function(a, b) {
		return this.manipulateListeners(!1, a, b)
	}, d.removeListeners = function(a, b) {
		return this.manipulateListeners(!0, a, b)
	}, d.manipulateListeners = function(a, b, c) {
		var d, e, f = a ? this.removeListener : this.addListener,
			g = a ? this.removeListeners : this.addListeners;
		if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]);
		else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
		return this
	}, d.removeEvent = function(a) {
		var b, c = typeof a,
			d = this._getEvents();
		if ("string" === c) delete d[a];
		else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
		else delete this._events;
		return this
	}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
		var c, d, e, f, g = this.getListenersAsObject(a);
		for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
		return this
	}, d.trigger = c("emitEvent"), d.emit = function(a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	}, d.setOnceReturnValue = function(a) {
		return this._onceReturnValue = a, this
	}, d._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, d._getEvents = function() {
		return this._events || (this._events = {})
	}, a.noConflict = function() {
		return e.EventEmitter = f, a
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return a
	}) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}.call(this),
function(a) {
	function b(a) {
		if (a) {
			if ("string" == typeof d[a]) return a;
			a = a.charAt(0).toUpperCase() + a.slice(1);
			for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
		}
	}
	var c = "Webkit Moz ms Ms O".split(" "),
		d = document.documentElement.style;
	"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
		return b
	}) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window),
function(a) {
	function b(a) {
		var b = parseFloat(a),
			c = -1 === a.indexOf("%") && !isNaN(b);
		return c && b
	}
	function c() {
		for (var a = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		}, b = 0, c = g.length; c > b; b++) {
			var d = g[b];
			a[d] = 0
		}
		return a
	}
	function d(a) {
		function d(a) {
			if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
				var d = f(a);
				if ("none" === d.display) return c();
				var e = {};
				e.width = a.offsetWidth, e.height = a.offsetHeight;
				for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
					var n = g[l],
						o = d[n];
					o = h(a, o);
					var p = parseFloat(o);
					e[n] = isNaN(p) ? 0 : p
				}
				var q = e.paddingLeft + e.paddingRight,
					r = e.paddingTop + e.paddingBottom,
					s = e.marginLeft + e.marginRight,
					t = e.marginTop + e.marginBottom,
					u = e.borderLeftWidth + e.borderRightWidth,
					v = e.borderTopWidth + e.borderBottomWidth,
					w = k && i,
					x = b(d.width);
				x !== !1 && (e.width = x + (w ? 0 : q + u));
				var y = b(d.height);
				return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e
			}
		}
		function h(a, b) {
			if (e || -1 === b.indexOf("%")) return b;
			var c = a.style,
				d = c.left,
				f = a.runtimeStyle,
				g = f && f.left;
			return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b
		}
		var i, j = a("boxSizing");
		return function() {
			if (j) {
				var a = document.createElement("div");
				a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
				var c = document.body || document.documentElement;
				c.appendChild(a);
				var d = f(a);
				i = 200 === b(d.width), c.removeChild(a)
			}
		}(), d
	}
	var e = a.getComputedStyle,
		f = e ? function(a) {
			return e(a, null)
		} : function(a) {
			return a.currentStyle
		}, g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
	"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
}(window),
function(a, b) {
	function c(a, b) {
		return a[h](b)
	}
	function d(a) {
		if (!a.parentNode) {
			var b = document.createDocumentFragment();
			b.appendChild(a)
		}
	}
	function e(a, b) {
		d(a);
		for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++) if (c[e] === a) return !0;
		return !1
	}
	function f(a, b) {
		return d(a), c(a, b)
	}
	var g, h = function() {
		if (b.matchesSelector) return "matchesSelector";
		for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
			var e = a[c],
				f = e + "MatchesSelector";
			if (b[f]) return f
		}
	}();
	if (h) {
		var i = document.createElement("div"),
			j = c(i, "div");
		g = j ? c : f
	} else g = e;
	"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
		return g
	}) : window.matchesSelector = g
}(this, Element.prototype),
function(a) {
	function b(a, b) {
		for (var c in b) a[c] = b[c];
		return a
	}
	function c(a) {
		for (var b in a) return !1;
		return b = null, !0
	}
	function d(a) {
		return a.replace(/([A-Z])/g, function(a) {
			return "-" + a.toLowerCase()
		})
	}
	function e(a, e, f) {
		function h(a, b) {
			a && (this.element = a, this.layout = b, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var i = f("transition"),
			j = f("transform"),
			k = i && j,
			l = !! f("perspective"),
			m = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			}[i],
			n = ["transform", "transition", "transitionDuration", "transitionProperty"],
			o = function() {
				for (var a = {}, b = 0, c = n.length; c > b; b++) {
					var d = n[b],
						e = f(d);
					e && e !== d && (a[d] = e)
				}
				return a
			}();
		b(h.prototype, a.prototype), h.prototype._create = function() {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, h.prototype.handleEvent = function(a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, h.prototype.getSize = function() {
			this.size = e(this.element)
		}, h.prototype.css = function(a) {
			var b = this.element.style;
			for (var c in a) {
				var d = o[c] || c;
				b[d] = a[c]
			}
		}, h.prototype.getPosition = function() {
			var a = g(this.element),
				b = this.layout.options,
				c = b.isOriginLeft,
				d = b.isOriginTop,
				e = parseInt(a[c ? "left" : "right"], 10),
				f = parseInt(a[d ? "top" : "bottom"], 10);
			e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
			var h = this.layout.size;
			e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
		}, h.prototype.layoutPosition = function() {
			var a = this.layout.size,
				b = this.layout.options,
				c = {};
			b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
		};
		var p = l ? function(a, b) {
				return "translate3d(" + a + "px, " + b + "px, 0)"
			} : function(a, b) {
				return "translate(" + a + "px, " + b + "px)"
			};
		h.prototype._transitionTo = function(a, b) {
			this.getPosition();
			var c = this.position.x,
				d = this.position.y,
				e = parseInt(a, 10),
				f = parseInt(b, 10),
				g = e === this.position.x && f === this.position.y;
			if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
			var h = a - c,
				i = b - d,
				j = {}, k = this.layout.options;
			h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
				to: j,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, h.prototype.goTo = function(a, b) {
			this.setPosition(a, b), this.layoutPosition()
		}, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
			this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
		}, h.prototype._nonTransition = function(a) {
			this.css(a.to), a.isCleaning && this._removeStyles(a.to);
			for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
		}, h.prototype._transition = function(a) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
			var b = this._transn;
			for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
			for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
			if (a.from) {
				this.css(a.from);
				var d = this.element.offsetHeight;
				d = null
			}
			this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
		};
		var q = j && d(j) + ",opacity";
		h.prototype.enableTransition = function() {
			this.isTransitioning || (this.css({
				transitionProperty: q,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(m, this, !1))
		}, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
			this.ontransitionend(a)
		}, h.prototype.onotransitionend = function(a) {
			this.ontransitionend(a)
		};
		var r = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		h.prototype.ontransitionend = function(a) {
			if (a.target === this.element) {
				var b = this._transn,
					d = r[a.propertyName] || a.propertyName;
				if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
					var e = b.onEnd[d];
					e.call(this), delete b.onEnd[d]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, h.prototype.disableTransition = function() {
			this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
		}, h.prototype._removeStyles = function(a) {
			var b = {};
			for (var c in a) b[c] = "";
			this.css(b)
		};
		var s = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return h.prototype.removeTransitionStyles = function() {
			this.css(s)
		}, h.prototype.removeElem = function() {
			this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
		}, h.prototype.remove = function() {
			if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var a = this;
			this.on("transitionEnd", function() {
				return a.removeElem(), !0
			}), this.hide()
		}, h.prototype.reveal = function() {
			delete this.isHidden, this.css({
				display: ""
			});
			var a = this.layout.options;
			this.transition({
				from: a.hiddenStyle,
				to: a.visibleStyle,
				isCleaning: !0
			})
		}, h.prototype.hide = function() {
			this.isHidden = !0, this.css({
				display: ""
			});
			var a = this.layout.options;
			this.transition({
				from: a.visibleStyle,
				to: a.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: {
					opacity: function() {
						this.isHidden && this.css({
							display: "none"
						})
					}
				}
			})
		}, h.prototype.destroy = function() {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, h
	}
	var f = a.getComputedStyle,
		g = f ? function(a) {
			return f(a, null)
		} : function(a) {
			return a.currentStyle
		};
	"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
}(window),
function(a) {
	function b(a, b) {
		for (var c in b) a[c] = b[c];
		return a
	}
	function c(a) {
		return "[object Array]" === l.call(a)
	}
	function d(a) {
		var b = [];
		if (c(a)) b = a;
		else if (a && "number" == typeof a.length) for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
		else b.push(a);
		return b
	}
	function e(a, b) {
		var c = n(b, a); - 1 !== c && b.splice(c, 1)
	}
	function f(a) {
		return a.replace(/(.)([A-Z])/g, function(a, b, c) {
			return b + "-" + c
		}).toLowerCase()
	}
	function g(c, g, l, n, o, p) {
		function q(a, c) {
			if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
			this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
			var d = ++r;
			this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var r = 0,
			s = {};
		return q.namespace = "outlayer", q.Item = p, q.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, b(q.prototype, l.prototype), q.prototype.option = function(a) {
			b(this.options, a)
		}, q.prototype._create = function() {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, q.prototype.reloadItems = function() {
			this.items = this._itemize(this.element.children)
		}, q.prototype._itemize = function(a) {
			for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
				var g = b[e],
					h = new c(g, this);
				d.push(h)
			}
			return d
		}, q.prototype._filterFindItemElements = function(a) {
			a = d(a);
			for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
				var g = a[e];
				if (m(g)) if (b) {
					o(g, b) && c.push(g);
					for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
				} else c.push(g)
			}
			return c
		}, q.prototype.getItemElements = function() {
			for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
			return a
		}, q.prototype.layout = function() {
			this._resetLayout(), this._manageStamps();
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, a), this._isLayoutInited = !0
		}, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
			this.getSize()
		}, q.prototype.getSize = function() {
			this.size = n(this.element)
		}, q.prototype._getMeasurement = function(a, b) {
			var c, d = this.options[a];
			d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
		}, q.prototype.layoutItems = function(a, b) {
			a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
		}, q.prototype._getItemsForLayout = function(a) {
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.isIgnored || b.push(e)
			}
			return b
		}, q.prototype._layoutItems = function(a, b) {
			function c() {
				d.emitEvent("layoutComplete", [d, a])
			}
			var d = this;
			if (!a || !a.length) return void c();
			this._itemsOn(a, "layout", c);
			for (var e = [], f = 0, g = a.length; g > f; f++) {
				var h = a[f],
					i = this._getItemLayoutPosition(h);
				i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
			}
			this._processLayoutQueue(e)
		}, q.prototype._getItemLayoutPosition = function() {
			return {
				x: 0,
				y: 0
			}
		}, q.prototype._processLayoutQueue = function(a) {
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				this._positionItem(d.item, d.x, d.y, d.isInstant)
			}
		}, q.prototype._positionItem = function(a, b, c, d) {
			d ? a.goTo(b, c) : a.moveTo(b, c)
		}, q.prototype._postLayout = function() {
			this.resizeContainer()
		}, q.prototype.resizeContainer = function() {
			if (this.options.isResizingContainer) {
				var a = this._getContainerSize();
				a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
			}
		}, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
			if (void 0 !== a) {
				var c = this.size;
				c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
			}
		}, q.prototype._itemsOn = function(a, b, c) {
			function d() {
				return e++, e === f && c.call(g), !0
			}
			for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
				var j = a[h];
				j.on(b, d)
			}
		}, q.prototype.ignore = function(a) {
			var b = this.getItem(a);
			b && (b.isIgnored = !0)
		}, q.prototype.unignore = function(a) {
			var b = this.getItem(a);
			b && delete b.isIgnored
		}, q.prototype.stamp = function(a) {
			if (a = this._find(a)) {
				this.stamps = this.stamps.concat(a);
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					this.ignore(d)
				}
			}
		}, q.prototype.unstamp = function(a) {
			if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				e(d, this.stamps), this.unignore(d)
			}
		}, q.prototype._find = function(a) {
			return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
		}, q.prototype._manageStamps = function() {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var a = 0, b = this.stamps.length; b > a; a++) {
					var c = this.stamps[a];
					this._manageStamp(c)
				}
			}
		}, q.prototype._getBoundingRect = function() {
			var a = this.element.getBoundingClientRect(),
				b = this.size;
			this._boundingRect = {
				left: a.left + b.paddingLeft + b.borderLeftWidth,
				top: a.top + b.paddingTop + b.borderTopWidth,
				right: a.right - (b.paddingRight + b.borderRightWidth),
				bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
			}
		}, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
			var b = a.getBoundingClientRect(),
				c = this._boundingRect,
				d = n(a),
				e = {
					left: b.left - c.left - d.marginLeft,
					top: b.top - c.top - d.marginTop,
					right: c.right - b.right - d.marginRight,
					bottom: c.bottom - b.bottom - d.marginBottom
				};
			return e
		}, q.prototype.handleEvent = function(a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, q.prototype.bindResize = function() {
			this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
		}, q.prototype.unbindResize = function() {
			this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1
		}, q.prototype.onresize = function() {
			function a() {
				b.resize(), delete b.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var b = this;
			this.resizeTimeout = setTimeout(a, 100)
		}, q.prototype.resize = function() {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, q.prototype.needsResizeLayout = function() {
			var a = n(this.element),
				b = this.size && a;
			return b && a.innerWidth !== this.size.innerWidth
		}, q.prototype.addItems = function(a) {
			var b = this._itemize(a);
			return b.length && (this.items = this.items.concat(b)), b
		}, q.prototype.appended = function(a) {
			var b = this.addItems(a);
			b.length && (this.layoutItems(b, !0), this.reveal(b))
		}, q.prototype.prepended = function(a) {
			var b = this._itemize(a);
			if (b.length) {
				var c = this.items.slice(0);
				this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
			}
		}, q.prototype.reveal = function(a) {
			var b = a && a.length;
			if (b) for (var c = 0; b > c; c++) {
				var d = a[c];
				d.reveal()
			}
		}, q.prototype.hide = function(a) {
			var b = a && a.length;
			if (b) for (var c = 0; b > c; c++) {
				var d = a[c];
				d.hide()
			}
		}, q.prototype.getItem = function(a) {
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				if (d.element === a) return d
			}
		}, q.prototype.getItems = function(a) {
			if (a && a.length) {
				for (var b = [], c = 0, d = a.length; d > c; c++) {
					var e = a[c],
						f = this.getItem(e);
					f && b.push(f)
				}
				return b
			}
		}, q.prototype.remove = function(a) {
			a = d(a);
			var b = this.getItems(a);
			if (b && b.length) {
				this._itemsOn(b, "remove", function() {
					this.emitEvent("removeComplete", [this, b])
				});
				for (var c = 0, f = b.length; f > c; c++) {
					var g = b[c];
					g.remove(), e(g, this.items)
				}
			}
		}, q.prototype.destroy = function() {
			var a = this.element.style;
			a.height = "", a.position = "", a.width = "";
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				d.destroy()
			}
			this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
		}, q.data = function(a) {
			var b = a && a.outlayerGUID;
			return b && s[b]
		}, q.create = function(a, c) {
			function d() {
				q.apply(this, arguments)
			}
			return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() {
				p.apply(this, arguments)
			}, d.Item.prototype = new p, g(function() {
				for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
					var l, m = c[g],
						n = m.getAttribute(e);
					try {
						l = n && JSON.parse(n)
					} catch (o) {
						i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
						continue
					}
					var p = new d(m, l);
					j && j.data(m, a, p)
				}
			}), j && j.bridget && j.bridget(a, d), d
		}, q.Item = p, q
	}
	var h = a.document,
		i = a.console,
		j = a.jQuery,
		k = function() {}, l = Object.prototype.toString,
		m = "object" == typeof HTMLElement ? function(a) {
			return a instanceof HTMLElement
		} : function(a) {
			return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
		}, n = Array.prototype.indexOf ? function(a, b) {
			return a.indexOf(b)
		} : function(a, b) {
			for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
			return -1
		};
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
}(window),
function(a) {
	function b(a, b) {
		var d = a.create("masonry");
		return d.prototype._resetLayout = function() {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var a = this.cols;
			for (this.colYs = []; a--;) this.colYs.push(0);
			this.maxY = 0
		}, d.prototype.measureColumns = function() {
			if (this.getContainerWidth(), !this.columnWidth) {
				var a = this.items[0],
					c = a && a.element;
				this.columnWidth = c && b(c).outerWidth || this.containerWidth
			}
			this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
		}, d.prototype.getContainerWidth = function() {
			var a = this.options.isFitWidth ? this.element.parentNode : this.element,
				c = b(a);
			this.containerWidth = c && c.innerWidth
		}, d.prototype._getItemLayoutPosition = function(a) {
			a.getSize();
			var b = a.size.outerWidth % this.columnWidth,
				d = b && 1 > b ? "round" : "ceil",
				e = Math[d](a.size.outerWidth / this.columnWidth);
			e = Math.min(e, this.cols);
			for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
				x: this.columnWidth * h,
				y: g
			}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
			return i
		}, d.prototype._getColGroup = function(a) {
			if (2 > a) return this.colYs;
			for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
				var e = this.colYs.slice(d, d + a);
				b[d] = Math.max.apply(Math, e)
			}
			return b
		}, d.prototype._manageStamp = function(a) {
			var c = b(a),
				d = this._getElementOffset(a),
				e = this.options.isOriginLeft ? d.left : d.right,
				f = e + c.outerWidth,
				g = Math.floor(e / this.columnWidth);
			g = Math.max(0, g);
			var h = Math.floor(f / this.columnWidth);
			h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
			for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
		}, d.prototype._getContainerSize = function() {
			this.maxY = Math.max.apply(Math, this.colYs);
			var a = {
				height: this.maxY
			};
			return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
		}, d.prototype._getContainerFitWidth = function() {
			for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
			return (this.cols - a) * this.columnWidth - this.gutter
		}, d.prototype.needsResizeLayout = function() {
			var a = this.containerWidth;
			return this.getContainerWidth(), a !== this.containerWidth
		}, d
	}
	var c = Array.prototype.indexOf ? function(a, b) {
			return a.indexOf(b)
		} : function(a, b) {
			for (var c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				if (e === b) return c
			}
			return -1
		};
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
}(window);
(function(a, b, c) {
	"use strict";
	var d = a.document,
		e = a.Modernizr,
		f = function(a) {
			return a.charAt(0).toUpperCase() + a.slice(1)
		}, g = "Moz Webkit O Ms".split(" "),
		h = function(a) {
			var b = d.documentElement.style,
				c;
			if (typeof b[a] == "string") return a;
			a = f(a);
			for (var e = 0, h = g.length; e < h; e++) {
				c = g[e] + a;
				if (typeof b[c] == "string") return c
			}
		}, i = h("transform"),
		j = h("transitionProperty"),
		k = {
			csstransforms: function() {
				return !!i
			},
			csstransforms3d: function() {
				var a = !! h("perspective");
				if (a) {
					var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
						d = "@media (" + c.join("transform-3d),(") + "modernizr)",
						e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
						f = b('<div id="modernizr" />').appendTo("html");
					a = f.height() === 3, f.remove(), e.remove()
				}
				return a
			},
			csstransitions: function() {
				return !!j
			}
		}, l;
	if (e) for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
	else {
		e = a.Modernizr = {
			_version: "1.6ish: miniModernizr for Isotope"
		};
		var m = " ",
			n;
		for (l in k) n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
		b("html").addClass(m)
	}
	if (e.csstransforms) {
		var o = e.csstransforms3d ? {
			translate: function(a) {
				return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
			},
			scale: function(a) {
				return "scale3d(" + a + ", " + a + ", 1) "
			}
		} : {
			translate: function(a) {
				return "translate(" + a[0] + "px, " + a[1] + "px) "
			},
			scale: function(a) {
				return "scale(" + a + ") "
			}
		}, p = function(a, c, d) {
			var e = b.data(a, "isoTransform") || {}, f = {}, g, h = {}, j;
			f[c] = d, b.extend(e, f);
			for (g in e) j = e[g], h[g] = o[g](j);
			var k = h.translate || "",
				l = h.scale || "",
				m = k + l;
			b.data(a, "isoTransform", e), a.style[i] = m
		};
		b.cssNumber.scale = !0, b.cssHooks.scale = {
			set: function(a, b) {
				p(a, "scale", b)
			},
			get: function(a, c) {
				var d = b.data(a, "isoTransform");
				return d && d.scale ? d.scale : 1
			}
		}, b.fx.step.scale = function(a) {
			b.cssHooks.scale.set(a.elem, a.now + a.unit)
		}, b.cssNumber.translate = !0, b.cssHooks.translate = {
			set: function(a, b) {
				p(a, "translate", b)
			},
			get: function(a, c) {
				var d = b.data(a, "isoTransform");
				return d && d.translate ? d.translate : [0, 0]
			}
		}
	}
	var q, r;
	e.csstransitions && (q = {
		WebkitTransitionProperty: "webkitTransitionEnd",
		MozTransitionProperty: "transitionend",
		OTransitionProperty: "oTransitionEnd otransitionend",
		transitionProperty: "transitionend"
	}[j], r = h("transitionDuration"));
	var s = b.event,
		t = b.event.handle ? "handle" : "dispatch",
		u;
	s.special.smartresize = {
		setup: function() {
			b(this).bind("resize", s.special.smartresize.handler)
		},
		teardown: function() {
			b(this).unbind("resize", s.special.smartresize.handler)
		},
		handler: function(a, b) {
			var c = this,
				d = arguments;
			a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function() {
				s[t].apply(c, d)
			}, b === "execAsap" ? 0 : 100)
		}
	}, b.fn.smartresize = function(a) {
		return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
	}, b.Isotope = function(a, c, d) {
		this.element = b(c), this._create(a), this._init(d)
	};
	var v = ["width", "height"],
		w = b(a);
	b.Isotope.settings = {
		resizable: !0,
		layoutMode: "masonry",
		containerClass: "isotope",
		itemClass: "isotope-item",
		hiddenClass: "isotope-hidden",
		hiddenStyle: {
			opacity: 0,
			scale: .001
		},
		visibleStyle: {
			opacity: 1,
			scale: 1
		},
		containerStyle: {
			position: "relative",
			overflow: "hidden"
		},
		animationEngine: "best-available",
		animationOptions: {
			queue: !1,
			duration: 800
		},
		sortBy: "original-order",
		sortAscending: !0,
		resizesContainer: !0,
		transformsEnabled: !0,
		itemPositionDataEnabled: !1
	}, b.Isotope.prototype = {
		_create: function(a) {
			this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
			var c = this.element[0].style;
			this.originalStyle = {};
			var d = v.slice(0);
			for (var e in this.options.containerStyle) d.push(e);
			for (var f = 0, g = d.length; f < g; f++) e = d[f], this.originalStyle[e] = c[e] || "";
			this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
			var h = {
				"original-order": function(a, b) {
					return b.elemCount++, b.elemCount
				},
				random: function() {
					return Math.random()
				}
			};
			this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
				left: parseInt(this.element.css("padding-left") || 0, 10),
				top: parseInt(this.element.css("padding-top") || 0, 10)
			};
			var i = this;
			setTimeout(function() {
				i.element.addClass(i.options.containerClass)
			}, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
				i.resize()
			}), this.element.delegate("." + this.options.hiddenClass, "click", function() {
				return !1
			})
		},
		_getAtoms: function(a) {
			var b = this.options.itemSelector,
				c = b ? a.filter(b).add(a.find(b)) : a,
				d = {
					position: "absolute"
				};
			return c = c.filter(function(a, b) {
				return b.nodeType === 1
			}), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
		},
		_init: function(a) {
			this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
		},
		option: function(a) {
			if (b.isPlainObject(a)) {
				this.options = b.extend(!0, this.options, a);
				var c;
				for (var d in a) c = "_update" + f(d), this[c] && this[c]()
			}
		},
		_updateAnimationEngine: function() {
			var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
				b;
			switch (a) {
				case "css":
				case "none":
					b = !1;
					break;
				case "jquery":
					b = !0;
					break;
				default:
					b = !e.csstransitions
			}
			this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
		},
		_updateTransformsEnabled: function() {
			this._updateUsingTransforms()
		},
		_updateUsingTransforms: function() {
			var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
			a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
		},
		_filter: function(a) {
			var b = this.options.filter === "" ? "*" : this.options.filter;
			if (!b) return a;
			var c = this.options.hiddenClass,
				d = "." + c,
				e = a.filter(d),
				f = e;
			if (b !== "*") {
				f = e.filter(b);
				var g = a.not(d).not(b).addClass(c);
				this.styleQueue.push({
					$el: g,
					style: this.options.hiddenStyle
				})
			}
			return this.styleQueue.push({
				$el: f,
				style: this.options.visibleStyle
			}), f.removeClass(c), a.filter(b)
		},
		updateSortData: function(a, c) {
			var d = this,
				e = this.options.getSortData,
				f, g;
			a.each(function() {
				f = b(this), g = {};
				for (var a in e)!c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
				b.data(this, "isotope-sort-data", g)
			})
		},
		_sort: function() {
			var a = this.options.sortBy,
				b = this._getSorter,
				c = this.options.sortAscending ? 1 : -1,
				d = function(d, e) {
					var f = b(d, a),
						g = b(e, a);
					return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
				};
			this.$filteredAtoms.sort(d)
		},
		_getSorter: function(a, c) {
			return b.data(a, "isotope-sort-data")[c]
		},
		_translate: function(a, b) {
			return {
				translate: [a, b]
			}
		},
		_positionAbs: function(a, b) {
			return {
				left: a,
				top: b
			}
		},
		_pushPosition: function(a, b, c) {
			b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
			var d = this.getPositionStyles(b, c);
			this.styleQueue.push({
				$el: a,
				style: d
			}), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
				x: b,
				y: c
			})
		},
		layout: function(a, b) {
			var c = this.options.layoutMode;
			this["_" + c + "Layout"](a);
			if (this.options.resizesContainer) {
				var d = this["_" + c + "GetContainerSize"]();
				this.styleQueue.push({
					$el: this.element,
					style: d
				})
			}
			this._processStyleQueue(a, b), this.isLaidOut = !0
		},
		_processStyleQueue: function(a, c) {
			var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
				f = this.options.animationOptions,
				g = this.options.onLayout,
				h, i, j, k;
			i = function(a, b) {
				b.$el[d](b.style, f)
			};
			if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
				h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
			};
			else if (c || g || f.complete) {
				var l = !1,
					m = [c, g, f.complete],
					n = this;
				j = !0, k = function() {
					if (l) return;
					var b;
					for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
					l = !0
				};
				if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
				else if (e.csstransitions) {
					var o = 0,
						p = this.styleQueue[0],
						s = p && p.$el,
						t;
					while (!s || !s.length) {
						t = this.styleQueue[o++];
						if (!t) return;
						s = t.$el
					}
					var u = parseFloat(getComputedStyle(s[0])[r]);
					u > 0 && (i = function(a, b) {
						b.$el[d](b.style, f).one(q, k)
					}, j = !1)
				}
			}
			b.each(this.styleQueue, i), j && k(), this.styleQueue = []
		},
		resize: function() {
			this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
		},
		reLayout: function(a) {
			this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
		},
		addItems: function(a, b) {
			var c = this._getAtoms(a);
			this.$allAtoms = this.$allAtoms.add(c), b && b(c)
		},
		insert: function(a, b) {
			this.element.append(a);
			var c = this;
			this.addItems(a, function(a) {
				var d = c._filter(a);
				c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
			})
		},
		appended: function(a, b) {
			var c = this;
			this.addItems(a, function(a) {
				c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
			})
		},
		_addHideAppended: function(a) {
			this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
				$el: a,
				style: this.options.hiddenStyle
			})
		},
		_revealAppended: function(a, b) {
			var c = this;
			setTimeout(function() {
				a.removeClass("no-transition"), c.styleQueue.push({
					$el: a,
					style: c.options.visibleStyle
				}), c._isInserting = !1, c._processStyleQueue(a, b)
			}, 10)
		},
		reloadItems: function() {
			this.$allAtoms = this._getAtoms(this.element.children())
		},
		remove: function(a, b) {
			this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
			var c = this,
				d = function() {
					a.remove(), b && b.call(c.element)
				};
			a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
				$el: a,
				style: this.options.hiddenStyle
			}), this._sort(), this.reLayout(d)) : d()
		},
		shuffle: function(a) {
			this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
		},
		destroy: function() {
			var a = this.usingTransforms,
				b = this.options;
			this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
				var b = this.style;
				b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
			});
			var c = this.element[0].style;
			for (var d in this.originalStyle) c[d] = this.originalStyle[d];
			this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
		},
		_getSegments: function(a) {
			var b = this.options.layoutMode,
				c = a ? "rowHeight" : "columnWidth",
				d = a ? "height" : "width",
				e = a ? "rows" : "cols",
				g = this.element[d](),
				h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
			h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
		},
		_checkIfSegmentsChanged: function(a) {
			var b = this.options.layoutMode,
				c = a ? "rows" : "cols",
				d = this[b][c];
			return this._getSegments(a), this[b][c] !== d
		},
		_masonryReset: function() {
			this.masonry = {}, this._getSegments();
			var a = this.masonry.cols;
			this.masonry.colYs = [];
			while (a--) this.masonry.colYs.push(0)
		},
		_masonryLayout: function(a) {
			var c = this,
				d = c.masonry;
			a.each(function() {
				var a = b(this),
					e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
				e = Math.min(e, d.cols);
				if (e === 1) c._masonryPlaceBrick(a, d.colYs);
				else {
					var f = d.cols + 1 - e,
						g = [],
						h, i;
					for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
					c._masonryPlaceBrick(a, g)
				}
			})
		},
		_masonryPlaceBrick: function(a, b) {
			var c = Math.min.apply(Math, b),
				d = 0;
			for (var e = 0, f = b.length; e < f; e++) if (b[e] === c) {
				d = e;
				break
			}
			var g = this.masonry.columnWidth * d,
				h = c;
			this._pushPosition(a, g, h);
			var i = c + a.outerHeight(!0),
				j = this.masonry.cols + 1 - f;
			for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
		},
		_masonryGetContainerSize: function() {
			var a = Math.max.apply(Math, this.masonry.colYs);
			return {
				height: a
			}
		},
		_masonryResizeChanged: function() {
			return this._checkIfSegmentsChanged()
		},
		_fitRowsReset: function() {
			this.fitRows = {
				x: 0,
				y: 0,
				height: 0
			}
		},
		_fitRowsLayout: function(a) {
			var c = this,
				d = this.element.width(),
				e = this.fitRows;
			a.each(function() {
				var a = b(this),
					f = a.outerWidth(!0),
					g = a.outerHeight(!0);
				e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
			})
		},
		_fitRowsGetContainerSize: function() {
			return {
				height: this.fitRows.height
			}
		},
		_fitRowsResizeChanged: function() {
			return !0
		},
		_cellsByRowReset: function() {
			this.cellsByRow = {
				index: 0
			}, this._getSegments(), this._getSegments(!0)
		},
		_cellsByRowLayout: function(a) {
			var c = this,
				d = this.cellsByRow;
			a.each(function() {
				var a = b(this),
					e = d.index % d.cols,
					f = Math.floor(d.index / d.cols),
					g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
					h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
				c._pushPosition(a, g, h), d.index++
			})
		},
		_cellsByRowGetContainerSize: function() {
			return {
				height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
			}
		},
		_cellsByRowResizeChanged: function() {
			return this._checkIfSegmentsChanged()
		},
		_straightDownReset: function() {
			this.straightDown = {
				y: 0
			}
		},
		_straightDownLayout: function(a) {
			var c = this;
			a.each(function(a) {
				var d = b(this);
				c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
			})
		},
		_straightDownGetContainerSize: function() {
			return {
				height: this.straightDown.y
			}
		},
		_straightDownResizeChanged: function() {
			return !0
		},
		_masonryHorizontalReset: function() {
			this.masonryHorizontal = {}, this._getSegments(!0);
			var a = this.masonryHorizontal.rows;
			this.masonryHorizontal.rowXs = [];
			while (a--) this.masonryHorizontal.rowXs.push(0)
		},
		_masonryHorizontalLayout: function(a) {
			var c = this,
				d = c.masonryHorizontal;
			a.each(function() {
				var a = b(this),
					e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
				e = Math.min(e, d.rows);
				if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
				else {
					var f = d.rows + 1 - e,
						g = [],
						h, i;
					for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
					c._masonryHorizontalPlaceBrick(a, g)
				}
			})
		},
		_masonryHorizontalPlaceBrick: function(a, b) {
			var c = Math.min.apply(Math, b),
				d = 0;
			for (var e = 0, f = b.length; e < f; e++) if (b[e] === c) {
				d = e;
				break
			}
			var g = c,
				h = this.masonryHorizontal.rowHeight * d;
			this._pushPosition(a, g, h);
			var i = c + a.outerWidth(!0),
				j = this.masonryHorizontal.rows + 1 - f;
			for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
		},
		_masonryHorizontalGetContainerSize: function() {
			var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
			return {
				width: a
			}
		},
		_masonryHorizontalResizeChanged: function() {
			return this._checkIfSegmentsChanged(!0)
		},
		_fitColumnsReset: function() {
			this.fitColumns = {
				x: 0,
				y: 0,
				width: 0
			}
		},
		_fitColumnsLayout: function(a) {
			var c = this,
				d = this.element.height(),
				e = this.fitColumns;
			a.each(function() {
				var a = b(this),
					f = a.outerWidth(!0),
					g = a.outerHeight(!0);
				e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
			})
		},
		_fitColumnsGetContainerSize: function() {
			return {
				width: this.fitColumns.width
			}
		},
		_fitColumnsResizeChanged: function() {
			return !0
		},
		_cellsByColumnReset: function() {
			this.cellsByColumn = {
				index: 0
			}, this._getSegments(), this._getSegments(!0)
		},
		_cellsByColumnLayout: function(a) {
			var c = this,
				d = this.cellsByColumn;
			a.each(function() {
				var a = b(this),
					e = Math.floor(d.index / d.rows),
					f = d.index % d.rows,
					g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
					h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
				c._pushPosition(a, g, h), d.index++
			})
		},
		_cellsByColumnGetContainerSize: function() {
			return {
				width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
			}
		},
		_cellsByColumnResizeChanged: function() {
			return this._checkIfSegmentsChanged(!0)
		},
		_straightAcrossReset: function() {
			this.straightAcross = {
				x: 0
			}
		},
		_straightAcrossLayout: function(a) {
			var c = this;
			a.each(function(a) {
				var d = b(this);
				c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
			})
		},
		_straightAcrossGetContainerSize: function() {
			return {
				width: this.straightAcross.x
			}
		},
		_straightAcrossResizeChanged: function() {
			return !0
		}
	}, b.fn.imagesLoaded = function(a) {
		function h() {
			a.call(c, d)
		}
		function i(a) {
			var c = a.target;
			c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
		}
		var c = this,
			d = c.find("img").add(c.filter("img")),
			e = d.length,
			f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
			g = [];
		return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
			var a = this.src;
			this.src = f, this.src = a
		}), c
	};
	var x = function(b) {
		a.console && a.console.error(b)
	};
	b.fn.isotope = function(a, c) {
		if (typeof a == "string") {
			var d = Array.prototype.slice.call(arguments, 1);
			this.each(function() {
				var c = b.data(this, "isotope");
				if (!c) {
					x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
					return
				}
				if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
					x("no such method '" + a + "' for isotope instance");
					return
				}
				c[a].apply(c, d)
			})
		} else this.each(function() {
			var d = b.data(this, "isotope");
			d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
		});
		return this
	}
})(window, jQuery);
(function(a) {
	var b = "Close",
		c = "BeforeClose",
		d = "AfterClose",
		e = "BeforeAppend",
		f = "MarkupParse",
		g = "Open",
		h = "Change",
		i = "mfp",
		j = "." + i,
		k = "mfp-ready",
		l = "mfp-removing",
		m = "mfp-prevent-close",
		n, o = function() {}, p = !! window.jQuery,
		q, r = a(window),
		s, t, u, v, w, x = function(a, b) {
			n.ev.on(i + a + j, b)
		}, y = function(b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		}, z = function(b, c) {
			n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
		}, A = function(b) {
			if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
			return n.currTemplate.closeBtn
		}, B = function() {
			a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
		}, C = function() {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (a.transition !== undefined) return !0;
			while (b.length) if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	o.prototype = {
		constructor: o,
		init: function() {
			var b = navigator.appVersion;
			n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
		},
		open: function(b) {
			s || (s = a(document.body));
			var c;
			if (b.isObj === !1) {
				n.items = b.items.toArray(), n.index = 0;
				var d = b.items,
					e;
				for (c = 0; c < d.length; c++) {
					e = d[c], e.parsed && (e = e.el[0]);
					if (e === b.el[0]) {
						n.index = c;
						break
					}
				}
			} else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
			if (n.isOpen) {
				n.updateItemHTML();
				return
			}
			n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function() {
				n.close()
			}), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function(a) {
				n._checkIfClose(a.target) && n.close()
			}), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
			var h = a.magnificPopup.modules;
			for (c = 0; c < h.length; c++) {
				var i = h[c];
				i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
			}
			z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function(a, b, c, d) {
				c.close_replaceWith = A(d.type)
			}), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
				overflow: n.st.overflowY,
				overflowX: "hidden",
				overflowY: n.st.overflowY
			}) : n.wrap.css({
				top: r.scrollTop(),
				position: "absolute"
			}), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
				height: t.height(),
				position: "absolute"
			}), n.st.enableEscapeKey && t.on("keyup" + j, function(a) {
				a.keyCode === 27 && n.close()
			}), r.on("resize" + j, function() {
				n.updateSize()
			}), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
			var l = n.wH = r.height(),
				m = {};
			if (n.fixedContentPos && n._hasScrollBar(l)) {
				var o = n._getScrollbarSize();
				o && (m.marginRight = o)
			}
			n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
			var p = n.st.mainClass;
			return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function() {
				n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
			}, 16), n.isOpen = !0, n.updateSize(l), z(g), b
		},
		close: function() {
			if (!n.isOpen) return;
			z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function() {
				n._close()
			}, n.st.removalDelay)) : n._close()
		},
		_close: function() {
			z(b);
			var c = l + " " + k + " ";
			n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
			if (n.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
		},
		updateSize: function(a) {
			if (n.isIOS) {
				var b = document.documentElement.clientWidth / window.innerWidth,
					c = window.innerHeight * b;
				n.wrap.css("height", c), n.wH = c
			} else n.wH = a || r.height();
			n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
		},
		updateItemHTML: function() {
			var b = n.items[n.index];
			n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
			var c = b.type;
			z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
			if (!n.currTemplate[c]) {
				var d = n.st[c] ? n.st[c].markup : !1;
				z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
			}
			u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
			var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
			n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
		},
		appendContent: function(a, b) {
			n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
		},
		parseEl: function(b) {
			var c = n.items[b],
				d;
			c.tagName ? c = {
				el: a(c)
			} : (d = c.type, c = {
				data: c,
				src: c.src
			});
			if (c.el) {
				var e = n.types;
				for (var f = 0; f < e.length; f++) if (c.el.hasClass("mfp-" + e[f])) {
					d = e[f];
					break
				}
				c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
			}
			return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
		},
		addGroup: function(a, b) {
			var c = function(c) {
				c.mfpEl = this, n._openClick(c, a, b)
			};
			b || (b = {});
			var d = "click.magnificPopup";
			b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
		},
		_openClick: function(b, c, d) {
			var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
			if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;
			var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
			if (f) if (a.isFunction(f)) {
				if (!f.call(n)) return !0
			} else if (r.width() < f) return !0;
			b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
		},
		updateStatus: function(a, b) {
			if (n.preloader) {
				q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
				var c = {
					status: a,
					text: b
				};
				z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function(a) {
					a.stopImmediatePropagation()
				}), n.container.addClass("mfp-s-" + a), q = a
			}
		},
		_checkIfClose: function(b) {
			if (a(b).hasClass(m)) return;
			var c = n.st.closeOnContentClick,
				d = n.st.closeOnBgClick;
			if (c && d) return !0;
			if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0;
			if (b !== n.content[0] && !a.contains(n.content[0], b)) {
				if (d && a.contains(document, b)) return !0
			} else if (c) return !0;
			return !1
		},
		_addClassToMFP: function(a) {
			n.bgOverlay.addClass(a), n.wrap.addClass(a)
		},
		_removeClassFromMFP: function(a) {
			this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
		},
		_hasScrollBar: function(a) {
			return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
		},
		_setFocus: function() {
			(n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
		},
		_onFocusIn: function(b) {
			if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1
		},
		_parseMarkup: function(b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function(a, c) {
				if (c === undefined || c === !1) return !0;
				e = a.split("_");
				if (e.length > 1) {
					var d = b.find(j + "-" + e[0]);
					if (d.length > 0) {
						var f = e[1];
						f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
					}
				} else b.find(j + "-" + a).html(c)
			})
		},
		_getScrollbarSize: function() {
			if (n.scrollbarSize === undefined) {
				var a = document.createElement("div");
				a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return n.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: o.prototype,
		modules: [],
		open: function(b, c) {
			return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function() {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function(b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, a.fn.magnificPopup = function(b) {
		B();
		var c = a(this);
		if (typeof b == "string") if (b === "open") {
			var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup,
				f = parseInt(arguments[1], 10) || 0;
			e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({
				mfpEl: d
			}, c, e)
		} else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
		else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
		return c
	};
	var D = "inline",
		E, F, G, H = function() {
			G && (F.after(G.addClass(E)).detach(), G = null)
		};
	a.magnificPopup.registerModule(D, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				n.types.push(D), x(b + "." + D, function() {
					H()
				})
			},
			getInline: function(b, c) {
				H();
				if (b.src) {
					var d = n.st.inline,
						e = a(b.src);
					if (e.length) {
						var f = e[0].parentNode;
						f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
					} else n.updateStatus("error", d.tNotFound), e = a("<div>");
					return b.inlineElement = e, e
				}
				return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
			}
		}
	});
	var I = "ajax",
		J, K = function() {
			J && s.removeClass(J)
		}, L = function() {
			K(), n.req && n.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
			},
			getAjax: function(b) {
				J && s.addClass(J), n.updateStatus("loading");
				var c = a.extend({
					url: b.src,
					success: function(c, d, e) {
						var f = {
							data: c,
							xhr: e
						};
						z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function() {
							n.wrap.addClass(k)
						}, 16), n.updateStatus("ready"), z("AjaxContentAdded")
					},
					error: function() {
						K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
					}
				}, n.st.ajax.settings);
				return n.req = a.ajax(c), ""
			}
		}
	});
	var M, N = function(b) {
		if (b.data && b.data.title !== undefined) return b.data.title;
		var c = n.st.image.titleSrc;
		if (c) {
			if (a.isFunction(c)) return c.call(n, b);
			if (b.el) return b.el.attr(c) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var a = n.st.image,
					c = ".image";
				n.types.push("image"), x(g + c, function() {
					n.currItem.type === "image" && a.cursor && s.addClass(a.cursor);

				}), x(b + c, function() {
					a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
				}), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
			},
			resizeImage: function() {
				var a = n.currItem;
				if (!a || !a.img) return;
				if (n.st.image.verticalFit) {
					var b = 0;
					n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
				}
			},
			_onImageHasSize: function(a) {
				a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function(a) {
				var b = 0,
					c = a.img[0],
					d = function(e) {
						M && clearInterval(M), M = setInterval(function() {
							if (c.naturalWidth > 0) {
								n._onImageHasSize(a);
								return
							}
							b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
						}, e)
					};
				d(1)
			},
			getImage: function(b, c) {
				var d = 0,
					e = function() {
						b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
					}, f = function() {
						b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
					}, g = n.st.image,
					h = c.find(".mfp-img");
				if (h.length) {
					var i = document.createElement("img");
					i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
				}
				return n._parseMarkup(c, {
					title: N(b),
					img_replaceWith: b.img
				}, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
			}
		}
	});
	var O, P = function() {
		return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var a = n.st.zoom,
					d = ".zoom",
					e;
				if (!a.enabled || !n.supportsTransition) return;
				var f = a.duration,
					g = function(b) {
						var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
							d = "all " + a.duration / 1e3 + "s " + a.easing,
							e = {
								position: "fixed",
								zIndex: 9999,
								left: 0,
								top: 0,
								"-webkit-backface-visibility": "hidden"
							}, f = "transition";
						return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
					}, h = function() {
						n.content.css("visibility", "visible")
					}, i, j;
				x("BuildControls" + d, function() {
					if (n._allowZoom()) {
						clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
						if (!e) {
							h();
							return
						}
						j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function() {
							j.css(n._getOffset(!0)), i = setTimeout(function() {
								h(), setTimeout(function() {
									j.remove(), e = j = null, z("ZoomAnimationEnded")
								}, 16)
							}, f)
						}, 16)
					}
				}), x(c + d, function() {
					if (n._allowZoom()) {
						clearTimeout(i), n.st.removalDelay = f;
						if (!e) {
							e = n._getItemToZoom();
							if (!e) return;
							j = g(e)
						}
						j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function() {
							j.css(n._getOffset())
						}, 16)
					}
				}), x(b + d, function() {
					n._allowZoom() && (h(), j && j.remove(), e = null)
				})
			},
			_allowZoom: function() {
				return n.currItem.type === "image"
			},
			_getItemToZoom: function() {
				return n.currItem.hasSize ? n.currItem.img : !1
			},
			_getOffset: function(b) {
				var c;
				b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
				var d = c.offset(),
					e = parseInt(c.css("padding-top"), 10),
					f = parseInt(c.css("padding-bottom"), 10);
				d.top -= a(window).scrollTop() - e;
				var g = {
					width: c.width(),
					height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e
				};
				return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
			}
		}
	});
	var Q = "iframe",
		R = "//about:blank",
		S = function(a) {
			if (n.currTemplate[Q]) {
				var b = n.currTemplate[Q].find("iframe");
				b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(Q, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				n.types.push(Q), x("BeforeChange", function(a, b, c) {
					b !== c && (b === Q ? S() : c === Q && S(!0))
				}), x(b + "." + Q, function() {
					S()
				})
			},
			getIframe: function(b, c) {
				var d = b.src,
					e = n.st.iframe;
				a.each(e.patterns, function() {
					if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
				});
				var f = {};
				return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
			}
		}
	});
	var T = function(a) {
		var b = n.items.length;
		return a > b - 1 ? a - b : a < 0 ? b + a : a
	}, U = function(a, b, c) {
		return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
	};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var c = n.st.gallery,
					d = ".mfp-gallery",
					e = Boolean(a.fn.mfpFastClick);
				n.direction = !0;
				if (!c || !c.enabled) return !1;
				v += " mfp-gallery", x(g + d, function() {
					c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function() {
						if (n.items.length > 1) return n.next(), !1
					}), t.on("keydown" + d, function(a) {
						a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
					})
				}), x("UpdateStatus" + d, function(a, b) {
					b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
				}), x(f + d, function(a, b, d, e) {
					var f = n.items.length;
					d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
				}), x("BuildControls" + d, function() {
					if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
						var b = c.arrowMarkup,
							d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
							f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
							g = e ? "mfpFastClick" : "click";
						d[g](function() {
							n.prev()
						}), f[g](function() {
							n.next()
						}), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
					}
				}), x(h + d, function() {
					n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function() {
						n.preloadNearbyImages(), n._preloadTimeout = null
					}, 16)
				}), x(b + d, function() {
					t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
				})
			},
			next: function() {
				n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
			},
			prev: function() {
				n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
			},
			goTo: function(a) {
				n.direction = a >= n.index, n.index = a, n.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var a = n.st.gallery.preload,
					b = Math.min(a[0], n.items.length),
					c = Math.min(a[1], n.items.length),
					d;
				for (d = 1; d <= (n.direction ? c : b); d++) n._preloadItem(n.index + d);
				for (d = 1; d <= (n.direction ? b : c); d++) n._preloadItem(n.index - d)
			},
			_preloadItem: function(b) {
				b = T(b);
				if (n.items[b].preloaded) return;
				var c = n.items[b];
				c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
					c.hasSize = !0
				}).on("error.mfploader", function() {
					c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
				}).attr("src", c.src)), c.preloaded = !0
			}
		}
	});
	var V = "retina";
	a.magnificPopup.registerModule(V, {
		options: {
			replaceSrc: function(a) {
				return a.src.replace(/\.\w+$/, function(a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (window.devicePixelRatio > 1) {
					var a = n.st.retina,
						b = a.ratio;
					b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function(a, c) {
						c.img.css({
							"max-width": c.img[0].naturalWidth / b,
							width: "100%"
						})
					}), x("ElementParse." + V, function(c, d) {
						d.src = a.replaceSrc(d, b)
					}))
				}
			}
		}
	}),
	function() {
		var b = 1e3,
			c = "ontouchstart" in window,
			d = function() {
				r.off("touchmove" + f + " touchend" + f)
			}, e = "mfpFastClick",
			f = "." + e;
		a.fn.mfpFastClick = function(e) {
			return a(this).each(function() {
				var g = a(this),
					h;
				if (c) {
					var i, j, k, l, m, n;
					g.on("touchstart" + f, function(a) {
						l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function(a) {
							m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
							if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) l = !0, d()
						}).on("touchend" + f, function(a) {
							d();
							if (l || n > 1) return;
							h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
								h = !1
							}, b), e()
						})
					})
				}
				g.on("click" + f, function() {
					h || e()
				})
			})
		}, a.fn.destroyMfpFastClick = function() {
			a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
		}
	}(), B()
})(window.jQuery || window.Zepto);
(function(t) {
	t.extend(t.fn, {
		validate: function(e) {
			if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
			var i = t.data(this[0], "validator");
			return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
				i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
			}), this.submit(function(e) {
				function s() {
					var s;
					return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
				}
				return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
			})), i)
		},
		valid: function() {
			if (t(this[0]).is("form")) return this.validate().form();
			var e = !0,
				i = t(this[0].form).validate();
			return this.each(function() {
				e = e && i.element(this)
			}), e
		},
		removeAttrs: function(e) {
			var i = {}, s = this;
			return t.each(e.split(/\s/), function(t, e) {
				i[e] = s.attr(e), s.removeAttr(e)
			}), i
		},
		rules: function(e, i) {
			var s = this[0];
			if (e) {
				var r = t.data(s.form, "validator").settings,
					n = r.rules,
					a = t.validator.staticRules(s);
				switch (e) {
					case "add":
						t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
						break;
					case "remove":
						if (!i) return delete n[s.name], a;
						var u = {};
						return t.each(i.split(/\s/), function(t, e) {
							u[e] = a[e], delete a[e]
						}), u
				}
			}
			var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
			if (o.required) {
				var l = o.required;
				delete o.required, o = t.extend({
					required: l
				}, o)
			}
			return o
		}
	}), t.extend(t.expr[":"], {
		blank: function(e) {
			return !t.trim("" + t(e).val())
		},
		filled: function(e) {
			return !!t.trim("" + t(e).val())
		},
		unchecked: function(e) {
			return !t(e).prop("checked")
		}
	}), t.validator = function(e, i) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
	}, t.validator.format = function(e, i) {
		return 1 === arguments.length ? function() {
			var i = t.makeArray(arguments);
			return i.unshift(e), t.validator.format.apply(this, i)
		} : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
			e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
				return i
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
			},
			unhighlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
			}
		},
		setDefaults: function(e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function e(e) {
					var i = t.data(this[0].form, "validator"),
						s = "on" + e.type.replace(/^validate/, "");
					i.settings[s] && i.settings[s].call(i, this[0], e)
				}
				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i = this.groups = {};
				t.each(this.settings.groups, function(e, s) {
					"string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
						i[s] = e
					})
				});
				var s = this.settings.rules;
				t.each(s, function(e, i) {
					s[e] = t.validator.normalizeRule(i)
				}), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(e) {
				e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
				var i = this.check(e) !== !1;
				return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
			},
			showErrors: function(e) {
				if (e) {
					t.extend(this.errorMap, e), this.errorList = [];
					for (var i in e) this.errorList.push({
						message: e[i],
						element: this.findByName(i)[0]
					});
					this.successList = t.grep(this.successList, function(t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e = 0;
				for (var i in t) e++;
				return e
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var e = this,
					i = {};
				return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
				})
			},
			clean: function(e) {
				return t(e)[0]
			},
			errors: function() {
				var e = this.settings.errorClass.replace(" ", ".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(e) {
				var i = t(e).attr("type"),
					s = t(e).val();
				return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var i, s = t(e).rules(),
					r = !1,
					n = this.elementValue(e);
				for (var a in s) {
					var u = {
						method: a,
						parameters: s[a]
					};
					try {
						if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
							r = !0;
							continue
						}
						if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
						if (!i) return this.formatAndAdd(e, u), !1
					} catch (o) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
					}
				}
				return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
			},
			customDataMessage: function(e, i) {
				return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
			},
			customMessage: function(t, e) {
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			},
			findDefined: function() {
				for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];
				return void 0
			},
			defaultMessage: function(e, i) {
				return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
			},
			formatAndAdd: function(e, i) {
				var s = this.defaultMessage(e, i.method),
					r = /\$?\{(\d+)\}/g;
				"function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
					message: s,
					element: e
				}), this.errorMap[e.name] = s, this.submitted[e.name] = s
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				var t, e;
				for (t = 0; this.errorList[t]; t++) {
					var i = this.errorList[t];
					this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return t(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(e, i) {
				var s = this.errorsFor(e);
				s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
			},
			errorsFor: function(e) {
				var i = this.idOrName(e);
				return this.errors().filter(function() {
					return t(this).attr("for") === i
				})
			},
			idOrName: function(t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(e) {
				return t(this.currentForm).find("[name='" + e + "']")
			},
			getLength: function(e, i) {
				switch (i.nodeName.toLowerCase()) {
					case "select":
						return t("option:selected", i).length;
					case "input":
						if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
				}
				return e.length
			},
			depend: function(t, e) {
				return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
			},
			dependTypes: {
				"boolean": function(t) {
					return t
				},
				string: function(e, i) {
					return !!t(e, i.form).length
				},
				"function": function(t, e) {
					return t(e)
				}
			},
			optional: function(e) {
				var i = this.elementValue(e);
				return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
			},
			stopRequest: function(e, i) {
				this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(e) {
				return t.data(e, "previousValue") || t.data(e, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(e, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(e, i) {
			e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
		},
		classRules: function(e) {
			var i = {}, s = t(e).attr("class");
			return s && t.each(s.split(" "), function() {
				this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
			}), i
		},
		attributeRules: function(e) {
			var i = {}, s = t(e),
				r = s[0].getAttribute("type");
			for (var n in t.validator.methods) {
				var a;
				"required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !! a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
			}
			return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
		},
		dataRules: function(e) {
			var i, s, r = {}, n = t(e);
			for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
			return r
		},
		staticRules: function(e) {
			var i = {}, s = t.data(e.form, "validator");
			return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
		},
		normalizeRules: function(e, i) {
			return t.each(e, function(s, r) {
				if (r === !1) return delete e[s], void 0;
				if (r.param || r.depends) {
					var n = !0;
					switch (typeof r.depends) {
						case "string":
							n = !! t(r.depends, i.form).length;
							break;
						case "function":
							n = r.depends.call(i, i)
					}
					n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
				}
			}), t.each(e, function(s, r) {
				e[s] = t.isFunction(r) ? r(i) : r
			}), t.each(["minlength", "maxlength"], function() {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function() {
				var i;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
			}), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function(e) {
			if ("string" == typeof e) {
				var i = {};
				t.each(e.split(/\s/), function() {
					i[this] = !0
				}), e = i
			}
			return e
		},
		addMethod: function(e, i, s) {
			t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function(e, i, s) {
				if (!this.depend(s, i)) return "dependency-mismatch";
				if ("select" === i.nodeName.toLowerCase()) {
					var r = t(i).val();
					return r && r.length > 0
				}
				return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
			},
			email: function(t, e) {
				return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
			},
			date: function(t, e) {
				return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
			},
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			creditcard: function(t, e) {
				if (this.optional(e)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(t)) return !1;
				var i = 0,
					s = 0,
					r = !1;
				t = t.replace(/\D/g, "");
				for (var n = t.length - 1; n >= 0; n--) {
					var a = t.charAt(n);
					s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
				}
				return 0 === i % 10
			},
			minlength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s
			},
			maxlength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || s >= r
			},
			rangelength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s[0] && s[1] >= r
			},
			min: function(t, e, i) {
				return this.optional(e) || t >= i
			},
			max: function(t, e, i) {
				return this.optional(e) || i >= t
			},
			range: function(t, e, i) {
				return this.optional(e) || t >= i[0] && i[1] >= t
			},
			equalTo: function(e, i, s) {
				var r = t(s);
				return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					t(i).valid()
				}), e === r.val()
			},
			remote: function(e, i, s) {
				if (this.optional(i)) return "dependency-mismatch";
				var r = this.previousValue(i);
				if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
					url: s
				} || s, r.old === e) return r.valid;
				r.old = e;
				var n = this;
				this.startRequest(i);
				var a = {};
				return a[i.name] = e, t.ajax(t.extend(!0, {
					url: s,
					mode: "abort",
					port: "validate" + i.name,
					dataType: "json",
					data: a,
					success: function(s) {
						n.settings.messages[i.name].remote = r.originalMessage;
						var a = s === !0 || "true" === s;
						if (a) {
							var u = n.formSubmitted;
							n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
						} else {
							var o = {}, l = s || n.defaultMessage(i, "remote");
							o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
						}
						r.valid = a, n.stopRequest(i, a)
					}
				}, s)), "pending"
			}
		}
	}), t.format = t.validator.format
})(jQuery),
function(t) {
	var e = {};
	if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
		var r = t.port;
		"abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
	});
	else {
		var i = t.ajax;
		t.ajax = function(s) {
			var r = ("mode" in s ? s : t.ajaxSettings).mode,
				n = ("port" in s ? s : t.ajaxSettings).port;
			return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
		}
	}
}(jQuery),
function(t) {
	t.extend(t.fn, {
		validateDelegate: function(e, i, s) {
			return this.bind(i, function(i) {
				var r = t(i.target);
				return r.is(e) ? s.apply(r, arguments) : void 0
			})
		}
	})
}(jQuery);
eval(function(p, a, c, k, e, r) {
	e = function(c) {
		return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!"".replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);
		k = [function(e) {
			return r[e]
		}];
		e = function() {
			return "\\w+"
		};
		c = 1
	}
	while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
	return p
}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)', 62, 382, "||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document".split("|"), 0, {}));

(function($) {
	"use strict";
	var pluginName = "skillChart",
		defaults = {
			width: "auto",
			height: "auto",
			easing: "bounce",
			random: true,
			duration: 300,
			strokeWidth: 18,
			spacing: 20,
			startAngle: 90,
			selector: "> span",
			circleRadius: 70,
			circleColor: "#fff",
			circleStrokeWidth: "none",
			circleStrokeColor: "none",
			textFont: "PT Sans, sans-serif",
			textColor: "#6f6f6f",
			textWeight: "normal",
			textDefault: "SKILLS",
			textSize: 14,
			strokeHoverColor: ["#ef4b41", "#ef4b41", "#ef4b41", "#ef4b41", "#ef4b41", "#ef4b41", "#ef4b41", "#ef4b41"],
			strokeHoverWidth: 22,
			updateOnResize: true
		};

	function Plugin(element, options) {
		this.elem = element;
		this.opts = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this._snap = "";
		this._timeout = undefined;
		this.init();
		this._update(this.elem, this.opts)
	}
	Plugin.prototype = {
		init: function() {
			this.opts.width = this.opts.width == "auto" ? $(this.elem).width() : this.opts.width;
			this.opts.height = this.opts.height == "auto" ? $(this.elem).height() : this.opts.height;
			this._snap = Snap(this.opts.width, this.opts.height).appendTo(this.elem);
			this._drawCircle(this.opts);
			this._drawArc(this.elem, this.opts)
		},
		_update: function(elem, opts) {
			var $t = this,
				$elem = $(elem);
			if (opts.updateOnResize) {
				$(window).smartresize(function() {
					$("svg", $elem).remove();
					opts.width = $elem.width();
					opts.height = $elem.height();
					$t.init()
				})
			}
		},
		_rand: function(l, u) {
			return Math.floor(Math.random() * (u - l + 1) + l)
		},
		_calcPath: function(percent, rad, start) {
			var v = percent == 100 ? 359.99 : 3.6 * percent,
				a1 = (this.opts.random ? this._rand(91, 240) : start) * Math.PI / 180,
				a2 = a1 - v * Math.PI / 180,
				sx = this.opts.width / 2 + rad * Math.cos(a1),
				sy = this.opts.height / 2 - rad * Math.sin(a1),
				x = this.opts.width / 2 + rad * Math.cos(a2),
				y = this.opts.height / 2 - rad * Math.sin(a2),
				path = [
					["M", sx, sy],
					["A", rad, rad, 0, +(v > 180), 1, x, y]
				];
			return path
		},
		_drawArc: function(elem, opts) {
			var self = this,
				$elem = $(elem),
				text = self._snap.text(opts.width / 2, opts.height / 2, "").attr({
					text: opts.textDefault,
					font: opts.textSize + "px " + opts.textFont,
					fill: opts.textColor,
					"text-anchor": "middle",
					"letter-spacing": 1,
					"font-weight": opts.textWeight
				}),
				percentText = self._snap.text(opts.width / 2, opts.height / 2 + 10, "").attr({
					font: opts.textSize - 2 + "px " + opts.textFont,
					fill: opts.textColor,
					"text-anchor": "middle",
					"font-weight": opts.textWeight
				});
			$elem.find(this.opts.selector).each(function(i) {
				var $t = $(this),
					thisOpts = $t.data();
				var dr = opts.circleRadius + opts.spacing * i,
					path = self._calcPath(thisOpts.percent, dr, opts.startAngle),
					strokeWidth = opts.strokeWidth,
					shc = opts.strokeHoverColor;
				self._snap.path().attr({
					path: path,
					fill: "none",
					"stroke-width": strokeWidth,
					stroke: thisOpts.skillsColor
				}).mouseover(function() {
					this.animate({
						"stroke-width": opts.strokeHoverWidth,
						stroke: typeof shc == "string" ? shc : shc[i]
					}, opts.duration, mina[opts.easing], function() {
						text.attr({
							text: $t.text()
						});
						percentText.attr({
							text: $t.data().percent + "%",
							transform: "translate(0, 10)"
						})
					})
				}).mouseout(function() {
					this.animate({
						"stroke-width": strokeWidth,
						stroke: thisOpts.skillsColor
					}, opts.duration, mina[opts.easing], function() {
						text.attr({
							text: opts.textDefault
						});
						percentText.attr({
							text: ""
						})
					})
				});
				$t.hide()
			})
		},
		_drawCircle: function(opts) {
			this._snap.circle(opts.width / 2, opts.height / 2, opts.circleRadius - opts.spacing + 10).attr({
				fill: opts.circleColor,
				"stroke-width": opts.circleStrokeWidth,
				stroke: opts.circleStrokeColor
			})
		}
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options))
			}
		})
	}
})(jQuery);
$(window).on("load", function() {
	$("#circular-skills").skillChart()
});
(function(t) {
	function e(t) {
		return t.replace(/(:|\.)/g, "\\$1")
	}
	var l = "1.4.13",
		o = {}, s = {
			exclude: [],
			excludeWithin: [],
			offset: 0,
			direction: "top",
			scrollElement: null,
			scrollTarget: null,
			beforeScroll: function() {},
			afterScroll: function() {},
			easing: "swing",
			speed: 400,
			autoCoefficent: 2,
			preventDefault: !0
		}, n = function(e) {
			var l = [],
				o = !1,
				s = e.dir && "left" == e.dir ? "scrollLeft" : "scrollTop";
			return this.each(function() {
				if (this != document && this != window) {
					var e = t(this);
					e[s]() > 0 ? l.push(this) : (e[s](1), o = e[s]() > 0, o && l.push(this), e[s](0))
				}
			}), l.length || this.each(function() {
				"BODY" === this.nodeName && (l = [this])
			}), "first" === e.el && l.length > 1 && (l = [l[0]]), l
		};
	t.fn.extend({
		scrollable: function(t) {
			var e = n.call(this, {
				dir: t
			});
			return this.pushStack(e)
		},
		firstScrollable: function(t) {
			var e = n.call(this, {
				el: "first",
				dir: t
			});
			return this.pushStack(e)
		},
		smoothScroll: function(l, o) {
			if (l = l || {}, "options" === l) return o ? this.each(function() {
				var e = t(this),
					l = t.extend(e.data("ssOpts") || {}, o);
				t(this).data("ssOpts", l)
			}) : this.first().data("ssOpts");
			var s = t.extend({}, t.fn.smoothScroll.defaults, l),
				n = t.smoothScroll.filterPath(location.pathname);
			return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(l) {
				var o = this,
					r = t(this),
					i = t.extend({}, s, r.data("ssOpts") || {}),
					c = s.exclude,
					a = i.excludeWithin,
					f = 0,
					h = 0,
					u = !0,
					d = {}, p = location.hostname === o.hostname || !o.hostname,
					m = i.scrollTarget || (t.smoothScroll.filterPath(o.pathname) || n) === n,
					S = e(o.hash);
				if (i.scrollTarget || p && m && S) {
					for (; u && c.length > f;) r.is(e(c[f++])) && (u = !1);
					for (; u && a.length > h;) r.closest(a[h++]).length && (u = !1)
				} else u = !1;
				u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
					scrollTarget: i.scrollTarget || S,
					link: o
				}), t.smoothScroll(d))
			}), this
		}
	}), t.smoothScroll = function(e, l) {
		if ("options" === e && "object" == typeof l) return t.extend(o, l);
		var s, n, r, i, c = 0,
			a = "offset",
			f = "scrollTop",
			h = {}, u = {};
		"number" == typeof e ? (s = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, o), r = e) : (s = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, e || {}, o), s.scrollElement && (a = "position", "static" == s.scrollElement.css("position") && s.scrollElement.css("position", "relative"))), f = "left" == s.direction ? "scrollLeft" : f, s.scrollElement ? (n = s.scrollElement, /^(?:HTML|BODY)$/.test(n[0].nodeName) || (c = n[f]())) : n = t("html, body").firstScrollable(s.direction), s.beforeScroll.call(n, s), r = "number" == typeof e ? e : l || t(s.scrollTarget)[a]() && t(s.scrollTarget)[a]()[s.direction] || 0, h[f] = r + c + s.offset, i = s.speed, "auto" === i && (i = h[f] || n.scrollTop(), i /= s.autoCoefficent), u = {
			duration: i,
			easing: s.easing,
			complete: function() {
				s.afterScroll.call(s.link, s)
			}
		}, s.step && (u.step = s.step), n.length ? n.stop().animate(h, u) : s.afterScroll.call(s.link, s)
	}, t.smoothScroll.version = l, t.smoothScroll.filterPath = function(t) {
		return t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
	}, t.fn.smoothScroll.defaults = s
})(jQuery);
(function() {
	"use strict";
	var $createKeyframeStyleTag, animationPlayState, playStateRunning, vendorPrefix, $createKeyframeStyleTag = function(params) {
		return $("<style>").attr({
			"class": "keyframe-style",
			id: params.id,
			type: "text/css"
		}).appendTo("head")
	};
	$.keyframe = {
		getVendorPrefix: function() {
			var ua;
			ua = navigator.userAgent;
			if (ua.indexOf("WebKit") !== -1) return "-webkit-";
			else return ""
		},
		isSupported: function() {
			var animationSupport, element, pfx;
			element = $("body").get(0);
			animationSupport = false;
			if (element.style.animationName) {
				animationSupport = true
			} else {
				pfx = this.getVendorPrefix().slice(1, -1);
				var property = pfx + "AnimationName";
				if (property in element.style) {
					animationSupport = true
				}
			}
			return animationSupport
		},
		getProperty: function(property) {
			var temp = property;
			switch (property) {
				case "transform":
					temp = this.getVendorPrefix() + temp;
					break
			}
			return temp
		},
		generate: function(frameData) {
			var $elems, $frameStyle, css, frameName, property, key;
			frameName = frameData.name || "";
			css = "@" + this.getVendorPrefix() + "keyframes " + frameName + " {";
			for (key in frameData) {
				if (key !== "name") {
					css += key + " {";
					for (property in frameData[key]) {
						var pfx_property = this.getProperty(property);
						css += pfx_property + ":" + frameData[key][property] + ";"
					}
					css += "}"
				}
			}
			css += "}";
			$frameStyle = $("style#" + frameData.name);
			if ($frameStyle.length > 0) {
				$frameStyle.html(css);
				$elems = $("*").filter(function() {
					this.style["" + $.keyframe.getVendorPrefix().slice(1, -1) + "AnimationName"] === frameName
				});
				$elems.each(function() {
					var $el, options;
					$el = $(this);
					options = $el.data("keyframeOptions");
					$el.resetKeyframe(function() {
						$el.playKeyframe(options)
					})
				})
			} else {
				$createKeyframeStyleTag({
					id: frameName
				}).append(css)
			}
		},
		define: function(frameData) {
			if (frameData.length) {
				for (var i = 0; i < frameData.length; i++) {
					var frame = frameData[i];
					this.generate(frame)
				}
			} else {
				return this.generate(frameData)
			}
		}
	};
	vendorPrefix = $.keyframe.getVendorPrefix();
	animationPlayState = "animation-play-state";
	playStateRunning = "running";
	$.fn.resetKeyframe = function(callback) {
		var $el = $(this).css(vendorPrefix + animationPlayState, playStateRunning).css(vendorPrefix + "animation", "none");
		if (callback) {
			setTimeout(callback, 1)
		}
	};
	$.fn.pauseKeyframe = function() {
		var $el = $(this).css(vendorPrefix + animationPlayState, "paused")
	};
	$.fn.resumeKeyframe = function() {
		return $(this).css(vendorPrefix + animationPlayState, playStateRunning)
	};
	$.fn.playKeyframe = function(frameOptions, callback) {
		var animationcss, animationkey, delay, duration, pfx, repeat;
		if (typeof frameOptions === "string") {
			var frameOptSplit = frameOptions.trim().split(" ");
			frameOptions = {
				name: frameOptSplit[0],
				duration: parseInt(frameOptSplit[1]),
				timingFunction: frameOptSplit[2],
				delay: parseInt(frameOptSplit[3]),
				repeat: frameOptSplit[4],
				direction: frameOptSplit[5],
				fillMode: frameOptSplit[6],
				complete: callback
			}
		}
		frameOptions = $.extend({
			duration: 0,
			timingFunction: "ease",
			delay: 0,
			repeat: 1,
			direction: "normal",
			fillMode: "forwards",
			complete: callback
		}, frameOptions);
		duration = frameOptions.duration;
		delay = frameOptions.delay;
		repeat = frameOptions.repeat;
		animationcss = "" + frameOptions.name + " " + duration + "ms " + frameOptions.timingFunction + " " + delay + "ms " + repeat + " " + frameOptions.direction + " " + frameOptions.fillMode;
		callback = frameOptions.complete;
		animationkey = vendorPrefix + "animation";
		pfx = ["webkit", "moz", "MS", "o", ""];
		var _prefixEvent = function(element, type, callback) {
			var evt, p, _results;
			p = 0;
			_results = [];
			while (p < pfx.length) {
				if (!pfx[p]) {
					type = type.toLowerCase()
				}
				evt = pfx[p] + type;
				element.off(evt).on(evt, callback);
				_results.push(p++)
			}
			_results
		};
		this.each(function() {
			var $el = $(this).addClass("boostKeyframe").css(vendorPrefix + animationPlayState, playStateRunning).css(animationkey, animationcss).data("keyframeOptions", frameOptions);
			if (callback) {
				_prefixEvent($el, "AnimationIteration", callback);
				_prefixEvent($el, "AnimationEnd", callback)
			}
		})
	};
	$createKeyframeStyleTag({
		id: "boost-keyframe"
	}).append(" .boostKeyframe{" + vendorPrefix + "transform:scale3d(1,1,1);}")
}).call(this);
(function($) {
	"use script";
	var pluginName = "flipMenu",
		defaults = {
			targetEl: "li",
			clickedEl: "a",
			styleClass: "flipMenu",
			dataAttr: "[data-flip-menu]",
			duration: 450,
			onAnimStart: function() {},
			onAnimEnd: function() {},
			onContentLoad: function() {}
		}, $pageContents = $(".page-contents"),
		$innerPages = $(".inner-pages"),
		$pageClose = $pageContents.find(".inner-nav .close-btn"),
		animationEndEventNames = {
			WebkitAnimation: "webkitAnimationEnd",
			MozAnimation: "animationend",
			animation: "animationend"
		}, isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
		animationEnd = animationEndEventNames[Modernizr.prefixed("animation")],
		supportAnimations = Modernizr.cssanimations;

	function Plugin(elem, opts) {
		this.elem = elem;
		this.opts = $.extend({}, defaults, opts);
		this._defaults = defaults;
		this._name = pluginName;
		this._init()
	}
	Plugin.prototype = {
		_init: function() {
			this._isAnimating = false;
			this._newEl = null;
			this._innerEl = null;
			this._pageOffset = {
				x: 0,
				y: 0
			};
			this._initEvents(this.opts)
		},
		_initEvents: function(opts) {
			var $el = $(this.elem),
				$clicker = $(opts.clickedEl + opts.dataAttr, $el),
				self = this,
				isPlaceholderLoaded = false;
			$clicker.on("click touchstart", function(e) {
				var $t = $(this);
				if (!isPlaceholderLoaded) {
					self._loadPlaceholder(self.opts, $t);
					self._loadContent(self.opts, $t);
					isPlaceholderLoaded = true
				}
				$pageClose.on("click touchstart", function(e) {
					if (e.target == this) {
						self._unloadPlaceholder(self.opts);
						self._unloadContent(self.opts, $t);
						isPlaceholderLoaded = false
					}
				});
				e.preventDefault();
				e.stopPropagation()
			});
			$(window).on("scroll", function() {
				if (self._isAnimating) window.scrollTo(self._pageOffset.x, self._pageOffset.y)
			})
		},
		_loadPlaceholder: function(opts, clickedEl) {
			var self = this,
				$el = $(self.elem),
				node = "<" + $el.get(0).nodeName + ">",
				placeholderOffset = clickedEl.offset(),
				$clickedParent = clickedEl.parents(opts.targetEl).eq(0);
			opts.onContentLoad(clickedEl);
			if (supportAnimations && !isSafari) {
				self._newEl = $(node, {
					attr: {
						"class": $el.attr("class")
					},
					prependTo: "body",
					addClass: opts.styleClass
				});
				self._innerEl = $clickedParent.clone(true);
				self._newEl.prepend(self._innerEl);
				self._newEl.css({
					width: clickedEl.width(),
					height: clickedEl.height(),
					top: placeholderOffset.top,
					left: placeholderOffset.left
				});
				self._isAnimating = true;
				self._pageOffset = {
					x: window.pageXOffset,
					y: window.pageYOffset
				};
				opts.onAnimStart(self._newEl, self._innerEl);
				$("body").addClass("noscroll");
				setTimeout(function() {
					$el.addClass("scaleGridBoxes")
				}, 20);
				setTimeout(function() {
					self._newEl.addClass("flipOutY")
				}, 0);
				$.keyframe.define([{
					name: "flipOutY",
					"0%": {
						transform: "perspective(5000px) rotateY(0deg)"
					},
					"5%": {
						transform: "perspective(5000px) rotateY(25deg)"
					},
					"20%": {
						transform: "perspective(5000px) rotateY(60deg)"
					},
					"100%": {
						transform: "perspective(5000px) rotateY(179.9deg)",
						width: "100%",
						height: "100%",
						top: self._pageOffset.y + "px",
						left: self._pageOffset.x + "px"
					}
				}]);
				$clickedParent.css("visibility", "hidden")
			} else {
				$pageContents.css("-webkit-transition", "0").addClass("page-show");
				$innerPages.css("-webkit-transition", "0").addClass("show-inner-pages");
				$("body, html").scrollTop(0)
			}
		},
		_unloadPlaceholder: function(opts) {
			if (supportAnimations && !isSafari) this._newEl.remove()
		},
		_loadContent: function(opts, clickedEl) {
			var self = this;
			if (supportAnimations && !isSafari) {
				self._newEl.on(animationEnd, function(e) {
					self._isAnimating = false;
					if (e.target == this) {
						setTimeout(function() {
							$pageContents.addClass("page-show").on("transitionend webkitTransitionEnd", function(e) {
								$("body, html").scrollTop(0);
								$innerPages.addClass("show-inner-pages");
								$(this).off("transitionend webkitTransitionEnd");
								e.stopPropagation()
							})
						}, 20);
						opts.onAnimEnd(self._newEl, self._innerEl)
					}
				})
			}
		},
		_unloadContent: function(opts, clickedEl) {
			var $el = $(this.elem);
			setTimeout(function() {
				$el.removeClass("scaleGridBoxes");
				$pageContents.removeClass("page-show")
			}, 17);
			clickedEl.parents(opts.targetEl).eq(0).css("visibility", "visible");
			$("body").removeClass("noscroll");
			$innerPages.removeClass("show-inner-pages")
		}
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options))
			}
		})
	}
})(jQuery);