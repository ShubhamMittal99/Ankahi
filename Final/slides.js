var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("slideshow")[0];
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  var bg = myIndex;
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
    bg = (x.length);
  }
  if (myIndex === 1) {
    bg = (x.length);
  }    
  x[myIndex-1].style.display = "block";  
  y.style.backgroundImage = 'url(' + x[bg - 1].src + ')';
  setTimeout(carousel, 2000);
}

