(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{9476:(e,t,l)=>{Promise.resolve().then(l.bind(l,4002))},4002:(e,t,l)=>{"use strict";l.d(t,{RecipeInstruction:()=>n});var s=l(5155),r=l(2115),a=l(1151),c=l(1536);let n=e=>{let{recipe:t}=e;console.log(t);let[l,n]=(0,r.useState)(null),[i,o]=(0,r.useState)(null),m=e=>Math.max(0,Math.floor((e-Date.now())/1e3)),d=()=>{new Audio("/alarm.mp3").play().catch(e=>console.error("Error playing alarm:",e))},u=(e,t)=>{let l=Date.now()+1e3*e;localStorage.setItem("timer_".concat(t),l.toString()),n(t),o(e);let s=setInterval(()=>{o(()=>{let e=m(l);return e>0?e:(clearInterval(s),n(null),localStorage.removeItem("timer_".concat(t)),d(),null)})},1e3)};return((0,r.useEffect)(()=>{let e=[];return null==t||t.instructions.forEach((t,l)=>{let s=localStorage.getItem("timer_".concat(l));if(s){let t=parseInt(s,10),r=m(t);if(r>0){n(l),o(r);let s=setInterval(()=>{let e=m(t);e>0?o(e):(clearInterval(s),localStorage.removeItem("timer_".concat(l)),d(),n(null),o(null))},1e3);e.push(s)}else localStorage.removeItem("timer_".concat(l))}}),()=>{e.forEach(clearInterval)}},[t]),t)?(0,s.jsx)("div",{className:"z-0 p-4 fixed inset-0 bg-gray-100 overflow-y-auto",children:(0,s.jsx)("div",{className:"recipe-instructions-page mt-32 lg:mt-16 md:mt-16 p-5",children:(0,s.jsx)(a.A,{dots:!0,infinite:!1,speed:200,slidesToShow:1,slidesToScroll:1,centerMode:!1,focusOnSelect:!0,className:"carousel-container",children:t.instructions.map((e,t)=>(0,s.jsxs)("div",{className:"carousel-item flex flex-col justify-center items-center relative",children:[(0,s.jsx)("div",{className:"instruction-video flex justify-center items-center mb-4 w-full",children:(0,s.jsx)("video",{controls:!0,className:"w-full sm:max-w-[60%] object-contain",src:e.videoUrl})}),(0,s.jsxs)("div",{className:"instruction-description flex justify-between items-center w-full p-4 bg-black bg-opacity-60 text-white rounded-md mt-auto",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h2",{className:"text-lg text-red-300",children:"Step ".concat(t+1)}),(0,s.jsx)("h3",{className:"text-lg",children:e.description})]}),e.time&&(0,s.jsx)("button",{onClick:()=>u(e.time||0,t),disabled:l===t,className:"ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full disabled:bg-gray-400",children:l===t?(0,s.jsxs)("span",{children:[Math.floor(i/60).toString().padStart(2,"0"),":",(i%60).toString().padStart(2,"0")]}):(0,s.jsx)(c.w_X,{className:"text-xl"})})]})]},t))})})}):(0,s.jsx)("div",{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,857,441,517,358],()=>t(9476)),_N_E=e.O()}]);