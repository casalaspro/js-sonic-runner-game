import kaplay from "kaplay";

// i initialize kaplay rendering
const k = kaplay({
  width: 1920,
  height: 1080,
  // it keeps the same ratio but adapting to window
  letterbox: true,
  background: [0,0,0],
  // i don't want to import kaplay globally
  global: false,
  // this is useful to have no problems with chrome problems
  touchToMouse: true,
  buttons:{
    jump:{
      mouse: "left",
      keyboard: ["space", "s"]
    }
  },
  // using F1 to open debug it will work and won't open a new tab
  debugKey: "d",
  // you have to set it false when deploy
  debug: true,
});

// export default to not use bralets {k} in import
export default k;