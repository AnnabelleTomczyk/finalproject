let canvas;
let table;

let date;
let restaurant;
let meal;
let bestTime;
let typeOfCuisine;


let s = 'Eating Around NOLA';

let eatingAtRestaurants = [];

let imageArray = [];

function preload(){
  table = loadTable('js/eatingAtRestaurants.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(244, 230, 186);
  for (var x = 0; x < width; x += width / 50) {
    for (var y = 0; y < height; y += height / 30) {
      stroke(125, 165, 188);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
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
    imageArray[i] = loadImage('images/food ' + i + '.jpg');

    //adding an image to the object
    eatingAtRestaurants.push(new eatingAtRestaurants(date, restaurant, meal, bestTime, typeOfCuisine, imageArray[i]));
  }
  for (let i = 0; i < eatingAtRestaurants.length; i++){
    eatingAtRestaurants[i].show();
  }
  //top banner rectangle
  //big rectangle
  fill(122,201,67);
  rect(306, 87, 835, 135);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(287, 70, 835, 130);

  //small rectangle
  noStroke();
  fill(0, 169, 157);
  rect(432, 63, 300, 50);
  stroke(0);
  strokeWeight(1.5);
  fill(255, 161, 204);
  rect(432, 50, 289, 50);

  //smily face
  fill(241, 90, 36);
  rect(287, 70, 145, 130);
  fill(249, 180, 88);
  circle(360, 135, 120);

  //title text
  noStroke();
  fill(255);
  textSize(30);
  text('My Experience', 570, 85);

  //paragraph text
  noStroke()
  textAlign(LEFT);
  fill(0);
  textSize(14);
  text(s, 454, 140, 530, 200);

  //Date text
  noStroke();
  fill(0);
  textSize(18);
  text('2021.02.25 ~ 2021.03.10', 750, 94);

  //Data box
  noStroke();
  fill(255, 123, 172);
  rect(725, 259, 415, 340);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(719, 259, 400, 326);

  //illustration
  noStroke();
  fill(0, 113, 188);
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
    for(let i = -1; i < eatingAtRestaurants.length; i++){
      this.button.position(1150, i*25+160);
    }
    this.button.style('z-index', '1');
  }

  show(){
    this.button.mousePressed(() => this.update())
  }

  update(){


    noStroke();
    fill(0, 113, 188);
    rect(310, 273, 326, 326);
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(294, 259, 326, 326);

    //Data box
    noStroke();
    fill(255, 123, 172);
    rect(725, 259, 415, 340);
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(719, 259, 400, 326);

    print("update");



    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT);

    text('restaurant: ' + this.restaurant, 730, 300 );
    text('meal: ' + this.meal, 730, 330)
    text('bestTime: ' + this.bestTime, 730, 360);
    text('typeOfCuisine: ' + this.typeOfCuisine, 730, 390);
    image(this.image, 294, 259, 326, 326);
  }
}
