(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  3769,
  78334,
  72099,
  46979,
  80729,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(22016),
      r = e.i(71645),
      a = e.i(86687);
    function l({ src: e, alt: n = "", size: r = 16, className: i = "" }) {
      return (0, t.jsx)("img", {
        className: i ? `tok-icon ${i}` : "tok-icon",
        src: (0, a.assetPath)(e),
        alt: n,
        width: r,
        height: r,
        loading: "lazy",
        decoding: "async",
        "aria-hidden": n ? void 0 : "true",
      });
    }
    function i({ size: e = 16, alt: n = "", className: r = "" }) {
      return (0, t.jsx)(l, { src: a.USDG.logo, alt: n, size: e, className: r });
    }
    function s({ size: e = 16, alt: n = "", className: r = "" }) {
      return (0, t.jsx)(l, {
        src: "/logos/robinhood.png",
        alt: n,
        size: e,
        className: r,
      });
    }
    e.s(
      [
        "NetworkLine",
        0,
        function ({ label: e = "Network", className: n = "" }) {
          return (0, t.jsxs)("p", {
            className: n ? `tok-network ${n}` : "tok-network",
            "data-testid": "funds-network",
            children: [(0, t.jsx)(s, { size: 16 }), e, ": ", a.CHAIN_NAME],
          });
        },
        "RobinhoodIcon",
        0,
        s,
        "Usdg",
        0,
        function ({ size: e = 16 }) {
          return (0, t.jsxs)("span", {
            className: "tok-pair",
            children: [(0, t.jsx)(i, { size: e }), a.USDG.symbol],
          });
        },
        "UsdgIcon",
        0,
        i,
        "default",
        0,
        l,
      ],
      78334
    );
    var o = e.i(74080);
    let u = [
        { front: "#a855f7", back: "#7c3aed" },
        { front: "#ff07fe", back: "#b906b8" },
        { front: "#ffffff", back: "#c9c2d4" },
      ],
      c = (e, t) => Math.random() * (t - e) + e;
    function d(e) {
      let t = Math.abs(Number(e) || 0);
      return 0 === t
        ? 4
        : t >= 1e3
        ? 2
        : t >= 1
        ? 4
        : t >= 0.01
        ? 5
        : Math.min(12, Math.ceil(-Math.log10(t)) + 4);
    }
    let h = (e) => (e ? `${e.slice(0, 6)}…${e.slice(-4)}` : "");
    e.s(
      [
        "fmtPrice",
        0,
        function (e, { symbol: t = "$" } = {}) {
          if (null == e || "" === e) return "—";
          let n = Number(e);
          if (!Number.isFinite(n)) return "—";
          let r = d(n);
          return (
            t +
            n.toLocaleString("en-US", {
              minimumFractionDigits: r,
              maximumFractionDigits: r,
            })
          );
        },
        "priceStep",
        0,
        (e) => {
          let t = d(e);
          return Number((10 ** -t).toFixed(t));
        },
        "priceValue",
        0,
        (e) => {
          let t = Number(e);
          return Number.isFinite(t) ? t.toFixed(d(t)) : "";
        },
        "shortAddress",
        0,
        h,
      ],
      72099
    );
    let f = 0,
      m = "";
    function p() {
      if ("u" < typeof document) return () => {};
      0 === f && (m = document.body.style.overflow),
        (f += 1),
        (document.body.style.overflow = "hidden");
      let e = !1;
      return () => {
        e ||
          ((e = !0),
          0 === (f = Math.max(0, f - 1)) && (document.body.style.overflow = m));
      };
    }
    async function w(e) {
      let t = String(e ?? "");
      if (!t) return !1;
      try {
        if (navigator?.clipboard?.writeText)
          return await navigator.clipboard.writeText(t), !0;
      } catch {}
      try {
        let e = document.createElement("textarea");
        (e.value = t),
          e.setAttribute("readonly", ""),
          (e.style.position = "fixed"),
          (e.style.top = "-1000px"),
          (e.style.opacity = "0"),
          document.body.appendChild(e),
          e.select();
        let n = document.execCommand("copy");
        return e.remove(), n;
      } catch {
        return !1;
      }
    }
    e.s(
      [
        "copyText",
        0,
        w,
        "fmtLocalTime",
        0,
        function (e, { withDate: t = !1 } = {}) {
          let n = e instanceof Date ? e : new Date(e ?? NaN);
          if (!(n instanceof Date) || Number.isNaN(n.getTime()))
            return { text: "—", utc: "" };
          let r = n.toLocaleTimeString(void 0, {
            hour: "2-digit",
            minute: "2-digit",
          });
          return {
            text: t
              ? `${n.toLocaleDateString(void 0, {
                  month: "short",
                  day: "numeric",
                })}, ${r}`
              : r,
            utc: `${n.toISOString().slice(0, 16).replace("T", " ")} UTC`,
          };
        },
        "humanize",
        0,
        function (e, { past: t = !1 } = {}) {
          let n,
            r = Number(e);
          if (!Number.isFinite(r)) return "—";
          let a = Math.max(0, Math.floor(r / 1e3));
          if (a < 1) return t ? "just now" : "now";
          let l = a % 60,
            i = Math.floor(a / 60) % 60,
            s = Math.floor(a / 3600) % 24,
            o = Math.floor(a / 86400);
          return (
            (n =
              o > 0
                ? s > 0
                  ? `${o}d ${s}h`
                  : `${o}d`
                : s > 0
                ? i > 0
                  ? `${s}h ${i}m`
                  : `${s}h`
                : i > 0
                ? l > 0
                  ? `${i}m ${l}s`
                  : `${i}m`
                : `${l}s`),
            t ? `${n} ago` : n
          );
        },
        "lockScroll",
        0,
        p,
        "useSessionCheck",
        0,
        function (e, t) {
          let n = null != e,
            [a, l] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              if (n) return;
              let e = setTimeout(() => {
                if ((l(!0), "function" == typeof t))
                  try {
                    t();
                  } catch {}
              }, 2500);
              return () => clearTimeout(e);
            }, [n, t]),
            !n && !a
          );
        },
        "withKeys",
        0,
        function (e, t) {
          let n = Array.isArray(e) ? e : [],
            r = new Map();
          return n.map((e, n) => {
            let a = "function" == typeof t ? t(e, n) : e?.id,
              l = null == a || "" === a ? `i${n}` : String(a),
              i = (r.get(l) ?? 0) + 1;
            return (
              r.set(l, i), { key: 1 === i ? l : `${l}#${i}`, item: e, index: n }
            );
          });
        },
      ],
      46979
    );
    let y = {
      deposit: {
        head: "Deposit",
        sub: `Moving USDG into your ${a.CHAIN_NAME} balance.`,
      },
      withdraw: {
        head: "Withdrawal",
        sub: "Sending USDG back to your wallet.",
      },
      forecast: { head: "Forecast", sub: "Locking your stake into the pool." },
    };
    function g({ state: e }) {
      return "active" === e
        ? (0, t.jsx)("span", { className: "spin", "aria-hidden": "true" })
        : "done" === e
        ? (0, t.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
              d: "M3 8.4 6.2 11.6 13 4.8",
              stroke: "currentColor",
              strokeWidth: "2.2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          })
        : "failed" === e
        ? (0, t.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
              d: "M4 4l8 8M12 4l-8 8",
              stroke: "currentColor",
              strokeWidth: "2.2",
              strokeLinecap: "round",
            }),
          })
        : (0, t.jsx)("span", { className: "tx-dot", "aria-hidden": "true" });
    }
    function E({ label: e, children: n, testid: r }) {
      return (0, t.jsxs)("div", {
        className: "tx-row",
        children: [
          (0, t.jsx)("span", { children: e }),
          (0, t.jsx)("b", { "data-testid": r, children: n }),
        ],
      });
    }
    function N({
      tx: e,
      onClose: n,
      lastDepositHash: l = null,
      wallet: d = null,
    }) {
      let f = (0, r.useRef)(null),
        [m, w] = (0, r.useState)(!1),
        [b, T] = (0, r.useState)(!1),
        S = "done" === e.status || "failed" === e.status,
        x = y[e.kind] ?? y.deposit;
      (0, r.useEffect)(() => T(!0), []);
      let A = (0, r.useRef)(null),
        I = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        if (b && "done" === e.status && I.current !== e.id)
          return (
            (I.current = e.id),
            (function (e, { count: t = 140, duration: n = 2200 } = {}) {
              let r = () => {};
              if (
                !e ||
                window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
              )
                return r;
              let a = e.getContext?.("2d"),
                l = e.getBoundingClientRect();
              if (!a || !l.width || !l.height) return r;
              let i = Math.min(window.devicePixelRatio || 1, 2),
                s = (e.width = Math.round(l.width * i)),
                o = (e.height = Math.round(l.height * i)),
                d = s / 2,
                h = o / 2,
                f = Array.from({ length: t }, () => {
                  var e, t, n;
                  let r, a, l;
                  return (
                    (e = 0.16 * s),
                    {
                      circle: (r = 0.32 > Math.random()),
                      color: u[(Math.random() * u.length) | 0],
                      x: d + c(-e, e),
                      y: h + c(-10, 10) * i,
                      w: c(4.5, 8) * i,
                      h: c(7, 13) * i,
                      r: c(1.6, 3.2) * i,
                      rot: c(0, 2 * Math.PI),
                      spin: c(-0.09, 0.09),
                      wobble: c(0, 99),
                      scaleY: 1,
                      vx: c(-7.5, 7.5) * i,
                      vy:
                        ((t = r ? 7 : 5),
                        (a = (n = r ? 12 : 10) - t + 1),
                        (l = n - Math.abs(c(0, a) + c(0, a) - a)) >= n - 1 &&
                          0.25 > Math.random() &&
                          (l += c(1, 3)),
                        -l * i),
                    }
                  );
                }),
                m = 0,
                p = 0,
                w = performance.now(),
                y = (e) => {
                  let t = p ? Math.min((e - p) / 16.667, 3) : 1;
                  p = e;
                  let r = Math.min((e - w) / n, 1),
                    l = r <= 0.5 ? 1 : 1 - (1 - (1 - (r - 0.5) / 0.5) ** 3);
                  for (let e of (a.clearRect(0, 0, s, o), f)) {
                    if (
                      ((e.vx -= 0.06 * e.vx * t),
                      (e.vy = Math.min(e.vy + 0.26 * i * t, 3.4 * i)),
                      (e.vx += (Math.random() - 0.5) * 0.9 * i * t),
                      (e.x += e.vx * t),
                      (e.y += e.vy * t),
                      (e.rot += e.spin * t),
                      (e.scaleY = Math.cos((e.y / i + e.wobble) * 0.09)),
                      a.save(),
                      (a.globalAlpha = l),
                      a.translate(e.x, e.y),
                      e.circle)
                    )
                      (a.fillStyle = e.color.front),
                        a.beginPath(),
                        a.arc(0, 0, e.r, 0, 2 * Math.PI),
                        a.fill();
                    else {
                      a.rotate(e.rot);
                      let t = e.h * e.scaleY;
                      (a.fillStyle =
                        e.scaleY > 0 ? e.color.front : e.color.back),
                        a.fillRect(-e.w / 2, -t / 2, e.w, t);
                    }
                    a.restore();
                  }
                  r < 1
                    ? (m = requestAnimationFrame(y))
                    : a.clearRect(0, 0, s, o);
                };
              return (
                (m = requestAnimationFrame(y)),
                () => {
                  cancelAnimationFrame(m), a.clearRect(0, 0, s, o);
                }
              );
            })(A.current, { count: "forecast" === e.kind ? 110 : 140 })
          );
      }, [b, e.status, e.id, e.kind]);
      let _ = (0, r.useRef)(null),
        k = (0, r.useCallback)(() => {
          m || (w(!0), (_.current = setTimeout(n, 160)));
        }, [m, n]);
      if (
        ((0, r.useEffect)(() => () => clearTimeout(_.current), []),
        (0, r.useEffect)(() => {
          if (!b) return;
          let e = document.activeElement;
          f.current?.focus?.({ preventScroll: !0 });
          let t = p();
          return () => {
            t(),
              e &&
                "function" == typeof e.focus &&
                document.contains(e) &&
                e.focus({ preventScroll: !0 });
          };
        }, [b]),
        (0, r.useEffect)(() => {
          let e = (e) => {
            "Escape" === e.key && S && (e.stopPropagation(), k());
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [S, k]),
        !b)
      )
        return null;
      let v = e.summary,
        D = v?.wallet ?? d,
        C =
          "done" !== e.status
            ? null
            : e.hash
            ? {
                href: (0, a.explorerTx)(e.hash),
                label: "View on Robinhood explorer",
              }
            : "forecast" !== e.kind
            ? null
            : l
            ? {
                href: (0, a.explorerTx)(l),
                label: "View on Robinhood explorer",
              }
            : D
            ? {
                href: (0, a.explorerAddress)(D),
                label: "View your wallet on Robinhood explorer",
              }
            : null,
        O = (0, t.jsx)("div", {
          className: `tx-modal${m ? " is-closing" : ""}`,
          onMouseDown: (e) => {
            e.target === e.currentTarget && S && k();
          },
          children: (0, t.jsxs)("div", {
            ref: f,
            className: "tx-box",
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": !S,
            "aria-labelledby": "tx-progress-title",
            "data-testid": "tx-progress",
            "data-kind": e.kind,
            "data-status": e.status,
            tabIndex: -1,
            children: [
              (0, t.jsx)("canvas", {
                ref: A,
                className: "tx-confetti",
                "aria-hidden": "true",
              }),
              (0, t.jsxs)("div", {
                className: "tx-head",
                children: [
                  (0, t.jsx)("h3", {
                    id: "tx-progress-title",
                    className: "font-display",
                    children: x.head,
                  }),
                  (0, t.jsx)("p", {
                    className: "tx-sub",
                    children:
                      "failed" === e.status ? "Something stopped it." : x.sub,
                  }),
                ],
              }),
              (0, t.jsx)("ol", {
                className: "tx-steps",
                children: e.steps.map((n, r) => {
                  let a;
                  return (0, t.jsxs)(
                    "li",
                    {
                      className: "tx-step",
                      "data-testid": "tx-step",
                      "data-key": n.key,
                      "data-state": n.state,
                      style: { "--i": r },
                      children: [
                        (0, t.jsx)("span", {
                          className: "tx-step-ico",
                          children: (0, t.jsx)(g, { state: n.state }),
                        }),
                        (0, t.jsxs)("span", {
                          className: "tx-step-body",
                          children: [
                            (0, t.jsxs)("span", {
                              className: "tx-step-label",
                              children: [
                                n.label,
                                n.detail
                                  ? (0, t.jsxs)("em", {
                                      children: [" (", n.detail, ")"],
                                    })
                                  : null,
                              ],
                            }),
                            n.hash
                              ? (0, t.jsx)("code", {
                                  className: "tx-step-hash",
                                  "data-testid": "tx-hash",
                                  children: (a = n.hash)
                                    ? `${a.slice(0, 10)}…${a.slice(-6)}`
                                    : "",
                                })
                              : null,
                            n.note && "active" === n.state
                              ? (0, t.jsx)("em", {
                                  className: "tx-step-note",
                                  children: n.note,
                                })
                              : null,
                            "failed" === n.state && e.error
                              ? (0, t.jsx)("em", {
                                  className: "tx-step-error",
                                  children: e.error,
                                })
                              : null,
                          ],
                        }),
                      ],
                    },
                    n.key
                  );
                }),
              }),
              v
                ? (0, t.jsxs)("div", {
                    className: "tx-summary",
                    "data-testid": "tx-summary",
                    children: [
                      (0, t.jsxs)(E, {
                        label: "Amount",
                        testid: "tx-amount",
                        children: [(0, t.jsx)(i, {}), " ", v.amountText],
                      }),
                      v.feeText
                        ? (0, t.jsxs)(E, {
                            label: "Fee",
                            children: [(0, t.jsx)(i, {}), " ", v.feeText],
                          })
                        : null,
                      v.poolText
                        ? (0, t.jsx)(E, { label: "Pool", children: v.poolText })
                        : null,
                      "forecast" === e.kind
                        ? null
                        : (0, t.jsxs)(E, {
                            label: "Network",
                            children: [(0, t.jsx)(s, {}), " ", a.CHAIN_NAME],
                          }),
                      (0, t.jsxs)(E, {
                        label: "New balance",
                        testid: "tx-balance",
                        children: [(0, t.jsx)(i, {}), " ", v.balanceText],
                      }),
                      (0, t.jsx)(E, {
                        label: "Wallet",
                        children: (0, t.jsx)("code", { children: h(v.wallet) }),
                      }),
                    ],
                  })
                : null,
              S
                ? (0, t.jsxs)("div", {
                    className: "tx-actions",
                    children: [
                      C
                        ? (0, t.jsxs)("a", {
                            className: "pill wide",
                            href: C.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-testid": "tx-explorer-link",
                            children: [
                              (0, t.jsx)(s, {}),
                              " ",
                              (0, t.jsx)("span", { children: C.label }),
                            ],
                          })
                        : null,
                      (0, t.jsx)("button", {
                        type: "button",
                        className: C ? "ghost wide" : "pill wide",
                        "data-testid":
                          "failed" === e.status ? "tx-close" : "tx-done",
                        onClick: k,
                        children: "failed" === e.status ? "Close" : "Done",
                      }),
                    ],
                  })
                : null,
            ],
          }),
        });
      return (0, o.createPortal)(O, document.body);
    }
    let b = Object.freeze({
      NOT_SIGNED_IN: "NOT_SIGNED_IN",
      BAD_SIGNATURE: "BAD_SIGNATURE",
      NONCE_INVALID: "NONCE_INVALID",
      HOST_NOT_ALLOWED: "HOST_NOT_ALLOWED",
      UNAUTHORIZED: "UNAUTHORIZED",
      INVALID_INPUT: "INVALID_INPUT",
      INVALID_AMOUNT: "INVALID_AMOUNT",
      BELOW_MINIMUM: "BELOW_MINIMUM",
      ABOVE_MAXIMUM: "ABOVE_MAXIMUM",
      MARKET_NOT_FOUND: "MARKET_NOT_FOUND",
      MARKET_CLOSED: "MARKET_CLOSED",
      STAKE_BELOW_MINIMUM: "STAKE_BELOW_MINIMUM",
      INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
      DEPOSIT_UNKNOWN_TX: "DEPOSIT_UNKNOWN_TX",
      DEPOSIT_PENDING: "DEPOSIT_PENDING",
      DEPOSIT_REVERTED: "DEPOSIT_REVERTED",
      DEPOSIT_NOT_YOURS: "DEPOSIT_NOT_YOURS",
      DEPOSITS_PAUSED: "DEPOSITS_PAUSED",
      WITHDRAWALS_PAUSED: "WITHDRAWALS_PAUSED",
      WITHDRAWALS_UNAVAILABLE: "WITHDRAWALS_UNAVAILABLE",
      RATE_LIMITED: "RATE_LIMITED",
      GEO_BLOCKED: "GEO_BLOCKED",
      SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
      INTERNAL: "INTERNAL",
    });
    b.MARKET_NOT_FOUND,
      b.MARKET_CLOSED,
      b.STAKE_BELOW_MINIMUM,
      b.INSUFFICIENT_BALANCE,
      b.BELOW_MINIMUM,
      Object.freeze({
        [b.NOT_SIGNED_IN]: 401,
        [b.BAD_SIGNATURE]: 401,
        [b.NONCE_INVALID]: 401,
        [b.UNAUTHORIZED]: 401,
        [b.HOST_NOT_ALLOWED]: 400,
        [b.MARKET_NOT_FOUND]: 404,
        [b.MARKET_CLOSED]: 409,
        [b.STAKE_BELOW_MINIMUM]: 400,
        [b.INSUFFICIENT_BALANCE]: 409,
        [b.DEPOSIT_UNKNOWN_TX]: 404,
        [b.DEPOSIT_PENDING]: 202,
        [b.DEPOSIT_REVERTED]: 409,
        [b.DEPOSIT_NOT_YOURS]: 403,
        [b.DEPOSITS_PAUSED]: 503,
        [b.WITHDRAWALS_PAUSED]: 503,
        [b.WITHDRAWALS_UNAVAILABLE]: 503,
        [b.RATE_LIMITED]: 429,
        [b.GEO_BLOCKED]: 451,
        [b.SERVICE_UNAVAILABLE]: 503,
        [b.INTERNAL]: 500,
      });
    let T = Object.freeze({
        [b.NOT_SIGNED_IN]:
          "You are not signed in. Connect your wallet to continue.",
        [b.BAD_SIGNATURE]:
          "That signature did not check out. Try connecting again.",
        [b.NONCE_INVALID]: "This sign-in request expired. Connect again.",
        [b.HOST_NOT_ALLOWED]: "This page is not allowed to sign you in.",
        [b.UNAUTHORIZED]: "Your session expired. Connect again to continue.",
        [b.INVALID_INPUT]: "Check the details and try again.",
        [b.INVALID_AMOUNT]:
          "That amount is not valid. Enter a number like 12.50.",
        [b.BELOW_MINIMUM]: "That amount is below the minimum.",
        [b.ABOVE_MAXIMUM]: "That amount is above the maximum.",
        [b.MARKET_NOT_FOUND]: "That pool no longer exists.",
        [b.MARKET_CLOSED]: "This pool has closed — no more forecasts.",
        [b.STAKE_BELOW_MINIMUM]: "Your stake is below this pool's minimum.",
        [b.INSUFFICIENT_BALANCE]:
          "Not enough balance. Deposit or free up funds in play.",
        [b.DEPOSIT_UNKNOWN_TX]:
          "The chain has not seen that transaction yet. Give it a moment.",
        [b.DEPOSIT_PENDING]: "Your deposit is still confirming on chain.",
        [b.DEPOSIT_REVERTED]:
          "That transaction failed on chain. Nothing was moved.",
        [b.DEPOSIT_NOT_YOURS]: "That deposit was sent from a different wallet.",
        [b.DEPOSITS_PAUSED]:
          "Deposits are paused right now. Try again shortly.",
        [b.WITHDRAWALS_PAUSED]:
          "Withdrawals are paused right now. Try again shortly.",
        [b.WITHDRAWALS_UNAVAILABLE]:
          "Withdrawals are unavailable right now. Try again shortly.",
        [b.RATE_LIMITED]:
          "Too many requests. Wait a few seconds and try again.",
        [b.GEO_BLOCKED]: "HOP is not available from your location.",
        [b.SERVICE_UNAVAILABLE]:
          "The service is briefly unavailable. Try again in a moment.",
        [b.INTERNAL]:
          "Something went wrong on our side. Try again in a moment.",
      }),
      S =
        "The transaction never reached the chain. Check your wallet and try again.";
    b.DEPOSIT_PENDING,
      b.DEPOSIT_UNKNOWN_TX,
      b.DEPOSITS_PAUSED,
      b.WITHDRAWALS_PAUSED,
      b.WITHDRAWALS_UNAVAILABLE,
      b.RATE_LIMITED,
      b.SERVICE_UNAVAILABLE,
      b.INTERNAL;
    let x = /^request failed \(\d{3}\)$/i,
      A = /^request failed \(5\d\d\)$/i,
      I = "Something went wrong. Try again.";
    function _(e, t) {
      let n = "string" == typeof e ? e : e?.code ?? null;
      if (n && T[n]) return T[n];
      let r =
        "string" == typeof t && t
          ? t
          : "string" == typeof e
          ? e
          : e?.error || e?.message || "";
      return r
        ? A.test(r.trim())
          ? T[b.INTERNAL]
          : x.test(r.trim())
          ? I
          : r
        : I;
    }
    e.s(["DEPOSIT_NEVER_LANDED", 0, S, "copyFor", 0, _], 80729);
    var k = e.i(17587);
    let v = [0, 120, 350, 800, 1400],
      D = [0, 300, 900],
      C = (e) => new Promise((t) => setTimeout(t, e)),
      O = (e) =>
        String(e)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "wallet";
    function L(e) {
      return e
        ? [
            e.message,
            e.shortMessage,
            e.reason,
            e.details,
            e.data?.message,
            "string" == typeof e.data ? e.data : e.data?.data,
            e.data?.originalError?.message,
            e.data?.originalError?.data,
            e.error?.message,
            e.error?.data?.message,
            e.cause?.message,
            e.cause?.data?.message,
          ]
            .filter((e) => "string" == typeof e && e)
            .join(" | ")
        : "";
    }
    function M(e) {
      let t =
        e?.code ??
        e?.data?.originalError?.code ??
        e?.error?.code ??
        e?.cause?.code;
      return "string" == typeof t && /^-?\d+$/.test(t) ? Number(t) : t;
    }
    let U = (e) => {
        let t = M(e);
        return (
          4001 === t ||
          "ACTION_REJECTED" === t ||
          /user rejected|user denied|user cancell?ed|rejected the request|request rejected|declined/i.test(
            L(e)
          )
        );
      },
      j = (e) =>
        -32601 === M(e) ||
        /method.*(not found|not supported|does not exist)/i.test(L(e)),
      R = (e) => {
        let t = L(e);
        return (
          !/revert|insufficient|exceeds|invalid|denied|rejected/i.test(t) &&
          (-32005 === M(e) ||
            /failed to fetch|fetch failed|network ?error|timeout|timed out|socket hang up|econnreset|etimedout|\b50[234]\b|rate.?limit|too many requests|header not found|could not coalesce/i.test(
              t
            ))
        );
      },
      $ = (e) =>
        (Array.isArray(e) ? e : [])
          .filter((e) => "string" == typeof e)
          .map((e) => e.toLowerCase());
    async function P(e) {
      let t = [];
      try {
        t = $(await e.request({ method: "eth_requestAccounts" }));
      } catch (n) {
        if (U(n) || !j(n)) throw n;
        t =
          "function" == typeof e.enable
            ? $(await e.enable())
            : $(await e.request({ method: "eth_accounts" }));
      }
      if (!t.length) throw Error("Your wallet did not share an account.");
      return t;
    }
    async function W(e) {
      try {
        return $(await e.request({ method: "eth_accounts" }));
      } catch {
        return [];
      }
    }
    function B(e) {
      if (("number" == typeof e && Number.isFinite(e)) || "bigint" == typeof e)
        return `0x${e.toString(16)}`;
      let t = String(e ?? "")
        .trim()
        .toLowerCase();
      return /^\d+$/.test(t) ? `0x${Number(t).toString(16)}` : t;
    }
    async function H(e) {
      return B(await e.request({ method: "eth_chainId" }));
    }
    let V = async (e) => {
      try {
        return (await H(e)) === a.CHAIN_HEX;
      } catch {
        return !1;
      }
    };
    async function G(e) {
      if (await V(e)) return;
      let t = () =>
        e.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: a.CHAIN_HEX }],
        });
      try {
        await t();
      } catch (n) {
        if (U(n)) throw n;
        try {
          await e.request({
            method: "wallet_addEthereumChain",
            params: [a.ADD_CHAIN_PARAMS],
          });
        } catch (e) {
          if (U(e)) throw e;
          throw 4902 === M(n) ||
            /unrecognized|not added|unknown chain|chain.*not.*(found|supported|configured)/i.test(
              L(n)
            )
            ? e
            : n;
        }
        (await V(e)) || (await t());
      }
      for (let t = 0; t < 6; t++) {
        if (await V(e)) return;
        await C(250);
      }
      throw Error(`Switch your wallet to ${a.CHAIN_NAME} to continue.`);
    }
    async function q(e, t, n) {
      let r = new TextEncoder().encode(String(n)),
        a = "0x";
      for (let e of r) a += e.toString(16).padStart(2, "0");
      let l = await e.request({ method: "personal_sign", params: [a, t] });
      if ("string" != typeof l || !/^0x[0-9a-f]+$/i.test(l))
        throw Error("Your wallet returned an unreadable signature.");
      return l;
    }
    async function F(e, t) {
      let n = [
        { from: t.from, to: t.to, data: t.data, value: t.value ?? "0x0" },
      ];
      for (let t = 0; ; t++)
        try {
          return await e.request({ method: "eth_estimateGas", params: n });
        } catch (e) {
          if (j(e)) return null;
          if (t >= 3 || !R(e)) throw e;
          await C(400 * (t + 1));
        }
    }
    async function K(e, t) {
      let n = await e.request({
        method: "eth_sendTransaction",
        params: [
          { from: t.from, to: t.to, data: t.data, value: t.value ?? "0x0" },
        ],
      });
      if ("string" != typeof n || !/^0x[0-9a-f]{64}$/i.test(n))
        throw Error("Your wallet did not return a transaction hash.");
      return n.toLowerCase();
    }
    async function Y(e, t, n = []) {
      try {
        return await e.request({ method: t, params: n });
      } catch {
        return null;
      }
    }
    function X(e) {
      if ("string" != typeof e || !/^0x[0-9a-f]*$/i.test(e) || "0x" === e)
        return null;
      try {
        return BigInt(e);
      } catch {
        return null;
      }
    }
    async function z(e, t) {
      return X(await Y(e, "eth_getBalance", [t, "latest"]));
    }
    async function J(e, t, n) {
      let r =
        "0x70a08231" +
        String(n ?? "")
          .replace(/^0x/i, "")
          .toLowerCase()
          .padStart(64, "0");
      return X(await Y(e, "eth_call", [{ to: t, data: r }, "latest"]));
    }
    async function Z(e, t) {
      let n = X(
        await Y(e, "eth_call", [{ to: t, data: "0x313ce567" }, "latest"])
      );
      return null == n || n < 0n || n > 36n ? null : Number(n);
    }
    let Q = (0, r.createContext)(null),
      ee = "bb:lastWallet",
      et = "bb:pendingDeposit",
      en = "bb:lastSeenPayoutAt",
      er = "bb:lastDepositHash",
      ea = (e) => new Promise((t) => setTimeout(t, e)),
      el = (e) => `${String(e).slice(0, 6)}…`,
      ei = {
        get(e) {
          try {
            return window.localStorage.getItem(e);
          } catch {
            return null;
          }
        },
        set(e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch {}
        },
        del(e) {
          try {
            window.localStorage.removeItem(e);
          } catch {}
        },
      };
    function es(e, { micro: t = !1 } = {}) {
      let n;
      try {
        n = t ? BigInt(e ?? 0) : (0, k.toUnits)(e);
      } catch {
        n = null;
      }
      if (null == n) return String(e ?? "");
      let r = (0, k.fromUnits)(n),
        a = r.startsWith("-"),
        [l, i = ""] = r.replace("-", "").split(".");
      return `${a ? "−" : ""}${BigInt(l).toLocaleString("en-US")}.${i.padEnd(
        2,
        "0"
      )}`;
    }
    function eo(e, t) {
      let n =
        e?.amountUsdg != null
          ? es(e.amountUsdg)
          : e?.amount != null
          ? es(e.amount, { micro: !0 })
          : es(t, { micro: !0 });
      return e?.newlyCredited === !1
        ? `Already credited earlier — ${n} ${a.USDG.symbol} is in your balance.`
        : `Deposited ${n} ${a.USDG.symbol}.`;
    }
    let eu = async (e, t, n) => {
      let r = await fetch((0, a.apiPath)(e), {
          method: n ?? (t ? "POST" : "GET"),
          headers: t ? { "content-type": "application/json" } : void 0,
          body: t ? JSON.stringify(t) : void 0,
          cache: "no-store",
          credentials: "same-origin",
        }),
        l = await r.json().catch(() => ({}));
      if (!r.ok)
        throw Object.assign(Error(l.error ?? `request failed (${r.status})`), {
          status: r.status,
          code: l.code ?? null,
          landed: l.landed ?? !1,
        });
      return l;
    };
    async function ec(e, t) {
      let n = await fetch((0, a.apiPath)(e), {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(t),
          cache: "no-store",
          credentials: "same-origin",
        }),
        r = await n.json().catch(() => ({}));
      return { status: n.status, json: r };
    }
    function ed(e) {
      let t,
        n = ei.get(et);
      if (!n) return null;
      try {
        t = JSON.parse(n);
      } catch {
        return ei.del(et), null;
      }
      let r = t
        ? (function (e) {
            let t = String(e ?? "");
            if (/^\d+$/.test(t)) return t;
            let n = (0, k.toUnits)(t);
            return null == n ? null : n.toString();
          })(t.amount)
        : null;
      return !(
        t &&
        "string" == typeof t.hash &&
        /^0x[0-9a-f]{64}$/i.test(t.hash) &&
        Number.isFinite(t.at) &&
        null != r
      ) || Date.now() - t.at >= 36e5
        ? (ei.del(et), null)
        : e && t.wallet === e
        ? { ...t, amount: r }
        : null;
    }
    function eh(e) {
      let t = ei.get(et);
      if (t) {
        try {
          if (JSON.parse(t)?.hash?.toLowerCase() !== String(e).toLowerCase())
            return;
        } catch {}
        ei.del(et);
      }
    }
    async function ef(e, t, n) {
      let [r, l] = await Promise.all([
        Y(e, "eth_gasPrice"),
        Y(e, "eth_getBalance", [t, "latest"]),
      ]);
      if (null == r || null == l) return;
      let i = !1;
      try {
        i = BigInt(l) < BigInt(n) * BigInt(r);
      } catch {
        return;
      }
      if (i)
        throw Object.assign(
          Error(
            `You need a little ETH on ${a.CHAIN_NAME} to pay the network fee.`
          ),
          { preflight: !0 }
        );
    }
    let em =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function ep(e, t, { canClose: n = !0, onBlocked: a, paused: l = !1 } = {}) {
      let i = (0, r.useRef)(t),
        s = (0, r.useRef)(n),
        o = (0, r.useRef)(a),
        u = (0, r.useRef)(l),
        c = (0, r.useRef)(!1);
      return (
        (0, r.useEffect)(() => {
          (i.current = t), (s.current = n), (o.current = a), (u.current = l);
        }),
        (0, r.useEffect)(() => {
          let t = e.current,
            n = document.activeElement,
            r = window.matchMedia?.("(pointer: fine)")?.matches,
            a =
              (r ? t?.querySelector("[data-autofocus]") : null) ??
              t?.querySelector(em);
          (r ? a ?? t : t)?.focus?.({ preventScroll: !0 });
          let l = p(),
            c = (e) => {
              if (u.current) return;
              if ("Escape" === e.key) {
                e.stopPropagation(), s.current ? i.current?.() : o.current?.();
                return;
              }
              if ("Tab" !== e.key || !t) return;
              let n = [...t.querySelectorAll(em)].filter(
                (e) => null !== e.offsetParent
              );
              if (!n.length) return;
              let r = n[0],
                a = n[n.length - 1];
              e.shiftKey &&
              (document.activeElement === r || document.activeElement === t)
                ? (e.preventDefault(), a.focus())
                : e.shiftKey ||
                  document.activeElement !== a ||
                  (e.preventDefault(), r.focus());
            };
          return (
            document.addEventListener("keydown", c),
            () => {
              document.removeEventListener("keydown", c),
                l(),
                n &&
                  "function" == typeof n.focus &&
                  document.contains(n) &&
                  n.focus({ preventScroll: !0 });
            }
          );
        }, [e]),
        {
          onMouseDown: (e) => {
            c.current = !u.current && e.target === e.currentTarget;
          },
          onClick: (e) => {
            c.current &&
              e.target === e.currentTarget &&
              s.current &&
              i.current?.(),
              (c.current = !1);
          },
        }
      );
    }
    async function ew(e, t) {
      let n = Date.now() + eg,
        r = t ?? null;
      for (; Date.now() < n; ) {
        await ea(2e3);
        let t = null;
        try {
          t = await eu("/api/me");
        } catch {
          continue;
        }
        let n = Array.isArray(t?.pendingWithdrawals)
            ? t.pendingWithdrawals
            : [],
          a = null == e ? n[0] : n.find((t) => String(t.id) === String(e));
        if ((a?.hash && (r = a.hash), !a)) return { hash: r, settled: !0 };
      }
      return { hash: r, settled: !1 };
    }
    let ey = {
        deposit: [
          { key: "prepare", label: "Preparing transaction" },
          { key: "sign", label: "Confirm in your wallet" },
          { key: "broadcast", label: `Broadcast on ${a.CHAIN_NAME}` },
          { key: "confirm", label: "Waiting for confirmations" },
          { key: "credit", label: "Crediting your balance" },
        ],
        withdraw: [
          { key: "check", label: "Checking balance" },
          { key: "sign", label: "Treasury signing" },
          { key: "broadcast", label: `Broadcast on ${a.CHAIN_NAME}` },
          { key: "confirmed", label: "Confirmed on chain" },
        ],
        forecast: [
          { key: "place", label: "Placing forecast" },
          { key: "lock", label: "Locked in the pool" },
        ],
      },
      eg = 12e4;
    function eE({
      wallets: e,
      discovered: n,
      onPick: a,
      onRetry: l,
      onClose: i,
    }) {
      let s = (0, r.useRef)(null),
        o = ep(s, i),
        u = !n && 0 === e.length;
      return (0, t.jsx)("div", {
        className: "modal",
        "data-testid": "wallet-picker",
        ...o,
        children: (0, t.jsxs)("div", {
          ref: s,
          className: "modal-box",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "wallet-picker-title",
          tabIndex: -1,
          children: [
            (0, t.jsxs)("div", {
              className: "modal-head",
              children: [
                (0, t.jsx)("h3", {
                  id: "wallet-picker-title",
                  className: "font-display",
                  children: "Connect a wallet",
                }),
                (0, t.jsx)("p", {
                  className: "modal-sub",
                  children:
                    "Sign in with any EVM wallet. Signing is free and moves no funds.",
                }),
              ],
            }),
            u
              ? (0, t.jsxs)("div", {
                  className: "wallet-list",
                  "aria-busy": "true",
                  "aria-label": "Looking for wallets",
                  children: [
                    (0, t.jsx)("span", { className: "wallet-row skeleton" }),
                    (0, t.jsx)("span", { className: "wallet-row skeleton" }),
                  ],
                })
              : 0 === e.length
              ? (0, t.jsxs)("div", {
                  className: "wallet-empty",
                  "data-testid": "wallet-picker-empty",
                  children: [
                    (0, t.jsx)("span", {
                      className: "wallet-empty-ico",
                      "aria-hidden": "true",
                      children: "!",
                    }),
                    (0, t.jsxs)("div", {
                      className: "wallet-empty-body",
                      children: [
                        (0, t.jsx)("p", {
                          children:
                            "No wallet detected — install Robinhood Wallet or MetaMask, or open this page inside your wallet’s browser",
                        }),
                        (0, t.jsx)("button", {
                          type: "button",
                          className: "ghost sm",
                          "data-testid": "wallet-retry",
                          onClick: l,
                          children: "Retry detection",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, t.jsx)("div", {
                  className: "wallet-list",
                  children: e.map((e, n) =>
                    (0, t.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: "wallet-row fade-up",
                        style: { "--i": n },
                        "data-testid": "wallet-option",
                        "data-name": e.info.name,
                        "data-rdns": e.info.rdns,
                        onClick: () => a(e),
                        children: [
                          e.info.icon
                            ? (0, t.jsx)("img", {
                                src: e.info.icon,
                                alt: "",
                                width: 28,
                                height: 28,
                              })
                            : (0, t.jsx)("span", {
                                className: "wallet-dot",
                                "aria-hidden": "true",
                              }),
                          (0, t.jsx)("span", {
                            className: "wallet-name",
                            children: e.info.name,
                          }),
                          (0, t.jsx)("span", {
                            className: "wallet-go",
                            "aria-hidden": "true",
                            children: "→",
                          }),
                        ],
                      },
                      e.info.rdns || e.info.uuid
                    )
                  ),
                }),
            (0, t.jsx)("button", {
              type: "button",
              className: "ghost wide modal-cancel",
              "data-testid": "picker-cancel",
              onClick: i,
              children: "Cancel",
            }),
          ],
        }),
      });
    }
    let eN = {
      connect: "Connection cancelled.",
      sign: "Signature cancelled.",
      send: "Transaction cancelled.",
    };
    function eb(e, { action: t = "send" } = {}) {
      let n = M(e),
        r = (e?.message ?? String(e ?? "")).trim();
      if ("string" == typeof n && b[n]) return _(n, r);
      if (
        4001 === n ||
        "ACTION_REJECTED" === n ||
        /user rejected|declined|denied|cancell?ed/i.test(r)
      )
        return eN[t] ?? eN.send;
      if (-32002 === n)
        return "Your wallet already has a pending request — open it to continue.";
      if (!r) return "Something went wrong. Try again.";
      let a = _(null, r);
      return a.length > 220 ? `${a.slice(0, 217)}…` : a;
    }
    e.s(
      [
        "api",
        0,
        eu,
        "default",
        0,
        function ({ children: e }) {
          let [l, o] = (0, r.useState)(null),
            [u, c] = (0, r.useState)([]),
            [d, h] = (0, r.useState)(!1),
            [f, m] = (0, r.useState)(!1),
            [p, w] = (0, r.useState)(null),
            [y, g] = (0, r.useState)(!1),
            [E, T] = (0, r.useState)(null),
            [x, A] = (0, r.useState)(null),
            [I, C] = (0, r.useState)(null),
            [U, j] = (0, r.useState)(null),
            [R, $] = (0, r.useState)(null),
            [V, Y] = (0, r.useState)("idle"),
            [X, em] = (0, r.useState)(null),
            [ep, eg] = (0, r.useState)(null),
            eN = (0, r.useRef)(null),
            eT = (0, r.useRef)(0),
            eS = (0, r.useRef)(!1),
            ex = (0, r.useRef)(null),
            eA = (0, r.useRef)(0),
            eI = (0, r.useRef)(new Map()),
            e_ = (0, r.useRef)(null),
            ek = (0, r.useRef)(null),
            ev = (0, r.useRef)(!1),
            eD = (0, r.useRef)(null),
            eC = (0, r.useRef)(new Map()),
            eO = (0, r.useRef)(null),
            eL = (0, r.useRef)(null),
            eM = (0, r.useRef)(!1),
            eU = (0, r.useRef)(null),
            ej = (0, r.useCallback)(async () => {
              try {
                let e = await eu("/api/me");
                return (ek.current = e), o(e), e;
              } catch {
                return null;
              }
            }, []);
          (0, r.useEffect)(() => {
            ej();
            let e = setInterval(ej, 12e3),
              t = () => {
                "visible" === document.visibilityState && ej();
              };
            return (
              document.addEventListener("visibilitychange", t),
              () => {
                clearInterval(e),
                  document.removeEventListener("visibilitychange", t);
              }
            );
          }, [ej]);
          let [eR, e$] = (0, r.useState)(0),
            eP = (0, r.useCallback)(() => {
              h(!1), e$((e) => e + 1);
            }, []);
          (0, r.useEffect)(
            () =>
              (function (e, { timeoutMs: t = 2e3, onSettled: n } = {}) {
                let r = new Map(),
                  l = new Map(),
                  i = [],
                  s = !1,
                  o = () => {
                    if (s) return;
                    let t = new Set([...r.values()].map((e) => e.provider)),
                      n = [...l.values()].filter((e) => !t.has(e.provider));
                    e([...r.values(), ...n]);
                  },
                  u = (e) => {
                    let t = e?.detail?.info,
                      n = e?.detail?.provider;
                    if (!t || !n || "function" != typeof n.request) return;
                    let l = "string" == typeof t.rdns ? t.rdns.trim() : "",
                      i = "string" == typeof t.uuid ? t.uuid : "",
                      s = l || i;
                    if (s) {
                      var u;
                      let e;
                      r.set(s, {
                        info: {
                          uuid: i || s,
                          name:
                            "string" == typeof t.name && t.name.trim()
                              ? t.name.trim()
                              : "Wallet",
                          icon:
                            ((e =
                              "string" == typeof (u = t.icon) ? u.trim() : ""),
                            /^data:image\//i.test(e) ||
                            e.startsWith(`${a.BASE_PATH}/`)
                              ? e
                              : ""),
                          rdns: l || s,
                        },
                        provider: n,
                      }),
                        o();
                    }
                  },
                  c = () => {
                    let e,
                      t = !1;
                    for (let n of (e = window.ethereum)
                      ? (Array.isArray(e.providers) && e.providers.length
                          ? e.providers
                          : [e]
                        ).filter((e) => e && "function" == typeof e.request)
                      : []) {
                      if ([...l.values()].some((e) => e.provider === n))
                        continue;
                      let e =
                          n?.isRobinhood || n?.isRobinhoodWallet
                            ? "Robinhood Wallet"
                            : n?.isCoinbaseWallet || n?.isCoinbaseBrowser
                            ? "Coinbase Wallet"
                            : n?.isRabby
                            ? "Rabby"
                            : n?.isOkxWallet || n?.isOKExWallet
                            ? "OKX Wallet"
                            : n?.isTrust || n?.isTrustWallet
                            ? "Trust Wallet"
                            : n?.isPhantom
                            ? "Phantom"
                            : n?.isBraveWallet
                            ? "Brave Wallet"
                            : n?.isMetaMask
                            ? "MetaMask"
                            : "Browser wallet",
                        r = `injected:${O(e)}`;
                      for (let t = 2; l.has(r); t++)
                        r = `injected:${O(e)}-${t}`;
                      l.set(r, {
                        info: { uuid: r, name: e, icon: "", rdns: r },
                        provider: n,
                      }),
                        (t = !0);
                    }
                    return t;
                  },
                  d = () => {
                    try {
                      window.dispatchEvent(
                        new Event("eip6963:requestProvider")
                      );
                    } catch {}
                  },
                  h = (e, t) => i.push(setTimeout(() => s || t(), e));
                for (let e of (window.addEventListener(
                  "eip6963:announceProvider",
                  u
                ),
                window.addEventListener("focus", d),
                v))
                  e < t && h(e, d);
                for (let e of D) e < t && h(e, () => c() && o());
                return (
                  d(),
                  c() && o(),
                  h(t, () => {
                    c(), o(), n?.();
                  }),
                  () => {
                    for (let e of ((s = !0), i)) clearTimeout(e);
                    window.removeEventListener("eip6963:announceProvider", u),
                      window.removeEventListener("focus", d);
                  }
                );
              })(c, { onSettled: () => h(!0) }),
            [eR]
          );
          let eW = (0, r.useCallback)(() => {
              clearTimeout(eD.current), T(null);
            }, []),
            eB = (0, r.useCallback)((e, t = "ok", n) => {
              null != e &&
                "" !== e &&
                (clearTimeout(eD.current),
                T({
                  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                  message: String(e),
                  kind: "err" === t ? "err" : "ok",
                  link: n && "string" == typeof n.href ? n : null,
                }),
                (eD.current = setTimeout(() => T(null), 6e3)));
            }, []);
          (0, r.useEffect)(() => () => clearTimeout(eD.current), []);
          let eH = (0, r.useCallback)(() => {
              e_.current?.(),
                (e_.current = null),
                (eN.current = null),
                A(null),
                C(null);
            }, []),
            eV = (0, r.useCallback)(
              async (e) => {
                if (ev.current || !eN.current) return;
                let t =
                    Array.isArray(e) && "string" == typeof e[0]
                      ? e[0].toLowerCase()
                      : null,
                  n = ek.current?.wallet ?? eN.current.address;
                if (!t || t !== n) {
                  eH(), (eM.current = !0);
                  try {
                    await eu("/api/auth/logout", {});
                  } catch {}
                  (ek.current = null),
                    o(null),
                    await ej(),
                    eB(
                      t
                        ? "Wallet changed — sign in again."
                        : "Wallet disconnected.",
                      "err"
                    );
                }
              },
              [eH, ej, eB]
            ),
            eG = (0, r.useCallback)(
              (e, t) => {
                e_.current?.();
                let { provider: n, info: r } = e;
                (eN.current = { provider: n, info: r, address: t }),
                  A({ name: r.name, rdns: r.rdns, icon: r.icon, address: t }),
                  H(n)
                    .then((e) => {
                      eN.current?.provider === n && C(e);
                    })
                    .catch(() => {}),
                  (e_.current = (function (
                    e,
                    { accountsChanged: t, chainChanged: n } = {}
                  ) {
                    if (!e || "function" != typeof e.on) return () => {};
                    let r = [];
                    for (let [a, l] of (t && r.push(["accountsChanged", t]),
                    n && r.push(["chainChanged", n]),
                    r))
                      e.on(a, l);
                    return () => {
                      for (let [t, n] of r)
                        try {
                          "function" == typeof e.removeListener
                            ? e.removeListener(t, n)
                            : "function" == typeof e.off && e.off(t, n);
                        } catch {}
                    };
                  })(n, {
                    accountsChanged: eV,
                    chainChanged: (e) => {
                      eN.current?.provider === n && C(B(e));
                    },
                  }));
              },
              [eV]
            );
          (0, r.useEffect)(() => () => e_.current?.(), []);
          let eq = l?.wallet ?? null;
          (0, r.useEffect)(
            () =>
              eg(
                (function (e) {
                  if (!e) return null;
                  let t = ei.get(er);
                  if (!t) return null;
                  try {
                    let n = JSON.parse(t),
                      r = n?.hash;
                    return n?.wallet === e &&
                      "string" == typeof r &&
                      /^0x[0-9a-f]{64}$/i.test(r)
                      ? r
                      : null;
                  } catch {
                    return null;
                  }
                })(eq)
              ),
            [eq]
          ),
            (0, r.useEffect)(() => {
              if (!eq || eN.current || ev.current) return;
              let e = ei.get(ee),
                t = e ? u.find((t) => t.info.rdns === e) : null;
              if (!t) return;
              let n = !1;
              return (
                W(t.provider).then((e) => {
                  n || eN.current || ev.current || (e[0] === eq && eG(t, eq));
                }),
                () => {
                  n = !0;
                }
              );
            }, [eq, u, eG]),
            (0, r.useEffect)(() => {
              l && !l.wallet && eN.current && !ev.current && eH();
            }, [l, eH]),
            (0, r.useEffect)(() => {
              if (null == l) return;
              let e = eU.current,
                t = l.wallet ?? null;
              if (((eU.current = t), !e || t)) return;
              let n = eM.current;
              (eM.current = !1),
                n || ev.current || eB(_(b.UNAUTHORIZED), "err");
            }, [l, eB]),
            (0, r.useEffect)(() => {
              let e = Array.isArray(l?.recentPayouts) ? l.recentPayouts : [];
              if (!e.length) return;
              let t = (e) => new Date(e?.resolved_at ?? 0).getTime(),
                n = e.reduce((e, n) => Math.max(e, t(n) || 0), 0);
              if (!n) return;
              let r = Number(ei.get(en)),
                i = Number.isFinite(r) && r > 0 ? r : null;
              if ((ei.set(en, String(n)), null == i || n <= i)) return;
              let s = e.filter((e) => t(e) > i).sort((e, n) => t(n) - t(e))[0];
              s &&
                eB(
                  `Pool ${s.symbol} settled — you received ${es(s.amount, {
                    micro: !0,
                  })} ${a.USDG.symbol}`,
                  "ok",
                  {
                    href: `/pool/${s.id}`,
                    label: "View pool",
                    internal: !0,
                    testid: "toast-pool-link",
                  }
                );
            }, [l, eB]);
          let eF = (0, r.useCallback)(
              async (e) => {
                if (
                  (m(!1),
                  !e?.provider || "function" != typeof e.provider.request)
                )
                  return (
                    eB(
                      "That wallet could not be reached. Pick another or reload the page.",
                      "err"
                    ),
                    !1
                  );
                if (ev.current)
                  return (
                    eB(
                      "Still connecting — check your wallet for a pending request.",
                      "err"
                    ),
                    !1
                  );
                g(!0), (ev.current = !0);
                let t = "connect";
                try {
                  var n;
                  let r,
                    [a] = await ((n = P(e.provider)),
                    Promise.race([
                      n,
                      new Promise((e, t) => {
                        r = setTimeout(
                          () =>
                            t(
                              Error(
                                "Your wallet did not answer. Open it, then try again."
                              )
                            ),
                          9e4
                        );
                      }),
                    ]).finally(() => clearTimeout(r)));
                  await G(e.provider);
                  let { nonce: l, message: i } = await eu("/api/auth/nonce", {
                    wallet: a,
                    host: window.location.host,
                  });
                  t = "sign";
                  let s = await q(e.provider, a, i);
                  return (
                    await eu("/api/auth/verify", {
                      wallet: a,
                      nonce: l,
                      signature: s,
                    }),
                    eG(e, a),
                    ei.set(ee, e.info.rdns),
                    await ej(),
                    eB(`Connected with ${e.info.name}`),
                    !0
                  );
                } catch (e) {
                  return eB(eb(e, { action: t }), "err"), !1;
                } finally {
                  (ev.current = !1), g(!1);
                }
              },
              [eG, ej, eB]
            ),
            eK = (0, r.useCallback)(async () => {
              let e = eN.current;
              eM.current = !0;
              try {
                await eu("/api/auth/logout", {});
              } catch {}
              if ((eH(), ei.del(ee), e))
                try {
                  Promise.resolve(
                    e.provider.request({
                      method: "wallet_revokePermissions",
                      params: [{ eth_accounts: {} }],
                    })
                  ).catch(() => {});
                } catch {}
              (ek.current = null), o(null), await ej();
            }, [eH, ej]),
            eY = (0, r.useCallback)(async () => {
              let e = eN.current;
              if (!e) return m(!0), !1;
              try {
                return (
                  await G(e.provider),
                  C(await H(e.provider).catch(() => a.CHAIN_HEX)),
                  !0
                );
              } catch (e) {
                return eB(eb(e, { action: "connect" }), "err"), !1;
              }
            }, [eB]),
            eX = (0, r.useCallback)(
              (e, t) => {
                let n = e.hash.toLowerCase(),
                  r = eC.current.get(n);
                if (!r) {
                  let t = {
                      listeners: new Set(),
                      step: { key: "confirm", hash: n },
                    },
                    l = (e) => {
                      (t.step = e),
                        t.listeners.forEach((t) => {
                          try {
                            t(e);
                          } catch {}
                        });
                    },
                    i = Number.isFinite(e.at) ? e.at : Date.now(),
                    s = `${es(e.amount, { micro: !0 })} ${a.USDG.symbol}`;
                  (t.promise = (async () => {
                    let e = Date.now(),
                      t = !1,
                      r = !1,
                      o = null;
                    for (; Date.now() - e < 12e4; ) {
                      let a = null;
                      try {
                        a = await ec("/api/deposit/confirm", { hash: n });
                      } catch {}
                      if (a) {
                        let { status: e, json: s } = a;
                        if (200 === e)
                          return eh(n), await ej(), { ...s, hash: n };
                        if (202 === e || s.retry)
                          "boolean" == typeof s.landed && (o = s.landed),
                            s.landed && !t && (t = !0),
                            l(
                              t
                                ? { key: "credit", hash: n }
                                : {
                                    key: "confirm",
                                    hash: n,
                                    confirmations: Number(s.confirmations ?? 0),
                                    needed: Number(s.needed ?? 0),
                                  }
                            );
                        else if (401 === e)
                          throw Object.assign(
                            Error(
                              "Your session expired. Sign in again — the deposit is on its way and will be credited."
                            ),
                            { status: e, hash: n }
                          );
                        else if (e >= 400 && e < 500 && 408 !== e && 429 !== e)
                          if (
                            (!1 === s.landed && (r = !0),
                            s.code === b.DEPOSIT_UNKNOWN_TX &&
                              Date.now() - i < 6e5)
                          )
                            l({
                              key: "confirm",
                              hash: n,
                              note: "Waiting for the network…",
                            });
                          else
                            throw (
                              (eh(n),
                              Object.assign(Error(_(s.code, s.error)), {
                                status: e,
                                code: s.code ?? null,
                                hash: n,
                                final: !0,
                              }))
                            );
                      }
                      await ea(Date.now() - e < 15e3 ? 1e3 : 3e3);
                    }
                    let u = !t && (r || !1 === o);
                    throw (
                      (u && eh(n),
                      Object.assign(
                        Error(
                          t
                            ? `Your ${s} is safe on chain (${el(
                                n
                              )}) and will be credited automatically — reload in a minute.`
                            : u
                            ? S
                            : `Your wallet sent the transaction (${el(
                                n
                              )}) but it has not appeared on ${
                                a.CHAIN_NAME
                              } yet. If it confirms it will be credited automatically.`
                        ),
                        { hash: n, landed: t, neverLanded: u, timeout: !0 }
                      ))
                    );
                  })().finally(() => eC.current.delete(n))),
                    eC.current.set(n, t),
                    (r = t);
                }
                return t
                  ? (r.listeners.add(t),
                    t(r.step),
                    r.promise.then(
                      (e) => (r.listeners.delete(t), e),
                      (e) => {
                        throw (r.listeners.delete(t), e);
                      }
                    ))
                  : r.promise;
              },
              [ej]
            ),
            ez = (0, r.useCallback)(
              async (e, t) => {
                let n = eN.current;
                if (!n) throw Error("Reconnect your wallet to deposit.");
                let r = ek.current?.wallet;
                if (!r || n.address !== r)
                  throw Error("Reconnect your wallet to deposit.");
                let l = (0, k.toUnits)(e);
                if (null == l || l <= 0n)
                  throw Error("Enter a number like 12.50.");
                let i = ed(r);
                if (i) {
                  if (i.amount === l.toString())
                    return t?.({ key: "confirm", hash: i.hash }), eX(i, t);
                  let e = `${es(i.amount, { micro: !0 })} ${a.USDG.symbol}`;
                  throw Object.assign(
                    Error(
                      `A deposit of ${e} is still confirming — finish or wait for it before starting another`
                    ),
                    {
                      pendingHash: i.hash,
                      pendingAmount: (0, k.fromUnits)(i.amount),
                      mismatch: !0,
                    }
                  );
                }
                t?.({ key: "prepare" });
                let s = await eu("/api/deposit/prepare", { amount: String(e) }),
                  o = String(s.from ?? n.address).toLowerCase();
                if (o !== n.address)
                  throw Error("Reconnect your wallet to deposit.");
                await G(n.provider),
                  C(a.CHAIN_HEX),
                  t?.({ key: "prepare", note: "Checking it would go through" });
                let u = {
                  from: o,
                  to: s.to,
                  data: s.data,
                  value: s.value ?? "0x0",
                };
                try {
                  let e = await F(n.provider, u);
                  null != e && (await ef(n.provider, o, e));
                } catch (e) {
                  throw (function (e) {
                    let t;
                    if (e?.preflight) return e;
                    let n = M(e);
                    if (4001 === n || -32002 === n) return e;
                    let r = L(e);
                    if (
                      /exceeds balance|transfer amount exceeds|insufficient balance|0xe450d38c/i.test(
                        r
                      )
                    )
                      t = `Your wallet does not have enough ${a.USDG.symbol} for this deposit.`;
                    else if (/insufficient funds/i.test(r))
                      t = `You need a little ETH on ${a.CHAIN_NAME} to pay the network fee.`;
                    else if (/revert/i.test(r)) {
                      let e = r
                        .match(
                          /reverted(?: with reason string)?:\s*['"]?([^'"|]+)/i
                        )?.[1]
                        ?.replace(/[.\s]+$/, "");
                      t = e
                        ? `This deposit would fail on chain (${e}). Nothing was sent.`
                        : "This deposit would fail on chain. Nothing was sent.";
                    } else
                      t =
                        e?.message ||
                        "Your wallet could not check this deposit. Nothing was sent.";
                    return Object.assign(Error(t), { code: n, preflight: !0 });
                  })(e);
                }
                t?.({ key: "sign" });
                let c = await K(n.provider, u),
                  d = {
                    hash: c,
                    wallet: r,
                    amount: ((0, k.toUnits)(s.amountUsdg) ?? l).toString(),
                    at: Date.now(),
                  };
                return (
                  ei.set(et, JSON.stringify(d)),
                  r && c && ei.set(er, JSON.stringify({ wallet: r, hash: c })),
                  eg(c),
                  t?.({ key: "broadcast", hash: c }),
                  eX(d, t)
                );
              },
              [eX]
            );
          (0, r.useEffect)(() => {
            if (!eq || eO.current === eq || eL.current === eq) return;
            let e = ed(eq);
            if (!e) return;
            eL.current = eq;
            let t = (e) => {
              (eL.current = null), e && (eO.current = eq);
            };
            eX(e).then(
              (n) => {
                t(!0),
                  eB(eo(n, e.amount), "ok", {
                    href: (0, a.explorerTx)(n.hash),
                    label: "View transaction",
                  });
              },
              (e) => {
                t(!!e?.final), e?.final && eB(eb(e), "err");
              }
            );
          }, [eq, eX, eB]);
          let eJ = (0, r.useCallback)(
              async (e) => {
                try {
                  let t = await eu("/api/withdraw", { amount: String(e) });
                  return await ej(), t;
                } catch (e) {
                  throw (ej(), e);
                }
              },
              [ej]
            ),
            eZ = (0, r.useCallback)(async ({ quiet: e = !1 } = {}) => {
              let t = eN.current,
                n = ++eA.current;
              if (!t) return $(null), Y("idle"), em(null), null;
              e || Y("loading");
              try {
                let e = await H(t.provider).catch(() => null);
                if (e && e !== a.CHAIN_HEX)
                  throw Error(
                    `Switch your wallet to ${a.CHAIN_NAME} to see these balances.`
                  );
                let r = t.address,
                  l = await Promise.all(
                    a.WALLET_ASSETS.map(async (e) => {
                      try {
                        let n = e.native
                          ? e.decimals
                          : eI.current.get(e.address);
                        null == n &&
                          ((n = (await Z(t.provider, e.address)) ?? e.decimals),
                          eI.current.set(e.address, n));
                        let a = e.native
                          ? await z(t.provider, r)
                          : await J(t.provider, e.address, r);
                        return {
                          ...e,
                          decimals: n,
                          raw: null == a ? null : a.toString(),
                        };
                      } catch {
                        return { ...e, raw: null };
                      }
                    })
                  );
                if (n !== eA.current) return null;
                return $(l), Y("ready"), em(null), l;
              } catch (e) {
                if (n !== eA.current) return null;
                return (
                  $(a.WALLET_ASSETS.map((e) => ({ ...e, raw: null }))),
                  Y("error"),
                  em(e?.message ?? "Could not read your wallet."),
                  null
                );
              }
            }, []),
            eQ = x?.address ?? null;
          (0, r.useEffect)(() => {
            if (!eQ) {
              $(null), Y("idle"), em(null);
              return;
            }
            eZ();
            let e = setInterval(() => eZ({ quiet: !0 }), 15e3);
            return () => clearInterval(e);
          }, [eQ, I, eZ]);
          let e0 = (0, r.useCallback)((e) => {
              if (eS.current) return null;
              eS.current = !0;
              let t = ++eT.current;
              return (
                j({
                  id: t,
                  kind: e,
                  status: "running",
                  hash: null,
                  error: null,
                  summary: null,
                  steps: ey[e].map((e) => ({
                    ...e,
                    state: "pending",
                    detail: null,
                    note: null,
                    hash: null,
                  })),
                }),
                t
              );
            }, []),
            e1 = (0, r.useCallback)(
              (e, t) => j((n) => (n && n.id === e ? t(n) : n)),
              []
            ),
            e2 = (0, r.useCallback)(
              (e, t, n) =>
                e1(e, (e) =>
                  (function (e, t, n = {}) {
                    let r = e.steps.findIndex((e) => e.key === t);
                    return r < 0
                      ? e
                      : {
                          ...e,
                          hash: n.hash ?? e.hash,
                          steps: e.steps.map((t, a) => {
                            let l =
                              "broadcast" === t.key
                                ? n.hash ?? e.hash ?? t.hash ?? null
                                : t.hash;
                            return a < r
                              ? "done" === t.state
                                ? { ...t, hash: l }
                                : { ...t, hash: l, state: "done", note: null }
                              : a > r
                              ? { ...t, hash: l }
                              : {
                                  ...t,
                                  hash: l,
                                  state: n.state ?? "active",
                                  detail: n.detail ?? null,
                                  note: n.note ?? null,
                                };
                          }),
                        };
                  })(e, t, n)
                ),
              [e1]
            ),
            e4 = (0, r.useCallback)(
              (e, t) =>
                e1(e, (e) => ({
                  ...e,
                  status: "done",
                  summary: t,
                  steps: e.steps.map((e) => ({
                    ...e,
                    state: "done",
                    note: null,
                  })),
                })),
              [e1]
            ),
            e6 = (0, r.useCallback)(
              (e, t) =>
                e1(e, (e) => {
                  let n = e.steps.findIndex((e) => "active" === e.state);
                  return (
                    n < 0 && (n = e.steps.findIndex((e) => "done" !== e.state)),
                    n < 0 && (n = e.steps.length - 1),
                    {
                      ...e,
                      status: "failed",
                      error: t,
                      steps: e.steps.map((e, t) =>
                        t === n ? { ...e, state: "failed", note: null } : e
                      ),
                    }
                  );
                }),
              [e1]
            ),
            e3 = (0, r.useCallback)(() => {
              (eS.current = !1), j(null);
            }, []),
            e9 = (e) => ({
              balanceText: `${(0, k.fmtUnits)(e?.balance?.available ?? 0n)} ${
                a.USDG.symbol
              }`,
              wallet:
                e?.wallet ?? ek.current?.wallet ?? eN.current?.address ?? null,
            }),
            e5 = (0, r.useCallback)(
              async (e) => {
                let t = e0("deposit");
                try {
                  let n = await ez(e, (e) => {
                      e &&
                        "object" == typeof e &&
                        e2(t, e.key, {
                          hash: e.hash ?? null,
                          note: e.note ?? null,
                          detail:
                            e.needed > 0
                              ? `${Math.min(e.confirmations ?? 0, e.needed)}/${
                                  e.needed
                                }`
                              : null,
                        });
                    }),
                    r = await ej();
                  return (
                    eZ({ quiet: !0 }),
                    e4(t, {
                      amountText: `${
                        n?.amountUsdg != null ? es(n.amountUsdg) : es(e)
                      } ${a.USDG.symbol}`,
                      ...e9(r ?? ek.current),
                    }),
                    n
                  );
                } catch (e) {
                  throw (e6(t, eb(e)), e);
                }
              },
              [ez, ej, eZ, e0, e2, e4, e6]
            ),
            e7 = (0, r.useCallback)(
              async (e) => {
                let t = e0("withdraw");
                e2(t, "check");
                let n = setTimeout(() => e2(t, "sign"), 450);
                try {
                  let r = await eJ(e);
                  clearTimeout(n);
                  let l = r?.hash ?? null;
                  if ((e2(t, "broadcast", { hash: l }), r?.status !== "sent")) {
                    let e = await ew(r?.withdrawalId, l);
                    (l = e.hash ?? l),
                      e.hash && e2(t, "broadcast", { hash: l });
                  }
                  e2(t, "confirmed");
                  let i = await ej();
                  return (
                    eZ({ quiet: !0 }),
                    e4(t, {
                      amountText: `${es(r?.amountUsdg ?? e)} ${a.USDG.symbol}`,
                      feeText:
                        r?.feeUsdg != null
                          ? `${es(r.feeUsdg)} ${a.USDG.symbol}`
                          : null,
                      ...e9(i ?? ek.current),
                    }),
                    r
                  );
                } catch (e) {
                  throw (clearTimeout(n), e6(t, eb(e)), e);
                }
              },
              [eJ, ej, eZ, e0, e2, e4, e6]
            ),
            e8 = (0, r.useCallback)(
              async ({ marketId: e, value: t, stake: n, symbol: r }) => {
                let l = e0("forecast");
                try {
                  e2(l, "place");
                  let i = await eu("/api/predict", {
                    marketId: e,
                    value: t,
                    stake: n,
                  });
                  e2(l, "lock"), await ea(320);
                  let s = await ej();
                  return (
                    e4(l, {
                      amountText: `${es(n)} ${a.USDG.symbol}`,
                      poolText: r ?? null,
                      ...e9(s ?? ek.current),
                    }),
                    i
                  );
                } catch (e) {
                  throw (e6(l, _(e, e?.message)), e);
                }
              },
              [ej, e0, e2, e4, e6]
            ),
            te = (0, r.useCallback)(
              async ({ marketId: e, value: t, stake: n, symbol: r }) => {
                if (ex.current) return ex.current;
                let a = e8({ marketId: e, value: t, stake: n, symbol: r });
                ex.current = a;
                try {
                  return await a;
                } finally {
                  ex.current = null;
                }
              },
              [e8]
            ),
            tt = (0, r.useCallback)(() => {
              ev.current || g(!1), m(!0);
            }, []),
            tn = (0, r.useCallback)(() => m(!1), []),
            tr = (0, r.useCallback)(
              (e = "deposit", t = null) =>
                w({
                  tab: "withdraw" === e ? "withdraw" : "deposit",
                  amount: t ?? null,
                }),
              []
            ),
            ta = (0, r.useCallback)(() => w(null), []),
            tl = !x || null == I || I === a.CHAIN_HEX,
            ti = (0, r.useMemo)(
              () => ({
                me: l,
                signedIn: !!l?.wallet,
                wallets: u,
                busy: y,
                chainOk: tl,
                account: x,
                connect: eF,
                disconnect: eK,
                deposit: ez,
                withdraw: eJ,
                runDeposit: e5,
                runWithdraw: e7,
                runForecast: te,
                assets: R,
                assetsStatus: V,
                assetsError: X,
                refreshAssets: eZ,
                txActive: !!U,
                refresh: ej,
                notify: eB,
                openPicker: tt,
                funds: p,
                openFunds: tr,
                closeFunds: ta,
                switchChain: eY,
              }),
              [
                l,
                u,
                y,
                tl,
                x,
                eF,
                eK,
                ez,
                eJ,
                e5,
                e7,
                te,
                R,
                V,
                X,
                eZ,
                U,
                ej,
                eB,
                tt,
                p,
                tr,
                ta,
                eY,
              ]
            );
          return (0, t.jsxs)(Q.Provider, {
            value: ti,
            children: [
              e,
              U
                ? (0, t.jsx)(N, {
                    tx: U,
                    onClose: e3,
                    lastDepositHash: ep ?? l?.lastDepositHash ?? null,
                    wallet: eq,
                  })
                : null,
              f
                ? (0, t.jsx)(eE, {
                    wallets: u,
                    discovered: d,
                    onPick: eF,
                    onRetry: eP,
                    onClose: tn,
                  })
                : null,
              (0, t.jsx)("div", {
                className: "toast-region",
                "aria-live": E?.kind === "err" ? "assertive" : "polite",
                "aria-atomic": "true",
                children: E
                  ? (0, t.jsxs)(
                      "div",
                      {
                        className: "toast-pop " + E.kind,
                        "data-testid": "toast",
                        "data-kind": E.kind,
                        onClick: eW,
                        children: [
                          (0, t.jsx)("span", {
                            className: "toast-ico",
                            "aria-hidden": "true",
                          }),
                          E.message.includes(a.USDG.symbol)
                            ? (0, t.jsx)(i, {})
                            : null,
                          (0, t.jsx)("span", {
                            className: "toast-msg",
                            children: E.message,
                          }),
                          E.link
                            ? E.link.internal
                              ? (0, t.jsxs)(n.default, {
                                  className: "toast-link",
                                  href: E.link.href,
                                  "data-testid": E.link.testid,
                                  onClick: (e) => {
                                    e.stopPropagation(), eW();
                                  },
                                  children: [
                                    E.link.label ?? "View",
                                    " ",
                                    (0, t.jsx)("span", {
                                      "aria-hidden": "true",
                                      children: "→",
                                    }),
                                  ],
                                })
                              : (0, t.jsxs)("a", {
                                  className: "toast-link",
                                  href: E.link.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "data-testid": E.link.testid,
                                  onClick: (e) => e.stopPropagation(),
                                  children: [
                                    (0, t.jsx)(s, {}),
                                    " ",
                                    E.link.label ?? "View",
                                    " ",
                                    (0, t.jsx)("span", {
                                      "aria-hidden": "true",
                                      children: "↗",
                                    }),
                                  ],
                                })
                            : null,
                          (0, t.jsx)("button", {
                            type: "button",
                            className: "toast-x",
                            "data-testid": "toast-dismiss",
                            "aria-label": "Dismiss notification",
                            onClick: (e) => {
                              e.stopPropagation(), eW();
                            },
                            children: "×",
                          }),
                        ],
                      },
                      E.id
                    )
                  : null,
              }),
            ],
          });
        },
        "depositMessage",
        0,
        eo,
        "fmtUsdgExact",
        0,
        es,
        "humanWalletError",
        0,
        eb,
        "useDialog",
        0,
        ep,
        "useWallet",
        0,
        () => (0, r.useContext)(Q),
      ],
      3769
    );
  },
]);
