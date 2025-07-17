import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{u as c}from"./uuid-helper-Cs3Zzn0-.js";import{g as b}from"./classnames-helper-C6tUBjOJ.js";import{v as p}from"./validation-helper-Bjp8riig.js";import{I as f}from"./InputError-DHuUm-6t.js";const v=({label:r,className:n,variant:i="checkbox",inline:t=!1,field:e,onChange:m,disabled:s=!1,...o})=>{const l=c(),u=b({"custom-checkbox":!0,"form-check":!0,"form-switch":i==="switch","form-check-inline":t,[n??""]:!!n});return a.jsxs("div",{className:u,children:[a.jsx("input",{id:l,name:e.name,type:"checkbox",className:"form-check-input",checked:!!e.value,onChange:d=>p({...e,value:d.target.checked},m),disabled:s,...o}),r&&a.jsx("label",{className:"form-check-label",htmlFor:l,children:r}),e.error&&a.jsx(f,{error:e.error})]})};v.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"checkbox" | "switch"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"switch"'}]},description:"",defaultValue:{value:'"checkbox"',computed:!1}},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{v as C};
