(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  12360,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(64723);
    e.s([
      "default",
      0,
      function () {
        let [e, a] = (0, r.useState)(!1),
          [o, l] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = !1,
            t = [];
          window.__bbLoaderT0 || (window.__bbLoaderT0 = Date.now());
          let r = window.__bbLoaderT0,
            n = () => {
              e ||
                t.push(
                  setTimeout(() => {
                    e || a(!0);
                  }, Math.max(0, 900 - (Date.now() - r)))
                );
            },
            o = "u" > typeof document ? document.fonts : null;
          return (
            o && "function" == typeof o.ready?.then ? o.ready.then(n, n) : n(),
            t.push(
              setTimeout(() => {
                e || a(!0);
              }, 4e3)
            ),
            () => {
              (e = !0), t.forEach(clearTimeout);
            }
          );
        }, []);
        let u = (0, r.useCallback)(() => l(!0), []);
        return o
          ? null
          : (0, t.jsx)(n.default, {
              active: !0,
              finale: e,
              outro: !0,
              onDone: u,
              label: "Loading",
            });
      },
    ]);
  },
  64723,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(86687);
    let a = [0.902, 0.761, 1],
      o = [
        (0, n.assetPath)("/loader/loader-image1.svg"),
        (0, n.assetPath)("/loader/loader-image2.svg"),
        (0, n.assetPath)("/loader/loader-image3.svg"),
        (0, n.assetPath)("/loader/loader-image4.svg"),
        (0, n.assetPath)("/loader/loader-image5.svg"),
        (0, n.assetPath)("/loader/loader-image6.svg"),
        (0, n.assetPath)("/loader/loader-image7.svg"),
        (0, n.assetPath)("/loader/loader-image8.svg"),
        (0, n.assetPath)("/loader/loader-image9.svg"),
      ],
      l = (o.length - (16 % o.length)) % o.length,
      u = [0, 1, 2];
    function i() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    let s = { animation: "none" },
      d = { opacity: 1, animation: "none", filter: "none", transform: "none" },
      c = {
        ...d,
        transform: "scale(1.12)",
        transition: "transform 110ms cubic-bezier(.22, 1, .36, 1)",
      },
      f = { ...c, transform: "scale(1)" },
      m = { animation: "none", opacity: 0, pointerEvents: "none" };
    e.s(
      [
        "default",
        0,
        function ({
          active: e = !0,
          label: n = "Loading",
          finale: p = !1,
          outro: h = !1,
          onDone: g,
        }) {
          let [b, v] = (0, r.useState)(() =>
              u.map((e) => ({ layers: [e, e], on: 0, leaving: null }))
            ),
            y = (0, r.useRef)(0),
            _ = (0, r.useRef)(0),
            P = (0, r.useRef)(u.slice()),
            x = (0, r.useRef)(!1),
            [j, T] = (0, r.useState)(!1),
            [C, S] = (0, r.useState)(null),
            [O, R] = (0, r.useState)(0),
            [E, A] = (0, r.useState)(0),
            [M, N] = (0, r.useState)(!1);
          return ((0, r.useEffect)(() => {
            if (!e || p) return;
            let t = setInterval(() => {
              let e = y.current % 3;
              y.current += 1;
              let t = P.current,
                r = (function (e, t) {
                  let r = e[t];
                  for (let n = 1; n <= o.length; n += 1) {
                    let a = (r + n) % o.length;
                    if (!e.some((e, r) => r !== t && e === a)) return a;
                  }
                  return r;
                })(t, e);
              t.some((t, n) => (n === e ? 0 === r : 0 === t))
                ? (_.current = 0)
                : ((_.current += 1),
                  _.current >= 2 && ((r = 0), (_.current = 0))),
                (t[e] = r),
                v((t) => {
                  let n = t.slice(),
                    a = 1 - t[e].on,
                    o = t[e].layers.slice();
                  return (
                    (o[a] = r),
                    (n[e] = { layers: o, on: a, leaving: t[e].on }),
                    n
                  );
                });
            }, 300);
            return () => clearInterval(t);
          }, [e, p]),
          (0, r.useEffect)(() => {
            if (!p) return;
            let e = 0,
              t = !1,
              r = [],
              n = null,
              u = () => {
                if (!t) {
                  if (!h) return void g?.();
                  n = (function (e) {
                    var t = e.zIndex,
                      r = e.onCovered || function () {},
                      n = e.onDone || function () {},
                      o = e.color || a,
                      l = e.duration || 2200,
                      u = !1;
                    try {
                      u = window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                      ).matches;
                    } catch (e) {}
                    var i = document.createElement("canvas"),
                      s = null,
                      d = null,
                      c = {};
                    if (
                      (i.setAttribute("aria-hidden", "true"),
                      (i.className = "bb-outro"),
                      (i.style.cssText =
                        "position:fixed;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:" +
                        t),
                      !u)
                    )
                      try {
                        if (
                          (s = i.getContext("webgl", {
                            alpha: !0,
                            premultipliedAlpha: !1,
                            antialias: !1,
                            depth: !1,
                            stencil: !1,
                          }))
                        ) {
                          var f = function (e, t) {
                            var r = s.createShader(e);
                            if (
                              (s.shaderSource(r, t),
                              s.compileShader(r),
                              !s.getShaderParameter(r, s.COMPILE_STATUS))
                            )
                              throw Error(s.getShaderInfoLog(r));
                            return r;
                          };
                          if (
                            ((d = s.createProgram()),
                            s.attachShader(
                              d,
                              f(
                                s.VERTEX_SHADER,
                                "attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}"
                              )
                            ),
                            s.attachShader(
                              d,
                              f(
                                s.FRAGMENT_SHADER,
                                "precision highp float;uniform float time;uniform float uProgress;uniform vec2 iResolution;uniform vec3 color;float random(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}float noise(vec2 p){vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(random(ip),random(ip+vec2(1.0,0.0)),u.x),mix(random(ip+vec2(0.0,1.0)),random(ip+vec2(1.0,1.0)),u.x),u.y);return res*res;}float fbm(vec2 p,int octaves){float n=0.0;float a=1.0;float norm=0.0;for(int i=0;i<20;++i){if(i>=octaves)break;n+=noise(p)*a;norm+=a;p*=2.0;a*=0.5;}return n/norm;}void main(){vec2 uv=gl_FragCoord.xy/iResolution.xy-0.5;uv.y*=iResolution.y/iResolution.x;vec2 p=vec2(fbm(vec2(uv.x+time*0.05,uv.y)*15.0,2)*0.5);float t=max(pow(uProgress,2.4),0.002);float l=dot(uv/t,uv/t);l-=(fbm(normalize(uv+vec2(1e-4))*2.0,20)-0.5)*1.4;float ink=fbm(p*4.0,2)+1.5-l+uProgress;float alpha=max(clamp(-ink,0.0,1.0),1.0-smoothstep(0.0,0.06,uProgress));vec3 rgb=vec3(smoothstep(0.9,ink,0.01))*color;gl_FragColor=vec4(rgb,alpha);}"
                              )
                            ),
                            s.linkProgram(d),
                            !s.getProgramParameter(d, s.LINK_STATUS))
                          )
                            throw Error(s.getProgramInfoLog(d));
                          s.useProgram(d);
                          var m = s.createBuffer();
                          s.bindBuffer(s.ARRAY_BUFFER, m),
                            s.bufferData(
                              s.ARRAY_BUFFER,
                              new Float32Array([-1, -1, 3, -1, -1, 3]),
                              s.STATIC_DRAW
                            );
                          var p = s.getAttribLocation(d, "position");
                          s.enableVertexAttribArray(p),
                            s.vertexAttribPointer(p, 2, s.FLOAT, !1, 0, 0),
                            [
                              "time",
                              "uProgress",
                              "iResolution",
                              "color",
                            ].forEach(function (e) {
                              c[e] = s.getUniformLocation(d, e);
                            }),
                            s.uniform3f(c.color, o[0], o[1], o[2]),
                            s.disable(s.DEPTH_TEST),
                            s.disable(s.BLEND);
                        }
                      } catch (e) {
                        s = null;
                      }
                    var h = !1,
                      g = 0,
                      b = 0;
                    function v(e, t) {
                      var r, n, a;
                      (r = Math.min(window.devicePixelRatio || 1, 1)),
                        (n = Math.max(1, Math.round(window.innerWidth * r))),
                        (a = Math.max(1, Math.round(window.innerHeight * r))),
                        (i.width !== n || i.height !== a) &&
                          ((i.width = n),
                          (i.height = a),
                          s.viewport(0, 0, n, a),
                          s.uniform2f(c.iResolution, n, a)),
                        s.uniform1f(c.uProgress, e),
                        s.uniform1f(c.time, t),
                        s.drawArrays(s.TRIANGLES, 0, 3);
                    }
                    function y() {
                      h ||
                        ((h = !0),
                        i.parentNode && i.parentNode.removeChild(i),
                        n());
                    }
                    return (
                      s
                        ? (document.body.appendChild(i),
                          v(0, 0),
                          (g = requestAnimationFrame(function () {
                            h ||
                              (r(),
                              (function e(t) {
                                if (!h) {
                                  var r = Math.min(1, (t - b) / l);
                                  if ((v(r, (t - b) / 1e3), r >= 1)) return y();
                                  g = requestAnimationFrame(e);
                                }
                              })((b = performance.now())));
                          })))
                        : ((i.style.background = "#000"),
                          (i.style.transition =
                            "opacity .35s cubic-bezier(.2,.8,.2,1)"),
                          document.body.appendChild(i),
                          (g = requestAnimationFrame(function () {
                            h ||
                              (r(),
                              (g = requestAnimationFrame(function () {
                                h ||
                                  ((i.style.opacity = "0"), setTimeout(y, 400));
                              })));
                          }))),
                      function () {
                        (h = !0),
                          cancelAnimationFrame(g),
                          i.parentNode && i.parentNode.removeChild(i);
                      }
                    );
                  })({
                    zIndex: 1002,
                    onCovered: () => N(!0),
                    onDone: () => {
                      (n = null), t || g?.();
                    },
                  });
                }
              },
              s = () => {
                if (t) return;
                let e = i(),
                  n = 110 * !e;
                for (let e = 0; e < 3; e += 1)
                  r.push(
                    setTimeout(() => {
                      t || A(e + 1);
                    }, n * e)
                  );
                r.push(setTimeout(u, 2 * n + (e ? 200 : 260) + 40));
              };
            if (i()) S(0), (e = setTimeout(s, 400));
            else {
              let r = 0,
                n = l,
                a = () => {
                  if (!t) {
                    if ((S((n = (n + 1) % o.length)), (r += 1) >= 16)) {
                      S(0),
                        R(1),
                        (e = setTimeout(() => {
                          t || (R(2), (e = setTimeout(s, 240)));
                        }, 110));
                      return;
                    }
                    e = setTimeout(a, 30 * 1.11 ** r);
                  }
                };
              a();
            }
            return () => {
              (t = !0), clearTimeout(e), r.forEach(clearTimeout), n?.();
            };
          }, [p, h, g]),
          (0, r.useEffect)(() => {
            if (e) {
              (x.current = !0), T(!1);
              return;
            }
            if (!x.current) return;
            T(!0);
            let t = setTimeout(() => T(!1), 350);
            return () => clearTimeout(t);
          }, [e]),
          e || j)
            ? (0, t.jsx)("div", {
                className: `page-loader${j ? " is-out" : ""}`,
                "data-testid": "page-loader",
                role: "status",
                "aria-label": n,
                style: M ? m : void 0,
                children: (0, t.jsx)("div", {
                  className: "page-loader-row",
                  children: b.map((e, r) => {
                    let n = `page-loader-slot bb-ld-slot${
                      r < E ? " bb-ld-gone" : ""
                    }`;
                    return null !== C && 1 === r
                      ? (0, t.jsx)(
                          "div",
                          {
                            className: n,
                            style: s,
                            children: (0, t.jsx)("img", {
                              className: "page-loader-ico on",
                              "data-spin": "",
                              src: o[C],
                              alt: "",
                              width: 50,
                              height: 50,
                              draggable: "false",
                              style: 0 === O ? d : 1 === O ? c : f,
                            }),
                          },
                          r
                        )
                      : (0, t.jsx)(
                          "div",
                          {
                            className: n,
                            style: null === C ? void 0 : s,
                            children: e.layers.map((r, n) =>
                              (0, t.jsx)(
                                "img",
                                {
                                  className: `page-loader-ico${
                                    e.on === n ? " on" : ""
                                  }${e.leaving === n ? " leaving" : ""}`,
                                  src: o[r],
                                  alt: "",
                                  width: 50,
                                  height: 50,
                                  draggable: "false",
                                  style:
                                    null === C
                                      ? void 0
                                      : { ...d, opacity: +(e.on === n) },
                                },
                                n
                              )
                            ),
                          },
                          r
                        );
                  }),
                }),
              })
            : null;
        },
      ],
      64723
    );
  },
  86687,
  (e) => {
    "use strict";
    let t = "/dashboard",
      r = "0x1237",
      n = "Robinhood Chain",
      a = "https://robinhoodchain.blockscout.com",
      o = {
        symbol: "USDG",
        name: "Global Dollar",
        address: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
        decimals: 6,
        logo: "/logos/usdg.png",
      },
      l = [
        {
          key: "eth",
          symbol: "ETH",
          name: "Ether",
          native: !0,
          decimals: 18,
          logo: "/logos/eth.png",
        },
        {
          key: "usdg",
          symbol: o.symbol,
          name: o.name,
          address: o.address,
          decimals: o.decimals,
          logo: o.logo,
        },
        {
          key: "weth",
          symbol: "WETH",
          name: "Wrapped Ether",
          address: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
          decimals: 18,
          logo: "/logos/weth.png",
        },
        {
          key: "cbbtc",
          symbol: "cbBTC",
          name: "Coinbase Wrapped BTC",
          address: "0xCEC185eB182c47d1bA1EFc84e6959e18cd620Be4",
          decimals: 8,
          logo: "/logos/btc.png",
        },
        {
          key: "usde",
          symbol: "USDe",
          name: "USDe",
          address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
          decimals: 18,
          logo: "/logos/usde.png",
        },
      ];
    e.s([
      "ADD_CHAIN_PARAMS",
      0,
      {
        chainId: r,
        chainName: n,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://rpc.mainnet.chain.robinhood.com"],
        blockExplorerUrls: [a],
      },
      "BASE_PATH",
      0,
      t,
      "CHAIN_HEX",
      0,
      r,
      "CHAIN_ID",
      0,
      4663,
      "CHAIN_NAME",
      0,
      n,
      "LIMITS",
      0,
      { minDeposit: 500000n, minWithdraw: 500000n, withdrawFee: 30000n },
      "USDG",
      0,
      o,
      "WALLET_ASSETS",
      0,
      l,
      "apiPath",
      0,
      (e) => `${t}${e}`,
      "assetPath",
      0,
      function (e) {
        return "string" != typeof e ||
          !e ||
          !e.startsWith("/") ||
          e.startsWith("//") ||
          e.startsWith(`${t}/`)
          ? e
          : `${t}${e}`;
      },
      "explorerAddress",
      0,
      (e) => `${a}/address/${e}`,
      "explorerTx",
      0,
      (e) => `${a}/tx/${e}`,
    ]);
  },
  28298,
  (e, t, r) => {
    "use strict";
    e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(71645);
    function a(e, t, r) {
      let [a, o] = (0, n.useState)(() => ({
        tree: e,
        cacheNode: t,
        stateKey: r,
        next: null,
      }));
      if (a.tree === e) return a;
      let l = { tree: e, cacheNode: t, stateKey: r, next: null },
        u = 1,
        i = a,
        s = l;
      for (; null !== i && u < 1; ) {
        if (i.stateKey === r) {
          s.next = i.next;
          break;
        }
        {
          u++;
          let e = {
            tree: i.tree,
            cacheNode: i.cacheNode,
            stateKey: i.stateKey,
            next: null,
          };
          (s.next = e), (s = e);
        }
        i = i.next;
      }
      return o(l), l;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  47257,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(43476),
      a = e.r(8372),
      o = e.r(71645),
      l = e.r(33906),
      u = e.r(61994),
      i = e.r(42903);
    function s({ Component: e, serverProvidedParams: t }) {
      let r, d;
      if (null !== t) (r = t.searchParams), (d = t.params);
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        (d = null !== e ? e.parentParams : {}),
          (r = (0, l.urlSearchParamsToParsedUrlQuery)(
            (0, o.use)(u.SearchParamsContext)
          ));
      }
      let c = (0, i.createClientSearchParams)(r),
        f = (0, i.createClientParams)(d);
      return (0, n.jsx)(e, { params: f, searchParams: c });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  92825,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(43476),
      a = e.r(8372),
      o = e.r(71645),
      l = e.r(42903);
    function u({ Component: e, slots: t, serverProvidedParams: r }) {
      let i;
      if (null !== r) i = r.params;
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        i = null !== e ? e.parentParams : {};
      }
      let s = (0, l.createClientParams)(i);
      return (0, n.jsx)(e, { ...t, params: s });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  68017,
  (e, t, r) => {
    "use strict";
    e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function () {
          return d;
        },
      });
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      l = e.r(90373),
      u = e.r(54394),
      i = e.r(8372);
    class s extends o.default.Component {
      constructor(e) {
        super(e),
          (this.state = {
            triggeredStatus: void 0,
            previousPathname: e.pathname,
          });
      }
      componentDidCatch() {}
      static getDerivedStateFromError(e) {
        if ((0, u.isHTTPAccessFallbackError)(e))
          return { triggeredStatus: (0, u.getAccessFallbackHTTPStatus)(e) };
        throw e;
      }
      static getDerivedStateFromProps(e, t) {
        return e.pathname !== t.previousPathname && t.triggeredStatus
          ? { triggeredStatus: void 0, previousPathname: e.pathname }
          : {
              triggeredStatus: t.triggeredStatus,
              previousPathname: e.pathname,
            };
      }
      render() {
        let {
            notFound: e,
            forbidden: t,
            unauthorized: r,
            children: n,
          } = this.props,
          { triggeredStatus: o } = this.state,
          l = {
            [u.HTTPAccessErrorStatus.NOT_FOUND]: e,
            [u.HTTPAccessErrorStatus.FORBIDDEN]: t,
            [u.HTTPAccessErrorStatus.UNAUTHORIZED]: r,
          };
        if (o) {
          let i = o === u.HTTPAccessErrorStatus.NOT_FOUND && e,
            s = o === u.HTTPAccessErrorStatus.FORBIDDEN && t,
            d = o === u.HTTPAccessErrorStatus.UNAUTHORIZED && r;
          return i || s || d
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("meta", { name: "robots", content: "noindex" }),
                  !1,
                  l[o],
                ],
              })
            : n;
        }
        return n;
      }
    }
    function d({ notFound: e, forbidden: t, unauthorized: r, children: n }) {
      let u = (0, l.useUntrackedPathname)(),
        c = (0, o.useContext)(i.MissingSlotContext);
      return e || t || r
        ? (0, a.jsx)(s, {
            pathname: u,
            notFound: e,
            forbidden: t,
            unauthorized: r,
            missingSlots: c,
            children: n,
          })
        : (0, a.jsx)(a.Fragment, { children: n });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  22976,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return o;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return l;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return u;
      },
      SlotMarker: function () {
        return i;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = null,
      l = null,
      u = null,
      i = null;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  77694,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return o.InstantValidationBoundaryContext;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return o.PlaceValidationBoundaryBelowThisLevel;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return o.RenderValidationBoundaryAtThisLevel;
      },
      SlotMarker: function () {
        return o.SlotMarker;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(22976);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  39756,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      LoadingBoundaryProvider: function () {
        return C;
      },
      default: function () {
        return O;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(55682),
      l = e.r(90809),
      u = e.r(43476),
      i = l._(e.r(71645)),
      s = o._(e.r(74080)),
      d = e.r(8372),
      c = e.r(1244),
      f = e.r(72383),
      m = e.r(91915),
      p = e.r(58442),
      h = e.r(68017);
    e.r(77694);
    let g = e.r(70725),
      b = e.r(28298);
    e.r(74180);
    let v = e.r(61994),
      y = e.r(33906),
      _ = e.r(95871);
    s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function P(e, t, r) {
      let n = e.getClientRects();
      if (0 === n.length) return 0;
      let a = 1 / 0;
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.top < a && (a = t.top);
      }
      return a >= r() && a <= t ? 1 : 2;
    }
    i.default.Component;
    let x = function (e) {
      let t = i.default.useRef(null);
      return (
        (0, i.useLayoutEffect)(() => {
          let { focusAndScrollRef: r, cacheNode: n } = e,
            a = r.forceScroll ? r.scrollRef : n.scrollRef;
          if (null === a || !a.current) return;
          let o = null,
            l = r.hashFragment;
          if (l) {
            var u;
            if (
              null ===
              (o =
                "top" === (u = l)
                  ? document.body
                  : document.getElementById(u) ??
                    document.getElementsByName(u)[0] ??
                    null)
            ) {
              (a.current = !1),
                (r.onlyHashChange = !1),
                (r.hashFragment = null);
              return;
            }
          } else o = t.current;
          if (null === o) return;
          let i = !1;
          (0, m.disableSmoothScrollDuringRouteTransition)(
            () => {
              let e = document.documentElement,
                t = null,
                r = null,
                n = null,
                u = () => {
                  var r, a;
                  let o, l;
                  return (
                    null === n &&
                      ((r = e),
                      (a = t),
                      (n =
                        !Number.isFinite(
                          (l = Number.parseFloat(
                            (o = getComputedStyle(r).scrollPaddingTop)
                          ))
                        ) || l < 0
                          ? 0
                          : o.endsWith("px")
                          ? l
                          : o.endsWith("%")
                          ? (l / 100) * a
                          : 0)),
                    n
                  );
                };
              (l || ((t = e.clientHeight), 0 !== (r = P(o, t, u)))) &&
                (((i = !0), (a.current = !1), l)
                  ? o.scrollIntoView()
                  : 1 !== r &&
                    ((e.scrollTop = 0),
                    2 === P(o, t, u) && o.scrollIntoView()));
            },
            { dontForceLayout: !0, onlyHashChange: r.onlyHashChange }
          ),
            i && ((r.onlyHashChange = !1), (r.hashFragment = null));
        }, void 0),
        (0, u.jsx)(i.Fragment, { ref: t, children: e.children })
      );
    };
    function j({ children: e, cacheNode: t }) {
      let r = (0, i.useContext)(d.GlobalLayoutRouterContext);
      if (!r)
        throw Object.defineProperty(
          Error("invariant global layout router not mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E473", enumerable: !1, configurable: !0 }
        );
      return (0, u.jsx)(x, {
        focusAndScrollRef: r.focusAndScrollRef,
        cacheNode: t,
        children: e,
      });
    }
    function T({
      tree: e,
      segmentPath: t,
      debugNameContext: r,
      cacheNode: n,
      params: a,
      url: o,
      isActive: l,
    }) {
      let s,
        f = (0, i.useContext)(d.GlobalLayoutRouterContext);
      if (((0, i.useContext)(v.NavigationPromisesContext), !f))
        throw Object.defineProperty(
          Error("invariant global layout router not mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E473", enumerable: !1, configurable: !0 }
        );
      let m = null !== n ? n : (0, i.use)(c.unresolvedThenable),
        p = null !== m.prefetchRsc ? m.prefetchRsc : m.rsc,
        h = (0, i.useDeferredValue)(m.rsc, p);
      if ((0, _.isDeferredRsc)(h)) {
        let e = (0, i.use)(h);
        null === e && (0, i.use)(c.unresolvedThenable), (s = e);
      } else null === h && (0, i.use)(c.unresolvedThenable), (s = h);
      let g = s;
      return (0, u.jsx)(d.LayoutRouterContext.Provider, {
        value: {
          parentTree: e,
          parentCacheNode: m,
          parentSegmentPath: t,
          parentParams: a,
          parentLoadingData: null,
          debugNameContext: r,
          url: o,
          isActive: l,
        },
        children: g,
      });
    }
    function C({ loading: e, children: t }) {
      let r = (0, i.use)(d.LayoutRouterContext);
      return null === r
        ? t
        : (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
              parentTree: r.parentTree,
              parentCacheNode: r.parentCacheNode,
              parentSegmentPath: r.parentSegmentPath,
              parentParams: r.parentParams,
              parentLoadingData: e,
              debugNameContext: r.debugNameContext,
              url: r.url,
              isActive: r.isActive,
            },
            children: t,
          });
    }
    function S({ name: e, loading: t, children: r }) {
      if (null !== t) {
        let n = t[0],
          a = t[1],
          o = t[2];
        return (0, u.jsx)(i.Suspense, {
          name: e,
          fallback: (0, u.jsxs)(u.Fragment, { children: [a, o, n] }),
          children: r,
        });
      }
      return (0, u.jsx)(u.Fragment, { children: r });
    }
    function O({
      parallelRouterKey: e,
      error: t,
      errorStyles: r,
      errorScripts: n,
      templateStyles: a,
      templateScripts: o,
      template: l,
      notFound: s,
      forbidden: m,
      unauthorized: v,
      segmentViewBoundaries: _,
    }) {
      let P = (0, i.useContext)(d.LayoutRouterContext);
      if (!P)
        throw Object.defineProperty(
          Error("invariant expected layout router to be mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E56", enumerable: !1, configurable: !0 }
        );
      let {
          parentTree: x,
          parentCacheNode: C,
          parentSegmentPath: R,
          parentParams: E,
          parentLoadingData: A,
          url: M,
          isActive: N,
          debugNameContext: F,
        } = P,
        w = x[0],
        D = null === R ? [e] : R.concat([w, e]),
        B = x[1][e],
        L = C.slots;
      (void 0 === B || null === L) && (0, i.use)(c.unresolvedThenable);
      let H = B[0],
        I = L[e] ?? null,
        k = (0, g.createRouterCacheKey)(H, !0),
        U = (0, b.useRouterBFCache)(B, I, k),
        V = [];
      do {
        let e = U.tree,
          i = U.cacheNode,
          c = U.stateKey,
          g = e[0],
          b = E;
        if (Array.isArray(g)) {
          let e = g[0],
            t = g[1],
            r = g[2],
            n = (0, y.getParamValueFromCacheKey)(t, r);
          null !== n && (b = { ...E, [e]: n });
        }
        let _ = (function (e) {
            if ("/" === e) return "/";
            if ("string" == typeof e)
              if ("(__SLOT__)" === e) return;
              else return e + "/";
            return e[1] + "/";
          })(g),
          P = _ ?? F,
          x = void 0 === _ ? void 0 : F,
          C = (0, u.jsxs)(j, {
            cacheNode: i,
            children: [
              (0, u.jsx)(f.ErrorBoundary, {
                errorComponent: t,
                errorStyles: r,
                errorScripts: n,
                children: (0, u.jsx)(S, {
                  name: x,
                  loading: A,
                  children: (0, u.jsx)(h.HTTPAccessFallbackBoundary, {
                    notFound: s,
                    forbidden: m,
                    unauthorized: v,
                    children: (0, u.jsxs)(p.RedirectBoundary, {
                      children: [
                        (0, u.jsx)(T, {
                          url: M,
                          tree: e,
                          params: b,
                          cacheNode: i,
                          segmentPath: D,
                          debugNameContext: P,
                          isActive: N && c === k,
                        }),
                        null,
                      ],
                    }),
                  }),
                }),
              }),
              null,
            ],
          }),
          O = (0, u.jsxs)(
            d.TemplateContext.Provider,
            { value: C, children: [a, o, l] },
            c
          );
        V.push(O), (U = U.next);
      } while (null !== U);
      return V;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  37457,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      l = e.r(8372);
    function u() {
      let e = (0, o.useContext)(l.TemplateContext);
      return (0, a.jsx)(a.Fragment, { children: e });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  6831,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = new WeakMap();
    function a(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return n.set(e, r), r;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  97689,
  (e, t, r) => {
    "use strict";
    e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(6831).createRenderParamsFromClient;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  93504,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = new WeakMap();
    function a(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return n.set(e, r), r;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  66996,
  (e, t, r) => {
    "use strict";
    e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(93504).createRenderSearchParamsFromClient;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  42903,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      createClientParams: function () {
        return o.createRenderParamsFromClient;
      },
      createClientSearchParams: function () {
        return l.createRenderSearchParamsFromClient;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(97689),
      l = e.r(66996);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  27201,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(43476),
      a = () =>
        "u" > typeof window ? null : (0, n.jsx)("meta", { name: "«nxt-icon»" });
  },
  91915,
  (e, t, r) => {
    "use strict";
    function n(e, t = {}) {
      if (t.onlyHashChange) return void e();
      let r = document.documentElement;
      if ("smooth" !== r.dataset.scrollBehavior) return void e();
      let a = r.style.scrollBehavior;
      (r.style.scrollBehavior = "auto"),
        t.dontForceLayout || r.getClientRects(),
        e(),
        (r.style.scrollBehavior = a);
    }
    e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
]);
