/*

*/

var scene0      = new Scene0();
var scene1      = new Scene1();

var width      = 1920;
var height     = 1080;
var centerX    = width * 0.5;
var centerY    = height * 0.5;
var stageScale = 1;

var config = {

  type: Phaser.AUTO,
  width: width*stageScale,
  height: height*stageScale,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: width*stageScale,
    height: height*stageScale
  },

  fps: {
    target: 30,
    forceSetTimeOut: true
  },

  pixelArt: false,
  dom: { createContainer: true },
  parent: "gameDiv",
}

var game   = new Phaser.Game(config);
var parent = this;

WebFont.load({
  custom: {
  },
  active: startScenes()
})

function startScenes() {
  game.scene.add('Scene0', scene0);
  game.scene.add('Scene1', scene1);

  game.scene.start('Scene0');
}
