console.log('This is the messed up version lol');

(function(e, t, n) {
    if (t.hidden !== n)
        return;
    var r = ["webkit", "o", "ms", "moz"];
    for (var i = 0; i < r.length; i++) {
        var s = r[i];
        if (t[s + "Hidden"] !== n) {
            var o = new Event("visibilitychange");
            t.addEventListener(s + "visibilitychange", function() {
                t.dispatchEvent(o)
            }),
            Object.defineProperty(t, "hidden", {
                get: function() {
                    return t[s + "Hidden"]
                }
            }),
            Object.defineProperty(t, "visibilityState", {
                get: function() {
                    return t[s + "VisibilityState"]
                }
            });
            return
        }
    }
}
)(this, document),
function() {
    var e = {}
      , t = null
      , n = null
      , r = null
      , i = null
      , s = {}
      , o = window.devicePixelRatio || 1
      , u = 16 * o
      , a = {
        width: 7,
        height: 9,
        font: 10 * o + "px arial",
        colour: "#ffffff",
        background: "#F03D25",
        fallback: !0,
        crossOrigin: !0,
        abbreviate: !0
    }
      , f = function() {
        var e = navigator.userAgent.toLowerCase();
        return function(t) {
            return e.indexOf(t) !== -1
        }
    }()
      , l = {
        ie: f("msie"),
        chrome: f("chrome"),
        webkit: f("chrome") || f("safari"),
        safari: f("safari") && !f("chrome"),
        mozilla: f("mozilla") && !f("chrome") && !f("safari")
    }
      , c = function() {
        var e = document.getElementsByTagName("link");
        for (var t = 0, n = e.length; t < n; t++)
            if ((e[t].getAttribute("rel") || "").match(/\bicon\b/))
                return e[t];
        return !1
    }
      , h = function() {
        var e = document.getElementsByTagName("link")
          , t = document.getElementsByTagName("head")[0];
        for (var n = 0, r = e.length; n < r; n++) {
            var i = typeof e[n] != "undefined";
            i && (e[n].getAttribute("rel") || "").match(/\bicon\b/) && t.removeChild(e[n])
        }
    }
      , p = function() {
        if (!n || !t) {
            var e = c();
            n = e ? e.getAttribute("href") : "/favicon.ico",
            t || (t = n)
        }
        return t
    }
      , d = function() {
        return i || (i = document.createElement("canvas"),
        i.width = u,
        i.height = u),
        i
    }
      , v = function(e) {
        h();
        var t = document.createElement("link");
        t.type = "image/x-icon",
        t.rel = "icon",
        t.href = e,
        document.getElementsByTagName("head")[0].appendChild(t)
    }
      , m = function(e) {
        window.console && window.console.log(e)
    }
      , g = function(e, t) {
        if (!d().getContext || l.ie || l.safari || s.fallback === "force")
            return y(e);
        var n = d().getContext("2d")
          , t = t || "#000000"
          , i = p();
        r = document.createElement("img"),
        r.onload = function() {
            n.clearRect(0, 0, u, u),
            n.drawImage(r, 0, 0, r.width, r.height, 0, 0, u, u),
            (e + "").length > 0 && b(n, e, t),
            w()
        }
        ,
        !i.match(/^data/) && s.crossOrigin && (r.crossOrigin = "anonymous"),
        r.src = i
    }
      , y = function(e) {
        if (s.fallback) {
            var t = document.title;
            t[0] === "(" && (t = t.slice(t.indexOf(" "))),
            (e + "").length > 0 ? document.title = "(" + e + ") " + t : document.title = t
        }
    }
      , b = function(e, t, n) {
        typeof t == "number" && t > 99 && s.abbreviate && (t = E(t));
        var r = (t + "").length - 1
          , i = s.width * o + 6 * o * r
          , a = s.height * o
          , f = u - a
          , c = u - i - o
          , h = 16 * o
          , p = 16 * o
          , d = 2 * o;
        e.font = (l.webkit ? "bold " : "") + s.font,
        e.fillStyle = s.background,
        e.strokeStyle = s.background,
        e.lineWidth = o,
        e.beginPath(),
        e.moveTo(c + d, f),
        e.quadraticCurveTo(c, f, c, f + d),
        e.lineTo(c, h - d),
        e.quadraticCurveTo(c, h, c + d, h),
        e.lineTo(p - d, h),
        e.quadraticCurveTo(p, h, p, h - d),
        e.lineTo(p, f + d),
        e.quadraticCurveTo(p, f, p - d, f),
        e.closePath(),
        e.fill(),
        e.beginPath(),
        e.strokeStyle = "rgba(0,0,0,0.3)",
        e.moveTo(c + d / 2, h),
        e.lineTo(p - d / 2, h),
        e.stroke(),
        e.fillStyle = s.colour,
        e.textAlign = "right",
        e.textBaseline = "top",
        e.fillText(t, o === 2 ? 29 : 15, l.mozilla ? 7 * o : 6 * o)
    }
      , w = function() {
        if (!d().getContext)
            return;
        v(d().toDataURL())
    }
      , E = function(e) {
        var t = [["G", 1e9], ["M", 1e6], ["k", 1e3]];
        for (var n = 0; n < t.length; ++n)
            if (e >= t[n][1]) {
                e = S(e / t[n][1]) + t[n][0];
                break
            }
        return e
    }
      , S = function(e, t) {
        var n = new Number(e);
        return n.toFixed(t)
    };
    e.setOptions = function(e) {
        s = {};
        for (var t in a)
            s[t] = e.hasOwnProperty(t) ? e[t] : a[t];
        return this
    }
    ,
    e.setImage = function(e) {
        return t = e,
        w(),
        this
    }
    ,
    e.setBubble = function(e, t) {
        return e = e || "",
        g(e, t),
        this
    }
    ,
    e.reset = function() {
        v(n)
    }
    ,
    e.setOptions(a),
    window.Tinycon = e,
    typeof define == "function" && define.amd && define(e)
}(),
function(e) {
    function Y() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function Z(e, n) {
        function i() {
            t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e)
        }
        var r = !0;
        return st(function() {
            return r && (i(),
            r = !1),
            n.apply(this, arguments)
        }, n)
    }
    function et(e, t) {
        return function(n) {
            return at(e.call(this, n), t)
        }
    }
    function tt(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }
    function nt() {}
    function rt(e) {
        Et(e),
        st(this, e)
    }
    function it(e) {
        var t = dt(e)
          , n = t.year || 0
          , r = t.quarter || 0
          , i = t.month || 0
          , s = t.week || 0
          , o = t.day || 0
          , u = t.hour || 0
          , a = t.minute || 0
          , f = t.second || 0
          , l = t.millisecond || 0;
        this._milliseconds = +l + f * 1e3 + a * 6e4 + u * 36e5,
        this._days = +o + s * 7,
        this._months = +i + r * 3 + n * 12,
        this._data = {},
        this._bubble()
    }
    function st(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString),
        t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function ot(e) {
        var t = {}, n;
        for (n in e)
            e.hasOwnProperty(n) && v.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    function ut(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function at(e, t, n) {
        var r = "" + Math.abs(e)
          , i = e >= 0;
        while (r.length < t)
            r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }
    function ft(e, n, r, i) {
        var s = n._milliseconds
          , o = n._days
          , u = n._months;
        i = i == null ? !0 : i,
        s && e._d.setTime(+e._d + s * r),
        o && en(e, "Date", Zt(e, "Date") + o * r),
        u && Yt(e, Zt(e, "Month") + u * r),
        i && t.updateOffset(e, o || u)
    }
    function lt(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function ct(e) {
        return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
    }
    function ht(e, t, n) {
        var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0, o;
        for (o = 0; o < r; o++)
            (n && e[o] !== t[o] || !n && mt(e[o]) !== mt(t[o])) && s++;
        return s + i
    }
    function pt(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = X[e] || V[t] || t
        }
        return e
    }
    function dt(e) {
        var t = {}, n, r;
        for (r in e)
            e.hasOwnProperty(r) && (n = pt(r),
            n && (t[n] = e[r]));
        return t
    }
    function vt(n) {
        var r, i;
        if (n.indexOf("week") === 0)
            r = 7,
            i = "day";
        else {
            if (n.indexOf("month") !== 0)
                return;
            r = 12,
            i = "month"
        }
        t[n] = function(s, o) {
            var u, a, f = t.fn._lang[n], l = [];
            typeof s == "number" && (o = s,
            s = e),
            a = function(e) {
                var n = t().utc().set(i, e);
                return f.call(t.fn._lang, n, s || "")
            }
            ;
            if (o != null)
                return a(o);
            for (u = 0; u < r; u++)
                l.push(a(u));
            return l
        }
    }
    function mt(e) {
        var t = +e
          , n = 0;
        return t !== 0 && isFinite(t) && (t >= 0 ? n = Math.floor(t) : n = Math.ceil(t)),
        n
    }
    function gt(e, t) {
        return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
    }
    function yt(e, n, r) {
        return Kt(t([e, 11, 31 + n - r]), n, r).week
    }
    function bt(e) {
        return wt(e) ? 366 : 365
    }
    function wt(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function Et(e) {
        var t;
        e._a && e._pf.overflow === -2 && (t = e._a[a] < 0 || e._a[a] > 11 ? a : e._a[f] < 1 || e._a[f] > gt(e._a[u], e._a[a]) ? f : e._a[l] < 0 || e._a[l] > 23 ? l : e._a[c] < 0 || e._a[c] > 59 ? c : e._a[h] < 0 || e._a[h] > 59 ? h : e._a[p] < 0 || e._a[p] > 999 ? p : -1,
        e._pf._overflowDayOfYear && (t < u || t > f) && (t = f),
        e._pf.overflow = t)
    }
    function St(e) {
        return e._isValid == null && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated,
        e._strict && (e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0)),
        e._isValid
    }
    function xt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function Tt(e, n) {
        return n._isUTC ? t(e).zone(n._offset || 0) : t(e).local()
    }
    function Nt(e, t) {
        return t.abbr = e,
        d[e] || (d[e] = new nt),
        d[e].set(t),
        d[e]
    }
    function Ct(e) {
        delete d[e]
    }
    function kt(e) {
        var n = 0, r, i, s, o, u = function(e) {
            if (!d[e] && m)
                try {
                    require("./lang/" + e)
                } catch (t) {}
            return d[e]
        };
        if (!e)
            return t.fn._lang;
        if (!lt(e)) {
            i = u(e);
            if (i)
                return i;
            e = [e]
        }
        while (n < e.length) {
            o = xt(e[n]).split("-"),
            r = o.length,
            s = xt(e[n + 1]),
            s = s ? s.split("-") : null;
            while (r > 0) {
                i = u(o.slice(0, r).join("-"));
                if (i)
                    return i;
                if (s && s.length >= r && ht(o, s, !0) >= r - 1)
                    break;
                r--
            }
            n++
        }
        return t.fn._lang
    }
    function Lt(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function At(e) {
        var t = e.match(w), n, r;
        for (n = 0,
        r = t.length; n < r; n++)
            Q[t[n]] ? t[n] = Q[t[n]] : t[n] = Lt(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++)
                s += t[n]instanceof Function ? t[n].call(i, e) : t[n];
            return s
        }
    }
    function Ot(e, t) {
        return e.isValid() ? (t = Mt(t, e.lang()),
        $[t] || ($[t] = At(t)),
        $[t](e)) : e.lang().invalidDate()
    }
    function Mt(e, t) {
        function r(e) {
            return t.longDateFormat(e) || e
        }
        var n = 5;
        E.lastIndex = 0;
        while (n >= 0 && E.test(e))
            e = e.replace(E, r),
            E.lastIndex = 0,
            n -= 1;
        return e
    }
    function _t(e, t) {
        var n, r = t._strict;
        switch (e) {
        case "Q":
            return _;
        case "DDDD":
            return P;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return r ? H : T;
        case "Y":
        case "G":
        case "g":
            return j;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return r ? B : N;
        case "S":
            if (r)
                return _;
        case "SS":
            if (r)
                return D;
        case "SSS":
            if (r)
                return P;
        case "DDD":
            return x;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return k;
        case "a":
        case "A":
            return kt(t._l)._meridiemParse;
        case "X":
            return O;
        case "Z":
        case "ZZ":
            return L;
        case "T":
            return A;
        case "SSSS":
            return C;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
            return r ? D : S;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
            return S;
        case "Do":
            return M;
        default:
            return n = new RegExp(qt(It(e.replace("\\", "")), "i")),
            n
        }
    }
    function Dt(e) {
        e = e || "";
        var t = e.match(L) || []
          , n = t[t.length - 1] || []
          , r = (n + "").match(U) || ["-", 0, 0]
          , i = +(r[1] * 60) + mt(r[2]);
        return r[0] === "+" ? -i : i
    }
    function Pt(e, n, r) {
        var i, s = r._a;
        switch (e) {
        case "Q":
            n != null && (s[a] = (mt(n) - 1) * 3);
            break;
        case "M":
        case "MM":
            n != null && (s[a] = mt(n) - 1);
            break;
        case "MMM":
        case "MMMM":
            i = kt(r._l).monthsParse(n),
            i != null ? s[a] = i : r._pf.invalidMonth = n;
            break;
        case "D":
        case "DD":
            n != null && (s[f] = mt(n));
            break;
        case "Do":
            n != null && (s[f] = mt(parseInt(n, 10)));
            break;
        case "DDD":
        case "DDDD":
            n != null && (r._dayOfYear = mt(n));
            break;
        case "YY":
            s[u] = t.parseTwoDigitYear(n);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            s[u] = mt(n);
            break;
        case "a":
        case "A":
            r._isPm = kt(r._l).isPM(n);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            s[l] = mt(n);
            break;
        case "m":
        case "mm":
            s[c] = mt(n);
            break;
        case "s":
        case "ss":
            s[h] = mt(n);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            s[p] = mt(("0." + n) * 1e3);
            break;
        case "X":
            r._d = new Date(parseFloat(n) * 1e3);
            break;
        case "Z":
        case "ZZ":
            r._useUTC = !0,
            r._tzm = Dt(n);
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
            e = e.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
            e = e.substr(0, 2),
            n && (r._w = r._w || {},
            r._w[e] = n)
        }
    }
    function Ht(e) {
        var n, r, i = [], s, o, h, p, d, v, m, g;
        if (e._d)
            return;
        s = jt(e),
        e._w && e._a[f] == null && e._a[a] == null && (h = function(n) {
            var r = parseInt(n, 10);
            return n ? n.length < 3 ? r > 68 ? 1900 + r : 2e3 + r : r : e._a[u] == null ? t().weekYear() : e._a[u]
        }
        ,
        p = e._w,
        p.GG != null || p.W != null || p.E != null ? d = Qt(h(p.GG), p.W || 1, p.E, 4, 1) : (v = kt(e._l),
        m = p.d != null ? Vt(p.d, v) : p.e != null ? parseInt(p.e, 10) + v._week.dow : 0,
        g = parseInt(p.w, 10) || 1,
        p.d != null && m < v._week.dow && g++,
        d = Qt(h(p.gg), g, m, v._week.doy, v._week.dow)),
        e._a[u] = d.year,
        e._dayOfYear = d.dayOfYear),
        e._dayOfYear && (o = e._a[u] == null ? s[u] : e._a[u],
        e._dayOfYear > bt(o) && (e._pf._overflowDayOfYear = !0),
        r = Xt(o, 0, e._dayOfYear),
        e._a[a] = r.getUTCMonth(),
        e._a[f] = r.getUTCDate());
        for (n = 0; n < 3 && e._a[n] == null; ++n)
            e._a[n] = i[n] = s[n];
        for (; n < 7; n++)
            e._a[n] = i[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
        i[l] += mt((e._tzm || 0) / 60),
        i[c] += mt((e._tzm || 0) % 60),
        e._d = (e._useUTC ? Xt : Wt).apply(null, i)
    }
    function Bt(e) {
        var t;
        if (e._d)
            return;
        t = dt(e._i),
        e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond],
        Ht(e)
    }
    function jt(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function Ft(e) {
        e._a = [],
        e._pf.empty = !0;
        var t = kt(e._l), n = "" + e._i, r, i, s, o, u, a = n.length, f = 0;
        s = Mt(e._f, t).match(w) || [];
        for (r = 0; r < s.length; r++)
            o = s[r],
            i = (n.match(_t(o, e)) || [])[0],
            i && (u = n.substr(0, n.indexOf(i)),
            u.length > 0 && e._pf.unusedInput.push(u),
            n = n.slice(n.indexOf(i) + i.length),
            f += i.length),
            Q[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o),
            Pt(o, i, e)) : e._strict && !i && e._pf.unusedTokens.push(o);
        e._pf.charsLeftOver = a - f,
        n.length > 0 && e._pf.unusedInput.push(n),
        e._isPm && e._a[l] < 12 && (e._a[l] += 12),
        e._isPm === !1 && e._a[l] === 12 && (e._a[l] = 0),
        Ht(e),
        Et(e)
    }
    function It(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
        })
    }
    function qt(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Rt(e) {
        var t, n, r, i, s;
        if (e._f.length === 0) {
            e._pf.invalidFormat = !0,
            e._d = new Date(NaN);
            return
        }
        for (i = 0; i < e._f.length; i++) {
            s = 0,
            t = st({}, e),
            t._pf = Y(),
            t._f = e._f[i],
            Ft(t);
            if (!St(t))
                continue;
            s += t._pf.charsLeftOver,
            s += t._pf.unusedTokens.length * 10,
            t._pf.score = s;
            if (r == null || s < r)
                r = s,
                n = t
        }
        st(e, n || t)
    }
    function Ut(e) {
        var n, r, i = e._i, s = F.exec(i);
        if (s) {
            e._pf.iso = !0;
            for (n = 0,
            r = q.length; n < r; n++)
                if (q[n][1].exec(i)) {
                    e._f = q[n][0] + (s[6] || " ");
                    break
                }
            for (n = 0,
            r = R.length; n < r; n++)
                if (R[n][1].exec(i)) {
                    e._f += R[n][0];
                    break
                }
            i.match(L) && (e._f += "Z"),
            Ft(e)
        } else
            t.createFromInputFallback(e)
    }
    function zt(n) {
        var r = n._i
          , i = g.exec(r);
        r === e ? n._d = new Date : i ? n._d = new Date(+i[1]) : typeof r == "string" ? Ut(n) : lt(r) ? (n._a = r.slice(0),
        Ht(n)) : ct(r) ? n._d = new Date(+r) : typeof r == "object" ? Bt(n) : typeof r == "number" ? n._d = new Date(r) : t.createFromInputFallback(n)
    }
    function Wt(e, t, n, r, i, s, o) {
        var u = new Date(e,t,n,r,i,s,o);
        return e < 1970 && u.setFullYear(e),
        u
    }
    function Xt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 1970 && t.setUTCFullYear(e),
        t
    }
    function Vt(e, t) {
        if (typeof e == "string")
            if (!isNaN(e))
                e = parseInt(e, 10);
            else {
                e = t.weekdaysParse(e);
                if (typeof e != "number")
                    return null
            }
        return e
    }
    function $t(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function Jt(e, t, n) {
        var r = s(Math.abs(e) / 1e3)
          , i = s(r / 60)
          , o = s(i / 60)
          , u = s(o / 24)
          , a = s(u / 365)
          , f = r < 45 && ["s", r] || i === 1 && ["m"] || i < 45 && ["mm", i] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", s(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t,
        f[3] = e > 0,
        f[4] = n,
        $t.apply({}, f)
    }
    function Kt(e, n, r) {
        var i = r - n, s = r - e.day(), o;
        return s > i && (s -= 7),
        s < i - 7 && (s += 7),
        o = t(e).add("d", s),
        {
            week: Math.ceil(o.dayOfYear() / 7),
            year: o.year()
        }
    }
    function Qt(e, t, n, r, i) {
        var s = Xt(e, 0, 1).getUTCDay(), o, u;
        return n = n != null ? n : i,
        o = i - s + (s > r ? 7 : 0) - (s < i ? 7 : 0),
        u = 7 * (t - 1) + (n - i) + o + 1,
        {
            year: u > 0 ? e : e - 1,
            dayOfYear: u > 0 ? u : bt(e - 1) + u
        }
    }
    function Gt(n) {
        var r = n._i
          , i = n._f;
        return r === null || i === e && r === "" ? t.invalid({
            nullInput: !0
        }) : (typeof r == "string" && (n._i = r = kt().preparse(r)),
        t.isMoment(r) ? (n = ot(r),
        n._d = new Date(+r._d)) : i ? lt(i) ? Rt(n) : Ft(n) : zt(n),
        new rt(n))
    }
    function Yt(e, t) {
        var n;
        if (typeof t == "string") {
            t = e.lang().monthsParse(t);
            if (typeof t != "number")
                return e
        }
        return n = Math.min(e.date(), gt(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function Zt(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }
    function en(e, t, n) {
        return t === "Month" ? Yt(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function tn(e, n) {
        return function(r) {
            return r != null ? (en(this, e, r),
            t.updateOffset(this, n),
            this) : Zt(this, e)
        }
    }
    function nn(e) {
        t.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function rn(e, n) {
        t.duration.fn["as" + e] = function() {
            return +this / n
        }
    }
    function sn(e) {
        if (typeof ender != "undefined")
            return;
        i = r.moment,
        e ? r.moment = Z("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : r.moment = t
    }
    var t, n = "2.6.0", r = typeof global != "undefined" ? global : this, i, s = Math.round, o, u = 0, a = 1, f = 2, l = 3, c = 4, h = 5, p = 6, d = {}, v = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, m = typeof module != "undefined" && module.exports, g = /^\/?Date\((\-?\d+)/i, y = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, b = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, w = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, S = /\d\d?/, x = /\d{1,3}/, T = /\d{1,4}/, N = /[+\-]?\d{1,6}/, C = /\d+/, k = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, L = /Z|[\+\-]\d\d:?\d\d/gi, A = /T/i, O = /[\+\-]?\d+(\.\d{1,3})?/, M = /\d{1,2}/, _ = /\d/, D = /\d\d/, P = /\d{3}/, H = /\d{4}/, B = /[+-]?\d{6}/, j = /[+-]?\d+/, F = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, I = "YYYY-MM-DDTHH:mm:ssZ", q = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], R = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], U = /([\+\-]|\d\d)/gi, z = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), W = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, X = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, V = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, $ = {}, J = "DDD w W M D d".split(" "), K = "M D H h m s w W".split(" "), Q = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return this.lang().monthsShort(this, e)
        },
        MMMM: function(e) {
            return this.lang().months(this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return this.lang().weekdaysMin(this, e)
        },
        ddd: function(e) {
            return this.lang().weekdaysShort(this, e)
        },
        dddd: function(e) {
            return this.lang().weekdays(this, e)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return at(this.year() % 100, 2)
        },
        YYYY: function() {
            return at(this.year(), 4)
        },
        YYYYY: function() {
            return at(this.year(), 5)
        },
        YYYYYY: function() {
            var e = this.year()
              , t = e >= 0 ? "+" : "-";
            return t + at(Math.abs(e), 6)
        },
        gg: function() {
            return at(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return at(this.weekYear(), 4)
        },
        ggggg: function() {
            return at(this.weekYear(), 5)
        },
        GG: function() {
            return at(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return at(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return at(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return mt(this.milliseconds() / 100)
        },
        SS: function() {
            return at(mt(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return at(this.milliseconds(), 3)
        },
        SSSS: function() {
            return at(this.milliseconds(), 3)
        },
        Z: function() {
            var e = -this.zone()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + at(mt(e / 60), 2) + ":" + at(mt(e) % 60, 2)
        },
        ZZ: function() {
            var e = -this.zone()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + at(mt(e / 60), 2) + at(mt(e) % 60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, G = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    while (J.length)
        o = J.pop(),
        Q[o + "o"] = tt(Q[o], o);
    while (K.length)
        o = K.pop(),
        Q[o + o] = et(Q[o], 2);
    Q.DDDD = et(Q.DDD, 3),
    st(nt.prototype, {
        set: function(e) {
            var t, n;
            for (n in e)
                t = e[n],
                typeof t == "function" ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
            var n, r, i;
            this._monthsParse || (this._monthsParse = []);
            for (n = 0; n < 12; n++) {
                this._monthsParse[n] || (r = t.utc([2e3, n]),
                i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
                this._monthsParse[n] = new RegExp(i.replace(".", ""),"i"));
                if (this._monthsParse[n].test(e))
                    return n
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var n, r, i;
            this._weekdaysParse || (this._weekdaysParse = []);
            for (n = 0; n < 7; n++) {
                this._weekdaysParse[n] || (r = t([2e3, 1]).day(n),
                i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
                this._weekdaysParse[n] = new RegExp(i.replace(".", ""),"i"));
                if (this._weekdaysParse[n].test(e))
                    return n
            }
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }),
            this._longDateFormat[e] = t),
            t
        },
        isPM: function(e) {
            return (e + "").toLowerCase().charAt(0) === "p"
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendar[e];
            return typeof n == "function" ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return Kt(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }),
    t = function(t, n, r, i) {
        var s;
        return typeof r == "boolean" && (i = r,
        r = e),
        s = {},
        s._isAMomentObject = !0,
        s._i = t,
        s._f = n,
        s._l = r,
        s._strict = i,
        s._isUTC = !1,
        s._pf = Y(),
        Gt(s)
    }
    ,
    t.suppressDeprecationWarnings = !1,
    t.createFromInputFallback = Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i)
    }),
    t.utc = function(t, n, r, i) {
        var s;
        return typeof r == "boolean" && (i = r,
        r = e),
        s = {},
        s._isAMomentObject = !0,
        s._useUTC = !0,
        s._isUTC = !0,
        s._l = r,
        s._i = t,
        s._f = n,
        s._strict = i,
        s._pf = Y(),
        Gt(s).utc()
    }
    ,
    t.unix = function(e) {
        return t(e * 1e3)
    }
    ,
    t.duration = function(e, n) {
        var r = e, i = null, s, o, u;
        return t.isDuration(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : typeof e == "number" ? (r = {},
        n ? r[n] = e : r.milliseconds = e) : (i = y.exec(e)) ? (s = i[1] === "-" ? -1 : 1,
        r = {
            y: 0,
            d: mt(i[f]) * s,
            h: mt(i[l]) * s,
            m: mt(i[c]) * s,
            s: mt(i[h]) * s,
            ms: mt(i[p]) * s
        }) : !(i = b.exec(e)) || (s = i[1] === "-" ? -1 : 1,
        u = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * s
        }
        ,
        r = {
            y: u(i[2]),
            M: u(i[3]),
            d: u(i[4]),
            h: u(i[5]),
            m: u(i[6]),
            s: u(i[7]),
            w: u(i[8])
        }),
        o = new it(r),
        t.isDuration(e) && e.hasOwnProperty("_lang") && (o._lang = e._lang),
        o
    }
    ,
    t.version = n,
    t.defaultFormat = I,
    t.momentProperties = v,
    t.updateOffset = function() {}
    ,
    t.lang = function(e, n) {
        var r;
        return e ? (n ? Nt(xt(e), n) : n === null ? (Ct(e),
        e = "en") : d[e] || kt(e),
        r = t.duration.fn._lang = t.fn._lang = kt(e),
        r._abbr) : t.fn._lang._abbr
    }
    ,
    t.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr),
        kt(e)
    }
    ,
    t.isMoment = function(e) {
        return e instanceof rt || e != null && e.hasOwnProperty("_isAMomentObject")
    }
    ,
    t.isDuration = function(e) {
        return e instanceof it
    }
    ;
    for (o = G.length - 1; o >= 0; --o)
        vt(G[o]);
    t.normalizeUnits = function(e) {
        return pt(e)
    }
    ,
    t.invalid = function(e) {
        var n = t.utc(NaN);
        return e != null ? st(n._pf, e) : n._pf.userInvalidated = !0,
        n
    }
    ,
    t.parseZone = function() {
        return t.apply(null, arguments).parseZone()
    }
    ,
    t.parseTwoDigitYear = function(e) {
        return mt(e) + (mt(e) > 68 ? 1900 : 2e3)
    }
    ,
    st(t.fn = rt.prototype, {
        clone: function() {
            return t(this)
        },
        valueOf: function() {
            return +this._d + (this._offset || 0) * 6e4
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = t(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? Ot(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Ot(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return St(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && ht(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return st({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0),
            this._isUTC = !1,
            this
        },
        format: function(e) {
            var n = Ot(this, e || t.defaultFormat);
            return this.lang().postformat(n)
        },
        add: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n),
            ft(this, r, 1),
            this
        },
        subtract: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n),
            ft(this, r, -1),
            this
        },
        diff: function(e, n, r) {
            var i = Tt(e, this), s = (this.zone() - i.zone()) * 6e4, o, u;
            return n = pt(n),
            n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5,
            u = (this.year() - i.year()) * 12 + (this.month() - i.month()),
            u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o,
            u -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4 / o,
            n === "year" && (u /= 12)) : (o = this - i,
            u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o),
            r ? u : ut(u)
        },
        from: function(e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
        },
        fromNow: function(e) {
            return this.from(t(), e)
        },
        calendar: function() {
            var e = Tt(t(), this).startOf("day")
              , n = this.diff(e, "days", !0)
              , r = n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(r, this))
        },
        isLeapYear: function() {
            return wt(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e != null ? (e = Vt(e, this.lang()),
            this.add({
                d: e - t
            })) : t
        },
        month: tn("Month", !0),
        startOf: function(e) {
            e = pt(e);
            switch (e) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return e === "week" ? this.weekday(0) : e === "isoWeek" && this.isoWeekday(1),
            e === "quarter" && this.month(Math.floor(this.month() / 3) * 3),
            this
        },
        endOf: function(e) {
            return e = pt(e),
            this.startOf(e).add(e === "isoWeek" ? "week" : e, 1).subtract("ms", 1)
        },
        isAfter: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond",
            +this.clone().startOf(n) > +t(e).startOf(n)
        },
        isBefore: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond",
            +this.clone().startOf(n) < +t(e).startOf(n)
        },
        isSame: function(e, t) {
            return t = t || "ms",
            +this.clone().startOf(t) === +Tt(e, this).startOf(t)
        },
        min: function(e) {
            return e = t.apply(null, arguments),
            e < this ? this : e
        },
        max: function(e) {
            return e = t.apply(null, arguments),
            e > this ? this : e
        },
        zone: function(e, n) {
            var r = this._offset || 0;
            return e == null ? this._isUTC ? r : this._d.getTimezoneOffset() : (typeof e == "string" && (e = Dt(e)),
            Math.abs(e) < 16 && (e *= 60),
            this._offset = e,
            this._isUTC = !0,
            r !== e && (!n || this._changeInProgress ? ft(this, t.duration(r - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            t.updateOffset(this, !0),
            this._changeInProgress = null)),
            this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : typeof this._i == "string" && this.zone(this._i),
            this
        },
        hasAlignedHourOffset: function(e) {
            return e ? e = t(e).zone() : e = 0,
            (this.zone() - e) % 60 === 0
        },
        daysInMonth: function() {
            return gt(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var n = s((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n)
        },
        quarter: function(e) {
            return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
        },
        weekYear: function(e) {
            var t = Kt(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return e == null ? t : this.add("y", e - t)
        },
        isoWeekYear: function(e) {
            var t = Kt(this, 1, 4).year;
            return e == null ? t : this.add("y", e - t)
        },
        week: function(e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        isoWeek: function(e) {
            var t = Kt(this, 1, 4).week;
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.lang()._week.dow) % 7;
            return e == null ? t : this.add("d", e - t)
        },
        isoWeekday: function(e) {
            return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return yt(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this._lang._week;
            return yt(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = pt(e),
            this[e]()
        },
        set: function(e, t) {
            return e = pt(e),
            typeof this[e] == "function" && this[e](t),
            this
        },
        lang: function(t) {
            return t === e ? this._lang : (this._lang = kt(t),
            this)
        }
    }),
    t.fn.millisecond = t.fn.milliseconds = tn("Milliseconds", !1),
    t.fn.second = t.fn.seconds = tn("Seconds", !1),
    t.fn.minute = t.fn.minutes = tn("Minutes", !1),
    t.fn.hour = t.fn.hours = tn("Hours", !0),
    t.fn.date = tn("Date", !0),
    t.fn.dates = Z("dates accessor is deprecated. Use date instead.", tn("Date", !0)),
    t.fn.year = tn("FullYear", !0),
    t.fn.years = Z("years accessor is deprecated. Use year instead.", tn("FullYear", !0)),
    t.fn.days = t.fn.day,
    t.fn.months = t.fn.month,
    t.fn.weeks = t.fn.week,
    t.fn.isoWeeks = t.fn.isoWeek,
    t.fn.quarters = t.fn.quarter,
    t.fn.toJSON = t.fn.toISOString,
    st(t.duration.fn = it.prototype, {
        _bubble: function() {
            var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, s, o, u;
            r.milliseconds = e % 1e3,
            i = ut(e / 1e3),
            r.seconds = i % 60,
            s = ut(i / 60),
            r.minutes = s % 60,
            o = ut(s / 60),
            r.hours = o % 24,
            t += ut(o / 24),
            r.days = t % 30,
            n += ut(t / 30),
            r.months = n % 12,
            u = ut(n / 12),
            r.years = u
        },
        weeks: function() {
            return ut(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + mt(this._months / 12) * 31536e6
        },
        humanize: function(e) {
            var t = +this
              , n = Jt(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)),
            this.lang().postformat(n)
        },
        add: function(e, n) {
            var r = t.duration(e, n);
            return this._milliseconds += r._milliseconds,
            this._days += r._days,
            this._months += r._months,
            this._bubble(),
            this
        },
        subtract: function(e, n) {
            var r = t.duration(e, n);
            return this._milliseconds -= r._milliseconds,
            this._days -= r._days,
            this._months -= r._months,
            this._bubble(),
            this
        },
        get: function(e) {
            return e = pt(e),
            this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            return e = pt(e),
            this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: t.fn.lang,
        toIsoString: function() {
            var e = Math.abs(this.years())
              , t = Math.abs(this.months())
              , n = Math.abs(this.days())
              , r = Math.abs(this.hours())
              , i = Math.abs(this.minutes())
              , s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        }
    });
    for (o in W)
        W.hasOwnProperty(o) && (rn(o, W[o]),
        nn(o.toLowerCase()));
    rn("Weeks", 6048e5),
    t.duration.fn.asMonths = function() {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
    }
    ,
    t.lang("en", {
        ordinal: function(e) {
            var t = e % 10
              , n = mt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }
    }),
    m ? module.exports = t : typeof define == "function" && define.amd ? (define("moment", function(e, n, s) {
        return s.config && s.config() && s.config().noGlobal === !0 && (r.moment = i),
        t
    }),
    sn(!0)) : sn()
}
.call(this),
r.WebSocket = function(e) {
    this._url = e,
    this._connectionAttempts = 0,
    this.on({
        "message:refresh": this._onRefresh
    }, this)
}
,
_.extend(r.WebSocket.prototype, Backbone.Events, {
    _backoffTime: 2e3,
    _maximumRetries: 9,
    _retryJitterAmount: 3e3,
    start: function() {
        var e = "WebSocket"in window;
        e && this._connect()
    },
    _connect: function() {
        r.debug("websocket: connecting"),
        this.trigger("connecting"),
        this._connectionStart = Date.now(),
        this._socket = new WebSocket(this._url),
        this._socket.onopen = _.bind(this._onOpen, this),
        this._socket.onmessage = _.bind(this._onMessage, this),
        this._socket.onclose = _.bind(this._onClose, this),
        this._connectionAttempts += 1
    },
    _sendStats: function(e) {
        if (!r.config.stats_domain)
            return;
        $.ajax({
            type: "POST",
            url: r.config.stats_domain,
            data: JSON.stringify(e),
            contentType: "application/json; charset=utf-8"
        })
    },
    _onOpen: function(e) {
	console.log(Date.now() - this._connectionStart);
        r.debug("websocket: connected"),
        this.trigger("connected"),
        this._connectionAttempts = 0,
        this._sendStats({
            websocketPerformance: {
                connectionTiming: Date.now() - this._connectionStart
            }
        })
    },
    _onMessage: function(e) {
	console.log('data received: ' + Date.now());
        var t = JSON.parse(e.data);
		console.log('data parsed: ' + Date.now());
		console.log(e.data);
        r.debug('websocket: received "' + t.type + '" message'),
		console.log('debugged: ' + Date.now());
        this.trigger("message message:" + t.type, t.payload)
		console.log('reddit functions finished: ' + Date.now());
    },
    _onRefresh: function() {
        var e = Math.random() * 300 * 1e3;
        setTimeout(function() {
            location.reload()
        }, e)
    },
    _onClose: function(e) {
        if (this._connectionAttempts < this._maximumRetries) {
            var t = this._backoffTime * Math.pow(2, this._connectionAttempts)
              , n = Math.random() * this._retryJitterAmount - this._retryJitterAmount / 2
              , i = Math.round(t + n);
            r.debug("websocket: connection lost (" + e.code + "), reconnecting in " + i + "ms"),
            r.debug("(can't connect? Make sure you've allowed https access in your browser.)"),
            this.trigger("reconnecting", i),
            setTimeout(_.bind(this._connect, this), i)
        } else
            r.debug("websocket: maximum retries exceeded. bailing out"),
            this.trigger("disconnected");
        this._sendStats({
            websocketError: {
                error: 1
            }
        })
    }/*,
    _verifyLocalStorage: function(e) {
        var t = "__synced_local_storage_%(keyname)s__".format({
            keyname: e
        });
        try {
            store.safeSet(t, store.safeGet(t) || "")
        } catch (n) {
            return !1
        }
        return !0
    },
    startPerBrowser: function(e, t, n, r) {
        if (!this._verifyLocalStorage(e))
            return !1;
        var i = new Date
          , s = store.safeGet(e) || "";
        if (!s || i - new Date(s) > 15e3)
            this.on(n),
            this.start(),
            store.safeSet(e + "-websocketUrl", t);
        this._keepTrackOfHeartbeat(e, n, t),
        window.addEventListener("storage", r)
    },
    _writeHeartbeat: function(e, t, n) {
        store.safeSet(e, new Date);
        var r = setInterval(function() {
            var i = new Date
              , s = store.safeGet(e);
            store.safeGet(e + "-websocketUrl") !== n && !!s && i - new Date(s) < 5e3 && (this._maximumRetries = 0,
            this._socket.close(),
            clearInterval(r),
            this._watchHeartbeat(e, t, n)),
            store.safeSet(e, new Date)
        }
        .bind(this), 5e3)
    },
    _watchHeartbeat: function(e, t, n) {
        var r = setInterval(function() {
            var i = new Date
              , s = store.safeGet(e) || "";
            if (!s || i - new Date(s) > 15e3)
                this.on(t),
                this.start(),
                store.safeSet(e + "-websocketUrl", n),
                clearInterval(r),
                this._writeHeartbeat(e, t, n)
        }
        .bind(this), 15e3)
    },
    _keepTrackOfHeartbeat: function(e, t, n) {
        store.safeGet(e + "-websocketUrl") === n ? this._writeHeartbeat(e, t, n) : this._watchHeartbeat(e, t, n)
    }*/
}),
!function(e, t, n, r) {
    "use strict";
    var i = e.liveupdate = {}
      , s = function(e) {
        this._permissions = e
    };
    r.extend(s.prototype, {
        isSuperUser: function() {
            return !!this._permissions.all
        },
        allow: function(e) {
            return this.isSuperUser() ? !0 : r.has(this._permissions, e)
        }
    });
    var o = i.LiveUpdateAppBase = function() {
        this.permissions = new s(e.config.liveupdate_permissions),
        this.listing = new e.liveupdate.listings.LiveUpdateListing,
        this.listingView = new e.liveupdate.listings.LiveUpdateListingView({
            model: this.listing,
            permissions: this.permissions
        }),
        this.listing.fetch({
            reset: !0
        }),
        this.embedViewer = new e.liveupdate.embeds.EmbedViewer({
            model: this.listing,
            el: this.listingView.el
        }),
        this.embedViewer.start()
    }
    ;
    i.LiveUpdateApp = function() {
        var t = n(".content > header"), r = n('<div id="liveupdate-options">'), i;
        o.call(this),
        this.event = new e.liveupdate.event.LiveUpdateEvent,
        this.eventView = new e.liveupdate.event.LiveUpdateEventView({
            model: this.event
        }),
        this.statusBarView = new e.liveupdate.statusBar.StatusBarView({
            model: this.event,
            el: n("#liveupdate-statusbar")
        }),
        this.event.fetch(),
        i = this.event.get("websocket_url"),
        i && (this.websocket = new e.WebSocket(i),
        this.websocket.on({
            connecting: function() {
                this.event.set("socket_state", "connecting")
            },
            connected: function() {
                this.event.set("socket_state", "connected")
            },
            disconnected: function() {
                this.event.set("socket_state", "disconnected")
            },
            reconnecting: function(e) {
                this.event.set({
                    socket_state: "reconnecting",
                    reconnect_delay: e
                })
            },
            "message:activity": function(e) {
                this.event.set({
                    viewer_count: e.count,
                    viewer_count_fuzzed: e.fuzzed,
                    total_views: e.total_views
                })
            },
            "message:settings": function(e) {
                this.event.set(e)
            },
            "message:update": function(t) {
			console.log('starting this func: ' + Date.now());
                var n = e.liveupdate.listings.LiveUpdate.prototype.parse(t);
				console.log('variable added: ' + Date.now());
                this.listing.add(n, {
                    at: 0
                })
				console.log('added post: ' + Date.now());
            },
            "message:delete": function(e) {
                this.listing.remove(e)
            },
            "message:strike": function(e) {
                var t = this.listing.get(e);
                t.set("stricken", !0)
            },
            "message:embeds_ready": function(e) {
                var t = this.listing.get(e.liveupdate_id);
                t.set("embeds", e.media_embeds),
                this.embedViewer.restart()
            },
            "message:hide_discussion": function(t) {
                n("#discussion-" + t.link_id).remove(),
                n("#discussions div").length === 0 && n("<p>").text(e._("no discussions yet.")).appendTo("#discussions")
            },
            "message:complete": function() {
                this.event.set("state", "complete"),
                r.remove(),
                n("#new-update-form").remove()
            }
        }, this),
        "Notification"in window && !n("body").hasClass("embed") && (this.desktopNotifier = new e.liveupdate.notifications.DesktopNotifier({
            model: this.listing
        }),
        this.desktopNotifier.render(),
        n("<label>").text(e._("popup notifications")).prepend(this.desktopNotifier.$el).appendTo(r)),
        this.websocket.start()),
        this.activityTracker = new e.liveupdate.activity.ActivityTracker,
        this.faviconUpdater = new e.liveupdate.favicon.UnreadUpdateCounter({
            model: this.listing
        }),
        r.insertAfter(t),
        this.reportForm = new e.liveupdate.report.ReportForm
    }
}(r, Backbone, jQuery, _),
$(function() {
    "use strict";
    var e = $("body");
    e.hasClass("liveupdate-app") ? r.liveupdate.app = new r.liveupdate.LiveUpdateApp : e.hasClass("liveupdate-focus") && (r.liveupdate.app = new r.liveupdate.LiveUpdateAppBase),
    $(".sidebar-expand").on("click", function(e) {
        var t = $(this)
          , n = t.data("toggle")
          , r = t.text();
        t.text(n).data("toggle", r).parent().toggleClass("sidebar-expanded")
    })
}),
!function(e, t, n, r) {
    "use strict";
    var i = e.liveupdate.activity = {}
      , s = 6e5;
    i.ActivityTracker = t.View.extend({
        initialize: function() {
            this.reportsSent = 0,
            this.reportPending = !1,
            n(document).on("visibilitychange", n.proxy(this.onVisibilityChange, this)),
            this.reportActivity()
        },
        onVisibilityChange: function() {
            !document.hidden && this.reportPending && this.reportActivity()
        },
        reportActivity: function() {
            if (document.hidden) {
                this.reportPending = !0;
                return
            }
            var t, n;
            this.reportsSent > 0 && window._gaq && _gaq.push(["_trackEvent", "Heartbeat", "Heartbeat", "", 0, !0]),
            t = new Image,
            t.src = "//" + e.config.liveupdate_pixel_domain + "/live/" + e.config.liveupdate_event + "/pixel.png" + "?rand=" + Math.random(),
            this.reportsSent += 1,
            this.reportPending = !1,
            n = Math.floor(s - s * Math.random() / 2),
            setTimeout(r.bind(this.reportActivity, this), n)
        }
    })
}(r, Backbone, jQuery, _),
!function(e, t, n, r) {
    "use strict";
    var i = e.liveupdate.embeds = {};
    i.EmbedViewer = e.ScrollUpdater.extend({
        selector: ".pending-embed",
        initialize: function() {
            this._embedBase = "//" + e.config.media_domain + "/mediaembed/liveupdate/" + e.config.liveupdate_event,
            this.listenTo(this.model, "add", this.restart),
            e.ScrollUpdater.prototype.initialize.apply(this, arguments)
        },
        _listen: function() {
            n(window).on("message", n.proxy(this, "_handleMessage")),
            e.ScrollUpdater.prototype._listen.apply(this, arguments)
        },
        update: function(t) {
            var i = t.data("fullname")
              , s = this.model.get(i).get("embeds");
            if (!t.hasClass("pending-embed"))
                return;
            t.removeClass("pending-embed"),
            r.each(s, function(r, s) {
                var o = t.find("p").has('a[href="' + r.url + '"]').filter(function() {
                    return n(this).contents().length === 1
                })
                  , u = this._embedBase + "/" + i + "/" + s
                  , a = n("<iframe>").attr({
                    "class": "embedFrame",
                    id: "embed-" + i + "-" + s,
                    src: u,
                    height: r.height || 200,
                    sandbox: "allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups allow-popups-to-escape-sandbox allow-orientation-lock allow-presentation",
                    scrolling: "no",
                    frameborder: 0,
                    allowfullscreen: !0
                });
                e.debug("Rendering embed for link: ", r.url),
                o.replaceWith(a)
            }, this)
        },
        _handleMessage: function(t) {
            var r = t.originalEvent;
            if (r.origin.replace(/^https?:\/\//, "") !== e.config.media_domain)
                return !1;
            var i;
            try {
                i = JSON.parse(r.data)
            } catch (t) {
                return !1
            }
            if (typeof i.updateId == "undefined" || typeof i.embedIndex == "undefined")
                return !1;
            var s = n("#embed-LiveUpdate_" + i.updateId + "-" + i.embedIndex);
            i.action === "dimensionsChange" && s.attr({
                height: i.height
            })
        }
    })
}(r, Backbone, jQuery, _),
!function(e, t, n) {
    "use strict";
    var r = e.liveupdate.event = {};
    r.LiveUpdateEvent = t.Model.extend({
        defaults: {
            socket_state: "connecting"
        },
        url: function() {
            return "/live/" + e.config.liveupdate_event + "/about.json"
        },
        parse: function(e) {
            return e.data
        }
    }),
    r.LiveUpdateEventView = t.View.extend({
        initialize: function() {
            this.$titleEl = n("#liveupdate-title"),
            this.$descriptionEl = n("#liveupdate-description"),
            this.$resourcesEl = n("#liveupdate-resources"),
            this.$descriptionEl.length || (this.$descriptionEl = n('<div id="liveupdate-description">')),
            this.$resourcesEl.length || (this.$resourcesEl = n('<section id="liveupdate-resources">'),
            this.$resourcesEl.append(n("<h2>" + e._("resources") + "</h2>"))),
            this.listenTo(this.model, {
                "change:title": this.renderTitle,
                "change:description_html": this.renderDescription,
                "change:resources_html": this.renderResources
            })
        },
        renderTitle: function() {
            this.$titleEl.text(this.model.get("title"))
        },
        renderDescription: function() {
            var e = this.model.get("description_html");
            if (!e) {
                this.$descriptionEl.remove();
                return
            }
            this.$descriptionEl.html(e).insertAfter(this.$titleEl)
        },
        renderResources: function() {
            var e = this.model.get("resources_html"), t;
            if (!e) {
                this.$resourcesEl.remove();
                return
            }
            this.$resourcesEl.find(".md").replaceWith(n.parseHTML(e)),
            this.$resourcesEl.insertAfter(".sidebar-expand")
        }
    })
}(r, Backbone, jQuery),
!function(e, t, n, r) {
    "use strict";
    var i = e.liveupdate.favicon = {}
      , s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/1BMVEUpLzY+PDpGSk5HR0dKTlNSW2VTXGVVXmdWWl5bYWZdZGtfanVfbHpgXVtianNjbXhkZWdkam1lcX1nc4BpdYJqa2xscHZucHJueYRvfoxwfIhxcG93e4B3h5h4iJh5ipt7gIB8ipl+fn6BgYGImKOJh4aKjY2Mna6NobSOn7CQo7iar8Wfnp2juM6lo6Gmuc6mu8moqaqsw9etwcmurq6vrauxyN2xyN+0s7K+u7m/1u7C2vPF3fbI4PrJ4fvJ4/7Ly8vPzMnP6P7S0tLT0c/W8P/Z19Xd9/7d+P7e3Nrw8PDz9vT69/T+EA/+MjD+pqT+srD+w8H+zsz+/v7///9fla50AAAAuElEQVR42l2P2RaBUBhGT0WZ54jIPM8h0zE7SBL97/8uYoXFvtwXe30fIn8ggn94i8XMGSkFQvmPwFXvwOe/OGyx3OJYF+OUq26LcS2LMs05Xj0bPY+QDFc6k1bOnRQ8PYLiKlXW4IlWptQ4QWlxCIZ+h7tuwFBME9RgAG5XE8zrDYBpWNEEfElY0RO7Aejvzrs+wIa1xFGmp7AuFoprmNLya4fC8aP9YT/iOeX9pS1Fg1GpbZ/74wFo2jf64C4agwAAAABJRU5ErkJggg==";
    i.UnreadUpdateCounter = t.View.extend({
        initialize: function() {
            this.unreadItemCount = 0,
            n.setOptions({
                background: "#ff4500"
            }),
            n.setImage(s),
            this.listenTo(this.model, "add", this.onUpdateAdded),
            r(document).on("visibilitychange", r.proxy(this.onVisibilityChange, this)),
            this.onVisibilityChange()
        },
        onUpdateAdded: function(e, t, r) {
            r.at === 0 && document.hidden && (this.unreadItemCount += 1,
            n.setBubble(this.unreadItemCount))
        },
        onVisibilityChange: function() {
            document.hidden || (n.setBubble(),
            this.unreadItemCount = 0)
        }
    })
}(r, Backbone, Tinycon, jQuery),
!function(e, t, n) {
    "use strict";
    var r = e.liveupdate.listings = {}
      , i = function(e) {
        return moment(e)
    }
      , s = function() {
        e.TimeText.apply(this, arguments)
    };
    _.extend(s.prototype, e.TimeText.prototype, {
        formatTime: function(t, n, r, s) {
            var o = n / 60 / 60 / 24;
            return o < 1 && !t.hasClass("absolute") ? e.TimeText.prototype.formatTime.apply(this, arguments) : (r = i(r),
            s = i(s),
            r.format("YYYY-MM-DD") == s.format("YYYY-MM-DD") ? r.format("LT") : o < 365 ? r.format("D MMM LT") : r.format("lll"))
        }
    });
    var o = r.LiveUpdate = t.Model.extend({
        parse: function(e) {
            return {
                id: e.data.name,
                date: e.data.created_utc * 1e3,
                author: e.data.author,
                stricken: e.data.stricken,
                body: e.data.body_html,
                embeds: e.data.embeds
            }
        },
        _sendRPC: function(t) {
            return e.ajax({
                type: "POST",
                dataType: "json",
                url: "/api/live/" + e.config.liveupdate_event + "/" + t,
                data: {
                    id: this.get("id")
                }
            })
        },
        strike: function() {
            return this._sendRPC("strike_update")
        },
        destroy: function() {
            return this._sendRPC("delete_update")
        }
    });
    r.LiveUpdateListing = t.Collection.extend({
        model: o,
        url: function() {
            return "/live/" + e.config.liveupdate_event + ".json"
        },
        initialize: function() {
            this._updatesFetched = 0,
            this.hasMoreToFetch = !0
        },
        fetchMore: function() {
            var e = this.last().get("id");
            return this.fetch({
                remove: !1,
                data: {
                    after: e,
                    count: this._updatesFetched
                }
            })
        },
        parse: function(e) {
            var t = e.data.children;
            return this._updatesFetched += t.length,
            this.hasMoreToFetch = !!e.data.after,
            t
        }
    });
    var u = r.LiveUpdateView = t.View.extend({
        tagName: "li",
        className: "liveupdate",
        events: {
            "confirm .strike": "onStrike",
            "confirm .delete": "onDelete"
        },
        initialize: function(e) {
            this.permissions = e.permissions,
            this.listenTo(this.model, {
                "change:stricken": this.onStrickenChange,
                "change:embeds": this.markPendingEmbeds
            })
        },
        addEditButtonsIfAllowed: function() {
            if (this.model.get("author") === e.config.logged || this.permissions.allow("edit")) {
                var t = n('<ul class="buttonrow">');
                this.model.get("stricken") || t.append(e.templates.make("liveupdate/edit-button", {
                    name: "strike",
                    label: e._("strike")
                })),
                t.append(e.templates.make("liveupdate/edit-button", {
                    name: "delete",
                    label: e._("delete")
                })),
                t.find("button").each(function(t, n) {
                    new e.ui.ConfirmButton({
                        el: n
                    })
                }),
                this.$el.append(t)
            }
            return this
        },
        onStrickenChange: function() {
            return this.$el.toggleClass("stricken", this.model.get("stricken")),
            this.model.get("stricken") && this.$el.find("button.strike").remove(),
            this
        },
        markPendingEmbeds: function() {
            this.$el.addClass("pending-embed")
        },
        renderFullTimestamp: function(e) {
            return e === undefined && (e = i(this.model.get("date"))),
            this.$el.find("time").attr("title", e.format("LLL Z")),
            this
        },
        render: function() {
            var t = i(this.model.get("date"));
            return this.$el.data("fullname", this.model.get("id")).html(e.templates.make("liveupdate/update", {
                id: this.model.get("id").replace(/^LiveUpdate_/, ""),
                eventId: e.config.liveupdate_event,
                body: this.model.get("body"),
                authorName: this.model.get("author"),
                isoDate: t.toISOString()
            })),
            this.addEditButtonsIfAllowed().renderFullTimestamp().onStrickenChange(),
            this.model.get("embeds") && this.markPendingEmbeds(),
            this
        },
        onStrike: function() {
            var t = this.$el.find(".strike.confirm-button");
            t.text(e._("striking…")),
            this.model.strike().done(function() {
                t.text(e._("stricken"))
            })
        },
        onDelete: function() {
            var t = this.$el.find(".strike.confirm-button");
            t.text(e._("deleting…")),
            this.model.destroy().done(function() {
                t.text(e._("deleted"))
            })
        }
    });
    r.LiveUpdateListingView = t.View.extend({
        el: ".liveupdate-listing",
        initialize: function(t) {
            this.permissions = t.permissions,
            this.timeText = new s({
                maxage: !1
            }),
            this.timeTextScrollListener = new e.ui.TimeTextScrollListener({
                el: this.el,
                timeText: this.timeText
            }),
            this.views = {},
            this.listenTo(this.model, {
                add: this.onAdd,
                remove: this.onRemove,
                reset: this.onReset
            }),
            n(window).on("scroll.liveupdateListing", n.proxy(this, "onScroll")),
            this.$el.siblings("nav.nextprev").remove()
        },
        onReset: function() {
            var e;
            this.model.each(function(t) {
                var n = this.$el.find(".id-" + t.id), r, i;
                r = new u({
                    el: n,
                    model: t,
                    permissions: this.permissions
                }),
                r.addEditButtonsIfAllowed().renderFullTimestamp(),
                e && (i = this.makeSeparator(t, e),
                i && n.before(i)),
                e = t,
                this.views[t.id] = r
            }, this),
            this.onScroll(),
            this.timeTextScrollListener.start()
        },
        onAdd: function(t, n, r) {
            var i = new u({
                model: t,
                permissions: this.permissions
            })
              , s = i.render().el;
            this.timeText.refreshOne(i.$("time.live-timestamp"));
            var o = this.model.indexOf(t), a = [s], f;
            if (r.at === 0) {
                var l = this.model.at(o + 1);
                f = this.makeSeparator(l, t),
                f && a.push(f),
                this.$el.prepend(a)
            } else {
                if (r.at !== undefined) {
                    e.error("wanted to insert update at arbitrary position");
                    return
                }
                var c = this.model.at(o - 1);
                f = this.makeSeparator(t, c),
                f && a.unshift(f),
                this.$el.append(a)
            }
            this.timeTextScrollListener.restart(),
            this.views[t.id] = i
        },
        makeSeparator: function(t, r) {
            if (!t || !r)
                return;
            var s = i(t.get("date")), o = i(r.get("date")), u, a;
            if (s.hour() !== o.hour())
                return u = o.minutes(0).seconds(0).milliseconds(0),
                a = n(n.parseHTML(e.templates.make("liveupdate/separator", {
                    isoDate: u.toISOString()
                }))),
                this.timeText.refreshOne(a.find("time.live-timestamp")),
                a.get(0)
        },
        onRemove: function(e) {
            var t = this.views[e.id];
            t.$el.nextUntil(".liveupdate").remove(),
            t.remove(),
            delete this.views[e.id]
        },
        onScroll: function() {
            if (this.fetchingMore && this.fetchingMore.state() === "pending")
                return;
            if (!this.model.hasMoreToFetch) {
                n(window).off("scroll.liveupdateListing");
                return
            }
            var t = this.$el.offset().top + this.$el.height()
              , r = t - window.innerHeight
              , i = n(window).scrollTop() + 250 >= r;
            i && (this.fetchingMore = this.model.fetchMore(),
            e.ui.showWorkingDeferred(this.$el, this.fetchingMore))
        }
    })
}(r, Backbone, jQuery),
!function(e, t, n, r, i) {
    "use strict";
    function u(e, t) {
        return e.length > t ? e.substring(0, t) + "…" : e
    }
    var s = e.liveupdate.notifications = {}
      , o = 10;
    s.DesktopNotifier = t.View.extend({
        tagName: "input",
        attributes: {
            type: "checkbox"
        },
        events: {
            change: "onSettingsChange"
        },
        initialize: function() {
            this.storageKey = "live." + e.config.liveupdate_event + ".notifications",
            this.requestingPermission = !1,
            Notification.permission === "granted" ? this.notificationsDesired = i.safeGet(this.storageKey) : this.notificationsDesired = !1,
            this.notifications = [],
            this.listenTo(this.model, "add", this.onNewUpdate),
            n(document).on("visibilitychange", n.proxy(this, "onVisibilityChange"))
        },
        shouldNotify: function() {
            return this.notificationsDesired && Notification.permission === "granted" && document.hidden
        },
        onNewUpdate: function(t, r, i) {
            if (i.at !== 0)
                return;
            if (!this.shouldNotify())
                return;
            if (t.get("author") === e.config.logged)
                return;
            var s = this
              , a = n("#liveupdate-title").text()
              , f = n(n.parseHTML(t.get("body"))).text()
              , l = new Notification(a,{
                body: u(f, 160),
                icon: e.utils.staticURL("liveupdate-notification-icon.png")
            });
            this.notifications.push(l),
            l.onclick = function(e) {
                window.focus(),
                e.preventDefault()
            }
            ,
            l.onclose = function(e) {
                var t = s.notifications.indexOf(e.target);
                s.notifications.splice(t, 1)
            }
            ,
            setTimeout(function() {
                l.close()
            }, o * 1e3)
        },
        onVisibilityChange: function() {
            document.hidden || this.clearNotifications()
        },
        onSettingsChange: function() {
            this.notificationsDesired = this.$el.prop("checked"),
            i.safeSet(this.storageKey, this.notificationsDesired),
            this.notificationsDesired && Notification.permission !== "granted" && this.requestPermission()
        },
        requestPermission: function() {
            this.requestingPermission = !0,
            Notification.requestPermission(r.bind(this.onPermissionChange, this)),
            this.render()
        },
        onPermissionChange: function() {
            this.requestingPermission = !1,
            this.render()
        },
        clearNotifications: function() {
            r.invoke(this.notifications, "close")
        },
        render: function() {
            return this.$el.prop("disabled", this.requestingPermission || Notification.permission === "denied").prop("checked", this.notificationsDesired),
            this
        }
    })
}(r, Backbone, jQuery, _, store),
!function(e, t, n, r) {
    "use strict";
    function o(t) {
        var n = e.P_("%(num)s total view", "%(num)s total views", t);
		console.log(n);
        if (t < 999)
            var r = t;
        else if (t <= 999999)
            var r = (t / 1e3).toFixed(1) + "k";
        else
            var r = (t / 1e6).toFixed(2) + "m";
        return n.format({
            num: r
        })
    }
    var i = e.liveupdate.statusBar = {}
      , s = function(e, t) {
        this._tickCallback = e,
        this._deadline = Date.now() + t,
        this._interval = setInterval(r.bind(this._onTick, this), 1e3),
        this._onTick()
    };
    r.extend(s.prototype, {
        cancel: function() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        },
        _onTick: function() {
            var e = this._deadline - Date.now()
              , t = Math.round(e / 1e3);
            t >= 1 ? this._tickCallback(t) : this.cancel()
        }
    }),
    i.StatusBarView = t.View.extend({
        tagName: "div",
        className: "status-bar",
        initialize: function() {
            this.listenTo(this.model, {
                "change:state change:delay_remaining": this.renderState,
                "change:socket_state": this.onSocketStateChange,
                "change:state change:viewer_count change:total_views": this.renderViewerCount
            })
        },
        _stateText: function() {
            var t;
            switch (this.model.get("state")) {
            case "complete":
                return {
                    text: e._("no further updates")
                };
            case "live":
                switch (this.model.get("socket_state")) {
                case "connecting":
                    return {
                        text: e._("connecting"),
                        titleText: e._("connecting to update server")
                    };
                case "connected":
                    return {
                        text: e._("live"),
                        titleText: e._("updating in real time")
                    };
                case "disconnected":
                    return {
                        text: e._("could not connect to update servers. please refresh")
                    };
                case "reconnecting":
                    return t = this.model.get("delay_remaining"),
                    {
                        text: e.P_("disconnected. retrying in %(delay)s second...", "disconnected. retrying in %(delay)s seconds...", t).format({
                            delay: t
                        })
                    }
                }
            }
        },
        onSocketStateChange: function() {
            var e = this
              , t = this.model.get("socket_state");
            t === "reconnecting" ? this._reconnectCountdown = new s(function(t) {
                e.model.set("delay_remaining", t)
            }
            ,this.model.get("reconnect_delay")) : (this._reconnectCountdown && (this._reconnectCountdown.cancel(),
            this._reconnectCountdown = null),
            this.renderState())
        },
        renderState: function() {
            var e = [this.className, this.model.get("state"), this.model.get("socket_state")]
              , t = this.$(".state")
              , n = this._stateText();
            return this.$el.attr("class", e.join(" ")),
            t.text(n.text).attr("title", n.titleText || ""),
            this
        },
        renderViewerCount: function() {
            var t = this.$viewerCount || n('<p class="viewer-count">')
              , r = this.model.get("total_views");
            if (this.model.get("state") == "live") {
                var i = this.model.get("viewer_count")
                  , s = e.P_("%(num)s viewer", "%(num)s viewers", i);
                t.text(s.format({
                    num: i
                })),
                r && t.attr("title", o(r))
            } else {
                if (!r) {
                    t.remove();
                    return
                }
                t.text(o(r)).removeAttr("title")
            }
            return this.$viewerCount || (this.$viewerCount = t,
            this.$el.append(t)),
            this
        }
    })
}(r, Backbone, jQuery, _),
!function(e, t, n, r) {
    "use strict";
    var i = e.liveupdate.report = {};
    i.ReportForm = t.View.extend({
        el: "#report",
        events: {
            "click .report-button": "onOpen",
            "click .cancel": "onCancel",
            "confirm .admin": "onAdminAction",
            "change .report-type": "onReportTypeSelected",
            submit: "onSubmit"
        },
        initialize: function() {
            this.$button = this.$el.children(".report-button"),
            this.$form = this.$el.children("form"),
            this.$adminButton = this.$el.find("button.admin"),
            new e.ui.ConfirmButton({
                el: this.$adminButton
            })
        },
        _setFormVisibility: function(e) {
            this.$button.toggle(!e),
            this.$form.toggle(e)
        },
        onOpen: function() {
            this._setFormVisibility(!0)
        },
        onCancel: function(e) {
            this._setFormVisibility(!1),
            e.preventDefault()
        },
        onReportTypeSelected: function() {
            this.$("[type=submit]").prop("disabled", !1)
        },
        onSubmit: function(t) {
            var n = this
              , r = this.$el.find("input[type=radio]:checked")
              , i = r.val()
              , s = r.parent().text();
            this.$el.text(e._("submitting report…")),
            e.ajax({
                type: "POST",
                dataType: "json",
                url: "/api/live/" + e.config.liveupdate_event + "/report",
                data: {
                    type: i
                }
            }).then(function() {
                n.$el.html(e.templates.make("liveupdate/reported", {
                    text: e._("you reported this live thread for: %(violation)s").format({
                        violation: s
                    })
                }))
            }),
            t.preventDefault()
        },
        onAdminAction: function() {
            s(this.$adminButton, e.config.liveupdate_event).then(function() {
                window.location.reload()
            })
        }
    });
    var s = function(t, n) {
        var r = t.data("action")
          , i = "/api/live/" + n + "/" + r;
        return e.ajax({
            type: "POST",
            url: i
        })
    };
    n("#siteTable .liveupdate-event button.admin").each(function() {
        new e.ui.ConfirmButton({
            el: n(this)
        })
    }),
    n("#siteTable .liveupdate-event .admin").on("confirm", function() {
        var e = n(this)
          , t = n(this).children("button");
        s(t, t.data("threadid")).success(function() {
            e.text("success")
        }).error(function() {
            e.text("fail")
        })
    })
}(r, Backbone, jQuery, _),
r.templates.set([{
    style: "html",
    name: "liveupdate/update",
    template: '<a href="/live/<%- thing.eventId %>/updates/<%- thing.id %>" target="_blank"><time class="live-timestamp" datetime="<%- thing.isoDate %>"></time></a>\n\n<div class="body">\n  <%= thing.body %>\n  <% if (typeof(thing.authorName) !== \'null\') { %>\n  <a href="/user/<%- thing.authorName %>" class="author">/u/<%- thing.authorName %></a>\n  <% } %>\n</div>\n'
}]),
r.templates.set([{
    style: "html",
    name: "liveupdate/separator",
    template: '<li class="separator">\n  <time class="live-timestamp absolute" datetime="<%- thing.isoDate %>"></time>\n</li>\n'
}]),
r.templates.set([{
    style: "html",
    name: "liveupdate/edit-button",
    template: '<li><button class="<%- thing.name %>"><%- thing.label %></button></li>\n'
}]),
console.log('its set');
r.templates.set([{
    style: "html",
    name: "liveupdate/reported",
    template: '<p class="already-reported"><%- thing.text %></p>\n'
}])
;
