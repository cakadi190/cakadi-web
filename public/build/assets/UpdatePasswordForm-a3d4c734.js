import{r as w,W as g,j as s}from"./app-edb95e1c.js";import{I as n}from"./InputError-0f45f0e8.js";import{I as d}from"./InputLabel-6971f8e4.js";import{P as _}from"./PrimaryButton-04d2e892.js";import{T as c}from"./TextInput-3fa336fd.js";import{e as y}from"./transition-8b92ffd0.js";import"./tailwind-b97aa029.js";function F({className:x=""}){const p=w.useRef(),i=w.useRef(),{data:e,setData:a,errors:o,put:f,reset:t,processing:j,recentlySuccessful:h}=g({current_password:"",password:"",password_confirmation:""}),v=r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:m=>{var l,u;m.password&&(t("password","password_confirmation"),(l=p.current)==null||l.focus()),m.current_password&&(t("current_password"),(u=i.current)==null||u.focus())}})};return s.jsxs("section",{className:x,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:v,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Current Password"}),s.jsx(c,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:o.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"New Password"}),s.jsx(c,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(c,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(_,{disabled:j,children:"Save"}),s.jsx(y,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{F as default};