let table;
let restaurantMenu;
let canvas
let imageArray = [];
let submitButton;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/eatingAtRestaurants.csv', 'csv', 'header');

}
s
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(0);
  fill(255)



  restaurantMenu = createSelect();
  restaurantMenu.option('Select restaurant')
  submitButton = createButton('Submit')

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
    //grab each of the dates
    let date = table.getString(i, 'date');

    let restaurant = table.getString(i, 'restaurant');


    restaurantMenu.option(restaurant)
    //print dates on the screen
    // text(date, 50, (i*40)+40)
    // text(company, 150, (i*40)+40)
  }
print(imageArray)
  //trigger the changeData function when
  //menu is changeData
  submitButton.mousePressed(changeData);

}

function changeData(){
  background(0);
  textSize(30)

  textAlign(CENTER)
  imageMode(CENTER);
  for (let i = 0; i < table.getRowCount(); i++){
    if(restaurantMenu.value() == table.getString(i, 'restaurant')){
      text(table.getString(i, 'restaurant'), windowWidth/2, 50);
      text(table.getString(i, 'date'), windowWidth/2, 90);
      text(table.getString(i, 'meal'), windowWidth/2, 130);
      text(table.getString(i, 'best time'), windowWidth/2, 170);
      text(table.getString(i, 'type of cuisine'), windowWidth/2, 200);
      for (let j = 0; j < table.getString(i, 'image'); j++){
        image(imageArray[i], random(windowWidth), random(windowWidth), 30, 30)
      }
    }
  }

}

function draw(){


}
