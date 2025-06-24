import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I as c}from"./Icon-BEhuKhOU.js";import{F as q}from"./Flex-lYRWHHvf.js";import{g as k}from"./classnames-helper-C6tUBjOJ.js";import{I as x}from"./InputError-X709TiMY.js";import{v as h}from"./validation-helper-Dk7fbBIA.js";const w=({label:s,title:p,className:m,isRequired:f=!1,min:o=0,max:i,disabled:t,readOnly:l,field:a,onChange:y})=>{const r=Number(a.value)||0,u=e=>{l||t||h({...a,value:e},y)},d=()=>{const e=r+1;typeof i=="number"&&e>i||u(e)},b=()=>{const e=r-1;e<o||u(e)},v=e=>{e.key==="ArrowUp"&&d(),e.key==="ArrowDown"&&b()},g=k({"input-number":!0,"invalid-field":!!a.error,"required-field":f,[m??""]:!!m});return n.jsxs(q,{className:g,align:"center",children:[s&&n.jsx("span",{className:"mb-1",children:s}),n.jsxs("div",{className:"number-control",role:"spinbutton","aria-valuenow":r,"aria-valuemin":o,"aria-valuemax":i,tabIndex:0,onKeyDown:v,title:p,children:[n.jsx("button",{type:"button",className:"decrement","aria-label":"Decrement",onClick:b,disabled:t||l,children:n.jsx(c,{name:"minus",size:19})}),n.jsx("strong",{children:r}),n.jsx("button",{type:"button",className:"increment","aria-label":"Increment",onClick:d,disabled:t||l,children:n.jsx(c,{name:"plus",size:20})})]}),a.error&&n.jsx(x,{error:a.error})]})};w.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};export{w as I};
