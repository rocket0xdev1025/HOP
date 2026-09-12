(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [402],
  {
    6613: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 9696));
    },
    9696: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var a = l(7437);
      l(2265);
      var r = l(5303),
        s = l(6164),
        n = l(6797),
        c = l(921),
        i = l(4172);
      let o = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        u = "".concat(o, "/unexpected-error-decoration.svg"),
        x = "".concat(o, "/error-bunny.png"),
        d = "".concat(o, "/error-gradient-bg.jpg");
      var h = (e) => {
        let { errorCode: t } = e,
          l = "Something went wrong ".concat(t.toString());
        return (0, a.jsxs)("div", {
          className: "relative px-4 h-full lg:px-10 z-[1]",
          children: [
            (0, a.jsx)(r.Z, {
              alt: "",
              src: d,
              fill: !0,
              className: (0, s.m6)("absolute w-full h-full object-fill z-[-1]"),
            }),
            (0, a.jsxs)("div", {
              className:
                "relative flex flex-col md:flex-row gap-x-8 w-full h-screen justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative flex flex-col justify-center items-start z-[1] mt-10 md:mt-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-x-4 items-center justify-center",
                      children: [
                        (0, a.jsx)(r.Z, {
                          alt: "",
                          src: u,
                          width: 54,
                          height: 24,
                          className: (0, s.m6)("object-fill"),
                        }),
                        (0, a.jsx)(n.Z, {
                          level: 3,
                          className: (0, s.m6)("uppercase text-pink-900"),
                          children: "Awkward!",
                        }),
                      ],
                    }),
                    (0, a.jsx)(n.Z, {
                      className: (0, s.m6)("uppercase mt-6"),
                      children: l,
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "text-lg lg:text-xl font-medium mt-8 max-w-[560px]",
                      children: [
                        "Sorry, we can’t complete your request at this time. Please try again later! In the meantime, have a carrot or try your luck by going to our",
                        " ",
                        (0, a.jsx)(i.TransitionLink, {
                          className: "underline",
                          "aria-label": "homepage",
                          href: "/",
                          children: "homepage",
                        }),
                        ",",
                        " ",
                        (0, a.jsx)(c.Z, {
                          className: "underline",
                          "aria-label": "Dashboard",
                          target: "_blank",
                          href: "/dashboard",
                          children: "Dashboard",
                        }),
                        " ",
                        "or",
                        " ",
                        (0, a.jsx)(c.Z, {
                          className: "underline",
                          "aria-label": "Home",
                          target: "_blank",
                          href: "/",
                          children: "Home",
                        }),
                        " ",
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(r.Z, {
                  alt: "",
                  src: x,
                  width: 682,
                  height: 682,
                  className: (0, s.m6)(
                    "w-[358px] h-[358px] md:w-[440px] md:h-[440px] lg:w-[682px] lg:h-[682px] object-cover mx-auto md:mt-auto"
                  ),
                }),
              ],
            }),
          ],
        });
      };
      function m() {
        return (0, a.jsx)(h, { errorCode: 500 });
      }
    },
    4172: function (e, t, l) {
      "use strict";
      l.d(t, {
        TransitionLink: function () {
          return c;
        },
      });
      var a = l(7437);
      l(2265);
      var r = l(6463),
        s = l(921),
        n = l(9123);
      let c = (e) => {
        let { children: t, href: l, isExternal: c, onClick: i, ...o } = e,
          u = (0, r.usePathname)(),
          x = (0, n.Z)((e) => e.setIsGlobalLoaderVisible);
        return (0, a.jsx)(s.Z, {
          ...o,
          href: l,
          onClick: (e) => {
            (u.includes(l.toString()) && ("/" !== l || l === u)) || c || x(!0),
              i && i(e);
          },
          children: t,
        });
      };
    },
    5303: function (e, t, l) {
      "use strict";
      var a = l(7437),
        r = l(6648);
      t.Z = (e) => {
        let {
          src: t,
          alt: l,
          width: s,
          height: n,
          className: c = "",
          ...i
        } = e;
        return null === t
          ? null
          : (0, a.jsx)(r.default, {
              src: t,
              alt: l,
              width: s,
              height: n,
              className: c,
              ...i,
            });
      };
    },
    921: function (e, t, l) {
      "use strict";
      var a = l(7437),
        r = l(7138),
        s = l(6164);
      t.Z = (e) => {
        let {
          children: t,
          href: l,
          className: n = "",
          target: c,
          prefetch: i = !1,
          title: o,
          ...u
        } = e;
        return (0, a.jsx)(r.default, {
          href: null != l ? l : "",
          className: (0, s.m6)(n),
          target: c || void 0,
          prefetch: i,
          title: null != o ? o : void 0,
          ...u,
          children: t,
        });
      };
    },
    6797: function (e, t, l) {
      "use strict";
      var a = l(7437),
        r = l(8601),
        s = l(6164),
        n = l(4894),
        c = l.n(n);
      t.Z = (e) => {
        let t,
          {
            children: l,
            level: n = 1,
            isRedMode: i = !1,
            className: o = "",
            ...u
          } = e;
        switch (n) {
          case 0:
          case 3:
          case 6:
            t = "text-xl lg:text-5xl";
            break;
          case 2:
            t = "text-4xl lg:text-7xl";
            break;
          case 4:
            t = "text-3xl lg:text-5xl";
            break;
          case 5:
            t = "text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
            break;
          default:
            t = "text-6xl lg:text-8xl";
        }
        return (0, a.jsx)(0 === n ? "div" : "h".concat(n), {
          className: (0, s.m6)(
            "font-bold [&>span]:text-pink-900 -tracking-[.03em] hyphens-auto beak-word md:hyphens-none",
            i && "[&>span]:text-red-900",
            t,
            o,
            c().className
          ),
          ...u,
          children: (0, r.ZP)(l),
        });
      };
    },
    9123: function (e, t, l) {
      "use strict";
      l.d(t, {
        B: function () {
          return r;
        },
      });
      var a = l(903);
      let r = "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static"),
        s = (0, a.U)((e) => ({
          isGlobalLoaderVisible: !1,
          setIsGlobalLoaderVisible: (t) => {
            e({ isGlobalLoaderVisible: t });
          },
        }));
      t.Z = s;
    },
  },
  function (e) {
    e.O(0, [281, 247, 138, 47, 478, 23, 744], function () {
      return e((e.s = 6613));
    }),
      (_N_E = e.O());
  },
]);
