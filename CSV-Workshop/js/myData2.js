let canvas;
let table;

let date;
let restaurant;
let meal;
let bestTime;
let typeOfCuisine;



let s = 'Eat With Me Around NOLA <3';

let eatingAtRestaurantsArray = [];

let imageArray = [];

function preload(){
  table = loadTable('js/eatingAtRestaurants.csv', 'csv', 'header');
  // img=loadImage('images/la.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(255, 171, 206);
  for (var x = 0; x < width; x += width / 20) {
    for (var y =0; y < height; y += height / 20) {
      noStroke();
      fill(255,31,128);
      ellipse(random()*windowWidth, random()*windowHeight,10,10)
  // loadImage('images/la.jpg');
  //   image(img,700,140,100,100)

    }
  }
//  imageMode(CENTER);
  textAlign(CENTER);

  for(let i = 0; i < table.getRowCount(); i++){

    date = table.getString(i, 'date');


    restaurant = table.getString(i, 'restaurant');

    meal = table.getString(i, 'meal');

    bestTime = table.getString(i, 'best time');

    typeOfCuisine = table.getString(i, 'type of cuisine');

    //loading the image array
   imageArray[i] = loadImage('food/' + table.getString(i, 'image'));

    //adding an image to the object
    eatingAtRestaurantsArray.push(new eatingAtRestaurants(date, restaurant, meal, bestTime, typeOfCuisine, imageArray[i]));
  }
  for (let i = 0; i < eatingAtRestaurantsArray.length; i++){
    eatingAtRestaurantsArray[i].show();
  }
  //top banner rectangle
  //big rectangle

  // stroke(0);
  // strokeWeight(1.5);
  // fill(255);
  // rect(287, 70, 835, 130);

//LA symbol






  //small rectangle
  // noStroke();
  // fill(0, 169, 157);
  // rect(432, 63, 300, 50);
  // stroke(0);
  // strokeWeight(1.5);
  // fill(255, 161, 204);
  // rect(432, 50, 289, 50);


 //star
  stroke(255,31,128)
  strokeWeight(5)
  push();
  rotate(frameCount / -100.0);
  star(300, 100, 120, 60, 5);
  pop();



  //title text
  stroke(255,31,128);
  strokeWeight(3)
  fill(255);
  textSize(60);
  text('My Food Diary', 570, 85);

  //paragraph text
  stroke(255,31,128)
  strokeWeight(1)
  textAlign(LEFT);
  fill(0);
  textSize(14);
  text(s, 454, 140, 530, 200);

  //text
  stroke(255,31,128);
  strokeWeight(1)
  fill(0);
  textSize(18);
  text('Freshman Year', 800, 80);

  //Data box
  noStroke();
  fill(255,31,128);
  rect(725, 259, 415, 340);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(719, 259, 400, 326);

  //illustration
  noStroke();
  fill(255,31,128);
  rect(310, 273, 326, 326);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(294, 259, 326, 326);

}


class eatingAtRestaurants{
  constructor(date, restaurant, meal, bestTime, typeOfCuisine,image){
    this.date = date;
    this.restaurant = restaurant;
    this.meal = meal;
    this.bestTime = bestTime;
    this.typeOfCuisine = typeOfCuisine;
    this.image = image;

    this.button = createButton(this.date)
    for(let i = -1; i < eatingAtRestaurantsArray.length; i++){
      this.button.position(1150, i*50+100);
    }
    this.button.style('z-index', '1');

  }

  show(){
    this.button.mousePressed(() => this.update())
  }

  update(){


    noStroke();
    fill(255,31,128);
    rect(310, 273, 326, 326);
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(294, 259, 326, 326);

    //Data box
    stroke(255,31,128);
    strokeWeight(3)
    fill(255);
    rect(725, 259, 415, 340);
    stroke(255,31,128);
    strokeWeight(5);
    fill(255,31,128);
    rect(719, 259, 400, 326);

    print("update");



    fill(0);
    noStroke();
    textSize(25);
    textAlign(LEFT);

    text('Restaurant: ' + this.restaurant, 730, 300 );
    text('Meal I Had: ' + this.meal, 730, 330)
    text('Best Time To Go: ' + this.bestTime, 730, 360);
    text('Type of Cuisine: ' + this.typeOfCuisine, 730, 390);
    image(this.image, 294, 259, 326, 326);
  }
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
