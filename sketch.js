function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#fae')
}


function draw() {

  for (x = 80; x < width - 90; x += 40) {
    for (y = 80; y < height - 90; y += 40) {


      if (random() < 0.20) {
        fill('#fae');
      } else {
        fill(214, 109, 145);
      }


      if (mouseX < 300 && mouseX > 300) {
        fill(255, 204, 0);
      };

      if (mouseX < random() * 200) {
        fill('rgba');
      }

      if (mouseX < random() * 700) {
        fill(249, 178, 72);
      }

      rect(x, y, 30, 30);
    }


    let myText = "move your mouse";

    fill(color("black"));
    textSize(25);

    textFont("PT Serif");
    textAlign(CENTER);
    text(myText, width / 2, 50);
  }

}
