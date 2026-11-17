// ==========================================================
// GRACIAS BAKERY - products.js
// All product details are here. To add a product, copy one
// block (from { to }, ) and change the text.
//
// id      -> used in the link: product.html?id=fresh-bread
// images  -> put these files in the "images" folder.
//            The first image is the main one. Use 1 to 4 images.
// emoji   -> shown if an image file is missing
// ==========================================================

const products = [
  {
    id: "fresh-bread",
    name: "Fresh Bread",
    category: "Bread",
    emoji: "🍞",
    price: "1,000 RWF",
    short: "Soft white loaf, baked daily.",
    description: "Our classic white loaf is baked every morning before sunrise. It has a soft inside and a thin golden crust, perfect for breakfast, sandwiches or tea time.",
    details: [
      "Weight: about 400 g",
      "Ingredients: wheat flour, yeast, salt, sugar, butter",
      "Best eaten: the same day",
      "Available: every day from 6:30 AM"
    ],
    images: ["../images/fresh bread.jpg", "../images/fresh bread1.jpg", "../images/fresh bread2.jpg"]
  },
  {
    id: "baguette",
    name: "Baguette",
    category: "Bread",
    emoji: "🥖",
    price: "800 RWF",
    short: "Crispy outside, soft inside.",
    description: "A long French-style loaf with a crunchy crust and a light, airy inside. Great with soup, cheese or fresh butter.",
    details: [
      "Length: about 40 cm",
      "Ingredients: wheat flour, yeast, salt, water",
      "Best eaten: within 6 hours",
      "Available: every day from 7:00 AM"
    ],
    images: ["../images/baguette1.jpg", "../images/baguette2.jpg"]
  },
  {
    id: "brown-bread",
    name: "Brown Bread",
    category: "Bread",
    emoji: "🍞",
    price: "1,200 RWF",
    short: "Whole wheat, healthy and filling.",
    description: "Made with whole wheat flour, this bread keeps you full for longer. It has a rich, nutty taste and is a good choice for a healthy breakfast.",
    details: [
      "Weight: about 450 g",
      "Ingredients: whole wheat flour, yeast, salt, honey",
      "Best eaten: within 2 days",
      "Available: every day"
    ],
    images: ["../images/brown bread1.jpg", "../images/brown bread2.jpg"]
  },
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    category: "Cakes",
    emoji: "🎂",
    price: "From 15,000 RWF",
    short: "Custom message and design.",
    description: "A soft, moist cake decorated the way you want. Choose the size, flavor, colors and the message to write on top. Order at least 2 days before.",
    details: [
      "Sizes: 6, 12, 20 or 30+ people",
      "Flavors: vanilla, chocolate, strawberry, marble",
      "Order: at least 2 days in advance",
      "Price depends on size and design"
    ],
    images: ["../images/birthday cake.jpg", "../images/birthday-cake-2.jpg", "../images/birthday-cake-3.jpg"]
  },
  {
    id: "cake-slice",
    name: "Cake Slice",
    category: "Cakes",
    emoji: "🍰",
    price: "1,500 RWF",
    short: "Vanilla or chocolate.",
    description: "A generous slice of fresh cake with creamy icing. A sweet treat with coffee or tea.",
    details: [
      "Flavors: vanilla or chocolate",
      "Best eaten: the same day",
      "Available: every day"
    ],
    images: ["../images/cake slice1.jpg", "../images/cake slice2.jpg"]
  },
  {
    id: "cupcakes",
    name: "Cupcakes (6)",
    category: "Cakes",
    emoji: "🧁",
    price: "5,000 RWF",
    short: "A box of six with icing.",
    description: "Six small cakes topped with colorful icing, packed in a box. Ideal for parties, meetings or gifts.",
    details: [
      "Quantity: 6 per box",
      "Flavors: vanilla, chocolate (mixed on request)",
      "Order: 1 day in advance for big orders"
    ],
    images: ["../images/cup cakes.jpg", "../images/cup cakes1.jpg"]
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "Pastries",
    emoji: "🥐",
    price: "800 RWF",
    short: "Flaky, golden and buttery.",
    description: "Made with many thin layers of dough and butter, our croissant is crispy outside and soft inside. Best when still warm.",
    details: [
      "Ingredients: wheat flour, butter, yeast, milk, sugar",
      "Best eaten: warm, on the same day",
      "Available: every morning until sold out"
    ],
    images: ["../images/croissant1.jpg", "../images/croissant2.jpg"]
  },
  {
    id: "doughnut",
    name: "Doughnut",
    category: "Pastries",
    emoji: "🍩",
    price: "500 RWF",
    short: "Sweet, soft and fresh.",
    description: "A soft, fluffy doughnut covered with sugar or chocolate. A favorite with children and adults.",
    details: [
      "Toppings: sugar or chocolate",
      "Best eaten: the same day",
      "Available: every day"
    ],
    images: ["../images/doughnut1.jpg", "../images/Doghnuts.jpg"]
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    category: "Pastries",
    emoji: "🥧",
    price: "1,000 RWF",
    short: "Savory filling in a crisp crust.",
    description: "A golden pastry filled with seasoned minced meat and vegetables. A filling snack for lunch or on the go.",
    details: [
      "Filling: minced beef, carrots, onions, spices",
      "Best eaten: warm",
      "Available: every day from 10:00 AM"
    ],
    images: ["../images/meat pie1.jpg", "../images/meat pie2.jpg"]
  },
  {
    id: "coffee",
    name: "Coffee",
    category: "Drinks",
    emoji: "☕",
    price: "1,000 RWF",
    short: "Fresh Rwandan coffee.",
    description: "Hot coffee made from Rwandan beans. Smooth and rich, the best partner for a croissant.",
    details: [
      "Served: hot",
      "Options: with or without milk and sugar",
      "Available: all day"
    ],
    images: ["../images/coffee.jpg", "../images/coffee1.jpg"]
  },
  {
    id: "milk-tea",
    name: "Milk Tea",
    category: "Drinks",
    emoji: "🍵",
    price: "800 RWF",
    short: "Hot tea with milk.",
    description: "Hot black tea with fresh milk, lightly spiced. Warm and comforting.",
    details: [
      "Served: hot",
      "Options: with or without sugar",
      "Available: all day"
    ],
    images: ["../images/milk tea1.jpg", "../images/milk tea2.jpg"]
  },
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    category: "Drinks",
    emoji: "🧃",
    price: "1,500 RWF",
    short: "Passion, mango or pineapple.",
    description: "Juice made from fresh fruit with no added colors. Choose your favorite fruit.",
    details: [
      "Flavors: passion, mango, pineapple",
      "Size: 400 ml",
      "Served: cold"
    ],
    images: ["../images/fresh juice2.jpg", "../images/fresh juice1.jpg"]
  }
];
