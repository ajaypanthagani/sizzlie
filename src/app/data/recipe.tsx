import Recipe from "../model/recipe";

export const recipes: Recipe[] = [{
    id: 1,
    title: "Truffle Pasta",
    videoSrc: "https://www.youtube.com/embed/s0iPl_aeii0?si=onH382rvcuDmDlFN",
    description: "A luxurious pasta dish with freshly shaved truffles.",
    currency: "$",
    price: 10.5,
    rating: 4.8,
    isAvailable: true,
    instructions:[
        {
            videoUrl:"/grate-truffle.mp4",
            description:"grate truffle",
        },
        {
            videoUrl:"/saute-garlic.mp4",
            description:"saute garlic",
        },
        {
            videoUrl:"/toss-pasta.mp4",
            description:"toss pasta",
            time: 5
        },
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka",
    videoSrc: "https://www.youtube.com/embed/8L7V1eTaTnw?si=jwdhx6HnSFMbK1qk",    
    description: "A flavorful Indian dish of marinated chicken pieces grilled to perfection.",
    currency: "$",
    price: 10.20,
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
    id: 3,
    title: "Lasagna",
    videoSrc: "https://www.youtube.com/embed/BDFaPIZso68?si=Le3ecVtHUcY_Tt1a",
    description: "A layered Italian dish made with pasta, meat, cheese, and marinara sauce, baked to perfection.",
    currency: "$",
    price: 8.99,
    rating: 4.8,
    isAvailable: true,
    instructions:[
        {
            videoUrl:"/melt-cheese.mp4",
            description:"melt cheese",
        },
        {
            videoUrl:"/add-sauce.mp4",
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
    id: 4,
    title: "Momo - steamed",
    videoSrc: "https://www.youtube.com/embed/4VQQfm-ifjc?si=6SNluSdZHQninHJa",
    description: "A steamed dumpling filled with meat or vegetables, popular in Tibetan and Nepalese cuisine",
    currency: "$",
    price: 5,
    rating: 4.8,
    isAvailable: false,
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
  }]