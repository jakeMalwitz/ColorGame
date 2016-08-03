$(document).ready(function() {


  var gray = $('.box').append('<div class="ogbox"></div>\n').children().last().css('background-color', 'gray');
  var blue = $('.box').append('<div class="ogbox"></div>\n').children().last().css('background-color', 'blue');
  var black = $('.box').append('<div class="ogbox"></div>\n').children().last().css('background-color', 'black');
  var pink = $('.box').append('<div class="ogbox"></div>\n').children().last().css('background-color', 'pink');
//ar colorOptions = ['yellow','orange','green','purple'];
/*function addBox(colorOptions){
  $('.box').append('<div class="newbox"></div>\n');
  var $newBox = $('.box').children().last();
  $newBox.append();

}
*/
//add new box
//delete box
var colarray = [];
colarray.push(gray, blue, black, pink);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

var randomColor = colarray[randomNumber(0, colarray.length)];
console.log(randomColor);
//var notThisColor = colarray[];

$('footer').children().css('color', $(randomColor).css('background-color'));

/*$(randomColor).on('click', function() {
$('footer').append('<p>Correct!</p>'+ '<button>Play Again?</button>')
$('button').on('click', function() {
$('button').remove();

});
*/



//});
///Money Maker, find way to click on everything else and be output this
//console.log($().not(randomColor));
for(var i = 0; i < colarray.length; i++) {
$(colarray[i]).on('click', function() {
  console.log(randomColor);
if(colarray[i] !== randomColor){
  console.log("Does this work");
  $('footer').append('<p>Incorrect!</p>');
} else {
  $(randomColor).on('click', function() {
  $('footer').append('<p>Correct</p>');
});//click function
}//else
});
}

  //var colorOptions = ['yellow','orange','green','purple'];
  //var $color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  //console.log($color);

});//document
