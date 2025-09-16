import{r,j as e}from"./iframe-cc5ZmNpn.js";import{M as a}from"./Menu-BDHvnyf-.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./Icon-YTP-CrPf.js";const A={title:"Navigation/Menu",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{control:{type:"radio"},options:["fixed","regular"]},placement:{control:{type:"radio"},options:["top-left","top-right","bottom-left","bottom-right"]},visible:{control:"boolean"},width:{control:"text"},height:{control:"text"},activeColor:{control:"color"},activeTextColor:{control:"color"}}},f=t=>[{id:"navigation",title:"Navigation",items:[{id:"dashboard",label:"Dashboard",icon:"home-fill",active:t==="dashboard"},{id:"profile",label:"Profile",icon:"user",active:t==="profile"},{id:"settings",label:"Settings",icon:"gear",active:t==="settings"}]},{id:"actions",title:"Actions",items:[{id:"notifications",label:"Notifications",icon:"bell",badge:"3",active:t==="notifications"},{id:"messages",label:"Messages",icon:"envelope",description:"Unread messages",badge:"12",active:t==="messages"},{id:"help",label:"Help & Support",icon:"support",active:t==="help"}]},{id:"account",items:[{id:"logout",label:"Sign Out",icon:"go-back",active:t==="logout"}]}],p={render:()=>{const[t,n]=r.useState("dashboard"),i=f(t).map(o=>({...o,items:o.items.map(s=>({...s,onClick:()=>n(s.id)}))}));return e.jsx("div",{style:{padding:"2rem",backgroundColor:"#f8f9fa"},children:e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(a,{sections:i,position:"regular",width:"300px"}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsx("h1",{children:"Regular Menu"}),e.jsx("p",{children:"This menu is positioned regularly within the document flow."}),e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:t})]})]})]})})}},m={render:()=>{const[t,n]=r.useState(!1),[i,o]=r.useState("profile"),[s,l]=r.useState("top-right"),v=f(i).map(c=>({...c,items:c.items.map(d=>({...d,onClick:()=>{o(d.id),n(!1)}}))}));return e.jsxs("div",{style:{height:"100vh",padding:"2rem",backgroundColor:"#f8f9fa"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Fixed Menu"}),e.jsx("p",{children:"Click the button to show a fixed-positioned menu overlay."})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("button",{onClick:()=>n(!0),style:{padding:"0.75rem 1.5rem",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Show Menu"}),e.jsxs("select",{value:s,onChange:c=>l(c.target.value),style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"},children:[e.jsx("option",{value:"top-left",children:"Top Left"}),e.jsx("option",{value:"top-right",children:"Top Right"}),e.jsx("option",{value:"bottom-left",children:"Bottom Left"}),e.jsx("option",{value:"bottom-right",children:"Bottom Right"})]})]}),e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:i})]}),e.jsxs("p",{children:["Menu placement: ",e.jsx("strong",{children:s})]})]})]}),e.jsx(a,{sections:v,position:"fixed",placement:s,visible:t,onClose:()=>n(!1),width:"320px"})]})}},u={render:()=>{const[t,n]=r.useState(!1),[i,o]=r.useState({x:0,y:0}),[s,l]=r.useState(""),v=[{id:"edit",items:[{id:"copy",label:"Copy",icon:"share",onClick:()=>{l("copy"),n(!1)}},{id:"paste",label:"Paste",icon:"envelope",onClick:()=>{l("paste"),n(!1)}},{id:"cut",label:"Cut",icon:"edit",onClick:()=>{l("cut"),n(!1)}}]},{id:"actions",items:[{id:"delete",label:"Delete",icon:"trash-alt",onClick:()=>{l("delete"),n(!1)}},{id:"rename",label:"Rename",icon:"edit",onClick:()=>{l("rename"),n(!1)}}]}],c=d=>{d.preventDefault(),o({x:d.clientX,y:d.clientY}),n(!0)};return e.jsxs("div",{style:{height:"100vh",padding:"2rem",backgroundColor:"#f8f9fa"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h1",{children:"Context Menu"}),e.jsx("p",{children:"Right-click anywhere in the gray area below to show the context menu."}),e.jsx("div",{style:{flex:1,backgroundColor:"#e9ecef",borderRadius:"8px",padding:"2rem",cursor:"context-menu",minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center"},onContextMenu:c,onClick:()=>n(!1),children:e.jsxs("div",{style:{textAlign:"center",color:"#6c757d"},children:[e.jsx("p",{children:"Right-click me!"}),s&&e.jsxs("p",{children:["Last action: ",e.jsx("strong",{children:s})]})]})})]}),t&&e.jsx("div",{style:{position:"fixed",left:`${i.x}px`,top:`${i.y}px`,zIndex:1e3},children:e.jsx(a,{sections:v,position:"regular",visible:t,onClose:()=>n(!1),width:"200px"})})]})}},g={render:()=>{const[t,n]=r.useState("save"),i=[{id:"file",title:"File",items:[{id:"save",label:"Save",icon:"save-disc",active:t==="save",onClick:()=>n("save")},{id:"export",label:"Export",icon:"share",onClick:()=>n("export")}]},{id:"edit",title:"Edit",items:[{id:"undo",label:"Undo",icon:"arrow-left",onClick:()=>n("undo")},{id:"redo",label:"Redo",icon:"arrow-right",disabled:!0}]}];return e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#f8f9fa"},children:[e.jsx("h1",{children:"Compact Menu"}),e.jsx("p",{children:"A compact menu suitable for toolbar dropdowns or small spaces."}),e.jsxs("div",{style:{display:"flex",gap:"2rem",marginTop:"2rem"},children:[e.jsx(a,{sections:i,position:"regular",width:"220px",height:"300px"}),e.jsx("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:t})]})})]})]})}},b={render:()=>{const[t,n]=r.useState("inbox"),[i,o]=r.useState("#8B5CF6"),s=[{id:"mail",title:"Mail",items:[{id:"inbox",label:"Inbox",icon:"envelope",badge:"24",active:t==="inbox",onClick:()=>n("inbox")},{id:"sent",label:"Sent",icon:"mail-send",onClick:()=>n("sent")},{id:"drafts",label:"Drafts",icon:"edit",badge:"3",onClick:()=>n("drafts")}]},{id:"actions",title:"Actions",items:[{id:"notifications",label:"Notifications",icon:"bell",badge:"NEW",onClick:()=>n("notifications")},{id:"settings",label:"Settings",icon:"gear",onClick:()=>n("settings")}]}];return e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#f8f9fa"},children:[e.jsx("h1",{children:"Custom Theme Colors"}),e.jsx("p",{children:"Menu with customizable active state colors."}),e.jsxs("div",{style:{display:"flex",gap:"2rem",marginTop:"2rem"},children:[e.jsx(a,{sections:s,position:"regular",width:"280px",activeColor:i,activeTextColor:"white"}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:t})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{children:"Try different colors:"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem",flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>o("#8B5CF6"),style:{backgroundColor:"#8B5CF6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Purple"}),e.jsx("button",{onClick:()=>o("#F59E0B"),style:{backgroundColor:"#F59E0B",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Orange"}),e.jsx("button",{onClick:()=>o("#06B6D4"),style:{backgroundColor:"#06B6D4",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Cyan"}),e.jsx("button",{onClick:()=>o("#EC4899"),style:{backgroundColor:"#EC4899",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"Pink"})]})]})]})]})]})}},x={render:()=>{const[t,n]=r.useState("inbox"),i=[{id:"mail",title:"Mail",items:[{id:"inbox",label:"Inbox",icon:"envelope",badge:"24",active:t==="inbox",onClick:()=>n("inbox")},{id:"sent",label:"Sent",icon:"mail-send",onClick:()=>n("sent")},{id:"drafts",label:"Drafts",icon:"edit",badge:"3",onClick:()=>n("drafts")},{id:"spam",label:"Spam",icon:"shield",badge:"156",onClick:()=>n("spam")}]},{id:"folders",title:"Folders",items:[{id:"work",label:"Work",icon:"manage",badge:"NEW",onClick:()=>n("work")},{id:"personal",label:"Personal",icon:"manage",onClick:()=>n("personal")}]}];return e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#f8f9fa"},children:[e.jsx("h1",{children:"Menu with Badges"}),e.jsx("p",{children:"Menu items can display badges for counts or status indicators."}),e.jsxs("div",{style:{display:"flex",gap:"2rem",marginTop:"2rem"},children:[e.jsx(a,{sections:i,position:"regular",width:"280px"}),e.jsx("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fff",borderRadius:"8px"},children:e.jsxs("p",{children:["Active item: ",e.jsx("strong",{children:t})]})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("dashboard");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setActiveItem(item.id)
      }))
    }));
    return <div style={{
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        display: "flex",
        gap: "2rem"
      }}>
          <Menu sections={sections} position="regular" width="300px" />
          <div style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
            <h1>Regular Menu</h1>
            <p>This menu is positioned regularly within the document flow.</p>
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const [placement, setPlacement] = useState<"top-left" | "top-right" | "bottom-left" | "bottom-right">("top-right");
    const sections = createSampleSections(activeItem).map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => {
          setActiveItem(item.id);
          setVisible(false);
        }
      }))
    }));
    return <div style={{
      height: "100vh",
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <div>
            <h1>Fixed Menu</h1>
            <p>Click the button to show a fixed-positioned menu overlay.</p>
          </div>

          <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center"
        }}>
            <button onClick={() => setVisible(true)} style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
              Show Menu
            </button>

            <select value={placement} onChange={e => setPlacement(e.target.value as any)} style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}>
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
            </select>
          </div>

          <div style={{
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
            <p>
              Menu placement: <strong>{placement}</strong>
            </p>
          </div>
        </div>

        <Menu sections={sections} position="fixed" placement={placement} visible={visible} onClose={() => setVisible(false)} width="320px" />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    const [activeItem, setActiveItem] = useState("");
    const sections: MenuSectionProps[] = [{
      id: "edit",
      items: [{
        id: "copy",
        label: "Copy",
        icon: "share",
        onClick: () => {
          setActiveItem("copy");
          setVisible(false);
        }
      }, {
        id: "paste",
        label: "Paste",
        icon: "envelope",
        onClick: () => {
          setActiveItem("paste");
          setVisible(false);
        }
      }, {
        id: "cut",
        label: "Cut",
        icon: "edit",
        onClick: () => {
          setActiveItem("cut");
          setVisible(false);
        }
      }]
    }, {
      id: "actions",
      items: [{
        id: "delete",
        label: "Delete",
        icon: "trash-alt",
        onClick: () => {
          setActiveItem("delete");
          setVisible(false);
        }
      }, {
        id: "rename",
        label: "Rename",
        icon: "edit",
        onClick: () => {
          setActiveItem("rename");
          setVisible(false);
        }
      }]
    }];
    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
      setVisible(true);
    };
    return <div style={{
      height: "100vh",
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <h1>Context Menu</h1>
          <p>
            Right-click anywhere in the gray area below to show the context
            menu.
          </p>

          <div style={{
          flex: 1,
          backgroundColor: "#e9ecef",
          borderRadius: "8px",
          padding: "2rem",
          cursor: "context-menu",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} onContextMenu={handleContextMenu} onClick={() => setVisible(false)}>
            <div style={{
            textAlign: "center",
            color: "#6c757d"
          }}>
              <p>Right-click me!</p>
              {activeItem && <p>
                  Last action: <strong>{activeItem}</strong>
                </p>}
            </div>
          </div>
        </div>

        {visible && <div style={{
        position: "fixed",
        left: \`\${position.x}px\`,
        top: \`\${position.y}px\`,
        zIndex: 1000
      }}>
            <Menu sections={sections} position="regular" visible={visible} onClose={() => setVisible(false)} width="200px" />
          </div>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("save");
    const sections: MenuSectionProps[] = [{
      id: "file",
      title: "File",
      items: [{
        id: "save",
        label: "Save",
        icon: "save-disc",
        active: activeItem === "save",
        onClick: () => setActiveItem("save")
      }, {
        id: "export",
        label: "Export",
        icon: "share",
        onClick: () => setActiveItem("export")
      }]
    }, {
      id: "edit",
      title: "Edit",
      items: [{
        id: "undo",
        label: "Undo",
        icon: "arrow-left",
        onClick: () => setActiveItem("undo")
      }, {
        id: "redo",
        label: "Redo",
        icon: "arrow-right",
        disabled: true
      }]
    }];
    return <div style={{
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <h1>Compact Menu</h1>
        <p>A compact menu suitable for toolbar dropdowns or small spaces.</p>

        <div style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem"
      }}>
          <Menu sections={sections} position="regular" width="220px" height="300px" />

          <div style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("inbox");
    const [activeColor, setActiveColor] = useState("#8B5CF6"); // Purple theme

    const sections: MenuSectionProps[] = [{
      id: "mail",
      title: "Mail",
      items: [{
        id: "inbox",
        label: "Inbox",
        icon: "envelope",
        badge: "24",
        active: activeItem === "inbox",
        onClick: () => setActiveItem("inbox")
      }, {
        id: "sent",
        label: "Sent",
        icon: "mail-send",
        onClick: () => setActiveItem("sent")
      }, {
        id: "drafts",
        label: "Drafts",
        icon: "edit",
        badge: "3",
        onClick: () => setActiveItem("drafts")
      }]
    }, {
      id: "actions",
      title: "Actions",
      items: [{
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        badge: "NEW",
        onClick: () => setActiveItem("notifications")
      }, {
        id: "settings",
        label: "Settings",
        icon: "gear",
        onClick: () => setActiveItem("settings")
      }]
    }];
    return <div style={{
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <h1>Custom Theme Colors</h1>
        <p>Menu with customizable active state colors.</p>

        <div style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem"
      }}>
          <Menu sections={sections} position="regular" width="280px" activeColor={activeColor} activeTextColor="white" />

          <div style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
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
              marginTop: "1rem",
              flexWrap: "wrap"
            }}>
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
                <button onClick={() => setActiveColor("#06B6D4")} style={{
                backgroundColor: "#06B6D4",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer"
              }}>
                  Cyan
                </button>
                <button onClick={() => setActiveColor("#EC4899")} style={{
                backgroundColor: "#EC4899",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer"
              }}>
                  Pink
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState("inbox");
    const sections: MenuSectionProps[] = [{
      id: "mail",
      title: "Mail",
      items: [{
        id: "inbox",
        label: "Inbox",
        icon: "envelope",
        badge: "24",
        active: activeItem === "inbox",
        onClick: () => setActiveItem("inbox")
      }, {
        id: "sent",
        label: "Sent",
        icon: "mail-send",
        onClick: () => setActiveItem("sent")
      }, {
        id: "drafts",
        label: "Drafts",
        icon: "edit",
        badge: "3",
        onClick: () => setActiveItem("drafts")
      }, {
        id: "spam",
        label: "Spam",
        icon: "shield",
        badge: "156",
        onClick: () => setActiveItem("spam")
      }]
    }, {
      id: "folders",
      title: "Folders",
      items: [{
        id: "work",
        label: "Work",
        icon: "manage",
        badge: "NEW",
        onClick: () => setActiveItem("work")
      }, {
        id: "personal",
        label: "Personal",
        icon: "manage",
        onClick: () => setActiveItem("personal")
      }]
    }];
    return <div style={{
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <h1>Menu with Badges</h1>
        <p>Menu items can display badges for counts or status indicators.</p>

        <div style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem"
      }}>
          <Menu sections={sections} position="regular" width="280px" />

          <div style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px"
        }}>
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const w=["Regular","Fixed","ContextMenu","CompactMenu","CustomThemeColors","MenuWithBadges"];export{g as CompactMenu,u as ContextMenu,b as CustomThemeColors,m as Fixed,x as MenuWithBadges,p as Regular,w as __namedExportsOrder,A as default};
