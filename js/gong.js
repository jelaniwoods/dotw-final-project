
document.addEventListener("DOMContentLoaded", function(event) {

  var ele = document.getElementById("laputa")

console.log(ele.src);


  if (document.body.addEventListener) {
      document.body.addEventListener("click", boop);
  } else if (document.body.attachEvent) {
      document.body.attachEvent("onclick", boop);
  }

  function boop() {
    if (ele.style.fill.includes("gray")) {
      ele.style.fill = "rgba(255, 255, 190, .75)";
      console.log("aocbous");
    }
    else {
      ele.style.fill = "gray";
    }

      //  s.style.autoPlay;

    }



    // console.log(document.getElementById('sound').src + " ddd");
    // document.addEventListener("click", function() {
    //   toggleRun()
    //   console.log(ele.style.animationName + " NNN");
    // });

});
