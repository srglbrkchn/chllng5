// Solution ot hover problem with half apparent svg picture
// Hover on
document.querySelector(".green-link").addEventListener("mouseover", function() {
  document.querySelector(".arrow").setAttribute("src", "images/icon-arrow0.svg");
});
// hover off
document.querySelector(".green-link").addEventListener("mouseout", function() {
  document.querySelector(".arrow").setAttribute("src", "images/icon-arrow.svg");
});


// Cheking email validity

// Check for first email input
document.querySelector(".first-section-info button").addEventListener("click", function() {
  warning("first-section-info");
});

// Check for second email input
document.querySelector(".action-info button").addEventListener("click", function() {
  warning("action-info");
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function warning(info) {

  if (info == "first-section-info") {
    var valid = emailIsValid(document.querySelector(".first-section-info input").value);

    if (valid) {
      document.querySelectorAll("label")[0].style.display = "none";
      document.querySelector(".first-section-info input").style.border = "1px black solid";
    } else {
      document.querySelector(".first-section-info input").style.border = "1px #d23751 solid";
      document.querySelectorAll("label")[0].style.display = "block";
    }
  } else if (info == "action-info") {
    var valid2 = emailIsValid(document.querySelector(".action-info input").value);

    if (valid2) {
      document.querySelectorAll("label")[1].style.display = "none";
      document.querySelector(".action-info input").style.border = "none";
    } else {
      document.querySelector(".action-info input").style.border = "1px #d23751 solid";
      document.querySelectorAll("label")[1].style.display = "block";
    }
  }

}
