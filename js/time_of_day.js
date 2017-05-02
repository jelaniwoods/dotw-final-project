
document.addEventListener("DOMContentLoaded", function(event) {

  var ele = document.getElementById('one');
  var pos = -10;

  var ele1 = document.getElementById('cats');
  var pos1 = 104;

  // var bod = document.getElementsByTagName('body');

  function animate() {
    requestAnimationFrame(animate);

    if (pos >= 100) {

      if (  ele.style.top != pos/3 + '%') {
        ele.style.top = pos/2 + '%';
        ele.style.zIndex = 12;
      }
      else {
          ele.style.top = 8 + '%';
          ele.style.zIndex = 1;
      }
      pos = -20;
    }
    else {
      pos += .05;
      ele.style.left = pos + '%';
    }

  }

  requestAnimationFrame(animate);


    function animate1() {
      requestAnimationFrame(animate1);
      // console.log("start");
      if (pos1 <= -3) {

        pos1 = 101;
      }
      else {
        pos1 -= .04; // increment pos by 3
        ele1.style.left = pos1 + '%';
      }
      // console.log(ele.style.left);
    }

    requestAnimationFrame(animate1);



});
