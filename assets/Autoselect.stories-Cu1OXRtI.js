import{r as c,j as r}from"./iframe-uRyd9Bza.js";import{A as t}from"./Autoselect-DO-HTGIt.js";import"./InputError-CAtgTlMu.js";import"./Icon-BCBBvEMd.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-Cq9rXk7-.js";import"./validation-helper-Bjp8riig.js";import"./useClickOutside-CtDk1SQb.js";/* empty css                   */const v={title:"Form/Autoselect",component:t,tags:["autodocs"],args:{label:"City",placeholder:"Start typing...",options:[{value:"nyc",label:"New York City"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}],disabled:!1,borderless:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},options:{control:!1}}},i=(e="city")=>c.useState({name:e,formName:"example",error:"",value:"",section:0,validate:{required:!0}}),l={render:e=>{const[s,a]=i();return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},n={args:{disabled:!0,label:"Disabled",placeholder:"Cannot type"},render:e=>{const[s,a]=i("city-disabled");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},o={args:{borderless:!0,label:"Borderless",placeholder:"Type something..."},render:e=>{const[s,a]=i("city-borderless");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},d={args:{label:"Large",placeholder:"Select city",variant:"lg"},render:e=>{const[s,a]=i("city-lg");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useSampleField();
    return <div style={{
      maxWidth: 300
    }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled",
    placeholder: "Cannot type"
  },
  render: args => {
    const [field, setField] = useSampleField("city-disabled");
    return <div style={{
      maxWidth: 300
    }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    borderless: true,
    label: "Borderless",
    placeholder: "Type something..."
  },
  render: args => {
    const [field, setField] = useSampleField("city-borderless");
    return <div style={{
      maxWidth: 300
    }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large",
    placeholder: "Select city",
    variant: "lg"
  },
  render: args => {
    const [field, setField] = useSampleField("city-lg");
    return <div style={{
      maxWidth: 300
    }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const F=["Default","Disabled","Borderless","Large"];export{o as Borderless,l as Default,n as Disabled,d as Large,F as __namedExportsOrder,v as default};
