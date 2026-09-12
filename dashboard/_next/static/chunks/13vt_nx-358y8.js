(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  90179,
  (t) => {
    "use strict";
    t.s([
      "PARAMS",
      0,
      {
        tolerance: 0.01,
        timingBonus: 0.5,
        editPenalty: 0.05,
        minConviction: 0.75,
        rake: 0.03,
      },
    ]);
  },
]);
