/*

*/
var scene0Bg1;
var wrongAnswerImg;
var enterClickZone0;
var ansInput0;

class Scene0 extends Phaser.Scene {

  constructor() {
    super("Scene0");
  }

  preload () {
    this.load.image('scene0Bg1', 'assets/backgrounds/scene0/scene0Bg1.png');
    this.load.image('transpImg', 'assets/img/transparentImg.png');
    this.load.image('wrongAnswerImg', 'assets/img/scene0/wrongAnswer.png');

    this.load.html('ansInput', 'assets/html/input.html');
  }

  create () {
    scene0Bg1           = this.add.image(centerX, centerY, 'scene0Bg1').setDisplaySize(this.sys.canvas.width ,this.sys.canvas.height);
    enterClickZone0     = this.add.image(1224, 598, 'transpImg').setDisplaySize(82, 76).setOrigin(0).setInteractive({useHandCursor: true});
    wrongAnswerImg      = this.add.image(centerX, 900, 'wrongAnswerImg').setDisplaySize(559, 70).setOrigin(0.5);

    wrongAnswerImg.visible = false;

    ansInput0 = this.add.dom(706, 598).createFromCache('ansInput').setOrigin(0);
    var input = document.getElementById("inputToChange");
    input.id  = "adminPass";

    this.listenerManager();
  }

  update () {
  }

  listenerManager(){
    enterClickZone0.on("pointerdown", function(pointer) {
      if(this.checkPassword()){
        this.input.keyboard.off('keyup-ENTER');
        this.scene.start("Scene1");
      } else {
        wrongAnswerImg.visible = true;
      }
    }, this);

    this.input.keyboard.on('keyup-ENTER', function(pointer) {
      if(this.checkPassword()){
        this.input.keyboard.off('keyup-ENTER');
        this.scene.start("Scene1");
      } else {
        wrongAnswerImg.visible = true;
      }
    }, this);

  }

  checkPassword(){
    var inpVal = document.getElementById("adminPass").value.trim().toLowerCase();
    if(password == inpVal)
      return true;

    return false;
  }
}
