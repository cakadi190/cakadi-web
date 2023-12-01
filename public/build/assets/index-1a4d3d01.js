import{j as e,r as l,q as c,y as m,d as h,a as x}from"./app-4ae0b67d.js";import{D as t}from"./Dropdown-2522704f.js";import{T as p}from"./TextInput-030c3f06.js";import{t as d}from"./tailwind-02d6a33d.js";import{B as u,s as g,H as f}from"./HomeLayout-cf03a93d.js";import{G as j,E as w}from"./Global-a911048e.js";import"./transition-cdd9981a.js";import"./iconBase-85e92ac7.js";import"./index.esm-928e50e2.js";import"./index.esm-1486f696.js";import"./ApplicationLogo-44588801.js";import"./NavLink-91d71d09.js";function y(){const[r,a]=l.useState(""),{request:o}=c().props,n=s=>{a(s.target.value);const i={search:s.target.value||void 0,page:o==null?void 0:o.page,show:o==null?void 0:o.show};m.get(route(route().current()),i,{preserveState:!0,replace:!0})};return l.useEffect(()=>{a((o==null?void 0:o.search)??"")},[]),e.jsx(p,{className:"w-full",onChange:n,value:r,placeholder:"Cari portofolio saya…"})}function v(){const{request:r}=c().props,[a,o]=l.useState(r!=null&&r.show?parseInt(r.show):12),[n]=l.useState([6,12,24,48,56,64,72,80,88,96]);return e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.jsxs("span",{children:["Show ",a," Data"]}),e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsx(t.Content,{align:"right",children:n.map((s,i)=>e.jsx(t.Link,{href:route(route().current(),{search:r==null?void 0:r.search,page:r==null?void 0:r.page,show:s||(r==null?void 0:r.show)}),className:s===a&&"bg-gray-200",onClick:()=>o(s),children:s},i))})]})}function b(){return e.jsxs("div",{className:"grid grid-cols-12 items-center justify-between",children:[e.jsx("div",{className:"col-span-6 md:col-span-4",children:e.jsx(y,{})}),e.jsx("div",{className:"hidden md:inline-flex md:col-span-4"}),e.jsx("div",{className:"col-span-6 ml-auto md:col-span-4",children:e.jsx(v,{})})]})}function N({data:r,className:a}){return e.jsx("img",{src:r.url,alt:r.name,className:d("rounded-xl aspect-[16/9] object-cover w-full border-b border-gray-300",a)})}function k({data:r}){var s;const{name:a,category:o,highlight:n}=r;return e.jsxs("div",{className:"p-4 flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between gap-4 mb-3",children:[e.jsx("h3",{className:"font-semibold font-heading text-lg truncate",children:a}),o&&e.jsx(u,{variant:"primary",style:{background:`${o[0].background}!important`},className:"self-center flex-shrink-0",size:"sm",tag:"div",children:(s=o[0])==null?void 0:s.name})]}),e.jsx("p",{className:"text-gray-500 mb-0",children:n})]})}function S({data:r}){return e.jsxs(h,{href:route("portofolio.show",{id:r.id}),className:d("flex flex-col rounded-xl transition-all duration-200 border border-gray-200","hover:shadow-md hover:shadow-gray-100 hover:border-green-500"),children:[e.jsx(N,{data:{name:r.name,url:g(`uploads/${r.image}`)}}),e.jsx(k,{data:r})]})}function P({page:r}){const{request:a}=c().props;return e.jsx("ul",{className:"flex justify-center pt-16 gap-1",children:r&&r.map((o,n)=>{var s;return e.jsx("li",{children:e.jsx(h,{href:o.url===null?"#":((s=o.url)!=null&&s.includes("page=1")?o.url.replace("page=1",""):o.url)+(a!=null&&a.search?`&search=${a==null?void 0:a.search}`:"")+(a!=null&&a.show?`&show=${a==null?void 0:a.show}`:""),dangerouslySetInnerHTML:{__html:o.label},className:d("px-3 py-2 !min-w-[2.5rem] !min-h-[2.5rem] flex items-center justify-center duration-200 transition-all rounded-lg hover:bg-green-600 hover:text-white",o.active?"bg-green-500 text-white":"bg-white text-gray-500",o.url===null?"opacity-80 cursor-not-allowed hover:bg-transparent hover:!text-gray-500":"")})},n)})})}function C({data:r}){return e.jsx("div",{className:"grid grid-cols-12 gap-4 mt-4",children:r.length>0?r.map((a,o)=>e.jsx("div",{className:"col-span-12 md:col-span-4",children:e.jsx(S,{data:a})},o)):e.jsx("div",{className:"col-span-12",children:e.jsx(w,{title:"Data Tidak Dapat Ditemukan!"})})})}function D({data:r}){return e.jsxs(j,{children:[e.jsx(b,{}),e.jsx(C,{data:r==null?void 0:r.data}),e.jsx(P,{page:r==null?void 0:r.links})]})}function I(){return e.jsx("div",{className:"grid grid-cols-12",children:e.jsxs("div",{className:"col-span-12 md:col-span-5",children:[e.jsx("h1",{className:"text-2xl mb-2 font-bold font-heading md:text-4xl",children:"Portofolio Saya"}),e.jsx("p",{className:"md:text-lg opacity-75",children:"Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini"})]})})}function Q({portofolio:r}){return e.jsxs(f,{className:"flex flex-col justify-between min-h-screen",header:e.jsx(I,{}),children:[e.jsx(x,{title:"Portofolio"}),e.jsx(D,{data:r})]})}export{Q as default};
