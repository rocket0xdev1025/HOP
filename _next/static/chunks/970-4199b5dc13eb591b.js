(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [970],
  {
    19: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return u;
        },
      });
      var n = r(2265),
        i = r(9582);
      let o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        a = (e) => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        c = i.ZP,
        u = (e, t = s) => {
          let r = l;
          a(e)
            ? ((r = e),
              (e = null),
              (t = "dependencies" in r ? r.dependencies : s))
            : a(t) && (t = "dependencies" in (r = t) ? r.dependencies : s),
            e &&
              "function" != typeof e &&
              console.warn(
                "First parameter must be a function or config object"
              );
          let { scope: i, revertOnUpdate: u } = r,
            f = (0, n.useRef)(!1),
            d = (0, n.useRef)(c.context(() => {}, i)),
            p = (0, n.useRef)((e) => d.current.add(null, e)),
            h = t && t.length && !u;
          return (
            o(() => {
              if ((e && d.current.add(e, i), !h || !f.current))
                return () => d.current.revert();
            }, t),
            h && o(() => ((f.current = !0), () => d.current.revert()), s),
            { context: d.current, contextSafe: p.current }
          );
        };
      (u.register = (e) => {
        c = e;
      }),
        (u.headless = !0);
    },
    6098: function (e, t) {
      var r,
        n,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        g,
        m,
        v,
        b,
        y,
        w,
        x,
        S,
        O,
        _,
        k,
        P,
        C,
        E,
        T,
        A,
        M,
        D,
        I,
        R,
        j,
        F,
        N,
        B,
        z,
        L,
        Y,
        W,
        X,
        U,
        q,
        V,
        H,
        G,
        $,
        Z,
        K,
        Q,
        J,
        ee,
        et,
        er,
        en,
        ei,
        eo,
        ea,
        es,
        el,
        ec,
        eu,
        ef,
        ed,
        ep,
        eh,
        eg,
        em,
        ev,
        eb,
        ey,
        ew,
        ex,
        eS,
        eO,
        e_,
        ek,
        eP,
        eC,
        eE,
        eT,
        eA,
        eM,
        eD,
        eI,
        eR,
        ej,
        eF,
        eN,
        eB,
        ez,
        eL,
        eY,
        eW,
        eX,
        eU,
        eq,
        eV,
        eH,
        eG,
        e$,
        eZ,
        eK,
        eQ,
        eJ,
        e0,
        e1,
        e2,
        e3,
        e6,
        e4,
        e5,
        e8,
        e9,
        e7,
        te,
        tt,
        tr,
        tn,
        ti,
        to,
        ta,
        ts,
        tl,
        tc,
        tu,
        tf,
        td,
        tp,
        th,
        tg,
        tm,
        tv,
        tb,
        ty,
        tw,
        tx,
        tS,
        tO,
        t_,
        tk,
        tP,
        tC,
        tE,
        tT,
        tA,
        tM,
        tD,
        tI,
        tR,
        tj,
        tF,
        tN,
        tB,
        tz,
        tL,
        tY,
        tW,
        tX,
        tU,
        tq,
        tV,
        tH,
        tG,
        t$,
        tZ,
        tK,
        tQ,
        tJ,
        t0,
        t1,
        t2,
        t3,
        t6,
        t4,
        t5,
        t8,
        t9;
      (g = function () {
        return (
          r ||
          ("undefined" != typeof window &&
            (r = window.gsap) &&
            r.registerPlugin &&
            r)
        );
      }),
        (m = 1),
        (v = []),
        (b = []),
        (y = []),
        (w = Date.now),
        (x = function (e, t) {
          return t;
        }),
        (S = function () {
          var e = u.core,
            t = e.bridge || {},
            r = e._scrollers,
            n = e._proxies;
          r.push.apply(r, b),
            n.push.apply(n, y),
            (b = r),
            (y = n),
            (x = function (e, r) {
              return t[e](r);
            });
        }),
        (O = function (e, t) {
          return ~y.indexOf(e) && y[y.indexOf(e) + 1][t];
        }),
        (_ = function (e) {
          return !!~f.indexOf(e);
        }),
        (k = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !1 !== n, capture: !!i });
        }),
        (P = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        }),
        (C = "scrollLeft"),
        (E = "scrollTop"),
        (T = function () {
          return (d && d.isPressed) || b.cache++;
        }),
        (D = {
          s: E,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: (M = {
            s: C,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: (A = function (e, t) {
              var r = function r(n) {
                if (n || 0 === n) {
                  m && (i.history.scrollRestoration = "manual");
                  var o = d && d.isPressed;
                  e((n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0))),
                    (r.cacheID = b.cache),
                    o && x("ss", n);
                } else
                  (t || b.cache !== r.cacheID || x("ref")) &&
                    ((r.cacheID = b.cache), (r.v = e()));
                return r.v + r.offset;
              };
              return (r.offset = 0), e && r;
            })(function (e) {
              return arguments.length
                ? i.scrollTo(e, D.sc())
                : i.pageXOffset || o[C] || a[C] || s[C] || 0;
            }),
          }),
          sc: A(function (e) {
            return arguments.length
              ? i.scrollTo(M.sc(), e)
              : i.pageYOffset || o[E] || a[E] || s[E] || 0;
          }),
        }),
        (I = function (e, t) {
          return (
            ((t && t._ctx && t._ctx.selector) || r.utils.toArray)(e)[0] ||
            ("string" == typeof e && !1 !== r.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null)
          );
        }),
        (R = function (e, t) {
          var n = t.s,
            i = t.sc;
          _(e) && (e = o.scrollingElement || a);
          var s = b.indexOf(e),
            l = i === D.sc ? 1 : 2;
          ~s || (s = b.push(e) - 1), b[s + l] || k(e, "scroll", T);
          var c = b[s + l],
            u =
              c ||
              (b[s + l] =
                A(O(e, n), !0) ||
                (_(e)
                  ? i
                  : A(function (t) {
                      return arguments.length ? (e[n] = t) : e[n];
                    })));
          return (
            (u.target = e),
            c || (u.smooth = "smooth" === r.getProperty(e, "scrollBehavior")),
            u
          );
        }),
        (j = function (e, t, r) {
          var n = e,
            i = e,
            o = w(),
            a = o,
            s = t || 50,
            l = Math.max(500, 3 * s),
            c = function (e, t) {
              var l = w();
              t || l - o > s
                ? ((i = n), (n = e), (a = o), (o = l))
                : r
                ? (n += e)
                : (n = i + ((e - i) / (l - a)) * (o - a));
            };
          return {
            update: c,
            reset: function () {
              (i = n = r ? 0 : n), (a = o = 0);
            },
            getVelocity: function (e) {
              var t = a,
                s = i,
                u = w();
              return (
                (e || 0 === e) && e !== n && c(e),
                o === a || u - a > l
                  ? 0
                  : ((n + (r ? s : -s)) / ((r ? u : o) - t)) * 1e3
              );
            },
          };
        }),
        (F = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        }),
        (N = function (e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r;
        }),
        (B = function () {
          (u = r.core.globals().ScrollTrigger) && u.core && S();
        }),
        (z = function (e) {
          return (
            (r = e || g()),
            !n &&
              r &&
              "undefined" != typeof document &&
              document.body &&
              ((i = window),
              (a = (o = document).documentElement),
              (s = o.body),
              (f = [i, o, a, s]),
              r.utils.clamp,
              (h = r.core.context || function () {}),
              (c = "onpointerenter" in s ? "pointer" : "mouse"),
              (l = L.isTouch =
                i.matchMedia &&
                i.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in i ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (p = L.eventTypes =
                (
                  "ontouchstart" in a
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in a
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (m = 0);
              }, 500),
              B(),
              (n = 1)),
            n
          );
        }),
        (M.op = D),
        (b.cache = 0),
        ((L = (function () {
          function e(e) {
            this.init(e);
          }
          return (
            (e.prototype.init = function (e) {
              n || z(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                u || B();
              var t = e.tolerance,
                f = e.dragMinimum,
                g = e.type,
                m = e.target,
                b = e.lineHeight,
                y = e.debounce,
                x = e.preventDefault,
                S = e.onStop,
                O = e.onStopDelay,
                C = e.ignore,
                E = e.wheelSpeed,
                A = e.event,
                L = e.onDragStart,
                Y = e.onDragEnd,
                W = e.onDrag,
                X = e.onPress,
                U = e.onRelease,
                q = e.onRight,
                V = e.onLeft,
                H = e.onUp,
                G = e.onDown,
                $ = e.onChangeX,
                Z = e.onChangeY,
                K = e.onChange,
                Q = e.onToggleX,
                J = e.onToggleY,
                ee = e.onHover,
                et = e.onHoverEnd,
                er = e.onMove,
                en = e.ignoreCheck,
                ei = e.isNormalizer,
                eo = e.onGestureStart,
                ea = e.onGestureEnd,
                es = e.onWheel,
                el = e.onEnable,
                ec = e.onDisable,
                eu = e.onClick,
                ef = e.scrollSpeed,
                ed = e.capture,
                ep = e.allowClicks,
                eh = e.lockAxis,
                eg = e.onLockAxis;
              (this.target = m = I(m) || a),
                (this.vars = e),
                C && (C = r.utils.toArray(C)),
                (t = t || 1e-9),
                (f = f || 0),
                (E = E || 1),
                (ef = ef || 1),
                (g = g || "wheel,touch,pointer"),
                (y = !1 !== y),
                b || (b = parseFloat(i.getComputedStyle(s).lineHeight) || 22);
              var em,
                ev,
                eb,
                ey,
                ew,
                ex,
                eS,
                eO = this,
                e_ = 0,
                ek = 0,
                eP = e.passive || !x,
                eC = R(m, M),
                eE = R(m, D),
                eT = eC(),
                eA = eE(),
                eM =
                  ~g.indexOf("touch") &&
                  !~g.indexOf("pointer") &&
                  "pointerdown" === p[0],
                eD = _(m),
                eI = m.ownerDocument || o,
                eR = [0, 0, 0],
                ej = [0, 0, 0],
                eF = 0,
                eN = function () {
                  return (eF = w());
                },
                eB = function (e, t) {
                  return (
                    ((eO.event = e) && C && ~C.indexOf(e.target)) ||
                    (t && eM && "touch" !== e.pointerType) ||
                    (en && en(e, t))
                  );
                },
                ez = function () {
                  var e = (eO.deltaX = N(eR)),
                    r = (eO.deltaY = N(ej)),
                    n = Math.abs(e) >= t,
                    i = Math.abs(r) >= t;
                  K && (n || i) && K(eO, e, r, eR, ej),
                    n &&
                      (q && eO.deltaX > 0 && q(eO),
                      V && eO.deltaX < 0 && V(eO),
                      $ && $(eO),
                      Q && eO.deltaX < 0 != e_ < 0 && Q(eO),
                      (e_ = eO.deltaX),
                      (eR[0] = eR[1] = eR[2] = 0)),
                    i &&
                      (G && eO.deltaY > 0 && G(eO),
                      H && eO.deltaY < 0 && H(eO),
                      Z && Z(eO),
                      J && eO.deltaY < 0 != ek < 0 && J(eO),
                      (ek = eO.deltaY),
                      (ej[0] = ej[1] = ej[2] = 0)),
                    (ey || eb) &&
                      (er && er(eO), eb && (W(eO), (eb = !1)), (ey = !1)),
                    ex && ((ex = !1), 1) && eg && eg(eO),
                    ew && (es(eO), (ew = !1)),
                    (em = 0);
                },
                eL = function (e, t, r) {
                  (eR[r] += e),
                    (ej[r] += t),
                    eO._vx.update(e),
                    eO._vy.update(t),
                    y ? em || (em = requestAnimationFrame(ez)) : ez();
                },
                eY = function (e, t) {
                  eh &&
                    !eS &&
                    ((eO.axis = eS = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ex = !0)),
                    "y" !== eS && ((eR[2] += e), eO._vx.update(e, !0)),
                    "x" !== eS && ((ej[2] += t), eO._vy.update(t, !0)),
                    y ? em || (em = requestAnimationFrame(ez)) : ez();
                },
                eW = function (e) {
                  if (!eB(e, 1)) {
                    var t = (e = F(e, x)).clientX,
                      r = e.clientY,
                      n = t - eO.x,
                      i = r - eO.y,
                      o = eO.isDragging;
                    (eO.x = t),
                      (eO.y = r),
                      (o ||
                        Math.abs(eO.startX - t) >= f ||
                        Math.abs(eO.startY - r) >= f) &&
                        (W && (eb = !0),
                        o || (eO.isDragging = !0),
                        eY(n, i),
                        o || (L && L(eO)));
                  }
                },
                eX = (eO.onPress = function (e) {
                  eB(e, 1) ||
                    (e && e.button) ||
                    ((eO.axis = eS = null),
                    ev.pause(),
                    (eO.isPressed = !0),
                    (e = F(e)),
                    (e_ = ek = 0),
                    (eO.startX = eO.x = e.clientX),
                    (eO.startY = eO.y = e.clientY),
                    eO._vx.reset(),
                    eO._vy.reset(),
                    k(ei ? m : eI, p[1], eW, eP, !0),
                    (eO.deltaX = eO.deltaY = 0),
                    X && X(eO));
                }),
                eU = (eO.onRelease = function (e) {
                  if (!eB(e, 1)) {
                    P(ei ? m : eI, p[1], eW, !0);
                    var t = !isNaN(eO.y - eO.startY),
                      n = eO.isDragging,
                      o =
                        n &&
                        (Math.abs(eO.x - eO.startX) > 3 ||
                          Math.abs(eO.y - eO.startY) > 3),
                      a = F(e);
                    !o &&
                      t &&
                      (eO._vx.reset(),
                      eO._vy.reset(),
                      x &&
                        ep &&
                        r.delayedCall(0.08, function () {
                          if (w() - eF > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (eI.createEvent) {
                              var t = eI.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                i,
                                1,
                                a.screenX,
                                a.screenY,
                                a.clientX,
                                a.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                          }
                        })),
                      (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
                      S && n && !ei && ev.restart(!0),
                      Y && n && Y(eO),
                      U && U(eO, o);
                  }
                }),
                eq = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (eO.isGesturing = !0) &&
                    eo(e, eO.isDragging)
                  );
                },
                eV = function () {
                  return (eO.isGesturing = !1), ea(eO);
                },
                eH = function (e) {
                  if (!eB(e)) {
                    var t = eC(),
                      r = eE();
                    eL((t - eT) * ef, (r - eA) * ef, 1),
                      (eT = t),
                      (eA = r),
                      S && ev.restart(!0);
                  }
                },
                eG = function (e) {
                  if (!eB(e)) {
                    (e = F(e, x)), es && (ew = !0);
                    var t =
                      (1 === e.deltaMode
                        ? b
                        : 2 === e.deltaMode
                        ? i.innerHeight
                        : 1) * E;
                    eL(e.deltaX * t, e.deltaY * t, 0),
                      S && !ei && ev.restart(!0);
                  }
                },
                e$ = function (e) {
                  if (!eB(e)) {
                    var t = e.clientX,
                      r = e.clientY,
                      n = t - eO.x,
                      i = r - eO.y;
                    (eO.x = t),
                      (eO.y = r),
                      (ey = !0),
                      S && ev.restart(!0),
                      (n || i) && eY(n, i);
                  }
                },
                eZ = function (e) {
                  (eO.event = e), ee(eO);
                },
                eK = function (e) {
                  (eO.event = e), et(eO);
                },
                eQ = function (e) {
                  return eB(e) || (F(e, x) && eu(eO));
                };
              (ev = eO._dc =
                r
                  .delayedCall(O || 0.25, function () {
                    eO._vx.reset(), eO._vy.reset(), ev.pause(), S && S(eO);
                  })
                  .pause()),
                (eO.deltaX = eO.deltaY = 0),
                (eO._vx = j(0, 50, !0)),
                (eO._vy = j(0, 50, !0)),
                (eO.scrollX = eC),
                (eO.scrollY = eE),
                (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
                h(this),
                (eO.enable = function (e) {
                  return (
                    !eO.isEnabled &&
                      (k(eD ? eI : m, "scroll", T),
                      g.indexOf("scroll") >= 0 &&
                        k(eD ? eI : m, "scroll", eH, eP, ed),
                      g.indexOf("wheel") >= 0 && k(m, "wheel", eG, eP, ed),
                      ((g.indexOf("touch") >= 0 && l) ||
                        g.indexOf("pointer") >= 0) &&
                        (k(m, p[0], eX, eP, ed),
                        k(eI, p[2], eU),
                        k(eI, p[3], eU),
                        ep && k(m, "click", eN, !0, !0),
                        eu && k(m, "click", eQ),
                        eo && k(eI, "gesturestart", eq),
                        ea && k(eI, "gestureend", eV),
                        ee && k(m, c + "enter", eZ),
                        et && k(m, c + "leave", eK),
                        er && k(m, c + "move", e$)),
                      (eO.isEnabled = !0),
                      e && e.type && eX(e),
                      el && el(eO)),
                    eO
                  );
                }),
                (eO.disable = function () {
                  eO.isEnabled &&
                    (v.filter(function (e) {
                      return e !== eO && _(e.target);
                    }).length || P(eD ? eI : m, "scroll", T),
                    eO.isPressed &&
                      (eO._vx.reset(),
                      eO._vy.reset(),
                      P(ei ? m : eI, p[1], eW, !0)),
                    P(eD ? eI : m, "scroll", eH, ed),
                    P(m, "wheel", eG, ed),
                    P(m, p[0], eX, ed),
                    P(eI, p[2], eU),
                    P(eI, p[3], eU),
                    P(m, "click", eN, !0),
                    P(m, "click", eQ),
                    P(eI, "gesturestart", eq),
                    P(eI, "gestureend", eV),
                    P(m, c + "enter", eZ),
                    P(m, c + "leave", eK),
                    P(m, c + "move", e$),
                    (eO.isEnabled = eO.isPressed = eO.isDragging = !1),
                    ec && ec(eO));
                }),
                (eO.kill = eO.revert =
                  function () {
                    eO.disable();
                    var e = v.indexOf(eO);
                    e >= 0 && v.splice(e, 1), d === eO && (d = 0);
                  }),
                v.push(eO),
                ei && _(m) && (d = eO),
                eO.enable(A);
            }),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(e.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })()).version = "3.12.5"),
        (L.create = function (e) {
          return new L(e);
        }),
        (L.register = z),
        (L.getAll = function () {
          return v.slice();
        }),
        (L.getById = function (e) {
          return v.filter(function (t) {
            return t.vars.id === e;
          })[0];
        }),
        g() && r.registerPlugin(L),
        (ek = 1),
        (eC = (eP = Date.now)()),
        (eE = 0),
        (eT = 0),
        (eA = function (e, t, r) {
          var n =
            eU(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
        }),
        (eM = function (e, t) {
          return t && (!eU(e) || "clamp(" !== e.substr(0, 6))
            ? "clamp(" + e + ")"
            : e;
        }),
        (eD = function () {
          return (ee = 1);
        }),
        (eI = function () {
          return (ee = 0);
        }),
        (eR = function (e) {
          return e;
        }),
        (ej = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        }),
        (eF = function () {
          return "undefined" != typeof window;
        }),
        (eN = function () {
          return Y || (eF() && (Y = window.gsap) && Y.registerPlugin && Y);
        }),
        (eB = function (e) {
          return !!~H.indexOf(e);
        }),
        (ez = function (e) {
          return (
            ("Height" === e ? ev : X["inner" + e]) ||
            q["client" + e] ||
            V["client" + e]
          );
        }),
        (eL = function (e) {
          return (
            O(e, "getBoundingClientRect") ||
            (eB(e)
              ? function () {
                  return (tV.width = X.innerWidth), (tV.height = ev), tV;
                }
              : function () {
                  return tr(e);
                })
          );
        }),
        (eY = function (e, t, r) {
          var n = r.d,
            i = r.d2,
            o = r.a;
          return (o = O(e, "getBoundingClientRect"))
            ? function () {
                return o()[n];
              }
            : function () {
                return (t ? ez(i) : e["client" + i]) || 0;
              };
        }),
        (eW = function (e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(
            0,
            (o = O(e, (r = "scroll" + n)))
              ? o() - eL(e)()[i]
              : eB(e)
              ? (q[r] || V[r]) - ez(n)
              : e[r] - e["offset" + n]
          );
        }),
        (eX = function (e, t) {
          for (var r = 0; r < eo.length; r += 3)
            (!t || ~t.indexOf(eo[r + 1])) && e(eo[r], eo[r + 1], eo[r + 2]);
        }),
        (eU = function (e) {
          return "string" == typeof e;
        }),
        (eq = function (e) {
          return "function" == typeof e;
        }),
        (eV = function (e) {
          return "number" == typeof e;
        }),
        (eH = function (e) {
          return "object" == typeof e;
        }),
        (eG = function (e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause();
        }),
        (e$ = function (e, t) {
          if (e.enabled) {
            var r = e._ctx
              ? e._ctx.add(function () {
                  return t(e);
                })
              : t(e);
            r && r.totalTime && (e.callbackAnimation = r);
          }
        }),
        (eZ = Math.abs),
        (eK = "left"),
        (eQ = "right"),
        (eJ = "bottom"),
        (e0 = "width"),
        (e1 = "height"),
        (e2 = "Right"),
        (e3 = "Left"),
        (e6 = "Bottom"),
        (e4 = "padding"),
        (e5 = "margin"),
        (e8 = "Width"),
        (e9 = "Height"),
        (e7 = function (e) {
          return X.getComputedStyle(e);
        }),
        (te = function (e) {
          var t = e7(e).position;
          e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
        }),
        (tt = function (e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e;
        }),
        (tr = function (e, t) {
          var r =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== e7(e)[et] &&
              Y.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            n = e.getBoundingClientRect();
          return r && r.progress(0).kill(), n;
        }),
        (tn = function (e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0;
        }),
        (ti = function (e) {
          var t,
            r = [],
            n = e.labels,
            i = e.duration();
          for (t in n) r.push(n[t] / i);
          return r;
        }),
        (to = function (e) {
          var t = Y.utils.snap(e),
            r =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return r
            ? function (e, n, i) {
                var o;
                if ((void 0 === i && (i = 0.001), !n)) return t(e);
                if (n > 0) {
                  for (e -= i, o = 0; o < r.length; o++)
                    if (r[o] >= e) return r[o];
                  return r[o - 1];
                }
                for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                return r[0];
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001);
                var o = t(r);
                return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                  ? o
                  : t(n < 0 ? r - e : r + e);
              };
        }),
        (ta = function (e, t, r, n) {
          return r.split(",").forEach(function (r) {
            return e(t, r, n);
          });
        }),
        (ts = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !n, capture: !!i });
        }),
        (tl = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        }),
        (tc = function (e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
        }),
        (tu = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        }),
        (tf = { toggleActions: "play", anticipatePin: 0 }),
        (td = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }),
        (tp = function (e, t) {
          if (eU(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r &&
              (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
              (e =
                n +
                (e in td
                  ? td[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        }),
        (th = function (e, t, r, n, i, o, a, s) {
          var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = U.createElement("div"),
            h = eB(r) || "fixed" === O(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            m = h ? V : r,
            v = -1 !== e.indexOf("start"),
            b = v ? l : c,
            y =
              "border-color:" +
              b +
              ";font-size:" +
              u +
              ";color:" +
              b +
              ";font-weight:" +
              d +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (y += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
            (g || s || !h) &&
              (y += (n === D ? eQ : eJ) + ":" + (o + parseFloat(f)) + "px;"),
            a &&
              (y +=
                "box-sizing:border-box;text-align:left;width:" +
                a.offsetWidth +
                "px;"),
            (p._isStart = v),
            p.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (p.style.cssText = y),
            (p.innerText = t || 0 === t ? e + "-" + t : e),
            m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
            (p._offset = p["offset" + n.op.d2]),
            tg(p, 0, n, v),
            p
          );
        }),
        (tg = function (e, t, r, n) {
          var i = { display: "block" },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          (e._isFlipped = n),
            (i[r.a + "Percent"] = n ? -100 : 0),
            (i[r.a] = n ? "1px" : 0),
            (i["border" + o + e8] = 1),
            (i["border" + a + e8] = 0),
            (i[r.p] = t + "px"),
            Y.set(e, i);
        }),
        (tm = []),
        (tv = {}),
        (tb = function () {
          return eP() - eE > 34 && (ex || (ex = requestAnimationFrame(tN)));
        }),
        (ty = function () {
          (ec && ec.isPressed && !(ec.startX > V.clientWidth)) ||
            (b.cache++,
            ec ? ex || (ex = requestAnimationFrame(tN)) : tN(),
            eE || tk("scrollStart"),
            (eE = eP()));
        }),
        (tw = function () {
          (ed = X.innerWidth), (ef = X.innerHeight);
        }),
        (tx = function () {
          b.cache++,
            !(
              !J &&
              !el &&
              !U.fullscreenElement &&
              !U.webkitFullscreenElement &&
              (!eu ||
                ed !== X.innerWidth ||
                Math.abs(X.innerHeight - ef) > 0.25 * X.innerHeight)
            ) || G.restart(!0);
        }),
        (tS = {}),
        (tO = []),
        (t_ = function e() {
          return tl(tJ, "scrollEnd", e) || tR(!0);
        }),
        (tk = function (e) {
          return (
            (tS[e] &&
              tS[e].map(function (e) {
                return e();
              })) ||
            tO
          );
        }),
        (tP = []),
        (tC = function (e) {
          for (var t = 0; t < tP.length; t += 5)
            (!e || (tP[t + 4] && tP[t + 4].query === e)) &&
              ((tP[t].style.cssText = tP[t + 1]),
              tP[t].getBBox && tP[t].setAttribute("transform", tP[t + 2] || ""),
              (tP[t + 3].uncache = 1));
        }),
        (tE = function (e, t) {
          var r;
          for (er = 0; er < tm.length; er++)
            (r = tm[er]) &&
              (!t || r._ctx === t) &&
              (e ? r.kill(1) : r.revert(!0, !0));
          (eb = !0), t && tC(t), t || tk("revert");
        }),
        (tT = function (e, t) {
          b.cache++,
            (t || !eS) &&
              b.forEach(function (e) {
                return eq(e) && e.cacheID++ && (e.rec = 0);
              }),
            eU(e) && (X.history.scrollRestoration = eg = e);
        }),
        (tA = 0),
        (tM = function () {
          if (eO !== tA) {
            var e = (eO = tA);
            requestAnimationFrame(function () {
              return e === tA && tR(!0);
            });
          }
        }),
        (tD = function () {
          V.appendChild(em),
            (ev = (!ec && em.offsetHeight) || X.innerHeight),
            V.removeChild(em);
        }),
        (tI = function (e) {
          return $(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (t) {
            return (t.style.display = e ? "none" : "block");
          });
        }),
        (tR = function (e, t) {
          if (eE && !e && !eb) {
            ts(tJ, "scrollEnd", t_);
            return;
          }
          tD(),
            (eS = tJ.isRefreshing = !0),
            b.forEach(function (e) {
              return eq(e) && ++e.cacheID && (e.rec = e());
            });
          var r = tk("refreshInit");
          ea && tJ.sort(),
            t || tE(),
            b.forEach(function (e) {
              eq(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            tm.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (eb = !1),
            tm.forEach(function (e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
              }
            }),
            (ey = 1),
            tI(!0),
            tm.forEach(function (e) {
              var t = eW(e.scroller, e._dir),
                r = "max" === e.vars.end || (e._endClamp && e.end > t),
                n = e._startClamp && e.start >= t;
              (r || n) &&
                e.setPositions(
                  n ? t - 1 : e.start,
                  r ? Math.max(n ? t : e.start + 1, t) : e.end,
                  !0
                );
            }),
            tI(!1),
            (ey = 0),
            r.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            b.forEach(function (e) {
              eq(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            tT(eg, 1),
            G.pause(),
            tA++,
            (eS = 2),
            tN(2),
            tm.forEach(function (e) {
              return eq(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (eS = tJ.isRefreshing = !1),
            tk("refresh");
        }),
        (tj = 0),
        (tF = 1),
        (tN = function (e) {
          if (2 === e || (!eS && !eb)) {
            (tJ.isUpdating = !0), e_ && e_.update(0);
            var t = tm.length,
              r = eP(),
              n = r - eC >= 50,
              i = t && tm[0].scroll();
            if (
              ((tF = tj > i ? -1 : 1),
              eS || (tj = i),
              n &&
                (eE && !ee && r - eE > 200 && ((eE = 0), tk("scrollEnd")),
                (K = eC),
                (eC = r)),
              tF < 0)
            ) {
              for (er = t; er-- > 0; ) tm[er] && tm[er].update(0, n);
              tF = 1;
            } else for (er = 0; er < t; er++) tm[er] && tm[er].update(0, n);
            tJ.isUpdating = !1;
          }
          ex = 0;
        }),
        (tz = (tB = [
          eK,
          "top",
          eJ,
          eQ,
          e5 + e6,
          e5 + e2,
          e5 + "Top",
          e5 + e3,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ]).concat([
          e0,
          e1,
          "boxSizing",
          "max" + e8,
          "max" + e9,
          "position",
          e5,
          e4,
          e4 + "Top",
          e4 + e2,
          e4 + e6,
          e4 + e3,
        ])),
        (tL = function (e, t, r) {
          tX(r);
          var n = e._gsap;
          if (n.spacerIsNative) tX(n.spacerState);
          else if (e._gsap.swappedIn) {
            var i = t.parentNode;
            i && (i.insertBefore(e, t), i.removeChild(t));
          }
          e._gsap.swappedIn = !1;
        }),
        (tY = function (e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = tB.length, a = t.style, s = e.style; o--; )
              a[(i = tB[o])] = r[i];
            (a.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (a.display = "inline-block"),
              (s[eJ] = s[eQ] = "auto"),
              (a.flexBasis = r.flexBasis || "auto"),
              (a.overflow = "visible"),
              (a.boxSizing = "border-box"),
              (a[e0] = tn(e, M) + "px"),
              (a[e1] = tn(e, D) + "px"),
              (a[e4] = s[e5] = s.top = s[eK] = "0"),
              tX(n),
              (s[e0] = s["max" + e8] = r[e0]),
              (s[e1] = s["max" + e9] = r[e1]),
              (s[e4] = r[e4]),
              e.parentNode !== t &&
                (e.parentNode.insertBefore(t, e), t.appendChild(e)),
              (e._gsap.swappedIn = !0);
          }
        }),
        (tW = /([A-Z])/g),
        (tX = function (e) {
          if (e) {
            var t,
              r,
              n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || Y.core.getCache(e.t)).uncache = 1; o < i; o += 2)
              (r = e[o + 1]),
                (t = e[o]),
                r
                  ? (n[t] = r)
                  : n[t] &&
                    n.removeProperty(t.replace(tW, "-$1").toLowerCase());
          }
        }),
        (tU = function (e) {
          for (var t = tz.length, r = e.style, n = [], i = 0; i < t; i++)
            n.push(tz[i], r[tz[i]]);
          return (n.t = e), n;
        }),
        (tq = function (e, t, r) {
          for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)
            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
          return (i.t = e.t), i;
        }),
        (tV = { left: 0, top: 0 }),
        (tH = function (e, t, r, n, i, o, a, s, l, c, u, f, d, p) {
          eq(e) && (e = e(s)),
            eU(e) &&
              "max" === e.substr(0, 3) &&
              (e = f + ("=" === e.charAt(4) ? tp("0" + e.substr(3), r) : 0));
          var h,
            g,
            m,
            v = d ? d.time() : 0;
          if ((d && d.seek(0), isNaN(e) || (e = +e), eV(e)))
            d &&
              (e = Y.utils.mapRange(
                d.scrollTrigger.start,
                d.scrollTrigger.end,
                0,
                f,
                e
              )),
              a && tg(a, r, n, !0);
          else {
            eq(t) && (t = t(s));
            var b,
              y,
              w,
              x,
              S = (e || "0").split(" ");
            (b = tr((m = I(t, s) || V)) || {}).left ||
              b.top ||
              "none" !== e7(m).display ||
              ((x = m.style.display),
              (m.style.display = "block"),
              (b = tr(m)),
              x ? (m.style.display = x) : m.style.removeProperty("display")),
              (y = tp(S[0], b[n.d])),
              (w = tp(S[1] || "0", r)),
              (e = b[n.p] - l[n.p] - c + y + i - w),
              a && tg(a, w, n, r - w < 20 || (a._isStart && w > 20)),
              (r -= r - w);
          }
          if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), o)) {
            var O = e + r,
              _ = o._isStart;
            (h = "scroll" + n.d2),
              tg(
                o,
                O,
                n,
                (_ && O > 20) ||
                  (!_ && (u ? Math.max(V[h], q[h]) : o.parentNode[h]) <= O + 1)
              ),
              u &&
                ((l = tr(a)),
                u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"));
          }
          return (
            d &&
              m &&
              ((h = tr(m)),
              d.seek(f),
              (g = tr(m)),
              (d._caScrollDist = h[n.p] - g[n.p]),
              (e = (e / d._caScrollDist) * f)),
            d && d.seek(v),
            d ? e : Math.round(e)
          );
        }),
        (tG = /(webkit|moz|length|cssText|inset)/i),
        (t$ = function (e, t, r, n) {
          if (e.parentNode !== t) {
            var i,
              o,
              a = e.style;
            if (t === V) {
              for (i in ((e._stOrig = a.cssText), (o = e7(e))))
                +i ||
                  tG.test(i) ||
                  !o[i] ||
                  "string" != typeof a[i] ||
                  "0" === i ||
                  (a[i] = o[i]);
              (a.top = r), (a.left = n);
            } else a.cssText = e._stOrig;
            (Y.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        }),
        (tZ = function (e, t, r) {
          var n = t,
            i = n;
          return function (t) {
            var o = Math.round(e());
            return (
              o !== n &&
                o !== i &&
                Math.abs(o - n) > 3 &&
                Math.abs(o - i) > 3 &&
                ((t = o), r && r()),
              (i = n),
              (n = t),
              t
            );
          };
        }),
        (tK = function (e, t, r) {
          var n = {};
          (n[t.p] = "+=" + r), Y.set(e, n);
        }),
        (tQ = function (e, t) {
          var r = R(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, o, a, s, l) {
              var c = t.tween,
                u = o.onComplete,
                f = {};
              a = a || r();
              var d = tZ(r, a, function () {
                c.kill(), (t.tween = 0);
              });
              return (
                (l = (s && l) || 0),
                (s = s || i - a),
                c && c.kill(),
                (o[n] = i),
                (o.inherit = !1),
                (o.modifiers = f),
                (f[n] = function () {
                  return d(a + s * c.ratio + l * c.ratio * c.ratio);
                }),
                (o.onUpdate = function () {
                  b.cache++, t.tween && tN();
                }),
                (o.onComplete = function () {
                  (t.tween = 0), u && u.call(c);
                }),
                (c = t.tween = Y.to(e, o))
              );
            };
          return (
            (e[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0);
            }),
            ts(e, "wheel", r.wheelHandler),
            tJ.isTouch && ts(e, "touchmove", r.wheelHandler),
            i
          );
        }),
        ((tJ = (function () {
          function e(t, r) {
            W ||
              e.register(Y) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              eh(this),
              this.init(t, r);
          }
          return (
            (e.prototype.init = function (t, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !eT)
              ) {
                this.update = this.refresh = this.kill = eR;
                return;
              }
              var n,
                i,
                o,
                a,
                s,
                l,
                c,
                u,
                f,
                d,
                p,
                h,
                g,
                m,
                v,
                w,
                x,
                S,
                _,
                k,
                P,
                C,
                E,
                T,
                A,
                j,
                F,
                N,
                B,
                z,
                L,
                W,
                H,
                G,
                Q,
                et,
                en,
                ei,
                eo,
                el,
                ec,
                eu = (t = tt(
                  eU(t) || eV(t) || t.nodeType ? { trigger: t } : t,
                  tf
                )),
                ef = eu.onUpdate,
                ed = eu.toggleClass,
                ep = eu.id,
                eh = eu.onToggle,
                eg = eu.onRefresh,
                em = eu.scrub,
                ev = eu.trigger,
                eb = eu.pin,
                ex = eu.pinSpacing,
                eO = eu.invalidateOnRefresh,
                eC = eu.anticipatePin,
                eD = eu.onScrubComplete,
                eI = eu.onSnapComplete,
                eF = eu.once,
                eN = eu.snap,
                ez = eu.pinReparent,
                eX = eu.pinSpacer,
                eK = eu.containerAnimation,
                eQ = eu.fastScrollEnd,
                eJ = eu.preventOverlaps,
                ta =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? M
                    : D,
                tc = !em && 0 !== em,
                td = I(t.scroller || X),
                tg = Y.core.getCache(td),
                tb = eB(td),
                tw =
                  ("pinType" in t
                    ? t.pinType
                    : O(td, "pinType") || (tb && "fixed")) === "fixed",
                tS = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                tO = tc && t.toggleActions.split(" "),
                tk = "markers" in t ? t.markers : tf.markers,
                tP = tb ? 0 : parseFloat(e7(td)["border" + ta.p2 + e8]) || 0,
                tC = this,
                tE =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(tC);
                  },
                tT = eY(td, tb, ta),
                tA =
                  !tb || ~y.indexOf(td)
                    ? eL(td)
                    : function () {
                        return tV;
                      },
                tD = 0,
                tI = 0,
                tR = 0,
                tj = R(td, ta);
              if (
                ((tC._startClamp = tC._endClamp = !1),
                (tC._dir = ta),
                (eC *= 45),
                (tC.scroller = td),
                (tC.scroll = eK ? eK.time.bind(eK) : tj),
                (l = tj()),
                (tC.vars = t),
                (r = r || t.animation),
                "refreshPriority" in t &&
                  ((ea = 1), -9999 === t.refreshPriority && (e_ = tC)),
                (tg.tweenScroll = tg.tweenScroll || {
                  top: tQ(td, D),
                  left: tQ(td, M),
                }),
                (tC.tweenTo = o = tg.tweenScroll[ta.p]),
                (tC.scrubDuration = function (e) {
                  (Q = eV(e) && e)
                    ? G
                      ? G.duration(e)
                      : (G = Y.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: Q,
                          paused: !0,
                          onComplete: function () {
                            return eD && eD(tC);
                          },
                        }))
                    : (G && G.progress(1).kill(), (G = 0));
                }),
                r &&
                  ((r.vars.lazy = !1),
                  (r._initted && !tC.isReverted) ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      r.duration() &&
                      r.render(0, !0, !0)),
                  (tC.animation = r.pause()),
                  (r.scrollTrigger = tC),
                  tC.scrubDuration(em),
                  (W = 0),
                  ep || (ep = r.vars.id)),
                eN &&
                  ((!eH(eN) || eN.push) && (eN = { snapTo: eN }),
                  "scrollBehavior" in V.style &&
                    Y.set(tb ? [V, q] : td, { scrollBehavior: "auto" }),
                  b.forEach(function (e) {
                    return (
                      eq(e) &&
                      e.target === (tb ? U.scrollingElement || q : td) &&
                      (e.smooth = !1)
                    );
                  }),
                  (s = eq(eN.snapTo)
                    ? eN.snapTo
                    : "labels" === eN.snapTo
                    ? ((n = r),
                      function (e) {
                        return Y.utils.snap(ti(n), e);
                      })
                    : "labelsDirectional" === eN.snapTo
                    ? ((i = r),
                      function (e, t) {
                        return to(ti(i))(e, t.direction);
                      })
                    : !1 !== eN.directional
                    ? function (e, t) {
                        return to(eN.snapTo)(
                          e,
                          eP() - tI < 500 ? 0 : t.direction
                        );
                      }
                    : Y.utils.snap(eN.snapTo)),
                  (et = eH((et = eN.duration || { min: 0.1, max: 2 }))
                    ? Z(et.min, et.max)
                    : Z(et, et)),
                  (en = Y.delayedCall(eN.delay || Q / 2 || 0.1, function () {
                    var e = tj(),
                      t = eP() - tI < 500,
                      n = o.tween;
                    if (
                      (t || 10 > Math.abs(tC.getVelocity())) &&
                      !n &&
                      !ee &&
                      tD !== e
                    ) {
                      var i,
                        a,
                        l = (e - u) / w,
                        c = r && !tc ? r.totalProgress() : l,
                        d = t ? 0 : ((c - H) / (eP() - K)) * 1e3 || 0,
                        p = Y.utils.clamp(-l, 1 - l, (eZ(d / 2) * d) / 0.185),
                        h = l + (!1 === eN.inertia ? 0 : p),
                        g = eN,
                        m = g.onStart,
                        v = g.onInterrupt,
                        b = g.onComplete;
                      if (
                        (eV((i = s(h, tC))) || (i = h),
                        (a = Math.round(u + i * w)),
                        e <= f && e >= u && a !== e)
                      ) {
                        if (n && !n._initted && n.data <= eZ(a - e)) return;
                        !1 === eN.inertia && (p = i - l),
                          o(
                            a,
                            {
                              duration: et(
                                eZ(
                                  (0.185 * Math.max(eZ(h - c), eZ(i - c))) /
                                    d /
                                    0.05 || 0
                                )
                              ),
                              ease: eN.ease || "power3",
                              data: eZ(a - e),
                              onInterrupt: function () {
                                return en.restart(!0) && v && v(tC);
                              },
                              onComplete: function () {
                                tC.update(),
                                  (tD = tj()),
                                  r &&
                                    (G
                                      ? G.resetTo(
                                          "totalProgress",
                                          i,
                                          r._tTime / r._tDur
                                        )
                                      : r.progress(i)),
                                  (W = H =
                                    r && !tc ? r.totalProgress() : tC.progress),
                                  eI && eI(tC),
                                  b && b(tC);
                              },
                            },
                            e,
                            p * w,
                            a - e - p * w
                          ),
                          m && m(tC, o.tween);
                      }
                    } else tC.isActive && tD !== e && en.restart(!0);
                  }).pause())),
                ep && (tv[ep] = tC),
                (ec =
                  (ev = tC.trigger = I(ev || (!0 !== eb && eb))) &&
                  ev._gsap &&
                  ev._gsap.stRevert) && (ec = ec(tC)),
                (eb = !0 === eb ? ev : I(eb)),
                eU(ed) && (ed = { targets: ev, className: ed }),
                eb &&
                  (!1 === ex ||
                    ex === e5 ||
                    (ex =
                      (!!ex ||
                        !eb.parentNode ||
                        !eb.parentNode.style ||
                        "flex" !== e7(eb.parentNode).display) &&
                      e4),
                  (tC.pin = eb),
                  (a = Y.core.getCache(eb)).spacer
                    ? (x = a.pinState)
                    : (eX &&
                        ((eX = I(eX)) &&
                          !eX.nodeType &&
                          (eX = eX.current || eX.nativeElement),
                        (a.spacerIsNative = !!eX),
                        eX && (a.spacerState = tU(eX))),
                      (a.spacer = k = eX || U.createElement("div")),
                      k.classList.add("pin-spacer"),
                      ep && k.classList.add("pin-spacer-" + ep),
                      (a.pinState = x = tU(eb))),
                  !1 !== t.force3D && Y.set(eb, { force3D: !0 }),
                  (tC.spacer = k = a.spacer),
                  (j = (L = e7(eb))[ex + ta.os2]),
                  (C = Y.getProperty(eb)),
                  (E = Y.quickSetter(eb, ta.a, "px")),
                  tY(eb, k, L),
                  (_ = tU(eb))),
                tk)
              ) {
                (m = eH(tk) ? tt(tk, tu) : tu),
                  (h = th("scroller-start", ep, td, ta, m, 0)),
                  (g = th("scroller-end", ep, td, ta, m, 0, h)),
                  (P = h["offset" + ta.op.d2]);
                var tN = I(O(td, "content") || td);
                (d = this.markerStart = th("start", ep, tN, ta, m, P, 0, eK)),
                  (p = this.markerEnd = th("end", ep, tN, ta, m, P, 0, eK)),
                  eK && (el = Y.quickSetter([d, p], ta.a, "px")),
                  tw ||
                    (y.length && !0 === O(td, "fixedMarkers")) ||
                    (te(tb ? V : td),
                    Y.set([h, g], { force3D: !0 }),
                    (N = Y.quickSetter(h, ta.a, "px")),
                    (z = Y.quickSetter(g, ta.a, "px")));
              }
              if (eK) {
                var tB = eK.vars.onUpdate,
                  tz = eK.vars.onUpdateParams;
                eK.eventCallback("onUpdate", function () {
                  tC.update(0, 0, 1), tB && tB.apply(eK, tz || []);
                });
              }
              if (
                ((tC.previous = function () {
                  return tm[tm.indexOf(tC) - 1];
                }),
                (tC.next = function () {
                  return tm[tm.indexOf(tC) + 1];
                }),
                (tC.revert = function (e, t) {
                  if (!t) return tC.kill(!0);
                  var n = !1 !== e || !tC.enabled,
                    i = J;
                  n !== tC.isReverted &&
                    (n &&
                      ((ei = Math.max(tj(), tC.scroll.rec || 0)),
                      (tR = tC.progress),
                      (eo = r && r.progress())),
                    d &&
                      [d, p, h, g].forEach(function (e) {
                        return (e.style.display = n ? "none" : "block");
                      }),
                    n && ((J = tC), tC.update(n)),
                    !eb ||
                      (ez && tC.isActive) ||
                      (n ? tL(eb, k, x) : tY(eb, k, e7(eb), F)),
                    n || tC.update(n),
                    (J = i),
                    (tC.isReverted = n));
                }),
                (tC.refresh = function (n, i, a, s) {
                  if ((!J && tC.enabled) || i) {
                    if (eb && n && eE) {
                      ts(e, "scrollEnd", t_);
                      return;
                    }
                    !eS && tE && tE(tC),
                      (J = tC),
                      o.tween && !a && (o.tween.kill(), (o.tween = 0)),
                      G && G.pause(),
                      eO && r && r.revert({ kill: !1 }).invalidate(),
                      tC.isReverted || tC.revert(!0, !0),
                      (tC._subPinOffset = !1);
                    var m,
                      b,
                      y,
                      O,
                      P,
                      E,
                      j,
                      N,
                      z,
                      L,
                      W,
                      X,
                      H,
                      $ = tT(),
                      Z = tA(),
                      K = eK ? eK.duration() : eW(td, ta),
                      Q = w <= 0.01,
                      ee = 0,
                      et = s || 0,
                      er = eH(a) ? a.end : t.end,
                      ea = t.endTrigger || ev,
                      el = eH(a)
                        ? a.start
                        : t.start ||
                          (0 !== t.start && ev ? (eb ? "0 0" : "0 100%") : 0),
                      ec = (tC.pinnedContainer =
                        t.pinnedContainer && I(t.pinnedContainer, tC)),
                      eu = (ev && Math.max(0, tm.indexOf(tC))) || 0,
                      ef = eu;
                    for (
                      tk &&
                      eH(a) &&
                      ((X = Y.getProperty(h, ta.p)),
                      (H = Y.getProperty(g, ta.p)));
                      ef--;

                    )
                      (E = tm[ef]).end || E.refresh(0, 1) || (J = tC),
                        (j = E.pin) &&
                          (j === ev || j === eb || j === ec) &&
                          !E.isReverted &&
                          (L || (L = []), L.unshift(E), E.revert(!0, !0)),
                        E !== tm[ef] && (eu--, ef--);
                    for (
                      eq(el) && (el = el(tC)),
                        u =
                          tH(
                            (el = eA(el, "start", tC)),
                            ev,
                            $,
                            ta,
                            tj(),
                            d,
                            h,
                            tC,
                            Z,
                            tP,
                            tw,
                            K,
                            eK,
                            tC._startClamp && "_startClamp"
                          ) || (eb ? -0.001 : 0),
                        eq(er) && (er = er(tC)),
                        eU(er) &&
                          !er.indexOf("+=") &&
                          (~er.indexOf(" ")
                            ? (er = (eU(el) ? el.split(" ")[0] : "") + er)
                            : ((ee = tp(er.substr(2), $)),
                              (er = eU(el)
                                ? el
                                : (eK
                                    ? Y.utils.mapRange(
                                        0,
                                        eK.duration(),
                                        eK.scrollTrigger.start,
                                        eK.scrollTrigger.end,
                                        u
                                      )
                                    : u) + ee),
                              (ea = ev))),
                        er = eA(er, "end", tC),
                        f =
                          Math.max(
                            u,
                            tH(
                              er || (ea ? "100% 0" : K),
                              ea,
                              $,
                              ta,
                              tj() + ee,
                              p,
                              g,
                              tC,
                              Z,
                              tP,
                              tw,
                              K,
                              eK,
                              tC._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        ee = 0,
                        ef = eu;
                      ef--;

                    )
                      (j = (E = tm[ef]).pin) &&
                        E.start - E._pinPush <= u &&
                        !eK &&
                        E.end > 0 &&
                        ((m =
                          E.end -
                          (tC._startClamp ? Math.max(0, E.start) : E.start)),
                        ((j === ev && E.start - E._pinPush < u) || j === ec) &&
                          isNaN(el) &&
                          (ee += m * (1 - E.progress)),
                        j === eb && (et += m));
                    if (
                      ((u += ee),
                      (f += ee),
                      tC._startClamp && (tC._startClamp += ee),
                      tC._endClamp &&
                        !eS &&
                        ((tC._endClamp = f || -0.001),
                        (f = Math.min(f, eW(td, ta)))),
                      (w = f - u || ((u -= 0.01) && 0.001)),
                      Q &&
                        (tR = Y.utils.clamp(0, 1, Y.utils.normalize(u, f, ei))),
                      (tC._pinPush = et),
                      d &&
                        ee &&
                        (((m = {})[ta.a] = "+=" + ee),
                        ec && (m[ta.p] = "-=" + tj()),
                        Y.set([d, p], m)),
                      eb && !(ey && tC.end >= eW(td, ta)))
                    )
                      (m = e7(eb)),
                        (O = ta === D),
                        (y = tj()),
                        (T = parseFloat(C(ta.a)) + et),
                        !K &&
                          f > 1 &&
                          ((W = {
                            style: (W = (tb ? U.scrollingElement || q : td)
                              .style),
                            value: W["overflow" + ta.a.toUpperCase()],
                          }),
                          tb &&
                            "scroll" !==
                              e7(V)["overflow" + ta.a.toUpperCase()] &&
                            (W.style["overflow" + ta.a.toUpperCase()] =
                              "scroll")),
                        tY(eb, k, m),
                        (_ = tU(eb)),
                        (b = tr(eb, !0)),
                        (N = tw && R(td, O ? M : D)()),
                        ex
                          ? (((F = [ex + ta.os2, w + et + "px"]).t = k),
                            (ef = ex === e4 ? tn(eb, ta) + w + et : 0) &&
                              (F.push(ta.d, ef + "px"),
                              "auto" !== k.style.flexBasis &&
                                (k.style.flexBasis = ef + "px")),
                            tX(F),
                            ec &&
                              tm.forEach(function (e) {
                                e.pin === ec &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            tw && tj(ei))
                          : (ef = tn(eb, ta)) &&
                            "auto" !== k.style.flexBasis &&
                            (k.style.flexBasis = ef + "px"),
                        tw &&
                          (((P = {
                            top: b.top + (O ? y - u : N) + "px",
                            left: b.left + (O ? N : y - u) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[e0] = P["max" + e8] =
                            Math.ceil(b.width) + "px"),
                          (P[e1] = P["max" + e9] = Math.ceil(b.height) + "px"),
                          (P[e5] =
                            P[e5 + "Top"] =
                            P[e5 + e2] =
                            P[e5 + e6] =
                            P[e5 + e3] =
                              "0"),
                          (P[e4] = m[e4]),
                          (P[e4 + "Top"] = m[e4 + "Top"]),
                          (P[e4 + e2] = m[e4 + e2]),
                          (P[e4 + e6] = m[e4 + e6]),
                          (P[e4 + e3] = m[e4 + e3]),
                          (S = tq(x, P, ez)),
                          eS && tj(0)),
                        r
                          ? ((z = r._initted),
                            es(1),
                            r.render(r.duration(), !0, !0),
                            (A = C(ta.a) - T + w + et),
                            (B = Math.abs(w - A) > 1),
                            tw && B && S.splice(S.length - 2, 2),
                            r.render(0, !0, !0),
                            z || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            es(0))
                          : (A = w),
                        W &&
                          (W.value
                            ? (W.style["overflow" + ta.a.toUpperCase()] =
                                W.value)
                            : W.style.removeProperty("overflow-" + ta.a));
                    else if (ev && tj() && !eK)
                      for (b = ev.parentNode; b && b !== V; )
                        b._pinOffset &&
                          ((u -= b._pinOffset), (f -= b._pinOffset)),
                          (b = b.parentNode);
                    L &&
                      L.forEach(function (e) {
                        return e.revert(!1, !0);
                      }),
                      (tC.start = u),
                      (tC.end = f),
                      (l = c = eS ? ei : tj()),
                      eK || eS || (l < ei && tj(ei), (tC.scroll.rec = 0)),
                      tC.revert(!1, !0),
                      (tI = eP()),
                      en && ((tD = -1), en.restart(!0)),
                      (J = 0),
                      r &&
                        tc &&
                        (r._initted || eo) &&
                        r.progress() !== eo &&
                        r.progress(eo || 0, !0).render(r.time(), !0, !0),
                      (Q || tR !== tC.progress || eK || eO) &&
                        (r &&
                          !tc &&
                          r.totalProgress(
                            eK && u < -0.001 && !tR
                              ? Y.utils.normalize(u, f, 0)
                              : tR,
                            !0
                          ),
                        (tC.progress = Q || (l - u) / w === tR ? 0 : tR)),
                      eb && ex && (k._pinOffset = Math.round(tC.progress * A)),
                      G && G.invalidate(),
                      isNaN(X) ||
                        ((X -= Y.getProperty(h, ta.p)),
                        (H -= Y.getProperty(g, ta.p)),
                        tK(h, ta, X),
                        tK(d, ta, X - (s || 0)),
                        tK(g, ta, H),
                        tK(p, ta, H - (s || 0))),
                      Q && !eS && tC.update(),
                      !eg || eS || v || ((v = !0), eg(tC), (v = !1));
                  }
                }),
                (tC.getVelocity = function () {
                  return ((tj() - c) / (eP() - K)) * 1e3 || 0;
                }),
                (tC.endAnimation = function () {
                  eG(tC.callbackAnimation),
                    r &&
                      (G
                        ? G.progress(1)
                        : r.paused()
                        ? tc || eG(r, tC.direction < 0, 1)
                        : eG(r, r.reversed()));
                }),
                (tC.labelToScroll = function (e) {
                  return (
                    (r &&
                      r.labels &&
                      (u || tC.refresh() || u) +
                        (r.labels[e] / r.duration()) * w) ||
                    0
                  );
                }),
                (tC.getTrailing = function (e) {
                  var t = tm.indexOf(tC),
                    r =
                      tC.direction > 0
                        ? tm.slice(0, t).reverse()
                        : tm.slice(t + 1);
                  return (
                    eU(e)
                      ? r.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : r
                  ).filter(function (e) {
                    return tC.direction > 0 ? e.end <= u : e.start >= f;
                  });
                }),
                (tC.update = function (e, t, n) {
                  if (!eK || n || e) {
                    var i,
                      a,
                      s,
                      d,
                      p,
                      g,
                      m,
                      v = !0 === eS ? ei : tC.scroll(),
                      b = e ? 0 : (v - u) / w,
                      y = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                      x = tC.progress;
                    if (
                      (t &&
                        ((c = l),
                        (l = eK ? tj() : v),
                        eN &&
                          ((H = W), (W = r && !tc ? r.totalProgress() : y))),
                      eC &&
                        eb &&
                        !J &&
                        !ek &&
                        eE &&
                        (!y && u < v + ((v - c) / (eP() - K)) * eC
                          ? (y = 1e-4)
                          : 1 === y &&
                            f > v + ((v - c) / (eP() - K)) * eC &&
                            (y = 0.9999)),
                      y !== x && tC.enabled)
                    ) {
                      if (
                        ((d =
                          (p =
                            (i = tC.isActive = !!y && y < 1) !=
                            (!!x && x < 1)) || !!y != !!x),
                        (tC.direction = y > x ? 1 : -1),
                        (tC.progress = y),
                        d &&
                          !J &&
                          ((a = y && !x ? 0 : 1 === y ? 1 : 1 === x ? 2 : 3),
                          tc &&
                            ((s =
                              (!p && "none" !== tO[a + 1] && tO[a + 1]) ||
                              tO[a]),
                            (m =
                              r &&
                              ("complete" === s || "reset" === s || s in r)))),
                        eJ &&
                          (p || m) &&
                          (m || em || !r) &&
                          (eq(eJ)
                            ? eJ(tC)
                            : tC.getTrailing(eJ).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        !tc &&
                          (!G || J || ek
                            ? r && r.totalProgress(y, !!(J && (tI || e)))
                            : (G._dp._time - G._start !== G._time &&
                                G.render(G._dp._time - G._start),
                              G.resetTo
                                ? G.resetTo(
                                    "totalProgress",
                                    y,
                                    r._tTime / r._tDur
                                  )
                                : ((G.vars.totalProgress = y),
                                  G.invalidate().restart()))),
                        eb)
                      ) {
                        if ((e && ex && (k.style[ex + ta.os2] = j), tw)) {
                          if (d) {
                            if (
                              ((g =
                                !e &&
                                y > x &&
                                f + 1 > v &&
                                v + 1 >= eW(td, ta)),
                              ez)
                            ) {
                              if (!e && (i || g)) {
                                var O = tr(eb, !0),
                                  P = v - u;
                                t$(
                                  eb,
                                  V,
                                  O.top + (ta === D ? P : 0) + "px",
                                  O.left + (ta === D ? 0 : P) + "px"
                                );
                              } else t$(eb, k);
                            }
                            tX(i || g ? S : _),
                              (B && y < 1 && i) ||
                                E(T + (1 !== y || g ? 0 : A));
                          }
                        } else E(ej(T + A * y));
                      }
                      !eN || o.tween || J || ek || en.restart(!0),
                        ed &&
                          (p || (eF && y && (y < 1 || !ew))) &&
                          $(ed.targets).forEach(function (e) {
                            return e.classList[i || eF ? "add" : "remove"](
                              ed.className
                            );
                          }),
                        !ef || tc || e || ef(tC),
                        d && !J
                          ? (tc &&
                              (m &&
                                ("complete" === s
                                  ? r.pause().totalProgress(1)
                                  : "reset" === s
                                  ? r.restart(!0).pause()
                                  : "restart" === s
                                  ? r.restart(!0)
                                  : r[s]()),
                              ef && ef(tC)),
                            (p || !ew) &&
                              (eh && p && e$(tC, eh),
                              tS[a] && e$(tC, tS[a]),
                              eF && (1 === y ? tC.kill(!1, 1) : (tS[a] = 0)),
                              !p && tS[(a = 1 === y ? 1 : 3)] && e$(tC, tS[a])),
                            eQ &&
                              !i &&
                              Math.abs(tC.getVelocity()) >
                                (eV(eQ) ? eQ : 2500) &&
                              (eG(tC.callbackAnimation),
                              G
                                ? G.progress(1)
                                : eG(r, "reverse" === s ? 1 : !y, 1)))
                          : tc && ef && !J && ef(tC);
                    }
                    if (z) {
                      var C = eK
                        ? (v / eK.duration()) * (eK._caScrollDist || 0)
                        : v;
                      N(C + (h._isFlipped ? 1 : 0)), z(C);
                    }
                    el && el((-v / eK.duration()) * (eK._caScrollDist || 0));
                  }
                }),
                (tC.enable = function (t, r) {
                  tC.enabled ||
                    ((tC.enabled = !0),
                    ts(td, "resize", tx),
                    tb || ts(td, "scroll", ty),
                    tE && ts(e, "refreshInit", tE),
                    !1 !== t && ((tC.progress = tR = 0), (l = c = tD = tj())),
                    !1 !== r && tC.refresh());
                }),
                (tC.getTween = function (e) {
                  return e && o ? o.tween : G;
                }),
                (tC.setPositions = function (e, t, r, n) {
                  if (eK) {
                    var i = eK.scrollTrigger,
                      o = eK.duration(),
                      a = i.end - i.start;
                    (e = i.start + (a * e) / o), (t = i.start + (a * t) / o);
                  }
                  tC.refresh(
                    !1,
                    !1,
                    {
                      start: eM(e, r && !!tC._startClamp),
                      end: eM(t, r && !!tC._endClamp),
                    },
                    n
                  ),
                    tC.update();
                }),
                (tC.adjustPinSpacing = function (e) {
                  if (F && e) {
                    var t = F.indexOf(ta.d) + 1;
                    (F[t] = parseFloat(F[t]) + e + "px"),
                      (F[1] = parseFloat(F[1]) + e + "px"),
                      tX(F);
                  }
                }),
                (tC.disable = function (t, r) {
                  if (
                    tC.enabled &&
                    (!1 !== t && tC.revert(!0, !0),
                    (tC.enabled = tC.isActive = !1),
                    r || (G && G.pause()),
                    (ei = 0),
                    a && (a.uncache = 1),
                    tE && tl(e, "refreshInit", tE),
                    en &&
                      (en.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                    !tb)
                  ) {
                    for (var n = tm.length; n--; )
                      if (tm[n].scroller === td && tm[n] !== tC) return;
                    tl(td, "resize", tx), tb || tl(td, "scroll", ty);
                  }
                }),
                (tC.kill = function (e, n) {
                  tC.disable(e, n), G && !n && G.kill(), ep && delete tv[ep];
                  var i = tm.indexOf(tC);
                  i >= 0 && tm.splice(i, 1),
                    i === er && tF > 0 && er--,
                    (i = 0),
                    tm.forEach(function (e) {
                      return e.scroller === tC.scroller && (i = 1);
                    }),
                    i || eS || (tC.scroll.rec = 0),
                    r &&
                      ((r.scrollTrigger = null),
                      e && r.revert({ kill: !1 }),
                      n || r.kill()),
                    d &&
                      [d, p, h, g].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    e_ === tC && (e_ = 0),
                    eb &&
                      (a && (a.uncache = 1),
                      (i = 0),
                      tm.forEach(function (e) {
                        return e.pin === eb && i++;
                      }),
                      i || (a.spacer = 0)),
                    t.onKill && t.onKill(tC);
                }),
                tm.push(tC),
                tC.enable(!1, !1),
                ec && ec(tC),
                r && r.add && !w)
              ) {
                var tW = tC.update;
                (tC.update = function () {
                  (tC.update = tW), u || f || tC.refresh();
                }),
                  Y.delayedCall(0.01, tC.update),
                  (w = 0.01),
                  (u = f = 0);
              } else tC.refresh();
              eb && tM();
            }),
            (e.register = function (t) {
              return (
                W ||
                  ((Y = t || eN()),
                  eF() && window.document && e.enable(),
                  (W = eT)),
                W
              );
            }),
            (e.defaults = function (e) {
              if (e) for (var t in e) tf[t] = e[t];
              return tf;
            }),
            (e.disable = function (e, t) {
              (eT = 0),
                tm.forEach(function (r) {
                  return r[t ? "kill" : "disable"](e);
                }),
                tl(X, "wheel", ty),
                tl(U, "scroll", ty),
                clearInterval(Q),
                tl(U, "touchcancel", eR),
                tl(V, "touchstart", eR),
                ta(tl, U, "pointerdown,touchstart,mousedown", eD),
                ta(tl, U, "pointerup,touchend,mouseup", eI),
                G.kill(),
                eX(tl);
              for (var r = 0; r < b.length; r += 3)
                tc(tl, b[r], b[r + 1]), tc(tl, b[r], b[r + 2]);
            }),
            (e.enable = function () {
              if (
                ((X = window),
                (q = (U = document).documentElement),
                (V = U.body),
                Y &&
                  (($ = Y.utils.toArray),
                  (Z = Y.utils.clamp),
                  (eh = Y.core.context || eR),
                  (es = Y.core.suppressOverwrites || eR),
                  (eg = X.history.scrollRestoration || "auto"),
                  (tj = X.pageYOffset),
                  Y.core.globals("ScrollTrigger", e),
                  V))
              ) {
                (eT = 1),
                  ((em = document.createElement("div")).style.height = "100vh"),
                  (em.style.position = "absolute"),
                  tD(),
                  (function e() {
                    return eT && requestAnimationFrame(e);
                  })(),
                  L.register(Y),
                  (e.isTouch = L.isTouch),
                  (ep =
                    L.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (eu = 1 === L.isTouch),
                  ts(X, "wheel", ty),
                  (H = [X, U, q, V]),
                  Y.matchMedia
                    ? ((e.matchMedia = function (e) {
                        var t,
                          r = Y.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r;
                      }),
                      Y.addEventListener("matchMediaInit", function () {
                        return tE();
                      }),
                      Y.addEventListener("matchMediaRevert", function () {
                        return tC();
                      }),
                      Y.addEventListener("matchMedia", function () {
                        tR(0, 1), tk("matchMedia");
                      }),
                      Y.matchMedia("(orientation: portrait)", function () {
                        return tw(), tw;
                      }))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  tw(),
                  ts(U, "scroll", ty);
                var t,
                  r,
                  n = V.style,
                  i = n.borderTopStyle,
                  o = Y.core.Animation.prototype;
                for (
                  o.revert ||
                    Object.defineProperty(o, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    n.borderTopStyle = "solid",
                    t = tr(V),
                    D.m = Math.round(t.top + D.sc()) || 0,
                    M.m = Math.round(t.left + M.sc()) || 0,
                    i
                      ? (n.borderTopStyle = i)
                      : n.removeProperty("border-top-style"),
                    Q = setInterval(tb, 250),
                    Y.delayedCall(0.5, function () {
                      return (ek = 0);
                    }),
                    ts(U, "touchcancel", eR),
                    ts(V, "touchstart", eR),
                    ta(ts, U, "pointerdown,touchstart,mousedown", eD),
                    ta(ts, U, "pointerup,touchend,mouseup", eI),
                    et = Y.utils.checkPrefix("transform"),
                    tz.push(et),
                    W = eP(),
                    G = Y.delayedCall(0.2, tR).pause(),
                    eo = [
                      U,
                      "visibilitychange",
                      function () {
                        var e = X.innerWidth,
                          t = X.innerHeight;
                        U.hidden
                          ? ((en = e), (ei = t))
                          : (en !== e || ei !== t) && tx();
                      },
                      U,
                      "DOMContentLoaded",
                      tR,
                      X,
                      "load",
                      tR,
                      X,
                      "resize",
                      tx,
                    ],
                    eX(ts),
                    tm.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    r = 0;
                  r < b.length;
                  r += 3
                )
                  tc(tl, b[r], b[r + 1]), tc(tl, b[r], b[r + 2]);
              }
            }),
            (e.config = function (t) {
              "limitCallbacks" in t && (ew = !!t.limitCallbacks);
              var r = t.syncInterval;
              (r && clearInterval(Q)) || ((Q = r) && setInterval(tb, r)),
                "ignoreMobileResize" in t &&
                  (eu = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents" in t &&
                  (eX(tl) || eX(ts, t.autoRefreshEvents || "none"),
                  (el = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (e.scrollerProxy = function (e, t) {
              var r = I(e),
                n = b.indexOf(r),
                i = eB(r);
              ~n && b.splice(n, i ? 6 : 2),
                t && (i ? y.unshift(X, t, V, t, q, t) : y.unshift(r, t));
            }),
            (e.clearMatchMedia = function (e) {
              tm.forEach(function (t) {
                return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
              });
            }),
            (e.isInViewport = function (e, t, r) {
              var n = (eU(e) ? I(e) : e).getBoundingClientRect(),
                i = n[r ? e0 : e1] * t || 0;
              return r
                ? n.right - i > 0 && n.left + i < X.innerWidth
                : n.bottom - i > 0 && n.top + i < X.innerHeight;
            }),
            (e.positionInViewport = function (e, t, r) {
              eU(e) && (e = I(e));
              var n = e.getBoundingClientRect(),
                i = n[r ? e0 : e1],
                o =
                  null == t
                    ? i / 2
                    : t in td
                    ? td[t] * i
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * i) / 100
                    : parseFloat(t) || 0;
              return r
                ? (n.left + o) / X.innerWidth
                : (n.top + o) / X.innerHeight;
            }),
            (e.killAll = function (e) {
              if (
                (tm.slice(0).forEach(function (e) {
                  return "ScrollSmoother" !== e.vars.id && e.kill();
                }),
                !0 !== e)
              ) {
                var t = tS.killAll || [];
                (tS = {}),
                  t.forEach(function (e) {
                    return e();
                  });
              }
            }),
            e
          );
        })()).version = "3.12.5"),
        (tJ.saveStyles = function (e) {
          return e
            ? $(e).forEach(function (e) {
                if (e && e.style) {
                  var t = tP.indexOf(e);
                  t >= 0 && tP.splice(t, 5),
                    tP.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      Y.core.getCache(e),
                      eh()
                    );
                }
              })
            : tP;
        }),
        (tJ.revert = function (e, t) {
          return tE(!e, t);
        }),
        (tJ.create = function (e, t) {
          return new tJ(e, t);
        }),
        (tJ.refresh = function (e) {
          return e ? tx() : (W || tJ.register()) && tR(!0);
        }),
        (tJ.update = function (e) {
          return ++b.cache && tN(!0 === e ? 2 : 0);
        }),
        (tJ.clearScrollMemory = tT),
        (tJ.maxScroll = function (e, t) {
          return eW(e, t ? M : D);
        }),
        (tJ.getScrollFunc = function (e, t) {
          return R(I(e), t ? M : D);
        }),
        (tJ.getById = function (e) {
          return tv[e];
        }),
        (tJ.getAll = function () {
          return tm.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (tJ.isScrolling = function () {
          return !!eE;
        }),
        (tJ.snapDirectional = to),
        (tJ.addEventListener = function (e, t) {
          var r = tS[e] || (tS[e] = []);
          ~r.indexOf(t) || r.push(t);
        }),
        (tJ.removeEventListener = function (e, t) {
          var r = tS[e],
            n = r && r.indexOf(t);
          n >= 0 && r.splice(n, 1);
        }),
        (tJ.batch = function (e, t) {
          var r,
            n = [],
            i = {},
            o = t.interval || 0.016,
            a = t.batchMax || 1e9,
            s = function (e, t) {
              var r = [],
                n = [],
                i = Y.delayedCall(o, function () {
                  t(r, n), (r = []), (n = []);
                }).pause();
              return function (e) {
                r.length || i.restart(!0),
                  r.push(e.trigger),
                  n.push(e),
                  a <= r.length && i.progress(1);
              };
            };
          for (r in t)
            i[r] =
              "on" === r.substr(0, 2) && eq(t[r]) && "onRefreshInit" !== r
                ? s(r, t[r])
                : t[r];
          return (
            eq(a) &&
              ((a = a()),
              ts(tJ, "refresh", function () {
                return (a = t.batchMax());
              })),
            $(e).forEach(function (e) {
              var t = {};
              for (r in i) t[r] = i[r];
              (t.trigger = e), n.push(tJ.create(t));
            }),
            n
          );
        }),
        (t1 = function (e, t, r, n) {
          return (
            t > n ? e(n) : t < 0 && e(0),
            r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
          );
        }),
        (t2 = function e(t, r) {
          !0 === r
            ? t.style.removeProperty("touch-action")
            : (t.style.touchAction =
                !0 === r
                  ? "auto"
                  : r
                  ? "pan-" + r + (L.isTouch ? " pinch-zoom" : "")
                  : "none"),
            t === q && e(V, r);
        }),
        (t3 = { auto: 1, scroll: 1 }),
        (t6 = function (e) {
          var t,
            r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || Y.core.getCache(o),
            s = eP();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (
              ;
              o &&
              o !== V &&
              ((o.scrollHeight <= o.clientHeight &&
                o.scrollWidth <= o.clientWidth) ||
                !(t3[(t = e7(o)).overflowY] || t3[t.overflowX]));

            )
              o = o.parentNode;
            (a._isScroll =
              o &&
              o !== n &&
              !eB(o) &&
              (t3[(t = e7(o)).overflowY] || t3[t.overflowX])),
              (a._isScrollT = s);
          }
          (a._isScroll || "x" === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0));
        }),
        (t4 = function (e, t, r, n) {
          return L.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (n = n && t6),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && ts(U, L.eventTypes[0], t8, !1, !0);
            },
            onDisable: function () {
              return tl(U, L.eventTypes[0], t8, !0);
            },
          });
        }),
        (t5 = /(input|label|select|textarea)/i),
        (t8 = function (e) {
          var t = t5.test(e.target.tagName);
          (t || t0) && ((e._gsapAllow = !0), (t0 = t));
        }),
        (t9 = function (e) {
          eH(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
          var t,
            r,
            n,
            i,
            o,
            a,
            s,
            l,
            c = e,
            u = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            p = c.onRelease,
            h = I(e.target) || q,
            g = Y.core.globals().ScrollSmoother,
            m = g && g.get(),
            v =
              ep &&
              ((e.content && I(e.content)) ||
                (m && !1 !== e.content && !m.smooth() && m.content())),
            y = R(h, D),
            w = R(h, M),
            x = 1,
            S =
              (L.isTouch && X.visualViewport
                ? X.visualViewport.scale * X.visualViewport.width
                : X.outerWidth) / X.innerWidth,
            O = 0,
            _ = eq(f)
              ? function () {
                  return f(t);
                }
              : function () {
                  return f || 2.8;
                },
            k = t4(h, e.type, !0, d),
            P = function () {
              return (i = !1);
            },
            C = eR,
            E = eR,
            T = function () {
              (r = eW(h, D)),
                (E = Z(ep ? 1 : 0, r)),
                u && (C = Z(0, eW(h, M))),
                (n = tA);
            },
            A = function () {
              (v._gsap.y = ej(parseFloat(v._gsap.y) + y.offset) + "px"),
                (v.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(v._gsap.y) +
                  ", 0, 1)"),
                (y.offset = y.cacheID = 0);
            },
            j = function () {
              if (i) {
                requestAnimationFrame(P);
                var e = ej(t.deltaY / 2),
                  r = E(y.v - e);
                if (v && r !== y.v + y.offset) {
                  y.offset = r - y.v;
                  var n = ej((parseFloat(v && v._gsap.y) || 0) - y.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (v._gsap.y = n + "px"),
                    (y.cacheID = b.cache),
                    tN();
                }
                return !0;
              }
              y.offset && A(), (i = !0);
            },
            F = function () {
              T(),
                o.isActive() &&
                  o.vars.scrollY > r &&
                  (y() > r ? o.progress(1) && y(r) : o.resetTo("scrollY", r));
            };
          return (
            v && Y.set(v, { y: "+=0" }),
            (e.ignoreCheck = function (e) {
              return (
                (ep && "touchmove" === e.type && j()) ||
                (x > 1.05 && "touchstart" !== e.type) ||
                t.isGesturing ||
                (e.touches && e.touches.length > 1)
              );
            }),
            (e.onPress = function () {
              i = !1;
              var e = x;
              (x = ej(((X.visualViewport && X.visualViewport.scale) || 1) / S)),
                o.pause(),
                e !== x && t2(h, x > 1.01 || (!u && "x")),
                (a = w()),
                (s = y()),
                T(),
                (n = tA);
            }),
            (e.onRelease = e.onGestureStart =
              function (e, t) {
                if ((y.offset && A(), t)) {
                  b.cache++;
                  var n,
                    i,
                    a = _();
                  u &&
                    ((i = (n = w()) + -(0.05 * a * e.velocityX) / 0.227),
                    (a *= t1(w, n, i, eW(h, M))),
                    (o.vars.scrollX = C(i))),
                    (i = (n = y()) + -(0.05 * a * e.velocityY) / 0.227),
                    (a *= t1(y, n, i, eW(h, D))),
                    (o.vars.scrollY = E(i)),
                    o.invalidate().duration(a).play(0.01),
                    ((ep && o.vars.scrollY >= r) || n >= r - 1) &&
                      Y.to({}, { onUpdate: F, duration: a });
                } else l.restart(!0);
                p && p(e);
              }),
            (e.onWheel = function () {
              o._ts && o.pause(), eP() - O > 1e3 && ((n = 0), (O = eP()));
            }),
            (e.onChange = function (e, t, r, i, o) {
              if (
                (tA !== n && T(),
                t &&
                  u &&
                  w(C(i[2] === t ? a + (e.startX - e.x) : w() + t - i[1])),
                r)
              ) {
                y.offset && A();
                var l = o[2] === r,
                  c = l ? s + e.startY - e.y : y() + r - o[1],
                  f = E(c);
                l && c !== f && (s += f - c), y(f);
              }
              (r || t) && tN();
            }),
            (e.onEnable = function () {
              t2(h, !u && "x"),
                tJ.addEventListener("refresh", F),
                ts(X, "resize", F),
                y.smooth &&
                  ((y.target.style.scrollBehavior = "auto"),
                  (y.smooth = w.smooth = !1)),
                k.enable();
            }),
            (e.onDisable = function () {
              t2(h, !0),
                tl(X, "resize", F),
                tJ.removeEventListener("refresh", F),
                k.kill();
            }),
            (e.lockAxis = !1 !== e.lockAxis),
            ((t = new L(e)).iOS = ep),
            ep && !y() && y(1),
            ep && Y.ticker.add(eR),
            (l = t._dc),
            (o = Y.to(t, {
              ease: "power4",
              paused: !0,
              inherit: !1,
              scrollX: u ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: tZ(y, y(), function () {
                  return o.pause();
                }),
              },
              onUpdate: tN,
              onComplete: l.vars.onComplete,
            })),
            t
          );
        }),
        (tJ.sort = function (e) {
          return tm.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
        (tJ.observe = function (e) {
          return new L(e);
        }),
        (tJ.normalizeScroll = function (e) {
          if (void 0 === e) return ec;
          if (!0 === e && ec) return ec.enable();
          if (!1 === e) {
            ec && ec.kill(), (ec = e);
            return;
          }
          var t = e instanceof L ? e : t9(e);
          return (
            ec && ec.target === t.target && ec.kill(),
            eB(t.target) && (ec = t),
            t
          );
        }),
        (tJ.core = {
          _getVelocityProp: j,
          _inputObserver: t4,
          _scrollers: b,
          _proxies: y,
          bridge: {
            ss: function () {
              eE || tk("scrollStart"), (eE = eP());
            },
            ref: function () {
              return J;
            },
          },
        }),
        eN() && Y.registerPlugin(tJ),
        (t.ScrollTrigger = tJ),
        (t.default = tJ),
        "undefined" == typeof window || window !== t
          ? Object.defineProperty(t, "__esModule", { value: !0 })
          : delete window.default;
    },
    9582: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return e_;
        },
        p8: function () {
          return e_;
        },
      });
      var n,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h = r(9244),
        g = {},
        m = 180 / Math.PI,
        v = Math.PI / 180,
        b = Math.atan2,
        y = /([A-Z])/g,
        w = /(left|right|width|margin|padding|x)/i,
        x = /[\s,\(]\S/,
        S = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        O = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        _ = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        k = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        P = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        C = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        E = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        T = function (e, t, r) {
          return (e.style[t] = r);
        },
        A = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        M = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        D = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        I = function (e, t, r, n, i) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
        },
        R = function (e, t, r, n, i) {
          var o = e._gsap;
          (o[t] = r), o.renderTransform(i, o);
        },
        j = "transform",
        F = j + "Origin",
        N = function e(t, r) {
          var n = this,
            i = this.target,
            o = i.style,
            a = i._gsap;
          if (t in g && o) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return S.transform.split(",").forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = S[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (n.tfm[e] = et(i, e));
                  })
                : (this.tfm[t] = a.x ? a[t] : et(i, t)),
              t === F && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(j) >= 0)
            )
              return;
            a.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(F, r, "")),
              (t = j);
          }
          (o || r) && this.props.push(t, r, o[t]);
        },
        B = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        z = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (i[r[e]] = r[e + 2])
              : i.removeProperty(
                  "--" === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(y, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            o.svg &&
              (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = d()) && e.isStart) ||
                i[j] ||
                (B(i),
                o.zOrigin &&
                  i[F] &&
                  ((i[F] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1));
          }
        },
        L = function (e, t) {
          var r = { target: e, props: [], revert: z, save: N };
          return (
            e._gsap || h.p8.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        Y = function (e, t) {
          var r = s.createElementNS
            ? s.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : s.createElement(e);
          return r && r.style ? r : s.createElement(e);
        },
        W = function e(t, r, n) {
          var i = getComputedStyle(t);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(y, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && e(t, U(r) || r, 1)) ||
            ""
          );
        },
        X = "O,Moz,ms,Ms,Webkit".split(","),
        U = function (e, t, r) {
          var n = (t || u).style,
            i = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(X[i] + e in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? X[i] : "") + e;
        },
        q = function () {
          "undefined" != typeof window &&
            window.document &&
            ((l = (s = window.document).documentElement),
            (u = Y("div") || { style: {} }),
            Y("div"),
            (F = (j = U(j)) + "Origin"),
            (u.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (p = !!U("perspective")),
            (d = h.p8.core.reverting),
            (c = 1));
        },
        V = function e(t) {
          var r,
            n = Y(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (l.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            l.removeChild(n),
            (this.style.cssText = a),
            r
          );
        },
        H = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        G = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (r) {
            t = V.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === V ||
              (t = V.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +H(e, ["x", "cx", "x1"]) || 0,
                  y: +H(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        $ = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && G(e));
        },
        Z = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            t in g && t !== F && (t = j),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(y, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(t);
          }
        },
        K = function (e, t, r, n, i, o) {
          var a = new h.Fo(e._pt, t, r, 0, 1, o ? E : C);
          return (e._pt = a), (a.b = n), (a.e = i), e._props.push(r), a;
        },
        Q = { deg: 1, rad: 1, turn: 1 },
        J = { grid: 1, flex: 1 },
        ee = function e(t, r, n, i) {
          var o,
            a,
            l,
            c,
            f = parseFloat(n) || 0,
            d = (n + "").trim().substr((f + "").length) || "px",
            p = u.style,
            m = w.test(r),
            v = "svg" === t.tagName.toLowerCase(),
            b = (v ? "client" : "offset") + (m ? "Width" : "Height"),
            y = "px" === i,
            x = "%" === i;
          if (i === d || !f || Q[i] || Q[d]) return f;
          if (
            ("px" === d || y || (f = e(t, r, n, "px")),
            (c = t.getCTM && $(t)),
            (x || "%" === d) && (g[r] || ~r.indexOf("adius")))
          )
            return (
              (o = c ? t.getBBox()[m ? "width" : "height"] : t[b]),
              (0, h.Pr)(x ? (f / o) * 100 : (f / 100) * o)
            );
          if (
            ((p[m ? "width" : "height"] = 100 + (y ? d : i)),
            (a =
              ~r.indexOf("adius") || ("em" === i && t.appendChild && !v)
                ? t
                : t.parentNode),
            c && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== s && a.appendChild) || (a = s.body),
            (l = a._gsap) &&
              x &&
              l.width &&
              m &&
              l.time === h.xr.time &&
              !l.uncache)
          )
            return (0, h.Pr)((f / l.width) * 100);
          if (x && ("height" === r || "width" === r)) {
            var S = t.style[r];
            (t.style[r] = 100 + i), (o = t[b]), S ? (t.style[r] = S) : Z(t, r);
          } else
            (x || "%" === d) &&
              !J[W(a, "display")] &&
              (p.position = W(t, "position")),
              a === t && (p.position = "static"),
              a.appendChild(u),
              (o = u[b]),
              a.removeChild(u),
              (p.position = "absolute");
          return (
            m && x && (((l = (0, h.DY)(a)).time = h.xr.time), (l.width = a[b])),
            (0, h.Pr)(y ? (o * f) / 100 : o && f ? (100 / o) * f : 0)
          );
        },
        et = function (e, t, r, n) {
          var i;
          return (
            c || q(),
            t in S &&
              "transform" !== t &&
              ~(t = S[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            g[t] && "transform" !== t
              ? ((i = ep(e, n)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : eh(W(e, F)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (ea[t] && ea[t](e, t, r)) ||
                  W(e, t) ||
                  (0, h.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? ee(e, t, i, r) + r : i
          );
        },
        er = function (e, t, r, n) {
          if (!r || "none" === r) {
            var i = U(t, e, 1),
              o = i && W(e, i, 1);
            o && o !== r
              ? ((t = i), (r = o))
              : "borderColor" === t && (r = W(e, "borderTopColor"));
          }
          var a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            g,
            m,
            v,
            b = new h.Fo(this._pt, e.style, t, 0, 1, h.Ks),
            y = 0,
            w = 0;
          if (
            ((b.b = r),
            (b.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((f = e.style[t]),
              (e.style[t] = n),
              (n = W(e, t) || n),
              f ? (e.style[t] = f) : Z(e, t)),
            (a = [r, n]),
            (0, h.kr)(a),
            (r = a[0]),
            (n = a[1]),
            (l = r.match(h.d4) || []),
            (n.match(h.d4) || []).length)
          ) {
            for (; (s = h.d4.exec(n)); )
              (d = s[0]),
                (g = n.substring(y, s.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                    (u = 1),
                d !== (f = l[w++] || "") &&
                  ((c = parseFloat(f) || 0),
                  (v = f.substr((c + "").length)),
                  "=" === d.charAt(1) && (d = (0, h.cy)(c, d) + v),
                  (p = parseFloat(d)),
                  (m = d.substr((p + "").length)),
                  (y = h.d4.lastIndex - m.length),
                  m ||
                    ((m = m || h.Fc.units[t] || v),
                    y !== n.length || ((n += m), (b.e += m))),
                  v !== m && (c = ee(e, t, f, m) || 0),
                  (b._pt = {
                    _next: b._pt,
                    p: g || 1 === w ? g : ",",
                    s: c,
                    c: p - c,
                    m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            b.c = y < n.length ? n.substring(y, n.length) : "";
          } else b.r = "display" === t && "none" === n ? E : C;
          return h.bQ.test(n) && (b.e = 0), (this._pt = b), b;
        },
        en = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ei = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = en[r] || r),
            (t[1] = en[n] || n),
            t.join(" ")
          );
        },
        eo = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              i,
              o = t.t,
              a = o.style,
              s = t.u,
              l = o._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
            else
              for (i = (s = s.split(",")).length; --i > -1; )
                g[(r = s[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? F : j)),
                  Z(o, r);
            n &&
              (Z(o, j),
              l &&
                (l.svg && o.removeAttribute("transform"),
                ep(o, 1),
                (l.uncache = 1),
                B(a)));
          }
        },
        ea = {
          clearProps: function (e, t, r, n, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new h.Fo(e._pt, t, r, 0, 0, eo));
              return (
                (o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1
              );
            }
          },
        },
        es = [1, 0, 0, 1, 0, 0],
        el = {},
        ec = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        eu = function (e) {
          var t = W(e, j);
          return ec(t) ? es : t.substr(7).match(h.SI).map(h.Pr);
        },
        ef = function (e, t) {
          var r,
            n,
            i,
            o,
            a = e._gsap || (0, h.DY)(e),
            s = e.style,
            c = eu(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? es
              : c
            : (c !== es ||
                e.offsetParent ||
                e === l ||
                a.svg ||
                ((i = s.display),
                (s.display = "block"),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (n = e.nextElementSibling), l.appendChild(e)),
                (c = eu(e)),
                i ? (s.display = i) : Z(e, "display"),
                o &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : l.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        ed = function (e, t, r, n, i, o) {
          var a,
            s,
            l,
            c,
            u = e._gsap,
            f = i || ef(e, !0),
            d = u.xOrigin || 0,
            p = u.yOrigin || 0,
            h = u.xOffset || 0,
            g = u.yOffset || 0,
            m = f[0],
            v = f[1],
            b = f[2],
            y = f[3],
            w = f[4],
            x = f[5],
            S = t.split(" "),
            O = parseFloat(S[0]) || 0,
            _ = parseFloat(S[1]) || 0;
          r
            ? f !== es &&
              (s = m * y - v * b) &&
              ((l = (y / s) * O + (-b / s) * _ + (b * x - y * w) / s),
              (c = (-v / s) * O + (m / s) * _ - (m * x - v * w) / s),
              (O = l),
              (_ = c))
            : ((O =
                (a = G(e)).x + (~S[0].indexOf("%") ? (O / 100) * a.width : O)),
              (_ =
                a.y +
                (~(S[1] || S[0]).indexOf("%") ? (_ / 100) * a.height : _))),
            n || (!1 !== n && u.smooth)
              ? ((w = O - d),
                (x = _ - p),
                (u.xOffset = h + (w * m + x * b) - w),
                (u.yOffset = g + (w * v + x * y) - x))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = O),
            (u.yOrigin = _),
            (u.smooth = !!n),
            (u.origin = t),
            (u.originIsAbsolute = !!r),
            (e.style[F] = "0px 0px"),
            o &&
              (K(o, u, "xOrigin", d, O),
              K(o, u, "yOrigin", p, _),
              K(o, u, "xOffset", h, u.xOffset),
              K(o, u, "yOffset", g, u.yOffset)),
            e.setAttribute("data-svg-origin", O + " " + _);
        },
        ep = function (e, t) {
          var r = e._gsap || new h.l1(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            g,
            y,
            w,
            x,
            S,
            O,
            _,
            k,
            P,
            C,
            E,
            T,
            A,
            M,
            D,
            I,
            R,
            N,
            B,
            z,
            L,
            Y,
            X = e.style,
            U = r.scaleX < 0,
            q = getComputedStyle(e),
            V = W(e, F) || "0";
          return (
            (n = i = o = l = c = u = f = d = g = 0),
            (a = s = 1),
            (r.svg = !!(e.getCTM && $(e))),
            q.translate &&
              (("none" !== q.translate ||
                "none" !== q.scale ||
                "none" !== q.rotate) &&
                (X[j] =
                  ("none" !== q.translate
                    ? "translate3d(" +
                      (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                  ("none" !== q.scale
                    ? "scale(" + q.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== q[j] ? q[j] : "")),
              (X.scale = X.rotate = X.translate = "none")),
            (x = ef(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((D = e.getBBox()),
                  (V = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
                  (M = ""))
                : (M = !t && e.getAttribute("data-svg-origin")),
              ed(e, M || V, !!M || r.originIsAbsolute, !1 !== r.smooth, x)),
            (y = r.xOrigin || 0),
            (w = r.yOrigin || 0),
            x !== es &&
              ((k = x[0]),
              (P = x[1]),
              (C = x[2]),
              (E = x[3]),
              (n = T = x[4]),
              (i = A = x[5]),
              6 === x.length
                ? ((a = Math.sqrt(k * k + P * P)),
                  (s = Math.sqrt(E * E + C * C)),
                  (l = k || P ? b(P, k) * m : 0),
                  (f = C || E ? b(C, E) * m + l : 0) &&
                    (s *= Math.abs(Math.cos(f * v))),
                  r.svg &&
                    ((n -= y - (y * k + w * C)), (i -= w - (y * P + w * E))))
                : ((Y = x[6]),
                  (z = x[7]),
                  (R = x[8]),
                  (N = x[9]),
                  (B = x[10]),
                  (L = x[11]),
                  (n = x[12]),
                  (i = x[13]),
                  (o = x[14]),
                  (c = (S = b(Y, B)) * m),
                  S &&
                    ((M = T * (O = Math.cos(-S)) + R * (_ = Math.sin(-S))),
                    (D = A * O + N * _),
                    (I = Y * O + B * _),
                    (R = -(T * _) + R * O),
                    (N = -(A * _) + N * O),
                    (B = -(Y * _) + B * O),
                    (L = -(z * _) + L * O),
                    (T = M),
                    (A = D),
                    (Y = I)),
                  (u = (S = b(-C, B)) * m),
                  S &&
                    ((M = k * (O = Math.cos(-S)) - R * (_ = Math.sin(-S))),
                    (D = P * O - N * _),
                    (I = C * O - B * _),
                    (L = E * _ + L * O),
                    (k = M),
                    (P = D),
                    (C = I)),
                  (l = (S = b(P, k)) * m),
                  S &&
                    ((M = k * (O = Math.cos(S)) + P * (_ = Math.sin(S))),
                    (D = T * O + A * _),
                    (P = P * O - k * _),
                    (A = A * O - T * _),
                    (k = M),
                    (T = D)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (a = (0, h.Pr)(Math.sqrt(k * k + P * P + C * C))),
                  (s = (0, h.Pr)(Math.sqrt(A * A + Y * Y))),
                  (f = Math.abs((S = b(T, A))) > 2e-4 ? S * m : 0),
                  (g = L ? 1 / (L < 0 ? -L : L) : 0)),
              r.svg &&
                ((M = e.getAttribute("transform")),
                (r.forceCSS = e.setAttribute("transform", "") || !ec(W(e, j))),
                M && e.setAttribute("transform", M))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (U
                ? ((a *= -1),
                  (f += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = (0, h.Pr)(a)),
            (r.scaleY = (0, h.Pr)(s)),
            (r.rotation = (0, h.Pr)(l) + "deg"),
            (r.rotationX = (0, h.Pr)(c) + "deg"),
            (r.rotationY = (0, h.Pr)(u) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = d + "deg"),
            (r.transformPerspective = g + "px"),
            (r.zOrigin =
              parseFloat(V.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (X[F] = eh(V)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = h.Fc.force3D),
            (r.renderTransform = r.svg ? ey : p ? eb : em),
            (r.uncache = 0),
            r
          );
        },
        eh = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        eg = function (e, t, r) {
          var n = (0, h.Wy)(t);
          return (
            (0, h.Pr)(parseFloat(t) + parseFloat(ee(e, "x", r + "px", n))) + n
          );
        },
        em = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            eb(e, t);
        },
        ev = "0deg",
        eb = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            s = r.z,
            l = r.rotation,
            c = r.rotationY,
            u = r.rotationX,
            f = r.skewX,
            d = r.skewY,
            p = r.scaleX,
            h = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            b = r.target,
            y = r.zOrigin,
            w = "",
            x = ("auto" === m && e && 1 !== e) || !0 === m;
          if (y && (u !== ev || c !== ev)) {
            var S,
              O = parseFloat(c) * v,
              _ = Math.sin(O),
              k = Math.cos(O);
            (o = eg(b, o, -(_ * (S = Math.cos((O = parseFloat(u) * v))) * y))),
              (a = eg(b, a, -(-Math.sin(O) * y))),
              (s = eg(b, s, -(k * S * y) + y));
          }
          "0px" !== g && (w += "perspective(" + g + ") "),
            (n || i) && (w += "translate(" + n + "%, " + i + "%) "),
            (x || "0px" !== o || "0px" !== a || "0px" !== s) &&
              (w +=
                "0px" !== s || x
                  ? "translate3d(" + o + ", " + a + ", " + s + ") "
                  : "translate(" + o + ", " + a + ") "),
            l !== ev && (w += "rotate(" + l + ") "),
            c !== ev && (w += "rotateY(" + c + ") "),
            u !== ev && (w += "rotateX(" + u + ") "),
            (f !== ev || d !== ev) && (w += "skew(" + f + ", " + d + ") "),
            (1 !== p || 1 !== h) && (w += "scale(" + p + ", " + h + ") "),
            (b.style[j] = w || "translate(0, 0)");
        },
        ey = function (e, t) {
          var r,
            n,
            i,
            o,
            a,
            s = t || this,
            l = s.xPercent,
            c = s.yPercent,
            u = s.x,
            f = s.y,
            d = s.rotation,
            p = s.skewX,
            g = s.skewY,
            m = s.scaleX,
            b = s.scaleY,
            y = s.target,
            w = s.xOrigin,
            x = s.yOrigin,
            S = s.xOffset,
            O = s.yOffset,
            _ = s.forceCSS,
            k = parseFloat(u),
            P = parseFloat(f);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (g = parseFloat(g)) && ((p += g = parseFloat(g)), (d += g)),
            d || p
              ? ((d *= v),
                (p *= v),
                (r = Math.cos(d) * m),
                (n = Math.sin(d) * m),
                (i = -(Math.sin(d - p) * b)),
                (o = Math.cos(d - p) * b),
                p &&
                  ((g *= v),
                  (i *= a = Math.sqrt(1 + (a = Math.tan(p - g)) * a)),
                  (o *= a),
                  g &&
                    ((r *= a = Math.sqrt(1 + (a = Math.tan(g)) * a)),
                    (n *= a))),
                (r = (0, h.Pr)(r)),
                (n = (0, h.Pr)(n)),
                (i = (0, h.Pr)(i)),
                (o = (0, h.Pr)(o)))
              : ((r = m), (o = b), (n = i = 0)),
            ((k && !~(u + "").indexOf("px")) ||
              (P && !~(f + "").indexOf("px"))) &&
              ((k = ee(y, "x", u, "px")), (P = ee(y, "y", f, "px"))),
            (w || x || S || O) &&
              ((k = (0, h.Pr)(k + w - (w * r + x * i) + S)),
              (P = (0, h.Pr)(P + x - (w * n + x * o) + O))),
            (l || c) &&
              ((a = y.getBBox()),
              (k = (0, h.Pr)(k + (l / 100) * a.width)),
              (P = (0, h.Pr)(P + (c / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              o +
              "," +
              k +
              "," +
              P +
              ")"),
            y.setAttribute("transform", a),
            _ && (y.style[j] = a);
        },
        ew = function (e, t, r, n, i) {
          var o,
            a,
            s = (0, h.r9)(i),
            l = parseFloat(i) * (s && ~i.indexOf("rad") ? m : 1) - n,
            c = n + l + "deg";
          return (
            s &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = a = new h.Fo(e._pt, t, r, n, l, _)),
            (a.e = c),
            (a.u = "deg"),
            e._props.push(r),
            a
          );
        },
        ex = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        eS = function (e, t, r) {
          var n,
            i,
            o,
            a,
            s,
            l,
            c,
            u = ex({}, r._gsap),
            f = r.style;
          for (i in (u.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[j] = t),
              (n = ep(r, 1)),
              Z(r, j),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[j]),
              (f[j] = t),
              (n = ep(r, 1)),
              (f[j] = o)),
          g))
            (o = u[i]) !== (a = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((s =
                (0, h.Wy)(o) !== (c = (0, h.Wy)(a))
                  ? ee(r, i, o, c)
                  : parseFloat(o)),
              (l = parseFloat(a)),
              (e._pt = new h.Fo(e._pt, n, i, s, l - s, O)),
              (e._pt.u = c || 0),
              e._props.push(i));
          ex(n, u);
        };
      (0, h.fS)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          o = (
            t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        ea[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
          var a, s;
          if (arguments.length < 4)
            return 5 ===
              (s = (a = o.map(function (t) {
                return et(e, t, r);
              })).join(" ")).split(a[0]).length
              ? a[0]
              : s;
          (a = (n + "").split(" ")),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i);
        };
      });
      var eO = {
        name: "css",
        register: q,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, i) {
          var o,
            a,
            s,
            l,
            u,
            f,
            d,
            p,
            m,
            v,
            b,
            y,
            w,
            _,
            C,
            E,
            T = this._props,
            A = e.style,
            M = r.vars.startAt;
          for (d in (c || q(),
          (this.styles = this.styles || L(e)),
          (E = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== d &&
              ((a = t[d]), !(h.$i[d] && (0, h.if)(d, t, r, n, e, i)))
            ) {
              if (
                ((u = typeof a),
                (f = ea[d]),
                "function" === u && (u = typeof (a = a.call(r, n, e, i))),
                "string" === u && ~a.indexOf("random(") && (a = (0, h.UI)(a)),
                f)
              )
                f(this, e, d, a, r) && (C = 1);
              else if ("--" === d.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (a += ""),
                  (h.GN.lastIndex = 0),
                  h.GN.test(o) || ((p = (0, h.Wy)(o)), (m = (0, h.Wy)(a))),
                  m ? p !== m && (o = ee(e, d, o, m) + m) : p && (a += p),
                  this.add(A, "setProperty", o, a, n, i, 0, 0, d),
                  T.push(d),
                  E.push(d, 0, A[d]);
              else if ("undefined" !== u) {
                if (
                  (M && d in M
                    ? ((o =
                        "function" == typeof M[d]
                          ? M[d].call(r, n, e, i)
                          : M[d]),
                      (0, h.r9)(o) &&
                        ~o.indexOf("random(") &&
                        (o = (0, h.UI)(o)),
                      (0, h.Wy)(o + "") ||
                        "auto" === o ||
                        (o += h.Fc.units[d] || (0, h.Wy)(et(e, d)) || ""),
                      "=" === (o + "").charAt(1) && (o = et(e, d)))
                    : (o = et(e, d)),
                  (l = parseFloat(o)),
                  (v =
                    "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (s = parseFloat(a)),
                  d in S &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === et(e, "visibility") &&
                        s &&
                        (l = 0),
                      E.push("visibility", 0, A.visibility),
                      K(
                        this,
                        A,
                        "visibility",
                        l ? "inherit" : "hidden",
                        s ? "inherit" : "hidden",
                        !s
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = S[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (b = d in g))
                ) {
                  if (
                    (this.styles.save(d),
                    y ||
                      (((w = e._gsap).renderTransform && !t.parseTransform) ||
                        ep(e, t.parseTransform),
                      (_ = !1 !== t.smoothOrigin && w.smooth),
                      ((y = this._pt =
                        new h.Fo(
                          this._pt,
                          A,
                          j,
                          0,
                          1,
                          w.renderTransform,
                          w,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new h.Fo(
                      this._pt,
                      w,
                      "scaleY",
                      w.scaleY,
                      (v ? (0, h.cy)(w.scaleY, v + s) : s) - w.scaleY || 0,
                      O
                    )),
                      (this._pt.u = 0),
                      T.push("scaleY", d),
                      (d += "X");
                  else if ("transformOrigin" === d) {
                    E.push(F, 0, A[F]),
                      (a = ei(a)),
                      w.svg
                        ? ed(e, a, 0, _, 0, this)
                        : ((m = parseFloat(a.split(" ")[2]) || 0) !==
                            w.zOrigin && K(this, w, "zOrigin", w.zOrigin, m),
                          K(this, A, d, eh(o), eh(a)));
                    continue;
                  } else if ("svgOrigin" === d) {
                    ed(e, a, 1, _, 0, this);
                    continue;
                  } else if (d in el) {
                    ew(this, w, d, l, v ? (0, h.cy)(l, v + a) : a);
                    continue;
                  } else if ("smoothOrigin" === d) {
                    K(this, w, "smooth", w.smooth, a);
                    continue;
                  } else if ("force3D" === d) {
                    w[d] = a;
                    continue;
                  } else if ("transform" === d) {
                    eS(this, a, e);
                    continue;
                  }
                } else d in A || (d = U(d) || d);
                if (
                  b ||
                  ((s || 0 === s) && (l || 0 === l) && !x.test(a) && d in A)
                )
                  (p = (o + "").substr((l + "").length)),
                    s || (s = 0),
                    (m = (0, h.Wy)(a) || (d in h.Fc.units ? h.Fc.units[d] : p)),
                    p !== m && (l = ee(e, d, o, m)),
                    (this._pt = new h.Fo(
                      this._pt,
                      b ? w : A,
                      d,
                      l,
                      (v ? (0, h.cy)(l, v + s) : s) - l,
                      b || ("px" !== m && "zIndex" !== d) || !1 === t.autoRound
                        ? O
                        : P
                    )),
                    (this._pt.u = m || 0),
                    p !== m &&
                      "%" !== m &&
                      ((this._pt.b = o), (this._pt.r = k));
                else if (d in A) er.call(this, e, d, o, v ? v + a : a);
                else if (d in e) this.add(e, d, o || e[d], v ? v + a : a, n, i);
                else if ("parseTransform" !== d) {
                  (0, h.lC)(d, a);
                  continue;
                }
                b || (d in A ? E.push(d, 0, A[d]) : E.push(d, 1, o || e[d])),
                  T.push(d);
              }
            }
          C && (0, h.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !d())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: et,
        aliases: S,
        getSetter: function (e, t, r) {
          var n = S[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in g && t !== F && (e._gsap.x || et(e, "x"))
              ? r && f === r
                ? "scale" === t
                  ? D
                  : M
                : ((f = r || {}), "scale" === t ? I : R)
              : e.style && !(0, h.m2)(e.style[t])
              ? T
              : ~t.indexOf("-")
              ? A
              : (0, h.S5)(e, t)
          );
        },
        core: { _removeProperty: Z, _getMatrix: ef },
      };
      (h.p8.utils.checkPrefix = U),
        (h.p8.core.getStyleSaver = L),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (i = "rotation,rotationX,rotationY,skewX,skewY"),
        (o =
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
        (a = (0, h.fS)(
          n +
            "," +
            i +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            g[e] = 1;
          }
        )),
        (0, h.fS)(i, function (e) {
          (h.Fc.units[e] = "deg"), (el[e] = 1);
        }),
        (S[a[13]] = n + "," + i),
        (0, h.fS)(o, function (e) {
          var t = e.split(":");
          S[t[1]] = a[t[0]];
        }),
        (0, h.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            h.Fc.units[e] = "px";
          }
        ),
        h.p8.registerPlugin(eO);
      var e_ = h.p8.registerPlugin(eO) || h.p8;
      e_.core.Tween;
    },
    3393: function (e, t, r) {
      !(function (e, t, r) {
        "use strict";
        function n(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var i = n(t),
          o = n(r);
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function s(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(r), !0).forEach(function (t) {
                  var n, i;
                  (n = t),
                    (i = r[t]),
                    (n = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(n)) in e
                      ? Object.defineProperty(e, n, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function c(e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (t.includes(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]),
                t.includes(r) ||
                  ({}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        }
        var u = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          f = function (e, t) {
            var n,
              s = e.animationData,
              f = e.loop,
              d = e.autoplay,
              p = e.initialSegment,
              h = e.onComplete,
              g = e.onLoopComplete,
              m = e.onEnterFrame,
              v = e.onSegmentStart,
              b = e.onConfigReady,
              y = e.onDataReady,
              w = e.onDataFailed,
              x = e.onLoadedImages,
              S = e.onDOMLoaded,
              O = e.onDestroy;
            e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
            var _ = c(e, u),
              k =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((n = r.useState(!1))) ||
                (function (e, t) {
                  var r =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != r) {
                    var n,
                      i,
                      o,
                      a,
                      s = [],
                      l = !0,
                      c = !1;
                    try {
                      for (
                        o = (r = r.call(e)).next;
                        !(l = (n = o.call(r)).done) &&
                        (s.push(n.value), 2 !== s.length);
                        l = !0
                      );
                    } catch (e) {
                      (c = !0), (i = e);
                    } finally {
                      try {
                        if (
                          !l &&
                          null != r.return &&
                          ((a = r.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (c) throw i;
                      }
                    }
                    return s;
                  }
                })(n, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return a(e, 2);
                    var r = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? a(e, 2)
                        : void 0
                    );
                  }
                })(n, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              P = k[0],
              C = k[1],
              E = r.useRef(),
              T = r.useRef(null),
              A = function () {
                var t,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (T.current) {
                  null === (t = E.current) || void 0 === t || t.destroy();
                  var n = l(l(l({}, e), r), {}, { container: T.current });
                  return (
                    (E.current = i.default.loadAnimation(n)),
                    C(!!E.current),
                    function () {
                      var e;
                      null === (e = E.current) || void 0 === e || e.destroy(),
                        (E.current = void 0);
                    }
                  );
                }
              };
            return (
              r.useEffect(
                function () {
                  var e = A();
                  return function () {
                    return null == e ? void 0 : e();
                  };
                },
                [s, f]
              ),
              r.useEffect(
                function () {
                  E.current && (E.current.autoplay = !!d);
                },
                [d]
              ),
              r.useEffect(
                function () {
                  if (E.current) {
                    if (!p) {
                      E.current.resetSegments(!0);
                      return;
                    }
                    Array.isArray(p) &&
                      p.length &&
                      ((E.current.currentRawFrame < p[0] ||
                        E.current.currentRawFrame > p[1]) &&
                        (E.current.currentRawFrame = p[0]),
                      E.current.setSegment(p[0], p[1]));
                  }
                },
                [p]
              ),
              r.useEffect(
                function () {
                  var e = [
                    { name: "complete", handler: h },
                    { name: "loopComplete", handler: g },
                    { name: "enterFrame", handler: m },
                    { name: "segmentStart", handler: v },
                    { name: "config_ready", handler: b },
                    { name: "data_ready", handler: y },
                    { name: "data_failed", handler: w },
                    { name: "loaded_images", handler: x },
                    { name: "DOMLoaded", handler: S },
                    { name: "destroy", handler: O },
                  ].filter(function (e) {
                    return null != e.handler;
                  });
                  if (e.length) {
                    var t = e.map(function (e) {
                      var t;
                      return (
                        null === (t = E.current) ||
                          void 0 === t ||
                          t.addEventListener(e.name, e.handler),
                        function () {
                          var t;
                          null === (t = E.current) ||
                            void 0 === t ||
                            t.removeEventListener(e.name, e.handler);
                        }
                      );
                    });
                    return function () {
                      t.forEach(function (e) {
                        return e();
                      });
                    };
                  }
                },
                [h, g, m, v, b, y, w, x, S, O]
              ),
              {
                View: o.default.createElement(
                  "div",
                  l({ style: t, ref: T }, _)
                ),
                play: function () {
                  var e;
                  null === (e = E.current) || void 0 === e || e.play();
                },
                stop: function () {
                  var e;
                  null === (e = E.current) || void 0 === e || e.stop();
                },
                pause: function () {
                  var e;
                  null === (e = E.current) || void 0 === e || e.pause();
                },
                setSpeed: function (e) {
                  var t;
                  null === (t = E.current) || void 0 === t || t.setSpeed(e);
                },
                goToAndStop: function (e, t) {
                  var r;
                  null === (r = E.current) ||
                    void 0 === r ||
                    r.goToAndStop(e, t);
                },
                goToAndPlay: function (e, t) {
                  var r;
                  null === (r = E.current) ||
                    void 0 === r ||
                    r.goToAndPlay(e, t);
                },
                setDirection: function (e) {
                  var t;
                  null === (t = E.current) || void 0 === t || t.setDirection(e);
                },
                playSegments: function (e, t) {
                  var r;
                  null === (r = E.current) ||
                    void 0 === r ||
                    r.playSegments(e, t);
                },
                setSubframe: function (e) {
                  var t;
                  null === (t = E.current) || void 0 === t || t.setSubframe(e);
                },
                getDuration: function (e) {
                  var t;
                  return null === (t = E.current) || void 0 === t
                    ? void 0
                    : t.getDuration(e);
                },
                destroy: function () {
                  var e;
                  null === (e = E.current) || void 0 === e || e.destroy(),
                    (E.current = void 0);
                },
                animationContainerRef: T,
                animationLoaded: P,
                animationItem: E.current,
              }
            );
          },
          d = function (e) {
            var t = e.wrapperRef,
              n = e.animationItem,
              i = e.mode,
              o = e.actions;
            r.useEffect(
              function () {
                var e,
                  r,
                  a,
                  s,
                  l,
                  c = t.current;
                if (c && n && o.length)
                  switch ((n.stop(), i)) {
                    case "scroll":
                      return (
                        (e = null),
                        (r = function () {
                          var t,
                            r,
                            i,
                            a =
                              ((r = (t = c.getBoundingClientRect()).top),
                              (i = t.height),
                              (window.innerHeight - r) /
                                (window.innerHeight + i)),
                            s = o.find(function (e) {
                              var t = e.visibility;
                              return t && a >= t[0] && a <= t[1];
                            });
                          if (s) {
                            if (
                              "seek" === s.type &&
                              s.visibility &&
                              2 === s.frames.length
                            ) {
                              var l =
                                s.frames[0] +
                                Math.ceil(
                                  ((a - s.visibility[0]) /
                                    (s.visibility[1] - s.visibility[0])) *
                                    s.frames[1]
                                );
                              n.goToAndStop(l - n.firstFrame - 1, !0);
                            }
                            "loop" === s.type &&
                              (null === e
                                ? (n.playSegments(s.frames, !0), (e = s.frames))
                                : e !== s.frames
                                ? (n.playSegments(s.frames, !0), (e = s.frames))
                                : n.isPaused &&
                                  (n.playSegments(s.frames, !0),
                                  (e = s.frames))),
                              "play" === s.type &&
                                n.isPaused &&
                                (n.resetSegments(!0), n.play()),
                              "stop" === s.type &&
                                n.goToAndStop(
                                  s.frames[0] - n.firstFrame - 1,
                                  !0
                                );
                          }
                        }),
                        document.addEventListener("scroll", r),
                        function () {
                          document.removeEventListener("scroll", r);
                        }
                      );
                    case "cursor":
                      return (
                        (a = function (e, t) {
                          var r = e,
                            i = t;
                          if (-1 !== r && -1 !== i) {
                            var a,
                              s,
                              l,
                              u,
                              f =
                                ((a = r),
                                (s = i),
                                (u = (l = c.getBoundingClientRect()).top),
                                {
                                  x: (a - l.left) / l.width,
                                  y: (s - u) / l.height,
                                });
                            (r = f.x), (i = f.y);
                          }
                          var d = o.find(function (e) {
                            var t = e.position;
                            return t && Array.isArray(t.x) && Array.isArray(t.y)
                              ? r >= t.x[0] &&
                                  r <= t.x[1] &&
                                  i >= t.y[0] &&
                                  i <= t.y[1]
                              : !(
                                  !t ||
                                  Number.isNaN(t.x) ||
                                  Number.isNaN(t.y)
                                ) &&
                                  r === t.x &&
                                  i === t.y;
                          });
                          if (d) {
                            if (
                              "seek" === d.type &&
                              d.position &&
                              Array.isArray(d.position.x) &&
                              Array.isArray(d.position.y) &&
                              2 === d.frames.length
                            ) {
                              var p =
                                  (r - d.position.x[0]) /
                                  (d.position.x[1] - d.position.x[0]),
                                h =
                                  (i - d.position.y[0]) /
                                  (d.position.y[1] - d.position.y[0]);
                              n.playSegments(d.frames, !0),
                                n.goToAndStop(
                                  Math.ceil(
                                    ((p + h) / 2) * (d.frames[1] - d.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === d.type && n.playSegments(d.frames, !0),
                              "play" === d.type &&
                                (n.isPaused && n.resetSegments(!1),
                                n.playSegments(d.frames)),
                              "stop" === d.type &&
                                n.goToAndStop(d.frames[0], !0);
                          }
                        }),
                        (s = function (e) {
                          a(e.clientX, e.clientY);
                        }),
                        (l = function () {
                          a(-1, -1);
                        }),
                        c.addEventListener("mousemove", s),
                        c.addEventListener("mouseout", l),
                        function () {
                          c.removeEventListener("mousemove", s),
                            c.removeEventListener("mouseout", l);
                        }
                      );
                  }
              },
              [i, n]
            );
          },
          p = function (e) {
            var t = e.actions,
              r = e.mode,
              n = e.lottieObj,
              i = n.animationItem,
              o = n.View;
            return (
              d({
                actions: t,
                animationItem: i,
                mode: r,
                wrapperRef: n.animationContainerRef,
              }),
              o
            );
          },
          h = ["style", "interactivity"];
        Object.defineProperty(e, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
          (e.default = function (e) {
            var t,
              n,
              i,
              o = e.style,
              a = e.interactivity,
              s = f(c(e, h), o),
              l = s.View,
              u = s.play,
              d = s.stop,
              g = s.pause,
              m = s.setSpeed,
              v = s.goToAndStop,
              b = s.goToAndPlay,
              y = s.setDirection,
              w = s.playSegments,
              x = s.setSubframe,
              S = s.getDuration,
              O = s.destroy,
              _ = s.animationContainerRef,
              k = s.animationLoaded,
              P = s.animationItem;
            return (
              r.useEffect(
                function () {
                  e.lottieRef &&
                    (e.lottieRef.current = {
                      play: u,
                      stop: d,
                      pause: g,
                      setSpeed: m,
                      goToAndPlay: b,
                      goToAndStop: v,
                      setDirection: y,
                      playSegments: w,
                      setSubframe: x,
                      getDuration: S,
                      destroy: O,
                      animationContainerRef: _,
                      animationLoaded: k,
                      animationItem: P,
                    });
                },
                [
                  null === (t = e.lottieRef) || void 0 === t
                    ? void 0
                    : t.current,
                ]
              ),
              p({
                lottieObj: {
                  View: l,
                  play: u,
                  stop: d,
                  pause: g,
                  setSpeed: m,
                  goToAndStop: v,
                  goToAndPlay: b,
                  setDirection: y,
                  playSegments: w,
                  setSubframe: x,
                  getDuration: S,
                  destroy: O,
                  animationContainerRef: _,
                  animationLoaded: k,
                  animationItem: P,
                },
                actions:
                  null !== (n = null == a ? void 0 : a.actions) && void 0 !== n
                    ? n
                    : [],
                mode:
                  null !== (i = null == a ? void 0 : a.mode) && void 0 !== i
                    ? i
                    : "scroll",
              })
            );
          }),
          (e.useLottie = f),
          (e.useLottieInteractivity = p),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, r(1451), r(2265));
    },
    8064: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
      let n = r(4590);
      function i(e) {
        let { createServerReference: t } = r(6671);
        return async () => null;
      }
    },
    4398: function (e, t, r) {
      "use strict";
      var n = r(2265);
      n && "object" == typeof n && "default" in n && n.default;
      var i = r(7914),
        o = new i(),
        a = o.getBrowser(),
        s = o.getCPU(),
        l = o.getDevice(),
        c = o.getEngine(),
        u = o.getOS(),
        f = o.getUA(),
        d = function (e) {
          if (!e) {
            console.error("No userAgent string was provided");
            return;
          }
          var t = new i(e);
          return {
            UA: t,
            browser: t.getBrowser(),
            cpu: t.getCPU(),
            device: t.getDevice(),
            engine: t.getEngine(),
            os: t.getOS(),
            ua: t.getUA(),
            setUserAgent: function (e) {
              return t.setUA(e);
            },
          };
        },
        p = Object.freeze({
          ClientUAInstance: o,
          browser: a,
          cpu: s,
          device: l,
          engine: c,
          os: u,
          ua: f,
          setUa: function (e) {
            return o.setUA(e);
          },
          parseUserAgent: d,
        }),
        h = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Embedded: "embedded",
          Browser: void 0,
        },
        g = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        m = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || t;
        },
        v = function () {
          return (
            !!(
              "undefined" != typeof window &&
              (window.navigator || navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        b = function (e) {
          var t = v();
          return (
            t &&
            t.platform &&
            (-1 !== t.platform.indexOf(e) ||
              ("MacIntel" === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        y = function (e) {
          return e.type === h.Mobile;
        },
        w = function (e) {
          return e.type === h.Tablet;
        },
        x = function (e) {
          var t = e.type;
          return t === h.Mobile || t === h.Tablet;
        },
        S = function (e) {
          return e.type === h.SmartTv;
        },
        O = function (e) {
          return e.type === h.Browser;
        },
        _ = function (e) {
          return e.type === h.Wearable;
        },
        k = function (e) {
          return e.type === h.Console;
        },
        P = function (e) {
          return e.type === h.Embedded;
        },
        C = function (e) {
          return m(e.vendor);
        },
        E = function (e) {
          return m(e.model);
        },
        T = function (e) {
          return m(e.type, "browser");
        },
        A = function (e) {
          return "Android" === e.name;
        },
        M = function (e) {
          return "Windows" === e.name;
        },
        D = function (e) {
          return "Mac OS" === e.name;
        },
        I = function (e) {
          return "Windows Phone" === e.name;
        },
        R = function (e) {
          return "iOS" === e.name;
        },
        j = function (e) {
          return m(e.version);
        },
        F = function (e) {
          return m(e.name);
        },
        N = function (e) {
          return e.name === g.Chrome;
        },
        B = function (e) {
          return e.name === g.Firefox;
        },
        z = function (e) {
          return e.name === g.Chromium;
        },
        L = function (e) {
          return e.name === g.Edge;
        },
        Y = function (e) {
          return e.name === g.Yandex;
        },
        W = function (e) {
          var t = e.name;
          return t === g.Safari || t === g.MobileSafari;
        },
        X = function (e) {
          return e.name === g.MobileSafari;
        },
        U = function (e) {
          return e.name === g.Opera;
        },
        q = function (e) {
          var t = e.name;
          return t === g.InternetExplorer || t === g.Ie;
        },
        V = function (e) {
          return e.name === g.MIUI;
        },
        H = function (e) {
          return e.name === g.SamsungBrowser;
        },
        G = function (e) {
          return m(e.version);
        },
        $ = function (e) {
          return m(e.major);
        },
        Z = function (e) {
          return m(e.name);
        },
        K = function (e) {
          return m(e.name);
        },
        Q = function (e) {
          return m(e.version);
        },
        J = function () {
          var e = v(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t);
        },
        ee = function (e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/");
        },
        et = function () {
          var e = v();
          return (
            e &&
            (/iPad|iPhone|iPod/.test(e.platform) ||
              ("MacIntel" === e.platform && e.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        },
        er = function () {
          return b("iPad");
        },
        en = function () {
          return b("iPhone");
        },
        ei = function () {
          return b("iPod");
        },
        eo = function (e) {
          return m(e);
        };
      S(l), k(l), _(l), P(l), X(a) || er(), z(a);
      var ea = x(l) || er(),
        es = y(l),
        el = w(l) || er(),
        ec = (O(l), O(l));
      A(u),
        I(u),
        R(u) || er(),
        N(a),
        B(a),
        W(a),
        U(a),
        q(a),
        j(u),
        F(u),
        G(a),
        $(a),
        Z(a),
        C(l),
        E(l),
        K(c),
        Q(c),
        eo(f),
        L(a) || ee(f),
        Y(a),
        T(l),
        et(),
        er(),
        en(),
        ei(),
        J(),
        ee(f),
        L(a) && ee(f),
        M(u),
        D(u),
        V(a),
        H(a),
        (t.nI = ec),
        (t.tq = ea),
        (t.UA = es),
        (t.Em = el),
        (t.CD = function (e) {
          var t,
            r,
            n,
            i,
            o,
            a,
            s = d(
              e || window.navigator.userAgent || window.navigator.userAgent
            );
          return [
            ((r = (t = s || p).device),
            (n = t.browser),
            (i = t.os),
            (o = t.engine),
            (a = t.ua),
            {
              isSmartTV: S(r),
              isConsole: k(r),
              isWearable: _(r),
              isEmbedded: P(r),
              isMobileSafari: X(n) || er(),
              isChromium: z(n),
              isMobile: x(r) || er(),
              isMobileOnly: y(r),
              isTablet: w(r) || er(),
              isBrowser: O(r),
              isDesktop: O(r),
              isAndroid: A(i),
              isWinPhone: I(i),
              isIOS: R(i) || er(),
              isChrome: N(n),
              isFirefox: B(n),
              isSafari: W(n),
              isOpera: U(n),
              isIE: q(n),
              osVersion: j(i),
              osName: F(i),
              fullBrowserVersion: G(n),
              browserVersion: $(n),
              browserName: Z(n),
              mobileVendor: C(r),
              mobileModel: E(r),
              engineName: K(o),
              engineVersion: Q(o),
              getUA: eo(a),
              isEdge: L(n) || ee(a),
              isYandex: Y(n),
              deviceType: T(r),
              isIOS13: et(),
              isIPad13: er(),
              isIPhone13: en(),
              isIPod13: ei(),
              isElectron: J(),
              isEdgeChromium: ee(a),
              isLegacyEdge: L(n) && !ee(a),
              isWindows: M(i),
              isMacOs: D(i),
              isMIUI: V(n),
              isSamsungBrowser: H(n),
            }),
            s,
          ];
        });
    },
    2088: function (e, t, r) {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n;
                (n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(n = (a = s.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            }
          })(e, t) ||
          c(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          c(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (e) {
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return u(e, t);
        }
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        return Object.getOwnPropertyNames(Object(e)).reduce(function (r, n) {
          var i = Object.getOwnPropertyDescriptor(Object(e), n),
            o = Object.getOwnPropertyDescriptor(Object(t), n);
          return Object.defineProperty(r, n, o || i);
        }, {});
      }
      function d(e) {
        return "string" == typeof e;
      }
      function p(e) {
        return Array.isArray(e);
      }
      function h() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = f(t);
        return (
          void 0 !== r.types
            ? (e = r.types)
            : void 0 !== r.split && (e = r.split),
          void 0 !== e &&
            (r.types = (d(e) || p(e) ? String(e) : "")
              .split(",")
              .map(function (e) {
                return String(e).trim();
              })
              .filter(function (e) {
                return /((line)|(word)|(char))/i.test(e);
              })),
          (r.absolute || r.position) &&
            (r.absolute = r.absolute || /absolute/.test(t.position)),
          r
        );
      }
      function g(e) {
        var t = d(e) || p(e) ? String(e) : "";
        return {
          none: !t,
          lines: /line/i.test(t),
          words: /word/i.test(t),
          chars: /char/i.test(t),
        };
      }
      function m(e) {
        return null !== e && "object" == typeof e;
      }
      function v(e) {
        return m(e) && /^(1|3|11)$/.test(e.nodeType);
      }
      function b(e) {
        var t;
        return p(e)
          ? e
          : null == e
          ? []
          : m(e) && "number" == typeof (t = e.length) && t > -1 && t % 1 == 0
          ? Array.prototype.slice.call(e)
          : [e];
      }
      function y(e) {
        var t = e;
        return (
          d(e) &&
            (t = /^(#[a-z]\w+)$/.test(e.trim())
              ? document.getElementById(e.trim().slice(1))
              : document.querySelectorAll(e)),
          b(t).reduce(function (e, t) {
            return [].concat(l(e), l(b(t).filter(v)));
          }, [])
        );
      }
      r.d(t, {
        Z: function () {
          return G;
        },
      }),
        (function () {
          function e() {
            for (var e = arguments.length, t = 0; t < e; t++) {
              var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
              1 === r.nodeType || 11 === r.nodeType
                ? this.appendChild(r)
                : this.appendChild(document.createTextNode(String(r)));
            }
          }
          function t() {
            for (; this.lastChild; ) this.removeChild(this.lastChild);
            arguments.length && this.append.apply(this, arguments);
          }
          function r() {
            for (
              var e = this.parentNode,
                t = arguments.length,
                r = Array(t),
                n = 0;
              n < t;
              n++
            )
              r[n] = arguments[n];
            var i = r.length;
            if (e)
              for (i || e.removeChild(this); i--; ) {
                var o = r[i];
                "object" != typeof o
                  ? (o = this.ownerDocument.createTextNode(o))
                  : o.parentNode && o.parentNode.removeChild(o),
                  i
                    ? e.insertBefore(this.previousSibling, o)
                    : e.replaceChild(o, this);
              }
          }
          "undefined" == typeof Element ||
            (Element.prototype.append ||
              ((Element.prototype.append = e),
              (DocumentFragment.prototype.append = e)),
            Element.prototype.replaceChildren ||
              ((Element.prototype.replaceChildren = t),
              (DocumentFragment.prototype.replaceChildren = t)),
            Element.prototype.replaceWith ||
              ((Element.prototype.replaceWith = r),
              (DocumentFragment.prototype.replaceWith = r)));
        })();
      var w = Object.entries,
        x = "_splittype",
        S = {},
        O = 0;
      function _(e, t, r) {
        if (!m(e))
          return console.warn("[data.set] owner is not an object"), null;
        var n = e[x] || (e[x] = ++O),
          i = S[n] || (S[n] = {});
        return (
          void 0 === r
            ? t &&
              Object.getPrototypeOf(t) === Object.prototype &&
              (S[n] = a(a({}, i), t))
            : void 0 !== t && (i[t] = r),
          r
        );
      }
      function k(e, t) {
        var r = m(e) ? e[x] : null,
          n = (r && S[r]) || {};
        return void 0 === t ? n : n[t];
      }
      function P(e) {
        var t = e && e[x];
        t && (delete e[t], delete S[t]);
      }
      var C = "\ud800-\udfff",
        E = "\\u0300-\\u036f\\ufe20-\\ufe23",
        T = "\\u20d0-\\u20f0",
        A = "\\ufe0e\\ufe0f",
        M = "[".concat(E).concat(T, "]"),
        D = "\ud83c[\udffb-\udfff]",
        I = "(?:".concat(M, "|").concat(D, ")"),
        R = "[^".concat(C, "]"),
        j = "(?:\ud83c[\udde6-\uddff]){2}",
        F = "[\ud800-\udbff][\udc00-\udfff]",
        N = "\\u200d",
        B = "".concat(I, "?"),
        z = "[".concat(A, "]?"),
        L = "(?:" + N + "(?:" + [R, j, F].join("|") + ")" + z + B + ")*",
        Y = "(?:".concat(
          ["".concat(R).concat(M, "?"), M, j, F, "[".concat(C, "]")].join("|"),
          "\n)"
        ),
        W = RegExp(
          ""
            .concat(D, "(?=")
            .concat(D, ")|")
            .concat(Y)
            .concat(z + B + L),
          "g"
        ),
        X = [N, C, E, T, A],
        U = RegExp("[".concat(X.join(""), "]"));
      function q(e, t) {
        var r = document.createElement(e);
        return (
          t &&
            Object.keys(t).forEach(function (e) {
              var n = t[e],
                i = d(n) ? n.trim() : n;
              null !== i &&
                "" !== i &&
                ("children" === e
                  ? r.append.apply(r, l(b(i)))
                  : r.setAttribute(e, i));
            }),
          r
        );
      }
      var V = {
          splitClass: "",
          lineClass: "line",
          wordClass: "word",
          charClass: "char",
          types: ["lines", "words", "chars"],
          absolute: !1,
          tagName: "div",
        },
        H = f(V, {}),
        G = (function () {
          function e(t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (this.isSplit = !1),
              (this.settings = f(H, h(r))),
              (this.elements = y(t)),
              this.split();
          }
          return (
            i(e, null, [
              {
                key: "clearData",
                value: function () {
                  Object.keys(S).forEach(function (e) {
                    delete S[e];
                  });
                },
              },
              {
                key: "setDefaults",
                value: function (e) {
                  return (H = f(H, h(e))), V;
                },
              },
              {
                key: "revert",
                value: function (e) {
                  y(e).forEach(function (e) {
                    var t = k(e),
                      r = t.isSplit,
                      n = t.html,
                      i = t.cssWidth,
                      o = t.cssHeight;
                    r &&
                      ((e.innerHTML = n),
                      (e.style.width = i || ""),
                      (e.style.height = o || ""),
                      P(e));
                  });
                },
              },
              {
                key: "create",
                value: function (t, r) {
                  return new e(t, r);
                },
              },
              {
                key: "data",
                get: function () {
                  return S;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return H;
                },
                set: function (e) {
                  H = f(H, h(e));
                },
              },
            ]),
            i(e, [
              {
                key: "split",
                value: function (e) {
                  var t = this;
                  this.revert(),
                    this.elements.forEach(function (e) {
                      _(e, "html", e.innerHTML);
                    }),
                    (this.lines = []),
                    (this.words = []),
                    (this.chars = []);
                  var r = [window.pageXOffset, window.pageYOffset];
                  void 0 !== e && (this.settings = f(this.settings, h(e)));
                  var n = g(this.settings.types);
                  n.none ||
                    (this.elements.forEach(function (e) {
                      _(e, "isRoot", !0);
                      var r = (function e(t, r) {
                          var n,
                            i,
                            o,
                            a,
                            s,
                            c,
                            u,
                            p = t.nodeType,
                            h = { words: [], chars: [] };
                          if (!/(1|3|11)/.test(p)) return h;
                          if (3 === p && /\S/.test(t.nodeValue))
                            return (
                              (i = g((n = f(V, (n = r))).types)),
                              (o = n.tagName),
                              (a = t.nodeValue),
                              (s = document.createDocumentFragment()),
                              (c = []),
                              (u = []),
                              /^\s/.test(a) && s.append(" "),
                              (c = (function (e) {
                                var t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : " ";
                                return (e ? String(e) : "")
                                  .trim()
                                  .replace(/\s+/g, " ")
                                  .split(t);
                              })(a).reduce(function (e, t, r, a) {
                                var c, f;
                                return (
                                  i.chars &&
                                    (f = (function (e) {
                                      var t,
                                        r,
                                        n,
                                        i =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : "";
                                      return (e =
                                        null == (r = e) ? "" : String(r)) &&
                                        d(e) &&
                                        !i &&
                                        ((n = e), U.test(n))
                                        ? ((t = e),
                                          U.test(t)
                                            ? t.match(W) || []
                                            : t.split(""))
                                        : e.split(i);
                                    })(t).map(function (e) {
                                      var t = q(o, {
                                        class: ""
                                          .concat(n.splitClass, " ")
                                          .concat(n.charClass),
                                        style: "display: inline-block;",
                                        children: e,
                                      });
                                      return (
                                        _(t, "isChar", !0),
                                        (u = [].concat(l(u), [t])),
                                        t
                                      );
                                    })),
                                  i.words || i.lines
                                    ? (_(
                                        (c = q(o, {
                                          class: ""
                                            .concat(n.wordClass, " ")
                                            .concat(n.splitClass),
                                          style:
                                            "display: inline-block; ".concat(
                                              i.words && n.absolute
                                                ? "position: relative;"
                                                : ""
                                            ),
                                          children: i.chars ? f : t,
                                        })),
                                        {
                                          isWord: !0,
                                          isWordStart: !0,
                                          isWordEnd: !0,
                                        }
                                      ),
                                      s.appendChild(c))
                                    : f.forEach(function (e) {
                                        s.appendChild(e);
                                      }),
                                  r < a.length - 1 && s.append(" "),
                                  i.words ? e.concat(c) : e
                                );
                              }, [])),
                              /\s$/.test(a) && s.append(" "),
                              t.replaceWith(s),
                              { words: c, chars: u }
                            );
                          var m = b(t.childNodes);
                          if (m.length && (_(t, "isSplit", !0), !k(t).isRoot)) {
                            (t.style.display = "inline-block"),
                              (t.style.position = "relative");
                            var v = t.nextSibling,
                              y = t.previousSibling,
                              w = t.textContent || "",
                              x = v ? v.textContent : " ",
                              S = y ? y.textContent : " ";
                            _(t, {
                              isWordEnd: /\s$/.test(w) || /^\s/.test(x),
                              isWordStart: /^\s/.test(w) || /\s$/.test(S),
                            });
                          }
                          return m.reduce(function (t, n) {
                            var i = e(n, r),
                              o = i.words,
                              a = i.chars;
                            return {
                              words: [].concat(l(t.words), l(o)),
                              chars: [].concat(l(t.chars), l(a)),
                            };
                          }, h);
                        })(e, t.settings),
                        n = r.words,
                        i = r.chars;
                      (t.words = [].concat(l(t.words), l(n))),
                        (t.chars = [].concat(l(t.chars), l(i)));
                    }),
                    this.elements.forEach(function (e) {
                      if (n.lines || t.settings.absolute) {
                        var i,
                          o,
                          a,
                          c,
                          u,
                          f,
                          d,
                          p,
                          h,
                          m,
                          v,
                          y,
                          w,
                          x,
                          S,
                          O,
                          C,
                          E =
                            ((u = g((i = t.settings).types)),
                            (f = i.tagName),
                            (d = e.getElementsByTagName("*")),
                            (p = []),
                            (h = []),
                            (m = null),
                            (v = []),
                            (y = e.parentElement),
                            (w = e.nextElementSibling),
                            (x = document.createDocumentFragment()),
                            (O = (S = window.getComputedStyle(e)).textAlign),
                            (C = 0.2 * parseFloat(S.fontSize)),
                            i.absolute &&
                              ((c = {
                                left: e.offsetLeft,
                                top: e.offsetTop,
                                width: e.offsetWidth,
                              }),
                              (a = e.offsetWidth),
                              (o = e.offsetHeight),
                              _(e, {
                                cssWidth: e.style.width,
                                cssHeight: e.style.height,
                              })),
                            b(d).forEach(function (t) {
                              var n = t.parentElement === e,
                                o = (function (e, t, r, n) {
                                  if (!r.absolute)
                                    return { top: t ? e.offsetTop : null };
                                  var i = e.offsetParent,
                                    o = s(n, 2),
                                    a = o[0],
                                    l = o[1],
                                    c = 0,
                                    u = 0;
                                  if (i && i !== document.body) {
                                    var f = i.getBoundingClientRect();
                                    (c = f.x + a), (u = f.y + l);
                                  }
                                  var d = e.getBoundingClientRect(),
                                    p = d.width,
                                    h = d.height,
                                    g = d.x;
                                  return {
                                    width: p,
                                    height: h,
                                    top: d.y + l - u,
                                    left: g + a - c,
                                  };
                                })(t, n, i, r),
                                a = o.width,
                                l = o.height,
                                c = o.top,
                                f = o.left;
                              !/^br$/i.test(t.nodeName) &&
                                (u.lines &&
                                  n &&
                                  ((null === m || c - m >= C) &&
                                    ((m = c), p.push((h = []))),
                                  h.push(t)),
                                i.absolute &&
                                  _(t, {
                                    top: c,
                                    left: f,
                                    width: a,
                                    height: l,
                                  }));
                            }),
                            y && y.removeChild(e),
                            u.lines &&
                              ((v = p.map(function (e) {
                                var t = q(f, {
                                  class: ""
                                    .concat(i.splitClass, " ")
                                    .concat(i.lineClass),
                                  style: "display: block; text-align: ".concat(
                                    O,
                                    "; width: 100%;"
                                  ),
                                });
                                _(t, "isLine", !0);
                                var r = { height: 0, top: 1e4 };
                                return (
                                  x.appendChild(t),
                                  e.forEach(function (e, n, i) {
                                    var o = k(e),
                                      a = o.isWordEnd,
                                      s = o.top,
                                      l = o.height,
                                      c = i[n + 1];
                                    (r.height = Math.max(r.height, l)),
                                      (r.top = Math.min(r.top, s)),
                                      t.appendChild(e),
                                      a && k(c).isWordStart && t.append(" ");
                                  }),
                                  i.absolute &&
                                    _(t, { height: r.height, top: r.top }),
                                  t
                                );
                              })),
                              u.words ||
                                (function e(t) {
                                  k(t).isWord
                                    ? (P(t),
                                      t.replaceWith.apply(t, l(t.childNodes)))
                                    : b(t.children).forEach(function (t) {
                                        return e(t);
                                      });
                                })(x),
                              e.replaceChildren(x)),
                            i.absolute &&
                              ((e.style.width = "".concat(
                                e.style.width || a,
                                "px"
                              )),
                              (e.style.height = "".concat(o, "px")),
                              b(d).forEach(function (e) {
                                var t = k(e),
                                  r = t.isLine,
                                  n = t.top,
                                  i = t.left,
                                  o = t.width,
                                  a = t.height,
                                  s = k(e.parentElement),
                                  l = !r && s.isLine;
                                (e.style.top = "".concat(
                                  l ? n - s.top : n,
                                  "px"
                                )),
                                  (e.style.left = r
                                    ? "".concat(c.left, "px")
                                    : "".concat(i - (l ? c.left : 0), "px")),
                                  (e.style.height = "".concat(a, "px")),
                                  (e.style.width = r
                                    ? "".concat(c.width, "px")
                                    : "".concat(o, "px")),
                                  (e.style.position = "absolute");
                              })),
                            y && (w ? y.insertBefore(e, w) : y.appendChild(e)),
                            v);
                        t.lines = [].concat(l(t.lines), l(E));
                      }
                    }),
                    (this.isSplit = !0),
                    window.scrollTo(r[0], r[1]),
                    w(S).forEach(function (e) {
                      var t = s(e, 2),
                        r = t[0],
                        n = t[1],
                        i = n.isRoot,
                        o = n.isSplit;
                      (i && o) || ((S[r] = null), delete S[r]);
                    }));
                },
              },
              {
                key: "revert",
                value: function () {
                  this.isSplit &&
                    ((this.lines = null),
                    (this.words = null),
                    (this.chars = null),
                    (this.isSplit = !1)),
                    e.revert(this.elements);
                },
              },
            ]),
            e
          );
        })();
    },
    7914: function (e, t, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          l = "object",
          c = "string",
          u = "major",
          f = "model",
          d = "name",
          p = "type",
          h = "vendor",
          g = "version",
          m = "architecture",
          v = "console",
          b = "mobile",
          y = "tablet",
          w = "smarttv",
          x = "wearable",
          S = "embedded",
          O = "Amazon",
          _ = "Apple",
          k = "ASUS",
          P = "BlackBerry",
          C = "Browser",
          E = "Chrome",
          T = "Firefox",
          A = "Google",
          M = "Huawei",
          D = "Microsoft",
          I = "Motorola",
          R = "Opera",
          j = "Samsung",
          F = "Sharp",
          N = "Sony",
          B = "Xiaomi",
          z = "Zebra",
          L = "Facebook",
          Y = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          U = function (e, t) {
            var r = {};
            for (var n in e)
              t[n] && t[n].length % 2 == 0
                ? (r[n] = t[n].concat(e[n]))
                : (r[n] = e[n]);
            return r;
          },
          q = function (e) {
            for (var t = {}, r = 0; r < e.length; r++)
              t[e[r].toUpperCase()] = e[r];
            return t;
          },
          V = function (e, t) {
            return typeof e === c && -1 !== H(t).indexOf(H(e));
          },
          H = function (e) {
            return e.toLowerCase();
          },
          G = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          $ = function (e, t) {
            for (var r, n, i, s, c, u, f = 0; f < t.length && !c; ) {
              var d = t[f],
                p = t[f + 1];
              for (r = n = 0; r < d.length && !c && d[r]; )
                if ((c = d[r++].exec(e)))
                  for (i = 0; i < p.length; i++)
                    (u = c[++n]),
                      typeof (s = p[i]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : void 0)
                        : (this[s] = u || o);
              f += 2;
            }
          },
          Z = function (e, t) {
            for (var r in t)
              if (typeof t[r] === l && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (V(t[r][n], e)) return "?" === r ? o : r;
              } else if (V(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          Q = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [d, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [g, [d, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [d, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [g, [d, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, g],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [g, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [g, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [d, "UC" + C]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [g, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [g, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [g, [d, "Smart Lenovo " + C]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + C], g],
              [/\bfocus\/([\w\.]+)/i],
              [g, [d, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [d, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [d, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [d, "MIUI " + C]],
              [/fxios\/([-\w\.]+)/i],
              [g, [d, T]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360" + X]],
              [/\b(qq)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1Browser"], g],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1" + X], g],
              [/samsungbrowser\/([\w\.]+)/i],
              [g, [d, j + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], g],
              [/metasr[\/ ]?([\d\.]+)/i],
              [g, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[d, "Sogou Mobile"], g],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, g],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, L], g],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [d, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [g, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [d, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, E + " WebView"], g],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [d, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  g,
                  Z,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], g],
              [/(wolvic)\/([\w\.]+)/i],
              [d, g],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [d, T + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [d, [g, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [g, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, H]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [f, [h, j], [p, y]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [f, [h, j], [p, b]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [h, _], [p, b]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [f, [h, _], [p, y]],
              [/(macintosh);/i],
              [f, [h, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [h, F], [p, b]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [h, M], [p, y]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [f, [h, M], [p, b]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [h, B],
                [p, b],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [h, B],
                [p, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [f, [h, "OPPO"], [p, b]],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [h, "OPPO"], [p, y]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [h, "Vivo"], [p, b]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [h, "Realme"], [p, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [f, [h, I], [p, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [h, I], [p, y]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [h, "LG"], [p, y]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [f, [h, "LG"], [p, b]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [f, [h, "Lenovo"], [p, y]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [h, "Nokia"],
                [p, b],
              ],
              [/(pixel c)\b/i],
              [f, [h, A], [p, y]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [h, A], [p, b]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [f, [h, N], [p, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [h, N],
                [p, y],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [f, [h, "OnePlus"], [p, b]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [f, [h, O], [p, y]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [h, O],
                [p, b],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, h, [p, y]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [h, P], [p, b]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [f, [h, k], [p, y]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [h, k], [p, b]],
              [/(nexus 9)/i],
              [f, [h, "HTC"], [p, y]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [f, /_/g, " "], [p, b]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [f, [h, "TCL"], [p, y]],
              [/(itel) ((\w+))/i],
              [
                [h, H],
                f,
                [p, Z, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [h, "Acer"], [p, y]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [h, "Meizu"], [p, b]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [h, "Ulefone"], [p, b]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [h, "Nothing"], [p, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, f, [p, b]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, f, [p, y]],
              [/(surface duo)/i],
              [f, [h, D], [p, y]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [h, "Fairphone"], [p, b]],
              [/(u304aa)/i],
              [f, [h, "AT&T"], [p, b]],
              [/\bsie-(\w*)/i],
              [f, [h, "Siemens"], [p, b]],
              [/\b(rct\w+) b/i],
              [f, [h, "RCA"], [p, y]],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [h, "Dell"], [p, y]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [h, "Verizon"], [p, y]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [h, "Barnes & Noble"], [p, y]],
              [/\b(tm\d{3}\w+) b/i],
              [f, [h, "NuVision"], [p, y]],
              [/\b(k88) b/i],
              [f, [h, "ZTE"], [p, y]],
              [/\b(nx\d{3}j) b/i],
              [f, [h, "ZTE"], [p, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [h, "Swiss"], [p, b]],
              [/\b(zur\d{3}) b/i],
              [f, [h, "Swiss"], [p, y]],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [h, "Zeki"], [p, y]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], f, [p, y]],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [h, "Insignia"], [p, y]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [h, "NextBook"], [p, y]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], f, [p, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], f, [p, b]],
              [/\b(ph-1) /i],
              [f, [h, "Essential"], [p, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [h, "Envizen"], [p, y]],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [h, "MachSpeed"], [p, y]],
              [/\btu_(1491) b/i],
              [f, [h, "Rotor"], [p, y]],
              [/(shield[\w ]+) b/i],
              [f, [h, "Nvidia"], [p, y]],
              [/(sprint) (\w+)/i],
              [h, f, [p, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [h, D],
                [p, b],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [h, z], [p, y]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [h, z], [p, b]],
              [/smart-tv.+(samsung)/i],
              [h, [p, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [h, j],
                [p, w],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, "LG"],
                [p, w],
              ],
              [/(apple) ?tv/i],
              [h, [f, _ + " TV"], [p, w]],
              [/crkey/i],
              [
                [f, E + "cast"],
                [h, A],
                [p, w],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [h, O], [p, w]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [h, F], [p, w]],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [h, N], [p, w]],
              [/(mitv-\w{5}) bui/i],
              [f, [h, B], [p, w]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, f, [p, w]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, G],
                [f, G],
                [p, w],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, w]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, f, [p, v]],
              [/droid.+; (shield) bui/i],
              [f, [h, "Nvidia"], [p, v]],
              [/(playstation [345portablevi]+)/i],
              [f, [h, N], [p, v]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [h, D], [p, v]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [f, [h, j], [p, x]],
              [/((pebble))app/i],
              [h, f, [p, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [h, _], [p, x]],
              [/droid.+; (glass) \d/i],
              [f, [h, A], [p, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [h, z], [p, x]],
              [/(quest( \d| pro)?)/i],
              [f, [h, L], [p, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [p, S]],
              [/(aeobc)\b/i],
              [f, [h, O], [p, S]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [f, [p, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [p, y]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, y]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[p, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, g],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [g, Z, K]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [g, Z, K],
                [d, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [g, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, W],
                [g, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, g],
              [/\(bb(10);/i],
              [g, [d, P]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [g, [d, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [g, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [d, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, Y], g],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], g],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, g],
            ],
          },
          J = function (e, t) {
            if ((typeof e === l && ((t = e), (e = o)), !(this instanceof J)))
              return new J(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              v = r && r.userAgentData ? r.userAgentData : o,
              w = t ? U(Q, t) : Q,
              x = r && r.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[d] = o),
                  (t[g] = o),
                  $.call(t, n, w.browser),
                  (t[u] =
                    typeof (e = t[g]) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  x &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == a &&
                    (t[d] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = o), $.call(e, n, w.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[f] = o),
                  (e[p] = o),
                  $.call(e, n, w.device),
                  x && !e[p] && v && v.mobile && (e[p] = b),
                  x &&
                    "Macintosh" == e[f] &&
                    r &&
                    typeof r.standalone !== s &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((e[f] = "iPad"), (e[p] = y)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[d] = o), (e[g] = o), $.call(e, n, w.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[d] = o),
                  (e[g] = o),
                  $.call(e, n, w.os),
                  x &&
                    !e[d] &&
                    v &&
                    v.platform &&
                    "Unknown" != v.platform &&
                    (e[d] = v.platform
                      .replace(/chrome os/i, Y)
                      .replace(/macos/i, W)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = typeof e === c && e.length > 500 ? G(e, 500) : e), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (J.VERSION = "1.0.39"),
          (J.BROWSER = q([d, g, u])),
          (J.CPU = q([m])),
          (J.DEVICE = q([f, h, p, v, b, w, y, x, S])),
          (J.ENGINE = J.OS = q([d, g])),
          typeof t !== s
            ? (e.exports && (t = e.exports = J), (t.UAParser = J))
            : r.amdO
            ? o !==
                (n = function () {
                  return J;
                }.call(t, r, t, e)) && (e.exports = n)
            : typeof i !== s && (i.UAParser = J);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var et = new J();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var r in t) ee.ua[r] = t[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
