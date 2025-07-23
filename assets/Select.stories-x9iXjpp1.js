import{j as n,r as W}from"./iframe-Btc7p_dI.js";import{S as s}from"./Select--Nf3vQKg.js";import"./InputError-DveFmxaA.js";import"./Icon-BYjfzI_Q.js";import"./classnames-helper-C6tUBjOJ.js";import"./Flex-BpYkVn-f.js";import"./validation-helper-Bjp8riig.js";const _={title:"Form/Select",component:s,tags:["autodocs"],args:{label:"Fruit",placeholder:"Select fruit",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],disabled:!1,variant:"md"},argTypes:{field:{control:!1},onChange:{control:!1},append:{control:!1},options:{control:!1},variant:{control:"radio",options:["sm","md","lg"]}}},t=e=>{const[r,a]=W.useState({name:"fruit",formName:"demoForm",error:"",value:"",section:0,validate:{required:!0},...e});return[r,a]},o={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},l={render:e=>{const[r,a]=t({});return n.jsx(s,{...e,append:n.jsx("span",{role:"img","aria-label":"banana",children:"🍌"}),field:r,onChange:a})}},d={args:{variant:"lg"},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}},i={render:e=>{const[r,a]=t({error:"Required field"});return n.jsx(s,{...e,field:r,onChange:a})}},c={args:{disabled:!0},render:e=>{const[r,a]=t({});return n.jsx(s,{...e,field:r,onChange:a})}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,F;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} append={<span role="img" aria-label="banana">
            🍌
          </span>} field={field} onChange={setField} />;
  }
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,S,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "lg"
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,x,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField({
      error: "Required field"
    });
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,E,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const B=["Default","WithAppendIcon","LargeVariant","WithError","Disabled"];export{o as Default,c as Disabled,d as LargeVariant,l as WithAppendIcon,i as WithError,B as __namedExportsOrder,_ as default};
