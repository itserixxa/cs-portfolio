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

mainpicture.addEventListener("click", function(){
    info1.innerHTML = "Seasons affect trees greatly, mainly with their leaves. In this first picture, you will see four different looking parts of the tree that are affected by each season. The far end of the tree is Spring,then after is Summer followed by Fall/Autumn, and Winter. In the next picture, Spring starts to occur aorund the beginning of the year while Winter is still ending. Animals return and begin to need plants to feed on or pollinate and trees start to grow again with new leaves and also begin to grow taller and reproduce to create more trees. Although the trees don't have many leaves, they can still give off oxygen anyways. "
    info2.innerHTML = "In the third image, we see how trees turn out during Summer. Now trees are receiving a ton of energy and are fully grown with a lot of leaves which means that they are nice and healthy. "
    info3.innerHTML = "In the last image, we now see shows how a tree would look during Fall/Autumn. This is when the leaves start to shrivel up and turn from a darkish green to colors like orange/brown, or sometimes yellow. This happens so the branches and leaves prepare for 'hibernation' because it will become very cold and the trees need to preserve all their energy for the next season which is Winter. In the last picture, you will see how Winter affects trees. Trees will usually be bare when it is really cold and even when it snows. Right after Winter the Cycle will continue again starting with Spring and so on. Seasons are caused by the rotations and titlting of the Earth's axis and we can see how it can affect living things, like trees "
    
});
