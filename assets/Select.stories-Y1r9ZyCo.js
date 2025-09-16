import{j as n,r as p}from"./iframe-cc5ZmNpn.js";import{S as s}from"./Select-lFJcCmdY.js";import"./preload-helper-D9Z9MdNV.js";import"./InputError-EatG13S7.js";import"./Icon-YTP-CrPf.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-BNoyCiaF.js";import"./validation-helper-Bjp8riig.js";import"./useClickOutside-DbmxUvl3.js";/* empty css              *//* empty css                   */const j={title:"Form/Select",component:s,tags:["autodocs"],args:{label:"Fruit",placeholder:"Select fruit",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],disabled:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},append:{control:!1},options:{control:!1},variant:{control:"radio",options:["sm","md","lg"]}}},t=e=>{const[r,a]=p.useState({name:"fruit",formName:"demoForm",error:"",value:"",section:0,validate:{required:!0},...e});return[r,a]},o={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},l={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,append:n.jsx("span",{role:"img","aria-label":"banana",children:"🍌"}),field:r,onChange:a})}},i={args:{variant:"lg"},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},d={render:e=>{const[r,a]=t({error:"Required field"});return n.jsx(s,{...e,field:r,onChange:a})}},c={args:{disabled:!0},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} append={<span role="img" aria-label="banana">
            🍌
          </span>} field={field} onChange={setField} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "lg"
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({
      error: "Required field"
    });
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...c.parameters?.docs?.source}}};const E=["Default","WithAppendIcon","LargeVariant","WithError","Disabled"];export{o as Default,c as Disabled,i as LargeVariant,l as WithAppendIcon,d as WithError,E as __namedExportsOrder,j as default};
