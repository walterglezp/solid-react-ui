import{j as r}from"./iframe-uRyd9Bza.js";import{L as n}from"./Link-jFSbzXdw.js";import"./classnames-helper-C6tUBjOJ.js";const u=["primary","secondary","success","danger","warning","info","light","dark"],g={title:"Navigation/Link",component:n,tags:["autodocs"],args:{to:"#",children:"Link Text",variant:"primary",underlined:!1,disabled:!1,blank:!1,asButton:!1},argTypes:{variant:{control:"radio",options:u},underlined:{control:"boolean"},disabled:{control:"boolean"},blank:{control:"boolean"},asButton:{control:"boolean"},to:{control:"text"}}},s={render:a=>r.jsx(n,{...a})},t={render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsxs(n,{...a,variant:e,to:"#",children:[e.charAt(0).toUpperCase()+e.slice(1)," Link"]},e))})},o={args:{underlined:!0,children:"Underlined Link"},render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsxs(n,{...a,variant:e,to:"#",children:[e.charAt(0).toUpperCase()+e.slice(1)," Underlined"]},e))})},i={args:{disabled:!0,variant:"danger",children:"Disabled Link"}},l={args:{to:"https://example.com",variant:"info",blank:!0,children:"Open in new tab"}},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(n,{variant:"primary",to:"#",className:"hover-example",children:"Hover Me (use your mouse)"}),r.jsx(n,{variant:"success",to:"#",className:"focus-example focus-outline",children:"Focus Me (tab key)"})]})},d={args:{asButton:!0,children:"Button Style Link"},render:a=>r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:u.map(e=>r.jsx(n,{...a,variant:e,to:"#",children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},p={args:{to:"#",asButton:!0,block:!0,variant:"primary",children:"Full Width Button"},render:a=>r.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:r.jsx(n,{...a})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Link {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      {variants.map(variant => <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
        </Link>)}
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: "danger",
    children: "Disabled Link"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    to: "https://example.com",
    variant: "info",
    blank: true,
    children: "Open in new tab"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const k=["Default","Variants","Underlined","Disabled","ExternalLink","HoverFocus","ButtonStyleVariants","BlockButton"];export{p as BlockButton,d as ButtonStyleVariants,s as Default,i as Disabled,l as ExternalLink,c as HoverFocus,o as Underlined,t as Variants,k as __namedExportsOrder,g as default};
