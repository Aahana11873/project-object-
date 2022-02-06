img="";
status = "";
objects=[];
function preload(){
    img=loadImage("fruit basket.jpg")
}
function setup(){
        canvas=createCanvas(500,500);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(400,400);
        video.hide();
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="Status :Detecting Object";
}
function modelLoaded(){
    console.log("model Loaded");
    status=true;
}
function gotResult(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,500,500);
   fill("blue");
   text("fruit basket",215,75);
   noFill();
   stroke("red")
   rect(200,60,400,350)
}
function home(){
    window.location="index.html";
}