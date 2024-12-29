import Recipe from "../model/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Truffle Pasta",
    videoSrc: "https://www.youtube.com/embed/s0iPl_aeii0?si=onH382rvcuDmDlFN",
    description: "A luxurious pasta dish with freshly shaved truffles.",
    currency: "$",
    price: 10.5,
    rating: 4.8,
    ingredients: [
  {
    id: 1,
    title: "Pasta",
    currency: "$",
    price: 0.5,
    imgSrc: "/pasta.jpg",
    description: "fresh pasta",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Heavy cream",
    currency: "$",
    price: 0.3,
    imgSrc: "/heavy_cream.jpg",
    description: "rich heavy cream",
    quantity: "60ml",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Truffle oil",
    currency: "$",
    price: 0.5,
    imgSrc: "/truffle_oil.jpg",
    description: "premium truffle oil",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Parmesan cheese (grated)",
    currency: "$",
    price: 0.75,
    imgSrc: "/parmesan_cheese.jpg",
    description: "grated parmesan cheese",
    quantity: "15g",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Garlic",
    currency: "$",
    price: 0.1,
    imgSrc: "/garlic.jpg",
    description: "fresh garlic clove",
    quantity: "1 clove",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Butter",
    currency: "$",
    price: 0.15,
    imgSrc: "/butter.jpg",
    description: "unsalted butter",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Salt",
    currency: "$",
    price: 0.05,
    imgSrc: "/salt.jpg",
    description: "sea salt",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Black pepper",
    currency: "$",
    price: 0.05,
    imgSrc: "/black_pepper.jpg",
    description: "freshly ground black pepper",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Fresh parsley",
    currency: "$",
    price: 0.1,
    imgSrc: "/fresh_parsley.jpg",
    description: "chopped fresh parsley",
    quantity: "1 tsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Boil the pasta in salted water for about 10-12 minutes until al dente.", timer: 10 },
      { id: 2, description: "In a pan, sauté onions and pepper with olive oil until golden brown." },
      { id: 3, description: "Add cheese and stir until melted, creating a creamy sauce." },
      { id: 4, description: "Drain pasta and mix it with the sauce." },
      { id: 5, description: "Shave fresh truffles on top before serving." },
    ],
  },
  {
    id: 2,
    title: "Chicken Tikka",
    videoSrc: "https://www.youtube.com/embed/8L7V1eTaTnw?si=jwdhx6HnSFMbK1qk",
    description: "A flavorful Indian dish of marinated chicken pieces grilled to perfection.",
    currency: "$",
    price: 10.2,
    rating: 4.8,
    ingredients: [
  {
    id: 1,
    title: "Boneless chicken breast",
    currency: "$",
    price: 2.0,
    imgSrc: "/chicken_breast.jpg",
    description: "fresh boneless chicken breast",
    quantity: "150g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Yogurt",
    currency: "$",
    price: 0.2,
    imgSrc: "/yogurt.jpg",
    description: "creamy plain yogurt",
    quantity: "60g",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Lemon juice",
    currency: "$",
    price: 0.1,
    imgSrc: "/lemon_juice.jpg",
    description: "freshly squeezed lemon juice",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Ginger-garlic paste",
    currency: "$",
    price: 0.15,
    imgSrc: "/ginger_garlic_paste.jpg",
    description: "spicy ginger-garlic paste",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Red chili powder",
    currency: "$",
    price: 0.05,
    imgSrc: "/red_chili_powder.jpg",
    description: "spicy red chili powder",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Turmeric powder",
    currency: "$",
    price: 0.05,
    imgSrc: "/turmeric_powder.jpg",
    description: "rich turmeric powder",
    quantity: "1/4 tsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Ground cumin",
    currency: "$",
    price: 0.05,
    imgSrc: "/ground_cumin.jpg",
    description: "earthy ground cumin",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Garam masala",
    currency: "$",
    price: 0.1,
    imgSrc: "/garam_masala.jpg",
    description: "fragrant garam masala",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Salt",
    currency: "$",
    price: 0.05,
    imgSrc: "/salt.jpg",
    description: "sea salt",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Vegetable oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/vegetable_oil.jpg",
    description: "pure vegetable oil",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 11,
    title: "Fresh cilantro",
    currency: "$",
    price: 0.1,
    imgSrc: "/fresh_cilantro.jpg",
    description: "chopped fresh cilantro",
    quantity: "1 tsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Marinate the chicken with yogurt, oil, and spices for 2-4 hours." },
      { id: 2, description: "Preheat the grill to medium-high heat." },
      { id: 3, description: "Skewer the marinated chicken and grill for about 10-15 minutes until fully cooked." },
      { id: 4, description: "Serve hot with a drizzle of oil and lemon juice." },
    ],
  },
  {
    id: 3,
    title: "Lasagna",
    videoSrc: "https://www.youtube.com/embed/BDFaPIZso68?si=Le3ecVtHUcY_Tt1a",
    description: "A layered Italian dish made with pasta, meat, cheese, and marinara sauce, baked to perfection.",
    currency: "$",
    price: 8.99,
    rating: 4.8,
    ingredients: [
  {
    id: 1,
    title: "Lasagna sheets",
    currency: "$",
    price: 0.5,
    imgSrc: "/lasagna_sheets.jpg",
    description: "fresh lasagna sheets",
    quantity: "2 sheets",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Ground beef or turkey",
    currency: "$",
    price: 1.5,
    imgSrc: "/ground_beef_or_turkey.jpg",
    description: "fresh ground beef or turkey",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Marinara sauce",
    currency: "$",
    price: 0.75,
    imgSrc: "/marinara_sauce.jpg",
    description: "classic marinara sauce",
    quantity: "125ml",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Ricotta cheese",
    currency: "$",
    price: 0.6,
    imgSrc: "/ricotta_cheese.jpg",
    description: "creamy ricotta cheese",
    quantity: "50g",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Mozzarella cheese",
    currency: "$",
    price: 0.5,
    imgSrc: "/mozzarella_cheese.jpg",
    description: "mild mozzarella cheese",
    quantity: "50g",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Parmesan cheese",
    currency: "$",
    price: 0.75,
    imgSrc: "/parmesan_cheese.jpg",
    description: "aged parmesan cheese",
    quantity: "15g",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Olive oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/olive_oil.jpg",
    description: "extra virgin olive oil",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Garlic",
    currency: "$",
    price: 0.1,
    imgSrc: "/garlic.jpg",
    description: "fresh garlic clove",
    quantity: "1 clove",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/onion.jpg",
    description: "fresh onion",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Dried Italian herbs",
    currency: "$",
    price: 0.05,
    imgSrc: "/dried_italian_herbs.jpg",
    description: "fragrant dried Italian herbs",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 11,
    title: "Salt and black pepper",
    currency: "$",
    price: 0.1,
    imgSrc: "/salt_black_pepper.jpg",
    description: "salt and freshly ground black pepper",
    quantity: "to taste",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Cook the lasagna sheets according to package instructions." },
      { id: 2, description: "Layer cooked pasta, marinara sauce, cheese, and ground meat (if using) in a baking dish." },
      { id: 3, description: "Repeat layers and top with cheese." },
      { id: 4, description: "Bake in a preheated oven at 375°F (190°C) for 30 minutes." },
    ],
  },
  {
    id: 4,
    title: "Momo - steamed",
    videoSrc: "https://www.youtube.com/embed/4VQQfm-ifjc?si=6SNluSdZHQninHJa",
    description: "A steamed dumpling filled with meat or vegetables, popular in Tibetan and Nepalese cuisine",
    currency: "$",
    price: 5,
    rating: 4.8,
    ingredients: [
  {
    id: 1,
    title: "All-purpose flour",
    currency: "$",
    price: 0.15,
    imgSrc: "/all_purpose_flour.jpg",
    description: "fresh all-purpose flour",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Ground chicken",
    currency: "$",
    price: 1.5,
    imgSrc: "/ground_chicken.jpg",
    description: "fresh ground chicken",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/onion.jpg",
    description: "fresh onion",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Garlic",
    currency: "$",
    price: 0.1,
    imgSrc: "/garlic.jpg",
    description: "fresh garlic clove",
    quantity: "1 clove",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Ginger",
    currency: "$",
    price: 0.05,
    imgSrc: "/ginger.jpg",
    description: "fresh ginger",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Soy sauce",
    currency: "$",
    price: 0.1,
    imgSrc: "/soy_sauce.jpg",
    description: "rich soy sauce",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Sesame oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/sesame_oil.jpg",
    description: "fragrant sesame oil",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Green onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/green_onion.jpg",
    description: "fresh green onion",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Black pepper",
    currency: "$",
    price: 0.05,
    imgSrc: "/black_pepper.jpg",
    description: "freshly ground black pepper",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Salt",
    currency: "$",
    price: 0.1,
    imgSrc: "/salt.jpg",
    description: "sea salt",
    quantity: "to taste",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Prepare dough by mixing flour, water, and a pinch of salt." },
      { id: 2, description: "Mix chicken, cheese, and spices for the filling." },
      { id: 3, description: "Fill the dough with the chicken-cheese mixture and shape into dumplings." },
      { id: 4, description: "Steam for about 15-20 minutes until cooked through." },
    ],
  },
  {
    id: 5,
    title: "Cheese & Pepper Omelette",
    videoSrc: "https://www.youtube.com/embed/p3EwVIpzFjI?si=6BnKGxnqsM_wZaYC",
    description: "A quick and delicious cheese and pepper omelette, perfect for breakfast.",
    currency: "$",
    price: 4.5,
    rating: 4.7,
    ingredients: [
  {
    id: 1,
    title: "Eggs",
    currency: "$",
    price: 0.5,
    imgSrc: "/eggs.jpg",
    description: "fresh large eggs",
    quantity: "2 large",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Shredded cheese",
    currency: "$",
    price: 0.5,
    imgSrc: "/shredded_cheese.jpg",
    description: "shredded cheese",
    quantity: "30g",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Bell pepper",
    currency: "$",
    price: 0.15,
    imgSrc: "/bell_pepper.jpg",
    description: "fresh bell pepper",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Black pepper",
    currency: "$",
    price: 0.05,
    imgSrc: "/black_pepper.jpg",
    description: "freshly ground black pepper",
    quantity: "1/4 tsp",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Salt",
    currency: "$",
    price: 0.05,
    imgSrc: "/salt.jpg",
    description: "sea salt",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Butter",
    currency: "$",
    price: 0.1,
    imgSrc: "/butter.jpg",
    description: "unsalted butter",
    quantity: "1 tsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Whisk the eggs and season with salt and pepper." },
      { id: 2, description: "In a heated pan, sauté onions until translucent." },
      { id: 3, description: "Pour the egg mixture into the pan and cook for 2 minutes." },
      { id: 4, description: "Add cheese and pepper, then fold the omelette." },
      { id: 5, description: "Cook until cheese is melted and eggs are fully cooked." },
    ],
  },
  {
    id: 6,
    title: "Spicy Chicken Stir-fry",
    videoSrc: "https://www.youtube.com/embed/c2sM6WHFrHw?si=jDptVckXBhn21J8l",
    description: "A zesty stir-fried chicken dish with a spicy kick.",
    currency: "$",
    price: 7.99,
    rating: 4.9,
    ingredients: [
  {
    id: 1,
    title: "Boneless chicken breast",
    currency: "$",
    price: 2.0,
    imgSrc: "/chicken_breast.jpg",
    description: "fresh boneless chicken breast",
    quantity: "150g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Soy sauce",
    currency: "$",
    price: 0.1,
    imgSrc: "/soy_sauce.jpg",
    description: "rich soy sauce",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Cornstarch",
    currency: "$",
    price: 0.05,
    imgSrc: "/cornstarch.jpg",
    description: "fine cornstarch",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Vegetable oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/vegetable_oil.jpg",
    description: "pure vegetable oil",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Garlic",
    currency: "$",
    price: 0.15,
    imgSrc: "/garlic.jpg",
    description: "fresh garlic cloves",
    quantity: "2 cloves",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Ginger",
    currency: "$",
    price: 0.05,
    imgSrc: "/ginger.jpg",
    description: "fresh ginger",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Red chili flakes",
    currency: "$",
    price: 0.05,
    imgSrc: "/red_chili_flakes.jpg",
    description: "spicy red chili flakes",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Bell peppers",
    currency: "$",
    price: 0.15,
    imgSrc: "/bell_peppers.jpg",
    description: "fresh bell peppers",
    quantity: "1/4 cup",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Green beans or broccoli",
    currency: "$",
    price: 0.2,
    imgSrc: "/green_beans_broccoli.jpg",
    description: "green beans or broccoli",
    quantity: "1/4 cup",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Hoisin sauce or oyster sauce",
    currency: "$",
    price: 0.15,
    imgSrc: "/hoisin_oyster_sauce.jpg",
    description: "hoisin or oyster sauce",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 11,
    title: "Sesame oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/sesame_oil.jpg",
    description: "fragrant sesame oil",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 12,
    title: "Salt and pepper",
    currency: "$",
    price: 0.05,
    imgSrc: "/salt_pepper.jpg",
    description: "salt and freshly ground pepper",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 13,
    title: "Green onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/green_onion.jpg",
    description: "fresh green onion",
    quantity: "1 tbsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Cut chicken into strips and season with salt and pepper." },
      { id: 2, description: "Heat oil in a pan and stir-fry the chicken for 5-7 minutes." },
      { id: 3, description: "Add chopped peppers and cook until tender." },
      { id: 4, description: "Add a spicy sauce or chili paste and stir to combine." },
      { id: 5, description: "Serve hot with rice or noodles." },
    ],
  },
  {
    id: 7,
    title: "Classic Grilled Cheese Sandwich",
    videoSrc: "https://www.youtube.com/embed/J5XzFtDMHj4?si=ctTN9IowozdQcxPd",
    description: "A classic comfort food with melted cheese between perfectly toasted bread.",
    currency: "$",
    price: 3.99,
    rating: 4.5,
    ingredients: [
  {
    id: 1,
    title: "Sliced bread",
    currency: "$",
    price: 0.3,
    imgSrc: "/sliced_bread.jpg",
    description: "fresh sliced bread",
    quantity: "2 slices",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Cheese slices",
    currency: "$",
    price: 0.5,
    imgSrc: "/cheese_slices.jpg",
    description: "cheese slices",
    quantity: "2 slices",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Butter",
    currency: "$",
    price: 0.1,
    imgSrc: "/butter.jpg",
    description: "unsalted butter",
    quantity: "1 tbsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Butter two slices of bread on one side." },
      { id: 2, description: "Place cheese between the slices, buttered side out." },
      { id: 3, description: "Grill on a medium heat until golden brown on both sides." },
      { id: 4, description: "Sprinkle black pepper on top before serving." },
    ],
  },
  {
    id: 8,
    title: "Cheese Stuffed Chicken",
    videoSrc: "https://www.youtube.com/embed/jHDrv64NK2M?si=ceHUnMPB1yLO1lqz",
    description: "Tender chicken stuffed with gooey cheese, then grilled to perfection.",
    currency: "$",
    price: 12.5,
    rating: 4.7,
    ingredients: [
  {
    id: 1,
    title: "Boneless chicken breast",
    currency: "$",
    price: 2.5,
    imgSrc: "/chicken_breast.jpg",
    description: "fresh boneless chicken breast",
    quantity: "150g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Cream cheese",
    currency: "$",
    price: 0.4,
    imgSrc: "/cream_cheese.jpg",
    description: "smooth cream cheese",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Shredded mozzarella cheese",
    currency: "$",
    price: 0.5,
    imgSrc: "/shredded_mozzarella_cheese.jpg",
    description: "shredded mozzarella cheese",
    quantity: "30g",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Fresh spinach",
    currency: "$",
    price: 0.2,
    imgSrc: "/fresh_spinach.jpg",
    description: "fresh spinach leaves",
    quantity: "1/4 cup",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Garlic powder",
    currency: "$",
    price: 0.05,
    imgSrc: "/garlic_powder.jpg",
    description: "garlic powder",
    quantity: "1/4 tsp",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Onion powder",
    currency: "$",
    price: 0.05,
    imgSrc: "/onion_powder.jpg",
    description: "onion powder",
    quantity: "1/4 tsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Salt and pepper",
    currency: "$",
    price: 0.1,
    imgSrc: "/salt_pepper.jpg",
    description: "salt and freshly ground black pepper",
    quantity: "to taste",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Olive oil",
    currency: "$",
    price: 0.15,
    imgSrc: "/olive_oil.jpg",
    description: "extra virgin olive oil",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Fresh parsley",
    currency: "$",
    price: 0.1,
    imgSrc: "/fresh_parsley.jpg",
    description: "fresh parsley leaves",
    quantity: "1 tsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Cut a pocket into the chicken breasts." },
      { id: 2, description: "Stuff the chicken with mozzarella cheese." },
      { id: 3, description: "Sear the chicken in olive oil for 3-4 minutes on each side." },
      { id: 4, description: "Finish cooking in the oven for 20 minutes at 375°F." },
    ],
  },
  {
    id: 9,
    title: "Vegetarian Momo",
    videoSrc: "https://www.youtube.com/embed/kfvXn1RMRpY?si=JOAnB_NWZzBcId3w",
    description: "A healthier version of momos filled with fresh vegetables, steamed to perfection.",
    currency: "$",
    price: 4.99,
    rating: 4.6,
    ingredients: [
  {
    id: 1,
    title: "All-purpose flour",
    currency: "$",
    price: 0.15,
    imgSrc: "/all_purpose_flour.jpg",
    description: "fresh all-purpose flour",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Cabbage",
    currency: "$",
    price: 0.25,
    imgSrc: "/cabbage.jpg",
    description: "fresh cabbage",
    quantity: "1/4 cup",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Carrot",
    currency: "$",
    price: 0.1,
    imgSrc: "/carrot.jpg",
    description: "fresh carrot",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/onion.jpg",
    description: "fresh onion",
    quantity: "2 tbsp",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Garlic",
    currency: "$",
    price: 0.05,
    imgSrc: "/garlic.jpg",
    description: "fresh garlic clove",
    quantity: "1 clove",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Ginger",
    currency: "$",
    price: 0.05,
    imgSrc: "/ginger.jpg",
    description: "fresh ginger",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Soy sauce",
    currency: "$",
    price: 0.05,
    imgSrc: "/soy_sauce.jpg",
    description: "rich soy sauce",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Sesame oil",
    currency: "$",
    price: 0.1,
    imgSrc: "/sesame_oil.jpg",
    description: "fragrant sesame oil",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Green onion",
    currency: "$",
    price: 0.1,
    imgSrc: "/green_onion.jpg",
    description: "fresh green onion",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Salt and pepper",
    currency: "$",
    price: 0.1,
    imgSrc: "/salt_pepper.jpg",
    description: "salt and freshly ground black pepper",
    quantity: "to taste",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Prepare dough with flour, water, and a pinch of salt." },
      { id: 2, description: "Chop vegetables and mix with cheese for the filling." },
      { id: 3, description: "Fill the dough and shape it into small dumplings." },
      { id: 4, description: "Steam for 15-20 minutes until the dough is tender and cooked." },
    ],
  },
  {
    id: 10,
    title: "Pepperoni Pizza",
    videoSrc: "https://www.youtube.com/embed/sv3TXMSv6Lw?si=DQY7qjv4ZfGCxY1q",
    description: "A classic pizza topped with spicy pepperoni and melted cheese.",
    currency: "$",
    price: 9.99,
    rating: 4.9,
    ingredients: [
  {
    id: 1,
    title: "All-purpose flour",
    currency: "$",
    price: 0.3,
    imgSrc: "/all_purpose_flour.jpg",
    description: "fresh all-purpose flour",
    quantity: "100g",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Instant yeast",
    currency: "$",
    price: 0.05,
    imgSrc: "/instant_yeast.jpg",
    description: "instant yeast",
    quantity: "1 tsp",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Olive oil",
    currency: "$",
    price: 0.15,
    imgSrc: "/olive_oil.jpg",
    description: "extra virgin olive oil",
    quantity: "1 tbsp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Sugar",
    currency: "$",
    price: 0.02,
    imgSrc: "/sugar.jpg",
    description: "granulated sugar",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Salt",
    currency: "$",
    price: 0.05,
    imgSrc: "/salt.jpg",
    description: "sea salt",
    quantity: "2g",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Pizza sauce",
    currency: "$",
    price: 0.3,
    imgSrc: "/pizza_sauce.jpg",
    description: "rich pizza sauce",
    quantity: "3 tbsp",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Shredded mozzarella cheese",
    currency: "$",
    price: 0.75,
    imgSrc: "/shredded_mozzarella_cheese.jpg",
    description: "shredded mozzarella cheese",
    quantity: "50g",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Pepperoni slices",
    currency: "$",
    price: 0.8,
    imgSrc: "/pepperoni_slices.jpg",
    description: "sliced pepperoni",
    quantity: "10–12 slices",
    isAvailable: true,
  },
  {
    id: 9,
    title: "Dried oregano",
    currency: "$",
    price: 0.05,
    imgSrc: "/dried_oregano.jpg",
    description: "dried oregano",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
  {
    id: 10,
    title: "Olive oil",
    currency: "$",
    price: 0.05,
    imgSrc: "/olive_oil.jpg",
    description: "extra virgin olive oil",
    quantity: "1/2 tsp",
    isAvailable: true,
  },
],
    instructions: [
      { id: 1, description: "Prepare the pizza dough and spread it out." },
      { id: 2, description: "Spread marinara sauce on top of the dough." },
      { id: 3, description: "Sprinkle mozzarella cheese and top with pepperoni slices." },
      { id: 4, description: "Bake at 475°F for 10-12 minutes until golden and crispy." },
    ],
  },
];

