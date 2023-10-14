(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{60692:function(e,n,t){Promise.resolve().then(t.bind(t,60662))},60662:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(20097);function r(e){if(void 0!=e.data)return(0,a.jsxs)("div",{className:"flex ".concat(e.className?e.className:""),children:[(0,a.jsx)("div",{className:"w-48 h-56 mr-4",children:(0,a.jsx)("img",{src:e.data.avatar,alt:e.data.first_name,className:"w-full h-full object-cover"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-4xl font-semibold mb-3",children:[(0,a.jsx)("span",{children:e.data.first_name})," ",(0,a.jsxs)("span",{children:[e.data.last_name," "]}),e.data.nickname&&(0,a.jsxs)("span",{children:["(",e.data.nickname,")"]})]}),(0,a.jsx)("div",{className:"text-xl font-semibold mb-3",children:e.data.title}),(0,a.jsx)("table",{className:"table-auto",children:(0,a.jsxs)("tbody",{className:"text-left",children:[e.data.gender&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"w-32",children:"Gender:"}),(0,a.jsx)("td",{className:"capitalize",children:e.data.gender})]}),e.data.phone&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Phone:"}),(0,a.jsx)("td",{children:e.data.phone})]}),e.data.email&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Email:"}),(0,a.jsx)("td",{children:e.data.email})]}),e.data.website&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Website:"}),(0,a.jsx)("td",{children:e.data.website})]}),e.data.address&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Address:"}),(0,a.jsx)("td",{className:"capitalize",children:e.data.address})]})]})})]})]})}var s=t(67121),i=t(58885),o=t(51595);function l(){return(0,a.jsx)("div",{className:"border-b border-black"})}function d(e){var n;let[t,r]=(0,o.useState)({});return(0,o.useEffect)(()=>{var n,t;for(let a=0;a<(null===(n=e.data.rows)||void 0===n?void 0:n.length);a++)if(!e.data.rows[a].content_html){if("object"!=typeof e.data.rows[a]){console.log("Invalid section rows");continue}(t=e.data.rows[a].content_markdown,(0,s.j)().use(i.Z).process(t).then(e=>e.toString())).then(n=>{e.data.rows[a].content_html=n,r(e.data)})}},[e]),(0,a.jsxs)("div",{className:"py-3 ".concat(e.className?e.className:""),children:[(0,a.jsx)("div",{className:"text-xl font-semibold uppercase pb-2",children:e.data.heading}),(0,a.jsx)(l,{}),null==t?void 0:null===(n=t.rows)||void 0===n?void 0:n.map((e,n)=>(0,a.jsxs)("div",{id:n.toString(),className:"flex py-2 ".concat(e.divide?"border-b border-gray":""),children:[e.heading&&(0,a.jsx)("div",{className:"w-1/4 text-left font-semibold",children:e.heading}),(0,a.jsx)("div",{className:"".concat(e.heading?"w-3/4":"w-full"),dangerouslySetInnerHTML:{__html:e.content_html}})]}))]})}function c(e){var n;return(0,a.jsxs)("div",{className:"mx-auto w-full max-w-[784px] p-6 ".concat(e.className||""),children:[(0,a.jsx)(r,{className:"mb-5",data:e.data.personal_info}),null===(n=e.data.sections)||void 0===n?void 0:n.map(e=>(0,a.jsx)(d,{data:e}))]})}var m=JSON.parse('{"personal_info":{"avatar":"https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_3840,q_auto","first_name":"Sophia","last_name":"Anderson","nickname":"Soph","title":"Full Stack Developer","phone":"123.456.7890","email":"sophia@example.com","website":"github.com/sophdev","address":"San Francisco, USA","gender":"female"},"sections":[{"heading":"About me","rows":[{"content_markdown":"Experienced Full Stack Developer with a passion for creating innovative web applications. Skilled in a wide range of technologies and frameworks, including:\\n- Languages:\\n  - Proficient: JavaScript (Node.js), Python\\n  - Familiar: Ruby\\n- Skills: Full stack development, DevOps, system architecture, UI/UX design, agile development, and project management.\\n"},{"content_markdown":"_I believe in using technology as a means to solve real-world problems.\\nMy skills are a toolset, and I\'m always eager to expand it. Let\'s connect\\nand explore how we can work together to build amazing things._\\n"}]},{"heading":"Summary","rows":[{"heading":"Languages","content_markdown":"JavaScript (Node.js) | Python | Ruby","divide":true},{"heading":"Databases","content_markdown":"MongoDB, MySQL, PostgreSQL","divide":true},{"heading":"Frontend","content_markdown":"React, Angular, Vue.js","divide":true},{"heading":"Backend","content_markdown":"Express.js, Ruby on Rails, Flask","divide":true},{"heading":"DevOps","content_markdown":"Docker, Kubernetes, Jenkins, Travis CI","divide":true},{"heading":"Project Management","content_markdown":"Certified ScrumMaster\xae with experience leading agile development teams to deliver high-quality software products.","divide":true},{"heading":"Side Projects","content_markdown":"I have a portfolio of personal projects, including a social networking app, a financial tracking tool, and a travel planning website. You can find more details on my GitHub profile.","divide":true}]},{"heading":"Work Experience","rows":[{"heading":"03/2020 - Present","content_markdown":"## **TechPros - InnovateRise**\\n\\n**Full Stack Developer**\\n\\n**From March 2020 - Present (InnovateRise)**\\n\\n - Led development efforts for a revolutionary social networking platform that connects professionals in various industries. The platform has gained 100,000+ users and secured $2 million in seed funding.\\n\\n - Implemented real-time messaging features, user authentication, and a recommendation engine using Node.js and React.\\n\\n - Orchestrated CI/CD pipelines with Docker, Kubernetes, and Jenkins, ensuring seamless deployments.\\n\\n - Collaborated with UI/UX designers to create an intuitive and visually appealing user interface.\\n\\n**From March 2020 - September 2021 (TechPros)**\\n\\n - Spearheaded the migration of a legacy monolithic application to a microservices architecture, resulting in improved scalability and reduced maintenance overhead.\\n\\n - Integrated payment gateways, enabling secure online transactions for users.\\n\\n - Mentored junior developers and conducted code reviews to maintain code quality.\\n\\n**Tech stack**\\n\\n- Languages: JavaScript (Node.js), Python\\n- Databases: MongoDB, MySQL\\n- Frontend: React\\n- Backend: Express.js, Flask\\n- DevOps: Docker, Kubernetes, Jenkins\\n- Project Management: Agile, Scrum, JIRA"}]}]}'),h=t(28010),u=t(95746),g=t(58881),x=t(8645),p=t(44083),v=t(71085),f=t(53160);function w(){let[e,n]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"fixed bottom-2 right-2 shadow-md",children:(0,a.jsx)(f.Button,{onClick:()=>n(!0),children:"Help"})}),(0,a.jsxs)(f.Dialog,{open:e,handler:()=>n(!1),children:[(0,a.jsxs)(f.DialogHeader,{className:"pt-5",children:["Help",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 absolute top-1 right-1 cursor-pointer",onClick:()=>n(!1),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]}),(0,a.jsx)(f.DialogBody,{divider:!0,className:"overflow-scroll",children:(0,a.jsxs)(f.Tabs,{value:"yaml",children:[(0,a.jsxs)(f.TabsHeader,{children:[(0,a.jsx)(f.Tab,{value:"yaml",children:"YAML Structure"},"yaml"),(0,a.jsx)(f.Tab,{value:"json",children:"Model Structure"},"json")]}),(0,a.jsxs)(f.TabsBody,{children:[(0,a.jsx)(f.TabPanel,{value:"yaml",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(u.ZP,{minHeight:"",extensions:[g.RI.yaml()],value:"personal_info:\n  avatar: string!\n  first_name: string!\n  last_name: string!\n  nickname: string\n  title: string!\n  phone: string\n  email: string\n  website: string\n  address: string\n  gender: boolean\n\nsections: \n  - heading: string!\n    rows:\n      - heading: string\n        content_markdown: string\n        divide: boolean\n",theme:"dark",readOnly:!1})})})},"yaml"),(0,a.jsx)(f.TabPanel,{value:"json",children:(0,a.jsx)("div",{className:"ml-3",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(u.ZP,{minHeight:"",extensions:[g.RI.typescript()],value:"export interface ResumeData {\n    personal_info: PersonalInfo\n    sections: TableSectionData[]\n}\n\nexport interface PersonalInfo {\n    avatar: string\n    first_name: string\n    last_name: string\n    nickname?: string\n    title: string\n    gender?: string;\n    phone?: string\n    email?: string\n    website?: string\n    address?: string\n}\n\nexport interface TableSectionData{\n    heading: string\n    rows: TableSectionRow[]\n}\n\nexport interface TableSectionRow{\n    heading?: string\n    content_markdown: string\n    content_html?: string,\n    divide?: boolean\n}",theme:"dark",readOnly:!1})})})},"json")]})]})})]})]})}function j(e){let[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{t(e.closeAt>0)},[e.closeAt]),(0,o.useEffect)(()=>{if(n){let n=setTimeout(()=>{t(!1),clearTimeout(n)},e.closeAt-new Date().getTime())}},[n]),(0,a.jsx)(f.Alert,{className:"fixed top-1 right-0 min-w-[25%] w-fit ".concat(n?"":"hidden"),color:e.color,action:(0,a.jsx)(f.Button,{variant:"text",color:"white",size:"sm",className:"!absolute top-3 right-3",onClick:()=>t(!1),children:"Close"}),children:e.message})}function b(e){return new Date().getTime()+1e3*e}function k(e){let{params:n,searchParams:t}=e,[r,s]=(0,o.useState)({}),[i,l]=(0,o.useState)(""),[d,f]=(0,o.useState)(),[k,N]=(0,o.useState)(),[y,S]=(0,o.useState)(0),[_,L]=(0,o.useState)(0),[P,M]=(0,o.useState)(""),[A,C]=(0,o.useState)(""),{toPDF:D,targetRef:I}=(0,x.Eb)({filename:"page.pdf"});function E(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;switch(e){case"info":C(n),S(b(t));break;case"err":M(n),L(b(t))}}return(0,o.useEffect)(()=>{if(t.init||!t.cv){l(h.ZP.stringify(m));return}let e=(0,v.j$)({id:t.cv});if(!e){l(h.ZP.stringify(m));return}l(h.ZP.stringify(e.data)),f(e.name)},[]),(0,o.useEffect)(()=>{if(i){try{let e=JSON.parse(i);s(e);let n=h.ZP.stringify(e);l(n),E("info","Parsed JSON to YAML");return}catch(e){}try{let e=h.ZP.parse(i,{prettyErrors:!0});e&&s(e)}catch(e){console.error("Error parsing YAML:",e)}}},[i]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between text-right pt-4 pb-2 px-6 mt-10 border border-[#ddd] rounded-xl shadow-md",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",className:"text-gray-900 font-[500] border border-gray-300 px-3 py-1 rounded-lg text-lg",value:d,placeholder:"Enter resume name",onChange:e=>{f(e.target.value)}})}),(0,a.jsxs)("div",{className:"relative",onMouseLeave:()=>N(!1),children:[(0,a.jsxs)("button",{className:"mr-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg",onMouseEnter:()=>N(!0),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 absolute",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),(0,a.jsx)("span",{className:"ml-8",children:"Download"})]}),(0,a.jsxs)("div",{hidden:!k,className:"absolute border border-green-500 rounded-xl w-[150px] text-left bg-white p-3 shadow",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("button",{className:"mr-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg",onClick:()=>D(),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 absolute",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,a.jsx)("span",{className:"ml-3",children:"PDF"})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{className:"mt-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg",onClick:()=>{!function(){let e="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(h.ZP.parse(i)))),n=document.createElement("a");n.href=e,n.download="".concat((0,p.l)(d||"resume"),".json"),n.click(),n.remove()}()},children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 absolute",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"})}),(0,a.jsx)("span",{className:"ml-3",children:"JSON"})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{className:"mt-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg",onClick:()=>{!function(){let e="data:text/yaml;chatset=utf-8,".concat(encodeURIComponent(i)),n=document.createElement("a");n.href=e,n.download="".concat((0,p.l)(d||"resume"),".yaml"),n.click(),n.remove()}()},children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 absolute",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"})}),(0,a.jsx)("span",{className:"ml-3",children:"YAML"})]})})]}),(0,a.jsxs)("button",{className:"text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800",onClick:()=>{if(!d)return E("err","Name must be specified");try{let e=(0,p.l)(d),n={id:e,name:d,data:h.ZP.parse(i),updated_at:new Date};(0,v.oh)(d,n),E("info",'Saved resume "'.concat(d,'"'))}catch(e){E("err","Failed to save resume: "+e)}},children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 absolute",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"})}),(0,a.jsx)("span",{className:"ml-8",children:"Save"})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("div",{className:"min-h-screen w-1/2 border-r border-black p-3",children:(0,a.jsx)(u.ZP,{minHeight:"100vh",extensions:[g.RI.yaml()],value:i,onChange:(e,n)=>{l(e)}})}),(0,a.jsx)("div",{id:"cv",className:"w-full flex justify-center",ref:I,children:(0,a.jsx)(c,{className:"p-3 w-1/2 max-w-xs-full",data:r})})]}),(0,a.jsx)(w,{}),(0,a.jsx)(j,{message:A,color:"green",closeAt:y}),(0,a.jsx)(j,{message:P,color:"red",closeAt:_})]})}},44083:function(e,n,t){"use strict";function a(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}t.d(n,{l:function(){return a}})},71085:function(e,n,t){"use strict";t.d(n,{_C:function(){return i},j$:function(){return s},oh:function(){return o},pq:function(){return l}});var a=t(44083);let r="resumes";function s(e){let n=e.id;if(!n){if(!e.name)return;n=(0,a.l)(e.name)}let t=i();return t[n]}function i(){let e=window.localStorage.getItem(r);return e?JSON.parse(e):{}}function o(e,n){if(!e)throw Error("name must be not empty!");let t=(0,a.l)(e),s=i();s[t]=n,window.localStorage.setItem(r,JSON.stringify(s))}function l(e){let n=e.id;if(!n){if(!e.name)return;n=(0,a.l)(e.name)}let t=i();delete t[n],window.localStorage.setItem(r,JSON.stringify(t))}}},function(e){e.O(0,[757,60,666,599,688,153,120,244,744],function(){return e(e.s=60692)}),_N_E=e.O()}]);