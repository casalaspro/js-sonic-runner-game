import k from "../kaplayCtx";

export default function mainMenu(){
  // i check in the localStorage if there is a best score saved and if not, i save it to zero
  if(!k.getData("best-score")) k.setData("best-score", 0);
  k.onButtonPress("jump", ()=> k.go("game"));

  const bgPieceWidth = 1920;
  // we have the possibility to use components ready made from kaplay
  const bgPieces = [
    // this is a game object
    k.add([
      k.sprite("chemical-bg"),
      k.pos(0, 0), k.scale(2),
      k.opacity(0.8),
      // it's used to see in debug mode the blue borders for splines
      // k.area()
    ]),
    // i placed the x position of the second image *2 because the two images are scaled to the double and the second image has to follow the first image to create the illusion of infinite scrolling
    k.add([
      k.sprite("chemical-bg"),
      k.pos(bgPieceWidth * 2, 0),
      k.scale(2),
      k.opacity(0.8),
      // k.area()
    ]),
  ];

  const platformWidth = 1280;
  const platforms = [
    k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
    k.add([k.sprite("platforms"), k.pos(platformWidth * 4, 450), k.scale(4)]),
  ];

  // this function will run each update. It depends on fps
  k.onUpdate(() => {
    if(bgPieces[1].pos.x < 0){
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
      // i use the shift() method to extract the 0 index from the array and with push() i place it last
      bgPieces.push(bgPieces.shift());
    }

     // each update .move() function moves the game object
     bgPieces[0].move(-100, 0);
     bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

    //----------------- platforms methods -----------------

     if(platforms[1].pos.x < 0){
      platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4, 450);
      // i use the shift() method to extract the 0 index from the array and with push() i place it last
      platforms.push(platforms.shift());
    }

     // each update .move() function moves the game object
     platforms[0].move(-4000, 0);
     platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);
  })

}