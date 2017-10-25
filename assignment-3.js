    osc.amp(0);
    osc.start();
    oscillators[i] = osc;
    playing[i] = false;
  }
}

function draw() {
  background(255);
  noStroke();
  for (var i = 0; i < playing.length; i++) {
    if (playing[i]) {
      fill(frequencies[i]/3);
    } else {
      fill(255);
    }
    ellipse((i+0.3) * width/playing.length, height/4, height/25);
  }
  drops.forEach(processDrop);
  drops = drops.filter(isVisible);
}

function processDrop(drop) {
  drop.y += 5;
  drop.opacity -= 6;
	r=r+1;
  stroke(0);
  fill(255, drop.opacity);
  ellipse(drop.x, drop.y, height/25-r);
}

function isVisible(drop) {
  return drop.opacity > 0;
}

function currentIndex() {
  return key in keys ? keys[key] : keys[keyCode];
}

function keyPressed() {
  print("got key press for ", key, keyCode);
  var index = currentIndex();
