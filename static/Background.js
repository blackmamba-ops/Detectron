var index = 0;
var data= ["See","Beyond","the Ordinary","Detectron"]; //

var span= document.querySelector('span');
var section= document.querySelector('section');

function init() {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
}

init();

setInterval(
  function(){
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ?  index++ : 0 ;
  }
, 4501);

// Enable vertical scrolling only
document.body.style.minHeight = '400vh';
document.body.style.overflowY = 'scroll';  // Set overflow-y to 'scroll'
// document.body.style.overflowX = 'hidden';  // Hide horizontal scrollbar
