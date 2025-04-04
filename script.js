"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretnumber;
let score = 20;
let Highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "Give a number";
    displaymessage("Please insert a Number");
  }

  //When guess is correct
  else if (guess === secretnumber) {
    document.querySelector(".number").textContent = secretnumber;

    //document.querySelector(".message").textContent = "🎉 Correct Number.....";
    displaymessage("🎉 Correct Number.....");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".highscore").textContent = Highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent = guess > secretnumber ? "📈 Too High...." : "📈 Too Low....";
      displaymessage(
        guess > secretnumber ? "📈 Too High...." : "📈 Too Low...."
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "💣  You Lost the Game....";

      displaymessage("💣  You Lost the Game....");
    }
  }

  //when guess is high
  // else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High....";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "💣  You Lost the Game....";
  //   }
  // }

  // // when guess is low
  // else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too Low....";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "💣  You Lost the Game....";
  //   }
  // }
  //
});

document.querySelector(".again").addEventListener("click", function () {
  //change score
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;

  //change message
  document.querySelector(".message").textContent = "Start guessing...";

  //change sceret number
  document.querySelector(".number").textContent = "?";

  //change input value
  document.querySelector(".guess").value = "";

  //change background-color
  document.querySelector("body").style.backgroundColor = "#222";

  //change width of the nmber
  document.querySelector(".number").style.width = "15r2m";
});
