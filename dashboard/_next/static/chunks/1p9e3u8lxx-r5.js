(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  27773,
  (e) => {
    "use strict";
    var s = e.i(43476),
      l = e.i(71645),
      t = e.i(78334),
      a = e.i(3769),
      r = e.i(65831),
      n = e.i(17587),
      i = e.i(80729),
      c = e.i(46979);
    let d = (e) =>
      null != e && Number.isFinite(Number(e))
        ? (100 * Number(e)).toFixed(1) + "%"
        : "—";
    function o() {
      return (0, s.jsx)("div", {
        className: "panel pg-skel",
        "data-testid": "loading",
        "aria-busy": "true",
        "aria-label": "Loading leaderboard",
        children: Array.from({ length: 8 }, (e, l) =>
          (0, s.jsxs)(
            "div",
            {
              className: "pg-lb-skel",
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("span", { className: "skeleton pg-dot" }),
                (0, s.jsx)("span", { className: "skeleton pg-line md" }),
                (0, s.jsx)("span", { className: "skeleton pg-line sm" }),
              ],
            },
            l
          )
        ),
      });
    }
    e.s([
      "default",
      0,
      function () {
        let { me: e, notify: u } = (0, a.useWallet)(),
          m = (0, l.useRef)(u);
        (0, l.useEffect)(() => {
          m.current = u;
        }, [u]);
        let [p, h] = (0, l.useState)(null),
          [x, j] = (0, l.useState)(null),
          g = (0, l.useRef)(!1),
          y = (0, r.useRequestSeq)(),
          b = e?.wallet ?? null,
          f = (0, l.useCallback)(async () => {
            let { signal: e, fresh: s } = y();
            try {
              let l = await (0, r.apiGet)("/api/leaderboard", { signal: e });
              if (!s()) return;
              h({
                leaderboard: Array.isArray(l?.leaderboard) ? l.leaderboard : [],
                me: l?.me ?? null,
              }),
                j(null),
                (g.current = !1);
            } catch (e) {
              if ((0, r.isAbort)(e) || !s()) return;
              g.current || m.current?.((0, i.copyFor)(e, e.message), "err"),
                (g.current = !0),
                j(e);
            }
          }, [y]);
        (0, l.useEffect)(() => {
          f();
          let e = setInterval(f, 3e4);
          return () => clearInterval(e);
        }, [f, b]);
        let N = p?.leaderboard ?? [],
          k = p?.me ?? null,
          v = Number(k?.settled ?? 0);
        return (0, s.jsxs)("div", {
          className: "wrap app-main",
          "data-testid": "leaderboard-page",
          children: [
            (0, s.jsxs)("div", {
              className: "page-head",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("h1", {
                      className: "font-display",
                      children: "Leaderboard",
                    }),
                    (0, s.jsx)("p", {
                      className: "muted small",
                      children:
                        "Ranked by realised profit across settled pools. Accuracy is the average across every pool a wallet has finished.",
                    }),
                  ],
                }),
                k
                  ? (0, s.jsx)("p", {
                      className: "pg-lb-me",
                      "data-testid": "leaderboard-me",
                      children: k.rank
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              "You are ",
                              (0, s.jsxs)("b", { children: ["#", k.rank] }),
                              " ·",
                              " ",
                              (0, s.jsxs)("b", {
                                className:
                                  (0, r.big)(k.pnl) >= 0n ? "up" : "down",
                                children: [
                                  (0, n.fmtSigned)((0, r.big)(k.pnl)),
                                  " ",
                                  (0, s.jsx)(t.Usdg, {}),
                                ],
                              }),
                            ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              "Not ranked yet · ",
                              v,
                              " settled pool",
                              1 === v ? "" : "s",
                            ],
                          }),
                    })
                  : null,
              ],
            }),
            p
              ? 0 === N.length
                ? (0, s.jsx)("div", {
                    className: "panel",
                    children: (0, s.jsx)("p", {
                      className: "muted center pad",
                      children:
                        "No pools have settled yet. The board fills in as markets resolve.",
                    }),
                  })
                : (0, s.jsx)("div", {
                    className: "panel",
                    children: (0, s.jsx)("div", {
                      className: "pg-table-scroll",
                      children: (0, s.jsxs)("table", {
                        className: "results lb pg-wide",
                        children: [
                          (0, s.jsx)("caption", {
                            className: "sr-only",
                            children:
                              "The fifty most profitable wallets across settled pools",
                          }),
                          (0, s.jsx)("thead", {
                            children: (0, s.jsxs)("tr", {
                              children: [
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "#",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Wallet",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Pools",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Wins",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Avg accuracy",
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  children: "Best",
                                }),
                                (0, s.jsxs)("th", {
                                  scope: "col",
                                  children: [
                                    "Staked (",
                                    (0, s.jsx)(t.Usdg, {}),
                                    ")",
                                  ],
                                }),
                                (0, s.jsxs)("th", {
                                  scope: "col",
                                  children: [
                                    "P&L (",
                                    (0, s.jsx)(t.Usdg, {}),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("tbody", {
                            children: (0, c.withKeys)(N, (e) =>
                              String(e.handle)
                            ).map(({ key: e, item: l, index: t }) => {
                              let a = (0, r.big)(l.pnl),
                                i = Number(l.rank) || t + 1;
                              return (0, s.jsxs)(
                                "tr",
                                {
                                  className: "fade-up" + (l.isMe ? " me" : ""),
                                  style: (0, r.stagger)(t),
                                  "data-testid": "leaderboard-row",
                                  "data-me": l.isMe ? "1" : "0",
                                  children: [
                                    (0, s.jsx)("td", {
                                      children: (0, s.jsx)("span", {
                                        className: "rank r" + Math.min(i, 4),
                                        children: i,
                                      }),
                                    }),
                                    (0, s.jsxs)("td", {
                                      children: [
                                        l.handle,
                                        l.isMe
                                          ? (0, s.jsx)("em", {
                                              children: " you",
                                            })
                                          : null,
                                      ],
                                    }),
                                    (0, s.jsx)("td", {
                                      children: l.pools ?? 0,
                                    }),
                                    (0, s.jsx)("td", { children: l.wins ?? 0 }),
                                    (0, s.jsx)("td", {
                                      children: d(l.avgAccuracy),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: d(l.bestAccuracy),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: (0, n.fmtUnits)(
                                        (0, r.big)(l.staked)
                                      ),
                                    }),
                                    (0, s.jsx)("td", {
                                      className: a >= 0n ? "up" : "down",
                                      children: (0, n.fmtSigned)(a),
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
                  })
              : x
              ? (0, s.jsx)(r.LoadError, {
                  testid: "leaderboard-error",
                  retryTestid: "leaderboard-retry",
                  error: x,
                  onRetry: f,
                })
              : (0, s.jsx)(o, {}),
          ],
        });
      },
    ]);
  },
  65831,
  (e) => {
    "use strict";
    var s = e.i(43476),
      l = e.i(71645),
      t = e.i(22016),
      a = e.i(3769),
      r = e.i(86687),
      n = e.i(17587),
      i = e.i(72099),
      c = e.i(80729),
      d = e.i(46979),
      o = e.i(20187);
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
    let x = (e) => ({ "--i": Math.min(e, 12) }),
      j = (e) => {
        let s = String(e ?? "")
          .trim()
          .toLowerCase();
        return p[s] ?? s;
      },
      g = (e) => e?.name === "AbortError";
    async function y(e, { signal: s } = {}) {
      let l = await fetch((0, r.apiPath)(e), {
          cache: "no-store",
          credentials: "same-origin",
          signal: s,
        }),
        t = await l.json().catch(() => ({}));
      if (!l.ok)
        throw Object.assign(Error(t.error ?? `request failed (${l.status})`), {
          status: l.status,
          code: t.code ?? null,
        });
      return t;
    }
    function b() {
      let e = (0, l.useRef)(0),
        s = (0, l.useRef)(null);
      return (
        (0, l.useEffect)(() => () => s.current?.abort(), []),
        (0, l.useCallback)(() => {
          s.current?.abort();
          let l = new AbortController();
          s.current = l;
          let t = (e.current += 1);
          return { signal: l.signal, fresh: () => t === e.current };
        }, [])
      );
    }
    function f({ testid: e, retryTestid: l, error: t, onRetry: a }) {
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
            children: (0, c.copyFor)(t, t?.message),
          }),
          (0, s.jsx)("button", {
            type: "button",
            className: "ghost",
            onClick: a,
            "data-testid": l,
            children: "Retry",
          }),
        ],
      });
    }
    function N({ market: e, now: l, index: a }) {
      let r = A(e.price),
        c = (0, d.fmtLocalTime)(e.closes_at, { withDate: !0 });
      return (0, s.jsxs)(t.default, {
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
                  (0, s.jsx)("span", { children: k(e.status) }),
                  (0, s.jsx)("b", {
                    className: "font-mono",
                    children: (function (e, s) {
                      if ("resolved" === e.status) return "Settled";
                      if ("void" === e.status) return "Voided";
                      if ("closed" === e.status) return "Settling…";
                      let l = "scheduled" === e.status,
                        t =
                          new Date(l ? e.opens_at : e.closes_at).getTime() - s;
                      return t <= 0
                        ? l
                          ? "Opening…"
                          : "Settling…"
                        : (0, d.humanize)(t);
                    })(e, l),
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
        children: Array.from({ length: 6 }, (e, l) =>
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
            l
          )
        ),
      });
    }
    function S({ market: e, size: t = "" }) {
      let a = e?.logo_url ? (0, r.assetPath)(e.logo_url) : null,
        [n, i] = (0, l.useState)(null),
        c = String(e?.symbol ?? "?"),
        d = "sm" === t ? 32 : 44;
      return a && n !== a
        ? (0, s.jsx)("img", {
            className: "coin-badge img " + t,
            src: a,
            alt: c,
            width: d,
            height: d,
            onError: () => i(a),
            loading: "lazy",
            decoding: "async",
          })
        : (0, s.jsx)("span", {
            className: "coin-badge " + t,
            role: "img",
            "aria-label": c,
            children: c.slice(0, 3),
          });
    }
    function A(e) {
      let s = (0, l.useRef)(e),
        [t, a] = (0, l.useState)({ cls: "", n: 0 });
      return (
        (0, l.useEffect)(() => {
          let l = s.current;
          if (((s.current = e), null == l || null == e)) return;
          let t = Number(l),
            r = Number(e);
          if (!Number.isFinite(t) || !Number.isFinite(r) || t === r) return;
          a((e) => ({ cls: r > t ? "flash-up" : "flash-down", n: e.n + 1 }));
          let n = setTimeout(() => a((e) => ({ cls: "", n: e.n })), 600);
          return () => clearTimeout(n);
        }, [e]),
        t
      );
    }
    e.s([
      "CoinBadge",
      0,
      S,
      "LoadError",
      0,
      f,
      "apiGet",
      0,
      y,
      "big",
      0,
      h,
      "categoryKey",
      0,
      j,
      "default",
      0,
      function () {
        let { me: e, notify: t } = (0, a.useWallet)(),
          r = (0, l.useRef)(t);
        (0, l.useEffect)(() => {
          r.current = t;
        }, [t]);
        let [n, i] = (0, l.useState)([]),
          [d, p] = (0, l.useState)("live"),
          [h, x] = (0, l.useState)("all"),
          [k, v] = (0, l.useState)(() => Date.now()),
          [S, A] = (0, l.useState)(!1),
          [R, P] = (0, l.useState)(null),
          C = (0, l.useRef)(!1),
          E = b(),
          T = e?.wallet ?? null,
          L = (0, l.useCallback)(async () => {
            let { signal: e, fresh: s } = E();
            try {
              let l = await y("/api/markets", { signal: e });
              if (!s()) return;
              i(Array.isArray(l?.markets) ? l.markets : []),
                P(null),
                A(!0),
                (C.current = !1);
            } catch (e) {
              if (g(e) || !s()) return;
              C.current || r.current?.((0, c.copyFor)(e, e.message), "err"),
                (C.current = !0),
                P(e),
                A(!0);
            }
          }, [E]);
        (0, l.useEffect)(() => {
          L();
          let e = setInterval(L, 15e3);
          return () => clearInterval(e);
        }, [L, T]),
          (0, l.useEffect)(() => {
            let e = setInterval(() => v(Date.now()), 1e3);
            return () => clearInterval(e);
          }, []);
        let F = n.filter(
            (e) =>
              "all" === d ||
              ("live" === d
                ? "open" === e.status || "closed" === e.status
                : "upcoming" === d
                ? "scheduled" === e.status
                : "resolved" === e.status || "void" === e.status)
          ),
          U = F.filter((e) => "all" === h || j(e.category) === h),
          M = R && 0 === n.length;
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
                let l;
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
                          ? ((l = e.key),
                            F.filter((e) => "all" === l || j(e.category) === l)
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
              ? M
                ? (0, s.jsx)(f, {
                    testid: "pools-error",
                    retryTestid: "pools-retry",
                    error: R,
                    onRetry: L,
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
                              p("all"), x("all");
                            },
                            children: "Show all pools",
                          })
                        : null,
                    ],
                  })
                : (0, s.jsx)("div", {
                    className: "pool-cards",
                    children: U.map((e, l) =>
                      (0, s.jsx)(N, { market: e, now: k, index: l }, e.id)
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
        (0, l.useEffect)(() => {
          if ("function" != typeof window.matchMedia) return;
          let s = null,
            l = null,
            t = !0,
            a = () => {
              s && l && s.removeEventListener("change", l),
                (s = null),
                (l = null);
            },
            r = () => {
              t &&
                ((s = window.matchMedia(
                  `(resolution: ${window.devicePixelRatio || 1}dppx)`
                )),
                (l = () => {
                  a(), e.current?.(), r();
                }),
                s.addEventListener("change", l));
            };
          return (
            r(),
            () => {
              (t = !1), a();
            }
          );
        }, [e]);
      },
      "usePriceFlash",
      0,
      A,
      "useRequestSeq",
      0,
      b,
    ]);
  },
]);
