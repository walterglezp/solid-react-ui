import{j as r}from"./iframe-Btc7p_dI.js";import{g as S}from"./classnames-helper-C6tUBjOJ.js";import{B as a}from"./Button-DHymxSod.js";const t=({variant:e="group",size:L="sm",className:l="",vertical:d=!1,children:M,role:T,"aria-label":q})=>{const V=S({"btn-group":e==="group"&&!d,"btn-group-vertical":d,"btn-toolbar":e==="toolbar",[`btn-group-${L}`]:e!=="toolbar",[l]:!!l});return r.jsx("div",{className:V,role:T,"aria-label":q,children:M})};t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{variant:{required:!1,tsType:{name:"union",raw:'"group" | "toolbar"',elements:[{name:"literal",value:'"group"'},{name:"literal",value:'"toolbar"'}]},description:"",defaultValue:{value:'"group"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},role:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const D={component:t,title:"Form/ButtonGroup",tags:["autodocs"],args:{size:"sm",vertical:!1,variant:"group","aria-label":"Button group",role:"group"},argTypes:{children:{control:!1}}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(a,{variant:"primary",children:"Left"}),r.jsx(a,{variant:"primary",children:"Middle"}),r.jsx(a,{variant:"primary",children:"Right"})]})},o={args:{size:"md"},render:e=>r.jsxs(t,{...e,children:[r.jsx(a,{variant:"primary",children:"Left"}),r.jsx(a,{variant:"primary",children:"Middle"}),r.jsx(a,{variant:"primary",children:"Right"})]})},s={args:{size:"lg"},render:e=>r.jsxs(t,{...e,children:[r.jsx(a,{variant:"primary",children:"Left"}),r.jsx(a,{variant:"primary",children:"Middle"}),r.jsx(a,{variant:"primary",children:"Right"})]})},i={args:{vertical:!0},render:e=>r.jsxs(t,{...e,children:[r.jsx(a,{variant:"primary",children:"Left"}),r.jsx(a,{variant:"primary",children:"Middle"}),r.jsx(a,{variant:"primary",children:"Right"})]})},u={args:{variant:"toolbar"},render:e=>r.jsxs(t,{...e,children:[r.jsxs(t,{size:"sm",role:"group","aria-label":"Group 1",children:[r.jsx(a,{variant:"secondary",children:"1"}),r.jsx(a,{variant:"secondary",children:"2"})]}),r.jsxs(t,{size:"sm",role:"group","aria-label":"Group 2",children:[r.jsx(a,{variant:"secondary",children:"3"}),r.jsx(a,{variant:"secondary",children:"4"})]})]})};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,B,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,j,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    vertical: true
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var G,R,z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "toolbar"
  },
  render: args => <ButtonGroup {...args}>
      <ButtonGroup size="sm" role="group" aria-label="Group 1">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" role="group" aria-label="Group 2">
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </ButtonGroup>
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const E=["Default","Medium","Large","Vertical","Toolbar"];export{n as Default,s as Large,o as Medium,u as Toolbar,i as Vertical,E as __namedExportsOrder,D as default};
