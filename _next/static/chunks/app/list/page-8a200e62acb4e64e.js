(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{92766:function(e,t,a){Promise.resolve().then(a.bind(a,66953))},66953:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(20097),n=a(51595),l=a(71085),s=a(78851),i=a.n(s),o=a(53160),c=a(61940),d=a.n(c);function u(e){let[t,a]=(0,n.useState)(),[s,c]=(0,n.useState)(!1),[u,f]=(0,n.useState)();return(0,r.jsx)(r.Fragment,{children:!u&&(0,r.jsxs)(o.Card,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),shadow:!0,className:"relative items-end overflow-hidden text-center ".concat(e.className?e.className:""),children:[(0,r.jsx)(o.CardHeader,{className:"absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center",children:(0,r.jsx)("div",{className:"absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"})}),(0,r.jsxs)(o.CardBody,{className:"relative py-5 px-6 md:px-12 flex items-center flex-col w-full pt-[25%]",children:[(0,r.jsx)(o.Typography,{variant:"h2",color:"white",className:"mb-3 font-medium leading-[1.5]",children:e.data.name}),(0,r.jsx)(o.Typography,{color:"white",className:"mb-3 font-semibold leading-[1.5]",children:e.data.data.personal_info.title}),(0,r.jsxs)(o.Typography,{className:"mb-3 font-semibold text-gray-300",children:["Last updated: ",i()(e.data.updated_at).format("DD/MM/YYYY")]}),(0,r.jsx)(o.Avatar,{size:"xl",variant:"circular",alt:"tania andrew",className:"border-2 border-white",src:e.data.data.personal_info.avatar})]}),(0,r.jsx)("div",{className:"absolute w-full h-full bg-gray-700 bg-opacity-20 cursor-pointer",hidden:!t,children:(0,r.jsxs)("div",{className:"flex flex-col justify-end items-center h-full pb-[20px]",children:[(0,r.jsx)(d(),{href:"/build?cv=".concat(e.data.id),children:(0,r.jsx)(o.Button,{className:"w-[80px] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300",children:"Edit"})}),(0,r.jsx)(o.Button,{className:"w-[80px] mt-3 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300",onClick:()=>{c(!0)},children:"Delete"})]})}),(0,r.jsxs)(o.Dialog,{open:s,handler:()=>c(!1),children:[(0,r.jsx)(o.DialogHeader,{children:"Delete Resume"}),(0,r.jsx)(o.DialogBody,{divider:!0,children:"Are you sure you want to delete this item?"}),(0,r.jsxs)(o.DialogFooter,{children:[(0,r.jsx)(o.Button,{variant:"text",color:"red",onClick:()=>{},className:"mr-1",children:(0,r.jsx)("span",{children:"Cancel"})}),(0,r.jsx)(o.Button,{variant:"gradient",color:"red",onClick:()=>{c(!1),(0,l.pq)({id:e.data.id}),f(!0)},children:(0,r.jsx)("span",{children:"Confirm"})})]})]})]})})}function f(e){let[t,a]=(0,n.useState)();return(0,r.jsxs)(o.Card,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),shadow:!0,className:"relative items-end overflow-hidden text-center ".concat(e.className?e.className:""),children:[(0,r.jsx)(o.CardHeader,{className:"absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/images/create-cv.webp')] bg-cover bg-center",children:(0,r.jsx)("div",{className:"absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"})}),(0,r.jsx)("div",{className:"absolute w-full h-full bg-gray-700 bg-opacity-20 cursor-pointer",hidden:!t,children:(0,r.jsx)("div",{className:"flex flex-col justify-end items-center h-full pb-[20px]"})}),(0,r.jsx)(o.CardBody,{className:"relative py-5 px-6 md:px-12 flex items-center justify-center flex-col w-full h-full pt-[25%]",children:(0,r.jsx)(d(),{href:"/build",children:(0,r.jsx)(o.Button,{className:"w-[80px] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300",children:"Add"})})})]})}function m(e){var t;return(0,r.jsxs)("div",{className:"mt-3 flex flex-wrap",children:[null===(t=e.data)||void 0===t?void 0:t.map(e=>(0,r.jsx)(u,{className:"mr-3 mb-3 h-[30rem] w-[calc(100%/3-1rem)] overflow-hidden shadow-md",data:e})),(0,r.jsx)(f,{className:"mr-3 mb-3 h-[30rem] w-[calc(100%/3-1rem)] overflow-hidden shadow-md"})]})}function h(){let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=Object.values((0,l._C)());t(e)},[]),(0,r.jsxs)("div",{className:"container mx-auto mt-10 max-w-[1024px]",children:[(0,r.jsx)("div",{className:"text-xl font-semibold",children:"My Resumes"}),(0,r.jsx)(m,{data:e})]})}},44083:function(e,t,a){"use strict";function r(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}a.d(t,{l:function(){return r}})},71085:function(e,t,a){"use strict";a.d(t,{_C:function(){return s},j$:function(){return l},oh:function(){return i},pq:function(){return o}});var r=a(44083);let n="resumes";function l(e){let t=e.id;if(!t){if(!e.name)return;t=(0,r.l)(e.name)}let a=s();return a[t]}function s(){let e=window.localStorage.getItem(n);return e?JSON.parse(e):{}}function i(e,t){if(!t.name&&!t.id)throw Error("name must be not empty!");let a=t.id?t.id:(0,r.l)(t.name),l=s();l[a]=e,window.localStorage.setItem(n,JSON.stringify(l))}function o(e){let t=e.id;if(!t){if(!e.name)return;t=(0,r.l)(e.name)}let a=s();delete a[t],window.localStorage.setItem(n,JSON.stringify(a))}}},function(e){e.O(0,[757,418,688,940,120,244,744],function(){return e(e.s=92766)}),_N_E=e.O()}]);