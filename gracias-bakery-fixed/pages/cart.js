// ==========================================================
// GRACIAS BAKERY - cart.js  (loaded on EVERY page)
//
// What this file does:
//   1. Stores the cart in the browser (localStorage), so it is
//      still there when the customer changes page or comes back.
//   2. Adds a "Cart (0)" link in the header.
//   3. Adds an "Add to cart" button under every product card.
//   4. Shows a small message ("Added to cart").
//
// The cart only stores: [ { id: "fresh-bread", qty: 2 }, ... ]
// Names and prices are read from products.js when needed.
// ==========================================================

const Cart = {
  key: "gracias-cart",       // the name used to save in the browser
  whatsapp: "250788000000",  // CHANGE: your number (country code first, no + or spaces)

  // Read the cart from the browser
  get: function () {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (error) {
      return []; // if anything goes wrong, start with an empty cart
    }
  },

  // Save the cart and refresh the number in the header
  save: function (items) {
    try {
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (error) {}
    updateCartCount();
  },

  // Add a product. If it is already in the cart, increase its quantity.
  add: function (id, qty) {
    const items = this.get();
    const found = items.find(function (item) { return item.id === id; });
    if (found) {
      found.qty = Math.min(found.qty + qty, 50);
    } else {
      items.push({ id: id, qty: qty });
    }
    this.save(items);
  },

  // Change the quantity of a product (used by the + and - buttons)
  setQty: function (id, qty) {
    const items = this.get();
    const found = items.find(function (item) { return item.id === id; });
    if (found) {
      found.qty = Math.max(1, Math.min(qty, 50));
    }
    this.save(items);
  },

  // Remove one product
  remove: function (id) {
    const items = this.get().filter(function (item) { return item.id !== id; });
    this.save(items);
  },

  // Empty the cart
  clear: function () {
    this.save([]);
  },

  // Total number of items (2 breads + 1 cake = 3)
  count: function () {
    return this.get().reduce(function (total, item) { return total + item.qty; }, 0);
  },

  // Turn "1,000 RWF" or "From 15,000 RWF" into the number 1000 or 15000
  price: function (text) {
    return parseInt(String(text).replace(/[^0-9]/g, ""), 10) || 0;
  },

  // Turn 15000 into "15,000 RWF"
  money: function (number) {
    return number.toLocaleString("en-US") + " RWF";
  },

  // Show the small message at the bottom of the screen
  toast: function (text) {
    let box = document.getElementById("toast");
    if (!box) {
      box = document.createElement("div");
      box.id = "toast";
      box.className = "toast";
      box.setAttribute("role", "status");
      document.body.appendChild(box);
    }
    box.textContent = text;
    box.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.classList.remove("show"); }, 1800);
  }
};

let toastTimer;

// ----------------------------------------------------------
// 1. The "Cart (0)" link in the header
// ----------------------------------------------------------
function setupCartLink() {
  const header = document.querySelector(".header-inner");
  const menuLink = document.querySelector('.nav a[href$="menu.html"]');
  if (!header || !menuLink) return;

  const link = document.createElement("a");
  link.className = "cart-link";
  // Same folder as menu.html, so we copy its path and change the file name
  link.href = menuLink.getAttribute("href").replace("menu.html", "cart.html");
  link.innerHTML = 'Cart <span class="cart-count">0</span>';
  if (window.location.pathname.endsWith("cart.html")) {
    link.classList.add("active");
  }
  header.appendChild(link);
}

// Update the number in the header (hidden when the cart is empty)
function updateCartCount() {
  const total = Cart.count();
  document.querySelectorAll(".cart-count").forEach(function (badge) {
    badge.textContent = total;
    badge.classList.toggle("empty", total === 0);
  });
}

// ----------------------------------------------------------
// 2. The "Add to cart" button under every product card
//    It finds each "Details" link, reads the product id from it
//    (product.html?id=fresh-bread) and adds a button after it.
// ----------------------------------------------------------
function addCartButtons() {
  document.querySelectorAll(".details-link").forEach(function (link) {
    const id = new URL(link.href, window.location.href).searchParams.get("id");
    if (!id) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cart-btn";
    button.textContent = "Add to cart";

    button.addEventListener("click", function () {
      Cart.add(id, 1);
      Cart.toast("Added to cart");
    });

    link.insertAdjacentElement("afterend", button);
  });
}

// ----------------------------------------------------------
// Start everything
// ----------------------------------------------------------
setupCartLink();
addCartButtons();
updateCartCount();
