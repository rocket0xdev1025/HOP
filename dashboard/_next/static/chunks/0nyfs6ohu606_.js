(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  65831,
  (e) => {
    "use strict";
    var s = e.i(43476),
      t = e.i(71645),
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
    let y = (e) => ({ "--i": Math.min(e, 12) }),
      g = (e) => {
        let s = String(e ?? "")
          .trim()
          .toLowerCase();
        return p[s] ?? s;
      },
      f = (e) => e?.name === "AbortError";
    async function x(e, { signal: s } = {}) {
      let t = await fetch((0, r.apiPath)(e), {
          cache: "no-store",
          credentials: "same-origin",
          signal: s,
        }),
        l = await t.json().catch(() => ({}));
      if (!t.ok)
        throw Object.assign(Error(l.error ?? `request failed (${t.status})`), {
          status: t.status,
          code: l.code ?? null,
        });
      return l;
    }
    function j() {
      let e = (0, t.useRef)(0),
        s = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => () => s.current?.abort(), []),
        (0, t.useCallback)(() => {
          s.current?.abort();
          let t = new AbortController();
          s.current = t;
          let l = (e.current += 1);
          return { signal: t.signal, fresh: () => l === e.current };
        }, [])
      );
    }
    function b({ testid: e, retryTestid: t, error: l, onRetry: a }) {
      return (0, s.jsxs)("div", {
        className: "panel pg-error",
        "data-testid": e,
        role: "alert",
        children: [
          (0, s.jsx)("p", {
            className: "pg-error-head",
            children: "Couldn't load — retrying",
          }),
          (0, s.jsx)("p", {
            className: "muted small",
            children: (0, o.copyFor)(l, l?.message),
          }),
          (0, s.jsx)("button", {
            type: "button",
            className: "ghost",
            onClick: a,
            "data-testid": t,
            children: "Retry",
          }),
        ],
      });
    }
    function k({ market: e, now: t, index: a }) {
      let r = P(e.price),
        o = (0, c.fmtLocalTime)(e.closes_at, { withDate: !0 });
      return (0, s.jsxs)(l.default, {
        href: `/pool/${e.id}`,
        className: "pool-card fade-up",
        style: y(a),
        "data-testid": "pool-card",
        "data-id": e.id,
        "data-symbol": e.symbol,
        "data-status": e.status,
        children: [
          (0, s.jsxs)("div", {
            className: "pool-card-top",
            children: [
              (0, s.jsx)(S, { market: e }),
              (0, s.jsx)(v, { status: e.status }),
            ],
          }),
          (0, s.jsxs)("h3", {
            className: "font-display",
            children: [
              e.symbol,
              " price at",
              " ",
              (0, s.jsx)("time", {
                dateTime: e.closes_at,
                title: o.utc,
                suppressHydrationWarning: !0,
                children: o.text,
              }),
            ],
          }),
          e.display_name
            ? (0, s.jsx)("p", {
                className: "pool-card-sub",
                children: e.display_name,
              })
            : null,
          e.price
            ? (0, s.jsxs)("p", {
                className: "pool-card-price",
                children: [
                  "now",
                  " ",
                  (0, s.jsx)(
                    "b",
                    { className: r.cls, children: (0, i.fmtPrice)(e.price) },
                    r.n
                  ),
                ],
              })
            : null,
          (0, s.jsxs)("div", {
            className: "pool-card-stats pg-stats-3",
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", { children: "Participants" }),
                  (0, s.jsx)("b", { children: e.entries ?? 0 }),
                ],
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", { children: "Total staked" }),
                  (0, s.jsx)("b", { children: (0, n.fmtUsdg)(h(e.pooled)) }),
                ],
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", { children: N(e.status) }),
                  (0, s.jsx)("b", {
                    className: "font-mono",
                    children: (function (e, s) {
                      if ("resolved" === e.status) return "Settled";
                      if ("void" === e.status) return "Voided";
                      if ("closed" === e.status) return "Settling…";
                      let t = "scheduled" === e.status,
                        l =
                          new Date(t ? e.opens_at : e.closes_at).getTime() - s;
                      return l <= 0
                        ? t
                          ? "Opening…"
                          : "Settling…"
                        : (0, c.humanize)(l);
                    })(e, t),
                  }),
                ],
              }),
            ],
          }),
          e.myPrediction
            ? (0, s.jsxs)("div", {
                className: "pool-card-mine",
                children: [
                  "your forecast ",
                  (0, s.jsx)("b", {
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
    let N = (e) =>
      "scheduled" === e ? "Opens in" : "open" === e ? "Time left" : "Status";
    function v({ status: e }) {
      return (0, s.jsxs)("span", {
        className: "live-tag " + e,
        children: [
          "open" === e
            ? (0, s.jsx)("span", {
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
      return (0, s.jsx)("div", {
        className: "pool-cards pg-skel",
        "data-testid": "loading",
        "aria-busy": "true",
        "aria-label": "Loading pools",
        children: Array.from({ length: 6 }, (e, t) =>
          (0, s.jsxs)(
            "div",
            {
              className: "pool-card pg-skel-card",
              "aria-hidden": "true",
              children: [
                (0, s.jsxs)("div", {
                  className: "pool-card-top",
                  children: [
                    (0, s.jsx)("span", { className: "skeleton pg-badge" }),
                    (0, s.jsx)("span", { className: "skeleton pg-tag" }),
                  ],
                }),
                (0, s.jsx)("span", { className: "skeleton pg-line lg" }),
                (0, s.jsx)("span", { className: "skeleton pg-line sm" }),
                (0, s.jsx)("div", {
                  className: "pool-card-stats pg-skel-stats",
                  children: [0, 1, 2, 3].map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        children: [
                          (0, s.jsx)("span", {
                            className: "skeleton pg-line xs",
                          }),
                          (0, s.jsx)("span", {
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
            t
          )
        ),
      });
    }
    function S({ market: e, size: l = "" }) {
      let a = e?.logo_url ? (0, r.assetPath)(e.logo_url) : null,
        [n, i] = (0, t.useState)(null),
        o = String(e?.symbol ?? "?"),
        c = "sm" === l ? 32 : 44;
      return a && n !== a
        ? (0, s.jsx)("img", {
            className: "coin-badge img " + l,
            src: a,
            alt: o,
            width: c,
            height: c,
            onError: () => i(a),
            loading: "lazy",
            decoding: "async",
          })
        : (0, s.jsx)("span", {
            className: "coin-badge " + l,
            role: "img",
            "aria-label": o,
            children: o.slice(0, 3),
          });
    }
    function P(e) {
      let s = (0, t.useRef)(e),
        [l, a] = (0, t.useState)({ cls: "", n: 0 });
      return (
        (0, t.useEffect)(() => {
          let t = s.current;
          if (((s.current = e), null == t || null == e)) return;
          let l = Number(t),
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
      x,
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
          r = (0, t.useRef)(l);
        (0, t.useEffect)(() => {
          r.current = l;
        }, [l]);
        let [n, i] = (0, t.useState)([]),
          [c, p] = (0, t.useState)("live"),
          [h, y] = (0, t.useState)("all"),
          [N, v] = (0, t.useState)(() => Date.now()),
          [S, P] = (0, t.useState)(!1),
          [R, C] = (0, t.useState)(null),
          A = (0, t.useRef)(!1),
          E = j(),
          T = e?.wallet ?? null,
          L = (0, t.useCallback)(async () => {
            let { signal: e, fresh: s } = E();
            try {
              let t = await x("/api/markets", { signal: e });
              if (!s()) return;
              i(Array.isArray(t?.markets) ? t.markets : []),
                C(null),
                P(!0),
                (A.current = !1);
            } catch (e) {
              if (f(e) || !s()) return;
              A.current || r.current?.((0, o.copyFor)(e, e.message), "err"),
                (A.current = !0),
                C(e),
                P(!0);
            }
          }, [E]);
        (0, t.useEffect)(() => {
          L();
          let e = setInterval(L, 15e3);
          return () => clearInterval(e);
        }, [L, T]),
          (0, t.useEffect)(() => {
            let e = setInterval(() => v(Date.now()), 1e3);
            return () => clearInterval(e);
          }, []);
        let _ = n.filter(
            (e) =>
              "all" === c ||
              ("live" === c
                ? "open" === e.status || "closed" === e.status
                : "upcoming" === c
                ? "scheduled" === e.status
                : "resolved" === e.status || "void" === e.status)
          ),
          D = _.filter((e) => "all" === h || g(e.category) === h),
          q = R && 0 === n.length;
        return (0, s.jsxs)("div", {
          className: "wrap app-main",
          "data-testid": "pools-page",
          children: [
            (0, s.jsxs)("div", {
              className: "page-head",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("h1", {
                      className: "font-display",
                      children: "Pools",
                    }),
                    (0, s.jsx)("p", {
                      className: "muted small",
                      children: d.BRAND.tagline,
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "chips",
                  role: "group",
                  "aria-label": "Pool status",
                  children: u.map((e) =>
                    (0, s.jsx)(
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
            (0, s.jsx)("div", {
              className: "chips cat-row",
              role: "group",
              "aria-label": "Pool category",
              children: m.map((e) => {
                let t;
                return (0, s.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "chip" + (h === e.key ? " on" : ""),
                    "aria-pressed": h === e.key,
                    onClick: () => y(e.key),
                    "data-testid": "pool-category",
                    "data-key": e.key,
                    children: [
                      e.label,
                      (0, s.jsx)("span", {
                        className: "chip-count",
                        children: S
                          ? ((t = e.key),
                            _.filter((e) => "all" === t || g(e.category) === t)
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
              ? q
                ? (0, s.jsx)(b, {
                    testid: "pools-error",
                    retryTestid: "pools-retry",
                    error: R,
                    onRetry: L,
                  })
                : 0 === D.length
                ? (0, s.jsxs)("div", {
                    className: "pg-empty",
                    "data-testid": "pools-empty",
                    children: [
                      (0, s.jsx)("p", {
                        className: "muted center",
                        children: "No pools here yet.",
                      }),
                      "all" !== c || "all" !== h
                        ? (0, s.jsx)("button", {
                            type: "button",
                            className: "ghost",
                            "data-testid": "pools-show-all",
                            onClick: () => {
                              p("all"), y("all");
                            },
                            children: "Show all pools",
                          })
                        : null,
                    ],
                  })
                : (0, s.jsx)("div", {
                    className: "pool-cards",
                    children: D.map((e, t) =>
                      (0, s.jsx)(k, { market: e, now: N, index: t }, e.id)
                    ),
                  })
              : (0, s.jsx)(w, {}),
          ],
        });
      },
      "isAbort",
      0,
      f,
      "stagger",
      0,
      y,
      "useDprRedraw",
      0,
      function (e) {
        (0, t.useEffect)(() => {
          if ("function" != typeof window.matchMedia) return;
          let s = null,
            t = null,
            l = !0,
            a = () => {
              s && t && s.removeEventListener("change", t),
                (s = null),
                (t = null);
            },
            r = () => {
              l &&
                ((s = window.matchMedia(
                  `(resolution: ${window.devicePixelRatio || 1}dppx)`
                )),
                (t = () => {
                  a(), e.current?.(), r();
                }),
                s.addEventListener("change", t));
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
      P,
      "useRequestSeq",
      0,
      j,
    ]);
  },
]);
