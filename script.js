// const q1 = document.querySelector("#q1-btn");
// const q2 = document.querySelector("#q2-btn");
// const q3 = document.querySelector("#q3-btn");
// const q4 = document.querySelector("#q4-btn");


// const image = document.querySelector("#q1-btn");
// const image2 = document.querySelector("#q2-btn");
// const image3 = document.querySelector("#q3-btn");
// const image4 = document.querySelector("#q4-btn");

// q1.addEventListener("click", showAnswer1)
// q2.addEventListener("click", showAnswer2)
// q3.addEventListener("click", showAnswer3)
// q4.addEventListener("click", showAnswer4)

// const answer1 = document.querySelector(".faq-answer1")
// const answer2 = document.querySelector(".faq-answer2")
// const answer3 = document.querySelector(".faq-answer3")
// const answer4 = document.querySelector(".faq-answer4")

// function showAnswer1() {
//   if (image.src.includes("assets/images/icon-plus.svg")) {
//     image.src = "assets/images/icon-minus.svg";
//   } else {
//     image.src = "assets/images/icon-plus.svg";
//   }
//   answer1.classList.toggle("hidden");
// }

// function showAnswer2() {
//   if (image2.src.includes("assets/images/icon-plus.svg")) {
//     image2.src = "assets/images/icon-minus.svg";
//   } else {
//     image2.src = "assets/images/icon-plus.svg";
//   }
//   answer2.classList.toggle("hidden");
// }

// function showAnswer3() {
//   if (image3.src.includes("assets/images/icon-plus.svg")) {
//     image3.src = "assets/images/icon-minus.svg";
//   } else {
//     image3.src = "assets/images/icon-plus.svg";
//   }

//   answer3.classList.toggle("hidden");
// }


// function showAnswer4() {
//   if (image4.src.includes("assets/images/icon-plus.svg")) {
//     image4.src = "assets/images/icon-minus.svg";
//   } else {
//     image4.src = "assets/images/icon-plus.svg";
//   }

//   answer4.classList.toggle("hidden");
// }

const faqItems = document.querySelectorAll(".faq-element");

faqItems.forEach(function (item) {
  const icon = item.querySelector(".plus-minus-icon");
  const answer = item.querySelector("p");

  icon.addEventListener("click", function () {
    answer.classList.toggle("hidden");

    if (icon.src.includes("icon-plus.svg")) {
      icon.src = "assets/images/icon-minus.svg";
    } else {
      icon.src = "assets/images/icon-plus.svg";
    }
  });
});