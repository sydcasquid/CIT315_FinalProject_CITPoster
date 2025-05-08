// q1
let qOneResponse = [
    "Makes sense, but it is NOT correct.",
    "I see where you're going with this, but it's not right.",
    "Yes! You got it right!",
    "Almost there...",
  ];

   document.querySelectorAll(".qOne").forEach((e) => {
    addEventListener("click", (e) => {
      let qNumber = e.target.attributes.choice.value;
      document.querySelector("#correctqOne").textContent = qOneResponse[qNumber];
    });
  });

// q2
let qTwoResponse = [
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Yes! You got it right!",
  "Almost there...",
];

 document.querySelectorAll(".qTwo").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber2 = e.target.attributes.choiceQ2.value;
    document.querySelector("#correctqTwo").textContent = qTwoResponse[qNumber2];
  });
});

// q3
let qThreeResponse = [
  "Makes sense, but it is NOT correct.",
  "Yes! You got it right!",
  "I see where you're going with this, but it's not right.",
  "Almost there...",
];

 document.querySelectorAll(".qThree").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber3 = e.target.attributes.choiceQ3.value;
    document.querySelector("#correctqThree").textContent = qThreeResponse[qNumber3];
  });
});

// q4
let qFourResponse = [
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Yes! You got it right!",
  "Almost there...",
];

 document.querySelectorAll(".qFour").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber4 = e.target.attributes.choiceQ4.value;
    document.querySelector("#correctqFour").textContent = qFourResponse[qNumber4];
  });
});
  
// Multiple answer 1, Q5

document.querySelector("#checkAnswer").addEventListener("click", (e) => {
  console.log("check buttons");
  let check_buttons = document.querySelectorAll(".answer");
  let correct_buttons = document.querySelectorAll("[correct]");
  let checked_buttons = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  if (checked_buttons.length <= 1) {
    document.querySelector("#answer_checked").textContent =
      "You must pick all that apply.";
    return false;
  } if (checked_buttons.length == 4) {
    document.querySelector("#answer_checked").textContent =
      "Nice try, but not all of them are correct.";
    return false;
  }

  console.log("checked buttons", checked_buttons);
let score = 0;
  for (let i = 0; i < correct_buttons.length; i++) {
    for (let j = 0; j < checked_buttons.length; j++)
      if (correct_buttons[i] === checked_buttons[j]) score += 1;
    
  } if (score == 3)
  document.querySelector(
    "#answer_checked"
  ).textContent = `You got all ${score} right!`;
  else document.querySelector(
    "#answer_checked"
  ).textContent = `You got ${score} of them right!`;

});
  
// q6
let qSixResponse = [
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Yes! You got it right!",
  "Almost there...",
];

 document.querySelectorAll(".qSix").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber6 = e.target.attributes.choiceQ6.value;
    document.querySelector("#correctqSix").textContent = qSixResponse[qNumber6];
  });
});

// q7
let qSevenResponse = [
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Yes! You got it right!",
  "Almost there...",
];

 document.querySelectorAll(".qSeven").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber7 = e.target.attributes.choiceQ7.value;
    document.querySelector("#correctqSeven").textContent = qSevenResponse[qNumber7];
  });
});

// q8
let qEightResponse = [
  "Yes! You got it right!",
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Almost there...",
];

 document.querySelectorAll(".qEight").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber8 = e.target.attributes.choiceQ8.value;
    document.querySelector("#correctqEight").textContent = qEightResponse[qNumber8];
  });
});

// q9
let qNineResponse = [
  "Makes sense, but it is NOT correct.",
  "I see where you're going with this, but it's not right.",
  "Almost there...",
  "Yes! You got it right!",
];

 document.querySelectorAll(".qNine").forEach((e) => {
  addEventListener("click", (e) => {
    let qNumber9 = e.target.attributes.choiceQ9.value;
    document.querySelector("#correctqNine").textContent = qNineResponse[qNumber9];
  });
});

// Multiple answer 2, Q10

document.querySelector("#checkAnswer2").addEventListener("click", (e) => {
  console.log("check buttons");
  let check_buttons2 = document.querySelectorAll(".answer2");
  let correct_buttons2 = document.querySelectorAll("[correct2]");
  let checked_buttons2 = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  if (checked_buttons2.length <= 1) {
    document.querySelector("#answer_checked2").textContent =
      "You must pick all that apply.";
    return false;
  } if (checked_buttons2.length == 4) {
    document.querySelector("#answer_checked2").textContent =
      "Nice try, but not all of them are correct.";
    return false;
  }

  console.log("checked buttons", checked_buttons2);
let score = 0;
  for (let i = 0; i < correct_buttons2.length; i++) {
    for (let j = 0; j < checked_buttons2.length; j++)
      if (correct_buttons2[i] === checked_buttons2[j]) score += 1;
    
  } if (score == 2)
  document.querySelector(
    "#answer_checked2"
  ).textContent = `You got all ${score} right!`;
  else document.querySelector(
    "#answer_checked2"
  ).textContent = `You got ${score} of them right!`;

});

// let FandomQuestionResponse = [
//   "Apply technology to intervene in problems and improve the human or business condition. See here for more information",
//   "Yes! You got it right!",
//   "I see where you're going with this, but it's not right.",
// ];

//  // Fandom name group
//  document.querySelectorAll(".fandomName").forEach((e) => {
//   addEventListener("click", (e) => {
//     let fandomNumber = e.target.attributes.choice.value;
//     document.querySelector("#correctFandomName").textContent = FandomQuestionResponse[fandomNumber];
//   });
// });

let chosenMajorResponse = [
  {
    text: "Apply technology to intervene in problems and improve the human or business condition.",
    link: "https://polytechnic.purdue.edu/degrees/computer-and-information-technology"
  },
  {
    text: "Design, build, manage and investigate IT systems and infrastructures while analyzing security risks and vulnerabilities.",
    link: "https://polytechnic.purdue.edu/degrees/cybersecurity"
  },
  {
    text: "Gain the expertise to solve networking challenges with the best-suited hardware and software options.",
    link: "https://polytechnic.purdue.edu/degrees/computing-infrastructure-and-network-engineering-technology"
  },
  {
    text:"Study how organizations use computer systems and design solutions to help them operate more efficiently and effectively.",
    Link:"https://polytechnic.purdue.edu/degrees/computer-systems-analysis-and-design"
  },
  {
    text:"Learn to apply and evaluate data analytics, statistics and machine learning for decision-making purposes.",
    Link: "https://polytechnic.purdue.edu/degrees/data-analytics-technologies-and-applications"
  },
];

document.querySelectorAll(".major").forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.getAttribute("choicem");
    let response = chosenMajorResponse[choice];
    document.querySelector("#chosenMajor").innerHTML = `
      <p>${response.text}</p>
      <button class="btn major col-12" style="font-size: x-small; width: 25%;" choice="4">
      <a href="${response.link}" target="_blank">Learn more here</a>
      </button>

    `;
  });
});
