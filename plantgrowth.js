// JavaScript 
var nextButton = document.getElementById("nextButton");
var mainpicture = document.getElementById("mainpicture");
//var spring = document.getElementById("spring");
// var summer = document.getElementById("summer");
//var fall = document.getElementById("fall");
// var winter = document.getElementById("winter");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

var images = ["images/spring.png","images/summer.png", "images/fall.png","images/winter.png"];
// this is an array for all the images //
var imagesIndex = 0;
nextButton.addEventListener("click", function(){
    imagesIndex++;
    //this will line up the images in order when clicking them
    mainpicture.src = images[imagesIndex]
});
spring.addEventListener("click", function(){
    info1.innerHTML = ""
    info2.innerHTML = ""
    info3.innerHTML = ""
    
});
summer.addEventListener("click", function(){
    info1.innerHTML = ""
    info2.innerHTML = ""
    info3.innerHTML = ""
});
fall.addEventListener("click", function(){
    info1.innerHTML = ""
    info2.innerHTML = ""
    info3.innerHTML = ""
});
winter.addEventListener("click",function(){
   info1.innerHTML = ""
   info2.innerHTML = ""
   info3.innerHTML = ""
});