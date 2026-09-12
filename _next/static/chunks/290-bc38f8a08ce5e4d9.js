(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [290],
  {
    8290: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 912)),
        Promise.resolve().then(l.bind(l, 1481)),
        Promise.resolve().then(l.bind(l, 7509)),
        Promise.resolve().then(l.bind(l, 4935)),
        Promise.resolve().then(l.bind(l, 6094)),
        Promise.resolve().then(l.bind(l, 6804)),
        Promise.resolve().then(l.bind(l, 4898)),
        Promise.resolve().then(l.bind(l, 5571)),
        Promise.resolve().then(l.bind(l, 3740)),
        Promise.resolve().then(l.bind(l, 1590)),
        Promise.resolve().then(l.bind(l, 1154)),
        Promise.resolve().then(l.bind(l, 2320)),
        Promise.resolve().then(l.bind(l, 6880)),
        Promise.resolve().then(l.bind(l, 4119)),
        Promise.resolve().then(l.bind(l, 2460)),
        Promise.resolve().then(l.bind(l, 567)),
        Promise.resolve().then(l.bind(l, 6987)),
        Promise.resolve().then(l.bind(l, 5831)),
        Promise.resolve().then(l.bind(l, 8595)),
        Promise.resolve().then(l.bind(l, 8469)),
        Promise.resolve().then(l.bind(l, 7137)),
        Promise.resolve().then(l.bind(l, 6140)),
        Promise.resolve().then(l.bind(l, 3080));
    },
    8562: function (e, t, l) {
      "use strict";
      var r = l(7437),
        a = l(2265),
        s = l(6164),
        i = l(3417),
        n = l(4398);
      let o = (0, a.memo)((e) => {
        let { className: t } = e,
          l = (0, a.useRef)(null),
          [o, c] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            c(n.tq);
          }, []),
          (0, a.useEffect)(() => {
            if (l.current && !o)
              return (
                l.current.addEventListener("mousemove", (e) =>
                  (0, i.p)({ e, sectionEl: l.current })
                ),
                () => {
                  var e;
                  null === (e = l.current) ||
                    void 0 === e ||
                    e.removeEventListener("mousemove", (e) =>
                      (0, i.p)({ e, sectionEl: l.current })
                    );
                }
              );
          }, [o]),
          (0, r.jsx)("div", {
            ref: l,
            className:
              "relative group w-full h-full flex items-center justify-center",
            children: (0, r.jsx)("div", {
              className: (0, s.m6)(
                "w-full h-full relative button-custom-clip bg-white arrow-right-wrapper arrow-glow-purple-hover overflow-visible transition-all duration-300 ease-in-out flex items-center justify-center",
                "md:bg-white md:before:opacity-0",
                t
              ),
              children: (0, r.jsxs)("svg", {
                viewBox: "24 29 62 52",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-full h-full relative z-20 scale-x-[-1]",
                children: [
                  (0, r.jsx)("g", {
                    children: (0, r.jsx)("path", {
                      d: "M20 77.0967V66.7253V51.678V32.9033L24.0371 20H85.9629L90 32.9033V51.678V66.7253V77.0967L85.9629 90H24.0371L20 77.0967Z",
                    }),
                  }),
                  (0, r.jsx)("g", {
                    children: (0, r.jsx)("path", {
                      d: "M23 79.0191V31.1107L31.1319 23L79 23L87.1319 31.1107V79.0191L79 87.1298L31.1319 87.1298L23 79.0191Z",
                    }),
                  }),
                  (0, r.jsx)("path", {
                    d: "M48 55H62M62 55L56 61M62 55L56 49",
                    strokeWidth: "2px",
                    strokeLinecap: "square",
                    className:
                      "transition-all duration-500 ease-in-out arrow-stroke-hover",
                  }),
                ],
              }),
            }),
          })
        );
      });
      t.Z = o;
    },
    7239: function (e, t, l) {
      "use strict";
      var r = l(7437),
        a = l(2265),
        s = l(6164),
        i = l(3417),
        n = l(4398);
      let o = (0, a.memo)((e) => {
        let { className: t } = e,
          l = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (l.current && !n.tq)
              return (
                l.current.addEventListener("mousemove", (e) =>
                  (0, i.p)({ e, sectionEl: l.current })
                ),
                () => {
                  var e;
                  null === (e = l.current) ||
                    void 0 === e ||
                    e.removeEventListener("mousemove", (e) =>
                      (0, i.p)({ e, sectionEl: l.current })
                    );
                }
              );
          }, []),
          (0, r.jsx)("div", {
            ref: l,
            className:
              "relative group w-full h-full flex items-center justify-center",
            children: (0, r.jsx)("div", {
              className: (0, s.m6)(
                "w-full h-full relative button-custom-clip bg-white arrow-right-wrapper arrow-glow-purple-hover overflow-hidden transition-colors duration-200 flex items-center justify-center",
                t
              ),
              children: (0, r.jsx)("svg", {
                viewBox: "0 0 110 110",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "w-[38px] h-[38px] md:w-[48px] md:h-[48px] relative z-20",
                children: (0, r.jsx)("path", {
                  d: "M 35 30 L 80 55 L 35 80 Z",
                  fill: "black",
                  className:
                    "transition-colors duration-200 group-hover:fill-white",
                }),
              }),
            }),
          })
        );
      });
      t.Z = o;
    },
    7509: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(4989),
        n = (e) => {
          let { progress: t } = e,
            l = (0, a.useRef)(null),
            s = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              if (l.current && s.current) {
                l.current.style.width = "".concat(t, "%");
                let e = l.current.getBoundingClientRect();
                s.current.style.left = "".concat(e.width - 2, "px");
              }
            }, [t]),
            (0, r.jsxs)("div", {
              className: "relative w-[157px] h-[27px] z-[1] flex flex-col",
              children: [
                (0, r.jsx)("div", {
                  ref: s,
                  className:
                    "relative w-0 h-0 border-solid border-t-[10px] border-x-[3px] border-b-0 border-t-white border-transparent",
                }),
                (0, r.jsx)("div", {
                  className:
                    "relative w-full h-full rounded-10 border-[1px] rounded-full border-white p-[2px] mt-1",
                  children: (0, r.jsx)("div", {
                    ref: l,
                    className: "w-0 h-full bg-white rounded-full",
                  }),
                }),
              ],
            })
          );
        },
        o = l(9582),
        c = l(6164),
        d = l(4894),
        u = l.n(d),
        p = l(19);
      let x = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cross.svg"
      );
      var m = (e) => {
        var t, l, d;
        let { coverImage: m, aboutSlides: h } = e,
          f = (0, a.useRef)(null),
          v = (0, a.useRef)(null),
          g = (0, a.useRef)(null),
          [w, b] = (0, a.useState)(0),
          [j, y] = (0, a.useState)(
            h ? (null === (t = h[0]) || void 0 === t ? void 0 : t.subTitle) : ""
          );
        return (
          (0, p.V)(() => {
            if (v.current) {
              var e, t;
              let l = o.ZP.utils.toArray(".aboutSection"),
                r = () => {
                  let e = 0;
                  return (
                    l.forEach((t) => {
                      e += t.offsetWidth;
                    }),
                    e
                  );
                },
                a = o.ZP.to(l, {
                  x: () => -r() + window.innerWidth,
                  ease: "none",
                  scrollTrigger: {
                    trigger: v.current,
                    start: "bottom bottom+=".concat(
                      0.4 *
                        ((null == v
                          ? void 0
                          : null === (e = v.current) || void 0 === e
                          ? void 0
                          : e.offsetHeight) || 0),
                      "px"
                    ),
                    invalidateOnRefresh: !0,
                    pinSpacing: !0,
                    scrub: !0,
                    end: "+=".concat(
                      0.7 *
                        ((null == v
                          ? void 0
                          : null === (t = v.current) || void 0 === t
                          ? void 0
                          : t.offsetHeight) || 0)
                    ),
                    onUpdate: (e) => {
                      b(100 * e.progress);
                    },
                  },
                });
              l.forEach((e, t) => {
                let l = o.ZP.timeline({
                    scrollTrigger: {
                      trigger: e,
                      start: "left right",
                      containerAnimation: a,
                      invalidateOnRefresh: !0,
                      scrub: !0,
                      end: () => "+=".concat(e.offsetWidth, " 85%"),
                    },
                  }),
                  r = e.lastElementChild;
                l.to(r, {
                  x: () => e.offsetWidth - r.offsetWidth,
                  ease: "none",
                }),
                  o.ZP.timeline({
                    scrollTrigger: {
                      trigger: e,
                      start: "left left",
                      end: "right center",
                      scrub: !0,
                      containerAnimation: a,
                      id: t.toString(),
                      invalidateOnRefresh: !0,
                      onToggle: () => {
                        if (null == h ? void 0 : h.length) {
                          var t;
                          y(
                            null == h
                              ? void 0
                              : null ===
                                  (t = h.find(
                                    (t) => t.id.toString() === e.id.toString()
                                  )) || void 0 === t
                              ? void 0
                              : t.subTitle
                          );
                        }
                      },
                    },
                  })
                    .to(g.current, { opacity: 1 })
                    .to(g.current, { opacity: 0 });
              });
            }
          }, [f, v]),
          (0, r.jsxs)("div", {
            ref: f,
            className: "relative flex flex-col w-full h-screen overflow-hidden",
            children: [
              (0, r.jsx)("div", {
                ref: v,
                className: "relative flex w-max h-full z-[2]",
                children:
                  (null == h ? void 0 : h.length) &&
                  h.map((e) => {
                    var t, l;
                    let { title: a, coverImage: n, id: o } = e;
                    return a
                      ? (0, r.jsxs)(
                          "div",
                          {
                            id: o,
                            className:
                              "aboutSection relative flex items-center justify-center h-full w-max pl-4 md:pl-[26px] lg:pl-[50px] pr-[16.6vh] md:pr-[30vh] lg:pr-[31vh]",
                            children: [
                              (0, r.jsx)("div", {
                                className: (0, c.m6)(
                                  "text-[27vw] md:text-[12.62vw] font-bold z-[1] uppercase",
                                  u().className
                                ),
                                children: a,
                              }),
                              n &&
                                (0, r.jsx)(s.Z, {
                                  height: 740,
                                  width: 280,
                                  className:
                                    "aboutSectionImage left-0 absolute h-[44.5vh] w-[17vh] md:h-[78.7vh] lg:h-[80.5vh] md:w-[29.8vh] lg:w-[30.5vh]",
                                  alt: n.alternativeText,
                                  priority: !0,
                                  src: (0, i.Z)(
                                    null === (l = n.format) || void 0 === l
                                      ? void 0
                                      : null === (t = l.original) ||
                                        void 0 === t
                                      ? void 0
                                      : t.url
                                  ),
                                  quality: 80,
                                }),
                            ],
                          },
                          o
                        )
                      : null;
                  }),
              }),
              m &&
                (0, r.jsx)(s.Z, {
                  className: "absolute w-full h-full object-fill",
                  alt: m.alternativeText,
                  src: (0, i.Z)(
                    null === (d = m.format) || void 0 === d
                      ? void 0
                      : null === (l = d.original) || void 0 === l
                      ? void 0
                      : l.url
                  ),
                  priority: !0,
                  width: 1477,
                  height: 420,
                }),
              (0, r.jsxs)("div", {
                className:
                  "w-full h-full absolute grid grid-cols-[33.35vw_33.35vw_33.35vw] grid-rows-3 gap-[1px] z-[1]",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "w-full flex flex-col items-center md:contents row-start-3 col-start-1 col-span-3 justify-around",
                    children: [
                      (0, r.jsx)("div", {
                        className: "h-[27px] block md:hidden",
                      }),
                      (0, r.jsx)("div", {
                        ref: g,
                        className:
                          "relative z-[1] px-4 text-center md:text-left md:px-0 md:mt-[36px] md:ml-10 row-start-3 col-start-1 text-xl font-medium max-w-[390px]",
                        children: j,
                      }),
                      (0, r.jsx)("div", {
                        className: "h-max w-max md:mt-auto md:ml-10 md:mb-10",
                        children: (0, r.jsx)(n, { progress: w }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "border border-white border-opacity-25 row-start-2 col-start-2 relative",
                    children: [
                      (0, r.jsx)(s.Z, {
                        alt: "",
                        priority: !0,
                        className:
                          "w-4 h-4 absolute opacity-25 -top-2 -left-2 z-[1]",
                        src: x,
                        height: 12,
                        width: 12,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-[14px] h-[14px] border-l-[1px] border-l-white border-t-[1px] border-t-white border-opacity-25 absolute -left-[96%] top-[4%]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-[14px] h-[14px] border-l-[1px] border-l-white border-b-[1px] border-b-white border-opacity-25 absolute -left-[96%] bottom-[4%]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-[14px] h-[14px] border-r-[1px] border-r-white border-t-[1px] border-t-white border-opacity-25 absolute -right-[96%] top-[4%]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-[14px] h-[14px] border-r-[1px] border-r-white border-b-[1px] border-b-white border-opacity-25 absolute -right-[96%] bottom-[4%]",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "border-x-[1px] border-x-white opacity-25 row-start-1 col-start-2",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "border-y-[1px] border-y-white opacity-25 row-start-2 col-start-1",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "border-y-[1px] border-y-white opacity-25 row-start-2 col-start-3",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "border-x-[1px] border-x-white opacity-25 row-start-3 col-start-2",
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    4935: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(6797),
        i = l(2283),
        n = l(4989),
        o = l(5303),
        c = l(6098),
        d = l.n(c),
        u = l(2088),
        p = l(9582),
        x = l(19),
        m = l(2814);
      t.default = (e) => {
        var t, l, c, h, f;
        let {
            title: v,
            titleTag: g,
            titleStyle: w,
            coverImage: b,
            coverImageSmall: j,
            isRedMode: y,
            button: N,
          } = e,
          k = (0, a.useRef)(null),
          Z = g ? Number(g.replace("h", "")) : 2;
        return (
          (0, x.V)(() => {
            if (k.current) {
              let e = k.current.querySelector(".bannerTitle"),
                t = k.current.querySelector(".bannerButton"),
                l = new u.Z(e, { types: "words,chars" }).chars,
                r = d().create({
                  trigger: k.current,
                  toggleActions: "play reverse play reverse",
                  start: "15% bottom",
                  pinnedContainer: m.Z,
                  invalidateOnRefresh: !0,
                  once: !0,
                  onEnter: () => {
                    e &&
                      p.ZP.fromTo(
                        l,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.01,
                          duration: 1,
                          ease: "power4.out",
                          onStart: () => {
                            e.style.overflow = "hidden";
                          },
                          onComplete: () => {
                            e.style.overflow = "visible";
                          },
                        }
                      ),
                      t &&
                        p.ZP.fromTo(
                          t,
                          { y: 100, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            stagger: 0.05,
                            duration: 1,
                            ease: "power1.out",
                          }
                        );
                  },
                });
              return () => r.kill();
            }
          }, [k]),
          (0, r.jsxs)("div", {
            ref: k,
            className:
              "relative flex flex-col items-center justify-center w-full h-[420px] px-5 md:px-10",
            children: [
              b &&
                (0, r.jsx)(o.Z, {
                  className:
                    "hidden md:block absolute w-full h-full object-cover",
                  alt: b.alternativeText,
                  priority: !0,
                  src: (0, n.Z)(
                    null === (l = b.format) || void 0 === l
                      ? void 0
                      : null === (t = l.original) || void 0 === t
                      ? void 0
                      : t.url
                  ),
                  width: 1477,
                  height: 420,
                }),
              j &&
                (0, r.jsx)(o.Z, {
                  className:
                    "block md:hidden absolute w-full h-full object-cover",
                  alt: j.alternativeText,
                  priority: !0,
                  src: (0, n.Z)(
                    null === (h = j.format) || void 0 === h
                      ? void 0
                      : null === (c = h.original) || void 0 === c
                      ? void 0
                      : c.url
                  ),
                  width: 390,
                  height: 420,
                }),
              (0, r.jsxs)("div", {
                className: "flex flex-col gap-y-6 lg:gap-y-8 w-full z-[1]",
                children: [
                  v &&
                    (0, r.jsx)(s.Z, {
                      level: Z,
                      className: "".concat(
                        w,
                        " bannerTitle uppercase md:max-w-[513px] lg:max-w-[872px]"
                      ),
                      children: v,
                    }),
                  N &&
                    (0, r.jsx)(i.Z, {
                      className: "bannerButton",
                      coreColor: y ? "Red" : "Purple",
                      "aria-label": N.label,
                      target:
                        null === (f = N.linkOptions) || void 0 === f
                          ? void 0
                          : f.target,
                      href: N.path,
                      children: N.label,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    6094: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(6164),
        n = l(4894),
        o = l.n(n),
        c = l(7694),
        d = l(4161),
        u = l(3310),
        p = l(2336),
        x = l(6098),
        m = l.n(x),
        h = l(2088),
        f = l(9582),
        v = l(19),
        g = l(2814);
      let w = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/list-checked.svg"
      );
      t.default = (e) => {
        let { benefitsList: t, button: l, packages: n, pageTitle: x } = e,
          {
            isOpened: b,
            openModal: j,
            closeModal: y,
            modalContent: N,
          } = (0, p.Z)(),
          k = (0, a.useRef)(null),
          Z = null == n ? void 0 : n.map((e) => (null == e ? void 0 : e.slug));
        if (
          ((0, v.V)(() => {
            if (k.current) {
              var e;
              (null == k
                ? void 0
                : null === (e = k.current) || void 0 === e
                ? void 0
                : e.querySelectorAll(".benefitsListItem")
              ).forEach((e, t) => {
                let l = e.querySelector(".benefitListItemCheckmark"),
                  r = e.querySelector(".benefitListItemTitle"),
                  a = new h.Z(r, { types: "words,chars" }).chars;
                m().create({
                  trigger: k.current,
                  toggleActions: "play reverse play reverse",
                  start: "15% bottom",
                  end: "top 20%",
                  invalidateOnRefresh: !0,
                  pinnedContainer: g.Z,
                  once: !0,
                  onEnter: () => {
                    l &&
                      f.ZP.fromTo(
                        l,
                        { x: -150 },
                        {
                          x: 0,
                          duration: 1,
                          ease: "power4.out",
                          delay: 0.1 * t,
                        }
                      ),
                      r &&
                        f.ZP.fromTo(
                          a,
                          { y: 50, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            stagger: 0.05,
                            duration: 0.1,
                            ease: "power1.out",
                            delay: 0.1 * t,
                          }
                        );
                  },
                });
              }),
                m().create({
                  trigger: k.current,
                  toggleActions: "play reverse play reverse",
                  start: "15% bottom",
                  end: "top 20%",
                  invalidateOnRefresh: !0,
                  pinnedContainer: g.Z,
                  once: !0,
                  onEnter: () => {
                    var e;
                    let t =
                      null == k
                        ? void 0
                        : null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.querySelector(".benefitButton");
                    t &&
                      f.ZP.fromTo(
                        t,
                        { width: 0 },
                        {
                          width: t.offsetWidth,
                          duration: 3,
                          ease: "power4.out",
                        }
                      );
                  },
                });
            }
          }, [k]),
          !(null == t ? void 0 : t.length))
        )
          return null;
        let L = "benefitListItemCheckmark w-[30px] h-6 lg:h-[48px] lg:w-[60px]";
        return (0, r.jsxs)("div", {
          ref: k,
          className: "flex flex-col gap-y-8 bg-violet-900",
          children: [
            (0, r.jsx)("div", {
              className: (0, i.m6)("flex flex-col"),
              children:
                null == t
                  ? void 0
                  : t.map((e) => {
                      let { title: t, id: l } = e;
                      return t
                        ? (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "benefitsListItem flex overflow-hidden w-full justify-between gap-x-4 items-center py-4 border-b-[1px] border-b-black px-4 md:px-5 lg:px-10",
                              children: [
                                (0, r.jsx)(s.Z, {
                                  className: L,
                                  priority: !0,
                                  alt: "",
                                  src: w,
                                  height: 48,
                                  width: 60,
                                }),
                                (0, r.jsx)("span", {
                                  className: (0, i.m6)(
                                    "benefitListItemTitle text-4xl lg:text-7xl font-bold uppercase text-center",
                                    o().className
                                  ),
                                  children: t,
                                }),
                                (0, r.jsx)("div", { className: L }),
                              ],
                            },
                            l
                          )
                        : null;
                    }),
            }),
            l &&
              (0, r.jsx)(c.Z, {
                type: "button",
                ariaLabel: l.label,
                onClick: () =>
                  j((0, r.jsx)(d.Z, { packageSlugList: Z, pageTitle: x })),
                className:
                  "benefitButton mx-auto overflow-hidden flex flex-col items-center mb-8",
                children: l.label,
              }),
            (0, r.jsx)(u.Z, { isOpened: b, onClose: y, children: N }),
          ],
        });
      };
    },
    6804: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return L;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(6164),
        n = l(6797),
        o = l(4989),
        c = l(4894),
        d = l.n(c),
        u = l(7694),
        p = l(3310),
        x = l(2336),
        m = l(6387),
        h = l(6098),
        f = l.n(h),
        v = l(2088),
        g = l(9582),
        w = l(2814),
        b = l(19),
        j = l(6924),
        y = l(8601),
        N = l(2587),
        k = (e) => {
          let { video: t, coverImage: l } = e,
            {
              isOpened: a,
              openModal: s,
              closeModal: i,
              modalContent: n,
            } = (0, x.Z)();
          return t
            ? (0, r.jsxs)("div", {
                className: "!relative object-contain w-full h-full",
                children: [
                  (0, r.jsxs)("div", {
                    className: "w-full h-full relative bg-black",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "pointer-events-none z-[1] w-[52px] h-[52px] bg-pink-900 absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] row-start-1 col-start-1 flex items-center justify-center",
                        children: (0, r.jsx)("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, r.jsx)("path", {
                            d: "M6 4L18 12L6 20V4Z",
                            fill: "black",
                          }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-full h-full relative aspect-[19/6] md:aspect-[16/9]",
                        children: (0, r.jsx)("video", {
                          onClick: () =>
                            s(
                              (0, r.jsx)(N.Z, {
                                coverImage: l,
                                mediaUrl: t.url,
                              })
                            ),
                          className:
                            "w-full h-full object-cover z-[1] cursor-pointer",
                          autoPlay: !0,
                          playsInline: !0,
                          controls: !1,
                          muted: !0,
                          loop: !0,
                          src: t.url,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(p.Z, { isOpened: a, onClose: i, children: n }),
                ],
              })
            : null;
        };
      let Z = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cases-decoration.svg"
      );
      var L = (e) => {
        let { casesList: t } = e,
          {
            isOpened: l,
            openModal: c,
            closeModal: h,
            modalContent: N,
          } = (0, x.Z)(),
          L = (0, a.useRef)(null),
          S = (0, j.Z)();
        return ((0, b.V)(() => {
          L.current &&
            Array.from(L.current.children).map((e) => {
              let t = e.querySelector(".caseDecoration"),
                l = e.querySelector(".caseTitle"),
                r = e.querySelector(".caseSubTitle"),
                a = e.querySelector(".caseButton"),
                s = new v.Z(r, { types: "lines" }).lines,
                i = new v.Z(l, { types: "words,chars" }).chars;
              return f().create({
                trigger: e,
                toggleActions: "play reverse play reverse",
                start: "15% bottom",
                pinnedContainer: w.Z,
                invalidateOnRefresh: !0,
                once: !0,
                onEnter: () => {
                  t &&
                    g.ZP.fromTo(
                      t,
                      { opacity: 0 },
                      { opacity: 1, duration: 2, ease: "power1.out" }
                    ),
                    l &&
                      g.ZP.fromTo(
                        i,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.01,
                          duration: 1,
                          ease: "power4.out",
                          onStart: () => {
                            l.style.overflow = "hidden";
                          },
                          onComplete: () => {
                            l.style.overflow = "visible";
                          },
                        }
                      ),
                    r &&
                      g.ZP.fromTo(
                        s,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.1,
                          duration: 1,
                          ease: "power1.out",
                        }
                      ),
                    a &&
                      g.ZP.fromTo(
                        a,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.05,
                          duration: 1,
                          ease: "power1.out",
                        }
                      );
                },
              });
            });
        }, [L, S]),
        null == t ? void 0 : t.length)
          ? (0, r.jsxs)("div", {
              ref: L,
              className: "flex flex-col",
              children: [
                null == t
                  ? void 0
                  : t.map((e, t) => {
                      var l, a;
                      let {
                        coverImage: p,
                        title: x,
                        subTitle: h,
                        id: f,
                        button: v,
                        overlay: g,
                        video: w,
                      } = e;
                      return (0, r.jsxs)(
                        "div",
                        {
                          className: (0, i.m6)(
                            "flex flex-col md:flex-row lg:max-h-[860px]",
                            t % 2 != 0 && "md:flex-row-reverse"
                          ),
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "w-full md:w-1/2 relative flex-1 aspect-[1/1] p-10 bg-cases-image-decoration bg-black",
                              children: [
                                w &&
                                  (0, r.jsx)(k, {
                                    video: w.video,
                                    coverImage: w.coverImage,
                                  }),
                                p &&
                                  !Object.keys(w).length &&
                                  (0, r.jsx)(s.Z, {
                                    fill: !0,
                                    alt: p.alternativeText,
                                    priority: !0,
                                    src: (0, o.Z)(
                                      null === (a = p.format) || void 0 === a
                                        ? void 0
                                        : null === (l = a.original) ||
                                          void 0 === l
                                        ? void 0
                                        : l.url
                                    ),
                                    className:
                                      "!relative object-contain w-full",
                                    quality: 80,
                                  }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "flex w-full md:w-1/2 bg-[#131313] shrink-0 py-[56px] px-4 md:py-0 md:px-0",
                              children: (0, r.jsxs)("div", {
                                className:
                                  "w-full md:max-w-[424px] lg:max-w-[626px] xl:max-w-[720px] m-auto flex flex-col gap-y-8 md:justify-center",
                                children: [
                                  (0, r.jsx)(s.Z, {
                                    alt: "",
                                    priority: !0,
                                    className: "caseDecoration w-max h-[24px]",
                                    src: Z,
                                    height: 24,
                                    width: 76,
                                  }),
                                  x &&
                                    (0, r.jsx)(n.Z, {
                                      className:
                                        "caseTitle uppercase lg:max-w-[720px]",
                                      level: 2,
                                      children: x,
                                    }),
                                  h &&
                                    (0, r.jsx)("p", {
                                      className:
                                        "caseSubTitle text-lg lg:text-xl lg:max-w-[720px]",
                                      children: (0, y.ZP)(h),
                                    }),
                                  v &&
                                    (null == g ? void 0 : g.slug) &&
                                    (0, r.jsx)("div", {
                                      className: "relative overflow-hidden",
                                      children: (0, r.jsxs)(
                                        u.Z,
                                        {
                                          ariaLabel: v.label,
                                          type: "button",
                                          isSimpleButton: !0,
                                          onClick: () =>
                                            c(
                                              (0, r.jsx)(m.Z, { slug: g.slug })
                                            ),
                                          className: (0, i.m6)(
                                            "caseButton text-base uppercase font-bold w-max",
                                            d().className
                                          ),
                                          children: [
                                            null == v ? void 0 : v.label,
                                            ">",
                                          ],
                                        },
                                        f
                                      ),
                                    }),
                                ],
                              }),
                            }),
                          ],
                        },
                        f
                      );
                    }),
                (0, r.jsx)(p.Z, { isOpened: l, onClose: h, children: N }),
              ],
            })
          : null;
      };
    },
    4898: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(8601);
      t.default = (e) => {
        let { content: t } = e;
        return t
          ? (0, r.jsx)("div", {
              className:
                "relative bg-[#131313] pt-[120px] pb-20 md:pt-[160px] md:pb-[120px] w-full h-auto",
              children: (0, r.jsx)("div", {
                className:
                  "max-w-[640px] mx-auto w-full px-4 md:px-0 [&>h1]:text-4xl lg:[&>h1]:text-5xl [&>h1]:font-bold [&>h2]:text-2xl lg:[&>h2]:text-3xl [&>h2]:font-bold [&>h3]:text-xl [&>h3]:font-bold [&>ul]:list-inside [&>ul]:list-disc [&>ul>li>ul]:list-inside [&>ul>li>ul]:list-disc [&>ul>li>ul]:ml-6 [&>a]:underline [&>p>a]:underline ",
                children: (0, a.ZP)(t),
              }),
            })
          : null;
      };
    },
    5571: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(6164),
        i = l(4894),
        n = l.n(i),
        o = l(9582),
        c = l(3417),
        d = l(3146),
        u = l(1068),
        p = l(6098),
        x = l.n(p),
        m = l(5481),
        h = l.n(m),
        f = l(7722),
        v = l.n(f);
      function g(e) {
        let { totalPages: t, currentPage: l, onPageClick: a } = e;
        return t <= 1
          ? null
          : (0, r.jsx)("div", {
              className: "hcs-pagination",
              children: Array.from({ length: t }).map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: "hcs-pagination-line ".concat(
                      t === l ? "active" : ""
                    ),
                    onClick: () => a(t),
                    role: "button",
                    tabIndex: 0,
                    "aria-label": "Go to page ".concat(t + 1),
                    "aria-current": t === l ? "page" : void 0,
                    onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) &&
                        (e.preventDefault(), a(t));
                    },
                  },
                  t
                )
              ),
            });
      }
      let w = { sm: 1, md: 2, lg: 3, xl: 4 },
        b = h()(v()).theme.screens,
        j = (0, a.forwardRef)((e, t) => {
          let {
              className: l = "",
              children: s,
              gap: i = 16,
              columns: n = w,
              columnWidths: o,
              snap: c = "mandatory",
              height: d,
              wheelSnap: u = !0,
              showPagination: p = !1,
            } = e,
            x = (0, a.useRef)(null),
            m = (0, a.useRef)(null),
            [h, f] = (0, a.useState)({ ...w, ...n }),
            [v, j] = (0, a.useState)(0),
            [N, k] = (0, a.useState)(null != d ? d : null),
            [Z, L] = (0, a.useState)(0),
            [S, P] = (0, a.useState)(0),
            E = (0, a.useCallback)(() => {
              var e, t, l, r;
              let a = window.innerWidth,
                s = parseInt(b.xl || "1920"),
                i = parseInt(b.lg || "1477"),
                o = parseInt(b.md || "944");
              return a >= s
                ? null !== (e = n.xl) && void 0 !== e
                  ? e
                  : w.xl
                : a >= i
                ? null !== (t = n.lg) && void 0 !== t
                  ? t
                  : w.lg
                : a >= o
                ? null !== (l = n.md) && void 0 !== l
                  ? l
                  : w.md
                : null !== (r = n.sm) && void 0 !== r
                ? r
                : w.sm;
            }, [n.xl, n.lg, n.md, n.sm]);
          (0, a.useEffect)(() => {
            let e = x.current;
            if (!e) return;
            let t = () => {
              if (o) {
                let t;
                let l = window.innerWidth;
                j(
                  Math.max(
                    0,
                    (t =
                      l >= 1280
                        ? o.xl || o.lg || o.md || o.sm || "100%"
                        : l >= 1024
                        ? o.lg || o.md || o.sm || "100%"
                        : l >= 768
                        ? o.md || o.sm || "100%"
                        : o.sm || "100%").endsWith("vw")
                      ? (parseFloat(t) / 100) * window.innerWidth
                      : t.endsWith("%")
                      ? (parseFloat(t) / 100) * e.clientWidth
                      : parseFloat(t)
                  )
                );
              } else {
                let t = E(),
                  l = e.clientWidth,
                  r = (t - 1) * i;
                j(Math.max(0, t > 0 ? (l - r) / t : 0));
              }
              if (null == d) {
                let e = m.current;
                if (e) {
                  let t = 0;
                  for (let l of Array.from(e.children))
                    t = Math.max(t, l.offsetHeight);
                  k(Math.max(160, Math.min(0.6 * window.innerHeight, t)));
                }
              }
            };
            t();
            let l = new ResizeObserver(t);
            return (
              l.observe(e),
              window.addEventListener("resize", t),
              () => {
                l.disconnect(), window.removeEventListener("resize", t);
              }
            );
          }, [i, d, E, o]),
            (0, a.useEffect)(() => {
              let e = () => {
                  var e, t, l, r;
                  f({
                    sm: null !== (e = n.sm) && void 0 !== e ? e : w.sm,
                    md: null !== (t = n.md) && void 0 !== t ? t : w.md,
                    lg: null !== (l = n.lg) && void 0 !== l ? l : w.lg,
                    xl: null !== (r = n.xl) && void 0 !== r ? r : w.xl,
                  });
                },
                t = parseInt(b.md || "944"),
                l = parseInt(b.lg || "1477"),
                r = parseInt(b.xl || "1920"),
                a = [
                  window.matchMedia("(max-width: ".concat(t - 1, "px)")),
                  window.matchMedia(
                    "(min-width: "
                      .concat(t, "px) and (max-width: ")
                      .concat(l - 1, "px)")
                  ),
                  window.matchMedia(
                    "(min-width: "
                      .concat(l, "px) and (max-width: ")
                      .concat(r - 1, "px)")
                  ),
                  window.matchMedia("(min-width: ".concat(r, "px)")),
                ];
              return (
                a.forEach((t) => t.addEventListener("change", e)),
                () => a.forEach((t) => t.removeEventListener("change", e))
              );
            }, [n.sm, n.md, n.lg, n.xl]),
            (0, a.useEffect)(() => {
              let e = x.current;
              if (!e) return;
              let t = !1,
                l = 0,
                r = 0,
                a = 0,
                s = 0,
                n = null,
                o = (i) => {
                  (t = !0),
                    e.setPointerCapture(i.pointerId),
                    (l = i.clientX),
                    (r = e.scrollLeft),
                    (a = i.clientX),
                    (s = 0);
                },
                c = (i) => {
                  if (!t) return;
                  let n = i.clientX - a;
                  (a = i.clientX),
                    (s = n),
                    (e.scrollLeft = r - (i.clientX - l));
                },
                d = (a) => {
                  if (!t) return;
                  (t = !1), e.releasePointerCapture(a.pointerId);
                  let n = v + i;
                  if (!n) return;
                  let o = a.clientX - l;
                  if (Math.abs(s) > 3) {
                    let t = s < 0 ? 1 : -1,
                      l = Math.round(e.scrollLeft / n);
                    y(e, (l + t) * n, 300);
                  } else if (Math.abs(o) > 0.2 * n)
                    y(e, (Math.round(r / n) + (o < 0 ? 1 : -1)) * n, 250);
                  else {
                    let t = Math.round(e.scrollLeft / n) * n;
                    y(e, t, 200);
                  }
                },
                u = () => {
                  let t = v + i;
                  t && L(Math.round(e.scrollLeft / t)),
                    n && window.clearTimeout(n),
                    (n = window.setTimeout(() => {
                      let t = v + i;
                      if (!t) return;
                      let l = Math.round(e.scrollLeft / t) * t;
                      y(e, l, 250);
                    }, 150));
                },
                p = () => {
                  if (!m.current) return;
                  let t = v + i,
                    l = E();
                  t &&
                    e.scrollWidth &&
                    l &&
                    P(
                      Math.max(
                        1,
                        Math.round((e.scrollWidth - e.clientWidth) / t) + 1
                      )
                    );
                };
              p();
              let h = new ResizeObserver(p);
              return (
                h.observe(e),
                e.addEventListener("pointerdown", o),
                e.addEventListener("scroll", u),
                window.addEventListener("pointermove", c),
                window.addEventListener("pointerup", d),
                () => {
                  h.disconnect(),
                    e.removeEventListener("pointerdown", o),
                    e.removeEventListener("scroll", u),
                    window.removeEventListener("pointermove", c),
                    window.removeEventListener("pointerup", d),
                    n && window.clearTimeout(n);
                }
              );
            }, [v, i, E]),
            (0, a.useEffect)(() => {
              if (!u) return;
              let e = x.current;
              if (!e) return;
              let t = null,
                l = (l) => {
                  Math.abs(l.deltaX) > Math.abs(l.deltaY) &&
                    (l.preventDefault(),
                    (e.scrollLeft += l.deltaX),
                    t && window.clearTimeout(t),
                    (t = window.setTimeout(() => {
                      let t = v + i,
                        l = Math.round(e.scrollLeft / t) * t;
                      y(e, l, 220);
                    }, 80)));
                };
              return (
                e.addEventListener("wheel", l, { passive: !1 }),
                () => {
                  e.removeEventListener("wheel", l),
                    t && window.clearTimeout(t);
                }
              );
            }, [v, i, u]),
            (0, a.useImperativeHandle)(
              t,
              () => ({
                next() {
                  let e = x.current;
                  if (!e) return;
                  let t = v + i;
                  if (!t) return;
                  let l = Math.round(e.scrollLeft / t);
                  y(e, (l + 1) * t, 300);
                },
                prev() {
                  let e = x.current;
                  if (!e) return;
                  let t = v + i;
                  if (!t) return;
                  let l = Math.round(e.scrollLeft / t);
                  y(e, (l - 1) * t, 300);
                },
                scrollToColumn(e) {
                  let t = x.current;
                  if (!t) return;
                  let l = v + i;
                  l && y(t, Math.max(0, e) * l, 300);
                },
              }),
              [v, i]
            );
          let C = o
              ? "\n      .hcs-root { position: relative; width: 100%; }\n      .hcs-viewport {\n        overflow-x: auto; overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        scroll-snap-type: x "
                  .concat(c, ";\n        height: ")
                  .concat(
                    null != N ? N : 360,
                    "px;\n        padding: 16px 0;\n        cursor: grab;\n        /* Hide scrollbar */\n        scrollbar-width: none; /* Firefox */\n        -ms-overflow-style: none; /* IE/Edge */\n      }\n      .hcs-viewport::-webkit-scrollbar {\n        display: none; /* Chrome/Safari */\n      }\n      .hcs-viewport:active {\n        cursor: grabbing;\n      }\n      .hcs-inner {\n        /* Multi-column layout with explicit widths */\n        column-gap: "
                  )
                  .concat(
                    i,
                    "px;\n        column-fill: auto;\n        /* Use exact column width - CSS will create as many as needed */\n        column-width: "
                  )
                  .concat(
                    o.sm || "100%",
                    ";\n        /* Force wide enough container to create horizontal overflow */\n        min-width: 100vw;\n        height: 100%;\n      }\n      @media (min-width: "
                  )
                  .concat(
                    b.md,
                    ") {\n        .hcs-inner {\n          column-width: "
                  )
                  .concat(
                    o.md || o.sm || "50%",
                    ";\n        }\n      }\n      @media (min-width: "
                  )
                  .concat(
                    b.lg,
                    ") {\n        .hcs-inner {\n          column-width: "
                  )
                  .concat(
                    o.lg || o.md || o.sm || "33.35vw",
                    ";\n        }\n      }\n      @media (min-width: "
                  )
                  .concat(
                    b.xl,
                    ") {\n        .hcs-inner {\n          column-width: "
                  )
                  .concat(
                    o.xl || o.lg || o.md || o.sm || "33.35vw",
                    ";\n        }\n      }\n    "
                  )
              : "\n      .hcs-root { position: relative; width: 100%; }\n      .hcs-viewport {\n        overflow-x: auto; overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        scroll-snap-type: x "
                  .concat(c, ";\n        height: ")
                  .concat(
                    null != N ? N : 360,
                    "px;\n        padding: 16px 0;\n        cursor: grab;\n        /* Hide scrollbar */\n        scrollbar-width: none; /* Firefox */\n        -ms-overflow-style: none; /* IE/Edge */\n      }\n      .hcs-viewport::-webkit-scrollbar {\n        display: none; /* Chrome/Safari */\n      }\n      .hcs-viewport:active {\n        cursor: grabbing;\n      }\n      .hcs-inner {\n        /* Multi-column layout */\n        column-gap: "
                  )
                  .concat(
                    i,
                    "px;\n        column-fill: auto; /* fill each column to the container's height */\n        /* Visible columns responsive via CSS var --hcs-cols */\n        --hcs-cols: "
                  )
                  .concat(
                    h.sm,
                    ";\n        --hcs-col-width: calc((100vw - (var(--hcs-cols) - 1) * "
                  )
                  .concat(
                    i,
                    "px) / var(--hcs-cols));\n        column-width: var(--hcs-col-width);\n        /* Force wide enough container to create horizontal overflow */\n        min-width: 100vw;\n        height: 100%;\n        /* Children must be breakable items; avoid width forcing */\n      }\n      @media (min-width: "
                  )
                  .concat(b.md, ") {\n        .hcs-inner { --hcs-cols: ")
                  .concat(h.md, "; }\n      }\n      @media (min-width: ")
                  .concat(b.lg, ") {\n        .hcs-inner { --hcs-cols: ")
                  .concat(h.lg, "; }\n      }\n      @media (min-width: ")
                  .concat(b.xl, ") {\n        .hcs-inner { --hcs-cols: ")
                  .concat(
                    h.xl,
                    "; }\n      }\n\n      /* Snap helper: create invisible snap points every column width\n         We use a repeating gradient to hint browser snap proximity. */\n      .hcs-viewport {\n        scroll-padding-left: 0;\n        /* Debug: Add border to see viewport */\n        /* border: 2px solid red; */\n      }\n      /* Debug: Add background to see inner container */\n      .hcs-inner {\n        /* background: rgba(0, 255, 0, 0.1); */\n      }\n\n      /* Pagination lines */\n      .hcs-pagination {\n        display: flex;\n        gap: 4px;\n        justify-content: center;\n        padding: 16px 0;\n      }\n      .hcs-pagination-line {\n        padding: 12px 4px;\n        cursor: pointer;\n        position: relative;\n      }\n      .hcs-pagination-line::before {\n        content: '';\n        display: block;\n        width: 32px;\n        height: 2px;\n        background: rgba(255, 255, 255, 0.3);\n        transition: background 0.3s ease;\n      }\n      .hcs-pagination-line.active::before {\n        background: rgba(255, 255, 255, 1);\n      }\n    "
                  ),
            T = p ? (null != N ? N : 360) - 48 : null != N ? N : 360;
          return (0, r.jsxs)("div", {
            className: "hcs-root ".concat(l).trim(),
            onKeyDown: (e) => {
              let t = x.current;
              if (!t) return;
              let l = v + i;
              if (l) {
                if ("ArrowRight" === e.key) {
                  e.preventDefault();
                  let r = Math.round(t.scrollLeft / l);
                  y(t, (r + 1) * l);
                }
                if ("ArrowLeft" === e.key) {
                  e.preventDefault();
                  let r = Math.round(t.scrollLeft / l);
                  y(t, (r - 1) * l);
                }
              }
            },
            style: { height: "".concat(null != N ? N : 360, "px") },
            children: [
              (0, r.jsx)("style", { dangerouslySetInnerHTML: { __html: C } }),
              (0, r.jsx)("div", {
                ref: x,
                className: "hcs-viewport",
                role: "region",
                "aria-label": "Horizontal column slider",
                tabIndex: 0,
                style: { height: "".concat(T, "px") },
                children: (0, r.jsx)("div", {
                  ref: m,
                  className: "hcs-inner h-full",
                  children: s,
                }),
              }),
              p &&
                (0, r.jsx)(g, {
                  totalPages: S,
                  currentPage: Z,
                  onPageClick: (e) => {
                    let t = x.current;
                    t && y(t, e * (v + i), 300);
                  },
                }),
            ],
          });
        });
      function y(e, t) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 300,
          r = e.scrollLeft,
          a = t - r;
        if (l <= 0 || 1 > Math.abs(a)) {
          e.scrollLeft = t;
          return;
        }
        let s = performance.now(),
          i = (e) => 1 - Math.pow(1 - e, 3),
          n = () => {
            let t = Math.min(1, Math.max(0, (performance.now() - s) / l));
            (e.scrollLeft = r + a * i(t)), t < 1 && requestAnimationFrame(n);
          };
        requestAnimationFrame(n);
      }
      j.displayName = "HorizontalColumnSlider";
      var N = (e) => {
        var t;
        let { isRedMode: l, questions: i } = e,
          p = l ? "faq-tile-bg-red" : "faq-tile-bg-purple",
          m = l ? "faq-tile-glow-red-hover" : "faq-tile-glow-purple-hover",
          [h, f] = (0, a.useState)({
            targetCell: null,
            content: null,
            question: null,
          }),
          v = (0, a.useRef)(null),
          g = (0, a.useRef)(null),
          w = (0, a.useRef)(void 0),
          [b, y] = (0, a.useState)(!1);
        if (
          ((0, a.useEffect)(() => {
            b && y(!1);
            let e = o.ZP.utils.toArray(".tileSection");
            return (
              e.forEach((e) => {
                e.addEventListener("mousemove", (t) =>
                  (0, c.p)({ e: t, sectionEl: e })
                );
              }),
              () => {
                e.forEach((e) =>
                  e.removeEventListener("mousemove", (t) =>
                    (0, c.p)({ e: t, sectionEl: e })
                  )
                );
              }
            );
          }, [v, b]),
          (0, u.Z)({
            onResize: () => {
              y(!0);
            },
          }),
          (0, a.useEffect)(
            () => () => {
              (null == w ? void 0 : w.current) && clearTimeout(w.current);
            },
            []
          ),
          (0, a.useEffect)(() => {
            let e = setTimeout(() => {
              x().refresh();
            }, 300);
            return () => clearTimeout(e);
          }, [h.question]),
          !(null == i ? void 0 : i.length))
        )
          return null;
        let N = (e) => {
            let t = null == e ? void 0 : e.parentNode;
            if (!t) return null;
            let l = window
              .getComputedStyle(t)
              .gridTemplateColumns.split(" ").length;
            return Math.floor(Array.from(t.children).indexOf(e) / l) + 1 + 1;
          },
          k = (e) => {
            let { e: t, slug: l, answers: r } = e,
              a = l === h.question;
            N(h.targetCell) === N(t.target)
              ? f(
                  (null == h ? void 0 : h.content) && a
                    ? { targetCell: t.target, content: null, question: null }
                    : { targetCell: t.target, content: r, question: l }
                )
              : (f({ targetCell: h.targetCell, content: null, question: null }),
                (w.current = setTimeout(() => {
                  f(
                    (null == h ? void 0 : h.content) && a
                      ? { targetCell: t.target, content: null, question: null }
                      : { targetCell: t.target, content: r, question: l }
                  );
                }, 300)));
          };
        return (0, r.jsx)("div", {
          className: "relative flex flex-col bg-[#131313]",
          children: (0, r.jsxs)("div", {
            className:
              "relative z-[1] grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[33.35vw_33.35vw_33.35vw]",
            children: [
              i.map((e, t) => {
                let { title: a, id: i, answers: o, slug: c } = e,
                  d = t + 1,
                  u = c === h.question;
                return (0, r.jsxs)(
                  "div",
                  {
                    ref: v,
                    onClick: (e) => k({ e, slug: c, answers: o }),
                    className: (0, s.m6)(
                      "tileSection relative flex flex-col justify-between p-4 shadow-[1px_1px_1px_0_rgba(255,255,255,0.25)] h-[230px] cursor-pointer",
                      u ? p : "".concat(m, " overflow-hidden")
                    ),
                    children: [
                      u &&
                        (0, r.jsx)("div", {
                          className: (0, s.m6)(
                            "absolute z-[-1] left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] block w-full h-full faq-tile-glow-purple transition duration-200 blur-[16px] group-hover:blur-[32px]",
                            l && "faq-tile-glow-red"
                          ),
                        }),
                      (0, r.jsxs)("span", {
                        className: (0, s.m6)(
                          "uppercase text-xs lg:text-sm font-bold",
                          n().className
                        ),
                        children: ["[", d < 10 && 0, d, "]"],
                      }),
                      (0, r.jsx)("span", {
                        className: "text-xl lg:text-2xl font-medium",
                        children: a,
                      }),
                    ],
                  },
                  i
                );
              }),
              (0, r.jsx)(d.Z, {
                in: !!h.content,
                nodeRef: g,
                timeout: 200,
                unmountOnExit: !0,
                classNames: {
                  enter: "h-0",
                  enterActive: "faqAnswerContainer-enter-active",
                  enterDone: "h-[400px]",
                  exit: "h-[400px]",
                  exitActive: "faqAnswerContainer-exit-active",
                  exitDone: "h-0",
                },
                children: (0, r.jsx)("div", {
                  ref: g,
                  className: (0, s.m6)(
                    "col-span-1 md:col-span-2 lg:col-span-3 w-full transition-all ease-in-out duration-200 bg-black shadow-[1px_1px_1px_0_rgba(255,255,255,0.25)]"
                  ),
                  style: {
                    gridRowStart: h.targetCell
                      ? null === (t = N(h.targetCell)) || void 0 === t
                        ? void 0
                        : t.toString()
                      : "auto",
                  },
                  children: (0, r.jsx)(
                    a.Fragment,
                    {
                      children:
                        (null == h ? void 0 : h.content) &&
                        (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsx)(j, {
                            height: 400,
                            gap: 0,
                            showPagination: !0,
                            children: h.content
                              .filter(
                                (e) =>
                                  e.shortDescription &&
                                  e.shortDescription.trim().length > 0
                              )
                              .map((e) => {
                                let {
                                  id: t,
                                  title: l,
                                  shortDescription: a,
                                } = e;
                                return (0, r.jsxs)(
                                  "div",
                                  {
                                    className: "break-inside-avoid mb-8 px-4",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: (0, s.m6)(
                                          "uppercase md:text-sm lg:text-base md:leading-[12px] lg:leading-[14px] font-bold block mb-4",
                                          n().className
                                        ),
                                        children: l,
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "text-lg lg:text-xl font-normal [&>a]:underline [&>p>a]:underline [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4 [&>li]:break-inside-avoid [&>li]:mb-1 [&>p]:mb-3 [&>p]:break-inside-avoid",
                                        dangerouslySetInnerHTML: { __html: a },
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                          }),
                        }),
                    },
                    h.question
                  ),
                }),
              }),
            ],
          }),
        });
      };
    },
    3740: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(4989),
        n = l(6164),
        o = l(4894),
        c = l.n(o),
        d = l(4300),
        u = l(8562),
        p = l(1865);
      let x = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cross.svg"
      );
      t.default = (e) => {
        let { features: t } = e,
          [l, o] = (0, d.Z)({ loop: !0, align: "start" }),
          [m, h] = (0, a.useState)(0),
          [f, v] = (0, a.useState)(0);
        return ((0, a.useEffect)(() => {
          if (!o) return;
          let e = () => {
              h(o.selectedScrollSnap()), v(o.scrollSnapList().length);
            },
            t = () => {
              o.reInit();
            };
          return (
            e(),
            o.on("select", e),
            o.on("reInit", e),
            window.addEventListener("resize", t),
            () => {
              o.off("select", e),
                o.off("reInit", e),
                window.removeEventListener("resize", t);
            }
          );
        }, [o]),
        t)
          ? (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "relative w-full justify-center items-stretch px-0 [@media(min-width:768px)]:px-8 [@media(min-width:1024px)]:px-32 flex bg-[#000000] px-6 md:px-0",
                  children: (0, r.jsxs)("div", {
                    className:
                      "w-full [@media(min-width:768px)]:max-w-[calc(90vw-9rem)] [@media(min-width:1024px)]:max-w-[calc(90vw-16rem)]",
                    children: [
                      (0, r.jsx)("div", {
                        ref: l,
                        className:
                          "overflow-hidden w-full border-[1px] border-[#404040]",
                        children: (0, r.jsx)("div", {
                          className: "h-max flex",
                          children: t.map((e) => {
                            var t, l;
                            let {
                              title: a,
                              subTitle: o,
                              shortDescription: d,
                              coverImage: u,
                              id: p,
                            } = e || {};
                            return (0, r.jsxs)(
                              "div",
                              {
                                className:
                                  "featuresSection bg-[#131313] flex-[0_0_calc(100vw-3rem)] [@media(min-width:768px)_and_(max-width:1023px)]:flex-[0_0_50%] [@media(min-width:1024px)]:flex-[0_0_33.333%] h-auto flex flex-col min-w-0 [&:not(:last-child)]:border-r-[1px] [&:not(:last-child)]:border-r-[#404040]",
                                children: [
                                  a &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "absolute flex gap-x-2 items-center z-[1] p-8 w-[calc(100%-2rem)]",
                                      children: [
                                        (0, r.jsx)("svg", {
                                          width: "9",
                                          height: "9",
                                          viewBox: "0 0 9 9",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, r.jsx)("rect", {
                                            width: "9",
                                            height: "9",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, r.jsx)("p", {
                                          className: (0, n.m6)(
                                            "text-sm lg:text-sm font-bold -tracking-[1px] uppercase",
                                            c().className
                                          ),
                                          children: a,
                                        }),
                                      ],
                                    }),
                                  u &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "w-full aspect-square relative block mx-auto overflow-hidden shrink-0 border-r-[1px] border-r-[#262626]",
                                      children: [
                                        (0, r.jsx)(s.Z, {
                                          height: 180,
                                          width: 180,
                                          alt: u.alternativeText || "",
                                          priority: !0,
                                          src: (0, i.Z)(
                                            null === (l = u.format) ||
                                              void 0 === l
                                              ? void 0
                                              : null === (t = l.original) ||
                                                void 0 === t
                                              ? void 0
                                              : t.url
                                          ),
                                          className: (0, n.m6)(
                                            "w-full h-full shrink-0 aspect-[1/1] object-contain"
                                          ),
                                          quality: 80,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] w-full h-full z-[1] [&>*]:absolute [&>*]:w-6 [&>*]:m-8 ",
                                          children: [
                                            (0, r.jsx)(s.Z, {
                                              priority: !0,
                                              alt: "",
                                              className: "top-0 right-0",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                            (0, r.jsx)(s.Z, {
                                              priority: !0,
                                              alt: "",
                                              className:
                                                "bottom-0 right-0 !mb-4",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                            (0, r.jsx)(s.Z, {
                                              priority: !0,
                                              alt: "",
                                              className:
                                                "bottom-0 left-0 !mb-4",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col h-full gap-y-4 w-full pt-4 pb-8 px-4 md:pt-0 md:pb-8 md:px-8 border-r-[1px] border-r-[#00000026]",
                                    children: [
                                      o &&
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-xl lg:text-2xl text-white font-medium",
                                          children: o,
                                        }),
                                      d &&
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-lg lg:text-xl text-white font-normal",
                                          children: d,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              p
                            );
                          }),
                        }),
                      }),
                      (0, r.jsx)(p.Z, { selectedIndex: m, slidesCount: f }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none  px-[6px] md:px-[20px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer pointer-events-auto flex justify-center items-center active:bg-transparent md:active:bg-transparent select-none",
                      style: {
                        WebkitTapHighlightColor: "transparent",
                        touchAction: "manipulation",
                      },
                      onClick: (e) => {
                        e.stopPropagation(), null == o || o.scrollPrev();
                      },
                      children: (0, r.jsx)(u.Z, {}),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer pointer-events-auto flex justify-center items-center active:bg-transparent md:active:bg-transparent select-none",
                      style: {
                        WebkitTapHighlightColor: "transparent",
                        touchAction: "manipulation",
                      },
                      onClick: (e) => {
                        e.stopPropagation(), null == o || o.scrollNext();
                      },
                      children: (0, r.jsx)(u.Z, { className: "rotate-180" }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
    1590: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(6797),
        i = l(5303),
        n = l(2283),
        o = l(8601),
        c = l(6987),
        d = l(4989),
        u = l(6164),
        p = l(9582),
        x = l(6098),
        m = l.n(x),
        h = l(19),
        f = l(2814),
        v = l(921);
      let g = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/circles.svg"
      );
      t.default = (e) => {
        var t, l, x, w;
        let {
            title: b,
            subTitle: j,
            shortDescription: y,
            partnerMarquee: N,
            isProductPage: k,
            isSOSPage: Z,
            isVirtualCoverPage: L,
            coverImage: S,
            backgroundImage: P,
            button: E,
          } = e,
          { partnerSet: C } = N || {},
          T = (0, a.useRef)(null);
        return (
          (0, h.V)(() => {
            if (T.current && !k && !Z && !L) {
              let e = T.current.querySelector(".headerContent"),
                t = T.current.querySelector(".partnerMarqueeModuleContent");
              e &&
                m().create({
                  trigger: T.current,
                  toggleActions: "play reverse play reverse",
                  start: "0.5% top",
                  invalidateOnRefresh: !0,
                  pinSpacing: !0,
                  onEnter: () => {
                    p.ZP.to(e, {
                      x: -500,
                      opacity: 0,
                      duration: 1,
                      ease: "power1.out",
                    });
                  },
                  onLeaveBack: () => {
                    p.ZP.to(e, {
                      x: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power1.out",
                    });
                  },
                }),
                t &&
                  p.ZP.to(t, {
                    y: null == t ? void 0 : t.offsetHeight,
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: t,
                      start: "bottom 88%",
                      pinnedContainer: f.Z,
                      invalidateOnRefresh: !0,
                      scrub: !0,
                      end: () => "+=100",
                    },
                  });
            }
          }, [T.current]),
          (0, r.jsxs)("div", {
            ref: T,
            className: (0, u.m6)(
              "relative w-full h-[100vh] flex flex-col md:flex-row pt-[120px] md:pt-0 md:items-center justify-between",
              S && !Z && "h-auto md:h-[100svh]",
              Z && "justify-normal! gap-y-8"
            ),
            children: [
              P &&
                (0, r.jsx)(i.Z, {
                  alt: P.alternativeText,
                  src: (0, d.Z)(
                    null === (l = P.format) || void 0 === l
                      ? void 0
                      : null === (t = l.original) || void 0 === t
                      ? void 0
                      : t.url
                  ),
                  fill: !0,
                  className: (0, u.m6)("absolute w-full h-full object-fill"),
                }),
              (0, r.jsxs)("div", {
                className: (0, u.m6)(
                  "headerContent flex flex-col max-w-[700px] md:max-w-[560px] lg:max-w-[960px] md:justify-center items-left gap-y-8 mx-4 lg:ml-10 z-[1]"
                ),
                children: [
                  (L || k) &&
                    j &&
                    (0, r.jsxs)("div", {
                      className: "flex gap-x-4 items-center",
                      children: [
                        (0, r.jsx)(i.Z, {
                          alt: "",
                          src: g,
                          height: 24,
                          width: 24,
                        }),
                        (0, r.jsx)(s.Z, {
                          level: 0,
                          className: "text-pink-900 uppercase",
                          children: j,
                        }),
                      ],
                    }),
                  b &&
                    (0, r.jsx)(s.Z, {
                      className: "uppercase text-4xl lg:text-7xl",
                      children: b,
                    }),
                  y &&
                    (0, r.jsx)("p", {
                      className: (0, u.m6)(
                        "md:max-w-[480px] lg:max-w-[540px] text-xl lg:text-2xl",
                        k && "lg:max-w-[480px]"
                      ),
                      children: (0, o.ZP)(y),
                    }),
                  E &&
                    E.length > 0 &&
                    (0, r.jsx)("div", {
                      className:
                        "flex flex-row flex-wrap gap-8 md:gap-12 items-center",
                      children: E.filter((e) => {
                        let t = null == e ? void 0 : e.path;
                        return t && "string" == typeof t && t.trim().length > 0;
                      }).map((e, t) => {
                        var l, a, s;
                        let i = null == e ? void 0 : e.path;
                        if (!i || "string" != typeof i || 0 === i.trim().length)
                          return null;
                        let o = i.trim();
                        return 0 === t
                          ? (0, r.jsx)(
                              n.Z,
                              {
                                coreColor: "Orange",
                                isBig: !0,
                                "aria-label": e.label,
                                target:
                                  null === (s = e.linkOptions) || void 0 === s
                                    ? void 0
                                    : s.target,
                                href: o,
                                children: e.label,
                              },
                              e.id
                            )
                          : (0, r.jsxs)(
                              "div",
                              {
                                className:
                                  "relative group hover:bg-[#ffffff40] transition-all duration-300 ease-out",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute top-0 left-0 w-2 h-2 border-l border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:left-[4px]",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute top-0 right-0 w-2 h-2 border-r border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:right-[4px]",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:left-[4px]",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:right-[4px]",
                                  }),
                                  (0, r.jsx)(v.Z, {
                                    href: o,
                                    target:
                                      null === (l = e.linkOptions) ||
                                      void 0 === l
                                        ? void 0
                                        : l.target,
                                    className:
                                      "flex items-center justify-center gap-3 text-white py-[10px] md:py-[14px] px-[16px]",
                                    "aria-label": e.label,
                                    children: (0, r.jsx)("span", {
                                      className: (0, u.m6)(
                                        "text-[14px] md:text-[16px] font-bold uppercase"
                                      ),
                                      children:
                                        null === (a = e.label) || void 0 === a
                                          ? void 0
                                          : a.toUpperCase(),
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            );
                      }),
                    }),
                ],
              }),
              S &&
                (0, r.jsx)(i.Z, {
                  height: 702,
                  width: 682,
                  priority: !0,
                  alt: S.alternativeText,
                  src: (0, d.Z)(
                    null === (w = S.format) || void 0 === w
                      ? void 0
                      : null === (x = w.original) || void 0 === x
                      ? void 0
                      : x.url
                  ),
                  className: (0, u.m6)(
                    "shrink-0 w-full md:w-[46.2vw] mb-[56px] md:mb-0 z-[1]",
                    Z &&
                      "md:w-[47vw] lg:w-[35.5vw] !block md:absolute bottom-0 md:!right-4 lg:!right-10 mb-0"
                  ),
                  quality: 80,
                }),
              (0, r.jsx)(c.default, { partnerSet: C }),
            ],
          })
        );
      };
    },
    1154: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(6797),
        s = l(5303),
        i = l(4989),
        n = l(2265),
        o = l(6098),
        c = l.n(o),
        d = l(9582),
        u = l(6164),
        p = l(2088),
        x = l(19),
        m = l(2814);
      let h = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/сrosses.svg"
      );
      t.default = (e) => {
        var t, l, o, f;
        let {
            title: v,
            titleTag: g,
            titleStyle: w,
            subTitle: b,
            coverImage: j,
            isNoAnimationMode: y = !1,
          } = e,
          N = (0, n.useRef)(null),
          k = g ? Number(g.replace("h", "")) : 2;
        return (
          (0, x.V)(() => {
            if (N.current && !y) {
              let e = N.current.querySelector(".headlineTitle"),
                t = new p.Z(e, { types: "words,chars" }).chars,
                l = c().create({
                  trigger: N.current,
                  toggleActions: "play reverse play reverse",
                  start: "15% bottom",
                  pinnedContainer: m.Z,
                  invalidateOnRefresh: !0,
                  once: !0,
                  onEnter: () => {
                    e &&
                      d.ZP.fromTo(
                        t,
                        { y: 50, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          stagger: 0.02,
                          duration: 1,
                          ease: "power4.out",
                          onStart: () => {
                            e.style.overflow = "hidden";
                          },
                          onComplete: () => {
                            e.style.overflow = "visible";
                          },
                        }
                      );
                  },
                });
              return () => l.kill();
            }
          }, [N]),
          (0, r.jsx)("div", {
            className: "relative",
            children: (0, r.jsxs)("div", {
              ref: N,
              className:
                "flex flex-col md:flex-row justify-between items-center px-4 md:px-5 lg:px-10 py-3.5 md:py-10 lg:py-[80px] bg-black border-y-[1px] border-y-[#000000]",
              children: [
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className: "w-6 h-[96px] rotate-90 md:rotate-0",
                  src: h,
                  priority: !0,
                  height: 96,
                  width: 24,
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-y-6 items-center w-full",
                  children: [
                    v &&
                      (0, r.jsx)(a.Z, {
                        level: k,
                        className: (0, u.m6)(
                          "headlineTitle md:max-w-[743px] lg:max-w-[1237px] text-center uppercase h-max",
                          y && "opacity-100",
                          w
                        ),
                        children: v,
                      }),
                    b &&
                      (0, r.jsx)("p", {
                        className:
                          "headlineSubTitle text-lg lg:text-xl text-center md:max-w-[76.4vw] lg:max-w-[54vw]",
                        children: b,
                      }),
                    j &&
                      (0, r.jsx)(s.Z, {
                        height: 160,
                        width: 109,
                        priority: !0,
                        alt: j.alternativeText,
                        src: (0, i.Z)(
                          null === (l = j.format) || void 0 === l
                            ? void 0
                            : null === (t = l.original) || void 0 === t
                            ? void 0
                            : t.url
                        ),
                        className: "block md:hidden",
                        quality: 80,
                      }),
                  ],
                }),
                j
                  ? (0, r.jsx)(s.Z, {
                      height: 160,
                      width: 109,
                      priority: !0,
                      alt: j.alternativeText,
                      src: (0, i.Z)(
                        null === (f = j.format) || void 0 === f
                          ? void 0
                          : null === (o = f.original) || void 0 === o
                          ? void 0
                          : o.url
                      ),
                      className: "hidden md:block",
                      quality: 80,
                    })
                  : (0, r.jsx)(s.Z, {
                      alt: "",
                      className: "hidden md:block w-6 h-[96px]",
                      priority: !0,
                      src: h,
                      height: 96,
                      width: 24,
                    }),
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className:
                    "block md:hidden w-6 h-[96px] rotate-90 md:rotate-0",
                  priority: !0,
                  src: h,
                  height: 96,
                  width: 24,
                }),
              ],
            }),
          })
        );
      };
    },
    2320: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(6797),
        s = l(5303),
        i = l(6014),
        n = l(4989),
        o = l(2265),
        c = l(2283),
        d = l(6164),
        u = l(6098),
        p = l.n(u),
        x = l(9582),
        m = l(6463),
        h = l(3004),
        f = l(2088),
        v = l(19),
        g = l(2814),
        w = l(6924);
      t.default = (e) => {
        let { heroProducts: t } = e,
          l = (0, o.useRef)(null),
          u = (0, o.useRef)(new Map()),
          b = (0, h.Z)((e) => e.setHeroSectionScrollProgress),
          j = (0, m.usePathname)(),
          y = (0, w.Z)();
        if (
          ((0, v.V)(() => {
            l.current &&
              Array.from(l.current.children).forEach((e) => {
                let t = e.querySelector(".productTitle"),
                  l = e.querySelector(".productSubTitle"),
                  r = e.querySelector(".productButton"),
                  a = e.querySelector(".productImage"),
                  s =
                    null == a
                      ? void 0
                      : a.querySelector("[data-lottie-animation]"),
                  i = new f.Z(t, { types: "words,chars" }),
                  n = new f.Z(l, { types: "lines" }),
                  o = i.chars,
                  c = n.lines;
                a &&
                  p().create({
                    trigger: e,
                    toggleActions: "play reverse play reverse",
                    start: "90% bottom",
                    pinnedContainer: g.Z,
                    end: "top 20%",
                    invalidateOnRefresh: !0,
                    once: !0,
                    onEnter: () => {
                      requestAnimationFrame(() => {
                        let e =
                          null == s
                            ? void 0
                            : s.getAttribute("data-lottie-ref");
                        if (e && u.current.has(e)) {
                          var a;
                          null === (a = u.current.get(e)) ||
                            void 0 === a ||
                            a.play();
                        }
                        t &&
                          x.ZP.fromTo(
                            o,
                            { y: 50, opacity: 0 },
                            {
                              y: 0,
                              opacity: 1,
                              stagger: 0.05,
                              duration: 0.4,
                              ease: "power1.out",
                              onStart: () => {
                                t.style.opacity = "1";
                              },
                            }
                          ),
                          l &&
                            x.ZP.fromTo(
                              c,
                              { y: 50, opacity: 0 },
                              {
                                y: 0,
                                opacity: 1,
                                stagger: 0.1,
                                duration: 1,
                                ease: "power1.out",
                                onStart: () => {
                                  l.style.opacity = "1";
                                },
                              }
                            ),
                          r &&
                            x.ZP.fromTo(
                              r,
                              { y: 100, opacity: 0 },
                              {
                                y: 0,
                                opacity: 1,
                                stagger: 0.05,
                                duration: 1,
                                ease: "power1.out",
                                onStart: () => {
                                  r.style.opacity = "1";
                                },
                              }
                            );
                      });
                    },
                  });
              });
          }, [l, y]),
          (0, v.V)(() => {
            p().create({
              trigger: l.current,
              start: "top bottom",
              end: "bottom bottom",
              invalidateOnRefresh: !0,
              pinSpacing: !1,
              pinnedContainer: g.Z,
              onUpdate: (e) => b(e.progress),
            });
          }, [l.current, j, b]),
          !t)
        )
          return null;
        let N = (e) => (t) => {
          t ? u.current.set(e, t) : u.current.delete(e);
        };
        return (0, r.jsx)("div", {
          ref: l,
          className:
            "px-4 md:px-20 lg:px-[160px] py-[56px] gap-y-20 flex flex-col",
          children: t.map((e, t) => {
            var l, o, u;
            let {
                id: p,
                title: x,
                subTitle: m,
                coverImage: h,
                button: f,
              } = e || {},
              v = t % 2 == 0,
              g = "lottie-".concat(p),
              w = N(g);
            return (0, r.jsxs)(
              "div",
              {
                className:
                  "flex flex-col-reverse w-full gap-y-6 md:flex-row gap-x-[1.7vw] items-center max-w-[1400px] mx-auto",
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, d.m6)(
                      "flex flex-col z-[1] flex-1 shrink-0 gap-y-8 items-center max-w-[600px] md:max-w-none md:items-start",
                      v && "md:order-2"
                    ),
                    children: [
                      x &&
                        (0, r.jsx)(a.Z, {
                          level: 2,
                          className:
                            "productTitle text-center md:text-left uppercase opacity-0",
                          children: x,
                        }),
                      (0, r.jsx)("p", {
                        className:
                          "productSubTitle text-lg lg:text-xl text-center md:text-left md:max-w-[600px] opacity-0",
                        children: m,
                      }),
                      f &&
                        (0, r.jsx)(c.Z, {
                          className: "productButton opacity-0",
                          coreColor: "Red",
                          "aria-label": f.label,
                          target:
                            null === (l = f.linkOptions) || void 0 === l
                              ? void 0
                              : l.target,
                          href: f.path,
                          children: f.label,
                        }),
                    ],
                  }),
                  h &&
                    (0, r.jsx)("div", {
                      className: (0, d.m6)(
                        "productImage relative w-full aspect-[1/1] flex-1",
                        v && "md:order-1"
                      ),
                      children: h.isJSON
                        ? (0, r.jsx)("div", {
                            "data-lottie-animation": !0,
                            "data-lottie-ref": g,
                            children: (0, r.jsx)(i.Z, {
                              ref: w,
                              animation: h,
                              loop: !1,
                              autoplay: !1,
                              style: {
                                position: "absolute",
                                width: "150%",
                                height: "150%",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                maxWidth: "none",
                              },
                            }),
                          })
                        : (0, r.jsx)(s.Z, {
                            fill: !0,
                            priority: !0,
                            alt: h.alternativeText,
                            src: (0, n.Z)(
                              null === (u = h.format) || void 0 === u
                                ? void 0
                                : null === (o = u.original) || void 0 === o
                                ? void 0
                                : o.url
                            ),
                            className:
                              "max-w-none !w-[150%] !h-[150%] !left-1/2 -translate-x-[50%] !top-1/2 -translate-y-[50%]",
                            quality: 80,
                          }),
                    }),
                ],
              },
              p
            );
          }),
        });
      };
    },
    6880: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(3004),
        i = l(6098),
        n = l.n(i),
        o = l(9582),
        c = l(6463),
        d = l(6164),
        u = l(4894),
        p = l.n(u),
        x = l(19),
        m = l(2814),
        h = l(138);
      t.default = (e) => {
        let { text: t } = e,
          l = (0, s.Z)((e) => e.setIntroSectionScrollProgress),
          i = !!(null == t ? void 0 : t.length),
          u = (0, a.useRef)(null),
          f = (0, a.useRef)(null),
          [v, g] = (0, a.useState)(0),
          w = (0, c.usePathname)();
        return (
          (0, h.D)(),
          (0, x.V)(() => {
            if (u.current && f.current) {
              let e = Array.from(f.current.children),
                t = 2e3 * e.length;
              g(t),
                e.forEach((e, t) => {
                  n().create({
                    trigger: e,
                    toggleActions: "play reverse play reverse",
                    start: "+=" + "".concat(2e3 * t, "px"),
                    end: "+=" + "".concat(2e3 - 2e3 / 3, "px"),
                    invalidateOnRefresh: !0,
                    onEnter: () => {
                      o.ZP.to(e, { opacity: 1 });
                    },
                    onLeave: () => {
                      o.ZP.to(e, { opacity: 0 });
                    },
                    onEnterBack: () => {
                      o.ZP.to(e, { opacity: 1 });
                    },
                    onLeaveBack: () => {
                      o.ZP.to(e, { opacity: 0 });
                    },
                  });
                }),
                n().create({
                  trigger: u.current,
                  pin: m.Z,
                  pinnedContainer: m.Z,
                  end: "+=" + "".concat(t - 2e3 / 3, "px"),
                  scrub: !0,
                  invalidateOnRefresh: !0,
                  pinSpacing: !0,
                  markers: !1,
                });
            }
          }, [u, f]),
          (0, x.V)(() => {
            u.current &&
              0 !== v &&
              n().create({
                trigger: u.current,
                start: "top bottom",
                end: "+=" + "".concat(v, "px"),
                invalidateOnRefresh: !0,
                pinnedContainer: m.Z,
                markers: !1,
                onUpdate: (e) => l(e.progress),
              });
          }, [u, w, l, v]),
          (0, r.jsx)("div", {
            className: "relative flex h-[100vh]",
            ref: u,
            children: (0, r.jsx)("div", {
              className: "relative grid items-center justify-center w-full",
              ref: f,
              children:
                i &&
                t.map((e) => {
                  let { title: t, id: l } = e || {};
                  return (0, r.jsx)(
                    "section",
                    {
                      className: (0, d.m6)(
                        "w-full md:w-1/2 h-[100dvh] opacity-0 absolute text-white grid py-8 px-4 md:px-10 text-xl lg:text-5xl font-bold place-content-end md:place-content-center odd:md:justify-self-end max-w-[800px] uppercase",
                        p().className
                      ),
                      children: t,
                    },
                    l
                  );
                }),
            }),
          })
        );
      };
    },
    4119: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(6797),
        i = l(6164),
        n = l(8601),
        o = (e) => {
          let { title: t, text: l, isOpen: a = !1, onToggle: s } = e;
          return (0, r.jsxs)("div", {
            className: (0, i.m6)(
              "hover:bg-[#ffffff10] w-full flex flex-col items-end relative group py-2 px-2 z-0",
              a && "bg-[#ffffff10]",
              !l && "cursor-default"
            ),
            children: [
              (0, r.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none z-0",
                children: [
                  (0, r.jsx)("div", {
                    className: (0, i.m6)(
                      "absolute top-0 left-0 w-2 h-2 border-l border-t border-white transition-all ease-in-out",
                      a
                        ? "top-[4px] left-[4px]"
                        : "group-hover:top-[4px] group-hover:left-[4px]"
                    ),
                    style: { transitionDuration: "".concat(600, "ms") },
                  }),
                  (0, r.jsx)("div", {
                    className: (0, i.m6)(
                      "absolute top-0 right-0 w-2 h-2 border-r border-t border-white transition-all ease-in-out",
                      a
                        ? "top-[4px] right-[4px]"
                        : "group-hover:top-[4px] group-hover:right-[4px]"
                    ),
                    style: { transitionDuration: "".concat(600, "ms") },
                  }),
                  (0, r.jsx)("div", {
                    className: (0, i.m6)(
                      "absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white transition-all ease-in-out",
                      a
                        ? "bottom-[4px] left-[4px]"
                        : "group-hover:bottom-[4px] group-hover:left-[4px]"
                    ),
                    style: { transitionDuration: "".concat(600, "ms") },
                  }),
                  (0, r.jsx)("div", {
                    className: (0, i.m6)(
                      "absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white transition-all ease-in-out",
                      a
                        ? "bottom-[4px] right-[4px]"
                        : "group-hover:bottom-[4px] group-hover:right-[4px]"
                    ),
                    style: { transitionDuration: "".concat(600, "ms") },
                  }),
                ],
              }),
              (0, r.jsx)("button", {
                onClick: () => {
                  l && s && s();
                },
                className: (0, i.m6)(
                  "relative pb-6 transition-all ease-out w-full text-left px-4 py-4 z-20",
                  !l && "cursor-default"
                ),
                style: { transitionDuration: "".concat(600, "ms") },
                children: (0, r.jsx)("div", {
                  className: "text-xl text-left font-medium text-white pr-6",
                  children: (0, r.jsx)("span", {
                    className: (0, i.m6)(a && "font-semibold"),
                    children: t,
                  }),
                }),
              }),
              l &&
                (0, r.jsx)("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0, i.m6)(
                    "absolute right-[10px] top-8 -translate-y-1/2 right-4 text-[#FF07FE] transition-transform duration-[".concat(
                      600,
                      "ms] z-30"
                    ),
                    a ? "rotate-0" : "rotate-180"
                  ),
                  style: {
                    transformBox: "view-box",
                    transformOrigin: "50% 50%",
                  },
                  children: (0, r.jsx)("path", {
                    d: "M7 3L3 11L11 11L7 3Z",
                    fill: "currentColor",
                  }),
                }),
              (0, r.jsx)("div", {
                className: (0, i.m6)(
                  "scrollbar-hide relative px-4 flex flex-col gap-y-4 overflow-y-auto transform transition-all w-full text-left [&>div>ul]:list-inside [&>div>ul]:list-disc [&>div>ul]:text-left z-20",
                  a ? "max-h-[1000px] pb-8" : "max-h-0 overflow-hidden"
                ),
                style: { transitionDuration: "".concat(600, "ms") },
                children:
                  l &&
                  (0, r.jsx)("div", {
                    className:
                      "text-white text-lg lg:text-xl [&>p]:mb-3 [&>p]:last:mb-0 [&>p]:text-left [&>h1]:text-left [&>h2]:text-left [&>h3]:text-left [&>h4]:text-left [&>h5]:text-left [&>h6]:text-left",
                    children: (0, n.ZP)(l),
                  }),
              }),
            ],
          });
        },
        c = l(5303),
        d = l(4989),
        u = l(2283),
        p = l(9123);
      let x = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cases-decoration.svg"
      );
      var m = (e) => {
        var t, l, n, m, h, f, v;
        let {
            title: g,
            subline: w,
            titleTag: b = "h2",
            titleStyle: j,
            bookmarkId: y,
            image: N,
            accordion: k,
            infoSplitButton: Z,
          } = e,
          L = b ? Number(b.replace("h", "")) : 2,
          [S, P] = (0, a.useState)(null),
          E = (0, p.Z)((e) => e.setIsGlobalLoaderVisible);
        (0, a.useLayoutEffect)(() => {
          if (!k || 0 === k.length) return;
          let e = new URLSearchParams(window.location.search).get(
            "addon-bookmark"
          );
          if (e) {
            let t = k.findIndex((t) => t.bookmarkId === e);
            if (-1 !== t) {
              P(t);
              return;
            }
          }
          let t = window.location.hash.replace("#", "");
          if (t) {
            let e = k.findIndex((e) => e.bookmarkId === t);
            -1 !== e && P(e);
          }
        }, [k]),
          (0, a.useLayoutEffect)(() => {
            window.location.hash.replace("#", "") && E(!1);
          }, [E]),
          (0, a.useEffect)(() => {
            let e = () => {
              window.location.hash.replace("#", "") && E(!1);
            };
            e();
            let t = () => {
              E(!1), e();
              let t = setInterval(() => {
                E(!1);
              }, 50);
              setTimeout(() => {
                clearInterval(t);
              }, 1e3);
            };
            window.addEventListener("hashchange", t);
            let l = setInterval(e, 100);
            return () => {
              window.removeEventListener("hashchange", t), clearInterval(l);
            };
          }, [E]),
          (0, a.useEffect)(() => {
            let e = (e) => {
              var t;
              let l =
                null === (t = e.detail) || void 0 === t
                  ? void 0
                  : t.addonBookmark;
              if (null == l) {
                P(null);
                return;
              }
              if (!(null == k ? void 0 : k.length)) return;
              let r = k.findIndex((e) => e.bookmarkId === l);
              if (-1 === r) return;
              P(r), E(!1);
              let a = document.getElementById("addons-group");
              a &&
                a.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
            };
            return (
              window.addEventListener("addon-bookmark-change", e),
              () => window.removeEventListener("addon-bookmark-change", e)
            );
          }, [k, E]),
          (0, a.useEffect)(() => {
            let e = window.location.hash,
              t = function () {
                let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if (!k || 0 === k.length) return;
                let t = new URLSearchParams(window.location.search).get(
                    "addon-bookmark"
                  ),
                  l = null;
                if ((t && k.some((e) => e.bookmarkId === t) && (l = t), !l)) {
                  let e = window.location.hash.replace("#", "");
                  e && k.some((t) => t.bookmarkId === e) && (l = e);
                }
                if (!l) return;
                let r = k.findIndex((e) => e.bookmarkId === l);
                -1 !== r &&
                  (P(r),
                  E(!1),
                  setTimeout(() => {
                    E(!1);
                    let t = document.getElementById("addons-group");
                    t &&
                      (t.scrollIntoView({
                        behavior: e ? "auto" : "smooth",
                        block: "start",
                        inline: "nearest",
                      }),
                      setTimeout(() => {
                        E(!1);
                      }, 50));
                  }, 100));
              };
            t(!0);
            let l = () => {
                E(!1), t(!1), (e = window.location.hash);
              },
              r = (e) => {
                let l = e.target.closest('a[href^="#"]');
                if (l) {
                  let e = l.getAttribute("href");
                  if (e) {
                    let l = e.replace("#", "");
                    (null == k ? void 0 : k.some((e) => e.bookmarkId === l)) &&
                      (E(!1),
                      setTimeout(() => {
                        E(!1), t(!1);
                      }, 50));
                  }
                }
              },
              a = setInterval(() => {
                let l = window.location.hash;
                l !== e && ((e = l), l && E(!1), t(!1));
              }, 100);
            return (
              window.addEventListener("hashchange", l),
              document.addEventListener("click", r),
              () => {
                window.removeEventListener("hashchange", l),
                  document.removeEventListener("click", r),
                  clearInterval(a);
              }
            );
          }, [k, E]);
        let C = (e) => {
          if (S === e) {
            P(null);
            return;
          }
          if (null !== S && S !== e) {
            P(null),
              setTimeout(() => {
                P(e);
              }, 400);
            return;
          }
          P(e);
        };
        return (0, r.jsxs)("div", {
          id: y,
          className:
            "scroll-mt-[90px] relative z-10 flex bg-[#000000] flex-col md:flex-row md:items-stretch w-full",
          children: [
            (0, r.jsx)("div", {
              className:
                "flex flex-col w-full md:w-1/2 bg-[#000000] p-8 md:p-16 xl:p-32",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full max-w-[960px] m-auto flex flex-col gap-y-8 md:gap-y-12 min-h-[50vh] md:min-h-[68vh]",
                children: [
                  (0, r.jsx)("div", {
                    className: "mb-[-1.5rem]",
                    children: (0, r.jsx)(c.Z, {
                      alt: "",
                      priority: !0,
                      className: "w-max h-[24px]",
                      src: x,
                      height: 24,
                      width: 76,
                    }),
                  }),
                  (g || w) &&
                    (0, r.jsxs)("div", {
                      className: "flex flex-col gap-8",
                      children: [
                        g &&
                          (0, r.jsx)(s.Z, {
                            level: L,
                            className: (0, i.m6)("uppercase", j),
                            children: g,
                          }),
                        w &&
                          (0, r.jsx)("p", {
                            className: "text-white text-lg lg:text-xl",
                            children: w,
                          }),
                      ],
                    }),
                  k &&
                    k.length > 0 &&
                    (0, r.jsx)("div", {
                      id: "addons-group",
                      className:
                        "flex flex-col w-full gap-6  scroll-mt-[100px]",
                      children: k.map((e, t) =>
                        e.title
                          ? (0, r.jsx)(
                              "div",
                              {
                                id: e.bookmarkId || void 0,
                                className: "relative",
                                children: (0, r.jsx)(o, {
                                  title: e.title,
                                  text: e.text,
                                  isOpen: S === t,
                                  onToggle: () => C(t),
                                }),
                              },
                              e.id || t
                            )
                          : null
                      ),
                    }),
                  Z &&
                    (0, r.jsx)(u.Z, {
                      coreColor: "Red",
                      "aria-label": Z.label,
                      target:
                        null === (t = Z.linkOptions) || void 0 === t
                          ? void 0
                          : t.target,
                      href: Z.path,
                      children: Z.label,
                    }),
                ],
              }),
            }),
            N &&
              (0, r.jsx)("div", {
                className:
                  "w-full md:w-1/2 overflow-hidden relative aspect-square md:[aspect-ratio:unset] md:self-stretch md:flex-shrink-0 bg-cover bg-no-repeat bg-top md:bg-center md:bg-left",
                style: {
                  backgroundImage: "url(/images/infosplit-background.webp)",
                },
                children: (0, r.jsx)(c.Z, {
                  alt: "",
                  priority: !0,
                  className:
                    "absolute top-0 left-0 w-full h-full object-contain",
                  src: (0, d.Z)(
                    null === (n = N.format) || void 0 === n
                      ? void 0
                      : null === (l = n.original) || void 0 === l
                      ? void 0
                      : l.url
                  ),
                  height:
                    null === (h = N.format) || void 0 === h
                      ? void 0
                      : null === (m = h.original) || void 0 === m
                      ? void 0
                      : m.height,
                  width:
                    null === (v = N.format) || void 0 === v
                      ? void 0
                      : null === (f = v.original) || void 0 === f
                      ? void 0
                      : f.width,
                }),
              }),
          ],
        });
      };
    },
    2460: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(6797),
        i = l(2283),
        n = l(921),
        o = l(4989),
        c = l(5303),
        d = l(8601),
        u = l(6164),
        p = l(4894),
        x = l.n(p),
        m = l(3310),
        h = l(2336),
        f = l(2587),
        v = l(7239),
        g = l(6987);
      let w = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        b = "".concat(w, "/circles.svg"),
        j = "".concat(w, "/overlay-video-frame-portrait.png"),
        y = "".concat(w, "/overlay-video-frame.png");
      t.default = (e) => {
        var t, l, p, w;
        let {
            subline: N,
            headline: k,
            titleTag: Z,
            titleStyle: L,
            text: S,
            buttons: P,
            source: E,
            partnerMarquee: C,
          } = e,
          T = (0, a.useRef)(null),
          {
            isOpened: _,
            openModal: q,
            closeModal: R,
            modalContent: I,
          } = (0, h.Z)(),
          { partnerSet: z } = C || {},
          M = (null == E ? void 0 : E.format) || "Bild",
          A = null == E ? void 0 : E.file,
          O = null == E ? void 0 : E.teaserFile,
          B = null == E ? void 0 : E.videoTitle,
          F = Z ? Number(Z.replace("h", "")) : 1,
          V = "Bild" !== M && (null == A ? void 0 : A.isVideo),
          H = !V && ("Bild" === M || (A && !A.isVideo)),
          D =
            null == A
              ? void 0
              : null === (l = A.format) || void 0 === l
              ? void 0
              : null === (t = l.original) || void 0 === t
              ? void 0
              : t.url,
          W =
            null == O
              ? void 0
              : null === (w = O.format) || void 0 === w
              ? void 0
              : null === (p = w.original) || void 0 === p
              ? void 0
              : p.url,
          U = !!((null == O ? void 0 : O.isVideo) && W),
          X = "Video 9:16" === M;
        return (0, r.jsxs)("div", {
          ref: T,
          className: (0, u.m6)(
            "relative w-full flex flex-col md:flex-row gap-y-12 md:gap-y-0 pt-[120px] md:pt-0 md:items-center md:justify-between overflow-visible",
            A && "md:h-[100svh]"
          ),
          style: {
            backgroundColor: "#110E2A",
            backgroundImage: "url(/images/heroBackground-blue.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          },
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0 pointer-events-none z-0",
            }),
            (0, r.jsxs)("div", {
              className: (0, u.m6)(
                (0, u.m6)(
                  "headerContent flex flex-col md:justify-center items-left mx-4 lg:ml-10 z-[1]",
                  V ? "w-auto md:w-[50%]" : "w-auto md:w-[65%]"
                )
              ),
              children: [
                N &&
                  (0, r.jsxs)("div", {
                    className: "flex gap-x-4 items-center mb-8",
                    children: [
                      (0, r.jsx)(c.Z, {
                        alt: "",
                        src: b,
                        height: 24,
                        width: 24,
                      }),
                      (0, r.jsx)(s.Z, {
                        level: 0,
                        className: "text-pink-900 uppercase",
                        children: N,
                      }),
                    ],
                  }),
                k &&
                  (0, r.jsx)(s.Z, {
                    level: F,
                    className: (0, u.m6)(
                      "uppercase text-4xl lg:text-7xl mb-8  [@media(max-width:1440px)]:max-w-[680px]  [@media(max-width:1600px)]:max-w-[800px] xl:max-w-[920px]",
                      L
                    ),
                    children: k,
                  }),
                S &&
                  (0, r.jsx)("p", {
                    className:
                      "text-xl lg:text-2xl max-w-[80%]  [@media(max-width:1600px)]:max-w-[500px] xl:max-w-[500px] mb-8 md:mb-8",
                    children: (0, d.ZP)(S),
                  }),
                P &&
                  P.length > 0 &&
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-row flex-wrap gap-8 md:gap-12 items-center",
                    children: P.filter((e) => {
                      let t = null == e ? void 0 : e.path;
                      return t && "string" == typeof t && t.trim().length > 0;
                    }).map((e, t) => {
                      var l, a, s;
                      let o = null == e ? void 0 : e.path;
                      if (!o || "string" != typeof o || 0 === o.trim().length)
                        return null;
                      let c = o.trim();
                      return 0 === t
                        ? (0, r.jsx)(
                            i.Z,
                            {
                              coreColor: "Orange",
                              isBig: !0,
                              "aria-label": e.label,
                              target:
                                null === (s = e.linkOptions) || void 0 === s
                                  ? void 0
                                  : s.target,
                              href: c,
                              children: e.label,
                            },
                            e.id
                          )
                        : (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "relative group hover:bg-[#ffffff40] transition-all duration-300 ease-out",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 w-2 h-2 border-l border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:left-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 w-2 h-2 border-r border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:right-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:left-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:right-[4px]",
                                }),
                                (0, r.jsx)(n.Z, {
                                  href: c,
                                  target:
                                    null === (l = e.linkOptions) || void 0 === l
                                      ? void 0
                                      : l.target,
                                  className:
                                    "flex items-center justify-center gap-3 text-white py-[10px] md:py-[14px] px-[16px]",
                                  "aria-label": e.label,
                                  children: (0, r.jsx)("span", {
                                    className: (0, u.m6)(
                                      "text-[14px] md:text-[16px] font-bold uppercase",
                                      x().className
                                    ),
                                    children:
                                      null === (a = e.label) || void 0 === a
                                        ? void 0
                                        : a.toUpperCase(),
                                  }),
                                }),
                              ],
                            },
                            e.id
                          );
                    }),
                  }),
              ],
            }),
            A &&
              D &&
              (0, r.jsx)(r.Fragment, {
                children: V
                  ? (0, r.jsxs)("div", {
                      className: (0, u.m6)(
                        "relative md:relative mb-32 md:mb-0 z-[1] shrink-0 mx-4",
                        X
                          ? "w-[calc(100%-2rem)] max-w-[65%] md:w-auto mx-auto [@media(min-width:944px)]:max-w-[405px] [@media(min-width:1440px)]:!max-w-[405px] [@media(min-width:944px)_and_(min-height:715px)_and_(max-height:800px)]:!max-w-[280px]"
                          : "Video 16:9" === M
                          ? "w-[calc(100%-2rem)] md:w-[50%] md:ml-auto md:mr-[40px] lg:mr-[40px] md:max-w-[890px]"
                          : "w-[calc(100%-2rem)] md:w-[50%] md:ml-auto md:mr-[40px] lg:mr-[40px]"
                      ),
                      children: [
                        B &&
                          B.trim() &&
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                              (0, r.jsx)("div", {
                                className: "w-[9px] h-[9px] bg-white",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "text-white text-[12px] font-bold uppercase",
                                children: ["[", B, "]"],
                              }),
                            ],
                          }),
                        (0, r.jsxs)("div", {
                          className: (0, u.m6)(
                            "relative shrink-0 w-full p-[20px] md:p-[40px]",
                            "Video 16:9" === M && " aspect-[19/6]",
                            "Video 9:16" === M &&
                              " flex items-center justify-center"
                          ),
                          children: [
                            (0, r.jsx)(c.Z, {
                              className:
                                "absolute object-fill w-full h-auto pointer-events-none",
                              alt: "Video Container",
                              src: X ? j : y,
                              fill: !0,
                              sizes:
                                "Video 9:16" === M
                                  ? "(max-width: 768px) 100vw, 400px"
                                  : "(max-width: 768px) 100vw, 50vw",
                            }),
                            U
                              ? (0, r.jsx)("video", {
                                  onClick: () =>
                                    q(
                                      (0, r.jsx)(f.Z, {
                                        mediaUrl: (0, o.Z)(D),
                                        autoPlay: !0,
                                      })
                                    ),
                                  className:
                                    "relative z-[1] w-full h-auto object-cover cursor-pointer",
                                  src: (0, o.Z)(W),
                                  controls: !1,
                                  autoPlay: !0,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                })
                              : W
                              ? (0, r.jsx)(c.Z, {
                                  src: (0, o.Z)(W),
                                  alt: B || "Video teaser",
                                  className:
                                    "relative z-[1] w-full h-auto object-cover cursor-pointer",
                                  onClick: () =>
                                    q(
                                      (0, r.jsx)(f.Z, {
                                        mediaUrl: (0, o.Z)(D),
                                        autoPlay: !0,
                                      })
                                    ),
                                  fill: !0,
                                  sizes: "(max-width: 768px) 100vw, 50vw",
                                })
                              : (0, r.jsx)("div", {
                                  onClick: () =>
                                    q(
                                      (0, r.jsx)(f.Z, {
                                        mediaUrl: (0, o.Z)(D),
                                        autoPlay: !0,
                                      })
                                    ),
                                  className: (0, u.m6)(
                                    "relative z-[1] w-full flex items-center justify-center cursor-pointer bg-[#1a1a2e] min-h-[160px]",
                                    "Video 16:9" === M && "aspect-[19/6]",
                                    X && "aspect-[9/16] max-w-[280px] mx-auto"
                                  ),
                                  children: (0, r.jsx)(v.Z, {}),
                                }),
                            W &&
                              (0, r.jsx)("div", {
                                onClick: () =>
                                  q(
                                    (0, r.jsx)(f.Z, {
                                      mediaUrl: (0, o.Z)(D),
                                      autoPlay: !0,
                                    })
                                  ),
                                className:
                                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer",
                                children: (0, r.jsx)(v.Z, {}),
                              }),
                          ],
                        }),
                      ],
                    })
                  : H
                  ? (0, r.jsx)("div", {
                      className: (0, u.m6)(
                        "relative shrink-0 w-full aspect-square md:absolute md:bottom-0 md:right-0  md:w-[48%] md:h-[100vh] md:aspect-auto mb-0 z-[1] overflow-hidden",
                        "xl:w-[48%]"
                      ),
                      children: (0, r.jsx)(c.Z, {
                        fill: !0,
                        priority: !0,
                        alt: A.alternativeText || k || "Media Hero",
                        src: (0, o.Z)(D),
                        className:
                          "object-cover object-top md:object-left-bottom",
                        quality: 80,
                      }),
                    })
                  : null,
              }),
            (0, r.jsx)(g.default, { partnerSet: z }),
            (0, r.jsx)(m.Z, { isOpened: _, onClose: R, children: I }),
          ],
        });
      };
    },
    567: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(7694),
        i = l(2336),
        n = l(4161),
        o = l(3310),
        c = l(6098),
        d = l.n(c),
        u = l(2088),
        p = l(9582),
        x = l(19),
        m = l(2814),
        h = l(4894),
        f = l.n(h),
        v = l(2283),
        g = l(5303),
        w = l(6797),
        b = l(6164);
      let j = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        y = "".concat(j, "/logo-allianz.svg"),
        N = "".concat(j, "/cross.svg");
      var k = (e) => {
          var t;
          let {
              id: l,
              title: s,
              from: i,
              price: n,
              topLine: o,
              button: c,
              packageList: d,
              isHighlighted: u,
              isSingleMode: p,
              highlightText: x,
              portalIdPrefix: m = "",
            } = e,
            h = "package-portal-"
              .concat(m)
              .concat(m ? "-" : "")
              .concat(l);
          return (0, r.jsx)(a.Fragment, {
            children: (0, r.jsxs)("div", {
              className: (0, b.m6)(
                "package relative singlePackage max-w-[90vw] md:max-w-[90vw] flex flex-col bg-[#331D9F] itmes-center justify-start drop-shadow-3xl",
                !p && "md:w-[50%]",
                u && "package-highlighted"
              ),
              children: [
                !p &&
                  u &&
                  (0, r.jsx)("div", {
                    className:
                      "absolute flex items-center px-4 bg-[#00FFFE] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 text-sm text-black text-center uppercase font-semibold",
                    children: x || "unsere Empfehlung",
                  }),
                (0, r.jsxs)("div", {
                  className: (0, b.m6)(
                    "relative flex flex-col w-full justify-center items-center z-[1] gap-4 px-4 md:px-0 py-[56px]"
                  ),
                  children: [
                    o &&
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)("span", {
                            className: (0, b.m6)(
                              "packageTopLine clip text-sm text-base font-bold",
                              f().className
                            ),
                            children: "by",
                          }),
                          (0, r.jsx)("span", {
                            className: "relative h-[20px] w-[80px] ml-2",
                            children: (0, r.jsx)(g.Z, {
                              src: y,
                              alt: s,
                              fill: !0,
                            }),
                          }),
                        ],
                      }),
                    s &&
                      (0, r.jsx)(w.Z, {
                        level: 2,
                        className:
                          "packageTitle h1 uppercase text-center px-6 lg:text-[56px]",
                        children: s,
                      }),
                    i &&
                      n &&
                      (0, r.jsxs)("p", {
                        className:
                          "packageSubTitle clip text-xl lg:text-2xl font-medium",
                        children: [
                          "".concat(i),
                          " ",
                          (0, r.jsx)("em", {
                            className: "font-bold not-italic",
                            children: n,
                          }),
                        ],
                      }),
                    (0, r.jsx)("div", {
                      className: "absolute top-0 left-0 w-full h-full p-[32px]",
                      children: (0, r.jsxs)("div", {
                        className: "relative w-full h-full",
                        children: [
                          (0, r.jsx)(g.Z, {
                            priority: !0,
                            alt: "",
                            className: "absolute top-0 left-0",
                            src: N,
                            height: 16,
                            width: 16,
                          }),
                          (0, r.jsx)(g.Z, {
                            priority: !0,
                            alt: "",
                            className: "absolute top-0 right-0",
                            src: N,
                            height: 16,
                            width: 16,
                          }),
                          (0, r.jsx)(g.Z, {
                            priority: !0,
                            alt: "",
                            className: "absolute bottom-0 right-0",
                            src: N,
                            height: 16,
                            width: 16,
                          }),
                          (0, r.jsx)(g.Z, {
                            priority: !0,
                            alt: "",
                            className: "absolute bottom-0 left-0",
                            src: N,
                            height: 16,
                            width: 16,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: (0, b.m6)(
                    "px-4 [@media(min-width:768px)]:px-8 relative overflow-hidden",
                    p && "flex flex-col md:grid md:grid-cols-2 max-w-[1440px] "
                  ),
                  children: [
                    d &&
                      d.length > 6 &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute left-0 right-0 pointer-events-none z-[2] md:hidden",
                        style: {
                          top: "300px",
                          bottom: 0,
                          background: u
                            ? "linear-gradient(to bottom, rgba(164, 62, 227, 0) 0%, rgba(164, 62, 227, 0.5) 30%, #A43EE3 100%)"
                            : "linear-gradient(to bottom, rgba(51, 29, 159, 0) 0%, rgba(51, 29, 159, 0.5) 30%, #331D9F 100%)",
                        },
                      }),
                    d &&
                      d.length > 6 &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-[160px] pointer-events-none z-[2] hidden md:block",
                        style: {
                          background: u
                            ? "linear-gradient(to bottom, rgba(164, 62, 227, 0) 0%, rgba(164, 62, 227, 0.5) 50%, #A43EE3 100%)"
                            : "linear-gradient(to bottom, rgba(51, 29, 159, 0) 0%, rgba(51, 29, 159, 0.5) 50%, #331D9F 100%)",
                        },
                      }),
                    (null == d ? void 0 : d.length) &&
                      d.map((e, t) => {
                        let l = t % 2 == 0,
                          a = p ? Math.floor(t / 2) % 2 == 0 : t % 2 == 0;
                        return (0, r.jsxs)(
                          "div",
                          {
                            style: { gridRowStart: p ? "auto" : t + 2 },
                            className: (0, b.m6)(
                              "packageListItem flex gap-4 items-center py-2 px-4 w-full h-auto z-[1]",
                              t >= 5 && "hidden md:flex",
                              t >= 8 && "md:hidden",
                              u && "md:col-start-2",
                              p && "md:col-start-auto",
                              p && t <= 1 && "md:border-t-0",
                              !e.title && "block border-t-0 ",
                              l && "bg-black/15",
                              p &&
                                l !== a &&
                                (a ? "md:bg-black/15" : "md:bg-transparent")
                            ),
                            children: [
                              e.title &&
                                (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 14",
                                  fill: "none",
                                  className: "flex-shrink-0 w-4 h-[14px]",
                                  children: (0, r.jsx)("path", {
                                    d: "M10.6563 0.304054L6.91195 9.69256L5.28527 4.74493C5.21966 4.54504 5.04006 4.41103 4.8384 4.41103H0.473501C0.0879355 4.41103 -0.13523 4.86824 0.0900864 5.19538L5.41381 12.9206C5.53856 13.174 5.78805 13.3333 6.06016 13.3333H7.78149C8.05467 13.3333 8.30528 13.1728 8.42949 12.9178L15.9235 0.763511C16.1268 0.434122 15.901 0 15.5267 0H11.0924C10.9015 0 10.73 0.119932 10.6563 0.304054Z",
                                    fill: "white",
                                  }),
                                }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-[18px] font-medium break-words md:break-normal",
                                dangerouslySetInnerHTML: { __html: e.title },
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                  ],
                }),
                (0, r.jsx)("div", { id: h }),
                c &&
                  (0, r.jsx)("div", {
                    className: (0, b.m6)(
                      "flex packageButton w-full pt-8 mx-auto px-4 justify-center mt-auto relative z-20"
                    ),
                    children: (0, r.jsx)(v.Z, {
                      coreColor: "Orange",
                      "aria-label": c.label,
                      target:
                        null === (t = c.linkOptions) || void 0 === t
                          ? void 0
                          : t.target,
                      href: c.path,
                      className: "w-full md:w-auto",
                      isBig: !0,
                      children: c.label,
                    }),
                  }),
                o &&
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-col items-center justify-center w-full place-self-end bg-black/15 p-12  -mt-[30px] relative z-10",
                    children: (0, r.jsx)("p", {
                      className: (0, b.m6)("text-center uppercase text-sm"),
                      children: o,
                    }),
                  }),
              ],
            }),
          });
        },
        Z = l(4300),
        L = l(4398),
        S = l(8562),
        P = l(4887),
        E = l(8601),
        C = l(921),
        T = (e) => {
          var t;
          let { addonItem: l, addonsLink: a } = e;
          if (!(null == l ? void 0 : l.length)) return null;
          let i = (e) => {
            let t = e.currentTarget.getAttribute("data-bookmark");
            if (t) {
              (t = t.startsWith("#") ? t.slice(1) : t), e.preventDefault();
              let l = new URL(window.location.href);
              l.searchParams.set("addon-bookmark", t),
                (l.hash = "addons-group"),
                window.history.replaceState(
                  null,
                  "",
                  l.pathname + l.search + l.hash
                ),
                window.dispatchEvent(
                  new CustomEvent("addon-bookmark-change", {
                    detail: { addonBookmark: t },
                  })
                );
            }
          };
          return (0, r.jsx)("div", {
            className: "w-full md:max-w-[1920px]",
            children: (0, r.jsx)("div", {
              className: "relative w-full addons-module-gradient",
              children: (0, r.jsx)("div", {
                className: "relative px-6  md:px-8 py-8",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col gap-y-6 md:gap-y-8 justify-between md:flex-1",
                      children: [
                        (0, r.jsx)("p", {
                          className: (0, b.m6)(
                            '[&_a_p]:border-b [&_a_p]:border-white [&_a_p]:border-opacity-100 [&_button:hover_p]:border-opacity-0 [&_a_p]:transition-all [&_a_p]:inline-blocktext-white text-sm uppercase leading-tight before:content-[""] before:inline-block before:w-[9px] before:h-[9px] before:bg-white before:mr-2'
                          ),
                          children: "[Zubuchbare Add-Ons]",
                        }),
                        (null == a ? void 0 : a.path) &&
                          (0, r.jsx)(s.Z, {
                            isLinkView: !0,
                            href: a.path,
                            target:
                              null === (t = a.linkOptions) || void 0 === t
                                ? void 0
                                : t.target,
                            ariaLabel: a.label,
                            onClick: () => {
                              let e = new URL(window.location.href);
                              e.searchParams.delete("addon-bookmark"),
                                window.history.replaceState(
                                  null,
                                  "",
                                  e.pathname + e.search + e.hash
                                ),
                                window.dispatchEvent(
                                  new CustomEvent("addon-bookmark-change", {
                                    detail: { addonBookmark: null },
                                  })
                                );
                            },
                            className: (0, b.m6)(
                              "text-white mb-2 text-sm md:text-base uppercase mt-auto overflow-hidden flex flex-col items-center [&_a]:!pb-0 [&_a_p]:!pb-2 w-fit font-semibold"
                            ),
                            children: a.label,
                          }),
                      ],
                    }),
                    l.map((e, t) => {
                      let {
                          id: l,
                          title: a,
                          titleStyle: s,
                          path: n,
                          label: o,
                          linkOptions: c,
                        } = e || {},
                        d = "#addons-group",
                        u = null == c ? void 0 : c.target;
                      return (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "relative md:min-h-[200px] md:flex-1 group hover:bg-[#ffffff40] transition-all duration-300 ease-out",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "absolute inset-0 pointer-events-none",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 w-2 h-2 border-l border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:left-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 w-2 h-2 border-r border-t border-white transition-all ease-in-out duration-200 group-hover:top-[4px] group-hover:right-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:left-[4px]",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white transition-all ease-in-out duration-200 group-hover:bottom-[4px] group-hover:right-[4px]",
                                }),
                              ],
                            }),
                            d && d.trim()
                              ? (0, r.jsxs)(C.Z, {
                                  "data-bookmark": n,
                                  href: d,
                                  target: u,
                                  onClick: i,
                                  className:
                                    "flex flex-col gap-y-4 p-8 h-full uppercase",
                                  children: [
                                    a &&
                                      (0, r.jsx)("div", {
                                        className: (0, b.m6)(
                                          "text-white text-[18px] uppercase leading-tight [&_span]:font-semibold",
                                          s
                                        ),
                                        children: (0, E.ZP)(a),
                                      }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-white text-sm md:text-base uppercase mt-auto font-bold",
                                      children: (0, E.ZP)(o || "Mehr erfahren"),
                                    }),
                                  ],
                                })
                              : (0, r.jsx)("div", {
                                  className:
                                    "flex flex-col gap-y-4 p-8 h-full uppercase",
                                  children:
                                    a &&
                                    (0, r.jsx)("p", {
                                      className: (0, b.m6)(
                                        "text-white text-[18px] uppercase leading-tight [&_span]:font-semibold",
                                        s
                                      ),
                                      children: (0, E.ZP)(a),
                                    }),
                                }),
                          ],
                        },
                        l || t
                      );
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        _ = (e) => {
          var t;
          let { button: l, packages: c, pageTitle: h, addons: f } = e,
            v = (0, a.useRef)(null),
            {
              isOpened: g,
              openModal: w,
              closeModal: j,
              modalContent: y,
            } = (0, i.Z)(),
            [N, E] = (0, Z.Z)({ loop: !0 }),
            C = null == c ? void 0 : c.map((e) => e.slug),
            [_, q] = (0, a.useState)(!1),
            [R, I] = (0, a.useState)(!1);
          if (
            ((0, a.useEffect)(() => {
              q(!0), I(L.tq);
            }, []),
            (0, x.V)(() => {
              if (v.current) {
                var e;
                let t = [...v.current.querySelectorAll(".package")],
                  l =
                    null == v
                      ? void 0
                      : null === (e = v.current) || void 0 === e
                      ? void 0
                      : e.querySelector(".packagesButton");
                d().create({
                  trigger: v.current,
                  toggleActions: "play reverse play reverse",
                  start: "15% bottom",
                  pinnedContainer: m.Z,
                  invalidateOnRefresh: !0,
                  once: !0,
                  onEnter: () => {
                    l &&
                      p.ZP.fromTo(
                        l,
                        { width: 0 },
                        {
                          width: l.offsetWidth,
                          delay: 1,
                          duration: 3,
                          ease: "power4.out",
                        }
                      );
                  },
                }),
                  t.map((e) => {
                    let t = e.querySelectorAll(".packageTopLine"),
                      l = e.querySelector(".packageTitle"),
                      r = e.querySelectorAll(".packageSubTitle"),
                      a = e.querySelectorAll(".packageListItem"),
                      s = e.querySelector(".packageButton"),
                      i = new u.Z(t, { types: "lines" }),
                      n = new u.Z(l, { types: "words,chars" }),
                      o = new u.Z(r, { types: "lines" }),
                      c = i.lines,
                      x = n.chars,
                      h = o.lines;
                    return d().create({
                      trigger: v.current,
                      toggleActions: "play reverse play reverse",
                      start: "15% bottom",
                      pinnedContainer: m.Z,
                      invalidateOnRefresh: !0,
                      once: !0,
                      onEnter: () => {
                        t &&
                          p.ZP.fromTo(
                            c,
                            { y: 50, opacity: 0 },
                            {
                              y: 0,
                              opacity: 1,
                              stagger: 0.1,
                              duration: 1,
                              ease: "power1.out",
                            }
                          ),
                          l &&
                            p.ZP.fromTo(
                              x,
                              { y: 100 },
                              {
                                y: 0,
                                stagger: 0.1,
                                duration: 2,
                                ease: "power4.out",
                                onStart: () => {
                                  l.style.overflow = "hidden";
                                },
                                onComplete: () => {
                                  l.style.overflow = "visible";
                                },
                              }
                            ),
                          r &&
                            p.ZP.fromTo(
                              h,
                              { y: 50, opacity: 0 },
                              {
                                y: 0,
                                opacity: 1,
                                stagger: 0.1,
                                duration: 1,
                                ease: "power1.out",
                              }
                            ),
                          a &&
                            a.forEach((e) => {
                              p.ZP.fromTo(
                                e,
                                { y: 50, opacity: 0 },
                                {
                                  y: 0,
                                  opacity: 1,
                                  duration: 1,
                                  ease: "power1.out",
                                }
                              );
                            }),
                          s &&
                            p.ZP.fromTo(
                              s,
                              { y: 100, opacity: 0 },
                              {
                                y: 0,
                                opacity: 1,
                                stagger: 0.05,
                                duration: 1,
                                ease: "power1.out",
                              }
                            );
                      },
                    });
                  });
              }
            }, [v]),
            !(null == c ? void 0 : c.length))
          )
            return null;
          let z = 1 === c.length,
            M = (
              null == f
                ? void 0
                : null === (t = f.addonItem) || void 0 === t
                ? void 0
                : t.length
            )
              ? f
              : null,
            A = [
              ...(function (e) {
                var t, l;
                let r = 0,
                  a = JSON.parse(JSON.stringify(e));
                if (
                  (a.forEach((e) => {
                    r = Math.max(r, e.packageList.length);
                  }),
                  (null == a ? void 0 : a.length) !== 1)
                )
                  return a.map((e) => {
                    var t, l;
                    if (
                      r >
                      (null == e
                        ? void 0
                        : null === (t = e.packageList) || void 0 === t
                        ? void 0
                        : t.length)
                    ) {
                      let t =
                        r -
                        (null == e
                          ? void 0
                          : null === (l = e.packageList) || void 0 === l
                          ? void 0
                          : l.length);
                      for (let l = 0; l < t; l++) {
                        let t = e.packageList[e.packageList.length - 1];
                        e.packageList.push({
                          id: (t + l).toString(),
                          title: null,
                        });
                      }
                    }
                    return { ...e };
                  });
                if (
                  (null === (t = a[0]) || void 0 === t
                    ? void 0
                    : t.packageList.length) %
                    2 !=
                  0
                ) {
                  let e = a[0].packageList[a[0].packageList.length - 1];
                  null === (l = a[0]) ||
                    void 0 === l ||
                    l.packageList.push({ id: (e + 1).toString(), title: null });
                }
                return a;
              })(c),
            ];
          return (
            A.sort((e, t) => Number(t.isHighlighted) - Number(e.isHighlighted)),
            _ && !R && A.reverse(),
            (0, r.jsxs)("div", {
              ref: v,
              className:
                "relative flex flex-col items-center gap-y-6  cases-background packages-background".concat(
                  M ? " packages-background--addon-mobile" : ""
                ),
              children: [
                (0, r.jsx)("div", {
                  children: A.map((e) => {
                    let { bookmarkId: t } = e;
                    return t
                      ? (0, r.jsx)(
                          "span",
                          {
                            id: t,
                            className: "scroll-mt-[50px] md:scroll-mt-[110px]",
                          },
                          t
                        )
                      : null;
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "relative hidden md:flex w-full gap-10 pb-0 md:pb-[80px] justify-center items-stretch px-[40px] max-w-[1920px]",
                  children: A.map((e) => {
                    let {
                        id: t,
                        title: i,
                        from: o,
                        price: c,
                        topLine: d,
                        button: u,
                        packageList: p,
                        isHighlighted: x,
                        highlightText: m,
                        slug: f,
                      } = e,
                      v =
                        _ && "undefined" != typeof document
                          ? document.getElementById(
                              "package-portal-desktop-".concat(t)
                            )
                          : null;
                    return (0, r.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, r.jsx)(k, {
                            id: t,
                            title: i,
                            from: o,
                            price: c,
                            topLine: d,
                            button: u,
                            packageList: p,
                            isHighlighted: x,
                            highlightText: m,
                            isSingleMode: z,
                            slug: f,
                            portalIdPrefix: "desktop",
                          }),
                          _ &&
                            l &&
                            v &&
                            (0, P.createPortal)(
                              (0, r.jsx)("div", {
                                className:
                                  "flex flex-row items-center w-full justify-center",
                                children: (0, r.jsx)(s.Z, {
                                  ariaLabel: l.label,
                                  className:
                                    "packagesButton mx-auto overflow-hidden flex flex-col items-center [&_button]:!pb-0 [&_button_p]:!pb-2 [&_button_p]:border-b [&_button_p]:border-white [&_button_p]:border-opacity-100 [&_button:hover_p]:border-opacity-0 [&_button_p]:transition-all [&_button_p]:inline-block",
                                  type: "button",
                                  hideCorners: !0,
                                  onClick: () =>
                                    w(
                                      (0, r.jsx)(n.Z, {
                                        packageSlugList: C,
                                        pageTitle: h,
                                      })
                                    ),
                                  children: l.label,
                                }),
                              }),
                              v
                            ),
                        ],
                      },
                      t
                    );
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "relative md:hidden w-full packages-background".concat(
                      M ? " packages-background--addon-mobile" : ""
                    ),
                  children: [
                    (0, r.jsx)("div", {
                      ref: N,
                      className: "overflow-hidden",
                      children: (0, r.jsx)("div", {
                        className: "flex",
                        children: A.map((e) => {
                          let {
                              id: t,
                              title: a,
                              from: i,
                              price: o,
                              topLine: c,
                              button: d,
                              packageList: u,
                              isHighlighted: p,
                              highlightText: x,
                              slug: m,
                            } = e,
                            f =
                              _ && "undefined" != typeof document
                                ? document.getElementById(
                                    "package-portal-mobile-".concat(t)
                                  )
                                : null;
                          return (0, r.jsx)(
                            "div",
                            {
                              className: "flex-[0_0_100%] flex justify-center",
                              children: (0, r.jsxs)("div", {
                                className:
                                  "w-full flex px-4 md:px-10 pb-[64px] md:pb-[80px] pt-[70px] items-stretch md:items-stretch justify-center",
                                children: [
                                  (0, r.jsx)(k, {
                                    id: t,
                                    title: a,
                                    from: i,
                                    price: o,
                                    topLine: c,
                                    button: d,
                                    packageList: u,
                                    isHighlighted: p,
                                    highlightText: x,
                                    isSingleMode: z,
                                    slug: m,
                                    portalIdPrefix: "mobile",
                                  }),
                                  _ &&
                                    l &&
                                    f &&
                                    (0, P.createPortal)(
                                      (0, r.jsx)("div", {
                                        className:
                                          "flex flex-row items-center w-full justify-center",
                                        children: (0, r.jsx)(s.Z, {
                                          ariaLabel: l.label,
                                          className:
                                            "packagesButton mx-auto overflow-hidden flex flex-col items-center [&_button]:!pb-0 [&_button_p]:!pb-2 [&_button_p]:border-b [&_button_p]:border-white [&_button_p]:border-opacity-100 [&_button:hover_p]:border-opacity-0 [&_button_p]:transition-all [&_button_p]:inline-block",
                                          type: "button",
                                          hideCorners: !0,
                                          onClick: () =>
                                            w(
                                              (0, r.jsx)(n.Z, {
                                                packageSlugList: C,
                                                pageTitle: h,
                                              })
                                            ),
                                          children: l.label,
                                        }),
                                      }),
                                      f
                                    ),
                                ],
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    }),
                    (null == A ? void 0 : A.length) > 1 &&
                      (0, r.jsxs)("div", {
                        className:
                          "absolute top-[160px] left-0 bottom-[380px] right-0 flex justify-between items-start pointer-events-none px-[6px] md:px-[20px]",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-[50px] h-[50px] button-custom-clip cursor-pointer pointer-events-auto flex justify-center items-center drop-shadow-lg",
                            onClick: (e) => {
                              e.stopPropagation(), null == E || E.scrollPrev();
                            },
                            children: (0, r.jsx)(S.Z, {}),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "w-[50px] h-[50px] button-custom-clip cursor-pointer pointer-events-auto flex justify-center items-center  drop-shadow-lg",
                            onClick: (e) => {
                              e.stopPropagation(), null == E || E.scrollNext();
                            },
                            children: (0, r.jsx)(S.Z, {
                              className: "rotate-180",
                            }),
                          }),
                        ],
                      }),
                    M &&
                      (0, r.jsx)("div", {
                        className: "flex-[0_0_100%] px-4 flex justify-center",
                        children: (0, r.jsx)("div", {
                          className: (0, b.m6)(
                            "mb-[64px] w-full mt-[-38px] px-0 md:px-4 mobile-addons",
                            z
                              ? "max-w-[90vw]"
                              : "max-w-[90vw] [@media(min-width:840px)]:!max-w-[85vw] [@media(min-width:930px)]:!max-w-[78vw] md:!max-w-[81vw]"
                          ),
                          children: (0, r.jsx)(T, {
                            addonItem: M.addonItem,
                            addonsLink: M.addonsLink,
                          }),
                        }),
                      }),
                  ],
                }),
                M &&
                  (0, r.jsx)("div", {
                    className: (0, b.m6)(
                      "relative hidden md:block md:flex justify-center items-stretch max-w-[1920px] w-full max-w-[1920px]  mx-auto mb-[64px] md:mb-[80px] mt-[-76px] md:mt-[-80px] desktop-addons",
                      z
                        ? "max-w-[90vw]  [@media(min-width:1600px)]:!max-w-[1440px] px-0"
                        : "max-w-[1920px] px-[40px]"
                    ),
                    children: (0, r.jsx)(T, {
                      addonItem: M.addonItem,
                      addonsLink: M.addonsLink,
                    }),
                  }),
                (0, r.jsx)(o.Z, { isOpened: g, onClose: j, children: y }),
              ],
            })
          );
        };
    },
    6987: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(4989),
        n = l(1932),
        o = l(6164),
        c = l(4894),
        d = l.n(c),
        u = l(6463);
      t.default = (e) => {
        let { partnerSet: t } = e,
          [l, c] = (0, a.useState)(!1),
          p = "/" === (0, u.usePathname)().replace(/^\/[a-z]{2}(\/|$)/, "/");
        return ((0, a.useEffect)(() => {
          p &&
            c(
              /iPhone|iPod/.test(navigator.userAgent) ||
                ("MacIntel" === navigator.platform &&
                  navigator.maxTouchPoints > 1)
            );
        }, []),
        null == t ? void 0 : t.length)
          ? (0, r.jsx)("div", {
              className: (0, o.m6)(
                "partnerMarqueeModuleContent py-4 absolute left-1/2 -translate-x-1/2 w-full z-[1] bottom-0",
                l ? "bottom-[32px]" : "bottom-0"
              ),
              children: (0, r.jsx)(n.Z, {
                autoFill: !0,
                children: (0, r.jsx)("div", {
                  className: "flex gap-x-4",
                  children: t.map((e) => {
                    let { id: t, title: l, partners: a } = e || {};
                    return (0, r.jsxs)(
                      "div",
                      {
                        className: "flex gap-x-4 ml-4 items-center",
                        children: [
                          (0, r.jsx)("span", {
                            className: (0, o.m6)(
                              d().className,
                              "text-base font-bold uppercase"
                            ),
                            children: l,
                          }),
                          (null == a ? void 0 : a.length) &&
                            a.map((e) => {
                              var t, l;
                              let { id: a, coverImage: n } = e || {};
                              return n
                                ? (0, r.jsx)(
                                    "div",
                                    {
                                      children: (0, r.jsx)(s.Z, {
                                        className:
                                          "relative w-auto h-[30px] object-contain",
                                        alt: n.alternativeText,
                                        src: (0, i.Z)(
                                          null === (l = n.format) ||
                                            void 0 === l
                                            ? void 0
                                            : null === (t = l.original) ||
                                              void 0 === t
                                            ? void 0
                                            : t.url
                                        ),
                                        width: 100,
                                        height: 30,
                                      }),
                                    },
                                    a
                                  )
                                : null;
                            }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              }),
            })
          : null;
      };
    },
    5831: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(6797),
        i = l(5303),
        n = l(4989),
        o = l(6164),
        c = l(4172),
        d = l(4300),
        u = l(8562),
        p = l(1865);
      let x = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cross.svg"
      );
      t.default = (e) => {
        let { products: t } = e,
          [l, m] = (0, d.Z)({ loop: !0, align: "start" }),
          [h, f] = (0, a.useState)(0),
          [v, g] = (0, a.useState)(0);
        return ((0, a.useEffect)(() => {
          if (!m) return;
          let e = () => {
              f(m.selectedScrollSnap()), g(m.scrollSnapList().length);
            },
            t = () => {
              m.reInit();
            };
          return (
            e(),
            m.on("select", e),
            m.on("reInit", e),
            window.addEventListener("resize", t),
            () => {
              m.off("select", e),
                m.off("reInit", e),
                window.removeEventListener("resize", t);
            }
          );
        }, [m]),
        t)
          ? (0, r.jsxs)("div", {
              className: "yoMm relative",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "relative w-full justify-center items-stretch px-0 [@media(min-width:768px)]:px-8 [@media(min-width:1024px)]:px-32 flex bg-[#000000] px-6 md:px-0",
                  children: (0, r.jsxs)("div", {
                    className:
                      "w-full [@media(min-width:768px)]:max-w-[calc(90vw-9rem)] [@media(min-width:1024px)]:max-w-[calc(90vw-16rem)]",
                    children: [
                      (0, r.jsx)("div", {
                        ref: l,
                        className:
                          "overflow-hidden w-full border-[1px] border-[#404040]",
                        children: (0, r.jsx)("div", {
                          className: "h-max flex",
                          children: t.map((e) => {
                            var t, l;
                            let {
                                title: a,
                                subTitle: d,
                                coverImage: u,
                                id: p,
                                product: m,
                                external_link: h,
                              } = e || {},
                              f = h && h.startsWith("http");
                            return (0, r.jsxs)(
                              c.TransitionLink,
                              {
                                "aria-label": a,
                                href: f && !m ? h : null == m ? void 0 : m.slug,
                                isExternal: !!(f && !m),
                                target: f ? "_blank" : void 0,
                                className:
                                  "productSection group product-glow-hover overflow-hidden relative flex-[0_0_calc(100vw-3rem)] [@media(min-width:768px)_and_(max-width:1023px)]:flex-[0_0_50%] [@media(min-width:1024px)]:flex-[0_0_33.333%] h-auto bg-[#131313] flex flex-col  gap-y-4 items-center [&:not(:last-child)]:border-r-[1px] [&:not(:last-child)]:border-r-[#404040] px-6 py-[32px] md:py-[48px] min-w-0 touch-manipulation",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute left-0 right-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none z-[1] bg-gradient-hover",
                                    style: { height: "115%" },
                                  }),
                                  a &&
                                    (0, r.jsx)(s.Z, {
                                      level: 3,
                                      className:
                                        "sliderProductTitle text-center uppercase [&>.word]:clip relative z-10",
                                      children: a,
                                    }),
                                  u &&
                                    (0, r.jsxs)("div", {
                                      className: "w-full relative block z-10",
                                      children: [
                                        (0, r.jsx)(i.Z, {
                                          height: 566,
                                          width: 556,
                                          priority: !0,
                                          alt: u.alternativeText,
                                          src: (0, n.Z)(
                                            null === (l = u.format) ||
                                              void 0 === l
                                              ? void 0
                                              : null === (t = l.original) ||
                                                void 0 === t
                                              ? void 0
                                              : t.url
                                          ),
                                          className: (0, o.m6)(
                                            "w-full shrink-0"
                                          ),
                                          quality: 80,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] aspect-[1/1] w-[100%] transition-all duration-500 ease-in-out group-hover:w-[90%]",
                                          children: [
                                            (0, r.jsx)(i.Z, {
                                              alt: "",
                                              className:
                                                "w-6 absolute top-0 left-0",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                            (0, r.jsx)(i.Z, {
                                              alt: "",
                                              className:
                                                "w-6 absolute top-0 right-0",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                            (0, r.jsx)(i.Z, {
                                              alt: "",
                                              className:
                                                "w-6 absolute bottom-0 right-0",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                            (0, r.jsx)(i.Z, {
                                              alt: "",
                                              className:
                                                "w-6 absolute bottom-0 left-0",
                                              src: x,
                                              height: 16,
                                              width: 16,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "sliderProductSubTitle text-xl text-center max-w-[480px] relative z-10",
                                    children: d,
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex justify-center w-full mt-auto pt-8 relative z-10",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "relative w-full group-hover:bg-[#ffffff30] transition-all duration-500 ease-in-out",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "relative block text-white text-center font-bold bg-none button-custom-clip flex items-center justify-center gap-x-2 text-lg py-[10px] px-4 uppercase w-full",
                                          children: "Open pool",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute top-0 left-0 w-2 h-2 border-t-[1px] border-l-[1px] border-white transition-all ease-in-out duration-500 group-hover:top-[4px] group-hover:left-[4px]",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px] border-white transition-all ease-in-out duration-500 group-hover:top-[4px] group-hover:right-[4px]",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px] border-white transition-all ease-in-out duration-500 group-hover:bottom-[4px] group-hover:left-[4px]",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute bottom-0 right-0 w-2 h-2 border-b-[1px] border-r-[1px] border-white transition-all ease-in-out duration-500 group-hover:bottom-[4px] group-hover:right-[4px]",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              p
                            );
                          }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "bg-[#000000]",
                        children: (0, r.jsx)(p.Z, {
                          selectedIndex: h,
                          slidesCount: v,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "absolute top-[-180px] [@media(min-width:768px)]:top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none  px-[6px] md:px-[20px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer pointer-events-auto flex justify-center items-center",
                      onClick: (e) => {
                        e.stopPropagation(), null == m || m.scrollPrev();
                      },
                      children: (0, r.jsx)(u.Z, {}),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer pointer-events-auto flex justify-center items-center",
                      onClick: (e) => {
                        e.stopPropagation(), null == m || m.scrollNext();
                      },
                      children: (0, r.jsx)(u.Z, { className: "rotate-180" }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
    8595: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(5303),
        s = l(4989),
        i = l(6164),
        n = l(4894),
        o = l.n(n),
        c = l(4300),
        d = l(8562);
      let u = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/cross.svg"
      );
      t.default = (e) => {
        let { quotes: t } = e,
          [l, n] = (0, c.Z)({ loop: !0, dragThreshold: 20 });
        return t
          ? (0, r.jsxs)("div", {
              className: "relative px-6 md:px-0",
              children: [
                (0, r.jsx)("div", {
                  ref: l,
                  className: "overflow-hidden",
                  style: { touchAction: "pan-x pan-y" },
                  children: (0, r.jsx)("div", {
                    className: "border-t-[1px] border-t-[#262626] flex",
                    children: t.map((e) => {
                      var t, l;
                      let {
                        title: n,
                        subTitle: c,
                        coverImage: d,
                        id: p,
                      } = e || {};
                      return (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "quoteSection flex-[0_0_calc(100vw-2rem)] md:flex-[0_0_49.44vw] lg:flex-[0_0_33.333vw] h-auto bg-violet-900 flex flex-col gap-y-[56px] border-r-[1px] border-r-[#404040] last:border-none px-6 py-8",
                          children: [
                            n &&
                              (0, r.jsxs)("div", {
                                className: "flex gap-x-2 items-center",
                                children: [
                                  (0, r.jsx)("svg", {
                                    width: "9",
                                    height: "9",
                                    viewBox: "0 0 9 9",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, r.jsx)("rect", {
                                      width: "9",
                                      height: "9",
                                      fill: "white",
                                    }),
                                  }),
                                  (0, r.jsx)("p", {
                                    className: (0, i.m6)(
                                      "text-base font-bold -tracking-[1px] uppercase",
                                      o().className
                                    ),
                                    children: n,
                                  }),
                                ],
                              }),
                            d &&
                              (0, r.jsxs)("div", {
                                className:
                                  "w-[180px] h-[180px] relative block mx-auto overflow-hidden shrink-0",
                                children: [
                                  (0, r.jsx)(a.Z, {
                                    height: 180,
                                    width: 180,
                                    priority: !0,
                                    alt: d.alternativeText || "",
                                    src: (0, s.Z)(
                                      null === (l = d.format) || void 0 === l
                                        ? void 0
                                        : null === (t = l.original) ||
                                          void 0 === t
                                        ? void 0
                                        : t.url
                                    ),
                                    className: (0, i.m6)(
                                      "w-full h-full shrink-0"
                                    ),
                                    quality: 80,
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] aspect-[1/1] w-[110%]",
                                    children: [
                                      (0, r.jsx)(a.Z, {
                                        priority: !0,
                                        alt: "",
                                        className: "w-6 absolute top-0 left-0",
                                        src: u,
                                        height: 16,
                                        width: 16,
                                      }),
                                      (0, r.jsx)(a.Z, {
                                        priority: !0,
                                        alt: "",
                                        className: "w-6 absolute top-0 right-0",
                                        src: u,
                                        height: 16,
                                        width: 16,
                                      }),
                                      (0, r.jsx)(a.Z, {
                                        priority: !0,
                                        alt: "",
                                        className:
                                          "w-6 absolute bottom-0 right-0",
                                        src: u,
                                        height: 16,
                                        width: 16,
                                      }),
                                      (0, r.jsx)(a.Z, {
                                        priority: !0,
                                        alt: "",
                                        className:
                                          "w-6 absolute bottom-0 left-0",
                                        src: u,
                                        height: 16,
                                        width: 16,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-lg lg:text-xl flex items-start gap-x-4 relative h-max",
                              children: [
                                (0, r.jsx)(a.Z, {
                                  priority: !0,
                                  alt: "",
                                  className: "w-6",
                                  src: u,
                                  height: 16,
                                  width: 16,
                                }),
                                c,
                              ],
                            }),
                          ],
                        },
                        p
                      );
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none px-[6px] md:px-[20px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px]  cursor-pointer pointer-events-auto flex justify-center items-center active:bg-transparent md:active:bg-transparent select-none",
                      style: {
                        WebkitTapHighlightColor: "transparent",
                        touchAction: "manipulation",
                      },
                      onClick: (e) => {
                        e.stopPropagation(), null == n || n.scrollPrev();
                      },
                      children: (0, r.jsx)(d.Z, {}),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-[48px] h-[48px] md:w-[64px] md:h-[64px] cursor-pointer pointer-events-auto flex justify-center items-center",
                      onClick: (e) => {
                        e.stopPropagation(), null == n || n.scrollNext();
                      },
                      children: (0, r.jsx)(d.Z, { className: "rotate-180" }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
    8469: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(6164),
        i = l(2283),
        n = l(6797),
        o = l(8601),
        c = l(9582),
        d = l(5303),
        u = l(4989),
        p = l(1068);
      let x = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/sos.svg"
      );
      t.default = (e) => {
        var t, l, m;
        let { title: h, shortDescription: f, button: v, coverImage: g } = e,
          w = (0, a.useRef)(null),
          b = "relative flex items-center overflow-hidden w-full",
          j =
            "object-contain absolute sosText left-1/2 -translate-x-[50%] top-1/2 w-[90%] mx-auto",
          [y, N] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            if (w.current) {
              N(!1);
              let e = c.ZP.utils.toArray(".sosText");
              e.forEach((e) => {
                let t = null == e ? void 0 : e.offsetTop;
                e.startPos = t;
              });
              let t = () => {
                e.forEach((e) => {
                  c.ZP.to(e, { top: e.startPos });
                });
              };
              w.current.addEventListener("mouseleave", () => t());
              let l = (t) => {
                if (null == w ? void 0 : w.current) {
                  var l;
                  let r = w.current.getBoundingClientRect(),
                    a = t.clientY - r.top,
                    s =
                      (null === (l = w.current) || void 0 === l
                        ? void 0
                        : l.offsetHeight) /
                        2 -
                      a;
                  e.forEach((e) => {
                    e.startPos && c.ZP.to(e, { top: e.startPos + s / 20 });
                  });
                }
              };
              return (
                w.current.addEventListener("mousemove", l),
                () => {
                  var e, r;
                  null === (e = w.current) ||
                    void 0 === e ||
                    e.removeEventListener("mouseleave", t),
                    null === (r = w.current) ||
                      void 0 === r ||
                      r.removeEventListener("mousemove", l);
                }
              );
            }
          }, [w.current, y]),
          (0, p.Z)({
            onResize: () => {
              N(!0);
            },
            onLoadTrigger: !0,
          }),
          (0, r.jsxs)("div", {
            ref: w,
            className:
              "relative flex flex-col md:flex-row items-center md:h-[44.5vw] lg:h-[46.5vw] px-4 md:px-8",
            children: [
              g &&
                (0, r.jsx)(d.Z, {
                  alt: g.alternativeText,
                  src: (0, u.Z)(
                    null === (l = g.format) || void 0 === l
                      ? void 0
                      : null === (t = l.original) || void 0 === t
                      ? void 0
                      : t.url
                  ),
                  fill: !0,
                  className: (0, s.m6)("absolute w-full h-full object-fill"),
                }),
              !y &&
                (0, r.jsxs)("div", {
                  className:
                    "grid-mask w-full my-[-10%] md:my-0 md:w-1/2 shrink-0 md:flex-1 md:py1-0 flex flex-col justify-center relative aspect-[1/1] z-[1]",
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, s.m6)("h-[8.95%]", b),
                      children: (0, r.jsx)(d.Z, {
                        className: (0, s.m6)("-translate-y-[5%]", j),
                        alt: "",
                        src: x,
                        height: 100,
                        width: 300,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, s.m6)("h-[8.95%]", b),
                      children: (0, r.jsx)(d.Z, {
                        className: (0, s.m6)("-translate-y-[20%]", j),
                        alt: "",
                        src: x,
                        height: 100,
                        width: 300,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, s.m6)("h-[26.85%]", b),
                      children: (0, r.jsx)(d.Z, {
                        className: (0, s.m6)("-translate-y-[50%]", j),
                        alt: "",
                        src: x,
                        height: 100,
                        width: 300,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, s.m6)("h-[8.95%]", b),
                      children: (0, r.jsx)(d.Z, {
                        className: (0, s.m6)("-translate-y-[80%]", j),
                        alt: "",
                        src: x,
                        height: 100,
                        width: 300,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, s.m6)("h-[8.95%]", b),
                      children: (0, r.jsx)(d.Z, {
                        className: (0, s.m6)("-translate-y-[95%]", j),
                        alt: "",
                        src: x,
                        height: 100,
                        width: 300,
                      }),
                    }),
                  ],
                }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col gap-y-6 md:gap-y-8 pb-[56px] md:pb-0 shrink-0 w-full md:w-1/2 flex-1 md:pl-10 z-[1]",
                children: [
                  h &&
                    (0, r.jsx)(n.Z, {
                      level: 2,
                      isRedMode: !0,
                      className: "uppercase text-center md:text-left",
                      children: h,
                    }),
                  f &&
                    (0, r.jsx)("p", {
                      className: (0, s.m6)(
                        "md:max-w-[480px] lg:max-w-[540px] text-lg lg:text-xl font-medium text-center md:text-left"
                      ),
                      children: (0, o.ZP)(f),
                    }),
                  v &&
                    (0, r.jsx)(i.Z, {
                      className: "w-max mx-auto md:mx-0",
                      "aria-label": v.label,
                      target:
                        null === (m = v.linkOptions) || void 0 === m
                          ? void 0
                          : m.target,
                      href: null == v ? void 0 : v.path,
                      coreColor: "Red",
                      children: v.label,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    7137: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(6098),
        i = l.n(s),
        n = l(19),
        o = l(2814),
        c = (e) => {
          let { scrollProgressHandler: t, id: l, height: s, debug: c = !1 } = e,
            d = (0, a.useRef)(null);
          return (
            (0, n.V)(() => {
              d.current &&
                i().create({
                  trigger: d.current,
                  start: "top top",
                  end: "bottom bottom",
                  markers: c,
                  pinnedContainer: o.Z,
                  invalidateOnRefresh: !0,
                  onUpdate: (e) => t(e.progress),
                });
            }, [d, t]),
            (0, r.jsx)("div", {
              ref: d,
              style: {
                height: s,
                backgroundColor: c ? "rgba(145,245,73,0.1)" : "transparent",
              },
              children: c && l,
            })
          );
        },
        d = l(564),
        u = () => {
          let e = (0, d.Z)((e) => e.setTunnelProgress);
          return (0, r.jsx)(c, {
            scrollProgressHandler: e,
            id: "tunnel",
            height: "800vh",
            debug: !1,
          });
        };
    },
    6140: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        });
      var r = l(7437),
        a = l(2265),
        s = l(564),
        i = l(6098),
        n = l.n(i),
        o = l(7042),
        c = l.n(o);
      let d = (0, l(903).U)((e) => ({
        debugVC: !1,
        setDebugVC: (t) => {
          e({ debugVC: t });
        },
        showPerf: !1,
        setShowPerf: (t) => {
          e({ showPerf: t });
        },
      }));
      var u = l(5046),
        p = l(2814),
        x = (e) => {
          let {
              toggleHandler: t,
              mobileInViewHandler: l = () => {},
              id: s,
              scrollStartEnd: i = 90,
              spacingBottom: o = 60,
              ...x
            } = e,
            m = (0, a.useRef)(null),
            [h, f] = (0, a.useState)(!1),
            [v, g] = (0, a.useState)(!1),
            w = (0, u.J)((e) => e.isMediumBreakpoint),
            b = d((e) => e.debugVC),
            j = (e) => {
              t(e), b && f(e);
            },
            y = (e, t) => {
              t >= 1 - e && t < 1 ? (g(!0), l(!0)) : (g(!1), l(!1));
            };
          return (
            (0, a.useEffect)(() => {
              if (m.current) {
                let e = m.current.clientHeight,
                  t = w ? 120 : o,
                  l = (window.innerHeight * (t / 2 / 100)) / e,
                  r = n().create({
                    trigger: m.current,
                    start: "top ".concat(i, "%"),
                    end: "bottom ".concat(i, "%"),
                    markers: b,
                    pinnedContainer: p.Z,
                    invalidateOnRefresh: !0,
                    onToggle: (e) => j(e.isActive),
                    onUpdate: (e) => y(l, e.progress),
                  });
                return () => {
                  r.kill();
                };
              }
              b || f(!1);
            }, [m, t, b, w]),
            (0, r.jsxs)("section", {
              style: { paddingBottom: "".concat(w ? 120 : o, "svh") },
              className:
                "\n      relative min-h-[100svh] w-full flex items-start justify-end pointer-events-none [&>*]:pointer-events-auto even:justify-start\n      "
                  .concat(b && h ? c().debug : "", " \n      ")
                  .concat(b && v ? c().withinBottomSpacing : "", "\n    ")
                  .trim(),
              ref: m,
              children: [
                b &&
                  (0, r.jsx)("div", {
                    style: { position: "absolute", left: 0 },
                    children: s,
                  }),
                x.children,
              ],
            })
          );
        },
        m = l(6797),
        h = l(6164),
        f = l(4894),
        v = l.n(f),
        g = l(5303),
        w = l(2283),
        b = l(6503),
        j = l(2088),
        y = l(9582),
        N = l(3310),
        k = l(2336),
        Z = l(6387),
        L = l(19),
        S = l(6924),
        P = l(6463);
      let E = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/check.svg"
      );
      function C(e) {
        let { height: t } = e;
        return (0, r.jsx)("div", {
          style: {
            height: t,
            backgroundColor: "red",
            opacity: ".0",
            pointerEvents: "none",
          },
        });
      }
      var T = (e) => {
        let { features: t } = e,
          l = (0, a.useRef)(null),
          {
            isOpened: i,
            openModal: o,
            closeModal: c,
            modalContent: d,
          } = (0, k.Z)(),
          u = (0, S.Z)(),
          f = (0, s.Z)((e) => e.setActiveFeaturesSectionNumber),
          T = (0, s.Z)((e) => e.setActiveMobileInViewNumber),
          _ = (0, s.Z)((e) => e.setActiveFeaturesSectionPose),
          q = (0, s.Z)((e) => e.setActivatedHotspotObjectNumber),
          R = (0, s.Z)((e) => e.activatedHotspotObjectNumber),
          I = (0, s.Z)((e) => e.setFeaturesProgress),
          z = (0, P.usePathname)();
        return (
          (0, a.useEffect)(() => {
            i || n().refresh();
          }, [i]),
          (0, a.useEffect)(() => {
            R && (o((0, r.jsx)(Z.Z, { slug: "vc-feature-".concat(R) })), q(0));
          }, [R]),
          (0, L.V)(() => {
            l.current &&
              [...l.current.querySelectorAll(".feature")].map((e) => {
                let t = e.querySelector(".featureTopLine"),
                  l = e.querySelector(".featureTitle"),
                  r = e.querySelector(".featureShortDescription"),
                  a = e.querySelectorAll(".featuresResourcePart"),
                  s = new j.Z(l, { types: "words,chars" }).chars,
                  i = new j.Z(r, { types: "lines" }).lines;
                return n().create({
                  trigger: e,
                  start: "15% bottom",
                  pinnedContainer: p.Z,
                  invalidateOnRefresh: !0,
                  once: !0,
                  onEnter: () => {
                    t &&
                      y.ZP.fromTo(
                        t,
                        { y: 50 },
                        { y: 0, duration: 0.5, ease: "power1.out" }
                      ),
                      l &&
                        y.ZP.fromTo(
                          s,
                          { opacity: 0, y: 50 },
                          {
                            opacity: 1,
                            y: 0,
                            stagger: 0.01,
                            duration: 0.5,
                            ease: "power4.out",
                          }
                        ),
                      r &&
                        y.ZP.fromTo(
                          i,
                          { y: 50, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            stagger: 0.1,
                            duration: 0.7,
                            ease: "power1.out",
                          }
                        ),
                      a &&
                        y.ZP.fromTo(
                          a,
                          { y: 50, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: 0.5,
                            ease: "power1.out",
                          }
                        );
                  },
                });
              });
          }, [l, u]),
          (0, L.V)(() => {
            let e = () =>
                n().create({
                  trigger: l.current,
                  start: "top bottom",
                  end: "bottom bottom",
                  markers: !1,
                  invalidateOnRefresh: !0,
                  pinSpacing: !0,
                  onUpdate: (e) => I(e.progress),
                  onToggle: (e) => {
                    e.isActive || (f(0), _(b.Y.Flight));
                  },
                }),
              t = e();
            return (
              z && (t.kill(), (t = e())),
              () => {
                t.kill(), f(0), _(b.Y.Flight);
              }
            );
          }, [z, I]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(C, { height: "100vh" }),
              (0, r.jsxs)("div", {
                ref: l,
                children: [
                  (0, r.jsx)("div", { className: "relative h-screen" }),
                  (null == t ? void 0 : t.length) &&
                    t.map((e, t) => {
                      var l;
                      let {
                          id: a,
                          topLine: s,
                          title: i,
                          subTitle: n,
                          shortDescription: o,
                          featureLists: c,
                          pose: d,
                          button: u,
                        } = e,
                        p = t + 1,
                        j = p % 2 == 0;
                      return (0, r.jsx)(
                        x,
                        {
                          id: "section ".concat(p),
                          toggleHandler: (e) => {
                            e ? (f(p), _(d)) : (f(0), _(b.Y.Flight));
                          },
                          mobileInViewHandler: (e) => {
                            T(e ? p : 0);
                          },
                          children: (0, r.jsx)("div", {
                            className: (0, h.m6)(
                              "feature w-full md:w-1/2 flex flex-col",
                              !j && "md:items-end"
                            ),
                            children: (0, r.jsxs)("div", {
                              className: (0, h.m6)(
                                "flex justify-center flex-col md:max-w-[392px] lg:max-w-[560px] px-4 md:px-0",
                                j ? "md:ml-10" : "md:mr-10"
                              ),
                              children: [
                                s &&
                                  (0, r.jsx)("div", {
                                    className: "relative overflow-hidden",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "featureTopLine flex gap-x-2 items-center",
                                      children: [
                                        (0, r.jsx)("svg", {
                                          width: "9",
                                          height: "9",
                                          viewBox: "0 0 9 9",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, r.jsx)("rect", {
                                            width: "9",
                                            height: "9",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, r.jsx)("p", {
                                          className: (0, h.m6)(
                                            "text-left text-sm lg:text-base font-bold -tracking-[1px] uppercase",
                                            v().className
                                          ),
                                          children: s,
                                        }),
                                      ],
                                    }),
                                  }),
                                i &&
                                  (0, r.jsx)(m.Z, {
                                    level: 2,
                                    className:
                                      "featureTitle text-4xl, font-bold uppercase mt-4",
                                    children: i,
                                  }),
                                o &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "featureShortDescription text-left mt-8 text-lg lg:text-xl",
                                    children: o,
                                  }),
                                n &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "featuresResourcePart text-left mt-10 text-lg lg:text-xl font-medium",
                                    children: n,
                                  }),
                                (0, r.jsx)("div", {
                                  className:
                                    "featuresResourcePart flex flex-col gap-y-10 mt-10",
                                  children:
                                    null == c
                                      ? void 0
                                      : c.map((e) => {
                                          let {
                                            id: t,
                                            title: l,
                                            listItems: a,
                                          } = e;
                                          return (0, r.jsxs)(
                                            "div",
                                            {
                                              children: [
                                                l &&
                                                  (0, r.jsx)("div", {
                                                    className: (0, h.m6)(
                                                      "text-left text-sm lg:text-sm font-bold -tracking-[1px] uppercase mb-4",
                                                      v().className
                                                    ),
                                                    children: l,
                                                  }),
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "flex flex-col gap-y-4",
                                                  children:
                                                    null == a
                                                      ? void 0
                                                      : a.map((e) => {
                                                          let {
                                                            id: t,
                                                            title: l,
                                                          } = e;
                                                          return l
                                                            ? (0, r.jsxs)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "text-lg lg:text-xl flex gap-x-4 items-center",
                                                                  children: [
                                                                    (0, r.jsx)(
                                                                      g.Z,
                                                                      {
                                                                        alt: "",
                                                                        className:
                                                                          "w-6 shrink-0",
                                                                        src: E,
                                                                        priority:
                                                                          !0,
                                                                        height: 16,
                                                                        width: 16,
                                                                      }
                                                                    ),
                                                                    (0, r.jsx)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          l,
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              )
                                                            : null;
                                                        }),
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                }),
                                u &&
                                  (0, r.jsx)(w.Z, {
                                    coreColor: "Red",
                                    "aria-label": u.label,
                                    className: "featuresResourcePart mt-10",
                                    target:
                                      null === (l = u.linkOptions) ||
                                      void 0 === l
                                        ? void 0
                                        : l.target,
                                    href: u.path,
                                    children: u.label,
                                  }),
                              ],
                            }),
                          }),
                        },
                        a
                      );
                    }),
                ],
              }),
              (0, r.jsx)(N.Z, { isOpened: i, onClose: c, children: d }),
            ],
          })
        );
      };
    },
    3080: function (e, t, l) {
      "use strict";
      l.r(t);
      var r = l(7437),
        a = l(2265),
        s = l(9582),
        i = l(5303),
        n = l(19),
        o = l(2814),
        c = l(3310),
        d = l(2336),
        u = l(2587),
        p = l(7239);
      let x = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        m = "".concat(x, "/сrosses.svg"),
        h = "".concat(x, "/video-progress.svg");
      t.default = (e) => {
        let { video: t, coverImage: l } = e,
          x = (0, a.useRef)(null),
          f = (0, a.useRef)(null),
          v = (0, a.useRef)(null),
          {
            isOpened: g,
            openModal: w,
            closeModal: b,
            modalContent: j,
          } = (0, d.Z)();
        return ((0, n.V)(() => {
          if (f.current) {
            var e;
            let t = f.current,
              l =
                null === (e = f.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight;
            s.ZP.timeline({
              scrollTrigger: {
                trigger: t,
                pin: o.Z,
                pinnedContainer: o.Z,
                start: "center center",
                invalidateOnRefresh: !0,
                scrub: !0,
                markers: !1,
                end: () => "+=" + (l || 0) / 2,
              },
            }).add(
              [
                s.ZP.to(x.current, { scale: 3.03, ease: "none" }),
                s.ZP.to(v.current, { scale: 1, ease: "none" }),
              ],
              0
            );
          }
        }, [f]),
        t)
          ? (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsxs)("div", {
                  ref: f,
                  className: "w-full h-dvh relative bg-black",
                  children: [
                    (0, r.jsx)("div", {
                      ref: v,
                      className:
                        "button-custom-clip w-[48px] h-[48px] md:w-[64px] md:h-[64px] pointer-events-none flex justify-center items-center scale-0 z-[1] bg-white absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] row-start-1 col-start-1 flex items-center justify-center",
                      children: (0, r.jsx)("div", {
                        onClick: () =>
                          w(
                            (0, r.jsx)(u.Z, { coverImage: l, mediaUrl: t.url })
                          ),
                        className:
                          "pointer-events-auto w-full h-full group cursor-pointer",
                        children: (0, r.jsx)(p.Z, {}),
                      }),
                    }),
                    (0, r.jsx)(i.Z, {
                      alt: "",
                      className:
                        "absolute w-6 h-[96px] rotate-90 top-10 left-1/2 -translate-x-[50%] md:rotate-0 md:left-10 md:top-1/2 md:-translate-y-[50%]",
                      src: m,
                      height: 96,
                      width: 24,
                    }),
                    (0, r.jsx)(i.Z, {
                      alt: "",
                      className:
                        "absolute w-6 h-[96px] rotate-90 bottom-10 left-1/2 -translate-x-[50%] md:left-auto md:rotate-0 md:right-10 md:top-1/2 md:-translate-y-[50%]",
                      src: m,
                      height: 96,
                      width: 24,
                    }),
                    (0, r.jsx)(i.Z, {
                      alt: "",
                      className:
                        "absolute left-1/2 -translate-x-[50%] bottom-[140px] md:bottom-[15%] w-[220px] h-[15px]",
                      src: h,
                      height: 15,
                      width: 220,
                    }),
                    (0, r.jsxs)("div", {
                      ref: x,
                      className:
                        "w-full h-full relative aspect-[19/6] md:aspect-[16/9] grid grid-cols-3 grid-rows-3 gap-[1px]",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "border border-neutral-800 row-start-2 col-start-2 relative",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "w-[10px] h-[10px] border-r-[2px] border-r-neutral-800 border-b-[2px] border-b-neutral-800 absolute -top-5 -left-5",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-[10px] h-[10px] border-l-[2px] border-l-neutral-800 border-b-[2px] border-b-neutral-800 absolute -top-5 -right-5",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-[10px] h-[10px] border-r-[2px] border-r-neutral-800 border-t-[2px] border-t-neutral-800 absolute -bottom-5 -left-5",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-[10px] h-[10px] border-l-[2px] border-l-neutral-800 border-t-[2px] border-t-neutral-800 absolute -bottom-5 -right-5",
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "border-x-[1px] border-x-neutral-800 row-start-1 col-start-2",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "border-y-[1px] border-y-neutral-800 row-start-2 col-start-1",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "border-y-[1px] border-y-neutral-800 row-start-2 col-start-3",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "border-x-[1px] border-x-neutral-800 row-start-3 col-start-2",
                        }),
                        (0, r.jsx)("video", {
                          onClick: () =>
                            w(
                              (0, r.jsx)(u.Z, {
                                coverImage: l,
                                mediaUrl: t.url,
                              })
                            ),
                          className:
                            "bg-blue-700 row-start-2 col-start-2 w-full h-full object-cover z-[1] scale-[0.99] cursor-pointer",
                          autoPlay: !0,
                          playsInline: !0,
                          controls: !1,
                          muted: !0,
                          loop: !0,
                          src: t.url,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(c.Z, { isOpened: g, onClose: b, children: j }),
              ],
            })
          : null;
      };
    },
    7694: function (e, t, l) {
      "use strict";
      var r = l(7437),
        a = l(2283),
        s = l(2265),
        i = l(7815),
        n = l(4172),
        o = l(6164);
      t.Z = (e) => {
        let {
            children: t,
            isLinkView: l = !1,
            isSimpleButton: c = !1,
            type: d,
            href: u = " ",
            onClick: p,
            className: x,
            ariaLabel: m,
            target: h,
            hideCorners: f = !1,
          } = e,
          [v, g] = (0, s.useState)(!1),
          w = (0, s.useRef)(null),
          b = Array.isArray(t) ? t.join("") : t && t.toString(),
          [j, y] = (0, s.useState)();
        (0, s.useEffect)(() => {
          if ((!j && w.current && y(w.current.offsetWidth), !w.current && !v))
            return;
          let e = null,
            t = 0;
          return (
            (t = 0),
            (e = setInterval(() => {
              if (!w.current || !b) return;
              let l = b
                .split("")
                .map((e) =>
                  " " === e
                    ? " "
                    : t >= 10
                    ? e
                    : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                        Math.floor(26 * Math.random())
                      ]
                )
                .join("");
              (w.current.innerText = l), t < 10 ? (t += 1) : clearInterval(e);
            }, 30)),
            () => {
              e && clearInterval(e);
            }
          );
        }, [v, b]);
        let N =
          p &&
          (() => {
            p({});
          });
        return l
          ? (0, r.jsx)(n.TransitionLink, {
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              className: (0, o.m6)("group", x),
              href: u,
              target: h,
              "aria-label": m,
              onClick: p,
              children: (0, r.jsx)("p", {
                style: { width: j },
                className:
                  "overflow-hidden whitespace-nowrap pb-2 border-b border-white border-opacity-100 group-hover:border-opacity-0 transition-all inline-block",
                ref: w,
                children: b,
              }),
            })
          : c
          ? (0, r.jsx)(i.Z, {
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              className: x,
              type: d,
              onClick: N,
              "aria-label": m,
              children: (0, r.jsx)("p", {
                style: { width: j },
                className: "overflow-hidden whitespace-nowrap",
                ref: w,
                children: b,
              }),
            })
          : (0, r.jsx)(a.Z, {
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              className: x,
              type: d,
              onClick: N,
              isSecondary: !0,
              hideCorners: f,
              "aria-label": m,
              children: (0, r.jsx)("p", {
                style: { width: j },
                className: "overflow-hidden whitespace-nowrap",
                ref: w,
                children: b,
              }),
            });
      };
    },
    1865: function (e, t, l) {
      "use strict";
      var r = l(7437),
        a = l(6164),
        s = l(4894),
        i = l.n(s);
      t.Z = (e) => {
        let { selectedIndex: t, slidesCount: l } = e;
        if (0 === l) return null;
        let s = ((t + 1) / l) * 100;
        return (0, r.jsx)("div", {
          className:
            "w-full flex justify-center pt-6 pb-6 px-4 [@media(min-width:768px)]:px-0 md:mr-0 md:pt-8 md:pb-8",
          children: (0, r.jsxs)("div", {
            className: "flex items-center w-full",
            children: [
              (0, r.jsxs)("span", {
                className: (0, a.m6)(
                  "text-base font-bold uppercase",
                  "pr-12 md:pr-16",
                  i().className
                ),
                children: ["[", t + 1, "/", l, "]"],
              }),
              (0, r.jsx)("div", {
                className:
                  "relative flex-1 h-[2px]  bg-white/20 rounded-full overflow-hidden",
                children: (0, r.jsx)("div", {
                  className:
                    "absolute top-0 left-0 h-full bg-gradient-to-r from-[#EC10FD] via-[#604BE7] to-[#604BE7] transition-all duration-300",
                  style: { width: "".concat(s, "%") },
                }),
              }),
            ],
          }),
        });
      };
    },
    3310: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = l(7437),
        a = l(2265),
        s = l(4887),
        i = (e) => {
          let { children: t } = e,
            l =
              (function () {
                let e = (0, a.useRef)(!1);
                return (
                  (0, a.useEffect)(
                    () => (
                      (e.current = !0),
                      () => {
                        e.current = !1;
                      }
                    ),
                    []
                  ),
                  e.current
                );
              })() && document.getElementById("portal");
          return l ? (0, s.createPortal)(t, l) : null;
        },
        n = l(7815),
        o = (e) => {
          let { isOpened: t, onClose: l, children: s } = e,
            i = (0, a.useRef)(null);
          return ((0, a.useEffect)(
            () => (
              t
                ? (document.documentElement.classList.add("overflow-hidden"),
                  document.body.classList.add("overflow-hidden"))
                : (document.documentElement.classList.remove("overflow-hidden"),
                  document.body.classList.remove("overflow-hidden")),
              () => {
                document.documentElement.classList.remove("overflow-hidden"),
                  document.body.classList.remove("overflow-hidden");
              }
            ),
            [t]
          ),
          t)
            ? (0, r.jsx)("div", {
                className:
                  "fixed inset-0 z-[1000] flex flex-col overflow-y-auto bg-black",
                children: (0, r.jsxs)("div", {
                  ref: i,
                  className: "w-full relative mx-auto overflow-y-auto",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "sticky top-0 z-[2] w-full max-w-[100%] flex justify-end mb-[-64px]",
                      children: (0, r.jsxs)(n.Z, {
                        onClick: l,
                        className:
                          "relative group w-[48px] h-[48px] md:w-[64px] md:h-[64px]",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "top-[20px] right-[20px] absolute inset-0 button-glow-purple blur-[16px] will-change-[filter] group-hover:blur-[32px]",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "top-[20px] right-[20px] relative w-full h-full button-custom-clip  button-bg-purple button-glow-purple-hover flex items-center justify-center overflow-hidden",
                            children: (0, r.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "relative w-[12px] h-[12px] md:w-[16px] md:h-[16px]",
                              children: (0, r.jsx)("g", {
                                transform:
                                  "translate(12, 12) scale(1.6667) translate(-12, -12)",
                                children: (0, r.jsx)("path", {
                                  d: "M18 6L6 18M6 6L18 18",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    s,
                  ],
                }),
              })
            : null;
        },
        c = (e) => {
          let { isOpened: t, onClose: l, children: a } = e;
          return (0, r.jsx)(i, {
            children: (0, r.jsx)(o, { isOpened: t, onClose: l, children: a }),
          });
        };
    },
    4161: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(1154),
        n = l(6164),
        o = l(8601);
      let c = "".concat(
        "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static/assets"),
        "/accordion-info-mark.svg"
      );
      var d = (e) => {
        let { title: t, detailsText: l, detailsFootnote: i } = e,
          [d, u] = (0, a.useState)(!1),
          p = l || i;
        return (0, r.jsxs)("div", {
          className: "w-full bg-[#131313] flex flex-col items-center",
          children: [
            (0, r.jsxs)("button", {
              onClick: () => {
                l && u(!d);
              },
              className: (0, n.m6)(
                "text-xl w-full px-4 py-4 font-medium text-white flex items-center gap-x-4 justify-center",
                d && "border-b-[#202020] border-b-[1px]",
                !p && "cursor-default"
              ),
              children: [
                (0, r.jsx)("span", { children: t }),
                p &&
                  (0, r.jsx)(s.Z, {
                    alt: "",
                    className: (0, n.m6)(
                      "transform text-blue-700 transition-all duration-300",
                      d ? "rotate-0" : "rotate-180"
                    ),
                    src: c,
                    height: 16,
                    width: 16,
                  }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: (0, n.m6)(
                "scrollbar-hide relative px-4 md:px-0 flex flex-col gap-y-4 overflow-y-auto transform transition-all duration-300 max-w-[640px] [&>p>ul]:list-inside [&>p>ul]:list-disc ".concat(
                  d ? "max-h-[1000px] py-8" : "max-h-0 overflow-hidden"
                )
              ),
              children: [
                l &&
                  (0, r.jsx)("p", {
                    className: "text-white text-lg lg:text-xl",
                    children: (0, o.ZP)(l),
                  }),
                i &&
                  (0, r.jsx)("p", {
                    className: "text-[#8f8f8f] text-sm leading-[17px]",
                    children: (0, o.ZP)(i),
                  }),
              ],
            }),
          ],
        });
      };
      l(4590);
      var u = (0, l(8064).$)("c6fa8b1b0c1c3f4fc9e3d3c0f3599eb0ccfe3efe"),
        p = l(6797),
        x = l(4894),
        m = l.n(x),
        h = l(2283),
        f = l(9039),
        v = l(1826),
        g = l(4989);
      let w = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        b = "".concat(w, "/positive-tick.svg"),
        j = "".concat(w, "/negative-tick.svg");
      var y = (e) => {
        var t, l, a, o;
        let { packageSlugList: c, pageTitle: x } = e,
          w = c && c.join(""),
          { data: y, isLoading: N } = (0, f.ZP)(w, () => u(c)),
          {
            title: k,
            firstPackage: Z,
            secondPackage: L,
            packagesGroupList: S,
            coverImage: P,
            coverImageSmall: E,
          } = y || {},
          C = (null == c ? void 0 : c.length) === 1,
          T = C && Array.isArray(c) && c[0],
          _ = T === (null == Z ? void 0 : Z.slug) ? Z : L,
          q = T === (null == Z ? void 0 : Z.slug),
          R = [Z, L],
          I = null != x ? x : "Alle Leistungen im <span>Verlgeich</span>";
        return (0, r.jsx)("div", {
          className: (0, n.m6)(
            "relative flex flex-col min-w-screen min-h-screen bg-[#202020]"
          ),
          children: N
            ? (0, r.jsx)(v.default, {})
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "relative flex flex-col w-full h-[420px] lg:h-[560px] items-center justify-center",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "max-w-[708px] flex flex-col gap-y-8 w-full items-center justify-center text-center z-[1] px-4 md:px-0",
                        children: [
                          k &&
                            (0, r.jsx)(p.Z, {
                              className: "uppercase",
                              children: k,
                            }),
                          I &&
                            (0, r.jsx)(p.Z, {
                              level: 3,
                              className: (0, n.m6)("uppercase"),
                              children: I,
                            }),
                          C &&
                            (null == _ ? void 0 : _.button) &&
                            (0, r.jsx)(h.Z, {
                              coreColor: "Red",
                              "aria-label": _.button.label,
                              href: _.button.path,
                              children: _.button.label,
                            }),
                        ],
                      }),
                      P &&
                        (0, r.jsx)(s.Z, {
                          alt: P.alternativeText,
                          src: (0, g.Z)(
                            null === (l = P.format) || void 0 === l
                              ? void 0
                              : null === (t = l.original) || void 0 === t
                              ? void 0
                              : t.url
                          ),
                          className:
                            "hidden md:block absolute w-full h-full object-cover",
                          quality: 80,
                          height: 560,
                          width: 1477,
                        }),
                      E &&
                        (0, r.jsx)(s.Z, {
                          alt: E.alternativeText,
                          src: (0, g.Z)(
                            null === (o = E.format) || void 0 === o
                              ? void 0
                              : null === (a = o.original) || void 0 === a
                              ? void 0
                              : a.url
                          ),
                          className:
                            "md:hidden absolute w-full h-full object-cover",
                          quality: 80,
                          height: 560,
                          width: 390,
                        }),
                    ],
                  }),
                  !C &&
                    (0, r.jsx)("div", {
                      className:
                        "flex w-full items-center justify-center bg-black sticky top-0 z-[1]",
                      children:
                        (null == R ? void 0 : R.length) &&
                        R.map((e) => {
                          var t;
                          let { button: l, title: a, id: s } = e || {};
                          return (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "w-1/2 py-10 lg:py-[72px] gap-y-6 flex flex-col items-center justify-center first:border-r-[1px] h-full first:border-r-[#202020]",
                              children: [
                                a &&
                                  (0, r.jsx)(p.Z, {
                                    level: 2,
                                    className: "uppercase z-[1]",
                                    children: a,
                                  }),
                                l &&
                                  (0, r.jsx)(h.Z, {
                                    coreColor: "Red",
                                    "aria-label": l.label,
                                    target:
                                      null === (t = l.linkOptions) ||
                                      void 0 === t
                                        ? void 0
                                        : t.target,
                                    href: l.path,
                                    children: l.label,
                                  }),
                              ],
                            },
                            s
                          );
                        }),
                    }),
                  (0, r.jsx)("div", {
                    children:
                      (null == S ? void 0 : S.length) &&
                      S.map((e) => {
                        let { title: t, groupList: l, id: a } = e || {};
                        return (0, r.jsxs)(
                          "div",
                          {
                            className: "relative flex flex-col w-full",
                            children: [
                              (0, r.jsx)(i.default, {
                                title: t,
                                isNoAnimationMode: !0,
                              }),
                              l.map((e) => {
                                let {
                                    id: t,
                                    attributeTitle: l,
                                    attributeDescription: a,
                                    attributeFootnote: i,
                                    firstPackageCheckMark: o,
                                    firstPackageText: c,
                                    firstPackageFootNote: u,
                                    secondPackageCheckMark: p,
                                    secondPackageFootnote: x,
                                    secondPackageText: h,
                                  } = e,
                                  f = [];
                                return (
                                  C ||
                                    (f.push({
                                      packageCheckMark: o,
                                      packageText: c,
                                      packageFootNote: u,
                                    }),
                                    f.push({
                                      packageCheckMark: p,
                                      packageText: h,
                                      packageFootNote: x,
                                    })),
                                  C &&
                                    q &&
                                    f.push({
                                      packageCheckMark: o,
                                      packageText: c,
                                      packageFootNote: u,
                                    }),
                                  C &&
                                    !q &&
                                    f.push({
                                      packageCheckMark: p,
                                      packageText: h,
                                      packageFootNote: x,
                                    }),
                                  (0, r.jsxs)(
                                    "div",
                                    {
                                      className: "w-full flex flex-col",
                                      children: [
                                        (0, r.jsx)(d, {
                                          title: l,
                                          detailsText: a,
                                          detailsFootnote: i,
                                        }),
                                        (0, r.jsx)("div", {
                                          className: (0, n.m6)(
                                            "w-full py-10 flex",
                                            C &&
                                              "flex-col items-center justify-center"
                                          ),
                                          children: f.map((e, t) => {
                                            let {
                                              packageCheckMark: l,
                                              packageText: a,
                                              packageFootNote: i,
                                            } = e;
                                            return (0, r.jsx)(
                                              "div",
                                              {
                                                className: (0, n.m6)(
                                                  "flex flex-col items-center justify-center w-1/2 text-center mx-auto max-w-[640px] px-4 md:px-0",
                                                  C && "w-full"
                                                ),
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "flex flex-col items-center gap-y-2",
                                                  children: [
                                                    a &&
                                                      (0, r.jsx)("span", {
                                                        className: (0, n.m6)(
                                                          "text-xl lg:text-5xl font-bold uppercase",
                                                          m().className
                                                        ),
                                                        children: a,
                                                      }),
                                                    !a &&
                                                      l &&
                                                      (0, r.jsx)(s.Z, {
                                                        alt: "",
                                                        className: (0, n.m6)(
                                                          "w-12 h-12"
                                                        ),
                                                        src: b,
                                                        height: 48,
                                                        width: 48,
                                                      }),
                                                    !a &&
                                                      !l &&
                                                      (0, r.jsx)(s.Z, {
                                                        alt: "",
                                                        className: (0, n.m6)(
                                                          "w-12 h-12"
                                                        ),
                                                        src: j,
                                                        height: 48,
                                                        width: 48,
                                                      }),
                                                    i &&
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-sm text-[#8f8f8f] leading-[16px]",
                                                        children: i,
                                                      }),
                                                  ],
                                                }),
                                              },
                                              t
                                            );
                                          }),
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                );
                              }),
                            ],
                          },
                          a
                        );
                      }),
                  }),
                ],
              }),
        });
      };
    },
    6387: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(6164),
        n = l(4989),
        o = l(9039);
      l(4590);
      var c = (0, l(8064).$)("22237b66ea327ce6e21f40af8e7e8c544e322efe"),
        d = l(4894),
        u = l.n(d),
        p = l(6797),
        x = l(9123),
        m = l(8601),
        h = l(1068),
        f = l(9754),
        v = l.n(f);
      let g = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        w = "".concat(g, "/сrosses.svg"),
        b = "".concat(g, "/overlay-video-frame-portrait.png"),
        j = "".concat(g, "/overlay-video-frame.png"),
        y = "".concat(g, "/overlay-image-frame.png"),
        N = "".concat(g, "/overlay-decoration-circles.svg"),
        k = "".concat(g, "/overlay-decoration-rounds.svg");
      var Z = (e) => {
        var t, l, d, f, g, Z;
        let { slug: L } = e,
          { data: S, isLoading: P } = (0, o.ZP)(L, () => c(L)),
          {
            topLine: E,
            title: C,
            shortDescription: T,
            media: _,
            coverImage: q,
            button: R,
          } = S || {},
          I = null == _ ? void 0 : _.isVideo,
          z = (0, a.useRef)(null),
          [M, A] = (0, a.useState)(!1),
          [O, B] = (0, a.useState)(!1),
          F = (0, a.useRef)(null),
          V = (0, x.Z)((e) => e.setIsGlobalLoaderVisible),
          H = (0, a.useRef)(null),
          D = (0, a.useRef)(null),
          [W, U] = (0, a.useState)(0),
          [X, J] = (0, a.useState)(!1),
          Y =
            (null == D
              ? void 0
              : null === (l = D.current) || void 0 === l
              ? void 0
              : null === (t = l.lastChild) || void 0 === t
              ? void 0
              : t.offsetHeight) > window.innerHeight;
        if (
          ((0, a.useEffect)(() => {
            let e = window.innerWidth > 944;
            if ((null == H ? void 0 : H.current) && e) {
              let e = H.current.offsetHeight;
              U(window.innerHeight / 2 - e / 2);
            }
            e || U(0), J(!1);
          }, [X, S]),
          (0, h.Z)({
            onResize: () => {
              J(!0);
            },
          }),
          (0, a.useEffect)(() => {
            P ? V(!0) : V(!1);
          }, [P]),
          !S)
        )
          return null;
        let G = M ? b : j;
        return (0, r.jsxs)("div", {
          className: (0, i.m6)(
            "relative min-w-screen min-h-[100dvh] bg-[#202020]"
          ),
          children: [
            (0, r.jsx)("div", { className: v()["fixed-overlay-background"] }),
            (0, r.jsxs)("div", {
              className: (0, i.m6)(
                "relative w-full h-[100dvh] flex flex-col items-center",
                I ? "justify-center" : "md:justify-center"
              ),
              children: [
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className:
                    "hidden md:block absolute left-[10px] lg:left-[34px] top-1/2 -translate-y-[50%] w-6 h-[96px] z-[1]",
                  src: w,
                  height: 96,
                  width: 24,
                }),
                (0, r.jsxs)("div", {
                  className: (0, i.m6)(
                    "relative w-full h-full flex flex-col md:flex-row items-center md:items-start justify-between gap-x-[54px] gap-y-8 lg:gap-x-[64px] px-4 pb-4 md:px-[91px] lg:px-[114px] z-[1] pt-[120px] md:pt-0 overflow-y-auto",
                    I && "justify-center pt-0 h-auto overflow-visible"
                  ),
                  children: [
                    (0, r.jsxs)("div", {
                      ref: H,
                      style: { top: W },
                      className: (0, i.m6)(
                        "relative w-full md:w-[42.5%] lg:w-[46%] aspect-[1/1] shrink-0 flex flex-col justify-center md:sticky",
                        I &&
                          "max-w-none md:w-[778px] lg:w-[778px] md:h-[454px] md:p-4 aspect-auto h-full landscape:w-1/2 md:landscape:w-[778px]",
                        I &&
                          M &&
                          "max-w-[67%] max-h-[75vh] md:landscape:max-h-[80vh] md:w-[454px] lg:w-[454px] md:h-[778px] aspect-auto landscape:w-[19%] md:landscape:w-auto w-auto"
                      ),
                      children: [
                        (0, r.jsx)(s.Z, {
                          className: (0, i.m6)(
                            "absolute object-fill w-full h-full pointer-events-none",
                            I && "hidden md:block"
                          ),
                          alt: "",
                          src: I ? G : y,
                          fill: !0,
                        }),
                        E &&
                          (0, r.jsxs)("div", {
                            className:
                              "absolute left-0 -top-6 flex gap-x-2 items-center z-[1]",
                            children: [
                              (0, r.jsx)("svg", {
                                width: "9",
                                height: "9",
                                viewBox: "0 0 9 9",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, r.jsx)("rect", {
                                  width: "9",
                                  height: "9",
                                  fill: "white",
                                }),
                              }),
                              (0, r.jsx)("p", {
                                className: (0, i.m6)(
                                  "text-xs lg:text-sm font-bold -tracking-[1px] uppercase",
                                  u().className
                                ),
                                children: E,
                              }),
                            ],
                          }),
                        !O &&
                          I &&
                          (0, r.jsx)("button", {
                            ref: F,
                            onClick: () => {
                              if ((B(!0), null == z ? void 0 : z.current)) {
                                var e;
                                null === (e = z.current) ||
                                  void 0 === e ||
                                  e.play();
                              }
                            },
                            className:
                              "z-[1] w-[52px] h-[52px] bg-pink-900 absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] row-start-1 col-start-1 flex items-center justify-center",
                            children: (0, r.jsx)("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, r.jsx)("path", {
                                d: "M6 4L18 12L6 20V4Z",
                                fill: "black",
                              }),
                            }),
                          }),
                        _ &&
                          (0, r.jsx)(r.Fragment, {
                            children: I
                              ? (0, r.jsx)("video", {
                                  ref: z,
                                  className: (0, i.m6)(
                                    "w-auto h-auto object-contain",
                                    M && "h-full max-h-[75vh]"
                                  ),
                                  onLoadedMetadata: () => {
                                    if (z.current) {
                                      let { videoWidth: e, videoHeight: t } =
                                        z.current;
                                      t > e && A(!0);
                                    }
                                  },
                                  playsInline: !0,
                                  src:
                                    (0, n.Z)(
                                      null === (f = _.format) || void 0 === f
                                        ? void 0
                                        : null === (d = f.original) ||
                                          void 0 === d
                                        ? void 0
                                        : d.url
                                    ) + "#t=0.1",
                                  controls: O,
                                  muted: !O,
                                  loop: !0,
                                })
                              : (0, r.jsx)(s.Z, {
                                  alt: _.alternativeText,
                                  src: (0, n.Z)(
                                    null === (Z = _.format) || void 0 === Z
                                      ? void 0
                                      : null === (g = Z.original) ||
                                        void 0 === g
                                      ? void 0
                                      : g.url
                                  ),
                                  className:
                                    "absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] object-cover w-[66.2%] aspect-[1/1]",
                                  quality: 80,
                                  height: 500,
                                  width: 500,
                                }),
                          }),
                        !I &&
                          (0, r.jsx)(s.Z, {
                            alt: "",
                            className:
                              "w-[96px] h-6 z-[1] hidden md:block absolute md:left-0 top-[104%]",
                            src: N,
                            height: 24,
                            width: 96,
                          }),
                      ],
                    }),
                    !I &&
                      (0, r.jsxs)("div", {
                        ref: D,
                        className:
                          "flex flex-col justify-center md:justify-start h-auto w-full gap-y-6 mb-8 md:mb-0 md:max-h-[42vw] md:self-center",
                        children: [
                          C &&
                            (0, r.jsx)(p.Z, {
                              level: 3,
                              className: (0, i.m6)("uppercase"),
                              children: C,
                            }),
                          T &&
                            (0, r.jsx)("p", {
                              className: (0, i.m6)(
                                "text-lg lg:text-xl ",
                                Y && "pb-[100px]"
                              ),
                              children: (0, m.ZP)(T),
                            }),
                        ],
                      }),
                  ],
                }),
                I &&
                  (0, r.jsx)(s.Z, {
                    alt: "",
                    className: (0, i.m6)(
                      "absolute left-1/2 -translate-x-[50%] bottom-10 w-[100px] h-[100px] landscape:w-[50px] landscape:h-[50px] landscape:bottom-5 z-[1] landscape:hidden md:landscape:block",
                      I && M && "hidden md:landscape:hidden"
                    ),
                    src: k,
                    height: 100,
                    width: 100,
                  }),
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className:
                    "hidden md:block absolute right-[10px] lg:right-[34px] top-1/2 -translate-y-[50%] w-6 h-[96px] z-[1]",
                  src: w,
                  height: 96,
                  width: 24,
                }),
              ],
            }),
          ],
        });
      };
    },
    2587: function (e, t, l) {
      "use strict";
      var r = l(7437),
        a = l(2265),
        s = l(5303),
        i = l(6164),
        n = l(9754),
        o = l(3417),
        c = l(4398),
        d = l(7239);
      let u = "".concat(
          "https://d1qr1ypgp57apv.cloudfront.net",
          "/static/assets"
        ),
        p = "".concat(u, "/сrosses.svg"),
        x = "".concat(u, "/overlay-video-frame-portrait.png"),
        m = "".concat(u, "/overlay-video-frame.png"),
        h = "".concat(u, "/overlay-decoration-rounds.svg");
      t.Z = (e) => {
        let { mediaUrl: t, autoPlay: l = !1 } = e,
          u = (0, a.useRef)(null),
          [f, v] = (0, a.useState)(!1),
          [g, w] = (0, a.useState)(!1),
          b = (0, a.useRef)(null);
        if (
          ((0, a.useEffect)(() => {
            let e = b.current;
            if (e && !c.tq) {
              let t = (t) => (0, o.p)({ e: t, sectionEl: e });
              return (
                e.addEventListener("mousemove", t),
                () => {
                  e.removeEventListener("mousemove", t);
                }
              );
            }
          }, []),
          (0, a.useEffect)(() => {
            if (!l) return;
            let e = u.current;
            if (e) {
              let t = e.play();
              void 0 !== t &&
                t
                  .then(() => {
                    w(!0);
                  })
                  .catch((e) => {
                    console.log("Autoplay prevented:", e);
                  });
            }
          }, [t, l]),
          (0, a.useEffect)(() => {
            let e = u.current;
            if (!e) return;
            let t = () => {
                e.muted = !1;
                let t = e.play();
                void 0 !== t &&
                  t
                    .then(() => {
                      w(!0);
                    })
                    .catch((e) => {
                      console.log("Autoplay prevented:", e);
                    });
              },
              l = null;
            return (
              e.readyState >= 2
                ? t()
                : ((l = () => {
                    t(), l && e.removeEventListener("canplay", l);
                  }),
                  e.addEventListener("canplay", l)),
              () => {
                e &&
                  (e.pause(),
                  (e.currentTime = 0),
                  l && e.removeEventListener("canplay", l));
              }
            );
          }, []),
          !t)
        )
          return null;
        let j = f ? x : m;
        return (0, r.jsxs)("div", {
          className: (0, i.m6)(
            "relative min-w-screen min-h-[100dvh] bg-[#202020]"
          ),
          children: [
            (0, r.jsx)("div", { className: n["fixed-overlay-background"] }),
            (0, r.jsxs)("div", {
              className: (0, i.m6)(
                "relative w-full h-[100dvh] flex flex-col items-center justify-center"
              ),
              children: [
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className:
                    "hidden md:block absolute left-[10px] lg:left-[34px] top-1/2 -translate-y-[50%] w-6 h-[96px] z-[1]",
                  src: p,
                  height: 96,
                  width: 24,
                }),
                (0, r.jsx)("div", {
                  className: (0, i.m6)(
                    "relative w-full h-auto flex flex-col md:flex-row items-center gap-x-[54px] gap-y-8 lg:gap-x-[64px] px-4 md:px-[91px] lg:px-[114px] z-[1] md:pt-0 overflow-y-auto md:overflow-visible justify-center pt-0"
                  ),
                  children: (0, r.jsxs)("div", {
                    className: (0, i.m6)(
                      "relative w-full shrink-0 max-w-none md:w-[778px] lg:w-[778px] md:h-[454px] md:p-4 aspect-auto h-full landscape:w-1/2 md:landscape:w-[778px]",
                      f &&
                        "max-w-[67%] max-h-[75vh] md:landscape:max-h-[80vh] md:w-[454px] lg:w-[454px] md:h-[778px] aspect-auto landscape:w-[19%] md:landscape:w-auto"
                    ),
                    children: [
                      (0, r.jsx)(s.Z, {
                        className: (0, i.m6)(
                          "absolute object-fill w-full h-full hidden md:block pointer-events-none"
                        ),
                        alt: "",
                        src: j,
                        fill: !0,
                      }),
                      !g &&
                        (0, r.jsx)("div", {
                          className:
                            "z-[1] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] row-start-1 col-start-1 group w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex items-center justify-center",
                          children: (0, r.jsx)("button", {
                            ref: b,
                            onClick: () => {
                              if ((w(!0), null == u ? void 0 : u.current)) {
                                var e;
                                null === (e = u.current) ||
                                  void 0 === e ||
                                  e.play();
                              }
                            },
                            className:
                              "w-full h-full relative button-custom-clip bg-white arrow-right-wrapper arrow-glow-purple-hover overflow-hidden transition-colors duration-200 flex items-center justify-center",
                            children: (0, r.jsx)(d.Z, {}),
                          }),
                        }),
                      (0, r.jsx)("video", {
                        ref: u,
                        className: (0, i.m6)(
                          "w-auto h-auto object-contain",
                          f && "h-full max-h-[75vh]"
                        ),
                        onLoadedMetadata: () => {
                          if (u.current) {
                            let { videoWidth: e, videoHeight: t } = u.current;
                            t > e && v(!0);
                          }
                        },
                        playsInline: !0,
                        autoPlay: l,
                        src: t + "#t=0.1",
                        controls: g,
                        muted: !1,
                        loop: !0,
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className: (0, i.m6)(
                    "absolute left-1/2 -translate-x-[50%] bottom-10 w-[100px] h-[100px] landscape:w-[50px] landscape:h-[50px] landscape:bottom-5 z-[1] landscape:hidden md:landscape:block",
                    f && "hidden"
                  ),
                  src: h,
                  height: 100,
                  width: 100,
                }),
                (0, r.jsx)(s.Z, {
                  alt: "",
                  className:
                    "hidden md:block absolute right-[10px] lg:right-[34px] top-1/2 -translate-y-[50%] w-6 h-[96px] z-[1]",
                  src: p,
                  height: 96,
                  width: 24,
                }),
              ],
            }),
          ],
        });
      };
    },
    2336: function (e, t, l) {
      "use strict";
      var r = l(2265);
      t.Z = () => {
        let [e, t] = (0, r.useState)(!1),
          [l, a] = (0, r.useState)(null);
        return {
          isOpened: e,
          openModal: (0, r.useCallback)((e) => {
            a(e), t(!0);
          }, []),
          closeModal: (0, r.useCallback)(() => {
            a(null), t(!1);
          }, []),
          modalContent: l,
        };
      };
    },
    2814: function (e, t) {
      "use strict";
      t.Z = ".gsapPinContainer";
    },
    7722: function (e) {
      "use strict";
      e.exports = {
        mode: "jit",
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          fontSize: {
            xs: ["10px", "10px"],
            sm: ["12px", "12px"],
            base: ["14px", "20px"],
            lg: ["16px", "22px"],
            xl: ["18px", "25px"],
            "2xl": ["20px", "28px"],
            "3xl": ["24px", "24px"],
            "4xl": ["28px", "28px"],
            "5xl": ["32px", "32px"],
            "6xl": ["48px", "48px"],
            "7xl": ["56px", "56px"],
            "8xl": ["80px", "80px"],
          },
          screens: { xs: "390px", md: "944px", lg: "1280px", xl: "1920px" },
          extend: {
            colors: {
              neutral: { 800: "#262626" },
              red: { 900: "#FF0642" },
              purple: { 900: "#D8ADFD" },
              cyan: { 900: "#46EEF9" },
              violet: { 900: "#6852FD" },
              pink: { 900: "#FF07FE" },
              gray: { 900: "#9D9D9C" },
            },
            dropShadow: { "3xl": "0 45px 35px rgba(0, 0, 0, 0.6)" },
          },
        },
        plugins: [],
      };
    },
    7042: function (e) {
      e.exports = {
        active_section: "styles_active_section__QsFUE",
        debug: "styles_debug__oOD2S",
        withinBottomSpacing: "styles_withinBottomSpacing__Od1Pw",
      };
    },
    9754: function (e) {
      e.exports = {
        "overlay-background": "styles_overlay-background__36uMu",
        "fixed-overlay-background": "styles_fixed-overlay-background__KRFJc",
      };
    },
  },
]);
