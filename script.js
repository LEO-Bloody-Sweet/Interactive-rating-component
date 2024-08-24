// // Select elements from the DOM
// var ratings = document.querySelectorAll(".ratings div");
// var submit = document.querySelector("#submit");
// var first = document.querySelector("#first");
// var thank = document.querySelector(".thank");
// var selectedRating = null;

// // Add click event listeners to each rating
// ratings.forEach(function (rating) {
//   rating.addEventListener("click", function () {
//     // Remove the 'selected' class from all ratings
//     ratings.forEach(function (rating) {
//       rating.classList.remove("selected");
//     });
//     // Add the 'selected' class to the clicked rating
//     rating.classList.add("selected");
//     // Store the selected rating value
//     selectedRating = rating.textContent;
//   });
// });

// // Add click event listener to the submit button
// submit.addEventListener("click", function () {
//   // Check if a rating has been selected
//   if (selectedRating) {
//     // Hide the rating section and show the thank you section
//     first.style.display = "none";
//     thank.style.display = "block";
//     // Display the selected rating in the thank you section
//     thank.querySelector(".yourno").textContent = `You selected ${selectedRating} out of 5`;
//   } else {
//     // Alert the user to select a rating if none is selected
//     alert("Please select a rating before submitting.");
//   }
// });

var ratings = document.querySelectorAll(".ratings div");
var btn = document.querySelector("#submit");
var first = document.querySelector("#first");
var thank = document.querySelector(".thank");

var selectedRating;

ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratings.forEach(function (rating) {
      rating.classList.remove("selected");
    });

    rating.classList.add("selected");
    selectedRating = rating.textContent;
  });
});

btn.addEventListener("click", function () {
  if (selectedRating) {
    first.style.display = "none";
    thank.style.display = "block";
    thank.querySelector(
      ".yourno"
    ).textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
