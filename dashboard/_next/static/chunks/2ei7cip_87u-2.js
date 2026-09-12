(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  49980,
  (e) => {
    "use strict";
    var s = e.i(43476),
      a = e.i(22016),
      i = e.i(71645);
    e.s([
      "default",
      0,
      function ({ error: e, retry: l, reset: n }) {
        return (
          (0, i.useEffect)(() => {
            console.error(e);
          }, [e]),
          (0, s.jsx)("div", {
            className: "wrap app-main",
            children: (0, s.jsxs)("div", {
              className: "app-empty",
              role: "alert",
              children: [
                (0, s.jsx)("p", { className: "err-code", children: "Error" }),
                (0, s.jsx)("h1", {
                  className: "font-display",
                  children: "Something broke",
                }),
                (0, s.jsx)("p", {
                  children:
                    "This page hit an unexpected error. Your balance and positions are safe.",
                }),
                e?.digest
                  ? (0, s.jsxs)("p", {
                      className: "small muted",
                      children: ["Reference ", e.digest],
                    })
                  : null,
                (0, s.jsxs)("div", {
                  className: "app-empty-actions",
                  children: [
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "pill",
                      onClick: () => {
                        "function" == typeof l
                          ? l()
                          : "function" == typeof n
                          ? n()
                          : window.location.reload();
                      },
                      children: "Try again",
                    }),
                    (0, s.jsx)(a.default, {
                      href: "/",
                      className: "ghost",
                      children: "Back to pools",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      },
    ]);
  },
]);
