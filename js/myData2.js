let canvas;
let table;

let date;
let restaurant;
let meal;
let bestTime;
let typeOfCuisine;


let myRecs;

let myReccomendations;

let myFavoriteOverall;
let bestBrunch;
let mostFrequented;

let table2;

// let s = 'Eat With Me Around NOLA <3';

let eatingAtRestaurantsArray = [];

let myRecsArray= [];

let imageArray = [];

let imageArray2= [];
//y2k images
let phone;
let fries;
let y2k1;
let y2k2;
let y2k3;
let y2k4;
let la2;
let butterfly;
let yum;
let goodEats;
let strawberry;
let mimosa;
let milkshake;
let donut;
let eats;
let aroundNola;
let camera;
let popcorn;
let cupcake;
let drink;
let fork;


function preload(){
  table = loadTable('js/eatingAtRestaurants.csv', 'csv', 'header');

  table2= loadTable('js/myRecs.csv', 'csv', 'header')
  img=loadImage('images/la.jpg');
  phone=loadImage('images/phone.jpg')
  fries=loadImage('images/fries.jpg')
  y2k1=loadImage('images/y2k1.jpg')
  y2k2=loadImage('images/y2k2.jpg')
  y2k3=loadImage('images/y2k3.jpg')
  y2k4=loadImage('images/y2k4.jpg')
  butterfly=loadImage('images/butterfly3.png')
  yum=loadImage('images/yum.png')
  goodEats=loadImage('images/goodeats.png')
  strawberry=loadImage('images/strawberry2.jpg')
  mimosa=loadImage('images/mimosa.png')
  milkshake=loadImage('images/milkshake.jpg')
  donut=loadImage('images/donut.png')
  la2=loadImage('images/la2.jpeg')
  eats=loadImage('images/eats.gif')
  aroundNola=loadImage('images/aroundNola.gif')
  camera=loadImage('images/camera.png')
  popcorn=loadImage('images/popcorn.png')
  cupcake=loadImage('images/cupcake.png')
  drink=loadImage('images/drink.png')
  fork=loadImage('images/fork.png')

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(255, 171, 206);
  for (var x = 0; x < width; x += width / 15) {
    for (var y =0; y < height; y += height / 15) {
      noStroke();
      fill(255,31,128);
      ellipse(random()*windowWidth, random()*windowHeight,10,10)
}
}
      for (var x = 0; x < width; x += width / 6) {
        for (var y =0; y < height; y += height / 6) {
      image(butterfly,random()*windowWidth,random()*windowHeight,50,50)

      }
    }



    //   sel= createSelect();{
    //   sel.option('My Reccomendations')
    //   textAlign(LEFT)
    //   sel.position(10,10);
    //   sel.option('My Favorite Overall');
    //   sel.option('Best Brunch');
    //   sel.option('Most frequented');
    //   sel.changed(mySelectEvent);

  myRecs= createSelect();
  myRecs.option ('My Reccomendations')
  for (let i = 0; i < table2.getRowCount(); i++){

    let myFavs = table2.getString(i, 'favs');
    let restFav = table2.getString(i, 'restaurantFavs');

     imageArray2[i] = loadImage('images/' + table2.getString(i, 'restaurantFavs'));
  //
    // let bestBrunch = table2.getString(i, 'best brunch');
    //
    // let mostFrequented= table2.getString(i, 'most frequented');

    // myRecsArray.push(new myRecs(myFavoriteOverall, bestBrunch, mostFrequented));
      myRecs.option(myFavs);
      myRecs.changed(favsChanged)

  }
  // for (let i = 0; i < myRecsArray.length; i++){
  //   myRecsArray.show();
  // }
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
  stroke(255)
  fill(255,31,128)
  strokeWeight(5)
  push();
  rotate(frameCount / -100.0);
  star(275, 100, 120, 60, 5);
  pop();




  //title text
  stroke(255,31,128);
  strokeWeight(7)
  fill(255);
  textSize(75);
  textStyle(BOLD)
  text('My Food Diary', 570, 85);

  //paragraph text
  // stroke(255,31,128)
  // strokeWeight(1)
  // textAlign(LEFT);
  // fill(0);
  // textSize(14);
  // text(s, 454, 140, 530, 200);

  //text
  stroke(255,31,128);
  strokeWeight(5)
  fill(255);
  textSize(25);
  text('Freshman Year', 990, 80);

//y2k
stroke('#ff5ca8');
strokeWeight(15);
rect(20, 500, 100, 100);
describe('White rect at center with pink outline.');
image(fries,20,500,100,100)

// stroke('#ff5ca8');
// strokeWeight(15);
// rect(1000, 20, 100, 100);
// describe('White rect at center with pink outline.');
// image(phone,1000,20,100,100)


stroke('#ff5ca8');
strokeWeight(15);
rect(100, 630, 100, 150);
describe('White rect at center with pink outline.');
image(y2k1,100,630,100,150)

stroke('#ff5ca8');
strokeWeight(15);
rect(200, 630, 100, 150);
describe('White rect at center with pink outline.');
image(y2k2,200,630,100,150)

stroke('#ff5ca8');
strokeWeight(15);
rect(300, 630, 100, 150);
describe('White rect at center with pink outline.');
image(y2k3,300,630,100,150)

stroke('#ff5ca8');
strokeWeight(15);
rect(400, 630, 100, 150);
describe('White rect at center with pink outline.');
image(y2k4,400,630,100,150)



stroke('#ff5ca8');
strokeWeight(15);
rect(400, 199, 80, 40);
describe('White rect at center with pink outline.');
image(yum,400,199,80,40)




image(camera,300,190,100,70)

image(popcorn,600,700,90,90)


image(cupcake,690,700,90,90)

image(drink,780,700,80,80)


image(fork,830,30,80,80)

stroke('#ff5ca8');
strokeWeight(15);
rect(120, 500, 100, 100);
describe('White rect at center with pink outline.');
image(strawberry,120,500,100,100)


stroke('#ff5ca8');
strokeWeight(15);
rect(120, 400, 100, 100);
describe('White rect at center with pink outline.');
image(milkshake,120,400,100,100)



stroke('#ff5ca8');
strokeWeight(15);
rect(20, 400, 100, 100);
describe('White rect at center with pink outline.');
image(donut,20,400,100,100)



stroke('#ff5ca8');
strokeWeight(15);
rect(990, 140, 115, 115);
describe('White rect at center with pink outline.');
image(la2,990,140,115,115)

stroke('#ff5ca8');
strokeWeight(15);
rect(770, 600, 220, 80);
describe('White rect at center with pink outline.');
image(eats,770,600,220,80)




stroke('#ff5ca8');
strokeWeight(15);
rect(430, 120, 530, 50);
describe('White rect at center with pink outline.');
image(aroundNola,430, 120, 530, 50);




image(phone,2,700,70,100)


// image(mimosa,1000,620,500,500)







  //Data box
  // noStroke();
  // fill(255,31,128);
  // rect(725, 259, 415, 340);
  // stroke(0);
  // strokeWeight(1.5);
  // fill(255);
  // rect(719, 259, 400, 326);

  //illustration
  // noStroke();
  // fill(255,31,128);
  // rect(310, 273, 326, 326);
  // stroke(0);
  // strokeWeight(1.5);
  // fill(255);
  // rect(294, 259, 326, 326);

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
      this.button.position(1150, i*45+100);

    }
    this.button.style('z-index', '1');



  }

  show(){
    this.button.mousePressed(() => this.update())
  }

  update(){


    // noStroke();
    // fill(255,31,128);
    // rect(310, 273, 326, 326);
    // stroke(0);
    // strokeWeight(1.5);
    // fill(255);
    // rect(294, 259, 326, 326);

    //Data box
    // stroke(255,31,128);
    // strokeWeight(3)
    // fill(255);
    // rect(725, 259, 415, 340);
    // stroke(255,31,128);
    // strokeWeight(5);
    // fill(255,31,128);
    // rect(719, 259, 400, 326);
    //
    // stroke('#ff5ca8');
    // strokeWeight(15);
    // rect(725, 259, 415, 340);
    // describe('White rect at center with pink outline.');
    image(mimosa,625,258,520,450)




    print("update");



    fill(255);
    stroke(255,31,128);
    strokeWeight(3);
    textSize(18);
    textAlign(LEFT);

    text('Restaurant: ' + this.restaurant, 730, 300 );
    text('Meal I Had: ' + this.meal, 730, 330)
    text('Best Time To Go: ' + this.bestTime, 730, 360);
    text('Type of Cuisine: ' + this.typeOfCuisine, 730, 390);
    rect(294, 300, 200, 200)

    image(this.image, 294, 300, 200, 200);

  }
}

function windowResized(){
  //resizeCanvas(windowWidth,windowHeight)

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



function favsChanged(){

  for (let i = 0; i < table2.getRowCount(); i++){
    if(myRecs.value() == table2.getString(i, 'favs')){
      image(imageArray2[i], 10, 150, 200, 100);


    }
  }
}
