let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateSlider();
}

function updateSlider() {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


function filterRecipes(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Recipe Search Functionality

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const searchContainer = document.getElementById("searchContainer");
  const searchBar = document.getElementById("searchBar");

  startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchContainer.style.display = "block";
    searchBar.focus(); // focus cursor in input
  });

  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();
    const recipeCards = document.querySelectorAll(".recipe-container .card");

    recipeCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});



  document.getElementById('recipe-search').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const recipeCards = document.querySelectorAll('.card');

    recipeCards.forEach(function(card) {
      const recipeTitle = card.querySelector('h3').textContent.toLowerCase();
      if (recipeTitle.includes(searchText)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });


// // Get the "Start Here" button and search container
// const startBtn = document.getElementById('startBtn');
// const searchContainer = document.getElementById('searchContainer');

// // Add event listener to button
// startBtn.addEventListener('click', () => {
//   // Toggle the visibility of the search container
//   searchContainer.style.display = 'block';
// });





