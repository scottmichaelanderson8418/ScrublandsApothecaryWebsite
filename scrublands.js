"use strict";


var scottVar = 0;



function startCountDown() {


  if (scottVar > 0) {
    document.getElementById("Alert").textContent = "";

  }
  scottVar++;

  var secsLeft = 10;

  var clockID = setInterval(countdown, 1000);




  // var clockID = timeID;
  /* ------------------------------------------------- */

  function stopCountDown() {
    clearInterval(clockID);
    document.getElementById("Alert").textContent = "Time's Up";
  }

  function checkCountDown() {
    if (secsLeft === 0) {
      stopCountDown();
    }
  }

  /* The addLeadingZero() function adds a leading zero to values which are less than 10 */

  function addLeadingZero(num) {
    var numStr = num < 10 ? "0" + num : "" + num;
    return numStr;
  }

  /* The checkCountdown() function tests whether there is any time left to make the
     ticket order. If the time left is 0, the stopClock() function is run;
     otherwise nothing happens and the program continues to run. */
  function countdown() {
    //Declare the secsString variable
    var secsString = addLeadingZero(secsLeft);

    document.getElementById("seconds").innerHTML = secsString;

    checkCountDown(secsLeft);
    secsLeft--;
  }



}


function scottDate() {

  document.getElementById('demo').innerHTML = Date();

}


let img = document.querySelector("img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  img.src = "sea_green.png";
});
btn2.addEventListener("click", () => {
  img.src = "dogShampoo1.jpg";
});
btn3.addEventListener("click", () => {
  img.src = "liquid.png";
  // });

  const mediaQuery = "(max-width:480px)";
  const mediaQueryList = window.matchMedia(mediaQuery);

  mediaQueryList.addEventListener("change", (event) => {
    console.log(window.innerWidth);
    if (event.matches) {
      changeBannerA();
    } else {
      changeBannerB();
    }
  });
  //-------------------------------------------------------------

  function changeBannerA() {
    document.getElementById("banner").src = "bannerMobile.jpg";
  }
  function changeBannerB() {
    document.getElementById("banner").src = "banner.png";
  }

  setTimeout(myFunction, 3000);

  setTimeout(runGreeting, 3000);

  function runGreeting() {
    document.getElementById("welcome").textContent = "Welcome to Scrublands Apothecary";
  }

  function currentDate() {
    document.getElementById("demo").innerHTML = Date();
  }
});

function alertFunction() {
  alert("Hello! Welcome to Scrublands Apothecary");
}
