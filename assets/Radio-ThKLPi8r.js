import{j as a}from"./iframe-Btc7p_dI.js";import{u as k}from"./uuid-helper-Cs3Zzn0-.js";import{g as c}from"./classnames-helper-C6tUBjOJ.js";import{v}from"./validation-helper-Bjp8riig.js";const q=({field:e,checkedValue:n,label:s,className:r,title:t,btnSize:b="sm",outline:m=!1,inline:p=!1,noBorder:f=!1,variant:i=!1,readOnly:u=!1,onChange:o,...d})=>{const l=k(),g=c({"form-check":!0,"form-check-inline":p,[`${r}`]:r!==void 0}),y=c({btn:!0,[`btn-${b}`]:!0,[`btn-${i}`]:!m,[`btn-outline-${i}`]:m,"btn-no-border":f,[`${r}`]:r!==void 0});return i?a.jsxs(a.Fragment,{children:[a.jsx("input",{name:e.name,value:e.value,type:"radio",id:l,className:"btn-check",...d,checked:e.value===n,onChange:()=>v({...e,value:n},o),readOnly:u}),a.jsx("label",{className:y,htmlFor:l,title:t,children:s})]}):a.jsxs("div",{className:g,children:[a.jsx("input",{name:e.name,value:e.value,type:"radio",id:l,className:"form-check-input",...d,checked:e.value===n,onChange:()=>v({...e,value:n},o),readOnly:u}),a.jsx("label",{className:"form-check-label",htmlFor:l,title:t,children:s})]})};q.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},checkedValue:{required:!0,tsType:{name:"union",raw:`| string
| number
| boolean
| File
| File[]
| null
| Array<string>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"},{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}]},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},btnSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| false
| "primary"
| "secondary"
| "success"
| "danger"
| "warning"
| "success"
| "info"
| "light"
| "dark"
| "link"`,elements:[{name:"literal",value:"false"},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:"false",computed:!1}}}};export{q as R};
