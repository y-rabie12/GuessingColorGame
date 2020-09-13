var colors =generateRandomColors(6);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message =  document.getElementById("message");
var h1 =  document.querySelector("h1");
var resetButton =  document.querySelector("button");

colorDisplay.innerHTML = pickedColor;

resetButton.addEventListener("click",function()
{
    colors =generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor
    for(var i=0; i < squares.length;i++)
    {
        squares[i].style.backgroundColor =colors[i];
    }
    h1.style.backgroundColor = "#232323";

})
for(var i=0; i < squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            message.innerHTML = "Correct Guess";
            changeColors();
            resetButton.innerHTML = "Play Again?"
            h1.style.backgroundColor = pickedColor; 
         
        }
        else
        {
            message.innerHTML = "Try again!"
            this.style.backgroundColor = "#232323";
        }
    })
}

function changeColors()
{
    for(var i=0; i < squares.length;i++)
    {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor()
{
   var  randomColor =  Math.floor(Math.random() * colors.length);
   return(colors[randomColor]);
}

function generateRandomColors(num)
{
    var arr=[];
    for(var i =0; i< num; i++)
    {
        arr.push(randomColor())

    }
    return arr;

}

function randomColor()
{
     var r = Math.floor(Math.random()*256);
     var g= Math.floor(Math.random()*256);
     var b = Math.floor(Math.random()*256);
     var rgb = "rgb"+ "(" + r + ", " + g + ", " + b +")";
     return rgb;
}

