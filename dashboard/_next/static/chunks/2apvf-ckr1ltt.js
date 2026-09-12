(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  63425,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(22016),
      a = e.i(18566),
      s = e.i(71645),
      r = e.i(86451),
      i = e.i(20187);
    function l({ label: e = i.BRAND.product, className: n = "" }) {
      let a = {
          className: ("brand " + n).trim(),
          "aria-label": `${i.BRAND.name} ${e || ""}`.trim(),
          "data-testid": "brand-home",
        },
        s = (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("svg", {
              className: "brand-logo",
              viewBox: "0 0 953 453",
              fill: "currentColor",
              "aria-hidden": "true",
              focusable: "false",
              children: [
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M89.787 0.337948C71.6205 2.75399 57.0745 16.4455 52.7526 35.1969C51.8056 39.3074 51.7357 40.9239 52.0145 52.3895C53.025 94.0094 61.9251 145.324 79.4916 210.81C80.846 215.858 81.8314 220.1 81.6812 220.237C81.5316 220.373 77.8827 220.701 73.5723 220.966C51.7258 222.309 44.8478 223.641 33.8878 228.654C14.1821 237.668 2.15643 253.232 0.360565 272.048C0.0235439 275.579 -0.0835331 297.881 0.0660788 333.222C0.273961 382.244 0.402041 389.207 1.14643 391.943C6.27575 410.798 22.689 425.205 44.7381 430.206C49.5152 431.29 65.8497 432.002 86.7838 432.038L98.9071 432.059L101.401 434.888C109.246 443.786 123.166 450.88 136.138 452.592C138.934 452.961 147.613 453.077 162.853 452.951C184.186 452.773 185.649 452.705 189.499 451.711C200.429 448.89 209.2 444.126 216.734 436.918L221.65 432.214L244.081 431.875C258.819 431.653 268.18 431.308 271.377 430.868C289.123 428.426 305.391 418.116 313.963 403.878C315.996 400.502 316.967 398.283 318.667 393.137C319.758 389.833 319.773 389.12 319.953 331.769C320.078 291.969 319.956 272.326 319.564 269.231C316.894 248.153 297.796 229.759 272.473 223.877C268.143 222.871 258.46 221.707 250.52 221.238C247.922 221.084 244.017 220.836 241.842 220.686L237.888 220.414L240.339 211.5C258.008 147.243 267.127 95.455 268.438 51.9119C268.704 43.1122 268.607 40.3609 267.903 36.7184C264.494 19.0607 252.055 5.51913 235.296 1.22289C229.95 -0.147744 221.722 -0.245645 216.691 1.00177C198.153 5.59888 185.406 20.5182 182.967 40.475C182.466 44.5802 182.466 51.5666 182.967 73.0435C184.049 119.355 186.008 159.057 189.841 212.376C190.076 215.659 190.17 218.507 190.048 218.704C189.926 218.901 176.375 219.062 159.935 219.062C136.371 219.062 130.044 218.936 130.044 218.465C130.045 218.137 130.277 215.074 130.56 211.66C131.456 200.84 133.778 164.414 134.76 145.755C136.595 110.884 138.195 58.0158 137.766 46.4198C137.61 42.2072 137.093 37.0881 136.614 35.0111C131.458 12.6598 111.006 -2.4845 89.787 0.337948ZM95.8282 262.558C102.491 264.178 108.143 267.355 113.038 272.233C117.003 276.185 119.256 279.617 121.311 284.842L122.956 289.026L123.115 312.576C123.299 339.815 123.155 341.169 119.336 348.245C115.211 355.889 110.026 360.664 101.958 364.25C95.9112 366.938 91.6548 367.728 84.6346 367.466C75.0783 367.109 67.8172 364.134 61.0117 357.785C55.0403 352.215 51.9594 346.708 50.4953 338.99C49.7908 335.275 49.69 331.089 49.8538 312.283C50.0407 290.77 50.089 289.856 51.2328 286.413C53.3143 280.147 56.2635 275.641 61.2547 271.1C70.947 262.282 82.7259 259.373 95.8282 262.558ZM242.506 262.011C255.532 265.042 264.884 273.692 268.77 286.303C269.861 289.841 269.905 290.884 269.923 313.621C269.946 340.681 269.862 341.376 265.608 349.106C263.637 352.688 262.325 354.287 258.433 357.852C254.475 361.478 252.916 362.543 249.208 364.153C243.196 366.765 239.34 367.587 233.111 367.587C216.39 367.587 202.459 357.51 197.621 341.917C196.511 338.342 196.472 337.422 196.461 314.815C196.451 293.497 196.537 291.117 197.426 288.071C201.364 274.591 212.416 264.553 226.362 261.791C231.128 260.846 237.897 260.939 242.506 262.011ZM180.943 372.312C186.994 374.403 190.546 378.886 190.543 384.429C190.539 389.641 187.697 393.841 182.648 396.097L179.651 397.435H159.441C139.327 397.435 139.218 397.43 136.742 396.321C135.374 395.708 133.303 394.222 132.139 393.019C125.147 385.794 128.976 374.775 139.492 371.854C140.214 371.654 149.248 371.471 159.566 371.449C176.768 371.411 178.545 371.483 180.943 372.312Z",
                }),
                (0, t.jsx)("path", {
                  d: "M838.527 27C924.027 27 952.527 55.5 952.527 136V186.5C952.527 266 924.027 294 838.527 295.5V427H763.527V27H838.527ZM838.527 220.5C867.527 220.5 877.527 215.5 877.527 186.5V136C877.527 107 867.527 102 838.527 102V220.5Z",
                }),
                (0, t.jsx)("path", {
                  d: "M659.285 22C719.785 22 753.285 55.5 753.285 136V318C753.285 398.5 719.785 432 659.285 432C598.785 432 565.285 398.5 565.285 318V136C565.285 55.5 598.785 22 659.285 22ZM678.285 313V141C678.285 107 675.785 97 659.285 97C642.785 97 640.285 107 640.285 141V313C640.285 347 642.785 357 659.285 357C675.785 357 678.285 347 678.285 313Z",
                }),
                (0, t.jsx)("path", {
                  d: "M480.254 27H555.254V427H480.254V264.5H433.254V427H358.254V27H433.254V189.5H480.254V27Z",
                }),
              ],
            }),
            e
              ? (0, t.jsx)("span", { className: "brand-tag", children: e })
              : null,
          ],
        });
      return (0, t.jsx)(r.default, { ...a, children: s });
    }
    var o = e.i(78334),
      d = e.i(3769),
      u = e.i(86687),
      c = e.i(72099),
      f = e.i(46979),
      h = e.i(17587);
    let p = ["1", "5", "10", "25"],
      m = [25, 50],
      b = (e, t) => {
        if (null == e || "" === e) return t;
        try {
          return BigInt(e);
        } catch {
          return t;
        }
      };
    function x({ tab: e, initialAmount: n = null, onClose: a }) {
      let {
          me: r,
          account: l,
          runDeposit: g,
          runWithdraw: y,
          txActive: j,
          notify: C,
          openPicker: v,
        } = (0, d.useWallet)(),
        N = b(r?.balance?.available, 0n),
        w = b(r?.balance?.locked, 0n),
        U = r?.limits ?? {},
        S = b(U.minDeposit, u.LIMITS.minDeposit),
        k = b(U.minWithdraw, u.LIMITS.minWithdraw),
        $ = b(U.withdrawFee, u.LIMITS.withdrawFee),
        D = b(U.maxWithdraw, null),
        [A, E] = (0, s.useState)("withdraw" === e ? "withdraw" : "deposit"),
        [I, P] = (0, s.useState)(() => {
          if (null != n && "" !== String(n).trim()) return String(n);
          if ("withdraw" !== e || N >= 5000000n) return "5";
          let t = (N / 10000n) * 10000n;
          return t >= k ? (0, h.fromUnits)(t) : "";
        }),
        [_, R] = (0, s.useState)(!1),
        [T, B] = (0, s.useState)(null),
        [L, M] = (0, s.useState)(null),
        O = (0, s.useRef)(!1),
        G = (0, s.useRef)(null),
        W = (0, d.useDialog)(G, a, {
          canClose: !_,
          onBlocked: () => C("Please wait for the current step to finish"),
          paused: j,
        }),
        H = "deposit" === A,
        V = !!r?.wallet,
        F = (0, h.toUnits)(I),
        K = (function ({
          signedIn: e,
          isDeposit: t,
          raw: n,
          units: a,
          available: s,
          minDeposit: r,
          minWithdraw: i,
          maxWithdraw: l,
          fee: o,
        }) {
          if (!e) return "Connect your wallet first.";
          let d = String(n ?? "").trim();
          return d
            ? null == a
              ? d.startsWith("-")
                ? "Amount must be positive."
                : /^\d*(\.\d*)?$|^\.\d+$/.test(d) && d.length <= 40
                ? `${u.USDG.symbol} has ${u.USDG.decimals} decimals.`
                : "Enter a number like 12.50."
              : a <= 0n
              ? "Amount must be positive."
              : t
              ? a < r
                ? `Minimum deposit is ${(0, h.fmtUnits)(r)} ${u.USDG.symbol}.`
                : null
              : a < i
              ? `Minimum withdrawal is ${(0, h.fmtUnits)(i)} ${u.USDG.symbol}.`
              : a > s
              ? s > 0n
                ? `That is more than your available ${(0, h.fmtUnits)(s)} ${
                    u.USDG.symbol
                  }.`
                : "You have no available balance to withdraw."
              : null != l && a - o > l
              ? `Maximum per withdrawal is ${(0, h.fmtUnits)(l + o)} ${
                  u.USDG.symbol
                }.`
              : null
            : "Enter an amount.";
        })({
          signedIn: V,
          isDeposit: H,
          raw: I,
          units: F,
          available: N,
          minDeposit: S,
          minWithdraw: k,
          maxWithdraw: D,
          fee: $,
        }),
        Z = (e) => (0, d.fmtUsdgExact)(e, { micro: !0 }),
        z = null != F && F > 0n,
        X = z && F > $ ? F - $ : 0n,
        Y = null == D ? null : D + $,
        Q = N < k;
      function q(e) {
        P(e), M(null);
      }
      function J(e) {
        _ || e === A || (E(e), M(null));
      }
      async function ee() {
        C(
          (await (0, f.copyText)(r?.depositAddress))
            ? "Copied"
            : "Could not copy — select the address instead",
          "ok"
        );
      }
      async function et(e) {
        if (!O.current) {
          (O.current = !0), R(!0), M(null);
          try {
            if (H) {
              B("Preparing…");
              let t = await g(e);
              C(
                (0, d.depositMessage)(t, F),
                "ok",
                t?.hash
                  ? {
                      href: (0, u.explorerTx)(t.hash),
                      label: "View transaction",
                      testid: "funds-tx-link",
                    }
                  : void 0
              );
            } else {
              B("Sending…");
              let t = await y(e),
                n = t?.hash
                  ? {
                      href: (0, u.explorerTx)(t.hash),
                      label: "View transaction",
                      testid: "funds-tx-link",
                    }
                  : void 0,
                a = t?.netUsdg != null ? (0, d.fmtUsdgExact)(t.netUsdg) : Z(X);
              t?.status === "sent"
                ? C(`Sent ${a} ${u.USDG.symbol}`, "ok", n)
                : t?.status === "sending"
                ? C("Withdrawal broadcast — confirming on chain.", "ok", n)
                : C("Withdrawal queued, sending shortly.", "ok", n);
            }
            a();
          } catch (t) {
            let e = (0, d.humanWalletError)(t);
            M({
              message: e,
              hash: t?.hash ?? t?.pendingHash ?? null,
              resume: t?.mismatch ? t.pendingAmount : null,
            }),
              C(e, "err");
          } finally {
            (O.current = !1), R(!1), B(null);
          }
        }
      }
      let en = "funds-panel",
        ea = H ? "funds-tab-deposit" : "funds-tab-withdraw";
      return (0, t.jsx)("div", {
        className: "modal" + (j ? " is-under" : ""),
        "data-testid": "funds-modal",
        ...W,
        children: (0, t.jsxs)("div", {
          ref: G,
          className: "modal-box wide",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": H
            ? `Deposit ${u.USDG.symbol}`
            : `Withdraw ${u.USDG.symbol}`,
          "aria-busy": _,
          tabIndex: -1,
          children: [
            (0, t.jsxs)("div", {
              className: "funds-tabs",
              role: "tablist",
              "aria-label": "Move funds",
              children: [
                (0, t.jsx)("button", {
                  type: "button",
                  role: "tab",
                  id: "funds-tab-deposit",
                  "aria-selected": H,
                  "aria-controls": en,
                  tabIndex: H ? 0 : -1,
                  className: H ? "on" : "",
                  "data-testid": "funds-tab-deposit",
                  disabled: _,
                  onClick: () => J("deposit"),
                  children: "Deposit",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  role: "tab",
                  id: "funds-tab-withdraw",
                  "aria-selected": !H,
                  "aria-controls": en,
                  tabIndex: H ? -1 : 0,
                  className: H ? "" : "on",
                  "data-testid": "funds-tab-withdraw",
                  disabled: _,
                  onClick: () => J("withdraw"),
                  children: "Withdraw",
                }),
              ],
            }),
            (0, t.jsxs)("form", {
              className: "funds-body",
              id: en,
              role: "tabpanel",
              "aria-labelledby": ea,
              onSubmit: function (e) {
                e?.preventDefault?.(),
                  _ || K || null == F || et((0, h.fromUnits)(F));
              },
              noValidate: !0,
              children: [
                (0, t.jsxs)("div", {
                  className: "funds-balances",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "kv",
                      children: [
                        (0, t.jsx)("span", { children: "Available" }),
                        (0, t.jsxs)("b", {
                          "data-testid": "funds-available",
                          children: [
                            (0, h.fmtUnits)(N),
                            " ",
                            (0, t.jsx)(o.Usdg, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "kv",
                      children: [
                        (0, t.jsx)("span", { children: "In open positions" }),
                        (0, t.jsxs)("b", {
                          "data-testid": "funds-locked",
                          children: [
                            (0, h.fmtUnits)(w),
                            " ",
                            (0, t.jsx)(o.Usdg, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "field",
                  children: [
                    (0, t.jsxs)("label", {
                      className: "field-label",
                      htmlFor: "funds-amount",
                      children: [
                        "Amount",
                        (0, t.jsxs)("em", {
                          children: [
                            "min ",
                            (0, h.fmtUnits)(H ? S : k),
                            " ",
                            (0, t.jsx)(o.Usdg, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "chips",
                      children: [
                        p.map((e) => {
                          let n = (0, h.toUnits)(e),
                            a = !H && n > N;
                          return (0, t.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: "chip" + (F === n ? " on" : ""),
                              "aria-pressed": F === n,
                              "data-testid": "funds-preset",
                              "data-value": e,
                              disabled: _ || a,
                              title: a
                                ? "More than your available balance"
                                : void 0,
                              onClick: () => q(e),
                              children: [e, " ", u.USDG.symbol],
                            },
                            e
                          );
                        }),
                        H
                          ? null
                          : m.map((e) => {
                              let n =
                                  ((N * BigInt(e)) / 100n / 10000n) * 10000n,
                                a = n > 0n && F === n,
                                s = n < k;
                              return (0, t.jsxs)(
                                "button",
                                {
                                  type: "button",
                                  className: "chip" + (a ? " on" : ""),
                                  "aria-pressed": a,
                                  "data-testid": "funds-pct",
                                  "data-value": e,
                                  disabled: _ || s,
                                  title: s
                                    ? `${e}% is under the ${(0, h.fmtUnits)(
                                        k
                                      )} ${u.USDG.symbol} minimum`
                                    : void 0,
                                  onClick: () => q((0, h.fromUnits)(n)),
                                  children: [e, "%"],
                                },
                                e
                              );
                            }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "input-money" + (K && "" !== I ? " is-invalid" : ""),
                      children: [
                        (0, t.jsxs)("span", {
                          children: [
                            (0, t.jsx)(o.UsdgIcon, {}),
                            " ",
                            u.USDG.symbol,
                          ],
                        }),
                        (0, t.jsx)("input", {
                          id: "funds-amount",
                          type: "number",
                          inputMode: "decimal",
                          min: (0, h.fromUnits)(H ? S : k),
                          step: "0.01",
                          placeholder: "0.00",
                          autoComplete: "off",
                          value: I,
                          onChange: (e) => q(e.target.value),
                          disabled: _,
                          "aria-invalid": !!K,
                          "aria-describedby": "funds-fee funds-msg",
                          "data-autofocus": !0,
                          "data-testid": "funds-amount",
                        }),
                        H
                          ? null
                          : (0, t.jsx)("button", {
                              type: "button",
                              className: "max-btn",
                              title: Q
                                ? `You need at least ${(0, h.fmtUnits)(k)} ${
                                    u.USDG.symbol
                                  } to withdraw`
                                : "Withdraw your full available balance",
                              "data-testid": "funds-max",
                              disabled: _ || Q,
                              onClick: () => {
                                let e;
                                return q(
                                  (0, h.fromUnits)(
                                    ((e = N),
                                    null != Y && e > Y && (e = Y),
                                    e < k && (e = k),
                                    e)
                                  )
                                );
                              },
                              children: "MAX",
                            }),
                      ],
                    }),
                  ],
                }),
                z
                  ? (0, t.jsxs)("p", {
                      className: "funds-fee",
                      id: "funds-fee",
                      "data-testid": "funds-fee",
                      children: [
                        (0, t.jsx)(o.UsdgIcon, {}),
                        " ",
                        H
                          ? `Your wallet sends ${Z(F)} ${
                              u.USDG.symbol
                            } to the ${i.BRAND.name} treasury on ${
                              u.CHAIN_NAME
                            }. The network fee (a few cents of ETH) is paid by your wallet.`
                          : `Sent straight to ${(0, c.shortAddress)(
                              r?.wallet
                            )} on ${u.CHAIN_NAME}.`,
                      ],
                    })
                  : null,
                H || L?.hash ? (0, t.jsx)(o.NetworkLine, {}) : null,
                !H && z
                  ? (0, t.jsxs)("p", {
                      className: "funds-net",
                      "data-testid": "funds-net",
                      children: [
                        "You receive",
                        " ",
                        (0, t.jsxs)("b", {
                          children: [Z(X), " ", (0, t.jsx)(o.Usdg, {})],
                        }),
                        " ",
                        "(",
                        Z($),
                        " ",
                        u.USDG.symbol,
                        " network fee)",
                      ],
                    })
                  : null,
                H && r?.depositAddress
                  ? (0, t.jsxs)("div", {
                      className: "deposit-addr",
                      children: [
                        (0, t.jsx)("span", {
                          className: "deposit-addr-label",
                          children: "Treasury deposit address",
                        }),
                        (0, t.jsxs)("div", {
                          className: "deposit-addr-row",
                          children: [
                            (0, t.jsx)("code", {
                              "data-testid": "funds-deposit-address",
                              children: r.depositAddress,
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: "ghost sm",
                              "data-testid": "funds-copy-address",
                              onClick: ee,
                              children: "Copy",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className: "deposit-addr-warn",
                          children: [
                            "Only ",
                            (0, t.jsx)(o.UsdgIcon, {}),
                            " ",
                            u.USDG.symbol,
                            " on ",
                            u.CHAIN_NAME,
                            " (",
                            u.CHAIN_ID,
                            "). Anything else is lost.",
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "muted small",
                          children:
                            "Deposits from exchanges are credited automatically within a few minutes.",
                        }),
                      ],
                    })
                  : null,
                H && V && !l
                  ? (0, t.jsxs)("div", {
                      className: "warn",
                      children: [
                        "Your session is signed in, but the wallet is not connected in this tab.",
                        " ",
                        (0, t.jsx)("button", {
                          type: "button",
                          className: "link",
                          "data-testid": "funds-reconnect",
                          onClick: function () {
                            a(), v();
                          },
                          children: "Reconnect your wallet",
                        }),
                        " ",
                        "to deposit.",
                      ],
                    })
                  : null,
                (0, t.jsx)("div", {
                  id: "funds-msg",
                  className: "funds-msg",
                  "aria-live": L ? "assertive" : "polite",
                  "aria-atomic": "true",
                  children: L
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("p", {
                            className: "form-msg err",
                            "data-testid": "funds-error",
                            "data-kind": "error",
                            children: L.message,
                          }),
                          L.resume
                            ? (0, t.jsx)("button", {
                                type: "button",
                                className: "ghost sm",
                                "data-testid": "funds-check-pending",
                                disabled: _,
                                onClick: () => {
                                  P(L.resume), et(L.resume);
                                },
                                children: "Check that deposit",
                              })
                            : null,
                          L.hash
                            ? (0, t.jsxs)("a", {
                                className: "tx-link",
                                href: (0, u.explorerTx)(L.hash),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "data-testid": "funds-tx-link",
                                children: [
                                  (0, t.jsx)(o.RobinhoodIcon, {}),
                                  " View transaction ",
                                  (0, t.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "↗",
                                  }),
                                ],
                              })
                            : null,
                        ],
                      })
                    : K && !_
                    ? (0, t.jsx)("p", {
                        className: "form-msg guard",
                        "data-testid": "funds-error",
                        "data-kind": "guard",
                        children: K,
                      })
                    : null,
                }),
                (0, t.jsxs)("button", {
                  type: "submit",
                  className: "pill wide",
                  "data-testid": "funds-submit",
                  disabled: _ || !!K,
                  children: [
                    _
                      ? (0, t.jsx)("span", {
                          className: "spin",
                          "aria-hidden": "true",
                        })
                      : null,
                    (0, t.jsx)("span", {
                      children: _
                        ? T ?? "Working…"
                        : H
                        ? "Deposit"
                        : "Withdraw",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "muted small funds-note",
                  children: H
                    ? "Your wallet will ask you to approve the transfer. Nothing is credited until the transaction confirms on chain."
                    : `Sent straight to ${(0, c.shortAddress)(
                        r?.wallet
                      )} on confirm. Minimum ${(0, h.fmtUnits)(k)} ${
                        u.USDG.symbol
                      }.`,
                }),
              ],
            }),
            (0, t.jsx)("button", {
              type: "button",
              className: "ghost wide modal-cancel",
              "data-testid": "funds-close",
              onClick: a,
              disabled: _,
              title: _ ? "Wait for the current step to finish" : void 0,
              children: "Close",
            }),
          ],
        }),
      });
    }
    let g = [
        { href: "/", label: "Pools" },
        { href: "/positions", label: "Positions" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/leaderboard", label: "Leaderboard" },
        { href: "/whitepaper", label: "Whitepaper" },
      ],
      y = (e) => {
        try {
          return BigInt(e ?? 0);
        } catch {
          return 0n;
        }
      };
    function j({ size: e = 15 }) {
      return (0, t.jsx)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
          d: "M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.7L6 22H2.8l7.5-8.6L2.4 2h6.6l4.5 6.2L18.9 2z",
        }),
      });
    }
    function C({ assets: e, status: n, error: a }) {
      return "loading" !== n && ("error" === n || e)
        ? (0, t.jsxs)(t.Fragment, {
            children: [
              (e ?? []).map((e, n) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: "asset-row fade-up",
                    style: { "--i": n },
                    "data-testid": "nav-asset",
                    "data-symbol": e.symbol,
                    children: [
                      (0, t.jsx)(o.default, {
                        src: e.logo,
                        size: 22,
                        className: "asset-logo",
                      }),
                      (0, t.jsxs)("span", {
                        className: "asset-ident",
                        children: [
                          (0, t.jsx)("b", { children: e.symbol }),
                          (0, t.jsxs)("em", {
                            children: [
                              (0, t.jsx)(o.RobinhoodIcon, { size: 11 }),
                              " ",
                              u.CHAIN_NAME,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("span", {
                        className: "asset-amount",
                        children:
                          null == e.raw
                            ? "—"
                            : (0, h.fmtBalance)(BigInt(e.raw), e.decimals),
                      }),
                    ],
                  },
                  e.key
                )
              ),
              a
                ? (0, t.jsx)("p", { className: "asset-note", children: a })
                : null,
            ],
          })
        : (0, t.jsx)(t.Fragment, {
            children: [0, 1, 2, 3, 4].map((e) =>
              (0, t.jsx)(
                "span",
                { className: "asset-row skeleton", "aria-hidden": "true" },
                e
              )
            ),
          });
    }
    function v({
      wallet: e,
      leaving: n,
      onDisconnect: a,
      notify: r,
      available: i,
      locked: l,
    }) {
      let {
          assets: o,
          assetsStatus: p,
          assetsError: m,
          refreshAssets: b,
        } = (0, d.useWallet)(),
        [x, g] = (0, s.useState)(!1),
        y = (0, s.useRef)(null),
        j = (0, s.useRef)(null);
      async function N() {
        let t = await (0, f.copyText)(e);
        g(!1),
          r?.(
            t ? "Copied" : "Could not copy — select the address instead",
            "ok"
          );
      }
      return (
        (0, s.useEffect)(() => {
          x && b();
        }, [x, b]),
        (0, s.useEffect)(() => {
          if (!x) return;
          let e = (e) => {
              y.current?.contains(e.target) || g(!1);
            },
            t = (e) => {
              "Escape" === e.key &&
                (e.stopPropagation(), g(!1), j.current?.focus());
            };
          return (
            document.addEventListener("mousedown", e),
            document.addEventListener("keydown", t),
            () => {
              document.removeEventListener("mousedown", e),
                document.removeEventListener("keydown", t);
            }
          );
        }, [x]),
        (0, t.jsxs)("div", {
          className: "acct-menu",
          ref: y,
          children: [
            (0, t.jsxs)("button", {
              ref: j,
              type: "button",
              className: "ghost addr",
              "data-testid": "nav-address",
              "aria-haspopup": "menu",
              "aria-expanded": x,
              disabled: n,
              onClick: () => g((e) => !e),
              children: [
                (0, t.jsx)("span", {
                  className: "addr-dot",
                  "aria-hidden": "true",
                }),
                (0, t.jsx)("span", {
                  children: n ? "Signing out…" : (0, c.shortAddress)(e),
                }),
                (0, t.jsx)("span", {
                  className: "addr-caret",
                  "aria-hidden": "true",
                }),
              ],
            }),
            x
              ? (0, t.jsxs)("div", {
                  className: "acct-pop",
                  role: "menu",
                  "data-testid": "nav-menu",
                  "aria-label": "Account",
                  children: [
                    (0, t.jsx)("span", {
                      className: "acct-full",
                      title: e,
                      children: e,
                    }),
                    (0, t.jsxs)("p", {
                      className: "acct-bal",
                      children: [
                        "In app",
                        " ",
                        (0, t.jsxs)("b", {
                          "data-testid": "nav-balance-app",
                          children: [(0, h.fmtUnits)(i), " ", u.USDG.symbol],
                        }),
                        " ",
                        "· ",
                        (0, h.fmtUnits)(l),
                        " in play",
                      ],
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      role: "menuitem",
                      "data-testid": "nav-copy",
                      onClick: N,
                      children: "Copy address",
                    }),
                    (0, t.jsxs)("a", {
                      role: "menuitem",
                      href: (0, u.explorerAddress)(e),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-testid": "nav-explorer",
                      onClick: () => g(!1),
                      children: [
                        "View on explorer ",
                        (0, t.jsx)("span", {
                          "aria-hidden": "true",
                          children: "↗",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "acct-assets",
                      "data-testid": "nav-assets",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "acct-assets-head",
                          children: [
                            (0, t.jsx)("span", { children: "Your assets" }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: "asset-refresh",
                              "data-testid": "nav-assets-refresh",
                              "aria-label": "Refresh wallet balances",
                              title: "Refresh wallet balances",
                              disabled: "loading" === p,
                              onClick: () => b(),
                              children:
                                "loading" === p
                                  ? (0, t.jsx)("span", {
                                      className: "spin sm",
                                      "aria-hidden": "true",
                                    })
                                  : "↻",
                            }),
                          ],
                        }),
                        (0, t.jsx)(C, { assets: o, status: p, error: m }),
                      ],
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      role: "menuitem",
                      className: "acct-out",
                      "data-testid": "nav-disconnect",
                      onClick: () => {
                        g(!1), a();
                      },
                      children: "Disconnect",
                    }),
                  ],
                })
              : null,
          ],
        })
      );
    }
    e.s(
      [
        "default",
        0,
        function () {
          let {
              me: e,
              signedIn: r,
              busy: c,
              chainOk: f,
              openPicker: p,
              disconnect: m,
              switchChain: b,
              notify: C,
              assets: N,
              funds: w,
              openFunds: U,
              closeFunds: S,
            } = (0, d.useWallet)(),
            k = (0, a.usePathname)() ?? "/",
            [$, D] = (0, s.useState)(!1),
            [A, E] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            r || S();
          }, [r, S]);
          let I = y(e?.balance?.available),
            P = y(e?.balance?.locked),
            _ = Array.isArray(e?.pendingWithdrawals)
              ? e.pendingWithdrawals
              : [],
            R = _.find((e) => "string" == typeof e?.hash && e.hash)?.hash,
            T = _.reduce((e, t) => e + ((0, h.toUnits)(t?.netUsdg) ?? 0n), 0n),
            B = N?.find((e) => "usdg" === e.key) ?? null,
            L =
              B && null != B.raw
                ? (0, h.fmtBalance)(BigInt(B.raw), B.decimals)
                : "—",
            M = `Wallet ${L} ${u.USDG.symbol} on ${
              u.CHAIN_NAME
            } \xb7 in app ${(0, h.fmtUnits)(I)} \xb7 in play ${(0, h.fmtUnits)(
              P
            )}`,
            O =
              1 === _.length
                ? `Withdrawing ${(0, h.fmtUnits)(T)} ${u.USDG.symbol}`
                : `${_.length} withdrawals confirming \xb7 ${(0, h.fmtUnits)(
                    T
                  )} ${u.USDG.symbol}`;
          async function G() {
            D(!0), S();
            try {
              await m();
            } finally {
              D(!1);
            }
          }
          async function W() {
            E(!0);
            try {
              await b();
            } finally {
              E(!1);
            }
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("header", {
                className: "nav2",
                children: [
                  (0, t.jsxs)("div", {
                    className: "nav2-inner",
                    children: [
                      (0, t.jsx)(l, {}),
                      (0, t.jsx)("nav", {
                        className: "nav2-links",
                        "aria-label": "Dashboard",
                        children: g.map((e) => {
                          let a,
                            s =
                              "/" === (a = e.href)
                                ? "/" === k || k.startsWith("/pool/")
                                : k === a || k.startsWith(`${a}/`);
                          return (0, t.jsx)(
                            n.default,
                            {
                              href: e.href,
                              className: s ? "on" : "",
                              "aria-current": s ? "page" : void 0,
                              "data-testid": "nav-link",
                              "data-href": e.href,
                              children: e.label,
                            },
                            e.href
                          );
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "nav2-right",
                        children: [
                          i.BRAND.projectToken || i.BRAND.xUrl
                            ? (0, t.jsxs)("div", {
                                className: "nav2-social",
                                children: [
                                  i.BRAND.projectToken
                                    ? (0, t.jsxs)("a", {
                                        className: "token-btn",
                                        href: (0, u.explorerAddress)(
                                          i.BRAND.projectToken
                                        ),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        title: `${i.BRAND.name} token on ${u.CHAIN_NAME}`,
                                        children: [
                                          (0, t.jsx)("span", {
                                            className: "token-dot",
                                            "aria-hidden": "true",
                                          }),
                                          "Token",
                                        ],
                                      })
                                    : null,
                                  i.BRAND.xUrl
                                    ? (0, t.jsx)("a", {
                                        className: "icon-btn",
                                        href: i.BRAND.xUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": `${i.BRAND.name} on X`,
                                        children: (0, t.jsx)(j, {}),
                                      })
                                    : null,
                                ],
                              })
                            : null,
                          r
                            ? (0, t.jsx)("div", {
                                className: "nav2-funds",
                                children: (0, t.jsxs)("div", {
                                  className: "row-tight",
                                  children: [
                                    (0, t.jsx)("button", {
                                      type: "button",
                                      className: "pill sm",
                                      "data-testid": "nav-deposit",
                                      onClick: () => U("deposit"),
                                      children: "Deposit",
                                    }),
                                    (0, t.jsx)("button", {
                                      type: "button",
                                      className: "ghost",
                                      "data-testid": "nav-withdraw",
                                      onClick: () => U("withdraw"),
                                      children: "Withdraw",
                                    }),
                                  ],
                                }),
                              })
                            : null,
                          (0, t.jsx)("div", {
                            className: "nav2-acct",
                            children: r
                              ? (0, t.jsx)(v, {
                                  wallet: e.wallet,
                                  leaving: $,
                                  onDisconnect: G,
                                  notify: C,
                                  available: I,
                                  locked: P,
                                })
                              : (0, t.jsxs)("button", {
                                  type: "button",
                                  className: "pill",
                                  "data-testid": "nav-connect",
                                  onClick: p,
                                  disabled: c,
                                  children: [
                                    c
                                      ? (0, t.jsx)("span", {
                                          className: "spin",
                                          "aria-hidden": "true",
                                        })
                                      : null,
                                    (0, t.jsx)("span", {
                                      children: c
                                        ? "Connecting…"
                                        : "Connect Wallet",
                                    }),
                                  ],
                                }),
                          }),
                          r
                            ? (0, t.jsxs)("div", {
                                className: "bal-group",
                                children: [
                                  _.length
                                    ? R
                                      ? (0, t.jsxs)("a", {
                                          className: "pending-chip",
                                          href: (0, u.explorerTx)(R),
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          title:
                                            "View the withdrawal on the explorer",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: "spin sm",
                                              "aria-hidden": "true",
                                            }),
                                            O,
                                            (0, t.jsx)(o.RobinhoodIcon, {}),
                                          ],
                                        })
                                      : (0, t.jsxs)("span", {
                                          className: "pending-chip",
                                          title:
                                            "Queued — it is sent within moments",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className: "spin sm",
                                              "aria-hidden": "true",
                                            }),
                                            O,
                                          ],
                                        })
                                    : null,
                                  (0, t.jsxs)("div", {
                                    className: "bal-stack",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "bal-chip",
                                        "data-testid": "nav-balance",
                                        "data-app": I.toString(),
                                        title: M,
                                        "aria-label": M,
                                        children: [
                                          (0, t.jsx)(o.UsdgIcon, {}),
                                          (0, t.jsx)("b", { children: L }),
                                          (0, t.jsx)("span", {
                                            className: "bal-sym",
                                            children: u.USDG.symbol,
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("em", {
                                        className: "bal-app",
                                        children: [
                                          "in app: ",
                                          (0, h.fmtUnits)(I),
                                          " · in play: ",
                                          (0, h.fmtUnits)(P),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                  r && !f
                    ? (0, t.jsx)("div", {
                        className: "banner-net",
                        "data-testid": "wrong-network",
                        role: "alert",
                        children: (0, t.jsxs)("div", {
                          className: "banner-net-inner",
                          children: [
                            (0, t.jsxs)("p", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: "live-dot",
                                  "aria-hidden": "true",
                                }),
                                "Your wallet is on another network. Deposits need ",
                                u.CHAIN_NAME,
                                ".",
                              ],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: "ghost sm",
                              "data-testid": "switch-network",
                              onClick: W,
                              disabled: A,
                              children: A
                                ? "Switching…"
                                : `Switch to ${u.CHAIN_NAME}`,
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              w && r
                ? (0, t.jsx)(x, {
                    tab: w.tab,
                    initialAmount: w.amount,
                    onClose: S,
                  })
                : null,
            ],
          });
        },
      ],
      63425
    );
  },
  86451,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(93876),
      a = e.i(20187);
    e.s([
      "default",
      0,
      function ({ children: e, ...s }) {
        return (0, t.jsx)(n.default, { href: a.BRAND.home, ...s, children: e });
      },
    ]);
  },
  93876,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(64723),
      a = e.i(20187),
      s = e.i(40219);
    e.s([
      "default",
      0,
      function ({
        href: e = a.BRAND.home,
        label: r = "Opening HOP",
        children: i,
        ...l
      }) {
        let { leaving: o, onClick: d, onDone: u } = (0, s.useLeave)(e);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("a", { href: e, onClick: d, ...l, children: i }),
            (0, t.jsx)(n.default, {
              active: o,
              finale: o,
              onDone: u,
              label: r,
            }),
          ],
        });
      },
    ]);
  },
  20187,
  (e) => {
    "use strict";
    var t = e.i(47167);
    let n = {
      name: "HOP",
      product: "Markets",
      tagline: "Forecast a number. Earn on how close you get.",
      description:
        "Private, precision-based price forecasts on tokenized stocks, crypto and Robinhood Chain memes. Settled in USDG.",
      home: "/",
      xUrl: t.default.env.NEXT_PUBLIC_X_URL || "https://x.com/hopweb3",
      projectToken: t.default.env.NEXT_PUBLIC_PROJECT_TOKEN || "",
    };
    e.s(["BRAND", 0, n]);
  },
  17587,
  (e) => {
    "use strict";
    var t = e.i(86687);
    function n(e, a = t.USDG.decimals) {
      let s = BigInt(e ?? 0),
        r = s < 0n,
        i = r ? -s : s,
        l = 10n ** BigInt(a),
        o = (i % l).toString().padStart(a, "0").replace(/0+$/, "");
      return `${r ? "-" : ""}${i / l}${o ? `.${o}` : ""}`;
    }
    function a(e, s = 2, r = t.USDG.decimals, { away: i = !1 } = {}) {
      let l = BigInt(e ?? 0),
        o = l < 0n,
        d = o ? -l : l,
        u = 10n ** BigInt(r - s),
        c = (d / u) * u,
        [f, h = ""] = n(i && c !== d ? c + u : c, r).split("."),
        p = BigInt(f).toLocaleString("en-US");
      return `${o ? "−" : ""}${p}${
        s > 0 ? "." + (h + "0".repeat(s)).slice(0, s) : ""
      }`;
    }
    e.s([
      "fmtBalance",
      0,
      function (e, t) {
        let a = n(e ?? 0n, t),
          [s, r = ""] = a.replace("-", "").split("."),
          i = a.startsWith("-") ? "−" : "",
          l = BigInt(s).toLocaleString("en-US");
        if ("0" !== s) {
          let e = r.slice(0, 4).replace(/0+$/, "");
          return `${i}${l}${e ? `.${e}` : ""}`;
        }
        let o = r.search(/[1-9]/);
        if (o < 0) return "0";
        let d = r.slice(0, o + 4).replace(/0+$/, "");
        return `${i}0.${d}`;
      },
      "fmtSigned",
      0,
      function (e, n = 2) {
        let s = BigInt(e ?? 0),
          r = s < 0n;
        return `${r ? "−" : "+"}${a(r ? -s : s, n, t.USDG.decimals, {
          away: r,
        })}`;
      },
      "fmtUnits",
      0,
      a,
      "fmtUsdg",
      0,
      (e, n = 2) => `${a(e, n)} ${t.USDG.symbol}`,
      "fromUnits",
      0,
      n,
      "toNumber",
      0,
      (e, a = t.USDG.decimals) => Number(n(e, a)),
      "toUnits",
      0,
      function (e, n = t.USDG.decimals) {
        let a = String(e ?? "").trim();
        if (a.length > 40 || !/^\d+(\.\d*)?$|^\.\d+$/.test(a)) return null;
        let [s = "0", r = ""] = a.split(".");
        if (r.length > n && /[1-9]/.test(r.slice(n))) return null;
        let i = (r + "0".repeat(n)).slice(0, n);
        return BigInt(s || "0") * 10n ** BigInt(n) + BigInt(i || "0");
      },
    ]);
  },
  40219,
  (e) => {
    "use strict";
    var t = e.i(71645);
    e.s([
      "useLeave",
      0,
      function (e = "/") {
        let [n, a] = (0, t.useState)(!1),
          s = (0, t.useRef)(!1);
        return {
          leaving: n,
          onClick: (0, t.useCallback)((e) => {
            e.defaultPrevented ||
              0 !== e.button ||
              e.metaKey ||
              e.ctrlKey ||
              e.shiftKey ||
              e.altKey ||
              (e.preventDefault(), s.current || ((s.current = !0), a(!0)));
          }, []),
          onDone: (0, t.useCallback)(() => {
            window.location.assign(e);
          }, [e]),
        };
      },
    ]);
  },
  22016,
  (e, t, n) => {
    "use strict";
    e.i(47167), Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return x;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = e.r(90809),
      i = e.r(43476),
      l = r._(e.r(71645)),
      o = e.r(95057),
      d = e.r(8372),
      u = e.r(18581),
      c = e.r(18967),
      f = e.r(5550),
      h = e.r(88540),
      p = e.r(91949),
      m = e.r(73668),
      b = e.r(9396);
    function x(t) {
      var n;
      let a,
        s,
        r,
        [x, y] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
        j = (0, l.useRef)(null),
        {
          href: C,
          as: v,
          children: N,
          prefetch: w = null,
          passHref: U,
          replace: S,
          shallow: k,
          scroll: $,
          onClick: D,
          onMouseEnter: A,
          onTouchStart: E,
          legacyBehavior: I = !1,
          onNavigate: P,
          transitionTypes: _,
          ref: R,
          unstable_dynamicOnHover: T,
          ...B
        } = t;
      (a = N),
        I &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, i.jsx)("a", { children: a }));
      let L = l.default.useContext(d.AppRouterContext),
        M = !1 !== w,
        O = !1 === w ? "none" : !0 === w ? "full" : "auto",
        G =
          "none" !== O
            ? "auto" === O
              ? b.FetchStrategy.PPR
              : b.FetchStrategy.Full
            : b.FetchStrategy.PPR,
        W = "string" == typeof (n = v || C) ? n : (0, o.formatUrl)(n);
      if (I) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        s = l.default.Children.only(a);
      }
      let H = I ? s && "object" == typeof s && s.ref : R,
        V,
        F = l.default.useCallback(
          (e) => (
            null !== L &&
              (j.current = (0, p.mountLinkInstance)(e, W, L, G, M, y, V)),
            () => {
              j.current &&
                ((0, p.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [M, W, L, G, y, V]
        ),
        K = {
          ref: (0, u.useMergedRef)(F, H),
          onClick(t) {
            I || "function" != typeof D || D(t),
              I &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, a, s, r, i, o, d = "none") {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(n)) {
                      s && (t.preventDefault(), location.replace(n));
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
                    let { dispatchNavigateAction: f } = e.r(99781);
                    l.default.startTransition(() => {
                      f(
                        n,
                        s ? "replace" : "push",
                        !1 === r
                          ? h.ScrollBehavior.NoScroll
                          : h.ScrollBehavior.Default,
                        a.current,
                        o,
                        d
                      );
                    });
                  }
                })(t, W, j, S, $, P, _, O);
          },
          onMouseEnter(e) {
            I || "function" != typeof A || A(e),
              I &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              L && M && (0, p.onNavigationIntent)(e.currentTarget, !0 === T);
          },
          onTouchStart: function (e) {
            I || "function" != typeof E || E(e),
              I &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(e),
              L && M && (0, p.onNavigationIntent)(e.currentTarget, !0 === T);
          },
        };
      return (
        (0, c.isAbsoluteUrl)(W)
          ? (K.href = W)
          : (I && !U && ("a" !== s.type || "href" in s.props)) ||
            (K.href = (0, f.addBasePath)(W)),
        (r = I
          ? l.default.cloneElement(s, K)
          : (0, i.jsx)("a", { ...B, ...K, children: a })),
        (0, i.jsx)(g.Provider, { value: x, children: r })
      );
    }
    let g = (0, l.createContext)(p.IDLE_LINK_STATUS),
      y = () => (0, l.useContext)(g);
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  18581,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let a = e.r(71645);
    function s(e, t) {
      let n = (0, a.useRef)(null),
        s = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = s.current;
            t && ((s.current = null), t());
          } else e && (n.current = r(e, a)), t && (s.current = r(t, a));
        },
        [e, t]
      );
    }
    function r(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let n = e(t);
        return "function" == typeof n ? n : () => e(null);
      }
    }
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  18967,
  (e, t, n) => {
    "use strict";
    e.i(47167), Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      DecodeError: function () {
        return x;
      },
      MiddlewareNotFoundError: function () {
        return C;
      },
      MissingStaticPage: function () {
        return j;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return y;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return r;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return c;
      },
      getLocationOrigin: function () {
        return d;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return o;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return h;
      },
      stringifyError: function () {
        return v;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        n = !1;
      return (...a) => (n || ((n = !0), (t = e(...a))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      o = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && l.test(e);
      };
    function d() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function u() {
      let { href: e } = window.location,
        t = d();
      return e.substring(t.length);
    }
    function c(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function h(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let a = await e.getInitialProps(t);
      if (n && f(n)) return a;
      if (!a)
        throw Object.defineProperty(
          Error(
            `"${c(
              e
            )}.getInitialProps()" should resolve to an object. But found "${a}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 }
        );
      return a;
    }
    let m = "u" > typeof performance,
      b =
        m &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class x extends Error {}
    class g extends Error {}
    class y extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class j extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class C extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function v(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let a = e.r(18967),
      s = e.r(52817);
    function r(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          n = new URL(e, t);
        return n.origin === t && (0, s.hasBasePath)(n.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      assign: function () {
        return o;
      },
      searchParamsToUrlQuery: function () {
        return r;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    function r(e) {
      let t = {};
      for (let [n, a] of e.entries()) {
        let e = t[n];
        void 0 === e
          ? (t[n] = a)
          : Array.isArray(e)
          ? e.push(a)
          : (t[n] = [e, a]);
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
    function l(e) {
      let t = new URLSearchParams();
      for (let [n, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(n, i(e));
        else t.set(n, i(a));
      return t;
    }
    function o(e, ...t) {
      for (let n of t) {
        for (let t of n.keys()) e.delete(t);
        for (let [t, a] of n.entries()) e.append(t, a);
      }
      return e;
    }
  },
  95057,
  (e, t, n) => {
    "use strict";
    e.i(47167), Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return d;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: n } = e,
        a = e.protocol || "",
        s = e.pathname || "",
        l = e.hash || "",
        o = e.query || "",
        d = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (d = t + e.host)
          : n &&
            ((d = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (d += ":" + e.port)),
        o && "object" == typeof o && (o = String(r.urlQueryToSearchParams(o)));
      let u = e.search || (o && `?${o}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || i.test(a)) && !1 !== d)
          ? ((d = "//" + (d || "")), s && "/" !== s[0] && (s = "/" + s))
          : d || (d = ""),
        l && "#" !== l[0] && (l = "#" + l),
        u && "?" !== u[0] && (u = "?" + u),
        (s = s.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace("#", "%23")),
        `${a}${d}${s}${u}${l}`
      );
    }
    let o = [
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
    function d(e) {
      return l(e);
    }
  },
  18566,
  (e, t, n) => {
    t.exports = e.r(91796);
  },
]);
