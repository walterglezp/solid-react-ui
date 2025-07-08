import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as T,r as me}from"./iframe-CUs4BiuB.js";import{u as W}from"./uuid-helper-Cs3Zzn0-.js";import{u as ue}from"./useClickOutside-DFL4AyUB.js";import{g as de}from"./classnames-helper-C6tUBjOJ.js";import{t as I,m as ce,n as pe,s as y,c as ye,d as fe,p as h,i as z,g as ge,f as c,C as he,a as be,b as ve,e as ke,h as xe,D as De}from"./CalendarWeekDayNames-XUrnG9iF.js";import{i as je,v as Ne}from"./validation-helper-Bjp8riig.js";import{I as B}from"./Icon-BBbnfbwg.js";import{F as M}from"./Flex-lYRWHHvf.js";import{I as Se}from"./InputError-BTrUxWsC.js";import{g as C}from"./getHours-TtnSC40d.js";function qe(m,r,o){const t=I(m,o==null?void 0:o.in);return t.setTime(t.getTime()+r*ce),t}function we(m,r,o){const[t,f]=pe(o==null?void 0:o.in,m,r);return+y(t)==+y(f)}function U(m,r){return I(m,r==null?void 0:r.in).getMinutes()}function R(m,r,o){let t=I(m,o==null?void 0:o.in);return isNaN(+t)?ye(m,NaN):(r.year!=null&&t.setFullYear(r.year),r.month!=null&&(t=fe(t,r.month)),r.date!=null&&t.setDate(r.date),r.hours!=null&&t.setHours(r.hours),r.minutes!=null&&t.setMinutes(r.minutes),r.seconds!=null&&t.setSeconds(r.seconds),r.milliseconds!=null&&t.setMilliseconds(r.milliseconds),t)}function ne(m){return y(Date.now(),m)}const O=({minimumDate:m,maximunDate:r,markedDays:o=[],readOnly:t,disabled:f,hideTimePicker:w=!1,className:F,field:d,onChange:te})=>{const b=W(),v=W(),A=ne();let s=A,i=null;if(!je(d.value))try{const e=JSON.parse(d.value);e!=null&&e.start&&(s=z(h(e.start))?h(e.start):A),e!=null&&e.end&&(i=z(h(e.end))?h(e.end):null)}catch{}const se=[...(i?ge(y(s),y(i)):[y(s)]).map(e=>({date:c(e,"yyyy-MM-dd"),type:"new-reservation"})),...o],[E,P]=T.useState(!1),[_,ie]=T.useState(s.toISOString()),L=T.useRef(null);ue(L,()=>P(!1));const le=de({"date-time-range-picker":!0,border:!0,[`${F}`]:F!==void 0}),oe=e=>{ie(h(e.value).toISOString())},g=(e,u)=>{const n=JSON.stringify({start:e.toISOString(),end:u?u.toISOString():null});Ne({...d,value:n},te)},k=(e,u,n)=>{const l=e==="start"?R(s,{hours:u==="hour"?n:C(s),minutes:u==="minute"?n:U(s),seconds:0}):s,p=e==="end"&&i?R(i,{hours:u==="hour"?n:C(i),minutes:u==="minute"?n:U(i),seconds:0}):i;g(l,p)},V=(e,u)=>{const n=e==="start"?s:i;if(!n)return;let l=C(n);l=u==="PM"&&l<12?l+12:u==="AM"&&l>=12?l-12:l;const p=R(n,{hours:l});g(e==="start"?p:s,e==="end"?p:i)};return a.jsxs("div",{className:le,children:[a.jsxs("div",{className:"date-time-range-picker-view",onClick:()=>P(!E),children:[a.jsx(B,{className:"me-2",name:"calendar",size:17}),a.jsx("span",{className:"check-in",children:d.value?c(s,"MMM do yy"):"Check-in"}),!w&&d.value&&a.jsxs("span",{className:"check-in-time",children:[" ",c(s,"h:mm a")]}),a.jsx(B,{className:"ms-1 me-1",name:"swap-arrows",size:17}),a.jsx("span",{className:"check-out",children:d.value&&i?c(i,"MMM do yy"):"Check-out"}),!w&&d.value&&i&&a.jsxs("span",{className:"check-out-time",children:[" ",c(i,"h:mm a")]}),d.error&&a.jsx(Se,{error:d.error})]}),E&&a.jsxs("div",{className:"date-time-range-picker-calendar",ref:L,children:[a.jsx(he,{disabled:f,field:{...d,value:_},onChange:oe}),a.jsx(be,{}),a.jsx(ve,{field:{...d,value:_},onChange:({value:e})=>{const u=h(e),n=y(u),l=y(s),p=i?y(i):null;l&&p||!p&&ke(n,l)?g(n,null):!p&&xe(n,l)?g(l,n):!p&&we(n,l)&&g(l,l)},disabled:f,markedDays:se,minimumDate:m,maximunDate:r}),!w&&a.jsx(M,{justify:"center",align:"center",children:["start","end"].map((e,u)=>a.jsxs("div",{className:"date-time-range-picker-timepicker mt-3 ps-1 pe-1",children:[u===1&&a.jsx("span",{className:"ps-2 pe-3",children:"|"}),a.jsx("input",{className:"input-time me-2",type:"number",value:c(e==="start"?s:i||s,"hh"),onChange:n=>k(e,"hour",Number(n.target.value)),onBlur:n=>k(e,"hour",Number(n.target.value)),readOnly:t,disabled:f,min:"1",max:"12"}),a.jsx("strong",{children:":"}),a.jsx("input",{className:"input-time ms-2 me-2",type:"number",value:c(e==="start"?s:i||s,"mm"),onChange:n=>k(e,"minute",Number(n.target.value)),onBlur:n=>k(e,"minute",Number(n.target.value)),readOnly:t,disabled:f,min:"0",max:"60"}),a.jsxs("div",{className:"time-picker-meridian",children:[a.jsxs(M,{align:"center",children:[a.jsx("input",{type:"radio",id:e==="start"?b:v,className:"form-check-input m-0 p-0",checked:c(e==="start"?s:i||s,"a")==="AM",onChange:()=>V(e,"AM"),readOnly:t}),a.jsx("label",{className:"form-check-label m-0 p-0",htmlFor:e==="start"?b:v,children:"AM"})]}),a.jsxs(M,{align:"center",children:[a.jsx("input",{type:"radio",id:e==="start"?b:v+"_pm",className:"form-check-input m-0 p-0",checked:c(e==="start"?s:i||s,"a")==="PM",onChange:()=>V(e,"PM"),readOnly:t}),a.jsx("label",{className:"form-check-label m-0 p-0",htmlFor:e==="start"?b:v+"_pm",children:"PM"})]})]})]},e))})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"DateTimeRangePicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},markedDays:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string; // ISO string in DEFAULT_DATE_FORMAT
  type: DayType;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "selected"
| "regular"
| "current-day"
| "disabled"
| "reserved"
| "new-reservation"
| "new-reservation-start"
| "new-reservation-end"`,elements:[{name:"literal",value:'"selected"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"current-day"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"reserved"'},{name:"literal",value:'"new-reservation"'},{name:"literal",value:'"new-reservation-start"'},{name:"literal",value:'"new-reservation-end"'}],required:!0}}]}}],raw:"Array<CalendarDayType>"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideTimePicker:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minimumDate:{required:!1,tsType:{name:"string"},description:""},maximunDate:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const We={title:"Components/DateTimeRangePicker",component:O,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},hideTimePicker:{control:"boolean"},readOnly:{control:"boolean"},isRequired:{control:"boolean"},field:{control:!1},onChange:{action:"onChange"}}},S=ne();qe(S,90);const q=m=>{var t;const[r,o]=me.useState({name:"range",value:`{"start":"${S.toISOString()}","end":"${S.toISOString()}"}`,error:"",formName:"storybook-form",section:1,validate:{},...m});return a.jsxs("div",{style:{width:400},children:[a.jsx("p",{className:"mt-2 text-muted",children:(t=r.value)==null?void 0:t.toString()}),a.jsx(O,{field:r,onChange:o,markedDays:[{date:c(S,De.DEFAULT),type:"selected"}]})]})},x={render:()=>a.jsx(q,{})},D={render:()=>a.jsx(q,{error:"Please select a date range"})},j={render:()=>a.jsx(q,{}),args:{disabled:!0}},N={render:()=>a.jsx(q,{}),args:{readOnly:!0}};var Y,$,H;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Wrapper />
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var J,G,K;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Wrapper error="Please select a date range" />
}`,...(K=(G=D.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    disabled: true
  }
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Wrapper />,
  args: {
    readOnly: true
  }
}`,...(re=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const ze=["Default","WithError","Disabled","ReadOnly"];export{x as Default,j as Disabled,N as ReadOnly,D as WithError,ze as __namedExportsOrder,We as default};
