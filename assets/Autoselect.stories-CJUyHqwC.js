import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-CUs4BiuB.js";import{A as t}from"./Autoselect-DxqJPoW0.js";import"./InputError-BTrUxWsC.js";import"./Icon-BBbnfbwg.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-lYRWHHvf.js";import"./validation-helper-Bjp8riig.js";import"./useClickOutside-DFL4AyUB.js";const N={title:"Form/Autoselect",component:t,tags:["autodocs"],args:{label:"City",placeholder:"Start typing...",options:[{value:"nyc",label:"New York City"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}],disabled:!1,borderless:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},options:{control:!1}}},i=(e="city")=>C.useState({name:e,formName:"example",error:"",value:"",section:0,validate:{required:!0}}),l={render:e=>{const[s,a]=i();return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},n={args:{disabled:!0,label:"Disabled",placeholder:"Cannot type"},render:e=>{const[s,a]=i("city-disabled");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},o={args:{borderless:!0,label:"Borderless",placeholder:"Type something..."},render:e=>{const[s,a]=i("city-borderless");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}},d={args:{label:"Large",placeholder:"Select city",variant:"lg"},render:e=>{const[s,a]=i("city-lg");return r.jsx("div",{style:{maxWidth:300},children:r.jsx(t,{...e,field:s,onChange:a})})}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useSampleField();
    return <div style={{
      maxWidth: 300
    }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>;
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,v,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const _=["Default","Disabled","Borderless","Large"];export{o as Borderless,l as Default,n as Disabled,d as Large,_ as __namedExportsOrder,N as default};
