/*

*/
var scene1Bg1, scene1Bg2;
var wrongAnswerImg;
var openProgramClickZone;
var ansInput0;

class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload () {
    this.load.image('scene1Bg1', 'assets/backgrounds/scene1/scene1Bg1.png');
    this.load.image('scene1Bg2', 'assets/backgrounds/scene1/scene1Bg2.png');

  }

  create () {
    scene1Bg1            = this.add.image(centerX, centerY, 'scene1Bg1').setDisplaySize(this.sys.canvas.width ,this.sys.canvas.height);
    scene1Bg2            = this.add.image(centerX, centerY, 'scene1Bg2').setDisplaySize(this.sys.canvas.width ,this.sys.canvas.height);
    openProgramClickZone = this.add.image(30, 31, 'transpImg').setDisplaySize(166, 166).setOrigin(0).setInteractive({useHandCursor: true});

    scene1Bg2.visible = false;

    var combo = this.input.keyboard.createCombo('ABCD');


    this.listenerManager();

  }

  update () {
  }

  listenerManager(){
      openProgramClickZone.on("pointerdown", ()=>{
      
        scene1Bg1.visible            = false;
        openProgramClickZone.visible = false;
        scene1Bg2.visible            = true;
      
    });

    this.input.keyboard.on('keycombomatch', function (event) {

      window.location.reload();

    });
  }
}
