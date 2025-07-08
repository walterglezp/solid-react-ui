import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-CUs4BiuB.js";import{u as C}from"./uuid-helper-Cs3Zzn0-.js";import{t as ae,p as se,i as ie,D as x,f as d,C as le,a as oe,b as me}from"./CalendarWeekDayNames-XUrnG9iF.js";import{I as ue}from"./Input-DVwCTlw2.js";import{I as de}from"./Icon-BBbnfbwg.js";import{I as ce}from"./InputError-BTrUxWsC.js";import{g as pe}from"./classnames-helper-C6tUBjOJ.js";import{i as fe,v as F}from"./validation-helper-Bjp8riig.js";import{u as ge}from"./useClickOutside-DFL4AyUB.js";import{g as ve}from"./getHours-TtnSC40d.js";import"./Flex-lYRWHHvf.js";function E(i,l,r){const m=ae(i,r==null?void 0:r.in);return m.setHours(l),m}function ye(i,l,r){const m=ae(i,r==null?void 0:r.in);return m.setMinutes(l),m}const j=({label:i,minimumDate:l,maximunDate:r,markedDays:m=[],readOnly:c=!1,disabled:n=!1,hideTimePicker:re=!1,className:w,isRequired:ne=!1,field:t,onChange:f})=>{const N=C(),P=C(),S=D.useRef(null),[I,A]=D.useState(!1),s=fe(t.value)?new Date:se(t.value),M=ie(s);ge(S,()=>{A(!1)});const te=pe({"date-time-picker":!0,[w||""]:!!w}),g=(a,o)=>{if(c||n||!M)return;let u=new Date(s);a==="hour"?u=E(u,o):a==="minute"&&(u=ye(u,o)),F({...t,value:u.toISOString()},f)},R=a=>{if(c||n||!M)return;let o=ve(s);a==="PM"&&o<12&&(o+=12),a==="AM"&&o>=12&&(o-=12);const u=E(s,o);F({...t,value:u.toISOString()},f)};return e.jsxs("div",{className:te,children:[e.jsxs("div",{className:"date-time-picker-view",onClick:()=>!n&&A(!I),children:[e.jsx(ue,{field:{...t,value:d(s,x.FRIENDLY_TIMESTAMP)},label:i,onChange:()=>{},append:e.jsx(de,{name:"calendar",size:15}),placeholder:x.DEFAULT,required:ne}),t.error&&e.jsx(ce,{error:t.error})]}),I&&e.jsxs("div",{className:"date-time-picker-calendar",ref:S,children:[e.jsx(le,{disabled:n,field:t,onChange:f}),e.jsx(oe,{}),e.jsx(me,{field:t,onChange:f,disabled:n,markedDays:m,minimumDate:l,maximunDate:r}),!re&&e.jsxs("div",{className:"date-time-picker-timepicker mt-3",children:[e.jsx("input",{className:"input-time me-2",type:"number",value:d(s,"hh"),onChange:a=>g("hour",Number(a.target.value)),onBlur:a=>g("hour",Number(a.target.value)),readOnly:c,disabled:n,min:1,max:12}),e.jsx("strong",{children:":"}),e.jsx("input",{className:"input-time ms-2 me-2",type:"number",value:d(s,"mm"),onChange:a=>g("minute",Number(a.target.value)),onBlur:a=>g("minute",Number(a.target.value)),readOnly:c,disabled:n,min:0,max:59}),e.jsxs("div",{className:"time-picker-meridian",children:[e.jsx("input",{type:"radio",id:N,className:"form-check-input ms-2 me-2",checked:d(s,"a")==="AM",onChange:()=>R("AM"),disabled:c||n}),e.jsx("label",{className:"form-check-label me-2",htmlFor:N,children:"AM"}),e.jsx("input",{type:"radio",id:P,className:"form-check-input me-2",checked:d(s,"a")==="PM",onChange:()=>R("PM"),disabled:c||n}),e.jsx("label",{className:"form-check-label",htmlFor:P,children:"PM"})]})]})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"DateTimePicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},markedDays:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string; // ISO string in DEFAULT_DATE_FORMAT
  type: DayType;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "selected"
| "regular"
| "current-day"
| "disabled"
| "reserved"
| "new-reservation"
| "new-reservation-start"
| "new-reservation-end"`,elements:[{name:"literal",value:'"selected"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"current-day"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"reserved"'},{name:"literal",value:'"new-reservation"'},{name:"literal",value:'"new-reservation-start"'},{name:"literal",value:'"new-reservation-end"'}],required:!0}}]}}],raw:"CalendarDayType[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideTimePicker:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minimumDate:{required:!1,tsType:{name:"string"},description:""},maximunDate:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const q=d(new Date,x.DEFAULT),Ie={title:"Components/DateTimePicker",component:j,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean"},isRequired:{control:"boolean"},hideTimePicker:{control:"boolean"},label:{control:"text"}},args:{disabled:!1,readOnly:!1,isRequired:!1,hideTimePicker:!1,label:"Appointment Date & Time"}},p=i=>{const[l,r]=D.useState({name:"calendar",value:q,error:"",formName:"storybook-form",section:1,validate:{},...i});return e.jsxs("div",{style:{width:300},children:[e.jsx(j,{field:l,onChange:r,disabled:i.disabled,markedDays:[{date:q,type:"selected"},{date:q,type:"current-day"}]}),e.jsxs("p",{className:"mt-2 text-muted",children:["Current:"," ",d(new Date(l.value),x.FRIENDLY_TIMESTAMP)]})]})},v={render:()=>e.jsx(p,{})},y={render:()=>e.jsx(p,{error:"This field is required"})},b={render:()=>e.jsx(p,{}),args:{disabled:!0}},k={render:()=>e.jsx(p,{}),args:{readOnly:!0}},h={render:()=>e.jsx(p,{}),args:{hideTimePicker:!1}},T={render:()=>e.jsx(p,{}),args:{hideTimePicker:!0}};var O,L,V;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Wrapper />
}`,...(V=(L=v.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,_,U;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Wrapper error="This field is required" />
}`,...(U=(_=y.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var Y,z,H;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    disabled: true
  }
}`,...(H=(z=b.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var B,G,J;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    readOnly: true
  }
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    hideTimePicker: false
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    hideTimePicker: true
  }
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ae=["Default","WithError","Disabled","ReadOnly","TimeOnly","WithoutTimePicker"];export{v as Default,b as Disabled,k as ReadOnly,h as TimeOnly,y as WithError,T as WithoutTimePicker,Ae as __namedExportsOrder,Ie as default};
