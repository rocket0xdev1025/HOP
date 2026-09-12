(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  28527,
  (t) => {
    "use strict";
    let e, i, s;
    var n = t.i(43476),
      r = t.i(22016),
      o = t.i(47167),
      a = t.i(71645);
    let l = (0, a.createContext)({});
    function h(t) {
      let e = (0, a.useRef)(null);
      return null === e.current && (e.current = t()), e.current;
    }
    let u = "u" > typeof window ? a.useLayoutEffect : a.useEffect,
      d = (0, a.createContext)(null),
      c = (t) => "object" == typeof t && null !== t;
    function p(t) {
      return c(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
    }
    var m = a;
    let f = (0, a.createContext)({
      transformPagePoint: (t) => t,
      isStatic: !1,
      reducedMotion: "never",
    });
    function y(t, e) {
      if ("function" == typeof t) return t(e);
      null != t && (t.current = e);
    }
    class g extends m.Component {
      getSnapshotBeforeUpdate(t) {
        let e = this.props.childRef.current;
        if (
          p(e) &&
          t.isPresent &&
          !this.props.isPresent &&
          !1 !== this.props.pop
        ) {
          let t = e.offsetParent,
            i = (p(t) && t.offsetWidth) || 0,
            s = (p(t) && t.offsetHeight) || 0,
            n = getComputedStyle(e),
            r = this.props.sizeRef.current;
          (r.height = parseFloat(n.height)),
            (r.width = parseFloat(n.width)),
            (r.top = e.offsetTop),
            (r.left = e.offsetLeft),
            (r.right = i - r.width - r.left),
            (r.bottom = s - r.height - r.top),
            (r.direction = n.direction);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function v({
      children: t,
      isPresent: e,
      anchorX: i,
      anchorY: s,
      root: r,
      pop: o,
    }) {
      let l = (0, m.useId)(),
        h = (0, m.useRef)(null),
        u = (0, m.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          direction: "ltr",
        }),
        { nonce: d } = (0, m.useContext)(f),
        c = (function (...t) {
          return a.useCallback(
            (function (...t) {
              return (e) => {
                let i = !1,
                  s = t.map((t) => {
                    let s = y(t, e);
                    return i || "function" != typeof s || (i = !0), s;
                  });
                if (i)
                  return () => {
                    for (let e = 0; e < s.length; e++) {
                      let i = s[e];
                      "function" == typeof i ? i() : y(t[e], null);
                    }
                  };
              };
            })(...t),
            t
          );
        })(h, !1 !== o ? t.props?.ref ?? t?.ref : void 0);
      return (
        (0, m.useInsertionEffect)(() => {
          let {
            width: t,
            height: n,
            top: a,
            left: c,
            right: p,
            bottom: m,
            direction: f,
          } = u.current;
          if (e || !1 === o || !h.current || !t || !n) return;
          let y = "rtl" === f,
            g =
              "left" === i
                ? y
                  ? `right: ${p}`
                  : `left: ${c}`
                : y
                ? `left: ${c}`
                : `right: ${p}`,
            v = "bottom" === s ? `bottom: ${m}` : `top: ${a}`;
          h.current.dataset.motionPopId = l;
          let x = document.createElement("style");
          d && (x.nonce = d);
          let b = r ?? document.head;
          return (
            b.appendChild(x),
            x.sheet &&
              x.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            ${g}px !important;
            ${v}px !important;
          }
        `),
            () => {
              h.current?.removeAttribute("data-motion-pop-id"),
                b.contains(x) && b.removeChild(x);
            }
          );
        }, [e]),
        (0, n.jsx)(g, {
          isPresent: e,
          childRef: h,
          sizeRef: u,
          pop: o,
          children: !1 === o ? t : m.cloneElement(t, { ref: c }),
        })
      );
    }
    let x = ({
      children: t,
      initial: e,
      isPresent: i,
      onExitComplete: s,
      custom: r,
      presenceAffectsLayout: o,
      mode: l,
      anchorX: c,
      anchorY: p,
      root: m,
    }) => {
      let f = h(b),
        y = (0, a.useId)(),
        g = (0, a.useRef)(i),
        x = (0, a.useRef)(s);
      u(() => {
        (g.current = i), (x.current = s);
      });
      let w = !0,
        S = (0, a.useMemo)(
          () => (
            (w = !1),
            {
              id: y,
              initial: e,
              isPresent: i,
              custom: r,
              onExitComplete: (t) => {
                for (let e of (f.set(t, !0), f.values())) if (!e) return;
                s && s();
              },
              register: (t) => (
                f.set(t, !1),
                () => {
                  f.delete(t), g.current || f.size || x.current?.();
                }
              ),
            }
          ),
          [i, f, s]
        );
      return (
        o && w && (S = { ...S }),
        (0, a.useMemo)(() => {
          f.forEach((t, e) => f.set(e, !1));
        }, [i]),
        a.useEffect(() => {
          i || f.size || !s || s();
        }, [i]),
        (t = (0, n.jsx)(v, {
          pop: "popLayout" === l,
          isPresent: i,
          anchorX: c,
          anchorY: p,
          root: m,
          children: t,
        })),
        (0, n.jsx)(d.Provider, { value: S, children: t })
      );
    };
    function b() {
      return new Map();
    }
    function w(t = !0) {
      let e = (0, a.useContext)(d);
      if (null === e) return [!0, null];
      let { isPresent: i, onExitComplete: s, register: n } = e,
        r = (0, a.useId)();
      (0, a.useEffect)(() => {
        if (t) return n(r);
      }, [t]);
      let o = (0, a.useCallback)(() => t && s && s(r), [r, s, t]);
      return !i && s ? [!1, o] : [!0];
    }
    let S = (t) => t.key || "";
    function T(t) {
      let e = [];
      return (
        a.Children.forEach(t, (t) => {
          (0, a.isValidElement)(t) && e.push(t);
        }),
        e
      );
    }
    let A = ({
        children: t,
        custom: e,
        initial: i = !0,
        onExitComplete: s,
        presenceAffectsLayout: r = !0,
        mode: o = "sync",
        propagate: d = !1,
        anchorX: c = "left",
        anchorY: p = "top",
        root: m,
      }) => {
        let [f, y] = w(d),
          g = (0, a.useMemo)(() => T(t), [t]),
          v = d && !f ? [] : g.map(S),
          b = (0, a.useRef)(!0),
          A = (0, a.useRef)(g),
          P = h(() => new Map()),
          E = (0, a.useRef)(new Set()),
          [k, C] = (0, a.useState)(g),
          [M, D] = (0, a.useState)(g);
        u(() => {
          !d || f || M.length || y?.();
        }, [f, d, M.length, y]),
          u(() => {
            (b.current = !1), (A.current = g);
            for (let t = 0; t < M.length; t++) {
              let e = S(M[t]);
              v.includes(e)
                ? (P.delete(e), E.current.delete(e))
                : !0 !== P.get(e) && P.set(e, !1);
            }
          }, [M, v.length, v.join("-")]);
        let V = [];
        if (g !== k) {
          let t = [...g],
            e = 0;
          for (let i of M) {
            let s = v.indexOf(S(i));
            -1 === s
              ? (t.splice(e++, 0, i), V.push(i))
              : (e = s + V.length + 1);
          }
          return "wait" === o && V.length && (t = V), D(T(t)), C(g), null;
        }
        let { forceRender: j } = (0, a.useContext)(l);
        return (0, n.jsx)(n.Fragment, {
          children: M.map((t) => {
            let a = S(t),
              l = (!d || !!f) && (g === M || v.includes(a));
            return (0, n.jsx)(
              x,
              {
                isPresent: l,
                initial: (!b.current || !!i) && void 0,
                custom: e,
                presenceAffectsLayout: r,
                mode: o,
                root: m,
                onExitComplete: l
                  ? void 0
                  : () => {
                      if (E.current.has(a) || !P.has(a)) return;
                      E.current.add(a), P.set(a, !0);
                      let t = !0;
                      P.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (j?.(), D(A.current), d && y?.(), s && s());
                    },
                anchorX: c,
                anchorY: p,
                children: t,
              },
              a
            );
          }),
        });
      },
      P = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      E = new Set([...P, "pathRotation"]),
      k = (t, e, i) => (i > e ? e : i < t ? t : i),
      C = {
        test: (t) => "number" == typeof t,
        parse: parseFloat,
        transform: (t) => t,
      },
      M = { ...C, transform: (t) => k(0, 1, t) },
      D = { ...C, default: 1 },
      V = (t) => Math.round(1e5 * t) / 1e5,
      j = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      R =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      B = (t, e) => (i) =>
        !!(
          ("string" == typeof i && R.test(i) && i.startsWith(t)) ||
          (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
        ),
      F = (t, e, i) => (s) => {
        if ("string" != typeof s) return s;
        let [n, r, o, a] = s.match(j);
        return {
          [t]: parseFloat(n),
          [e]: parseFloat(r),
          [i]: parseFloat(o),
          alpha: void 0 !== a ? parseFloat(a) : 1,
        };
      },
      L = { ...C, transform: (t) => Math.round(k(0, 255, t)) },
      I = {
        test: B("rgb", "red"),
        parse: F("red", "green", "blue"),
        transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
          "rgba(" +
          L.transform(t) +
          ", " +
          L.transform(e) +
          ", " +
          L.transform(i) +
          ", " +
          V(M.transform(s)) +
          ")",
      },
      O = {
        test: B("#"),
        parse: function (t) {
          let e = "",
            i = "",
            s = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (s = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (s = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (s += s),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(s, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: I.transform,
      },
      U = (t) => ({
        test: (e) =>
          "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      }),
      $ = U("deg"),
      N = U("%"),
      W = U("px"),
      q = U("vh"),
      G = U("vw"),
      H = {
        ...N,
        parse: (t) => N.parse(t) / 100,
        transform: (t) => N.transform(100 * t),
      },
      z = {
        test: B("hsl", "hue"),
        parse: F("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          N.transform(V(e)) +
          ", " +
          N.transform(V(i)) +
          ", " +
          V(M.transform(s)) +
          ")",
      },
      Y = {
        test: (t) => I.test(t) || O.test(t) || z.test(t),
        parse: (t) =>
          I.test(t) ? I.parse(t) : z.test(t) ? z.parse(t) : O.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? I.transform(t)
            : z.transform(t),
        getAnimatableNone: (t) => {
          let e = Y.parse(t);
          return (e.alpha = 0), Y.transform(e);
        },
      },
      X =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      K = "number",
      _ = "color",
      Z =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function Q(t) {
      let e = t.toString(),
        i = [],
        s = { color: [], number: [], var: [] },
        n = [],
        r = 0,
        o = e
          .replace(
            Z,
            (t) => (
              Y.test(t)
                ? (s.color.push(r), n.push(_), i.push(Y.parse(t)))
                : t.startsWith("var(")
                ? (s.var.push(r), n.push("var"), i.push(t))
                : (s.number.push(r), n.push(K), i.push(parseFloat(t))),
              ++r,
              "${}"
            )
          )
          .split("${}");
      return { values: i, split: o, indexes: s, types: n };
    }
    function J({ split: t, types: e }) {
      let i = t.length;
      return (s) => {
        let n = "";
        for (let r = 0; r < i; r++)
          if (((n += t[r]), void 0 !== s[r])) {
            let t = e[r];
            t === K
              ? (n += V(s[r]))
              : t === _
              ? (n += Y.transform(s[r]))
              : (n += s[r]);
          }
        return n;
      };
    }
    let tt = {
        test: function (t) {
          return (
            isNaN(t) &&
            "string" == typeof t &&
            (t.match(j)?.length || 0) + (t.match(X)?.length || 0) > 0
          );
        },
        parse: function (t) {
          return Q(t).values;
        },
        createTransformer: function (t) {
          return J(Q(t));
        },
        getAnimatableNone: function (t) {
          let e = Q(t);
          return J(e)(
            e.values.map((t, i) =>
              ((t, e) =>
                "number" == typeof t
                  ? e?.trim().endsWith("/")
                    ? t
                    : 0
                  : "number" == typeof t
                  ? 0
                  : Y.test(t)
                  ? Y.getAnimatableNone(t)
                  : t)(t, e.split[i])
            )
          );
        },
      },
      te = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function ti(t) {
      let [e, i] = t.slice(0, -1).split("(");
      if ("drop-shadow" === e) return t;
      let [s] = i.match(j) || [];
      if (!s) return t;
      let n = i.replace(s, ""),
        r = +!!te.has(e);
      return s !== i && (r *= 100), e + "(" + r + n + ")";
    }
    let ts = /\b([a-z-]*)\(.*?\)/gu,
      tn = {
        ...tt,
        getAnimatableNone: (t) => {
          let e = t.match(ts);
          return e ? e.map(ti).join(" ") : t;
        },
      },
      tr = {
        ...tt,
        getAnimatableNone: (t) => {
          let e = tt.parse(t);
          return tt.createTransformer(t)(
            e.map((t) =>
              "number" == typeof t
                ? 0
                : "object" == typeof t
                ? { ...t, alpha: 1 }
                : t
            )
          );
        },
      },
      to = { ...C, transform: Math.round },
      ta = {
        borderWidth: W,
        borderTopWidth: W,
        borderRightWidth: W,
        borderBottomWidth: W,
        borderLeftWidth: W,
        borderRadius: W,
        borderTopLeftRadius: W,
        borderTopRightRadius: W,
        borderBottomRightRadius: W,
        borderBottomLeftRadius: W,
        width: W,
        maxWidth: W,
        height: W,
        maxHeight: W,
        top: W,
        right: W,
        bottom: W,
        left: W,
        inset: W,
        insetBlock: W,
        insetBlockStart: W,
        insetBlockEnd: W,
        insetInline: W,
        insetInlineStart: W,
        insetInlineEnd: W,
        padding: W,
        paddingTop: W,
        paddingRight: W,
        paddingBottom: W,
        paddingLeft: W,
        paddingBlock: W,
        paddingBlockStart: W,
        paddingBlockEnd: W,
        paddingInline: W,
        paddingInlineStart: W,
        paddingInlineEnd: W,
        margin: W,
        marginTop: W,
        marginRight: W,
        marginBottom: W,
        marginLeft: W,
        marginBlock: W,
        marginBlockStart: W,
        marginBlockEnd: W,
        marginInline: W,
        marginInlineStart: W,
        marginInlineEnd: W,
        fontSize: W,
        backgroundPositionX: W,
        backgroundPositionY: W,
        rotate: $,
        pathRotation: $,
        rotateX: $,
        rotateY: $,
        rotateZ: $,
        scale: D,
        scaleX: D,
        scaleY: D,
        scaleZ: D,
        skew: $,
        skewX: $,
        skewY: $,
        distance: W,
        translateX: W,
        translateY: W,
        translateZ: W,
        x: W,
        y: W,
        z: W,
        perspective: W,
        transformPerspective: W,
        opacity: M,
        originX: H,
        originY: H,
        originZ: W,
        zIndex: to,
        fillOpacity: M,
        strokeOpacity: M,
        numOctaves: to,
      },
      tl = {
        ...ta,
        color: Y,
        backgroundColor: Y,
        outlineColor: Y,
        fill: Y,
        stroke: Y,
        borderColor: Y,
        borderTopColor: Y,
        borderRightColor: Y,
        borderBottomColor: Y,
        borderLeftColor: Y,
        filter: tn,
        WebkitFilter: tn,
        mask: tr,
        WebkitMask: tr,
      },
      th = (t) => tl[t],
      tu = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      td = () => ({ x: tu(), y: tu() }),
      tc = () => ({ min: 0, max: 0 }),
      tp = () => ({ x: tc(), y: tc() }),
      tm = (t) => !!(t && t.getVelocity),
      tf = new Set(["width", "height", "top", "left", "right", "bottom", ...P]),
      ty = (t) => (e) => e.test(t),
      tg = [C, W, N, $, G, q, { test: (t) => "auto" === t, parse: (t) => t }],
      tv = (t) => tg.find(ty(t)),
      tx = () => {},
      tb = () => {};
    o.default;
    let tw = (t) => (e) => "string" == typeof e && e.startsWith(t),
      tS = tw("--"),
      tT = tw("var(--"),
      tA = (t) => !!tT(t) && tP.test(t.split("/*")[0].trim()),
      tP =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function tE(t) {
      return "string" == typeof t && t.split("/*")[0].includes("var(--");
    }
    let tk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      tC = (t) => (180 * t) / Math.PI,
      tM = (t) => tV(tC(Math.atan2(t[1], t[0]))),
      tD = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: tM,
        rotateZ: tM,
        skewX: (t) => tC(Math.atan(t[1])),
        skewY: (t) => tC(Math.atan(t[2])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
      },
      tV = (t) => ((t %= 360) < 0 && (t += 360), t),
      tj = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
      tR = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
      tB = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: tj,
        scaleY: tR,
        scale: (t) => (tj(t) + tR(t)) / 2,
        rotateX: (t) => tV(tC(Math.atan2(t[6], t[5]))),
        rotateY: (t) => tV(tC(Math.atan2(-t[2], t[0]))),
        rotateZ: tM,
        rotate: tM,
        skewX: (t) => tC(Math.atan(t[4])),
        skewY: (t) => tC(Math.atan(t[1])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
      };
    function tF(t) {
      return +!!t.includes("scale");
    }
    function tL(t, e) {
      let i, s;
      if (!t || "none" === t) return tF(e);
      let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (n) (i = tB), (s = n);
      else {
        let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        (i = tD), (s = e);
      }
      if (!s) return tF(e);
      let r = i[e],
        o = s[1].split(",").map(tI);
      return "function" == typeof r ? r(o) : o[r];
    }
    function tI(t) {
      return parseFloat(t.trim());
    }
    let tO = (t) => t === C || t === W,
      tU = new Set(["x", "y", "z"]),
      t$ = P.filter((t) => !tU.has(t)),
      tN = {
        width: (
          { x: t },
          { paddingLeft: e = "0", paddingRight: i = "0", boxSizing: s }
        ) => {
          let n = t.max - t.min;
          return "border-box" === s ? n : n - parseFloat(e) - parseFloat(i);
        },
        height: (
          { y: t },
          { paddingTop: e = "0", paddingBottom: i = "0", boxSizing: s }
        ) => {
          let n = t.max - t.min;
          return "border-box" === s ? n : n - parseFloat(e) - parseFloat(i);
        },
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => tL(e, "x"),
        y: (t, { transform: e }) => tL(e, "y"),
      };
    (tN.translateX = tN.x), (tN.translateY = tN.y);
    let tW = (t) => t,
      tq = {},
      tG = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
    function tH(t, e) {
      let i = !1,
        s = !0,
        n = { delta: 0, timestamp: 0, isProcessing: !1 },
        r = () => (i = !0),
        o = tG.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = new Set(),
                i = new Set(),
                s = !1,
                n = !1,
                r = new WeakSet(),
                o = { delta: 0, timestamp: 0, isProcessing: !1 };
              function a(e) {
                r.has(e) && (l.schedule(e), t()), e(o);
              }
              let l = {
                schedule: (t, n = !1, o = !1) => {
                  let a = o && s ? e : i;
                  return n && r.add(t), a.add(t), t;
                },
                cancel: (t) => {
                  i.delete(t), r.delete(t);
                },
                process: (t) => {
                  if (((o = t), s)) {
                    n = !0;
                    return;
                  }
                  s = !0;
                  let r = e;
                  (e = i),
                    (i = r),
                    e.forEach(a),
                    e.clear(),
                    (s = !1),
                    n && ((n = !1), l.process(t));
                },
              };
              return l;
            })(r)),
            t
          ),
          {}
        ),
        {
          setup: a,
          read: l,
          resolveKeyframes: h,
          preUpdate: u,
          update: d,
          preRender: c,
          render: p,
          postRender: m,
        } = o,
        f = () => {
          let r = tq.useManualTiming,
            o = r ? n.timestamp : performance.now();
          (i = !1),
            r ||
              (n.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(o - n.timestamp, 40), 1)),
            (n.timestamp = o),
            (n.isProcessing = !0),
            a.process(n),
            l.process(n),
            h.process(n),
            u.process(n),
            d.process(n),
            c.process(n),
            p.process(n),
            m.process(n),
            (n.isProcessing = !1),
            i && e && ((s = !1), t(f));
        };
      return {
        schedule: tG.reduce((e, r) => {
          let a = o[r];
          return (
            (e[r] = (e, r = !1, o = !1) => (
              !i && ((i = !0), (s = !0), n.isProcessing || t(f)),
              a.schedule(e, r, o)
            )),
            e
          );
        }, {}),
        cancel: (t) => {
          for (let e = 0; e < tG.length; e++) o[tG[e]].cancel(t);
        },
        state: n,
        steps: o,
      };
    }
    let {
        schedule: tz,
        cancel: tY,
        state: tX,
        steps: tK,
      } = tH(
        "u" > typeof requestAnimationFrame ? requestAnimationFrame : tW,
        !0
      ),
      t_ = new Set(),
      tZ = !1,
      tQ = !1,
      tJ = !1;
    function t0() {
      if (tQ) {
        let t = Array.from(t_).filter((t) => t.needsMeasurement),
          e = new Set(t.map((t) => t.element)),
          i = new Map();
        e.forEach((t) => {
          let e,
            s =
              ((e = []),
              t$.forEach((i) => {
                let s = t.getValue(i);
                void 0 !== s &&
                  (e.push([i, s.get()]), s.set(+!!i.startsWith("scale")));
              }),
              e);
          s.length && (i.set(t, s), t.render());
        }),
          t.forEach((t) => t.measureInitialState()),
          e.forEach((t) => {
            t.render();
            let e = i.get(t);
            e &&
              e.forEach(([e, i]) => {
                t.getValue(e)?.set(i);
              });
          }),
          t.forEach((t) => t.measureEndState()),
          t.forEach((t) => {
            void 0 !== t.suspendedScrollY &&
              window.scrollTo(0, t.suspendedScrollY);
          });
      }
      (tQ = !1), (tZ = !1), t_.forEach((t) => t.complete(tJ)), t_.clear();
    }
    function t1() {
      t_.forEach((t) => {
        t.readKeyframes(), t.needsMeasurement && (tQ = !0);
      });
    }
    class t5 {
      constructor(t, e, i, s, n, r = !1) {
        (this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...t]),
          (this.onComplete = e),
          (this.name = i),
          (this.motionValue = s),
          (this.element = n),
          (this.isAsync = r);
      }
      scheduleResolve() {
        (this.state = "scheduled"),
          this.isAsync
            ? (t_.add(this),
              tZ || ((tZ = !0), tz.read(t1), tz.resolveKeyframes(t0)))
            : (this.readKeyframes(), this.complete());
      }
      readKeyframes() {
        let {
          unresolvedKeyframes: t,
          name: e,
          element: i,
          motionValue: s,
        } = this;
        if (null === t[0]) {
          let n = s?.get(),
            r = t[t.length - 1];
          if (void 0 !== n) t[0] = n;
          else if (i && e) {
            let s = i.readValue(e, r);
            null != s && (t[0] = s);
          }
          void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
        }
        for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(t = !1) {
        (this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
          t_.delete(this);
      }
      cancel() {
        "scheduled" === this.state &&
          (t_.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    let t2 = new Set([tn, tr]);
    function t3(t, e) {
      let i = th(t);
      return (
        t2.has(i) || (i = tt),
        i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
      );
    }
    let t4 = new Set(["auto", "none", "0"]);
    class t6 extends t5 {
      constructor(t, e, i, s, n) {
        super(t, e, i, s, n, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: t, element: e, name: i } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for (let i = 0; i < t.length; i++) {
          let s = t[i];
          if ("string" == typeof s && tA((s = s.trim()))) {
            let n = (function t(e, i, s = 1) {
              tb(
                `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
              );
              let [n, r] = (function (t) {
                let e = tk.exec(t);
                if (!e) return [,];
                let [, i, s, n] = e;
                return [`--${i ?? s}`, n];
              })(e);
              if (!n) return;
              let o = window.getComputedStyle(i).getPropertyValue(n);
              if (o) {
                let t = o.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
                  ? parseFloat(t)
                  : t;
              }
              return tA(r) ? t(r, i, s + 1) : r;
            })(s, e.current);
            void 0 !== n && (t[i] = n),
              i === t.length - 1 && (this.finalKeyframe = s);
          }
        }
        if ((this.resolveNoneKeyframes(), !tf.has(i) || 2 !== t.length)) return;
        let [s, n] = t,
          r = tv(s),
          o = tv(n);
        if (tE(s) !== tE(n) && tN[i]) {
          this.needsMeasurement = !0;
          return;
        }
        if (r !== o)
          if (tO(r) && tO(o))
            for (let e = 0; e < t.length; e++) {
              let i = t[e];
              "string" == typeof i && (t[e] = parseFloat(i));
            }
          else tN[i] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: t, name: e } = this,
          i = [];
        for (let e = 0; e < t.length; e++)
          (null === t[e] ||
            (function (t) {
              if ("number" == typeof t) return 0 === t;
              if (null === t) return !0;
              return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
            })(t[e])) &&
            i.push(e);
        i.length &&
          (function (t, e, i) {
            let s,
              n = 0;
            for (; n < t.length && !s; ) {
              let e = t[n];
              "string" == typeof e &&
                !t4.has(e) &&
                Q(e).values.length &&
                (s = t[n]),
                n++;
            }
            if (s && i) for (let n of e) t[n] = t3(i, s);
          })(t, i, e);
      }
      measureInitialState() {
        let { element: t, unresolvedKeyframes: e, name: i } = this;
        if (!t || !t.current) return;
        "height" === i && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = tN[i](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
          (e[0] = this.measuredOrigin);
        let s = e[e.length - 1];
        void 0 !== s && t.getValue(i, s).jump(s, !1);
      }
      measureEndState() {
        let { element: t, name: e, unresolvedKeyframes: i } = this;
        if (!t || !t.current) return;
        let s = t.getValue(e);
        s && s.jump(this.measuredOrigin, !1);
        let n = i.length - 1,
          r = i[n];
        (i[n] = tN[e](
          t.measureViewportBox(),
          window.getComputedStyle(t.current)
        )),
          null !== r &&
            void 0 === this.finalKeyframe &&
            (this.finalKeyframe = r),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([e, i]) => {
              t.getValue(e).set(i);
            }),
          this.resolveNoneKeyframes();
      }
    }
    let t7 = (t) => 1e3 * t;
    function t8(t, e) {
      -1 === t.indexOf(e) && t.push(e);
    }
    function t9(t, e) {
      let i = t.indexOf(e);
      i > -1 && t.splice(i, 1);
    }
    class et {
      constructor() {
        this.subscriptions = [];
      }
      add(t) {
        return t8(this.subscriptions, t), () => t9(this.subscriptions, t);
      }
      notify(t, e, i) {
        let s = this.subscriptions.length;
        if (s)
          if (1 === s) this.subscriptions[0](t, e, i);
          else
            for (let n = 0; n < s; n++) {
              let s = this.subscriptions[n];
              s && s(t, e, i);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    function ee(t, e, i) {
      e.startsWith("--") ? t.style.setProperty(e, i) : (t.style[e] = i);
    }
    function ei(t) {
      let e;
      return () => (void 0 === e && (e = t()), e);
    }
    let es = {};
    function en(t, e) {
      let i = ei(t);
      return () => es[e] ?? i();
    }
    let er = en(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
      eo = (t) => null !== t;
    function ea(t, { repeat: e, repeatType: i = "loop" }, s, n = 1) {
      let r = t.filter(eo),
        o = n < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
      return o && void 0 !== s ? s : r[o];
    }
    class el {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((t) => {
          this.resolve = t;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(t, e) {
        return this.finished.then(t, e);
      }
    }
    let eh = (t) => Array.isArray(t) && "number" == typeof t[0],
      eu = en(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (t) {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      ed = (t, e, i = 10) => {
        let s = "",
          n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++)
          s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0, s.length - 2)})`;
      },
      ec = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
      ep = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ec([0, 0.65, 0.55, 1]),
        circOut: ec([0.55, 0, 1, 0.45]),
        backIn: ec([0.31, 0.01, 0.66, -0.59]),
        backOut: ec([0.33, 1.53, 0.69, 0.99]),
      };
    function em(t) {
      return "function" == typeof t && "applyToOptions" in t;
    }
    class ef extends el {
      constructor(t) {
        if (
          (super(),
          (this.finishedTime = null),
          (this.isStopped = !1),
          (this.manualStartTime = null),
          !t)
        )
          return;
        const {
          element: e,
          name: i,
          keyframes: s,
          pseudoElement: n,
          allowFlatten: r = !1,
          finalKeyframe: o,
          onComplete: a,
        } = t;
        (this.isPseudoElement = !!n),
          (this.allowFlatten = r),
          (this.options = t),
          tb(t.type);
        const l = (function ({ type: t, ...e }) {
          return em(t) && eu()
            ? t.applyToOptions(e)
            : (e.duration ?? (e.duration = 300),
              e.ease ?? (e.ease = "easeOut"),
              e);
        })(t);
        (this.animation = (function (
          t,
          e,
          i,
          {
            delay: s = 0,
            duration: n = 300,
            repeat: r = 0,
            repeatType: o = "loop",
            ease: a = "easeOut",
            times: l,
          } = {},
          h
        ) {
          let u = { [e]: i };
          l && (u.offset = l);
          let d = (function t(e, i) {
            if (e)
              return "function" == typeof e
                ? eu()
                  ? ed(e, i)
                  : "ease-out"
                : eh(e)
                ? ec(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, i) || ep.easeOut)
                : ep[e];
          })(a, n);
          Array.isArray(d) && (u.easing = d);
          let c = {
            delay: s,
            duration: n,
            easing: Array.isArray(d) ? "linear" : d,
            fill: "both",
            iterations: r + 1,
            direction: "reverse" === o ? "alternate" : "normal",
          };
          return h && (c.pseudoElement = h), t.animate(u, c);
        })(e, i, s, l, n)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !n)) {
              let t = ea(s, this.options, o, this.speed);
              this.updateMotionValue && this.updateMotionValue(t),
                ee(e, i, t),
                this.animation.cancel();
            }
            a?.(), this.notifyFinished();
          });
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null),
          this.animation.play(),
          "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (t) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: t } = this;
        "idle" !== t &&
          "finished" !== t &&
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let t = this.options?.element;
        !this.isPseudoElement &&
          t?.isConnected &&
          this.animation.commitStyles?.();
      }
      get duration() {
        return (
          Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
          1e3
        );
      }
      get iterationDuration() {
        let { delay: t = 0 } = this.options || {};
        return this.duration + t / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(t) {
        let e = null !== this.finishedTime;
        (this.manualStartTime = null),
          (this.finishedTime = null),
          (this.animation.currentTime = t7(t)),
          e && this.animation.pause();
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(t) {
        t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
      }
      get state() {
        return null !== this.finishedTime
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(t) {
        this.manualStartTime = this.animation.startTime = t;
      }
      attachTimeline({ timeline: t, rangeStart: e, rangeEnd: i, observe: s }) {
        return (this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        t && er())
          ? ((this.animation.timeline = t),
            e && (this.animation.rangeStart = e),
            i && (this.animation.rangeEnd = i),
            tW)
          : s(this);
      }
    }
    let ey = new Set([
        "opacity",
        "clipPath",
        "filter",
        "transform",
        "backgroundColor",
      ]),
      { schedule: eg } = tH(queueMicrotask, !1);
    function ev() {
      e = void 0;
    }
    let ex = {
        now: () => (
          void 0 === e &&
            ex.set(
              tX.isProcessing || tq.useManualTiming
                ? tX.timestamp
                : performance.now()
            ),
          e
        ),
        set: (t) => {
          (e = t), queueMicrotask(ev);
        },
      },
      eb = (t, e) => (e ? (1e3 / e) * t : 0),
      ew;
    class eS {
      constructor(t, e = {}) {
        (this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (t) => {
            let e = ex.now();
            if (
              (this.updatedAt !== e && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(t),
              this.current !== this.prev &&
                (this.events.change?.notify(this.current), this.dependents))
            )
              for (let t of this.dependents) t.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(t),
          (this.owner = e.owner);
      }
      setCurrent(t) {
        (this.current = t),
          (this.updatedAt = ex.now()),
          null === this.canTrackVelocity &&
            void 0 !== t &&
            (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
      }
      setPrevFrameValue(t = this.current) {
        (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
      }
      onChange(t) {
        return this.on("change", t);
      }
      on(t, e) {
        this.events[t] || (this.events[t] = new et());
        let i = this.events[t].add(e);
        return "change" === t
          ? () => {
              i(),
                tz.read(() => {
                  this.events.change.getSize() || this.stop();
                });
            }
          : i;
      }
      clearListeners() {
        for (let t in this.events) this.events[t].clear();
      }
      attach(t, e) {
        (this.passiveEffect = t), (this.stopPassiveEffect = e);
      }
      set(t) {
        this.passiveEffect
          ? this.passiveEffect(t, this.updateAndNotify)
          : this.updateAndNotify(t);
      }
      setWithVelocity(t, e, i) {
        this.set(e),
          (this.prev = void 0),
          (this.prevFrameValue = t),
          (this.prevUpdatedAt = this.updatedAt - i);
      }
      jump(t, e = !0) {
        this.updateAndNotify(t),
          (this.prev = t),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          e && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(t) {
        this.dependents || (this.dependents = new Set()),
          this.dependents.add(t);
      }
      removeDependent(t) {
        this.dependents && this.dependents.delete(t);
      }
      get() {
        return ew && ew.push(this), this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        let t = ex.now();
        if (
          !this.canTrackVelocity ||
          void 0 === this.prevFrameValue ||
          t - this.updatedAt > 30
        )
          return 0;
        let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return eb(
          parseFloat(this.current) - parseFloat(this.prevFrameValue),
          e
        );
      }
      start(t) {
        return (
          this.stop(),
          new Promise((e) => {
            (this.hasAnimated = !0),
              (this.animation = t(e)),
              this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation();
          })
        );
      }
      stop() {
        this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation();
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
    }
    function eT(t, e) {
      return new eS(t, e);
    }
    let eA = [...tg, Y, tt],
      eP = new WeakMap();
    function eE(t) {
      return null !== t && "object" == typeof t && "function" == typeof t.start;
    }
    function ek(t) {
      return "string" == typeof t || Array.isArray(t);
    }
    let eC = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      eM = ["initial", ...eC];
    function eD(t) {
      return eE(t.animate) || eM.some((e) => ek(t[e]));
    }
    function eV(t) {
      return !!(eD(t) || t.variants);
    }
    let ej = { current: null },
      eR = { current: !1 },
      eB = "u" > typeof window;
    function eF() {
      if (((eR.current = !0), eB))
        if (window.matchMedia) {
          let t = window.matchMedia("(prefers-reduced-motion)"),
            e = () => (ej.current = t.matches);
          t.addEventListener("change", e), e();
        } else ej.current = !1;
    }
    function eL(t) {
      let e = [{}, {}];
      return (
        t?.values.forEach((t, i) => {
          (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
        }),
        e
      );
    }
    function eI(t, e, i, s) {
      if ("function" == typeof e) {
        let [n, r] = eL(s);
        e = e(void 0 !== i ? i : t.custom, n, r);
      }
      if (
        ("string" == typeof e && (e = t.variants && t.variants[e]),
        "function" == typeof e)
      ) {
        let [n, r] = eL(s);
        e = e(void 0 !== i ? i : t.custom, n, r);
      }
      return e;
    }
    let eO = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      eU = {};
    class e$ {
      scrapeMotionValuesFromProps(t, e, i) {
        return {};
      }
      constructor(
        {
          parent: t,
          props: e,
          presenceContext: i,
          reducedMotionConfig: s,
          skipAnimations: n,
          blockInitialAnimation: r,
          visualState: o,
        },
        a = {}
      ) {
        (this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = t5),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.hasBeenMounted = !1),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let t = ex.now();
            this.renderScheduledAt < t &&
              ((this.renderScheduledAt = t), tz.render(this.render, !1, !0));
          });
        const { latestValues: l, renderState: h } = o;
        (this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = e.initial ? { ...l } : {}),
          (this.renderState = h),
          (this.parent = t),
          (this.props = e),
          (this.presenceContext = i),
          (this.depth = t ? t.depth + 1 : 0),
          (this.reducedMotionConfig = s),
          (this.skipAnimationsConfig = n),
          (this.options = a),
          (this.blockInitialAnimation = !!r),
          (this.isControllingVariants = eD(e)),
          (this.isVariantNode = eV(e)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
          e,
          {},
          this
        );
        for (const t in d) {
          const e = d[t];
          void 0 !== l[t] && tm(e) && e.set(l[t]);
        }
      }
      mount(t) {
        if (this.hasBeenMounted)
          for (let t in this.initialValues)
            this.values.get(t)?.jump(this.initialValues[t]),
              (this.latestValues[t] = this.initialValues[t]);
        (this.current = t),
          eP.set(t, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(t),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !0)
            : (eR.current || eF(), (this.shouldReduceMotion = ej.current)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext),
          (this.hasBeenMounted = !0);
      }
      unmount() {
        for (let t in (this.projection && this.projection.unmount(),
        tY(this.notifyUpdate),
        tY(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[t].clear();
        for (let t in this.features) {
          let e = this.features[t];
          e && (e.unmount(), (e.isMounted = !1));
        }
        this.current = null;
      }
      addChild(t) {
        this.children.add(t),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(t);
      }
      removeChild(t) {
        this.children.delete(t),
          this.enteringChildren && this.enteringChildren.delete(t);
      }
      bindToMotionValue(t, e) {
        let i;
        if (
          (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
          e.accelerate && ey.has(t) && this.current instanceof HTMLElement)
        ) {
          let {
              factory: i,
              keyframes: s,
              times: n,
              ease: r,
              duration: o,
            } = e.accelerate,
            a = new ef({
              element: this.current,
              name: t,
              keyframes: s,
              times: n,
              ease: r,
              duration: t7(o),
            }),
            l = i(a);
          this.valueSubscriptions.set(t, () => {
            l(), a.cancel();
          });
          return;
        }
        let s = E.has(t);
        s && this.onBindTransform && this.onBindTransform();
        let n = e.on("change", (e) => {
          (this.latestValues[t] = e),
            this.props.onUpdate && tz.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender();
        });
        "u" > typeof window &&
          window.MotionCheckAppearSync &&
          (i = window.MotionCheckAppearSync(this, t, e)),
          this.valueSubscriptions.set(t, () => {
            n(), i && i();
          });
      }
      sortNodePosition(t) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === t.type
          ? this.sortInstanceNodePosition(this.current, t.current)
          : 0;
      }
      updateFeatures() {
        let t = "animation";
        for (t in eU) {
          let e = eU[t];
          if (!e) continue;
          let { isEnabled: i, Feature: s } = e;
          if (
            (!this.features[t] &&
              s &&
              i(this.props) &&
              (this.features[t] = new s(this)),
            this.features[t])
          ) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : tp();
      }
      getStaticValue(t) {
        return this.latestValues[t];
      }
      setStaticValue(t, e) {
        this.latestValues[t] = e;
      }
      update(t, e) {
        (t.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = t),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = e);
        for (let e = 0; e < eO.length; e++) {
          let i = eO[e];
          this.propEventSubscriptions[i] &&
            (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
          let s = t["on" + i];
          s && (this.propEventSubscriptions[i] = this.on(i, s));
        }
        (this.prevMotionValues = (function (t, e, i) {
          for (let s in e) {
            let n = e[s],
              r = i[s];
            if (tm(n)) t.addValue(s, n);
            else if (tm(r)) t.addValue(s, eT(n, { owner: t }));
            else if (r !== n)
              if (t.hasValue(s)) {
                let e = t.getValue(s);
                !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
              } else {
                let e = t.getStaticValue(s);
                t.addValue(s, eT(void 0 !== e ? e : n, { owner: t }));
              }
          }
          for (let s in i) void 0 === e[s] && t.removeValue(s);
          return e;
        })(
          this,
          this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
          this.prevMotionValues
        )),
          this.handleChildMotionValue && this.handleChildMotionValue();
      }
      getProps() {
        return this.props;
      }
      getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
      }
      addVariantChild(t) {
        let e = this.getClosestVariantNode();
        if (e)
          return (
            e.variantChildren && e.variantChildren.add(t),
            () => e.variantChildren.delete(t)
          );
      }
      addValue(t, e) {
        let i = this.values.get(t);
        e !== i &&
          (i && this.removeValue(t),
          this.bindToMotionValue(t, e),
          this.values.set(t, e),
          (this.latestValues[t] = e.get()));
      }
      removeValue(t) {
        this.values.delete(t);
        let e = this.valueSubscriptions.get(t);
        e && (e(), this.valueSubscriptions.delete(t)),
          delete this.latestValues[t],
          this.removeValueFromRenderState(t, this.renderState);
      }
      hasValue(t) {
        return this.values.has(t);
      }
      getValue(t, e) {
        if (this.props.values && this.props.values[t])
          return this.props.values[t];
        let i = this.values.get(t);
        return (
          void 0 === i &&
            void 0 !== e &&
            ((i = eT(null === e ? void 0 : e, { owner: this })),
            this.addValue(t, i)),
          i
        );
      }
      readValue(t, e) {
        let i =
          void 0 === this.latestValues[t] && this.current
            ? this.getBaseTargetFromProps(this.props, t) ??
              this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        if (null != i) {
          let s, n;
          if (
            "string" == typeof i &&
            ((s = i),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s) ||
              ((n = i), /^0[^.\s]+$/u.test(n)))
          )
            i = parseFloat(i);
          else {
            let s;
            (s = i), !eA.find(ty(s)) && tt.test(e) && (i = t3(t, e));
          }
          this.setBaseTarget(t, tm(i) ? i.get() : i);
        }
        return tm(i) ? i.get() : i;
      }
      setBaseTarget(t, e) {
        this.baseTarget[t] = e;
      }
      getBaseTarget(t) {
        let e,
          { initial: i } = this.props;
        if ("string" == typeof i || "object" == typeof i) {
          let s = eI(this.props, i, this.presenceContext?.custom);
          s && (e = s[t]);
        }
        if (i && void 0 !== e) return e;
        let s = this.getBaseTargetFromProps(this.props, t);
        return void 0 === s || tm(s)
          ? void 0 !== this.initialValues[t] && void 0 === e
            ? void 0
            : this.baseTarget[t]
          : s;
      }
      on(t, e) {
        return (
          this.events[t] || (this.events[t] = new et()), this.events[t].add(e)
        );
      }
      notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e);
      }
      scheduleRenderMicrotask() {
        eg.render(this.render);
      }
    }
    class eN extends e$ {
      constructor() {
        super(...arguments), (this.KeyframeResolver = t6);
      }
      sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1;
      }
      getBaseTargetFromProps(t, e) {
        let i = t.style;
        return i ? i[e] : void 0;
      }
      removeValueFromRenderState(t, { vars: e, style: i }) {
        delete e[t], delete i[t];
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        let { children: t } = this.props;
        tm(t) &&
          (this.childSubscription = t.on("change", (t) => {
            this.current && (this.current.textContent = `${t}`);
          }));
      }
    }
    function eW(t) {
      return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
    }
    let eq = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
      eG = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      eH = P.length;
    function ez(t, e, i) {
      let { style: s, vars: n, transformOrigin: r } = t,
        o = !1,
        a = !1;
      for (let t in e) {
        let i = e[t];
        if (E.has(t)) {
          o = !0;
          continue;
        }
        if (tS(t)) {
          n[t] = i;
          continue;
        }
        {
          let e = eq(i, ta[t]);
          t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (s[t] = e);
        }
      }
      if (
        (!e.transform &&
          (o || i
            ? (s.transform = (function (t, e, i) {
                let s = "",
                  n = !0;
                for (let r = 0; r < eH; r++) {
                  let o = P[r],
                    a = t[o];
                  if (void 0 === a) continue;
                  let l = !0;
                  if ("number" == typeof a) l = a === +!!o.startsWith("scale");
                  else {
                    let t = parseFloat(a);
                    l = o.startsWith("scale") ? 1 === t : 0 === t;
                  }
                  if (!l || i) {
                    let t = eq(a, ta[o]);
                    if (!l) {
                      n = !1;
                      let e = eG[o] || o;
                      s += `${e}(${t}) `;
                    }
                    i && (e[o] = t);
                  }
                }
                let r = t.pathRotation;
                return (
                  r && ((n = !1), (s += `rotate(${eq(r, ta.pathRotation)}) `)),
                  (s = s.trim()),
                  i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
                  s
                );
              })(e, t.transform, i))
            : s.transform && (s.transform = "none")),
        a)
      ) {
        let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
        s.transformOrigin = `${t} ${e} ${i}`;
      }
    }
    let eY = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      eX = { offset: "strokeDashoffset", array: "strokeDasharray" },
      eK = [
        "transform",
        "opacity",
        "offsetDistance",
        "offsetPath",
        "offsetRotate",
        "offsetAnchor",
      ];
    function e_(
      t,
      {
        attrX: e,
        attrY: i,
        attrScale: s,
        pathLength: n,
        pathSpacing: r = 1,
        pathOffset: o = 0,
        ...a
      },
      l,
      h,
      u
    ) {
      if ((ez(t, a, h), l)) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return;
      }
      (t.attrs = t.style), (t.style = {});
      let { attrs: d, style: c } = t;
      for (let t of eK) void 0 !== d[t] && ((c[t] = d[t]), delete d[t]);
      (c.transform || d.transformOrigin) &&
        ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
        delete d.transformOrigin),
        c.transform &&
          ((c.transformBox = u?.transformBox ?? "fill-box"),
          delete d.transformBox),
        void 0 !== e && (d.x = e),
        void 0 !== i && (d.y = i),
        void 0 !== s && (d.scale = s),
        void 0 !== n &&
          (function (t, e, i = 1, s = 0, n = !0) {
            t.pathLength = 1;
            let r = n ? eY : eX;
            (t[r.offset] = `${-s}`), (t[r.array] = `${e} ${i}`);
          })(d, n, r, o, !1);
    }
    let eZ = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      eQ = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    function eJ(t, { style: e, vars: i }, s, n) {
      let r,
        o = t.style;
      for (r in e) o[r] = e[r];
      for (r in (n?.applyProjectionStyles(o, s), i)) o.setProperty(r, i[r]);
    }
    let e0 = [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomRightRadius",
      "borderBottomLeftRadius",
    ];
    function e1(t, e) {
      return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
    }
    let e5 = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!W.test(t)) return t;
            else t = parseFloat(t);
          let i = e1(t, e.target.x),
            s = e1(t, e.target.y);
          return `${i}% ${s}%`;
        },
      },
      e2 = (t, e, i) => t + (e - t) * i,
      e3 = {
        borderRadius: { ...e5, applyTo: [...e0] },
        borderTopLeftRadius: e5,
        borderTopRightRadius: e5,
        borderBottomLeftRadius: e5,
        borderBottomRightRadius: e5,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = tt.parse(t);
            if (s.length > 5) return t;
            let n = tt.createTransformer(t),
              r = +("number" != typeof s[0]),
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + r] /= o), (s[1 + r] /= a);
            let l = e2(o, a, 0.5);
            return (
              "number" == typeof s[2 + r] && (s[2 + r] /= l),
              "number" == typeof s[3 + r] && (s[3 + r] /= l),
              n(s)
            );
          },
        },
      };
    function e4(t, { layout: e, layoutId: i }) {
      return (
        E.has(t) ||
        t.startsWith("origin") ||
        ((e || void 0 !== i) && (!!e3[t] || "opacity" === t))
      );
    }
    function e6(t, e, i) {
      let s = t.style,
        n = e?.style,
        r = {};
      if (!s) return r;
      for (let e in s)
        (tm(s[e]) ||
          (n && tm(n[e])) ||
          e4(e, t) ||
          i?.getValue(e)?.liveStyle !== void 0) &&
          (r[e] = s[e]);
      return r;
    }
    function e7(t, e, i) {
      let s = e6(t, e, i);
      for (let i in t)
        (tm(t[i]) || tm(e[i])) &&
          (s[
            -1 !== P.indexOf(i)
              ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
              : i
          ] = t[i]);
      return s;
    }
    class e8 extends eN {
      constructor() {
        super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = tp);
      }
      getBaseTargetFromProps(t, e) {
        return t[e];
      }
      readValueFromInstance(t, e) {
        if (E.has(e)) {
          let t = th(e);
          return (t && t.default) || 0;
        }
        if (eK.includes(e)) {
          let i = getComputedStyle(t)[e];
          if ("string" == typeof i && i) return i.trim();
        }
        return (e = eZ.has(e) ? e : eW(e)), t.getAttribute(e);
      }
      scrapeMotionValuesFromProps(t, e, i) {
        return e7(t, e, i);
      }
      build(t, e, i) {
        e_(t, e, this.isSVGTag, i.transformTemplate, i.style);
      }
      renderInstance(t, e, i, s) {
        for (let i in (eJ(t, e, void 0, s), e.attrs))
          t.setAttribute(eZ.has(i) ? i : eW(i), e.attrs[i]);
      }
      mount(t) {
        (this.isSVGTag = eQ(t.tagName)), super.mount(t);
      }
    }
    function e9({ top: t, left: e, right: i, bottom: s }) {
      return { x: { min: e, max: i }, y: { min: t, max: s } };
    }
    function it(t) {
      return void 0 === t || 1 === t;
    }
    function ie({ scale: t, scaleX: e, scaleY: i }) {
      return !it(t) || !it(e) || !it(i);
    }
    function ii(t) {
      return (
        ie(t) ||
        is(t) ||
        t.z ||
        t.rotate ||
        t.rotateX ||
        t.rotateY ||
        t.skewX ||
        t.skewY
      );
    }
    function is(t) {
      var e, i;
      return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
    }
    function ir(t, e, i, s, n) {
      return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
    }
    function io(t, e = 0, i = 1, s, n) {
      (t.min = ir(t.min, e, i, s, n)), (t.max = ir(t.max, e, i, s, n));
    }
    function ia(t, { x: e, y: i }) {
      io(t.x, e.translate, e.scale, e.originPoint),
        io(t.y, i.translate, i.scale, i.originPoint);
    }
    function il(t, e) {
      (t.min += e), (t.max += e);
    }
    function ih(t, e, i, s, n = 0.5) {
      let r = e2(t.min, t.max, n);
      io(t, e, i, r, s);
    }
    function iu(t, e) {
      return "string" == typeof t ? (parseFloat(t) / 100) * (e.max - e.min) : t;
    }
    function id(t, e, i) {
      let s = i ?? t;
      ih(t.x, iu(e.x, s.x), e.scaleX, e.scale, e.originX),
        ih(t.y, iu(e.y, s.y), e.scaleY, e.scale, e.originY);
    }
    function ic(t, e) {
      return e9(
        (function (t, e) {
          if (!e) return t;
          let i = e({ x: t.left, y: t.top }),
            s = e({ x: t.right, y: t.bottom });
          return { top: i.y, left: i.x, bottom: s.y, right: s.x };
        })(t.getBoundingClientRect(), e)
      );
    }
    class ip extends eN {
      constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = eJ);
      }
      mount(t) {
        tb(t.style), super.mount(t);
      }
      readValueFromInstance(t, e) {
        if (E.has(e))
          return this.projection?.isProjecting
            ? tF(e)
            : ((t, e) => {
                let { transform: i = "none" } = getComputedStyle(t);
                return tL(i, e);
              })(t, e);
        {
          let i = window.getComputedStyle(t),
            s = (tS(e) ? i.getPropertyValue(e) : i[e]) || 0;
          return "string" == typeof s ? s.trim() : s;
        }
      }
      measureInstanceViewportBox(t, { transformPagePoint: e }) {
        return ic(t, e);
      }
      build(t, e, i) {
        ez(t, e, i.transformTemplate);
      }
      scrapeMotionValuesFromProps(t, e, i) {
        return e6(t, e, i);
      }
    }
    let im = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function iy(t) {
      if ("string" != typeof t || t.includes("-"));
      else if (im.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
      return !1;
    }
    let ig = (0, a.createContext)({ strict: !1 }),
      iv = (0, a.createContext)({});
    function ix(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    }
    let ib = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function iw(t, e, i) {
      for (let s in e) tm(e[s]) || e4(s, i) || (t[s] = e[s]);
    }
    let iS = () => ({ ...ib(), attrs: {} }),
      iT = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "propagate",
        "ignoreStrict",
        "viewport",
      ]);
    function iA(t) {
      return (
        t.startsWith("while") ||
        (t.startsWith("drag") && "draggable" !== t) ||
        t.startsWith("layout") ||
        t.startsWith("onTap") ||
        t.startsWith("onPan") ||
        t.startsWith("onLayout") ||
        iT.has(t)
      );
    }
    function iP(t) {
      return tm(t) ? t.get() : t;
    }
    let iE = (t) => (e, i) => {
        let s = (0, a.useContext)(iv),
          n = (0, a.useContext)(d),
          r = () =>
            (function (
              { scrapeMotionValuesFromProps: t, createRenderState: e },
              i,
              s,
              n
            ) {
              return {
                latestValues: (function (t, e, i, s) {
                  let n = {},
                    r = s(t, {});
                  for (let t in r) n[t] = iP(r[t]);
                  let { initial: o, animate: a } = t,
                    l = eD(t),
                    h = eV(t);
                  e &&
                    h &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let u = !!i && !1 === i.initial,
                    d = (u = u || !1 === o) ? a : o;
                  if (d && "boolean" != typeof d && !eE(d)) {
                    let e = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < e.length; i++) {
                      let s = eI(t, e[i]);
                      if (s) {
                        let { transitionEnd: t, transition: e, ...i } = s;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = u ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let e in t) n[e] = t[e];
                      }
                    }
                  }
                  return n;
                })(i, s, n, t),
                renderState: e(),
              };
            })(t, e, s, n);
        return i ? r() : h(r);
      },
      ik = iE({ scrapeMotionValuesFromProps: e6, createRenderState: ib }),
      iC = iE({ scrapeMotionValuesFromProps: e7, createRenderState: iS }),
      iM = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      iD = !1;
    function iV() {
      return (
        !(function () {
          if (iD) return;
          let t = {};
          for (let e in iM)
            t[e] = { isEnabled: (t) => iM[e].some((e) => !!t[e]) };
          (eU = t), (iD = !0);
        })(),
        eU
      );
    }
    let ij = Symbol.for("motionComponentSymbol"),
      iR = "data-" + eW("framerAppearId"),
      iB = (0, a.createContext)({});
    function iF(t) {
      return (
        t &&
        "object" == typeof t &&
        Object.prototype.hasOwnProperty.call(t, "current")
      );
    }
    function iL(t, { forwardMotionProps: e = !1, type: i } = {}, s, r) {
      s &&
        (function (t) {
          let e = iV();
          for (let i in t) e[i] = { ...e[i], ...t[i] };
          eU = e;
        })(s);
      let o = i ? "svg" === i : iy(t),
        h = o ? iC : ik;
      function c(i, s) {
        var c;
        let p,
          m,
          y,
          g = {
            ...(0, a.useContext)(f),
            ...i,
            layoutId: (function ({ layoutId: t }) {
              let e = (0, a.useContext)(l).id;
              return e && void 0 !== t ? e + "-" + t : t;
            })(i),
          },
          { isStatic: v, isValidProp: x } = g,
          b = (function (t) {
            let { initial: e, animate: i } = (function (t, e) {
              if (eD(t)) {
                let { initial: e, animate: i } = t;
                return {
                  initial: !1 === e || ek(e) ? e : void 0,
                  animate: ek(i) ? i : void 0,
                };
              }
              return !1 !== t.inherit ? e : {};
            })(t, (0, a.useContext)(iv));
            return (0, a.useMemo)(
              () => ({ initial: e, animate: i }),
              [ix(e), ix(i)]
            );
          })(i),
          w = h(i, v);
        if (!v && "u" > typeof window) {
          (0, a.useContext)(ig).strict;
          let e = (function (t) {
            let { drag: e, layout: i } = iV();
            if (!e && !i) return {};
            let s = { ...e, ...i };
            return {
              MeasureLayout:
                e?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
              ProjectionNode: s.ProjectionNode,
            };
          })(g);
          (p = e.MeasureLayout),
            (b.visualElement = (function (t, e, i, s, n, r) {
              let { visualElement: o } = (0, a.useContext)(iv),
                l = (0, a.useContext)(ig),
                h = (0, a.useContext)(d),
                c = (0, a.useContext)(f),
                p = c.reducedMotion,
                m = c.skipAnimations,
                y = (0, a.useRef)(null),
                g = (0, a.useRef)(!1);
              (s = s || l.renderer),
                !y.current &&
                  s &&
                  ((y.current = s(t, {
                    visualState: e,
                    parent: o,
                    props: i,
                    presenceContext: h,
                    blockInitialAnimation: !!h && !1 === h.initial,
                    reducedMotionConfig: p,
                    skipAnimations: m,
                    isSVG: r,
                  })),
                  g.current &&
                    y.current &&
                    (y.current.manuallyAnimateOnMount = !0));
              let v = y.current,
                x = (0, a.useContext)(iB);
              v &&
                !v.projection &&
                n &&
                ("html" === v.type || "svg" === v.type) &&
                (function (t, e, i, s) {
                  let {
                    layoutId: n,
                    layout: r,
                    drag: o,
                    dragConstraints: a,
                    layoutScroll: l,
                    layoutRoot: h,
                    layoutAnchor: u,
                    layoutCrossfade: d,
                  } = e;
                  (t.projection = new i(
                    t.latestValues,
                    e["data-framer-portal-id"]
                      ? void 0
                      : (function t(e) {
                          if (e)
                            return !1 !== e.options.allowProjection
                              ? e.projection
                              : t(e.parent);
                        })(t.parent)
                  )),
                    t.projection.setOptions({
                      layoutId: n,
                      layout: r,
                      alwaysMeasureLayout: !!o || (a && iF(a)),
                      visualElement: t,
                      animationType: "string" == typeof r ? r : "both",
                      initialPromotionConfig: s,
                      crossfade: d,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: u,
                    });
                })(y.current, i, n, x);
              let b = (0, a.useRef)(!1);
              (0, a.useInsertionEffect)(() => {
                v && b.current && v.update(i, h);
              });
              let w = i[iR],
                S = (0, a.useRef)(
                  !!w &&
                    "u" > typeof window &&
                    !window.MotionHandoffIsComplete?.(w) &&
                    window.MotionHasOptimisedAnimation?.(w)
                );
              return (
                u(() => {
                  (g.current = !0),
                    v &&
                      ((b.current = !0),
                      (window.MotionIsMounted = !0),
                      v.updateFeatures(),
                      v.scheduleRenderMicrotask(),
                      S.current &&
                        v.animationState &&
                        v.animationState.animateChanges());
                }),
                (0, a.useEffect)(() => {
                  v &&
                    (!S.current &&
                      v.animationState &&
                      v.animationState.animateChanges(),
                    S.current &&
                      (queueMicrotask(() => {
                        window.MotionHandoffMarkAsComplete?.(w);
                      }),
                      (S.current = !1)),
                    (v.enteringChildren = void 0));
                }),
                v
              );
            })(t, w, g, r, e.ProjectionNode, o));
        }
        return (0, n.jsxs)(iv.Provider, {
          value: b,
          children: [
            p && b.visualElement
              ? (0, n.jsx)(p, { visualElement: b.visualElement, ...g })
              : null,
            (function (t, e, i, { latestValues: s }, n, r = !1, o, l) {
              let h = (
                  o ?? iy(t)
                    ? function (t, e, i, s) {
                        let n = (0, a.useMemo)(() => {
                          let i = iS();
                          return (
                            e_(i, e, eQ(s), t.transformTemplate, t.style),
                            { ...i.attrs, style: { ...i.style } }
                          );
                        }, [e]);
                        if (t.style) {
                          let e = {};
                          iw(e, t.style, t), (n.style = { ...e, ...n.style });
                        }
                        return n;
                      }
                    : function (t, e) {
                        let i,
                          s,
                          n = {},
                          r =
                            ((i = t.style || {}),
                            iw((s = {}), i, t),
                            Object.assign(
                              s,
                              (function ({ transformTemplate: t }, e) {
                                return (0, a.useMemo)(() => {
                                  let i = ib();
                                  return (
                                    ez(i, e, t),
                                    Object.assign({}, i.vars, i.style)
                                  );
                                }, [e]);
                              })(t, e)
                            ),
                            s);
                        return (
                          t.drag &&
                            !1 !== t.dragListener &&
                            ((n.draggable = !1),
                            (r.userSelect =
                              r.WebkitUserSelect =
                              r.WebkitTouchCallout =
                                "none"),
                            (r.touchAction =
                              !0 === t.drag
                                ? "none"
                                : `pan-${"x" === t.drag ? "y" : "x"}`)),
                          void 0 === t.tabIndex &&
                            (t.onTap || t.onTapStart || t.whileTap) &&
                            (n.tabIndex = 0),
                          (n.style = r),
                          n
                        );
                      }
                )(e, s, n, t),
                u = (function (t, e, i, s) {
                  let n = {};
                  for (let r in t)
                    ("values" !== r || "object" != typeof t.values) &&
                      !tm(t[r]) &&
                      ((r.startsWith("on") ? !iA(r) : s?.(r) ?? !iA(r)) ||
                        (!0 === i && iA(r)) ||
                        (!e && !iA(r)) ||
                        (t.draggable && r.startsWith("onDrag"))) &&
                      (n[r] = t[r]);
                  return n;
                })(e, "string" == typeof t, r, l),
                d = t !== a.Fragment ? { ...u, ...h, ref: i } : {},
                { children: c } = e,
                p = (0, a.useMemo)(() => (tm(c) ? c.get() : c), [c]);
              return (0, a.createElement)(t, { ...d, children: p });
            })(
              t,
              i,
              ((c = b.visualElement),
              (m = (0, a.useRef)(s)),
              (0, a.useInsertionEffect)(() => {
                m.current = s;
              }),
              (y = (0, a.useRef)(null)),
              (0, a.useCallback)(
                (t) => {
                  t && w.onMount?.(t), c && (t ? c.mount(t) : c.unmount());
                  let e = m.current;
                  if ("function" == typeof e)
                    if (t) {
                      let i = e(t);
                      "function" == typeof i && (y.current = i);
                    } else y.current ? (y.current(), (y.current = null)) : e(t);
                  else e && (e.current = t);
                },
                [c]
              )),
              w,
              v,
              e,
              o,
              x
            ),
          ],
        });
      }
      c.displayName = `motion.${
        "string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`
      }`;
      let p = (0, a.forwardRef)(c);
      return (p[ij] = t), p;
    }
    class iI {
      constructor(t) {
        (this.isMounted = !1), (this.node = t);
      }
      update() {}
    }
    function iO(t, e, i) {
      let s = t.getProps();
      return eI(s, e, void 0 !== i ? i : s.custom, t);
    }
    function iU(t, e) {
      if (t?.inherit && e) {
        let { inherit: i, ...s } = t;
        return { ...e, ...s };
      }
      return t;
    }
    function i$(t, e) {
      let i = t?.[e] ?? t?.default ?? t;
      return i !== t ? iU(i, t) : i;
    }
    let iN = (t) => Array.isArray(t);
    function iW(t, e) {
      let i = t.getValue("willChange");
      if (tm(i) && i.add) return i.add(e);
      if (!i && tq.WillChange) {
        let i = new tq.WillChange("auto");
        t.addValue("willChange", i), i.add(e);
      }
    }
    let iq = (...t) => t.reduce((t, e) => (i) => e(t(i)));
    function iG(t, e, i) {
      return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
        ? t + (e - t) * 6 * i
        : i < 0.5
        ? e
        : i < 2 / 3
        ? t + (e - t) * (2 / 3 - i) * 6
        : t;
    }
    function iH(t, e) {
      return (i) => (i > 0 ? e : t);
    }
    let iz = (t, e, i) => {
        let s = t * t,
          n = i * (e * e - s) + s;
        return n < 0 ? 0 : Math.sqrt(n);
      },
      iY = [O, I, z];
    function iX(t) {
      let e = iY.find((e) => e.test(t));
      if (
        (tx(
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        ),
        !e)
      )
        return !1;
      let i = e.parse(t);
      return (
        e === z &&
          (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
            (t /= 360), (i /= 100);
            let n = 0,
              r = 0,
              o = 0;
            if ((e /= 100)) {
              let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                a = 2 * i - s;
              (n = iG(a, s, t + 1 / 3)),
                (r = iG(a, s, t)),
                (o = iG(a, s, t - 1 / 3));
            } else n = r = o = i;
            return {
              red: Math.round(255 * n),
              green: Math.round(255 * r),
              blue: Math.round(255 * o),
              alpha: s,
            };
          })(i)),
        i
      );
    }
    let iK = (t, e) => {
        let i = iX(t),
          s = iX(e);
        if (!i || !s) return iH(t, e);
        let n = { ...i };
        return (t) => (
          (n.red = iz(i.red, s.red, t)),
          (n.green = iz(i.green, s.green, t)),
          (n.blue = iz(i.blue, s.blue, t)),
          (n.alpha = e2(i.alpha, s.alpha, t)),
          I.transform(n)
        );
      },
      i_ = new Set(["none", "hidden"]);
    function iZ(t, e) {
      return (i) => e2(t, e, i);
    }
    function iQ(t) {
      return "number" == typeof t
        ? iZ
        : "string" == typeof t
        ? tA(t)
          ? iH
          : Y.test(t)
          ? iK
          : i1
        : Array.isArray(t)
        ? iJ
        : "object" == typeof t
        ? Y.test(t)
          ? iK
          : i0
        : iH;
    }
    function iJ(t, e) {
      let i = [...t],
        s = i.length,
        n = t.map((t, i) => iQ(t)(t, e[i]));
      return (t) => {
        for (let e = 0; e < s; e++) i[e] = n[e](t);
        return i;
      };
    }
    function i0(t, e) {
      let i = { ...t, ...e },
        s = {};
      for (let n in i)
        void 0 !== t[n] && void 0 !== e[n] && (s[n] = iQ(t[n])(t[n], e[n]));
      return (t) => {
        for (let e in s) i[e] = s[e](t);
        return i;
      };
    }
    let i1 = (t, e) => {
      let i = tt.createTransformer(e),
        s = Q(t),
        n = Q(e);
      if (
        !(
          s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
        )
      )
        return (
          tx(
            `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
          ),
          iH(t, e)
        );
      if ((i_.has(t) && !n.values.length) || (i_.has(e) && !s.values.length))
        return i_.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
      return iq(
        iJ(
          (function (t, e) {
            let i = [],
              s = { color: 0, var: 0, number: 0 };
            for (let n = 0; n < e.values.length; n++) {
              let r = e.types[n],
                o = t.indexes[r][s[r]],
                a = t.values[o] ?? 0;
              (i[n] = a), s[r]++;
            }
            return i;
          })(s, n),
          n.values
        ),
        i
      );
    };
    function i5(t, e, i) {
      return "number" == typeof t &&
        "number" == typeof e &&
        "number" == typeof i
        ? e2(t, e, i)
        : iQ(t)(t, e);
    }
    let i2 = (t) => {
      let e = ({ timestamp: e }) => t(e);
      return {
        start: (t = !0) => tz.update(e, t),
        stop: () => tY(e),
        now: () => (tX.isProcessing ? tX.timestamp : ex.now()),
      };
    };
    function i3(t, e = 50, i = 2e4, s) {
      let n = 0,
        r = t.next(n);
      for (s?.push(r.value); !r.done && n < i; )
        (n += e), (r = t.next(n)), s?.push(r.value);
      return n >= i ? 1 / 0 : n;
    }
    let i4 = 0.01,
      i6 = 2,
      i7 = 0.005,
      i8 = 0.5;
    function i9(t, e) {
      return t * Math.sqrt(1 - e * e);
    }
    let st = ["duration", "bounce"],
      se = ["stiffness", "damping", "mass"];
    function si(t, e) {
      return e.some((e) => void 0 !== t[e]);
    }
    function ss(t = 0.3, e = 0.3) {
      let i,
        s,
        n =
          "object" != typeof t
            ? { visualDuration: t, keyframes: [0, 1], bounce: e }
            : t,
        { restSpeed: r, restDelta: o } = n,
        a = n.keyframes[0],
        l = n.keyframes[n.keyframes.length - 1],
        h = { done: !1, value: a },
        {
          stiffness: u,
          damping: d,
          mass: c,
          duration: p,
          velocity: m,
          isResolvedFromDuration: f,
        } = (function (t) {
          let e = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...t,
          };
          if (!si(t, se) && si(t, st))
            if (((e.velocity = 0), t.visualDuration)) {
              let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                s = i * i,
                n = 2 * k(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
              e = { ...e, mass: 1, stiffness: s, damping: n };
            } else {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.3,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                tx(t7(10));
                let o = 1 - e;
                (o = k(0.05, 1, o)),
                  (t = k(0.01, 10, t / 1e3)),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / i9(e, o)) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o * t,
                          r = o * o * e * e * t,
                          a = Math.exp(-s),
                          l = i9(e * e, o);
                        return (
                          ((s * i + i - r) * a * (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = t7(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = a * a * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })({ ...t, velocity: 0 });
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
          return e;
        })({ ...n, velocity: -((n.velocity || 0) / 1e3) }),
        y = m || 0,
        g = d / (2 * Math.sqrt(u * c)),
        v = l - a,
        x = Math.sqrt(u / c) / 1e3,
        b = g * x,
        w = 5 > Math.abs(v);
      if ((r || (r = w ? i4 : i6), o || (o = w ? i7 : i8), g < 1)) {
        let t = i9(x, g),
          e = (y + b * v) / t,
          n = b * e + v * t,
          r = b * v - e * t,
          o = -1,
          a = 0,
          h = 0,
          u = (i) => {
            if (i !== o) {
              o = i;
              let s = Math.exp(-b * i),
                u = Math.sin(t * i),
                d = Math.cos(t * i);
              (a = l - s * (e * u + v * d)), (h = s * (n * u + r * d));
            }
          };
        (i = (t) => (u(t), a)), (s = (t) => (u(t), h));
      } else if (1 === g) {
        i = (t) => l - Math.exp(-x * t) * (v + (y + x * v) * t);
        let t = y + x * v;
        s = (e) => Math.exp(-x * e) * (x * t * e - y);
      } else {
        let t = x * Math.sqrt(g * g - 1);
        i = (e) => {
          let i = Math.exp(-b * e),
            s = Math.min(t * e, 300);
          return (
            l - (i * ((y + b * v) * Math.sinh(s) + t * v * Math.cosh(s))) / t
          );
        };
        let e = (y + b * v) / t,
          n = b * e - v * t,
          r = b * v - e * t;
        s = (e) => {
          let i = Math.exp(-b * e),
            s = Math.min(t * e, 300);
          return i * (n * Math.sinh(s) + r * Math.cosh(s));
        };
      }
      let S = {
        calculatedDuration: (f && p) || null,
        velocity: (t) => t7(s(t)),
        next: (t) => {
          let e = i(t);
          return (
            f
              ? (h.done = t >= p)
              : (h.done = Math.abs(t7(s(t))) <= r && Math.abs(l - e) <= o),
            (h.value = h.done ? l : e),
            h
          );
        },
        toString: () => {
          let t = Math.min(i3(S), 2e4),
            e = ed((e) => S.next(t * e).value, t, 30);
          return t + "ms " + e;
        },
        toTransition: () => {},
      };
      return S;
    }
    function sn({
      keyframes: t,
      velocity: e = 0,
      power: i = 0.8,
      timeConstant: s = 325,
      bounceDamping: n = 10,
      bounceStiffness: r = 500,
      modifyTarget: o,
      min: a,
      max: l,
      restDelta: h = 0.5,
      restSpeed: u,
    }) {
      let d,
        c,
        p = t[0],
        m = { done: !1, value: p },
        f = i * e,
        y = p + f,
        g = void 0 === o ? y : o(y);
      g !== y && (f = g - p);
      let v = (t) => -f * Math.exp(-t / s),
        x = (t) => {
          let e = v(t);
          (m.done = Math.abs(e) <= h), (m.value = m.done ? g : g + e);
        },
        b = (t) => {
          let e;
          if ((e = m.value) < a || e > l) {
            var i;
            (d = t),
              (c = ss({
                keyframes: [
                  m.value,
                  ((i = m.value),
                  void 0 === a
                    ? l
                    : void 0 === l || Math.abs(a - i) < Math.abs(l - i)
                    ? a
                    : l),
                ],
                velocity: (-v(t) / s) * 1e3,
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              }));
          }
        };
      return (
        b(0),
        {
          calculatedDuration: null,
          next: (t) => {
            let e = !1;
            return (c || void 0 !== d || ((e = !0), x(t), b(t)),
            void 0 !== d && t >= d)
              ? c.next(t - d)
              : (e || x(t), m);
          },
        }
      );
    }
    ss.applyToOptions = (t) => {
      let e = (function (t, e = 100, i) {
        let s = i({ ...t, keyframes: [0, e] }),
          n = Math.min(i3(s), 2e4);
        return {
          type: "keyframes",
          ease: (t) => s.next(n * t).value / e,
          duration: n / 1e3,
        };
      })(t, 100, ss);
      return (
        (t.ease = e.ease),
        (t.duration = t7(e.duration)),
        (t.type = "keyframes"),
        t
      );
    };
    let sr = (t, e, i) =>
      (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    function so(t, e, i, s) {
      return t === e && i === s
        ? tW
        : (n) =>
            0 === n || 1 === n
              ? n
              : sr(
                  (function (t, e, i, s, n) {
                    let r,
                      o,
                      a = 0;
                    do
                      (r = sr((o = e + (i - e) / 2), s, n) - t) > 0
                        ? (i = o)
                        : (e = o);
                    while (Math.abs(r) > 1e-7 && ++a < 12);
                    return o;
                  })(n, 0, 1, t, i),
                  e,
                  s
                );
    }
    let sa = so(0.42, 0, 1, 1),
      sl = so(0, 0, 0.58, 1),
      sh = so(0.42, 0, 0.58, 1),
      su = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
      sd = (t) => (e) => 1 - t(1 - e),
      sc = so(0.33, 1.53, 0.69, 0.99),
      sp = sd(sc),
      sm = su(sp),
      sf = (t) =>
        t >= 1
          ? 1
          : (t *= 2) < 1
          ? 0.5 * sp(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
      sy = (t) => 1 - Math.sin(Math.acos(t)),
      sg = sd(sy),
      sv = su(sy),
      sx = {
        linear: tW,
        easeIn: sa,
        easeInOut: sh,
        easeOut: sl,
        circIn: sy,
        circInOut: sv,
        circOut: sg,
        backIn: sp,
        backInOut: sm,
        backOut: sc,
        anticipate: sf,
      },
      sb = (t) => {
        if (eh(t)) {
          tb(t.length);
          let [e, i, s, n] = t;
          return so(e, i, s, n);
        }
        return "string" == typeof t
          ? (tb(sx[t], `Invalid easing type '${t}'`), sx[t])
          : t;
      },
      sw = (t, e, i) => {
        let s = e - t;
        return s ? (i - t) / s : 1;
      };
    function sS({
      duration: t = 300,
      keyframes: e,
      times: i,
      ease: s = "easeInOut",
    }) {
      var n;
      let r,
        o = Array.isArray(s) && "number" != typeof s[0] ? s.map(sb) : sb(s),
        a = { done: !1, value: e[0] },
        l = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
          let r = t.length;
          if ((tb(e.length), 1 === r)) return () => e[0];
          if (2 === r && e[0] === e[1]) return () => e[1];
          let o = t[0] === t[1];
          t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
          let a = (function (t, e, i) {
              let s = [],
                n = i || tq.mix || i5,
                r = t.length - 1;
              for (let i = 0; i < r; i++) {
                let r = n(t[i], t[i + 1]);
                e && (r = iq(Array.isArray(e) ? e[i] || tW : e, r)), s.push(r);
              }
              return s;
            })(e, s, n),
            l = a.length,
            h = (i) => {
              if (o && i < t[0]) return e[0];
              let s = 0;
              if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
              let n = sw(t[s], t[s + 1], i);
              return a[s](n);
            };
          return i ? (e) => h(k(t[0], t[r - 1], e)) : h;
        })(
          ((n =
            i && i.length === e.length
              ? i
              : (!(function (t, e) {
                  let i = t[t.length - 1];
                  for (let s = 1; s <= e; s++) {
                    let n = sw(0, e, s);
                    t.push(e2(i, 1, n));
                  }
                })((r = [0]), e.length - 1),
                r)),
          n.map((e) => e * t)),
          e,
          {
            ease: Array.isArray(o)
              ? o
              : e.map(() => o || sh).splice(0, e.length - 1),
          }
        );
      return {
        calculatedDuration: t,
        next: (e) => ((a.value = l(e)), (a.done = e >= t), a),
      };
    }
    let sT = { decay: sn, inertia: sn, tween: sS, keyframes: sS, spring: ss };
    function sA(t) {
      "string" == typeof t.type && (t.type = sT[t.type]);
    }
    let sP = (t) => t / 100;
    class sE extends el {
      constructor(t) {
        super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.delayState = { done: !1, value: void 0 }),
          (this.stop = () => {
            let { motionValue: t } = this.options;
            t && t.updatedAt !== ex.now() && this.tick(ex.now()),
              (this.isStopped = !0),
              "idle" !== this.state &&
                (this.teardown(), this.options.onStop?.());
          }),
          (this.options = t),
          this.initAnimation(),
          this.play(),
          !1 === t.autoplay && this.pause();
      }
      initAnimation() {
        let { options: t } = this;
        sA(t);
        let {
            type: e = sS,
            repeat: i = 0,
            repeatDelay: s = 0,
            repeatType: n,
            velocity: r = 0,
          } = t,
          { keyframes: o } = t,
          a = e || sS;
        a !== sS &&
          "number" != typeof o[0] &&
          ((this.mixKeyframes = iq(sP, i5(o[0], o[1]))), (o = [0, 100]));
        let l = a({ ...t, keyframes: o });
        "mirror" === n &&
          (this.mirroredGenerator = a({
            ...t,
            keyframes: [...o].reverse(),
            velocity: -r,
          })),
          null === l.calculatedDuration && (l.calculatedDuration = i3(l));
        let { calculatedDuration: h } = l;
        (this.calculatedDuration = h),
          (this.resolvedDuration = h + s),
          (this.totalDuration = this.resolvedDuration * (i + 1) - s),
          (this.generator = l);
      }
      updateTime(t) {
        let e = Math.round(t - this.startTime) * this.playbackSpeed;
        null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = e);
      }
      tick(t, e = !1) {
        let i,
          {
            generator: s,
            totalDuration: n,
            mixKeyframes: r,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l,
          } = this;
        if (null === this.startTime) return s.next(0);
        let {
          delay: h = 0,
          keyframes: u,
          repeat: d,
          repeatType: c,
          repeatDelay: p,
          type: m,
          onUpdate: f,
          finalKeyframe: y,
        } = this.options;
        this.speed > 0
          ? (this.startTime = Math.min(this.startTime, t))
          : this.speed < 0 &&
            (this.startTime = Math.min(t - n / this.speed, this.startTime)),
          e ? (this.currentTime = t) : this.updateTime(t);
        let g = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
          v = this.playbackSpeed >= 0 ? g < 0 : g > n;
        (this.currentTime = Math.max(g, 0)),
          "finished" === this.state &&
            null === this.holdTime &&
            (this.currentTime = n);
        let x = this.currentTime,
          b = s;
        if (d) {
          let t = Math.min(this.currentTime, n) / a,
            e = Math.floor(t),
            i = t % 1;
          !i && t >= 1 && (i = 1),
            1 === i && e--,
            (e = Math.min(e, d + 1)) % 2 &&
              ("reverse" === c
                ? ((i = 1 - i), p && (i -= p / a))
                : "mirror" === c && (b = o)),
            (x = k(0, 1, i) * a);
        }
        v
          ? ((this.delayState.value = u[0]), (i = this.delayState))
          : (i = b.next(x)),
          r && !v && (i.value = r(i.value));
        let { done: w } = i;
        v ||
          null === l ||
          (w =
            this.playbackSpeed >= 0
              ? this.currentTime >= n
              : this.currentTime <= 0);
        let S =
          null === this.holdTime &&
          ("finished" === this.state || ("running" === this.state && w));
        return (
          S && m !== sn && (i.value = ea(u, this.options, y, this.speed)),
          f && f(i.value),
          S && this.finish(),
          i
        );
      }
      then(t, e) {
        return this.finished.then(t, e);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: t = 0 } = this.options || {};
        return this.duration + t / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(t) {
        (t = t7(t)),
          (this.currentTime = t),
          null === this.startTime ||
          null !== this.holdTime ||
          0 === this.playbackSpeed
            ? (this.holdTime = t)
            : this.driver &&
              (this.startTime = this.driver.now() - t / this.playbackSpeed),
          this.driver
            ? this.driver.start(!1)
            : ((this.startTime = 0),
              (this.state = "paused"),
              (this.holdTime = t),
              this.tick(t));
      }
      getGeneratorVelocity() {
        let t,
          e = this.currentTime;
        if (e <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(e);
        let i = this.generator.next(e).value;
        return eb(
          i - ((t) => this.generator.next(t).value)((t = Math.max(e - 5, 0))),
          e - t
        );
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(t) {
        let e = this.playbackSpeed !== t;
        e && this.driver && this.updateTime(ex.now()),
          (this.playbackSpeed = t),
          e && this.driver && (this.time = this.currentTime / 1e3);
      }
      play() {
        if (this.isStopped) return;
        let { driver: t = i2, startTime: e } = this.options;
        this.driver || (this.driver = t((t) => this.tick(t))),
          this.options.onPlay?.();
        let i = this.driver.now();
        "finished" === this.state
          ? (this.updateFinished(), (this.startTime = i))
          : null !== this.holdTime
          ? (this.startTime = i - this.holdTime)
          : this.startTime || (this.startTime = e ?? i),
          "finished" === this.state &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start();
      }
      pause() {
        (this.state = "paused"),
          this.updateTime(ex.now()),
          (this.holdTime = this.currentTime);
      }
      complete() {
        "running" !== this.state && this.play(),
          (this.state = "finished"),
          (this.holdTime = null);
      }
      finish() {
        this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          this.options.onComplete?.();
      }
      cancel() {
        (this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          this.options.onCancel?.();
      }
      teardown() {
        (this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null);
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(t) {
        return (this.startTime = 0), this.tick(t, !0);
      }
      attachTimeline(t) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          this.driver?.stop(),
          t.observe(this)
        );
      }
    }
    let sk = { anticipate: sf, backInOut: sm, circInOut: sv };
    class sC extends ef {
      constructor(t) {
        !(function (t) {
          "string" == typeof t.ease && t.ease in sk && (t.ease = sk[t.ease]);
        })(t),
          sA(t),
          super(t),
          void 0 !== t.startTime &&
            !1 !== t.autoplay &&
            (this.startTime = t.startTime),
          (this.options = t);
      }
      updateMotionValue(t) {
        let {
          motionValue: e,
          onUpdate: i,
          onComplete: s,
          element: n,
          ...r
        } = this.options;
        if (!e) return;
        if (void 0 !== t) return void e.set(t);
        let o = new sE({ ...r, autoplay: !1 }),
          a = Math.max(10, ex.now() - this.startTime),
          l = k(0, 10, a - 10),
          h = o.sample(a).value,
          { name: u } = this.options;
        n && u && ee(n, u, h),
          e.setWithVelocity(o.sample(Math.max(0, a - l)).value, h, l),
          o.stop();
      }
    }
    let sM = (t, e) =>
      "zIndex" !== e &&
      !!(
        "number" == typeof t ||
        Array.isArray(t) ||
        ("string" == typeof t &&
          (tt.test(t) || "0" === t) &&
          !t.startsWith("url("))
      );
    function sD(t) {
      (t.duration = 0), (t.type = "keyframes");
    }
    let sV = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
      sj = new Set([
        "color",
        "backgroundColor",
        "outlineColor",
        "fill",
        "stroke",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
      ]),
      sR = ei(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class sB extends el {
      constructor({
        autoplay: t = !0,
        delay: e = 0,
        type: i = "keyframes",
        repeat: s = 0,
        repeatDelay: n = 0,
        repeatType: r = "loop",
        keyframes: o,
        name: a,
        motionValue: l,
        element: h,
        ...u
      }) {
        super(),
          (this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()),
              this.keyframeResolver?.cancel();
          }),
          (this.createdAt = ex.now());
        const d = {
            autoplay: t,
            delay: e,
            type: i,
            repeat: s,
            repeatDelay: n,
            repeatType: r,
            name: a,
            motionValue: l,
            element: h,
            ...u,
          },
          c = h?.KeyframeResolver || t5;
        (this.keyframeResolver = new c(
          o,
          (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
          a,
          l,
          h
        )),
          this.keyframeResolver?.scheduleResolve();
      }
      onKeyframesResolved(t, e, i, s) {
        let n;
        this.keyframeResolver = void 0;
        let {
          name: r,
          type: o,
          velocity: a,
          delay: l,
          isHandoff: h,
          onUpdate: u,
        } = i;
        this.resolvedAt = ex.now();
        let d = !0;
        !(function (t, e, i, s) {
          let n = t[0];
          if (null === n) return !1;
          if ("display" === e || "visibility" === e) return !0;
          let r = t[t.length - 1],
            o = sM(n, e),
            a = sM(r, e);
          return (
            tx(
              `You are trying to animate ${e} from "${n}" to "${r}". "${
                o ? r : n
              }" is not an animatable value.`
            ),
            !!o &&
              !!a &&
              ((function (t) {
                let e = t[0];
                if (1 === t.length) return !0;
                for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
              })(t) ||
                (("spring" === i || em(i)) && s))
          );
        })(t, r, o, a) &&
          ((d = !1),
          (tq.instantAnimations || !l) && u?.(ea(t, i, e)),
          (t[0] = t[t.length - 1]),
          sD(i),
          (i.repeat = 0));
        let c = {
            startTime: s
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: e,
            ...i,
            keyframes: t,
          },
          p =
            d &&
            !h &&
            (function (t) {
              let {
                  motionValue: e,
                  name: i,
                  repeatDelay: s,
                  repeatType: n,
                  damping: r,
                  type: o,
                  keyframes: a,
                } = t,
                l = e?.owner?.current;
              if (!(l instanceof HTMLElement) && !(l instanceof SVGElement))
                return !1;
              let { onUpdate: h, transformTemplate: u } = e.owner.getProps();
              return (
                sR() &&
                i &&
                (ey.has(i) ||
                  (sj.has(i) &&
                    (function (t) {
                      for (let e = 0; e < t.length; e++)
                        if ("string" == typeof t[e] && sV.test(t[e])) return !0;
                      return !1;
                    })(a))) &&
                ("transform" !== i || !u) &&
                !h &&
                !s &&
                "mirror" !== n &&
                0 !== r &&
                "inertia" !== o
              );
            })(c),
          m = c.motionValue?.owner?.current;
        if (p)
          try {
            n = new sC({ ...c, element: m });
          } catch {
            n = new sE(c);
          }
        else n = new sE(c);
        n.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(tW),
          this.pendingTimeline &&
            ((this.stopTimeline = n.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = n);
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(t, e) {
        return this.finished.finally(t).then(() => {});
      }
      get animation() {
        return (
          this._animation ||
            (this.keyframeResolver?.resume(), (tJ = !0), t1(), t0(), (tJ = !1)),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(t) {
        this.animation.time = t;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(t) {
        this.animation.speed = t;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(t) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(t))
            : (this.pendingTimeline = t),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        this._animation && this.animation.cancel(),
          this.keyframeResolver?.cancel();
      }
    }
    let sF = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      sL = { type: "keyframes", duration: 0.8 },
      sI = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      sO = new Set([
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ]),
      sU =
        (t, e, i, s = {}, n, r) =>
        (o) => {
          let a = i$(s, t) || {},
            l = a.delay || s.delay || 0,
            { elapsed: h = 0 } = s;
          h -= t7(l);
          let u = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function (t) {
            for (let e in t) if (!sO.has(e)) return !0;
            return !1;
          })(a) &&
            Object.assign(
              u,
              ((t, { keyframes: e }) =>
                e.length > 2
                  ? sL
                  : E.has(t)
                  ? t.startsWith("scale")
                    ? {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10,
                      }
                    : sF
                  : sI)(t, u)
            ),
            u.duration && (u.duration = t7(u.duration)),
            u.repeatDelay && (u.repeatDelay = t7(u.repeatDelay)),
            void 0 !== u.from && (u.keyframes[0] = u.from);
          let d = !1;
          if (
            ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
              (sD(u), 0 === u.delay && (d = !0)),
            (tq.instantAnimations ||
              tq.skipAnimations ||
              n?.shouldSkipAnimations ||
              a.skipAnimations) &&
              ((d = !0), sD(u), (u.delay = 0)),
            (u.allowFlatten = !a.type && !a.ease),
            d && !r && void 0 !== e.get())
          ) {
            let t = ea(u.keyframes, a);
            if (void 0 !== t)
              return void tz.update(() => {
                u.onUpdate(t), u.onComplete();
              });
          }
          return a.isSync ? new sE(u) : new sB(u);
        },
      s$ = "u" > typeof window;
    function sN(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
      let { transition: r, transitionEnd: o, ...a } = e,
        l = t.getDefaultTransition();
      r = r ? iU(r, l) : l;
      let h = r?.reduceMotion,
        u = r?.skipAnimations;
      s && (r = s);
      let d = [],
        c = n && t.animationState && t.animationState.getState()[n],
        p = r?.path;
      for (let e in (p && p.animateVisualElement(t, a, r, i, d), a)) {
        let s = t.getValue(e, t.latestValues[e] ?? null),
          n = a[e];
        if (
          void 0 === n ||
          (c &&
            (function ({ protectedKeys: t, needsAnimating: e }, i) {
              let s = t.hasOwnProperty(i) && !0 !== e[i];
              return (e[i] = !1), s;
            })(c, e))
        )
          continue;
        let o = { delay: i, ...i$(r || {}, e) };
        u && (o.skipAnimations = !0);
        let l = s.get();
        if (
          void 0 !== l &&
          !s.isAnimating() &&
          !Array.isArray(n) &&
          n === l &&
          !o.velocity
        ) {
          tz.update(() => s.set(n));
          continue;
        }
        let p = !1;
        if (s$ && window.MotionHandoffAnimation) {
          let i = t.props[iR];
          if (i) {
            let t = window.MotionHandoffAnimation(i, e, tz);
            null !== t && ((o.startTime = t), (p = !0));
          }
        }
        iW(t, e);
        let m = h ?? t.shouldReduceMotion;
        s.start(sU(e, s, n, m && tf.has(e) ? { type: !1 } : o, t, p));
        let f = s.animation;
        f && d.push(f);
      }
      if (o) {
        let e = () =>
          tz.update(() => {
            o &&
              (function (t, e) {
                let {
                  transitionEnd: i = {},
                  transition: s = {},
                  ...n
                } = iO(t, e) || {};
                for (let e in (n = { ...n, ...i })) {
                  var r;
                  let i = iN((r = n[e])) ? r[r.length - 1] || 0 : r;
                  t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, eT(i));
                }
              })(t, o);
          });
        d.length ? Promise.all(d).then(e) : e();
      }
      return d;
    }
    function sW(t, e, i, s = 0, n = 1) {
      let r = Array.from(t)
          .sort((t, e) => t.sortNodePosition(e))
          .indexOf(e),
        o = t.size,
        a = (o - 1) * s;
      return "function" == typeof i ? i(r, o) : 1 === n ? r * s : a - r * s;
    }
    function sq(t, e, i = {}) {
      let s = iO(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
        { transition: n = t.getDefaultTransition() || {} } = s || {};
      i.transitionOverride && (n = i.transitionOverride);
      let r = s ? () => Promise.all(sN(t, s, i)) : () => Promise.resolve(),
        o =
          t.variantChildren && t.variantChildren.size
            ? (s = 0) => {
                let {
                  delayChildren: r = 0,
                  staggerChildren: o,
                  staggerDirection: a,
                } = n;
                return (function (t, e, i = 0, s = 0, n = 0, r = 1, o) {
                  let a = [];
                  for (let l of t.variantChildren)
                    l.notify("AnimationStart", e),
                      a.push(
                        sq(l, e, {
                          ...o,
                          delay:
                            i +
                            ("function" == typeof s ? 0 : s) +
                            sW(t.variantChildren, l, s, n, r),
                        }).then(() => l.notify("AnimationComplete", e))
                      );
                  return Promise.all(a);
                })(t, e, s, r, o, a, i);
              }
            : () => Promise.resolve(),
        { when: a } = n;
      if (!a) return Promise.all([r(), o(i.delay)]);
      {
        let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
        return t().then(() => e());
      }
    }
    let sG = eM.length;
    function sH(t, e) {
      if (!Array.isArray(e)) return !1;
      let i = e.length;
      if (i !== t.length) return !1;
      for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
      return !0;
    }
    let sz = [...eC].reverse(),
      sY = eC.length;
    function sX(t = !1) {
      return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function sK() {
      return {
        animate: sX(!0),
        whileInView: sX(),
        whileHover: sX(),
        whileTap: sX(),
        whileDrag: sX(),
        whileFocus: sX(),
        exit: sX(),
      };
    }
    let s_ = 0;
    function sZ(t) {
      return [t("x"), t("y")];
    }
    function sQ(t, e, i, s = { passive: !0 }) {
      return t.addEventListener(e, i, s), () => t.removeEventListener(e, i, s);
    }
    let sJ = { x: !1, y: !1 };
    function s0(t) {
      return t.max - t.min;
    }
    function s1(t, e, i, s = 0.5) {
      (t.origin = s),
        (t.originPoint = e2(e.min, e.max, t.origin)),
        (t.scale = s0(i) / s0(e)),
        (t.translate = e2(i.min, i.max, t.origin) - t.originPoint),
        ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
          (t.scale = 1),
        ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) &&
          (t.translate = 0);
    }
    function s5(t, e, i, s) {
      s1(t.x, e.x, i.x, s ? s.originX : void 0),
        s1(t.y, e.y, i.y, s ? s.originY : void 0);
    }
    function s2(t, e, i, s = 0) {
      (t.min = (s ? e2(i.min, i.max, s) : i.min) + e.min),
        (t.max = t.min + s0(e));
    }
    function s3(t, e, i, s = 0) {
      let n = s ? e2(i.min, i.max, s) : i.min;
      (t.min = e.min - n), (t.max = t.min + s0(e));
    }
    function s4(t, e, i, s) {
      s3(t.x, e.x, i.x, s?.x), s3(t.y, e.y, i.y, s?.y);
    }
    function s6(t) {
      return c(t) && "ownerSVGElement" in t;
    }
    function s7(t, e, i) {
      if (null == t) return [];
      if (t instanceof EventTarget) return [t];
      if ("string" == typeof t) {
        let s = document;
        e && (s = e.current);
        let n = i?.[t] ?? s.querySelectorAll(t);
        return n ? Array.from(n) : [];
      }
      return Array.from(t).filter((t) => null != t);
    }
    let s8 = new WeakMap(),
      s9 = (t, e, i) => (s, n) =>
        n && n[0]
          ? n[0][t + "Size"]
          : s6(s) && "getBBox" in s
          ? s.getBBox()[e]
          : s[i],
      nt = s9("inline", "width", "offsetWidth"),
      ne = s9("block", "height", "offsetHeight");
    function ni({ target: t, borderBoxSize: e }) {
      s8.get(t)?.forEach((i) => {
        i(t, {
          get width() {
            return nt(t, e);
          },
          get height() {
            return ne(t, e);
          },
        });
      });
    }
    function ns(t) {
      t.forEach(ni);
    }
    let nn = new Set();
    function nr(t, e) {
      let n;
      return "function" == typeof t
        ? (nn.add(t),
          s ||
            ((s = () => {
              let t = {
                get width() {
                  return window.innerWidth;
                },
                get height() {
                  return window.innerHeight;
                },
              };
              nn.forEach((e) => e(t));
            }),
            window.addEventListener("resize", s)),
          () => {
            nn.delete(t),
              nn.size ||
                "function" != typeof s ||
                (window.removeEventListener("resize", s), (s = void 0));
          })
        : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(ns)),
          (n = s7(t)).forEach((t) => {
            let s = s8.get(t);
            s || ((s = new Set()), s8.set(t, s)), s.add(e), i?.observe(t);
          }),
          () => {
            n.forEach((t) => {
              let s = s8.get(t);
              s?.delete(e), s?.size || i?.unobserve(t);
            });
          });
    }
    let no = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
      na = new Set(["INPUT", "SELECT", "TEXTAREA"]),
      nl = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    function nh(t) {
      return { point: { x: t.pageX, y: t.pageY } };
    }
    function nu(t, e, i, s) {
      return sQ(t, e, (t) => nl(t) && i(t, nh(t)), s);
    }
    let nd = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
      nc = (t, e) => Math.abs(t - e),
      np = new Set(["auto", "scroll"]);
    class nm {
      constructor(
        t,
        e,
        {
          transformPagePoint: i,
          contextWindow: s = window,
          dragSnapToOrigin: n = !1,
          distanceThreshold: r = 3,
          element: o,
        } = {}
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.lastRawMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (t) => {
            this.handleScroll(t.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var t, e;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            this.lastRawMoveEventInfo &&
              (this.lastMoveEventInfo = nf(
                this.lastRawMoveEventInfo,
                this.transformPagePoint
              ));
            let i = ng(this.lastMoveEventInfo, this.history),
              s = null !== this.startEvent,
              n =
                ((t = i.offset),
                (e = { x: 0, y: 0 }),
                Math.sqrt(nc(t.x, e.x) ** 2 + nc(t.y, e.y) ** 2) >=
                  this.distanceThreshold);
            if (!s && !n) return;
            let { point: r } = i,
              { timestamp: o } = tX;
            this.history.push({ ...r, timestamp: o });
            let { onStart: a, onMove: l } = this.handlers;
            s ||
              (a && a(this.lastMoveEvent, i),
              (this.startEvent = this.lastMoveEvent)),
              l && l(this.lastMoveEvent, i);
          }),
          (this.handlePointerMove = (t, e) => {
            (this.lastMoveEvent = t),
              (this.lastRawMoveEventInfo = e),
              (this.lastMoveEventInfo = nf(e, this.transformPagePoint)),
              tz.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (t, e) => {
            this.end();
            let {
              onEnd: i,
              onSessionEnd: s,
              resumeAnimation: n,
            } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && n && n(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let r = ng(
              "pointercancel" === t.type
                ? this.lastMoveEventInfo
                : nf(e, this.transformPagePoint),
              this.history
            );
            this.startEvent && i && i(t, r), s && s(t, r);
          }),
          !nl(t))
        )
          return;
        (this.dragSnapToOrigin = n),
          (this.handlers = e),
          (this.transformPagePoint = i),
          (this.distanceThreshold = r),
          (this.contextWindow = s || window);
        const a = nf(nh(t), this.transformPagePoint),
          { point: l } = a,
          { timestamp: h } = tX;
        this.history = [{ ...l, timestamp: h }];
        const { onSessionStart: u } = e;
        u && u(t, ng(a, this.history));
        const d = { passive: !0, capture: !0 };
        (this.removeListeners = iq(
          nu(this.contextWindow, "pointermove", this.handlePointerMove, d),
          nu(this.contextWindow, "pointerup", this.handlePointerUp, d),
          nu(this.contextWindow, "pointercancel", this.handlePointerUp, d)
        )),
          o && this.startScrollTracking(o);
      }
      startScrollTracking(t) {
        let e = t.parentElement;
        for (; e; ) {
          let t = getComputedStyle(e);
          (np.has(t.overflowX) || np.has(t.overflowY)) &&
            this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
            (e = e.parentElement);
        }
        this.scrollPositions.set(window, {
          x: window.scrollX,
          y: window.scrollY,
        }),
          window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
          window.addEventListener("scroll", this.onWindowScroll),
          (this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
              window.removeEventListener("scroll", this.onWindowScroll);
          });
      }
      handleScroll(t) {
        let e = this.scrollPositions.get(t);
        if (!e) return;
        let i = t === window,
          s = i
            ? { x: window.scrollX, y: window.scrollY }
            : { x: t.scrollLeft, y: t.scrollTop },
          n = { x: s.x - e.x, y: s.y - e.y };
        (0 !== n.x || 0 !== n.y) &&
          (i
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += n.x),
              (this.lastMoveEventInfo.point.y += n.y))
            : this.history.length > 0 &&
              ((this.history[0].x -= n.x), (this.history[0].y -= n.y)),
          this.scrollPositions.set(t, s),
          tz.update(this.updatePoint, !0));
      }
      updateHandlers(t) {
        this.handlers = t;
      }
      end() {
        this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          tY(this.updatePoint);
      }
    }
    function nf(t, e) {
      return e ? { point: e(t.point) } : t;
    }
    function ny(t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function ng({ point: t }, e) {
      return {
        point: t,
        delta: ny(t, nv(e)),
        offset: ny(t, e[0]),
        velocity: (function (t) {
          if (t.length < 2) return { x: 0, y: 0 };
          let e = t.length - 1,
            i = null,
            s = nv(t);
          for (
            ;
            e >= 0 && ((i = t[e]), !(s.timestamp - i.timestamp > t7(0.1)));

          )
            e--;
          if (!i) return { x: 0, y: 0 };
          i === t[0] &&
            t.length > 2 &&
            s.timestamp - i.timestamp > 2 * t7(0.1) &&
            (i = t[1]);
          let n = (s.timestamp - i.timestamp) / 1e3;
          if (0 === n) return { x: 0, y: 0 };
          let r = { x: (s.x - i.x) / n, y: (s.y - i.y) / n };
          return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
        })(e),
      };
    }
    function nv(t) {
      return t[t.length - 1];
    }
    function nx(t, e, i) {
      return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
      };
    }
    function nb(t, e) {
      let i = e.min - t.min,
        s = e.max - t.max;
      return (
        e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
      );
    }
    function nw(t, e, i) {
      return { min: nS(t, e), max: nS(t, i) };
    }
    function nS(t, e) {
      return "number" == typeof t ? t : t[e] || 0;
    }
    let nT = new WeakMap();
    class nA {
      constructor(t) {
        (this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = tp()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = t);
      }
      start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
        let { presenceContext: s } = this.visualElement;
        if (s && !1 === s.isPresent) return;
        let n = (t) => {
            e && this.snapToCursor(nh(t).point), this.stopAnimation();
          },
          r = (t, e) => {
            let {
              drag: i,
              dragPropagation: s,
              onDragStart: n,
            } = this.getProps();
            if (
              i &&
              !s &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (t) {
                if ("x" === t || "y" === t)
                  if (sJ[t]) return null;
                  else
                    return (
                      (sJ[t] = !0),
                      () => {
                        sJ[t] = !1;
                      }
                    );
                return sJ.x || sJ.y
                  ? null
                  : ((sJ.x = sJ.y = !0),
                    () => {
                      sJ.x = sJ.y = !1;
                    });
              })(i)),
              !this.openDragLock)
            )
              return;
            (this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              sZ((t) => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (N.test(e)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let s = i.layout.layoutBox[t];
                    s && (e = s0(s) * (parseFloat(e) / 100));
                  }
                }
                this.originPoint[t] = e;
              }),
              n && tz.update(() => n(t, e), !1, !0),
              iW(this.visualElement, "transform");
            let { animationState: r } = this.visualElement;
            r && r.setActive("whileDrag", !0);
          },
          o = (t, e) => {
            (this.latestPointerEvent = t), (this.latestPanInfo = e);
            let {
              dragPropagation: i,
              dragDirectionLock: s,
              onDirectionLock: n,
              onDrag: r,
            } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: o } = e;
            if (s && null === this.currentDirection) {
              (this.currentDirection = (function (t, e = 10) {
                let i = null;
                return (
                  Math.abs(t.y) > e
                    ? (i = "y")
                    : Math.abs(t.x) > e && (i = "x"),
                  i
                );
              })(o)),
                null !== this.currentDirection && n && n(this.currentDirection);
              return;
            }
            this.updateAxis("x", e.point, o),
              this.updateAxis("y", e.point, o),
              this.visualElement.render(),
              r && tz.update(() => r(t, e), !1, !0);
          },
          a = (t, e) => {
            (this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              this.stop(t, e),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null);
          },
          l = () => {
            let { dragSnapToOrigin: t } = this.getProps();
            (t || this.constraints) && this.startAnimation({ x: 0, y: 0 });
          },
          { dragSnapToOrigin: h } = this.getProps();
        this.panSession = new nm(
          t,
          {
            onSessionStart: n,
            onStart: r,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l,
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            distanceThreshold: i,
            contextWindow: nd(this.visualElement),
            element: this.visualElement.current,
          }
        );
      }
      stop(t, e) {
        let i = t || this.latestPointerEvent,
          s = e || this.latestPanInfo,
          n = this.isDragging;
        if ((this.cancel(), !n || !s || !i)) return;
        let { velocity: r } = s;
        this.startAnimation(r);
        let { onDragEnd: o } = this.getProps();
        o && tz.postRender(() => o(i, s));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: t, animationState: e } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.endPanSession();
        let { dragPropagation: i } = this.getProps();
        !i &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          e && e.setActive("whileDrag", !1);
      }
      endPanSession() {
        this.panSession && this.panSession.end(), (this.panSession = void 0);
      }
      updateAxis(t, e, i) {
        let { drag: s } = this.getProps();
        if (!i || !nE(t, s, this.currentDirection)) return;
        let n = this.getAxisMotionValue(t),
          r = this.originPoint[t] + i[t];
        this.constraints &&
          this.constraints[t] &&
          (r = (function (t, { min: e, max: i }, s) {
            return (
              void 0 !== e && t < e
                ? (t = s ? e2(e, t, s.min) : Math.max(t, e))
                : void 0 !== i &&
                  t > i &&
                  (t = s ? e2(i, t, s.max) : Math.min(t, i)),
              t
            );
          })(r, this.constraints[t], this.elastic[t])),
          n.set(r);
      }
      resolveConstraints() {
        let { dragConstraints: t, dragElastic: e } = this.getProps(),
          i =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          s = this.constraints;
        t && iF(t)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : t && i
          ? (this.constraints = (function (
              t,
              { top: e, left: i, bottom: s, right: n }
            ) {
              return { x: nx(t.x, i, n), y: nx(t.y, e, s) };
            })(i.layoutBox, t))
          : (this.constraints = !1),
          (this.elastic = (function (t = 0.35) {
            return (
              !1 === t ? (t = 0) : !0 === t && (t = 0.35),
              { x: nw(t, "left", "right"), y: nw(t, "top", "bottom") }
            );
          })(e)),
          s !== this.constraints &&
            !iF(t) &&
            i &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            sZ((t) => {
              var e, s;
              let n;
              !1 !== this.constraints &&
                this.getAxisMotionValue(t) &&
                (this.constraints[t] =
                  ((e = i.layoutBox[t]),
                  (s = this.constraints[t]),
                  (n = {}),
                  void 0 !== s.min && (n.min = s.min - e.min),
                  void 0 !== s.max && (n.max = s.max - e.min),
                  n));
            });
      }
      resolveRefConstraints() {
        var t;
        let { dragConstraints: e, onMeasureDragConstraints: i } =
          this.getProps();
        if (!e || !iF(e)) return !1;
        let s = e.current;
        tb();
        let { projection: n } = this.visualElement;
        if (!n || !n.layout) return !1;
        n.root && ((n.root.scroll = void 0), n.root.updateScroll());
        let r = (function (t, e, i) {
            let s = ic(t, i),
              { scroll: n } = e;
            return n && (il(s.x, n.offset.x), il(s.y, n.offset.y)), s;
          })(s, n.root, this.visualElement.getTransformPagePoint()),
          o = ((t = n.layout.layoutBox), { x: nb(t.x, r.x), y: nb(t.y, r.y) });
        if (i) {
          let t = i(
            (function ({ x: t, y: e }) {
              return { top: e.min, right: t.max, bottom: e.max, left: t.min };
            })(o)
          );
          (this.hasMutatedConstraints = !!t), t && (o = e9(t));
        }
        return o;
      }
      startAnimation(t) {
        let {
            drag: e,
            dragMomentum: i,
            dragElastic: s,
            dragTransition: n,
            dragSnapToOrigin: r,
            onDragTransitionEnd: o,
          } = this.getProps(),
          a = this.constraints || {};
        return Promise.all(
          sZ((o) => {
            if (!nE(o, e, this.currentDirection)) return;
            let l = (a && a[o]) || {};
            (!0 === r || r === o) && (l = { min: 0, max: 0 });
            let h = {
              type: "inertia",
              velocity: i ? t[o] : 0,
              bounceStiffness: s ? 200 : 1e6,
              bounceDamping: s ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...n,
              ...l,
            };
            return this.startAxisValueAnimation(o, h);
          })
        ).then(o);
      }
      startAxisValueAnimation(t, e) {
        let i = this.getAxisMotionValue(t);
        return (
          iW(this.visualElement, t),
          i.start(sU(t, i, 0, e, this.visualElement, !1))
        );
      }
      stopAnimation() {
        sZ((t) => this.getAxisMotionValue(t).stop());
      }
      getAxisMotionValue(t) {
        let e = `_drag${t.toUpperCase()}`;
        return (
          this.visualElement.getProps()[e] ||
          this.visualElement.getValue(
            t,
            this.visualElement.latestValues[t] ?? 0
          )
        );
      }
      snapToCursor(t) {
        sZ((e) => {
          let { drag: i } = this.getProps();
          if (!nE(e, i, this.currentDirection)) return;
          let { projection: s } = this.visualElement,
            n = this.getAxisMotionValue(e);
          if (s && s.layout) {
            let { min: i, max: r } = s.layout.layoutBox[e],
              o = n.get() || 0;
            n.set(t[e] - e2(i, r, 0.5) + o);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: t, dragConstraints: e } = this.getProps(),
          { projection: i } = this.visualElement;
        if (!iF(e) || !i || !this.constraints) return;
        this.stopAnimation();
        let s = { x: 0, y: 0 };
        sZ((t) => {
          let e = this.getAxisMotionValue(t);
          if (e && !1 !== this.constraints) {
            var i, n;
            let r,
              o,
              a,
              l = e.get();
            s[t] =
              ((i = { min: l, max: l }),
              (n = this.constraints[t]),
              (r = 0.5),
              (o = s0(i)),
              (a = s0(n)) > o
                ? (r = sw(n.min, n.max - o, i.min))
                : o > a && (r = sw(i.min, i.max - a, n.min)),
              k(0, 1, r));
          }
        });
        let { transformTemplate: n } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
          i.root && i.root.updateScroll(),
          i.updateLayout(),
          (this.constraints = !1),
          this.resolveConstraints(),
          sZ((e) => {
            if (!nE(e, t, null)) return;
            let i = this.getAxisMotionValue(e),
              { min: n, max: r } = this.constraints[e];
            i.set(e2(n, r, s[e]));
          }),
          this.visualElement.render();
      }
      addListeners() {
        let t;
        if (!this.visualElement.current) return;
        nT.set(this.visualElement, this);
        let e = this.visualElement.current,
          i = nu(e, "pointerdown", (t) => {
            let { drag: i, dragListener: s = !0 } = this.getProps(),
              n = t.target,
              r = n !== e && (na.has(n.tagName) || !0 === n.isContentEditable);
            i && s && !r && this.start(t);
          }),
          s = () => {
            var i, s, n;
            let r,
              o,
              { dragConstraints: a } = this.getProps();
            iF(a) &&
              a.current &&
              ((this.constraints = this.resolveRefConstraints()),
              t ||
                ((i = e),
                (s = a.current),
                (r = nr(
                  i,
                  nP((n = () => this.scalePositionWithinConstraints()))
                )),
                (o = nr(s, nP(n))),
                (t = () => {
                  r(), o();
                })));
          },
          { projection: n } = this.visualElement,
          r = n.addEventListener("measure", s);
        n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
          tz.read(s);
        let o = sQ(window, "resize", () =>
            this.scalePositionWithinConstraints()
          ),
          a = n.addEventListener(
            "didUpdate",
            ({ delta: t, hasLayoutChanged: e }) => {
              this.isDragging &&
                e &&
                (sZ((e) => {
                  let i = this.getAxisMotionValue(e);
                  i &&
                    ((this.originPoint[e] += t[e].translate),
                    i.set(i.get() + t[e].translate));
                }),
                this.visualElement.render());
            }
          );
        return () => {
          o(), i(), r(), a && a(), t && t();
        };
      }
      getProps() {
        let t = this.visualElement.getProps(),
          {
            drag: e = !1,
            dragDirectionLock: i = !1,
            dragPropagation: s = !1,
            dragConstraints: n = !1,
            dragElastic: r = 0.35,
            dragMomentum: o = !0,
          } = t;
        return {
          ...t,
          drag: e,
          dragDirectionLock: i,
          dragPropagation: s,
          dragConstraints: n,
          dragElastic: r,
          dragMomentum: o,
        };
      }
    }
    function nP(t) {
      let e = !0;
      return () => {
        if (e) {
          e = !1;
          return;
        }
        t();
      };
    }
    function nE(t, e, i) {
      return (!0 === e || e === t) && (null === i || i === t);
    }
    let nk = (t) => (e, i) => {
        t && tz.update(() => t(e, i), !1, !0);
      },
      nC = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var nM = a;
    let nD = !1;
    class nV extends nM.Component {
      componentDidMount() {
        let {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i,
            layoutId: s,
          } = this.props,
          { projection: n } = t;
        n &&
          (e.group && e.group.add(n),
          i && i.register && s && i.register(n),
          nD && n.root.didUpdate(),
          n.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          n.setOptions({
            ...n.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (nC.hasEverUpdated = !0);
      }
      getSnapshotBeforeUpdate(t) {
        let {
            layoutDependency: e,
            visualElement: i,
            drag: s,
            isPresent: n,
          } = this.props,
          { projection: r } = i;
        return (
          r &&
            ((r.isPresent = n),
            t.layoutDependency !== e &&
              r.setOptions({ ...r.options, layoutDependency: e }),
            (nD = !0),
            s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
              ? r.willUpdate()
              : this.safeToRemove(),
            t.isPresent !== n &&
              (n
                ? r.promote()
                : r.relegate() ||
                  tz.postRender(() => {
                    let t = r.getStack();
                    (t && t.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { visualElement: t, layoutAnchor: e } = this.props,
          { projection: i } = t;
        i &&
          ((i.options.layoutAnchor = e),
          i.root.didUpdate(),
          eg.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i,
          } = this.props,
          { projection: s } = t;
        (nD = !0),
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
      }
      safeToRemove() {
        let { safeToRemove: t } = this.props;
        t && t();
      }
      render() {
        return null;
      }
    }
    function nj(t) {
      let [e, i] = w(),
        s = (0, nM.useContext)(l);
      return (0, n.jsx)(nV, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: (0, nM.useContext)(iB),
        isPresent: e,
        safeToRemove: i,
      });
    }
    let nR = e0.length,
      nB = (t) => ("string" == typeof t ? parseFloat(t) : t),
      nF = (t) => "number" == typeof t || W.test(t);
    function nL(t, e) {
      return void 0 !== t[e] ? t[e] : t.borderRadius;
    }
    let nI = nU(0, 0.5, sg),
      nO = nU(0.5, 0.95, tW);
    function nU(t, e, i) {
      return (s) => (s < t ? 0 : s > e ? 1 : i(sw(t, e, s)));
    }
    function n$(t, e) {
      (t.min = e.min), (t.max = e.max);
    }
    function nN(t, e) {
      n$(t.x, e.x), n$(t.y, e.y);
    }
    function nW(t, e) {
      (t.translate = e.translate),
        (t.scale = e.scale),
        (t.originPoint = e.originPoint),
        (t.origin = e.origin);
    }
    function nq(t, e, i, s, n) {
      return (
        (t -= e),
        (t = s + (1 / i) * (t - s)),
        void 0 !== n && (t = s + (1 / n) * (t - s)),
        t
      );
    }
    function nG(t, e, [i, s, n], r, o) {
      !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
        if (
          (N.test(e) &&
            ((e = parseFloat(e)), (e = e2(o.min, o.max, e / 100) - o.min)),
          "number" != typeof e)
        )
          return;
        let a = e2(r.min, r.max, s);
        t === r && (a -= e),
          (t.min = nq(t.min, e, i, a, n)),
          (t.max = nq(t.max, e, i, a, n));
      })(t, e[i], e[s], e[n], e.scale, r, o);
    }
    let nH = ["x", "scaleX", "originX"],
      nz = ["y", "scaleY", "originY"];
    function nY(t, e, i, s) {
      nG(t.x, e, nH, i ? i.x : void 0, s ? s.x : void 0),
        nG(t.y, e, nz, i ? i.y : void 0, s ? s.y : void 0);
    }
    function nX(t) {
      return 0 === t.translate && 1 === t.scale;
    }
    function nK(t) {
      return nX(t.x) && nX(t.y);
    }
    function n_(t, e) {
      return t.min === e.min && t.max === e.max;
    }
    function nZ(t, e) {
      return (
        Math.round(t.min) === Math.round(e.min) &&
        Math.round(t.max) === Math.round(e.max)
      );
    }
    function nQ(t, e) {
      return nZ(t.x, e.x) && nZ(t.y, e.y);
    }
    function nJ(t) {
      return s0(t.x) / s0(t.y);
    }
    function n0(t, e) {
      return (
        t.translate === e.translate &&
        t.scale === e.scale &&
        t.originPoint === e.originPoint
      );
    }
    class n1 {
      constructor() {
        this.members = [];
      }
      add(t) {
        t8(this.members, t);
        for (let e = this.members.length - 1; e >= 0; e--) {
          let i = this.members[e];
          if (i === t || i === this.lead || i === this.prevLead) continue;
          let s = i.instance;
          (s && !1 !== s.isConnected) ||
            i.snapshot ||
            (t9(this.members, i), i.unmount());
        }
        t.scheduleRender();
      }
      remove(t) {
        if (
          (t9(this.members, t),
          t === this.prevLead && (this.prevLead = void 0),
          t === this.lead)
        ) {
          let t = this.members[this.members.length - 1];
          t && this.promote(t);
        }
      }
      relegate(t) {
        for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
          let t = this.members[e];
          if (!1 !== t.isPresent && t.instance?.isConnected !== !1)
            return this.promote(t), !0;
        }
        return !1;
      }
      promote(t, e) {
        let i = this.lead;
        if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
          i.updateSnapshot(), t.scheduleRender();
          let { layoutDependency: s } = i.options,
            { layoutDependency: n } = t.options;
          (void 0 === s || s !== n) &&
            ((t.resumeFrom = i),
            e && (i.preserveOpacity = !0),
            i.snapshot &&
              ((t.snapshot = i.snapshot),
              (t.snapshot.latestValues = i.animationValues || i.latestValues)),
            t.root?.isUpdating && (t.isLayoutDirty = !0)),
            !1 === t.options.crossfade && i.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((t) => {
          t.options.onExitComplete?.(),
            t.resumingFrom?.options.onExitComplete?.();
        });
      }
      scheduleRender() {
        this.members.forEach((t) => t.instance && t.scheduleRender(!1));
      }
      removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let n5 = (t, e) => t.depth - e.depth;
    class n2 {
      constructor() {
        (this.children = []), (this.isDirty = !1);
      }
      add(t) {
        t8(this.children, t), (this.isDirty = !0);
      }
      remove(t) {
        t9(this.children, t), (this.isDirty = !0);
      }
      forEach(t) {
        this.isDirty && this.children.sort(n5),
          (this.isDirty = !1),
          this.children.forEach(t);
      }
    }
    let n3 = ["", "X", "Y", "Z"],
      n4 = 0;
    function n6(t, e, i, s) {
      let { latestValues: n } = e;
      n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
    }
    function n7({
      attachResizeListener: t,
      defaultParent: e,
      measureScroll: i,
      checkIsScrollRoot: s,
      resetTransform: n,
    }) {
      return class {
        constructor(t = {}, i = e?.()) {
          (this.id = n4++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                this.nodes.forEach(rt),
                this.nodes.forEach(rh),
                this.nodes.forEach(ru),
                this.nodes.forEach(re);
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = t),
            (this.root = i ? i.root || i : this),
            (this.path = i ? [...i.path, i] : []),
            (this.parent = i),
            (this.depth = i ? i.depth + 1 : 0);
          for (let t = 0; t < this.path.length; t++)
            this.path[t].shouldResetTransform = !0;
          this.root === this && (this.nodes = new n2());
        }
        addEventListener(t, e) {
          return (
            this.eventHandlers.has(t) || this.eventHandlers.set(t, new et()),
            this.eventHandlers.get(t).add(e)
          );
        }
        notifyListeners(t, ...e) {
          let i = this.eventHandlers.get(t);
          i && i.notify(...e);
        }
        hasListeners(t) {
          return this.eventHandlers.has(t);
        }
        mount(e) {
          if (this.instance) return;
          (this.isSVG = s6(e) && !(s6(e) && "svg" === e.tagName)),
            (this.instance = e);
          let { layoutId: i, layout: s, visualElement: n } = this.options;
          if (
            (n && !n.current && n.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0),
            t)
          ) {
            let i,
              s = 0,
              n = () => (this.root.updateBlockedByResize = !1);
            tz.read(() => {
              s = window.innerWidth;
            }),
              t(e, () => {
                let t = window.innerWidth;
                if (t !== s) {
                  let e, r;
                  (s = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (e = ex.now()),
                    (r = ({ timestamp: t }) => {
                      let i = t - e;
                      i >= 250 && (tY(r), n());
                    }),
                    tz.setup(r, !0),
                    (i = () => tY(r)),
                    nC.hasAnimatedSinceResize &&
                      ((nC.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(rl));
                }
              });
          }
          i && this.root.registerSharedNode(i, this),
            !1 !== this.options.animate &&
              n &&
              (i || s) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: t,
                  hasLayoutChanged: e,
                  hasRelativeLayoutChanged: i,
                  layout: s,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let r =
                      this.options.transition || n.getDefaultTransition() || ry,
                    {
                      onLayoutAnimationStart: o,
                      onLayoutAnimationComplete: a,
                    } = n.getProps(),
                    l = !this.targetLayout || !nQ(this.targetLayout, s),
                    h = !e && i;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    h ||
                    (e && (l || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    let e = { ...i$(r, "layout"), onPlay: o, onComplete: a };
                    (n.shouldReduceMotion || this.options.layoutRoot) &&
                      ((e.delay = 0), (e.type = !1)),
                      this.startAnimation(e),
                      this.setAnimationOrigin(t, h, e.path);
                  } else
                    e || rl(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = s;
                }
              );
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          let t = this.getStack();
          t && t.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            tY(this.updateProjection);
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          !this.isUpdateBlocked() &&
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(rd),
            this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: t } = this.options;
          return t && t.getProps().transformTemplate;
        }
        willUpdate(t = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function t(e) {
                if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                let { visualElement: i } = e.options;
                if (!i) return;
                let s = i.props[iR];
                if (window.MotionHasOptimisedAnimation(s, "transform")) {
                  let { layout: t, layoutId: i } = e.options;
                  window.MotionCancelOptimisedAnimation(
                    s,
                    "transform",
                    tz,
                    !(t || i)
                  );
                }
                let { parent: n } = e;
                n && !n.hasCheckedOptimisedAppear && t(n);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let t = 0; t < this.path.length; t++) {
            let e = this.path[t];
            (e.shouldResetTransform = !0),
              ("string" == typeof e.latestValues.x ||
                "string" == typeof e.latestValues.y) &&
                (e.isLayoutDirty = !0),
              e.updateScroll("snapshot"),
              e.options.layoutRoot && e.willUpdate(!1);
          }
          let { layoutId: e, layout: i } = this.options;
          if (void 0 === e && !i) return;
          let s = this.getTransformTemplate();
          (this.prevTransformTemplateValue = s
            ? s(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            t && this.notifyListeners("willUpdate");
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            let t = this.updateBlockedByResize;
            this.unblockUpdate(),
              (this.updateBlockedByResize = !1),
              this.clearAllSnapshots(),
              t && this.nodes.forEach(rn),
              this.nodes.forEach(rs);
            return;
          }
          if (this.animationId <= this.animationCommitId)
            return void this.nodes.forEach(rr);
          (this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(ro),
                this.nodes.forEach(ra),
                this.nodes.forEach(n8),
                this.nodes.forEach(n9))
              : this.nodes.forEach(rr),
            this.clearAllSnapshots();
          let t = ex.now();
          (tX.delta = k(0, 1e3 / 60, t - tX.timestamp)),
            (tX.timestamp = t),
            (tX.isProcessing = !0),
            tK.update.process(tX),
            tK.preRender.process(tX),
            tK.render.process(tX),
            (tX.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), eg.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          this.nodes.forEach(ri), this.sharedNodes.forEach(rc);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            tz.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          tz.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              s0(this.snapshot.measuredBox.x) ||
              s0(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let t = 0; t < this.path.length; t++)
              this.path[t].updateScroll();
          let t = this.layout;
          (this.layout = this.measure(!1)),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = tp()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          let { visualElement: e } = this.options;
          e &&
            e.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              t ? t.layoutBox : void 0
            );
        }
        updateScroll(t = "measure") {
          let e = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
            e && this.instance)
          ) {
            let e = s(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: e,
              offset: i(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : e,
            };
          }
        }
        resetTransform() {
          if (!n) return;
          let t =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            e = this.projectionDelta && !nK(this.projectionDelta),
            i = this.getTransformTemplate(),
            s = i ? i(this.latestValues, "") : void 0,
            r = s !== this.prevTransformTemplateValue;
          t &&
            this.instance &&
            (e || ii(this.latestValues) || r) &&
            (n(this.instance, s),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(t = !0) {
          var e;
          let i = this.measurePageBox(),
            s = this.removeElementScroll(i);
          return (
            t && (s = this.removeTransform(s)),
            rx((e = s).x),
            rx(e.y),
            {
              animationId: this.root.animationId,
              measuredBox: i,
              layoutBox: s,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          let { visualElement: t } = this.options;
          if (!t) return tp();
          let e = t.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(rw))) {
            let { scroll: t } = this.root;
            t && (il(e.x, t.offset.x), il(e.y, t.offset.y));
          }
          return e;
        }
        removeElementScroll(t) {
          let e = tp();
          if ((nN(e, t), this.scroll?.wasRoot)) return e;
          for (let i = 0; i < this.path.length; i++) {
            let s = this.path[i],
              { scroll: n, options: r } = s;
            s !== this.root &&
              n &&
              r.layoutScroll &&
              (n.wasRoot && nN(e, t), il(e.x, n.offset.x), il(e.y, n.offset.y));
          }
          return e;
        }
        applyTransform(t, e = !1, i) {
          let s = i || tp();
          nN(s, t);
          for (let t = 0; t < this.path.length; t++) {
            let i = this.path[t];
            !e &&
              i.options.layoutScroll &&
              i.scroll &&
              i !== i.root &&
              (il(s.x, -i.scroll.offset.x), il(s.y, -i.scroll.offset.y)),
              ii(i.latestValues) && id(s, i.latestValues, i.layout?.layoutBox);
          }
          return (
            ii(this.latestValues) &&
              id(s, this.latestValues, this.layout?.layoutBox),
            s
          );
        }
        removeTransform(t) {
          let e = tp();
          nN(e, t);
          for (let t = 0; t < this.path.length; t++) {
            let i,
              s = this.path[t];
            ii(s.latestValues) &&
              (s.instance &&
                (ie(s.latestValues) && s.updateSnapshot(),
                nN((i = tp()), s.measurePageBox())),
              nY(e, s.latestValues, s.snapshot?.layoutBox, i));
          }
          return ii(this.latestValues) && nY(e, this.latestValues), e;
        }
        setTargetDelta(t) {
          (this.targetDelta = t),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(t) {
          this.options = {
            ...this.options,
            ...t,
            crossfade: void 0 === t.crossfade || t.crossfade,
          };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== tX.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(t = !1) {
          let e = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = e.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = e.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
          let i = !!this.resumingFrom || this !== e;
          if (
            !(
              t ||
              (i && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: s, layoutId: n } = this.options;
          if (!this.layout || !(s || n)) return;
          this.resolvedRelativeTargetAt = tX.timestamp;
          let r = this.getClosestProjectingParent();
          if (
            (r &&
              this.linkedParentVersion !== r.layoutVersion &&
              !r.options.layoutRoot &&
              this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (!1 !== this.options.layoutAnchor && r && r.layout
                ? this.createRelativeTarget(
                    r,
                    this.layout.layoutBox,
                    r.layout.layoutBox
                  )
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target ||
                ((this.target = tp()), (this.targetWithTransforms = tp())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target)
            ) {
              var o, a, l, h;
              this.forceRelativeParentToResolveTarget(),
                (o = this.target),
                (a = this.relativeTarget),
                (l = this.relativeParent.target),
                (h = this.options.layoutAnchor || void 0),
                s2(o.x, a.x, l.x, h?.x),
                s2(o.y, a.y, l.y, h?.y);
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? this.applyTransform(
                        this.layout.layoutBox,
                        !1,
                        this.target
                      )
                    : nN(this.target, this.layout.layoutBox),
                  ia(this.target, this.targetDelta))
                : nN(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              !1 !== this.options.layoutAnchor &&
              r &&
              !!r.resumingFrom == !!this.resumingFrom &&
              !r.options.layoutScroll &&
              r.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(r, this.target, r.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              ie(this.parent.latestValues) ||
              is(this.parent.latestValues)
            )
          )
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        createRelativeTarget(t, e, i) {
          (this.relativeParent = t),
            (this.linkedParentVersion = t.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = tp()),
            (this.relativeTargetOrigin = tp()),
            s4(
              this.relativeTargetOrigin,
              e,
              i,
              this.options.layoutAnchor || void 0
            ),
            nN(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let t = this.getLead(),
            e = !!this.resumingFrom || this !== t,
            i = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
              (i = !1),
            e &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (i = !1),
            this.resolvedRelativeTargetAt === tX.timestamp && (i = !1),
            i)
          )
            return;
          let { layout: s, layoutId: n } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(s || n))
          )
            return;
          nN(this.layoutCorrected, this.layout.layoutBox);
          let r = this.treeScale.x,
            o = this.treeScale.y;
          !(function (t, e, i, s = !1) {
            let n,
              r,
              o = i.length;
            if (o) {
              e.x = e.y = 1;
              for (let a = 0; a < o; a++) {
                r = (n = i[a]).projectionDelta;
                let { visualElement: o } = n.options;
                (!o ||
                  !o.props.style ||
                  "contents" !== o.props.style.display) &&
                  (s &&
                    n.options.layoutScroll &&
                    n.scroll &&
                    n !== n.root &&
                    (il(t.x, -n.scroll.offset.x), il(t.y, -n.scroll.offset.y)),
                  r && ((e.x *= r.x.scale), (e.y *= r.y.scale), ia(t, r)),
                  s &&
                    ii(n.latestValues) &&
                    id(t, n.latestValues, n.layout?.layoutBox));
              }
              e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
            }
          })(this.layoutCorrected, this.treeScale, this.path, e),
            t.layout &&
              !t.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((t.target = t.layout.layoutBox),
              (t.targetWithTransforms = tp()));
          let { target: a } = t;
          if (!a) {
            this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          this.projectionDelta && this.prevProjectionDelta
            ? (nW(this.prevProjectionDelta.x, this.projectionDelta.x),
              nW(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            s5(
              this.projectionDelta,
              this.layoutCorrected,
              a,
              this.latestValues
            ),
            (this.treeScale.x === r &&
              this.treeScale.y === o &&
              n0(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              n0(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", a));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(t = !0) {
          if ((this.options.visualElement?.scheduleRender(), t)) {
            let t = this.getStack();
            t && t.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          (this.prevProjectionDelta = td()),
            (this.projectionDelta = td()),
            (this.projectionDeltaWithTransform = td());
        }
        setAnimationOrigin(t, e = !1, i) {
          let s,
            n = this.snapshot,
            r = n ? n.latestValues : {},
            o = { ...this.latestValues },
            a = td();
          (this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !e);
          let l = tp(),
            h =
              (n ? n.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            u = this.getStack(),
            d = !u || u.members.length <= 1,
            c = !!(
              h &&
              !d &&
              !0 === this.options.crossfade &&
              !this.path.some(rf)
            );
          this.animationProgress = 0;
          let p = i?.interpolateProjection(t);
          (this.mixTargetDelta = (e) => {
            let i = e / 1e3,
              n = p?.(i);
            if (
              (n
                ? ((a.x.translate = n.x),
                  (a.x.scale = e2(t.x.scale, 1, i)),
                  (a.x.origin = t.x.origin),
                  (a.x.originPoint = t.x.originPoint),
                  (a.y.translate = n.y),
                  (a.y.scale = e2(t.y.scale, 1, i)),
                  (a.y.origin = t.y.origin),
                  (a.y.originPoint = t.y.originPoint))
                : (rp(a.x, t.x, i), rp(a.y, t.y, i)),
              this.setTargetDelta(a),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout)
            ) {
              var u, m, f, y, g, v;
              s4(
                l,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
                this.options.layoutAnchor || void 0
              ),
                (f = this.relativeTarget),
                (y = this.relativeTargetOrigin),
                (g = l),
                (v = i),
                rm(f.x, y.x, g.x, v),
                rm(f.y, y.y, g.y, v),
                s &&
                  ((u = this.relativeTarget),
                  (m = s),
                  n_(u.x, m.x) && n_(u.y, m.y)) &&
                  (this.isProjectionDirty = !1),
                s || (s = tp()),
                nN(s, this.relativeTarget);
            }
            h &&
              ((this.animationValues = o),
              (function (t, e, i, s, n, r) {
                n
                  ? ((t.opacity = e2(0, i.opacity ?? 1, nI(s))),
                    (t.opacityExit = e2(e.opacity ?? 1, 0, nO(s))))
                  : r && (t.opacity = e2(e.opacity ?? 1, i.opacity ?? 1, s));
                for (let n = 0; n < nR; n++) {
                  let r = e0[n],
                    o = nL(e, r),
                    a = nL(i, r);
                  (void 0 !== o || void 0 !== a) &&
                    (o || (o = 0),
                    a || (a = 0),
                    0 === o || 0 === a || nF(o) === nF(a)
                      ? ((t[r] = Math.max(e2(nB(o), nB(a), s), 0)),
                        (N.test(a) || N.test(o)) && (t[r] += "%"))
                      : (t[r] = a));
                }
                (e.rotate || i.rotate) &&
                  (t.rotate = e2(e.rotate || 0, i.rotate || 0, s));
              })(o, r, this.latestValues, i, c, d)),
              n &&
                void 0 !== n.rotate &&
                (this.animationValues || (this.animationValues = o),
                (this.animationValues.pathRotation = n.rotate)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = i);
          }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
        }
        startAnimation(t) {
          this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation &&
              (tY(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = tz.update(() => {
              var e, i, s;
              let n;
              (nC.hasAnimatedSinceResize = !0),
                this.motionValue || (this.motionValue = eT(0)),
                this.motionValue.jump(0, !1),
                (this.currentAnimation =
                  ((e = this.motionValue),
                  (i = [0, 1e3]),
                  (s = {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  }),
                  (n = tm(e) ? e : eT(e)).start(sU("", n, i, s)),
                  n.animation)),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          let t = this.getStack();
          t && t.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          let t = this.getLead(),
            {
              targetWithTransforms: e,
              target: i,
              layout: s,
              latestValues: n,
            } = t;
          if (e && i && s) {
            if (
              this !== t &&
              this.layout &&
              s &&
              rb(this.options.animationType, this.layout.layoutBox, s.layoutBox)
            ) {
              i = this.target || tp();
              let e = s0(this.layout.layoutBox.x);
              (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
              let s = s0(this.layout.layoutBox.y);
              (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
            }
            nN(e, i),
              id(e, n),
              s5(this.projectionDeltaWithTransform, this.layoutCorrected, e, n);
          }
        }
        registerSharedNode(t, e) {
          this.sharedNodes.has(t) || this.sharedNodes.set(t, new n1()),
            this.sharedNodes.get(t).add(e);
          let i = e.options.initialPromotionConfig;
          e.promote({
            transition: i ? i.transition : void 0,
            preserveFollowOpacity:
              i && i.shouldPreserveFollowOpacity
                ? i.shouldPreserveFollowOpacity(e)
                : void 0,
          });
        }
        isLead() {
          let t = this.getStack();
          return !t || t.lead === this;
        }
        getLead() {
          let { layoutId: t } = this.options;
          return (t && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: t } = this.options;
          return t ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: t } = this.options;
          if (t) return this.root.sharedNodes.get(t);
        }
        promote({
          needsReset: t,
          transition: e,
          preserveFollowOpacity: i,
        } = {}) {
          let s = this.getStack();
          s && s.promote(this, i),
            t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            e && this.setOptions({ transition: e });
        }
        relegate() {
          let t = this.getStack();
          return !!t && t.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: t } = this.options;
          if (!t) return;
          let e = !1,
            { latestValues: i } = t;
          if (
            ((i.z ||
              i.rotate ||
              i.rotateX ||
              i.rotateY ||
              i.rotateZ ||
              i.skewX ||
              i.skewY) &&
              (e = !0),
            !e)
          )
            return;
          let s = {};
          i.z && n6("z", t, s, this.animationValues);
          for (let e = 0; e < n3.length; e++)
            n6(`rotate${n3[e]}`, t, s, this.animationValues),
              n6(`skew${n3[e]}`, t, s, this.animationValues);
          for (let e in (t.render(), s))
            t.setStaticValue(e, s[e]),
              this.animationValues && (this.animationValues[e] = s[e]);
          t.scheduleRender();
        }
        applyProjectionStyles(t, e) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            t.visibility = "hidden";
            return;
          }
          let i = this.getTransformTemplate();
          if (this.needsReset) {
            (this.needsReset = !1),
              (t.visibility = ""),
              (t.opacity = ""),
              (t.pointerEvents = iP(e?.pointerEvents) || ""),
              (t.transform = i ? i(this.latestValues, "") : "none");
            return;
          }
          let s = this.getLead();
          if (!this.projectionDelta || !this.layout || !s.target) {
            this.options.layoutId &&
              ((t.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (t.pointerEvents = iP(e?.pointerEvents) || "")),
              this.hasProjected &&
                !ii(this.latestValues) &&
                ((t.transform = i ? i({}, "") : "none"),
                (this.hasProjected = !1));
            return;
          }
          t.visibility = "";
          let n = s.animationValues || s.latestValues;
          this.applyTransformsToTarget();
          let r = (function (t, e, i) {
            let s = "",
              n = t.x.translate / e.x,
              r = t.y.translate / e.y,
              o = i?.z || 0;
            if (
              ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
              (1 !== e.x || 1 !== e.y) &&
                (s += `scale(${1 / e.x}, ${1 / e.y}) `),
              i)
            ) {
              let {
                transformPerspective: t,
                rotate: e,
                pathRotation: n,
                rotateX: r,
                rotateY: o,
                skewX: a,
                skewY: l,
              } = i;
              t && (s = `perspective(${t}px) ${s}`),
                e && (s += `rotate(${e}deg) `),
                n && (s += `rotate(${n}deg) `),
                r && (s += `rotateX(${r}deg) `),
                o && (s += `rotateY(${o}deg) `),
                a && (s += `skewX(${a}deg) `),
                l && (s += `skewY(${l}deg) `);
            }
            let a = t.x.scale * e.x,
              l = t.y.scale * e.y;
            return (
              (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, n);
          i && (r = i(n, r)), (t.transform = r);
          let { x: o, y: a } = this.projectionDelta;
          for (let e in ((t.transformOrigin = `${100 * o.origin}% ${
            100 * a.origin
          }% 0`),
          s.animationValues
            ? (t.opacity =
                s === this
                  ? n.opacity ?? this.latestValues.opacity ?? 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : n.opacityExit)
            : (t.opacity =
                s === this
                  ? void 0 !== n.opacity
                    ? n.opacity
                    : ""
                  : void 0 !== n.opacityExit
                  ? n.opacityExit
                  : 0),
          e3)) {
            if (void 0 === n[e]) continue;
            let { correct: i, applyTo: o, isCSSVariable: a } = e3[e],
              l = "none" === r ? n[e] : i(n[e], s);
            if (o) {
              let e = o.length;
              for (let i = 0; i < e; i++) t[o[i]] = l;
            } else
              a
                ? (this.options.visualElement.renderState.vars[e] = l)
                : (t[e] = l);
          }
          this.options.layoutId &&
            (t.pointerEvents =
              s === this ? iP(e?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
            this.root.nodes.forEach(rs),
            this.root.sharedNodes.clear();
        }
      };
    }
    function n8(t) {
      t.updateLayout();
    }
    function n9(t) {
      let e = t.resumeFrom?.snapshot || t.snapshot;
      if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        let { layoutBox: i, measuredBox: s } = t.layout,
          { animationType: n } = t.options,
          r = e.source !== t.layout.source;
        if ("size" === n)
          sZ((t) => {
            let s = r ? e.measuredBox[t] : e.layoutBox[t],
              n = s0(s);
            (s.min = i[t].min), (s.max = s.min + n);
          });
        else if ("x" === n || "y" === n) {
          let t = "x" === n ? "y" : "x";
          n$(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
        } else
          rb(n, e.layoutBox, i) &&
            sZ((s) => {
              let n = r ? e.measuredBox[s] : e.layoutBox[s],
                o = s0(i[s]);
              (n.max = n.min + o),
                t.relativeTarget &&
                  !t.currentAnimation &&
                  ((t.isProjectionDirty = !0),
                  (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
            });
        let o = td();
        s5(o, i, e.layoutBox);
        let a = td();
        r
          ? s5(a, t.applyTransform(s, !0), e.measuredBox)
          : s5(a, i, e.layoutBox);
        let l = !nK(o),
          h = !1;
        if (!t.resumeFrom) {
          let s = t.getClosestProjectingParent();
          if (s && !s.resumeFrom) {
            let { snapshot: n, layout: r } = s;
            if (n && r) {
              let o = t.options.layoutAnchor || void 0,
                a = tp();
              s4(a, e.layoutBox, n.layoutBox, o);
              let l = tp();
              s4(l, i, r.layoutBox, o),
                nQ(a, l) || (h = !0),
                s.options.layoutRoot &&
                  ((t.relativeTarget = l),
                  (t.relativeTargetOrigin = a),
                  (t.relativeParent = s));
            }
          }
        }
        t.notifyListeners("didUpdate", {
          layout: i,
          snapshot: e,
          delta: a,
          layoutDelta: o,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: h,
        });
      } else if (t.isLead()) {
        let { onExitComplete: e } = t.options;
        e && e();
      }
      t.options.transition = void 0;
    }
    function rt(t) {
      t.parent &&
        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty ||
          (t.isSharedProjectionDirty = !!(
            t.isProjectionDirty ||
            t.parent.isProjectionDirty ||
            t.parent.isSharedProjectionDirty
          )),
        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
    }
    function re(t) {
      t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
    }
    function ri(t) {
      t.clearSnapshot();
    }
    function rs(t) {
      t.clearMeasurements();
    }
    function rn(t) {
      (t.isLayoutDirty = !0), t.updateLayout();
    }
    function rr(t) {
      t.isLayoutDirty = !1;
    }
    function ro(t) {
      t.isAnimationBlocked &&
        t.layout &&
        !t.isLayoutDirty &&
        ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
    }
    function ra(t) {
      let { visualElement: e } = t.options;
      e &&
        e.getProps().onBeforeLayoutMeasure &&
        e.notify("BeforeLayoutMeasure"),
        t.resetTransform();
    }
    function rl(t) {
      t.finishAnimation(),
        (t.targetDelta = t.relativeTarget = t.target = void 0),
        (t.isProjectionDirty = !0);
    }
    function rh(t) {
      t.resolveTargetDelta();
    }
    function ru(t) {
      t.calcProjection();
    }
    function rd(t) {
      t.resetSkewAndRotation();
    }
    function rc(t) {
      t.removeLeadSnapshot();
    }
    function rp(t, e, i) {
      (t.translate = e2(e.translate, 0, i)),
        (t.scale = e2(e.scale, 1, i)),
        (t.origin = e.origin),
        (t.originPoint = e.originPoint);
    }
    function rm(t, e, i, s) {
      (t.min = e2(e.min, i.min, s)), (t.max = e2(e.max, i.max, s));
    }
    function rf(t) {
      return t.animationValues && void 0 !== t.animationValues.opacityExit;
    }
    let ry = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      rg = (t) =>
        "u" > typeof navigator &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(t),
      rv = rg("applewebkit/") && !rg("chrome/") ? Math.round : tW;
    function rx(t) {
      (t.min = rv(t.min)), (t.max = rv(t.max));
    }
    function rb(t, e, i) {
      return (
        "position" === t ||
        ("preserve-aspect" === t && !(0.2 >= Math.abs(nJ(e) - nJ(i))))
      );
    }
    function rw(t) {
      return t !== t.root && t.scroll?.wasRoot;
    }
    let rS = n7({
        attachResizeListener: (t, e) => sQ(t, "resize", e),
        measureScroll: () => ({
          x:
            document.documentElement.scrollLeft ||
            document.body?.scrollLeft ||
            0,
          y:
            document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      rT = { current: void 0 },
      rA = n7({
        measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
        defaultParent: () => {
          if (!rT.current) {
            let t = new rS({});
            t.mount(window),
              t.setOptions({ layoutScroll: !0 }),
              (rT.current = t);
          }
          return rT.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = void 0 !== e ? e : "none";
        },
        checkIsScrollRoot: (t) =>
          "fixed" === window.getComputedStyle(t).position,
      });
    function rP(t, e) {
      let i = s7(t),
        s = new AbortController();
      return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
    }
    function rE(t, e, i) {
      let { props: s } = t;
      t.animationState &&
        s.whileHover &&
        t.animationState.setActive("whileHover", "Start" === i);
      let n = s["onHover" + i];
      n && tz.postRender(() => n(e, nh(e)));
    }
    let rk = (t, e) => !!e && (t === e || rk(t, e.parentElement)),
      rC = new WeakSet();
    function rM(t) {
      return (e) => {
        "Enter" === e.key && t(e);
      };
    }
    function rD(t, e) {
      t.dispatchEvent(
        new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
      );
    }
    function rV(t) {
      return nl(t) && !(sJ.x || sJ.y);
    }
    let rj = new WeakSet();
    function rR(t, e, i) {
      let { props: s } = t;
      if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
      t.animationState &&
        s.whileTap &&
        t.animationState.setActive("whileTap", "Start" === i);
      let n = s["onTap" + ("End" === i ? "" : i)];
      n && tz.postRender(() => n(e, nh(e)));
    }
    let rB = new WeakMap(),
      rF = new WeakMap(),
      rL = (t) => {
        let e = rB.get(t.target);
        e && e(t);
      },
      rI = (t) => {
        t.forEach(rL);
      },
      rO = { some: 0, all: 1 },
      rU = (function (t, e) {
        if ("u" < typeof Proxy) return iL;
        let i = new Map(),
          s = (i, s) => iL(i, s, t, e);
        return new Proxy((t, e) => s(t, e), {
          get: (n, r) =>
            "create" === r
              ? s
              : (i.has(r) || i.set(r, iL(r, void 0, t, e)), i.get(r)),
        });
      })(
        {
          animation: {
            Feature: class extends iI {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let s;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                )
                                  s = Promise.all(e.map((e) => sq(t, e, i)));
                                else if ("string" == typeof e) s = sq(t, e, i);
                                else {
                                  let n =
                                    "function" == typeof e
                                      ? iO(t, e, i.custom)
                                      : e;
                                  s = Promise.all(sN(t, n, i));
                                }
                                return s.then(() => {
                                  t.notify("AnimationComplete", e);
                                });
                              })(t, e, i)
                            )
                          ),
                        i = sK(),
                        s = !0,
                        n = !1,
                        r = (e) => (i, s) => {
                          let n = iO(
                            t,
                            s,
                            "exit" === e ? t.presenceContext?.custom : void 0
                          );
                          if (n) {
                            let { transition: t, transitionEnd: e, ...s } = n;
                            i = { ...i, ...s, ...e };
                          }
                          return i;
                        };
                      function o(o) {
                        let { props: a } = t,
                          l =
                            (function t(e) {
                              if (!e) return;
                              if (!e.isControllingVariants) {
                                let i = (e.parent && t(e.parent)) || {};
                                return (
                                  void 0 !== e.props.initial &&
                                    (i.initial = e.props.initial),
                                  i
                                );
                              }
                              let i = {};
                              for (let t = 0; t < sG; t++) {
                                let s = eM[t],
                                  n = e.props[s];
                                (ek(n) || !1 === n) && (i[s] = n);
                              }
                              return i;
                            })(t.parent) || {},
                          h = [],
                          u = new Set(),
                          d = {},
                          c = 1 / 0;
                        for (let e = 0; e < sY; e++) {
                          var p, m;
                          let f = sz[e],
                            y = i[f],
                            g = void 0 !== a[f] ? a[f] : l[f],
                            v = ek(g),
                            x = f === o ? y.isActive : null;
                          !1 === x && (c = e);
                          let b = g === l[f] && g !== a[f] && v;
                          if (
                            (b &&
                              (s || n) &&
                              t.manuallyAnimateOnMount &&
                              (b = !1),
                            (y.protectedKeys = { ...d }),
                            (!y.isActive && null === x) ||
                              (!g && !y.prevProp) ||
                              eE(g) ||
                              "boolean" == typeof g)
                          )
                            continue;
                          if ("exit" === f && y.isActive && !0 !== x) {
                            y.prevResolvedValues &&
                              (d = { ...d, ...y.prevResolvedValues });
                            continue;
                          }
                          let w =
                              ((p = y.prevProp),
                              "string" == typeof (m = g)
                                ? m !== p
                                : !!Array.isArray(m) && !sH(m, p)),
                            S =
                              w ||
                              (f === o && y.isActive && !b && v) ||
                              (e > c && v),
                            T = !1,
                            A = Array.isArray(g) ? g : [g],
                            P = A.reduce(r(f), {});
                          !1 === x && (P = {});
                          let { prevResolvedValues: E = {} } = y,
                            k = { ...E, ...P },
                            C = (e) => {
                              (S = !0),
                                u.has(e) && ((T = !0), u.delete(e)),
                                (y.needsAnimating[e] = !0);
                              let i = t.getValue(e);
                              i && (i.liveStyle = !1);
                            };
                          for (let t in k) {
                            let e = P[t],
                              i = E[t];
                            if (!d.hasOwnProperty(t))
                              (iN(e) && iN(i) ? !sH(e, i) || w : e !== i)
                                ? null != e
                                  ? C(t)
                                  : u.add(t)
                                : void 0 !== e && u.has(t)
                                ? C(t)
                                : (y.protectedKeys[t] = !0);
                          }
                          (y.prevProp = g),
                            (y.prevResolvedValues = P),
                            y.isActive && (d = { ...d, ...P }),
                            (s || n) && t.blockInitialAnimation && (S = !1);
                          let M = b && w,
                            D = !M || T;
                          S &&
                            D &&
                            h.push(
                              ...A.map((e) => {
                                let i = { type: f };
                                if (
                                  "string" == typeof e &&
                                  (s || n) &&
                                  !M &&
                                  t.manuallyAnimateOnMount &&
                                  t.parent
                                ) {
                                  let { parent: s } = t,
                                    n = iO(s, e);
                                  if (s.enteringChildren && n) {
                                    let { delayChildren: e } =
                                      n.transition || {};
                                    i.delay = sW(s.enteringChildren, t, e);
                                  }
                                }
                                return { animation: e, options: i };
                              })
                            );
                        }
                        if (u.size) {
                          let e = {};
                          if ("boolean" != typeof a.initial) {
                            let i = iO(
                              t,
                              Array.isArray(a.initial)
                                ? a.initial[0]
                                : a.initial
                            );
                            i && i.transition && (e.transition = i.transition);
                          }
                          u.forEach((i) => {
                            let s = t.getBaseTarget(i),
                              n = t.getValue(i);
                            n && (n.liveStyle = !0), (e[i] = s ?? null);
                          }),
                            h.push({ animation: e });
                        }
                        let f = !!h.length;
                        return (
                          s &&
                            (!1 === a.initial || a.initial === a.animate) &&
                            !t.manuallyAnimateOnMount &&
                            (f = !1),
                          (s = !1),
                          (n = !1),
                          f ? e(h) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (e, s) {
                          if (i[e].isActive === s) return Promise.resolve();
                          t.variantChildren?.forEach((t) =>
                            t.animationState?.setActive(e, s)
                          ),
                            (i[e].isActive = s);
                          let n = o(e);
                          for (let t in i) i[t].protectedKeys = {};
                          return n;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                        reset: () => {
                          (i = sK()), (n = !0);
                        },
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                eE(t) && (this.unmountControls = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {
                this.node.animationState.reset(), this.unmountControls?.();
              }
            },
          },
          exit: {
            Feature: class extends iI {
              constructor() {
                super(...arguments),
                  (this.id = s_++),
                  (this.isExitComplete = !1);
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: t, onExitComplete: e } =
                    this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i) return;
                if (t && !1 === i) {
                  if (this.isExitComplete) {
                    let { initial: t, custom: e } = this.node.getProps();
                    if (
                      "string" == typeof t ||
                      ("object" == typeof t && null !== t && !Array.isArray(t))
                    ) {
                      let i = iO(this.node, t, e);
                      if (i) {
                        let { transition: t, transitionEnd: e, ...s } = i;
                        for (let t in s) this.node.getValue(t)?.jump(s[t]);
                      }
                    }
                    this.node.animationState.reset(),
                      this.node.animationState.animateChanges();
                  } else this.node.animationState.setActive("exit", !1);
                  this.isExitComplete = !1;
                  return;
                }
                let s = this.node.animationState.setActive("exit", !t);
                e &&
                  !t &&
                  s.then(() => {
                    (this.isExitComplete = !0), e(this.id);
                  });
              }
              mount() {
                let { register: t, onExitComplete: e } =
                  this.node.presenceContext || {};
                e && e(this.id), t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends iI {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                var t;
                let e;
                this.stopObserver?.();
                let { viewport: i = {} } = this.node.getProps(),
                  { root: s, margin: n, amount: r = "some", once: o } = i,
                  a = {
                    root: s ? s.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof r ? r : rO[r],
                  },
                  l = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), o && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: s } =
                        this.node.getProps(),
                      n = e ? i : s;
                    n && n(t);
                  };
                this.stopObserver =
                  ((t = this.node.current),
                  (e = (function ({ root: t, ...e }) {
                    let i = t || document;
                    rF.has(i) || rF.set(i, {});
                    let s = rF.get(i),
                      n = JSON.stringify(e);
                    return (
                      s[n] ||
                        (s[n] = new IntersectionObserver(rI, {
                          root: t,
                          ...e,
                        })),
                      s[n]
                    );
                  })(a)),
                  rB.set(t, l),
                  e.observe(t),
                  () => {
                    rB.delete(t), e.unobserve(t);
                  });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("u" < typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                    return (i) => t[i] !== e[i];
                  })(t, e)
                ) && this.startObserver();
              }
              unmount() {
                this.stopObserver?.(),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
            },
          },
          tap: {
            Feature: class extends iI {
              mount() {
                let { current: t } = this.node;
                if (!t) return;
                let { globalTapTarget: e, propagate: i } = this.node.props;
                this.unmount = (function (t, e, i = {}) {
                  let [s, n, r] = rP(t, i),
                    o = (t) => {
                      let s = t.currentTarget;
                      if (!rV(t) || rj.has(t)) return;
                      rC.add(s), i.stopPropagation && rj.add(t);
                      let r = e(s, t),
                        o = { ...n, capture: !0 },
                        a = (t, e) => {
                          window.removeEventListener("pointerup", l, o),
                            window.removeEventListener("pointercancel", h, o),
                            rC.has(s) && rC.delete(s),
                            rV(t) &&
                              "function" == typeof r &&
                              r(t, { success: e });
                        },
                        l = (t) => {
                          a(
                            t,
                            s === window ||
                              s === document ||
                              i.useGlobalTarget ||
                              rk(s, t.target)
                          );
                        },
                        h = (t) => {
                          a(t, !1);
                        };
                      window.addEventListener("pointerup", l, o),
                        window.addEventListener("pointercancel", h, o);
                    };
                  return (
                    s.forEach((t) => {
                      ((i.useGlobalTarget ? window : t).addEventListener(
                        "pointerdown",
                        o,
                        n
                      ),
                      p(t)) &&
                        (t.addEventListener("focus", (t) =>
                          ((t, e) => {
                            let i = t.currentTarget;
                            if (!i) return;
                            let s = rM(() => {
                              if (rC.has(i)) return;
                              rD(i, "down");
                              let t = rM(() => {
                                rD(i, "up");
                              });
                              i.addEventListener("keyup", t, e),
                                i.addEventListener(
                                  "blur",
                                  () => rD(i, "cancel"),
                                  e
                                );
                            });
                            i.addEventListener("keydown", s, e),
                              i.addEventListener(
                                "blur",
                                () => i.removeEventListener("keydown", s),
                                e
                              );
                          })(t, n)
                        ),
                        no.has(t.tagName) ||
                          !0 === t.isContentEditable ||
                          t.hasAttribute("tabindex") ||
                          (t.tabIndex = 0));
                    }),
                    r
                  );
                })(
                  t,
                  (t, e) => (
                    rR(this.node, e, "Start"),
                    (t, { success: e }) =>
                      rR(this.node, t, e ? "End" : "Cancel")
                  ),
                  { useGlobalTarget: e, stopPropagation: i?.tap === !1 }
                );
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends iI {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = iq(
                  sQ(this.node.current, "focus", () => this.onFocus()),
                  sQ(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends iI {
              mount() {
                let { current: t } = this.node;
                t &&
                  (this.unmount = (function (t, e, i = {}) {
                    let [s, n, r] = rP(t, i);
                    return (
                      s.forEach((t) => {
                        let i,
                          s = !1,
                          r = !1,
                          o = (e) => {
                            i && (i(e), (i = void 0)),
                              t.removeEventListener("pointerleave", l);
                          },
                          a = (t) => {
                            (s = !1),
                              window.removeEventListener("pointerup", a),
                              window.removeEventListener("pointercancel", a),
                              r && ((r = !1), o(t));
                          },
                          l = (t) => {
                            if ("touch" !== t.pointerType) {
                              if (s) {
                                r = !0;
                                return;
                              }
                              o(t);
                            }
                          };
                        t.addEventListener(
                          "pointerenter",
                          (s) => {
                            if ("touch" === s.pointerType || sJ.x || sJ.y)
                              return;
                            r = !1;
                            let o = e(t, s);
                            "function" == typeof o &&
                              ((i = o),
                              t.addEventListener("pointerleave", l, n));
                          },
                          n
                        ),
                          t.addEventListener(
                            "pointerdown",
                            () => {
                              (s = !0),
                                window.addEventListener("pointerup", a, n),
                                window.addEventListener("pointercancel", a, n);
                            },
                            n
                          );
                      }),
                      r
                    );
                  })(
                    t,
                    (t, e) => (
                      rE(this.node, e, "Start"), (t) => rE(this.node, t, "End")
                    )
                  ));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends iI {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tW);
              }
              onPointerDown(t) {
                this.session = new nm(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: nd(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: s,
                } = this.node.getProps();
                return {
                  onSessionStart: nk(t),
                  onStart: nk(e),
                  onMove: nk(i),
                  onEnd: (t, e) => {
                    delete this.session, s && tz.postRender(() => s(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = nu(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends iI {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = tW),
                  (this.removeListeners = tW),
                  (this.controls = new nA(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tW);
              }
              update() {
                let { dragControls: t } = this.node.getProps(),
                  { dragControls: e } = this.node.prevProps || {};
                t !== e &&
                  (this.removeGroupControls(),
                  t && (this.removeGroupControls = t.subscribe(this.controls)));
              }
              unmount() {
                this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession();
              }
            },
            ProjectionNode: rA,
            MeasureLayout: nj,
          },
          layout: { ProjectionNode: rA, MeasureLayout: nj },
        },
        (t, e) =>
          e.isSVG ?? iy(t)
            ? new e8(e)
            : new ip(e, { allowProjection: t !== a.Fragment })
      );
    var r$ = t.i(64723),
      rN = t.i(59828),
      rW = t.i(20187),
      rq = t.i(86687),
      rG = t.i(90179),
      rH = t.i(17587);
    function rz({ children: t }) {
      return (0, n.jsx)("svg", {
        className: "wp-ico",
        viewBox: "0 0 24 24",
        width: 18,
        height: 18,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: t,
      });
    }
    let rY = {
        target: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "4.5" }),
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "1",
              fill: "currentColor",
              stroke: "none",
            }),
          ],
        }),
        steps: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", { d: "M4 7h10M4 12h10M4 17h10" }),
            (0, n.jsx)("path", { d: "M18 5.5v3M16.5 7h3" }),
            (0, n.jsx)("path", { d: "M17 11.5l1.6 1.6 2.4-2.6" }),
            (0, n.jsx)("path", { d: "M17 16.5l1.6 1.6 2.4-2.6" }),
          ],
        }),
        chart: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", { d: "M4 4v16h16" }),
            (0, n.jsx)("path", { d: "M7.5 15l3.5-4.5 3 2.5 4-6" }),
          ],
        }),
        grid: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("rect", {
              x: "4",
              y: "4",
              width: "6.5",
              height: "6.5",
              rx: "1",
            }),
            (0, n.jsx)("rect", {
              x: "13.5",
              y: "4",
              width: "6.5",
              height: "6.5",
              rx: "1",
            }),
            (0, n.jsx)("rect", {
              x: "4",
              y: "13.5",
              width: "6.5",
              height: "6.5",
              rx: "1",
            }),
            (0, n.jsx)("rect", {
              x: "13.5",
              y: "13.5",
              width: "6.5",
              height: "6.5",
              rx: "1",
            }),
          ],
        }),
        wallet: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", {
              d: "M3.5 8.5A2.5 2.5 0 0 1 6 6h11a2 2 0 0 1 2 2v0",
            }),
            (0, n.jsx)("rect", {
              x: "3.5",
              y: "8",
              width: "17",
              height: "11",
              rx: "2.5",
            }),
            (0, n.jsx)("path", { d: "M15.5 13.5h2" }),
          ],
        }),
        eyeOff: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", { d: "M4 4l16 16" }),
            (0, n.jsx)("path", {
              d: "M9.9 5.4A8.6 8.6 0 0 1 12 5.2c4.2 0 7.5 3 9 6.8a15 15 0 0 1-2.4 3.6",
            }),
            (0, n.jsx)("path", {
              d: "M6.4 7.6A15.4 15.4 0 0 0 3 12c1.5 3.8 4.8 6.8 9 6.8a8.7 8.7 0 0 0 3.6-.75",
            }),
            (0, n.jsx)("path", { d: "M10.2 10.4a2.5 2.5 0 0 0 3.4 3.4" }),
          ],
        }),
        trophy: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", { d: "M7.5 4h9v4.5a4.5 4.5 0 0 1-9 0V4z" }),
            (0, n.jsx)("path", { d: "M7.5 5.5H5A2 2 0 0 0 5 9.5h1" }),
            (0, n.jsx)("path", { d: "M16.5 5.5H19a2 2 0 0 1 0 4h-1" }),
            (0, n.jsx)("path", { d: "M12 13v3.5M9 20h6M10 16.5h4" }),
          ],
        }),
        map: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", {
              d: "M9 4.5 4 6.5v13l5-2 6 2 5-2v-13l-5 2-6-2z",
            }),
            (0, n.jsx)("path", { d: "M9 4.5v13M15 6.5v13" }),
          ],
        }),
        shield: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("path", {
              d: "M12 3.5 5 6v6c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V6l-7-2.5z",
            }),
            (0, n.jsx)("path", { d: "M9.2 12.2l2 2 3.6-4" }),
          ],
        }),
        at: (0, n.jsxs)(rz, {
          children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "3.6" }),
            (0, n.jsx)("path", {
              d: "M15.6 8.4v4.5a2.6 2.6 0 0 0 5.1.6A9 9 0 1 0 17.5 19",
            }),
          ],
        }),
      },
      rX = `${(100 * rG.PARAMS.rake).toFixed(1).replace(/\.0$/, "")}%`,
      rK = `${(100 * rG.PARAMS.tolerance).toFixed(0)}%`,
      r_ = `${(1 + rG.PARAMS.timingBonus).toFixed(1)}\xd7`,
      rZ = `${(100 * rG.PARAMS.editPenalty).toFixed(0)}%`,
      rQ = `${rG.PARAMS.minConviction.toFixed(2)}\xd7`,
      rJ = [
        { key: "crypto", label: "Crypto", cadence: "Hourly" },
        { key: "meme", label: "Memes", cadence: "Hourly" },
        { key: "stock", label: "Stocks", cadence: "Daily" },
        { key: "commodity", label: "Commodities", cadence: "Daily" },
        { key: "rwa", label: "RWA", cadence: "Daily" },
      ]
        .map((t) => ({
          ...t,
          symbols: rN.default
            .filter((e) => e.category === t.key)
            .map((t) => t.symbol),
        }))
        .filter((t) => t.symbols.length),
      r0 = [
        {
          id: "what-is-hop",
          label: "What is HOP",
          icon: "target",
          image: "/whitepaper/poster-5x2.webp",
          alt: "HOP poster: call the outcome",
          blocks: [
            {
              t: "lead",
              text: `${rW.BRAND.name} is a precision prediction market on ${rq.CHAIN_NAME}, an EVM L2 with chain id ${rq.CHAIN_ID}. You forecast the exact price of a stock, a crypto asset or a chain meme, you stake ${rq.USDG.symbol} on it, and your share of the pot depends on how close you land.`,
            },
            {
              t: "p",
              text: "Nobody is simply right or wrong here. A forecast that misses by a little earns a little less, and a forecast that misses by a lot earns a lot less, on a smooth curve with no cliff anywhere on it. That is the whole difference from a yes or no market: the answer is a number, so the payout is a distance.",
            },
            {
              t: "p",
              text: "Every pool names one symbol and one close time. You commit before the close, you can change your mind at a cost, and at the close the pool settles and pays out on its own.",
            },
            {
              t: "chips",
              items: [
                `Chain id ${rq.CHAIN_ID}`,
                rq.CHAIN_NAME,
                `Staked in ${rq.USDG.symbol}`,
                "EVM L2",
              ],
            },
          ],
        },
        {
          id: "how-it-works",
          label: "How it works",
          icon: "steps",
          image: "/whitepaper/holo-coins.webp",
          alt: "Holographic coins: call it right",
          blocks: [
            { t: "lead", text: "Four steps, and the last one is not yours." },
            {
              t: "ol",
              items: [
                "Pick a pool. Each one carries a symbol and a close time, like ETH at 14:00 UTC or NVDA at 00:00 UTC.",
                `Enter the price you think it will be at the close, and stake ${rq.USDG.symbol} on it.`,
                "Edit until the pool closes if you want to. Each edit costs you conviction and resets your early-entry bonus.",
                "At the close the pool settles and pays out automatically. There is nothing to claim.",
              ],
            },
            {
              t: "p",
              text: "The settlement price comes from DexScreener, reading the deepest-liquidity pool on the chain for that asset. Five samples are taken across the close and the median is used, so one wick or one thin-pool blip cannot decide who gets paid. If the feed cannot be read for six hours the pool is voided and every stake is returned.",
            },
          ],
        },
        {
          id: "scoring",
          label: "Scoring",
          icon: "chart",
          image: "/whitepaper/basket.webp",
          alt: "A basket of tokenized stocks",
          blocks: [
            {
              t: "lead",
              text: "Your score is accuracy multiplied by timing multiplied by conviction.",
            },
            {
              t: "ul",
              items: [
                `Accuracy. Being ${rK} off scores about half of a perfect hit. The curve is smooth and always positive, so there is no threshold to fall under, just less as you drift.`,
                `Timing. A forecast committed at the open is worth up to ${r_} one committed at the close. It is measured from your last change, not your first, so an edit hands that head start back.`,
                `Conviction. Every edit shaves ${rZ} off your multiplier, floored at ${rQ}. Changing your mind costs something, but it never wipes you out.`,
              ],
            },
            {
              t: "p",
              text: `Those three multiplied together, weighted by your stake, are your share of the pot. Shares are split so the payouts sum to the pot exactly, with no dust left behind and nothing overspent. ${rW.BRAND.name} takes ${rX} off the top before the split.`,
            },
            {
              t: "code",
              text: "score = accuracy × timing × conviction · share = score × stake · payout = pot × share / total share",
            },
          ],
        },
        {
          id: "markets",
          label: "Markets",
          icon: "grid",
          image: "/whitepaper/coins-settle.webp",
          alt: "Coins settling",
          blocks: [
            {
              t: "lead",
              text: "Pools are generated from one catalogue, so the list below is the list the scheduler actually runs.",
            },
            ...rJ.map((t) => ({
              t: "group",
              title: `${t.label} \xb7 ${t.cadence}`,
              items: t.symbols,
            })),
            {
              t: "p",
              text: "Crypto and memes run hourly. Stocks, commodities and RWA run daily, because the markets behind them are shut for most of the day.",
            },
          ],
        },
        {
          id: "funding",
          label: "Funding & settlement",
          icon: "wallet",
          image: "/whitepaper/banner-tablet.webp",
          alt: "HOP banner",
          blocks: [
            {
              t: "lead",
              text: `Everything is denominated in ${rq.USDG.symbol}, ${rq.USDG.name}, a ${rq.USDG.decimals}-decimal token on ${rq.CHAIN_NAME}.`,
            },
            {
              t: "p",
              text: `A deposit is an ordinary ${rq.USDG.symbol} transfer you approve in your own wallet. The dashboard builds it, your wallet shows you the amount and the destination, and nothing is credited until the transaction confirms on chain. You pay the network fee in ETH, a few cents.`,
            },
            {
              t: "p",
              text: "Withdrawals go back to the wallet you signed in with and usually land within seconds. Payouts do not need a withdrawal: when a pool settles, the money lands in your balance inside the app, and it is yours to stake again or to take out.",
            },
            {
              t: "kv",
              items: [
                [
                  "Minimum deposit",
                  `${(0, rH.fmtUnits)(rq.LIMITS.minDeposit)} ${rq.USDG.symbol}`,
                ],
                [
                  "Minimum withdrawal",
                  `${(0, rH.fmtUnits)(rq.LIMITS.minWithdraw)} ${
                    rq.USDG.symbol
                  }`,
                ],
                [
                  "Withdrawal fee",
                  `${(0, rH.fmtUnits)(rq.LIMITS.withdrawFee)} ${
                    rq.USDG.symbol
                  }, flat`,
                ],
                [`${rq.USDG.symbol} contract`, rq.USDG.address],
              ],
            },
            {
              t: "p",
              text: "The flat withdrawal fee covers the gas of the transfer that pays you. Placing a forecast and editing one are both free.",
            },
          ],
        },
        {
          id: "privacy",
          label: "Private forecasts",
          icon: "eyeOff",
          blocks: [
            {
              t: "lead",
              text: "While a pool is live, your number is nobody else's business.",
            },
            {
              t: "p",
              text: "Other participants cannot see the price you entered, and they cannot see how many times you have changed it. Both stay hidden until the pool settles, and then the whole table is public.",
            },
            {
              t: "ul",
              items: [
                "Public while a pool is live: the total staked and the number of participants.",
                "Hidden until settlement: every forecast value and every edit count, yours and everyone else's.",
                "Public after settlement: the full result table, so the payout math can be checked.",
              ],
            },
            {
              t: "p",
              text: "This is what removes the herding you get on markets where the crowd is visible. Nobody can copy your number, and you cannot copy theirs, so the pool prices what people actually believe instead of what they saw first.",
            },
            {
              t: "note",
              text: "Privacy here means privacy from other participants, not from the operator, who can read the database. The privacy policy says so plainly.",
            },
          ],
        },
        {
          id: "leaderboard",
          label: "Leaderboard",
          icon: "trophy",
          blocks: [
            {
              t: "lead",
              text: "The board ranks wallets by realised profit across settled pools, and nothing else.",
            },
            {
              t: "ul",
              items: [
                "Profit and loss, realised, across every pool a wallet has finished. This is the sort order.",
                "Pools finished, and how many of them the wallet won.",
                "Average accuracy across those pools, and the best single accuracy it has scored.",
                `Total ${rq.USDG.symbol} staked.`,
              ],
            },
            {
              t: "p",
              text: "Rank is computed over every wallet, not only the ones on screen, so a wallet outside the table still learns its position. Open pools count for nothing: a forecast only reaches the board once it has settled.",
            },
            {
              t: "links",
              items: [{ href: "/leaderboard", label: "Open the leaderboard" }],
            },
          ],
        },
        {
          id: "roadmap",
          label: "Roadmap",
          icon: "map",
          image: "/whitepaper/poster-4x5.webp",
          alt: "HOP poster: call the outcome",
          blocks: [
            { t: "badge", text: "Roadmap" },
            {
              t: "lead",
              text: "What follows is planned, not shipped. There are no dates attached to any of it.",
            },
            {
              t: "ul",
              items: [
                `Funding with more than ${rq.USDG.symbol}. USDe and tokenized stocks as stake, priced at the moment you commit.`,
                "More markets. More symbols in the categories that already run, and new categories where a reliable price exists on chain.",
                "A public API, so a bot can read pools and place forecasts without driving the dashboard.",
              ],
            },
            {
              t: "p",
              text: "Anything on this list can change or be dropped. The parts of this paper that describe the app as it stands today are the parts you can rely on.",
            },
          ],
        },
        {
          id: "policy",
          label: "Policy & privacy",
          icon: "shield",
          blocks: [
            {
              t: "lead",
              text: "A summary, and it is only a summary. The two documents themselves are the ones that count.",
            },
            {
              t: "ul",
              items: [
                `Your balance is custodial. A deposit leaves your wallet for a treasury wallet the operator controls, and your balance is a database row recording what you are owed. It is not ${rq.USDG.symbol} held in your name and not a smart-contract escrow.`,
                `Fees are ${rX} of each pool, plus a flat ${(0, rH.fmtUnits)(
                  rq.LIMITS.withdrawFee
                )} ${
                  rq.USDG.symbol
                } on a withdrawal. Placing and editing a forecast are free.`,
                "You must be 18 or older, outside the restricted jurisdictions listed in the terms, and not on a sanctions list. Using a VPN to get past the location check breaches the terms.",
                "You can lose everything you stake. Nothing here is investment advice, and tokenized stocks are used only as price references.",
                "The data collected is your wallet address, the country the request came from, and ordinary server logs. No email, no name, no identity documents, no analytics and no third-party trackers.",
                "One cookie, and it is the session. Deposits and withdrawals are chain transactions, so they are public forever and nobody can delete them.",
              ],
            },
            {
              t: "links",
              items: [
                { href: "/terms", label: "Terms of service" },
                { href: "/privacy", label: "Privacy policy" },
              ],
            },
          ],
        },
        {
          id: "socials",
          label: "Socials",
          icon: "at",
          blocks: [
            {
              t: "lead",
              text: "Where to find the project, and how to start using it.",
            },
            {
              t: "links",
              items: [
                {
                  href: rW.BRAND.xUrl,
                  label: `${rW.BRAND.name} on X`,
                  external: !0,
                },
                { href: "/", label: "Open App" },
                { href: "/docs", label: "Docs" },
              ],
            },
            {
              t: "p",
              text: "The app is the shortest way to understand the rest of this paper. Connect a wallet, read a live pool, and the scoring section stops being abstract.",
            },
          ],
        },
      ],
      r1 = new Set(r0.map((t) => t.id)),
      r5 = [0.2, 0.8, 0.2, 1],
      r2 = {
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
      },
      r3 = {
        hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: r5 },
        },
      },
      r4 = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      },
      r6 = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.05 } },
      },
      r7 = {
        hidden: { opacity: 0, x: -12 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: r5 } },
      };
    function r8({ block: t, v: e, g: i }) {
      switch (t.t) {
        case "lead":
          return (0, n.jsx)(rU.p, {
            variants: e,
            className: "wp-lead",
            children: t.text,
          });
        case "p":
          return (0, n.jsx)(rU.p, { variants: e, children: t.text });
        case "ul":
          return (0, n.jsx)(rU.ul, {
            variants: i,
            className: "wp-list",
            children: t.items.map((t) =>
              (0, n.jsx)(rU.li, { variants: e, children: t }, t)
            ),
          });
        case "ol":
          return (0, n.jsx)(rU.ol, {
            variants: i,
            className: "wp-list wp-steps",
            children: t.items.map((t) =>
              (0, n.jsx)(rU.li, { variants: e, children: t }, t)
            ),
          });
        case "chips":
          return (0, n.jsx)(rU.div, {
            variants: i,
            className: "wp-chips",
            children: t.items.map((t) =>
              (0, n.jsx)(
                rU.span,
                { variants: e, className: "wp-chip", children: t },
                t
              )
            ),
          });
        case "group":
          return (0, n.jsxs)(rU.div, {
            variants: e,
            className: "wp-group",
            children: [
              (0, n.jsx)(rU.h2, { variants: e, children: t.title }),
              (0, n.jsx)(rU.div, {
                variants: i,
                className: "wp-chips",
                children: t.items.map((t) =>
                  (0, n.jsx)(
                    rU.span,
                    { variants: e, className: "wp-chip", children: t },
                    t
                  )
                ),
              }),
            ],
          });
        case "kv":
          return (0, n.jsx)(rU.dl, {
            variants: i,
            className: "wp-kv",
            children: t.items.map(([t, i]) =>
              (0, n.jsxs)(
                rU.div,
                {
                  variants: e,
                  className: "wp-kv-row",
                  children: [
                    (0, n.jsx)("dt", { children: t }),
                    (0, n.jsx)("dd", { children: i }),
                  ],
                },
                t
              )
            ),
          });
        case "code":
          return (0, n.jsx)(rU.p, {
            variants: e,
            className: "wp-code",
            children: t.text,
          });
        case "note":
          return (0, n.jsx)(rU.p, {
            variants: e,
            className: "wp-note",
            children: t.text,
          });
        case "badge":
          return (0, n.jsx)(rU.p, {
            variants: e,
            className: "wp-badge",
            children: t.text,
          });
        case "links":
          return (0, n.jsx)(rU.div, {
            variants: i,
            className: "wp-links",
            children: t.items.map((t) =>
              t.external
                ? (0, n.jsxs)(
                    rU.a,
                    {
                      variants: e,
                      className: "wp-link",
                      href: t.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        t.label,
                        " ",
                        (0, n.jsx)("span", {
                          "aria-hidden": "true",
                          children: "↗",
                        }),
                      ],
                    },
                    t.href
                  )
                : (0, n.jsx)(
                    rU.span,
                    {
                      variants: e,
                      children: (0, n.jsx)(r.default, {
                        className: "wp-link",
                        href: t.href,
                        children: t.label,
                      }),
                    },
                    t.href
                  )
            ),
          });
        default:
          return null;
      }
    }
    t.s(
      [
        "default",
        0,
        function () {
          let t = (function () {
              eR.current || eF();
              let [t] = (0, a.useState)(ej.current);
              return t;
            })(),
            e = t ? r4 : r3,
            i = t ? r4 : r6,
            [s, r] = (0, a.useState)(r0[0].id),
            [o, l] = (0, a.useState)(!0),
            h = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let t = setTimeout(() => l(!1), 750);
            return () => clearTimeout(t);
          }, []),
            (0, a.useEffect)(() => {
              let t = () => {
                let t = window.location.hash.slice(1);
                r1.has(t) && r(t);
              };
              return (
                t(),
                window.addEventListener("hashchange", t),
                () => window.removeEventListener("hashchange", t)
              );
            }, []);
          let u = (0, a.useCallback)((t) => {
              r(t),
                window.history.replaceState(null, "", `#${t}`),
                (h.current?.getBoundingClientRect().top ?? 0) < 0 &&
                  h.current?.scrollIntoView({ block: "start" });
            }, []),
            d = r0.find((t) => t.id === s) ?? r0[0];
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(r$.default, {
                active: o,
                label: "Loading the whitepaper",
              }),
              (0, n.jsxs)("div", {
                className: "wrap wp-main",
                "data-testid": "whitepaper-page",
                children: [
                  (0, n.jsx)(rU.nav, {
                    className: "wp-rail",
                    "aria-label": "Whitepaper sections",
                    variants: r2,
                    initial: "hidden",
                    animate: o ? "hidden" : "show",
                    children: r0.map((e) => {
                      let i = e.id === s;
                      return (0, n.jsxs)(
                        rU.button,
                        {
                          type: "button",
                          variants: t ? r4 : r7,
                          className: `wp-rail-item${i ? " on" : ""}`,
                          "aria-current": i ? "true" : void 0,
                          "data-testid": "wp-rail-item",
                          "data-section": e.id,
                          onClick: () => u(e.id),
                          children: [
                            rY[e.icon],
                            (0, n.jsx)("span", { children: e.label }),
                          ],
                        },
                        e.id
                      );
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "wp-panel",
                    ref: h,
                    children: (0, n.jsx)(A, {
                      mode: "wait",
                      children: (0, n.jsxs)(
                        rU.section,
                        {
                          id: d.id,
                          className: "wp-section",
                          "data-testid": "wp-section",
                          "data-section": d.id,
                          variants: r2,
                          initial: "hidden",
                          animate: o ? "hidden" : "show",
                          exit: t
                            ? { opacity: 0, transition: { duration: 0.18 } }
                            : {
                                opacity: 0,
                                y: -10,
                                transition: { duration: 0.18, ease: "easeIn" },
                              },
                          children: [
                            (0, n.jsx)(rU.h1, {
                              variants: e,
                              className: "wp-h1",
                              children: d.label,
                            }),
                            d.image
                              ? (0, n.jsx)(rU.img, {
                                  variants: e,
                                  className: "wp-shot",
                                  src: (0, rq.assetPath)(d.image),
                                  alt: d.alt ?? "",
                                  loading: "lazy",
                                  decoding: "async",
                                })
                              : null,
                            d.blocks.map((t, s) =>
                              (0, n.jsx)(
                                r8,
                                { block: t, v: e, g: i },
                                `${d.id}-${s}`
                              )
                            ),
                          ],
                        },
                        d.id
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
      ],
      28527
    );
  },
  59828,
  (t, e, i) => {
    e.exports = [
      {
        symbol: "ETH",
        name: "Wrapped Ether",
        category: "crypto",
        pair: "0x52e65B17fB6E5BA00Ed806f37Afcd2DaA50271Ca",
        token: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
        logo: "/logos/eth.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 0x1a4413d,
      },
      {
        symbol: "BTC",
        name: "Coinbase Wrapped BTC",
        category: "crypto",
        pair: "0x94c62eebf6454231b2fcd0259ede448ae3c6ad8617718cd88dab20b30cfae48a",
        token: "0xCEC185eB182c47d1bA1EFc84e6959e18cd620Be4",
        logo: "/logos/btc.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 1163033,
      },
      {
        symbol: "PONS",
        name: "Pons",
        category: "meme",
        pair: "0x4be9657ec9002e528f4f17a5c43edc525a07f888f7b180c2afbf75e096c4f38a",
        token: "0x39dBED3a2bd333467115dE45665cC57F813C4571",
        logo: "/logos/pons.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 4720361,
      },
      {
        symbol: "AI",
        name: "Artificial Inu",
        category: "meme",
        pair: "0x0ff2e264ba5a85052e0ba970365fbce49a7bf426c78ee15fefc51077cd377355",
        token: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18",
        logo: "/logos/ai.jpg",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 854007,
      },
      {
        symbol: "CASHCAT",
        name: "Cash Cat",
        category: "meme",
        pair: "0xa92a3df27a00a276183ff7265fd8affa11df1fe8bb23ddfaf13f6c879a3f818b",
        token: "0x020bfC650A365f8BB26819deAAbF3E21291018b4",
        logo: "/logos/cashcat.jpg",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 429697,
      },
      {
        symbol: "STONKBROKER",
        name: "StonkBroker",
        category: "meme",
        pair: "0xd33c8fd38b06e989cdbd4dffdefab71c4bdd415b24964c8d69e38ff35b068f92",
        token: "0xe934e36A439C94017B64a3FecE66AF12099aBF50",
        logo: "/logos/stonkbroker.jpg",
        dex: "uniswap v4",
        quote: "ETH",
        liquidity: 2960084,
      },
      {
        symbol: "NOVAAI",
        name: "NovaAI",
        category: "meme",
        pair: "0xa85f02f8e836e92912c8e0588f60b8868eedc154e558c10a1966269e5122b77c",
        token: "0x51250B135174Ca09450EC01c4afF73CF69DBb590",
        logo: "/logos/novaai.jpg",
        dex: "uniswap v4",
        quote: "ETH",
        liquidity: 1707614,
      },
      {
        symbol: "MOO",
        name: "Memory cow Moo",
        category: "meme",
        pair: "0xc3cc877a8a7d28efdb5dbec9ae71724652431e6411aa1a9fc8928028da554aa1",
        token: "0xD9dB30BB0D2b8d2eae3826A1372117E058791e18",
        logo: "/logos/moo.png",
        dex: "uniswap v4",
        quote: "MU",
        liquidity: 1704832,
      },
      {
        symbol: "AAPL",
        name: "Apple",
        category: "stock",
        pair: "0xc748f4671a867db48b552f6b7650bf3255e05f80f00e3f7aad1b17ccb7898fdb",
        token: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9",
        logo: "/logos/aapl.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 1193118,
      },
      {
        symbol: "TSLA",
        name: "Tesla",
        category: "stock",
        pair: "0xf4ACdAEEB7022862A763C9B1B885e11191c889E3",
        token: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d",
        logo: "/logos/tsla.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 888234,
      },
      {
        symbol: "NVDA",
        name: "NVIDIA",
        category: "stock",
        pair: "0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3",
        token: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC",
        logo: "/logos/nvda.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 6099654,
      },
      {
        symbol: "SPY",
        name: "SPDR S&P 500 ETF Trust",
        category: "stock",
        pair: "0xfe2a80bb5618fd14984b92ca6d45bf5ba67443ddb1435e28b2e48df2fc1526cd",
        token: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C",
        logo: "/logos/spy.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 3534657,
      },
      {
        symbol: "META",
        name: "Meta Platforms",
        category: "stock",
        pair: "0x5875d407a42965b0e768c8925cea290e06fa50603ef34fc99eb92a1050e6ae36",
        token: "0xc0D6457C16Cc70d6790Dd43521C899C87ce02f35",
        logo: "/logos/meta.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 945545,
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Class A",
        category: "stock",
        pair: "0xd4ecb79fdc521d7725d22b33ed43cb4e47aa96bfad76aa29577e3151f723ac5e",
        token: "0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3",
        logo: "/logos/googl.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 1365207,
      },
      {
        symbol: "MSFT",
        name: "Microsoft",
        category: "stock",
        pair: "0xeb60bCD1D920ad6E102690CCFC6fB488899E1510",
        token: "0xe93237C50D904957Cf27E7B1133b510C669c2e74",
        logo: "/logos/msft.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 601297,
      },
      {
        symbol: "AMZN",
        name: "Amazon",
        category: "stock",
        pair: "0x8AC92DA74AB5F3b1d024Dc1943Ad7e15Dc4179Ef",
        token: "0x12f190a9F9d7D37a250758b26824B97CE941bF54",
        logo: "/logos/amzn.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 1057342,
      },
      {
        symbol: "QQQ",
        name: "Invesco QQQ",
        category: "stock",
        pair: "0xD60A5d14dB690B7Afad71F76B108071D7175597d",
        token: "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68",
        logo: "/logos/qqq.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 532907,
      },
      {
        symbol: "MSTR",
        name: "Strategy Inc.",
        category: "stock",
        pair: "0x319bac87e616a89e241c10aeb8afd4892a852cdd8b373cd9765ecddc40b87cfe",
        token: "0xec262a75e413fAfD0dF80480274532C79D42da09",
        logo: "/logos/mstr.png",
        dex: "uniswap v4",
        quote: "USDG",
        liquidity: 724831,
      },
      {
        symbol: "GLD",
        name: "SPDR Gold Trust",
        category: "commodity",
        pair: "0x7A6A053eCCf1446A2633E05aA6D40D09381997ec",
        token: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e",
        logo: "/logos/gld.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 2706011,
      },
      {
        symbol: "SLV",
        name: "iShares Silver Trust",
        category: "commodity",
        pair: "0x8cB787e6c315D464775289BaD00FDD67d53Ecb3D",
        token: "0x411eFb0E7f985935DAec3D4C3ebaEa0d0AD7D89f",
        logo: "/logos/slv.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 103191,
      },
      {
        symbol: "USO",
        name: "United States Oil Fund",
        category: "commodity",
        pair: "0x02175608F1b5E6b5ed221cCFdC7Be197D111D915",
        token: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344",
        logo: "/logos/uso.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 187530,
      },
      {
        symbol: "SGOV",
        name: "iShares 0-3 Month Treasury Bond",
        category: "rwa",
        pair: "0xfAb520051f96F4D2a32c22B6a3dD7fFfdf231bFe",
        token: "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5",
        logo: "/logos/sgov.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 3970527,
      },
      {
        symbol: "SPCX",
        name: "Space Exploration Technologies Corp. Class A Common Stock",
        category: "rwa",
        pair: "0xc61284332117c3FB23A2A56cceFFD07F7aF60029",
        token: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa",
        logo: "/logos/spcx.png",
        dex: "uniswap v3",
        quote: "USDG",
        liquidity: 2301019,
      },
    ];
  },
]);
