import{j as e,r}from"./iframe-cc5ZmNpn.js";import{M as l}from"./ModalDialog-C2fbmI75.js";import{B as t}from"./Button-B-BbZ53a.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";const w={title:"Common/ModalDialog",component:l,parameters:{layout:"centered",docs:{description:{component:`
A clean, minimal modal dialog component inspired by modern design patterns.

## Features
- Clean white background with subtle drop shadow
- No visual separators between sections
- Typography-based hierarchy (bold titles, regular body text)
- Flexible layouts supporting various content types
- Keyboard navigation (Escape to close)
- Backdrop click to dismiss
- Multiple size options
- Smooth animations
- Mobile responsive design
- Proper accessibility with ARIA attributes
        `}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Whether the modal is open"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Size of the modal"},title:{control:{type:"text"},description:"Modal title"},children:{control:{type:"text"},description:"Modal body content"},closeOnBackdropClick:{control:{type:"boolean"},description:"Whether to close modal when clicking backdrop"},closeOnEscape:{control:{type:"boolean"},description:"Whether to close modal when pressing Escape"},showCloseButton:{control:{type:"boolean"},description:"Whether to show the close button"}},args:{isOpen:!1,size:"md",closeOnBackdropClick:!0,closeOnEscape:!0,showCloseButton:!0}},p={args:{isOpen:!1,onClose:()=>{},children:"Content"},render:()=>{const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Connect Account"}),e.jsxs(l,{isOpen:o,onClose:()=>n(!1),title:"Connect External Service",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"danger",onClick:()=>n(!1),children:"Continue"})]}),children:[e.jsx("p",{children:"You're about to connect to an external service. You will need to authorize the connection to allow data synchronization between your accounts."}),e.jsx("p",{style:{marginTop:"16px",color:"#666"},children:"By continuing, future connections will be established automatically."})]})]})},parameters:{docs:{description:{story:"A confirmation modal with title, body text, and action buttons for important decisions."}}}},u={args:{isOpen:!1,onClose:()=>{},children:"Content"},render:()=>{const[o,n]=r.useState(!1),[c,s]=r.useState(0),i=()=>e.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[1,2,3,4,5].map(a=>e.jsx("button",{onClick:()=>s(a),style:{background:"none",border:"none",fontSize:"32px",cursor:"pointer",color:a<=c?"#ffd700":"#ddd"},children:"★"},a))});return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Give Feedback"}),e.jsxs(l,{isOpen:o,onClose:()=>n(!1),size:"sm",title:"How was your experience?",children:[e.jsx("p",{style:{textAlign:"center",marginBottom:"24px",color:"#666"},children:"Your feedback helps us improve our platform."}),e.jsx(i,{}),e.jsx("p",{style:{textAlign:"center",marginTop:"16px",color:"#999",fontSize:"14px"},children:"Click to rate"})]})]})},parameters:{docs:{description:{story:"A feedback modal with star rating, demonstrating centered content and interactive elements."}}}},m={args:{isOpen:!1,onClose:()=>{},children:"Content"},render:()=>{const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Learn More"}),e.jsx(l,{isOpen:o,onClose:()=>n(!1),size:"lg",title:"Getting Started Guide",footer:e.jsx(t,{variant:"danger",onClick:()=>n(!1),children:"Got it"}),children:e.jsxs("div",{style:{padding:"20px 0"},children:[e.jsx("div",{style:{minHeight:"200px",background:"#f8f9fa",borderRadius:"8px",marginBottom:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:"#666"},children:"Media content area"}),e.jsx("p",{children:"Learn the fundamentals of using our platform effectively. This comprehensive guide covers all the essential features and best practices to help you get the most out of your experience."})]})})]})},parameters:{docs:{description:{story:"A simple content modal with media area and instructional content."}}}},g={args:{isOpen:!1,onClose:()=>{},children:"Content"},render:()=>{const[o,n]=r.useState(!1),[c,s]=r.useState({notifications:!1,autoSave:!1,language:"English"}),i=({checked:a,onChange:d,label:C})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsx("span",{children:C}),e.jsx("button",{onClick:()=>d(!a),style:{width:"48px",height:"24px",borderRadius:"12px",border:"none",background:a?"#007bff":"#ddd",position:"relative",cursor:"pointer",transition:"background 0.2s"},children:e.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"white",position:"absolute",top:"2px",left:a?"26px":"2px",transition:"left 0.2s"}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Settings"}),e.jsxs(l,{isOpen:o,onClose:()=>n(!1),size:"sm",title:"Application Settings",children:[e.jsx(i,{checked:c.notifications,onChange:a=>s(d=>({...d,notifications:a})),label:"Enable notifications"}),e.jsx(i,{checked:c.autoSave,onChange:a=>s(d=>({...d,autoSave:a})),label:"Auto-save documents"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"Automatically save your work every few minutes to prevent data loss."}),e.jsx("div",{style:{marginBottom:"16px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Theme preference"}),e.jsx("button",{style:{background:"none",border:"none",color:"#007bff",cursor:"pointer"},children:"Select theme ›"})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Display language"}),e.jsxs("button",{style:{background:"none",border:"none",color:"#007bff",cursor:"pointer"},children:[c.language," ›"]})]})]})]})},parameters:{docs:{description:{story:"A settings/form modal with toggles and selectors, demonstrating form-like layouts."}}}},h={args:{children:e.jsx("div",{}),onClose:()=>{}},render:()=>{const[o,n]=r.useState(null),c=[{size:"sm",label:"Small (400px)"},{size:"md",label:"Medium (500px)"},{size:"lg",label:"Large (800px)"},{size:"xl",label:"Extra Large (1200px)"}];return e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:c.map(({size:s,label:i})=>e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(s),children:i}),e.jsx(l,{isOpen:o===s,onClose:()=>n(null),size:s,title:`${i} Modal`,footer:e.jsx(t,{onClick:()=>n(null),children:"Close"}),children:e.jsxs("p",{children:["This is a ",s," modal demonstrating the ",i.toLowerCase()," ","size option. The modal automatically adjusts its width based on the size prop while maintaining responsive behavior on smaller screens."]})})]},s))})},parameters:{docs:{description:{story:"Different modal sizes from small to extra large."}}}},x={args:{children:e.jsx("div",{}),onClose:()=>{}},render:()=>{const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal (No Close Button)"}),e.jsx(l,{isOpen:o,onClose:()=>n(!1),showCloseButton:!1,title:"Action Required",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"This modal doesn't have a close button in the header. You can only close it using the footer buttons, the Escape key, or by clicking the backdrop."})})]})},parameters:{docs:{description:{story:"Modal without the close button, forcing users to use footer actions."}}}},f={args:{children:e.jsx("div",{}),onClose:()=>{}},render:()=>{const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Complex Modal"}),e.jsx(l,{isOpen:o,onClose:()=>n(!1),size:"lg",title:"User Profile Settings",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontWeight:"600"},children:"Personal Information"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:"500"},children:"First Name"}),e.jsx("input",{type:"text",defaultValue:"John",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:"500"},children:"Last Name"}),e.jsx("input",{type:"text",defaultValue:"Doe",style:{width:"100%",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px"}})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontWeight:"600"},children:"Preferences"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{children:"Email notifications"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{children:"SMS notifications"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{children:"Marketing communications"})]})]})]})]})})]})},parameters:{docs:{description:{story:"Modal with complex form content including multiple sections and form elements."}}}},y={args:{children:"",onClose:()=>{}},render:()=>{const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Empty Modal"}),e.jsx(l,{isOpen:o,onClose:()=>n(!1),title:"Empty Modal",children:e.jsx("div",{})})]})},parameters:{docs:{description:{story:"Modal with empty content to test edge cases."}}}},b={args:{children:e.jsx("div",{}),onClose:()=>{}},render:()=>{const[o,n]=r.useState(!1),c=Array.from({length:20},(s,i)=>e.jsxs("p",{style:{marginBottom:"16px"},children:["This is paragraph ",i+1," of a very long modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]},i));return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Long Content Modal"}),e.jsx(l,{isOpen:o,onClose:()=>n(!1),title:"Modal with Long Content",footer:e.jsx(t,{onClick:()=>n(!1),children:"Close"}),children:c})]})},parameters:{docs:{description:{story:"Modal with very long content to test scrolling behavior."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content"
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Connect Account</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Connect External Service" footer={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </>}>
          <p>
            You're about to connect to an external service. You will need to
            authorize the connection to allow data synchronization between your
            accounts.
          </p>
          <p style={{
          marginTop: "16px",
          color: "#666"
        }}>
            By continuing, future connections will be established automatically.
          </p>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "A confirmation modal with title, body text, and action buttons for important decisions."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content"
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const StarRating = () => <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "center"
    }}>
        {[1, 2, 3, 4, 5].map(star => <button key={star} onClick={() => setRating(star)} style={{
        background: "none",
        border: "none",
        fontSize: "32px",
        cursor: "pointer",
        color: star <= rating ? "#ffd700" : "#ddd"
      }}>
            ★
          </button>)}
      </div>;
    return <>
        <Button onClick={() => setIsOpen(true)}>Give Feedback</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm" title="How was your experience?">
          <p style={{
          textAlign: "center",
          marginBottom: "24px",
          color: "#666"
        }}>
            Your feedback helps us improve our platform.
          </p>
          <StarRating />
          <p style={{
          textAlign: "center",
          marginTop: "16px",
          color: "#999",
          fontSize: "14px"
        }}>
            Click to rate
          </p>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "A feedback modal with star rating, demonstrating centered content and interactive elements."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content"
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Learn More</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg" title="Getting Started Guide" footer={<Button variant="danger" onClick={() => setIsOpen(false)}>
              Got it
            </Button>}>
          <div style={{
          padding: "20px 0"
        }}>
            <div style={{
            minHeight: "200px",
            background: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666"
          }}>
              Media content area
            </div>
            <p>
              Learn the fundamentals of using our platform effectively. This
              comprehensive guide covers all the essential features and best
              practices to help you get the most out of your experience.
            </p>
          </div>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "A simple content modal with media area and instructional content."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content"
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
      notifications: false,
      autoSave: false,
      language: "English"
    });
    const Toggle = ({
      checked,
      onChange,
      label
    }: {
      checked: boolean;
      onChange: (checked: boolean) => void;
      label: string;
    }) => <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px"
    }}>
        <span>{label}</span>
        <button onClick={() => onChange(!checked)} style={{
        width: "48px",
        height: "24px",
        borderRadius: "12px",
        border: "none",
        background: checked ? "#007bff" : "#ddd",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s"
      }}>
          <div style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "white",
          position: "absolute",
          top: "2px",
          left: checked ? "26px" : "2px",
          transition: "left 0.2s"
        }} />
        </button>
      </div>;
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Settings</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm" title="Application Settings">
          <Toggle checked={settings.notifications} onChange={checked => setSettings(prev => ({
          ...prev,
          notifications: checked
        }))} label="Enable notifications" />

          <Toggle checked={settings.autoSave} onChange={checked => setSettings(prev => ({
          ...prev,
          autoSave: checked
        }))} label="Auto-save documents" />

          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "20px"
        }}>
            Automatically save your work every few minutes to prevent data loss.
          </p>

          <div style={{
          marginBottom: "16px"
        }}>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
              <span>Theme preference</span>
              <button style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer"
            }}>
                Select theme ›
              </button>
            </div>
          </div>

          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
            <span>Display language</span>
            <button style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer"
          }}>
              {settings.language} ›
            </button>
          </div>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "A settings/form modal with toggles and selectors, demonstrating form-like layouts."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    onClose: () => {}
  },
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const sizes = [{
      size: "sm" as const,
      label: "Small (400px)"
    }, {
      size: "md" as const,
      label: "Medium (500px)"
    }, {
      size: "lg" as const,
      label: "Large (800px)"
    }, {
      size: "xl" as const,
      label: "Extra Large (1200px)"
    }];
    return <div style={{
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }}>
        {sizes.map(({
        size,
        label
      }) => <div key={size}>
            <Button onClick={() => setOpenModal(size)}>{label}</Button>
            <ModalDialog isOpen={openModal === size} onClose={() => setOpenModal(null)} size={size} title={\`\${label} Modal\`} footer={<Button onClick={() => setOpenModal(null)}>Close</Button>}>
              <p>
                This is a {size} modal demonstrating the {label.toLowerCase()}{" "}
                size option. The modal automatically adjusts its width based on
                the size prop while maintaining responsive behavior on smaller
                screens.
              </p>
            </ModalDialog>
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Different modal sizes from small to extra large."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    onClose: () => {}
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal (No Close Button)
        </Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} showCloseButton={false} title="Action Required" footer={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>}>
          <p>
            This modal doesn't have a close button in the header. You can only
            close it using the footer buttons, the Escape key, or by clicking
            the backdrop.
          </p>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal without the close button, forcing users to use footer actions."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    onClose: () => {}
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Complex Modal</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg" title="User Profile Settings" footer={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </>}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
            <div>
              <h4 style={{
              margin: "0 0 12px 0",
              fontWeight: "600"
            }}>
                Personal Information
              </h4>
              <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px"
            }}>
                <div>
                  <label style={{
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                    First Name
                  </label>
                  <input type="text" defaultValue="John" style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px"
                }} />
                </div>
                <div>
                  <label style={{
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                    Last Name
                  </label>
                  <input type="text" defaultValue="Doe" style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px"
                }} />
                </div>
              </div>
            </div>

            <div>
              <h4 style={{
              margin: "0 0 12px 0",
              fontWeight: "600"
            }}>
                Preferences
              </h4>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
                <label style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications</span>
                </label>
                <label style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                  <input type="checkbox" />
                  <span>SMS notifications</span>
                </label>
                <label style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                  <input type="checkbox" defaultChecked />
                  <span>Marketing communications</span>
                </label>
              </div>
            </div>
          </div>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with complex form content including multiple sections and form elements."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "",
    onClose: () => {}
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Empty Modal</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Empty Modal">
          <div>{/* Empty content */}</div>
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with empty content to test edge cases."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    onClose: () => {}
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const longContent = Array.from({
      length: 20
    }, (_, i) => <p key={i} style={{
      marginBottom: "16px"
    }}>
        This is paragraph {i + 1} of a very long modal content. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>);
    return <>
        <Button onClick={() => setIsOpen(true)}>Long Content Modal</Button>
        <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Long Content" footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          {longContent}
        </ModalDialog>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with very long content to test scrolling behavior."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const B=["BasicConfirmation","FeedbackRating","SimpleContent","SettingsForm","Sizes","NoCloseButton","ComplexContent","EmptyContent","LongContent"];export{p as BasicConfirmation,f as ComplexContent,y as EmptyContent,u as FeedbackRating,b as LongContent,x as NoCloseButton,g as SettingsForm,m as SimpleContent,h as Sizes,B as __namedExportsOrder,w as default};
