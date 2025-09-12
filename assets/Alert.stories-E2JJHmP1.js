import{j as e,r as T}from"./iframe-CCjepWBu.js";import{A as r}from"./Alert-vqjgyQ0r.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";const I={title:"Common/Alert",component:r,parameters:{layout:"padded",docs:{description:{component:`
A flexible alert component for displaying important messages with contextual styling.

## Features
- Multiple semantic variants (primary, secondary, success, danger, warning, info)
- Dynamic theme colors using design system tokens
- Optional title and dismissible functionality
- Customizable icons with sensible defaults
- Responsive design for mobile devices
- Accessible with proper ARIA attributes
- Smooth hover and focus interactions
        `}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info"],description:"Color variant of the alert"},dismissible:{control:{type:"boolean"},description:"Whether the alert can be dismissed"},showIcon:{control:{type:"boolean"},description:"Whether to show an icon"},title:{control:{type:"text"},description:"Alert title"},children:{control:{type:"text"},description:"Alert content"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{variant:"primary",dismissible:!1,showIcon:!0,children:"This is an alert message."}},n={args:{variant:"primary",children:"This is a primary alert with important information."}},t={args:{variant:"secondary",children:"This is a secondary alert with neutral information."}},i={args:{variant:"success",children:"Success! Your action was completed successfully."}},a={args:{variant:"danger",children:"Error! Something went wrong. Please try again."}},s={args:{variant:"warning",children:"Warning! Please review this information carefully."}},o={args:{variant:"info",children:"Here is some useful information you should know."}},l={args:{variant:"success",title:"Well done!",children:"You successfully read this important alert message."}},c={args:{variant:"warning",title:"Important Security Notice",children:"Your account shows unusual activity. We recommend changing your password immediately to keep your account secure."}},d={args:{variant:"info",dismissible:!0,title:"New Feature Available",children:"Check out our latest feature that will help improve your workflow."}},p={render:()=>{const[S,A]=T.useState(!0);return S?e.jsx(r,{variant:"warning",dismissible:!0,title:"Dismissible Alert",onDismiss:()=>A(!1),children:"Click the × button to dismiss this alert."}):e.jsxs("div",{style:{padding:"16px",textAlign:"center",color:"#666"},children:["Alert was dismissed!",e.jsx("button",{onClick:()=>A(!0),style:{marginLeft:"8px",padding:"4px 8px",border:"1px solid #ddd",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Show Again"})]})},parameters:{docs:{description:{story:"Example of a dismissible alert with callback functionality."}}}},u={args:{variant:"primary",showIcon:!1,title:"Clean Alert",children:"This alert has no icon for a cleaner appearance."}},m={args:{variant:"success",icon:"🎉",title:"Celebration!",children:"You have completed all your tasks for today."}},h={args:{variant:"info",icon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginTop:"2px"},children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),title:"Custom SVG Icon",children:"This alert uses a custom SVG icon instead of an emoji."}},g={args:{variant:"warning",title:"Terms of Service Update",children:"We have updated our Terms of Service to better serve you and protect your privacy. The changes include clarifications on data usage, enhanced security measures, and improved user rights. Please review the updated terms at your earliest convenience. The new terms will take effect in 30 days from today. If you have any questions or concerns, please contact our support team."}},f={args:{variant:"info",title:"Rich Content Support",children:e.jsxs("div",{children:["This alert supports ",e.jsx("strong",{children:"HTML content"})," including"," ",e.jsx("a",{href:"#",style:{color:"inherit",textDecoration:"underline"},children:"links"}),", ",e.jsx("em",{children:"emphasis"}),", and"," ",e.jsx("code",{style:{backgroundColor:"rgba(0,0,0,0.1)",padding:"2px 4px",borderRadius:"3px",fontSize:"0.9em"},children:"code snippets"}),"."]})}},y={args:{children:e.jsx("div",{}),variant:"primary"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"primary",title:"Primary Alert",children:"This is a primary alert for general information."}),e.jsx(r,{variant:"secondary",title:"Secondary Alert",children:"This is a secondary alert for neutral information."}),e.jsx(r,{variant:"success",title:"Success Alert",children:"This is a success alert for positive feedback."}),e.jsx(r,{variant:"danger",title:"Danger Alert",children:"This is a danger alert for errors and critical issues."}),e.jsx(r,{variant:"warning",title:"Warning Alert",children:"This is a warning alert for cautions and important notices."}),e.jsx(r,{variant:"info",title:"Info Alert",children:"This is an info alert for helpful information."})]}),parameters:{docs:{description:{story:"All available alert variants displayed together for comparison."}}}},v={args:{children:e.jsx("div",{}),variant:"primary"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"success",showIcon:!1,children:"Alert without icon"}),e.jsx(r,{variant:"info",title:"With title only",children:"Alert with title but default icon"}),e.jsx(r,{variant:"warning",dismissible:!0,children:"Dismissible alert without title"}),e.jsx(r,{variant:"danger",title:"Complete Alert",dismissible:!0,icon:"🚨",children:"Alert with custom icon, title, and dismiss button"}),e.jsx(r,{variant:"primary",title:"Minimal Alert",showIcon:!1,children:"Clean alert with title but no icon"})]}),parameters:{docs:{description:{story:"Different layout combinations showing the flexibility of the Alert component."}}}},x={args:{variant:"info",title:"Title Only",children:""}},b={args:{variant:"warning",title:"This is an extremely long title that might wrap to multiple lines depending on the available space and screen size",children:"Short content."}},w={args:{variant:"info",title:"Action Required",dismissible:!0,children:e.jsxs("div",{children:["Please review and confirm your settings.",e.jsxs("div",{style:{marginTop:"12px",display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"6px 12px",border:"1px solid currentColor",borderRadius:"4px",background:"transparent",color:"inherit",cursor:"pointer",fontSize:"14px"},children:"Review"}),e.jsx("button",{style:{padding:"6px 12px",border:"1px solid currentColor",borderRadius:"4px",background:"currentColor",color:"white",cursor:"pointer",fontSize:"14px"},children:"Confirm"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "This is a primary alert with important information."
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "This is a secondary alert with neutral information."
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success! Your action was completed successfully."
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Error! Something went wrong. Please try again."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning! Please review this information carefully."
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Here is some useful information you should know."
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Well done!",
    children: "You successfully read this important alert message."
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Important Security Notice",
    children: "Your account shows unusual activity. We recommend changing your password immediately to keep your account secure."
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    dismissible: true,
    title: "New Feature Available",
    children: "Check out our latest feature that will help improve your workflow."
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <div style={{
        padding: "16px",
        textAlign: "center",
        color: "#666"
      }}>
          Alert was dismissed!
          <button onClick={() => setVisible(true)} style={{
          marginLeft: "8px",
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }}>
            Show Again
          </button>
        </div>;
    }
    return <Alert variant="warning" dismissible title="Dismissible Alert" onDismiss={() => setVisible(false)}>
        Click the × button to dismiss this alert.
      </Alert>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a dismissible alert with callback functionality."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    showIcon: false,
    title: "Clean Alert",
    children: "This alert has no icon for a cleaner appearance."
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    icon: "🎉",
    title: "Celebration!",
    children: "You have completed all your tasks for today."
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{
      marginTop: "2px"
    }}>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>,
    title: "Custom SVG Icon",
    children: "This alert uses a custom SVG icon instead of an emoji."
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Terms of Service Update",
    children: \`We have updated our Terms of Service to better serve you and protect your privacy. The changes include clarifications on data usage, enhanced security measures, and improved user rights. Please review the updated terms at your earliest convenience. The new terms will take effect in 30 days from today. If you have any questions or concerns, please contact our support team.\`
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Rich Content Support",
    children: <div>
        This alert supports <strong>HTML content</strong> including{" "}
        <a href="#" style={{
        color: "inherit",
        textDecoration: "underline"
      }}>
          links
        </a>
        , <em>emphasis</em>, and{" "}
        <code style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: "2px 4px",
        borderRadius: "3px",
        fontSize: "0.9em"
      }}>
          code snippets
        </code>
        .
      </div>
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    variant: "primary"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Alert variant="primary" title="Primary Alert">
        This is a primary alert for general information.
      </Alert>
      <Alert variant="secondary" title="Secondary Alert">
        This is a secondary alert for neutral information.
      </Alert>
      <Alert variant="success" title="Success Alert">
        This is a success alert for positive feedback.
      </Alert>
      <Alert variant="danger" title="Danger Alert">
        This is a danger alert for errors and critical issues.
      </Alert>
      <Alert variant="warning" title="Warning Alert">
        This is a warning alert for cautions and important notices.
      </Alert>
      <Alert variant="info" title="Info Alert">
        This is an info alert for helpful information.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All available alert variants displayed together for comparison."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    variant: "primary"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Alert variant="success" showIcon={false}>
        Alert without icon
      </Alert>

      <Alert variant="info" title="With title only">
        Alert with title but default icon
      </Alert>

      <Alert variant="warning" dismissible>
        Dismissible alert without title
      </Alert>

      <Alert variant="danger" title="Complete Alert" dismissible icon="🚨">
        Alert with custom icon, title, and dismiss button
      </Alert>

      <Alert variant="primary" title="Minimal Alert" showIcon={false}>
        Clean alert with title but no icon
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different layout combinations showing the flexibility of the Alert component."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Title Only",
    children: ""
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "This is an extremely long title that might wrap to multiple lines depending on the available space and screen size",
    children: "Short content."
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Action Required",
    dismissible: true,
    children: <div>
        Please review and confirm your settings.
        <div style={{
        marginTop: "12px",
        display: "flex",
        gap: "8px"
      }}>
          <button style={{
          padding: "6px 12px",
          border: "1px solid currentColor",
          borderRadius: "4px",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          fontSize: "14px"
        }}>
            Review
          </button>
          <button style={{
          padding: "6px 12px",
          border: "1px solid currentColor",
          borderRadius: "4px",
          background: "currentColor",
          color: "white",
          cursor: "pointer",
          fontSize: "14px"
        }}>
            Confirm
          </button>
        </div>
      </div>
  }
}`,...w.parameters?.docs?.source}}};const W=["Primary","Secondary","Success","Danger","Warning","Info","WithTitle","WithLongTitle","Dismissible","DismissibleWithCallback","WithoutIcon","CustomIcon","CustomIconComplex","LongContent","HTMLContent","AllVariants","DifferentLayouts","EmptyContent","VeryLongTitle","MultipleActions"];export{y as AllVariants,m as CustomIcon,h as CustomIconComplex,a as Danger,v as DifferentLayouts,d as Dismissible,p as DismissibleWithCallback,x as EmptyContent,f as HTMLContent,o as Info,g as LongContent,w as MultipleActions,n as Primary,t as Secondary,i as Success,b as VeryLongTitle,s as Warning,c as WithLongTitle,l as WithTitle,u as WithoutIcon,W as __namedExportsOrder,I as default};
