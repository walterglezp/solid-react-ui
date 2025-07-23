import{j as a}from"./iframe-Btc7p_dI.js";import{g as d}from"./classnames-helper-C6tUBjOJ.js";import{I as p}from"./InputError-DveFmxaA.js";import{v as u}from"./validation-helper-Bjp8riig.js";const b=({label:n,className:l,variant:t="sm",field:e,onChange:i,...s})=>{var m;const o=d({[`app-text-input input-group input-group-${t}`]:!0,"invalid-field":e.error!=="",[`${l}`]:l!==void 0});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:o,children:[n&&a.jsxs("span",{className:"input-group-text",children:[n," :"]}),a.jsx("textarea",{name:e.name,className:`form-control form-control-${t}`,value:(m=e.value)==null?void 0:m.toString(),onChange:r=>u({...e,value:r.target.value},i),onBlur:r=>u({...e,value:r.target.value},i),...s})]}),e.error&&a.jsx(p,{error:e.error})]})};b.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};export{b as T};
