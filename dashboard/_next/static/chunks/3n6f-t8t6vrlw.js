(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  65831,
  (e) => {
    "use strict";
    var t = e.i(43476),
      s = e.i(71645),
      l = e.i(22016),
      a = e.i(3769),
      r = e.i(86687),
      n = e.i(17587),
      i = e.i(72099),
      o = e.i(80729),
      c = e.i(46979),
      d = e.i(20187);
    let u = [
        { key: "live", label: "Live" },
        { key: "upcoming", label: "Upcoming" },
        { key: "settled", label: "Resolved" },
        { key: "all", label: "All" },
      ],
      m = [
        { key: "all", label: "All pools" },
        { key: "crypto", label: "Crypto" },
        { key: "meme", label: "Memes" },
        { key: "stock", label: "Stocks" },
        { key: "commodity", label: "Commodities" },
        { key: "rwa", label: "RWA" },
      ],
      p = {
        cryptos: "crypto",
        memes: "meme",
        memecoin: "meme",
        memecoins: "meme",
        stocks: "stock",
        equity: "stock",
        equities: "stock",
        commodities: "commodity",
        rwas: "rwa",
      };
    function h(e) {
      try {
        return BigInt(e ?? 0);
      } catch {
        return 0n;
      }
    }
    let f = (e) => ({ "--i": Math.min(e, 12) }),
      g = (e) => {
        let t = String(e ?? "")
          .trim()
          .toLowerCase();
        return p[t] ?? t;
      },
      x = (e) => e?.name === "AbortError";
    async function y(e, { signal: t } = {}) {
      let s = await fetch((0, r.apiPath)(e), {
          cache: "no-store",
          credentials: "same-origin",
          signal: t,
        }),
        l = await s.json().catch(() => ({}));
      if (!s.ok)
        throw Object.assign(Error(l.error ?? `request failed (${s.status})`), {
          status: s.status,
          code: l.code ?? null,
        });
      return l;
    }
    function j() {
      let e = (0, s.useRef)(0),
        t = (0, s.useRef)(null);
      return (
        (0, s.useEffect)(() => () => t.current?.abort(), []),
        (0, s.useCallback)(() => {
          t.current?.abort();
          let s = new AbortController();
          t.current = s;
          let l = (e.current += 1);
          return { signal: s.signal, fresh: () => l === e.current };
        }, [])
      );
    }
    function b({ testid: e, retryTestid: s, error: l, onRetry: a }) {
      return (0, t.jsxs)("div", {
        className: "panel pg-error",
        "data-testid": e,
        role: "alert",
        children: [
          (0, t.jsx)("p", {
            className: "pg-error-head",
            children: "Couldn't load — retrying",
          }),
          (0, t.jsx)("p", {
            className: "muted small",
            children: (0, o.copyFor)(l, l?.message),
          }),
          (0, t.jsx)("button", {
            type: "button",
            className: "ghost",
            onClick: a,
            "data-testid": s,
            children: "Retry",
          }),
        ],
      });
    }
    function N({ market: e, now: s, index: a }) {
      let r = C(e.price),
        o = (0, c.fmtLocalTime)(e.closes_at, { withDate: !0 });
      return (0, t.jsxs)(l.default, {
        href: `/pool/${e.id}`,
        className: "pool-card fade-up",
        style: f(a),
        "data-testid": "pool-card",
        "data-id": e.id,
        "data-symbol": e.symbol,
        "data-status": e.status,
        children: [
          (0, t.jsxs)("div", {
            className: "pool-card-top",
            children: [
              (0, t.jsx)(S, { market: e }),
              (0, t.jsx)(k, { status: e.status }),
            ],
          }),
          (0, t.jsxs)("h3", {
            className: "font-display",
            children: [
              e.symbol,
              " price at",
              " ",
              (0, t.jsx)("time", {
                dateTime: e.closes_at,
                title: o.utc,
                suppressHydrationWarning: !0,
                children: o.text,
              }),
            ],
          }),
          e.display_name
            ? (0, t.jsx)("p", {
                className: "pool-card-sub",
                children: e.display_name,
              })
            : null,
          e.price
            ? (0, t.jsxs)("p", {
                className: "pool-card-price",
                children: [
                  "now",
                  " ",
                  (0, t.jsx)(
                    "b",
                    { className: r.cls, children: (0, i.fmtPrice)(e.price) },
                    r.n
                  ),
                ],
              })
            : null,
          (0, t.jsxs)("div", {
            className: "pool-card-stats pg-stats-3",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("span", { children: "Participants" }),
                  (0, t.jsx)("b", { children: e.entries ?? 0 }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("span", { children: "Total staked" }),
                  (0, t.jsx)("b", { children: (0, n.fmtUsdg)(h(e.pooled)) }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("span", { children: v(e.status) }),
                  (0, t.jsx)("b", {
                    className: "font-mono",
                    children: (function (e, t) {
                      if ("resolved" === e.status) return "Settled";
                      if ("void" === e.status) return "Voided";
                      if ("closed" === e.status) return "Settling…";
                      let s = "scheduled" === e.status,
                        l =
                          new Date(s ? e.opens_at : e.closes_at).getTime() - t;
                      return l <= 0
                        ? s
                          ? "Opening…"
                          : "Settling…"
                        : (0, c.humanize)(l);
                    })(e, s),
                  }),
                ],
              }),
            ],
          }),
          e.myPrediction
            ? (0, t.jsxs)("div", {
                className: "pool-card-mine",
                children: [
                  "your forecast ",
                  (0, t.jsx)("b", {
                    children: (0, i.fmtPrice)(e.myPrediction.value),
                  }),
                  " ·",
                  " ",
                  (0, n.fmtUsdg)(h(e.myPrediction.stake)),
                ],
              })
            : null,
        ],
      });
    }
    let v = (e) =>
      "scheduled" === e ? "Opens in" : "open" === e ? "Time left" : "Status";
    function k({ status: e }) {
      return (0, t.jsxs)("span", {
        className: "live-tag " + e,
        children: [
          "open" === e
            ? (0, t.jsx)("span", {
                className: "live-dot",
                "aria-hidden": "true",
              })
            : null,
          "open" === e
            ? "Live"
            : "scheduled" === e
            ? "Soon"
            : "resolved" === e
            ? "Settled"
            : "void" === e
            ? "Voided"
            : "Settling",
        ],
      });
    }
    function w() {
      return (0, t.jsx)("div", {
        className: "pool-cards pg-skel",
        "data-testid": "loading",
        "aria-busy": "true",
        "aria-label": "Loading pools",
        children: Array.from({ length: 6 }, (e, s) =>
          (0, t.jsxs)(
            "div",
            {
              className: "pool-card pg-skel-card",
              "aria-hidden": "true",
              children: [
                (0, t.jsxs)("div", {
                  className: "pool-card-top",
                  children: [
                    (0, t.jsx)("span", { className: "skeleton pg-badge" }),
                    (0, t.jsx)("span", { className: "skeleton pg-tag" }),
                  ],
                }),
                (0, t.jsx)("span", { className: "skeleton pg-line lg" }),
                (0, t.jsx)("span", { className: "skeleton pg-line sm" }),
                (0, t.jsx)("div", {
                  className: "pool-card-stats pg-skel-stats",
                  children: [0, 1, 2, 3].map((e) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        children: [
                          (0, t.jsx)("span", {
                            className: "skeleton pg-line xs",
                          }),
                          (0, t.jsx)("span", {
                            className: "skeleton pg-line md",
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            },
            s
          )
        ),
      });
    }
    function S({ market: e, size: l = "" }) {
      let a = e?.logo_url ? (0, r.assetPath)(e.logo_url) : null,
        [n, i] = (0, s.useState)(null),
        o = String(e?.symbol ?? "?"),
        c = "sm" === l ? 32 : 44;
      return a && n !== a
        ? (0, t.jsx)("img", {
            className: "coin-badge img " + l,
            src: a,
            alt: o,
            width: c,
            height: c,
            onError: () => i(a),
            loading: "lazy",
            decoding: "async",
          })
        : (0, t.jsx)("span", {
            className: "coin-badge " + l,
            role: "img",
            "aria-label": o,
            children: o.slice(0, 3),
          });
    }
    function C(e) {
      let t = (0, s.useRef)(e),
        [l, a] = (0, s.useState)({ cls: "", n: 0 });
      return (
        (0, s.useEffect)(() => {
          let s = t.current;
          if (((t.current = e), null == s || null == e)) return;
          let l = Number(s),
            r = Number(e);
          if (!Number.isFinite(l) || !Number.isFinite(r) || l === r) return;
          a((e) => ({ cls: r > l ? "flash-up" : "flash-down", n: e.n + 1 }));
          let n = setTimeout(() => a((e) => ({ cls: "", n: e.n })), 600);
          return () => clearTimeout(n);
        }, [e]),
        l
      );
    }
    e.s([
      "CoinBadge",
      0,
      S,
      "LoadError",
      0,
      b,
      "apiGet",
      0,
      y,
      "big",
      0,
      h,
      "categoryKey",
      0,
      g,
      "default",
      0,
      function () {
        let { me: e, notify: l } = (0, a.useWallet)(),
          r = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          r.current = l;
        }, [l]);
        let [n, i] = (0, s.useState)([]),
          [c, p] = (0, s.useState)("live"),
          [h, f] = (0, s.useState)("all"),
          [v, k] = (0, s.useState)(() => Date.now()),
          [S, C] = (0, s.useState)(!1),
          [A, P] = (0, s.useState)(null),
          R = (0, s.useRef)(!1),
          T = j(),
          E = e?.wallet ?? null,
          L = (0, s.useCallback)(async () => {
            let { signal: e, fresh: t } = T();
            try {
              let s = await y("/api/markets", { signal: e });
              if (!t()) return;
              i(Array.isArray(s?.markets) ? s.markets : []),
                P(null),
                C(!0),
                (R.current = !1);
            } catch (e) {
              if (x(e) || !t()) return;
              R.current || r.current?.((0, o.copyFor)(e, e.message), "err"),
                (R.current = !0),
                P(e),
                C(!0);
            }
          }, [T]);
        (0, s.useEffect)(() => {
          L();
          let e = setInterval(L, 15e3);
          return () => clearInterval(e);
        }, [L, E]),
          (0, s.useEffect)(() => {
            let e = setInterval(() => k(Date.now()), 1e3);
            return () => clearInterval(e);
          }, []);
        let M = n.filter(
            (e) =>
              "all" === c ||
              ("live" === c
                ? "open" === e.status || "closed" === e.status
                : "upcoming" === c
                ? "scheduled" === e.status
                : "resolved" === e.status || "void" === e.status)
          ),
          F = M.filter((e) => "all" === h || g(e.category) === h),
          $ = A && 0 === n.length;
        return (0, t.jsxs)("div", {
          className: "wrap app-main",
          "data-testid": "pools-page",
          children: [
            (0, t.jsxs)("div", {
              className: "page-head",
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h1", {
                      className: "font-display",
                      children: "Pools",
                    }),
                    (0, t.jsx)("p", {
                      className: "muted small",
                      children: d.BRAND.tagline,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "chips",
                  role: "group",
                  "aria-label": "Pool status",
                  children: u.map((e) =>
                    (0, t.jsx)(
                      "button",
                      {
                        type: "button",
                        className: "chip" + (c === e.key ? " on" : ""),
                        "aria-pressed": c === e.key,
                        onClick: () => p(e.key),
                        "data-testid": "pool-filter",
                        "data-key": e.key,
                        children: e.label,
                      },
                      e.key
                    )
                  ),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "chips cat-row",
              role: "group",
              "aria-label": "Pool category",
              children: m.map((e) => {
                let s;
                return (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "chip" + (h === e.key ? " on" : ""),
                    "aria-pressed": h === e.key,
                    onClick: () => f(e.key),
                    "data-testid": "pool-category",
                    "data-key": e.key,
                    children: [
                      e.label,
                      (0, t.jsx)("span", {
                        className: "chip-count",
                        children: S
                          ? ((s = e.key),
                            M.filter((e) => "all" === s || g(e.category) === s)
                              .length)
                          : "·",
                      }),
                    ],
                  },
                  e.key
                );
              }),
            }),
            S
              ? $
                ? (0, t.jsx)(b, {
                    testid: "pools-error",
                    retryTestid: "pools-retry",
                    error: A,
                    onRetry: L,
                  })
                : 0 === F.length
                ? (0, t.jsxs)("div", {
                    className: "pg-empty",
                    "data-testid": "pools-empty",
                    children: [
                      (0, t.jsx)("p", {
                        className: "muted center",
                        children: "No pools here yet.",
                      }),
                      "all" !== c || "all" !== h
                        ? (0, t.jsx)("button", {
                            type: "button",
                            className: "ghost",
                            "data-testid": "pools-show-all",
                            onClick: () => {
                              p("all"), f("all");
                            },
                            children: "Show all pools",
                          })
                        : null,
                    ],
                  })
                : (0, t.jsx)("div", {
                    className: "pool-cards",
                    children: F.map((e, s) =>
                      (0, t.jsx)(N, { market: e, now: v, index: s }, e.id)
                    ),
                  })
              : (0, t.jsx)(w, {}),
          ],
        });
      },
      "isAbort",
      0,
      x,
      "stagger",
      0,
      f,
      "useDprRedraw",
      0,
      function (e) {
        (0, s.useEffect)(() => {
          if ("function" != typeof window.matchMedia) return;
          let t = null,
            s = null,
            l = !0,
            a = () => {
              t && s && t.removeEventListener("change", s),
                (t = null),
                (s = null);
            },
            r = () => {
              l &&
                ((t = window.matchMedia(
                  `(resolution: ${window.devicePixelRatio || 1}dppx)`
                )),
                (s = () => {
                  a(), e.current?.(), r();
                }),
                t.addEventListener("change", s));
            };
          return (
            r(),
            () => {
              (l = !1), a();
            }
          );
        }, [e]);
      },
      "usePriceFlash",
      0,
      C,
      "useRequestSeq",
      0,
      j,
    ]);
  },
  56133,
  (e) => {
    "use strict";
    var t = e.i(43476),
      s = e.i(71645),
      l = e.i(22016),
      a = e.i(78334),
      r = e.i(3769),
      n = e.i(65831),
      i = e.i(86687),
      o = e.i(17587),
      c = e.i(80729),
      d = e.i(46979);
    function u(e, t, s) {
      if (!e || "function" != typeof getComputedStyle) return s;
      let l = getComputedStyle(e).getPropertyValue(t).trim();
      return /^#[0-9a-fA-F]{6}$/.test(l) ? l : s;
    }
    function m({ value: e }) {
      let s = "string" == typeof e ? e : "";
      if (!s) return "—";
      if (s.startsWith("market:")) {
        let e = s.slice(7);
        return (0, t.jsxs)(l.default, {
          href: `/pool/${e}`,
          className: "link",
          "data-testid": "activity-ref-link",
          children: ["pool ", e],
        });
      }
      if (s.startsWith("withdrawal:")) return `withdrawal ${s.slice(11)}`;
      if (s.startsWith("refund:")) return `refund ${s.slice(7)}`;
      let a = /^(0x[0-9a-fA-F]{64})(?::\d+)?$/.exec(s);
      if (a) {
        let e = a[1];
        return (0, t.jsxs)("a", {
          className: "link",
          href: (0, i.explorerTx)(e),
          target: "_blank",
          rel: "noopener noreferrer",
          title: e,
          "data-testid": "activity-ref-link",
          children: [e.slice(0, 8), "…", e.slice(-6)],
        });
      }
      return s.length > 18 ? s.slice(0, 8) + "…" + s.slice(-6) : s;
    }
    function p({ points: e }) {
      let l = (0, s.useRef)(null),
        a = (0, s.useRef)(() => {});
      return (
        (0, s.useEffect)(() => {
          (a.current = () =>
            (function (e, t) {
              if (!e || t.length < 2) return;
              let s = e.clientWidth,
                l = e.clientHeight;
              if (!s || !l) return;
              let a = Math.min(window.devicePixelRatio || 1, 2),
                r = Math.round(s * a),
                i = Math.round(l * a);
              e.width !== r && (e.width = r), e.height !== i && (e.height = i);
              let c = e.getContext("2d");
              if (!c) return;
              c.setTransform(a, 0, 0, a, 0, 0), c.clearRect(0, 0, s, l);
              let d = t.map((e) => (0, o.toNumber)((0, n.big)(e.cumulative))),
                m = Math.min(0, ...d),
                p = Math.max(0, ...d) - m || 1,
                h = (e) => 16 + (e / (d.length - 1)) * (s - 32),
                f = (e) => 16 + (1 - (e - m) / p) * (l - 32),
                g = Math.round(f(0)) + 0.5;
              (c.strokeStyle = u(e, "--line-strong", "#404040")),
                (c.lineWidth = 1),
                c.setLineDash([4, 4]),
                c.beginPath(),
                c.moveTo(16, g),
                c.lineTo(s - 16, g),
                c.stroke(),
                c.setLineDash([]);
              let x =
                  d[d.length - 1] >= 0
                    ? u(e, "--up", "#3cf2a3")
                    : u(e, "--down", "#ff0642"),
                y = c.createLinearGradient(0, 16, 0, l - 16);
              y.addColorStop(0, x + "44"),
                y.addColorStop(1, x + "00"),
                c.beginPath(),
                c.moveTo(h(0), f(d[0])),
                d.forEach((e, t) => c.lineTo(h(t), f(e))),
                c.lineTo(h(d.length - 1), f(m)),
                c.lineTo(h(0), f(m)),
                c.closePath(),
                (c.fillStyle = y),
                c.fill(),
                c.beginPath(),
                c.moveTo(h(0), f(d[0])),
                d.forEach((e, t) => c.lineTo(h(t), f(e))),
                (c.strokeStyle = x),
                (c.lineWidth = 2),
                (c.lineJoin = "round"),
                (c.shadowColor = x + "99"),
                (c.shadowBlur = 8),
                c.stroke(),
                (c.shadowBlur = 0);
              let j = h(d.length - 1),
                b = f(d[d.length - 1]);
              c.beginPath(),
                c.arc(j, b, 3.5, 0, 2 * Math.PI),
                (c.fillStyle = "#fff"),
                c.fill();
            })(l.current, e)),
            a.current();
        }, [e]),
        (0, s.useEffect)(() => {
          let e = l.current;
          if (!e || "u" < typeof ResizeObserver) return;
          let t = new ResizeObserver(() => a.current());
          return t.observe(e), () => t.disconnect();
        }, []),
        (0, n.useDprRedraw)(a),
        (0, t.jsx)("canvas", {
          ref: l,
          className: "curve-canvas",
          role: "img",
          "aria-label": "Cumulative payouts over time",
        })
      );
    }
    function h() {
      return (0, t.jsxs)("div", {
        className: "pg-skel",
        "data-testid": "loading",
        "aria-busy": "true",
        "aria-label": "Loading portfolio",
        children: [
          (0, t.jsx)("div", {
            className: "tiles",
            children: [0, 1, 2, 3].map((e) =>
              (0, t.jsxs)(
                "div",
                {
                  className: "tile",
                  "aria-hidden": "true",
                  children: [
                    (0, t.jsx)("span", { className: "skeleton pg-line xs" }),
                    (0, t.jsx)("span", { className: "skeleton pg-line md" }),
                    (0, t.jsx)("span", { className: "skeleton pg-line sm" }),
                  ],
                },
                e
              )
            ),
          }),
          (0, t.jsxs)("section", {
            className: "panel",
            "aria-hidden": "true",
            children: [
              (0, t.jsx)("span", { className: "skeleton pg-line sm" }),
              (0, t.jsx)("span", {
                className: "skeleton pg-block pg-curve-block",
              }),
            ],
          }),
          (0, t.jsxs)("section", {
            className: "panel",
            "aria-hidden": "true",
            children: [
              (0, t.jsx)("span", { className: "skeleton pg-line sm" }),
              [0, 1, 2, 3].map((e) =>
                (0, t.jsx)(
                  "span",
                  { className: "skeleton pg-block pg-table-block" },
                  e
                )
              ),
            ],
          }),
        ],
      });
    }
    e.s([
      "default",
      0,
      function () {
        let {
            me: e,
            signedIn: i,
            busy: u,
            openPicker: f,
            notify: g,
            refresh: x,
          } = (0, r.useWallet)(),
          y = (0, s.useRef)({ notify: g, refresh: x });
        (0, s.useEffect)(() => {
          y.current = { notify: g, refresh: x };
        }, [g, x]);
        let [j, b] = (0, s.useState)(null),
          [N, v] = (0, s.useState)(null),
          [k, w] = (0, s.useState)([]),
          [S, C] = (0, s.useState)(!0),
          [A, P] = (0, s.useState)(!1),
          R = (0, s.useRef)(!1),
          T = (0, n.useRequestSeq)(),
          E = e?.wallet ?? null,
          L = (0, d.useSessionCheck)(e, x),
          M = (0, s.useCallback)(async () => {
            let { signal: e, fresh: t } = T();
            try {
              let s = await (0, n.apiGet)("/api/portfolio", { signal: e });
              if (!t()) return;
              b(s), v(null), (R.current = !1);
            } catch (e) {
              if ((0, n.isAbort)(e) || !t()) return;
              if (401 === e.status) return void y.current.refresh?.();
              R.current ||
                (y.current.notify?.((0, c.copyFor)(e, e.message), "err"),
                (R.current = !0)),
                v(e);
            }
          }, [T]);
        (0, s.useEffect)(() => {
          if ((b(null), v(null), w([]), C(!0), !E)) return;
          M();
          let e = setInterval(M, 2e4);
          return () => clearInterval(e);
        }, [E, M]);
        let F = (0, s.useMemo)(
            () => (Array.isArray(j?.ledger) ? j.ledger : []),
            [j]
          ),
          $ = (0, s.useMemo)(() => {
            let e = new Set(F.map((e) => e.id));
            return [...F, ...k.filter((t) => !e.has(t.id))];
          }, [F, k]),
          W = (0, s.useCallback)(async () => {
            let e = $.length ? $[$.length - 1].id : null;
            if (null != e && !A) {
              P(!0);
              try {
                let t = await (0, n.apiGet)(
                    `/api/portfolio?before=${encodeURIComponent(e)}`
                  ),
                  s = Array.isArray(t?.ledger) ? t.ledger : [];
                w((e) => {
                  let t = new Set(e.map((e) => e.id));
                  return [...e, ...s.filter((e) => !t.has(e.id))];
                }),
                  C(!!t?.ledgerMore);
              } catch (e) {
                (0, n.isAbort)(e) ||
                  y.current.notify?.((0, c.copyFor)(e, e.message), "err");
              } finally {
                P(!1);
              }
            }
          }, [$, A]),
          _ = (0, t.jsx)("div", {
            className: "page-head",
            children: (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("h1", {
                  className: "font-display",
                  children: "Portfolio",
                }),
                (0, t.jsx)("p", {
                  className: "muted small",
                  children: "Everything you have staked, earned and forecast.",
                }),
              ],
            }),
          });
        if (!i && !L)
          return (0, t.jsxs)("div", {
            className: "wrap app-main",
            "data-testid": "portfolio-page",
            children: [
              _,
              (0, t.jsxs)("div", {
                className: "app-empty",
                children: [
                  (0, t.jsx)("p", {
                    children:
                      "Connect your wallet to see your balance, P&L and accuracy record.",
                  }),
                  (0, t.jsx)("button", {
                    type: "button",
                    className: "pill",
                    onClick: f,
                    disabled: u,
                    style: { marginTop: "1.6rem" },
                    "data-testid": "empty-connect",
                    children: u
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("span", {
                              className: "pg-spinner",
                              "aria-hidden": "true",
                            }),
                            "Connecting…",
                          ],
                        })
                      : "Connect Wallet",
                  }),
                ],
              }),
            ],
          });
        if (!j)
          return (0, t.jsxs)("div", {
            className: "wrap app-main",
            "data-testid": "portfolio-page",
            children: [
              _,
              N
                ? (0, t.jsx)(n.LoadError, {
                    testid: "portfolio-error",
                    retryTestid: "portfolio-retry",
                    error: N,
                    onRetry: M,
                  })
                : (0, t.jsx)(h, {}),
            ],
          });
        let D = j.summary ?? {},
          U = Number(D.settledPools ?? 0),
          I = Number(D.wins ?? 0),
          B = (0, n.big)(D.pnl),
          q = (0, n.big)(j.balance?.locked),
          O = (0, n.big)(j.balance?.available) + q,
          z = U ? (I / U) * 100 : null,
          G = Array.isArray(j.curve) ? j.curve : [],
          K = S && (j.ledgerMore || k.length > 0);
        return (0, t.jsxs)("div", {
          className: "wrap app-main",
          "data-testid": "portfolio-page",
          children: [
            _,
            (0, t.jsxs)("div", {
              className: "tiles",
              children: [
                (0, t.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, n.stagger)(0),
                  children: [
                    (0, t.jsx)("span", {
                      className: "tile-label",
                      children: "Total balance",
                    }),
                    (0, t.jsxs)("b", {
                      "data-testid": "portfolio-total",
                      children: [
                        (0, t.jsx)(a.UsdgIcon, {}),
                        " ",
                        (0, o.fmtUsdg)(O),
                      ],
                    }),
                    (0, t.jsxs)("em", {
                      children: [(0, o.fmtUsdg)(q), " in open pools"],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, n.stagger)(1),
                  children: [
                    (0, t.jsx)("span", {
                      className: "tile-label",
                      children: "Realised P&L",
                    }),
                    (0, t.jsxs)("b", {
                      className: B >= 0n ? "up" : "down",
                      "data-testid": "portfolio-pnl",
                      children: [
                        (0, o.fmtSigned)(B),
                        " ",
                        (0, t.jsx)(a.Usdg, {}),
                      ],
                    }),
                    (0, t.jsxs)("em", {
                      children: [
                        "over ",
                        U,
                        " settled pool",
                        1 === U ? "" : "s",
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, n.stagger)(2),
                  children: [
                    (0, t.jsx)("span", {
                      className: "tile-label",
                      children: "Avg accuracy",
                    }),
                    (0, t.jsx)("b", {
                      "data-testid": "portfolio-accuracy",
                      children:
                        null != D.avgAccuracy
                          ? (100 * Number(D.avgAccuracy)).toFixed(1) + "%"
                          : "—",
                    }),
                    (0, t.jsx)("em", {
                      children:
                        null != D.bestAccuracy
                          ? `best ${(100 * Number(D.bestAccuracy)).toFixed(1)}%`
                          : "no results yet",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, n.stagger)(3),
                  children: [
                    (0, t.jsx)("span", {
                      className: "tile-label",
                      children: "Profitable pools",
                    }),
                    (0, t.jsx)("b", {
                      "data-testid": "portfolio-hitrate",
                      children: null != z ? z.toFixed(0) + "%" : "—",
                    }),
                    (0, t.jsxs)("em", { children: [I, " of ", U] }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("section", {
              className: "panel",
              children: [
                (0, t.jsx)("h2", {
                  className: "font-display",
                  children: "Cumulative payouts",
                }),
                (0, t.jsx)("p", {
                  className: "muted small",
                  style: { marginBottom: ".8rem" },
                  children:
                    "Payout events only. Deposits and withdrawals move money around but are not performance.",
                }),
                G.length < 2
                  ? (0, t.jsxs)("p", {
                      className: "muted center pad",
                      children: [
                        "Not enough settled pools to plot yet.",
                        " ",
                        (0, t.jsx)(l.default, {
                          href: "/",
                          className: "link",
                          children: "Find a pool",
                        }),
                        ".",
                      ],
                    })
                  : (0, t.jsx)(p, { points: G }),
              ],
            }),
            (0, t.jsxs)("section", {
              className: "panel",
              children: [
                (0, t.jsx)("h2", {
                  className: "font-display",
                  children: "Activity",
                }),
                0 === $.length
                  ? (0, t.jsx)("p", {
                      className: "muted center pad",
                      children: "Nothing yet.",
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: "pg-table-scroll",
                          children: (0, t.jsxs)("table", {
                            className: "results",
                            children: [
                              (0, t.jsx)("caption", {
                                className: "sr-only",
                                children:
                                  "Every movement on your balance: stakes, payouts, refunds, deposits and withdrawals",
                              }),
                              (0, t.jsx)("thead", {
                                children: (0, t.jsxs)("tr", {
                                  children: [
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "When",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "Type",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "Reference",
                                    }),
                                    (0, t.jsxs)("th", {
                                      scope: "col",
                                      children: [
                                        "Amount (",
                                        (0, t.jsx)(a.Usdg, {}),
                                        ")",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("tbody", {
                                children: (0, d.withKeys)($, (e) =>
                                  String(
                                    e.id ?? `${e.created_at}|${e.kind}|${e.ref}`
                                  )
                                ).map(({ key: e, item: s, index: l }) => {
                                  let a = (0, n.big)(s.delta),
                                    r = (0, d.fmtLocalTime)(s.created_at, {
                                      withDate: !0,
                                    });
                                  return (0, t.jsxs)(
                                    "tr",
                                    {
                                      className: "fade-up",
                                      style: (0, n.stagger)(l),
                                      "data-testid": "activity-row",
                                      "data-kind": s.kind,
                                      children: [
                                        (0, t.jsx)("td", {
                                          children: (0, t.jsx)("time", {
                                            dateTime: s.created_at,
                                            title: r.utc,
                                            suppressHydrationWarning: !0,
                                            children: r.text,
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          children: (0, t.jsx)("span", {
                                            className: "kind " + s.kind,
                                            children: s.kind,
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className: "muted",
                                          children: (0, t.jsx)(m, {
                                            value: s.ref,
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className: a >= 0n ? "up" : "down",
                                          children: (0, o.fmtSigned)(a),
                                        }),
                                      ],
                                    },
                                    e
                                  );
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "pg-more",
                          children: [
                            (0, t.jsxs)("p", {
                              className: "muted small",
                              children: [
                                "Showing the latest ",
                                Math.min($.length, 60),
                                " movements",
                                $.length > 60
                                  ? ` and ${$.length - 60} older`
                                  : "",
                                ".",
                              ],
                            }),
                            K
                              ? (0, t.jsx)("button", {
                                  type: "button",
                                  className: "ghost",
                                  onClick: W,
                                  disabled: A,
                                  "data-testid": "portfolio-load-more",
                                  children: A ? "Loading…" : "Load more",
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
