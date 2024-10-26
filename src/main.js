import k from "./kaplayCtx";
import mainMenu from "./scenes/mainMenu";

// i start loading sprites. The fact that i'm using Vite as scaffold tool, i don't need to specify the folder public in my src
k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");

// loading sprite sheets you have to specify how many photograms in x and y axis
k.loadSprite("sonic", "graphics/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anim: {
    // from-to: the slices to animate / loop: the kind of animation / speed: number of fps
    run: {from: 0, to: 7, loop: true, speed: 30},
    jump: {from: 8, to: 15, loop: true, speed: 100}
  }
});

k.loadSprite("motobug", "graphics/motobug.png", {
  sliceX: 5,
  sliceY: 1,
  anim: {
    run: {from: 0, to: 4, loop: true, speed: 8},
  }
});

k.loadSprite("ring", "graphics/ring.png", {
  sliceX: 16,
  sliceY: 1,
  anim: {
    spin: {from: 0, to: 15, loop: true, speed: 30},
  }
});

k.loadFont("mania", "fonts/mania.ttf");
k.loadSound("city", "sounds/city.mp3");
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyperRing", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");

k.scene("main-menu", mainMenu);
k.scene("game", () => {});
k.scene("gameover", () => {});

k.go("main-menu");