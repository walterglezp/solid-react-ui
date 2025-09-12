import{j as e,r as l}from"./iframe-DzMUKr-y.js";import{g as I}from"./classnames-helper-C6tUBjOJ.js";import{I as A}from"./Icon-CpeLWG6P.js";import"./preload-helper-D9Z9MdNV.js";const M=({item:t,collapsed:s})=>{const{label:n,icon:i,badge:o,description:c,onClick:a,href:p,active:u=!1,disabled:v=!1}=t,m=I({"side-menu-item":!0,"side-menu-item--active":u,"side-menu-item--disabled":v,"side-menu-item--collapsed":s}),r=()=>{!v&&a&&a()},j=e.jsxs(e.Fragment,{children:[i&&e.jsx("div",{className:"side-menu-item__icon",children:e.jsx(A,{name:i,size:20})}),!s&&e.jsxs("div",{className:"side-menu-item__content",children:[e.jsx("span",{className:"side-menu-item__label",children:n}),c&&e.jsx("span",{className:"side-menu-item__description",children:c})]}),!s&&o&&e.jsx("div",{className:"side-menu-item__badge",children:o}),!s&&!v&&e.jsx("div",{className:"side-menu-item__chevron",children:e.jsx(A,{name:"chevron-right",size:16})})]});return p?e.jsx("a",{href:p,className:m,onClick:r,title:s?n:void 0,children:j}):e.jsx("button",{className:m,onClick:r,disabled:v,title:s?n:void 0,type:"button",children:j})},T=({section:t,collapsed:s})=>e.jsxs("div",{className:"side-menu-section",children:[!s&&e.jsx("h3",{className:"side-menu-section__title",children:t.title}),e.jsx("div",{className:"side-menu-section__items",children:t.items.map(n=>e.jsx(M,{item:n,collapsed:s},n.id))})]}),d=({sections:t,collapsed:s=!1,onToggleCollapse:n,className:i,width:o="280px",collapsedWidth:c="60px",position:a="left",activeColor:p,activeTextColor:u="white"})=>{const v=I({"side-menu":!0,"side-menu--collapsed":s,"side-menu--right":a==="right",[`${i}`]:i!==void 0}),m={width:s?c:o,...p&&{"--side-menu-active-color":p,"--side-menu-active-text-color":u}};return e.jsxs("div",{className:v,style:m,children:[e.jsx("div",{className:"side-menu__header",children:n&&e.jsx("button",{className:"side-menu__toggle",onClick:n,title:s?"Expand menu":"Collapse menu",type:"button",children:e.jsx(A,{name:s?"expand":"compress",size:20})})}),e.jsx("div",{className:"side-menu__content",children:t.map(r=>e.jsx(T,{section:r,collapsed:s},r.id))})]})};d.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"SideMenuSectionProps"}],raw:"SideMenuSectionProps[]"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggleCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"280px"',computed:!1}},collapsedWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"60px"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},activeColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"white"',computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"SideMenuItem",props:{item:{required:!0,tsType:{name:"SideMenuItemProps"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"SideMenuSection",props:{section:{required:!0,tsType:{name:"SideMenuSectionProps"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""}}};const P={title:"Navigation/SideMenu",component:d,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{collapsed:{control:"boolean"},width:{control:"text"},collapsedWidth:{control:"text"},position:{control:{type:"radio"},options:["left","right"]},activeColor:{control:"color"},activeTextColor:{control:"color"}}},h=t=>[{id:"account",title:"Account",items:[{id:"profile",label:"Account",icon:"user",active:t==="profile"},{id:"privacy",label:"Privacy",icon:"shield",active:t==="privacy"},{id:"security",label:"Security & permissions",icon:"shield",active:t==="security"},{id:"orders",label:"Your orders",icon:"logo-market",description:"Review 4 orders",active:t==="orders"},{id:"share",label:"Share profile",icon:"share",active:t==="share"}]},{id:"content",title:"Content & Display",items:[{id:"notifications",label:"Notifications",icon:"bell",active:t==="notifications"},{id:"live",label:"LIVE",icon:"tv",active:t==="live"},{id:"music",label:"Music",icon:"star",active:t==="music"},{id:"activity",label:"Activity center",icon:"support",active:t==="activity"},{id:"content-prefs",label:"Content preferences",icon:"gear",active:t==="content-prefs"},{id:"audience",label:"Audience controls",icon:"user",active:t==="audience"},{id:"ads",label:"Ads",icon:"star",disabled:!0}]}],g={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState("profile"),o=h(n).map(c=>({...c,items:c.items.map(a=>({...a,onClick:()=>i(a.id)}))}));return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:o,collapsed:t,onToggleCollapse:()=>s(!t)}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Main Content Area"}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("p",{children:["Menu is ",t?"collapsed":"expanded"]})]})]})}},f={render:()=>{const[t,s]=l.useState("notifications"),n=h(t).map(i=>({...i,items:i.items.map(o=>({...o,onClick:()=>s(o.id)}))}));return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:n,collapsed:!0}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Collapsed Menu"}),e.jsx("p",{children:"The menu shows only icons when collapsed"}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:t})]})]})]})}},C={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState("messages"),o=[{id:"main",title:"Main Navigation",items:[{id:"dashboard",label:"Dashboard",icon:"home-fill",active:n==="dashboard",onClick:()=>i("dashboard")},{id:"messages",label:"Messages",icon:"envelope",badge:"12",active:n==="messages",onClick:()=>i("messages")},{id:"notifications",label:"Notifications",icon:"bell",badge:"3",active:n==="notifications",onClick:()=>i("notifications")},{id:"tasks",label:"Tasks",icon:"support",badge:"24",active:n==="tasks",onClick:()=>i("tasks")}]},{id:"management",title:"Management",items:[{id:"users",label:"User Management",icon:"user",description:"Manage system users",active:n==="users",onClick:()=>i("users")},{id:"settings",label:"System Settings",icon:"gear",active:n==="settings",onClick:()=>i("settings")},{id:"analytics",label:"Analytics",icon:"magnifier",badge:"NEW",active:n==="analytics",onClick:()=>i("analytics")}]}];return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:o,collapsed:t,onToggleCollapse:()=>s(!t)}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"SideMenu with Badges"}),e.jsx("p",{children:"Shows badges and descriptions on menu items"}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]})]})]})}},x={render:()=>{const[t,s]=l.useState(!1),n=[{id:"navigation",title:"Navigation",items:[{id:"home",label:"Home",icon:"home-fill"},{id:"profile",label:"Profile",icon:"user"},{id:"settings",label:"Settings",icon:"gear"}]}];return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:n,collapsed:t,onToggleCollapse:()=>s(!t),width:"320px",collapsedWidth:"80px"}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Custom Width Menu"}),e.jsx("p",{children:"Expanded width: 320px, Collapsed width: 80px"})]})]})}},y={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState("profile"),o=h(n).map(c=>({...c,items:c.items.map(a=>({...a,onClick:()=>i(a.id)}))}));return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Right-Positioned SideMenu"}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsx("p",{children:"Menu is positioned on the right side"})]}),e.jsx(d,{sections:o,collapsed:t,onToggleCollapse:()=>s(!t),position:"right"})]})}},b={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState(!1),[o,c]=l.useState("profile"),[a,p]=l.useState("notifications"),u=h(o).map(m=>({...m,items:m.items.map(r=>({...r,onClick:()=>c(r.id)}))})),v=h(a).map(m=>({...m,items:m.items.map(r=>({...r,onClick:()=>p(r.id)}))}));return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:u,collapsed:t,onToggleCollapse:()=>s(!t),position:"left"}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff",textAlign:"center"},children:[e.jsx("h1",{children:"Left vs Right Positioning"}),e.jsxs("p",{children:["Left Active: ",e.jsx("strong",{children:o})]}),e.jsxs("p",{children:["Right Active: ",e.jsx("strong",{children:a})]}),e.jsx("p",{children:"Compare side menus positioned on both sides"})]}),e.jsx(d,{sections:v,collapsed:n,onToggleCollapse:()=>i(!n),position:"right"})]})}},S={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState("profile"),[o,c]=l.useState("#10B981"),a=h(n).map(p=>({...p,items:p.items.map(u=>({...u,onClick:()=>i(u.id)}))}));return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:a,collapsed:t,onToggleCollapse:()=>s(!t),activeColor:o,activeTextColor:"white"}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Custom Theme Colors"}),e.jsx("p",{children:"Customize the active state color of menu items."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{children:"Try different colors:"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[e.jsx("button",{onClick:()=>c("#10B981"),style:{backgroundColor:"#10B981",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Green"}),e.jsx("button",{onClick:()=>c("#3B82F6"),style:{backgroundColor:"#3B82F6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Blue"}),e.jsx("button",{onClick:()=>c("#8B5CF6"),style:{backgroundColor:"#8B5CF6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Purple"}),e.jsx("button",{onClick:()=>c("#EF4444"),style:{backgroundColor:"#EF4444",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Red"})]})]})]})]})}},k={render:()=>{const[t,s]=l.useState(!1),[n,i]=l.useState("account"),o=[{id:"account-section",title:"Account",items:[{id:"account",label:"Account",icon:"user",active:n==="account",onClick:()=>i("account")},{id:"privacy",label:"Privacy",icon:"shield",active:n==="privacy",onClick:()=>i("privacy")},{id:"security",label:"Security & permissions",icon:"shield",active:n==="security",onClick:()=>i("security")},{id:"orders",label:"Your orders",icon:"logo-market",description:"Review 4 orders",active:n==="orders",onClick:()=>i("orders")},{id:"share-profile",label:"Share profile",icon:"share",active:n==="share-profile",onClick:()=>i("share-profile")}]},{id:"content-display",title:"Content & Display",items:[{id:"notifications",label:"Notifications",icon:"bell",active:n==="notifications",onClick:()=>i("notifications")},{id:"live",label:"LIVE",icon:"tv",active:n==="live",onClick:()=>i("live")},{id:"music",label:"Music",icon:"star",active:n==="music",onClick:()=>i("music")},{id:"activity-center",label:"Activity center",icon:"support",active:n==="activity-center",onClick:()=>i("activity-center")},{id:"content-preferences",label:"Content preferences",icon:"gear",active:n==="content-preferences",onClick:()=>i("content-preferences")},{id:"audience-controls",label:"Audience controls",icon:"user",active:n==="audience-controls",onClick:()=>i("audience-controls")},{id:"ads",label:"Ads",icon:"star",active:n==="ads",onClick:()=>i("ads")}]}];return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(d,{sections:o,collapsed:t,onToggleCollapse:()=>s(!t)}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff"},children:[e.jsx("h1",{children:"Settings and Privacy"}),e.jsx("p",{children:"iOS-style side menu matching the provided design"}),e.jsxs("p",{children:["Active section: ",e.jsx("strong",{children:n})]}),e.jsx("p",{children:"Try collapsing the menu to see icon-only mode!"})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Main Content Area</h1>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <p>Menu is {collapsed ? "collapsed" : "expanded"}</p>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("notifications");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={true} />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Collapsed Menu</h1>
          <p>The menu shows only icons when collapsed</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("messages");
    const sections: SideMenuSectionProps[] = [{
      id: "main",
      title: "Main Navigation",
      items: [{
        id: "dashboard",
        label: "Dashboard",
        icon: "home-fill",
        active: activeItem === "dashboard",
        onClick: () => setActiveItem("dashboard")
      }, {
        id: "messages",
        label: "Messages",
        icon: "envelope",
        badge: "12",
        active: activeItem === "messages",
        onClick: () => setActiveItem("messages")
      }, {
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        badge: "3",
        active: activeItem === "notifications",
        onClick: () => setActiveItem("notifications")
      }, {
        id: "tasks",
        label: "Tasks",
        icon: "support",
        badge: "24",
        active: activeItem === "tasks",
        onClick: () => setActiveItem("tasks")
      }]
    }, {
      id: "management",
      title: "Management",
      items: [{
        id: "users",
        label: "User Management",
        icon: "user",
        description: "Manage system users",
        active: activeItem === "users",
        onClick: () => setActiveItem("users")
      }, {
        id: "settings",
        label: "System Settings",
        icon: "gear",
        active: activeItem === "settings",
        onClick: () => setActiveItem("settings")
      }, {
        id: "analytics",
        label: "Analytics",
        icon: "magnifier",
        badge: "NEW",
        active: activeItem === "analytics",
        onClick: () => setActiveItem("analytics")
      }]
    }];
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>SideMenu with Badges</h1>
          <p>Shows badges and descriptions on menu items</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const sections: SideMenuSectionProps[] = [{
      id: "navigation",
      title: "Navigation",
      items: [{
        id: "home",
        label: "Home",
        icon: "home-fill"
      }, {
        id: "profile",
        label: "Profile",
        icon: "user"
      }, {
        id: "settings",
        label: "Settings",
        icon: "gear"
      }]
    }];
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} width="320px" collapsedWidth="80px" />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Custom Width Menu</h1>
          <p>Expanded width: 320px, Collapsed width: 80px</p>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Right-Positioned SideMenu</h1>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <p>Menu is positioned on the right side</p>
        </div>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} position="right" />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [leftCollapsed, setLeftCollapsed] = useState(false);
    const [rightCollapsed, setRightCollapsed] = useState(false);
    const [leftActiveItem, setLeftActiveItem] = useState("profile");
    const [rightActiveItem, setRightActiveItem] = useState("notifications");
    const leftSections = createSampleSections(leftActiveItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setLeftActiveItem(item.id)
      }))
    }));
    const rightSections = createSampleSections(rightActiveItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setRightActiveItem(item.id)
      }))
    }));
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={leftSections} collapsed={leftCollapsed} onToggleCollapse={() => setLeftCollapsed(!leftCollapsed)} position="left" />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff",
        textAlign: "center"
      }}>
          <h1>Left vs Right Positioning</h1>
          <p>
            Left Active: <strong>{leftActiveItem}</strong>
          </p>
          <p>
            Right Active: <strong>{rightActiveItem}</strong>
          </p>
          <p>Compare side menus positioned on both sides</p>
        </div>
        <SideMenu sections={rightSections} collapsed={rightCollapsed} onToggleCollapse={() => setRightCollapsed(!rightCollapsed)} position="right" />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const [activeColor, setActiveColor] = useState("#10B981"); // Green theme

    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} activeColor={activeColor} activeTextColor="white" />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Custom Theme Colors</h1>
          <p>Customize the active state color of menu items.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{
          marginTop: "2rem"
        }}>
            <h3>Try different colors:</h3>
            <div style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem"
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
              <button onClick={() => setActiveColor("#8B5CF6")} style={{
              backgroundColor: "#8B5CF6",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
                Purple
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
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("account");

    // Recreate the exact iOS Settings menu structure from the image
    const sections: SideMenuSectionProps[] = [{
      id: "account-section",
      title: "Account",
      items: [{
        id: "account",
        label: "Account",
        icon: "user",
        active: activeItem === "account",
        onClick: () => setActiveItem("account")
      }, {
        id: "privacy",
        label: "Privacy",
        icon: "shield",
        active: activeItem === "privacy",
        onClick: () => setActiveItem("privacy")
      }, {
        id: "security",
        label: "Security & permissions",
        icon: "shield",
        active: activeItem === "security",
        onClick: () => setActiveItem("security")
      }, {
        id: "orders",
        label: "Your orders",
        icon: "logo-market",
        description: "Review 4 orders",
        active: activeItem === "orders",
        onClick: () => setActiveItem("orders")
      }, {
        id: "share-profile",
        label: "Share profile",
        icon: "share",
        active: activeItem === "share-profile",
        onClick: () => setActiveItem("share-profile")
      }]
    }, {
      id: "content-display",
      title: "Content & Display",
      items: [{
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        active: activeItem === "notifications",
        onClick: () => setActiveItem("notifications")
      }, {
        id: "live",
        label: "LIVE",
        icon: "tv",
        active: activeItem === "live",
        onClick: () => setActiveItem("live")
      }, {
        id: "music",
        label: "Music",
        icon: "star",
        active: activeItem === "music",
        onClick: () => setActiveItem("music")
      }, {
        id: "activity-center",
        label: "Activity center",
        icon: "support",
        active: activeItem === "activity-center",
        onClick: () => setActiveItem("activity-center")
      }, {
        id: "content-preferences",
        label: "Content preferences",
        icon: "gear",
        active: activeItem === "content-preferences",
        onClick: () => setActiveItem("content-preferences")
      }, {
        id: "audience-controls",
        label: "Audience controls",
        icon: "user",
        active: activeItem === "audience-controls",
        onClick: () => setActiveItem("audience-controls")
      }, {
        id: "ads",
        label: "Ads",
        icon: "star",
        active: activeItem === "ads",
        onClick: () => setActiveItem("ads")
      }]
    }];
    return <div style={{
      height: "100vh",
      display: "flex"
    }}>
        <SideMenu sections={sections} collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
        <div style={{
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff"
      }}>
          <h1>Settings and Privacy</h1>
          <p>iOS-style side menu matching the provided design</p>
          <p>
            Active section: <strong>{activeItem}</strong>
          </p>
          <p>Try collapsing the menu to see icon-only mode!</p>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};const B=["Default","Collapsed","WithBadges","CustomWidth","RightPosition","PositionComparison","CustomThemeColors","IOSStyleSettings"];export{f as Collapsed,S as CustomThemeColors,x as CustomWidth,g as Default,k as IOSStyleSettings,b as PositionComparison,y as RightPosition,C as WithBadges,B as __namedExportsOrder,P as default};
