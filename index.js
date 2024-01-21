window.addEventListener("load", (event) => {
  const nextButton1 = document.getElementById("next-button1");
  const nextButton2 = document.getElementById("next-button2");
  const nextButton3 = document.getElementById("next-button3");

  const question1 = document.getElementById("question1");
  const question2 = document.getElementById("question2");
  const question3 = document.getElementById("question3");
  const conclusion = document.getElementById("conclusion");

  let q1Answer = null;
  let q2Answer = null;
  let q3Answer = null;

  nextButton1.addEventListener("click", function () {
    console.log("Next button clicked for Question 1");
    q1Answer = document.querySelector('input[name="q1"]:checked').value;
    question1.style.display = "none";
    question2.style.display = "block";
  });

  nextButton2.addEventListener("click", function () {
    console.log("Next button clicked for Question 2");
    q2Answer = document.querySelector('input[name="q2"]:checked').value;
    question2.style.display = "none";
    question3.style.display = "block";
  });

  nextButton3.addEventListener("click", function () {
    console.log("Next button clicked for Question 3");
    q3Answer = document.querySelector('input[name="q3"]:checked').value;
    question3.style.display = "none";
    conclusion.style.display = "block";
    calculateConclusion();
  });

  function calculateConclusion() {
    let conclusionText = "";
    let recommendationText = "";

    const totalScore =
      parseInt(q1Answer) + parseInt(q2Answer) + parseInt(q3Answer);

    if (totalScore <= 6) {
      conclusionText =
        "You have low stress levels and cope with stress well. Keep it up!";
      recommendationText = "Perbanyak Istighfar.";
      setConclusionImage("conclusionImage1");
    } else if (totalScore <= 12) {
      conclusionText =
        "You have moderate stress levels. Consider finding additional stress-management techniques.";
      recommendationText = "Makan dulu bang.";
      setConclusionImage("conclusionImage2");
    } else {
      conclusionText =
        "You have high stress levels. It's important to prioritize stress reduction in your life.";
      recommendationText = "Perbanyak nonton jepang untuk mengurangi stressmu.";
      setConclusionImage("conclusionImage3");
    }

    console.log(conclusionText);
    const conclusionTextElement = document.getElementById("conclusionText");
    if (conclusionTextElement) {
      conclusionTextElement.textContent = conclusionText;
    }
    const recommendationTextElement =
      document.getElementById("recommendationText");
    if (recommendationTextElement) {
      recommendationTextElement.textContent = recommendationText;
    }

    const conclusionElement = document.getElementById("conclusion");
    if (conclusionElement) {
      conclusionElement.style.display = "block";

      const restartButton = document.getElementById("restartButton");
      if (restartButton) {
        restartButton.addEventListener("click", function () {
          resetTest();
        });
      }
    }
  }

  function setConclusionImage(imageId) {
    ["conclusionImage1", "conclusionImage2", "conclusionImage3"].forEach(
      (id) => {
        const image = document.getElementById(id);
        if (image) {
          image.style.display = "none";
        }
      }
    );

    const conclusionImage = document.getElementById(imageId);
    if (conclusionImage) {
      conclusionImage.style.display = "block";
    }
  }

  function resetTest() {
    q1Answer = null;
    q2Answer = null;
    q3Answer = null;

    clearRadioButtons("q1");
    clearRadioButtons("q2");
    clearRadioButtons("q3");

    const conclusionElement = document.getElementById("conclusion");
    if (conclusionElement) {
      conclusionElement.style.display = "none";
    }

    const question1 = document.getElementById("question1");
    if (question1) {
      question1.style.display = "block";
    }
  }

  function clearRadioButtons(questionName) {
    const radioButtons = document.querySelectorAll(
      `input[name="${questionName}"]:checked`
    );
    radioButtons.forEach((button) => {
      button.checked = false;
    });
  }
});
