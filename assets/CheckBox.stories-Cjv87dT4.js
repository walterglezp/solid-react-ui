import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-BZqvk56P.js";import{C as s}from"./CheckBox-DuSXRY75.js";import"./uuid-helper-Cs3Zzn0-.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";import"./InputError-DTnqqwD3.js";import"./Icon-CQnipyZ9.js";import"./Flex-lYRWHHvf.js";const w={title:"Form/CheckBox",component:s,tags:["autodocs"],args:{label:"Accept Terms",variant:"checkbox"},argTypes:{field:{control:!1},onChange:{control:!1},variant:{control:"radio",options:["checkbox","switch"]}}},f=(e,r)=>u.useState({name:e,formName:"example",value:r,error:"",section:0,validate:{}}),t={render:e=>{const[r,a]=f("acceptTerms",!1);return p.jsx(s,{...e,field:r,onChange:a})}},o={args:{label:"Enable Notifications",variant:"switch"},render:e=>{const[r,a]=f("notifications",!0);return p.jsx(s,{...e,field:r,onChange:a})}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useSampleField("acceptTerms", false);
    return <CheckBox {...args} field={field} onChange={setField} />;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Enable Notifications",
    variant: "switch"
  },
  render: args => {
    const [field, setField] = useSampleField("notifications", true);
    return <CheckBox {...args} field={field} onChange={setField} />;
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Checkbox","Switch"];export{t as Checkbox,o as Switch,E as __namedExportsOrder,w as default};
