function simpleFxn() {
  var x = 0;
  x++;
}

function closureFxn(){
  var x = 0;
  function increment(){
    x++;
  }
  return increment;
}
