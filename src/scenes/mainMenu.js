import k from "../kaplayCtx";

export default function mainMenu(){
  // i check in the localStorage if there is a best score saved and if not, i save it to zero
  if(!k.getData("best-score")) k.setData("best-score", 0);
  k.onButtonPress("jump", ()=> k.go("game"));

  const bgPieceWidth = 1920;
  // we have the possibility to use components ready made from kaplay
  const bgPieces = [
    // this is a game object
    k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.scale(2), k.opacity(0.8)]),
    // i placed the x position of the second image *2 because the two images are scaled to the double and the second image has to follow the first image to create the illusion of infinite scrolling
    k.add([k.sprite("chemical-bg"), k.pos(bgPieceWidth * 2, 0), k.scale(2), k.opacity(0.8)]),

  ]


}