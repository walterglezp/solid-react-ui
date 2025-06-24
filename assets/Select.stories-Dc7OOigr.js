import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./iframe-BrzKnVn_.js";import{S as s}from"./Select-CDrI8JEx.js";import"./InputError-X709TiMY.js";import"./Icon-BEhuKhOU.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-lYRWHHvf.js";import"./validation-helper-Dk7fbBIA.js";import"./ThemeContext-B_4yYX0Q.js";const N={title:"Form/Select",component:s,tags:["autodocs"],args:{label:"Fruit",placeholder:"Select fruit",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],disabled:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},append:{control:!1},options:{control:!1},variant:{control:"radio",options:["sm","md","lg"]}}},t=e=>{const[r,a]=W.useState({name:"fruit",formName:"demoForm",error:"",value:"",section:0,validate:{required:!0},...e});return[r,a]},o={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},l={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,append:n.jsx("span",{role:"img","aria-label":"banana",children:"🍌"}),field:r,onChange:a})}},i={args:{variant:"lg"},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},d={render:e=>{const[r,a]=t({error:"Required field"});return n.jsx(s,{...e,field:r,onChange:a})}},c={args:{disabled:!0},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,F;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} append={<span role="img" aria-label="banana">\r
            🍌\r
          </span>} field={field} onChange={setField} />;
  }
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,S,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "lg"
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,x,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({
      error: "Required field"
    });
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,E,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const O=["Default","WithAppendIcon","LargeVariant","WithError","Disabled"];export{o as Default,c as Disabled,i as LargeVariant,l as WithAppendIcon,d as WithError,O as __namedExportsOrder,N as default};
