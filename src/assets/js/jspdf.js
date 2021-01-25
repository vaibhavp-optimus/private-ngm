!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.jsPDF = {})
}(this, function(e) {
    "use strict";
    var t;
    function re(t) {
        return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    /** @license
   * jsPDF - PDF Document creation from JavaScript
   * Version 2.0.0 Built on 2019-01-22T15:32:38.220Z
   *                           CommitID 0110a2202b
   *
   * Copyright (c) 2015-2018 yWorks GmbH, http://www.yworks.com
   *               2015-2018 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
   *               2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, willow-systems.com
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Licensed under the MIT License
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   */
    !function(t) {
        if ("object" != typeof t.console) {
            t.console = {};
            for (var e, n, r = t.console, i = function() {}, o = ["memory"], s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e = o.pop(); )
                r[e] || (r[e] = {});
            for (; n = s.pop(); )
                r[n] || (r[n] = i)
        }
        var a, c, u, h, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        void 0 === t.btoa && (t.btoa = function(t) {
            var e, n, r, i, o, s = 0, a = 0, c = "", u = [];
            if (!t)
                return t;
            for (; e = (o = t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++)) >> 18 & 63,
            n = o >> 12 & 63,
            r = o >> 6 & 63,
            i = 63 & o,
            u[a++] = l.charAt(e) + l.charAt(n) + l.charAt(r) + l.charAt(i),
            s < t.length; )
                ;
            c = u.join("");
            var h = t.length % 3;
            return (h ? c.slice(0, h - 3) : c) + "===".slice(h || 3)
        }
        ),
        void 0 === t.atob && (t.atob = function(t) {
            var e, n, r, i, o, s, a = 0, c = 0, u = [];
            if (!t)
                return t;
            for (t += ""; e = (s = l.indexOf(t.charAt(a++)) << 18 | l.indexOf(t.charAt(a++)) << 12 | (i = l.indexOf(t.charAt(a++))) << 6 | (o = l.indexOf(t.charAt(a++)))) >> 16 & 255,
            n = s >> 8 & 255,
            r = 255 & s,
            u[c++] = 64 == i ? String.fromCharCode(e) : 64 == o ? String.fromCharCode(e, n) : String.fromCharCode(e, n, r),
            a < t.length; )
                ;
            return u.join("")
        }
        ),
        Array.prototype.map || (Array.prototype.map = function(t) {
            if (null == this || "function" != typeof t)
                throw new TypeError;
            for (var e = Object(this), n = e.length >>> 0, r = new Array(n), i = 1 < arguments.length ? arguments[1] : void 0, o = 0; o < n; o++)
                o in e && (r[o] = t.call(i, e[o], o, e));
            return r
        }
        ),
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ),
        Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
            if (null == this || "function" != typeof t)
                throw new TypeError;
            for (var n = Object(this), r = n.length >>> 0, i = 0; i < r; i++)
                i in n && t.call(e, n[i], i, n)
        }
        ),
        Object.keys || (Object.keys = (a = Object.prototype.hasOwnProperty,
        c = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        h = (u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length,
        function(t) {
            if ("object" != typeof t && ("function" != typeof t || null === t))
                throw new TypeError;
            var e, n, r = [];
            for (e in t)
                a.call(t, e) && r.push(e);
            if (c)
                for (n = 0; n < h; n++)
                    a.call(t, u[n]) && r.push(u[n]);
            return r
        }
        )),
        "function" != typeof Object.assign && (Object.assign = function(t) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            t = Object(t);
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (null != n)
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ),
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
        ),
        String.prototype.trimLeft || (String.prototype.trimLeft = function() {
            return this.replace(/^\s+/g, "")
        }
        ),
        String.prototype.trimRight || (String.prototype.trimRight = function() {
            return this.replace(/\s+$/g, "")
        }
        )
    }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()),
    window,
    t = function() {
        function t(e) {
            var n = this.constructor;
            return this.then(function(t) {
                return n.resolve(e()).then(function() {
                    return t
                })
            }, function(t) {
                return n.resolve(e()).then(function() {
                    return n.reject(t)
                })
            })
        }
        var e = setTimeout;
        function r() {}
        function o(t) {
            if (!(this instanceof o))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            h(t, this)
        }
        function i(n, r) {
            for (; 3 === n._state; )
                n = n._value;
            0 !== n._state ? (n._handled = !0,
            o._immediateFn(function() {
                var t = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null !== t) {
                    var e;
                    try {
                        e = t(n._value)
                    } catch (t) {
                        return void a(r.promise, t)
                    }
                    s(r.promise, e)
                } else
                    (1 === n._state ? s : a)(r.promise, n._value)
            })) : n._deferreds.push(r)
        }
        function s(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof o)
                        return e._state = 3,
                        e._value = t,
                        void c(e);
                    if ("function" == typeof n)
                        return void h((r = n,
                        i = t,
                        function() {
                            r.apply(i, arguments)
                        }
                        ), e)
                }
                e._state = 1,
                e._value = t,
                c(e)
            } catch (t) {
                a(e, t)
            }
            var r, i
        }
        function a(t, e) {
            t._state = 2,
            t._value = e,
            c(t)
        }
        function c(t) {
            2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
                t._handled || o._unhandledRejectionFn(t._value)
            });
            for (var e = 0, n = t._deferreds.length; e < n; e++)
                i(t, t._deferreds[e]);
            t._deferreds = null
        }
        function u(t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null,
            this.onRejected = "function" == typeof e ? e : null,
            this.promise = n
        }
        function h(t, e) {
            var n = !1;
            try {
                t(function(t) {
                    n || (n = !0,
                    s(e, t))
                }, function(t) {
                    n || (n = !0,
                    a(e, t))
                })
            } catch (t) {
                if (n)
                    return;
                n = !0,
                a(e, t)
            }
        }
        o.prototype.catch = function(t) {
            return this.then(null, t)
        }
        ,
        o.prototype.then = function(t, e) {
            var n = new this.constructor(r);
            return i(this, new u(t,e,n)),
            n
        }
        ,
        o.prototype.finally = t,
        o.all = function(e) {
            return new o(function(r, i) {
                if (!e || void 0 === e.length)
                    throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(e);
                if (0 === o.length)
                    return r([]);
                var s = o.length;
                function a(e, t) {
                    try {
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if ("function" == typeof n)
                                return void n.call(t, function(t) {
                                    a(e, t)
                                }, i)
                        }
                        o[e] = t,
                        0 == --s && r(o)
                    } catch (t) {
                        i(t)
                    }
                }
                for (var t = 0; t < o.length; t++)
                    a(t, o[t])
            }
            )
        }
        ,
        o.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                t(e)
            }
            )
        }
        ,
        o.reject = function(n) {
            return new o(function(t, e) {
                e(n)
            }
            )
        }
        ,
        o.race = function(i) {
            return new o(function(t, e) {
                for (var n = 0, r = i.length; n < r; n++)
                    i[n].then(t, e)
            }
            )
        }
        ,
        o._immediateFn = "function" == typeof setImmediate && function(t) {
            setImmediate(t)
        }
        || function(t) {
            e(t, 0)
        }
        ,
        o._unhandledRejectionFn = function(t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }
        ;
        var n = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if ("undefined" != typeof global)
                return global;
            throw new Error("unable to locate global object")
        }();
        "Promise"in n ? n.Promise.prototype.finally || (n.Promise.prototype.finally = t) : n.Promise = o
    }
    ,
    "object" == typeof e && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
    var n, w, r, C, c, I, P, p, d, F, i, o, s, a, u, h, l, f, g, q, j, T, m, y, v, b, x, S, _, k, A, O, B, D, E, R, U, z, M, N, L, H, W, G, V, Y, X, J, K, Q, Z, $, tt, et, nt, rt = function(Zt) {
        var $t = "1.3"
          , te = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243]
        };
        function ee(o) {
            var s = {};
            this.subscribe = function(t, e, n) {
                if ("function" != typeof e)
                    return !1;
                s.hasOwnProperty(t) || (s[t] = {});
                var r = Math.random().toString(35);
                return s[t][r] = [e, !!n],
                r
            }
            ,
            this.unsubscribe = function(t) {
                for (var e in s)
                    if (s[e][t])
                        return delete s[e][t],
                        !0;
                return !1
            }
            ,
            this.publish = function(t) {
                if (s.hasOwnProperty(t)) {
                    var e = Array.prototype.slice.call(arguments, 1)
                      , n = [];
                    for (var r in s[t]) {
                        var i = s[t][r];
                        try {
                            i[0].apply(o, e)
                        } catch (t) {
                            Zt.console && console.error("jsPDF PubSub Error", t.message, t)
                        }
                        i[1] && n.push(r)
                    }
                    n.length && n.forEach(this.unsubscribe)
                }
            }
        }
        function ne(t, e, n, r) {
            var i = {};
            "object" === re(t) && (t = (i = t).orientation,
            e = i.unit || e,
            n = i.format || n,
            r = i.compress || i.compressPdf || r),
            e = e || "mm",
            n = n || "a4",
            t = ("" + (t || "P")).toLowerCase();
            ("" + n).toLowerCase();
            var K, m, o, s, a, c, u, y, w, h, l, f, p, v = !!r && "function" == typeof Uint8Array, Q = i.textColor || "0 g", d = i.drawColor || "0 G", Z = i.fontSize || 16, $ = i.charSpace || 0, tt = i.R2L || !1, et = i.lineHeight || 1.15, g = i.lineWidth || .200025, b = "00000000000000000000000000000000", x = 2, S = !1, _ = [], nt = {}, k = {}, A = [], C = {}, I = {}, P = {}, F = {}, q = null, j = 0, T = [], O = [], B = [], D = [], E = [], R = 0, U = 0, z = 0, M = {}, N = {}, L = [], H = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            }, W = {}, G = "compat", rt = "advanced", it = G, ot = new ee(W), V = i.hotfixes || [], Y = function(t) {
                var e, n = t.ch1, r = t.ch2, i = t.ch3, o = t.ch4, s = (t.precision,
                "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);
                if ("string" == typeof n && "#" !== n.charAt(0)) {
                    var a = new RGBColor(n);
                    a.ok && (n = a.toHex())
                }
                if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]),
                "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
                    var c = parseInt(n.substr(1), 16);
                    n = c >> 16 & 255,
                    r = c >> 8 & 255,
                    i = 255 & c
                }
                if (void 0 === r || void 0 === o && n === r && r === i)
                    if ("string" == typeof n)
                        e = n + " " + s[0];
                    else
                        switch (t.precision) {
                        case 2:
                            e = ct(n / 255) + " " + s[0];
                            break;
                        case 3:
                        default:
                            e = ut(n / 255) + " " + s[0]
                        }
                else if (void 0 === o || "object" === re(o)) {
                    if ("string" == typeof n)
                        e = [n, r, i, s[1]].join(" ");
                    else
                        switch (t.precision) {
                        case 2:
                            e = [ct(n / 255), ct(r / 255), ct(i / 255), s[1]].join(" ");
                            break;
                        default:
                        case 3:
                            e = [ut(n / 255), ut(r / 255), ut(i / 255), s[1]].join(" ")
                        }
                    o && 0 === o.a && (e = ["255", "255", "255", s[1]].join(" "))
                } else if ("string" == typeof n)
                    e = [n, r, i, o, s[2]].join(" ");
                else
                    switch (t.precision) {
                    case 2:
                        e = [ct(n), ct(r), ct(i), ct(o), s[2]].join(" ");
                        break;
                    case 3:
                    default:
                        e = [ut(n), ut(r), ut(i), ut(o), s[2]].join(" ")
                    }
                return e
            }, X = function(t) {
                var e = function(t) {
                    return ("0" + parseInt(t)).slice(-2)
                }
                  , n = t.getTimezoneOffset()
                  , r = n < 0 ? "+" : "-"
                  , i = Math.floor(Math.abs(n / 60))
                  , o = Math.abs(n % 60)
                  , s = [r, e(i), "'", e(o), "'"].join("");
                return ["D:", t.getFullYear(), e(t.getMonth() + 1), e(t.getDate()), e(t.getHours()), e(t.getMinutes()), e(t.getSeconds()), s].join("")
            }, J = function(t) {
                var e;
                return void 0 === re(t) && (t = new Date),
                e = "object" === re(t) && "[object Date]" === Object.prototype.toString.call(t) ? X(t) : /^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t) ? t : X(new Date),
                p = e
            }, st = function(t) {
                var e = p;
                return "jsDate" === t && (e = function(t) {
                    var e = parseInt(t.substr(2, 4), 10)
                      , n = parseInt(t.substr(6, 2), 10) - 1
                      , r = parseInt(t.substr(8, 2), 10)
                      , i = parseInt(t.substr(10, 2), 10)
                      , o = parseInt(t.substr(12, 2), 10)
                      , s = parseInt(t.substr(14, 2), 10);
                    parseInt(t.substr(16, 2), 10),
                    parseInt(t.substr(20, 2), 10);
                    return new Date(e,n,r,i,o,s,0)
                }(p)),
                e
            }, at = function(t) {
                return t = t || "12345678901234567890123456789012".split("").map(function() {
                    return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
                }).join(""),
                b = t
            }, ct = function(t) {
                return t.toFixed(2)
            }, ut = function(t) {
                return t.toFixed(3)
            }, ht = function(t) {
                return t.toFixed(16).replace(/0+$/, "")
            }, lt = function(t) {
                return it === G ? t * m : it === rt ? t : void 0
            }, ft = function(t) {
                return lt((e = t,
                it === G ? w - e : it === rt ? e : void 0));
                var e
            }, pt = function(t) {
                var e = "00" + t;
                return e.substr(e.length - 2)
            }, dt = function(t) {
                if (it !== rt)
                    throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
            }, gt = function(t) {
                t = "string" == typeof t ? t : t.toString(),
                S ? T[s].push(t) : (z += t.length + 1,
                D.push(t))
            }, mt = function() {
                return _[++x] = z,
                gt(x + " 0 obj"),
                x
            }, yt = function(t) {
                gt("stream"),
                gt(t),
                gt("endstream")
            }, wt = function(t) {
                t.objectNumber = mt(),
                gt("<<"),
                gt("/Type /XObject"),
                gt("/Subtype /Form"),
                gt("/BBox [" + [ht(t.x), ht(t.y), ht(t.x + t.width), ht(t.y + t.height)].join(" ") + "]"),
                gt("/Matrix [" + t.matrix.toString() + "]");
                var e = t.pages[1].join("\n");
                gt("/Length " + e.length),
                gt(">>"),
                yt(e),
                gt("endobj")
            }, vt = function(t, e) {
                e || (e = 21);
                var n = mt()
                  , r = function(t, e) {
                    var n, r = [], i = 1 / (e - 1);
                    for (n = 0; n < 1; n += i)
                        r.push(n);
                    if (r.push(1),
                    0 != t[0].offset) {
                        var o = {
                            offset: 0,
                            color: t[0].color
                        };
                        t.unshift(o)
                    }
                    if (1 != t[t.length - 1].offset) {
                        var s = {
                            offset: 1,
                            color: t[t.length - 1].color
                        };
                        t.push(s)
                    }
                    for (var a = "", c = 0, u = 0; u < r.length; u++) {
                        for (n = r[u]; n > t[c + 1].offset; )
                            c++;
                        var h = t[c].offset
                          , l = (n - h) / (t[c + 1].offset - h)
                          , f = t[c].color
                          , p = t[c + 1].color;
                        a += pt(Math.round((1 - l) * f[0] + l * p[0]).toString(16)) + pt(Math.round((1 - l) * f[1] + l * p[1]).toString(16)) + pt(Math.round((1 - l) * f[2] + l * p[2]).toString(16))
                    }
                    return a.trim()
                }(t.colors, e);
                gt("<< /FunctionType 0"),
                gt("/Domain [0.0 1.0]"),
                gt("/Size [" + e + "]"),
                gt("/BitsPerSample 8"),
                gt("/Range [0.0 1.0 0.0 1.0 0.0 1.0]"),
                gt("/Decode [0.0 1.0 0.0 1.0 0.0 1.0]"),
                gt("/Length " + r.length),
                gt("/Filter /ASCIIHexDecode"),
                gt(">>"),
                yt(r),
                gt("endobj"),
                t.objectNumber = mt(),
                gt("<< /ShadingType " + t.type),
                gt("/ColorSpace /DeviceRGB");
                var i = "/Coords [" + ht(parseFloat(t.coords[0])) + " " + ht(parseFloat(t.coords[1])) + " ";
                2 === t.type ? i += ht(parseFloat(t.coords[2])) + " " + ht(parseFloat(t.coords[3])) : i += ht(parseFloat(t.coords[2])) + " " + ht(parseFloat(t.coords[3])) + " " + ht(parseFloat(t.coords[4])) + " " + ht(parseFloat(t.coords[5])),
                gt(i += "]"),
                t.matrix && gt("/Matrix [" + t.matrix.toString() + "]"),
                gt("/Function " + n + " 0 R"),
                gt("/Extend [true true]"),
                gt(">>"),
                gt("endobj")
            }, bt = function(t) {
                for (var e in t.objectNumber = mt(),
                gt("<<"),
                t)
                    switch (e) {
                    case "opacity":
                        gt("/ca " + ct(t[e]));
                        break;
                    case "stroke-opacity":
                        gt("/CA " + ct(t[e]))
                    }
                gt(">>"),
                gt("endobj")
            }, xt = function() {
                for (var t in gt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                gt("/Font <<"),
                nt)
                    nt.hasOwnProperty(t) && gt("/" + t + " " + nt[t].objectNumber + " 0 R");
                gt(">>"),
                gt("/Shading <<"),
                function() {
                    for (var t in C)
                        C.hasOwnProperty(t) && C[t]instanceof W.ShadingPattern && 0 <= C[t].objectNumber && gt("/" + t + " " + C[t].objectNumber + " 0 R");
                    ot.publish("putShadingPatternDict")
                }(),
                gt(">>"),
                gt("/Pattern <<"),
                function() {
                    for (var t in C)
                        C.hasOwnProperty(t) && C[t]instanceof W.TilingPattern && 0 <= C[t].objectNumber && gt("/" + t + " " + C[t].objectNumber + " 0 R");
                    ot.publish("putTilingPatternDict")
                }(),
                gt(">>"),
                gt("/ExtGState <<"),
                function() {
                    var t;
                    for (t in P)
                        P.hasOwnProperty(t) && 0 <= P[t].objectNumber && gt("/" + t + " " + P[t].objectNumber + " 0 R");
                    ot.publish("putGStateDict")
                }(),
                gt(">>"),
                gt("/XObject <<"),
                function() {
                    for (var t in M)
                        M.hasOwnProperty(t) && 0 <= M[t].objectNumber && gt("/" + t + " " + M[t].objectNumber + " 0 R");
                    ot.publish("putXobjectDict")
                }(),
                gt(">>")
            }, St = function() {
                !function() {
                    for (var t in nt)
                        nt.hasOwnProperty(t) && (e = nt[t],
                        ot.publish("putFont", {
                            font: e,
                            out: gt,
                            newObject: mt,
                            putStream: yt
                        }),
                        !0 !== e.isAlreadyPutted && (e.objectNumber = mt(),
                        gt("<<"),
                        gt("/Type /Font"),
                        gt("/BaseFont /" + e.postScriptName),
                        gt("/Subtype /Type1"),
                        "string" == typeof e.encoding && gt("/Encoding /" + e.encoding),
                        gt("/FirstChar 32"),
                        gt("/LastChar 255"),
                        gt(">>"),
                        gt("endobj")));
                    var e
                }(),
                function() {
                    var t;
                    for (t in P)
                        P.hasOwnProperty(t) && bt(P[t])
                }(),
                function() {
                    for (var t in M)
                        M.hasOwnProperty(t) && wt(M[t])
                }(),
                function() {
                    var t, e, n;
                    for (t in C)
                        C.hasOwnProperty(t) && (C[t]instanceof W.ShadingPattern ? vt(C[t]) : C[t]instanceof W.TilingPattern && (e = C[t],
                        n = mt(),
                        gt("<<"),
                        xt(),
                        gt(">>"),
                        gt("endobj"),
                        e.objectNumber = mt(),
                        gt("<< /Type /Pattern"),
                        gt("/PatternType 1"),
                        gt("/PaintType 1"),
                        gt("/TilingType 1"),
                        gt("/BBox [" + e.boundingBox.map(ht).join(" ") + "]"),
                        gt("/XStep " + ht(e.xStep)),
                        gt("/YStep " + ht(e.yStep)),
                        gt("/Length " + e.stream.length),
                        gt("/Resources " + n + " 0 R"),
                        e.matrix && gt("/Matrix [" + e.matrix.toString() + "]"),
                        gt(">>"),
                        yt(e.stream),
                        gt("endobj")))
                }(),
                ot.publish("putResources"),
                _[2] = z,
                gt("2 0 obj"),
                gt("<<"),
                xt(),
                gt(">>"),
                gt("endobj"),
                ot.publish("postPutResources")
            }, _t = function(t, e, n) {
                k.hasOwnProperty(e) || (k[e] = {}),
                k[e][n] = t
            }, kt = function(t, e, n, r, i) {
                i = i || !1;
                var o = "F" + (Object.keys(nt).length + 1).toString(10)
                  , s = {
                    id: o,
                    postScriptName: t,
                    fontName: e,
                    fontStyle: n,
                    encoding: r,
                    isStandardFont: i,
                    metadata: {}
                };
                return ot.publish("addFont", {
                    font: s,
                    instance: this
                }),
                void 0 !== o && (nt[o] = s,
                _t(o, e, n)),
                o
            }, At = function(t, e) {
                return new Ct(t.a * e.a + t.b * e.c,t.a * e.b + t.b * e.d,t.c * e.a + t.d * e.c,t.c * e.b + t.d * e.d,t.e * e.a + t.f * e.c + e.e,t.e * e.b + t.f * e.d + e.f)
            }, Ct = function(t, e, n, r, i, o) {
                this.a = t,
                this.b = e,
                this.c = n,
                this.d = r,
                this.e = i,
                this.f = o
            };
            Ct.prototype = {
                toString: function() {
                    return [ht(this.a), ht(this.b), ht(this.c), ht(this.d), ht(this.e), ht(this.f)].join(" ")
                },
                inversed: function() {
                    var t = this.a
                      , e = this.b
                      , n = this.c
                      , r = this.d
                      , i = this.e
                      , o = this.f
                      , s = 1 / (t * r - e * n)
                      , a = r * s
                      , c = -e * s
                      , u = -n * s
                      , h = t * s;
                    return new Ct(a,c,u,h,-a * i - u * o,-c * i - h * o)
                }
            };
            var It = new Ct(1,0,0,1,0,0)
              , Pt = function() {
                this.page = j,
                this.currentPage = s,
                this.pages = T.slice(0),
                this.pagedim = B.slice(0),
                this.pagesContext = O.slice(0),
                this.x = a,
                this.y = c,
                this.matrix = u,
                this.width = y,
                this.height = w,
                this.id = "",
                this.objectNumber = -1
            };
            Pt.prototype = {
                restore: function() {
                    j = this.page,
                    s = this.currentPage,
                    O = this.pagesContext,
                    B = this.pagedim,
                    T = this.pages,
                    a = this.x,
                    c = this.y,
                    u = this.matrix,
                    y = this.width,
                    w = this.height
                }
            };
            var Ft, qt = function(t, e, n, r, i) {
                L.push(new Pt),
                j = s = 0,
                T = [],
                a = t,
                c = e,
                u = i,
                Bt(n, r)
            }, jt = function(t, e) {
                if (!I[t]) {
                    var n = (e instanceof W.ShadingPattern ? "Sh" : "P") + (Object.keys(C).length + 1).toString(10);
                    e.id = n,
                    I[t] = n,
                    C[n] = e,
                    ot.publish("addPattern", e)
                }
            }, Tt = function(t, e) {
                if (!t || !F[t]) {
                    var n = !1;
                    for (var r in P)
                        if (P.hasOwnProperty(r) && P[r].equals(e)) {
                            n = !0;
                            break
                        }
                    if (n)
                        e = P[r];
                    else {
                        var i = "GS" + (Object.keys(P).length + 1).toString(10);
                        (P[i] = e).id = i
                    }
                    return t && (F[t] = e.id),
                    ot.publish("addGState", e),
                    e
                }
            }, Ot = function(t, e) {
                return function(t, e) {
                    var n, r, i, o, s, a, c, u, h;
                    if (i = (e = e || {}).sourceEncoding || "Unicode",
                    s = e.outputEncoding,
                    (e.autoencode || s) && nt[K].metadata && nt[K].metadata[i] && nt[K].metadata[i].encoding && (o = nt[K].metadata[i].encoding,
                    !s && nt[K].encoding && (s = nt[K].encoding),
                    !s && o.codePages && (s = o.codePages[0]),
                    "string" == typeof s && (s = o[s]),
                    s)) {
                        for (c = !1,
                        a = [],
                        n = 0,
                        r = t.length; n < r; n++)
                            (u = s[t.charCodeAt(n)]) ? a.push(String.fromCharCode(u)) : a.push(t[n]),
                            a[n].charCodeAt(0) >> 8 && (c = !0);
                        t = a.join("")
                    }
                    for (n = t.length; void 0 === c && 0 !== n; )
                        t.charCodeAt(n - 1) >> 8 && (c = !0),
                        n--;
                    if (!c)
                        return t;
                    for (a = e.noBOM ? [] : [254, 255],
                    n = 0,
                    r = t.length; n < r; n++) {
                        if ((h = (u = t.charCodeAt(n)) >> 8) >> 8)
                            throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                        a.push(h),
                        a.push(u - (h << 8))
                    }
                    return String.fromCharCode.apply(void 0, a)
                }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }, Bt = function(t, e) {
                S = !0,
                T[++j] = [],
                B[j] = {
                    width: Number(t) || y,
                    height: Number(e) || w
                },
                O[j] = {},
                Et(j)
            }, Dt = function(t, e) {
                var n = "string" == typeof e && e.toLowerCase();
                if ("string" == typeof t) {
                    var r = t.toLowerCase();
                    te.hasOwnProperty(r) && (t = te[r][0] / m,
                    e = te[r][1] / m)
                }
                if (Array.isArray(t) && (e = t[1],
                t = t[0]),
                n) {
                    switch (n.substr(0, 1)) {
                    case "l":
                        t < e && (n = "s");
                        break;
                    case "p":
                        e < t && (n = "s")
                    }
                    "s" === n && (o = t,
                    t = e,
                    e = o)
                }
                Bt(t, e),
                gt(ht(g * m) + " w"),
                gt(d),
                0 !== R && gt(R + " J"),
                0 !== U && gt(U + " j"),
                ot.publish("addPage", {
                    pageNumber: j
                })
            }, Et = function(t) {
                0 < t && t <= j && (y = B[s = t].width,
                w = B[t].height)
            }, Rt = function(t, e, n) {
                var r, i = void 0;
                return n = n || {},
                t = void 0 !== t ? t : nt[K].fontName,
                e = void 0 !== e ? e : nt[K].fontStyle,
                r = t.toLowerCase(),
                void 0 !== k[r] && void 0 !== k[r][e] ? i = k[r][e] : void 0 !== k[t] && void 0 !== k[t][e] ? i = k[t][e] : !1 === n.disableWarning && console.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."),
                i || n.noFallback || null == (i = k.times[e]) && (i = k.times.normal),
                i
            }, Ut = function() {
                S = !1,
                x = 2,
                z = 0,
                D = [],
                _ = [],
                E = [],
                ot.publish("buildDocument"),
                gt("%PDF-" + $t),
                gt("%ºß¬à"),
                function() {
                    var t, e, n, r, i, o, s, a, c, u, h, l, f = [];
                    for (s = Zt.adler32cs || ne.API.adler32cs,
                    v && void 0 === s && (v = !1),
                    t = 1; t <= j; t++) {
                        if (f.push(mt()),
                        a = (y = B[t].width) * m,
                        c = (w = B[t].height) * m,
                        gt("<</Type /Page"),
                        gt("/Parent 1 0 R"),
                        gt("/Resources 2 0 R"),
                        gt("/MediaBox [0 0 " + ht(a) + " " + ht(c) + "]"),
                        ot.publish("putPage", {
                            pageNumber: t,
                            page: T[t]
                        }),
                        gt("/Contents " + (x + 1) + " 0 R"),
                        gt(">>"),
                        gt("endobj"),
                        e = T[t].join("\n"),
                        it === rt && (e += "\nQ"),
                        mt(),
                        v) {
                            for (n = [],
                            r = e.length; r--; )
                                n[r] = e.charCodeAt(r);
                            o = s.from(e),
                            e = (i = new Deflater(6)).append(new Uint8Array(n)),
                            u = e,
                            h = i.flush(),
                            l = void 0,
                            (l = new Uint8Array(u.byteLength + h.byteLength)).set(new Uint8Array(u), 0),
                            l.set(new Uint8Array(h), u.byteLength),
                            e = l,
                            (n = new Uint8Array(e.byteLength + 6)).set(new Uint8Array([120, 156])),
                            n.set(e, 2),
                            n.set(new Uint8Array([255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255]), e.byteLength + 2);
                            for (var p = [], d = 0; 65535 * d < n.length; d++)
                                p.push(String.fromCharCode.apply(null, n.subarray(65535 * d, 65535 * (d + 1))));
                            e = p.join(""),
                            gt("<</Length " + e.length + " /Filter [/FlateDecode]>>")
                        } else
                            gt("<</Length " + e.length + ">>");
                        yt(e),
                        gt("endobj")
                    }
                    _[1] = z,
                    gt("1 0 obj"),
                    gt("<</Type /Pages");
                    var g = "/Kids [";
                    for (r = 0; r < j; r++)
                        g += f[r] + " 0 R ";
                    gt(g + "]"),
                    gt("/Count " + j),
                    gt(">>"),
                    gt("endobj"),
                    ot.publish("postPutPages")
                }(),
                function() {
                    ot.publish("putAdditionalObjects");
                    for (var t = 0; t < E.length; t++) {
                        var e = E[t];
                        _[e.objId] = z,
                        gt(e.objId + " 0 obj"),
                        gt(e.content),
                        gt("endobj")
                    }
                    x += E.length,
                    ot.publish("postPutAdditionalObjects")
                }(),
                St(),
                mt(),
                gt("<<"),
                function() {
                    for (var t in gt("/Producer (jsPDF " + ne.version + ")"),
                    H)
                        H.hasOwnProperty(t) && H[t] && gt("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + Ot(H[t]) + ")");
                    gt("/CreationDate (" + p + ")")
                }(),
                gt(">>"),
                gt("endobj"),
                mt(),
                gt("<<"),
                function() {
                    switch (gt("/Type /Catalog"),
                    gt("/Pages 1 0 R"),
                    l || (l = "fullwidth"),
                    l) {
                    case "fullwidth":
                        gt("/OpenAction [3 0 R /FitH null]");
                        break;
                    case "fullheight":
                        gt("/OpenAction [3 0 R /FitV null]");
                        break;
                    case "fullpage":
                        gt("/OpenAction [3 0 R /Fit]");
                        break;
                    case "original":
                        gt("/OpenAction [3 0 R /XYZ null null 1]");
                        break;
                    default:
                        var t = "" + l;
                        "%" === t.substr(t.length - 1) && (l = parseInt(l) / 100),
                        "number" == typeof l && gt("/OpenAction [3 0 R /XYZ null null " + ct(l) + "]")
                    }
                    switch (f || (f = "continuous"),
                    f) {
                    case "continuous":
                        gt("/PageLayout /OneColumn");
                        break;
                    case "single":
                        gt("/PageLayout /SinglePage");
                        break;
                    case "two":
                    case "twoleft":
                        gt("/PageLayout /TwoColumnLeft");
                        break;
                    case "tworight":
                        gt("/PageLayout /TwoColumnRight")
                    }
                    h && gt("/PageMode /" + h),
                    ot.publish("putCatalog")
                }(),
                gt(">>"),
                gt("endobj");
                var t, e = z, n = "0000000000";
                for (gt("xref"),
                gt("0 " + (x + 1)),
                gt(n + " 65535 f "),
                t = 1; t <= x; t++) {
                    var r = _[t];
                    gt("function" == typeof r ? (n + _[t]()).slice(-10) + " 00000 n " : (n + _[t]).slice(-10) + " 00000 n ")
                }
                return gt("trailer"),
                gt("<<"),
                gt("/Size " + (x + 1)),
                gt("/Root " + x + " 0 R"),
                gt("/Info " + (x - 1) + " 0 R"),
                gt("/ID [ <" + b + "> <" + b + "> ]"),
                gt(">>"),
                gt("startxref"),
                gt("" + e),
                gt("%%EOF"),
                S = !0,
                D.join("\n")
            }, zt = function(t) {
                var e = it === G ? "S" : "n";
                return "D" === t ? e = "S" : "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t),
                e
            }, Mt = function(t, e, n) {
                null === t || it === rt && void 0 === t || (t = zt(t),
                e ? (n || (n = {
                    matrix: It
                }),
                n instanceof Ct && (n = {
                    matrix: n
                }),
                n.key = e,
                n || (n = It),
                Nt(n, t)) : gt(t))
            }, Nt = function(t, e) {
                var n = I[t.key]
                  , r = C[n];
                if (r instanceof W.ShadingPattern)
                    gt("q"),
                    gt(Lt(e)),
                    r.gState && W.setGState(r.gState),
                    gt(t.matrix.toString() + " cm"),
                    gt("/" + n + " sh"),
                    gt("Q");
                else if (r instanceof W.TilingPattern) {
                    var i = new Ct(1,0,0,-1,0,w);
                    t.matrix && (i = At(t.matrix || It, i),
                    n = r.createClone(t.key, t.boundingBox, t.xStep, t.yStep, i).id),
                    gt("q"),
                    gt("/Pattern cs"),
                    gt("/" + n + " scn"),
                    r.gState && W.setGState(r.gState),
                    gt(e),
                    gt("Q")
                }
            }, Lt = function(t) {
                switch (t) {
                case "f":
                case "F":
                    return "W n";
                case "f*":
                    return "W* n";
                case "B":
                    return "W S";
                case "B*":
                    return "W* S";
                case "S":
                    return "W S";
                case "n":
                    return "W n"
                }
            }, Ht = function() {
                for (var t = Ut(), e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--; )
                    r[e] = t.charCodeAt(e);
                return n
            }, Wt = function() {
                return new Blob([Ht()],{
                    type: "application/pdf"
                })
            }, Gt = ((Ft = function(t, e) {
                "string" == typeof e ? e = {
                    filename: e
                } : (e = e || {}).filename = e.filename || "generated.pdf";
                var n = "dataur" === ("" + t).substr(0, 6) ? "data:application/pdf;filename=" + e.filename + ";base64," + btoa(Ut()) : 0;
                switch (t) {
                case void 0:
                    return Ut();
                case "save":
                    if ("object" === ("undefined" == typeof navigator ? "undefined" : re(navigator)) && navigator.getUserMedia && (void 0 === Zt.URL || void 0 === Zt.URL.createObjectURL))
                        return W.output("dataurlnewwindow");
                    ie(Wt(), e.filename),
                    "function" == typeof ie.unload && Zt.setTimeout && setTimeout(ie.unload, 911);
                    break;
                case "arraybuffer":
                    return Ht();
                case "blob":
                    return Wt();
                case "bloburi":
                case "bloburl":
                    return Zt.URL && Zt.URL.createObjectURL(Wt()) || void 0;
                case "datauristring":
                case "dataurlstring":
                    return n;
                case "dataurlnewwindow":
                    var r = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring") + '"></iframe></body></html>'
                      , i = Zt.open();
                    if (null !== i && i.document.write(r),
                    i || "undefined" == typeof safari)
                        return i;
                case "datauri":
                case "dataurl":
                    return Zt.document.location.href = n;
                default:
                    throw new Error('Output type "' + t + '" is not supported.')
                }
            }
            ).foo = function() {
                try {
                    return Ft.apply(this, arguments)
                } catch (t) {
                    var e = t.stack || "";
                    ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                    var n = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
                    if (!Zt.console)
                        throw new Error(n);
                    Zt.console.error(n, t),
                    Zt.alert && alert(n)
                }
            }
            ,
            (Ft.foo.bar = Ft).foo), Vt = function(t) {
                return !0 === Array.isArray(V) && -1 < V.indexOf(t)
            };
            switch (e) {
            case "pt":
                m = 1;
                break;
            case "mm":
                m = 72 / 25.4000508;
                break;
            case "cm":
                m = 72 / 2.54000508;
                break;
            case "in":
                m = 72;
                break;
            case "px":
                m = 1 == Vt("px_scaling") ? .75 : 96 / 72;
                break;
            case "pc":
            case "em":
                m = 12;
                break;
            case "ex":
                m = 6;
                break;
            default:
                throw "Invalid unit: " + e
            }
            function Yt() {
                this.saveGraphicsState(),
                gt(new Ct(m,0,0,-m,0,w * m).toString() + " cm"),
                this.setFontSize(this.getFontSize() / m),
                it = rt
            }
            function Xt() {
                this.restoreGraphicsState(),
                it = G
            }
            J(),
            at(),
            W.internal = {
                pdfEscape: Ot,
                getStyle: zt,
                getFont: function() {
                    return nt[Rt.apply(W, arguments)]
                },
                getFontSize: function() {
                    return Z
                },
                getCharSpace: function() {
                    return $
                },
                getTextColor: function() {
                    var t = Q.split(" ");
                    if (2 === t.length && "g" === t[1]) {
                        var e = parseFloat(t[0]);
                        t = [e, e, e, "r"]
                    }
                    for (var n = "#", r = 0; r < 3; r++)
                        n += ("0" + Math.floor(255 * parseFloat(t[r])).toString(16)).slice(-2);
                    return n
                },
                getLineHeight: function() {
                    return Z * et
                },
                write: function(t) {
                    gt(1 === arguments.length ? t : Array.prototype.join.call(arguments, " "))
                },
                getCoordinateString: function(t) {
                    return ht(lt(t))
                },
                getVerticalCoordinateString: function(t) {
                    return ht(ft(t))
                },
                collections: {},
                newObject: mt,
                newAdditionalObject: function() {
                    var t = 2 * T.length + 1
                      , e = {
                        objId: t += E.length,
                        content: ""
                    };
                    return E.push(e),
                    e
                },
                newObjectDeferred: function() {
                    return _[++x] = function() {
                        return z
                    }
                    ,
                    x
                },
                newObjectDeferredBegin: function(t) {
                    _[t] = z
                },
                putStream: yt,
                events: ot,
                scaleFactor: m,
                pageSize: {
                    getWidth: function() {
                        return y
                    },
                    getHeight: function() {
                        return w
                    }
                },
                output: function(t, e) {
                    return Gt(t, e)
                },
                getNumberOfPages: function() {
                    return T.length - 1
                },
                pages: T,
                out: gt,
                f2: ct,
                getPageInfo: function(t) {
                    return {
                        objId: 2 * (t - 1) + 3,
                        pageNumber: t,
                        pageContext: O[t]
                    }
                },
                getCurrentPageInfo: function() {
                    return {
                        objId: 2 * (s - 1) + 3,
                        pageNumber: s,
                        pageContext: O[s]
                    }
                },
                getPDFVersion: function() {
                    return $t
                },
                hasHotfix: Vt
            },
            W.advancedAPI = function(t) {
                var e = it === G;
                return e && Yt.call(this),
                "function" != typeof t || (t(this),
                e && Xt.call(this)),
                this
            }
            ,
            W.compatAPI = function(t) {
                var e = it === rt;
                return e && Xt.call(this),
                "function" != typeof t || (t(this),
                e && Yt.call(this)),
                this
            }
            ,
            W.isAdvancedAPI = function() {
                return it === rt
            }
            ,
            W.comment = function(t) {
                return gt("#" + t),
                this
            }
            ,
            W.GState = function(t) {
                var e = "opacity,stroke-opacity".split(",");
                for (var n in t)
                    t.hasOwnProperty(n) && 0 <= e.indexOf(n) && (this[n] = t[n]);
                this.id = "",
                this.objectNumber = -1
            }
            ,
            W.GState.prototype.equals = function(t) {
                var e = "id,objectNumber,equals";
                if (!t || re(t) !== re(this))
                    return !1;
                var n = 0;
                for (var r in this)
                    if (!(0 <= e.indexOf(r))) {
                        if (this.hasOwnProperty(r) && !t.hasOwnProperty(r))
                            return !1;
                        if (this[r] !== t[r])
                            return !1;
                        n++
                    }
                for (var r in t)
                    t.hasOwnProperty(r) && e.indexOf(r) < 0 && n--;
                return 0 === n
            }
            ,
            W.addGState = function(t, e) {
                return Tt(t, e),
                this
            }
            ,
            W.addPage = function(t, e) {
                return Dt.apply(this, arguments),
                this
            }
            ,
            W.setPage = function(t) {
                return Et.apply(this, arguments),
                this
            }
            ,
            W.insertPage = function(t) {
                return this.addPage(),
                this.movePage(s, t),
                this
            }
            ,
            W.movePage = function(t, e) {
                var n, r, i, o;
                if (e < t) {
                    for (i = T[t],
                    r = B[t],
                    n = O[t],
                    o = t; e < o; o--)
                        T[o] = T[o - 1],
                        B[o] = B[o - 1],
                        O[o] = O[o - 1];
                    T[e] = i,
                    B[e] = r,
                    O[e] = n,
                    this.setPage(e)
                } else if (t < e) {
                    for (i = T[t],
                    r = B[t],
                    n = O[t],
                    o = t; o < e; o++)
                        T[o] = T[o + 1],
                        B[o] = B[o + 1],
                        O[o] = O[o + 1];
                    T[e] = i,
                    B[e] = r,
                    O[e] = n,
                    this.setPage(e)
                }
                return this
            }
            ,
            W.deletePage = function() {
                return function(t) {
                    0 < t && t <= j && (T.splice(t, 1),
                    B.splice(t, 1),
                    --j < s && (s = j),
                    this.setPage(s))
                }
                .apply(this, arguments),
                this
            }
            ,
            W.setCreationDate = function(t) {
                return J(t),
                this
            }
            ,
            W.getCreationDate = function(t) {
                return st(t)
            }
            ,
            W.setFileId = function(t) {
                return at(t),
                this
            }
            ,
            W.getFileId = function() {
                return b
            }
            ,
            W.setDisplayMode = function(t, e, n) {
                if (l = t,
                f = e,
                -1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(h = n))
                    throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + n + '" is not recognized.');
                return this
            }
            ,
            W.saveGraphicsState = function() {
                return gt("q"),
                A.push({
                    key: K,
                    size: Z,
                    color: Q
                }),
                this
            }
            ,
            W.restoreGraphicsState = function() {
                gt("Q");
                var t = A.pop();
                return K = t.key,
                Z = t.size,
                Q = t.color,
                q = null,
                this
            }
            ,
            W.setCurrentTransformationMatrix = function(t) {
                return dt("setCurrentTransformationMatrix()"),
                gt(t.toString() + " cm"),
                this
            }
            ,
            W.beginFormObject = function(t, e, n, r, i) {
                return dt("beginFormObject()"),
                qt(t, e, n, r, i),
                this
            }
            ,
            W.endFormObject = function(t) {
                return dt("endFormObject()"),
                function(t) {
                    if (!N[t]) {
                        var e = new Pt
                          , n = "Xo" + (Object.keys(M).length + 1).toString(10);
                        e.id = n,
                        N[t] = n,
                        M[n] = e,
                        ot.publish("addFormObject", e),
                        L.pop().restore()
                    }
                }(t),
                this
            }
            ,
            W.doFormObject = function(t, e) {
                dt("doFormObject()");
                var n = M[N[t]];
                return gt("q"),
                gt(e.toString() + " cm"),
                gt("/" + n.id + " Do"),
                gt("Q"),
                this
            }
            ,
            W.getFormObject = function(t) {
                var e = M[N[t]];
                return {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    matrix: e.matrix
                }
            }
            ,
            W.Matrix = Ct,
            W.matrixMult = At,
            W.unitMatrix = It;
            var Jt = function(t, e) {
                this.gState = t,
                this.matrix = e,
                this.id = "",
                this.objectNumber = -1
            };
            function Kt(t, e) {
                "object" === re(e) ? Nt(e, t) : gt(t)
            }
            for (var Qt in W.ShadingPattern = function(t, e, n, r, i) {
                dt("ShadingPattern"),
                this.type = "axial" === t ? 2 : 3,
                this.coords = e,
                this.colors = n,
                Jt.call(this, r, i)
            }
            ,
            W.TilingPattern = function(t, e, n, r, i) {
                dt("TilingPattern"),
                this.boundingBox = t,
                this.xStep = e,
                this.yStep = n,
                this.stream = "",
                this.cloneIndex = 0,
                Jt.call(this, r, i)
            }
            ,
            W.TilingPattern.prototype = {
                createClone: function(t, e, n, r, i) {
                    var o = new W.TilingPattern(e || this.boundingBox,n || this.xStep,r || this.yStep,this.gState,i || this.matrix);
                    o.stream = this.stream;
                    var s = t + "$$" + this.cloneIndex++ + "$$";
                    return jt(s, o),
                    o
                }
            },
            W.addShadingPattern = function(t, e) {
                return dt("addShadingPattern()"),
                jt(t, e),
                this
            }
            ,
            W.beginTilingPattern = function(t) {
                dt("beginTilingPattern()"),
                qt(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix)
            }
            ,
            W.endTilingPattern = function(t, e) {
                dt("endTilingPattern()"),
                e.stream = T[s].join("\n"),
                jt(t, e),
                ot.publish("endTilingPattern", e),
                L.pop().restore()
            }
            ,
            W.text = function(t, e, n, i, r) {
                void 0 !== r && r instanceof Ct && dt("The transform parameter of text() with a Matrix value");
                var o, s, a = "", c = et, u = this;
                function h(t) {
                    for (var e, n = t.concat(), r = [], i = n.length; i--; )
                        "string" == typeof (e = n.shift()) ? r.push(e) : "[object Array]" === Object.prototype.toString.call(t) && 1 === e.length ? r.push(e[0]) : r.push([e[0], e[1], e[2]]);
                    return r
                }
                function l(t, e) {
                    var n;
                    if ("string" == typeof t)
                        n = e(t)[0];
                    else if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var r, i, o = t.concat(), s = [], a = o.length; a--; )
                            "string" == typeof (r = o.shift()) ? s.push(e(r)[0]) : "[object Array]" === Object.prototype.toString.call(r) && "string" === r[0] && (i = e(r[0], r[1], r[2]),
                            s.push([i[0], i[1], i[2]]));
                        n = s
                    }
                    return n
                }
                "number" == typeof t && (s = n,
                n = e,
                e = t,
                t = s);
                var f = arguments[3]
                  , p = r
                  , d = arguments[5];
                "object" === re(f) && null !== f || ("string" == typeof p && (d = p,
                p = null),
                "string" == typeof f && (d = f,
                f = null),
                "number" == typeof f && (p = f,
                f = null),
                i = {
                    flags: f,
                    angle: p,
                    align: d
                });
                var g = !1
                  , m = !0;
                if ("string" == typeof t)
                    g = !0;
                else if ("[object Array]" === Object.prototype.toString.call(t)) {
                    for (var y, w = t.concat(), v = [], b = w.length; b--; )
                        ("string" != typeof (y = w.shift()) || "[object Array]" === Object.prototype.toString.call(y) && "string" != typeof y[0]) && (m = !1);
                    g = m
                }
                if (!1 === g)
                    throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                var x = nt[K].encoding;
                "WinAnsiEncoding" !== x && "StandardEncoding" !== x || (t = l(t, function(t, e, n) {
                    return [(r = t,
                    r = r.split("\t").join(Array(i.TabLen || 9).join(" ")),
                    Ot(r, f)), e, n];
                    var r
                })),
                "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]),
                0 < (D = i.maxWidth || 0) && ("string" == typeof t ? t = u.splitTextToSize(t, D) : "[object Array]" === Object.prototype.toString.call(t) && (t = u.splitTextToSize(t.join(" "), D)));
                var S = {
                    text: t,
                    x: e,
                    y: n,
                    options: i,
                    mutex: {
                        pdfEscape: Ot,
                        activeFontKey: K,
                        fonts: nt,
                        activeFontSize: Z
                    }
                };
                ot.publish("preProcessText", S),
                t = S.text;
                var _ = null;
                if ((p = (i = S.options).angle) && "number" == typeof p) {
                    p *= Math.PI / 180,
                    it === rt && (p = -p);
                    var k = Math.cos(p)
                      , A = Math.sin(p);
                    _ = new Ct(k,A,-A,k,0,0)
                } else
                    p && p instanceof Ct && (_ = p);
                void 0 !== (B = i.charSpace) && (a += B + " Tc\n");
                i.lang;
                var C = -1
                  , I = i.renderingMode || i.stroke
                  , P = u.internal.getCurrentPageInfo().pageContext;
                switch (I) {
                case 0:
                case !1:
                case "fill":
                    C = 0;
                    break;
                case 1:
                case !0:
                case "stroke":
                    C = 1;
                    break;
                case 2:
                case "fillThenStroke":
                    C = 2;
                    break;
                case 3:
                case "invisible":
                    C = 3;
                    break;
                case 4:
                case "fillAndAddForClipping":
                    C = 4;
                    break;
                case 5:
                case "strokeAndAddPathForClipping":
                    C = 5;
                    break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                    C = 6;
                    break;
                case 7:
                case "addToPathForClipping":
                    C = 7
                }
                var F = P.usedRenderingMode || -1;
                -1 !== C ? a += C + " Tr\n" : -1 !== F && (a += "0 Tr\n"),
                -1 !== C && (P.usedRenderingMode = C);
                d = i.align || "left";
                var q = Z * c
                  , j = u.internal.pageSize.getWidth()
                  , T = u.internal.scaleFactor
                  , O = nt[K]
                  , B = i.charSpace || $
                  , D = i.maxWidth || 0
                  , E = (f = {},
                []);
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    var R, U;
                    v = h(t);
                    "left" !== d && (U = v.map(function(t) {
                        return u.getStringUnitWidth(t, {
                            font: O,
                            charSpace: B,
                            fontSize: Z
                        }) * Z / T
                    }));
                    var z, M = Math.max.apply(Math, U), N = 0, L = 0;
                    if ("right" === d) {
                        L = -U[0],
                        t = [];
                        var H = 0;
                        for (b = v.length; H < b; H++)
                            M - U[H],
                            R = 0 === H ? z = 0 : (z = N - U[H],
                            q),
                            t.push([v[H], z, R]),
                            N = U[H]
                    } else if ("center" === d) {
                        L = -U[0] / 2,
                        t = [];
                        for (H = 0,
                        b = v.length; H < b; H++)
                            (M - U[H]) / 2,
                            R = 0 === H ? z = 0 : (z = (N - U[H]) / 2,
                            q),
                            t.push([v[H], z, R]),
                            N = U[H]
                    } else if ("left" === d) {
                        t = [];
                        for (H = 0,
                        b = v.length; H < b; H++)
                            t.push(v[H])
                    } else {
                        if ("justify" !== d)
                            throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                        t = [];
                        for (D = 0 !== D ? D : j,
                        H = 0,
                        b = v.length; H < b; H++)
                            R = (z = 0) === H ? 0 : q,
                            H < b - 1 && E.push((D - U[H]) / (v[H].split(" ").length - 1)),
                            t.push([v[H], z, R])
                    }
                }
                !0 === ("boolean" == typeof i.R2L ? i.R2L : tt) && (t = l(t, function(t, e, n) {
                    return [t.split("").reverse().join(""), e, n]
                }));
                S = {
                    text: t,
                    x: e,
                    y: n,
                    options: i,
                    mutex: {
                        pdfEscape: Ot,
                        activeFontKey: K,
                        fonts: nt,
                        activeFontSize: Z
                    }
                };
                ot.publish("postProcessText", S),
                t = S.text,
                o = S.mutex.isHex;
                v = h(t);
                t = [];
                var W, G, V, Y = 0, X = (b = v.length,
                "");
                for (H = 0; H < b; H++)
                    X = "",
                    "[object Array]" !== Object.prototype.toString.call(v[H]) ? (V = (o ? "<" : "(") + v[H] + (o ? ">" : ")"),
                    Y = 0) : "[object Array]" === Object.prototype.toString.call(v[H]) && (W = v[H][1] * T,
                    G = -v[H][2],
                    V = (o ? "<" : "(") + v[H][0] + (o ? ">" : ")"),
                    Y = 1),
                    void 0 !== E && void 0 !== E[H] && (X = E[H] + " Tw\n"),
                    1 === Y && 0 < H ? t.push(X + ht(W) + " " + ht(G) + "  Td\n" + V) : t.push(X + V);
                t = 0 === Y ? t.join(" Tj\nT* ") : t.join(" Tj\n"),
                it === rt && null === _ && (_ = It),
                t = null !== _ ? (_ = "number" == typeof p ? At(_, new Ct(1,0,0,1,lt(e),ft(n))) : At(new Ct(1,0,0,1,lt(e),ft(n)), _),
                _ = At(new Ct(1,0,0,1,L * T,0), _),
                it === rt && (_ = At(new Ct(1,0,0,-1,0,0), _)),
                _.toString() + " Tm\n" + t) : ht(lt(e + L)) + " " + ht(ft(n)) + "  Td\n" + t,
                t += " Tj\n";
                var J = "BT\n/" + K + " " + Z + " Tf\n" + (Z * c).toFixed(2) + " TL\n" + Q + "\n";
                return J += a,
                J += t,
                gt(J += "ET"),
                u
            }
            ,
            W.lstext = function(t, e, n, r) {
                console.warn("jsPDF.lstext is deprecated");
                for (var i = 0, o = t.length; i < o; i++,
                e += r)
                    this.text(t[i], e, n);
                return this
            }
            ,
            W.line = function(t, e, n, r) {
                return it === G ? this.lines([[n - t, r - e]], t, e, [1, 1], "D") : this.lines([[n - t, r - e]], t, e, [1, 1]).stroke()
            }
            ,
            W.moveTo = function(t, e) {
                gt(ht(lt(t)) + " " + ht(ft(e)) + " m")
            }
            ,
            W.lineTo = function(t, e) {
                gt(ht(lt(t)) + " " + ht(ft(e)) + " l")
            }
            ,
            W.curveTo = function(t, e, n, r, i, o) {
                gt([ht(lt(t)), ht(ft(e)), ht(lt(n)), ht(ft(r)), ht(lt(i)), ht(ft(o)), "c"].join(" "))
            }
            ,
            W.close = function() {
                return gt("h"),
                this
            }
            ,
            W.stroke = function() {
                return gt("S"),
                this
            }
            ,
            W.fill = function(t) {
                return Kt("f", t),
                this
            }
            ,
            W.fillEvenOdd = function(t) {
                return Kt("f*", t),
                this
            }
            ,
            W.fillStroke = function(t) {
                return Kt("B", t),
                this
            }
            ,
            W.fillStrokeEvenOdd = function(t) {
                return Kt("B*", t),
                this
            }
            ,
            W.clip = function() {
                return it === G ? (gt("W"),
                gt("S")) : gt("W"),
                this
            }
            ,
            W.clipEvenOdd = function() {
                return gt("W*"),
                this
            }
            ,
            W.discardPath = function() {
                return gt("n"),
                this
            }
            ,
            W.clip_fixed = function(t) {
                gt("evenodd" === t ? "W*" : "W"),
                gt("n")
            }
            ,
            W.lines = function(t, e, n, r, i, o, s, a) {
                var c, u, h, l, f, p, d, g, m, y, w;
                if ("number" == typeof t) {
                    var v = n;
                    n = e,
                    e = t,
                    t = v
                }
                for (r = r || [1, 1],
                this.moveTo(e, n),
                c = r[0],
                u = r[1],
                l = t.length,
                y = e,
                w = n,
                h = 0; h < l; h++)
                    2 === (f = t[h]).length ? (y = f[0] * c + y,
                    w = f[1] * u + w,
                    this.lineTo(y, w)) : (p = f[0] * c + y,
                    d = f[1] * u + w,
                    g = f[2] * c + y,
                    m = f[3] * u + w,
                    y = f[4] * c + y,
                    w = f[5] * u + w,
                    this.curveTo(p, d, g, m, y, w));
                return o && this.close(),
                Mt(i, s, a),
                this
            }
            ,
            W.path = function(t, e, n, r) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i]
                      , s = o.c;
                    switch (o.op) {
                    case "m":
                        this.moveTo(s[0], s[1]);
                        break;
                    case "l":
                        this.lineTo(s[0], s[1]);
                        break;
                    case "c":
                        this.curveTo.apply(this, s);
                        break;
                    case "h":
                        this.close()
                    }
                }
                return Mt(e, n, r),
                this
            }
            ,
            W.rect = function(t, e, n, r, i, o, s) {
                return it === G && (r = -r),
                gt([ht(lt(t)), ht(ft(e)), ht(lt(n)), ht(lt(r)), "re"].join(" ")),
                Mt(i, o, s),
                this
            }
            ,
            W.triangle = function(t, e, n, r, i, o, s, a, c) {
                return this.lines([[n - t, r - e], [i - n, o - r], [t - i, e - o]], t, e, [1, 1], s, !0, a, c),
                this
            }
            ,
            W.roundedRect = function(t, e, n, r, i, o, s, a, c) {
                var u = 4 / 3 * (Math.SQRT2 - 1);
                return i = Math.min(i, .5 * n),
                o = Math.min(o, .5 * r),
                this.lines([[n - 2 * i, 0], [i * u, 0, i, o - o * u, i, o], [0, r - 2 * o], [0, o * u, -i * u, o, -i, o], [2 * i - n, 0], [-i * u, 0, -i, -o * u, -i, -o], [0, 2 * o - r], [0, -o * u, i * u, -o, i, -o]], t + i, e, [1, 1], s, !0, a, c),
                this
            }
            ,
            W.ellipse = function(t, e, n, r, i, o, s) {
                var a = 4 / 3 * (Math.SQRT2 - 1) * n
                  , c = 4 / 3 * (Math.SQRT2 - 1) * r;
                return this.moveTo(t + n, e),
                this.curveTo(t + n, e - c, t + a, e - r, t, e - r),
                this.curveTo(t - a, e - r, t - n, e - c, t - n, e),
                this.curveTo(t - n, e + c, t - a, e + r, t, e + r),
                this.curveTo(t + a, e + r, t + n, e + c, t + n, e),
                Mt(i, o, s),
                this
            }
            ,
            W.circle = function(t, e, n, r, i, o) {
                return this.ellipse(t, e, n, n, r, i, o)
            }
            ,
            W.setProperties = function(t) {
                for (var e in H)
                    H.hasOwnProperty(e) && t[e] && (H[e] = t[e]);
                return this
            }
            ,
            W.setFontSize = function(t) {
                return gt("/" + K + " " + (Z = it === rt ? t / m : t) + " Tf"),
                this
            }
            ,
            W.getFontSize = function() {
                return it === G ? Z : Z * m
            }
            ,
            W.setFont = function(t, e) {
                return K = Rt(t, e),
                gt("/" + K + " " + Z + " Tf"),
                this
            }
            ,
            W.setFontStyle = W.setFontType = function(t) {
                return K = Rt(void 0, t),
                gt("/" + K + " " + Z + " Tf"),
                this
            }
            ,
            W.getFontList = function() {
                var t, e, n, r = {};
                for (t in k)
                    if (k.hasOwnProperty(t))
                        for (e in r[t] = n = [],
                        k[t])
                            k[t].hasOwnProperty(e) && n.push(e);
                return r
            }
            ,
            W.addFont = function(t, e, n, r) {
                kt.call(this, t, e, n, r = r || "Identity-H")
            }
            ,
            W.setLineWidth = function(t) {
                return gt(lt(t).toFixed(2) + " w"),
                this
            }
            ,
            W.setDrawColor = function(t, e, n, r) {
                return gt(Y({
                    ch1: t,
                    ch2: e,
                    ch3: n,
                    ch4: r,
                    pdfColorType: "draw",
                    precision: 2
                })),
                this
            }
            ,
            W.setFillColor = function(t, e, n, r) {
                return gt(Y({
                    ch1: t,
                    ch2: e,
                    ch3: n,
                    ch4: r,
                    pdfColorType: "fill",
                    precision: 2
                })),
                this
            }
            ,
            W.setTextColor = function(t, e, n, r) {
                return Q = Y({
                    ch1: t,
                    ch2: e,
                    ch3: n,
                    ch4: r,
                    pdfColorType: "text",
                    precision: 3
                }),
                this
            }
            ,
            W.setCharSpace = function(t) {
                return it === G ? $ = t : it === rt && ($ = t / m),
                this
            }
            ,
            W.setR2L = function(t) {
                return tt = t,
                this
            }
            ,
            W.setGState = function(t) {
                (t = "string" == typeof t ? P[F[t]] : Tt(null, t)).equals(q) || (gt("/" + t.id + " gs"),
                q = t)
            }
            ,
            W.CapJoinStyles = {
                0: 0,
                butt: 0,
                but: 0,
                miter: 0,
                1: 1,
                round: 1,
                rounded: 1,
                circle: 1,
                2: 2,
                projecting: 2,
                project: 2,
                square: 2,
                bevel: 2
            },
            W.setLineCap = function(t) {
                var e = this.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return gt((R = e) + " J"),
                this
            }
            ,
            W.setLineJoin = function(t) {
                var e = this.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return gt((U = e) + " j"),
                this
            }
            ,
            W.setLineMiterLimit = function(t) {
                return gt(ht(t) + " M"),
                this
            }
            ,
            W.setLineDashPattern = function(t, e) {
                return gt(["[" + (void 0 !== t[0] ? t[0] : ""), (void 0 !== t[1] ? t[1] : "") + "]", e, "d"].join(" ")),
                this
            }
            ,
            W.output = Gt,
            W.save = function(t) {
                W.output("save", t)
            }
            ,
            ne.API)
                ne.API.hasOwnProperty(Qt) && ("events" === Qt && ne.API.events.length ? function(t, e) {
                    var n, r, i;
                    for (i = e.length - 1; -1 !== i; i--)
                        n = e[i][0],
                        r = e[i][1],
                        t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r))
                }(ot, ne.API.events) : W[Qt] = ne.API[Qt]);
            return function() {
                for (var t = "helvetica", e = "times", n = "courier", r = "normal", i = "bold", o = "italic", s = "bolditalic", a = [["Helvetica", t, r, "WinAnsiEncoding"], ["Helvetica-Bold", t, i, "WinAnsiEncoding"], ["Helvetica-Oblique", t, o, "WinAnsiEncoding"], ["Helvetica-BoldOblique", t, s, "WinAnsiEncoding"], ["Courier", n, r, "WinAnsiEncoding"], ["Courier-Bold", n, i, "WinAnsiEncoding"], ["Courier-Oblique", n, o, "WinAnsiEncoding"], ["Courier-BoldOblique", n, s, "WinAnsiEncoding"], ["Times-Roman", e, r, "WinAnsiEncoding"], ["Times-Bold", e, i, "WinAnsiEncoding"], ["Times-Italic", e, o, "WinAnsiEncoding"], ["Times-BoldItalic", e, s, "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", r, null], ["Symbol", "symbol", r, null]], c = 0, u = a.length; c < u; c++) {
                    var h = kt(a[c][0], a[c][1], a[c][2], a[c][3], !0)
                      , l = a[c][0].split("-");
                    _t(h, l[0], l[1] || "")
                }
                ot.publish("addFonts", {
                    fonts: nt,
                    dictionary: k
                })
            }(),
            K = "F1",
            Dt(n, t),
            ot.publish("initialized"),
            W
        }
        return ne.API = {
            events: []
        },
        ne.version = "0.0.0",
        "function" == typeof define && define.amd ? define(function() {
            return ne
        }) : "undefined" != typeof module && module.exports ? (module.exports = ne,
        module.exports.jsPDF = ne) : Zt.jsPDF = ne,
        ne
    }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
    /**
   * @license
   * Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
    /**
   * @license
   * Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
    !function(n, t) {
        var h, s, e = 1, r = function(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t
        }, a = function(t) {
            return t * (e / 1)
        }, c = function(t) {
            var e = new C
              , n = M.internal.getHeight(t) || 0
              , r = M.internal.getWidth(t) || 0;
            return e.BBox = [0, 0, r.toFixed(2), n.toFixed(2)],
            e
        }, i = function(t, e, n) {
            t = t || 0;
            var r = 1;
            if (r <<= e - 1,
            1 == (n = n || 1))
                t = t | r;
            else
                t = t & ~r;
            return t
        }, o = function(t, e, n) {
            n = n || 1.3,
            t = t || 0;
            return 1 == e.readOnly && (t = i(t, 1)),
            1 == e.required && (t = i(t, 2)),
            1 == e.noExport && (t = i(t, 3)),
            1 == e.multiline && (t = i(t, 13)),
            e.password && (t = i(t, 14)),
            e.noToggleToOff && (t = i(t, 15)),
            e.radio && (t = i(t, 16)),
            e.pushbutton && (t = i(t, 17)),
            e.combo && (t = i(t, 18)),
            e.edit && (t = i(t, 19)),
            e.sort && (t = i(t, 20)),
            e.fileSelect && 1.4 <= n && (t = i(t, 21)),
            e.multiSelect && 1.4 <= n && (t = i(t, 22)),
            e.doNotSpellCheck && 1.4 <= n && (t = i(t, 23)),
            1 == e.doNotScroll && 1.4 <= n && (t = i(t, 24)),
            e.richText && 1.4 <= n && (t = i(t, 25)),
            t
        }, l = function(t) {
            var e = t[0]
              , n = t[1]
              , r = t[2]
              , i = t[3]
              , o = {};
            return Array.isArray(e) ? (e[0] = a(e[0]),
            e[1] = a(e[1]),
            e[2] = a(e[2]),
            e[3] = a(e[3])) : (e = a(e),
            n = a(n),
            r = a(r),
            i = a(i)),
            o.lowerLeft_X = e || 0,
            o.lowerLeft_Y = a(s) - n - i || 0,
            o.upperRight_X = e + r || 0,
            o.upperRight_Y = a(s) - n || 0,
            [o.lowerLeft_X.toFixed(2), o.lowerLeft_Y.toFixed(2), o.upperRight_X.toFixed(2), o.upperRight_Y.toFixed(2)]
        }, f = function(t) {
            if (t.appearanceStreamContent)
                return t.appearanceStreamContent;
            if (t.V || t.DV) {
                var e = []
                  , n = t.V || t.DV
                  , r = u(t, n);
                e.push("/Tx BMC"),
                e.push("q"),
                e.push("/F1 " + r.fontSize.toFixed(2) + " Tf"),
                e.push("1 0 0 1 0 0 Tm"),
                e.push("BT"),
                e.push(r.text),
                e.push("ET"),
                e.push("Q"),
                e.push("EMC");
                var i = new c(t);
                return i.stream = e.join("\n"),
                i
            }
        }, u = function(t, e, i, n) {
            n = n || 12,
            i = i || "helvetica";
            var r = {
                text: "",
                fontSize: ""
            }
              , o = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" ")
              , s = n
              , a = M.internal.getHeight(t) || 0;
            a = a < 0 ? -a : a;
            var c = M.internal.getWidth(t) || 0;
            c = c < 0 ? -c : c;
            var u = function(t, e, n) {
                if (t + 1 < o.length) {
                    var r = e + " " + o[t + 1];
                    return A(r, n + "px", i).width <= c - 4
                }
                return !1
            };
            s++;
            t: for (; ; ) {
                e = "";
                var h = A("3", --s + "px", i).height
                  , l = t.multiline ? a - s : (a - h) / 2
                  , f = -2
                  , p = l += 2
                  , d = 0
                  , g = 0
                  , m = 0;
                if (s <= 0) {
                    s = 12,
                    e = "(...) Tj\n",
                    e += "% Width of Text: " + A(e, "1px").width + ", FieldWidth:" + c + "\n";
                    break
                }
                m = A(o[0] + " ", s + "px", i).width;
                var y = ""
                  , w = 0;
                for (var v in o)
                    if (o.hasOwnProperty(v)) {
                        y = " " == (y += o[v] + " ").substr(y.length - 1) ? y.substr(0, y.length - 1) : y;
                        var b = parseInt(v);
                        m = A(y + " ", s + "px", i).width;
                        var x = u(b, y, s)
                          , S = v >= o.length - 1;
                        if (x && !S) {
                            y += " ";
                            continue
                        }
                        if (x || S) {
                            if (S)
                                g = b;
                            else if (t.multiline && a < (h + 2) * (w + 2) + 2)
                                continue t
                        } else {
                            if (!t.multiline)
                                continue t;
                            if (a < (h + 2) * (w + 2) + 2)
                                continue t;
                            g = b
                        }
                        for (var _ = "", k = d; k <= g; k++)
                            _ += o[k] + " ";
                        switch (_ = " " == _.substr(_.length - 1) ? _.substr(0, _.length - 1) : _,
                        m = A(_, s + "px", i).width,
                        t.Q) {
                        case 2:
                            f = c - m - 2;
                            break;
                        case 1:
                            f = (c - m) / 2;
                            break;
                        case 0:
                        default:
                            f = 2
                        }
                        e += f.toFixed(2) + " " + p.toFixed(2) + " Td\n",
                        e += "(" + _ + ") Tj\n",
                        e += -f.toFixed(2) + " 0 Td\n",
                        p = -(s + 2),
                        m = 0,
                        d = g + 1,
                        w++,
                        y = ""
                    } else
                        ;
                break
            }
            return r.text = e,
            r.fontSize = s,
            r
        }, A = function(t, e, n) {
            n = n || "helvetica";
            var r = h.internal.getFont(n)
              , i = h.getStringUnitWidth(t, {
                font: r,
                fontSize: parseFloat(e),
                charSpace: 0
            }) * parseFloat(e);
            return {
                height: h.getStringUnitWidth("3", {
                    font: r,
                    fontSize: parseFloat(e),
                    charSpace: 0
                }) * parseFloat(e) * 1.5,
                width: i
            }
        }, p = {
            fields: [],
            xForms: [],
            acroFormDictionaryRoot: null,
            printedOut: !1,
            internal: null,
            isInitialized: !1
        }, d = function() {
            var t = h.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
            for (var e in t)
                if (t.hasOwnProperty(e)) {
                    var n = t[e];
                    n.hasAnnotation && m.call(h, n)
                }
        }, g = function(t) {
            h.internal.acroformPlugin.printedOut && (h.internal.acroformPlugin.printedOut = !1,
            h.internal.acroformPlugin.acroFormDictionaryRoot = null),
            h.internal.acroformPlugin.acroFormDictionaryRoot || x.call(h),
            h.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)
        }, m = function(t) {
            var e = {
                type: "reference",
                object: t
            };
            h.annotationPlugin.annotations[h.internal.getPageInfo(t.page).pageNumber].push(e)
        }, y = function() {
            void 0 !== h.internal.acroformPlugin.acroFormDictionaryRoot ? h.internal.write("/AcroForm " + h.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...")
        }, w = function() {
            h.internal.events.unsubscribe(h.internal.acroformPlugin.acroFormDictionaryRoot._eventID),
            delete h.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
            h.internal.acroformPlugin.printedOut = !0
        }, v = function(t) {
            var e = !t;
            t || (h.internal.newObjectDeferredBegin(h.internal.acroformPlugin.acroFormDictionaryRoot.objId),
            h.internal.out(h.internal.acroformPlugin.acroFormDictionaryRoot.getString()));
            t = t || h.internal.acroformPlugin.acroFormDictionaryRoot.Kids;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = t[n]
                      , i = r.Rect;
                    r.Rect && (r.Rect = l.call(this, r.Rect)),
                    h.internal.newObjectDeferredBegin(r.objId);
                    var o = r.objId + " 0 obj\n<<\n";
                    if ("object" === re(r) && "function" == typeof r.getContent && (o += r.getContent()),
                    r.Rect = i,
                    r.hasAppearanceStream && !r.appearanceStreamContent) {
                        var s = f.call(this, r);
                        o += "/AP << /N " + s + " >>\n",
                        h.internal.acroformPlugin.xForms.push(s)
                    }
                    if (r.appearanceStreamContent) {
                        for (var a in o += "/AP << ",
                        r.appearanceStreamContent)
                            if (r.appearanceStreamContent.hasOwnProperty(a)) {
                                var c = r.appearanceStreamContent[a];
                                if (o += "/" + a + " ",
                                o += "<< ",
                                1 <= Object.keys(c).length || Array.isArray(c))
                                    for (var n in c) {
                                        var u;
                                        if (c.hasOwnProperty(n))
                                            "function" == typeof (u = c[n]) && (u = u.call(this, r)),
                                            o += "/" + n + " " + u + " ",
                                            0 <= h.internal.acroformPlugin.xForms.indexOf(u) || h.internal.acroformPlugin.xForms.push(u)
                                    }
                                else
                                    "function" == typeof (u = c) && (u = u.call(this, r)),
                                    o += "/" + n + " " + u + " \n",
                                    0 <= h.internal.acroformPlugin.xForms.indexOf(u) || h.internal.acroformPlugin.xForms.push(u);
                                o += " >>\n"
                            }
                        o += ">>\n"
                    }
                    o += ">>\nendobj\n",
                    h.internal.out(o)
                }
            e && b.call(this, h.internal.acroformPlugin.xForms)
        }, b = function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) {
                    var n = e
                      , r = t[e];
                    h.internal.newObjectDeferredBegin(r && r.objId);
                    var i = "";
                    "object" === re(r) && "function" == typeof r.getString && (i = r.getString()),
                    h.internal.out(i),
                    delete t[n]
                }
        }, x = function() {
            if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || !1 === this.internal.acroformPlugin.isInitialized)) {
                if (h = this,
                P.FieldNum = 0,
                this.internal.acroformPlugin = JSON.parse(JSON.stringify(p)),
                this.internal.acroformPlugin.acroFormDictionaryRoot)
                    throw new Error("Exception while creating AcroformDictionary");
                e = h.internal.scaleFactor,
                s = h.internal.pageSize.getHeight(),
                h.internal.acroformPlugin.acroFormDictionaryRoot = new I,
                h.internal.acroformPlugin.acroFormDictionaryRoot._eventID = h.internal.events.subscribe("postPutResources", w),
                h.internal.events.subscribe("buildDocument", d),
                h.internal.events.subscribe("putCatalog", y),
                h.internal.events.subscribe("postPutPages", v),
                h.internal.acroformPlugin.isInitialized = !0
            }
        }, S = function(t) {
            if (Array.isArray(t)) {
                var e = " [";
                for (var n in t) {
                    if (t.hasOwnProperty(n))
                        e += t[n].toString(),
                        e += n < t.length - 1 ? " " : ""
                }
                return e += "]"
            }
        }, _ = function(t) {
            return 0 !== (t = t || "").indexOf("(") && (t = "(" + t),
            ")" != t.substring(t.length - 1) && (t += ")"),
            t
        }, k = function() {
            var t;
            Object.defineProperty(this, "objId", {
                get: function() {
                    return t || (t = h.internal.newObjectDeferred()),
                    t || console.log("Couldn't create Object ID"),
                    t
                },
                configurable: !1
            })
        };
        k.prototype.toString = function() {
            return this.objId + " 0 R"
        }
        ,
        k.prototype.getString = function() {
            var t = this.objId + " 0 obj\n<<";
            return t += this.getContent() + ">>\n",
            this.stream && (t += "stream\n",
            t += this.stream,
            t += "\nendstream\n"),
            t += "endobj\n"
        }
        ,
        k.prototype.getContent = function() {
            var t = "";
            return t += function(t) {
                var e = ""
                  , n = Object.keys(t).filter(function(t) {
                    return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1)
                });
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        var i = n[r]
                          , o = t[i];
                        o && (Array.isArray(o) ? e += "/" + i + " " + S(o) + "\n" : e += o instanceof k ? "/" + i + " " + o.objId + " 0 R\n" : "/" + i + " " + o + "\n")
                    }
                return e
            }(this)
        }
        ;
        var C = function() {
            var e;
            k.call(this),
            this.Type = "/XObject",
            this.Subtype = "/Form",
            this.FormType = 1,
            this.BBox,
            this.Matrix,
            this.Resources = "2 0 R",
            this.PieceInfo,
            Object.defineProperty(this, "Length", {
                enumerable: !0,
                get: function() {
                    return void 0 !== e ? e.length : 0
                }
            }),
            Object.defineProperty(this, "stream", {
                enumerable: !1,
                set: function(t) {
                    e = t.trim()
                },
                get: function() {
                    return e || null
                }
            })
        };
        r(C, k);
        var I = function() {
            k.call(this);
            var t = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return 0 < t.length ? t : void 0
                }
            }),
            Object.defineProperty(this, "Fields", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t
                }
            }),
            this.DA
        };
        r(I, k);
        var P = function t() {
            k.call(this);
            var e = null;
            Object.defineProperty(this, "Rect", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (e)
                        return e
                },
                set: function(t) {
                    e = t
                }
            });
            var n = "";
            Object.defineProperty(this, "FT", {
                enumerable: !0,
                set: function(t) {
                    n = t
                },
                get: function() {
                    return n
                }
            });
            var r = 4;
            Object.defineProperty(this, "F", {
                enumerable: !0,
                set: function(t) {
                    r = t
                },
                get: function() {
                    return r
                }
            });
            var i = null;
            Object.defineProperty(this, "T", {
                enumerable: !0,
                configurable: !1,
                set: function(t) {
                    i = t
                },
                get: function() {
                    if (!i || i.length < 1) {
                        if (this instanceof E)
                            return;
                        return "(FieldObject" + t.FieldNum++ + ")"
                    }
                    return "(" == i.substring(0, 1) && i.substring(i.length - 1) ? i : "(" + i + ")"
                }
            });
            var o = null;
            Object.defineProperty(this, "DA", {
                enumerable: !0,
                get: function() {
                    if (o)
                        return "(" + o + ")"
                },
                set: function(t) {
                    o = t
                }
            });
            var s = null;
            Object.defineProperty(this, "DV", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    if (s)
                        return s
                },
                set: function(t) {
                    s = t
                }
            });
            var a = null;
            Object.defineProperty(this, "V", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    if (a)
                        return a
                },
                set: function(t) {
                    a = t
                }
            }),
            Object.defineProperty(this, "Type", {
                enumerable: !0,
                get: function() {
                    return this.hasAnnotation ? "/Annot" : null
                }
            }),
            Object.defineProperty(this, "Subtype", {
                enumerable: !0,
                get: function() {
                    return this.hasAnnotation ? "/Widget" : null
                }
            }),
            this.BG,
            Object.defineProperty(this, "hasAnnotation", {
                enumerable: !1,
                get: function() {
                    return !!(this.Rect || this.BC || this.BG)
                }
            }),
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !1,
                configurable: !0,
                writable: !0
            }),
            Object.defineProperty(this, "page", {
                enumerable: !1,
                configurable: !0,
                writable: !0
            })
        };
        r(P, k);
        var F = function() {
            P.call(this),
            this.FT = "/Ch",
            this.Opt = [],
            this.V = "()",
            this.TI = 0;
            var e = !1;
            Object.defineProperty(this, "combo", {
                enumerable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            }),
            Object.defineProperty(this, "edit", {
                enumerable: !0,
                set: function(t) {
                    1 == t ? (this._edit = !0,
                    this.combo = !0) : this._edit = !1
                },
                get: function() {
                    return !!this._edit && this._edit
                },
                configurable: !1
            }),
            this.hasAppearanceStream = !0
        };
        r(F, P);
        var q = function() {
            F.call(this),
            this.combo = !1
        };
        r(q, F);
        var j = function() {
            q.call(this),
            this.combo = !0
        };
        r(j, q);
        var T = function() {
            j.call(this),
            this.edit = !0
        };
        r(T, j);
        var O = function() {
            P.call(this),
            this.FT = "/Btn"
        };
        r(O, P);
        var B = function() {
            O.call(this);
            var e = !0;
            Object.defineProperty(this, "pushbutton", {
                enumerable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            })
        };
        r(B, O);
        var D = function() {
            O.call(this);
            var e = !0;
            Object.defineProperty(this, "radio", {
                enumerable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            });
            var n, t = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !0,
                get: function() {
                    if (0 < t.length)
                        return t
                }
            }),
            Object.defineProperty(this, "__Kids", {
                get: function() {
                    return t
                }
            }),
            Object.defineProperty(this, "noToggleToOff", {
                enumerable: !1,
                get: function() {
                    return n
                },
                set: function(t) {
                    n = t
                }
            })
        };
        r(D, O);
        var E = function(t, e) {
            P.call(this),
            this.Parent = t,
            this._AppearanceType = M.RadioButton.Circle,
            this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(e),
            this.F = i(this.F, 3, 1),
            this.MK = this._AppearanceType.createMK(),
            this.AS = "/Off",
            this._Name = e
        };
        r(E, P),
        D.prototype.setAppearance = function(t) {
            if ("createAppearanceStream"in t && "createMK"in t) {
                for (var e in this.__Kids)
                    if (this.__Kids.hasOwnProperty(e)) {
                        var n = this.__Kids[e];
                        n.appearanceStreamContent = t.createAppearanceStream(n._Name),
                        n.MK = t.createMK()
                    }
            } else
                console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")
        }
        ,
        D.prototype.createOption = function(t) {
            this.__Kids.length;
            var e = new E(this,t);
            return this.__Kids.push(e),
            n.addField(e),
            e
        }
        ;
        var R = function() {
            O.call(this),
            this.appearanceStreamContent = M.CheckBox.createAppearanceStream(),
            this.MK = M.CheckBox.createMK(),
            this.AS = "/On",
            this.V = "/On"
        };
        r(R, O);
        var U = function() {
            var e, n;
            P.call(this),
            this.DA = M.createDefaultAppearanceStream(),
            this.F = 4,
            Object.defineProperty(this, "V", {
                get: function() {
                    return e ? _(e) : e
                },
                enumerable: !0,
                set: function(t) {
                    e = t
                }
            }),
            Object.defineProperty(this, "DV", {
                get: function() {
                    return n ? _(n) : n
                },
                enumerable: !0,
                set: function(t) {
                    n = t
                }
            });
            var r = !1;
            Object.defineProperty(this, "multiline", {
                enumerable: !1,
                get: function() {
                    return r
                },
                set: function(t) {
                    r = t
                }
            });
            var i = !1;
            Object.defineProperty(this, "fileSelect", {
                enumerable: !1,
                get: function() {
                    return i
                },
                set: function(t) {
                    i = t
                }
            });
            var o = !1;
            Object.defineProperty(this, "doNotSpellCheck", {
                enumerable: !1,
                get: function() {
                    return o
                },
                set: function(t) {
                    o = t
                }
            });
            var s = !1;
            Object.defineProperty(this, "doNotScroll", {
                enumerable: !1,
                get: function() {
                    return s
                },
                set: function(t) {
                    s = t
                }
            });
            var a = !1;
            Object.defineProperty(this, "MaxLen", {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    a = t
                }
            }),
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !1,
                get: function() {
                    return this.V || this.DV
                }
            })
        };
        r(U, P);
        var z = function() {
            U.call(this);
            var e = !0;
            Object.defineProperty(this, "password", {
                enumerable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            })
        };
        r(z, U);
        var M = {
            CheckBox: {
                createAppearanceStream: function() {
                    return {
                        N: {
                            On: M.CheckBox.YesNormal
                        },
                        D: {
                            On: M.CheckBox.YesPushDown,
                            Off: M.CheckBox.OffPushDown
                        }
                    }
                },
                createMK: function() {
                    return "<< /CA (3)>>"
                },
                YesPushDown: function(t) {
                    var e = c(t)
                      , n = []
                      , r = h.internal.getFont("zapfdingbats", "normal").id;
                    t.Q = 1;
                    var i = u(t, "3", "ZapfDingbats", 50);
                    return n.push("0.749023 g"),
                    n.push("0 0 " + M.internal.getWidth(t).toFixed(2) + " " + M.internal.getHeight(t).toFixed(2) + " re"),
                    n.push("f"),
                    n.push("BMC"),
                    n.push("q"),
                    n.push("0 0 1 rg"),
                    n.push("/" + r + " " + i.fontSize.toFixed(2) + " Tf 0 g"),
                    n.push("BT"),
                    n.push(i.text),
                    n.push("ET"),
                    n.push("Q"),
                    n.push("EMC"),
                    e.stream = n.join("\n"),
                    e
                },
                YesNormal: function(t) {
                    var e = c(t)
                      , n = h.internal.getFont("zapfdingbats", "normal").id
                      , r = [];
                    t.Q = 1;
                    var i = M.internal.getHeight(t)
                      , o = M.internal.getWidth(t)
                      , s = u(t, "3", "ZapfDingbats", .9 * i);
                    return r.push("1 g"),
                    r.push("0 0 " + o.toFixed(2) + " " + i.toFixed(2) + " re"),
                    r.push("f"),
                    r.push("q"),
                    r.push("0 0 1 rg"),
                    r.push("0 0 " + (o - 1).toFixed(2) + " " + (i - 1).toFixed(2) + " re"),
                    r.push("W"),
                    r.push("n"),
                    r.push("0 g"),
                    r.push("BT"),
                    r.push("/" + n + " " + s.fontSize.toFixed(2) + " Tf 0 g"),
                    r.push(s.text),
                    r.push("ET"),
                    r.push("Q"),
                    e.stream = r.join("\n"),
                    e
                },
                OffPushDown: function(t) {
                    var e = c(t)
                      , n = [];
                    return n.push("0.749023 g"),
                    n.push("0 0 " + M.internal.getWidth(t).toFixed(2) + " " + M.internal.getHeight(t).toFixed(2) + " re"),
                    n.push("f"),
                    e.stream = n.join("\n"),
                    e
                }
            },
            RadioButton: {
                Circle: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: M.RadioButton.Circle.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = M.RadioButton.Circle.YesNormal,
                        e.D[t] = M.RadioButton.Circle.YesPushDown,
                        e
                    },
                    createMK: function() {
                        return "<< /CA (l)>>"
                    },
                    YesNormal: function(t) {
                        var e = c(t)
                          , n = []
                          , r = M.internal.getWidth(t) <= M.internal.getHeight(t) ? M.internal.getWidth(t) / 4 : M.internal.getHeight(t) / 4;
                        r *= .9;
                        var i = M.internal.Bezier_C;
                        return n.push("q"),
                        n.push("1 0 0 1 " + M.internal.getWidth(t) / 2 + " " + M.internal.getHeight(t) / 2 + " cm"),
                        n.push(r + " 0 m"),
                        n.push(r + " " + r * i + " " + r * i + " " + r + " 0 " + r + " c"),
                        n.push("-" + r * i + " " + r + " -" + r + " " + r * i + " -" + r + " 0 c"),
                        n.push("-" + r + " -" + r * i + " -" + r * i + " -" + r + " 0 -" + r + " c"),
                        n.push(r * i + " -" + r + " " + r + " -" + r * i + " " + r + " 0 c"),
                        n.push("f"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = c(t)
                          , n = []
                          , r = M.internal.getWidth(t) <= M.internal.getHeight(t) ? M.internal.getWidth(t) / 4 : M.internal.getHeight(t) / 4
                          , i = 2 * (r *= .9)
                          , o = i * M.internal.Bezier_C
                          , s = r * M.internal.Bezier_C;
                        return n.push("0.749023 g"),
                        n.push("q"),
                        n.push("1 0 0 1 " + (M.internal.getWidth(t) / 2).toFixed(2) + " " + (M.internal.getHeight(t) / 2).toFixed(2) + " cm"),
                        n.push(i + " 0 m"),
                        n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"),
                        n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"),
                        n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"),
                        n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"),
                        n.push("f"),
                        n.push("Q"),
                        n.push("0 g"),
                        n.push("q"),
                        n.push("1 0 0 1 " + (M.internal.getWidth(t) / 2).toFixed(2) + " " + (M.internal.getHeight(t) / 2).toFixed(2) + " cm"),
                        n.push(r + " 0 m"),
                        n.push(r + " " + s + " " + s + " " + r + " 0 " + r + " c"),
                        n.push("-" + s + " " + r + " -" + r + " " + s + " -" + r + " 0 c"),
                        n.push("-" + r + " -" + s + " -" + s + " -" + r + " 0 -" + r + " c"),
                        n.push(s + " -" + r + " " + r + " -" + s + " " + r + " 0 c"),
                        n.push("f"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = c(t)
                          , n = []
                          , r = M.internal.getWidth(t) <= M.internal.getHeight(t) ? M.internal.getWidth(t) / 4 : M.internal.getHeight(t) / 4
                          , i = 2 * (r *= .9)
                          , o = i * M.internal.Bezier_C;
                        return n.push("0.749023 g"),
                        n.push("q"),
                        n.push("1 0 0 1 " + (M.internal.getWidth(t) / 2).toFixed(2) + " " + (M.internal.getHeight(t) / 2).toFixed(2) + " cm"),
                        n.push(i + " 0 m"),
                        n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"),
                        n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"),
                        n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"),
                        n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"),
                        n.push("f"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    }
                },
                Cross: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: M.RadioButton.Cross.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = M.RadioButton.Cross.YesNormal,
                        e.D[t] = M.RadioButton.Cross.YesPushDown,
                        e
                    },
                    createMK: function() {
                        return "<< /CA (8)>>"
                    },
                    YesNormal: function(t) {
                        var e = c(t)
                          , n = []
                          , r = M.internal.calculateCross(t);
                        return n.push("q"),
                        n.push("1 1 " + (M.internal.getWidth(t) - 2).toFixed(2) + " " + (M.internal.getHeight(t) - 2).toFixed(2) + " re"),
                        n.push("W"),
                        n.push("n"),
                        n.push(r.x1.x.toFixed(2) + " " + r.x1.y.toFixed(2) + " m"),
                        n.push(r.x2.x.toFixed(2) + " " + r.x2.y.toFixed(2) + " l"),
                        n.push(r.x4.x.toFixed(2) + " " + r.x4.y.toFixed(2) + " m"),
                        n.push(r.x3.x.toFixed(2) + " " + r.x3.y.toFixed(2) + " l"),
                        n.push("s"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = c(t)
                          , n = M.internal.calculateCross(t)
                          , r = [];
                        return r.push("0.749023 g"),
                        r.push("0 0 " + M.internal.getWidth(t).toFixed(2) + " " + M.internal.getHeight(t).toFixed(2) + " re"),
                        r.push("f"),
                        r.push("q"),
                        r.push("1 1 " + (M.internal.getWidth(t) - 2).toFixed(2) + " " + (M.internal.getHeight(t) - 2).toFixed(2) + " re"),
                        r.push("W"),
                        r.push("n"),
                        r.push(n.x1.x.toFixed(2) + " " + n.x1.y.toFixed(2) + " m"),
                        r.push(n.x2.x.toFixed(2) + " " + n.x2.y.toFixed(2) + " l"),
                        r.push(n.x4.x.toFixed(2) + " " + n.x4.y.toFixed(2) + " m"),
                        r.push(n.x3.x.toFixed(2) + " " + n.x3.y.toFixed(2) + " l"),
                        r.push("s"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = c(t)
                          , n = [];
                        return n.push("0.749023 g"),
                        n.push("0 0 " + M.internal.getWidth(t).toFixed(2) + " " + M.internal.getHeight(t).toFixed(2) + " re"),
                        n.push("f"),
                        e.stream = n.join("\n"),
                        e
                    }
                }
            },
            createDefaultAppearanceStream: function(t) {
                return "/F1 0 Tf 0 g"
            }
        };
        M.internal = {
            Bezier_C: .551915024494,
            calculateCross: function(t) {
                var e, n, r = M.internal.getWidth(t), i = M.internal.getHeight(t), o = (n = i) < (e = r) ? n : e;
                return {
                    x1: {
                        x: (r - o) / 2,
                        y: (i - o) / 2 + o
                    },
                    x2: {
                        x: (r - o) / 2 + o,
                        y: (i - o) / 2
                    },
                    x3: {
                        x: (r - o) / 2,
                        y: (i - o) / 2
                    },
                    x4: {
                        x: (r - o) / 2 + o,
                        y: (i - o) / 2 + o
                    }
                }
            }
        },
        M.internal.getWidth = function(t) {
            var e = 0;
            return "object" === re(t) && (e = a(t.Rect[2])),
            e
        }
        ,
        M.internal.getHeight = function(t) {
            var e = 0;
            return "object" === re(t) && (e = a(t.Rect[3])),
            e
        }
        ,
        n.addField = function(t) {
            return x.call(this),
            t instanceof U ? this.addTextField.call(this, t) : t instanceof F ? this.addChoiceField.call(this, t) : t instanceof O ? this.addButton.call(this, t) : t instanceof E ? g.call(this, t) : t && g.call(this, t),
            t.page = h.internal.getCurrentPageInfo().pageNumber,
            this
        }
        ,
        n.addButton = function(t) {
            x.call(this);
            var e = t || new P;
            e.FT = "/Btn",
            e.Ff = o(e.Ff, t, h.internal.getPDFVersion()),
            g.call(this, e)
        }
        ,
        n.addTextField = function(t) {
            x.call(this);
            var e = t || new P;
            e.FT = "/Tx",
            e.Ff = o(e.Ff, t, h.internal.getPDFVersion()),
            g.call(this, e)
        }
        ,
        n.addChoiceField = function(t) {
            x.call(this);
            var e = t || new P;
            e.FT = "/Ch",
            e.Ff = o(e.Ff, t, h.internal.getPDFVersion()),
            g.call(this, e)
        }
        ,
        "object" == re(t) && (t.ChoiceField = F,
        t.ListBox = q,
        t.ComboBox = j,
        t.EditBox = T,
        t.Button = O,
        t.PushButton = B,
        t.RadioButton = D,
        t.CheckBox = R,
        t.TextField = U,
        t.PasswordField = z,
        t.AcroForm = {
            Appearance: M
        }),
        n.AcroFormChoiceField = F,
        n.AcroFormListBox = q,
        n.AcroFormComboBox = j,
        n.AcroFormEditBox = T,
        n.AcroFormButton = O,
        n.AcroFormPushButton = B,
        n.AcroFormRadioButton = D,
        n.AcroFormCheckBox = R,
        n.AcroFormTextField = U,
        n.AcroFormPasswordField = z,
        n.AcroFormAppearance = M,
        n.AcroForm = {
            ChoiceField: F,
            ListBox: q,
            ComboBox: j,
            EditBox: T,
            Button: O,
            PushButton: B,
            RadioButton: D,
            CheckBox: R,
            TextField: U,
            PasswordField: z,
            Appearance: M
        }
    }(rt.API, "undefined" != typeof window && window || "undefined" != typeof global && global),
    /** @license
   * jsPDF addImage plugin
   * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
   *               2013 Chris Dowling, https://github.com/gingerchris
   *               2013 Trinh Ho, https://github.com/ineedfat
   *               2013 Edwin Alejandro Perez, https://github.com/eaparango
   *               2013 Norah Smith, https://github.com/burnburnrocket
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   */
    function(b) {
        var x = "addImage_"
          , c = {
            PNG: [[137, 80, 78, 71]],
            TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]],
            JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]],
            JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
            GIF87a: [[71, 73, 70, 56, 55, 97]],
            GIF89a: [[71, 73, 70, 56, 57, 97]],
            BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]]
        };
        b.getImageFileTypeByImageData = function(t, e) {
            var n, r;
            e = e || "UNKNOWN";
            var i, o, s, a = "UNKNOWN";
            for (s in b.isArrayBufferView(t) && (t = b.arrayBufferToBinaryString(t)),
            c)
                for (i = c[s],
                n = 0; n < i.length; n += 1) {
                    for (o = !0,
                    r = 0; r < i[n].length; r += 1)
                        if (void 0 !== i[n][r] && i[n][r] !== t.charCodeAt(r)) {
                            o = !1;
                            break
                        }
                    if (!0 === o) {
                        a = s;
                        break
                    }
                }
            return "UNKNOWN" === a && "UNKNOWN" !== e && (console.warn('FileType of Image not recognized. Processing image as "' + e + '".'),
            a = e),
            a
        }
        ;
        var n = function t(e) {
            var n = this.internal.newObject()
              , r = this.internal.write
              , i = this.internal.putStream;
            if (e.n = n,
            r("<</Type /XObject"),
            r("/Subtype /Image"),
            r("/Width " + e.w),
            r("/Height " + e.h),
            e.cs === this.color_spaces.INDEXED ? r("/ColorSpace [/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask"in e ? n + 2 : n + 1) + " 0 R]") : (r("/ColorSpace /" + e.cs),
            e.cs === this.color_spaces.DEVICE_CMYK && r("/Decode [1 0 1 0 1 0 1 0]")),
            r("/BitsPerComponent " + e.bpc),
            "f"in e && r("/Filter /" + e.f),
            "dp"in e && r("/DecodeParms <<" + e.dp + ">>"),
            "trns"in e && e.trns.constructor == Array) {
                for (var o = "", s = 0, a = e.trns.length; s < a; s++)
                    o += e.trns[s] + " " + e.trns[s] + " ";
                r("/Mask [" + o + "]")
            }
            if ("smask"in e && r("/SMask " + (n + 1) + " 0 R"),
            r("/Length " + e.data.length + ">>"),
            i(e.data),
            r("endobj"),
            "smask"in e) {
                var c = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w
                  , u = {
                    w: e.w,
                    h: e.h,
                    cs: "DeviceGray",
                    bpc: e.bpc,
                    dp: c,
                    data: e.smask
                };
                "f"in e && (u.f = e.f),
                t.call(this, u)
            }
            e.cs === this.color_spaces.INDEXED && (this.internal.newObject(),
            r("<< /Length " + e.pal.length + ">>"),
            i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))),
            r("endobj"))
        }
          , S = function() {
            var t = this.internal.collections[x + "images"];
            for (var e in t)
                n.call(this, t[e])
        }
          , _ = function() {
            var t, e = this.internal.collections[x + "images"], n = this.internal.write;
            for (var r in e)
                n("/I" + (t = e[r]).i, t.n, "0", "R")
        }
          , k = function(t) {
            return "function" == typeof b["process" + t.toUpperCase()]
        }
          , A = function(t) {
            return "object" === re(t) && 1 === t.nodeType
        }
          , C = function(t, e) {
            if ("IMG" === t.nodeName && t.hasAttribute("src")) {
                var n = "" + t.getAttribute("src");
                if (0 === n.indexOf("data:image/"))
                    return unescape(n);
                !e && /\.png(?:[?#].*)?$/i.test(n) && (e = "png")
            }
            if ("CANVAS" === t.nodeName)
                var r = t;
            else {
                (r = document.createElement("canvas")).width = t.clientWidth || t.width,
                r.height = t.clientHeight || t.height;
                var i = r.getContext("2d");
                if (!i)
                    throw "addImage requires canvas to be supported by browser.";
                i.drawImage(t, 0, 0, r.width, r.height)
            }
            return r.toDataURL("png" == ("" + e).toLowerCase() ? "image/png" : "image/jpeg")
        }
          , I = function(t, e) {
            var n;
            if (e)
                for (var r in e)
                    if (t === e[r].alias) {
                        n = e[r];
                        break
                    }
            return n
        };
        b.color_spaces = {
            DEVICE_RGB: "DeviceRGB",
            DEVICE_GRAY: "DeviceGray",
            DEVICE_CMYK: "DeviceCMYK",
            CAL_GREY: "CalGray",
            CAL_RGB: "CalRGB",
            LAB: "Lab",
            ICC_BASED: "ICCBased",
            INDEXED: "Indexed",
            PATTERN: "Pattern",
            SEPARATION: "Separation",
            DEVICE_N: "DeviceN"
        },
        b.decode = {
            DCT_DECODE: "DCTDecode",
            FLATE_DECODE: "FlateDecode",
            LZW_DECODE: "LZWDecode",
            JPX_DECODE: "JPXDecode",
            JBIG2_DECODE: "JBIG2Decode",
            ASCII85_DECODE: "ASCII85Decode",
            ASCII_HEX_DECODE: "ASCIIHexDecode",
            RUN_LENGTH_DECODE: "RunLengthDecode",
            CCITT_FAX_DECODE: "CCITTFaxDecode"
        },
        b.image_compression = {
            NONE: "NONE",
            FAST: "FAST",
            MEDIUM: "MEDIUM",
            SLOW: "SLOW"
        },
        b.sHashCode = function(t) {
            return t = t || "",
            Array.prototype.reduce && t.split("").reduce(function(t, e) {
                return (t = (t << 5) - t + e.charCodeAt(0)) & t
            }, 0)
        }
        ,
        b.isString = function(t) {
            return "string" == typeof t
        }
        ,
        b.validateStringAsBase64 = function(t) {
            var e = !0;
            return (t = t || "").length % 4 != 0 && (e = !1),
            !1 === /[A-Za-z0-9\/]+/.test(t.substr(0, t.length - 2)) && (e = !1),
            !1 === /[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==/.test(t.substr(-2)) && (e = !1),
            e
        }
        ,
        b.extractInfoFromBase64DataURI = function(t) {
            return /^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t)
        }
        ,
        b.supportsArrayBuffer = function() {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
        }
        ,
        b.isArrayBuffer = function(t) {
            return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer
        }
        ,
        b.isArrayBufferView = function(t) {
            return !!this.supportsArrayBuffer() && ("undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array))
        }
        ,
        b.binaryStringToUint8Array = function(t) {
            for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
                n[r] = t.charCodeAt(r);
            return n
        }
        ,
        b.arrayBufferToBinaryString = function(t) {
            if ("function" == typeof atob)
                return atob(this.arrayBufferToBase64(t));
            if ("function" == typeof TextDecoder) {
                var e = new TextDecoder("ascii");
                if ("ascii" === e.encoding)
                    return e.decode(t)
            }
            for (var n = this.isArrayBuffer(t) ? t : new Uint8Array(t), r = 20480, i = "", o = Math.ceil(n.byteLength / r), s = 0; s < o; s++)
                i += String.fromCharCode.apply(null, n.slice(s * r, s * r + r));
            return i
        }
        ,
        b.arrayBufferToBase64 = function(t) {
            for (var e, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(t), o = i.byteLength, s = o % 3, a = o - s, c = 0; c < a; c += 3)
                n += r[(16515072 & (e = i[c] << 16 | i[c + 1] << 8 | i[c + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
            return 1 == s ? n += r[(252 & (e = i[a])) >> 2] + r[(3 & e) << 4] + "==" : 2 == s && (n += r[(64512 & (e = i[a] << 8 | i[a + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="),
            n
        }
        ,
        b.createImageInfo = function(t, e, n, r, i, o, s, a, c, u, h, l, f) {
            var p = {
                alias: a,
                w: e,
                h: n,
                cs: r,
                bpc: i,
                i: s,
                data: t
            };
            return o && (p.f = o),
            c && (p.dp = c),
            u && (p.trns = u),
            h && (p.pal = h),
            l && (p.smask = l),
            f && (p.p = f),
            p
        }
        ,
        b.addImage = function(t, e, n, r, i, o, s, a, c) {
            var u = "";
            if ("string" != typeof e) {
                var h = o;
                o = i,
                i = r,
                r = n,
                n = e,
                e = h
            }
            if ("object" === re(t) && !A(t) && "imageData"in t) {
                var l = t;
                t = l.imageData,
                e = l.format || e,
                n = l.x || n || 0,
                r = l.y || r || 0,
                i = l.w || i,
                o = l.h || o,
                s = l.alias || s,
                a = l.compression || a,
                c = l.rotation || l.angle || c
            }
            if ("string" == typeof t && (t = unescape(t)),
            isNaN(n) || isNaN(r))
                throw console.error("jsPDF.addImage: Invalid coordinates", arguments),
                new Error("Invalid coordinates passed to jsPDF.addImage");
            var f, p, d, g, m, y, w, v = function() {
                var t = this.internal.collections[x + "images"];
                return t || (this.internal.collections[x + "images"] = t = {},
                this.internal.events.subscribe("putResources", S),
                this.internal.events.subscribe("putXobjectDict", _)),
                t
            }
            .call(this);
            if (!(f = I(t, v)) && (A(t) && (t = C(t, e)),
            (null == (w = s) || 0 === w.length) && (s = "string" == typeof (y = t) && b.sHashCode(y)),
            !(f = I(s, v)))) {
                if (this.isString(t) && ("" !== (u = this.convertStringToImageData(t)) ? t = u : void 0 !== (u = this.loadImageFile(t)) && (t = u)),
                e = this.getImageFileTypeByImageData(t, e),
                !k(e))
                    throw new Error("addImage does not support files of type '" + e + "', please ensure that a plugin for '" + e + "' support is added.");
                if (this.supportsArrayBuffer() && (t instanceof Uint8Array || (p = t,
                t = this.binaryStringToUint8Array(t))),
                !(f = this["process" + e.toUpperCase()](t, (m = 0,
                (g = v) && (m = Object.keys ? Object.keys(g).length : function(t) {
                    var e = 0;
                    for (var n in t)
                        t.hasOwnProperty(n) && e++;
                    return e
                }(g)),
                m), s, ((d = a) && "string" == typeof d && (d = d.toUpperCase()),
                d in b.image_compression ? d : b.image_compression.NONE), p)))
                    throw new Error("An unkwown error occurred whilst processing the image")
            }
            return function(t, e, n, r, i, o, s, a) {
                var c = function(t, e, n) {
                    return t || e || (e = t = -96),
                    t < 0 && (t = -1 * n.w * 72 / t / this.internal.scaleFactor),
                    e < 0 && (e = -1 * n.h * 72 / e / this.internal.scaleFactor),
                    0 === t && (t = e * n.w / n.h),
                    0 === e && (e = t * n.h / n.w),
                    [t, e]
                }
                .call(this, n, r, i)
                  , u = this.internal.getCoordinateString
                  , h = this.internal.getVerticalCoordinateString;
                if (n = c[0],
                r = c[1],
                s[o] = i,
                a) {
                    a *= Math.PI / 180;
                    var l = Math.cos(a)
                      , f = Math.sin(a)
                      , p = function(t) {
                        return t.toFixed(4)
                    }
                      , d = [p(l), p(f), p(-1 * f), p(l), 0, 0, "cm"]
                }
                this.internal.write("q"),
                a ? (this.internal.write([1, "0", "0", 1, u(t), h(e + r), "cm"].join(" ")),
                this.internal.write(d.join(" ")),
                this.internal.write([u(n), "0", "0", u(r), "0", "0", "cm"].join(" "))) : this.internal.write([u(n), "0", "0", u(r), u(t), h(e + r), "cm"].join(" ")),
                this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
                this.internal.write("/I" + i.i + " Do"),
                this.internal.write("Q")
            }
            .call(this, n, r, i, o, f, f.i, v, c),
            this
        }
        ,
        b.convertStringToImageData = function(t) {
            var e, n = "";
            this.isString(t) && (null !== (e = this.extractInfoFromBase64DataURI(t)) ? b.validateStringAsBase64(e[3]) && (n = atob(e[3])) : b.validateStringAsBase64(t) && (n = atob(t)));
            return n
        }
        ;
        var u = function(t, e) {
            return t.subarray(e, e + 5)
        };
        b.processJPEG = function(t, e, n, r, i, o) {
            var s, a = this.decode.DCT_DECODE;
            if (!this.isString(t) && !this.isArrayBuffer(t) && !this.isArrayBufferView(t))
                return null;
            if (this.isString(t) && (s = function(t) {
                var e;
                if (255 === !t.charCodeAt(0) || 216 === !t.charCodeAt(1) || 255 === !t.charCodeAt(2) || 224 === !t.charCodeAt(3) || !t.charCodeAt(6) === "J".charCodeAt(0) || !t.charCodeAt(7) === "F".charCodeAt(0) || !t.charCodeAt(8) === "I".charCodeAt(0) || !t.charCodeAt(9) === "F".charCodeAt(0) || 0 === !t.charCodeAt(10))
                    throw new Error("getJpegSize requires a binary string jpeg file");
                for (var n = 256 * t.charCodeAt(4) + t.charCodeAt(5), r = 4, i = t.length; r < i; ) {
                    if (r += n,
                    255 !== t.charCodeAt(r))
                        throw new Error("getJpegSize could not find the size of the image");
                    if (192 === t.charCodeAt(r + 1) || 193 === t.charCodeAt(r + 1) || 194 === t.charCodeAt(r + 1) || 195 === t.charCodeAt(r + 1) || 196 === t.charCodeAt(r + 1) || 197 === t.charCodeAt(r + 1) || 198 === t.charCodeAt(r + 1) || 199 === t.charCodeAt(r + 1))
                        return e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6),
                        [256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8), e, t.charCodeAt(r + 9)];
                    r += 2,
                    n = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1)
                }
            }(t)),
            this.isArrayBuffer(t) && (t = new Uint8Array(t)),
            this.isArrayBufferView(t) && (s = function(t) {
                if (65496 != (t[0] << 8 | t[1]))
                    throw new Error("Supplied data is not a JPEG");
                for (var e, n = t.length, r = (t[4] << 8) + t[5], i = 4; i < n; ) {
                    if (r = ((e = u(t, i += r))[2] << 8) + e[3],
                    (192 === e[1] || 194 === e[1]) && 255 === e[0] && 7 < r)
                        return {
                            width: ((e = u(t, i + 5))[2] << 8) + e[3],
                            height: (e[0] << 8) + e[1],
                            numcomponents: e[4]
                        };
                    i += 2
                }
                throw new Error("getJpegSizeFromBytes could not find the size of the image")
            }(t),
            t = i || this.arrayBufferToBinaryString(t)),
            void 0 === o)
                switch (s.numcomponents) {
                case 1:
                    o = this.color_spaces.DEVICE_GRAY;
                    break;
                case 4:
                    o = this.color_spaces.DEVICE_CMYK;
                    break;
                default:
                case 3:
                    o = this.color_spaces.DEVICE_RGB
                }
            return this.createImageInfo(t, s.width, s.height, o, 8, a, e, n)
        }
        ,
        b.processJPG = function() {
            return this.processJPEG.apply(this, arguments)
        }
        ,
        b.loadImageFile = function(t, e, n) {
            e = e || !0,
            n = n || function() {}
            ;
            Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            if (void 0 !== ("undefined" == typeof window ? "undefined" : re(window)) && "object" === ("undefined" == typeof location ? "undefined" : re(location)) && "http" === location.protocol.substr(0, 4))
                return function(t, e, n) {
                    var r = new XMLHttpRequest
                      , i = []
                      , o = 0
                      , s = function(t) {
                        var e = t.length
                          , n = String.fromCharCode;
                        for (o = 0; o < e; o += 1)
                            i.push(n(255 & t.charCodeAt(o)));
                        return i.join("")
                    };
                    if (r.open("GET", t, !e),
                    r.overrideMimeType("text/plain; charset=x-user-defined"),
                    !1 === e && (r.onload = function() {
                        return s(this.responseText)
                    }
                    ),
                    r.send(null),
                    200 === r.status)
                        return e ? s(r.responseText) : void 0;
                    console.warn('Unable to load file "' + t + '"')
                }(t, e)
        }
        ,
        b.getImageProperties = function(t) {
            var e, n, r = "";
            if (A(t) && (t = C(t)),
            this.isString(t) && ("" !== (r = this.convertStringToImageData(t)) ? t = r : void 0 !== (r = this.loadImageFile(t)) && (t = r)),
            n = this.getImageFileTypeByImageData(t),
            !k(n))
                throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
            if (this.supportsArrayBuffer() && (t instanceof Uint8Array || (t = this.binaryStringToUint8Array(t))),
            !(e = this["process" + n.toUpperCase()](t)))
                throw new Error("An unkwown error occurred whilst processing the image");
            return {
                fileType: n,
                width: e.w,
                height: e.h,
                colorSpace: e.cs,
                compressionMode: e.f,
                bitsPerComponent: e.bpc
            }
        }
    }(rt.API),
    /**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    n = rt.API,
    w = {
        annotations: [],
        f2: function(t) {
            return t.toFixed(2)
        },
        notEmpty: function(t) {
            if (void 0 !== t && "" != t)
                return !0
        }
    },
    rt.API.annotationPlugin = w,
    rt.API.events.push(["addPage", function(t) {
        this.annotationPlugin.annotations[t.pageNumber] = []
    }
    ]),
    n.events.push(["putPage", function(t) {
        for (var e = this.annotationPlugin.annotations[t.pageNumber], n = !1, r = 0; r < e.length && !n; r++)
            switch ((c = e[r]).type) {
            case "link":
                if (w.notEmpty(c.options.url) || w.notEmpty(c.options.pageNumber)) {
                    n = !0;
                    break
                }
            case "reference":
            case "text":
            case "freetext":
                n = !0
            }
        if (0 != n) {
            this.internal.write("/Annots [");
            var i = this.annotationPlugin.f2
              , o = this.internal.scaleFactor
              , s = this.internal.pageSize.getHeight()
              , a = this.internal.getPageInfo(t.pageNumber);
            for (r = 0; r < e.length; r++) {
                var c;
                switch ((c = e[r]).type) {
                case "reference":
                    this.internal.write(" " + c.object.objId + " 0 R ");
                    break;
                case "text":
                    var u = this.internal.newAdditionalObject()
                      , h = this.internal.newAdditionalObject()
                      , l = c.title || "Note";
                    m = "<</Type /Annot /Subtype /Text " + (p = "/Rect [" + i(c.bounds.x * o) + " " + i(s - (c.bounds.y + c.bounds.h) * o) + " " + i((c.bounds.x + c.bounds.w) * o) + " " + i((s - c.bounds.y) * o) + "] ") + "/Contents (" + c.contents + ")",
                    m += " /Popup " + h.objId + " 0 R",
                    m += " /P " + a.objId + " 0 R",
                    m += " /T (" + l + ") >>",
                    u.content = m;
                    var f = u.objId + " 0 R";
                    m = "<</Type /Annot /Subtype /Popup " + (p = "/Rect [" + i((c.bounds.x + 30) * o) + " " + i(s - (c.bounds.y + c.bounds.h) * o) + " " + i((c.bounds.x + c.bounds.w + 30) * o) + " " + i((s - c.bounds.y) * o) + "] ") + " /Parent " + f,
                    c.open && (m += " /Open true"),
                    m += " >>",
                    h.content = m,
                    this.internal.write(u.objId, "0 R", h.objId, "0 R");
                    break;
                case "freetext":
                    var p = "/Rect [" + i(c.bounds.x * o) + " " + i((s - c.bounds.y) * o) + " " + i(c.bounds.x + c.bounds.w * o) + " " + i(s - (c.bounds.y + c.bounds.h) * o) + "] "
                      , d = c.color || "#000000";
                    m = "<</Type /Annot /Subtype /FreeText " + p + "/Contents (" + c.contents + ")",
                    m += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + d + ")",
                    m += " /Border [0 0 0]",
                    m += " >>",
                    this.internal.write(m);
                    break;
                case "link":
                    if (c.options.name) {
                        var g = this.annotations._nameMap[c.options.name];
                        c.options.pageNumber = g.page,
                        c.options.top = g.y
                    } else
                        c.options.top || (c.options.top = 0);
                    p = "/Rect [" + i(c.x * o) + " " + i((s - c.y) * o) + " " + i((c.x + c.w) * o) + " " + i((s - (c.y + c.h)) * o) + "] ";
                    var m = "";
                    if (c.options.url)
                        m = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /A <</S /URI /URI (" + c.options.url + ") >>";
                    else if (c.options.pageNumber)
                        switch (m = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /Dest [" + (t = this.internal.getPageInfo(c.options.pageNumber)).objId + " 0 R",
                        c.options.magFactor = c.options.magFactor || "XYZ",
                        c.options.magFactor) {
                        case "Fit":
                            m += " /Fit]";
                            break;
                        case "FitH":
                            m += " /FitH " + c.options.top + "]";
                            break;
                        case "FitV":
                            c.options.left = c.options.left || 0,
                            m += " /FitV " + c.options.left + "]";
                            break;
                        case "XYZ":
                        default:
                            var y = i((s - c.options.top) * o);
                            c.options.left = c.options.left || 0,
                            void 0 === c.options.zoom && (c.options.zoom = 0),
                            m += " /XYZ " + c.options.left + " " + y + " " + c.options.zoom + "]"
                        }
                    "" != m && (m += " >>",
                    this.internal.write(m))
                }
            }
            this.internal.write("]")
        }
    }
    ]),
    n.createAnnotation = function(t) {
        switch (t.type) {
        case "link":
            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
            break;
        case "text":
        case "freetext":
            this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t)
        }
    }
    ,
    n.link = function(t, e, n, r, i) {
        this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
            x: t,
            y: e,
            w: n,
            h: r,
            options: i,
            type: "link"
        })
    }
    ,
    n.textWithLink = function(t, e, n, r) {
        var i = this.getTextWidth(t)
          , o = this.internal.getLineHeight() / this.internal.scaleFactor;
        return this.text(t, e, n),
        n += .2 * o,
        this.link(e, n - o, i, o, r),
        i
    }
    ,
    n.getTextWidth = function(t) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
    }
    ,
    n.getLineHeight = function() {
        return this.internal.getLineHeight()
    }
    ,
    /**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    function(t) {
        var s = Object.keys({
            ar: "Arabic (Standard)",
            "ar-DZ": "Arabic (Algeria)",
            "ar-BH": "Arabic (Bahrain)",
            "ar-EG": "Arabic (Egypt)",
            "ar-IQ": "Arabic (Iraq)",
            "ar-JO": "Arabic (Jordan)",
            "ar-KW": "Arabic (Kuwait)",
            "ar-LB": "Arabic (Lebanon)",
            "ar-LY": "Arabic (Libya)",
            "ar-MA": "Arabic (Morocco)",
            "ar-OM": "Arabic (Oman)",
            "ar-QA": "Arabic (Qatar)",
            "ar-SA": "Arabic (Saudi Arabia)",
            "ar-SY": "Arabic (Syria)",
            "ar-TN": "Arabic (Tunisia)",
            "ar-AE": "Arabic (U.A.E.)",
            "ar-YE": "Arabic (Yemen)",
            fa: "Persian",
            "fa-IR": "Persian/Iran",
            ur: "Urdu"
        })
          , l = {
            1569: [65152],
            1570: [65153, 65154, 65153, 65154],
            1571: [65155, 65156, 65155, 65156],
            1572: [65157, 65158],
            1573: [65159, 65160, 65159, 65160],
            1574: [65161, 65162, 65163, 65164],
            1575: [65165, 65166, 65165, 65166],
            1576: [65167, 65168, 65169, 65170],
            1577: [65171, 65172],
            1578: [65173, 65174, 65175, 65176],
            1579: [65177, 65178, 65179, 65180],
            1580: [65181, 65182, 65183, 65184],
            1581: [65185, 65186, 65187, 65188],
            1582: [65189, 65190, 65191, 65192],
            1583: [65193, 65194, 65193],
            1584: [65195, 65196, 65195],
            1585: [65197, 65198, 65197],
            1586: [65199, 65200, 65199],
            1587: [65201, 65202, 65203, 65204],
            1588: [65205, 65206, 65207, 65208],
            1589: [65209, 65210, 65211, 65212],
            1590: [65213, 65214, 65215, 65216],
            1591: [65217, 65218, 65219, 65220],
            1592: [65221, 65222, 65223, 65224],
            1593: [65225, 65226, 65227, 65228],
            1594: [65229, 65230, 65231, 65232],
            1601: [65233, 65234, 65235, 65236],
            1602: [65237, 65238, 65239, 65240],
            1603: [65241, 65242, 65243, 65244],
            1604: [65245, 65246, 65247, 65248],
            1605: [65249, 65250, 65251, 65252],
            1606: [65253, 65254, 65255, 65256],
            1607: [65257, 65258, 65259, 65260],
            1608: [65261, 65262, 65261],
            1609: [65263, 65264, 64488, 64489],
            1610: [65265, 65266, 65267, 65268],
            1649: [64336, 64337],
            1655: [64477],
            1657: [64358, 64359, 64360, 64361],
            1658: [64350, 64351, 64352, 64353],
            1659: [64338, 64339, 64340, 64341],
            1662: [64342, 64343, 64344, 64345],
            1663: [64354, 64355, 64356, 64357],
            1664: [64346, 64347, 64348, 64349],
            1667: [64374, 64375, 64376, 64377],
            1668: [64370, 64371, 64372, 64373],
            1670: [64378, 64379, 64380, 64381],
            1671: [64382, 64383, 64384, 64385],
            1672: [64392, 64393],
            1676: [64388, 64389],
            1677: [64386, 64387],
            1678: [64390, 64391],
            1681: [64396, 64397],
            1688: [64394, 64395, 64394],
            1700: [64362, 64363, 64364, 64365],
            1702: [64366, 64367, 64368, 64369],
            1705: [64398, 64399, 64400, 64401],
            1709: [64467, 64468, 64469, 64470],
            1711: [64402, 64403, 64404, 64405],
            1713: [64410, 64411, 64412, 64413],
            1715: [64406, 64407, 64408, 64409],
            1722: [64414, 64415],
            1723: [64416, 64417, 64418, 64419],
            1726: [64426, 64427, 64428, 64429],
            1728: [64420, 64421],
            1729: [64422, 64423, 64424, 64425],
            1733: [64480, 64481],
            1734: [64473, 64474],
            1735: [64471, 64472],
            1736: [64475, 64476],
            1737: [64482, 64483],
            1739: [64478, 64479],
            1740: [64508, 64509, 64510, 64511],
            1744: [64484, 64485, 64486, 64487],
            1746: [64430, 64431],
            1747: [64432, 64433]
        }
          , f = {
            1570: [65269, 65270, 65269, 65270],
            1571: [65271, 65272, 65271, 65272],
            1573: [65273, 65274, 65273, 65274],
            1575: [65275, 65276, 65275, 65276]
        }
          , p = {
            1570: [65153, 65154, 65153, 65154],
            1571: [65155, 65156, 65155, 65156],
            1573: [65159, 65160, 65159, 65160],
            1575: [65165, 65166, 65165, 65166]
        }
          , d = {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
        }
          , e = [1570, 1571, 1573, 1575]
          , n = [1569, 1570, 1571, 1572, 1573, 1575, 1577, 1583, 1584, 1585, 1586, 1608, 1688]
          , o = 0
          , a = 1
          , c = 2
          , u = 3;
        function g(t) {
            return void 0 !== t && void 0 !== l[t.charCodeAt(0)]
        }
        function h(t) {
            return void 0 !== t && 0 <= n.indexOf(t.charCodeAt(0))
        }
        function m(t) {
            return void 0 !== t && 0 <= e.indexOf(t.charCodeAt(0))
        }
        function y(t) {
            return g(t) && 2 <= l[t.charCodeAt(0)].length
        }
        function w(t, e, n, r) {
            return g(t) ? (r = r || {},
            l = Object.assign(l, r),
            !y(t) || !g(e) && !g(n) || !g(n) && h(e) || h(t) && !g(e) || h(t) && m(e) || h(t) && h(e) ? (l = Object.assign(l, p),
            o) : g(i = t) && 4 == l[i.charCodeAt(0)].length && g(e) && !h(e) && g(n) && y(n) ? (l = Object.assign(l, p),
            u) : h(t) || !g(n) ? (l = Object.assign(l, p),
            a) : (l = Object.assign(l, p),
            c)) : -1;
            var i
        }
        var v = t.processArabic = function(t, e) {
            t = t || "",
            e = e || !1;
            var n, r, i, o = "", s = 0, a = 0, c = "", u = "", h = "";
            for (s = 0; s < t.length; s += 1)
                c = t[s],
                u = t[s - 1],
                h = t[s + 1],
                g(c) ? void 0 !== u && 1604 === u.charCodeAt(0) && m(c) ? (a = w(c, t[s - 2], t[s + 1], f),
                n = String.fromCharCode(f[c.charCodeAt(0)][a]),
                o = o.substr(0, o.length - 1) + n) : void 0 !== u && 1617 === u.charCodeAt(0) && (void 0 !== (r = c) && void 0 !== d[r.charCodeAt(0)]) ? (a = w(c, t[s - 2], t[s + 1], p),
                n = String.fromCharCode(d[c.charCodeAt(0)][a]),
                o = o.substr(0, o.length - 1) + n) : (a = w(c, u, h, p),
                o += String.fromCharCode(l[c.charCodeAt(0)][a])) : o += e ? {
                    "(": ")",
                    ")": "("
                }[i = c] || i : c;
            return e ? o.split("").reverse().join("") : o
        }
        ;
        t.events.push(["preProcessText", function(t) {
            var e = t.text
              , n = (t.x,
            t.y,
            t.options || {})
              , r = (t.mutex,
            n.lang)
              , i = [];
            if (0 <= s.indexOf(r)) {
                if ("[object Array]" === Object.prototype.toString.call(e)) {
                    var o = 0;
                    for (i = [],
                    o = 0; o < e.length; o += 1)
                        "[object Array]" === Object.prototype.toString.call(e[o]) ? i.push([v(e[o][0], !0), e[o][1], e[o][2]]) : i.push([v(e[o], !0)]);
                    t.text = i
                } else
                    t.text = v(e, !0);
                void 0 === n.charSpace && (t.options.charSpace = 0),
                !0 === n.R2L && (t.options.R2L = !1)
            }
        }
        ])
    }(rt.API),
    rt.API.autoPrint = function(t) {
        var e;
        switch ((t = t || {}).variant = t.variant || "non-conform",
        t.variant) {
        case "javascript":
            this.addJS("print({});");
            break;
        case "non-conform":
        default:
            this.internal.events.subscribe("postPutResources", function() {
                e = this.internal.newObject(),
                this.internal.out("<<"),
                this.internal.out("/S /Named"),
                this.internal.out("/Type /Action"),
                this.internal.out("/N /Print"),
                this.internal.out(">>"),
                this.internal.out("endobj")
            }),
            this.internal.events.subscribe("putCatalog", function() {
                this.internal.out("/OpenAction " + e + " 0 R")
            })
        }
        return this
    }
    ,
    (/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    r = rt.API).events.push(["initialized", function() {
        this.canvas.pdf = this
    }
    ]),
    r.canvas = {
        getContext: function(t) {
            return (this.pdf.context2d._canvas = this).pdf.context2d
        },
        childNodes: [],
        style: {},
        autoContext2dResizeX: !0,
        autoContext2dResizeY: !0
    },
    Object.defineProperty(r.canvas, "width", {
        get: function() {
            return this._width
        },
        set: function(t) {
            this._width = t,
            this.autoContext2dResizeX && (this.getContext("2d").pageWrapX = t + 1)
        }
    }),
    Object.defineProperty(r.canvas, "height", {
        get: function() {
            return this._height
        },
        set: function(t) {
            this._height = t,
            this.autoContext2dResizeY && (this.getContext("2d").pageWrapY = t + 1)
        }
    }),
    /**
   * @license
   * ====================================================================
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Hall, james@parall.ax
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
    C = rt.API,
    I = {
        x: void 0,
        y: void 0,
        w: void 0,
        h: void 0,
        ln: void 0
    },
    P = 1,
    p = function(t, e, n, r, i) {
        I = {
            x: t,
            y: e,
            w: n,
            h: r,
            ln: i
        }
    }
    ,
    d = function() {
        return I
    }
    ,
    F = {
        left: 0,
        top: 0,
        bottom: 0
    },
    C.setHeaderFunction = function(t) {
        c = t
    }
    ,
    C.getTextDimensions = function(t, e) {
        var n = this.table_font_size || this.internal.getFontSize()
          , r = (this.internal.getFont().fontStyle,
        (e = e || {}).scaleFactor || this.internal.scaleFactor)
          , i = 0
          , o = 0
          , s = 0;
        if ("string" == typeof t)
            0 != (i = this.getStringUnitWidth(t) * n) && (o = 1);
        else if ("[object Array]" === Object.prototype.toString.call(t)) {
            for (var a = 0; a < t.length; a++)
                i < (s = this.getStringUnitWidth(t[a]) * n) && (i = s);
            0 !== i && (o = t.length)
        } else
            console.error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");
        return {
            w: i /= r,
            h: o * n * 1.15 / r
        }
    }
    ,
    C.cellAddPage = function() {
        var t = this.margins || F;
        this.addPage(),
        p(t.left, t.top, void 0, void 0),
        P += 1
    }
    ,
    C.cellInitialize = function() {
        I = {
            x: void 0,
            y: void 0,
            w: void 0,
            h: void 0,
            ln: void 0
        },
        P = 1
    }
    ,
    C.cell = function(t, e, n, r, i, o, s) {
        var a = d()
          , c = !1;
        if (void 0 !== a.ln)
            if (a.ln === o)
                t = a.x + a.w,
                e = a.y;
            else {
                var u = this.margins || F;
                a.y + a.h + r + 13 >= this.internal.pageSize.getHeight() - u.bottom && (this.cellAddPage(),
                c = !0,
                this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o, !0)),
                e = d().y + d().h,
                c && (e = 23)
            }
        if (void 0 !== i[0])
            if (this.printingHeaderRow ? this.rect(t, e, n, r, "FD") : this.rect(t, e, n, r),
            "right" === s) {
                i instanceof Array || (i = [i]);
                for (var h = 0; h < i.length; h++) {
                    var l = i[h]
                      , f = this.getStringUnitWidth(l) * this.internal.getFontSize();
                    this.text(l, t + n - f - 3, e + this.internal.getLineHeight() * (h + 1))
                }
            } else
                this.text(i, t + 3, e + this.internal.getLineHeight());
        return p(t, e, n, r, o),
        this
    }
    ,
    C.arrayMax = function(t, e) {
        var n, r, i, o = t[0];
        for (n = 0,
        r = t.length; n < r; n += 1)
            i = t[n],
            e ? -1 === e(o, i) && (o = i) : o < i && (o = i);
        return o
    }
    ,
    C.table = function(t, e, n, r, i) {
        if (!n)
            throw "No data for PDF table";
        var o, s, a, c, u, h, l, f, p, d, g = [], m = [], y = {}, w = {}, v = [], b = [], x = !1, S = !0, _ = 12, k = F;
        if (k.width = this.internal.pageSize.getWidth(),
        i && (!0 === i.autoSize && (x = !0),
        !1 === i.printHeaders && (S = !1),
        i.fontSize && (_ = i.fontSize),
        i.css && void 0 !== i.css["font-size"] && (_ = 16 * i.css["font-size"]),
        i.margins && (k = i.margins)),
        this.lnMod = 0,
        I = {
            x: void 0,
            y: void 0,
            w: void 0,
            h: void 0,
            ln: void 0
        },
        P = 1,
        this.printHeaders = S,
        this.margins = k,
        this.setFontSize(_),
        this.table_font_size = _,
        null == r)
            g = Object.keys(n[0]);
        else if (r[0] && "string" != typeof r[0])
            for (s = 0,
            a = r.length; s < a; s += 1)
                o = r[s],
                g.push(o.name),
                m.push(o.prompt),
                w[o.name] = o.width * (19.049976 / 25.4);
        else
            g = r;
        if (x)
            for (d = function(t) {
                return t[o]
            }
            ,
            s = 0,
            a = g.length; s < a; s += 1) {
                for (y[o = g[s]] = n.map(d),
                v.push(this.getTextDimensions(m[s] || o, {
                    scaleFactor: 1
                }).w),
                l = 0,
                c = (h = y[o]).length; l < c; l += 1)
                    u = h[l],
                    v.push(this.getTextDimensions(u, {
                        scaleFactor: 1
                    }).w);
                w[o] = C.arrayMax(v),
                v = []
            }
        if (S) {
            var A = this.calculateLineHeight(g, w, m.length ? m : g);
            for (s = 0,
            a = g.length; s < a; s += 1)
                o = g[s],
                b.push([t, e, w[o], A, String(m.length ? m[s] : o)]);
            this.setTableHeaderRow(b),
            this.printHeaderRow(1, !1)
        }
        for (s = 0,
        a = n.length; s < a; s += 1)
            for (f = n[s],
            A = this.calculateLineHeight(g, w, f),
            l = 0,
            p = g.length; l < p; l += 1)
                o = g[l],
                this.cell(t, e, w[o], A, f[o], s + 2, o.align);
        return this.lastCellPos = I,
        this.table_x = t,
        this.table_y = e,
        this
    }
    ,
    C.calculateLineHeight = function(t, e, n) {
        for (var r, i = 0, o = 0; o < t.length; o++) {
            n[r = t[o]] = this.splitTextToSize(String(n[r]), e[r] - 3);
            var s = this.internal.getLineHeight() * n[r].length + 3;
            i < s && (i = s)
        }
        return i
    }
    ,
    C.setTableHeaderRow = function(t) {
        this.tableHeaderRow = t
    }
    ,
    C.printHeaderRow = function(t, e) {
        if (!this.tableHeaderRow)
            throw "Property tableHeaderRow does not exist.";
        var n, r, i, o;
        if (this.printingHeaderRow = !0,
        void 0 !== c) {
            var s = c(this, P);
            p(s[0], s[1], s[2], s[3], -1)
        }
        this.setFontStyle("bold");
        var a = [];
        for (i = 0,
        o = this.tableHeaderRow.length; i < o; i += 1)
            this.setFillColor(200, 200, 200),
            n = this.tableHeaderRow[i],
            e && (this.margins.top = 13,
            n[1] = this.margins && this.margins.top || 0,
            a.push(n)),
            r = [].concat(n),
            this.cell.apply(this, r.concat(t));
        0 < a.length && this.setTableHeaderRow(a),
        this.setFontStyle("normal"),
        this.printingHeaderRow = !1
    }
    ,
    /**
   * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
    function(t, A) {
        t.events.push(["initialized", function() {
            ((this.context2d.pdf = this).context2d.internal.pdf = this).context2d.ctx = new e,
            this.context2d.ctxStack = [],
            this.context2d.path = []
        }
        ]),
        t.context2d = {
            pageWrapXEnabled: !1,
            pageWrapYEnabled: !1,
            pageWrapX: 9999999,
            pageWrapY: 9999999,
            ctx: new e,
            f2: function(t) {
                return t.toFixed(2)
            },
            fill: function() {
                this._drawPaths("fill", !1)
            },
            stroke: function() {
                this._drawPaths("stroke", !1)
            },
            beginPath: function() {
                this._resetPath(),
                this._beginPath()
            },
            moveTo: function(t, e) {
                t = this._wrapX(t),
                e = this._wrapY(e);
                var n = this._matrix_map_point(this.ctx._transform, [t, e])
                  , r = {
                    type: "mt",
                    x: t = n[0],
                    y: e = n[1]
                };
                this.path.push(r)
            },
            closePath: function() {
                this._closePath();
                this.path.push({
                    type: "close"
                })
            },
            lineTo: function(t, e) {
                t = this._wrapX(t),
                e = this._wrapY(e);
                var n = this._matrix_map_point(this.ctx._transform, [t, e])
                  , r = {
                    type: "lt",
                    x: t = n[0],
                    y: e = n[1]
                };
                this.path.push(r)
            },
            clip: function() {
                this._drawPaths(null, !0)
            },
            quadraticCurveTo: function(t, e, n, r) {
                var i, o = this._wrapX(t), s = this._wrapY(e);
                n = this._wrapX(n),
                r = this._wrapY(r),
                n = (i = this._matrix_map_point(this.ctx._transform, [n, r]))[0],
                r = i[1];
                var a = {
                    type: "qct",
                    x1: o = (i = this._matrix_map_point(this.ctx._transform, [o, s]))[0],
                    y1: s = i[1],
                    x: n,
                    y: r
                };
                this.path.push(a)
            },
            bezierCurveTo: function(t, e, n, r, i, o) {
                var s, a = this._wrapX(t), c = this._wrapY(e), u = this._wrapX(n), h = this._wrapY(r);
                i = this._wrapX(i),
                o = this._wrapY(o),
                i = (s = this._matrix_map_point(this.ctx._transform, [i, o]))[0],
                o = s[1];
                var l = {
                    type: "bct",
                    x1: a = (s = this._matrix_map_point(this.ctx._transform, [a, c]))[0],
                    y1: c = s[1],
                    x2: u = (s = this._matrix_map_point(this.ctx._transform, [u, h]))[0],
                    y2: h = s[1],
                    x: i,
                    y: o
                };
                this.path.push(l)
            },
            arc: function(t, e, n, r, i, o) {
                if (t = this._wrapX(t),
                e = this._wrapY(e),
                o = o || !1,
                !this._matrix_is_identity(this.ctx._transform)) {
                    var s = this._matrix_map_point(this.ctx._transform, [t, e]);
                    t = s[0],
                    e = s[1];
                    var a = this._matrix_map_point(this.ctx._transform, [0, 0])
                      , c = this._matrix_map_point(this.ctx._transform, [0, n]);
                    n = Math.sqrt(Math.pow(c[0] - a[0], 2) + Math.pow(c[1] - a[1], 2))
                }
                var u = {
                    type: "arc",
                    x: t,
                    y: e,
                    radius: n,
                    startAngle: r,
                    endAngle: i,
                    counterclockwise: o
                };
                this.path.push(u)
            },
            arcTo: function(t, e, n, r, i) {},
            rect: function(t, e, n, r) {
                this.moveTo(t, e),
                this.lineTo(t + n, e),
                this.lineTo(t + n, e + r),
                this.lineTo(t, e + r),
                this.lineTo(t, e),
                this.lineTo(t + n, e),
                this.lineTo(t, e)
            },
            fillRect: function(t, e, n, r) {
                if (!this._isFillTransparent()) {
                    t = this._wrapX(t),
                    e = this._wrapY(e);
                    var i = this._matrix_map_point(this.ctx._transform, [t, e])
                      , o = this._matrix_map_point(this.ctx._transform, [t + n, e])
                      , s = this._matrix_map_point(this.ctx._transform, [t + n, e + r])
                      , a = this._matrix_map_point(this.ctx._transform, [t, e + r]);
                    this.pdf.internal.out("q"),
                    this.pdf.setLineCap("butt"),
                    this.pdf.setLineJoin("miter");
                    var c = [];
                    c.push([o[0] - i[0], o[1] - i[1]]),
                    c.push([s[0] - o[0], s[1] - o[1]]),
                    c.push([a[0] - s[0], a[1] - s[1]]),
                    c.push([i[0] - a[0], i[1] - a[1]]),
                    c.push([o[0] - i[0], o[1] - i[1]]),
                    c.push([i[0] - o[0], i[1] - o[1]]),
                    this.pdf.lines(c, i[0], i[1], null, "F"),
                    this.pdf.internal.out("Q")
                }
            },
            strokeRect: function(t, e, n, r) {
                if (!this._isStrokeTransparent()) {
                    t = this._wrapX(t),
                    e = this._wrapY(e);
                    var i = this._matrix_map_point(this.ctx._transform, [t, e])
                      , o = this._matrix_map_point(this.ctx._transform, [t + n, e])
                      , s = this._matrix_map_point(this.ctx._transform, [t + n, e + r])
                      , a = this._matrix_map_point(this.ctx._transform, [t, e + r])
                      , c = [];
                    c.push([o[0] - i[0], o[1] - i[1]]),
                    c.push([s[0] - o[0], s[1] - o[1]]),
                    c.push([a[0] - s[0], a[1] - s[1]]),
                    c.push([i[0] - a[0], i[1] - a[1]]),
                    c.push([o[0] - i[0], o[1] - i[1]]),
                    c.push([i[0] - o[0], i[1] - o[1]]),
                    this.pdf.lines(c, i[0], i[1], null, "S")
                }
            },
            clearRect: function(t, e, n, r) {
                this.ctx.ignoreClearRect || (this.save(),
                this._setFillStyle("#ffffff"),
                this.fillRect(t, e, n, r),
                this.restore())
            },
            save: function() {
                this.pdf.internal.out("q"),
                this.ctx._fontSize = this.pdf.internal.getFontSize();
                var t = new e;
                t.copy(this.ctx),
                this.ctxStack.push(this.ctx),
                this.ctx = t
            },
            restore: function() {
                this.pdf.internal.out("Q"),
                0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(),
                this._setFillStyle(this.ctx.fillStyle),
                this._setStrokeStyle(this.ctx.strokeStyle),
                this._setFont(this.ctx.font),
                this.pdf.setFontSize(this.ctx._fontSize),
                this._setLineCap(this.ctx.lineCap),
                this._setLineWidth(this.ctx.lineWidth),
                this._setLineJoin(this.ctx.lineJoin))
            },
            createEvent: function() {
                console.log("createEvent not implemented (yet)")
            },
            toDataURL: function() {
                console.log("toDataUrl not implemented (yet)")
            },
            _beginPath: function() {
                this.path.push({
                    type: "begin"
                })
            },
            _closePath: function() {
                var t = {
                    x: 0,
                    y: 0
                }
                  , e = 0;
                this.path.length;
                for (e = this.path.length - 1; -1 !== e; e--)
                    if ("begin" === this.path[e].type && "object" === re(this.path[e + 1]) && "number" == typeof this.path[e + 1].x) {
                        var n = {
                            type: "lt",
                            x: (t = {
                                x: this.path[e + 1].x,
                                y: this.path[e + 1].y
                            }).x,
                            y: t.y
                        };
                        this.path.push(n);
                        break
                    }
                "object" === re(this.path[e + 2]) && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2])))
            },
            _resetPath: function() {
                this.path = []
            },
            _getRGBA: function(t) {
                var e, n, r, i;
                !0 === t.isCanvasGradient && (t = t.getColor());
                var o = new RGBColor(t);
                if (!t)
                    return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        style: t
                    };
                if (this.internal.rxTransparent.test(t))
                    i = r = n = e = 0;
                else {
                    var s = this.internal.rxRgb.exec(t);
                    null != s ? (e = parseInt(s[1]),
                    n = parseInt(s[2]),
                    r = parseInt(s[3]),
                    i = 1) : null != (s = this.internal.rxRgba.exec(t)) ? (e = parseInt(s[1]),
                    n = parseInt(s[2]),
                    r = parseInt(s[3]),
                    i = parseFloat(s[4])) : (i = 1,
                    "#" != t.charAt(0) && (t = o.ok ? o.toHex() : "#000000"),
                    4 === t.length ? (e = t.substring(1, 2),
                    e += e,
                    n = t.substring(2, 3),
                    n += n,
                    r = t.substring(3, 4),
                    r += r) : (e = t.substring(1, 3),
                    n = t.substring(3, 5),
                    r = t.substring(5, 7)),
                    e = parseInt(e, 16),
                    n = parseInt(n, 16),
                    r = parseInt(r, 16))
                }
                return {
                    r: e,
                    g: n,
                    b: r,
                    a: i,
                    style: t
                }
            },
            _isFillTransparent: function() {
                return this.ctx._isFillTransparent || 0 == this.globalAlpha
            },
            _isStrokeTransparent: function() {
                return this.ctx._isStrokeTransparent || 0 == this.globalAlpha
            },
            _setFillStyle: function(t) {
                var e;
                e = this._getRGBA(t),
                this.ctx.fillStyle = t,
                this.ctx._isFillTransparent = 0 === e.a,
                this.ctx._fillOpacity = e.a,
                this.pdf.setFillColor(e.r, e.g, e.b, {
                    a: e.a
                }),
                this.pdf.setTextColor(e.r, e.g, e.b, {
                    a: e.a
                })
            },
            _setStrokeStyle: function(t) {
                var e = this._getRGBA(t);
                this.ctx.strokeStyle = e.style,
                this.ctx._isStrokeTransparent = 0 === e.a,
                this.ctx._strokeOpacity = e.a,
                0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a,
                this.pdf.setDrawColor(e.r, e.g, e.b))
            },
            _setFont: function(t) {
                var e;
                if (this.ctx.font = t,
                null != (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                    var n = e[1]
                      , r = (e[2],
                    e[3])
                      , i = e[4]
                      , o = e[5]
                      , s = e[6];
                    i = "px" === o ? Math.floor(parseFloat(i)) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i)),
                    this.pdf.setFontSize(i);
                    var a = "";
                    ("bold" === r || 700 <= parseInt(r, 10) || "bold" === n) && (a = "bold"),
                    "italic" === n && (a += "italic"),
                    0 === a.length && (a = "normal");
                    for (var c = "", u = s.toLowerCase().replace(/"|'/g, "").split(/\s*,\s*/), h = {
                        arial: "Helvetica",
                        verdana: "Helvetica",
                        helvetica: "Helvetica",
                        "sans-serif": "Helvetica",
                        fixed: "Courier",
                        monospace: "Courier",
                        terminal: "Courier",
                        courier: "Courier",
                        times: "Times",
                        cursive: "Times",
                        fantasy: "Times",
                        serif: "Times"
                    }, l = 0; l < u.length; l++) {
                        if (void 0 !== this.pdf.internal.getFont(u[l], a, {
                            noFallback: !0,
                            disableWarning: !0
                        })) {
                            c = u[l];
                            break
                        }
                        if ("bolditalic" === a && void 0 !== this.pdf.internal.getFont(u[l], "bold", {
                            noFallback: !0,
                            disableWarning: !0
                        }))
                            c = u[l],
                            a = "bold";
                        else if (void 0 !== this.pdf.internal.getFont(u[l], "normal", {
                            noFallback: !0,
                            disableWarning: !0
                        })) {
                            c = u[l],
                            a = "normal";
                            break
                        }
                    }
                    if ("" === c)
                        for (l = 0; l < u.length; l++)
                            if (h[u[l]]) {
                                c = h[u[l]];
                                break
                            }
                    c = "" === c ? "Times" : c,
                    this.pdf.setFont(c, a)
                }
            },
            _setTextBaseline: function(t) {
                this.ctx.textBaseline = t
            },
            _getTextBaseline: function() {
                return this.ctx.textBaseline
            },
            _setTextAlign: function(t) {
                switch (t) {
                case "right":
                case "end":
                    this.ctx.textAlign = "right";
                    break;
                case "center":
                    this.ctx.textAlign = "center";
                    break;
                case "left":
                case "start":
                default:
                    this.ctx.textAlign = "left"
                }
            },
            _getTextAlign: function() {
                return this.ctx.textAlign
            },
            fillText: function(t, e, n, r) {
                if (!this._isFillTransparent()) {
                    e = this._wrapX(e),
                    n = this._wrapY(n);
                    var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                    e = i[0],
                    n = i[1];
                    var o = 57.2958 * this._matrix_rotation(this.ctx._transform)
                      , s = 1;
                    try {
                        s = this._matrix_decompose(this._getTransform()).scale[0]
                    } catch (t) {
                        console.warn(t)
                    }
                    if (s < .01)
                        this.pdf.text(t, e, this._getBaseline(n), {
                            angle: o,
                            align: this.textAlign
                        });
                    else {
                        var a = this.pdf.internal.getFontSize();
                        this.pdf.setFontSize(a * s),
                        this.pdf.text(t, e, this._getBaseline(n), {
                            angle: o,
                            align: this.textAlign
                        }),
                        this.pdf.setFontSize(a)
                    }
                }
            },
            strokeText: function(t, e, n, r) {
                if (!this._isStrokeTransparent()) {
                    e = this._wrapX(e),
                    n = this._wrapY(n);
                    var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                    e = i[0],
                    n = i[1];
                    var o = 57.2958 * this._matrix_rotation(this.ctx._transform)
                      , s = 1;
                    try {
                        s = this._matrix_decompose(this._getTransform()).scale[0]
                    } catch (t) {
                        console.warn(t)
                    }
                    if (s < .01)
                        this.pdf.text(t, e, this._getBaseline(n), {
                            angle: o,
                            align: this.textAlign,
                            renderingMode: "stroke"
                        });
                    else {
                        var a = this.pdf.internal.getFontSize();
                        this.pdf.setFontSize(a * s),
                        this.pdf.text(t, e, this._getBaseline(n), {
                            angle: o,
                            align: this.textAlign,
                            renderingMode: "stroke"
                        }),
                        this.pdf.setFontSize(a)
                    }
                }
            },
            measureText: function(n) {
                var r = this.pdf;
                return {
                    getWidth: function() {
                        var t = r.internal.getFontSize()
                          , e = r.getStringUnitWidth(n) * t / r.internal.scaleFactor;
                        return e *= 1.3333
                    },
                    get width() {
                        return this.getWidth(n)
                    }
                }
            },
            _setLineWidth: function(t) {
                this.ctx.lineWidth = t,
                this.pdf.setLineWidth(t)
            },
            _setLineCap: function(t) {
                this.ctx.lineCap = t,
                this.pdf.setLineCap(t)
            },
            _setLineJoin: function(t) {
                this.ctx.lineJoin = t,
                this.pdf.setLineJoin(t)
            },
            _getLineJoin: function() {
                return this.ctx.lineJoin
            },
            _wrapX: function(t) {
                return this.pageWrapXEnabled ? t % this.pageWrapX : t
            },
            _wrapY: function(t) {
                return this.pageWrapYEnabled ? (this._gotoPage(this._page(t)),
                (t - this.lastBreak) % this.pageWrapY) : t
            },
            scale: function(t, e) {
                var n = [t, 0, 0, e, 0, 0];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, n)
            },
            rotate: function(t) {
                var e = [Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, e)
            },
            translate: function(t, e) {
                var n = [1, 0, 0, 1, t, e];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, n)
            },
            transform: function(t, e, n, r, i, o) {
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, [t, e, n, r, i, o])
            },
            setTransform: function(t, e, n, r, i, o) {
                this.ctx._transform = [t, e, n, r, i, o]
            },
            _getTransform: function() {
                return this.ctx._transform
            },
            lastBreak: 0,
            pageBreaks: [],
            _page: function(t) {
                if (this.pageWrapYEnabled) {
                    for (var e = this.lastBreak = 0, n = 0, r = 0; r < this.pageBreaks.length; r++)
                        if (t >= this.pageBreaks[r]) {
                            e++,
                            0 === this.lastBreak && n++;
                            var i = this.pageBreaks[r] - this.lastBreak;
                            this.lastBreak = this.pageBreaks[r],
                            n += Math.floor(i / this.pageWrapY)
                        }
                    if (0 === this.lastBreak)
                        n += Math.floor(t / this.pageWrapY) + 1;
                    return n + e
                }
                return this.pdf.internal.getCurrentPageInfo().pageNumber
            },
            _gotoPage: function(t) {},
            drawImage: function(t, e, n, r, i, o, s, a, c) {
                void 0 !== o && (e = o,
                n = s,
                r = a,
                i = c),
                e = this._wrapX(e),
                n = this._wrapY(n);
                var u, h = this._matrix_map_rect(this.ctx._transform, {
                    x: e,
                    y: n,
                    w: r,
                    h: i
                }), l = (this._matrix_map_rect(this.ctx._transform, {
                    x: o,
                    y: s,
                    w: a,
                    h: c
                }),
                /data:image\/(\w+).*/i.exec(t));
                u = null != l ? l[1] : "png",
                this.pdf.addImage(t, u, h.x, h.y, h.w, h.h)
            },
            _matrix_multiply: function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , c = n * t[0] + r * t[2]
                  , u = i * t[0] + o * t[2]
                  , h = s * t[0] + a * t[2] + t[4];
                return r = n * t[1] + r * t[3],
                o = i * t[1] + o * t[3],
                a = s * t[1] + a * t[3] + t[5],
                [n = c, r, i = u, o, s = h, a]
            },
            _matrix_rotation: function(t) {
                return Math.atan2(t[2], t[0])
            },
            _matrix_decompose: function(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , o = Math.sqrt(e * e + n * n)
                  , s = (e /= o) * r + (n /= o) * i;
                r -= e * s,
                i -= n * s;
                var a = Math.sqrt(r * r + i * i);
                return s /= a,
                e * (i /= a) < n * (r /= a) && (e = -e,
                n = -n,
                s = -s,
                o = -o),
                {
                    scale: [o, 0, 0, a, 0, 0],
                    translate: [1, 0, 0, 1, t[4], t[5]],
                    rotate: [e, n, -n, e, 0, 0],
                    skew: [1, 0, s, 1, 0, 0]
                }
            },
            _matrix_map_point: function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , o = t[3]
                  , s = t[4]
                  , a = t[5]
                  , c = e[0]
                  , u = e[1];
                return [c * n + u * i + s, c * r + u * o + a]
            },
            _matrix_map_point_obj: function(t, e) {
                var n = this._matrix_map_point(t, [e.x, e.y]);
                return {
                    x: n[0],
                    y: n[1]
                }
            },
            _matrix_map_rect: function(t, e) {
                var n = this._matrix_map_point(t, [e.x, e.y])
                  , r = this._matrix_map_point(t, [e.x + e.w, e.y + e.h]);
                return {
                    x: n[0],
                    y: n[1],
                    w: r[0] - n[0],
                    h: r[1] - n[1]
                }
            },
            _matrix_is_identity: function(t) {
                return 1 == t[0] && (0 == t[1] && (0 == t[2] && (1 == t[3] && (0 == t[4] && 0 == t[5]))))
            },
            _drawPaths: function(t, e) {
                var n = "stroke" === t
                  , r = !n;
                if ((!n || e || !this._isStrokeTransparent()) && (!r || e || !this._isFillTransparent())) {
                    this.pdf.internal.newObject2;
                    A.outIntercept ? "group" === A.outIntercept.type ? A.outIntercept.stream : A.outIntercept : this.internal.getCurrentPage();
                    var i = []
                      , o = A.outIntercept;
                    this.ctx.globalAlpha;
                    this.ctx._fillOpacity < 1 && this.ctx._fillOpacity;
                    for (var s, a = this.path, c = 0; c < a.length; c++) {
                        var u = a[c];
                        switch (u.type) {
                        case "begin":
                            i.push({
                                begin: !0
                            });
                            break;
                        case "close":
                            i.push({
                                close: !0
                            });
                            break;
                        case "mt":
                            i.push({
                                start: u,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var h = [u.x - a[c - 1].x, u.y - a[c - 1].y]
                              , l = i.length;
                            if (0 < l)
                                for (; 0 < l; l--)
                                    if (!0 !== i[l - 1].close && !0 !== i[l - 1].begin) {
                                        i[l - 1].deltas.push(h),
                                        i[l - 1].abs.push(u);
                                        break
                                    }
                            break;
                        case "bct":
                            h = [u.x1 - a[c - 1].x, u.y1 - a[c - 1].y, u.x2 - a[c - 1].x, u.y2 - a[c - 1].y, u.x - a[c - 1].x, u.y - a[c - 1].y];
                            i[i.length - 1].deltas.push(h);
                            break;
                        case "qct":
                            var f = a[c - 1].x + 2 / 3 * (u.x1 - a[c - 1].x)
                              , p = a[c - 1].y + 2 / 3 * (u.y1 - a[c - 1].y)
                              , d = u.x + 2 / 3 * (u.x1 - u.x)
                              , g = u.y + 2 / 3 * (u.y1 - u.y)
                              , m = u.x
                              , y = u.y;
                            h = [f - a[c - 1].x, p - a[c - 1].y, d - a[c - 1].x, g - a[c - 1].y, m - a[c - 1].x, y - a[c - 1].y];
                            i[i.length - 1].deltas.push(h);
                            break;
                        case "arc":
                            i.push({
                                deltas: [],
                                abs: []
                            }),
                            i[i.length - 1].arc = !0,
                            Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(u)
                        }
                    }
                    s = e ? null : n ? "S" : "f";
                    for (c = 0; c < i.length; c++) {
                        if (i[c].begin,
                        i[c].arc) {
                            i[c].start && this.internal.move2(this, i[c].start.x, i[c].start.y);
                            for (var w = i[c].abs, v = 0; v < w.length; v++) {
                                var b = w[v];
                                if (void 0 !== b.startAngle) {
                                    var x = 360 * b.startAngle / (2 * Math.PI)
                                      , S = 360 * b.endAngle / (2 * Math.PI)
                                      , _ = b.x
                                      , k = b.y;
                                    this.internal.arc2(this, _, k, b.radius, x, S, b.counterclockwise, s, e)
                                } else
                                    this.internal.line2(C, b.x, b.y)
                            }
                        }
                        if (!i[c].arc && !0 !== i[c].close && !0 !== i[c].begin) {
                            _ = i[c].start.x,
                            k = i[c].start.y;
                            this.pdf.lines(i[c].deltas, _, k, null, null)
                        }
                        i[c].close
                    }
                    s && this.pdf.internal.out(s),
                    e && this.pdf.clip(),
                    A.outIntercept = o
                }
            },
            _getBaseline: function(t) {
                var e = parseInt(this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor)
                  , n = .25 * e;
                switch (this.ctx.textBaseline) {
                case "bottom":
                    return t - n;
                case "top":
                    return t + e;
                case "hanging":
                    return t + e - n;
                case "middle":
                    return t + e / 2 - n;
                case "ideographic":
                    return t;
                case "alphabetic":
                default:
                    return t
                }
            },
            createLinearGradient: function() {
                var t = function() {};
                return t.colorStops = [],
                t.addColorStop = function(t, e) {
                    this.colorStops.push([t, e])
                }
                ,
                t.getColor = function() {
                    return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
                }
                ,
                t.isCanvasGradient = !0,
                t
            },
            createPattern: function() {
                return this.createLinearGradient()
            },
            createRadialGradient: function() {
                return this.createLinearGradient()
            }
        };
        var C = t.context2d;
        function e() {
            this._isStrokeTransparent = !1,
            this._strokeOpacity = 1,
            this.strokeStyle = "#000000",
            this.fillStyle = "#000000",
            this._isFillTransparent = !1,
            this._fillOpacity = 1,
            this.font = "12pt times",
            this.textBaseline = "alphabetic",
            this.textAlign = "left",
            this.lineWidth = 1,
            this.lineJoin = "miter",
            this.lineCap = "butt",
            this._transform = [1, 0, 0, 1, 0, 0],
            this.globalCompositeOperation = "normal",
            this.globalAlpha = 1,
            this._clip_path = [],
            this.currentPoint = {
                x: 0,
                y: 0
            },
            this.ignoreClearRect = !1,
            this.copy = function(t) {
                this._isStrokeTransparent = t._isStrokeTransparent,
                this._strokeOpacity = t._strokeOpacity,
                this.strokeStyle = t.strokeStyle,
                this._isFillTransparent = t._isFillTransparent,
                this._fillOpacity = t._fillOpacity,
                this.fillStyle = t.fillStyle,
                this.font = t.font,
                this.lineWidth = t.lineWidth,
                this.lineJoin = t.lineJoin,
                this.lineCap = t.lineCap,
                this.textBaseline = t.textBaseline,
                this.textAlign = t.textAlign,
                this._fontSize = t._fontSize,
                this._transform = t._transform.slice(0),
                this.globalCompositeOperation = t.globalCompositeOperation,
                this.globalAlpha = t.globalAlpha,
                this._clip_path = t._clip_path.slice(0),
                this.currentPoint = t.currentPoint,
                this.ignoreClearRect = t.ignoreClearRect
            }
        }
        Object.defineProperty(C, "fillStyle", {
            set: function(t) {
                this._setFillStyle(t)
            },
            get: function() {
                return this.ctx.fillStyle
            }
        }),
        Object.defineProperty(C, "strokeStyle", {
            set: function(t) {
                this._setStrokeStyle(t)
            },
            get: function() {
                return this.ctx.strokeStyle
            }
        }),
        Object.defineProperty(C, "lineCap", {
            set: function(t) {
                this._setLineCap(t)
            },
            get: function() {
                return this.ctx.lineCap
            }
        }),
        Object.defineProperty(C, "lineWidth", {
            set: function(t) {
                this._setLineWidth(t)
            },
            get: function() {
                return this.ctx.lineWidth
            }
        }),
        Object.defineProperty(C, "lineJoin", {
            set: function(t) {
                this._setLineJoin(t)
            },
            get: function() {
                return this.ctx.lineJoin
            }
        }),
        Object.defineProperty(C, "miterLimit", {
            set: function(t) {
                this.ctx.miterLimit = t
            },
            get: function() {
                return this.ctx.miterLimit
            }
        }),
        Object.defineProperty(C, "textBaseline", {
            set: function(t) {
                this._setTextBaseline(t)
            },
            get: function() {
                return this._getTextBaseline()
            }
        }),
        Object.defineProperty(C, "textAlign", {
            set: function(t) {
                this._setTextAlign(t)
            },
            get: function() {
                return this._getTextAlign()
            }
        }),
        Object.defineProperty(C, "font", {
            set: function(t) {
                this._setFont(t)
            },
            get: function() {
                return this.ctx.font
            }
        }),
        Object.defineProperty(C, "globalCompositeOperation", {
            set: function(t) {
                this.ctx.globalCompositeOperation = t
            },
            get: function() {
                return this.ctx.globalCompositeOperation
            }
        }),
        Object.defineProperty(C, "globalAlpha", {
            set: function(t) {
                this.ctx.globalAlpha = t
            },
            get: function() {
                return this.ctx.globalAlpha
            }
        }),
        Object.defineProperty(C, "canvas", {
            get: function() {
                return {
                    parentNode: !1,
                    style: !1
                }
            }
        }),
        Object.defineProperty(C, "ignoreClearRect", {
            set: function(t) {
                this.ctx.ignoreClearRect = t
            },
            get: function() {
                return this.ctx.ignoreClearRect
            }
        }),
        C.internal = {},
        C.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
        C.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/,
        C.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/,
        C.internal.arc = function(t, e, n, r, i, o, s, a) {
            for (var c = this.pdf.internal.scaleFactor, u = this.pdf.internal.pageSize.getHeight(), h = this.pdf.internal.f2, l = i * (Math.PI / 180), f = o * (Math.PI / 180), p = this.createArc(r, l, f, s), d = 0; d < p.length; d++) {
                var g = p[d];
                0 === d ? this.pdf.internal.out([h((g.x1 + e) * c), h((u - (g.y1 + n)) * c), "m", h((g.x2 + e) * c), h((u - (g.y2 + n)) * c), h((g.x3 + e) * c), h((u - (g.y3 + n)) * c), h((g.x4 + e) * c), h((u - (g.y4 + n)) * c), "c"].join(" ")) : this.pdf.internal.out([h((g.x2 + e) * c), h((u - (g.y2 + n)) * c), h((g.x3 + e) * c), h((u - (g.y3 + n)) * c), h((g.x4 + e) * c), h((u - (g.y4 + n)) * c), "c"].join(" ")),
                t._lastPoint = {
                    x: e,
                    y: n
                }
            }
            null !== a && this.pdf.internal.out(this.pdf.internal.getStyle(a))
        }
        ,
        C.internal.arc2 = function(t, e, n, r, i, o, s, a, c) {
            var u = e
              , h = n;
            c ? (this.arc(t, u, h, r, i, o, s, null),
            this.pdf.clip()) : this.arc(t, u, h, r, i, o, s, a)
        }
        ,
        C.internal.move2 = function(t, e, n) {
            var r = this.pdf.internal.scaleFactor
              , i = this.pdf.internal.pageSize.getHeight()
              , o = this.pdf.internal.f2;
            this.pdf.internal.out([o(e * r), o((i - n) * r), "m"].join(" ")),
            t._lastPoint = {
                x: e,
                y: n
            }
        }
        ,
        C.internal.line2 = function(t, e, n) {
            var r = this.pdf.internal.scaleFactor
              , i = this.pdf.internal.pageSize.getHeight()
              , o = this.pdf.internal.f2
              , s = {
                x: e,
                y: n
            };
            this.pdf.internal.out([o(s.x * r), o((i - s.y) * r), "l"].join(" ")),
            t._lastPoint = s
        }
        ,
        C.internal.createArc = function(t, e, n, r) {
            var i = 2 * Math.PI
              , o = e;
            (o < i || i < o) && (o %= i);
            var s = n;
            (s < i || i < s) && (s %= i);
            for (var a = [], c = Math.PI / 2, u = r ? -1 : 1, h = e, l = Math.min(i, Math.abs(s - o)); 1e-5 < l; ) {
                var f = h + u * Math.min(l, c);
                a.push(this.createSmallArc(t, h, f)),
                l -= Math.abs(f - h),
                h = f
            }
            return a
        }
        ,
        C.internal.getCurrentPage = function() {
            return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber]
        }
        ,
        C.internal.createSmallArc = function(t, e, n) {
            var r = (n - e) / 2
              , i = t * Math.cos(r)
              , o = t * Math.sin(r)
              , s = i
              , a = -o
              , c = s * s + a * a
              , u = c + s * i + a * o
              , h = 4 / 3 * (Math.sqrt(2 * c * u) - u) / (s * o - a * i)
              , l = s - h * a
              , f = a + h * s
              , p = l
              , d = -f
              , g = r + e
              , m = Math.cos(g)
              , y = Math.sin(g);
            return {
                x1: t * Math.cos(e),
                y1: t * Math.sin(e),
                x2: l * m - f * y,
                y2: l * y + f * m,
                x3: p * m - d * y,
                y3: p * y + d * m,
                x4: t * Math.cos(n),
                y4: t * Math.sin(n)
            }
        }
    }(rt.API, "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()),
    /**
   * Copyright (c) 2018 Erik Koopmans
   * Released under the MIT License.
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    i = rt.API,
    o = "undefined" != typeof window && window || "undefined" != typeof global && global,
    s = function(t) {
        var e = re(t);
        return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown"
    }
    ,
    a = function(t, e) {
        var n = document.createElement(t);
        if (e.className && (n.className = e.className),
        e.innerHTML) {
            n.innerHTML = e.innerHTML;
            for (var r = n.getElementsByTagName("script"), i = r.length; 0 < i--; null)
                r[i].parentNode.removeChild(r[i])
        }
        for (var o in e.style)
            n.style[o] = e.style[o];
        return n
    }
    ,
    (((u = function t(e) {
        var n = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template)))
          , r = t.convert(Promise.resolve(), n);
        return r = (r = r.setProgress(1, t, 1, [t])).set(e)
    }
    ).prototype = Object.create(Promise.prototype)).constructor = u).convert = function(t, e) {
        return t.__proto__ = e || u.prototype,
        t
    }
    ,
    u.template = {
        prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null,
            callback: function() {}
        },
        progress: {
            val: 0,
            state: null,
            n: 0,
            stack: []
        },
        opt: {
            filename: "file.pdf",
            margin: [0, 0, 0, 0],
            enableLinks: !0,
            html2canvas: {},
            jsPDF: {}
        }
    },
    u.prototype.from = function(t, e) {
        return this.then(function() {
            switch (e = e || function(t) {
                switch (s(t)) {
                case "string":
                    return "string";
                case "element":
                    return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";
                default:
                    return "unknown"
                }
            }(t)) {
            case "string":
                return this.set({
                    src: a("div", {
                        innerHTML: t
                    })
                });
            case "element":
                return this.set({
                    src: t
                });
            case "canvas":
                return this.set({
                    canvas: t
                });
            case "img":
                return this.set({
                    img: t
                });
            default:
                return this.error("Unknown source type.")
            }
        })
    }
    ,
    u.prototype.to = function(t) {
        switch (t) {
        case "container":
            return this.toContainer();
        case "canvas":
            return this.toCanvas();
        case "img":
            return this.toImg();
        case "pdf":
            return this.toPdf();
        default:
            return this.error("Invalid target.")
        }
    }
    ,
    u.prototype.toContainer = function() {
        return this.thenList([function() {
            return this.prop.src || this.error("Cannot duplicate - no source HTML.")
        }
        , function() {
            return this.prop.pageSize || this.setPageSize()
        }
        ]).then(function() {
            var t = {
                position: "relative",
                display: "inline-block",
                width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
                left: 0,
                right: 0,
                top: 0,
                margin: "auto",
                backgroundColor: "white"
            }
              , e = function t(e, n) {
                for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling)
                    !0 !== n && 1 === i.nodeType && "SCRIPT" === i.nodeName || r.appendChild(t(i, n));
                return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (r.width = e.width,
                r.height = e.height,
                r.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (r.value = e.value),
                r.addEventListener("load", function() {
                    r.scrollTop = e.scrollTop,
                    r.scrollLeft = e.scrollLeft
                }, !0)),
                r
            }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"),
            this.prop.overlay = a("div", {
                className: "html2pdf__overlay",
                style: {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1e3,
                    left: "-100000px",
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }),
            this.prop.container = a("div", {
                className: "html2pdf__container",
                style: t
            }),
            this.prop.container.appendChild(e),
            this.prop.container.firstChild.appendChild(a("div", {
                style: {
                    clear: "both",
                    border: "0 none transparent",
                    margin: 0,
                    padding: 0,
                    height: 0
                }
            })),
            this.prop.container.style.float = "none",
            this.prop.overlay.appendChild(this.prop.container),
            document.body.appendChild(this.prop.overlay),
            this.prop.container.firstChild.style.position = "relative",
            this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
        })
    }
    ,
    u.prototype.toCanvas = function() {
        var t = [function() {
            return document.body.contains(this.prop.container) || this.toContainer()
        }
        ];
        return this.thenList(t).then(function() {
            var t = Object.assign({}, this.opt.html2canvas);
            if (delete t.onrendered,
            this.isHtml2CanvasLoaded())
                return html2canvas(this.prop.container, t)
        }).then(function(t) {
            (this.opt.html2canvas.onrendered || function() {}
            )(t),
            this.prop.canvas = t,
            document.body.removeChild(this.prop.overlay)
        })
    }
    ,
    u.prototype.toContext2d = function() {
        var t = [function() {
            return document.body.contains(this.prop.container) || this.toContainer()
        }
        ];
        return this.thenList(t).then(function() {
            this.opt.jsPDF;
            var t = Object.assign({
                async: !0,
                allowTaint: !0,
                backgroundColor: "#ffffff",
                imageTimeout: 15e3,
                logging: !0,
                proxy: null,
                removeContainer: !0,
                foreignObjectRendering: !1,
                useCORS: !1
            }, this.opt.html2canvas);
            if (delete t.onrendered,
            t.windowHeight = t.windowHeight || 0,
            t.windowHeight = 0 == t.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : t.windowHeight,
            this.isHtml2CanvasLoaded())
                return html2canvas(this.prop.container, t)
        }).then(function(t) {
            (this.opt.html2canvas.onrendered || function() {}
            )(t),
            this.prop.canvas = t,
            document.body.removeChild(this.prop.overlay)
        })
    }
    ,
    u.prototype.toImg = function() {
        return this.thenList([function() {
            return this.prop.canvas || this.toCanvas()
        }
        ]).then(function() {
            var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
            this.prop.img = document.createElement("img"),
            this.prop.img.src = t
        })
    }
    ,
    u.prototype.toPdf = function() {
        return this.thenList([function() {
            return this.toContext2d()
        }
        ]).then(function() {
            this.prop.pdf = this.prop.pdf || this.opt.jsPDF
        })
    }
    ,
    u.prototype.output = function(t, e, n) {
        return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e)
    }
    ,
    u.prototype.outputPdf = function(t, e) {
        return this.thenList([function() {
            return this.prop.pdf || this.toPdf()
        }
        ]).then(function() {
            return this.prop.pdf.output(t, e)
        })
    }
    ,
    u.prototype.outputImg = function(t, e) {
        return this.thenList([function() {
            return this.prop.img || this.toImg()
        }
        ]).then(function() {
            switch (t) {
            case void 0:
            case "img":
                return this.prop.img;
            case "datauristring":
            case "dataurlstring":
                return this.prop.img.src;
            case "datauri":
            case "dataurl":
                return document.location.href = this.prop.img.src;
            default:
                throw 'Image output type "' + t + '" is not supported.'
            }
        })
    }
    ,
    u.prototype.isHtml2CanvasLoaded = function() {
        var t = void 0 !== o.html2canvas;
        return t || console.error("html2canvas not loaded."),
        t
    }
    ,
    u.prototype.save = function(t) {
        if (this.isHtml2CanvasLoaded())
            return this.thenList([function() {
                return this.prop.pdf || this.toPdf()
            }
            ]).set(t ? {
                filename: t
            } : null).then(function() {
                this.prop.pdf.save(this.opt.filename)
            })
    }
    ,
    u.prototype.doCallback = function(t) {
        if (this.isHtml2CanvasLoaded())
            return this.thenList([function() {
                return this.prop.pdf || this.toPdf()
            }
            ]).then(function() {
                this.prop.callback(this.prop.pdf)
            })
    }
    ,
    u.prototype.set = function(e) {
        if ("object" !== s(e))
            return this;
        var t = Object.keys(e || {}).map(function(t) {
            if (t in u.template.prop)
                return function() {
                    this.prop[t] = e[t]
                }
                ;
            switch (t) {
            case "margin":
                return this.setMargin.bind(this, e.margin);
            case "jsPDF":
                return function() {
                    return this.opt.jsPDF = e.jsPDF,
                    this.setPageSize()
                }
                ;
            case "pageSize":
                return this.setPageSize.bind(this, e.pageSize);
            default:
                return function() {
                    this.opt[t] = e[t]
                }
            }
        }, this);
        return this.then(function() {
            return this.thenList(t)
        })
    }
    ,
    u.prototype.get = function(e, n) {
        return this.then(function() {
            var t = e in u.template.prop ? this.prop[e] : this.opt[e];
            return n ? n(t) : t
        })
    }
    ,
    u.prototype.setMargin = function(t) {
        return this.then(function() {
            switch (s(t)) {
            case "number":
                t = [t, t, t, t];
            case "array":
                if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
                4 === t.length)
                    break;
            default:
                return this.error("Invalid margin array.")
            }
            this.opt.margin = t
        }).then(this.setPageSize)
    }
    ,
    u.prototype.setPageSize = function(t) {
        function e(t, e) {
            return Math.floor(t * e / 72 * 96)
        }
        return this.then(function() {
            (t = t || rt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
                width: t.width - this.opt.margin[1] - this.opt.margin[3],
                height: t.height - this.opt.margin[0] - this.opt.margin[2]
            },
            t.inner.px = {
                width: e(t.inner.width, t.k),
                height: e(t.inner.height, t.k)
            },
            t.inner.ratio = t.inner.height / t.inner.width),
            this.prop.pageSize = t
        })
    }
    ,
    u.prototype.setProgress = function(t, e, n, r) {
        return null != t && (this.progress.val = t),
        null != e && (this.progress.state = e),
        null != n && (this.progress.n = n),
        null != r && (this.progress.stack = r),
        this.progress.ratio = this.progress.val / this.progress.state,
        this
    }
    ,
    u.prototype.updateProgress = function(t, e, n, r) {
        return this.setProgress(t ? this.progress.val + t : null, e || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null)
    }
    ,
    u.prototype.then = function(t, e) {
        var n = this;
        return this.thenCore(t, e, function(e, t) {
            return n.updateProgress(null, null, 1, [e]),
            Promise.prototype.then.call(this, function(t) {
                return n.updateProgress(null, e),
                t
            }).then(e, t).then(function(t) {
                return n.updateProgress(1),
                t
            })
        })
    }
    ,
    u.prototype.thenCore = function(t, e, n) {
        n = n || Promise.prototype.then;
        var r = this;
        t && (t = t.bind(r)),
        e && (e = e.bind(r));
        var i = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? r : u.convert(Object.assign({}, r), Promise.prototype)
          , o = n.call(i, t, e);
        return u.convert(o, r.__proto__)
    }
    ,
    u.prototype.thenExternal = function(t, e) {
        return Promise.prototype.then.call(this, t, e)
    }
    ,
    u.prototype.thenList = function(t) {
        var e = this;
        return t.forEach(function(t) {
            e = e.thenCore(t)
        }),
        e
    }
    ,
    u.prototype.catch = function(t) {
        t && (t = t.bind(this));
        var e = Promise.prototype.catch.call(this, t);
        return u.convert(e, this)
    }
    ,
    u.prototype.catchExternal = function(t) {
        return Promise.prototype.catch.call(this, t)
    }
    ,
    u.prototype.error = function(t) {
        return this.then(function() {
            throw new Error(t)
        })
    }
    ,
    u.prototype.using = u.prototype.set,
    u.prototype.saveAs = u.prototype.save,
    u.prototype.export = u.prototype.output,
    u.prototype.run = u.prototype.then,
    rt.getPageSize = function(t, e, n) {
        if ("object" === re(t)) {
            var r = t;
            t = r.orientation,
            e = r.unit || e,
            n = r.format || n
        }
        e = e || "mm",
        n = n || "a4",
        t = ("" + (t || "P")).toLowerCase();
        var i = ("" + n).toLowerCase()
          , o = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243]
        };
        switch (e) {
        case "pt":
            var s = 1;
            break;
        case "mm":
            s = 72 / 25.4;
            break;
        case "cm":
            s = 72 / 2.54;
            break;
        case "in":
            s = 72;
            break;
        case "px":
            s = .75;
            break;
        case "pc":
        case "em":
            s = 12;
            break;
        case "ex":
            s = 6;
            break;
        default:
            throw "Invalid unit: " + e
        }
        if (o.hasOwnProperty(i))
            var a = o[i][1] / s
              , c = o[i][0] / s;
        else
            try {
                a = n[1],
                c = n[0]
            } catch (t) {
                throw new Error("Invalid format: " + n)
            }
        if ("p" === t || "portrait" === t) {
            if (t = "p",
            a < c) {
                var u = c;
                c = a,
                a = u
            }
        } else {
            if ("l" !== t && "landscape" !== t)
                throw "Invalid orientation: " + t;
            t = "l",
            c < a && (u = c,
            c = a,
            a = u)
        }
        return {
            width: c,
            height: a,
            unit: e,
            k: s
        }
    }
    ,
    i.html = function(t, e) {
        (e = e || {}).callback = e.callback || function() {}
        ,
        e.html2canvas = e.html2canvas || {},
        e.html2canvas.canvas = e.html2canvas.canvas || this.canvas,
        e.jsPDF = e.jsPDF || this;
        var s = e.jsPDF;
        s.annotations = {
            _nameMap: [],
            createAnnotation: function(t, e) {
                var n, r = s.context2d._wrapX(e.left), i = s.context2d._wrapY(e.top), o = (s.context2d._page(e.top),
                t.indexOf("#"));
                n = 0 <= o ? {
                    name: t.substring(o + 1)
                } : {
                    url: t
                },
                s.link(r, i, e.right - e.left, e.bottom - e.top, n)
            },
            setName: function(t, e) {
                var n = s.context2d._wrapX(e.left)
                  , r = s.context2d._wrapY(e.top)
                  , i = s.context2d._page(e.top);
                this._nameMap[t] = {
                    page: i,
                    x: n,
                    y: r
                }
            }
        },
        s.context2d._pageBreakAt = function(t) {
            this.pageBreaks.push(t)
        }
        ,
        s.context2d._gotoPage = function(t) {
            for (; s.internal.getNumberOfPages() < t; )
                s.addPage();
            s.setPage(t)
        }
        ,
        s.context2d.pageWrapYEnabled = !0,
        s.context2d.pageWrapY = s.internal.pageSize.getHeight() / s.internal.scaleFactor + 1,
        s.canvas.autoContext2dResizeY = !1;
        var n = new u(e);
        return e.worker ? n : n.from(t).doCallback()
    }
    ,
    rt.API.addJS = function(t) {
        return f = t,
        this.internal.events.subscribe("postPutResources", function(t) {
            h = this.internal.newObject(),
            this.internal.out("<<"),
            this.internal.out("/Names [(EmbeddedJS) " + (h + 1) + " 0 R]"),
            this.internal.out(">>"),
            this.internal.out("endobj"),
            l = this.internal.newObject(),
            this.internal.out("<<"),
            this.internal.out("/S /JavaScript"),
            this.internal.out("/JS (" + f + ")"),
            this.internal.out(">>"),
            this.internal.out("endobj")
        }),
        this.internal.events.subscribe("putCatalog", function() {
            void 0 !== h && void 0 !== l && this.internal.out("/Names <</JavaScript " + h + " 0 R>>")
        }),
        this
    }
    ,
    (/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    g = rt.API).events.push(["postPutResources", function() {
        var t = this
          , e = /^(\d+) 0 obj$/;
        if (0 < this.outline.root.children.length)
            for (var n = t.outline.render().split(/\r\n/), r = 0; r < n.length; r++) {
                var i = n[r]
                  , o = e.exec(i);
                if (null != o) {
                    var s = o[1];
                    t.internal.newObjectDeferredBegin(s)
                }
                t.internal.write(i)
            }
        if (this.outline.createNamedDestinations) {
            var a = this.internal.pages.length
              , c = [];
            for (r = 0; r < a; r++) {
                var u = t.internal.newObject();
                c.push(u);
                var h = t.internal.getPageInfo(r + 1);
                t.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj")
            }
            var l = t.internal.newObject();
            for (t.internal.write("<< /Names [ "),
            r = 0; r < c.length; r++)
                t.internal.write("(page_" + (r + 1) + ")" + c[r] + " 0 R");
            t.internal.write(" ] >>", "endobj"),
            t.internal.newObject(),
            t.internal.write("<< /Dests " + l + " 0 R"),
            t.internal.write(">>", "endobj")
        }
    }
    ]),
    g.events.push(["putCatalog", function() {
        0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)),
        this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"))
    }
    ]),
    g.events.push(["initialized", function() {
        var o = this;
        o.outline = {
            createNamedDestinations: !1,
            root: {
                children: []
            }
        },
        o.outline.add = function(t, e, n) {
            var r = {
                title: e,
                options: n,
                children: []
            };
            return null == t && (t = this.root),
            t.children.push(r),
            r
        }
        ,
        o.outline.render = function() {
            return this.ctx = {},
            this.ctx.val = "",
            this.ctx.pdf = o,
            this.genIds_r(this.root),
            this.renderRoot(this.root),
            this.renderItems(this.root),
            this.ctx.val
        }
        ,
        o.outline.genIds_r = function(t) {
            t.id = o.internal.newObjectDeferred();
            for (var e = 0; e < t.children.length; e++)
                this.genIds_r(t.children[e])
        }
        ,
        o.outline.renderRoot = function(t) {
            this.objStart(t),
            this.line("/Type /Outlines"),
            0 < t.children.length && (this.line("/First " + this.makeRef(t.children[0])),
            this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
            this.line("/Count " + this.count_r({
                count: 0
            }, t)),
            this.objEnd()
        }
        ,
        o.outline.renderItems = function(t) {
            for (var e = 0; e < t.children.length; e++) {
                var n = t.children[e];
                this.objStart(n),
                this.line("/Title " + this.makeString(n.title)),
                this.line("/Parent " + this.makeRef(t)),
                0 < e && this.line("/Prev " + this.makeRef(t.children[e - 1])),
                e < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[e + 1])),
                0 < n.children.length && (this.line("/First " + this.makeRef(n.children[0])),
                this.line("/Last " + this.makeRef(n.children[n.children.length - 1])));
                var r = this.count = this.count_r({
                    count: 0
                }, n);
                if (0 < r && this.line("/Count " + r),
                n.options && n.options.pageNumber) {
                    var i = o.internal.getPageInfo(n.options.pageNumber);
                    this.line("/Dest [" + i.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.getHeight() * this.ctx.pdf.internal.scaleFactor + " 0]")
                }
                this.objEnd()
            }
            for (e = 0; e < t.children.length; e++)
                n = t.children[e],
                this.renderItems(n)
        }
        ,
        o.outline.line = function(t) {
            this.ctx.val += t + "\r\n"
        }
        ,
        o.outline.makeRef = function(t) {
            return t.id + " 0 R"
        }
        ,
        o.outline.makeString = function(t) {
            return "(" + o.internal.pdfEscape(t) + ")"
        }
        ,
        o.outline.objStart = function(t) {
            this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
        }
        ,
        o.outline.objEnd = function(t) {
            this.ctx.val += ">> \r\nendobj\r\n"
        }
        ,
        o.outline.count_r = function(t, e) {
            for (var n = 0; n < e.children.length; n++)
                t.count++,
                this.count_r(t, e.children[n]);
            return t.count
        }
    }
    ]),
    /**
   * @license
   *
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   * ====================================================================
   */
    q = rt.API,
    j = function() {
        var t = "function" == typeof Deflater;
        if (!t)
            throw new Error("requires deflate.js for compression");
        return t
    }
    ,
    T = function(t, e, n, r) {
        var i = 5
          , o = S;
        switch (r) {
        case q.image_compression.FAST:
            i = 3,
            o = x;
            break;
        case q.image_compression.MEDIUM:
            i = 6,
            o = _;
            break;
        case q.image_compression.SLOW:
            i = 9,
            o = k
        }
        t = v(t, e, n, o);
        var s = new Uint8Array(m(i))
          , a = y(t)
          , c = new Deflater(i)
          , u = c.append(t)
          , h = c.flush()
          , l = s.length + u.length + h.length
          , f = new Uint8Array(l + 4);
        return f.set(s),
        f.set(u, s.length),
        f.set(h, s.length + u.length),
        f[l++] = a >>> 24 & 255,
        f[l++] = a >>> 16 & 255,
        f[l++] = a >>> 8 & 255,
        f[l++] = 255 & a,
        q.arrayBufferToBinaryString(f)
    }
    ,
    m = function(t, e) {
        var n = Math.LOG2E * Math.log(32768) - 8 << 4 | 8
          , r = n << 8;
        return r |= Math.min(3, (e - 1 & 255) >> 1) << 6,
        r |= 0,
        [n, 255 & (r += 31 - r % 31)]
    }
    ,
    y = function(t, e) {
        for (var n, r = 1, i = 0, o = t.length, s = 0; 0 < o; ) {
            for (o -= n = e < o ? e : o; i += r += t[s++],
            --n; )
                ;
            r %= 65521,
            i %= 65521
        }
        return (i << 16 | r) >>> 0
    }
    ,
    v = function(t, e, n, r) {
        for (var i, o, s, a = t.length / e, c = new Uint8Array(t.length + a), u = O(), h = 0; h < a; h++) {
            if (s = h * e,
            i = t.subarray(s, s + e),
            r)
                c.set(r(i, n, o), s + h);
            else {
                for (var l = 0, f = u.length, p = []; l < f; l++)
                    p[l] = u[l](i, n, o);
                var d = B(p.concat());
                c.set(p[d], s + h)
            }
            o = i
        }
        return c
    }
    ,
    b = function(t, e, n) {
        var r = Array.apply([], t);
        return r.unshift(0),
        r
    }
    ,
    x = function(t, e, n) {
        var r, i = [], o = 0, s = t.length;
        for (i[0] = 1; o < s; o++)
            r = t[o - e] || 0,
            i[o + 1] = t[o] - r + 256 & 255;
        return i
    }
    ,
    S = function(t, e, n) {
        var r, i = [], o = 0, s = t.length;
        for (i[0] = 2; o < s; o++)
            r = n && n[o] || 0,
            i[o + 1] = t[o] - r + 256 & 255;
        return i
    }
    ,
    _ = function(t, e, n) {
        var r, i, o = [], s = 0, a = t.length;
        for (o[0] = 3; s < a; s++)
            r = t[s - e] || 0,
            i = n && n[s] || 0,
            o[s + 1] = t[s] + 256 - (r + i >>> 1) & 255;
        return o
    }
    ,
    k = function(t, e, n) {
        var r, i, o, s, a = [], c = 0, u = t.length;
        for (a[0] = 4; c < u; c++)
            r = t[c - e] || 0,
            i = n && n[c] || 0,
            o = n && n[c - e] || 0,
            s = A(r, i, o),
            a[c + 1] = t[c] - s + 256 & 255;
        return a
    }
    ,
    A = function(t, e, n) {
        var r = t + e - n
          , i = Math.abs(r - t)
          , o = Math.abs(r - e)
          , s = Math.abs(r - n);
        return i <= o && i <= s ? t : o <= s ? e : n
    }
    ,
    O = function() {
        return [b, x, S, _, k]
    }
    ,
    B = function(t) {
        for (var e, n, r, i = 0, o = t.length; i < o; )
            ((e = D(t[i].slice(1))) < n || !n) && (n = e,
            r = i),
            i++;
        return r
    }
    ,
    D = function(t) {
        for (var e = 0, n = t.length, r = 0; e < n; )
            r += Math.abs(t[e++]);
        return r
    }
    ,
    q.processPNG = function(t, e, n, r, i) {
        var o, s, a, c, u, h, l = this.color_spaces.DEVICE_RGB, f = this.decode.FLATE_DECODE, p = 8;
        if (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
        this.isArrayBufferView(t)) {
            if ("function" != typeof PNG || "function" != typeof St)
                throw new Error("PNG support requires png.js and zlib.js");
            if (t = (o = new PNG(t)).imgData,
            p = o.bits,
            l = o.colorSpace,
            c = o.colors,
            -1 !== [4, 6].indexOf(o.colorType)) {
                if (8 === o.bits)
                    for (var d, g = (C = 32 == o.pixelBitlength ? new Uint32Array(o.decodePixels().buffer) : 16 == o.pixelBitlength ? new Uint16Array(o.decodePixels().buffer) : new Uint8Array(o.decodePixels().buffer)).length, m = new Uint8Array(g * o.colors), y = new Uint8Array(g), w = o.pixelBitlength - o.bits, v = 0, b = 0; v < g; v++) {
                        for (x = C[v],
                        d = 0; d < w; )
                            m[b++] = x >>> d & 255,
                            d += o.bits;
                        y[v] = x >>> d & 255
                    }
                if (16 === o.bits) {
                    g = (C = new Uint32Array(o.decodePixels().buffer)).length,
                    m = new Uint8Array(g * (32 / o.pixelBitlength) * o.colors),
                    y = new Uint8Array(g * (32 / o.pixelBitlength));
                    for (var x, S = 1 < o.colors, _ = b = v = 0; v < g; )
                        x = C[v++],
                        m[b++] = x >>> 0 & 255,
                        S && (m[b++] = x >>> 16 & 255,
                        x = C[v++],
                        m[b++] = x >>> 0 & 255),
                        y[_++] = x >>> 16 & 255;
                    p = 8
                }
                r !== q.image_compression.NONE && j() ? (t = T(m, o.width * o.colors, o.colors, r),
                h = T(y, o.width, 1, r)) : (t = m,
                h = y,
                f = null)
            }
            if (3 === o.colorType && (l = this.color_spaces.INDEXED,
            u = o.palette,
            o.transparency.indexed)) {
                var k = o.transparency.indexed
                  , A = 0;
                for (v = 0,
                g = k.length; v < g; ++v)
                    A += k[v];
                if ((A /= 255) == g - 1 && -1 !== k.indexOf(0))
                    a = [k.indexOf(0)];
                else if (A !== g) {
                    var C = o.decodePixels();
                    for (y = new Uint8Array(C.length),
                    v = 0,
                    g = C.length; v < g; v++)
                        y[v] = k[C[v]];
                    h = T(y, o.width, 1)
                }
            }
            var I = function(t) {
                var e;
                switch (t) {
                case q.image_compression.FAST:
                    e = 11;
                    break;
                case q.image_compression.MEDIUM:
                    e = 13;
                    break;
                case q.image_compression.SLOW:
                    e = 14;
                    break;
                default:
                    e = 12
                }
                return e
            }(r);
            return s = f === this.decode.FLATE_DECODE ? "/Predictor " + I + " /Colors " + c + " /BitsPerComponent " + p + " /Columns " + o.width : "/Colors " + c + " /BitsPerComponent " + p + " /Columns " + o.width,
            (this.isArrayBuffer(t) || this.isArrayBufferView(t)) && (t = this.arrayBufferToBinaryString(t)),
            (h && this.isArrayBuffer(h) || this.isArrayBufferView(h)) && (h = this.arrayBufferToBinaryString(h)),
            this.createImageInfo(t, o.width, o.height, l, p, f, e, n, s, a, u, h, I)
        }
        throw new Error("Unsupported PNG image data, try using JPEG instead.")
    }
    ,
    (/**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    E = rt.API).processGIF89A = function(t, e, n, r, i) {
        var o = new vt(t)
          , s = o.width
          , a = o.height
          , c = [];
        o.decodeAndBlitFrameRGBA(0, c);
        var u = {
            data: c,
            width: s,
            height: a
        }
          , h = new JPEGEncoder(100).encode(u, 100);
        return E.processJPEG.call(this, h, e, n, r)
    }
    ,
    E.processGIF87A = E.processGIF89A,
    (/**
   * Copyright (c) 2018 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    R = rt.API).processBMP = function(t, e, n, r, i) {
        var o = new BmpDecoder(t,!1)
          , s = o.width
          , a = o.height
          , c = {
            data: o.getData(),
            width: s,
            height: a
        }
          , u = new JPEGEncoder(100).encode(c, 100);
        return R.processJPEG.call(this, u, e, n, r)
    }
    ,
    rt.API.setLanguage = function(t) {
        return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {},
        this.internal.languageSettings.isSubscribed = !1),
        void 0 !== {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic (Standard)",
            "ar-DZ": "Arabic (Algeria)",
            "ar-BH": "Arabic (Bahrain)",
            "ar-EG": "Arabic (Egypt)",
            "ar-IQ": "Arabic (Iraq)",
            "ar-JO": "Arabic (Jordan)",
            "ar-KW": "Arabic (Kuwait)",
            "ar-LB": "Arabic (Lebanon)",
            "ar-LY": "Arabic (Libya)",
            "ar-MA": "Arabic (Morocco)",
            "ar-OM": "Arabic (Oman)",
            "ar-QA": "Arabic (Qatar)",
            "ar-SA": "Arabic (Saudi Arabia)",
            "ar-SY": "Arabic (Syria)",
            "ar-TN": "Arabic (Tunisia)",
            "ar-AE": "Arabic (U.A.E.)",
            "ar-YE": "Arabic (Yemen)",
            an: "Aragonese",
            hy: "Armenian",
            as: "Assamese",
            ast: "Asturian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            br: "Breton",
            bg: "Bulgarian",
            my: "Burmese",
            ca: "Catalan",
            ch: "Chamorro",
            ce: "Chechen",
            zh: "Chinese",
            "zh-HK": "Chinese (Hong Kong)",
            "zh-CN": "Chinese (PRC)",
            "zh-SG": "Chinese (Singapore)",
            "zh-TW": "Chinese (Taiwan)",
            cv: "Chuvash",
            co: "Corsican",
            cr: "Cree",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch (Standard)",
            "nl-BE": "Dutch (Belgian)",
            en: "English",
            "en-AU": "English (Australia)",
            "en-BZ": "English (Belize)",
            "en-CA": "English (Canada)",
            "en-IE": "English (Ireland)",
            "en-JM": "English (Jamaica)",
            "en-NZ": "English (New Zealand)",
            "en-PH": "English (Philippines)",
            "en-ZA": "English (South Africa)",
            "en-TT": "English (Trinidad & Tobago)",
            "en-GB": "English (United Kingdom)",
            "en-US": "English (United States)",
            "en-ZW": "English (Zimbabwe)",
            eo: "Esperanto",
            et: "Estonian",
            fo: "Faeroese",
            fj: "Fijian",
            fi: "Finnish",
            fr: "French (Standard)",
            "fr-BE": "French (Belgium)",
            "fr-CA": "French (Canada)",
            "fr-FR": "French (France)",
            "fr-LU": "French (Luxembourg)",
            "fr-MC": "French (Monaco)",
            "fr-CH": "French (Switzerland)",
            fy: "Frisian",
            fur: "Friulian",
            gd: "Gaelic (Scots)",
            "gd-IE": "Gaelic (Irish)",
            gl: "Galacian",
            ka: "Georgian",
            de: "German (Standard)",
            "de-AT": "German (Austria)",
            "de-DE": "German (Germany)",
            "de-LI": "German (Liechtenstein)",
            "de-LU": "German (Luxembourg)",
            "de-CH": "German (Switzerland)",
            el: "Greek",
            gu: "Gujurati",
            ht: "Haitian",
            he: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            iu: "Inuktitut",
            ga: "Irish",
            it: "Italian (Standard)",
            "it-CH": "Italian (Switzerland)",
            ja: "Japanese",
            kn: "Kannada",
            ks: "Kashmiri",
            kk: "Kazakh",
            km: "Khmer",
            ky: "Kirghiz",
            tlh: "Klingon",
            ko: "Korean",
            "ko-KP": "Korean (North Korea)",
            "ko-KR": "Korean (South Korea)",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "FYRO Macedonian",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mo: "Moldavian",
            nv: "Navajo",
            ng: "Ndonga",
            ne: "Nepali",
            no: "Norwegian",
            nb: "Norwegian (Bokmal)",
            nn: "Norwegian (Nynorsk)",
            oc: "Occitan",
            or: "Oriya",
            om: "Oromo",
            fa: "Persian",
            "fa-IR": "Persian/Iran",
            pl: "Polish",
            pt: "Portuguese",
            "pt-BR": "Portuguese (Brazil)",
            pa: "Punjabi",
            "pa-IN": "Punjabi (India)",
            "pa-PK": "Punjabi (Pakistan)",
            qu: "Quechua",
            rm: "Rhaeto-Romanic",
            ro: "Romanian",
            "ro-MO": "Romanian (Moldavia)",
            ru: "Russian",
            "ru-MO": "Russian (Moldavia)",
            sz: "Sami (Lappish)",
            sg: "Sango",
            sa: "Sanskrit",
            sc: "Sardinian",
            sd: "Sindhi",
            si: "Singhalese",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somani",
            sb: "Sorbian",
            es: "Spanish",
            "es-AR": "Spanish (Argentina)",
            "es-BO": "Spanish (Bolivia)",
            "es-CL": "Spanish (Chile)",
            "es-CO": "Spanish (Colombia)",
            "es-CR": "Spanish (Costa Rica)",
            "es-DO": "Spanish (Dominican Republic)",
            "es-EC": "Spanish (Ecuador)",
            "es-SV": "Spanish (El Salvador)",
            "es-GT": "Spanish (Guatemala)",
            "es-HN": "Spanish (Honduras)",
            "es-MX": "Spanish (Mexico)",
            "es-NI": "Spanish (Nicaragua)",
            "es-PA": "Spanish (Panama)",
            "es-PY": "Spanish (Paraguay)",
            "es-PE": "Spanish (Peru)",
            "es-PR": "Spanish (Puerto Rico)",
            "es-ES": "Spanish (Spain)",
            "es-UY": "Spanish (Uruguay)",
            "es-VE": "Spanish (Venezuela)",
            sx: "Sutu",
            sw: "Swahili",
            sv: "Swedish",
            "sv-FI": "Swedish (Finland)",
            "sv-SV": "Swedish (Sweden)",
            ta: "Tamil",
            tt: "Tatar",
            te: "Teluga",
            th: "Thai",
            tig: "Tigre",
            ts: "Tsonga",
            tn: "Tswana",
            tr: "Turkish",
            tk: "Turkmen",
            uk: "Ukrainian",
            hsb: "Upper Sorbian",
            ur: "Urdu",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volapuk",
            wa: "Walloon",
            cy: "Welsh",
            xh: "Xhosa",
            ji: "Yiddish",
            zu: "Zulu"
        }[t] && (this.internal.languageSettings.languageCode = t,
        !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
            this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
        }),
        this.internal.languageSettings.isSubscribed = !0)),
        this
    }
    ,
    /** @license
   * MIT license.
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
    U = rt.API,
    z = U.getCharWidthsArray = function(t, e) {
        var n, r, i, o = (e = e || {}).font || this.internal.getFont(), s = e.fontSize || this.internal.getFontSize(), a = e.charSpace || this.internal.getCharSpace(), c = e.widths ? e.widths : o.metadata.Unicode.widths, u = c.fof ? c.fof : 1, h = e.kerning ? e.kerning : o.metadata.Unicode.kerning, l = h.fof ? h.fof : 1, f = 0, p = c[0] || u, d = [];
        for (n = 0,
        r = t.length; n < r; n++)
            i = t.charCodeAt(n),
            "function" == typeof o.metadata.widthOfString ? d.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i)) + a * (1e3 / s) || 0) / 1e3) : d.push((c[i] || p) / u + (h[i] && h[i][f] || 0) / l),
            f = i;
        return d
    }
    ,
    M = U.getArraySum = function(t) {
        for (var e = t.length, n = 0; e; )
            n += t[--e];
        return n
    }
    ,
    N = U.getStringUnitWidth = function(t, e) {
        var n = (e = e || {}).fontSize || this.internal.getFontSize()
          , r = e.font || this.internal.getFont()
          , i = e.charSpace || this.internal.getCharSpace();
        return "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, n, i) / n : M(z.apply(this, arguments))
    }
    ,
    L = function(t, e, n, r) {
        for (var i = [], o = 0, s = t.length, a = 0; o !== s && a + e[o] < n; )
            a += e[o],
            o++;
        i.push(t.slice(0, o));
        var c = o;
        for (a = 0; o !== s; )
            a + e[o] > r && (i.push(t.slice(c, o)),
            a = 0,
            c = o),
            a += e[o],
            o++;
        return c !== o && i.push(t.slice(c, o)),
        i
    }
    ,
    H = function(t, e, n) {
        n || (n = {});
        var r, i, o, s, a, c, u = [], h = [u], l = n.textIndent || 0, f = 0, p = 0, d = t.split(" "), g = z.apply(this, [" ", n])[0];
        if (c = -1 === n.lineIndent ? d[0].length + 2 : n.lineIndent || 0) {
            var m = Array(c).join(" ")
              , y = [];
            d.map(function(t) {
                1 < (t = t.split(/\s*\n/)).length ? y = y.concat(t.map(function(t, e) {
                    return (e && t.length ? "\n" : "") + t
                })) : y.push(t[0])
            }),
            d = y,
            c = N.apply(this, [m, n])
        }
        for (o = 0,
        s = d.length; o < s; o++) {
            var w = 0;
            if (r = d[o],
            c && "\n" == r[0] && (r = r.substr(1),
            w = 1),
            i = z.apply(this, [r, n]),
            e < l + f + (p = M(i)) || w) {
                if (e < p) {
                    for (a = L.apply(this, [r, i, e - (l + f), e]),
                    u.push(a.shift()),
                    u = [a.pop()]; a.length; )
                        h.push([a.shift()]);
                    p = M(i.slice(r.length - (u[0] ? u[0].length : 0)))
                } else
                    u = [r];
                h.push(u),
                l = p + c,
                f = g
            } else
                u.push(r),
                l += f + p,
                f = g
        }
        if (c)
            var v = function(t, e) {
                return (e ? m : "") + t.join(" ")
            };
        else
            v = function(t) {
                return t.join(" ")
            }
            ;
        return h.map(v)
    }
    ,
    U.splitTextToSize = function(t, e, n) {
        var r, i = (n = n || {}).fontSize || this.internal.getFontSize(), o = function(t) {
            var e = {
                0: 1
            }
              , n = {};
            if (t.widths && t.kerning)
                return {
                    widths: t.widths,
                    kerning: t.kerning
                };
            var r = this.internal.getFont(t.fontName, t.fontStyle)
              , i = "Unicode";
            return r.metadata[i] ? {
                widths: r.metadata[i].widths || e,
                kerning: r.metadata[i].kerning || n
            } : {
                font: r.metadata,
                fontSize: this.internal.getFontSize(),
                charSpace: this.internal.getCharSpace()
            }
        }
        .call(this, n);
        r = Array.isArray(t) ? t : t.split(/\r?\n/);
        var s = 1 * this.internal.scaleFactor * e / i;
        o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0,
        o.lineIndent = n.lineIndent;
        var a, c, u = [];
        for (a = 0,
        c = r.length; a < c; a++)
            u = u.concat(H.apply(this, [r[a], s, o]));
        return u
    }
    ,
    /** @license
   jsPDF standard_fonts_metrics plugin
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * MIT license.
   * 
   * ====================================================================
   */
    /**
   * This file adds the standard font metrics to jsPDF.
   *
   * Font metrics data is reprocessed derivative of contents of
   * "Font Metrics for PDF Core 14 Fonts" package, which exhibits the following copyright and license:
   *
   * Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated. All Rights Reserved.
   *
   * This file and the 14 PostScript(R) AFM files it accompanies may be used,
   * copied, and distributed for any purpose and without charge, with or without
   * modification, provided that all copyright notices are retained; that the AFM
   * files are not distributed without this file; that all modifications to this
   * file or any of the AFM files are prominently noted in the modified file(s);
   * and that this paragraph is not modified. Adobe Systems has no responsibility
   * or obligation to support the use of the AFM files.
   *
   * @name standard_fonts_metrics
   * @module
   */
    W = rt.API,
    V = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: (G = function(t) {
            for (var e = "klmnopqrstuvwxyz", n = {}, r = 0; r < e.length; r++)
                n[e[r]] = "0123456789abcdef"[r];
            var i, o, s, a, c, u = {}, h = 1, l = u, f = [], p = "", d = "", g = t.length - 1;
            for (r = 1; r != g; )
                c = t[r],
                r += 1,
                "'" == c ? o = o ? (a = o.join(""),
                i) : [] : o ? o.push(c) : "{" == c ? (f.push([l, a]),
                l = {},
                a = i) : "}" == c ? ((s = f.pop())[0][s[1]] = l,
                a = i,
                l = s[0]) : "-" == c ? h = -1 : a === i ? n.hasOwnProperty(c) ? (p += n[c],
                a = parseInt(p, 16) * h,
                h = 1,
                p = "") : p += c : n.hasOwnProperty(c) ? (d += n[c],
                l[a] = parseInt(d, 16) * h,
                h = 1,
                a = i,
                d = "") : d += c;
            return u
        }
        )("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    },
    Y = {
        Unicode: {
            Courier: V,
            "Courier-Bold": V,
            "Courier-BoldOblique": V,
            "Courier-Oblique": V,
            Helvetica: V,
            "Helvetica-Bold": V,
            "Helvetica-BoldOblique": V,
            "Helvetica-Oblique": V,
            "Times-Roman": V,
            "Times-Bold": V,
            "Times-BoldItalic": V,
            "Times-Italic": V
        }
    },
    X = {
        Unicode: {
            "Courier-Oblique": G("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": G("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
            "Helvetica-Bold": G("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            Courier: G("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": G("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Bold": G("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
            Symbol: G("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
            Helvetica: G("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
            "Helvetica-BoldOblique": G("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            ZapfDingbats: G("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-Bold": G("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": G("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
            "Times-Roman": G("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
            "Helvetica-Oblique": G("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
    },
    W.events.push(["addFont", function(t) {
        var e, n, r, i = t.font, o = "Unicode";
        (e = X[o][i.postScriptName]) && ((n = i.metadata[o] ? i.metadata[o] : i.metadata[o] = {}).widths = e.widths,
        n.kerning = e.kerning),
        (r = Y[o][i.postScriptName]) && ((n = i.metadata[o] ? i.metadata[o] : i.metadata[o] = {}).encoding = r).codePages && r.codePages.length && (i.encoding = r.codePages[0])
    }
    ]),
    /**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
    J = rt,
    "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")(),
    J.API.events.push(["addFont", function(t) {
        var e = t.font
          , n = t.instance;
        if (void 0 !== n && n.existsFileInVFS(e.postScriptName)) {
            var r = n.getFileFromVFS(e.postScriptName);
            if ("string" != typeof r)
                throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').");
            e.metadata = J.API.TTFFont.open(e.postScriptName, e.fontName, r, e.encoding),
            e.metadata.Unicode = e.metadata.Unicode || {
                encoding: {},
                kerning: {},
                widths: []
            },
            e.metadata.glyIdsUsed = [0]
        } else if (!1 === e.isStandardFont)
            throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').")
    }
    ]),
    (/** @license
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *
   * 
   * ====================================================================
   */
    K = rt.API).addSvg = function(t, e, n, r, i) {
        if (void 0 === e || void 0 === n)
            throw new Error("addSVG needs values for 'x' and 'y'");
        function o(t) {
            for (var e = parseFloat(t[1]), n = parseFloat(t[2]), r = [], i = 3, o = t.length; i < o; )
                "c" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2]), parseFloat(t[i + 3]), parseFloat(t[i + 4]), parseFloat(t[i + 5]), parseFloat(t[i + 6])]),
                i += 7) : "l" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]),
                i += 3) : i += 1;
            return [e, n, r]
        }
        var s, a, c, u, h, l, f, p, d = (u = document,
        p = u.createElement("iframe"),
        h = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}",
        (f = (l = u).createElement("style")).type = "text/css",
        f.styleSheet ? f.styleSheet.cssText = h : f.appendChild(l.createTextNode(h)),
        l.getElementsByTagName("head")[0].appendChild(f),
        p.name = "childframe",
        p.setAttribute("width", 0),
        p.setAttribute("height", 0),
        p.setAttribute("frameborder", "0"),
        p.setAttribute("scrolling", "no"),
        p.setAttribute("seamless", "seamless"),
        p.setAttribute("class", "jsPDF_sillysvg_iframe"),
        u.body.appendChild(p),
        p), g = (s = t,
        (c = ((a = d).contentWindow || a.contentDocument).document).write(s),
        c.close(),
        c.getElementsByTagName("svg")[0]), m = [1, 1], y = parseFloat(g.getAttribute("width")), w = parseFloat(g.getAttribute("height"));
        y && w && (r && i ? m = [r / y, i / w] : r ? m = [r / y, r / y] : i && (m = [i / w, i / w]));
        var v, b, x, S, _ = g.childNodes;
        for (v = 0,
        b = _.length; v < b; v++)
            (x = _[v]).tagName && "PATH" === x.tagName.toUpperCase() && ((S = o(x.getAttribute("d").split(" ")))[0] = S[0] * m[0] + e,
            S[1] = S[1] * m[1] + n,
            this.lines.call(this, S[2], S[0], S[1], m));
        return this
    }
    ,
    K.addSVG = K.addSvg,
    K.addSvgAsImage = function(t, e, n, r, i, o, s, a) {
        if (isNaN(e) || isNaN(n))
            throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
            new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
        if (isNaN(r) || isNaN(i))
            throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
            new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
        var c = document.createElement("canvas");
        c.width = r,
        c.height = i;
        var u = c.getContext("2d");
        return u.fillStyle = "#fff",
        u.fillRect(0, 0, c.width, c.height),
        canvg(c, t, {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0,
            ignoreClear: !0
        }),
        this.addImage(c.toDataURL("image/jpeg", 1), e, n, r, i, s, a),
        this
    }
    ,
    rt.API.putTotalPages = function(t) {
        for (var e = new RegExp(t,"g"), n = 1; n <= this.internal.getNumberOfPages(); n++)
            for (var r = 0; r < this.internal.pages[n].length; r++)
                this.internal.pages[n][r] = this.internal.pages[n][r].replace(e, this.internal.getNumberOfPages());
        return this
    }
    ,
    rt.API.viewerPreferences = function(t, e) {
        var n;
        t = t || {},
        e = e || !1;
        var r, i, o = {
            HideToolbar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            HideMenubar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            HideWindowUI: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            FitWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            CenterWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            DisplayDocTitle: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.4
            },
            NonFullScreenPageMode: {
                defaultValue: "UseNone",
                value: "UseNone",
                type: "name",
                explicitSet: !1,
                valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                pdfVersion: 1.3
            },
            Direction: {
                defaultValue: "L2R",
                value: "L2R",
                type: "name",
                explicitSet: !1,
                valueSet: ["L2R", "R2L"],
                pdfVersion: 1.3
            },
            ViewArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            ViewClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintScaling: {
                defaultValue: "AppDefault",
                value: "AppDefault",
                type: "name",
                explicitSet: !1,
                valueSet: ["AppDefault", "None"],
                pdfVersion: 1.6
            },
            Duplex: {
                defaultValue: "",
                value: "none",
                type: "name",
                explicitSet: !1,
                valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
                pdfVersion: 1.7
            },
            PickTrayByPDFSize: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.7
            },
            PrintPageRange: {
                defaultValue: "",
                value: "",
                type: "array",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            },
            NumCopies: {
                defaultValue: 1,
                value: 1,
                type: "integer",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            }
        }, s = Object.keys(o), a = [], c = 0, u = 0, h = 0, l = !0;
        function f(t, e) {
            var n, r = !1;
            for (n = 0; n < t.length; n += 1)
                t[n] === e && (r = !0);
            return r
        }
        if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {},
        this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)),
        this.internal.viewerpreferences.isSubscribed = !1),
        n = this.internal.viewerpreferences.configuration,
        "reset" === t || !0 === e) {
            var p = s.length;
            for (h = 0; h < p; h += 1)
                n[s[h]].value = n[s[h]].defaultValue,
                n[s[h]].explicitSet = !1
        }
        if ("object" === re(t))
            for (r in t)
                if (i = t[r],
                f(s, r) && void 0 !== i) {
                    if ("boolean" === n[r].type && "boolean" == typeof i)
                        n[r].value = i;
                    else if ("name" === n[r].type && f(n[r].valueSet, i))
                        n[r].value = i;
                    else if ("integer" === n[r].type && Number.isInteger(i))
                        n[r].value = i;
                    else if ("array" === n[r].type) {
                        for (c = 0; c < i.length; c += 1)
                            if (l = !0,
                            1 === i[c].length && "number" == typeof i[c][0])
                                a.push(String(i[c]));
                            else if (1 < i[c].length) {
                                for (u = 0; u < i[c].length; u += 1)
                                    "number" != typeof i[c][u] && (l = !1);
                                !0 === l && a.push(String(i[c].join("-")))
                            }
                        n[r].value = String(a)
                    } else
                        n[r].value = n[r].defaultValue;
                    n[r].explicitSet = !0
                }
        return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
            var t, e = [];
            for (t in n)
                !0 === n[t].explicitSet && ("name" === n[t].type ? e.push("/" + t + " /" + n[t].value) : e.push("/" + t + " " + n[t].value));
            0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
        }),
        this.internal.viewerpreferences.isSubscribed = !0),
        this.internal.viewerpreferences.configuration = n,
        this
    }
    ,
    /** ====================================================================
   * jsPDF XMP metadata plugin
   * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
   *
   * 
   * ====================================================================
   */
    Q = rt.API,
    tt = $ = Z = "",
    Q.addMetadata = function(t, e) {
        return $ = e || "http://jspdf.default.namespaceuri/",
        Z = t,
        this.internal.events.subscribe("postPutResources", function() {
            if (Z) {
                var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + $ + '"><jspdf:metadata>'
                  , e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'))
                  , n = unescape(encodeURIComponent(t))
                  , r = unescape(encodeURIComponent(Z))
                  , i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>"))
                  , o = unescape(encodeURIComponent("</x:xmpmeta>"))
                  , s = n.length + r.length + i.length + e.length + o.length;
                tt = this.internal.newObject(),
                this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + s + " >>"),
                this.internal.write("stream"),
                this.internal.write(e + n + r + i + o),
                this.internal.write("endstream"),
                this.internal.write("endobj")
            } else
                tt = ""
        }),
        this.internal.events.subscribe("putCatalog", function() {
            tt && this.internal.write("/Metadata " + tt + " 0 R")
        }),
        this
    }
    ,
    function(p, t) {
        var e = p.API;
        var m = e.pdfEscape16 = function(t, e) {
            for (var n, r = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], o = [""], s = 0, a = t.length; s < a; ++s) {
                if (n = e.metadata.characterToGlyph(t.charCodeAt(s)),
                e.metadata.glyIdsUsed.push(n),
                e.metadata.toUnicode[n] = t.charCodeAt(s),
                -1 == r.indexOf(n) && (r.push(n),
                r.push([parseInt(e.metadata.widthOfGlyph(n), 10)])),
                "0" == n)
                    return o.join("");
                n = n.toString(16),
                o.push(i[4 - n.length], n)
            }
            return o.join("")
        }
          , d = function(t) {
            var e, n, r, i, o, s, a;
            for (o = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
            r = [],
            s = 0,
            a = (n = Object.keys(t).sort(function(t, e) {
                return t - e
            })).length; s < a; s++)
                e = n[s],
                100 <= r.length && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar",
                r = []),
                i = ("0000" + t[e].toString(16)).slice(-4),
                e = ("0000" + (+e).toString(16)).slice(-4),
                r.push("<" + e + "><" + i + ">");
            return r.length && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"),
            o += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
        };
        e.events.push(["putFont", function(t) {
            !function(t, e, n, r) {
                if (t.metadata instanceof p.API.TTFFont && "Identity-H" === t.encoding) {
                    for (var i = t.metadata.Unicode.widths, o = t.metadata.subset.encode(t.metadata.glyIdsUsed, 1), s = "", a = 0; a < o.length; a++)
                        s += String.fromCharCode(o[a]);
                    var c = n();
                    e("<<"),
                    e("/Length " + s.length),
                    e("/Length1 " + s.length),
                    e(">>"),
                    r(s),
                    e("endobj");
                    var u = n()
                      , h = d(t.metadata.toUnicode);
                    e("<<"),
                    e("/Length " + h.length),
                    e("/Length1 " + h.length),
                    e(">>"),
                    r(h),
                    e("endobj");
                    var l = n();
                    e("<<"),
                    e("/Type /FontDescriptor"),
                    e("/FontName /" + t.fontName),
                    e("/FontFile2 " + c + " 0 R"),
                    e("/FontBBox " + p.API.PDFObject.convert(t.metadata.bbox)),
                    e("/Flags " + t.metadata.flags),
                    e("/StemV " + t.metadata.stemV),
                    e("/ItalicAngle " + t.metadata.italicAngle),
                    e("/Ascent " + t.metadata.ascender),
                    e("/Descent " + t.metadata.decender),
                    e("/CapHeight " + t.metadata.capHeight),
                    e(">>"),
                    e("endobj");
                    var f = n();
                    e("<<"),
                    e("/Type /Font"),
                    e("/BaseFont /" + t.fontName),
                    e("/FontDescriptor " + l + " 0 R"),
                    e("/W " + p.API.PDFObject.convert(i)),
                    e("/CIDToGIDMap /Identity"),
                    e("/DW 1000"),
                    e("/Subtype /CIDFontType2"),
                    e("/CIDSystemInfo"),
                    e("<<"),
                    e("/Supplement 0"),
                    e("/Registry (Adobe)"),
                    e("/Ordering (" + t.encoding + ")"),
                    e(">>"),
                    e(">>"),
                    e("endobj"),
                    t.objectNumber = n(),
                    e("<<"),
                    e("/Type /Font"),
                    e("/Subtype /Type0"),
                    e("/ToUnicode " + u + " 0 R"),
                    e("/BaseFont /" + t.fontName),
                    e("/Encoding /" + t.encoding),
                    e("/DescendantFonts [" + f + " 0 R]"),
                    e(">>"),
                    e("endobj"),
                    t.isAlreadyPutted = !0
                }
            }(t.font, t.out, t.newObject, t.putStream)
        }
        ]);
        e.events.push(["putFont", function(t) {
            !function(t, e, n, r) {
                if (t.metadata instanceof p.API.TTFFont && "WinAnsiEncoding" === t.encoding) {
                    t.metadata.Unicode.widths;
                    for (var i = t.metadata.rawData, o = "", s = 0; s < i.length; s++)
                        o += String.fromCharCode(i[s]);
                    var a = n();
                    r({
                        data: o,
                        addLength1: !0
                    }),
                    e("endobj");
                    var c = n();
                    r({
                        data: d(t.metadata.toUnicode),
                        addLength1: !0
                    }),
                    e("endobj");
                    var u = n();
                    for (e("<<"),
                    e("/Descent " + t.metadata.decender),
                    e("/CapHeight " + t.metadata.capHeight),
                    e("/StemV " + t.metadata.stemV),
                    e("/Type /FontDescriptor"),
                    e("/FontFile2 " + a + " 0 R"),
                    e("/Flags 96"),
                    e("/FontBBox " + p.API.PDFObject.convert(t.metadata.bbox)),
                    e("/FontName /" + t.fontName),
                    e("/ItalicAngle " + t.metadata.italicAngle),
                    e("/Ascent " + t.metadata.ascender),
                    e(">>"),
                    e("endobj"),
                    t.objectNumber = n(),
                    s = 0; s < t.metadata.hmtx.widths.length; s++)
                        t.metadata.hmtx.widths[s] = parseInt(t.metadata.hmtx.widths[s] * (1e3 / t.metadata.head.unitsPerEm));
                    e("<</Subtype/TrueType/Type/Font/ToUnicode " + c + " 0 R/BaseFont/" + t.fontName + "/FontDescriptor " + u + " 0 R/Encoding/" + t.encoding + " /FirstChar 29 /LastChar 255 /Widths " + p.API.PDFObject.convert(t.metadata.hmtx.widths) + ">>"),
                    e("endobj"),
                    t.isAlreadyPutted = !0
                }
            }(t.font, t.out, t.newObject, t.putStream)
        }
        ]);
        var u = function(t) {
            var e, n, r = t.text || "", i = t.x, o = t.y, s = t.options || {}, a = t.mutex || {}, c = a.pdfEscape, u = a.activeFontKey, h = a.fonts, l = (a.activeFontSize,
            ""), f = 0, p = "", d = h[n = u].encoding;
            if ("Identity-H" !== h[n].encoding)
                return {
                    text: r,
                    x: i,
                    y: o,
                    options: s,
                    mutex: a
                };
            for (p = r,
            n = u,
            "[object Array]" === Object.prototype.toString.call(r) && (p = r[0]),
            f = 0; f < p.length; f += 1)
                h[n].metadata.hasOwnProperty("cmap") && (e = h[n].metadata.cmap.unicode.codeMap[p[f].charCodeAt(0)]),
                e ? l += p[f] : p[f].charCodeAt(0) < 256 && h[n].metadata.hasOwnProperty("Unicode") ? l += p[f] : l += "";
            var g = "";
            return parseInt(n.slice(1)) < 14 || "WinAnsiEncoding" === d ? g = function(t) {
                for (var e = "", n = 0; n < t.length; n++)
                    e += "" + t.charCodeAt(n).toString(16);
                return e
            }(c(l, n)) : "Identity-H" === d && (g = m(l, h[n])),
            a.isHex = !0,
            {
                text: g,
                x: i,
                y: o,
                options: s,
                mutex: a
            }
        };
        e.events.push(["postProcessText", function(t) {
            var e = t.text || ""
              , n = t.x
              , r = t.y
              , i = t.options
              , o = t.mutex
              , s = (i.lang,
            [])
              , a = {
                text: e,
                x: n,
                y: r,
                options: i,
                mutex: o
            };
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                var c = 0;
                for (c = 0; c < e.length; c += 1)
                    "[object Array]" === Object.prototype.toString.call(e[c]) && 3 === e[c].length ? s.push([u(Object.assign({}, a, {
                        text: e[c][0]
                    })).text, e[c][1], e[c][2]]) : s.push(u(Object.assign({}, a, {
                        text: e[c]
                    })).text);
                t.text = s
            } else
                t.text = u(Object.assign({}, a, {
                    text: e
                })).text
        }
        ])
    }(rt, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")()),
    et = rt.API,
    nt = {},
    et.existsFileInVFS = function(t) {
        return nt.hasOwnProperty(t)
    }
    ,
    et.addFileToVFS = function(t, e) {
        return nt[t] = e,
        this
    }
    ,
    et.getFileFromVFS = function(t) {
        return nt.hasOwnProperty(t) ? nt[t] : null
    }
    ,
    function(t) {
        if (t.URL = t.URL || t.webkitURL,
        t.Blob && t.URL)
            try {
                return new Blob
            } catch (t) {}
        var a = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || function(t) {
            var a = function(t) {
                return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]
            }
              , e = function() {
                this.data = []
            }
              , c = function(t, e, n) {
                this.data = t,
                this.size = t.length,
                this.type = e,
                this.encoding = n
            }
              , n = e.prototype
              , r = c.prototype
              , u = t.FileReaderSync
              , h = function(t) {
                this.code = this[this.name = t]
            }
              , i = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" ")
              , o = i.length
              , s = t.URL || t.webkitURL || t
              , l = s.createObjectURL
              , f = s.revokeObjectURL
              , p = s
              , d = t.btoa
              , g = t.atob
              , m = t.ArrayBuffer
              , y = t.Uint8Array
              , w = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
            for (c.fake = r.fake = !0; o--; )
                h.prototype[i[o]] = o + 1;
            return s.createObjectURL || (p = t.URL = function(t) {
                var e, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                return n.href = t,
                "origin"in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (e = t.match(w),
                n.origin = e && e[1])),
                n
            }
            ),
            p.createObjectURL = function(t) {
                var e, n = t.type;
                return null === n && (n = "application/octet-stream"),
                t instanceof c ? (e = "data:" + n,
                "base64" === t.encoding ? e + ";base64," + t.data : "URI" === t.encoding ? e + "," + decodeURIComponent(t.data) : d ? e + ";base64," + d(t.data) : e + "," + encodeURIComponent(t.data)) : l ? l.call(s, t) : void 0
            }
            ,
            p.revokeObjectURL = function(t) {
                "data:" !== t.substring(0, 5) && f && f.call(s, t)
            }
            ,
            n.append = function(t) {
                var e = this.data;
                if (y && (t instanceof m || t instanceof y)) {
                    for (var n = "", r = new y(t), i = 0, o = r.length; i < o; i++)
                        n += String.fromCharCode(r[i]);
                    e.push(n)
                } else if ("Blob" === a(t) || "File" === a(t)) {
                    if (!u)
                        throw new h("NOT_READABLE_ERR");
                    var s = new u;
                    e.push(s.readAsBinaryString(t))
                } else
                    t instanceof c ? "base64" === t.encoding && g ? e.push(g(t.data)) : "URI" === t.encoding ? e.push(decodeURIComponent(t.data)) : "raw" === t.encoding && e.push(t.data) : ("string" != typeof t && (t += ""),
                    e.push(unescape(encodeURIComponent(t))))
            }
            ,
            n.getBlob = function(t) {
                return arguments.length || (t = null),
                new c(this.data.join(""),t,"raw")
            }
            ,
            n.toString = function() {
                return "[object BlobBuilder]"
            }
            ,
            r.slice = function(t, e, n) {
                var r = arguments.length;
                return r < 3 && (n = null),
                new c(this.data.slice(t, 1 < r ? e : this.data.length),n,this.encoding)
            }
            ,
            r.toString = function() {
                return "[object Blob]"
            }
            ,
            r.close = function() {
                this.size = 0,
                delete this.data
            }
            ,
            e
        }(t);
        t.Blob = function(t, e) {
            var n = e && e.type || ""
              , r = new a;
            if (t)
                for (var i = 0, o = t.length; i < o; i++)
                    Uint8Array && t[i]instanceof Uint8Array ? r.append(t[i].buffer) : r.append(t[i]);
            var s = r.getBlob(n);
            return !s.slice && s.webkitSlice && (s.slice = s.webkitSlice),
            s
        }
        ;
        var e = Object.getPrototypeOf || function(t) {
            return t.__proto__
        }
        ;
        t.Blob.prototype = e(new t.Blob)
    }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content || window);
    var it, ot, st, at, ct, ut, ht, lt, ft, pt, dt, gt, mt, yt, wt, ie = ie || function(a) {
        if (!(void 0 === a || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = a.document
              , c = function() {
                return a.URL || a.webkitURL || a
            }
              , u = t.createElementNS("http://www.w3.org/1999/xhtml", "a")
              , h = "download"in u
              , l = /constructor/i.test(a.HTMLElement) || a.safari
              , f = /CriOS\/[\d]+/.test(navigator.userAgent)
              , p = function(t) {
                (a.setImmediate || a.setTimeout)(function() {
                    throw t
                }, 0)
            }
              , d = function(t) {
                setTimeout(function() {
                    "string" == typeof t ? c().revokeObjectURL(t) : t.remove()
                }, 4e4)
            }
              , g = function(t) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t],{
                    type: t.type
                }) : t
            }
              , r = function(t, n, e) {
                e || (t = g(t));
                var r, i = this, o = "application/octet-stream" === t.type, s = function() {
                    !function(t, e, n) {
                        for (var r = (e = [].concat(e)).length; r--; ) {
                            var i = t["on" + e[r]];
                            if ("function" == typeof i)
                                try {
                                    i.call(t, n || t)
                                } catch (t) {
                                    p(t)
                                }
                        }
                    }(i, "writestart progress write writeend".split(" "))
                };
                if (i.readyState = i.INIT,
                h)
                    return r = c().createObjectURL(t),
                    void setTimeout(function() {
                        var t, e;
                        u.href = r,
                        u.download = n,
                        t = u,
                        e = new MouseEvent("click"),
                        t.dispatchEvent(e),
                        s(),
                        d(r),
                        i.readyState = i.DONE
                    });
                !function() {
                    if ((f || o && l) && a.FileReader) {
                        var e = new FileReader;
                        return e.onloadend = function() {
                            var t = f ? e.result : e.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                            a.open(t, "_blank") || (a.location.href = t),
                            t = void 0,
                            i.readyState = i.DONE,
                            s()
                        }
                        ,
                        e.readAsDataURL(t),
                        i.readyState = i.INIT
                    }
                    r || (r = c().createObjectURL(t)),
                    o ? a.location.href = r : a.open(r, "_blank") || (a.location.href = r);
                    i.readyState = i.DONE,
                    s(),
                    d(r)
                }()
            }
              , e = r.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
                return e = e || t.name || "download",
                n || (t = g(t)),
                navigator.msSaveOrOpenBlob(t, e)
            }
            : (e.abort = function() {}
            ,
            e.readyState = e.INIT = 0,
            e.WRITING = 1,
            e.DONE = 2,
            e.error = e.onwritestart = e.onprogress = e.onwrite = e.onabort = e.onerror = e.onwriteend = null,
            function(t, e, n) {
                return new r(t,e || t.name || "download",n)
            }
            )
        }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content);
    function vt(x) {
        var t = 0;
        if (71 !== x[t++] || 73 !== x[t++] || 70 !== x[t++] || 56 !== x[t++] || 56 != (x[t++] + 1 & 253) || 97 !== x[t++])
            throw "Invalid GIF 87a/89a header.";
        var S = x[t++] | x[t++] << 8
          , e = x[t++] | x[t++] << 8
          , n = x[t++]
          , r = n >> 7
          , i = 1 << (7 & n) + 1;
        x[t++];
        x[t++];
        var o = null;
        r && (o = t,
        t += 3 * i);
        var s = !0
          , a = []
          , c = 0
          , u = null
          , h = 0
          , l = null;
        for (this.width = S,
        this.height = e; s && t < x.length; )
            switch (x[t++]) {
            case 33:
                switch (x[t++]) {
                case 255:
                    if (11 !== x[t] || 78 == x[t + 1] && 69 == x[t + 2] && 84 == x[t + 3] && 83 == x[t + 4] && 67 == x[t + 5] && 65 == x[t + 6] && 80 == x[t + 7] && 69 == x[t + 8] && 50 == x[t + 9] && 46 == x[t + 10] && 48 == x[t + 11] && 3 == x[t + 12] && 1 == x[t + 13] && 0 == x[t + 16])
                        t += 14,
                        l = x[t++] | x[t++] << 8,
                        t++;
                    else
                        for (t += 12; ; ) {
                            if (0 === (k = x[t++]))
                                break;
                            t += k
                        }
                    break;
                case 249:
                    if (4 !== x[t++] || 0 !== x[t + 4])
                        throw "Invalid graphics extension block.";
                    var f = x[t++];
                    c = x[t++] | x[t++] << 8,
                    u = x[t++],
                    0 == (1 & f) && (u = null),
                    h = f >> 2 & 7,
                    t++;
                    break;
                case 254:
                    for (; ; ) {
                        if (0 === (k = x[t++]))
                            break;
                        t += k
                    }
                    break;
                default:
                    throw "Unknown graphic control label: 0x" + x[t - 1].toString(16)
                }
                break;
            case 44:
                var p = x[t++] | x[t++] << 8
                  , d = x[t++] | x[t++] << 8
                  , g = x[t++] | x[t++] << 8
                  , m = x[t++] | x[t++] << 8
                  , y = x[t++]
                  , w = y >> 6 & 1
                  , v = o
                  , b = !1;
                if (y >> 7) {
                    b = !0;
                    v = t,
                    t += 3 * (1 << (7 & y) + 1)
                }
                var _ = t;
                for (t++; ; ) {
                    var k;
                    if (0 === (k = x[t++]))
                        break;
                    t += k
                }
                a.push({
                    x: p,
                    y: d,
                    width: g,
                    height: m,
                    has_local_palette: b,
                    palette_offset: v,
                    data_offset: _,
                    data_length: t - _,
                    transparent_index: u,
                    interlaced: !!w,
                    delay: c,
                    disposal: h
                });
                break;
            case 59:
                s = !1;
                break;
            default:
                throw "Unknown gif block: 0x" + x[t - 1].toString(16)
            }
        this.numFrames = function() {
            return a.length
        }
        ,
        this.loopCount = function() {
            return l
        }
        ,
        this.frameInfo = function(t) {
            if (t < 0 || t >= a.length)
                throw "Frame index out of range.";
            return a[t]
        }
        ,
        this.decodeAndBlitFrameBGRA = function(t, e) {
            var n = this.frameInfo(t)
              , r = n.width * n.height
              , i = new Uint8Array(r);
            bt(x, n.data_offset, i, r);
            var o = n.palette_offset
              , s = n.transparent_index;
            null === s && (s = 256);
            var a = n.width
              , c = S - a
              , u = a
              , h = 4 * (n.y * S + n.x)
              , l = 4 * ((n.y + n.height) * S + n.x)
              , f = h
              , p = 4 * c;
            !0 === n.interlaced && (p += 4 * (a + c) * 7);
            for (var d = 8, g = 0, m = i.length; g < m; ++g) {
                var y = i[g];
                if (0 === u && (u = a,
                l <= (f += p) && (p = c + 4 * (a + c) * (d - 1),
                f = h + (a + c) * (d << 1),
                d >>= 1)),
                y === s)
                    f += 4;
                else {
                    var w = x[o + 3 * y]
                      , v = x[o + 3 * y + 1]
                      , b = x[o + 3 * y + 2];
                    e[f++] = b,
                    e[f++] = v,
                    e[f++] = w,
                    e[f++] = 255
                }
                --u
            }
        }
        ,
        this.decodeAndBlitFrameRGBA = function(t, e) {
            var n = this.frameInfo(t)
              , r = n.width * n.height
              , i = new Uint8Array(r);
            bt(x, n.data_offset, i, r);
            var o = n.palette_offset
              , s = n.transparent_index;
            null === s && (s = 256);
            var a = n.width
              , c = S - a
              , u = a
              , h = 4 * (n.y * S + n.x)
              , l = 4 * ((n.y + n.height) * S + n.x)
              , f = h
              , p = 4 * c;
            !0 === n.interlaced && (p += 4 * (a + c) * 7);
            for (var d = 8, g = 0, m = i.length; g < m; ++g) {
                var y = i[g];
                if (0 === u && (u = a,
                l <= (f += p) && (p = c + 4 * (a + c) * (d - 1),
                f = h + (a + c) * (d << 1),
                d >>= 1)),
                y === s)
                    f += 4;
                else {
                    var w = x[o + 3 * y]
                      , v = x[o + 3 * y + 1]
                      , b = x[o + 3 * y + 2];
                    e[f++] = w,
                    e[f++] = v,
                    e[f++] = b,
                    e[f++] = 255
                }
                --u
            }
        }
    }
    function bt(t, e, n, r) {
        for (var i = t[e++], o = 1 << i, s = o + 1, a = s + 1, c = i + 1, u = (1 << c) - 1, h = 0, l = 0, f = 0, p = t[e++], d = new Int32Array(4096), g = null; ; ) {
            for (; h < 16 && 0 !== p; )
                l |= t[e++] << h,
                h += 8,
                1 === p ? p = t[e++] : --p;
            if (h < c)
                break;
            var m = l & u;
            if (l >>= c,
            h -= c,
            m !== o) {
                if (m === s)
                    break;
                for (var y = m < a ? m : g, w = 0, v = y; o < v; )
                    v = d[v] >> 8,
                    ++w;
                var b = v;
                if (r < f + w + (y !== m ? 1 : 0))
                    return void console.log("Warning, gif stream longer than expected.");
                n[f++] = b;
                var x = f += w;
                for (y !== m && (n[f++] = b),
                v = y; w--; )
                    v = d[v],
                    n[--x] = 255 & v,
                    v >>= 8;
                null !== g && a < 4096 && (d[a++] = g << 8 | b,
                u + 1 <= a && c < 12 && (++c,
                u = u << 1 | 1)),
                g = m
            } else
                a = s + 1,
                u = (1 << (c = i + 1)) - 1,
                g = null
        }
        return f !== r && console.log("Warning, gif stream shorter than expected."),
        n
    }
    "undefined" != typeof module && module.exports ? module.exports.saveAs = ie : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
        return ie
    }),
    rt.API.adler32cs = (ut = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array,
    ht = ut ? function(t) {
        return t instanceof ArrayBuffer || !1
    }
    : function() {
        return !1
    }
    ,
    lt = function(t) {
        return unescape(encodeURIComponent(t))
    }
    ,
    ft = 65521,
    pt = function(t, e) {
        for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++)
            n = (n + (255 & e.charCodeAt(i))) % ft,
            r = (r + n) % ft;
        return (r << 16 | n) >>> 0
    }
    ,
    dt = function(t, e) {
        for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++)
            n = (n + e[i]) % ft,
            r = (r + n) % ft;
        return (r << 16 | n) >>> 0
    }
    ,
    mt = (gt = {}).Adler32 = (((ct = (at = function(t) {
        if (!(this instanceof at))
            throw new TypeError("Constructor cannot called be as a function.");
        if (!isFinite(t = null == t ? 1 : +t))
            throw new Error("First arguments needs to be a finite number.");
        this.checksum = t >>> 0
    }
    ).prototype = {}).constructor = at).from = ((it = function(t) {
        if (!(this instanceof at))
            throw new TypeError("Constructor cannot called be as a function.");
        if (null == t)
            throw new Error("First argument needs to be a string.");
        this.checksum = pt(1, t.toString())
    }
    ).prototype = ct,
    it),
    at.fromUtf8 = ((ot = function(t) {
        if (!(this instanceof at))
            throw new TypeError("Constructor cannot called be as a function.");
        if (null == t)
            throw new Error("First argument needs to be a string.");
        var e = lt(t.toString());
        this.checksum = pt(1, e)
    }
    ).prototype = ct,
    ot),
    ut && (at.fromBuffer = ((st = function(t) {
        if (!(this instanceof at))
            throw new TypeError("Constructor cannot called be as a function.");
        if (!ht(t))
            throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = dt(1, e)
    }
    ).prototype = ct,
    st)),
    ct.update = function(t) {
        if (null == t)
            throw new Error("First argument needs to be a string.");
        return t = t.toString(),
        this.checksum = pt(this.checksum, t)
    }
    ,
    ct.updateUtf8 = function(t) {
        if (null == t)
            throw new Error("First argument needs to be a string.");
        var e = lt(t.toString());
        return this.checksum = pt(this.checksum, e)
    }
    ,
    ut && (ct.updateBuffer = function(t) {
        if (!ht(t))
            throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = dt(this.checksum, e)
    }
    ),
    ct.clone = function() {
        return new mt(this.checksum)
    }
    ,
    at),
    gt.from = function(t) {
        if (null == t)
            throw new Error("First argument needs to be a string.");
        return pt(1, t.toString())
    }
    ,
    gt.fromUtf8 = function(t) {
        if (null == t)
            throw new Error("First argument needs to be a string.");
        var e = lt(t.toString());
        return pt(1, e)
    }
    ,
    ut && (gt.fromBuffer = function(t) {
        if (!ht(t))
            throw new Error("First argument need to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return dt(1, e)
    }
    ),
    gt),
    /*
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:

    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
    /*
   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright 
   notice, this list of conditions and the following disclaimer in 
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
    function(t) {
        var d = 15
          , g = 573
          , e = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
        function lt() {
            var p = this;
            function c(t, e) {
                for (var n = 0; n |= 1 & t,
                t >>>= 1,
                n <<= 1,
                0 < --e; )
                    ;
                return n >>> 1
            }
            p.build_tree = function(t) {
                var e, n, r, i = p.dyn_tree, o = p.stat_desc.static_tree, s = p.stat_desc.elems, a = -1;
                for (t.heap_len = 0,
                t.heap_max = g,
                e = 0; e < s; e++)
                    0 !== i[2 * e] ? (t.heap[++t.heap_len] = a = e,
                    t.depth[e] = 0) : i[2 * e + 1] = 0;
                for (; t.heap_len < 2; )
                    i[2 * (r = t.heap[++t.heap_len] = a < 2 ? ++a : 0)] = 1,
                    t.depth[r] = 0,
                    t.opt_len--,
                    o && (t.static_len -= o[2 * r + 1]);
                for (p.max_code = a,
                e = Math.floor(t.heap_len / 2); 1 <= e; e--)
                    t.pqdownheap(i, e);
                for (r = s; e = t.heap[1],
                t.heap[1] = t.heap[t.heap_len--],
                t.pqdownheap(i, 1),
                n = t.heap[1],
                t.heap[--t.heap_max] = e,
                t.heap[--t.heap_max] = n,
                i[2 * r] = i[2 * e] + i[2 * n],
                t.depth[r] = Math.max(t.depth[e], t.depth[n]) + 1,
                i[2 * e + 1] = i[2 * n + 1] = r,
                t.heap[1] = r++,
                t.pqdownheap(i, 1),
                2 <= t.heap_len; )
                    ;
                t.heap[--t.heap_max] = t.heap[1],
                function(t) {
                    var e, n, r, i, o, s, a = p.dyn_tree, c = p.stat_desc.static_tree, u = p.stat_desc.extra_bits, h = p.stat_desc.extra_base, l = p.stat_desc.max_length, f = 0;
                    for (i = 0; i <= d; i++)
                        t.bl_count[i] = 0;
                    for (a[2 * t.heap[t.heap_max] + 1] = 0,
                    e = t.heap_max + 1; e < g; e++)
                        l < (i = a[2 * a[2 * (n = t.heap[e]) + 1] + 1] + 1) && (i = l,
                        f++),
                        a[2 * n + 1] = i,
                        n > p.max_code || (t.bl_count[i]++,
                        o = 0,
                        h <= n && (o = u[n - h]),
                        s = a[2 * n],
                        t.opt_len += s * (i + o),
                        c && (t.static_len += s * (c[2 * n + 1] + o)));
                    if (0 !== f) {
                        do {
                            for (i = l - 1; 0 === t.bl_count[i]; )
                                i--;
                            t.bl_count[i]--,
                            t.bl_count[i + 1] += 2,
                            t.bl_count[l]--,
                            f -= 2
                        } while (0 < f);for (i = l; 0 !== i; i--)
                            for (n = t.bl_count[i]; 0 !== n; )
                                (r = t.heap[--e]) > p.max_code || (a[2 * r + 1] != i && (t.opt_len += (i - a[2 * r + 1]) * a[2 * r],
                                a[2 * r + 1] = i),
                                n--)
                    }
                }(t),
                function(t, e, n) {
                    var r, i, o, s = [], a = 0;
                    for (r = 1; r <= d; r++)
                        s[r] = a = a + n[r - 1] << 1;
                    for (i = 0; i <= e; i++)
                        0 !== (o = t[2 * i + 1]) && (t[2 * i] = c(s[o]++, o))
                }(i, p.max_code, t.bl_count)
            }
        }
        function ft(t, e, n, r, i) {
            var o = this;
            o.static_tree = t,
            o.extra_bits = e,
            o.extra_base = n,
            o.elems = r,
            o.max_length = i
        }
        lt._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28],
        lt.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0],
        lt.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576],
        lt.d_code = function(t) {
            return t < 256 ? e[t] : e[256 + (t >>> 7)]
        }
        ,
        lt.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        lt.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        lt.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        lt.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        ft.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8],
        ft.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5],
        ft.static_l_desc = new ft(ft.static_ltree,lt.extra_lbits,257,286,d),
        ft.static_d_desc = new ft(ft.static_dtree,lt.extra_dbits,0,30,d),
        ft.static_bl_desc = new ft(null,lt.extra_blbits,0,19,7);
        function n(t, e, n, r, i) {
            var o = this;
            o.good_length = t,
            o.max_lazy = e,
            o.nice_length = n,
            o.max_chain = r,
            o.func = i
        }
        var pt = [new n(0,0,0,0,0), new n(4,4,8,4,1), new n(4,5,16,8,1), new n(4,6,32,32,1), new n(4,4,16,16,2), new n(8,16,32,32,2), new n(8,16,128,128,2), new n(8,32,128,256,2), new n(32,128,258,1024,2), new n(32,258,258,4096,2)]
          , dt = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""]
          , gt = 262;
        function mt(t, e, n, r) {
            var i = t[2 * e]
              , o = t[2 * n];
            return i < o || i == o && r[e] <= r[n]
        }
        function r() {
            var c, u, h, l, f, p, d, g, i, m, y, w, v, s, b, x, S, _, k, A, C, I, P, F, q, j, T, O, B, D, a, E, R, U, z, M, N, o, L, H, W, G = this, V = new lt, Y = new lt, X = new lt;
            function J() {
                var t;
                for (t = 0; t < 286; t++)
                    a[2 * t] = 0;
                for (t = 0; t < 30; t++)
                    E[2 * t] = 0;
                for (t = 0; t < 19; t++)
                    R[2 * t] = 0;
                a[512] = 1,
                G.opt_len = G.static_len = 0,
                M = o = 0
            }
            function K(t, e) {
                var n, r, i = -1, o = t[1], s = 0, a = 7, c = 4;
                for (0 === o && (a = 138,
                c = 3),
                t[2 * (e + 1) + 1] = 65535,
                n = 0; n <= e; n++)
                    r = o,
                    o = t[2 * (n + 1) + 1],
                    ++s < a && r == o || (s < c ? R[2 * r] += s : 0 !== r ? (r != i && R[2 * r]++,
                    R[32]++) : s <= 10 ? R[34]++ : R[36]++,
                    i = r,
                    c = (s = 0) === o ? (a = 138,
                    3) : r == o ? (a = 6,
                    3) : (a = 7,
                    4))
            }
            function Q(t) {
                G.pending_buf[G.pending++] = t
            }
            function Z(t) {
                Q(255 & t),
                Q(t >>> 8 & 255)
            }
            function $(t, e) {
                var n, r = e;
                16 - r < W ? (Z(H |= (n = t) << W & 65535),
                H = n >>> 16 - W,
                W += r - 16) : (H |= t << W & 65535,
                W += r)
            }
            function tt(t, e) {
                var n = 2 * t;
                $(65535 & e[n], 65535 & e[n + 1])
            }
            function et(t, e) {
                var n, r, i = -1, o = t[1], s = 0, a = 7, c = 4;
                for (0 === o && (a = 138,
                c = 3),
                n = 0; n <= e; n++)
                    if (r = o,
                    o = t[2 * (n + 1) + 1],
                    !(++s < a && r == o)) {
                        if (s < c)
                            for (; tt(r, R),
                            0 != --s; )
                                ;
                        else
                            0 !== r ? (r != i && (tt(r, R),
                            s--),
                            tt(16, R),
                            $(s - 3, 2)) : s <= 10 ? (tt(17, R),
                            $(s - 3, 3)) : (tt(18, R),
                            $(s - 11, 7));
                        i = r,
                        c = (s = 0) === o ? (a = 138,
                        3) : r == o ? (a = 6,
                        3) : (a = 7,
                        4)
                    }
            }
            function nt() {
                16 == W ? (Z(H),
                W = H = 0) : 8 <= W && (Q(255 & H),
                H >>>= 8,
                W -= 8)
            }
            function rt(t, e) {
                var n, r, i;
                if (G.pending_buf[N + 2 * M] = t >>> 8 & 255,
                G.pending_buf[N + 2 * M + 1] = 255 & t,
                G.pending_buf[U + M] = 255 & e,
                M++,
                0 === t ? a[2 * e]++ : (o++,
                t--,
                a[2 * (lt._length_code[e] + 256 + 1)]++,
                E[2 * lt.d_code(t)]++),
                0 == (8191 & M) && 2 < T) {
                    for (n = 8 * M,
                    r = C - S,
                    i = 0; i < 30; i++)
                        n += E[2 * i] * (5 + lt.extra_dbits[i]);
                    if (n >>>= 3,
                    o < Math.floor(M / 2) && n < Math.floor(r / 2))
                        return !0
                }
                return M == z - 1
            }
            function it(t, e) {
                var n, r, i, o, s = 0;
                if (0 !== M)
                    for (; n = G.pending_buf[N + 2 * s] << 8 & 65280 | 255 & G.pending_buf[N + 2 * s + 1],
                    r = 255 & G.pending_buf[U + s],
                    s++,
                    0 === n ? tt(r, t) : (tt((i = lt._length_code[r]) + 256 + 1, t),
                    0 !== (o = lt.extra_lbits[i]) && $(r -= lt.base_length[i], o),
                    tt(i = lt.d_code(--n), e),
                    0 !== (o = lt.extra_dbits[i]) && $(n -= lt.base_dist[i], o)),
                    s < M; )
                        ;
                tt(256, t),
                L = t[513]
            }
            function ot() {
                8 < W ? Z(H) : 0 < W && Q(255 & H),
                W = H = 0
            }
            function st(t, e, n) {
                var r, i, o;
                $(0 + (n ? 1 : 0), 3),
                r = t,
                i = e,
                o = !0,
                ot(),
                L = 8,
                o && (Z(i),
                Z(~i)),
                G.pending_buf.set(g.subarray(r, r + i), G.pending),
                G.pending += i
            }
            function e(t, e, n) {
                var r, i, o = 0;
                0 < T ? (V.build_tree(G),
                Y.build_tree(G),
                o = function() {
                    var t;
                    for (K(a, V.max_code),
                    K(E, Y.max_code),
                    X.build_tree(G),
                    t = 18; 3 <= t && 0 === R[2 * lt.bl_order[t] + 1]; t--)
                        ;
                    return G.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                    t
                }(),
                r = G.opt_len + 3 + 7 >>> 3,
                (i = G.static_len + 3 + 7 >>> 3) <= r && (r = i)) : r = i = e + 5,
                e + 4 <= r && -1 != t ? st(t, e, n) : i == r ? ($(2 + (n ? 1 : 0), 3),
                it(ft.static_ltree, ft.static_dtree)) : ($(4 + (n ? 1 : 0), 3),
                function(t, e, n) {
                    var r;
                    for ($(t - 257, 5),
                    $(e - 1, 5),
                    $(n - 4, 4),
                    r = 0; r < n; r++)
                        $(R[2 * lt.bl_order[r] + 1], 3);
                    et(a, t - 1),
                    et(E, e - 1)
                }(V.max_code + 1, Y.max_code + 1, o + 1),
                it(a, E)),
                J(),
                n && ot()
            }
            function at(t) {
                e(0 <= S ? S : -1, C - S, t),
                S = C,
                c.flush_pending()
            }
            function ct() {
                var t, e, n, r;
                do {
                    if (0 === (r = i - P - C) && 0 === C && 0 === P)
                        r = f;
                    else if (-1 == r)
                        r--;
                    else if (f + f - gt <= C) {
                        for (g.set(g.subarray(f, f + f), 0),
                        I -= f,
                        C -= f,
                        S -= f,
                        n = t = v; e = 65535 & y[--n],
                        y[n] = f <= e ? e - f : 0,
                        0 != --t; )
                            ;
                        for (n = t = f; e = 65535 & m[--n],
                        m[n] = f <= e ? e - f : 0,
                        0 != --t; )
                            ;
                        r += f
                    }
                    if (0 === c.avail_in)
                        return;
                    t = c.read_buf(g, C + P, r),
                    3 <= (P += t) && (w = ((w = 255 & g[C]) << x ^ 255 & g[C + 1]) & b)
                } while (P < gt && 0 !== c.avail_in)
            }
            function ut(t) {
                var e, n, r = q, i = C, o = F, s = f - gt < C ? C - (f - gt) : 0, a = D, c = d, u = C + 258, h = g[i + o - 1], l = g[i + o];
                B <= F && (r >>= 2),
                P < a && (a = P);
                do {
                    if (g[(e = t) + o] == l && g[e + o - 1] == h && g[e] == g[i] && g[++e] == g[i + 1]) {
                        i += 2,
                        e++;
                        do {} while (g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && i < u);if (n = 258 - (u - i),
                        i = u - 258,
                        o < n) {
                            if (I = t,
                            a <= (o = n))
                                break;
                            h = g[i + o - 1],
                            l = g[i + o]
                        }
                    }
                } while ((t = 65535 & m[t & c]) > s && 0 != --r);return o <= P ? o : P
            }
            function ht(t) {
                return t.total_in = t.total_out = 0,
                t.msg = null,
                G.pending = 0,
                G.pending_out = 0,
                u = 113,
                l = 0,
                V.dyn_tree = a,
                V.stat_desc = ft.static_l_desc,
                Y.dyn_tree = E,
                Y.stat_desc = ft.static_d_desc,
                X.dyn_tree = R,
                X.stat_desc = ft.static_bl_desc,
                W = H = 0,
                L = 8,
                J(),
                function() {
                    var t;
                    for (i = 2 * f,
                    t = y[v - 1] = 0; t < v - 1; t++)
                        y[t] = 0;
                    j = pt[T].max_lazy,
                    B = pt[T].good_length,
                    D = pt[T].nice_length,
                    q = pt[T].max_chain,
                    _ = F = 2,
                    w = A = P = S = C = 0
                }(),
                0
            }
            G.depth = [],
            G.bl_count = [],
            G.heap = [],
            a = [],
            E = [],
            R = [],
            G.pqdownheap = function(t, e) {
                for (var n = G.heap, r = n[e], i = e << 1; i <= G.heap_len && (i < G.heap_len && mt(t, n[i + 1], n[i], G.depth) && i++,
                !mt(t, r, n[i], G.depth)); )
                    n[e] = n[i],
                    e = i,
                    i <<= 1;
                n[e] = r
            }
            ,
            G.deflateInit = function(t, e, n, r, i, o) {
                return r || (r = 8),
                i || (i = 8),
                o || (o = 0),
                t.msg = null,
                -1 == e && (e = 6),
                i < 1 || 9 < i || 8 != r || n < 9 || 15 < n || e < 0 || 9 < e || o < 0 || 2 < o ? -2 : (t.dstate = G,
                d = (f = 1 << (p = n)) - 1,
                b = (v = 1 << (s = i + 7)) - 1,
                x = Math.floor((s + 3 - 1) / 3),
                g = new Uint8Array(2 * f),
                m = [],
                y = [],
                z = 1 << i + 6,
                G.pending_buf = new Uint8Array(4 * z),
                h = 4 * z,
                N = Math.floor(z / 2),
                U = 3 * z,
                T = e,
                O = o,
                ht(t))
            }
            ,
            G.deflateEnd = function() {
                return 42 != u && 113 != u && 666 != u ? -2 : (G.pending_buf = null,
                g = m = y = null,
                G.dstate = null,
                113 == u ? -3 : 0)
            }
            ,
            G.deflateParams = function(t, e, n) {
                var r = 0;
                return -1 == e && (e = 6),
                e < 0 || 9 < e || n < 0 || 2 < n ? -2 : (pt[T].func != pt[e].func && 0 !== t.total_in && (r = t.deflate(1)),
                T != e && (j = pt[T = e].max_lazy,
                B = pt[T].good_length,
                D = pt[T].nice_length,
                q = pt[T].max_chain),
                O = n,
                r)
            }
            ,
            G.deflateSetDictionary = function(t, e, n) {
                var r, i = n, o = 0;
                if (!e || 42 != u)
                    return -2;
                if (i < 3)
                    return 0;
                for (f - gt < i && (o = n - (i = f - gt)),
                g.set(e.subarray(o, o + i), 0),
                S = C = i,
                w = ((w = 255 & g[0]) << x ^ 255 & g[1]) & b,
                r = 0; r <= i - 3; r++)
                    w = (w << x ^ 255 & g[r + 2]) & b,
                    m[r & d] = y[w],
                    y[w] = r;
                return 0
            }
            ,
            G.deflate = function(t, e) {
                var n, r, i, o, s, a;
                if (4 < e || e < 0)
                    return -2;
                if (!t.next_out || !t.next_in && 0 !== t.avail_in || 666 == u && 4 != e)
                    return t.msg = dt[4],
                    -2;
                if (0 === t.avail_out)
                    return t.msg = dt[7],
                    -5;
                if (c = t,
                o = l,
                l = e,
                42 == u && (r = 8 + (p - 8 << 4) << 8,
                3 < (i = (T - 1 & 255) >> 1) && (i = 3),
                r |= i << 6,
                0 !== C && (r |= 32),
                u = 113,
                Q((a = r += 31 - r % 31) >> 8 & 255),
                Q(255 & a)),
                0 !== G.pending) {
                    if (c.flush_pending(),
                    0 === c.avail_out)
                        return l = -1,
                        0
                } else if (0 === c.avail_in && e <= o && 4 != e)
                    return c.msg = dt[7],
                    -5;
                if (666 == u && 0 !== c.avail_in)
                    return t.msg = dt[7],
                    -5;
                if (0 !== c.avail_in || 0 !== P || 0 != e && 666 != u) {
                    switch (s = -1,
                    pt[T].func) {
                    case 0:
                        s = function(t) {
                            var e, n = 65535;
                            for (h - 5 < n && (n = h - 5); ; ) {
                                if (P <= 1) {
                                    if (ct(),
                                    0 === P && 0 == t)
                                        return 0;
                                    if (0 === P)
                                        break
                                }
                                if (C += P,
                                e = S + n,
                                ((P = 0) === C || e <= C) && (P = C - e,
                                C = e,
                                at(!1),
                                0 === c.avail_out))
                                    return 0;
                                if (f - gt <= C - S && (at(!1),
                                0 === c.avail_out))
                                    return 0
                            }
                            return at(4 == t),
                            0 === c.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(e);
                        break;
                    case 1:
                        s = function(t) {
                            for (var e, n = 0; ; ) {
                                if (P < gt) {
                                    if (ct(),
                                    P < gt && 0 == t)
                                        return 0;
                                    if (0 === P)
                                        break
                                }
                                if (3 <= P && (w = (w << x ^ 255 & g[C + 2]) & b,
                                n = 65535 & y[w],
                                m[C & d] = y[w],
                                y[w] = C),
                                0 !== n && (C - n & 65535) <= f - gt && 2 != O && (_ = ut(n)),
                                3 <= _)
                                    if (e = rt(C - I, _ - 3),
                                    P -= _,
                                    _ <= j && 3 <= P) {
                                        for (_--; w = (w << x ^ 255 & g[++C + 2]) & b,
                                        n = 65535 & y[w],
                                        m[C & d] = y[w],
                                        y[w] = C,
                                        0 != --_; )
                                            ;
                                        C++
                                    } else
                                        C += _,
                                        _ = 0,
                                        w = ((w = 255 & g[C]) << x ^ 255 & g[C + 1]) & b;
                                else
                                    e = rt(0, 255 & g[C]),
                                    P--,
                                    C++;
                                if (e && (at(!1),
                                0 === c.avail_out))
                                    return 0
                            }
                            return at(4 == t),
                            0 === c.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(e);
                        break;
                    case 2:
                        s = function(t) {
                            for (var e, n, r = 0; ; ) {
                                if (P < gt) {
                                    if (ct(),
                                    P < gt && 0 == t)
                                        return 0;
                                    if (0 === P)
                                        break
                                }
                                if (3 <= P && (w = (w << x ^ 255 & g[C + 2]) & b,
                                r = 65535 & y[w],
                                m[C & d] = y[w],
                                y[w] = C),
                                F = _,
                                k = I,
                                _ = 2,
                                0 !== r && F < j && (C - r & 65535) <= f - gt && (2 != O && (_ = ut(r)),
                                _ <= 5 && (1 == O || 3 == _ && 4096 < C - I) && (_ = 2)),
                                3 <= F && _ <= F) {
                                    for (n = C + P - 3,
                                    e = rt(C - 1 - k, F - 3),
                                    P -= F - 1,
                                    F -= 2; ++C <= n && (w = (w << x ^ 255 & g[C + 2]) & b,
                                    r = 65535 & y[w],
                                    m[C & d] = y[w],
                                    y[w] = C),
                                    0 != --F; )
                                        ;
                                    if (A = 0,
                                    _ = 2,
                                    C++,
                                    e && (at(!1),
                                    0 === c.avail_out))
                                        return 0
                                } else if (0 !== A) {
                                    if ((e = rt(0, 255 & g[C - 1])) && at(!1),
                                    C++,
                                    P--,
                                    0 === c.avail_out)
                                        return 0
                                } else
                                    A = 1,
                                    C++,
                                    P--
                            }
                            return 0 !== A && (e = rt(0, 255 & g[C - 1]),
                            A = 0),
                            at(4 == t),
                            0 === c.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1
                        }(e)
                    }
                    if (2 != s && 3 != s || (u = 666),
                    0 == s || 2 == s)
                        return 0 === c.avail_out && (l = -1),
                        0;
                    if (1 == s) {
                        if (1 == e)
                            $(2, 3),
                            tt(256, ft.static_ltree),
                            nt(),
                            1 + L + 10 - W < 9 && ($(2, 3),
                            tt(256, ft.static_ltree),
                            nt()),
                            L = 7;
                        else if (st(0, 0, !1),
                        3 == e)
                            for (n = 0; n < v; n++)
                                y[n] = 0;
                        if (c.flush_pending(),
                        0 === c.avail_out)
                            return l = -1,
                            0
                    }
                }
                return 4 != e ? 0 : 1
            }
        }
        function i() {
            var t = this;
            t.next_in_index = 0,
            t.next_out_index = 0,
            t.avail_in = 0,
            t.total_in = 0,
            t.avail_out = 0,
            t.total_out = 0
        }
        i.prototype = {
            deflateInit: function(t, e) {
                return this.dstate = new r,
                e || (e = d),
                this.dstate.deflateInit(this, t, e)
            },
            deflate: function(t) {
                return this.dstate ? this.dstate.deflate(this, t) : -2
            },
            deflateEnd: function() {
                if (!this.dstate)
                    return -2;
                var t = this.dstate.deflateEnd();
                return this.dstate = null,
                t
            },
            deflateParams: function(t, e) {
                return this.dstate ? this.dstate.deflateParams(this, t, e) : -2
            },
            deflateSetDictionary: function(t, e) {
                return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2
            },
            read_buf: function(t, e, n) {
                var r = this.avail_in;
                return n < r && (r = n),
                0 === r ? 0 : (this.avail_in -= r,
                t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e),
                this.next_in_index += r,
                this.total_in += r,
                r)
            },
            flush_pending: function() {
                var t = this
                  , e = t.dstate.pending;
                e > t.avail_out && (e = t.avail_out),
                0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index),
                t.next_out_index += e,
                t.dstate.pending_out += e,
                t.total_out += e,
                t.avail_out -= e,
                t.dstate.pending -= e,
                0 === t.dstate.pending && (t.dstate.pending_out = 0))
            }
        };
        var o = t.zip || t;
        o.Deflater = o._jzlib_Deflater = function(t) {
            var a = new i
              , c = new Uint8Array(512)
              , e = t ? t.level : -1;
            void 0 === e && (e = -1),
            a.deflateInit(e),
            a.next_out = c,
            this.append = function(t, e) {
                var n, r = [], i = 0, o = 0, s = 0;
                if (t.length) {
                    a.next_in_index = 0,
                    a.next_in = t,
                    a.avail_in = t.length;
                    do {
                        if (a.next_out_index = 0,
                        a.avail_out = 512,
                        0 != a.deflate(0))
                            throw new Error("deflating: " + a.msg);
                        a.next_out_index && (512 == a.next_out_index ? r.push(new Uint8Array(c)) : r.push(new Uint8Array(c.subarray(0, a.next_out_index)))),
                        s += a.next_out_index,
                        e && 0 < a.next_in_index && a.next_in_index != i && (e(a.next_in_index),
                        i = a.next_in_index)
                    } while (0 < a.avail_in || 0 === a.avail_out);return n = new Uint8Array(s),
                    r.forEach(function(t) {
                        n.set(t, o),
                        o += t.length
                    }),
                    n
                }
            }
            ,
            this.flush = function() {
                var t, e, n = [], r = 0, i = 0;
                do {
                    if (a.next_out_index = 0,
                    a.avail_out = 512,
                    1 != (t = a.deflate(4)) && 0 != t)
                        throw new Error("deflating: " + a.msg);
                    0 < 512 - a.avail_out && n.push(new Uint8Array(c.subarray(0, a.next_out_index))),
                    i += a.next_out_index
                } while (0 < a.avail_in || 0 === a.avail_out);return a.deflateEnd(),
                e = new Uint8Array(i),
                n.forEach(function(t) {
                    e.set(t, r),
                    r += t.length
                }),
                e
            }
        }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()),
    ("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()).RGBColor = function h(t) {
        var e;
        this.ok = !1,
        "#" == t.charAt(0) && (t = t.substr(1, 6)),
        t = (t = t.replace(/ /g, "")).toLowerCase();
        var l = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        };
        for (var n in l)
            t == n && (t = l[n]);
        for (var f = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function(t) {
                return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ["#00ff00", "336699"],
            process: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ["#fb0", "f0f"],
            process: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }], r = 0; r < f.length; r++) {
            var i = f[r].re
              , o = f[r].process
              , s = i.exec(t);
            s && (e = o(s),
            this.r = e[0],
            this.g = e[1],
            this.b = e[2],
            this.ok = !0)
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r,
        this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g,
        this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b,
        this.toRGB = function() {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        }
        ,
        this.toHex = function() {
            var t = this.r.toString(16)
              , e = this.g.toString(16)
              , n = this.b.toString(16);
            return 1 == t.length && (t = "0" + t),
            1 == e.length && (e = "0" + e),
            1 == n.length && (n = "0" + n),
            "#" + t + e + n
        }
        ,
        this.getHelpXML = function() {
            for (var t = new Array, e = 0; e < f.length; e++)
                for (var n = f[e].example, r = 0; r < n.length; r++)
                    t[t.length] = n[r];
            for (var i in l)
                t[t.length] = i;
            var o = document.createElement("ul");
            for (o.setAttribute("id", "rgbcolor-examples"),
            e = 0; e < t.length; e++)
                try {
                    var s = document.createElement("li")
                      , a = new h(t[e])
                      , c = document.createElement("div");
                    c.style.cssText = "margin: 3px; border: 1px solid black; background:" + a.toHex() + "; color:" + a.toHex(),
                    c.appendChild(document.createTextNode("test"));
                    var u = document.createTextNode(" " + t[e] + " -> " + a.toRGB() + " -> " + a.toHex());
                    s.appendChild(c),
                    s.appendChild(u),
                    o.appendChild(s)
                } catch (t) {}
            return o
        }
    }
    ,
    function(t) {
        var n = "+".charCodeAt(0)
          , r = "/".charCodeAt(0)
          , i = "0".charCodeAt(0)
          , o = "a".charCodeAt(0)
          , s = "A".charCodeAt(0)
          , a = "-".charCodeAt(0)
          , c = "_".charCodeAt(0)
          , h = function(t) {
            var e = t.charCodeAt(0);
            return e === n || e === a ? 62 : e === r || e === c ? 63 : e < i ? -1 : e < i + 10 ? e - i + 26 + 26 : e < s + 26 ? e - s : e < o + 26 ? e - o + 26 : void 0
        };
        t.API.TTFFont = function() {
            function i(t, e, n) {
                var r;
                if (this.rawData = t,
                r = this.contents = new X(t),
                this.contents.pos = 4,
                "ttcf" === r.readString(4)) {
                    if (!e)
                        throw new Error("Must specify a font name for TTC files.");
                    throw new Error("Font " + e + " not found in TTC file.")
                }
                r.pos = 0,
                this.parse(),
                this.subset = new P(this),
                this.registerTTF()
            }
            return i.open = function(t, e, n, r) {
                if ("string" != typeof n)
                    throw new Error("Invalid argument supplied in TTFFont.open");
                return new i(function(t) {
                    var e, n, r, i, o, s;
                    if (0 < t.length % 4)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var a = t.length;
                    o = "=" === t.charAt(a - 2) ? 2 : "=" === t.charAt(a - 1) ? 1 : 0,
                    s = new Uint8Array(3 * t.length / 4 - o),
                    r = 0 < o ? t.length - 4 : t.length;
                    var c = 0;
                    function u(t) {
                        s[c++] = t
                    }
                    for (n = e = 0; e < r; e += 4,
                    n += 3)
                        u((16711680 & (i = h(t.charAt(e)) << 18 | h(t.charAt(e + 1)) << 12 | h(t.charAt(e + 2)) << 6 | h(t.charAt(e + 3)))) >> 16),
                        u((65280 & i) >> 8),
                        u(255 & i);
                    return 2 === o ? u(255 & (i = h(t.charAt(e)) << 2 | h(t.charAt(e + 1)) >> 4)) : 1 === o && (u((i = h(t.charAt(e)) << 10 | h(t.charAt(e + 1)) << 4 | h(t.charAt(e + 2)) >> 2) >> 8 & 255),
                    u(255 & i)),
                    s
                }(n),e,r)
            }
            ,
            i.prototype.parse = function() {
                return this.directory = new e(this.contents),
                this.head = new p(this),
                this.name = new b(this),
                this.cmap = new y(this),
                this.toUnicode = new Map,
                this.hhea = new g(this),
                this.maxp = new x(this),
                this.hmtx = new S(this),
                this.post = new w(this),
                this.os2 = new m(this),
                this.loca = new I(this),
                this.glyf = new k(this),
                this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender,
                this.decender = this.os2.exists && this.os2.decender || this.hhea.decender,
                this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap,
                this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
            }
            ,
            i.prototype.registerTTF = function() {
                var i, t, e, n, r;
                if (this.scaleFactor = 1e3 / this.head.unitsPerEm,
                this.bbox = function() {
                    var t, e, n, r;
                    for (r = [],
                    t = 0,
                    e = (n = this.bbox).length; t < e; t++)
                        i = n[t],
                        r.push(Math.round(i * this.scaleFactor));
                    return r
                }
                .call(this),
                this.stemV = 0,
                this.post.exists ? (e = 255 & (n = this.post.italic_angle),
                !0 & (t = n >> 16) && (t = -(1 + (65535 ^ t))),
                this.italicAngle = +(t + "." + e)) : this.italicAngle = 0,
                this.ascender = Math.round(this.ascender * this.scaleFactor),
                this.decender = Math.round(this.decender * this.scaleFactor),
                this.lineGap = Math.round(this.lineGap * this.scaleFactor),
                this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender,
                this.xHeight = this.os2.exists && this.os2.xHeight || 0,
                this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8,
                this.isSerif = 1 === (r = this.familyClass) || 2 === r || 3 === r || 4 === r || 5 === r || 7 === r,
                this.isScript = 10 === this.familyClass,
                this.flags = 0,
                this.post.isFixedPitch && (this.flags |= 1),
                this.isSerif && (this.flags |= 2),
                this.isScript && (this.flags |= 8),
                0 !== this.italicAngle && (this.flags |= 64),
                this.flags |= 32,
                !this.cmap.unicode)
                    throw new Error("No unicode cmap for font")
            }
            ,
            i.prototype.characterToGlyph = function(t) {
                var e;
                return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0
            }
            ,
            i.prototype.widthOfGlyph = function(t) {
                var e;
                return e = 1e3 / this.head.unitsPerEm,
                this.hmtx.forGlyph(t).advance * e
            }
            ,
            i.prototype.widthOfString = function(t, e, n) {
                var r, i, o, s, a;
                for (i = s = o = 0,
                a = (t = "" + t).length; 0 <= a ? s < a : a < s; i = 0 <= a ? ++s : --s)
                    r = t.charCodeAt(i),
                    o += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / e) || 0;
                return o * (e / 1e3)
            }
            ,
            i.prototype.lineHeight = function(t, e) {
                var n;
                return null == e && (e = !1),
                n = e ? this.lineGap : 0,
                (this.ascender + n - this.decender) / 1e3 * t
            }
            ,
            i
        }();
        var u, X = function() {
            function t(t) {
                this.data = null != t ? t : [],
                this.pos = 0,
                this.length = this.data.length
            }
            return t.prototype.readByte = function() {
                return this.data[this.pos++]
            }
            ,
            t.prototype.writeByte = function(t) {
                return this.data[this.pos++] = t
            }
            ,
            t.prototype.readUInt32 = function() {
                return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
            }
            ,
            t.prototype.writeUInt32 = function(t) {
                return this.writeByte(t >>> 24 & 255),
                this.writeByte(t >> 16 & 255),
                this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt32 = function() {
                var t;
                return 2147483648 <= (t = this.readUInt32()) ? t - 4294967296 : t
            }
            ,
            t.prototype.writeInt32 = function(t) {
                return t < 0 && (t += 4294967296),
                this.writeUInt32(t)
            }
            ,
            t.prototype.readUInt16 = function() {
                return this.readByte() << 8 | this.readByte()
            }
            ,
            t.prototype.writeUInt16 = function(t) {
                return this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt16 = function() {
                var t;
                return 32768 <= (t = this.readUInt16()) ? t - 65536 : t
            }
            ,
            t.prototype.writeInt16 = function(t) {
                return t < 0 && (t += 65536),
                this.writeUInt16(t)
            }
            ,
            t.prototype.readString = function(t) {
                var e, n, r;
                for (n = [],
                e = r = 0; 0 <= t ? r < t : t < r; e = 0 <= t ? ++r : --r)
                    n[e] = String.fromCharCode(this.readByte());
                return n.join("")
            }
            ,
            t.prototype.writeString = function(t) {
                var e, n, r, i;
                for (i = [],
                e = n = 0,
                r = t.length; 0 <= r ? n < r : r < n; e = 0 <= r ? ++n : --n)
                    i.push(this.writeByte(t.charCodeAt(e)));
                return i
            }
            ,
            t.prototype.readShort = function() {
                return this.readInt16()
            }
            ,
            t.prototype.writeShort = function(t) {
                return this.writeInt16(t)
            }
            ,
            t.prototype.readLongLong = function() {
                var t, e, n, r, i, o, s, a;
                return t = this.readByte(),
                e = this.readByte(),
                n = this.readByte(),
                r = this.readByte(),
                i = this.readByte(),
                o = this.readByte(),
                s = this.readByte(),
                a = this.readByte(),
                128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ o) + 256 * (255 ^ s) + (255 ^ a) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * o + 256 * s + a
            }
            ,
            t.prototype.writeLongLong = function(t) {
                var e, n;
                return e = Math.floor(t / 4294967296),
                n = 4294967295 & t,
                this.writeByte(e >> 24 & 255),
                this.writeByte(e >> 16 & 255),
                this.writeByte(e >> 8 & 255),
                this.writeByte(255 & e),
                this.writeByte(n >> 24 & 255),
                this.writeByte(n >> 16 & 255),
                this.writeByte(n >> 8 & 255),
                this.writeByte(255 & n)
            }
            ,
            t.prototype.readInt = function() {
                return this.readInt32()
            }
            ,
            t.prototype.writeInt = function(t) {
                return this.writeInt32(t)
            }
            ,
            t.prototype.read = function(t) {
                var e, n;
                for (e = [],
                n = 0; 0 <= t ? n < t : t < n; 0 <= t ? ++n : --n)
                    e.push(this.readByte());
                return e
            }
            ,
            t.prototype.write = function(t) {
                var e, n, r, i;
                for (i = [],
                n = 0,
                r = t.length; n < r; n++)
                    e = t[n],
                    i.push(this.writeByte(e));
                return i
            }
            ,
            t
        }(), e = function() {
            var d;
            function t(t) {
                var e, n, r;
                for (this.scalarType = t.readInt(),
                this.tableCount = t.readShort(),
                this.searchRange = t.readShort(),
                this.entrySelector = t.readShort(),
                this.rangeShift = t.readShort(),
                this.tables = {},
                n = 0,
                r = this.tableCount; 0 <= r ? n < r : r < n; 0 <= r ? ++n : --n)
                    e = {
                        tag: t.readString(4),
                        checksum: t.readInt(),
                        offset: t.readInt(),
                        length: t.readInt()
                    },
                    this.tables[e.tag] = e
            }
            return t.prototype.encode = function(t) {
                var e, n, r, i, o, s, a, c, u, h, l, f, p;
                for (p in l = Object.keys(t).length,
                s = Math.log(2),
                u = 16 * Math.floor(Math.log(l) / s),
                i = Math.floor(u / s),
                c = 16 * l - u,
                (n = new X).writeInt(this.scalarType),
                n.writeShort(l),
                n.writeShort(u),
                n.writeShort(i),
                n.writeShort(c),
                r = 16 * l,
                a = n.pos + r,
                o = null,
                f = [],
                t)
                    for (h = t[p],
                    n.writeString(p),
                    n.writeInt(d(h)),
                    n.writeInt(a),
                    n.writeInt(h.length),
                    f = f.concat(h),
                    "head" === p && (o = a),
                    a += h.length; a % 4; )
                        f.push(0),
                        a++;
                return n.write(f),
                e = 2981146554 - d(n.data),
                n.pos = o + 8,
                n.writeUInt32(e),
                n.data
            }
            ,
            d = function(t) {
                var e, n, r, i;
                for (t = _.call(t); t.length % 4; )
                    t.push(0);
                for (n = new X(t),
                r = e = 0,
                i = t.length; r < i; r += 4)
                    e += n.readUInt32();
                return 4294967295 & e
            }
            ,
            t
        }(), l = {}.hasOwnProperty, f = function(t, e) {
            for (var n in e)
                l.call(e, n) && (t[n] = e[n]);
            function r() {
                this.constructor = t
            }
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        };
        u = function() {
            function t(t) {
                var e;
                this.file = t,
                e = this.file.directory.tables[this.tag],
                this.exists = !!e,
                e && (this.offset = e.offset,
                this.length = e.length,
                this.parse(this.file.contents))
            }
            return t.prototype.parse = function() {}
            ,
            t.prototype.encode = function() {}
            ,
            t.prototype.raw = function() {
                return this.exists ? (this.file.contents.pos = this.offset,
                this.file.contents.read(this.length)) : null
            }
            ,
            t
        }();
        var p = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "head",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.revision = t.readInt(),
                this.checkSumAdjustment = t.readInt(),
                this.magicNumber = t.readInt(),
                this.flags = t.readShort(),
                this.unitsPerEm = t.readShort(),
                this.created = t.readLongLong(),
                this.modified = t.readLongLong(),
                this.xMin = t.readShort(),
                this.yMin = t.readShort(),
                this.xMax = t.readShort(),
                this.yMax = t.readShort(),
                this.macStyle = t.readShort(),
                this.lowestRecPPEM = t.readShort(),
                this.fontDirectionHint = t.readShort(),
                this.indexToLocFormat = t.readShort(),
                this.glyphDataFormat = t.readShort()
            }
            ,
            e.prototype.encode = function(t) {
                var e;
                return (e = new X).writeInt(this.version),
                e.writeInt(this.revision),
                e.writeInt(this.checkSumAdjustment),
                e.writeInt(this.magicNumber),
                e.writeShort(this.flags),
                e.writeShort(this.unitsPerEm),
                e.writeLongLong(this.created),
                e.writeLongLong(this.modified),
                e.writeShort(this.xMin),
                e.writeShort(this.yMin),
                e.writeShort(this.xMax),
                e.writeShort(this.yMax),
                e.writeShort(this.macStyle),
                e.writeShort(this.lowestRecPPEM),
                e.writeShort(this.fontDirectionHint),
                e.writeShort(t),
                e.writeShort(this.glyphDataFormat),
                e.data
            }
            ,
            e
        }()
          , d = function() {
            function t(n, t) {
                var e, r, i, o, s, a, c, u, h, l, f, p, d, g, m, y, w, v;
                switch (this.platformID = n.readUInt16(),
                this.encodingID = n.readShort(),
                this.offset = t + n.readInt(),
                h = n.pos,
                n.pos = this.offset,
                this.format = n.readUInt16(),
                this.length = n.readUInt16(),
                this.language = n.readUInt16(),
                this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format,
                this.codeMap = {},
                this.format) {
                case 0:
                    for (a = m = 0; m < 256; a = ++m)
                        this.codeMap[a] = n.readByte();
                    break;
                case 4:
                    for (f = n.readUInt16(),
                    l = f / 2,
                    n.pos += 6,
                    i = function() {
                        var t, e;
                        for (e = [],
                        a = t = 0; 0 <= l ? t < l : l < t; a = 0 <= l ? ++t : --t)
                            e.push(n.readUInt16());
                        return e
                    }(),
                    n.pos += 2,
                    d = function() {
                        var t, e;
                        for (e = [],
                        a = t = 0; 0 <= l ? t < l : l < t; a = 0 <= l ? ++t : --t)
                            e.push(n.readUInt16());
                        return e
                    }(),
                    c = function() {
                        var t, e;
                        for (e = [],
                        a = t = 0; 0 <= l ? t < l : l < t; a = 0 <= l ? ++t : --t)
                            e.push(n.readUInt16());
                        return e
                    }(),
                    u = function() {
                        var t, e;
                        for (e = [],
                        a = t = 0; 0 <= l ? t < l : l < t; a = 0 <= l ? ++t : --t)
                            e.push(n.readUInt16());
                        return e
                    }(),
                    r = (this.length - n.pos + this.offset) / 2,
                    s = function() {
                        var t, e;
                        for (e = [],
                        a = t = 0; 0 <= r ? t < r : r < t; a = 0 <= r ? ++t : --t)
                            e.push(n.readUInt16());
                        return e
                    }(),
                    a = y = 0,
                    v = i.length; y < v; a = ++y)
                        for (g = i[a],
                        e = w = p = d[a]; p <= g ? w <= g : g <= w; e = p <= g ? ++w : --w)
                            0 === u[a] ? o = e + c[a] : 0 !== (o = s[u[a] / 2 + (e - p) - (l - a)] || 0) && (o += c[a]),
                            this.codeMap[e] = 65535 & o
                }
                n.pos = h
            }
            return t.encode = function(t, e) {
                var n, r, i, o, s, a, c, u, h, l, f, p, d, g, m, y, w, v, b, x, S, _, k, A, C, I, P, F, q, j, T, O, B, D, E, R, U, z, M, N, L, H, W, G, V, Y;
                switch (F = new X,
                o = Object.keys(t).sort(function(t, e) {
                    return t - e
                }),
                e) {
                case "macroman":
                    for (d = 0,
                    g = function() {
                        var t, e;
                        for (e = [],
                        p = t = 0; t < 256; p = ++t)
                            e.push(0);
                        return e
                    }(),
                    y = {
                        0: 0
                    },
                    i = {},
                    q = 0,
                    B = o.length; q < B; q++)
                        null == y[W = t[r = o[q]]] && (y[W] = ++d),
                        i[r] = {
                            old: t[r],
                            new: y[t[r]]
                        },
                        g[r] = y[t[r]];
                    return F.writeUInt16(1),
                    F.writeUInt16(0),
                    F.writeUInt32(12),
                    F.writeUInt16(0),
                    F.writeUInt16(262),
                    F.writeUInt16(0),
                    F.write(g),
                    {
                        charMap: i,
                        subtable: F.data,
                        maxGlyphID: d + 1
                    };
                case "unicode":
                    for (I = [],
                    h = [],
                    y = {},
                    n = {},
                    m = c = null,
                    j = w = 0,
                    D = o.length; j < D; j++)
                        null == y[b = t[r = o[j]]] && (y[b] = ++w),
                        n[r] = {
                            old: b,
                            new: y[b]
                        },
                        s = y[b] - r,
                        null != m && s === c || (m && h.push(m),
                        I.push(r),
                        c = s),
                        m = r;
                    for (m && h.push(m),
                    h.push(65535),
                    I.push(65535),
                    A = 2 * (k = I.length),
                    _ = 2 * Math.pow(Math.log(k) / Math.LN2, 2),
                    l = Math.log(_ / 2) / Math.LN2,
                    S = 2 * k - _,
                    a = [],
                    x = [],
                    f = [],
                    p = T = 0,
                    E = I.length; T < E; p = ++T) {
                        if (C = I[p],
                        u = h[p],
                        65535 === C) {
                            a.push(0),
                            x.push(0);
                            break
                        }
                        if (32768 <= C - (P = n[C].new))
                            for (a.push(0),
                            x.push(2 * (f.length + k - p)),
                            r = O = C; C <= u ? O <= u : u <= O; r = C <= u ? ++O : --O)
                                f.push(n[r].new);
                        else
                            a.push(P - C),
                            x.push(0)
                    }
                    for (F.writeUInt16(3),
                    F.writeUInt16(1),
                    F.writeUInt32(12),
                    F.writeUInt16(4),
                    F.writeUInt16(16 + 8 * k + 2 * f.length),
                    F.writeUInt16(0),
                    F.writeUInt16(A),
                    F.writeUInt16(_),
                    F.writeUInt16(l),
                    F.writeUInt16(S),
                    L = 0,
                    R = h.length; L < R; L++)
                        r = h[L],
                        F.writeUInt16(r);
                    for (F.writeUInt16(0),
                    H = 0,
                    U = I.length; H < U; H++)
                        r = I[H],
                        F.writeUInt16(r);
                    for (G = 0,
                    z = a.length; G < z; G++)
                        s = a[G],
                        F.writeUInt16(s);
                    for (V = 0,
                    M = x.length; V < M; V++)
                        v = x[V],
                        F.writeUInt16(v);
                    for (Y = 0,
                    N = f.length; Y < N; Y++)
                        d = f[Y],
                        F.writeUInt16(d);
                    return {
                        charMap: n,
                        subtable: F.data,
                        maxGlyphID: w + 1
                    }
                }
            }
            ,
            t
        }()
          , y = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "cmap",
            e.prototype.parse = function(t) {
                var e, n, r;
                for (t.pos = this.offset,
                this.version = t.readUInt16(),
                n = t.readUInt16(),
                this.tables = [],
                this.unicode = null,
                r = 0; 0 <= n ? r < n : n < r; 0 <= n ? ++r : --r)
                    e = new d(t,this.offset),
                    this.tables.push(e),
                    e.isUnicode && null == this.unicode && (this.unicode = e);
                return !0
            }
            ,
            e.encode = function(t, e) {
                var n, r;
                return null == e && (e = "macroman"),
                n = d.encode(t, e),
                (r = new X).writeUInt16(0),
                r.writeUInt16(1),
                n.table = r.data.concat(n.subtable),
                n
            }
            ,
            e
        }()
          , g = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "hhea",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.ascender = t.readShort(),
                this.decender = t.readShort(),
                this.lineGap = t.readShort(),
                this.advanceWidthMax = t.readShort(),
                this.minLeftSideBearing = t.readShort(),
                this.minRightSideBearing = t.readShort(),
                this.xMaxExtent = t.readShort(),
                this.caretSlopeRise = t.readShort(),
                this.caretSlopeRun = t.readShort(),
                this.caretOffset = t.readShort(),
                t.pos += 8,
                this.metricDataFormat = t.readShort(),
                this.numberOfMetrics = t.readUInt16()
            }
            ,
            e
        }()
          , m = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "OS/2",
            e.prototype.parse = function(n) {
                if (n.pos = this.offset,
                this.version = n.readUInt16(),
                this.averageCharWidth = n.readShort(),
                this.weightClass = n.readUInt16(),
                this.widthClass = n.readUInt16(),
                this.type = n.readShort(),
                this.ySubscriptXSize = n.readShort(),
                this.ySubscriptYSize = n.readShort(),
                this.ySubscriptXOffset = n.readShort(),
                this.ySubscriptYOffset = n.readShort(),
                this.ySuperscriptXSize = n.readShort(),
                this.ySuperscriptYSize = n.readShort(),
                this.ySuperscriptXOffset = n.readShort(),
                this.ySuperscriptYOffset = n.readShort(),
                this.yStrikeoutSize = n.readShort(),
                this.yStrikeoutPosition = n.readShort(),
                this.familyClass = n.readShort(),
                this.panose = function() {
                    var t, e;
                    for (e = [],
                    t = 0; t < 10; ++t)
                        e.push(n.readByte());
                    return e
                }(),
                this.charRange = function() {
                    var t, e;
                    for (e = [],
                    t = 0; t < 4; ++t)
                        e.push(n.readInt());
                    return e
                }(),
                this.vendorID = n.readString(4),
                this.selection = n.readShort(),
                this.firstCharIndex = n.readShort(),
                this.lastCharIndex = n.readShort(),
                0 < this.version && (this.ascent = n.readShort(),
                this.descent = n.readShort(),
                this.lineGap = n.readShort(),
                this.winAscent = n.readShort(),
                this.winDescent = n.readShort(),
                this.codePageRange = function() {
                    var t, e;
                    for (e = [],
                    t = 0; t < 2; ++t)
                        e.push(n.readInt());
                    return e
                }(),
                1 < this.version))
                    return this.xHeight = n.readShort(),
                    this.capHeight = n.readShort(),
                    this.defaultChar = n.readShort(),
                    this.breakChar = n.readShort(),
                    this.maxContext = n.readShort()
            }
            ,
            e
        }()
          , w = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "post",
            e.prototype.parse = function(r) {
                var t, e, n, i;
                switch (r.pos = this.offset,
                this.format = r.readInt(),
                this.italicAngle = r.readInt(),
                this.underlinePosition = r.readShort(),
                this.underlineThickness = r.readShort(),
                this.isFixedPitch = r.readInt(),
                this.minMemType42 = r.readInt(),
                this.maxMemType42 = r.readInt(),
                this.minMemType1 = r.readInt(),
                this.maxMemType1 = r.readInt(),
                this.format) {
                case 65536:
                    break;
                case 131072:
                    for (e = r.readUInt16(),
                    this.glyphNameIndex = [],
                    n = 0; 0 <= e ? n < e : e < n; 0 <= e ? ++n : --n)
                        this.glyphNameIndex.push(r.readUInt16());
                    for (this.names = [],
                    i = []; r.pos < this.offset + this.length; )
                        t = r.readByte(),
                        i.push(this.names.push(r.readString(t)));
                    return i;
                case 151552:
                    return e = r.readUInt16(),
                    this.offsets = r.read(e);
                case 196608:
                    break;
                case 262144:
                    return this.map = function() {
                        var t, e, n;
                        for (n = [],
                        t = 0,
                        e = this.file.maxp.numGlyphs; 0 <= e ? t < e : e < t; 0 <= e ? ++t : --t)
                            n.push(r.readUInt32());
                        return n
                    }
                    .call(this)
                }
            }
            ,
            e
        }()
          , v = function(t, e) {
            this.raw = t,
            this.length = t.length,
            this.platformID = e.platformID,
            this.encodingID = e.encodingID,
            this.languageID = e.languageID
        }
          , b = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "name",
            e.prototype.parse = function(t) {
                var e, n, r, i, o, s, a, c, u, h, l, f;
                for (t.pos = this.offset,
                t.readShort(),
                e = t.readShort(),
                s = t.readShort(),
                n = [],
                i = u = 0; 0 <= e ? u < e : e < u; i = 0 <= e ? ++u : --u)
                    n.push({
                        platformID: t.readShort(),
                        encodingID: t.readShort(),
                        languageID: t.readShort(),
                        nameID: t.readShort(),
                        length: t.readShort(),
                        offset: this.offset + s + t.readShort()
                    });
                for (a = {},
                i = h = 0,
                l = n.length; h < l; i = ++h)
                    r = n[i],
                    t.pos = r.offset,
                    c = t.readString(r.length),
                    o = new v(c,r),
                    null == a[f = r.nameID] && (a[f] = []),
                    a[r.nameID].push(o);
                this.strings = a,
                this.copyright = a[0],
                this.fontFamily = a[1],
                this.fontSubfamily = a[2],
                this.uniqueSubfamily = a[3],
                this.fontName = a[4],
                this.version = a[5];
                try {
                    this.postscriptName = a[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                } catch (t) {
                    this.postscriptName = a[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                }
                return this.trademark = a[7],
                this.manufacturer = a[8],
                this.designer = a[9],
                this.description = a[10],
                this.vendorUrl = a[11],
                this.designerUrl = a[12],
                this.license = a[13],
                this.licenseUrl = a[14],
                this.preferredFamily = a[15],
                this.preferredSubfamily = a[17],
                this.compatibleFull = a[18],
                this.sampleText = a[19]
            }
            ,
            e
        }()
          , x = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "maxp",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.numGlyphs = t.readUInt16(),
                this.maxPoints = t.readUInt16(),
                this.maxContours = t.readUInt16(),
                this.maxCompositePoints = t.readUInt16(),
                this.maxComponentContours = t.readUInt16(),
                this.maxZones = t.readUInt16(),
                this.maxTwilightPoints = t.readUInt16(),
                this.maxStorage = t.readUInt16(),
                this.maxFunctionDefs = t.readUInt16(),
                this.maxInstructionDefs = t.readUInt16(),
                this.maxStackElements = t.readUInt16(),
                this.maxSizeOfInstructions = t.readUInt16(),
                this.maxComponentElements = t.readUInt16(),
                this.maxComponentDepth = t.readUInt16()
            }
            ,
            e
        }()
          , S = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "hmtx",
            e.prototype.parse = function(n) {
                var t, r, i, e, o, s, a;
                for (n.pos = this.offset,
                this.metrics = [],
                e = 0,
                s = this.file.hhea.numberOfMetrics; 0 <= s ? e < s : s < e; 0 <= s ? ++e : --e)
                    this.metrics.push({
                        advance: n.readUInt16(),
                        lsb: n.readInt16()
                    });
                for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
                this.leftSideBearings = function() {
                    var t, e;
                    for (e = [],
                    t = 0; 0 <= r ? t < r : r < t; 0 <= r ? ++t : --t)
                        e.push(n.readInt16());
                    return e
                }(),
                this.widths = function() {
                    var t, e, n, r;
                    for (r = [],
                    t = 0,
                    e = (n = this.metrics).length; t < e; t++)
                        i = n[t],
                        r.push(i.advance);
                    return r
                }
                .call(this),
                t = this.widths[this.widths.length - 1],
                a = [],
                o = 0; 0 <= r ? o < r : r < o; 0 <= r ? ++o : --o)
                    a.push(this.widths.push(t));
                return a
            }
            ,
            e.prototype.forGlyph = function(t) {
                return t in this.metrics ? this.metrics[t] : {
                    advance: this.metrics[this.metrics.length - 1].advance,
                    lsb: this.leftSideBearings[t - this.metrics.length]
                }
            }
            ,
            e
        }()
          , _ = [].slice
          , k = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "glyf",
            e.prototype.parse = function(t) {
                return this.cache = {}
            }
            ,
            e.prototype.glyphFor = function(t) {
                var e, n, r, i, o, s, a, c, u, h;
                return (t = t)in this.cache ? this.cache[t] : (i = this.file.loca,
                e = this.file.contents,
                n = i.indexOf(t),
                0 === (r = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + n,
                o = (s = new X(e.read(r))).readShort(),
                c = s.readShort(),
                h = s.readShort(),
                a = s.readShort(),
                u = s.readShort(),
                this.cache[t] = -1 === o ? new C(s,c,h,a,u) : new A(s,o,c,h,a,u),
                this.cache[t]))
            }
            ,
            e.prototype.encode = function(t, e, n) {
                var r, i, o, s, a;
                for (o = [],
                i = [],
                s = 0,
                a = e.length; s < a; s++)
                    r = t[e[s]],
                    i.push(o.length),
                    r && (o = o.concat(r.encode(n)));
                return i.push(o.length),
                {
                    table: o,
                    offsets: i
                }
            }
            ,
            e
        }()
          , A = function() {
            function t(t, e, n, r, i, o) {
                this.raw = t,
                this.numberOfContours = e,
                this.xMin = n,
                this.yMin = r,
                this.xMax = i,
                this.yMax = o,
                this.compound = !1
            }
            return t.prototype.encode = function() {
                return this.raw.data
            }
            ,
            t
        }()
          , C = function() {
            function t(t, e, n, r, i) {
                var o, s;
                for (this.raw = t,
                this.xMin = e,
                this.yMin = n,
                this.xMax = r,
                this.yMax = i,
                this.compound = !0,
                this.glyphIDs = [],
                this.glyphOffsets = [],
                o = this.raw; s = o.readShort(),
                this.glyphOffsets.push(o.pos),
                this.glyphIDs.push(o.readShort()),
                32 & s; )
                    o.pos += 1 & s ? 4 : 2,
                    128 & s ? o.pos += 8 : 64 & s ? o.pos += 4 : 8 & s && (o.pos += 2)
            }
            return 1,
            8,
            32,
            64,
            128,
            t.prototype.encode = function(t) {
                var e, n, r, i, o;
                for (n = new X(_.call(this.raw.data)),
                e = r = 0,
                i = (o = this.glyphIDs).length; r < i; e = ++r)
                    o[e],
                    n.pos = this.glyphOffsets[e];
                return n.data
            }
            ,
            t
        }()
          , I = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return f(e, u),
            e.prototype.tag = "loca",
            e.prototype.parse = function(r) {
                var t;
                return r.pos = this.offset,
                t = this.file.head.indexToLocFormat,
                this.offsets = 0 === t ? function() {
                    var t, e, n;
                    for (n = [],
                    t = 0,
                    e = this.length; t < e; t += 2)
                        n.push(2 * r.readUInt16());
                    return n
                }
                .call(this) : function() {
                    var t, e, n;
                    for (n = [],
                    t = 0,
                    e = this.length; t < e; t += 4)
                        n.push(r.readUInt32());
                    return n
                }
                .call(this)
            }
            ,
            e.prototype.indexOf = function(t) {
                return this.offsets[t]
            }
            ,
            e.prototype.lengthOf = function(t) {
                return this.offsets[t + 1] - this.offsets[t]
            }
            ,
            e.prototype.encode = function(t, e) {
                for (var n = new Uint32Array(this.offsets.length), r = 0, i = 0, o = 0; o < n.length; ++o)
                    if (n[o] = r,
                    i < e.length && e[i] == o) {
                        ++i,
                        n[o] = r;
                        var s = this.offsets[o]
                          , a = this.offsets[o + 1] - s;
                        0 < a && (r += a)
                    }
                for (var c = new Array(4 * n.length), u = 0; u < n.length; ++u)
                    c[4 * u + 3] = 255 & n[u],
                    c[4 * u + 2] = (65280 & n[u]) >> 8,
                    c[4 * u + 1] = (16711680 & n[u]) >> 16,
                    c[4 * u] = (4278190080 & n[u]) >> 24;
                return c
            }
            ,
            e
        }()
          , P = function() {
            function t(t) {
                this.font = t,
                this.subset = {},
                this.unicodes = {},
                this.next = 33
            }
            return t.prototype.generateCmap = function() {
                var t, e, n, r, i;
                for (e in r = this.font.cmap.tables[0].codeMap,
                t = {},
                i = this.subset)
                    n = i[e],
                    t[e] = r[n];
                return t
            }
            ,
            t.prototype.glyphsFor = function(t) {
                var e, n, r, i, o, s, a;
                for (r = {},
                o = 0,
                s = t.length; o < s; o++)
                    r[i = t[o]] = this.font.glyf.glyphFor(i);
                for (i in e = [],
                r)
                    (null != (n = r[i]) ? n.compound : void 0) && e.push.apply(e, n.glyphIDs);
                if (0 < e.length)
                    for (i in a = this.glyphsFor(e))
                        n = a[i],
                        r[i] = n;
                return r
            }
            ,
            t.prototype.encode = function(t, e) {
                var n, r, i, o, s, a, c, u, h, l, f, p, d, g, m;
                for (r in n = y.encode(this.generateCmap(), "unicode"),
                o = this.glyphsFor(t),
                f = {
                    0: 0
                },
                m = n.charMap)
                    f[(a = m[r]).old] = a.new;
                for (p in l = n.maxGlyphID,
                o)
                    p in f || (f[p] = l++);
                return u = function(t) {
                    var e, n;
                    for (e in n = {},
                    t)
                        n[t[e]] = e;
                    return n
                }(f),
                h = Object.keys(u).sort(function(t, e) {
                    return t - e
                }),
                d = function() {
                    var t, e, n;
                    for (n = [],
                    t = 0,
                    e = h.length; t < e; t++)
                        s = h[t],
                        n.push(u[s]);
                    return n
                }(),
                i = this.font.glyf.encode(o, d, f),
                c = this.font.loca.encode(i.offsets, d),
                g = {
                    cmap: this.font.cmap.raw(),
                    glyf: i.table,
                    loca: c,
                    hmtx: this.font.hmtx.raw(),
                    hhea: this.font.hhea.raw(),
                    maxp: this.font.maxp.raw(),
                    post: this.font.post.raw(),
                    name: this.font.name.raw(),
                    head: this.font.head.encode(e)
                },
                this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()),
                this.font.directory.encode(g)
            }
            ,
            t
        }();
        t.API.PDFObject = function() {
            var o;
            function s() {}
            return o = function(t, e) {
                return (Array(e + 1).join("0") + t).slice(-e)
            }
            ,
            s.convert = function(r) {
                var i, t, e, n;
                if (Array.isArray(r))
                    return "[" + function() {
                        var t, e, n;
                        for (n = [],
                        t = 0,
                        e = r.length; t < e; t++)
                            i = r[t],
                            n.push(s.convert(i));
                        return n
                    }().join(" ") + "]";
                if ("string" == typeof r)
                    return "/" + r;
                if (null != r ? r.isString : void 0)
                    return "(" + r + ")";
                if (r instanceof Date)
                    return "(D:" + o(r.getUTCFullYear(), 4) + o(r.getUTCMonth(), 2) + o(r.getUTCDate(), 2) + o(r.getUTCHours(), 2) + o(r.getUTCMinutes(), 2) + o(r.getUTCSeconds(), 2) + "Z)";
                if ("[object Object]" !== {}.toString.call(r))
                    return "" + r;
                for (t in e = ["<<"],
                r)
                    n = r[t],
                    e.push("/" + t + " " + s.convert(n));
                return e.push(">>"),
                e.join("\n")
            }
            ,
            s
        }()
    }(rt),
    /*
  # PNG.js
  # Copyright (c) 2011 Devon Govett
  # MIT LICENSE
  # 
  # 
  */
    yt = "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")(),
    wt = function() {
        var u, n, r;
        function i(t) {
            var e, n, r, i, o, s, a, c, u, h, l, f, p, d;
            for (this.data = t,
            this.pos = 8,
            this.palette = [],
            this.imgData = [],
            this.transparency = {},
            this.animation = null,
            this.text = {},
            s = null; ; ) {
                switch (e = this.readUInt32(),
                u = function() {
                    var t, e;
                    for (e = [],
                    t = 0; t < 4; ++t)
                        e.push(String.fromCharCode(this.data[this.pos++]));
                    return e
                }
                .call(this).join("")) {
                case "IHDR":
                    this.width = this.readUInt32(),
                    this.height = this.readUInt32(),
                    this.bits = this.data[this.pos++],
                    this.colorType = this.data[this.pos++],
                    this.compressionMethod = this.data[this.pos++],
                    this.filterMethod = this.data[this.pos++],
                    this.interlaceMethod = this.data[this.pos++];
                    break;
                case "acTL":
                    this.animation = {
                        numFrames: this.readUInt32(),
                        numPlays: this.readUInt32() || 1 / 0,
                        frames: []
                    };
                    break;
                case "PLTE":
                    this.palette = this.read(e);
                    break;
                case "fcTL":
                    s && this.animation.frames.push(s),
                    this.pos += 4,
                    s = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32()
                    },
                    o = this.readUInt16(),
                    i = this.readUInt16() || 100,
                    s.delay = 1e3 * o / i,
                    s.disposeOp = this.data[this.pos++],
                    s.blendOp = this.data[this.pos++],
                    s.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    for ("fdAT" === u && (this.pos += 4,
                    e -= 4),
                    t = (null != s ? s.data : void 0) || this.imgData,
                    f = 0; 0 <= e ? f < e : e < f; 0 <= e ? ++f : --f)
                        t.push(this.data[this.pos++]);
                    break;
                case "tRNS":
                    switch (this.transparency = {},
                    this.colorType) {
                    case 3:
                        if (r = this.palette.length / 3,
                        this.transparency.indexed = this.read(e),
                        this.transparency.indexed.length > r)
                            throw new Error("More transparent colors than palette size");
                        if (0 < (h = r - this.transparency.indexed.length))
                            for (p = 0; 0 <= h ? p < h : h < p; 0 <= h ? ++p : --p)
                                this.transparency.indexed.push(255);
                        break;
                    case 0:
                        this.transparency.grayscale = this.read(e)[0];
                        break;
                    case 2:
                        this.transparency.rgb = this.read(e)
                    }
                    break;
                case "tEXt":
                    a = (l = this.read(e)).indexOf(0),
                    c = String.fromCharCode.apply(String, l.slice(0, a)),
                    this.text[c] = String.fromCharCode.apply(String, l.slice(a + 1));
                    break;
                case "IEND":
                    return s && this.animation.frames.push(s),
                    this.colors = function() {
                        switch (this.colorType) {
                        case 0:
                        case 3:
                        case 4:
                            return 1;
                        case 2:
                        case 6:
                            return 3
                        }
                    }
                    .call(this),
                    this.hasAlphaChannel = 4 === (d = this.colorType) || 6 === d,
                    n = this.colors + (this.hasAlphaChannel ? 1 : 0),
                    this.pixelBitlength = this.bits * n,
                    this.colorSpace = function() {
                        switch (this.colors) {
                        case 1:
                            return "DeviceGray";
                        case 3:
                            return "DeviceRGB"
                        }
                    }
                    .call(this),
                    void (this.imgData = new Uint8Array(this.imgData));
                default:
                    this.pos += e
                }
                if (this.pos += 4,
                this.pos > this.data.length)
                    throw new Error("Incomplete or corrupt PNG file")
            }
        }
        i.load = function(t, e, n) {
            var r;
            return "function" == typeof e && (n = e),
            (r = new XMLHttpRequest).open("GET", t, !0),
            r.responseType = "arraybuffer",
            r.onload = function() {
                var t;
                return t = new i(new Uint8Array(r.response || r.mozResponseArrayBuffer)),
                "function" == typeof (null != e ? e.getContext : void 0) && t.render(e),
                "function" == typeof n ? n(t) : void 0
            }
            ,
            r.send(null)
        }
        ,
        i.prototype.read = function(t) {
            var e, n;
            for (n = [],
            e = 0; 0 <= t ? e < t : t < e; 0 <= t ? ++e : --e)
                n.push(this.data[this.pos++]);
            return n
        }
        ,
        i.prototype.readUInt32 = function() {
            return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
        }
        ,
        i.prototype.readUInt16 = function() {
            return this.data[this.pos++] << 8 | this.data[this.pos++]
        }
        ,
        i.prototype.decodePixels = function(j) {
            var T = this.pixelBitlength / 8
              , O = new Uint8Array(this.width * this.height * T)
              , B = 0
              , D = this;
            if (null == j && (j = this.imgData),
            0 === j.length)
                return new Uint8Array(0);
            function t(t, e, n, r) {
                var i, o, s, a, c, u, h, l, f, p, d, g, m, y, w, v, b, x, S, _, k, A = Math.ceil((D.width - t) / n), C = Math.ceil((D.height - e) / r), I = D.width == A && D.height == C;
                for (y = T * A,
                g = I ? O : new Uint8Array(y * C),
                u = j.length,
                o = m = 0; m < C && B < u; ) {
                    switch (j[B++]) {
                    case 0:
                        for (a = b = 0; b < y; a = b += 1)
                            g[o++] = j[B++];
                        break;
                    case 1:
                        for (a = x = 0; x < y; a = x += 1)
                            i = j[B++],
                            c = a < T ? 0 : g[o - T],
                            g[o++] = (i + c) % 256;
                        break;
                    case 2:
                        for (a = S = 0; S < y; a = S += 1)
                            i = j[B++],
                            s = (a - a % T) / T,
                            w = m && g[(m - 1) * y + s * T + a % T],
                            g[o++] = (w + i) % 256;
                        break;
                    case 3:
                        for (a = _ = 0; _ < y; a = _ += 1)
                            i = j[B++],
                            s = (a - a % T) / T,
                            c = a < T ? 0 : g[o - T],
                            w = m && g[(m - 1) * y + s * T + a % T],
                            g[o++] = (i + Math.floor((c + w) / 2)) % 256;
                        break;
                    case 4:
                        for (a = k = 0; k < y; a = k += 1)
                            i = j[B++],
                            s = (a - a % T) / T,
                            c = a < T ? 0 : g[o - T],
                            0 === m ? w = v = 0 : (w = g[(m - 1) * y + s * T + a % T],
                            v = s && g[(m - 1) * y + (s - 1) * T + a % T]),
                            h = c + w - v,
                            l = Math.abs(h - c),
                            p = Math.abs(h - w),
                            d = Math.abs(h - v),
                            f = l <= p && l <= d ? c : p <= d ? w : v,
                            g[o++] = (i + f) % 256;
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + j[B - 1])
                    }
                    if (!I) {
                        var P = ((e + m * r) * D.width + t) * T
                          , F = m * y;
                        for (a = 0; a < A; a += 1) {
                            for (var q = 0; q < T; q += 1)
                                O[P++] = g[F++];
                            P += (n - 1) * T
                        }
                    }
                    m++
                }
            }
            return j = (j = new St(j)).getBytes(),
            1 == D.interlaceMethod ? (t(0, 0, 8, 8),
            t(4, 0, 8, 8),
            t(0, 4, 4, 8),
            t(2, 0, 4, 4),
            t(0, 2, 2, 4),
            t(1, 0, 2, 2),
            t(0, 1, 1, 2)) : t(0, 0, 1, 1),
            O
        }
        ,
        i.prototype.decodePalette = function() {
            var t, e, n, r, i, o, s, a, c;
            for (n = this.palette,
            o = this.transparency.indexed || [],
            i = new Uint8Array((o.length || 0) + n.length),
            r = 0,
            n.length,
            e = s = t = 0,
            a = n.length; s < a; e = s += 3)
                i[r++] = n[e],
                i[r++] = n[e + 1],
                i[r++] = n[e + 2],
                i[r++] = null != (c = o[t++]) ? c : 255;
            return i
        }
        ,
        i.prototype.copyToImageData = function(t, e) {
            var n, r, i, o, s, a, c, u, h, l, f;
            if (r = this.colors,
            h = null,
            n = this.hasAlphaChannel,
            this.palette.length && (h = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(),
            r = 4,
            n = !0),
            u = (i = t.data || t).length,
            s = h || e,
            o = a = 0,
            1 === r)
                for (; o < u; )
                    c = h ? 4 * e[o / 4] : a,
                    l = s[c++],
                    i[o++] = l,
                    i[o++] = l,
                    i[o++] = l,
                    i[o++] = n ? s[c++] : 255,
                    a = c;
            else
                for (; o < u; )
                    c = h ? 4 * e[o / 4] : a,
                    i[o++] = s[c++],
                    i[o++] = s[c++],
                    i[o++] = s[c++],
                    i[o++] = n ? s[c++] : 255,
                    a = c
        }
        ,
        i.prototype.decode = function() {
            var t;
            return t = new Uint8Array(this.width * this.height * 4),
            this.copyToImageData(t, this.decodePixels()),
            t
        }
        ;
        try {
            n = yt.document.createElement("canvas"),
            r = n.getContext("2d")
        } catch (t) {
            return -1
        }
        return u = function(t) {
            var e;
            return r.width = t.width,
            r.height = t.height,
            r.clearRect(0, 0, t.width, t.height),
            r.putImageData(t, 0, 0),
            (e = new Image).src = n.toDataURL(),
            e
        }
        ,
        i.prototype.decodeFrames = function(t) {
            var e, n, r, i, o, s, a, c;
            if (this.animation) {
                for (c = [],
                n = o = 0,
                s = (a = this.animation.frames).length; o < s; n = ++o)
                    e = a[n],
                    r = t.createImageData(e.width, e.height),
                    i = this.decodePixels(new Uint8Array(e.data)),
                    this.copyToImageData(r, i),
                    e.imageData = r,
                    c.push(e.image = u(r));
                return c
            }
        }
        ,
        i.prototype.renderFrame = function(t, e) {
            var n, r, i;
            return n = (r = this.animation.frames)[e],
            i = r[e - 1],
            0 === e && t.clearRect(0, 0, this.width, this.height),
            1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
            0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
            t.drawImage(n.image, n.xOffset, n.yOffset)
        }
        ,
        i.prototype.animate = function(n) {
            var r, i, o, s, a, t, c = this;
            return i = 0,
            t = this.animation,
            s = t.numFrames,
            o = t.frames,
            a = t.numPlays,
            (r = function() {
                var t, e;
                if (t = i++ % s,
                e = o[t],
                c.renderFrame(n, t),
                1 < s && i / s < a)
                    return c.animation._timeout = setTimeout(r, e.delay)
            }
            )()
        }
        ,
        i.prototype.stopAnimation = function() {
            var t;
            return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
        }
        ,
        i.prototype.render = function(t) {
            var e, n;
            return t._png && t._png.stopAnimation(),
            t._png = this,
            t.width = this.width,
            t.height = this.height,
            e = t.getContext("2d"),
            this.animation ? (this.decodeFrames(e),
            this.animate(e)) : (n = e.createImageData(this.width, this.height),
            this.copyToImageData(n, this.decodePixels()),
            e.putImageData(n, 0, 0))
        }
        ,
        i
    }(),
    yt.PNG = wt;
    /*
   * Extracted from pdf.js
   * https://github.com/andreasgal/pdf.js
   *
   * Copyright (c) 2011 Mozilla Foundation
   *
   * Contributors: Andreas Gal <gal@mozilla.com>
   *               Chris G Jones <cjones@mozilla.com>
   *               Shaon Barman <shaon.barman@gmail.com>
   *               Vivien Nicolas <21@vingtetun.org>
   *               Justin D'Arcangelo <justindarc@gmail.com>
   *               Yury Delendik
   *
   * 
   */
    var xt = function() {
        function t() {
            this.pos = 0,
            this.bufferLength = 0,
            this.eof = !1,
            this.buffer = null
        }
        return t.prototype = {
            ensureBuffer: function(t) {
                var e = this.buffer
                  , n = e ? e.byteLength : 0;
                if (t < n)
                    return e;
                for (var r = 512; r < t; )
                    r <<= 1;
                for (var i = new Uint8Array(r), o = 0; o < n; ++o)
                    i[o] = e[o];
                return this.buffer = i
            },
            getByte: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return this.buffer[this.pos++]
            },
            getBytes: function(t) {
                var e = this.pos;
                if (t) {
                    this.ensureBuffer(e + t);
                    for (var n = e + t; !this.eof && this.bufferLength < n; )
                        this.readBlock();
                    var r = this.bufferLength;
                    r < n && (n = r)
                } else {
                    for (; !this.eof; )
                        this.readBlock();
                    n = this.bufferLength
                }
                return this.pos = n,
                this.buffer.subarray(e, n)
            },
            lookChar: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos])
            },
            getChar: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos++])
            },
            makeSubStream: function(t, e, n) {
                for (var r = t + e; this.bufferLength <= r && !this.eof; )
                    this.readBlock();
                return new Stream(this.buffer,t,e,n)
            },
            skip: function(t) {
                t || (t = 1),
                this.pos += t
            },
            reset: function() {
                this.pos = 0
            }
        },
        t
    }()
      , St = function() {
        if ("undefined" != typeof Uint32Array) {
            var F = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
              , q = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258])
              , j = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545])
              , T = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9]
              , O = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
            return (t.prototype = Object.create(xt.prototype)).getBits = function(t) {
                for (var e, n = this.codeSize, r = this.codeBuf, i = this.bytes, o = this.bytesPos; n < t; )
                    void 0 === (e = i[o++]) && B("Bad encoding in flate stream"),
                    r |= e << n,
                    n += 8;
                return e = r & (1 << t) - 1,
                this.codeBuf = r >> t,
                this.codeSize = n -= t,
                this.bytesPos = o,
                e
            }
            ,
            t.prototype.getCode = function(t) {
                for (var e = t[0], n = t[1], r = this.codeSize, i = this.codeBuf, o = this.bytes, s = this.bytesPos; r < n; ) {
                    var a;
                    void 0 === (a = o[s++]) && B("Bad encoding in flate stream"),
                    i |= a << r,
                    r += 8
                }
                var c = e[i & (1 << n) - 1]
                  , u = c >> 16
                  , h = 65535 & c;
                return (0 == r || r < u || 0 == u) && B("Bad encoding in flate stream"),
                this.codeBuf = i >> u,
                this.codeSize = r - u,
                this.bytesPos = s,
                h
            }
            ,
            t.prototype.generateHuffmanTable = function(t) {
                for (var e = t.length, n = 0, r = 0; r < e; ++r)
                    t[r] > n && (n = t[r]);
                for (var i = 1 << n, o = new Uint32Array(i), s = 1, a = 0, c = 2; s <= n; ++s,
                a <<= 1,
                c <<= 1)
                    for (var u = 0; u < e; ++u)
                        if (t[u] == s) {
                            var h = 0
                              , l = a;
                            for (r = 0; r < s; ++r)
                                h = h << 1 | 1 & l,
                                l >>= 1;
                            for (r = h; r < i; r += c)
                                o[r] = s << 16 | u;
                            ++a
                        }
                return [o, n]
            }
            ,
            t.prototype.readBlock = function() {
                function t(t, e, n, r, i) {
                    for (var o = t.getBits(n) + r; 0 < o--; )
                        e[c++] = i
                }
                var e = this.getBits(3);
                if (1 & e && (this.eof = !0),
                0 != (e >>= 1)) {
                    var n, r;
                    if (1 == e)
                        n = T,
                        r = O;
                    else if (2 == e) {
                        for (var i = this.getBits(5) + 257, o = this.getBits(5) + 1, s = this.getBits(4) + 4, a = Array(F.length), c = 0; c < s; )
                            a[F[c++]] = this.getBits(3);
                        for (var u = this.generateHuffmanTable(a), h = 0, l = (c = 0,
                        i + o), f = new Array(l); c < l; ) {
                            var p = this.getCode(u);
                            16 == p ? t(this, f, 2, 3, h) : 17 == p ? t(this, f, 3, 3, h = 0) : 18 == p ? t(this, f, 7, 11, h = 0) : f[c++] = h = p
                        }
                        n = this.generateHuffmanTable(f.slice(0, i)),
                        r = this.generateHuffmanTable(f.slice(i, l))
                    } else
                        B("Unknown block type in flate stream");
                    for (var d = (C = this.buffer) ? C.length : 0, g = this.bufferLength; ; ) {
                        var m = this.getCode(n);
                        if (m < 256)
                            d <= g + 1 && (d = (C = this.ensureBuffer(g + 1)).length),
                            C[g++] = m;
                        else {
                            if (256 == m)
                                return void (this.bufferLength = g);
                            var y = (m = q[m -= 257]) >> 16;
                            0 < y && (y = this.getBits(y));
                            h = (65535 & m) + y;
                            m = this.getCode(r),
                            0 < (y = (m = j[m]) >> 16) && (y = this.getBits(y));
                            var w = (65535 & m) + y;
                            d <= g + h && (d = (C = this.ensureBuffer(g + h)).length);
                            for (var v = 0; v < h; ++v,
                            ++g)
                                C[g] = C[g - w]
                        }
                    }
                } else {
                    var b, x = this.bytes, S = this.bytesPos;
                    void 0 === (b = x[S++]) && B("Bad block header in flate stream");
                    var _ = b;
                    void 0 === (b = x[S++]) && B("Bad block header in flate stream"),
                    _ |= b << 8,
                    void 0 === (b = x[S++]) && B("Bad block header in flate stream");
                    var k = b;
                    void 0 === (b = x[S++]) && B("Bad block header in flate stream"),
                    (k |= b << 8) != (65535 & ~_) && B("Bad uncompressed block length in flate stream"),
                    this.codeBuf = 0,
                    this.codeSize = 0;
                    var A = this.bufferLength
                      , C = this.ensureBuffer(A + _)
                      , I = A + _;
                    this.bufferLength = I;
                    for (var P = A; P < I; ++P) {
                        if (void 0 === (b = x[S++])) {
                            this.eof = !0;
                            break
                        }
                        C[P] = b
                    }
                    this.bytesPos = S
                }
            }
            ,
            t
        }
        function B(t) {
            throw new Error(t)
        }
        function t(t) {
            var e = 0
              , n = t[e++]
              , r = t[e++];
            -1 != n && -1 != r || B("Invalid header in flate stream"),
            8 != (15 & n) && B("Unknown compression method in flate stream"),
            ((n << 8) + r) % 31 != 0 && B("Bad FCHECK in flate stream"),
            32 & r && B("FDICT bit set in flate stream"),
            this.bytes = t,
            this.bytesPos = 2,
            this.codeSize = 0,
            this.codeBuf = 0,
            xt.call(this)
        }
    }();
    e.default = rt;
    var _t = e.default;
    e.rewire = function(t) {
        e.default = t
    }
    ,
    e.restore = function() {
        e.default = _t
    }
    ,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
