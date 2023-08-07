'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// fo the quotes generator

const quoteBtn = document.getElementById("quoteBtn");
const quotePopup = document.getElementById("quotePopup");
const closeBtn = document.getElementById("closeBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

// Function to fetch a random quote from the Quotes API
async function fetchQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];
    return quote;
  } catch (error) {
    console.log("Error fetching quote:", error);
    return null;
  }
}

// Function to display the quote popup with the fetched quote
async function displayQuotePopup() {
  const quote = await fetchQuote();
  if (quote) {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author || "Unknown";
    quotePopup.style.display = "block";
  }
}

// Event listener for the "Generate Quote" button
quoteBtn.addEventListener("click", displayQuotePopup);

// Event listener to close the quote popup
closeBtn.addEventListener("click", () => {
  quotePopup.style.display = "none";
});



         // for the pop-on
           const termsLink = document.getElementById("termsLink");
            const termsPopup = document.getElementById("termsPopup");
            const closeBtn1 = document.getElementById("closeBtn1");
          
            // Function to show the Terms & Conditions popup
            function showTermsPopup() {
              termsPopup.style.display = "block";
            }
          
            // Function to hide the Terms & Conditions popup
            function hideTermsPopup() {
              termsPopup.style.display = "none";
            }
          
            // Event listener to show the popup when the "Terms & Condition" link is clicked
            termsLink.addEventListener("click", showTermsPopup);
          
            // Event listener to hide the popup when the close button is clicked
           closeBtn1.addEventListener("click", hideTermsPopup);


// for the news 
  // Function to fetch news data from the API and populate blog cards
  async function fetchAndPopulateNews() {
    const apiKey = '6442fdb0c04e4403b8f6709f7b734304';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + apiKey;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const blogList = document.querySelector('.blog-list');

      // Iterate through the articles and create blog cards
      data.articles.forEach(article => {
        const { title, urlToImage, publishedAt } = article;

        // Create elements for blog card
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="blog-card">
            <figure class="card-banner">
              <a href="${article.url}">
                <img src="${urlToImage}" width="1181" height="843" loading="lazy" alt="${title}" class="img-cover">
              </a>
            </figure>
            <a href="#" class="card-tag">${publishedAt}</a>
            <h3 class="card-title">
              <a href="${article.url}">${title}</a>
            </h3>
          </div>
        `;

        // Append the blog card to the list
        blogList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  // Call the function to fetch and populate news when the page loads
  fetchAndPopulateNews();


                  const currentDate = new Date();
                  const year = currentDate.getFullYear();
                  let month = currentDate.getMonth() + 1;
                  let day = currentDate.getDay();
                  
                  if (month < 10){
                    month = "0" + month;
                  }
                  
                  if (day < 10){
                    day = "0" + day; 
                  }
                  
                  const cardTagElement = document.getElementById('current-date'); 
                  cardTagElement.textContent = year + '-' + month + '-' + day;
