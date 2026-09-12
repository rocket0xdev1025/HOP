"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [357],
  {
    8377: function (e, t, r) {
      r.d(t, {
        N: function () {
          return n;
        },
      });
      let n = (0, r(903).U)((e) => ({
        render: !1,
        setRender: (t) => e({ render: t }),
        monitorReady: !1,
        setMonitorReady: (t) => e({ monitorReady: t }),
      }));
    },
    4172: function (e, t, r) {
      r.d(t, {
        TransitionLink: function () {
          return a;
        },
      });
      var n = r(7437);
      r(2265);
      var o = r(6463),
        i = r(921),
        l = r(9123);
      let a = (e) => {
        let { children: t, href: r, isExternal: a, onClick: s, ...u } = e,
          c = (0, o.usePathname)(),
          d = (0, l.Z)((e) => e.setIsGlobalLoaderVisible);
        return (0, n.jsx)(i.Z, {
          ...u,
          href: r,
          onClick: (e) => {
            (c.includes(r.toString()) && ("/" !== r || r === c)) || a || d(!0),
              s && s(e);
          },
          children: t,
        });
      };
    },
    2283: function (e, t, r) {
      var n,
        o = r(7437),
        i = r(7815),
        l = r(6164),
        a = r(2265),
        s = r(3417),
        u = r(4172),
        c = r(4398);
      ((n || (n = {})).Red = "Red"),
        (t.Z = (e) => {
          let {
              coreColor: t,
              isBorderCorners: r = !1,
              isUppercaseDisable: n = !1,
              isSecondary: d = !1,
              isBig: p = !1,
              disabled: v = !1,
              type: m,
              href: f = " ",
              onClick: h,
              children: x,
              className: b,
              target: g,
              textClasses: w,
              hideCorners: y = !1,
              ...E
            } = e,
            L = (0, a.useRef)(null),
            N = "absolute w-2 h-2 border-white",
            j = "button" === m,
            Z = j ? i.Z : u.TransitionLink,
            T = {
              className: (0, l.m6)(
                "relative block text-white text-center font-bold text-sm md:text-[14px] leading-4 overflow-hidden py-[14px] md:py-[15px] px-5",
                !n && "uppercase",
                p &&
                  "button-big text-[16px] md:text-2xl py-[14px] md:py-[18px] px-10 big-button-custom-clip hyphens-auto md:hyphens-none",
                !d && "button-bg-red button-glow-red-hover",
                r ? "text-2xl py-2 px-4" : "button-custom-clip",
                d &&
                  "bg-none button-custom-clip flex items-center gap-x-2 text-lg py-[10px] px-4"
              ),
              ...(h && { onClick: h }),
              ...(!j && f && { href: f }),
              ...(j && { type: "button" }),
              ...(!j && f && { target: g }),
              disabled: v,
              ...E,
            };
          return (
            (0, a.useEffect)(() => {
              if (L.current && t && !c.tq)
                return (
                  L.current.addEventListener("mousemove", (e) =>
                    (0, s.p)({ e, sectionEl: L.current })
                  ),
                  () => {
                    var e;
                    null === (e = L.current) ||
                      void 0 === e ||
                      e.removeEventListener("mousemove", (e) =>
                        (0, s.p)({ e, sectionEl: L.current })
                      );
                  }
                );
            }, [L]),
            (0, o.jsx)("div", {
              className: "flex gap-4 relative",
              children: (0, o.jsxs)("div", {
                ref: L,
                className: (0, l.m6)("relative group", r && "p-2", b),
                children: [
                  !d &&
                    (0, o.jsx)("div", {
                      className: (0, l.m6)(
                        "absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] block w-full h-full button-glow-purple transition duration-200 blur-[16px] will-change-[filter] group-hover:blur-[32px]",
                        r &&
                          "rotate-0 w-[calc(100%_-_1rem)] h-[calc(100%_-_1rem)]",
                        "button-glow-red "
                      ),
                    }),
                  (0, o.jsx)(Z, {
                    ...T,
                    children: (0, o.jsx)("span", {
                      className: (0, l.m6)("relative", w),
                      children: x,
                    }),
                  }),
                  (d || r) &&
                    !y &&
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)("div", {
                          className: (0, l.m6)(
                            "top-0 left-0 border-t-2 border-l-2 transition-all ease-in-out duration-200",
                            N,
                            d &&
                              "border-t-[1px] border-l-[1px] group-hover:top-[4px] group-hover:left-[4px]",
                            r &&
                              "group-hover:top-[-4px] group-hover:left-[-4px]"
                          ),
                        }),
                        (0, o.jsx)("div", {
                          className: (0, l.m6)(
                            "top-0 right-0 border-t-2 border-r-2 transition-all ease-in-out duration-200",
                            N,
                            d &&
                              "border-t-[1px] border-r-[1px] group-hover:top-[4px] group-hover:right-[4px]",
                            r &&
                              "group-hover:top-[-4px] group-hover:right-[-4px]"
                          ),
                        }),
                        (0, o.jsx)("div", {
                          className: (0, l.m6)(
                            "bottom-0 left-0 border-b-2 border-l-2 transition-all ease-in-out duration-200",
                            N,
                            d &&
                              "border-b-[1px] border-l-[1px] group-hover:bottom-[4px] group-hover:left-[4px]",
                            r &&
                              "group-hover:bottom-[-4px] group-hover:left-[-4px]"
                          ),
                        }),
                        (0, o.jsx)("div", {
                          className: (0, l.m6)(
                            "bottom-0 right-0 border-b-2 border-r-2 transition-all ease-in-out duration-200",
                            N,
                            d &&
                              "border-b-[1px] border-r-[1px] group-hover:bottom-[4px] group-hover:right-[4px]",
                            r &&
                              "group-hover:bottom-[-4px] group-hover:right-[-4px]"
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        });
    },
    7815: function (e, t, r) {
      var n = r(7437);
      r(2265),
        (t.Z = (e) => {
          let { children: t, type: r = "button", className: o = "", ...i } = e;
          return (0, n.jsx)("button", {
            className: o,
            type: r,
            ...i,
            children: t,
          });
        });
    },
    6014: function (e, t, r) {
      var n = r(7437),
        o = r(2265),
        i = r(3393),
        l = r.n(i),
        a = r(4989),
        s = r(6164);
      let u = (0, o.forwardRef)((e, t) => {
        let {
            animation: r,
            className: i,
            loop: u = !0,
            autoplay: c = !0,
            style: d,
            hideLoading: p = !1,
          } = e,
          [v, m] = (0, o.useState)(null),
          [f, h] = (0, o.useState)(!0),
          [x, b] = (0, o.useState)(null),
          g = (0, o.useRef)(null);
        return ((0, o.useEffect)(() => {
          if (!r || !r.isJSON) {
            h(!1);
            return;
          }
          (async () => {
            try {
              var e, t;
              h(!0), b(null);
              let n = (0, a.Z)(
                  (null === (t = r.format) || void 0 === t
                    ? void 0
                    : null === (e = t.original) || void 0 === e
                    ? void 0
                    : e.url) || r.url
                ),
                o = await fetch(n);
              if (!o.ok)
                throw Error("Failed to fetch animation: ".concat(o.statusText));
              let i = await o.json();
              m(i);
            } catch (e) {
              console.error("Error loading Lottie animation:", e),
                b(e instanceof Error ? e.message : "Failed to load animation");
            } finally {
              h(!1);
            }
          })();
        }, [r]),
        (0, o.useImperativeHandle)(t, () => ({
          play: () => {
            var e;
            null === (e = g.current) || void 0 === e || e.play();
          },
          pause: () => {
            var e;
            null === (e = g.current) || void 0 === e || e.pause();
          },
          stop: () => {
            var e;
            null === (e = g.current) || void 0 === e || e.stop();
          },
          goToAndPlay: (e, t) => {
            var r;
            null === (r = g.current) || void 0 === r || r.goToAndPlay(e, t);
          },
        })),
        r && r.isJSON)
          ? f
            ? p
              ? null
              : (0, n.jsx)("div", {
                  className: (0, s.m6)("flex items-center justify-center", i),
                  style: d,
                  children: (0, n.jsx)("div", {
                    className: "text-sm text-gray-400",
                    children: "Loading animation...",
                  }),
                })
            : x
            ? (0, n.jsx)("div", {
                className: (0, s.m6)("flex items-center justify-center", i),
                style: d,
                children: (0, n.jsxs)("div", {
                  className: "text-sm text-red-400",
                  children: ["Error: ", x],
                }),
              })
            : v
            ? (0, n.jsx)(l(), {
                lottieRef: g,
                animationData: v,
                loop: u,
                autoplay: c,
                className: i,
                style: d,
              })
            : null
          : null;
      });
      (u.displayName = "LottieAnimation"), (t.Z = u);
    },
    5303: function (e, t, r) {
      var n = r(7437),
        o = r(6648);
      t.Z = (e) => {
        let {
          src: t,
          alt: r,
          width: i,
          height: l,
          className: a = "",
          ...s
        } = e;
        return null === t
          ? null
          : (0, n.jsx)(o.default, {
              src: t,
              alt: r,
              width: i,
              height: l,
              className: a,
              ...s,
            });
      };
    },
    921: function (e, t, r) {
      var n = r(7437),
        o = r(7138),
        i = r(6164);
      t.Z = (e) => {
        let {
          children: t,
          href: r,
          className: l = "",
          target: a,
          prefetch: s = !1,
          title: u,
          ...c
        } = e;
        return (0, n.jsx)(o.default, {
          href: null != r ? r : "",
          className: (0, i.m6)(l),
          target: a || void 0,
          prefetch: s,
          title: null != u ? u : void 0,
          ...c,
          children: t,
        });
      };
    },
    6924: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(2265),
        o = r(1068),
        i = r(4398);
      function l() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            e && t(!1);
          }, [e]),
          (0, o.Z)({
            onResize: () => {
              i.tq || t(!0);
            },
          }),
          e
        );
      }
    },
    138: function (e, t, r) {
      r.d(t, {
        D: function () {
          return l;
        },
      });
      var n = r(6098),
        o = r.n(n),
        i = r(2265);
      function l() {
        (0, i.useLayoutEffect)(() => {
          let e = window.visualViewport;
          o().config({ ignoreMobileResize: !0 });
          let t = () => {
              var t, r;
              let n =
                  (null !== (t = null == e ? void 0 : e.height) && void 0 !== t
                    ? t
                    : window.innerHeight) * 0.01,
                o =
                  (null !== (r = null == e ? void 0 : e.width) && void 0 !== r
                    ? r
                    : window.innerWidth) * 0.01;
              document.documentElement.style.setProperty(
                "--vh",
                "".concat(n, "px")
              ),
                document.documentElement.style.setProperty(
                  "--vw",
                  "".concat(o, "px")
                );
            },
            r = 0,
            n = null,
            i = !1,
            l = null,
            a = () => {
              (i = !0),
                l && clearTimeout(l),
                (l = setTimeout(() => {
                  i = !1;
                }, 300));
            };
          window.addEventListener("scroll", a, { passive: !0 }),
            window.addEventListener("touchmove", a, { passive: !0 });
          let s = () => {
            cancelAnimationFrame(r),
              n && clearTimeout(n),
              i ||
                (n = setTimeout(() => {
                  r = requestAnimationFrame(() => o().refresh(!1));
                }, 200));
          };
          return (
            t(),
            setTimeout(() => s(), 100),
            null == e ||
              e.addEventListener(
                "resize",
                () => {
                  t(), s();
                },
                { passive: !0 }
              ),
            window.addEventListener(
              "orientationchange",
              () => {
                t(), s();
              },
              { passive: !0 }
            ),
            window.addEventListener(
              "resize",
              () => {
                t(), s();
              },
              { passive: !0 }
            ),
            () => {
              cancelAnimationFrame(r),
                n && clearTimeout(n),
                l && clearTimeout(l),
                window.removeEventListener("scroll", a),
                window.removeEventListener("touchmove", a),
                null == e || e.removeEventListener("resize", t),
                window.removeEventListener("orientationchange", t),
                window.removeEventListener("resize", t);
            }
          );
        }, []);
      }
    },
    1068: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265);
      let o = (e) => {
        let t,
          { fn: r, ms: n } = e;
        return () => {
          clearTimeout(t),
            (t = setTimeout(() => {
              (t = null), r.apply(void 0);
            }, n));
        };
      };
      function i(e) {
        let { onResize: t, onLoadTrigger: r } = e;
        (0, n.useEffect)(() => {
          r && t();
          let e = o({ fn: t, ms: 500 });
          return (
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []);
      }
    },
    3131: function (e, t, r) {
      let n = (0, r(903).U)((e) => ({
        canvasLoaded: !1,
        setCanvasLoaded: (t) => {
          e({ canvasLoaded: t });
        },
      }));
      t.Z = n;
    },
    9123: function (e, t, r) {
      r.d(t, {
        B: function () {
          return o;
        },
      });
      var n = r(903);
      let o = "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static"),
        i = (0, n.U)((e) => ({
          isGlobalLoaderVisible: !1,
          setIsGlobalLoaderVisible: (t) => {
            e({ isGlobalLoaderVisible: t });
          },
        }));
      t.Z = i;
    },
    4989: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      function n(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null == e
          ? ""
          : e.startsWith("http") ||
            e.startsWith("//") ||
            e.startsWith("/uploads/")
          ? e
          : "".concat("https://cms.breachbunny.com").concat(e).concat(t);
      }
    },
    3417: function (e, t, r) {
      r.d(t, {
        p: function () {
          return n;
        },
      });
      let n = (e) => {
        let { e: t, sectionEl: r } = e;
        if (!r) return null;
        let { x: n, y: o } = r.getBoundingClientRect();
        r.style.setProperty("--x", (t.clientX - n).toString()),
          r.style.setProperty("--y", (t.clientY - o).toString());
      };
    },
  },
]);
