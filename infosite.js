
// these are the variables of the items and info that will be clicked//
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

//   this is the information that the pictures will present//
item1.addEventListener("click", function(){
     info1.innerHTML = "Caracal was created by an English duo consisting of brothers Howard and Guy Lawerence who create mainly electronic music."; 
    info2.innerHTML = "I really like this album because of the different types of beats and sounds that they put into this album. It is nothing like their other albums and this album really has a more indie electronic vibe to it. ";
    info3.innerHTML = "A caracal is actually a long-legged lynxlike cat with black tufted ears and a uniform brown coat. You can see that on the album cover, there is a sketch-like image of a caracal. The reason that they chose to name their album Caracal was because the album, 'Maintains Disclosure's hypnotic and euphoric sound while introducing the listener to new artists', according to an article by VH1.";
});
                      
item2.addEventListener("click", function(){
    info1.innerHTML = "Purpose is Justin Bieber's latest album that came out on November of 2015. This is one of my most favorite albums of his so far because the album actually tells a story and has a lot of meaning to it through his songs. His album actually contains many types of genres of music when it comes to the songs which is why I also really like it. ";
    info2.innerHTML = "Purpose is also mainly about Justin's journey with God and all the things that he has gone through, such as heart break or how he feels towards society.";
    info3.innerHTML = "Justin Bieber is one of my most favorite artists and I really hope that I can see him perform at San Jose in the HP Pavilion for his Purpose Tour.";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "You Should Be Here is the first ever album that made Kehlani go big. ";
    info2.innerHTML = "Kehlani had originally lived in Oakland and auditioned on America's Got Talent with a band called Poplyfe. Unfortunately they didn't win, but that never stopped her from sharing her talent.";
    info3.innerHTML = " I really like her music because of the r&b/rap vibes she has and also because her voice is really nice. She is also a major inspiration because of the way that she has lived and how no matter wghat, she fought for her dreams and acheived them.";
});

item4.addEventListener("click", function(){
    info1.innerHTML = "Made in the A.M. is One Direction's fifth album and last one for two years because they have recently gone on a break.";
    info2.innerHTML = "They are my most favorite boyband and I also saw them perform at the Levi Stadium in the summer on July 2015. ";
    info3.innerHTML = "This album is very different because they do not have Zayn who was a former band member and because the songs have more of rock feel, not their typical pop music feel.";
});