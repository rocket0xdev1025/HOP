(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  34045,
  (e) => {
    "use strict";
    var n = e.i(43476),
      o = e.i(20187);
    e.s([
      "default",
      0,
      function ({ error: e, retry: t, reset: r }) {
        return (0, n.jsx)("html", {
          lang: "en",
          children: (0, n.jsx)("body", {
            style: { margin: 0, background: "#0a0a0a", color: "#ededed" },
            children: (0, n.jsxs)("main", {
              role: "alert",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                minHeight: "100vh",
                padding: "2rem",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                textAlign: "center",
              },
              children: [
                (0, n.jsxs)("h1", {
                  style: { margin: 0, fontSize: "1.4rem" },
                  children: [o.BRAND.name, " could not start"],
                }),
                (0, n.jsx)("p", {
                  style: {
                    margin: 0,
                    color: "#a1a1a1",
                    maxWidth: "40ch",
                    lineHeight: 1.6,
                  },
                  children:
                    "Something failed before the page could render. Your balance and positions are untouched — nothing here moves money.",
                }),
                e?.digest
                  ? (0, n.jsxs)("p", {
                      style: {
                        margin: 0,
                        fontSize: ".75rem",
                        color: "#8f8f8f",
                      },
                      children: ["Reference ", e.digest],
                    })
                  : null,
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    "function" == typeof t
                      ? t()
                      : "function" == typeof r
                      ? r()
                      : window.location.reload();
                  },
                  style: {
                    marginTop: ".5rem",
                    padding: ".7rem 1.4rem",
                    font: "inherit",
                    color: "#0a0a0a",
                    background: "#ff07fe",
                    border: 0,
                    borderRadius: "8px",
                    cursor: "pointer",
                  },
                  children: "Try again",
                }),
              ],
            }),
          }),
        });
      },
    ]);
  },
  20187,
  (e) => {
    "use strict";
    var n = e.i(47167);
    let o = {
      name: "HOP",
      product: "Markets",
      tagline: "Forecast a number. Earn on how close you get.",
      description:
        "Private, precision-based price forecasts on tokenized stocks, crypto and Robinhood Chain memes. Settled in USDG.",
      home: "/",
      xUrl: n.default.env.NEXT_PUBLIC_X_URL || "https://x.com/hopweb3",
      projectToken: n.default.env.NEXT_PUBLIC_PROJECT_TOKEN || "",
    };
    e.s(["BRAND", 0, o]);
  },
]);
