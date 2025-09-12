import{j as e,r as c}from"./iframe-CCjepWBu.js";import{g as B}from"./classnames-helper-C6tUBjOJ.js";import{I as q}from"./Icon-CVi0seOY.js";import{M as L}from"./Menu-DPFdPpLC.js";import"./preload-helper-D9Z9MdNV.js";const N=({item:n,showLabels:t,compact:i,activeColor:o,activeTextColor:r})=>{const{label:s,icon:l,badge:a,description:d,onClick:v,href:g,active:T=!1,disabled:b=!1,dropdown:p,dropdownPlacement:O="bottom-left"}=n,[h,M]=c.useState(!1),f=c.useRef(null),A=c.useRef(null);c.useEffect(()=>{const R=_=>{h&&f.current&&A.current&&!f.current.contains(_.target)&&!A.current.contains(_.target)&&M(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[h]);const F=B({"menu-bar-item":!0,"menu-bar-item--active":T,"menu-bar-item--disabled":b,"menu-bar-item--compact":i,"menu-bar-item--icon-only":!t,"menu-bar-item--has-dropdown":!!p,"menu-bar-item--dropdown-open":h}),D=()=>{b||(p?M(!h):v&&v())},P=e.jsxs(e.Fragment,{children:[l&&e.jsx("div",{className:"menu-bar-item__icon",children:e.jsx(q,{name:l,size:i?16:20})}),t&&e.jsxs("div",{className:"menu-bar-item__content",children:[e.jsx("span",{className:"menu-bar-item__label",children:s}),d&&!i&&e.jsx("span",{className:"menu-bar-item__description",children:d})]}),a&&e.jsx("div",{className:"menu-bar-item__badge",children:a}),p&&e.jsx("div",{className:"menu-bar-item__dropdown-arrow",children:e.jsx(q,{name:h?"sort-up":"sort-down",size:12})})]}),E=()=>g&&!p?e.jsx("a",{ref:f,href:g,className:F,onClick:D,title:t&&d||s,children:P}):e.jsx("button",{ref:f,className:F,onClick:D,disabled:b,title:t&&d||s,type:"button",children:P});return e.jsxs("div",{className:"menu-bar-item-wrapper",children:[E(),p&&h&&e.jsx("div",{ref:A,className:`menu-bar-item__dropdown menu-bar-item__dropdown--${O}`,children:e.jsx(L,{sections:p,position:"regular",width:"240px",activeColor:o,activeTextColor:r,visible:!0})})]})},H=({section:n,showLabels:t,compact:i,activeColor:o,activeTextColor:r})=>{const s=B({"menu-bar-section":!0,[`menu-bar-section--${n.alignment||"left"}`]:!0});return e.jsx("div",{className:s,children:n.items.map(l=>e.jsx(N,{item:l,showLabels:t,compact:i,activeColor:o,activeTextColor:r},l.id))})},m=({sections:n,className:t,height:i="60px",position:o="relative",placement:r="top",activeColor:s,activeTextColor:l="white",backgroundColor:a,zIndex:d=1e3,showLabels:v=!0,compact:g=!1})=>{const T=B({"menu-bar":!0,[`menu-bar--${o}`]:!0,[`menu-bar--${r}`]:o==="fixed"||o==="absolute","menu-bar--compact":g,[`${t}`]:t!==void 0}),b={height:i,zIndex:d,...a&&{background:a.includes("gradient")?a:void 0,backgroundColor:a.includes("gradient")?void 0:a},...s&&{"--menu-bar-active-color":s,"--menu-bar-active-text-color":l}};return e.jsx("nav",{className:T,style:b,children:e.jsx("div",{className:"menu-bar__container",children:n.map(p=>e.jsx(H,{section:p,showLabels:v,compact:g,activeColor:s,activeTextColor:l},p.id))})})};m.__docgenInfo={description:"",methods:[],displayName:"MenuBar",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"MenuBarSectionProps"}],raw:"MenuBarSectionProps[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"60px"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"absolute" | "fixed" | "relative" | "sticky"',elements:[{name:"literal",value:'"absolute"'},{name:"literal",value:'"fixed"'},{name:"literal",value:'"relative"'},{name:"literal",value:'"sticky"'}]},description:"",defaultValue:{value:'"relative"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},activeColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"white"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"MenuBarItem",props:{item:{required:!0,tsType:{name:"MenuBarItemProps"},description:""},showLabels:{required:!0,tsType:{name:"boolean"},description:""},compact:{required:!0,tsType:{name:"boolean"},description:""},activeColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:""}}};H.__docgenInfo={description:"",methods:[],displayName:"MenuBarSection",props:{section:{required:!0,tsType:{name:"MenuBarSectionProps"},description:""},showLabels:{required:!0,tsType:{name:"boolean"},description:""},compact:{required:!0,tsType:{name:"boolean"},description:""},activeColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Navigation/MenuBar",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{control:{type:"radio"},options:["absolute","fixed","relative","sticky"]},placement:{control:{type:"radio"},options:["top","bottom"]},height:{control:"text"},backgroundColor:{control:"color"},activeColor:{control:"color"},activeTextColor:{control:"color"},showLabels:{control:"boolean"},compact:{control:"boolean"},zIndex:{control:"number"}}},u=n=>[{id:"left-section",alignment:"left",items:[{id:"home",label:"Home",icon:"home-fill",badge:"5",active:n==="home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",active:n==="dashboard"},{id:"products",label:"Products",icon:"logo-market",badge:"12",active:n==="products"}]},{id:"center-section",alignment:"center",items:[{id:"search",label:"Search",icon:"magnifier",active:n==="search"}]},{id:"right-section",alignment:"right",items:[{id:"notifications",label:"Notifications",icon:"bell",badge:"5",active:n==="notifications"},{id:"messages",label:"Messages",icon:"message",badge:"NEW",active:n==="messages"},{id:"profile",label:"Profile",icon:"user",active:n==="profile"}]}],x={render:()=>{const[n,t]=c.useState("home"),i=u(n).map(o=>({...o,items:o.items.map(r=>({...r,onClick:()=>t(r.id)}))}));return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:i,position:"relative"}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Default MenuBar"}),e.jsx("p",{children:"A horizontal navigation menu bar with relative positioning."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]})]})]})}},y={render:()=>{const[n,t]=c.useState("home"),i=u(n).map(o=>({...o,items:o.items.map(r=>({...r,onClick:()=>t(r.id)}))}));return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:i,position:"fixed",placement:"top",height:"64px"}),e.jsxs("div",{style:{paddingTop:"80px",padding:"2rem"},children:[e.jsx("h1",{children:"Fixed Top MenuBar"}),e.jsx("p",{children:"Menu bar fixed to the top of the viewport."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{height:"150vh",padding:"2rem 0"},children:[e.jsx("p",{children:"Scroll down to see the fixed positioning in action..."}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Middle Content"}),e.jsx("p",{children:"The menu bar stays fixed at the top while scrolling."})]}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Bottom Content"}),e.jsx("p",{children:"Still fixed at the top!"})]})]})]})]})}},C={render:()=>{const[n,t]=c.useState("home"),i=u(n).map(o=>({...o,items:o.items.map(r=>({...r,onClick:()=>t(r.id)}))}));return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsxs("div",{style:{paddingBottom:"80px",padding:"2rem"},children:[e.jsx("h1",{children:"Fixed Bottom MenuBar"}),e.jsx("p",{children:"Menu bar fixed to the bottom of the viewport."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{height:"150vh",padding:"2rem 0"},children:[e.jsx("p",{children:"Scroll to see the fixed positioning in action..."}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Middle Content"}),e.jsx("p",{children:"The menu bar stays fixed at the bottom while scrolling."})]}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Top Content"}),e.jsx("p",{children:"Menu bar is still at the bottom!"})]})]})]}),e.jsx(m,{sections:i,position:"fixed",placement:"bottom",height:"64px"})]})}},k={render:()=>{const[n,t]=c.useState("home"),i=u(n).map(o=>({...o,items:o.items.map(r=>({...r,onClick:()=>t(r.id)}))}));return e.jsxs("div",{style:{backgroundColor:"#f8f9fa"},children:[e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Content Above Sticky Menu"}),e.jsx("p",{children:"This content appears above the sticky menu bar."})]}),e.jsx(m,{sections:i,position:"sticky",height:"64px"}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Sticky MenuBar"}),e.jsx("p",{children:"Menu bar becomes sticky when you scroll past it."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{height:"200vh",padding:"2rem 0"},children:[e.jsx("p",{children:"Scroll down and watch the menu bar stick to the top of the viewport."}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Middle Content"}),e.jsx("p",{children:"The menu bar is now sticky at the top."})]}),e.jsxs("div",{style:{marginTop:"50vh"},children:[e.jsx("h2",{children:"Bottom Content"}),e.jsx("p",{children:"Still sticky!"})]})]})]})]})}},j={render:()=>{const[n,t]=c.useState("home"),[i,o]=c.useState("top"),r=u(n).map(s=>({...s,items:s.items.map(l=>({...l,onClick:()=>t(l.id)}))}));return e.jsxs("div",{style:{position:"relative",minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:r,position:"absolute",placement:i,height:"64px"}),e.jsxs("div",{style:{padding:i==="top"?"80px 2rem 2rem":"2rem 2rem 80px"},children:[e.jsx("h1",{children:"Absolute Positioning"}),e.jsx("p",{children:"Menu bar with absolute positioning within its container."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"1rem"},children:"Placement:"}),e.jsx("button",{onClick:()=>o("top"),style:{marginRight:"1rem",padding:"0.5rem 1rem",backgroundColor:i==="top"?"#007bff":"#fff",color:i==="top"?"#fff":"#000",border:"1px solid #007bff",borderRadius:"4px",cursor:"pointer"},children:"Top"}),e.jsx("button",{onClick:()=>o("bottom"),style:{padding:"0.5rem 1rem",backgroundColor:i==="bottom"?"#007bff":"#fff",color:i==="bottom"?"#fff":"#000",border:"1px solid #007bff",borderRadius:"4px",cursor:"pointer"},children:"Bottom"})]}),e.jsxs("div",{style:{marginTop:"4rem",height:"100vh"},children:[e.jsx("h2",{children:"Page Content"}),e.jsx("p",{children:"The absolutely positioned menu bar is positioned relative to its parent container."})]})]})]})}},w={render:()=>{const[n,t]=c.useState("home"),[i,o]=c.useState(!1),[r,s]=c.useState(!0),l=u(n).map(a=>({...a,items:a.items.map(d=>({...d,onClick:()=>t(d.id)}))}));return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:l,position:"relative",compact:i,showLabels:r}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Compact & Icon-Only Options"}),e.jsx("p",{children:"Toggle compact mode and label visibility."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",checked:i,onChange:a=>o(a.target.checked)}),"Compact Mode"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",checked:r,onChange:a=>s(a.target.checked)}),"Show Labels"]})]})]})]})}},S={render:()=>{const[n,t]=c.useState("home"),r=[{id:"left-section",alignment:"left",items:[{id:"home",label:"Home",icon:"home-fill",active:n==="home",onClick:()=>t("home")},{id:"dashboard",label:"Dashboard",icon:"dashboard",active:n==="dashboard",onClick:()=>t("dashboard")},{id:"products",label:"Products",icon:"logo-market",badge:"12",active:n==="products",onClick:()=>t("products")}]},{id:"center-section",alignment:"center",items:[{id:"more",label:"More",icon:"three-dots",dropdown:[{id:"tools",title:"Tools",items:[{id:"analytics",label:"Analytics",icon:"magnifier",description:"View insights and reports",onClick:()=>t("analytics")},{id:"integrations",label:"Integrations",icon:"manage",badge:"3",onClick:()=>t("integrations")}]},{id:"admin",title:"Administration",items:[{id:"users",label:"User Management",icon:"user",onClick:()=>t("users")},{id:"system",label:"System Settings",icon:"gear",onClick:()=>t("system")}]}],dropdownPlacement:"bottom-center"}]},{id:"right-section",alignment:"right",items:[{id:"notifications",label:"Notifications",icon:"bell",badge:"5",active:n==="notifications",onClick:()=>t("notifications")},{id:"user-menu",label:"Walter G.",icon:"user",dropdown:[{id:"account",items:[{id:"profile",label:"View Profile",icon:"user",onClick:()=>t("profile")},{id:"settings",label:"Account Settings",icon:"gear",onClick:()=>t("settings")},{id:"billing",label:"Billing",icon:"logo-market",badge:"Pro",onClick:()=>t("billing")}]},{id:"actions",items:[{id:"help",label:"Help & Support",icon:"support",onClick:()=>t("help")},{id:"logout",label:"Sign Out",icon:"go-back",onClick:()=>t("logout")}]}],dropdownPlacement:"bottom-right"}]}];return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:r,position:"relative",height:"64px"}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"MenuBar with Dropdowns"}),e.jsx("p",{children:'Click on "More" or the user menu to see dropdown functionality.'}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{marginTop:"2rem",padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsx("h2",{children:"Features Demonstrated:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"User Menu Dropdown:"}),' Click on "Walter G." (right side)']}),e.jsxs("li",{children:[e.jsx("strong",{children:"More Menu Dropdown:"}),' Click on "More" (center)']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Different Placements:"})," User menu drops bottom-right, More menu drops bottom-center"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Click Outside:"})," Dropdowns close when clicking outside"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menu Sections:"})," Dropdowns can have multiple sections with titles"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Badges & Icons:"})," Dropdown items support badges and icons"]})]})]})]})]})}},I={render:()=>{const[n,t]=c.useState("home"),[i,o]=c.useState("#10B981"),[r,s]=c.useState("#ffffff"),l=u(n).map(a=>({...a,items:a.items.map(d=>({...d,onClick:()=>t(d.id)}))}));return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa"},children:[e.jsx(m,{sections:l,position:"relative",activeColor:i,backgroundColor:r,height:"64px"}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Custom Theme Colors"}),e.jsx("p",{children:"Customize the active colors and background of the menu bar."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{children:"Active Colors:"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem",marginBottom:"2rem"},children:[e.jsx("button",{onClick:()=>o("#10B981"),style:{backgroundColor:"#10B981",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Green"}),e.jsx("button",{onClick:()=>o("#3B82F6"),style:{backgroundColor:"#3B82F6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Blue"}),e.jsx("button",{onClick:()=>o("#F59E0B"),style:{backgroundColor:"#F59E0B",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Orange"}),e.jsx("button",{onClick:()=>o("#EF4444"),style:{backgroundColor:"#EF4444",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Red"})]}),e.jsx("h3",{children:"Background Colors:"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[e.jsx("button",{onClick:()=>s("#ffffff"),style:{backgroundColor:"#ffffff",color:"black",border:"1px solid #ccc",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"White"}),e.jsx("button",{onClick:()=>s("#1F2937"),style:{backgroundColor:"#1F2937",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Dark"}),e.jsx("button",{onClick:()=>s("#F3F4F6"),style:{backgroundColor:"#F3F4F6",color:"black",border:"1px solid #ccc",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Light Gray"}),e.jsx("button",{onClick:()=>s("linear-gradient(90deg, #667eea 0%, #764ba2 100%)"),style:{background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Gradient"})]})]})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="relative" />
        <div style={{
        padding: "2rem"
      }}>
          <h1>Default MenuBar</h1>
          <p>A horizontal navigation menu bar with relative positioning.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="fixed" placement="top" height="64px" />
        <div style={{
        paddingTop: "80px",
        padding: "2rem"
      }}>
          <h1>Fixed Top MenuBar</h1>
          <p>Menu bar fixed to the top of the viewport.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{
          height: "150vh",
          padding: "2rem 0"
        }}>
            <p>Scroll down to see the fixed positioning in action...</p>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Middle Content</h2>
              <p>The menu bar stays fixed at the top while scrolling.</p>
            </div>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Bottom Content</h2>
              <p>Still fixed at the top!</p>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        paddingBottom: "80px",
        padding: "2rem"
      }}>
          <h1>Fixed Bottom MenuBar</h1>
          <p>Menu bar fixed to the bottom of the viewport.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{
          height: "150vh",
          padding: "2rem 0"
        }}>
            <p>Scroll to see the fixed positioning in action...</p>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Middle Content</h2>
              <p>The menu bar stays fixed at the bottom while scrolling.</p>
            </div>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Top Content</h2>
              <p>Menu bar is still at the bottom!</p>
            </div>
          </div>
        </div>
        <MenuBar sections={sections} position="fixed" placement="bottom" height="64px" />
      </div>;
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Content Above Sticky Menu</h1>
          <p>This content appears above the sticky menu bar.</p>
        </div>
        <MenuBar sections={sections} position="sticky" height="64px" />
        <div style={{
        padding: "2rem"
      }}>
          <h1>Sticky MenuBar</h1>
          <p>Menu bar becomes sticky when you scroll past it.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{
          height: "200vh",
          padding: "2rem 0"
        }}>
            <p>
              Scroll down and watch the menu bar stick to the top of the
              viewport.
            </p>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Middle Content</h2>
              <p>The menu bar is now sticky at the top.</p>
            </div>
            <div style={{
            marginTop: "50vh"
          }}>
              <h2>Bottom Content</h2>
              <p>Still sticky!</p>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [placement, setPlacement] = useState<"top" | "bottom">("top");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="absolute" placement={placement} height="64px" />
        <div style={{
        padding: placement === "top" ? "80px 2rem 2rem" : "2rem 2rem 80px"
      }}>
          <h1>Absolute Positioning</h1>
          <p>Menu bar with absolute positioning within its container.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{
          marginTop: "2rem"
        }}>
            <label style={{
            display: "block",
            marginBottom: "1rem"
          }}>
              Placement:
            </label>
            <button onClick={() => setPlacement("top")} style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: placement === "top" ? "#007bff" : "#fff",
            color: placement === "top" ? "#fff" : "#000",
            border: "1px solid #007bff",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
              Top
            </button>
            <button onClick={() => setPlacement("bottom")} style={{
            padding: "0.5rem 1rem",
            backgroundColor: placement === "bottom" ? "#007bff" : "#fff",
            color: placement === "bottom" ? "#fff" : "#000",
            border: "1px solid #007bff",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
              Bottom
            </button>
          </div>

          <div style={{
          marginTop: "4rem",
          height: "100vh"
        }}>
            <h2>Page Content</h2>
            <p>
              The absolutely positioned menu bar is positioned relative to its
              parent container.
            </p>
          </div>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [compact, setCompact] = useState(false);
    const [showLabels, setShowLabels] = useState(true);
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="relative" compact={compact} showLabels={showLabels} />
        <div style={{
        padding: "2rem"
      }}>
          <h1>Compact & Icon-Only Options</h1>
          <p>Toggle compact mode and label visibility.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem"
        }}>
            <label style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
              <input type="checkbox" checked={compact} onChange={e => setCompact(e.target.checked)} />
              Compact Mode
            </label>
            <label style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
              <input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)} />
              Show Labels
            </label>
          </div>
        </div>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const userDropdownSections: MenuSectionProps[] = [{
      id: "account",
      items: [{
        id: "profile",
        label: "View Profile",
        icon: "user",
        onClick: () => setActiveItem("profile")
      }, {
        id: "settings",
        label: "Account Settings",
        icon: "gear",
        onClick: () => setActiveItem("settings")
      }, {
        id: "billing",
        label: "Billing",
        icon: "logo-market",
        badge: "Pro",
        onClick: () => setActiveItem("billing")
      }]
    }, {
      id: "actions",
      items: [{
        id: "help",
        label: "Help & Support",
        icon: "support",
        onClick: () => setActiveItem("help")
      }, {
        id: "logout",
        label: "Sign Out",
        icon: "go-back",
        onClick: () => setActiveItem("logout")
      }]
    }];
    const moreDropdownSections: MenuSectionProps[] = [{
      id: "tools",
      title: "Tools",
      items: [{
        id: "analytics",
        label: "Analytics",
        icon: "magnifier",
        description: "View insights and reports",
        onClick: () => setActiveItem("analytics")
      }, {
        id: "integrations",
        label: "Integrations",
        icon: "manage",
        badge: "3",
        onClick: () => setActiveItem("integrations")
      }]
    }, {
      id: "admin",
      title: "Administration",
      items: [{
        id: "users",
        label: "User Management",
        icon: "user",
        onClick: () => setActiveItem("users")
      }, {
        id: "system",
        label: "System Settings",
        icon: "gear",
        onClick: () => setActiveItem("system")
      }]
    }];
    const sections: MenuBarSectionProps[] = [{
      id: "left-section",
      alignment: "left",
      items: [{
        id: "home",
        label: "Home",
        icon: "home-fill",
        active: activeItem === "home",
        onClick: () => setActiveItem("home")
      }, {
        id: "dashboard",
        label: "Dashboard",
        icon: "dashboard",
        active: activeItem === "dashboard",
        onClick: () => setActiveItem("dashboard")
      }, {
        id: "products",
        label: "Products",
        icon: "logo-market",
        badge: "12",
        active: activeItem === "products",
        onClick: () => setActiveItem("products")
      }]
    }, {
      id: "center-section",
      alignment: "center",
      items: [{
        id: "more",
        label: "More",
        icon: "three-dots",
        dropdown: moreDropdownSections,
        dropdownPlacement: "bottom-center"
      }]
    }, {
      id: "right-section",
      alignment: "right",
      items: [{
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        badge: "5",
        active: activeItem === "notifications",
        onClick: () => setActiveItem("notifications")
      }, {
        id: "user-menu",
        label: "Walter G.",
        icon: "user",
        dropdown: userDropdownSections,
        dropdownPlacement: "bottom-right"
      }]
    }];
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="relative" height="64px" />
        <div style={{
        padding: "2rem"
      }}>
          <h1>MenuBar with Dropdowns</h1>
          <p>Click on "More" or the user menu to see dropdown functionality.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
            <h2>Features Demonstrated:</h2>
            <ul>
              <li>
                <strong>User Menu Dropdown:</strong> Click on "Walter G." (right
                side)
              </li>
              <li>
                <strong>More Menu Dropdown:</strong> Click on "More" (center)
              </li>
              <li>
                <strong>Different Placements:</strong> User menu drops
                bottom-right, More menu drops bottom-center
              </li>
              <li>
                <strong>Click Outside:</strong> Dropdowns close when clicking
                outside
              </li>
              <li>
                <strong>Menu Sections:</strong> Dropdowns can have multiple
                sections with titles
              </li>
              <li>
                <strong>Badges & Icons:</strong> Dropdown items support badges
                and icons
              </li>
            </ul>
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [activeColor, setActiveColor] = useState("#10B981");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
        <MenuBar sections={sections} position="relative" activeColor={activeColor} backgroundColor={backgroundColor} height="64px" />
        <div style={{
        padding: "2rem"
      }}>
          <h1>Custom Theme Colors</h1>
          <p>Customize the active colors and background of the menu bar.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{
          marginTop: "2rem"
        }}>
            <h3>Active Colors:</h3>
            <div style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            marginBottom: "2rem"
          }}>
              <button onClick={() => setActiveColor("#10B981")} style={{
              backgroundColor: "#10B981",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Green
              </button>
              <button onClick={() => setActiveColor("#3B82F6")} style={{
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Blue
              </button>
              <button onClick={() => setActiveColor("#F59E0B")} style={{
              backgroundColor: "#F59E0B",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Orange
              </button>
              <button onClick={() => setActiveColor("#EF4444")} style={{
              backgroundColor: "#EF4444",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Red
              </button>
            </div>

            <h3>Background Colors:</h3>
            <div style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem"
          }}>
              <button onClick={() => setBackgroundColor("#ffffff")} style={{
              backgroundColor: "#ffffff",
              color: "black",
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                White
              </button>
              <button onClick={() => setBackgroundColor("#1F2937")} style={{
              backgroundColor: "#1F2937",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Dark
              </button>
              <button onClick={() => setBackgroundColor("#F3F4F6")} style={{
              backgroundColor: "#F3F4F6",
              color: "black",
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Light Gray
              </button>
              <button onClick={() => setBackgroundColor("linear-gradient(90deg, #667eea 0%, #764ba2 100%)")} style={{
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Gradient
              </button>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const J=["Default","FixedTop","FixedBottom","Sticky","AbsolutePositioning","CompactAndIconOnly","WithDropdowns","CustomThemeColors"];export{j as AbsolutePositioning,w as CompactAndIconOnly,I as CustomThemeColors,x as Default,C as FixedBottom,y as FixedTop,k as Sticky,S as WithDropdowns,J as __namedExportsOrder,$ as default};
