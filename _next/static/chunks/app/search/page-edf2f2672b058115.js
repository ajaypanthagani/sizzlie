(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{2076:(e,i,r)=>{Promise.resolve().then(r.bind(r,1107))},6046:(e,i,r)=>{"use strict";var s=r(6658);r.o(s,"useRouter")&&r.d(i,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(i,{useSearchParams:function(){return s.useSearchParams}})},1107:(e,i,r)=>{"use strict";r.r(i),r.d(i,{default:()=>l});var s=r(5155),t=r(2115),a=r(6046);let c=[{id:1,title:"Truffle Pasta",imgSrc:"/sizzlie/truffle-pasta.jpg",description:"A luxurious pasta dish with freshly shaved truffles.",currency:"$",price:10.5,rating:4.8,isAvailable:!0,instructions:[{videoUrl:"/sizzlie/cut-chicken.mp4",description:"cut chicken"},{videoUrl:"/sizzlie/add-seasoning.mp4",description:"add seasoning"},{videoUrl:"/sizzlie/put-in-over.mp4",description:"put in oven",time:5}]},{id:2,title:"Chicken Tikka",imgSrc:"/sizzlie/chicken-tikka.jpg",description:"A flavorful Indian dish of marinated chicken pieces grilled to perfection.",currency:"$",price:10.2,rating:4.8,isAvailable:!0,instructions:[]},{id:3,title:"Lasagna",imgSrc:"/sizzlie/lasagna.jpg",description:"A layered Italian dish made with pasta, meat, cheese, and marinara sauce, baked to perfection.",currency:"$",price:8.99,rating:4.8,isAvailable:!0,instructions:[]},{id:4,title:"Momo - steamed",imgSrc:"/sizzlie/momo.jpg",description:"A steamed dumpling filled with meat or vegetables, popular in Tibetan and Nepalese cuisine",currency:"$",price:5,rating:4.8,isAvailable:!1,instructions:[]}];var n=r(3604);let l=()=>{let e=(0,a.useSearchParams)().get("query"),[i,r]=(0,t.useState)([]);return(0,t.useEffect)(()=>{e&&"string"==typeof e&&r(c.filter(i=>i.title.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase())))},[e]),(0,s.jsx)("div",{className:"z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto",children:(0,s.jsx)("div",{className:"mt-32 lg:mt-16 md:mt-16",children:0===i.length?(0,s.jsxs)("h1",{className:"text-m font-bold mb-6 text-gray-500",children:['No results for "',e,'"']}):(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:i.map(e=>(0,s.jsx)(n.default,{id:e.id,imgSrc:e.imgSrc,title:e.title,description:e.description,currency:e.currency,price:e.price,rating:e.rating,isAvailable:e.isAvailable,instructions:[]},e.id))})})})}}},e=>{var i=i=>e(e.s=i);e.O(0,[711,380,287,565,258,441,517,358],()=>i(2076)),_N_E=e.O()}]);