function main() { 
  log(randomDec(0,10,5));//basically logging a random deciaml between 0 and 10 to the 5th place.
}

function update() {
  // you only need to include main() in update function 
  //if you script includes animating.
  //main();
  requestAnimationFrame(update);
}

/* 
if your script does not need animating put main function above where the update function is called 
*/
main();
update();


/* 
use update function for any kind of animation with 
the code you want to run in the main() function. 
If you want to add more custom shapes, just make a 
function called yourShape() or whatever your shape
name will be and use tris from fillTri or StrokeTri 
to construct your custom shape.
*
