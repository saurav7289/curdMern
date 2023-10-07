
//for image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
$("img.img1").attr("src" , randomImageSource1);

//for image 2
var randomNumber2 = Math.floor(Math.random() *6) +1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
$("img.img2").attr("src" , randomImageSource2);


if(randomNumber1 > randomNumber2)
{
    $("h1").text("🚩Player 1 win !");
}

else if(randomNumber2 > randomNumber1)
{
    $("h1").text("Player 2 win ! 🚩");
}

else
{
    $("h1").html("😒 Draw !");
}

