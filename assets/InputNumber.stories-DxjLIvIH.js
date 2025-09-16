import{j as i,r as l}from"./iframe-cc5ZmNpn.js";import{I as o}from"./InputNumber-DgepaS8f.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-YTP-CrPf.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-BNoyCiaF.js";import"./InputError-EatG13S7.js";import"./validation-helper-Bjp8riig.js";const h={title:"Form/InputNumber",component:o,tags:["autodocs"],args:{label:"Quantity",min:0,max:10,isRequired:!0,disabled:!1,readOnly:!1},argTypes:{field:{control:!1},onChange:{control:!1}}},d=r=>{const[e,s]=l.useState({name:"qty",formName:"cart",value:r,error:"",section:0,validate:{required:!0}});return[e,s]},t={render:r=>{const[e,s]=d(2);return i.jsx(o,{...r,field:e,onChange:s})}},n={render:r=>{const[e,s]=d(5);return e.error="This field is required",i.jsx(o,{...r,field:e,onChange:()=>{}})}},a={args:{disabled:!0},render:r=>{const[e,s]=d(3);return i.jsx(o,{...r,field:e,onChange:()=>{}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useNumberField(2);
    return <InputNumber {...args} field={field} onChange={setField} />;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useNumberField(5);
    field.error = "This field is required";
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [field, setField] = useNumberField(3);
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  }
}`,...a.parameters?.docs?.source}}};const N=["Default","WithError","Disabled"];export{t as Default,a as Disabled,n as WithError,N as __namedExportsOrder,h as default};
