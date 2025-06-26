import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as E,R as r}from"./iframe-DpKYFrtY.js";import{I as P}from"./InputError-Di-54Bas.js";import{I as C}from"./Icon-BbGGDe-6.js";import{g as O}from"./classnames-helper-C6tUBjOJ.js";import{v as k}from"./validation-helper-Dk7fbBIA.js";const U=(o,m)=>{E.useEffect(()=>{const c=f=>{!o.current||o.current.contains(f.target)||m(f)};return document.addEventListener("pointerdown",c),()=>{document.removeEventListener("pointerdown",c)}},[o,m])},z=({id:o,label:m,className:c,tabIndex:f,readOnly:T,disabled:d,variant:q="sm",isRequired:w=!1,borderless:j=!1,options:v=[],placeholder:x,field:t,onChange:i})=>{const[b,p]=r.useState(!1),[R,u]=r.useState(""),[s,A]=r.useState(0),[l,F]=r.useState(v),h=O({[`autoselect input-group input-group-${q}`]:!0,"invalid-field":t.error!=="","required-field":w,borderless:j,[`${c}`]:c!==void 0}),N=r.useRef(null);U(N,()=>{p(!1)}),r.useEffect(()=>{F(v)},[v]),r.useEffect(()=>{d&&u(x??"")},[d]);const I=a=>{const e=l[a];e&&(u(e.label),p(!1),k({...t,value:e.value},i))},L=a=>{if(T||d)return;const e=a.toLowerCase();p(!0);const g=v.filter(V=>V.label.toLowerCase().includes(e));u(a),F(g)},S=r.useCallback(()=>{var e;p(!1);const a=l[s];u(a.label),k({...t,value:((e=a.value)==null?void 0:e.toString())??""},i)},[i,l,s]),y=r.useCallback(a=>{let e=s;a==="up"&&s>0&&e--,a==="down"&&s<l.length-1&&e++,A(e);const g=l[e];g&&(u(g.label),k({...t,value:g.value},i))},[s,l,i]);return r.useEffect(()=>{if(!b)return;const a=e=>{e.key==="ArrowDown"&&y("down"),e.key==="ArrowUp"&&y("up"),e.key==="Enter"&&S()};return window.addEventListener("keyup",a),()=>window.removeEventListener("keyup",a)},[y,S,b]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:N,className:h,title:R,children:[m&&n.jsxs("span",{className:"input-group-text",children:[m,w&&n.jsx("span",{className:"asterisk",children:" *"})," "]}),n.jsx("input",{id:o,name:t.name,className:`form-control form-control-${q}`,type:"text",value:R,tabIndex:f,onChange:a=>L(a.target.value),placeholder:x,onFocus:()=>p(!0),disabled:d}),b&&!d&&n.jsx("ul",{className:"suggestions",children:l.map((a,e)=>n.jsx("li",{className:s===e?"active-suggestion":"",onClick:()=>I(e),children:a.label},e))}),n.jsxs("span",{className:"input-group-text input-group-text-arrow",children:[t.value!==""?n.jsx(C,{className:"clear cursor-pointer me-2",name:"x",size:15,onClick:()=>{u(""),i({...t,value:""})}}):null,n.jsx("span",{className:"down-arrow"})]})]}),t.error&&n.jsx(P,{error:t.error})]})};z.__docgenInfo={description:"",methods:[],displayName:"Autoselect",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},append:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};export{z as A};
