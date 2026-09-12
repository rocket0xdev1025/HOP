(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  17587,
  (e) => {
    "use strict";
    var t = e.i(86687);
    function r(e, n = t.USDG.decimals) {
      let o = BigInt(e ?? 0),
        u = o < 0n,
        i = u ? -o : o,
        a = 10n ** BigInt(n),
        l = (i % a).toString().padStart(n, "0").replace(/0+$/, "");
      return `${u ? "-" : ""}${i / a}${l ? `.${l}` : ""}`;
    }
    function n(e, o = 2, u = t.USDG.decimals, { away: i = !1 } = {}) {
      let a = BigInt(e ?? 0),
        l = a < 0n,
        c = l ? -a : a,
        s = 10n ** BigInt(u - o),
        f = (c / s) * s,
        [p, d = ""] = r(i && f !== c ? f + s : f, u).split("."),
        h = BigInt(p).toLocaleString("en-US");
      return `${l ? "−" : ""}${h}${
        o > 0 ? "." + (d + "0".repeat(o)).slice(0, o) : ""
      }`;
    }
    e.s([
      "fmtBalance",
      0,
      function (e, t) {
        let n = r(e ?? 0n, t),
          [o, u = ""] = n.replace("-", "").split("."),
          i = n.startsWith("-") ? "−" : "",
          a = BigInt(o).toLocaleString("en-US");
        if ("0" !== o) {
          let e = u.slice(0, 4).replace(/0+$/, "");
          return `${i}${a}${e ? `.${e}` : ""}`;
        }
        let l = u.search(/[1-9]/);
        if (l < 0) return "0";
        let c = u.slice(0, l + 4).replace(/0+$/, "");
        return `${i}0.${c}`;
      },
      "fmtSigned",
      0,
      function (e, r = 2) {
        let o = BigInt(e ?? 0),
          u = o < 0n;
        return `${u ? "−" : "+"}${n(u ? -o : o, r, t.USDG.decimals, {
          away: u,
        })}`;
      },
      "fmtUnits",
      0,
      n,
      "fmtUsdg",
      0,
      (e, r = 2) => `${n(e, r)} ${t.USDG.symbol}`,
      "fromUnits",
      0,
      r,
      "toNumber",
      0,
      (e, n = t.USDG.decimals) => Number(r(e, n)),
      "toUnits",
      0,
      function (e, r = t.USDG.decimals) {
        let n = String(e ?? "").trim();
        if (n.length > 40 || !/^\d+(\.\d*)?$|^\.\d+$/.test(n)) return null;
        let [o = "0", u = ""] = n.split(".");
        if (u.length > r && /[1-9]/.test(u.slice(r))) return null;
        let i = (u + "0".repeat(r)).slice(0, r);
        return BigInt(o || "0") * 10n ** BigInt(r) + BigInt(i || "0");
      },
    ]);
  },
  22016,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      useLinkStatus: function () {
        return S;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(90809),
      i = e.r(43476),
      a = u._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      s = e.r(18581),
      f = e.r(18967),
      p = e.r(5550),
      d = e.r(88540),
      h = e.r(91949),
      g = e.r(73668),
      y = e.r(9396);
    function m(t) {
      var r;
      let n,
        o,
        u,
        [m, S] = (0, a.useOptimistic)(h.IDLE_LINK_STATUS),
        v = (0, a.useRef)(null),
        {
          href: P,
          as: $,
          children: E,
          prefetch: _ = null,
          passHref: O,
          replace: U,
          shallow: j,
          scroll: T,
          onClick: C,
          onMouseEnter: I,
          onTouchStart: R,
          legacyBehavior: N = !1,
          onNavigate: B,
          transitionTypes: L,
          ref: w,
          unstable_dynamicOnHover: x,
          ...A
        } = t;
      (n = E),
        N &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, i.jsx)("a", { children: n }));
      let M = a.default.useContext(c.AppRouterContext),
        D = !1 !== _,
        k = !1 === _ ? "none" : !0 === _ ? "full" : "auto",
        F =
          "none" !== k
            ? "auto" === k
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        K = "string" == typeof (r = $ || P) ? r : (0, l.formatUrl)(r);
      if (N) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let G = N ? o && "object" == typeof o && o.ref : w,
        z,
        W = a.default.useCallback(
          (e) => (
            null !== M &&
              (v.current = (0, h.mountLinkInstance)(e, K, M, F, D, S, z)),
            () => {
              v.current &&
                ((0, h.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, h.unmountPrefetchableInstance)(e);
            }
          ),
          [D, K, M, F, S, z]
        ),
        Q = {
          ref: (0, s.useMergedRef)(W, G),
          onClick(t) {
            N || "function" != typeof C || C(t),
              N &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !M ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, i, l, c = "none") {
                  if ("u" > typeof window) {
                    let s,
                      { nodeName: f } = t.currentTarget;
                    if (
                      ("A" === f.toUpperCase() &&
                        (((s = t.currentTarget.getAttribute("target")) &&
                          "_self" !== s) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, g.isLocalURL)(r)) {
                      o && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: p } = e.r(99781);
                    a.default.startTransition(() => {
                      p(
                        r,
                        o ? "replace" : "push",
                        !1 === u
                          ? d.ScrollBehavior.NoScroll
                          : d.ScrollBehavior.Default,
                        n.current,
                        l,
                        c
                      );
                    });
                  }
                })(t, K, v, U, T, B, L, k);
          },
          onMouseEnter(e) {
            N || "function" != typeof I || I(e),
              N &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              M && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === x);
          },
          onTouchStart: function (e) {
            N || "function" != typeof R || R(e),
              N &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              M && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === x);
          },
        };
      return (
        (0, f.isAbsoluteUrl)(K)
          ? (Q.href = K)
          : (N && !O && ("a" !== o.type || "href" in o.props)) ||
            (Q.href = (0, p.addBasePath)(K)),
        (u = N
          ? a.default.cloneElement(o, Q)
          : (0, i.jsx)("a", { ...A, ...Q, children: n })),
        (0, i.jsx)(b.Provider, { value: m, children: u })
      );
    }
    let b = (0, a.createContext)(h.IDLE_LINK_STATUS),
      S = () => (0, a.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = u(e, n)), t && (o.current = u(t, n));
        },
        [e, t]
      );
    }
    function u(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return m;
      },
      MiddlewareNotFoundError: function () {
        return P;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return S;
      },
      SP: function () {
        return g;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return u;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return s;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return p;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return d;
      },
      stringifyError: function () {
        return $;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && a.test(e);
      };
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function s() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function p(e) {
      return e.finished || e.headersSent;
    }
    function d(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && p(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let g = "u" > typeof performance,
      y =
        g &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class m extends Error {}
    class b extends Error {}
    class S extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class P extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function $(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(18967),
      o = e.r(52817);
    function u(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return u;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function u(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        a = e.hash || "",
        l = e.query || "",
        c = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(u.urlQueryToSearchParams(l)));
      let s = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
          : c || (c = ""),
        a && "#" !== a[0] && (a = "#" + a),
        s && "?" !== s[0] && (s = "?" + s),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (s = s.replace("#", "%23")),
        `${n}${c}${o}${s}${a}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return a(e);
    }
  },
]);
