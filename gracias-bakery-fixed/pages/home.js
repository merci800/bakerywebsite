// ==========================================================
// GRACIAS BAKERY - home.js  (only index.html)
//
// What this file does:
//   1. Puts the WhatsApp number into every WhatsApp button
//   2. Builds the product cards from products.js
//   3. Search box and category buttons (Bread, Cakes...)
//   4. Builds the review cards from reviews.js
//   5. Shows an emoji if hero.jpg or team.jpg is missing
//
// It uses: products (products.js), reviews (reviews.js), Cart (cart.js)
// ==========================================================


// ----------------------------------------------------------
// 1. WHATSAPP BUTTONS
//    Any link with data-wa="message" gets its WhatsApp address here.
//    The number is written only once: in cart.js (Cart.whatsapp).
// ----------------------------------------------------------
function whatsappLink(message) {
  return "https://wa.me/" + Cart.whatsapp + "?text=" + encodeURIComponent(message);
}

document.querySelectorAll("[data-wa]").forEach(function (link) {
  link.href = whatsappLink(link.dataset.wa);
});


// ----------------------------------------------------------
// 2. PRODUCT CARDS
// ----------------------------------------------------------
const productGrid = document.getElementById("product-grid");
const searchBox = document.getElementById("search");
const noResults = document.getElementById("no-results");
let activeCategory = "all"; // which button is selected

// Build ONE card for ONE product
function makeCard(p) {
  const card = document.createElement("article");
  card.className = "product product-home";

  const detailsUrl = "product.html?id=" + p.id;
  const badge = p.badge ? '<span class="badge">' + p.badge + "</span>" : "";

  card.innerHTML =
    badge +
    '<a class="product-img" href="' + detailsUrl + '" aria-label="See ' + p.name + '">' +
      '<img src="' + p.images[0] + '" alt="' + p.name + '">' +
    "</a>" +
    '<div class="product-info">' +
      '<h3><a href="' + detailsUrl + '">' + p.name + "</a></h3>" +
      "<p>" + p.short + "</p>" +
      '<p class="price">' + p.price + "</p>" +
      '<div class="card-actions">' +
        '<button type="button" class="cart-btn">Add to cart</button>' +
        '<a class="wa-link" href="' + whatsappLink("Hello Gracias Bakery, I want to order: " + p.name) + '">Order on WhatsApp</a>' +
      "</div>" +
    "</div>";

  // If the photo file is missing, show the emoji instead
  card.querySelector("img").addEventListener("error", function () {
    this.parentElement.textContent = p.emoji;
  });

  // "Add to cart" button
  card.querySelector(".cart-btn").addEventListener("click", function () {
    Cart.add(p.id, 1);
    Cart.toast("Added " + p.name);
  });

  return card;
}

// Decide which products to show, then draw them
function showProducts() {
  const query = searchBox.value.trim().toLowerCase();

  // No search and "All" selected: show only the featured products
  const onlyFeatured = activeCategory === "all" && query === "";

  const list = products.filter(function (p) {
    if (onlyFeatured) return p.featured === true;

    const rightCategory = activeCategory === "all" || p.category.toLowerCase() === activeCategory;
    const text = (p.name + " " + p.category + " " + p.short).toLowerCase();
    return rightCategory && text.includes(query);
  });

  productGrid.innerHTML = "";
  list.forEach(function (p) {
    productGrid.appendChild(makeCard(p));
  });

  noResults.hidden = list.length > 0; // show "No match found" when the list is empty
}


// ----------------------------------------------------------
// 3. SEARCH BOX + CATEGORY BUTTONS
// ----------------------------------------------------------
searchBox.addEventListener("input", showProducts);

document.querySelectorAll(".chip").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".chip").forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");
    activeCategory = button.dataset.category;
    showProducts();
  });
});

showProducts(); // draw the cards when the page opens


// ----------------------------------------------------------
// 4. REVIEWS (from reviews.js)
// ----------------------------------------------------------
const reviewsBox = document.getElementById("reviews-box");
const reviewsSummary = document.getElementById("reviews-summary");
let ratingTotal = 0;

reviews.forEach(function (r) {
  ratingTotal += r.rating;

  const card = document.createElement("article");
  card.className = "review";

  const stars = document.createElement("div");
  stars.className = "stars";
  stars.textContent = "\u2605".repeat(r.rating) + "\u2606".repeat(5 - r.rating); // filled + empty stars
  stars.setAttribute("aria-label", r.rating + " out of 5 stars");

  const text = document.createElement("p");
  text.className = "review-text";
  text.textContent = "\u201C" + r.text + "\u201D";

  const author = document.createElement("p");
  author.className = "review-author";
  author.textContent = r.name + (r.area ? ", " + r.area : "");

  card.append(stars, text, author);
  reviewsBox.appendChild(card);
});

if (reviews.length > 0) {
  const average = (ratingTotal / reviews.length).toFixed(1);
  reviewsSummary.textContent = average + " out of 5, from " + reviews.length + " reviews";
}


// ----------------------------------------------------------
// 5. MISSING PHOTOS (hero and team)
// ----------------------------------------------------------
function emojiIfMissing(boxId, emoji) {
  const image = document.querySelector("#" + boxId + " img");
  if (!image) return;

  function showEmoji() {
    document.getElementById(boxId).textContent = emoji;
  }

  image.addEventListener("error", showEmoji);

  // The image may have failed BEFORE this code ran, so check now too
  if (image.complete && image.naturalWidth === 0) {
    showEmoji();
  }
}

emojiIfMissing("hero-photo", "🥐");
emojiIfMissing("team-photo", "👩‍🍳");
