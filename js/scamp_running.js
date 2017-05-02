
document.addEventListener("DOMContentLoaded", function(event) {

  var ele = document.getElementById('scamp');
  var pos = -20;

  function animate() {

    if (pos >= 51) {
      pos = -20;
      // return;
    }
    else {
      requestAnimationFrame(animate);
      pos += .25;
      ele.style.left = pos + '%';
    }

    console.log(ele.src);
  }



  if (document.body.addEventListener) {
      document.body.addEventListener("click", toggleRun);
  } else if (ele.attachEvent) {
      document.body.attachEvent("onclick", toggleRun);
  }

  function toggleRun() {

        // if (!document.getElementById("scamp").animationName.includes("run"))
        // {


            document.getElementById("scamp").animationName = "run";
            document.getElementById("scamp").animationDuration = "8s";
            requestAnimationFrame(animate);
            // document.getElementById("bub").visibility = "visible";
        // }
        // else
        // {
        //     document.getElementById("scamp").animation_name = "";
        //     // document.getElementById("bub").visibility = "hidden";
        //
        // }
        console.log(document.getElementById('scamp').animationName);
    }


    console.log(ele.style.animationName + " ddd");
    // document.addEventListener("click", function() {
    //   toggleRun()
    //   console.log(ele.style.animationName + " NNN");
    // });

});
