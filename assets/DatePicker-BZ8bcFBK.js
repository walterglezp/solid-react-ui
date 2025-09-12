import{R as i,j as e}from"./iframe-CCjepWBu.js";import{i as k,p as u,D as m,f as q,C as w,a as T,b as x}from"./CalendarWeekDayNames-DczzGK2_.js";import{I as D}from"./Input-DusT4nL9.js";import{I as R}from"./Icon-CVi0seOY.js";import{I}from"./InputError-jIwtEdDA.js";import{g as j}from"./classnames-helper-C6tUBjOJ.js";import{i as h}from"./validation-helper-Bjp8riig.js";import{u as A}from"./useClickOutside-BmzIjh_n.js";const F=({label:o,minimumDate:d,maximunDate:p,markedDays:v=[],disabled:r=!1,className:n,isRequired:c=!1,field:a,onChange:l})=>{const y=!h(a.value)&&k(u(a.value))?u(a.value):new Date,[f,t]=i.useState(!1),s=i.useRef(null);A(s,()=>{t(!1)});const b=j({"date-picker":!0,[`${n}`]:!!n});return e.jsxs("div",{className:b,children:[e.jsxs("div",{className:"date-picker-view",onClick:()=>{r||t(g=>!g)},children:[e.jsx(D,{field:{...a,value:q(y,m.DEFAULT)},label:o,onChange:()=>{},append:e.jsx(R,{name:"calendar",size:15}),placeholder:m.DEFAULT,required:c,disabled:r}),a.error&&e.jsx(I,{error:a.error})]}),f&&e.jsxs("div",{className:"date-picker-calendar",ref:s,children:[e.jsx(w,{disabled:r,field:a,onChange:l}),e.jsx(T,{}),e.jsx(x,{field:a,onChange:l,disabled:r,markedDays:v,minimumDate:d,maximunDate:p})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},markedDays:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string; // ISO string in DEFAULT_DATE_FORMAT
  type: DayType;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "selected"
| "regular"
| "current-day"
| "disabled"
| "reserved"
| "new-reservation"
| "new-reservation-start"
| "new-reservation-end"`,elements:[{name:"literal",value:'"selected"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"current-day"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"reserved"'},{name:"literal",value:'"new-reservation"'},{name:"literal",value:'"new-reservation-start"'},{name:"literal",value:'"new-reservation-end"'}],required:!0}}]}}],raw:"CalendarDayType[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},minimumDate:{required:!1,tsType:{name:"string"},description:""},maximunDate:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};export{F as D};
