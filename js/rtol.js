
document.addEventListener("DOMContentLoaded", function(event) {

  var ele = document.getElementById('fish');
  var pos = -10;

  var ele1 = document.getElementById('fish1');
  var pos1 = 104;

  // var bod = document.getElementsByTagName('body');

  function animate() {
    requestAnimationFrame(animate);

    if (pos >= 101) {

      if (  ele.style.top != pos/3 + '%') {
        ele.style.top = pos/2 + '%';
      }
      else {
          ele.style.top = 8 + '%';
      }
      pos = 0;
    }
    else {
      pos += .2;
      ele.style.left = pos + '%';
    }

  }

  requestAnimationFrame(animate);


  function animate1() {
    requestAnimationFrame(animate1);
    // console.log("start");
    if (pos1 <= -3) {

      if (  ele1.style.top != Math.abs(pos1/3) + '%') {
        ele1.style.top = Math.abs(pos1/3) + '%';
      }
      else {
          ele1.style.top = 50 + '%';
      }
      pos1 = 101;
    }
    else {
      pos1 -= .2; // increment pos by 3
      ele1.style.left = pos1 + '%';
    }
    console.log(ele.style.left);
  }

  requestAnimationFrame(animate1);



});
