import{j as n}from"./iframe-uRyd9Bza.js";import{B as e}from"./Button-BOnyIstR.js";import{I as r}from"./Icon-BCBBvEMd.js";import"./classnames-helper-C6tUBjOJ.js";const j={title:"Form/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark","link"]},disabled:{control:"boolean"},outline:{control:"boolean"},noBorder:{control:"boolean"},active:{control:"boolean"},block:{control:"boolean"},btnIcon:{control:"boolean"},isLoading:{control:"boolean"}}},a={args:{children:"Button",variant:"primary",size:"md"}},t={args:{children:"Loading Button",variant:"primary",size:"md",isLoading:!0}},s={args:{children:"Disabled Button",variant:"primary",size:"md",disabled:!0}},i={render:()=>n.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[n.jsx(e,{size:"sm",variant:"primary",children:"Small"}),n.jsx(e,{size:"md",variant:"primary",children:"Medium"}),n.jsx(e,{size:"lg",variant:"primary",children:"Large"})]})},o={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[n.jsx(e,{variant:"primary",children:"Primary"}),n.jsx(e,{variant:"secondary",children:"Secondary"}),n.jsx(e,{variant:"success",children:"Success"}),n.jsx(e,{variant:"danger",children:"Danger"}),n.jsx(e,{variant:"warning",children:"Warning"}),n.jsx(e,{variant:"info",children:"Info"}),n.jsx(e,{variant:"light",children:"Light"}),n.jsx(e,{variant:"dark",children:"Dark"}),n.jsx(e,{variant:"link",children:"Link"})]})},d={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[n.jsx(e,{variant:"primary",outline:!0,children:"Primary"}),n.jsx(e,{variant:"secondary",outline:!0,children:"Secondary"}),n.jsx(e,{variant:"success",outline:!0,children:"Success"}),n.jsx(e,{variant:"danger",outline:!0,children:"Danger"}),n.jsx(e,{variant:"warning",outline:!0,children:"Warning"}),n.jsx(e,{variant:"info",outline:!0,children:"Info"}),n.jsx(e,{variant:"light",outline:!0,children:"Light"}),n.jsx(e,{variant:"dark",outline:!0,children:"Dark"})]})},l={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[n.jsx("strong",{children:"Small:"}),n.jsx(e,{size:"sm",variant:"primary",children:"Primary"}),n.jsx(e,{size:"sm",variant:"secondary",children:"Secondary"}),n.jsx(e,{size:"sm",variant:"success",children:"Success"}),n.jsx(e,{size:"sm",variant:"danger",children:"Danger"})]}),n.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[n.jsx("strong",{children:"Medium:"}),n.jsx(e,{size:"md",variant:"primary",children:"Primary"}),n.jsx(e,{size:"md",variant:"secondary",children:"Secondary"}),n.jsx(e,{size:"md",variant:"success",children:"Success"}),n.jsx(e,{size:"md",variant:"danger",children:"Danger"})]}),n.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[n.jsx("strong",{children:"Large:"}),n.jsx(e,{size:"lg",variant:"primary",children:"Primary"}),n.jsx(e,{size:"lg",variant:"secondary",children:"Secondary"}),n.jsx(e,{size:"lg",variant:"success",children:"Success"}),n.jsx(e,{size:"lg",variant:"danger",children:"Danger"})]})]})},c={render:()=>n.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[n.jsx(e,{size:"sm",variant:"primary",isLoading:!0,children:"Small Loading"}),n.jsx(e,{size:"md",variant:"secondary",isLoading:!0,children:"Medium Loading"}),n.jsx(e,{size:"lg",variant:"success",isLoading:!0,children:"Large Loading"})]})},m={render:()=>n.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[n.jsxs(e,{variant:"primary",children:[n.jsx(r,{name:"plus",size:16,className:"me-2"}),"Add Item"]}),n.jsxs(e,{variant:"danger",children:[n.jsx(r,{name:"trash-alt",size:16,className:"me-2"}),"Delete"]}),n.jsxs(e,{variant:"success",children:[n.jsx(r,{name:"check-mark-fill",size:16,className:"me-2"}),"Approve"]}),n.jsxs(e,{variant:"info",children:[n.jsx(r,{name:"save-disc",size:16,className:"me-2"}),"Download"]})]})},u={render:()=>n.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[n.jsx(e,{variant:"primary",btnIcon:!0,size:"sm",children:n.jsx(r,{name:"plus",size:14})}),n.jsx(e,{variant:"secondary",btnIcon:!0,size:"md",children:n.jsx(r,{name:"edit",size:16})}),n.jsx(e,{variant:"danger",btnIcon:!0,size:"lg",children:n.jsx(r,{name:"trash-alt",size:18})})]})},p={render:()=>n.jsx("div",{style:{width:"300px"},children:n.jsx(e,{variant:"primary",block:!0,size:"lg",children:"Full Width Block Button"})})},g={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[n.jsx("strong",{children:"Active State:"}),n.jsx(e,{variant:"primary",active:!0,children:"Active Primary"}),n.jsx(e,{variant:"secondary",active:!0,children:"Active Secondary"})]}),n.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[n.jsx("strong",{children:"No Border:"}),n.jsx(e,{variant:"primary",noBorder:!0,children:"No Border Primary"}),n.jsx(e,{variant:"secondary",noBorder:!0,children:"No Border Secondary"})]}),n.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[n.jsx("strong",{children:"Disabled:"}),n.jsx(e,{variant:"primary",disabled:!0,children:"Disabled Primary"}),n.jsx(e,{variant:"secondary",disabled:!0,children:"Disabled Secondary"})]})]})},v={args:{children:"Playground Button",variant:"primary",size:"md",disabled:!1,outline:!1,noBorder:!1,active:!1,block:!1,btnIcon:!1,isLoading:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    size: "md"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Loading Button",
    variant: "primary",
    size: "md",
    isLoading: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  }}>
      <Button variant="primary" outline>
        Primary
      </Button>
      <Button variant="secondary" outline>
        Secondary
      </Button>
      <Button variant="success" outline>
        Success
      </Button>
      <Button variant="danger" outline>
        Danger
      </Button>
      <Button variant="warning" outline>
        Warning
      </Button>
      <Button variant="info" outline>
        Info
      </Button>
      <Button variant="light" outline>
        Light
      </Button>
      <Button variant="dark" outline>
        Dark
      </Button>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    }}>
        <strong>Small:</strong>
        <Button size="sm" variant="primary">
          Primary
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="success">
          Success
        </Button>
        <Button size="sm" variant="danger">
          Danger
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    }}>
        <strong>Medium:</strong>
        <Button size="md" variant="primary">
          Primary
        </Button>
        <Button size="md" variant="secondary">
          Secondary
        </Button>
        <Button size="md" variant="success">
          Success
        </Button>
        <Button size="md" variant="danger">
          Danger
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    }}>
        <strong>Large:</strong>
        <Button size="lg" variant="primary">
          Primary
        </Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="success">
          Success
        </Button>
        <Button size="lg" variant="danger">
          Danger
        </Button>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>
      <Button size="sm" variant="primary" isLoading>
        Small Loading
      </Button>
      <Button size="md" variant="secondary" isLoading>
        Medium Loading
      </Button>
      <Button size="lg" variant="success" isLoading>
        Large Loading
      </Button>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      <Button variant="primary">
        <Icon name="plus" size={16} className="me-2" />
        Add Item
      </Button>
      <Button variant="danger">
        <Icon name="trash-alt" size={16} className="me-2" />
        Delete
      </Button>
      <Button variant="success">
        <Icon name="check-mark-fill" size={16} className="me-2" />
        Approve
      </Button>
      <Button variant="info">
        <Icon name="save-disc" size={16} className="me-2" />
        Download
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  }}>
      <Button variant="primary" btnIcon size="sm">
        <Icon name="plus" size={14} />
      </Button>
      <Button variant="secondary" btnIcon size="md">
        <Icon name="edit" size={16} />
      </Button>
      <Button variant="danger" btnIcon size="lg">
        <Icon name="trash-alt" size={18} />
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <Button variant="primary" block size="lg">
        Full Width Block Button
      </Button>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>
        <strong>Active State:</strong>
        <Button variant="primary" active>
          Active Primary
        </Button>
        <Button variant="secondary" active>
          Active Secondary
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>
        <strong>No Border:</strong>
        <Button variant="primary" noBorder>
          No Border Primary
        </Button>
        <Button variant="secondary" noBorder>
          No Border Secondary
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>
        <strong>Disabled:</strong>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Playground Button",
    variant: "primary",
    size: "md",
    disabled: false,
    outline: false,
    noBorder: false,
    active: false,
    block: false,
    btnIcon: false,
    isLoading: false
  }
}`,...v.parameters?.docs?.source}}};const f=["Default","Loading","Disabled","Sizes","AllVariants","OutlineVariants","SizeComparison","LoadingStates","WithIcons","IconOnly","BlockButton","SpecialStates","Playground"];export{o as AllVariants,p as BlockButton,a as Default,s as Disabled,u as IconOnly,t as Loading,c as LoadingStates,d as OutlineVariants,v as Playground,l as SizeComparison,i as Sizes,g as SpecialStates,m as WithIcons,f as __namedExportsOrder,j as default};
