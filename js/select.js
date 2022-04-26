let table;
let recMenu;
let canvas
let submitButton;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/myRecs.csv', 'csv', 'header');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(0);
  fill(255)



  recMenu = createSelect();
  recMenu.option('My Reccomendations')
  submitButton = createButton('Submit')

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    //grab each of the dates
    let myFavoriteOverall = table.getString(i, 'My Favorite Overall');

    let bestBrunch = table.getString(i, 'Best brunch');

    let mostFrequented = table.getString(i, 'Most Frequented');

    recMenu.option(rec)
    //print dates on the screen
    // text(date, 50, (i*40)+40)
    // text(company, 150, (i*40)+40)
  }

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
    if(recMenu.value() == table.getString(i, 'myFavoriteOverall')){
      text(table.getString(i, 'bestBrunch'), windowWidth/2, 50);
      text(table.getString(i, 'mostFrequented'), windowWidth/2, 90);

    }
  }

}

function draw(){


}
