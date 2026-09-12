(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [997],
  {
    7669: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 3829));
    },
    6648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a.a;
        },
      });
      var n = r(5601),
        a = r.n(n);
    },
    5601: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return l;
          },
        });
      let n = r(9920),
        a = r(497),
        o = r(8173),
        i = n._(r(1241));
      function l(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let c = o.Image;
    },
    3829: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var n = r(7437),
        a = r(1826);
      function o() {
        return (0, n.jsx)(a.default, { pageRouteMode: !0 });
      }
    },
    8377: function (e, t, r) {
      "use strict";
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
    1826: function (e, t, r) {
      "use strict";
      /* Loader de primera carga (VisualLoader). Los dos chunks que registran el módulo 1826 —este
       * y el otro— llevan el MISMO cuerpo a propósito: webpack se queda con el que se registre
       * último, así que divergir aquí es un bug invisible. Por eso las dependencias se nombran en
       * claro en vez de con las letras de cada bundle.
       *
       * Tres slots de 50 px; UN slot cambia cada 300 ms (cada slot vuelve a cambiar a los 900 ms) y
       * el cambio es un cruce de dos capas de 320 ms. Iconos, secuencia, estilos y tiempos son los
       * de docs/LOADER-SPEC.md, compartidos con el velo de tools/hero/bb-hero-runtime.js y con el
       * PageLoader de la dapp. El reloj también: el velo pone window.__bbLoaderT0 antes del primer
       * pintado y aquí se calcula el paso que toca, así el relevo velo -> loader no da ningún salto.
       * La lógica de aparecer/desaparecer (store isGlobalLoaderVisible, canvasLoaded, monitorReady,
       * sonda de WebGL) es la original: solo se reescribió lo que se ve. */
      var JSX = r(7437),
        canvasStore = r(3131),
        React = r(2265),
        monitorStore = r(8377),
        loaderStore = r(9123),
        Img = r(5303),
        cn = r(6164),
        nav = r(6463),
        gl = r(5281);
      // Nueve glifos blancos y cuadrados: el conejo de la marca (índice 0, el "hop" de las reglas
      // de secuencia) y ocho iconos de trazo. Ningún logo de terceros, así que tampoco hay recorte
      // circular: todos se pintan tal cual.
      let g = "/uploads",
        ICONS = [
          { src: g + "/loader-image1.svg" },
          { src: g + "/loader-image2.svg" },
          { src: g + "/loader-image3.svg" },
          { src: g + "/loader-image4.svg" },
          { src: g + "/loader-image5.svg" },
          { src: g + "/loader-image6.svg" },
          { src: g + "/loader-image7.svg" },
          { src: g + "/loader-image8.svg" },
          { src: g + "/loader-image9.svg" },
        ],
        LOADER_STEP = 300,
        LOADER_CSS =
          ".bb-ld-row{display:flex;gap:18px;justify-content:center;align-items:center}" +
          ".bb-ld-slot{position:relative;width:50px;height:50px}" +
          ".bb-ld-slot img{position:absolute;top:0;left:0;display:block;width:50px;height:50px;opacity:0;" +
          "transform:scale(.82) translateY(-6px);filter:blur(3px);" +
          "transition:opacity .32s cubic-bezier(.22,1,.36,1),transform .32s cubic-bezier(.22,1,.36,1),filter .32s cubic-bezier(.22,1,.36,1)}" +
          ".bb-ld-slot img.bb-ld-in{opacity:1;transform:scale(1) translateY(0);filter:blur(0);" +
          "animation:bb-ld-breathe .9s ease-in-out .32s infinite alternate}" +
          ".bb-ld-slot img.bb-ld-out{opacity:0;transform:scale(.82) translateY(6px);filter:blur(3px)}" +
          ".bb-ld-slot img.bb-ld-arm{transition:none}" +
          // Remate: los slots laterales se congelan (se quedan con su icono, sin respirar) y el
          // central gira a corte seco; el "pop" del aterrizaje gana por ser más específico.
          ".bb-ld-slot img.bb-ld-freeze{animation:none}" +
          ".bb-ld-slot img.bb-ld-spin{opacity:1;transform:none;filter:none;transition:none;animation:none}" +
          ".bb-ld-slot img.bb-ld-spin.bb-ld-pop{animation:bb-ld-pop .22s cubic-bezier(.22,1,.36,1)}" +
          // Desaparición escalonada del final: se anima el SLOT, no las <img>, para no pelear con
          // bb-ld-spin/bb-ld-pop/bb-ld-freeze, que ya mandan sobre transform y transition de la imagen.
          ".bb-ld-slot{transition:opacity .26s cubic-bezier(.22,1,.36,1),transform .26s cubic-bezier(.22,1,.36,1),filter .26s cubic-bezier(.22,1,.36,1)}" +
          ".bb-ld-slot.bb-ld-gone{opacity:0;transform:scale(.6);filter:blur(4px)}" +
          "@keyframes bb-ld-breathe{from{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(-2px)}}" +
          "@keyframes bb-ld-pop{0%{transform:scale(1)}45%{transform:scale(1.12)}100%{transform:scale(1)}}" +
          "@media (prefers-reduced-motion: reduce){" +
          ".bb-ld-slot img{transform:none;filter:none;transition:opacity .2s linear}" +
          ".bb-ld-slot img.bb-ld-in{transform:none;filter:none;animation:none}" +
          ".bb-ld-slot img.bb-ld-spin.bb-ld-pop{animation:none}" +
          ".bb-ld-slot{transition:opacity .2s linear}" +
          ".bb-ld-slot.bb-ld-gone{transform:none;filter:none}" +
          ".bb-ld-slot img.bb-ld-out{transform:none;filter:none}}",
        /* Remate de ruleta: el slot central recorre la lista a corte seco (nada de cruce de capas,
         * que a 30 ms sería puré) frenando geométricamente, y para en el conejo. Los pasos son
         * fijos y el icono de salida se elige para que el último sea el 0:
         * FIN_START + FIN_STEPS ≡ 0 (mod 9). */
        FIN_STEPS = 16,
        FIN_D0 = 30,
        FIN_R = 1.11,
        FIN_HOLD = 350,
        FIN_FLAT = 400,
        FIN_START = (ICONS.length - (FIN_STEPS % ICONS.length)) % ICONS.length,
        // Desaparición escalonada tras el remate: separación entre slots y duración de cada uno.
        VANISH_STAGGER = 110,
        VANISH_MS = 260,
        VANISH_FLAT = 200;
      // Al slot que toca le entra el primer icono de la lista circular, empezando después del que
      // tenía, que NO esté en los otros dos slots; y el conejo no falta más de 2 pasos seguidos.
      let seqNew = () => ({ slots: [0, 1, 2], step: 0, away: 0 }),
        seqNext = (e) => {
          let t = e.step % 3,
            r = e.slots[t],
            n = ICONS.length;
          for (let a = 1; a <= n; a++) {
            let o = (r + a) % n;
            if (o !== e.slots[(t + 1) % 3] && o !== e.slots[(t + 2) % 3]) {
              e.slots[t] = o;
              break;
            }
          }
          return (
            e.slots.indexOf(0) < 0
              ? (e.away++, e.away >= 2 && ((e.slots[t] = 0), (e.away = 0)))
              : (e.away = 0),
            e.step++,
            t
          );
        },
        // Determinista: quien llega tarde replica el estado de ese paso y entra sincronizado.
        seqAt = (e) => {
          let t = seqNew();
          for (let r = 0; r < (e > 0 ? e : 0); r++) seqNext(t);
          return t;
        },
        imgCls = () => "bb-ld-img",
        reduced = () => {
          try {
            return !!(
              "undefined" != typeof window &&
              window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
          } catch (e) {
            return !1;
          }
        },
        // Los nueve glifos pesan menos que un logo, pero el remate los pide a 30 ms de distancia:
        // si uno no está en caché el slot central parpadea en blanco. Se piden todos al montar.
        preload = () => {
          try {
            for (let e = 0; e < ICONS.length; e++)
              new Image().src = ICONS[e].src;
          } catch (e) {}
        },
        slotPaint = (e, t) => {
          (e.children[0].className = imgCls(t) + " bb-ld-in"),
            (e.children[0].src = ICONS[t].src),
            (e.children[1].className = imgCls(t)),
            (e.children[1].src = ICONS[t].src);
        },
        // La capa libre recibe la imagen nueva en el estado de entrada y SIN transición (para que
        // ese sea el punto de partida); solo entonces se le da la clase que dispara el fundido.
        slotSwap = (e, t, r) => {
          let n = e.children[1 - t],
            a = e.children[t],
            o = imgCls(r);
          return (
            (n.className = o + " bb-ld-arm"),
            (n.src = ICONS[r].src),
            void n.offsetWidth,
            (n.className = o + " bb-ld-in"),
            (a.className = a.className.replace(" bb-ld-in", "") + " bb-ld-out"),
            1 - t
          );
        },
        /* Los laterales se quedan quietos con el icono que tuvieran; el central recorre la lista
         * con intervalos FIN_D0 · FIN_R^k (30 ms → ~143 ms en 16 pasos, ~1,15 s en total) y cae en
         * el conejo, lo sostiene FIN_HOLD con un pop, y solo entonces se llama a `done` — que es
         * quien esconde el loader. Con prefers-reduced-motion no hay giro: conejo y fuera.
         * Devuelve un cancelador por si el loader se desmonta a media ruleta. */
        finale = (e, t, r) => {
          let n = e[1],
            a = n.children[t[1]],
            o = n.children[1 - t[1]],
            i = 0,
            l = !1,
            s = 0,
            c = FIN_START,
            u = () => {
              l || r();
            };
          (e[0].children[t[0]].className += " bb-ld-freeze"),
            (e[2].children[t[2]].className += " bb-ld-freeze"),
            (o.className = "bb-ld-img"),
            (a.className = "bb-ld-img bb-ld-spin");
          let d = () => {
            (a.src = ICONS[0].src),
              (a.className = "bb-ld-img bb-ld-spin bb-ld-pop"),
              (i = setTimeout(u, FIN_HOLD));
          };
          if (reduced()) (a.src = ICONS[0].src), (i = setTimeout(u, FIN_FLAT));
          else {
            let e = () => {
              if (!l) {
                if (
                  (((c = (c + 1) % ICONS.length), (a.src = ICONS[c].src)),
                  ++s >= FIN_STEPS)
                )
                  return d();
                i = setTimeout(e, FIN_D0 * Math.pow(FIN_R, s));
              }
            };
            e();
          }
          return () => {
            (l = !0), clearTimeout(i);
          };
        },
        /* Desaparición escalonada: los tres slots se van uno por uno (0, 1, 2) con VANISH_STAGGER
         * de separación, cada uno en VANISH_MS. Al acabar el último la pantalla está negra del
         * todo y solo entonces se llama a `done`. Con prefers-reduced-motion se van los tres a la
         * vez y solo con opacidad. Devuelve un cancelador. */
        vanish = (slots, done) => {
          let timers = [],
            stopped = !1,
            r = reduced(),
            step = r ? 0 : VANISH_STAGGER,
            ms = r ? VANISH_FLAT : VANISH_MS;
          for (let e = 0; e < 3; e++)
            timers.push(
              setTimeout(() => {
                stopped || (slots[e].className += " bb-ld-gone");
              }, step * e)
            );
          return (
            timers.push(
              setTimeout(() => {
                stopped || done();
              }, step * 2 + ms + 40)
            ),
            () => {
              (stopped = !0), timers.forEach(clearTimeout);
            }
          );
        };
      t.default = (e) => {
        let { pageRouteMode: t = !1, smoothMode: r = !0 } = e,
          g = (0, loaderStore.Z)((e) => e.isGlobalLoaderVisible),
          P = (0, canvasStore.Z)((e) => e.canvasLoaded),
          L = (0, monitorStore.N)((e) => e.monitorReady),
          y = (0, loaderStore.Z)((e) => e.setIsGlobalLoaderVisible),
          [E, S] = (0, React.useState)(1),
          G = (0, nav.usePathname)(),
          k = (0, React.useMemo)(
            () => "/data-protection" === G.replace(/^\/[a-z]{2}(\/|$)/, "/"),
            [G]
          ),
          N = (0, nav.usePathname)(),
          // El remate vive en el efecto de la fila (es DOM, no estado): aquí solo se guarda la
          // función que lo lanza y un pestillo para que la salida ocurra una sola vez. Cuando el
          // sitio está listo ya no se esconde en seco, se remata y luego se esconde.
          finaleRef = (0, React.useRef)(null),
          hiding = (0, React.useRef)(!1),
          hide = () => {
            if (!hiding.current) {
              hiding.current = !0;
              /* El remate y la desaparición escalonada dejan la pantalla negra; el reveal lo hace
               * el outro de nubes del runtime del hero (canvas WebGL por encima de todo lo negro).
               * En cuanto el canvas tapa la pantalla apagamos este contenedor —da igual que lleve
               * transition-opacity, nadie lo ve— y él abre el agujero desde el centro. Sin runtime
               * (o sin WebGL) se esconde en seco, como antes. */
              let outro = () => {
                let H = "undefined" != typeof window && window.BB_HERO;
                H && "function" == typeof H.outro
                  ? H.outro({ onCovered: () => S(0), onDone: () => {} })
                  : S(0);
              };
              let e = finaleRef.current;
              e ? e(outro) : outro();
            }
          };
        (0, React.useEffect)(() => {
          y(!1);
        }, [N]),
          (0, React.useEffect)(() => {
            P && L && !t && !g && hide();
          }, [P, L]),
          (0, React.useEffect)(() => {
            P && L && !t && (g ? ((hiding.current = !1), S(1)) : hide());
          }, [g]);
        let [V, C] = (0, React.useState)(!1),
          [R, D] = (0, React.useState)(!1);
        (0, React.useEffect)(() => {
          let e = (0, gl.ZP)();
          C(e);
          let t = (0, gl.gY)(() => {
              console.warn("[VisualLoader] WebGL failed, hiding loader"),
                D(!0),
                C(!1),
                S(0);
            }),
            r = null;
          return (
            e ||
              (r = setInterval(() => {
                (0, gl.ZP)() && (C(!0), r && (clearInterval(r), (r = null)));
              }, 100)),
            () => {
              t(), r && clearInterval(r);
            }
          );
        }, []);
        let T = (0, gl.ZP)(),
          row = (0, React.useRef)(null);
        // La fila la mueve este efecto, no el estado de React: son tres pares de <img> fijos a los
        // que solo se les cambia src y clase (igual que en el velo del <head>).
        return (
          (0, React.useEffect)(() => {
            let e = row.current;
            if (!e || !E) return;
            let t = "undefined" != typeof window ? window : null,
              t0 = (t && t.__bbLoaderT0) || Date.now();
            t && !t.__bbLoaderT0 && (t.__bbLoaderT0 = t0);
            preload();
            let st = seqAt(Math.floor((Date.now() - t0) / LOADER_STEP)),
              slots = [e.children[0], e.children[1], e.children[2]],
              front = [0, 0, 0],
              timer = 0,
              stopped = !1,
              cancelFin = null,
              cancelVan = null;
            for (let e = 0; e < 3; e++) slotPaint(slots[e], st.slots[e]);
            let tick = () => {
                if (stopped) return;
                let e = seqNext(st);
                (front[e] = slotSwap(slots[e], front[e], st.slots[e])),
                  schedule();
              },
              schedule = () => {
                let e = t0 + (st.step + 1) * LOADER_STEP - Date.now();
                timer = setTimeout(tick, e > 0 ? e : 0);
              };
            return (
              schedule(),
              (finaleRef.current = (e) => {
                (stopped = !0),
                  clearTimeout(timer),
                  (cancelFin = finale(slots, front, () => {
                    cancelVan = vanish(slots, e);
                  }));
              }),
              () => {
                (stopped = !0),
                  clearTimeout(timer),
                  (finaleRef.current = null),
                  cancelFin && cancelFin(),
                  cancelVan && cancelVan();
              }
            );
          }, [E, V, R, T, k]),
          k || !V || !T || R
            ? null
            : (0, JSX.jsxs)("div", {
                className: (0, cn.m6)(
                  "pointer-events-none fixed top-0 left-0 w-screen h-screen bg-black z-[1000] flex justify-center items-center",
                  !E && "opacity-0",
                  r && "transition-opacity duration-1000"
                ),
                children: [
                  (0, JSX.jsx)("style", {
                    dangerouslySetInnerHTML: { __html: LOADER_CSS },
                  }),
                  (0, JSX.jsx)("div", {
                    ref: row,
                    className: "bb-ld-row",
                    children: [0, 1, 2].map((e) =>
                      (0, JSX.jsxs)(
                        "div",
                        {
                          className: "bb-ld-slot",
                          children: [
                            (0, JSX.jsx)(
                              "img",
                              {
                                alt: "",
                                "aria-hidden": "true",
                                "data-loader": "1",
                                className: imgCls() + " bb-ld-in",
                                src: ICONS[e].src,
                              },
                              "a"
                            ),
                            (0, JSX.jsx)(
                              "img",
                              {
                                alt: "",
                                "aria-hidden": "true",
                                "data-loader": "1",
                                className: imgCls(),
                                src: ICONS[e].src,
                              },
                              "b"
                            ),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                ],
              })
        );
      };
    },
    5303: function (e, t, r) {
      "use strict";
      var n = r(7437),
        a = r(6648);
      t.Z = (e) => {
        let {
          src: t,
          alt: r,
          width: o,
          height: i,
          className: l = "",
          ...c
        } = e;
        return null === t
          ? null
          : (0, n.jsx)(a.default, {
              src: t,
              alt: r,
              width: o,
              height: i,
              className: l,
              ...c,
            });
      };
    },
    3131: function (e, t, r) {
      "use strict";
      let n = (0, r(903).U)((e) => ({
        canvasLoaded: !1,
        setCanvasLoaded: (t) => {
          e({ canvasLoaded: t });
        },
      }));
      t.Z = n;
    },
    9123: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return a;
        },
      });
      var n = r(903);
      let a = "".concat("https://d1qr1ypgp57apv.cloudfront.net", "/static"),
        o = (0, n.U)((e) => ({
          isGlobalLoaderVisible: !1,
          setIsGlobalLoaderVisible: (t) => {
            e({ isGlobalLoaderVisible: t });
          },
        }));
      t.Z = o;
    },
    5281: function (e, t, r) {
      "use strict";
      r.d(t, {
        OH: function () {
          return l;
        },
        fd: function () {
          return i;
        },
        gY: function () {
          return o;
        },
      });
      let n = !1,
        a = new Set();
      function o(e) {
        return a.add(e), () => a.delete(e);
      }
      function i() {
        if (window.__webglErrorHandlerSetup) return;
        window.__webglErrorHandlerSetup = !0;
        let e = console.error;
        (console.error = function () {
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          let o = r.join(" ");
          ((o.includes("Error creating WebGL context") ||
            o.includes("THREE.WebGLRenderer") ||
            o.includes("WebGL")) &&
            n) ||
            e.apply(console, r);
        }),
          window.addEventListener(
            "error",
            (e) => {
              var t, r;
              let o =
                e.message ||
                (null === (t = e.error) || void 0 === t ? void 0 : t.message) ||
                "";
              if (
                o.includes("Error creating WebGL context") ||
                o.includes("WebGL") ||
                ((null === (r = e.error) || void 0 === r ? void 0 : r.name) ===
                  "Error" &&
                  o.includes("context"))
              )
                return (
                  console.warn(
                    "[isWebGLAvailable] Caught WebGL context creation error, disabling WebGL:",
                    o
                  ),
                  (n = !0),
                  a.forEach((e) => {
                    try {
                      e();
                    } catch (e) {
                      console.error(
                        "[isWebGLAvailable] Error in WebGL failure callback:",
                        e
                      );
                    }
                  }),
                  e.preventDefault(),
                  e.stopPropagation(),
                  e.stopImmediatePropagation(),
                  !1
                );
            },
            !0
          ),
          window.addEventListener("unhandledrejection", (e) => {
            var t;
            let r =
              (null === (t = e.reason) || void 0 === t ? void 0 : t.message) ||
              String(e.reason || "");
            (r.includes("Error creating WebGL context") ||
              r.includes("WebGL")) &&
              (console.warn(
                "[isWebGLAvailable] Caught WebGL promise rejection, disabling WebGL:",
                r
              ),
              (n = !0),
              a.forEach((e) => {
                try {
                  e();
                } catch (e) {
                  console.error(
                    "[isWebGLAvailable] Error in WebGL failure callback:",
                    e
                  );
                }
              }),
              e.preventDefault());
          });
      }
      function l() {
        n ||
          ((n = !0),
          a.forEach((e) => {
            try {
              e();
            } catch (e) {
              console.error(
                "[isWebGLAvailable] Error in WebGL failure callback:",
                e
              );
            }
          }));
      }
      t.ZP = function () {
        if ("undefined" == typeof document || (i(), n)) return !1;
        try {
          let e = document.createElement("canvas");
          if (!e) return !1;
          let t = e.getContext("webgl") || e.getContext("experimental-webgl");
          if (!t || "function" != typeof t.getParameter) return !1;
          try {
            let e = t.getExtension("WEBGL_debug_renderer_info");
            e && t.getParameter(e.UNMASKED_RENDERER_WEBGL);
          } catch (e) {}
          return !0;
        } catch (e) {
          return (n = !0), !1;
        }
      };
    },
  },
  function (e) {
    e.O(0, [247, 478, 23, 744], function () {
      return e((e.s = 7669));
    }),
      (_N_E = e.O());
  },
]);
