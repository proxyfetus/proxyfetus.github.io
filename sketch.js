// var bubbles = [];
var imgs = [];
var txt = [];
var i;
// var text = document.getElementById("show");


function setup() {
  imgs = selectAll('img');

  for (i = 0; i < imgs.length; i++) {
    imgs[i].mouseOver(lowOpacity);
    imgs[i].mouseOut(highOpacity);

}



// function show(){
//   var myAlt = this.alt;
//   text.innerHTML = myAlt;
// }


function lowOpacity() {
  this.style('opacity', '0.2');

  txt = selectAll('p');


  txt.style("width","20%");
  // txt.style("margin","auto");
}


function highOpacity() {
  this.style('opacity', '1');
  txt.html("");
}
