(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  65831,
  (e) => {
    "use strict";
    var s = e.i(43476),
      t = e.i(71645),
      l = e.i(22016),
      a = e.i(3769),
      i = e.i(86687),
      r = e.i(17587),
      n = e.i(72099),
      c = e.i(80729),
      d = e.i(46979),
      o = e.i(20187);
    let u = [
        { key: "live", label: "Live" },
        { key: "upcoming", label: "Upcoming" },
        { key: "settled", label: "Resolved" },
        { key: "all", label: "All" },
      ],
      p = [
        { key: "all", label: "All pools" },
        { key: "crypto", label: "Crypto" },
        { key: "meme", label: "Memes" },
        { key: "stock", label: "Stocks" },
        { key: "commodity", label: "Commodities" },
        { key: "rwa", label: "RWA" },
      ],
      m = {
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
    let x = (e) => ({ "--i": Math.min(e, 12) }),
      j = (e) => {
        let s = String(e ?? "")
          .trim()
          .toLowerCase();
        return m[s] ?? s;
      },
      g = (e) => e?.name === "AbortError";
    async function f(e, { signal: s } = {}) {
      let t = await fetch((0, i.apiPath)(e), {
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
    function y() {
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
    function N({ testid: e, retryTestid: t, error: l, onRetry: a }) {
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
            children: (0, c.copyFor)(l, l?.message),
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
    function b({ market: e, now: t, index: a }) {
      let i = P(e.price),
        c = (0, d.fmtLocalTime)(e.closes_at, { withDate: !0 });
      return (0, s.jsxs)(l.default, {
        href: `/pool/${e.id}`,
        className: "pool-card fade-up",
        style: x(a),
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
                title: c.utc,
                suppressHydrationWarning: !0,
                children: c.text,
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
                    { className: i.cls, children: (0, n.fmtPrice)(e.price) },
                    i.n
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
                  (0, s.jsx)("b", { children: (0, r.fmtUsdg)(h(e.pooled)) }),
                ],
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", { children: k(e.status) }),
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
                        : (0, d.humanize)(l);
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
                    children: (0, n.fmtPrice)(e.myPrediction.value),
                  }),
                  " ·",
                  " ",
                  (0, r.fmtUsdg)(h(e.myPrediction.stake)),
                ],
              })
            : null,
        ],
      });
    }
    let k = (e) =>
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
      let a = e?.logo_url ? (0, i.assetPath)(e.logo_url) : null,
        [r, n] = (0, t.useState)(null),
        c = String(e?.symbol ?? "?"),
        d = "sm" === l ? 32 : 44;
      return a && r !== a
        ? (0, s.jsx)("img", {
            className: "coin-badge img " + l,
            src: a,
            alt: c,
            width: d,
            height: d,
            onError: () => n(a),
            loading: "lazy",
            decoding: "async",
          })
        : (0, s.jsx)("span", {
            className: "coin-badge " + l,
            role: "img",
            "aria-label": c,
            children: c.slice(0, 3),
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
            i = Number(e);
          if (!Number.isFinite(l) || !Number.isFinite(i) || l === i) return;
          a((e) => ({ cls: i > l ? "flash-up" : "flash-down", n: e.n + 1 }));
          let r = setTimeout(() => a((e) => ({ cls: "", n: e.n })), 600);
          return () => clearTimeout(r);
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
      N,
      "apiGet",
      0,
      f,
      "big",
      0,
      h,
      "categoryKey",
      0,
      j,
      "default",
      0,
      function () {
        let { me: e, notify: l } = (0, a.useWallet)(),
          i = (0, t.useRef)(l);
        (0, t.useEffect)(() => {
          i.current = l;
        }, [l]);
        let [r, n] = (0, t.useState)([]),
          [d, m] = (0, t.useState)("live"),
          [h, x] = (0, t.useState)("all"),
          [k, v] = (0, t.useState)(() => Date.now()),
          [S, P] = (0, t.useState)(!1),
          [A, C] = (0, t.useState)(null),
          R = (0, t.useRef)(!1),
          E = y(),
          I = e?.wallet ?? null,
          T = (0, t.useCallback)(async () => {
            let { signal: e, fresh: s } = E();
            try {
              let t = await f("/api/markets", { signal: e });
              if (!s()) return;
              n(Array.isArray(t?.markets) ? t.markets : []),
                C(null),
                P(!0),
                (R.current = !1);
            } catch (e) {
              if (g(e) || !s()) return;
              R.current || i.current?.((0, c.copyFor)(e, e.message), "err"),
                (R.current = !0),
                C(e),
                P(!0);
            }
          }, [E]);
        (0, t.useEffect)(() => {
          T();
          let e = setInterval(T, 15e3);
          return () => clearInterval(e);
        }, [T, I]),
          (0, t.useEffect)(() => {
            let e = setInterval(() => v(Date.now()), 1e3);
            return () => clearInterval(e);
          }, []);
        let F = r.filter(
            (e) =>
              "all" === d ||
              ("live" === d
                ? "open" === e.status || "closed" === e.status
                : "upcoming" === d
                ? "scheduled" === e.status
                : "resolved" === e.status || "void" === e.status)
          ),
          U = F.filter((e) => "all" === h || j(e.category) === h),
          L = A && 0 === r.length;
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
                      children: o.BRAND.tagline,
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
                        className: "chip" + (d === e.key ? " on" : ""),
                        "aria-pressed": d === e.key,
                        onClick: () => m(e.key),
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
              children: p.map((e) => {
                let t;
                return (0, s.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "chip" + (h === e.key ? " on" : ""),
                    "aria-pressed": h === e.key,
                    onClick: () => x(e.key),
                    "data-testid": "pool-category",
                    "data-key": e.key,
                    children: [
                      e.label,
                      (0, s.jsx)("span", {
                        className: "chip-count",
                        children: S
                          ? ((t = e.key),
                            F.filter((e) => "all" === t || j(e.category) === t)
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
              ? L
                ? (0, s.jsx)(N, {
                    testid: "pools-error",
                    retryTestid: "pools-retry",
                    error: A,
                    onRetry: T,
                  })
                : 0 === U.length
                ? (0, s.jsxs)("div", {
                    className: "pg-empty",
                    "data-testid": "pools-empty",
                    children: [
                      (0, s.jsx)("p", {
                        className: "muted center",
                        children: "No pools here yet.",
                      }),
                      "all" !== d || "all" !== h
                        ? (0, s.jsx)("button", {
                            type: "button",
                            className: "ghost",
                            "data-testid": "pools-show-all",
                            onClick: () => {
                              m("all"), x("all");
                            },
                            children: "Show all pools",
                          })
                        : null,
                    ],
                  })
                : (0, s.jsx)("div", {
                    className: "pool-cards",
                    children: U.map((e, t) =>
                      (0, s.jsx)(b, { market: e, now: k, index: t }, e.id)
                    ),
                  })
              : (0, s.jsx)(w, {}),
          ],
        });
      },
      "isAbort",
      0,
      g,
      "stagger",
      0,
      x,
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
            i = () => {
              l &&
                ((s = window.matchMedia(
                  `(resolution: ${window.devicePixelRatio || 1}dppx)`
                )),
                (t = () => {
                  a(), e.current?.(), i();
                }),
                s.addEventListener("change", t));
            };
          return (
            i(),
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
      y,
    ]);
  },
  77501,
  (e) => {
    "use strict";
    var s = e.i(43476),
      t = e.i(71645),
      l = e.i(22016),
      a = e.i(78334),
      i = e.i(3769),
      r = e.i(65831),
      n = e.i(72099),
      c = e.i(17587),
      d = e.i(80729),
      o = e.i(46979);
    let u = (e) =>
      null != e && Number.isFinite(Number(e))
        ? (100 * Number(e)).toFixed(1) + "%"
        : "—";
    function p({ p: e, now: t, index: a }) {
      let i = (0, r.usePriceFlash)(e.price),
        d = null == e.driftPct ? null : Number(e.driftPct),
        m = null != d && Number.isFinite(d);
      return (0, s.jsxs)(l.default, {
        href: `/pool/${e.marketId}`,
        className: "pos-row fade-up",
        style: (0, r.stagger)(a),
        "data-testid": "position-open",
        "data-id": e.marketId,
        children: [
          (0, s.jsxs)("div", {
            className: "pos-main",
            children: [
              (0, s.jsx)(r.CoinBadge, { market: e, size: "sm" }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("b", { children: e.symbol }),
                  (0, s.jsxs)("span", {
                    className: "muted small",
                    children: [
                      "closes in ",
                      (0, o.humanize)(new Date(e.closesAt).getTime() - t),
                      e.edits > 0
                        ? ` \xb7 ${e.edits} edit${e.edits > 1 ? "s" : ""}`
                        : "",
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "pos-col",
            children: [
              (0, s.jsx)("span", { children: "Your forecast" }),
              (0, s.jsx)("b", { children: (0, n.fmtPrice)(e.value) }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "pos-col",
            children: [
              (0, s.jsx)("span", { children: "Now" }),
              (0, s.jsx)(
                "b",
                { className: i.cls, children: (0, n.fmtPrice)(e.price) },
                i.n
              ),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "pos-col",
            children: [
              (0, s.jsx)("span", { children: "Off by" }),
              (0, s.jsx)("b", {
                className: m ? (1 >= Math.abs(d) ? "up" : "down") : "",
                children: m ? `${d > 0 ? "+" : ""}${d.toFixed(2)}%` : "—",
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "pos-col",
            children: [
              (0, s.jsx)("span", { children: "Accuracy now" }),
              (0, s.jsx)("b", { children: u(e.liveAccuracy) }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "pos-col",
            children: [
              (0, s.jsx)("span", { children: "Stake" }),
              (0, s.jsx)("b", {
                children: (0, c.fmtUsdg)((0, r.big)(e.stake)),
              }),
            ],
          }),
        ],
      });
    }
    function m() {
      return (0, s.jsxs)("div", {
        className: "pg-skel",
        "data-testid": "loading",
        "aria-busy": "true",
        "aria-label": "Loading positions",
        children: [
          (0, s.jsx)("div", {
            className: "tiles",
            children: [0, 1, 2, 3].map((e) =>
              (0, s.jsxs)(
                "div",
                {
                  className: "tile",
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsx)("span", { className: "skeleton pg-line xs" }),
                    (0, s.jsx)("span", { className: "skeleton pg-line md" }),
                  ],
                },
                e
              )
            ),
          }),
          (0, s.jsxs)("section", {
            className: "panel",
            "aria-hidden": "true",
            children: [
              (0, s.jsx)("span", { className: "skeleton pg-line sm" }),
              [0, 1, 2].map((e) =>
                (0, s.jsx)(
                  "span",
                  { className: "skeleton pg-block pg-row-block" },
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
            signedIn: h,
            busy: x,
            openPicker: j,
            notify: g,
            refresh: f,
          } = (0, i.useWallet)(),
          y = (0, t.useRef)({ notify: g, refresh: f });
        (0, t.useEffect)(() => {
          y.current = { notify: g, refresh: f };
        }, [g, f]);
        let [N, b] = (0, t.useState)(null),
          [k, v] = (0, t.useState)(null),
          [w, S] = (0, t.useState)(() => Date.now()),
          P = (0, t.useRef)(!1),
          A = (0, r.useRequestSeq)(),
          C = e?.wallet ?? null,
          R = (0, o.useSessionCheck)(e, f),
          E = (0, t.useCallback)(async () => {
            let { signal: e, fresh: s } = A();
            try {
              let t = await (0, r.apiGet)("/api/positions", { signal: e });
              if (!s()) return;
              b({
                open: Array.isArray(t?.open) ? t.open : [],
                settled: Array.isArray(t?.settled) ? t.settled : [],
              }),
                v(null),
                (P.current = !1);
            } catch (e) {
              if ((0, r.isAbort)(e) || !s()) return;
              if (401 === e.status) return void y.current.refresh?.();
              P.current ||
                (y.current.notify?.((0, d.copyFor)(e, e.message), "err"),
                (P.current = !0)),
                v(e);
            }
          }, [A]);
        (0, t.useEffect)(() => {
          if ((b(null), v(null), !C)) return;
          E();
          let e = setInterval(E, 12e3);
          return () => clearInterval(e);
        }, [C, E]),
          (0, t.useEffect)(() => {
            let e = setInterval(() => S(Date.now()), 1e3);
            return () => clearInterval(e);
          }, []);
        let I = (0, s.jsx)("div", {
          className: "page-head",
          children: (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("h1", {
                className: "font-display",
                children: "Positions",
              }),
              (0, s.jsx)("p", {
                className: "muted small",
                children: "Open forecasts and settled results.",
              }),
            ],
          }),
        });
        if (!h && !R)
          return (0, s.jsxs)("div", {
            className: "wrap app-main",
            "data-testid": "positions-page",
            children: [
              I,
              (0, s.jsxs)("div", {
                className: "app-empty",
                children: [
                  (0, s.jsx)("p", {
                    children:
                      "Connect your wallet to see open forecasts and settled results.",
                  }),
                  (0, s.jsx)("button", {
                    type: "button",
                    className: "pill",
                    onClick: j,
                    disabled: x,
                    style: { marginTop: "1.6rem" },
                    "data-testid": "empty-connect",
                    children: x
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("span", {
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
        if (!N)
          return (0, s.jsxs)("div", {
            className: "wrap app-main",
            "data-testid": "positions-page",
            children: [
              I,
              k
                ? (0, s.jsx)(r.LoadError, {
                    testid: "positions-error",
                    retryTestid: "positions-retry",
                    error: k,
                    onRetry: E,
                  })
                : (0, s.jsx)(m, {}),
            ],
          });
        let T = N.open.reduce((e, s) => e + (0, r.big)(s.stake), 0n),
          F = N.settled.reduce((e, s) => e + (0, r.big)(s.pnl), 0n);
        return (0, s.jsxs)("div", {
          className: "wrap app-main",
          "data-testid": "positions-page",
          children: [
            I,
            (0, s.jsxs)("div", {
              className: "tiles",
              children: [
                (0, s.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, r.stagger)(0),
                  children: [
                    (0, s.jsx)("span", {
                      className: "tile-label",
                      children: "Open positions",
                    }),
                    (0, s.jsx)("b", { children: N.open.length }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, r.stagger)(1),
                  children: [
                    (0, s.jsx)("span", {
                      className: "tile-label",
                      children: "Total staked",
                    }),
                    (0, s.jsxs)("b", {
                      children: [
                        (0, s.jsx)(a.UsdgIcon, {}),
                        " ",
                        (0, c.fmtUsdg)(T),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, r.stagger)(2),
                  children: [
                    (0, s.jsx)("span", {
                      className: "tile-label",
                      children: "Settled",
                    }),
                    (0, s.jsx)("b", { children: N.settled.length }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "tile fade-up",
                  style: (0, r.stagger)(3),
                  children: [
                    (0, s.jsx)("span", {
                      className: "tile-label",
                      children: "Net P&L",
                    }),
                    (0, s.jsxs)("b", {
                      className: F >= 0n ? "up" : "down",
                      children: [
                        (0, c.fmtSigned)(F),
                        " ",
                        (0, s.jsx)(a.Usdg, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: "panel",
              children: [
                (0, s.jsx)("h2", {
                  className: "font-display",
                  children: "Open",
                }),
                0 === N.open.length
                  ? (0, s.jsxs)("p", {
                      className: "muted center pad",
                      children: [
                        "No open positions.",
                        " ",
                        (0, s.jsx)(l.default, {
                          href: "/",
                          className: "link",
                          children: "Find a pool",
                        }),
                        ".",
                      ],
                    })
                  : (0, s.jsx)("div", {
                      className: "pos-list",
                      children: N.open.map((e, t) =>
                        (0, s.jsx)(p, { p: e, now: w, index: t }, e.marketId)
                      ),
                    }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: "panel",
              children: [
                (0, s.jsx)("h2", {
                  className: "font-display",
                  children: "Settled",
                }),
                0 === N.settled.length
                  ? (0, s.jsx)("p", {
                      className: "muted center pad",
                      children: "Nothing settled yet.",
                    })
                  : (0, s.jsx)("div", {
                      className: "pg-table-scroll",
                      children: (0, s.jsxs)("table", {
                        className: "results pg-wide",
                        children: [
                          (0, s.jsx)("caption", {
                            className: "sr-only",
                            children:
                              "Your settled pools, with the price they settled at and what you were paid",
                          }),
                          (0, s.jsx)("thead", {
                            children: (0, s.jsxs)("tr", {
                              children: [
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Pool",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Forecast",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Settled at",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Accuracy",
                                }),
                                (0, s.jsxs)("th", {
                                  scope: "col",
                                  children: [
                                    "Stake (",
                                    (0, s.jsx)(a.Usdg, {}),
                                    ")",
                                  ],
                                }),
                                (0, s.jsxs)("th", {
                                  scope: "col",
                                  children: [
                                    "Payout (",
                                    (0, s.jsx)(a.Usdg, {}),
                                    ")",
                                  ],
                                }),
                                (0, s.jsxs)("th", {
                                  scope: "col",
                                  children: [
                                    "P&L (",
                                    (0, s.jsx)(a.Usdg, {}),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("tbody", {
                            children: N.settled.map((e, t) => {
                              let a = (0, r.big)(e.pnl),
                                i =
                                  "void" === e.status
                                    ? "Voided"
                                    : (0, n.fmtPrice)(e.resolvedPrice);
                              return (0, s.jsxs)(
                                "tr",
                                {
                                  className: "fade-up",
                                  style: (0, r.stagger)(t),
                                  "data-testid": "position-settled",
                                  "data-id": e.marketId,
                                  children: [
                                    (0, s.jsx)("td", {
                                      children: (0, s.jsx)(l.default, {
                                        href: `/pool/${e.marketId}`,
                                        className: "link",
                                        "data-testid": "position-settled-link",
                                        children: e.symbol,
                                      }),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: (0, n.fmtPrice)(e.value),
                                    }),
                                    (0, s.jsx)("td", { children: i }),
                                    (0, s.jsx)("td", {
                                      children: u(e.accuracy),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: (0, c.fmtUnits)(
                                        (0, r.big)(e.stake)
                                      ),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: (0, c.fmtUnits)(
                                        (0, r.big)(e.payout)
                                      ),
                                    }),
                                    (0, s.jsx)("td", {
                                      className: a >= 0n ? "up" : "down",
                                      children: (0, c.fmtSigned)(a),
                                    }),
                                  ],
                                },
                                e.marketId
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
