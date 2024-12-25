import Recipe from "../model/recipe";

export const recipes: Recipe[] = [{
    id: 1,
    title: "Truffle Pasta",
    imgSrc: "/truffle-pasta.jpg",
    description: "A luxurious pasta dish with freshly shaved truffles.",
    currency: "$",
    price: 10.5,
    rating: 4.8,
    isAvailable: true,
    instructions:[
        {
            videoUrl:"/cut-chicken.mp4",
            description:"cut chicken",
        },
        {
            videoUrl:"/add-seasoning.mp4",
            description:"add seasoning",
        },
        {
            videoUrl:"/put-in-over.mp4",
            description:"put in oven",
            time: 5
        },
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka",
    imgSrc: "/chicken-tikka.jpg",
    description: "A flavorful Indian dish of marinated chicken pieces grilled to perfection.",
    currency: "$",
    price: 10.20,
    rating: 4.8,
    isAvailable: true,
    instructions:[]
  },
  {
    id: 3,
    title: "Lasagna",
    imgSrc: "/lasagna.jpg",
    description: "A layered Italian dish made with pasta, meat, cheese, and marinara sauce, baked to perfection.",
    currency: "$",
    price: 8.99,
    rating: 4.8,
    isAvailable: true,
    instructions:[]
  },
  {
    id: 4,
    title: "Momo - steamed",
    imgSrc: "/momo.jpg",
    description: "A steamed dumpling filled with meat or vegetables, popular in Tibetan and Nepalese cuisine",
    currency: "$",
    price: 5,
    rating: 4.8,
    isAvailable: false,
    instructions:[]
  }]