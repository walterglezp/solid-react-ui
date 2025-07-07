import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as r}from"./iframe-BZqvk56P.js";import{I as E}from"./InputError-DTnqqwD3.js";import{I as P}from"./Icon-CQnipyZ9.js";import{g as C}from"./classnames-helper-C6tUBjOJ.js";import{v as f}from"./validation-helper-Bjp8riig.js";import{u as O}from"./useClickOutside-CBJDdqTs.js";const U=({id:N,label:v,className:b,tabIndex:S,readOnly:T,disabled:o,variant:y="sm",isRequired:k=!1,borderless:j=!1,options:c=[],placeholder:q,field:t,onChange:i})=>{const[p,m]=r.useState(!1),[w,u]=r.useState(""),[s,A]=r.useState(0),[l,x]=r.useState(c),h=C({[`autoselect input-group input-group-${y}`]:!0,"invalid-field":t.error!=="","required-field":k,borderless:j,[`${b}`]:b!==void 0}),R=r.useRef(null);O(R,()=>{m(!1)}),r.useEffect(()=>{x(c)},[c]),r.useEffect(()=>{o&&u(q??"")},[o]);const I=a=>{const e=l[a];e&&(u(e.label),m(!1),f({...t,value:e.value},i))},V=a=>{if(T||o)return;const e=a.toLowerCase();m(!0);const d=c.filter(L=>L.label.toLowerCase().includes(e));u(a),x(d)},F=r.useCallback(()=>{var e;m(!1);const a=l[s];u(a.label),f({...t,value:((e=a.value)==null?void 0:e.toString())??""},i)},[i,l,s]),g=r.useCallback(a=>{let e=s;a==="up"&&s>0&&e--,a==="down"&&s<l.length-1&&e++,A(e);const d=l[e];d&&(u(d.label),f({...t,value:d.value},i))},[s,l,i]);return r.useEffect(()=>{if(!p)return;const a=e=>{e.key==="ArrowDown"&&g("down"),e.key==="ArrowUp"&&g("up"),e.key==="Enter"&&F()};return window.addEventListener("keyup",a),()=>window.removeEventListener("keyup",a)},[g,F,p]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:R,className:h,title:w,children:[v&&n.jsxs("span",{className:"input-group-text",children:[v,k&&n.jsx("span",{className:"asterisk",children:" *"})," "]}),n.jsx("input",{id:N,name:t.name,className:`form-control form-control-${y}`,type:"text",value:w,tabIndex:S,onChange:a=>V(a.target.value),placeholder:q,onFocus:()=>m(!0),disabled:o}),p&&!o&&n.jsx("ul",{className:"suggestions",children:l.map((a,e)=>n.jsx("li",{className:s===e?"active-suggestion":"",onClick:()=>I(e),children:a.label},e))}),n.jsxs("span",{className:"input-group-text input-group-text-arrow",children:[t.value!==""?n.jsx(P,{className:"clear cursor-pointer me-2",name:"x",size:15,onClick:()=>{u(""),i({...t,value:""})}}):null,n.jsx("span",{className:"down-arrow"})]})]}),t.error&&n.jsx(E,{error:t.error})]})};U.__docgenInfo={description:"",methods:[],displayName:"Autoselect",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},append:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: FormFieldValueProps;
  label: string;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:`| string
| number
| boolean
| File
| File[]
| null
| Array<string>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"},{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: FormFieldValueProps;
  label: string;
}>`},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: FormFieldValueProps;
  name: string;
  formName: string;
  error: string;
  section: number;
  validate: ValidateProps;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:`| string
| number
| boolean
| File
| File[]
| null
| Array<string>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"},{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"formName",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"section",value:{name:"number",required:!0}},{key:"validate",value:{name:"signature",type:"object",raw:`{
  noValidate?: boolean;
  required?: boolean;
  minStrLength?: number;
  maxStrLength?: number;
  type?: "number" | "text" | "email" | "password";
  minImages?: number;
  maxImages?: number;
  isImagesList?: boolean;
  fileSize?: number;
  dateTimePicker?: boolean;
  dateTimeRangePicker?: boolean;
  email?: boolean;
  phone?: boolean;
  integer?: boolean;
  isYoutubeUrl?: boolean;
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};export{U as A};
