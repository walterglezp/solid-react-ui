import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./Link-DZTEqmlO.js";import"./classnames-helper-C6tUBjOJ.js";const u=["primary","secondary","success","danger","warning","info","light","dark"],_={title:"Navigation/Link",component:n,tags:["autodocs"],args:{to:"#",children:"Link Text",variant:"primary",underlined:!1,disabled:!1,blank:!1,asButton:!1},argTypes:{variant:{control:"radio",options:u},underlined:{control:"boolean"},disabled:{control:"boolean"},blank:{control:"boolean"},asButton:{control:"boolean"},to:{control:"text"}}},s={render:a=>r.jsx(n,{...a})},t={render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsxs(n,{...a,variant:e,to:"#",children:[e.charAt(0).toUpperCase()+e.slice(1)," Link"]},e))})},o={args:{underlined:!0,children:"Underlined Link"},render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsxs(n,{...a,variant:e,to:"#",children:[e.charAt(0).toUpperCase()+e.slice(1)," Underlined"]},e))})},i={args:{disabled:!0,variant:"danger",children:"Disabled Link"}},l={args:{to:"https://example.com",variant:"info",blank:!0,children:"Open in new tab"}},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(n,{variant:"primary",to:"#",className:"hover-example",children:"Hover Me (use your mouse)"}),r.jsx(n,{variant:"success",to:"#",className:"focus-example focus-outline",children:"Focus Me (tab key)"})]})},d={args:{asButton:!0,children:"Button Style Link"},render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsx(n,{...a,variant:e,to:"#",children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},p={args:{to:"#",asButton:!0,block:!0,variant:"primary",children:"Full Width Button"},render:a=>r.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:r.jsx(n,{...a})})};var m,v,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Link {...args} />
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,k,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      {variants.map(variant => <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
        </Link>)}
    </div>
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,f,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    underlined: true,
    children: "Underlined Link"
  },
  render: args => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      {variants.map(variant => <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Underlined
        </Link>)}
    </div>
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,B,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: "danger",
    children: "Disabled Link"
  }
}`,...(j=(B=i.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var S,U,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    to: "https://example.com",
    variant: "info",
    blank: true,
    children: "Open in new tab"
  }
}`,...(w=(U=l.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var W,D,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Link variant="primary" to="#" className="hover-example">
        Hover Me (use your mouse)
      </Link>
      <Link variant="success" to="#" className="focus-example focus-outline">
        Focus Me (tab key)
      </Link>
    </div>
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var C,F,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    asButton: true,
    children: "Button Style Link"
  },
  render: args => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      {variants.map(variant => <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Link>)}
    </div>
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var E,H,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    to: "#",
    asButton: true,
    block: true,
    variant: "primary",
    children: "Full Width Button"
  },
  render: args => <div style={{
    width: "100%",
    maxWidth: "300px"
  }}>
      <Link {...args} />
    </div>
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const R=["Default","Variants","Underlined","Disabled","ExternalLink","HoverFocus","ButtonStyleVariants","BlockButton"];export{p as BlockButton,d as ButtonStyleVariants,s as Default,i as Disabled,l as ExternalLink,c as HoverFocus,o as Underlined,t as Variants,R as __namedExportsOrder,_ as default};
