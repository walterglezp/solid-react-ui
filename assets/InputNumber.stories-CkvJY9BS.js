import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-Dpetp53f.js";import{I as o}from"./InputNumber-COC5f0OS.js";import"./Icon-BKr1LsCA.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-lYRWHHvf.js";import"./InputError-CbmaiM0A.js";import"./validation-helper-Dk7fbBIA.js";const D={title:"Form/InputNumber",component:o,tags:["autodocs"],args:{label:"Quantity",min:0,max:10,isRequired:!0,disabled:!1,readOnly:!1},argTypes:{field:{control:!1},onChange:{control:!1}}},d=r=>{const[e,s]=h.useState({name:"qty",formName:"cart",value:r,error:"",section:0,validate:{required:!0}});return[e,s]},t={render:r=>{const[e,s]=d(2);return i.jsx(o,{...r,field:e,onChange:s})}},n={render:r=>{const[e,s]=d(5);return e.error="This field is required",i.jsx(o,{...r,field:e,onChange:()=>{}})}},a={args:{disabled:!0},render:r=>{const[e,s]=d(3);return i.jsx(o,{...r,field:e,onChange:()=>{}})}};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useNumberField(2);
    return <InputNumber {...args} field={field} onChange={setField} />;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useNumberField(5);
    field.error = "This field is required";
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [field, setField] = useNumberField(3);
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const S=["Default","WithError","Disabled"];export{t as Default,a as Disabled,n as WithError,S as __namedExportsOrder,D as default};
