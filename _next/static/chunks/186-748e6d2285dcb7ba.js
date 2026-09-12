(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [186],
  {
    1579: function (e, t, l) {
      "use strict";
      var n = l(7437),
        i = l(2265),
        a = l(8601),
        r = l(3417),
        s = l(4398),
        o = l(9512);
      t.default = (e) => {
        let { data: t, onClose: l } = e,
          c = (0, i.useRef)(null),
          d = (0, i.useRef)(null);
        if (
          ((0, i.useEffect)(() => {
            if (c.current && !s.tq)
              return (
                c.current.addEventListener("mousemove", (e) =>
                  (0, r.p)({ e, sectionEl: c.current })
                ),
                () => {
                  var e;
                  null === (e = c.current) ||
                    void 0 === e ||
                    e.removeEventListener("mousemove", (e) =>
                      (0, r.p)({ e, sectionEl: c.current })
                    );
                }
              );
          }, []),
          (0, i.useEffect)(() => {
            if (!d.current) return;
            let e = (e) => {
              let t = e.target.closest(".announcement-bar__copy-link-discount");
              if (!t) return;
              e.preventDefault();
              let l = t.getAttribute("data-discount-code");
              l &&
                ((0, o.v)(l),
                t.classList.add("announcement-bar__copy-link-discount-active"));
            };
            return (
              d.current.addEventListener("click", e),
              () => {
                var t;
                null === (t = d.current) ||
                  void 0 === t ||
                  t.removeEventListener("click", e);
              }
            );
          }, [null == t ? void 0 : t.content]),
          !(null == t ? void 0 : t.content))
        )
          return null;
        if ("string" != typeof t.content)
          return (
            console.warn(
              "AnnouncementBar: content is not a string, received:",
              typeof t.content,
              t.content
            ),
            null
          );
        let u = t.content.trim();
        return u
          ? (0, n.jsxs)("div", {
              ref: c,
              "data-announcement-bar": !0,
              className: "relative group w-full overflow-hidden",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute inset-0 button-glow-purple blur-[16px] will-change-[filter] group-hover:blur-[32px] pointer-events-none",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative py-[5px] px-[40px] flex items-center justify-center text-center button-bg-purple button-glow-purple-hover overflow-hidden",
                  children: [
                    (0, n.jsxs)("div", {
                      ref: d,
                      className: "text-white relative z-10",
                      "data-announcement-bar-richtext": !0,
                      children: [
                        (0, a.ZP)(u),
                        (0, n.jsx)("span", {
                          className: "announcement-bar__richtext-arrow-wrapper",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => {
                        null == l || l();
                      },
                      className:
                        "opacity-50 hover:opacity-100 absolute right-[20px] top-1/2 -translate-y-1/2 z-20 cursor-pointer",
                      "aria-label": "Close announcement",
                      children: (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, n.jsx)("g", {
                          children: (0, n.jsx)("path", {
                            d: "M12 4L4 12M4 4L12 12",
                            stroke: "white",
                            strokeWidth: "1.5",
                            strokeLinecap: "square",
                            strokeLinejoin: "round",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
    68: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return z;
        },
      });
      var n = l(7437),
        i = l(2265),
        a = l(9582),
        r = l(1204),
        s = (e) => {
          let { targetId: t, onIntersection: l, onIntersectionLeave: n } = e;
          (0, i.useEffect)(() => {
            let e = document.querySelector("#".concat(t));
            if (!e) return;
            let i = new IntersectionObserver(
              (e) => {
                var t;
                (
                  null === (t = e[0]) || void 0 === t
                    ? void 0
                    : t.isIntersecting
                )
                  ? l()
                  : n();
              },
              { rootMargin: "50px", threshold: 0 }
            );
            return (
              i.observe(e),
              () => {
                i.unobserve(e);
              }
            );
          }, [!0]);
        },
        o = l(5303),
        c = l(6164),
        d = l(4894),
        u = l.n(d),
        x = l(921),
        m = l(4989),
        h = l(2088),
        g = l(19),
        f = l(6924),
        p = l(4172),
        v = l(9030),
        M = l(4727),
        j = l.n(M);
      a.ZP.registerPlugin(r.i);
      let N = "footerModuleId",
        y = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets/footer"
        ),
        w = {
          copy: "Settled in <b>USDG</b> on Robinhood Chain",
          svgURI: "".concat(y, "/rabbit-expression-07.svg"),
        },
        b = [
          {
            copy: "Scoring is <b>public</b>: accuracy × timing × conviction",
            svgURI: "".concat(y, "/icon-safety.svg"),
          },
          {
            copy: "Sign in with <b>your wallet</b>, payouts back to it",
            svgURI: "".concat(y, "/icon-verified.svg"),
          },
          {
            copy: "House cut <b>3 %</b>, nothing else",
            svgURI: "".concat(y, "/icon-verified.svg"),
          },
          {
            copy: "<b>Built</b> for Robinhood Chain",
            svgURI: "".concat(y, "/icon-holiday.svg"),
          },
        ],
        I = [
          // HOP: la fila "Settlement" del pie. Antes: Apple Pay, Google Pay, PayPal, SEPA,
          // Mastercard y Visa de la aseguradora; aquí solo se liquida en USDG en Robinhood Chain.
          { svgURI: "/uploads/pay-usdg.png" },
          { svgURI: "/uploads/pay-robinhood.png" },
        ];
      var z = (e) => {
        var t, l, d, M;
        let {
            title: y,
            shortDescription: z,
            socialNetwork: C,
            resources: L,
            products: D,
            resourcesTitle: T,
            productsTitle: A,
            legals: k,
            coverImage: E,
            coverImageSmall: S,
            noCookieConsent: Z,
          } = e,
          H = 2026,
          { title: O, socials: V } = C || {},
          [U, Q] = (0, i.useState)(!1),
          _ = (0, i.useRef)(null),
          P = (0, i.useRef)(null),
          R = "h-[93.4vw] md:h-[36.8vw] lg:h-[37.2vw]",
          Y = (0, f.Z)(),
          q =
            k && !Z
              ? [
                  ...k.slice(0, 1),
                  {
                    label: "Cookies",
                    callback: () => {
                      var e;
                      (
                        null === (e = window.UC_UI) || void 0 === e
                          ? void 0
                          : e.showSecondLayer
                      )
                        ? window.UC_UI.showSecondLayer()
                        : console.log("UC_UI not found");
                    },
                    linkOptions: null,
                    id: -1,
                    path: "",
                  },
                  ...k.slice(1),
                ]
              : k || [];
        return (
          s({
            targetId: N,
            onIntersection: () => {
              P.current && ((P.current.style.opacity = "1"), Q(!0));
            },
            onIntersectionLeave: () => {
              P.current && (P.current.style.opacity = "0");
            },
          }),
          (0, g.V)(() => {
            if (_.current && U) {
              let e = _.current.querySelector(".footerTitle"),
                t = _.current.querySelector(".footerShortDescription"),
                l = _.current.querySelectorAll(".footerProduct"),
                n = _.current.querySelectorAll(".footerResource"),
                i = _.current.querySelector(".footerLegal"),
                s = _.current.querySelector(".footerNetwork"),
                o = _.current.querySelector(".testimonials"),
                c = _.current.querySelector(".footerPaymentMethods"),
                d = new h.Z(t, { types: "lines" }).lines;
              r.i.create({
                trigger: _.current,
                toggleActions: "play reverse play reverse",
                start: "top bottom",
                invalidateOnRefresh: !0,
                once: !0,
                onEnter: () => {
                  e &&
                    a.ZP.fromTo(
                      e,
                      { y: 40 },
                      { y: 0, duration: 0.6, ease: "power1.out" }
                    ),
                    t &&
                      a.ZP.fromTo(
                        d,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.1,
                          duration: 0.6,
                          ease: "power1.out",
                        }
                      ),
                    l &&
                      a.ZP.fromTo(
                        l,
                        { y: 40 },
                        {
                          y: 0,
                          stagger: 0.1,
                          duration: 0.6,
                          ease: "power1.out",
                        }
                      ),
                    n &&
                      a.ZP.fromTo(
                        n,
                        { y: 40 },
                        {
                          y: 0,
                          stagger: 0.1,
                          duration: 0.6,
                          ease: "power1.out",
                        }
                      ),
                    i &&
                      a.ZP.fromTo(
                        i,
                        { y: 40 },
                        { y: 0, duration: 0.6, ease: "power1.out" }
                      ),
                    s &&
                      a.ZP.fromTo(
                        s,
                        { y: 40 },
                        { y: 0, duration: 0.6, ease: "power1.out" }
                      ),
                    o &&
                      a.ZP.fromTo(
                        o,
                        { y: 40, opacity: 0 },
                        { y: 0, duration: 0.6, ease: "power1.out", opacity: 1 }
                      ),
                    c &&
                      a.ZP.fromTo(
                        c,
                        { y: 40, opacity: 0 },
                        { y: 0, duration: 0.6, ease: "power1.out", opacity: 1 }
                      );
                },
              });
            }
          }, [_, U, Y]),
          (0, n.jsxs)("div", {
            id: N,
            className: "relative",
            children: [
              (0, n.jsxs)("div", {
                ref: _,
                className:
                  "relative flex flex-col md:flex-row bg-black w-full h-max z-[1] border-t-[1px] border-t-[#404040]",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col justify-between md:w-[50.07%] lg:w-[33.39vw] px-4 py-8 md:pt-8 md:px-10 md:pb-10 shrink-0 border-b-[1px] border-b-[#404040] md:border-r-[1px] md:border-r-[#404040] md:border-b-0",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, n.jsx)("p", {
                            className: (0, c.m6)(
                              "relative overflow-hidden text-sm lg:text-base font-bold",
                              u().className
                            ),
                            children: (0, n.jsx)("span", {
                              className: "footerTitle block",
                              children: y,
                            }),
                          }),
                          (0, n.jsx)("p", {
                            className:
                              "footerShortDescription text-lg lg:text-xl text-[#A1A1A1]",
                            children: z,
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "relative overflow-hidden mt-[78px] md:mb-[78px]",
                        children: (0, n.jsxs)("div", {
                          className: "".concat(
                            j().testimonialSection,
                            " testimonials"
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: ""
                                .concat(j().testimonialSectionItem, " ")
                                .concat(j().heroTestimonial),
                              children: [
                                (0, n.jsx)(o.Z, {
                                  height: 48,
                                  width: 48,
                                  alt: w.svgURI,
                                  src: w.svgURI,
                                }),
                                (0, n.jsx)("p", {
                                  dangerouslySetInnerHTML: { __html: w.copy },
                                  className: "text-base",
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: j().testimonialSectionItemContainer,
                              children: b.map((e) =>
                                (0, n.jsxs)(
                                  "div",
                                  {
                                    className: j().testimonialSectionItem,
                                    children: [
                                      (0, n.jsx)(o.Z, {
                                        height: 24,
                                        width: 24,
                                        alt: e.svgURI,
                                        src: e.svgURI,
                                      }),
                                      (0, n.jsx)("p", {
                                        dangerouslySetInnerHTML: {
                                          __html: e.copy,
                                        },
                                        className: "text-base",
                                      }),
                                    ],
                                  },
                                  e.copy
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative overflow-hidden mt-[78px] md:mt-0",
                        children: (0, n.jsxs)("div", {
                          className:
                            "footerNetwork relative flex gap-x-4 items-center",
                          children: [
                            (null == V ? void 0 : V.length) &&
                              V.map((e) => {
                                var t, l;
                                let {
                                    path: i,
                                    coverImage: a,
                                    id: r,
                                    linkOptions: s,
                                  } = e || {},
                                  { target: c, title: d } = s || {};
                                return i && a
                                  ? (0, n.jsx)(
                                      x.Z,
                                      {
                                        href: i,
                                        title: d,
                                        target: c,
                                        "aria-label": a.alternativeText,
                                        children: (0, n.jsx)(o.Z, {
                                          height: 24,
                                          width: 24,
                                          alt: a.alternativeText,
                                          src: (0, m.Z)(
                                            null === (l = a.format) ||
                                              void 0 === l
                                              ? void 0
                                              : null === (t = l.original) ||
                                                void 0 === t
                                              ? void 0
                                              : t.url
                                          ),
                                          quality: 80,
                                        }),
                                      },
                                      r
                                    )
                                  : null;
                              }),
                            (0, n.jsx)("p", {
                              className: (0, c.m6)(
                                "text-sm lg:text-base font-bold uppercase",
                                u().className
                              ),
                              children: O,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col justify-between px-4 py-8 md:p-10 md:pt-8 w-full",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "grid grid-cols-[1fr_1fr] w-full mb-20 lg:mb-[170px]",
                        children: [
                          (0, n.jsxs)("ul", {
                            className: "flex flex-col gap-y-3",
                            children: [
                              (0, n.jsx)("li", {
                                className: (0, c.m6)(
                                  "overflow-hidden relative font-bold text-sm lg:text-base text-[#A1A1A1] uppercase",
                                  u().className
                                ),
                                children: (0, n.jsx)("span", {
                                  className: "footerProduct block",
                                  children: A,
                                }),
                              }),
                              (null == D ? void 0 : D.length) &&
                                D.map((e) => {
                                  let { title: t, slug: l, id: i } = e || {};
                                  return (0, n.jsx)(
                                    "li",
                                    {
                                      className: (0, c.m6)(
                                        u().className,
                                        "relative overflow-hidden font-bold text-sm lg:text-base text-white uppercase"
                                      ),
                                      children: (0, n.jsx)(p.TransitionLink, {
                                        className: "footerProduct block",
                                        "aria-label": t,
                                        href: (0, v.L)(l),
                                        children: t,
                                      }),
                                    },
                                    i
                                  );
                                }),
                            ],
                          }),
                          (0, n.jsxs)("ul", {
                            className: "flex flex-col gap-y-3",
                            children: [
                              (0, n.jsx)("li", {
                                className: (0, c.m6)(
                                  "overflow-hidden relative font-bold text-sm lg:text-base text-[#A1A1A1] uppercase",
                                  u().className
                                ),
                                children: (0, n.jsx)("span", {
                                  className: "footerResource block",
                                  children: T,
                                }),
                              }),
                              (null == L ? void 0 : L.length) &&
                                L.map((e) => {
                                  let {
                                      id: t,
                                      label: l,
                                      path: i,
                                      linkOptions: a,
                                    } = e || {},
                                    { target: r } = a || {};
                                  return l || i
                                    ? (0, n.jsx)(
                                        "li",
                                        {
                                          className: (0, c.m6)(
                                            u().className,
                                            "relative overflow-hidden font-bold text-sm lg:text-base text-white uppercase"
                                          ),
                                          children: (0, n.jsx)(
                                            p.TransitionLink,
                                            {
                                              className: "footerResource block",
                                              target: r,
                                              "aria-label": l,
                                              href: i,
                                              children: l,
                                            },
                                            t
                                          ),
                                        },
                                        t
                                      )
                                    : null;
                                }),
                              (0, n.jsx)("li", {
                                className: "relative overflow-hidden mt-[78px]",
                                children: (0, n.jsxs)("div", {
                                  className: "footerPaymentMethods",
                                  children: [
                                    (0, n.jsx)("p", {
                                      className: (0, c.m6)(
                                        "overflow-hidden relative font-bold text-sm lg:text-base text-[#A1A1A1] uppercase",
                                        u().className
                                      ),
                                      children: (0, n.jsx)("span", {
                                        className: "footerResource block",
                                        children: "Settlement",
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className: j().footerPaymentMethodsIcons,
                                      children: I.map((e, t) =>
                                        (0, n.jsx)(
                                          o.Z,
                                          {
                                            height: 14,
                                            width: 40,
                                            alt: e.svgURI,
                                            src: e.svgURI,
                                          },
                                          t
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "relative overflow-hidden flex justify-between gap-x-10 w-full",
                        children: (0, n.jsxs)("ul", {
                          className:
                            "footerLegal flex gap-4 flex-wrap md:justify-between w-full",
                          children: [
                            (0, n.jsxs)("li", {
                              className: "text-[#A1A1A1] text-sm",
                              children: [" ", H, " HOP Markets"],
                            }),
                            (null == q ? void 0 : q.length) &&
                              q.map((e) => {
                                let {
                                    id: t,
                                    label: l,
                                    path: i,
                                    linkOptions: a,
                                    callback: r,
                                  } = e || {},
                                  { target: s } = a || {};
                                return r
                                  ? (0, n.jsx)(
                                      "li",
                                      {
                                        className: (0, c.m6)(
                                          "text-[#A1A1A1] text-sm hover:text-white"
                                        ),
                                        children: (0, n.jsx)(
                                          "button",
                                          {
                                            onClick: r,
                                            "aria-label": l,
                                            children: l,
                                          },
                                          t
                                        ),
                                      },
                                      t
                                    )
                                  : l || i
                                  ? (0, n.jsx)(
                                      "li",
                                      {
                                        className: (0, c.m6)(
                                          "text-[#A1A1A1] text-sm hover:text-white"
                                        ),
                                        children: (0, n.jsx)(
                                          p.TransitionLink,
                                          {
                                            "aria-label": l,
                                            title: null == a ? void 0 : a.title,
                                            target: s,
                                            href: i,
                                            children: l,
                                          },
                                          t
                                        ),
                                      },
                                      t
                                    )
                                  : null;
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: (0, c.m6)("bg-transparent pointer-events-none", R),
              }),
              (0, n.jsxs)("div", {
                ref: P,
                className: (0, c.m6)(
                  "fixed bottom-0 left-0 w-full bg-[#202020] opacity-0 p-2 md:py-[38px] md:px-[87px] lg:py-[35px] lg:px-[44px]",
                  R
                ),
                children: [
                  E &&
                    (0, n.jsx)(o.Z, {
                      fill: !0,
                      alt: E.alternativeText,
                      src: (0, m.Z)(
                        null === (l = E.format) || void 0 === l
                          ? void 0
                          : null === (t = l.original) || void 0 === t
                          ? void 0
                          : t.url
                      ),
                      className: "!relative object-fill hidden md:block",
                      quality: 80,
                    }),
                  S &&
                    (0, n.jsx)(o.Z, {
                      fill: !0,
                      alt: S.alternativeText,
                      src: (0, m.Z)(
                        null === (M = S.format) || void 0 === M
                          ? void 0
                          : null === (d = M.original) || void 0 === d
                          ? void 0
                          : d.url
                      ),
                      className: "!relative object-fill block md:hidden",
                      quality: 80,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    6555: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return b;
        },
      });
      var n = l(7437),
        i = l(2265),
        a = l(4887),
        r = l(6463),
        s = l(5303),
        o = l(7815),
        c = l(6164),
        d = l(4894),
        u = l.n(d),
        x = l(921),
        m = l(4989);
      let h = (0, i.memo)((e) => {
        let {
            width: t = 24,
            height: l = 24,
            isWhiteMode: i,
            isBlackMode: a,
          } = e,
          r = i ? "#FFFFFF" : a ? "#000000" : "#3A2D8E";
        return (0, n.jsxs)("svg", {
          width: t,
          height: l,
          viewBox: "0 0 ".concat(t, " ").concat(l),
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("line", {
              x1: "19.7745",
              y1: "4.45326",
              x2: "3.3382",
              y2: "20.8896",
              stroke: r,
              strokeWidth: "7.74817",
            }),
            (0, n.jsx)("line", {
              x1: "3.32924",
              y1: "4.45177",
              x2: "19.7656",
              y2: "20.8881",
              stroke: r,
              strokeWidth: "7.74817",
            }),
          ],
        });
      });
      var g = l(4398),
        f = l(4172),
        p = l(9030),
        v = l(6014),
        M = (e) => {
          var t, l, a;
          let {
              setIsNavOpen: r,
              navItemsList: d,
              socials: M,
              resources: j,
              currentNavSlug: N,
              defaultDynamicLogo: y,
            } = e,
            w =
              null === (t = d.find((e) => e.slug === N)) || void 0 === t
                ? void 0
                : t.navigationImage,
            [b, I] = (0, i.useState)(w),
            z = b || y,
            [C] = (0, g.CD)(window.navigator.userAgent),
            { isMobile: L } = C,
            D = (e) => {
              L || I((null == e ? void 0 : e.navigationImage) || w);
            };
          return (
            (0, i.useEffect)(
              () => (
                document.documentElement.classList.add("overflow-hidden"),
                document.body.classList.add("overflow-hidden"),
                () => {
                  document.documentElement.classList.remove("overflow-hidden"),
                    document.body.classList.remove("overflow-hidden");
                }
              ),
              []
            ),
            (0, i.useEffect)(() => {
              (async () => {
                let e = [...d.map((e) => e.navigationImage), y, w]
                  .filter(Boolean)
                  .map(async (e) => {
                    var t, l, n, i;
                    if (null == e ? void 0 : e.isJSON) {
                      let t = (0, m.Z)(
                        (null === (i = e.format) || void 0 === i
                          ? void 0
                          : null === (n = i.original) || void 0 === n
                          ? void 0
                          : n.url) || e.url
                      );
                      try {
                        await fetch(t);
                      } catch (e) {}
                    } else if (
                      null == e
                        ? void 0
                        : null === (l = e.format) || void 0 === l
                        ? void 0
                        : null === (t = l.original) || void 0 === t
                        ? void 0
                        : t.url
                    ) {
                      let t = (0, m.Z)(e.format.original.url);
                      new Image().src = t;
                    }
                  });
                await Promise.all(e);
              })();
            }, [d, y, w]),
            (0, n.jsxs)("div", {
              className:
                "fixed inset-0 bg-violet-900 w-screen h-[100dvh] z-50 antialiased flex flex-col overflow-y-auto overflow-x-hidden",
              children: [
                (0, n.jsx)("div", {
                  className: "fixed top-0 w-full px-5 pt-3 z-[20]",
                  children: (0, n.jsxs)("div", {
                    className: "flex justify-between w-full",
                    children: [
                      (0, n.jsx)(f.TransitionLink, {
                        href: "/",
                        onClick: () => {
                          r(!1);
                        },
                        children: (0, n.jsx)(s.Z, {
                          alt: "",
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyOCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3Ljc3OTQgMjQuMzM0OEMyNy43MzY1IDIyLjQzMDQgMjYuMzU2IDIwLjc3NTkgMjQuNDU5NCAyMC40Nzg0QzI0LjM5NDIgMjAuNDY4MiAxOS42NzE0IDE5Ljk0MjggMTkuNjcxNCAxOS45NDI4QzE5LjY3MTQgMTkuOTQyOCAyNC41ODI4IDIuODcxMzUgMTcuODQzNCAwLjA5NjM5NTZDMTMuNzMxMSAtMS40MzIyMSAxMy4xNiAxNS42NjMgMTUuOTAyMSAxOS45MTA1TDEwLjEzMzIgMjAuNDc2N0MxMC4xMzMyIDIwLjQ3NjcgMTQuMDE3NSAzLjY2MzcxIDcuNzM0MTIgMC40OTI1NzVDNS43MzQ1NyAtMC41MjU5MjkgMi43MDc4IDEyLjM3OCA2LjkzNDk5IDIwLjgxNTFDNi43NzcyMiAyMC45NzMyIDQuNDg0NDIgMjEuMjMxNiAyLjA3ODQ0IDIxLjk2NDVDMC45NjcxOTMgMjIuMzAyOSAwLjE1NjA1NCAyMy4yNDk5IDAgMjQuMzkwOUwwLjc0NDI1OSAzNS41NTdDMS4wMzA2NCAzNi45NTgxIDIuMjI0MjEgMzcuOTk4NyAzLjY2Mjk5IDM4LjEwMDdMOS4xNjI2MiAzOC40NzE0TDkuNzkwMjcgNDBIMTMuNDc5TDE0LjAzMjkgMzguNDE1M0wxNC43Mjc0IDQwSDE3LjkwMTdMMTguODcyMyAzOC4zNTc1TDI1LjU2NzIgMzYuOTU0N0MyNy4wMTQ2IDM2LjY1MiAyOC4wMzgzIDM1LjM2NjYgMjcuOTk4OSAzMy44OTkyTDI3Ljc3OTQgMjQuMzMxNFYyNC4zMzQ4Wk03Ljc4Mzg2IDMzLjE4MTZDNi4zNjM5MyAzMy4zMjExIDUuMDIxMTggMzEuNTE1MyA0Ljc4NjI0IDI5LjE1MDFDNC41NTEzIDI2Ljc4NSA1LjUxMzM1IDI0Ljc1NDcgNi45MzMyNyAyNC42MTdDOC4zNTMyIDI0LjQ3NzYgOS42OTU5NSAyNi4yODMzIDkuOTMwODkgMjguNjQ4NUMxMC4xNjU4IDMxLjAxMzcgOS4yMDM3OCAzMy4wNDM5IDcuNzgzODYgMzMuMTgxNlpNMTUuMDQ2NCAzNC42OTE1QzEzLjY4NDggMzYuNzU5MiAxMi41NDI3IDM0LjIwNTIgMTIuNDkyOSAzNC4wNTU2QzEyLjQwMDMgMzMuNzgxOSAxMi45MzcxIDMzLjcwODcgMTMuMTU0OSAzMy42Njc5QzEzLjgyMiAzMy41NDM4IDE0LjUxNDggMzMuNTU5MSAxNS4xNzUgMzMuNzEyMUMxNS4yMjMgMzMuNzI0IDE1LjI3NjIgMzMuNzM3NiAxNS4zMDcgMzMuNzc2OEMxNS4zMzYyIDMzLjgxMjUgMTUuMzQxMyAzMy44NjM1IDE1LjM0MTMgMzMuOTA5NEMxNS4zMzk2IDM0LjE5MTYgMTUuMjAyNCAzNC40NTUyIDE1LjA0NjQgMzQuNjkxNVpNMjAuMTcwNSAzMi4xMDM2QzE4Ljc0MzcgMzIuMTQyNyAxNy41MzQ3IDMwLjI0NjggMTcuNDY5NSAyNy44NzE1QzE3LjQwNDQgMjUuNDk2MSAxOC41MDg3IDIzLjUzOSAxOS45MzU1IDIzLjQ5OTlDMjEuMzYyMyAyMy40NjA4IDIyLjU3MTMgMjUuMzU2NyAyMi42MzY1IDI3LjczMkMyMi43MDE2IDMwLjEwNzQgMjEuNTk3MiAzMi4wNjQ1IDIwLjE3MDUgMzIuMTAzNloiIGZpbGw9IiMzQTJEOEUiLz4KPC9zdmc+Cg==",
                          height: 40,
                          width: 28,
                        }),
                      }),
                      (0, n.jsx)(o.Z, {
                        className:
                          "transition ease-in-out duration-200 hover:scale-[0.8] z-[1]",
                        onClick: () => {
                          r(!1);
                        },
                        children: (0, n.jsx)(h, {}),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "w-full flex flex-col mt-20 md:mt-[64px] xl:mt-[56px] z-[2] pointer-events-none",
                  children: (0, n.jsxs)("div", {
                    className:
                      "relative w-full max-w-[1440px] h-[17.2vw] max-h-[250px] mx-auto",
                    children: [
                      (0, n.jsx)("svg", {
                        className:
                          "w-full h-auto object-fill absolute top-0 left-0",
                        viewBox: "0 0 217 39",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsxs)("g", {
                          transform: "scale(0.15069444)",
                          children: [
                            (0, n.jsx)("circle", {
                              cx: 130,
                              cy: 129.5,
                              r: 95,
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: 20,
                            }),
                            (0, n.jsx)("path", {
                              d: "M130 -5v46 M130 205v46 M-5 129.5h46 M205 129.5h46",
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: 20,
                              strokeLinecap: "square",
                            }),
                            (0, n.jsx)("circle", {
                              cx: 130,
                              cy: 129.5,
                              r: 42,
                              fill: "none",
                              stroke: "#FF07FE",
                              strokeWidth: 20,
                            }),
                            (0, n.jsx)("circle", {
                              cx: 130,
                              cy: 129.5,
                              r: 16,
                              fill: "#FF07FE",
                            }),
                            (0, n.jsx)("text", {
                              x: 265,
                              y: 222,
                              fill: "#fff",
                              fontSize: 250,
                              fontWeight: 800,
                              letterSpacing: 6,
                              fontFamily:
                                "var(--font-anek-latin), 'Anek Latin', system-ui, sans-serif",
                              children: "HOP",
                            }),
                          ],
                        }),
                      }),
                      z &&
                        (0, n.jsx)("div", {
                          className:
                            "relative -top-[150%] h-[400%] w-[78%] left-[27%]",
                          children: z.isJSON
                            ? (0, n.jsx)(v.Z, {
                                animation: z,
                                className:
                                  "object-contain absolute w-full h-full",
                                loop: !1,
                                autoplay: !0,
                                hideLoading: !0,
                              })
                            : (0, n.jsx)(s.Z, {
                                className: "object-contain absolute",
                                alt:
                                  (null == z ? void 0 : z.alternativeText) ||
                                  "",
                                src: (0, m.Z)(
                                  null === (a = z.format) || void 0 === a
                                    ? void 0
                                    : null === (l = a.original) || void 0 === l
                                    ? void 0
                                    : l.url
                                ),
                                fill: !0,
                                quality: 80,
                              }),
                        }),
                    ],
                  }),
                }),
                (0, n.jsx)("ul", {
                  className:
                    "menu flex flex-col items-center mt-[7vw] lg:mt-[103px] w-full z-[1] mb-12 lg:mb-[56px]",
                  children: d.map((e) => {
                    let { title: t, slug: l, id: i } = e || {},
                      a = N === l;
                    return (0, n.jsx)(
                      "li",
                      {
                        onMouseOver: () => D(e),
                        onMouseLeave: () => D(void 0),
                        className: (0, c.m6)(
                          u().className,
                          "group inline-block text-4xl lg:text-7xl font-bold text-black border-t-[1px] border-t-black w-full text-center last:border-b-[1px] border-b-black uppercase",
                          a && "text-white"
                        ),
                        children: (0, n.jsx)(f.TransitionLink, {
                          className: (0, c.m6)(
                            "menu-item block overflow-visible py-2 w-full",
                            L && a && "bg-white"
                          ),
                          "aria-label": t,
                          href: (0, p.L)(l),
                          onClick: () => {
                            r(!1);
                          },
                          children: L
                            ? (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("span", {
                                  className: (0, c.m6)(a && "text-black"),
                                  children: t,
                                }),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "invisible",
                                    children: t,
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: (0, c.m6)(
                                      "menu-item-box group-hover:flip",
                                      a && "flip"
                                    ),
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "menu-item-default",
                                        children: t,
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "menu-item-selected",
                                        children: t,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                      },
                      i
                    );
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "fixed bottom-0 flex mt-auto justify-between px-4 md:px-5 py-3 bg-black w-full gap-x-[30px] z-[1]",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "flex gap-x-6 lg:gap-x-8 items-center shrink-0",
                      children: M.map((e) => {
                        var t, l;
                        let {
                            path: i,
                            coverImage: a,
                            id: r,
                            linkOptions: o,
                          } = e || {},
                          { target: c } = o || {};
                        return i && a
                          ? (0, n.jsx)(
                              x.Z,
                              {
                                href: i,
                                target: c,
                                "aria-label": a.alternativeText,
                                children: (0, n.jsx)(s.Z, {
                                  height: 32,
                                  width: 32,
                                  className: "w-6 h-6 lg:w-8 lg:h-8",
                                  alt: a.alternativeText,
                                  src: (0, m.Z)(
                                    null === (l = a.format) || void 0 === l
                                      ? void 0
                                      : null === (t = l.original) ||
                                        void 0 === t
                                      ? void 0
                                      : t.url
                                  ),
                                  quality: 80,
                                }),
                              },
                              r
                            )
                          : null;
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "flex gap-x-4 lg:gap-x-10 items-center shrink-0",
                      children: j.map((e) => {
                        var t, l;
                        let {
                            id: i,
                            label: a,
                            path: r,
                            coverImage: o,
                            linkOptions: d,
                          } = e || {},
                          { target: x } = d || {};
                        return a || r
                          ? (0, n.jsxs)(
                              f.TransitionLink,
                              {
                                className: "flex items-center gap-x-1",
                                "aria-label": a,
                                target: x,
                                href: r,
                                children: [
                                  o &&
                                    (0, n.jsx)(s.Z, {
                                      height: 32,
                                      width: 32,
                                      className: "w-6 h-6 lg:w-8 lg:h-8",
                                      alt: o.alternativeText || "",
                                      src: (0, m.Z)(
                                        null === (l = o.format) || void 0 === l
                                          ? void 0
                                          : null === (t = l.original) ||
                                            void 0 === t
                                          ? void 0
                                          : t.url
                                      ),
                                      quality: 80,
                                    }),
                                  (0, n.jsx)("span", {
                                    className: (0, c.m6)(
                                      "text-xs lg:text-base font-bold uppercase -tracking-[0.4px]",
                                      u().className
                                    ),
                                    children: a,
                                  }),
                                ],
                              },
                              i
                            )
                          : null;
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        j = l(2283),
        ppFlip = (e, t) =>
          e.split("").map((e, l) =>
            (0, n.jsx)(
              "span",
              {
                className: t,
                style: { transitionDelay: "".concat(25 * l, "ms") },
                children: " " === e ? "\xa0" : e,
              },
              l
            )
          ),
        ppFlipLink = (e, t) =>
          (0, n.jsxs)("a", {
            href: e,
            className:
              "pp-nav-link font-bold uppercase text-xs transition-colors ".concat(
                u().className
              ),
            "aria-label": t,
            children: [
              (0, n.jsx)("span", {
                className: "pp-fl-row",
                children: ppFlip(t, "pp-fl-a"),
              }),
              (0, n.jsx)("span", {
                className: "pp-fl-row pp-fl-back",
                "aria-hidden": "true",
                children: ppFlip(t, "pp-fl-b"),
              }),
            ],
          }),
        N = (e) => {
          var t, l;
          let { setIsNavOpen: i, logo: a, ctaLabel: r, ctaButton: c } = e;
          return (0, n.jsxs)("div", {
            className:
              "relative w-full h-[64px] bg-black/50 backdrop-blur-[80px] flex justify-between items-center px-5 z-20",
            children: [
              a &&
                (0, n.jsx)(f.TransitionLink, {
                  href: "/",
                  "aria-label": a.alternativeText,
                  children: (0, n.jsx)(s.Z, {
                    height: 39,
                    width: 222,
                    priority: !0,
                    alt: a.alternativeText,
                    src: (0, m.Z)(
                      null === (l = a.format) || void 0 === l
                        ? void 0
                        : null === (t = l.original) || void 0 === t
                        ? void 0
                        : t.url
                    ),
                    className: "w-auto h-[22px] md:h-auto",
                    quality: 80,
                  }),
                }),
              (0, n.jsxs)("div", {
                className:
                  "flex items-center justify-center gap-x-[24px] md:gap-x-[32px]",
                children: [
                  r &&
                    (0, n.jsx)("p", {
                      className: "hidden md:block",
                      children: r,
                    }),
                  c &&
                    c.label &&
                    c.path &&
                    (0, n.jsx)(j.Z, {
                      coreColor: "Orange",
                      "aria-label": c.label,
                      href: c.path,
                      children: c.label,
                    }),
                  (0, n.jsx)("style", {
                    children:
                      ".pp-nav{column-gap:28px}.pp-nav-link{letter-spacing:.06em;color:hsla(0,0%,100%,.7)}.pp-nav-link:hover{color:#fff}.pp-nav-cta{letter-spacing:.06em;padding:0 18px;border-radius:10px}.pp-nav-cta:hover{background-color:#fff}.pp-nav-x{color:hsla(0,0%,100%,.7);margin-left:4px}.pp-nav-x:hover{color:#fff}@media(min-width:1024px){.pp-nav-link{font-size:13px;line-height:1}}.pp-nav-link{position:relative;display:block;overflow:hidden;white-space:nowrap;line-height:1}.pp-fl-row{display:block;line-height:1;white-space:nowrap}.pp-fl-back{position:absolute;inset:0}.pp-fl-a,.pp-fl-b{display:inline-block;vertical-align:top;transition:transform .3s ease-in-out}.pp-fl-b{transform:translateY(110%)}.pp-nav-link:hover .pp-fl-a{transform:translateY(-110%)}.pp-nav-link:hover .pp-fl-b{transform:translateY(0)}@media(prefers-reduced-motion:reduce){.pp-fl-a,.pp-fl-b{transition:none}.pp-nav-link:hover .pp-fl-a{transform:none}.pp-fl-b{display:none}}",
                  }),
                  (0, n.jsx)("a", {
                    href: "https://x.com/hopweb3",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "HOP on X",
                    className: "pp-nav-x hidden md:flex items-center",
                    children: (0, n.jsx)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, n.jsx)("path", {
                        d: "M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.7L6 22H2.8l7.5-8.6L2.4 2h6.6l4.5 6.2L18.9 2z",
                      }),
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "/dashboard",
                    className:
                      "pp-nav-cta flex items-center h-[38px] bg-pink-900 text-black font-bold uppercase text-xs transition-colors ".concat(
                        u().className
                      ),
                    children: "Open app",
                  }),
                  (0, n.jsxs)(o.Z, {
                    className:
                      "navigation-btn-wrapper hidden flex items-center gap-[10px]",
                    "aria-label": "open navigation",
                    onClick: () => i(!0),
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "hidden  md:block text-white text-lg leading-none uppercase tracking-[-0.02em] font-bold",
                        children: "Menu",
                      }),
                      (0, n.jsx)("div", {
                        className: "hamburger-bar-slide",
                        children: (0, n.jsxs)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsxs)("g", {
                              clipPath: "url(#clip0_2376_4874)",
                              children: [
                                (0, n.jsx)("rect", {
                                  x: "2",
                                  y: "4",
                                  width: "20",
                                  height: "0.0001",
                                  stroke: "white",
                                  strokeWidth: "4",
                                }),
                                (0, n.jsx)("rect", {
                                  x: "2",
                                  y: "12",
                                  width: "20",
                                  height: "0.0001",
                                  stroke: "white",
                                  strokeWidth: "4",
                                }),
                                (0, n.jsx)("rect", {
                                  x: "2",
                                  y: "20",
                                  width: "20",
                                  height: "0.0001",
                                  stroke: "white",
                                  strokeWidth: "4",
                                }),
                              ],
                            }),
                            (0, n.jsx)("defs", {
                              children: (0, n.jsx)("clipPath", {
                                id: "clip0_2376_4874",
                                children: (0, n.jsx)("rect", {
                                  width: "24",
                                  height: "24",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        y = l(138);
      l(4590);
      var w = (0, l(8064).$)("9afaa9ea6a08b1ee200d39b22fabb7b8365ffd27"),
        b = (e) => {
          let {
              logo: t,
              defaultDynamicLogo: l,
              products: s,
              resources: o,
              socialNetwork: c,
            } = e,
            d = (0, r.usePathname)(),
            [u, x] = (0, i.useState)(!1),
            [m, h] = (0, i.useState)(!1),
            [g, f] = (0, i.useState)(null),
            p = d.replace(/^\/[a-z]{2}(\/|$)/, "/").substring(1),
            v = (0, r.usePathname)();
          if (
            ((0, y.D)(),
            (0, i.useEffect)(() => {
              x(!1);
            }, [v]),
            (0, i.useEffect)(() => {
              h(!0);
            }, []),
            (0, i.useEffect)(() => {
              (async () => {
                if (p)
                  try {
                    let e = await w(p);
                    f(e);
                  } catch (e) {
                    console.error("Error fetching current product page:", e),
                      f(null);
                  }
                else f(null);
              })();
            }, [p]),
            !(null == s ? void 0 : s.length))
          )
            return null;
          let { socials: j } = c || {},
            b = s.map((e) => ({
              id: e.id,
              title: e.navigationTitle,
              slug: e.slug,
              navigationImage: e.navigationImage,
            })),
            { navigationCtaLabel: I, navigationCtaButton: z } =
              s.find((e) => e.slug === p) || {},
            { navigationCtaLabel: C, navigationCtaButton: L } = g || {};
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(N, {
                setIsNavOpen: x,
                logo: t,
                ctaLabel: C || I,
                ctaButton: L || z,
              }),
              m &&
                u &&
                (0, a.createPortal)(
                  (0, n.jsx)(M, {
                    setIsNavOpen: x,
                    navItemsList: b,
                    socials: j,
                    defaultDynamicLogo: l,
                    resources: o,
                    currentNavSlug: p,
                  }),
                  document.body
                ),
            ],
          });
        };
    },
    5314: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return a;
        },
      });
      var n = l(2265),
        i = l(9512);
      function a() {
        return (
          (0, n.useEffect)(() => {
            (0, i.u)();
          }, []),
          null
        );
      }
    },
    3116: function (e, t, l) {
      "use strict";
      var n = l(7437),
        i = l(2265),
        a = l(6164),
        r = l(3131),
        s = l(8377),
        o = l(9123);
      t.default = (e) => {
        let { children: t, hasAnnouncementBar: l } = e,
          [c, d] = (0, i.useState)(!l),
          [u, x] = (0, i.useState)(!1),
          [m, h] = (0, i.useState)(0),
          g = (0, i.useRef)(null),
          f = (0, r.Z)((e) => e.canvasLoaded),
          p = (0, s.N)((e) => e.monitorReady),
          v = (0, o.Z)((e) => e.isGlobalLoaderVisible);
        (0, i.useEffect)(() => {
          if (!l || !g.current) return;
          let e = g.current.querySelector("[data-announcement-bar]");
          if (!e) return;
          let t = () => {
              h(e.getBoundingClientRect().height);
            },
            n = setTimeout(t, 0),
            i = new ResizeObserver(() => {
              t();
            });
          return (
            i.observe(e),
            () => {
              clearTimeout(n), i.disconnect();
            }
          );
        }, [l]);
        let M = (0, i.useCallback)(() => {
          x(!0);
        }, []);
        (0, i.useEffect)(() => {
          if (!l || !(f && p && !v)) return;
          let e = setTimeout(() => {
            d(!0);
          }, 1e3);
          return () => clearTimeout(e);
        }, [l, f, p, v]),
          (0, i.useEffect)(() => {
            if (!g.current) return;
            let e = () => {
              if (!g.current) return;
              let e = g.current.getBoundingClientRect().height;
              document.documentElement.style.setProperty(
                "--top-bar-height",
                "".concat(e, "px")
              );
            };
            if (c) {
              e();
              let t = setTimeout(() => {
                e();
              }, 350);
              return (
                window.addEventListener("resize", e),
                () => {
                  clearTimeout(t), window.removeEventListener("resize", e);
                }
              );
            }
            if (l && m > 0) {
              let e = g.current.getBoundingClientRect().height - m;
              document.documentElement.style.setProperty(
                "--top-bar-height",
                "".concat(e, "px")
              );
            } else
              document.documentElement.style.setProperty(
                "--top-bar-height",
                "0px"
              );
          }, [c, u, l, m]);
        let j = i.Children.map(t, (e) =>
            i.isValidElement(e) && "data" in (e.props || {})
              ? i.cloneElement(e, { onClose: M })
              : e
          ),
          N = "translateY(0)";
        return (
          !c && l && m > 0
            ? (N = "translateY(-".concat(m, "px)"))
            : c
            ? u && m > 0 && (N = "translateY(-".concat(m, "px)"))
            : (N = "translateY(-100%)"),
          (0, n.jsx)("div", {
            ref: g,
            className: (0, a.m6)(
              "fixed top-0 left-0 w-full z-30",
              l && "transition-transform duration-300",
              l && !c && "ease-out",
              l && c && u && "ease-in"
            ),
            style: {
              paddingTop: "env(safe-area-inset-top, 0px)",
              transform: N,
            },
            children: j,
          })
        );
      };
    },
    9030: function (e, t, l) {
      "use strict";
      function n(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "de";
        if (!e) return e || "";
        if ("object" == typeof e && null !== e) {
          let l = e.pathname || "";
          if (l && "string" == typeof l) {
            if (i(l)) return e;
            let n = a(l, t);
            return { ...e, pathname: n };
          }
          return e;
        }
        return "string" == typeof e ? (i(e) ? e : a(e, t)) : e;
      }
      function i(e) {
        return (
          e.startsWith("http://") ||
          e.startsWith("https://") ||
          e.startsWith("//")
        );
      }
      function a(e, t) {
        return e.startsWith("#") ||
          e.startsWith("/".concat(t, "/")) ||
          "/" === e
          ? e
          : e.startsWith("/")
          ? "/".concat(t).concat(e)
          : "/".concat(t, "/").concat(e);
      }
      l.d(t, {
        L: function () {
          return n;
        },
      });
    },
    9512: function (e, t, l) {
      "use strict";
      async function n(e) {
        if (!e) {
          console.warn("copyToClipboard: No text provided");
          return;
        }
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(e),
              console.log("Text copied to clipboard:", e);
            return;
          }
          let t = document.createElement("textarea");
          (t.value = e),
            (t.style.position = "fixed"),
            (t.style.left = "-999999px"),
            (t.style.top = "-999999px"),
            document.body.appendChild(t),
            t.focus(),
            t.select();
          try {
            if (document.execCommand("copy"))
              console.log("Text copied to clipboard (fallback):", e);
            else throw Error("Copy command failed");
          } catch (e) {
            throw (console.error("Failed to copy text:", e), e);
          } finally {
            document.body.removeChild(t);
          }
        } catch (e) {
          throw (console.error("Error copying to clipboard:", e), e);
        }
      }
      function i() {
        window.copyToClipboard = n;
      }
      l.d(t, {
        u: function () {
          return i;
        },
        v: function () {
          return n;
        },
      });
    },
    2094: function () {},
    4727: function (e) {
      e.exports = {
        testimonialSection: "styles_testimonialSection__5UpJb",
        testimonialSectionItemContainer:
          "styles_testimonialSectionItemContainer__1bZOh",
        testimonialSectionItem: "styles_testimonialSectionItem__8K70v",
        footerPaymentMethods: "styles_footerPaymentMethods__xhVUl",
        footerPaymentMethodsIcons: "styles_footerPaymentMethodsIcons__v5mqH",
        heroTestimonial: "styles_heroTestimonial__J9bOb",
      };
    },
  },
]);
