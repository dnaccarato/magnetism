// informed by Dan Shiffman's 5.4: Functions Inside of Objects - p5.js Tutorial (youtube) 


var formobject = {
  x: 300,
  y: 200,
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}


var formobject2 = {
  x: 600,
  y: 400,
  display: function() {
    stroke(100);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}




var formobject3 = {
  x: 600,
  y: 400,
  display: function() {
    stroke(100);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}


var formobject4 = {
  x: 650,
  y: 700,
  display: function() {
    stroke(100);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}

var formobject5 = {
  x: 660,
  y: 710,
  display: function() {
    stroke(100);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}


function setup() {
  createCanvas(1200, 906);

}

function draw() {
background(0);
formobject.move();
formobject.display(); 
  
  
  formobject2.move();
formobject2.display(); 


  formobject3.move();
formobject3.display(); 


  formobject4.move();
formobject4.display();


  formobject5.move();
formobject5.display(); 
}
