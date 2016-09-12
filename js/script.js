function highlight(file){

  if(file.type=="image"){
    var img = createImg(file.data).hide();
    image(img,0,0,200,200);
  }
  else{

  }


}

function setup(){
  background(200);
  createCanvas(300,300);

  var dropzone = select("#dropzone");

  dropzone.drop(highlight);
}
