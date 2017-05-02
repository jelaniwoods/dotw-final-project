
document.addEventListener("DOMContentLoaded", function(event) {

  var ele = document.getElementById('squib');
  var pos = -10;
  var r = 77;
  // ele.style.right = 55+"%";

  // var bod = document.getElementsByTagName('body');

  function animate() {
    requestAnimationFrame(animate);

    if (pos >= 101) {
      r = 0;
      pos = 0;
    }
    else {
      pos += .14;
      r-= .08;
      ele.style.bottom = pos + '%';
      ele.style.left = r+ "%";
    }

  }

  requestAnimationFrame(animate);






});
