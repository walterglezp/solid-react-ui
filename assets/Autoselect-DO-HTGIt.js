import{R as t,j as r}from"./iframe-uRyd9Bza.js";import{I as C}from"./InputError-CAtgTlMu.js";import{I as P}from"./Icon-BCBBvEMd.js";import{g as O}from"./classnames-helper-C6tUBjOJ.js";import{v as y}from"./validation-helper-Bjp8riig.js";import{u as U}from"./useClickOutside-CtDk1SQb.js";/* empty css                   */const z=({id:T,label:b,className:k,tabIndex:j,readOnly:A,disabled:i,variant:q="sm",isRequired:w=!1,borderless:I=!1,options:u=[],placeholder:p,field:n,onChange:o})=>{const[g,c]=t.useState(!1),[x,m]=t.useState(""),[s,S]=t.useState(0),[l,f]=t.useState(u),h=O({[`autoselect input-group input-group-${q}`]:!0,"invalid-field":n.error!=="","required-field":w,borderless:I,[`${k}`]:k!==void 0}),R=t.useRef(null);U(R,()=>{c(!1)}),t.useEffect(()=>{f(u)},[u]),t.useEffect(()=>{i&&m(p??"")},[i,p]);const V=e=>{const a=l[e];a&&(m(a.label),c(!1),y({...n,value:a.value},o))},L=e=>{if(A||i)return;const a=e.toLowerCase();c(!0);const d=u.filter(E=>E.label.toLowerCase().includes(a));m(e),f(d)},F=()=>{if(i)return;const e=u.findIndex(a=>a.value===n.value);S(e>=0?e:0),c(!0),f(u)},N=t.useCallback(()=>{c(!1);const e=l[s];m(e.label),y({...n,value:e.value?.toString()??""},o)},[o,l,s,n]),v=t.useCallback(e=>{let a=s;e==="up"&&s>0&&a--,e==="down"&&s<l.length-1&&a++,S(a);const d=l[a];d&&(m(d.label),y({...n,value:d.value},o))},[s,l,o,n]);return t.useEffect(()=>{if(!g)return;const e=a=>{a.key==="ArrowDown"&&v("down"),a.key==="ArrowUp"&&v("up"),a.key==="Enter"&&N()};return window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)},[v,N,g]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{ref:R,className:h,title:x,children:[b&&r.jsxs("span",{className:"input-group-text",children:[b,w&&r.jsx("span",{className:"asterisk",children:" *"})," "]}),r.jsx("input",{id:T,name:n.name,className:`form-control form-control-${q}`,type:"text",value:x,tabIndex:j,onChange:e=>L(e.target.value),placeholder:p,onFocus:()=>F(),onClick:()=>F(),disabled:i}),g&&!i&&r.jsx("ul",{className:"suggestions",children:l.map((e,a)=>r.jsx("li",{className:s===a?"active-suggestion":"",onClick:()=>V(a),children:e.label},a))}),r.jsxs("span",{className:"input-group-text input-group-text-arrow",children:[n.value!==""?r.jsx(P,{className:"clear cursor-pointer me-2",name:"x",size:15,onClick:()=>{m(""),o({...n,value:""})}}):null,r.jsx("span",{className:"down-arrow"})]})]}),n.error&&r.jsx(C,{error:n.error})]})};z.__docgenInfo={description:"",methods:[],displayName:"Autoselect",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},append:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
