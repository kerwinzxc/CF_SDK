(function () {
    var h              = {}, mt = {}, c = {
        id   : "4a7fe2142ed5cdd4a37d7bce084f0ab5",
        dm   : ["zhushou.haimawan.com"],
        js   : "tongji.baidu.com/hm-web/js/",
        etrk : [],
        icon : '',
        ctrk : false,
        align: - 1,
        nv   : - 1,
        vdur : 1800000,
        age  : 31536000000,
        rec  : 0,
        rp   : [],
        trust: 0,
        vcard: 0,
        qiao : 0,
        lxb  : 0,
        conv : 0,
        med  : 0,
        cvcc : '',
        cvcf : [],
        apps : ''
    };
    var q              = void 0, r = ! 0, s = null, v = ! 1;
    mt.i               = {};
    mt.i.Aa            = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.i.ya            = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || + RegExp.$1 : q;
    mt.i.cookieEnabled = navigator.cookieEnabled;
    mt.i.javaEnabled   = navigator.javaEnabled();
    mt.i.language      = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.i.Ca            = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.i.colorDepth    = window.screen.colorDepth || 0;
    mt.cookie          = {};
    mt.cookie.set      = function (a, d, f) {
        var e;
        f.G && (e = new Date, e.setTime(e.getTime() + f.G));
        document.cookie = a + "=" + d + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (f.$a ? "; secure" : "")
    };
    mt.cookie.get      = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : s
    };
    mt.p               = {};
    mt.p.ma            = function (a) {
        return document.getElementById(a)
    };
    mt.p.Ta            = function (a, d) {
        for (d = d.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == d)return a;
        return s
    };
    (mt.p.X = function () {
        function a() {
            if (! a.z) {
                a.z = r;
                for (var d = 0, f = e.length; d < f; d ++)e[d]()
            }
        }

        function d() {
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(d, 1);
                return
            }
            a()
        }

        var f = v, e = [], k;
        document.addEventListener ? k = function () {
            document.removeEventListener("DOMContentLoaded", k, v);
            a()
        } : document.attachEvent && (k = function () {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", k), a())
            });
        (function () {
            if (! f)if (f = r, "complete" === document.readyState) a.z = r; else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                k, v), window.addEventListener("load", a, v); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", k);
                window.attachEvent("onload", a);
                var e = v;
                try {
                    e = window.frameElement == s
                } catch (n) {
                }
                document.documentElement.doScroll && e && d()
            }
        })();
        return function (d) {
            a.z ? d() : e.push(d)
        }
    }()).z             = v;
    mt.event                 = {};
    mt.event.c               = function (a, d, f) {
        a.attachEvent ? a.attachEvent("on" + d, function (d) {
            f.call(a, d)
        }) : a.addEventListener && a.addEventListener(d, f, v)
    };
    mt.event.preventDefault  = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = v
    };
    mt.j                     = {};
    mt.j.parse               = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.j.stringify           = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = f[a];
                if (d)return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function d(a) {
            return 10 > a ? "0" + a : a
        }

        var f = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return a(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === s)return "null";
                    if (e instanceof Array) {
                        var f = ["["], m = e.length, n, p, g;
                        for (p = 0; p < m; p ++)switch (g = e[p], typeof g) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                n && f.push(","), f.push(mt.j.stringify(g)), n = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (e instanceof Date)return '"' + e.getFullYear() + "-" + d(e.getMonth() + 1) + "-" + d(e.getDate()) + "T" + d(e.getHours()) + ":" + d(e.getMinutes()) + ":" + d(e.getSeconds()) + '"';
                    n = ["{"];
                    p = mt.j.stringify;
                    for (m in e)if (Object.prototype.hasOwnProperty.call(e, m))switch (g =
                        e[m], typeof g) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && n.push(","), f = 1, n.push(p(m) + ":" + p(g))
                    }
                    n.push("}");
                    return n.join("")
            }
        }
    }();
    mt.lang                  = {};
    mt.lang.d                = function (a, d) {
        return "[object " + d + "]" === {}.toString.call(a)
    };
    mt.lang.Xa               = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.Za               = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.localStorage          = {};
    mt.localStorage.B        = function () {
        if (! mt.localStorage.g)try {
            mt.localStorage.g = document.createElement("input"), mt.localStorage.g.type = "hidden", mt.localStorage.g.style.display = "none", mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
        } catch (a) {
            return v
        }
        return r
    };
    mt.localStorage.set      = function (a, d, f) {
        var e = new Date;
        e.setTime(e.getTime() + f || 31536E6);
        try {
            window.localStorage ? (d = e.getTime() + "|" + d, window.localStorage.setItem(a, d)) : mt.localStorage.B() && (mt.localStorage.g.expires = e.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, d), mt.localStorage.g.save(document.location.hostname))
        } catch (k) {
        }
    };
    mt.localStorage.get      = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var d = a.indexOf("|"), f = a.substring(0, d) - 0;
                if (f && f > (new Date).getTime())return a.substring(d + 1)
            }
        } else if (mt.localStorage.B())try {
            return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(a)
        } catch (e) {
        }
        return s
    };
    mt.localStorage.remove   = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.B())try {
            mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(a), mt.localStorage.g.save(document.location.hostname)
        } catch (d) {
        }
    };
    mt.sessionStorage        = {};
    mt.sessionStorage.set    = function (a, d) {
        if (window.sessionStorage)try {
            window.sessionStorage.setItem(a, d)
        } catch (f) {
        }
    };
    mt.sessionStorage.get    = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : s
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.Y                     = {};
    mt.Y.log                 = function (a, d) {
        var f     = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = f;
        f.onload  = f.onerror = f.onabort = function () {
            f.onload = f.onerror = f.onabort = s;
            f = window[e] = s;
            d && d(a)
        };
        f.src = a
    };
    mt.O                     = {};
    mt.O.ra                  = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var d = navigator.plugins["Shockwave Flash"];
            d && d.description && (a = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)try {
            if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = d.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (f) {
        }
        return a
    };
    mt.O.Sa                  = function (a, d, f, e, k) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + e + '"><param name="movie" value="' + d + '" /><param name="flashvars" value="' + (k || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + e + '" src="' + d + '" flashvars="' + (k || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url                   = {};
    mt.url.f                 = function (a, d) {
        var f = a.match(RegExp("(^|&|\\?|#)(" + d + ")=([^&#]*)(&|$|#)", ""));
        return f ? f[3] : s
    };
    mt.url.Va                = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : s
    };
    mt.url.oa                = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : s
    };
    mt.url.S                 = function (a) {
        return (a = mt.url.oa(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ua                = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : s
    };
    (function () {
        function a() {
            for (var a = v, f = document.getElementsByTagName("script"), e = f.length, e = 100 < e ? 100 : e, k = 0; k < e; k ++) {
                var m = f[k].src;
                if (m && 0 === m.indexOf("https://hm.baidu.com/h")) {
                    a = r;
                    break
                }
            }
            return a
        }

        return h.la = a
    })();
    var A = h.la;
    h.C   = {
        Wa      : "http://tongji.baidu.com/hm-web/welcome/ico",
        W       : "hm.baidu.com/hm.gif",
        ba      : "baidu.com",
        va      : "hmmd",
        wa      : "hmpl",
        La      : "utm_medium",
        ua      : "hmkw",
        Na      : "utm_term",
        sa      : "hmci",
        Ka      : "utm_content",
        xa      : "hmsr",
        Ma      : "utm_source",
        ta      : "hmcu",
        Ja      : "utm_campaign",
        o       : 0,
        k       : Math.round(+ new Date / 1E3),
        Q       : Math.round(+ new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        K       : A() || "https:" === document.location.protocol ? "https:" : "http:",
        Ya      : 0,
        Pa      : 6E5,
        Qa      : 10,
        Ra      : 1024,
        Oa      : 1,
        L       : 2147483647,
        Z       : "bs cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")
    };
    (function () {
        var a = {
            m   : {}, c: function (a, f) {
                this.m[a] = this.m[a] || [];
                this.m[a].push(f)
            }, s: function (a, f) {
                this.m[a] = this.m[a] || [];
                for (var e = this.m[a].length, k = 0; k < e; k ++)this.m[a][k](f)
            }
        };
        return h.F = a
    })();
    (function () {
        function a(a, e) {
            var k     = document.createElement("script");
            k.charset = "utf-8";
            d.d(e, "Function") && (k.readyState ? k.onreadystatechange = function () {
                if ("loaded" === k.readyState || "complete" === k.readyState) k.onreadystatechange = s, e()
            } : k.onload = function () {
                e()
            });
            k.src = a;
            var m = document.getElementsByTagName("script")[0];
            m.parentNode.insertBefore(k, m)
        }

        var d = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            function a(d) {
                function f() {
                }

                for (var b = r, e = 0, t = 0, l = s, u = s, x = d.length, y = 0, z = s, e = 0; e < x; e ++)if (l = d[e], l.chromeVer === n) {
                    b = r;
                    u = l.tests;
                    y = u.length;
                    for (t = 0; t < y; t ++)if (f = k[u[t].name], f() !== u[t].expect) {
                        b = v;
                        break
                    }
                    if (y && b) {
                        z = {name: "360browser", type: l.type, version: l.ver};
                        break
                    }
                }
                return z
            }

            var d = [];
            d.push({ver: "8.3", type: "fast", tests: [{name: "seamlessiframe", expect: 1}], chromeVer: "42"});
            var k = {
                pointerevents     : function () {
                    return "maxTouchPoints" in window.navigator ? 1 : "msMaxTouchPoints" in window.navigator ||
                    "mozMaxTouchPoints" in window.navigator || "webkitMaxTouchPoints" in window.navigator ? 9 : 0
                }, webgl3D        : function () {
                    for (var a = "webgl ms-webgl experimental-webgl moz-webgl opera-3d webkit-3d ms-3d 3d".split(" "), d = a.length, b = "", f = document.createElement("canvas"), e = v, l = 0; l < d; l ++)try {
                        if (f.getContext(a[l])) {
                            e = r;
                            b = a[l];
                            break
                        }
                    } catch (u) {
                    }
                    return e ? "webgl" === b ? 1 : 9 : 0
                }, seamlessiframe : function () {
                    return "seamless" in document.createElement("iframe") ? 1 : 0
                }, speechsynthesis: function () {
                    return "speechSynthesis" in window ? 1 : "webkitSpeechSynthesis" in
                    window || "mozSpeechSynthesis" in window || "oSpeechSynthesis" in window || "msSpeechSynthesis" in window ? 9 : 0
                }
            }, m  = s, n = function () {
                var a = navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/i);
                return a ? a[1] : "-1"
            }();
            "-1" !== n && (m = a(d));
            return m
        }

        var d = function () {
            var d = navigator.userAgent.toLowerCase();
            if (0 <= d.indexOf("chrome")) {
                var d = (d = d.match(/chrome\/(\d+)/)) ? d[1] : - 1, e = window.document,
                    k = "track" in e.createElement("track"),
                    e = "scoped" in e.createElement("style"),
                    m = "v8Locale" in window,
                    n = document.createElement("canvas"),
                    p                                                  = "seamless" in document.createElement("iframe"),
                    g                                                  = v;
                try {
                    n.getContext("webgl") && (g = r)
                } catch (b) {
                }
                if (n = a())return "fast" === n.type ? 7 : 1;
                if (! g && "31" === d)return 1;
                if (! (p = (p || ! g) && "38" === d))if (p = k)if (p = ! e)if (p = ! m) {
                    var w;
                    a:{
                        p = window.navigator.mimeTypes;
                        for (w in p)if ("application/vnd.chromium.remoting-viewer" === p[w].type) {
                            w = r;
                            break a
                        }
                        w = v
                    }
                    p = ! w && 46 > + d
                }
                if (p)return 7;
                if (k && e && m)return 1
            }
            return - 1
        }();
        return h.da = d
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.D.pa() + "," + h.D.na();
                h.b.h()
            }
        }

        function d() {
            clearTimeout(z);
            var a;
            x && (a = "visible" == document[x]);
            y && (a = ! document[y]);
            p = "undefined" == typeof a ? r : a;
            if ((! n || ! g) && p && b) u = r, t = + new Date; else if (n && g && (! p || ! b)) u = v, l += + new Date - t;
            n = p;
            g = b;
            z = setTimeout(d, 100)
        }

        function f(b) {
            var a = document, l = "";
            if (b in a) l = b; else for (var d = ["webkit", "ms", "moz", "o"], e = 0; e < d.length; e ++) {
                var u = d[e] + b.charAt(0).toUpperCase() + b.slice(1);
                if (u in a) {
                    l =
                        u;
                    break
                }
            }
            return l
        }

        function e(a) {
            if (! ("focus" == a.type || "blur" == a.type) || ! (a.target && a.target != window)) b = "focus" == a.type || "focusin" == a.type ? r : v, d()
        }

        var k = mt.event, m = h.F, n = r, p = r, g = r, b = r, w = + new Date, t = w, l = 0, u = r,
            x = f("visibilityState"), y = f("hidden"), z;
        d();
        (function () {
            var b = x.replace(/[vV]isibilityState/, "visibilitychange");
            k.c(document, b, d);
            k.c(window, "pageshow", d);
            k.c(window, "pagehide", d);
            "object" == typeof document.onfocusin ? (k.c(document, "focusin", e), k.c(document, "focusout", e)) : (k.c(window, "focus", e),
                k.c(window, "blur", e))
        })();
        h.D = {
            pa   : function () {
                return + new Date - w
            }, na: function () {
                return u ? + new Date - t + l : l
            }
        };
        m.c("pv-b", function () {
            k.c(window, "unload", a())
        });
        return h.D
    })();
    (function () {
        var a = mt.lang, d = h.C, f = h.load, e = {
            za   : function (e) {
                if ((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var m = h.b.H();
                    f([d.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(m)].join(""), e)
                }
            }, Ia: function (d) {
                if (a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
            }
        };
        return h.fa = e
    })();
    (function () {
        function a(b, a, d, l) {
            if (! (b === q || a === q || l === q)) {
                if ("" === b)return [a, d, l].join("*");
                b = String(b).split("!");
                for (var e, f = v, y = 0; y < b.length; y ++)if (e = b[y].split("*"), String(a) === e[0]) {
                    e[1] = d;
                    e[2] = l;
                    b[y] = e.join("*");
                    f    = r;
                    break
                }
                f || b.push([a, d, l].join("*"));
                return b.join("!")
            }
        }

        function d(b) {
            for (var a in b)if ({}.hasOwnProperty.call(b, a)) {
                var f = b[a];
                e.d(f, "Object") || e.d(f, "Array") ? d(f) : b[a] = String(f)
            }
        }

        function f(b) {
            return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
        }

        var e              =
                mt.lang, k = mt.j, m = h.C, n = h.F, p = h.fa, g = {
            r                      : [], A: 0, U: v, l: {P: "", page: ""}, init: function () {
                g.e = 0;
                n.c("pv-b", function () {
                    g.ga();
                    g.ia()
                });
                n.c("pv-d", function () {
                    g.ka();
                    g.l.page = ""
                });
                n.c("stag-b", function () {
                    h.b.a.api = g.e || g.A ? g.e + "_" + g.A : "";
                    h.b.a.ct  = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), g.l.P, g.l.page].join("!")
                });
                n.c("stag-d", function () {
                    h.b.a.api = 0;
                    g.e       = 0;
                    g.A       = 0
                })
            }, ga                  : function () {
                var b = window._hmt || [];
                if (! b || e.d(b, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var b = window._hmt, a = 0; a < arguments.length; a ++) {
                            var l =
                                    arguments[a];
                            e.d(l, "Array") && (b.cmd[b.id].push(l), "_setAccount" === l[0] && (1 < l.length && /^[0-9a-f]{32}$/.test(l[1])) && (l = l[1], b.id = l, b.cmd[l] = b.cmd[l] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
            }, ia                  : function () {
                var b = window._hmt;
                if (b && b.cmd && b.cmd[c.id])for (var a = b.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, l = 0, e = a.length; l < e; l ++) {
                    var f = a[l];
                    d.test(f[0]) ? g.r.push(f) : g.M(f)
                }
                b.cmd[c.id] = {push: g.M}
            }, ka                  : function () {
                if (0 < g.r.length)for (var b = 0, a = g.r.length; b < a; b ++)g.M(g.r[b]);
                g.r = s
            }, M                   : function (b) {
                var a = b[0];
                if (g.hasOwnProperty(a) && e.d(g[a], "Function")) g[a](b)
            }, _setAccount         : function (b) {
                1 < b.length && /^[0-9a-f]{32}$/.test(b[1]) && (g.e |= 1)
            }, _setAutoPageview    : function (b) {
                if (1 < b.length && (b = b[1], v === b || r === b)) g.e |= 2, h.b.T = b
            }, _trackPageview      : function (b) {
                if (1 < b.length && b[1].charAt && "/" === b[1].charAt(0)) {
                    g.e |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.I ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.I = r;
                    var a   = h.b.a.u, d = h.b.a.su;
                    h.b.a.u = m.protocol + "//" + document.location.host + b[1];
                    g.U || (h.b.a.su = document.location.href);
                    h.b.h();
                    h.b.a.u  = a;
                    h.b.a.su = d
                }
            }, _trackEvent         : function (b) {
                2 < b.length && (g.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = f(b[1]) + "*" + f(b[2]) + (b[3] ? "*" + f(b[3]) : "") + (b[4] ? "*" + f(b[4]) : ""), h.b.h())
            }, _setCustomVar       : function (b) {
                if (! (4 > b.length)) {
                    var a = b[1], d = b[4] || 3;
                    if (0 < a && 6 > a && 0 < d && 4 > d) {
                        g.A ++;
                        for (var l = (h.b.a.cv || "*").split("!"), e = l.length; e < a - 1; e ++)l.push("*");
                        l[a - 1] = d + "*" + f(b[2]) + "*" + f(b[3]);
                        h.b.a.cv = l.join("!");
                        b        = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== b ? h.b.setData("Hm_cv_" +
                            c.id, encodeURIComponent(b), c.age) : h.b.Ba("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag         : function (b) {
                if (! (3 > b.length)) {
                    var d = f(b[1]);
                    b     = f(b[2]);
                    if (d !== q && b !== q) {
                        var e = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), e = a(e, d, 1, b);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(e), c.age)
                    }
                }
            }, _setVisitTag        : function (b) {
                if (! (3 > b.length)) {
                    var d = f(b[1]);
                    b     = f(b[2]);
                    if (d !== q && b !== q) {
                        var e = g.l.P, e = a(e, d, 2, b);
                        g.l.P = e
                    }
                }
            }, _setPageTag         : function (b) {
                if (! (3 > b.length)) {
                    var d = f(b[1]);
                    b     = f(b[2]);
                    if (d !== q && b !== q) {
                        var e    = g.l.page, e = a(e, d, 3, b);
                        g.l.page = e
                    }
                }
            }, _setReferrerOverride: function (b) {
                1 < b.length && (h.b.a.su = b[1].charAt && "/" === b[1].charAt(0) ? m.protocol + "//" + window.location.host + b[1] : b[1], g.U = r)
            }, _trackOrder         : function (b) {
                b = b[1];
                e.d(b, "Object") && (d(b), g.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = k.stringify(b), h.b.h())
            }, _trackMobConv       : function (b) {
                if (b = {
                        webim   : 1,
                        tel     : 2,
                        map     : 3,
                        sms     : 4,
                        callback: 5,
                        share   : 6
                    }[b[1]]) g.e |= 32, h.b.a.et = 93, h.b.a.ep = b, h.b.h()
            }, _trackRTPageview    : function (b) {
                b = b[1];
                e.d(b, "Object") && (d(b), b = k.stringify(b), 512 >= encodeURIComponent(b).length &&
                (g.e |= 64, h.b.a.rt = b))
            }, _trackRTEvent       : function (b) {
                b = b[1];
                if (e.d(b, "Object")) {
                    d(b);
                    b     = encodeURIComponent(k.stringify(b));
                    var a = function (b) {
                        var a    = h.b.a.rt;
                        g.e |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = b;
                        h.b.h();
                        h.b.a.rt = a
                    }, f  = b.length;
                    if (900 >= f) a.call(this, b); else for (var f = Math.ceil(f / 900), l = "block|" + Math.round(Math.random() * m.L).toString(16) + "|" + f + "|", u = [], x = 0; x < f; x ++)u.push(x), u.push(b.substring(900 * x, 900 * x + 900)), a.call(this, l + u.join("|")), u = []
                }
            }, _setUserId          : function (b) {
                b = b[1];
                p.za();
                p.Ia(b)
            }
        };
        g.init();
        h.ca = g;
        return h.ca
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = r, this.a = {}, this.T = r, this.I = v, this.init())
        }

        var d = mt.url, f = mt.Y, e = mt.O, k = mt.lang, m = mt.cookie, n = mt.i, p = mt.localStorage,
            g = mt.sessionStorage, b = h.C, w = h.da, t = h.F;
        a.prototype = {
            J         : function (b, a) {
                b     = "." + b.replace(/:\d+/, "");
                a     = "." + a.replace(/:\d+/, "");
                var d = b.indexOf(a);
                return - 1 < d && d + a.length === b.length
            }, V      : function (b, a) {
                b = b.replace(/^https?:\/\//, "");
                return 0 === b.indexOf(a)
            }, w      : function (b) {
                for (var a = 0; a < c.dm.length; a ++)if (- 1 <
                    c.dm[a].indexOf("/")) {
                    if (this.V(b, c.dm[a]))return r
                } else {
                    var e = d.S(b);
                    if (e && this.J(e, c.dm[a]))return r
                }
                return v
            }, H      : function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b ++)if (this.J(a, c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, R      : function () {
                for (var b = 0, a = c.dm.length; b < a; b ++) {
                    var d = c.dm[b];
                    if (- 1 < d.indexOf("/") && this.V(document.location.href, d))return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, qa     : function () {
                if (! document.referrer)return b.k - b.o > c.vdur ? 1 : 4;
                var a =
                        v;
                this.w(document.referrer) && this.w(document.location.href) ? a = r : (a = d.S(document.referrer), a = this.J(a || "", document.location.hostname));
                return a ? b.k - b.o > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return m.get(a) || g.get(a) || p.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    m.set(a, b, {domain: this.H(), path: this.R(), G: d}), d ? p.set(a, b, d) : g.set(a, b)
                } catch (e) {
                }
            }, Ba     : function (a) {
                try {
                    m.set(a, "", {domain: this.H(), path: this.R(), G: - 1}), g.remove(a), p.remove(a)
                } catch (b) {
                }
            }, Ga     : function () {
                var a, d, e, f, g;
                b.o = this.getData("Hm_lpvt_" +
                        c.id) || 0;
                13 === b.o.length && (b.o = Math.round(b.o / 1E3));
                d = this.qa();
                a = 4 !== d ? 1 : 0;
                if (e = this.getData("Hm_lvt_" + c.id)) {
                    f = e.split(",");
                    for (g = f.length - 1; 0 <= g; g --)13 === f[g].length && (f[g] = "" + Math.round(f[g] / 1E3));
                    for (; 2592E3 < b.k - f[0];)f.shift();
                    g = 4 > f.length ? 2 : 3;
                    for (1 === a && f.push(b.k); 4 < f.length;)f.shift();
                    e = f.join(",");
                    f = f[f.length - 1]
                } else e = b.k, f = "", g = 1;
                this.setData("Hm_lvt_" + c.id, e, c.age);
                this.setData("Hm_lpvt_" + c.id, b.k);
                e = b.k === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.w(document.location.href) &&
                    ("" === document.referrer || this.w(document.referrer))) a = 0, d = 4;
                this.a.nv = a;
                this.a.st = d;
                this.a.cc = e;
                this.a.lt = f;
                this.a.lv = g
            }, Fa     : function () {
                for (var a = [], d = this.a.et, e = 0, f = b.Z.length; e < f; e ++) {
                    var g = b.Z[e], k = this.a[g];
                    "undefined" !== typeof k && "" !== k && ("tt" !== g || "tt" === g && 0 === d) && ("ct" !== g || "ct" === g && 0 === d) && a.push(g + "=" + encodeURIComponent(k))
                }
                switch (d) {
                    case 0:
                        a.push("sn=" + b.Q);
                        this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
                        break;
                    case 3:
                        a.push("sn=" + b.Q);
                        break;
                    case 90:
                        this.a.rt && a.push("rt=" + this.a.rt)
                }
                return a.join("&")
            },
            Ha        : function () {
                this.Ga();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = n.Ca;
                this.a.cl = n.colorDepth + "-bit";
                this.a.ln = String(n.language).toLowerCase();
                this.a.ja = n.javaEnabled ? 1 : 0;
                this.a.ck = n.cookieEnabled ? 1 : 0;
                this.a.bs = w;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = e.ra();
                this.a.v  = "1.2.14";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                var a     = document.location.href;
                this.a.cm = d.f(a, b.va) || "";
                this.a.cp = d.f(a, b.wa) || d.f(a, b.La) || "";
                this.a.cw = d.f(a,
                        b.ua) || d.f(a, b.Na) || "";
                this.a.ci = d.f(a, b.sa) || d.f(a, b.Ka) || "";
                this.a.cf = d.f(a, b.xa) || d.f(a, b.Ma) || "";
                this.a.cu = d.f(a, b.ta) || d.f(a, b.Ja) || ""
            }, init   : function () {
                try {
                    this.Ha(), 0 === this.a.nv ? this.Ea() : this.N(".*"), h.b = this, this.ea(), t.s("pv-b"), this.Da()
                } catch (a) {
                    var d = [];
                    d.push("si=" + c.id);
                    d.push("n=" + encodeURIComponent(a.name));
                    d.push("m=" + encodeURIComponent(a.message));
                    d.push("r=" + encodeURIComponent(document.referrer));
                    f.log(b.K + "//" + b.W + "?" + d.join("&"))
                }
            }, Da     : function () {
                function a() {
                    t.s("pv-d")
                }

                this.T ?
                    (this.I = r, this.a.et = 0, this.a.ep = "", this.h(a)) : a()
            }, h      : function (a) {
                var d   = this;
                d.a.rnd = Math.round(Math.random() * b.L);
                t.s("stag-b");
                var e = b.K + "//" + b.W + "?" + d.Fa();
                t.s("stag-d");
                d.aa(e);
                f.log(e, function (b) {
                    d.N(b);
                    k.d(a, "Function") && a.call(d)
                })
            }, ea     : function () {
                var a = document.location.hash.substring(1), e = RegExp(c.id),
                    f = - 1 < document.referrer.indexOf(b.ba), g = d.f(a, "jn"), k = /^heatlink$|^select$/.test(g);
                a && (e.test(a) && f && k) && (this.a.rnd = Math.round(Math.random() * b.L), a = document.createElement("script"), a.setAttribute("type",
                    "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", b.protocol + "//" + c.js + g + ".js?" + this.a.rnd), g = document.getElementsByTagName("script")[0], g.parentNode.insertBefore(a, g))
            }, aa     : function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "",
                    d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
                    b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                g.set("Hm_unsent_" + c.id, b)
            }, N      : function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")),
                    a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? g.set("Hm_unsent_" + c.id, b) : g.remove("Hm_unsent_" + c.id))
            }, Ea     : function () {
                var a = this, d = g.get("Hm_unsent_" + c.id);
                if (d)for (var d = d.split(","), e = function (d) {
                    f.log(b.K + "//" + decodeURIComponent(d), function (b) {
                        a.N(b)
                    })
                }, k             = 0, m = d.length; k < m; k ++)e(d[k])
            }
        };
        return new a
    })();
    (function () {
        var a = mt.p, d = mt.event, f = mt.url, e = mt.j;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var k = + new Date, m = function (a) {
                    var d = performance.timing, e = d[a + "Start"] ? d[a + "Start"] : 0;
                    a     = d[a + "End"] ? d[a + "End"] : 0;
                    return {start: e, end: a, value: 0 < a - e ? a - e : 0}
                }, n  = s;
                a.X(function () {
                    n = + new Date
                });
                var p = function () {
                    var a, d, g;
                    g     = m("navigation");
                    d     = m("request");
                    g     = {
                        netAll   : d.start - g.start,
                        netDns   : m("domainLookup").value,
                        netTcp   : m("connect").value,
                        srv      : m("response").start - d.start,
                        dom      : performance.timing.domInteractive -
                        performance.timing.fetchStart,
                        loadEvent: m("loadEvent").end - g.start
                    };
                    a     = document.referrer;
                    var l = a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [], p = s;
                    d     = s;
                    if ("www.baidu.com" === l[2] || "m.baidu.com" === l[2]) p = f.f(a, "qid"), d = f.f(a, "click_t");
                    a     = p;
                    g.qid = a != s ? a : "";
                    d != s ? (g.bdDom = n ? n - d : 0, g.bdRun = k - d, g.bdDef = m("navigation").start - d) : (g.bdDom = 0, g.bdRun = 0, g.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = e.stringify(g);
                    h.b.h()
                };
                d.c(window, "load", function () {
                    setTimeout(p, 500)
                })
            }
        } catch (g) {
        }
    })();
    (function () {
        var a = mt.i, d = mt.lang, f = mt.event, e = mt.j;
        if ("undefined" !== typeof h.b && (c.med || (! a.Aa || 7 < a.ya) && c.cvcc)) {
            var k, m, n, p, g = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b --;)d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, b              = function (a, b) {
                for (var d in a)if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === v)return v
            }, w              = function (a, b) {
                var f = {};
                f.n   = k;
                f.t   = "clk";
                f.v   = a;
                if (b) {
                    var g = b.getAttribute("href"), l = b.getAttribute("onclick") ? "" + b.getAttribute("onclick") : s,
                        m = b.getAttribute("id") || "";
                    n.test(g) ? (f.sn = "mediate",
                        f.snv = g) : d.d(l, "String") && n.test(l) && (f.sn = "wrap", f.snv = l);
                    f.id = m
                }
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(f);
                h.b.h();
                for (f = + new Date; 400 >= + new Date - f;);
            };
            if (c.med) m = "/zoosnet", k = "swt", n = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
                click: function () {
                    for (var a = [], b = g(document.getElementsByTagName("a")), b = [].concat.apply(b, g(document.getElementsByTagName("area"))), b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f = 0, k = b.length; f < k; f ++)d = b[f], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (n.test(e) || n.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                m     = "/other-comm";
                k     = "other";
                n     = c.cvcc.q || q;
                var t = c.cvcc.id || q;
                p     = {
                    click: function () {
                        for (var a = [], b = g(document.getElementsByTagName("a")), b = [].concat.apply(b, g(document.getElementsByTagName("area"))), b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f, k = 0, l = b.length; k < l; k ++)d = b[k], n !== q ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), t ? (d = d.getAttribute("id"), (n.test(e) || n.test(f) || t.test(d)) &&
                        a.push(b[k])) : (n.test(e) || n.test(f)) && a.push(b[k])) : t !== q && (d = d.getAttribute("id"), t.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof p && "undefined" !== typeof n) {
                var l;
                m += /\/$/.test(m) ? "" : "/";
                var u = function (a, b) {
                    if (l === b)return w(m + a, b), v;
                    if (d.d(b, "Array") || d.d(b, "NodeList"))for (var e = 0, f = b.length; e < f; e ++)if (l === b[e])return w(m + a + "/" + (e + 1), b[e]), v
                };
                f.c(document, "mousedown", function (a) {
                    a     = a || window.event;
                    l     = a.target || a.srcElement;
                    var e = {};
                    for (b(p, function (a, b) {
                        e[a] = d.d(b, "Function") ? b() : document.getElementById(b)
                    }); l &&
                         l !== document && b(e, u) !== v;)l = l.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.p, d = mt.lang, f = mt.event, e = mt.j;
        if ("undefined" !== typeof h.b && d.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var k = {
                $    : function () {
                    for (var d = c.cvcf.length, e, p = 0; p < d; p ++)(e = a.ma(decodeURIComponent(c.cvcf[p]))) && f.c(e, "click", k.ha())
                }, ha: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a    = {n: "form", t: "clk"};
                        a.id     = this.id;
                        h.b.a.ep = e.stringify(a);
                        h.b.h()
                    }
                }
            };
            a.X(function () {
                k.$()
            })
        }
    })();
    (function () {
        var a = mt.event, d = mt.j;
        if (c.med && "undefined" !== typeof h.b) {
            var f = + new Date, e = {n: "anti", sb: 0, kb: 0, clk: 0}, k = function () {
                h.b.a.et = 86;
                h.b.a.ep = d.stringify(e);
                h.b.h()
            };
            a.c(document, "click", function () {
                e.clk ++
            });
            a.c(document, "keyup", function () {
                e.kb = 1
            });
            a.c(window, "scroll", function () {
                e.sb ++
            });
            a.c(window, "unload", function () {
                e.t = + new Date - f;
                k()
            });
            a.c(window, "load", function () {
                setTimeout(k, 5E3)
            })
        }
    })();
})();
