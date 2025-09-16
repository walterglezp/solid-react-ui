import{j as n}from"./iframe-cc5ZmNpn.js";import{B as e}from"./Badge-pe0clpI-.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./Icon-YTP-CrPf.js";const S={title:"Common/Badge",component:e,parameters:{layout:"centered",docs:{description:{component:`
A versatile badge component for displaying short snippets of information.

## Features
- Multiple color variants (primary, secondary, success, danger, warning, info, light, dark)
- Three size options (sm, md, lg)
- Support for icons with text
- Pill-shaped variant for modern appearance
- Outline style for subtle emphasis
- Responsive design for mobile devices
- Empty state for notification dots
        `}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Color variant of the badge"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the badge"},pill:{control:{type:"boolean"},description:"Whether to use pill-shaped border radius"},outline:{control:{type:"boolean"},description:"Whether to use outline style"},icon:{control:{type:"text"},description:"Icon to display before the text"},children:{control:{type:"text"},description:"Badge content"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{variant:"primary",size:"md",pill:!1,outline:!1,children:"Badge"}},r={args:{variant:"primary",children:"Primary"}},a={args:{variant:"secondary",children:"Secondary"}},i={args:{variant:"success",children:"Success"}},s={args:{variant:"danger",children:"Error"}},t={args:{variant:"warning",children:"Warning"}},d={args:{variant:"info",children:"Info"}},l={args:{variant:"light",children:"Light"}},o={args:{variant:"dark",children:"Dark"}},c={render:()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx(e,{size:"sm",variant:"primary",children:"Small"}),n.jsx(e,{size:"md",variant:"primary",children:"Medium"}),n.jsx(e,{size:"lg",variant:"primary",children:"Large"})]}),parameters:{docs:{description:{story:"Three different size options for various use cases."}}}},p={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"success",icon:"check-mark-fill",children:"Completed"}),n.jsx(e,{variant:"danger",icon:"x-circle-fill",children:"Failed"}),n.jsx(e,{variant:"warning",icon:"exclamation-circle-fill",children:"Warning"}),n.jsx(e,{variant:"info",icon:"question-fill",children:"Info"}),n.jsx(e,{variant:"primary",icon:"star",children:"Featured"}),n.jsx(e,{variant:"secondary",icon:"bell",children:"Pending"})]}),parameters:{docs:{description:{story:"Badges with icons to provide visual context."}}}},g={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"primary",pill:!0,children:"Primary Pill"}),n.jsx(e,{variant:"success",pill:!0,children:"Success Pill"}),n.jsx(e,{variant:"danger",pill:!0,children:"Danger Pill"}),n.jsx(e,{variant:"warning",pill:!0,children:"Warning Pill"}),n.jsx(e,{variant:"info",pill:!0,children:"Info Pill"})]}),parameters:{docs:{description:{story:"Pill-shaped badges with rounded borders for a modern look."}}}},x={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"primary",outline:!0,children:"Primary"}),n.jsx(e,{variant:"success",outline:!0,children:"Success"}),n.jsx(e,{variant:"danger",outline:!0,children:"Danger"}),n.jsx(e,{variant:"warning",outline:!0,children:"Warning"}),n.jsx(e,{variant:"info",outline:!0,children:"Info"}),n.jsx(e,{variant:"dark",outline:!0,children:"Dark"})]}),parameters:{docs:{description:{story:"Outline badges with border styling for subtle emphasis."}}}},u={render:()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx("button",{style:{padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Messages"}),n.jsx(e,{variant:"danger",size:"sm",style:{position:"absolute",top:"-8px",right:"-8px"},children:"3"})]}),n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx("button",{style:{padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Notifications"}),n.jsx(e,{variant:"primary",size:"sm",style:{position:"absolute",top:"-8px",right:"-8px"},children:"12"})]}),n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx("button",{style:{padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Cart"}),n.jsx(e,{variant:"success",size:"sm",style:{position:"absolute",top:"-8px",right:"-8px"},children:"99+"})]})]}),parameters:{docs:{description:{story:"Badges used as notification counters positioned over buttons or other elements."}}}},m={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"300px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px",border:"1px solid #eee",borderRadius:"4px"},children:[n.jsx("span",{children:"Order #1234"}),n.jsx(e,{variant:"success",icon:"check-mark-fill",children:"Delivered"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px",border:"1px solid #eee",borderRadius:"4px"},children:[n.jsx("span",{children:"Order #1235"}),n.jsx(e,{variant:"warning",icon:"exclamation-circle-fill",children:"Shipping"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px",border:"1px solid #eee",borderRadius:"4px"},children:[n.jsx("span",{children:"Order #1236"}),n.jsx(e,{variant:"info",icon:"bell",children:"Processing"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px",border:"1px solid #eee",borderRadius:"4px"},children:[n.jsx("span",{children:"Order #1237"}),n.jsx(e,{variant:"danger",icon:"x-circle-fill",children:"Cancelled"})]})]}),parameters:{docs:{description:{story:"Badges used to display status information in lists or cards."}}}},v={render:()=>n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"400px"},children:[n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"React"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"TypeScript"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"JavaScript"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"CSS"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"HTML"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"Node.js"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"Storybook"}),n.jsx(e,{variant:"light",pill:!0,size:"sm",children:"Jest"})]}),parameters:{docs:{description:{story:"Small pill badges used as tags or labels for categorization."}}}},h={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Filled Badges"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"primary",children:"Primary"}),n.jsx(e,{variant:"secondary",children:"Secondary"}),n.jsx(e,{variant:"success",children:"Success"}),n.jsx(e,{variant:"danger",children:"Danger"}),n.jsx(e,{variant:"warning",children:"Warning"}),n.jsx(e,{variant:"info",children:"Info"}),n.jsx(e,{variant:"light",children:"Light"}),n.jsx(e,{variant:"dark",children:"Dark"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Outline Badges"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"primary",outline:!0,children:"Primary"}),n.jsx(e,{variant:"secondary",outline:!0,children:"Secondary"}),n.jsx(e,{variant:"success",outline:!0,children:"Success"}),n.jsx(e,{variant:"danger",outline:!0,children:"Danger"}),n.jsx(e,{variant:"warning",outline:!0,children:"Warning"}),n.jsx(e,{variant:"info",outline:!0,children:"Info"}),n.jsx(e,{variant:"light",outline:!0,children:"Light"}),n.jsx(e,{variant:"dark",outline:!0,children:"Dark"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Pill Badges with Icons"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[n.jsx(e,{variant:"primary",pill:!0,icon:"user",children:"User"}),n.jsx(e,{variant:"success",pill:!0,icon:"check-mark-fill",children:"Verified"}),n.jsx(e,{variant:"danger",pill:!0,icon:"x-circle-fill",children:"Blocked"}),n.jsx(e,{variant:"warning",pill:!0,icon:"exclamation-circle-fill",children:"Alert"}),n.jsx(e,{variant:"info",pill:!0,icon:"question-fill",children:"Help"})]})]})]}),parameters:{docs:{description:{story:"Comprehensive showcase of all badge variants, styles, and features."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Error"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning"
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Info"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "light",
    children: "Light"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    children: "Dark"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }}>
      <Badge size="sm" variant="primary">
        Small
      </Badge>
      <Badge size="md" variant="primary">
        Medium
      </Badge>
      <Badge size="lg" variant="primary">
        Large
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Three different size options for various use cases."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  }}>
      <Badge variant="success" icon="check-mark-fill">
        Completed
      </Badge>
      <Badge variant="danger" icon="x-circle-fill">
        Failed
      </Badge>
      <Badge variant="warning" icon="exclamation-circle-fill">
        Warning
      </Badge>
      <Badge variant="info" icon="question-fill">
        Info
      </Badge>
      <Badge variant="primary" icon="star">
        Featured
      </Badge>
      <Badge variant="secondary" icon="bell">
        Pending
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges with icons to provide visual context."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  }}>
      <Badge variant="primary" pill>
        Primary Pill
      </Badge>
      <Badge variant="success" pill>
        Success Pill
      </Badge>
      <Badge variant="danger" pill>
        Danger Pill
      </Badge>
      <Badge variant="warning" pill>
        Warning Pill
      </Badge>
      <Badge variant="info" pill>
        Info Pill
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Pill-shaped badges with rounded borders for a modern look."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  }}>
      <Badge variant="primary" outline>
        Primary
      </Badge>
      <Badge variant="success" outline>
        Success
      </Badge>
      <Badge variant="danger" outline>
        Danger
      </Badge>
      <Badge variant="warning" outline>
        Warning
      </Badge>
      <Badge variant="info" outline>
        Info
      </Badge>
      <Badge variant="dark" outline>
        Dark
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Outline badges with border styling for subtle emphasis."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <div style={{
      position: "relative",
      display: "inline-block"
    }}>
        <button style={{
        padding: "8px 16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        background: "white",
        cursor: "pointer"
      }}>
          Messages
        </button>
        <Badge variant="danger" size="sm" style={{
        position: "absolute",
        top: "-8px",
        right: "-8px"
      }}>
          3
        </Badge>
      </div>
      <div style={{
      position: "relative",
      display: "inline-block"
    }}>
        <button style={{
        padding: "8px 16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        background: "white",
        cursor: "pointer"
      }}>
          Notifications
        </button>
        <Badge variant="primary" size="sm" style={{
        position: "absolute",
        top: "-8px",
        right: "-8px"
      }}>
          12
        </Badge>
      </div>
      <div style={{
      position: "relative",
      display: "inline-block"
    }}>
        <button style={{
        padding: "8px 16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        background: "white",
        cursor: "pointer"
      }}>
          Cart
        </button>
        <Badge variant="success" size="sm" style={{
        position: "absolute",
        top: "-8px",
        right: "-8px"
      }}>
          99+
        </Badge>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used as notification counters positioned over buttons or other elements."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "300px"
  }}>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      border: "1px solid #eee",
      borderRadius: "4px"
    }}>
        <span>Order #1234</span>
        <Badge variant="success" icon="check-mark-fill">
          Delivered
        </Badge>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      border: "1px solid #eee",
      borderRadius: "4px"
    }}>
        <span>Order #1235</span>
        <Badge variant="warning" icon="exclamation-circle-fill">
          Shipping
        </Badge>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      border: "1px solid #eee",
      borderRadius: "4px"
    }}>
        <span>Order #1236</span>
        <Badge variant="info" icon="bell">
          Processing
        </Badge>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      border: "1px solid #eee",
      borderRadius: "4px"
    }}>
        <span>Order #1237</span>
        <Badge variant="danger" icon="x-circle-fill">
          Cancelled
        </Badge>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used to display status information in lists or cards."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    maxWidth: "400px"
  }}>
      <Badge variant="light" pill size="sm">
        React
      </Badge>
      <Badge variant="light" pill size="sm">
        TypeScript
      </Badge>
      <Badge variant="light" pill size="sm">
        JavaScript
      </Badge>
      <Badge variant="light" pill size="sm">
        CSS
      </Badge>
      <Badge variant="light" pill size="sm">
        HTML
      </Badge>
      <Badge variant="light" pill size="sm">
        Node.js
      </Badge>
      <Badge variant="light" pill size="sm">
        Storybook
      </Badge>
      <Badge variant="light" pill size="sm">
        Jest
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Small pill badges used as tags or labels for categorization."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Filled Badges
        </h4>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Outline Badges
        </h4>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
          <Badge variant="primary" outline>
            Primary
          </Badge>
          <Badge variant="secondary" outline>
            Secondary
          </Badge>
          <Badge variant="success" outline>
            Success
          </Badge>
          <Badge variant="danger" outline>
            Danger
          </Badge>
          <Badge variant="warning" outline>
            Warning
          </Badge>
          <Badge variant="info" outline>
            Info
          </Badge>
          <Badge variant="light" outline>
            Light
          </Badge>
          <Badge variant="dark" outline>
            Dark
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Pill Badges with Icons
        </h4>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
          <Badge variant="primary" pill icon="user">
            User
          </Badge>
          <Badge variant="success" pill icon="check-mark-fill">
            Verified
          </Badge>
          <Badge variant="danger" pill icon="x-circle-fill">
            Blocked
          </Badge>
          <Badge variant="warning" pill icon="exclamation-circle-fill">
            Alert
          </Badge>
          <Badge variant="info" pill icon="question-fill">
            Help
          </Badge>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comprehensive showcase of all badge variants, styles, and features."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const w=["Primary","Secondary","Success","Danger","Warning","Info","Light","Dark","Sizes","WithIcons","Pill","Outline","NumberBadges","StatusBadges","Tags","AllVariants"];export{h as AllVariants,s as Danger,o as Dark,d as Info,l as Light,u as NumberBadges,x as Outline,g as Pill,r as Primary,a as Secondary,c as Sizes,m as StatusBadges,i as Success,v as Tags,t as Warning,p as WithIcons,w as __namedExportsOrder,S as default};
