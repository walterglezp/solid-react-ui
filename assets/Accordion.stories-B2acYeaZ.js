import{j as e,R as g}from"./iframe-DzMUKr-y.js";import{A as r}from"./Accordion-ByDBhG45.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./Icon-CpeLWG6P.js";const y={title:"Common/Accordion",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A flexible accordion component with expandable panels, similar styling to Menu component, supporting various configurations and animations."}}},argTypes:{allowMultiple:{description:"Allow multiple panels to be open at once",control:{type:"boolean"}},allowToggle:{description:"Allow all panels to be closed",control:{type:"boolean"}},variant:{description:"Visual variant of the accordion",control:{type:"select"},options:["default","bordered","filled"]},size:{description:"Size variant",control:{type:"select"},options:["sm","md","lg"]},chevronIcon:{description:"Custom chevron icon",control:{type:"select"},options:["chevron-down","chevron-up","caret-down","caret-up","arrow-down","arrow-up"]}}},o=[{id:"getting-started",title:"Getting Started",content:e.jsxs("div",{children:[e.jsx("p",{children:"Welcome to our platform! Here's how to get started:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Create your account"}),e.jsx("li",{children:"Complete your profile"}),e.jsx("li",{children:"Explore the dashboard"}),e.jsx("li",{children:"Start your first project"})]}),e.jsx("p",{children:"If you need help, don't hesitate to contact our support team."})]}),icon:"home-fill",defaultOpen:!0},{id:"account-settings",title:"Account Settings",content:e.jsxs("div",{children:[e.jsx("p",{children:"Manage your account preferences and security settings:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Profile Information:"})," Update your name, email, and photo"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Privacy Settings:"})," Control who can see your information"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Security:"})," Change password and enable two-factor authentication"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notifications:"})," Customize your notification preferences"]})]})]}),icon:"user-settings",badge:"New"},{id:"billing",title:"Billing & Payments",content:e.jsxs("div",{children:[e.jsx("p",{children:"Manage your subscription and payment methods:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"View current plan and usage"}),e.jsx("li",{children:"Update payment methods"}),e.jsx("li",{children:"Download invoices and receipts"}),e.jsx("li",{children:"Upgrade or downgrade your plan"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("strong",{children:"Current Plan:"})," Professional ($29/month)"]})]}),icon:"save-disc",badge:3},{id:"help-support",title:"Help & Support",content:e.jsxs("div",{children:[e.jsx("p",{children:"Find answers and get help when you need it:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation:"})," Comprehensive guides and tutorials"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FAQ:"})," Frequently asked questions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Community:"})," Connect with other users"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contact Support:"})," Reach out to our team directly"]})]}),e.jsxs("p",{children:["Average response time: ",e.jsx("strong",{children:"2 hours"})]})]}),icon:"support"},{id:"advanced-features",title:"Advanced Features",content:e.jsxs("div",{children:[e.jsx("p",{children:"Explore advanced functionality for power users:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"API access and webhooks"}),e.jsx("li",{children:"Custom integrations"}),e.jsx("li",{children:"Advanced analytics"}),e.jsx("li",{children:"Bulk operations"})]}),e.jsx("p",{children:"Note: Some features may require a higher-tier subscription."})]}),icon:"gear",disabled:!0}],l={args:{items:o},parameters:{docs:{description:{story:"Basic accordion with default settings. Only one panel can be open at a time."}}}},s={args:{items:o,allowMultiple:!0},parameters:{docs:{description:{story:"Accordion allowing multiple panels to be open simultaneously."}}}},a={args:{items:o,variant:"bordered",allowMultiple:!0},parameters:{docs:{description:{story:"Bordered variant with enhanced visual separation and background."}}}},c={args:{items:o,variant:"filled",allowMultiple:!0},parameters:{docs:{description:{story:"Filled variant with background color and rounded corners."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(r,{items:o.slice(0,3),size:"sm",variant:"bordered",allowMultiple:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (Default)"}),e.jsx(r,{items:o.slice(0,3),size:"md",variant:"bordered",allowMultiple:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsx(r,{items:o.slice(0,3),size:"lg",variant:"bordered",allowMultiple:!0})]})]}),parameters:{docs:{description:{story:"Different size variants of the accordion component."}}}},p={args:{items:o,variant:"bordered",chevronIcon:"arrow-down",allowMultiple:!0},parameters:{docs:{description:{story:"Accordion with custom chevron icon (arrow instead of chevron)."}}}},u={args:{items:[{id:"what-is-pricing",title:"What is your pricing model?",content:e.jsxs("div",{children:[e.jsx("p",{children:"We offer flexible pricing based on your usage and needs:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Free Plan:"})," Perfect for getting started (up to 3 projects)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Professional:"})," $29/month for small teams (up to 25 projects)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enterprise:"})," Custom pricing for large organizations"]})]}),e.jsx("p",{children:"All plans include 24/7 support and a 30-day money-back guarantee."})]}),defaultOpen:!0},{id:"how-to-cancel",title:"How can I cancel my subscription?",content:e.jsxs("div",{children:[e.jsx("p",{children:"You can cancel your subscription at any time:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Go to Account Settings"}),e.jsx("li",{children:'Click on "Billing & Subscription"'}),e.jsx("li",{children:'Select "Cancel Subscription"'}),e.jsx("li",{children:"Follow the prompts to confirm"})]}),e.jsx("p",{children:"Your account will remain active until the end of your current billing period."})]})},{id:"data-security",title:"How do you protect my data?",content:e.jsxs("div",{children:[e.jsx("p",{children:"We take data security very seriously:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"All data is encrypted in transit and at rest"}),e.jsx("li",{children:"Regular security audits and penetration testing"}),e.jsx("li",{children:"SOC 2 Type II certified"}),e.jsx("li",{children:"GDPR and CCPA compliant"}),e.jsx("li",{children:"24/7 monitoring and threat detection"})]}),e.jsxs("p",{children:["For more details, please review our"," ",e.jsx("a",{href:"#",children:"Security Documentation"}),"."]})]}),icon:"shield"},{id:"api-access",title:"Do you provide API access?",content:e.jsxs("div",{children:[e.jsx("p",{children:"Yes! We offer comprehensive API access:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"RESTful API with full CRUD operations"}),e.jsx("li",{children:"Real-time webhooks for instant notifications"}),e.jsx("li",{children:"SDKs available for popular programming languages"}),e.jsx("li",{children:"Rate limiting: 1000 requests/minute"}),e.jsx("li",{children:"Comprehensive documentation and examples"})]}),e.jsx("p",{children:"API access is available on Professional and Enterprise plans."})]}),icon:"coding",badge:"API"},{id:"mobile-app",title:"Is there a mobile app available?",content:e.jsxs("div",{children:[e.jsx("p",{children:"We're currently working on mobile applications:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"iOS App:"})," In beta testing (Q2 2024)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Android App:"})," In development (Q3 2024)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile Web:"})," Fully responsive and available now"]})]}),e.jsx("p",{children:"Sign up for our newsletter to get notified when the mobile apps are released!"})]}),badge:"Coming Soon"}],variant:"default",allowToggle:!0},parameters:{docs:{description:{story:"FAQ-style accordion with realistic content and mixed configurations."}}}},h={args:{items:[{id:"section1",title:"Section One",content:"This is a simple text content for the first section."},{id:"section2",title:"Section Two",content:"This is another simple text content for the second section.",icon:"star"},{id:"section3",title:"Section Three",content:"And this is the content for the third section.",badge:"New"}],variant:"filled",allowMultiple:!0},parameters:{docs:{description:{story:"Simple accordion with basic text content and minimal configuration."}}}},m={render:()=>{const[n,t]=g.useState({allowMultiple:!1,allowToggle:!0,variant:"default",size:"md",chevronIcon:"chevron-down"});return e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px",padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:n.allowMultiple,onChange:i=>t({...n,allowMultiple:i.target.checked})})," ","Allow Multiple Open"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:n.allowToggle,onChange:i=>t({...n,allowToggle:i.target.checked})})," ","Allow Toggle (Close All)"]})}),e.jsx("div",{children:e.jsxs("label",{children:["Variant:"," ",e.jsxs("select",{value:n.variant,onChange:i=>t({...n,variant:i.target.value}),children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"bordered",children:"Bordered"}),e.jsx("option",{value:"filled",children:"Filled"})]})]})}),e.jsx("div",{children:e.jsxs("label",{children:["Size:"," ",e.jsxs("select",{value:n.size,onChange:i=>t({...n,size:i.target.value}),children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]})}),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsxs("label",{children:["Chevron Icon:"," ",e.jsxs("select",{value:n.chevronIcon,onChange:i=>t({...n,chevronIcon:i.target.value}),children:[e.jsx("option",{value:"chevron-down",children:"Chevron Down"}),e.jsx("option",{value:"caret-down",children:"Caret Down"}),e.jsx("option",{value:"arrow-down",children:"Arrow Down"})]})]})})]}),e.jsx(r,{items:o.slice(0,4),allowMultiple:n.allowMultiple,allowToggle:n.allowToggle,variant:n.variant,size:n.size,chevronIcon:n.chevronIcon})]})},parameters:{docs:{description:{story:"Interactive demo allowing you to test different accordion configurations in real-time."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: "Basic accordion with default settings. Only one panel can be open at a time."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion allowing multiple panels to be open simultaneously."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: "bordered",
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Bordered variant with enhanced visual separation and background."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: "filled",
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Filled variant with background color and rounded corners."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <div>
        <h4>Small</h4>
        <Accordion items={sampleItems.slice(0, 3)} size="sm" variant="bordered" allowMultiple />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <Accordion items={sampleItems.slice(0, 3)} size="md" variant="bordered" allowMultiple />
      </div>
      <div>
        <h4>Large</h4>
        <Accordion items={sampleItems.slice(0, 3)} size="lg" variant="bordered" allowMultiple />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different size variants of the accordion component."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: "bordered",
    chevronIcon: "arrow-down",
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with custom chevron icon (arrow instead of chevron)."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "what-is-pricing",
      title: "What is your pricing model?",
      content: <div>
            <p>We offer flexible pricing based on your usage and needs:</p>
            <ul>
              <li>
                <strong>Free Plan:</strong> Perfect for getting started (up to 3
                projects)
              </li>
              <li>
                <strong>Professional:</strong> $29/month for small teams (up to
                25 projects)
              </li>
              <li>
                <strong>Enterprise:</strong> Custom pricing for large
                organizations
              </li>
            </ul>
            <p>
              All plans include 24/7 support and a 30-day money-back guarantee.
            </p>
          </div>,
      defaultOpen: true
    }, {
      id: "how-to-cancel",
      title: "How can I cancel my subscription?",
      content: <div>
            <p>You can cancel your subscription at any time:</p>
            <ol>
              <li>Go to Account Settings</li>
              <li>Click on "Billing & Subscription"</li>
              <li>Select "Cancel Subscription"</li>
              <li>Follow the prompts to confirm</li>
            </ol>
            <p>
              Your account will remain active until the end of your current
              billing period.
            </p>
          </div>
    }, {
      id: "data-security",
      title: "How do you protect my data?",
      content: <div>
            <p>We take data security very seriously:</p>
            <ul>
              <li>All data is encrypted in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II certified</li>
              <li>GDPR and CCPA compliant</li>
              <li>24/7 monitoring and threat detection</li>
            </ul>
            <p>
              For more details, please review our{" "}
              <a href="#">Security Documentation</a>.
            </p>
          </div>,
      icon: "shield"
    }, {
      id: "api-access",
      title: "Do you provide API access?",
      content: <div>
            <p>Yes! We offer comprehensive API access:</p>
            <ul>
              <li>RESTful API with full CRUD operations</li>
              <li>Real-time webhooks for instant notifications</li>
              <li>SDKs available for popular programming languages</li>
              <li>Rate limiting: 1000 requests/minute</li>
              <li>Comprehensive documentation and examples</li>
            </ul>
            <p>API access is available on Professional and Enterprise plans.</p>
          </div>,
      icon: "coding",
      badge: "API"
    }, {
      id: "mobile-app",
      title: "Is there a mobile app available?",
      content: <div>
            <p>We're currently working on mobile applications:</p>
            <ul>
              <li>
                <strong>iOS App:</strong> In beta testing (Q2 2024)
              </li>
              <li>
                <strong>Android App:</strong> In development (Q3 2024)
              </li>
              <li>
                <strong>Mobile Web:</strong> Fully responsive and available now
              </li>
            </ul>
            <p>
              Sign up for our newsletter to get notified when the mobile apps
              are released!
            </p>
          </div>,
      badge: "Coming Soon"
    }],
    variant: "default",
    allowToggle: true
  },
  parameters: {
    docs: {
      description: {
        story: "FAQ-style accordion with realistic content and mixed configurations."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "section1",
      title: "Section One",
      content: "This is a simple text content for the first section."
    }, {
      id: "section2",
      title: "Section Two",
      content: "This is another simple text content for the second section.",
      icon: "star"
    }, {
      id: "section3",
      title: "Section Three",
      content: "And this is the content for the third section.",
      badge: "New"
    }],
    variant: "filled",
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Simple accordion with basic text content and minimal configuration."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [config, setConfig] = React.useState({
      allowMultiple: false,
      allowToggle: true,
      variant: "default" as "default" | "bordered" | "filled",
      size: "md" as "sm" | "md" | "lg",
      chevronIcon: "chevron-down" as const
    });
    return <div style={{
      maxWidth: "800px"
    }}>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "32px",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px"
      }}>
          <div>
            <label>
              <input type="checkbox" checked={config.allowMultiple} onChange={e => setConfig({
              ...config,
              allowMultiple: e.target.checked
            })} />{" "}
              Allow Multiple Open
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={config.allowToggle} onChange={e => setConfig({
              ...config,
              allowToggle: e.target.checked
            })} />{" "}
              Allow Toggle (Close All)
            </label>
          </div>

          <div>
            <label>
              Variant:{" "}
              <select value={config.variant} onChange={e => setConfig({
              ...config,
              variant: e.target.value as "default" | "bordered" | "filled"
            })}>
                <option value="default">Default</option>
                <option value="bordered">Bordered</option>
                <option value="filled">Filled</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Size:{" "}
              <select value={config.size} onChange={e => setConfig({
              ...config,
              size: e.target.value as "sm" | "md" | "lg"
            })}>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </label>
          </div>

          <div style={{
          gridColumn: "1 / -1"
        }}>
            <label>
              Chevron Icon:{" "}
              <select value={config.chevronIcon} onChange={e => setConfig({
              ...config,
              chevronIcon: e.target.value as any
            })}>
                <option value="chevron-down">Chevron Down</option>
                <option value="caret-down">Caret Down</option>
                <option value="arrow-down">Arrow Down</option>
              </select>
            </label>
          </div>
        </div>

        <Accordion items={sampleItems.slice(0, 4)} allowMultiple={config.allowMultiple} allowToggle={config.allowToggle} variant={config.variant} size={config.size} chevronIcon={config.chevronIcon} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive demo allowing you to test different accordion configurations in real-time."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const b=["Default","AllowMultiple","BorderedVariant","FilledVariant","SizeVariants","CustomChevron","FAQ","SimpleContent","InteractiveDemo"];export{s as AllowMultiple,a as BorderedVariant,p as CustomChevron,l as Default,u as FAQ,c as FilledVariant,m as InteractiveDemo,h as SimpleContent,d as SizeVariants,b as __namedExportsOrder,y as default};
