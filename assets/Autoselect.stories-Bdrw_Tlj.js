import{r as c,j as r}from"./iframe-cc5ZmNpn.js";import{A as a}from"./Autoselect-zjpIK_L1.js";import"./preload-helper-D9Z9MdNV.js";import"./InputError-EatG13S7.js";import"./Icon-YTP-CrPf.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-BNoyCiaF.js";import"./validation-helper-Bjp8riig.js";import"./useClickOutside-DbmxUvl3.js";/* empty css                   */const F={title:"Form/Autoselect",component:a,tags:["autodocs"],args:{label:"City",placeholder:"Start typing...",options:[{value:"nyc",label:"New York City"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}],disabled:!1,borderless:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},options:{control:!1}}},i=(e="city")=>c.useState({name:e,formName:"example",error:"",value:"",section:0,validate:{required:!0}}),l={render:e=>{const[s,t]=i();return r.jsx("div",{style:{maxWidth:300},children:r.jsx(a,{...e,field:s,onChange:t})})}},n={args:{disabled:!0,label:"Disabled",placeholder:"Cannot type"},render:e=>{const[s,t]=i("city-disabled");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(a,{...e,field:s,onChange:t})})}},o={args:{borderless:!0,label:"Borderless",placeholder:"Type something..."},render:e=>{const[s,t]=i("city-borderless");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(a,{...e,field:s,onChange:t})})}},d={args:{label:"Large",placeholder:"Select city",variant:"lg"},render:e=>{const[s,t]=i("city-lg");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(a,{...e,field:s,onChange:t})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const C=["Default","Disabled","Borderless","Large"];export{o as Borderless,l as Default,n as Disabled,d as Large,C as __namedExportsOrder,F as default};
