import{r as n,j as e,$ as c}from"./app-BWM-jWD9.js";import{B as s}from"./index-DXbEcylE.js";import{I as o,F as f}from"./input-pnktXg1K.js";import{L as d}from"./label-8l5LzI_1.js";import{L as j,G as g,A as v}from"./loader-circle-C_hnAWCx.js";function L(){const[t,l]=n.useState(!1),[r,m]=n.useState({email:"",password:""}),i=a=>{const{name:h,value:u}=a.target;m(p=>({...p,[h]:u}))},x=async a=>{a.preventDefault(),l(!0),setTimeout(()=>{l(!1),window.location.href="/dashboard"},1500)};return e.jsxs("div",{className:"container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0",children:[e.jsxs("div",{className:"relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r",children:[e.jsx("div",{className:"absolute inset-0 bg-primary"}),e.jsxs("div",{className:"relative z-20 flex items-center text-lg font-medium",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2 h-6 w-6",children:e.jsx("path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"})}),"PeUnique"]}),e.jsx("div",{className:"relative z-20 mt-auto",children:e.jsxs("blockquote",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg",children:'"PeUnique has completely transformed how I manage my finances. The insights and tools have helped me save more and invest smarter."'}),e.jsx("footer",{className:"text-sm",children:"Sofia Davis"})]})})]}),e.jsx("div",{className:"lg:p-8",children:e.jsxs("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:[e.jsxs("div",{className:"flex flex-col space-y-2 text-center",children:[e.jsx("h1",{className:"text-2xl font-semibold tracking-tight",children:"Welcome back"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter your credentials to access your account"})]}),e.jsxs("form",{onSubmit:x,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(d,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",name:"email",type:"email",placeholder:"name@example.com",required:!0,value:r.email,onChange:i})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(d,{htmlFor:"password",children:"Password"}),e.jsx(c,{href:"/forgot-password",className:"text-xs text-muted-foreground hover:text-primary",children:"Forgot password?"})]}),e.jsx(o,{id:"password",name:"password",type:"password",required:!0,value:r.password,onChange:i})]}),e.jsx(s,{type:"submit",className:"w-full",disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"mr-2 h-4 w-4 animate-spin"})," Please wait"]}):"Sign In"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("span",{className:"w-full border-t"})}),e.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:e.jsx("span",{className:"bg-background px-2 text-muted-foreground",children:"Or continue with"})})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(s,{variant:"outline",type:"button",className:"w-full",children:e.jsx(f,{className:"h-4 w-4"})}),e.jsx(s,{variant:"outline",type:"button",className:"w-full",children:e.jsx(g,{className:"h-4 w-4"})}),e.jsx(s,{variant:"outline",type:"button",className:"w-full",children:e.jsx(v,{className:"h-4 w-4"})})]}),e.jsxs("p",{className:"px-8 text-center text-sm text-muted-foreground",children:["Don't have an account?"," ",e.jsx(c,{href:"/signup",className:"underline underline-offset-4 hover:text-primary",children:"Sign up"})]})]})})]})}export{L as default};
