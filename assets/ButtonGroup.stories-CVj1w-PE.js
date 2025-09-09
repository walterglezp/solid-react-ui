import{j as t,r as s}from"./iframe-uRyd9Bza.js";import{g as A}from"./classnames-helper-C6tUBjOJ.js";import{B as n}from"./Button-BOnyIstR.js";const a=({variant:e="group",color:i="primary",size:r="sm",className:c="",vertical:o=!1,children:l,role:m,"aria-label":p})=>{const d=A({"btn-group":e==="group"&&!o,"btn-group-vertical":o,"btn-toolbar":e==="toolbar","btn-group-segmented":e==="segmented",[`btn-group-segmented-${i}`]:e==="segmented"&&!!i,[`btn-group-${r}`]:e!=="toolbar",[c]:!!c});return t.jsx("div",{className:d,role:m,"aria-label":p,children:l})};a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{variant:{required:!1,tsType:{name:"union",raw:'"group" | "toolbar" | "segmented"',elements:[{name:"literal",value:'"group"'},{name:"literal",value:'"toolbar"'},{name:"literal",value:'"segmented"'}]},description:"",defaultValue:{value:'"group"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "danger"
| "warning"
| "info"
| "light"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},role:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const w={component:a,title:"Form/ButtonGroup",tags:["autodocs"],args:{size:"sm",vertical:!1,variant:"group","aria-label":"Button group",role:"group"},argTypes:{children:{control:!1},variant:{control:"select",options:["group","toolbar","segmented"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info","light"]}}},u={render:e=>t.jsxs(a,{...e,children:[t.jsx(n,{variant:"primary",children:"Left"}),t.jsx(n,{variant:"primary",children:"Middle"}),t.jsx(n,{variant:"primary",children:"Right"})]})},v={args:{size:"md"},render:e=>t.jsxs(a,{...e,children:[t.jsx(n,{variant:"primary",children:"Left"}),t.jsx(n,{variant:"primary",children:"Middle"}),t.jsx(n,{variant:"primary",children:"Right"})]})},g={args:{size:"lg"},render:e=>t.jsxs(a,{...e,children:[t.jsx(n,{variant:"primary",children:"Left"}),t.jsx(n,{variant:"primary",children:"Middle"}),t.jsx(n,{variant:"primary",children:"Right"})]})},y={args:{vertical:!0},render:e=>t.jsxs(a,{...e,children:[t.jsx(n,{variant:"primary",children:"Left"}),t.jsx(n,{variant:"primary",children:"Middle"}),t.jsx(n,{variant:"primary",children:"Right"})]})},h={args:{variant:"toolbar"},render:e=>t.jsxs(a,{...e,children:[t.jsxs(a,{size:"sm",role:"group","aria-label":"Group 1",children:[t.jsx(n,{variant:"secondary",children:"1"}),t.jsx(n,{variant:"secondary",children:"2"})]}),t.jsxs(a,{size:"sm",role:"group","aria-label":"Group 2",children:[t.jsx(n,{variant:"secondary",children:"3"}),t.jsx(n,{variant:"secondary",children:"4"})]})]})},B={args:{variant:"segmented",color:"primary","aria-label":"Sort options"},render:e=>{const[i,r]=s.useState("popular");return t.jsxs(a,{...e,children:[t.jsx(n,{variant:"primary",className:i==="latest"?"active":"",onClick:()=>r("latest"),children:"Latest"}),t.jsx(n,{variant:"primary",className:i==="popular"?"active":"",onClick:()=>r("popular"),children:"Popular"}),t.jsx(n,{variant:"primary",className:i==="oldest"?"active":"",onClick:()=>r("oldest"),children:"Oldest"})]})}},x={render:()=>{const[e,i]=s.useState("option2"),[r,c]=s.useState("option1"),[o,l]=s.useState("option3");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Small Segmented Control"}),t.jsxs(a,{variant:"segmented",color:"primary",size:"sm","aria-label":"Small options",children:[t.jsx(n,{variant:"primary",className:e==="option1"?"active":"",onClick:()=>i("option1"),children:"Day"}),t.jsx(n,{variant:"primary",className:e==="option2"?"active":"",onClick:()=>i("option2"),children:"Week"}),t.jsx(n,{variant:"primary",className:e==="option3"?"active":"",onClick:()=>i("option3"),children:"Month"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{children:"Medium Segmented Control"}),t.jsxs(a,{variant:"segmented",color:"success",size:"md","aria-label":"Medium options",children:[t.jsx(n,{variant:"primary",className:r==="option1"?"active":"",onClick:()=>c("option1"),children:"Latest"}),t.jsx(n,{variant:"primary",className:r==="option2"?"active":"",onClick:()=>c("option2"),children:"Popular"}),t.jsx(n,{variant:"primary",className:r==="option3"?"active":"",onClick:()=>c("option3"),children:"Oldest"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{children:"Large Segmented Control"}),t.jsxs(a,{variant:"segmented",color:"danger",size:"lg","aria-label":"Large options",children:[t.jsx(n,{variant:"primary",className:o==="option1"?"active":"",onClick:()=>l("option1"),children:"All Items"}),t.jsx(n,{variant:"primary",className:o==="option2"?"active":"",onClick:()=>l("option2"),children:"Favorites"}),t.jsx(n,{variant:"primary",className:o==="option3"?"active":"",onClick:()=>l("option3"),children:"Recent"})]})]})]})}},j={render:()=>{const[e,i]=s.useState("option2"),[r,c]=s.useState("option1"),[o,l]=s.useState("option3"),[m,p]=s.useState("option1"),[d,C]=s.useState("option2"),[k,f]=s.useState("option3"),[N,b]=s.useState("option2");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"2rem",backgroundColor:"#f8f9fa"},children:[t.jsxs("div",{children:[t.jsx("h3",{children:"All Color Variants"}),t.jsx("p",{style:{marginBottom:"1.5rem",color:"#6c757d"},children:"Segmented controls support all theme color variants for different contexts and branding needs."})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Primary"}),t.jsxs(a,{variant:"segmented",color:"primary","aria-label":"Primary options",children:[t.jsx(n,{variant:"primary",className:e==="option1"?"active":"",onClick:()=>i("option1"),children:"Latest"}),t.jsx(n,{variant:"primary",className:e==="option2"?"active":"",onClick:()=>i("option2"),children:"Popular"}),t.jsx(n,{variant:"primary",className:e==="option3"?"active":"",onClick:()=>i("option3"),children:"Oldest"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Secondary"}),t.jsxs(a,{variant:"segmented",color:"secondary","aria-label":"Secondary options",children:[t.jsx(n,{variant:"primary",className:r==="option1"?"active":"",onClick:()=>c("option1"),children:"Draft"}),t.jsx(n,{variant:"primary",className:r==="option2"?"active":"",onClick:()=>c("option2"),children:"Review"}),t.jsx(n,{variant:"primary",className:r==="option3"?"active":"",onClick:()=>c("option3"),children:"Published"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Success"}),t.jsxs(a,{variant:"segmented",color:"success","aria-label":"Success options",children:[t.jsx(n,{variant:"primary",className:o==="option1"?"active":"",onClick:()=>l("option1"),children:"Passed"}),t.jsx(n,{variant:"primary",className:o==="option2"?"active":"",onClick:()=>l("option2"),children:"Completed"}),t.jsx(n,{variant:"primary",className:o==="option3"?"active":"",onClick:()=>l("option3"),children:"Verified"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Danger"}),t.jsxs(a,{variant:"segmented",color:"danger","aria-label":"Danger options",children:[t.jsx(n,{variant:"primary",className:m==="option1"?"active":"",onClick:()=>p("option1"),children:"Failed"}),t.jsx(n,{variant:"primary",className:m==="option2"?"active":"",onClick:()=>p("option2"),children:"Error"}),t.jsx(n,{variant:"primary",className:m==="option3"?"active":"",onClick:()=>p("option3"),children:"Critical"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Warning"}),t.jsxs(a,{variant:"segmented",color:"warning","aria-label":"Warning options",children:[t.jsx(n,{variant:"primary",className:d==="option1"?"active":"",onClick:()=>C("option1"),children:"Pending"}),t.jsx(n,{variant:"primary",className:d==="option2"?"active":"",onClick:()=>C("option2"),children:"Review"}),t.jsx(n,{variant:"primary",className:d==="option3"?"active":"",onClick:()=>C("option3"),children:"Attention"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Info"}),t.jsxs(a,{variant:"segmented",color:"info","aria-label":"Info options",children:[t.jsx(n,{variant:"primary",className:k==="option1"?"active":"",onClick:()=>f("option1"),children:"Today"}),t.jsx(n,{variant:"primary",className:k==="option2"?"active":"",onClick:()=>f("option2"),children:"Week"}),t.jsx(n,{variant:"primary",className:k==="option3"?"active":"",onClick:()=>f("option3"),children:"Month"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Light"}),t.jsxs(a,{variant:"segmented",color:"light","aria-label":"Light options",children:[t.jsx(n,{variant:"primary",className:N==="option1"?"active":"",onClick:()=>b("option1"),children:"Latest"}),t.jsx(n,{variant:"primary",className:N==="option2"?"active":"",onClick:()=>b("option2"),children:"Popular"}),t.jsx(n,{variant:"primary",className:N==="option3"?"active":"",onClick:()=>b("option3"),children:"Oldest"})]})]})]})}},S={render:()=>{const[e,i]=s.useState("popular"),[r,c]=s.useState("grid"),[o,l]=s.useState("today");return t.jsx("div",{style:{padding:"2rem",backgroundColor:"#f8f9fa"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"600"},children:"Sort by:"}),t.jsxs(a,{variant:"segmented",color:"primary","aria-label":"Sort options",children:[t.jsx(n,{variant:"primary",className:e==="latest"?"active":"",onClick:()=>i("latest"),children:"Latest"}),t.jsx(n,{variant:"primary",className:e==="popular"?"active":"",onClick:()=>i("popular"),children:"Popular"}),t.jsx(n,{variant:"primary",className:e==="oldest"?"active":"",onClick:()=>i("oldest"),children:"Oldest"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"600"},children:"View:"}),t.jsxs(a,{variant:"segmented",color:"info",size:"sm","aria-label":"View options",children:[t.jsx(n,{variant:"primary",className:r==="list"?"active":"",onClick:()=>c("list"),children:"List"}),t.jsx(n,{variant:"primary",className:r==="grid"?"active":"",onClick:()=>c("grid"),children:"Grid"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"600"},children:"Time Filter:"}),t.jsxs(a,{variant:"segmented",color:"success",size:"lg","aria-label":"Time filter options",children:[t.jsx(n,{variant:"primary",className:o==="today"?"active":"",onClick:()=>l("today"),children:"Today"}),t.jsx(n,{variant:"primary",className:o==="week"?"active":"",onClick:()=>l("week"),children:"This Week"}),t.jsx(n,{variant:"primary",className:o==="month"?"active":"",onClick:()=>l("month"),children:"This Month"})]})]}),t.jsxs("div",{style:{padding:"1rem",backgroundColor:"white",borderRadius:"8px",marginTop:"1rem"},children:[t.jsx("h4",{children:"Current Selection:"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Sort:"})," ",e]}),t.jsxs("p",{children:[t.jsx("strong",{children:"View:"})," ",r]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Time:"})," ",o]})]})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "toolbar"
  },
  render: args => <ButtonGroup {...args}>
      <ButtonGroup size="sm" role="group" aria-label="Group 1">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" role="group" aria-label="Group 2">
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </ButtonGroup>
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "segmented",
    color: "primary",
    "aria-label": "Sort options"
  },
  render: args => {
    const [activeButton, setActiveButton] = useState("popular");
    return <ButtonGroup {...args}>
        <Button variant="primary" className={activeButton === "latest" ? "active" : ""} onClick={() => setActiveButton("latest")}>
          Latest
        </Button>
        <Button variant="primary" className={activeButton === "popular" ? "active" : ""} onClick={() => setActiveButton("popular")}>
          Popular
        </Button>
        <Button variant="primary" className={activeButton === "oldest" ? "active" : ""} onClick={() => setActiveButton("oldest")}>
          Oldest
        </Button>
      </ButtonGroup>;
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSmall, setActiveSmall] = useState("option2");
    const [activeMedium, setActiveMedium] = useState("option1");
    const [activeLarge, setActiveLarge] = useState("option3");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "1rem"
    }}>
        <div>
          <h4>Small Segmented Control</h4>
          <ButtonGroup variant="segmented" color="primary" size="sm" aria-label="Small options">
            <Button variant="primary" className={activeSmall === "option1" ? "active" : ""} onClick={() => setActiveSmall("option1")}>
              Day
            </Button>
            <Button variant="primary" className={activeSmall === "option2" ? "active" : ""} onClick={() => setActiveSmall("option2")}>
              Week
            </Button>
            <Button variant="primary" className={activeSmall === "option3" ? "active" : ""} onClick={() => setActiveSmall("option3")}>
              Month
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4>Medium Segmented Control</h4>
          <ButtonGroup variant="segmented" color="success" size="md" aria-label="Medium options">
            <Button variant="primary" className={activeMedium === "option1" ? "active" : ""} onClick={() => setActiveMedium("option1")}>
              Latest
            </Button>
            <Button variant="primary" className={activeMedium === "option2" ? "active" : ""} onClick={() => setActiveMedium("option2")}>
              Popular
            </Button>
            <Button variant="primary" className={activeMedium === "option3" ? "active" : ""} onClick={() => setActiveMedium("option3")}>
              Oldest
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4>Large Segmented Control</h4>
          <ButtonGroup variant="segmented" color="danger" size="lg" aria-label="Large options">
            <Button variant="primary" className={activeLarge === "option1" ? "active" : ""} onClick={() => setActiveLarge("option1")}>
              All Items
            </Button>
            <Button variant="primary" className={activeLarge === "option2" ? "active" : ""} onClick={() => setActiveLarge("option2")}>
              Favorites
            </Button>
            <Button variant="primary" className={activeLarge === "option3" ? "active" : ""} onClick={() => setActiveLarge("option3")}>
              Recent
            </Button>
          </ButtonGroup>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activePrimary, setActivePrimary] = useState("option2");
    const [activeSecondary, setActiveSecondary] = useState("option1");
    const [activeSuccess, setActiveSuccess] = useState("option3");
    const [activeDanger, setActiveDanger] = useState("option1");
    const [activeWarning, setActiveWarning] = useState("option2");
    const [activeInfo, setActiveInfo] = useState("option3");
    const [activeLight, setActiveLight] = useState("option2");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <div>
          <h3>All Color Variants</h3>
          <p style={{
          marginBottom: "1.5rem",
          color: "#6c757d"
        }}>
            Segmented controls support all theme color variants for different
            contexts and branding needs.
          </p>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Primary</h4>
          <ButtonGroup variant="segmented" color="primary" aria-label="Primary options">
            <Button variant="primary" className={activePrimary === "option1" ? "active" : ""} onClick={() => setActivePrimary("option1")}>
              Latest
            </Button>
            <Button variant="primary" className={activePrimary === "option2" ? "active" : ""} onClick={() => setActivePrimary("option2")}>
              Popular
            </Button>
            <Button variant="primary" className={activePrimary === "option3" ? "active" : ""} onClick={() => setActivePrimary("option3")}>
              Oldest
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Secondary</h4>
          <ButtonGroup variant="segmented" color="secondary" aria-label="Secondary options">
            <Button variant="primary" className={activeSecondary === "option1" ? "active" : ""} onClick={() => setActiveSecondary("option1")}>
              Draft
            </Button>
            <Button variant="primary" className={activeSecondary === "option2" ? "active" : ""} onClick={() => setActiveSecondary("option2")}>
              Review
            </Button>
            <Button variant="primary" className={activeSecondary === "option3" ? "active" : ""} onClick={() => setActiveSecondary("option3")}>
              Published
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Success</h4>
          <ButtonGroup variant="segmented" color="success" aria-label="Success options">
            <Button variant="primary" className={activeSuccess === "option1" ? "active" : ""} onClick={() => setActiveSuccess("option1")}>
              Passed
            </Button>
            <Button variant="primary" className={activeSuccess === "option2" ? "active" : ""} onClick={() => setActiveSuccess("option2")}>
              Completed
            </Button>
            <Button variant="primary" className={activeSuccess === "option3" ? "active" : ""} onClick={() => setActiveSuccess("option3")}>
              Verified
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Danger</h4>
          <ButtonGroup variant="segmented" color="danger" aria-label="Danger options">
            <Button variant="primary" className={activeDanger === "option1" ? "active" : ""} onClick={() => setActiveDanger("option1")}>
              Failed
            </Button>
            <Button variant="primary" className={activeDanger === "option2" ? "active" : ""} onClick={() => setActiveDanger("option2")}>
              Error
            </Button>
            <Button variant="primary" className={activeDanger === "option3" ? "active" : ""} onClick={() => setActiveDanger("option3")}>
              Critical
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Warning</h4>
          <ButtonGroup variant="segmented" color="warning" aria-label="Warning options">
            <Button variant="primary" className={activeWarning === "option1" ? "active" : ""} onClick={() => setActiveWarning("option1")}>
              Pending
            </Button>
            <Button variant="primary" className={activeWarning === "option2" ? "active" : ""} onClick={() => setActiveWarning("option2")}>
              Review
            </Button>
            <Button variant="primary" className={activeWarning === "option3" ? "active" : ""} onClick={() => setActiveWarning("option3")}>
              Attention
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Info</h4>
          <ButtonGroup variant="segmented" color="info" aria-label="Info options">
            <Button variant="primary" className={activeInfo === "option1" ? "active" : ""} onClick={() => setActiveInfo("option1")}>
              Today
            </Button>
            <Button variant="primary" className={activeInfo === "option2" ? "active" : ""} onClick={() => setActiveInfo("option2")}>
              Week
            </Button>
            <Button variant="primary" className={activeInfo === "option3" ? "active" : ""} onClick={() => setActiveInfo("option3")}>
              Month
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{
          marginBottom: "0.5rem"
        }}>Light</h4>
          <ButtonGroup variant="segmented" color="light" aria-label="Light options">
            <Button variant="primary" className={activeLight === "option1" ? "active" : ""} onClick={() => setActiveLight("option1")}>
              Latest
            </Button>
            <Button variant="primary" className={activeLight === "option2" ? "active" : ""} onClick={() => setActiveLight("option2")}>
              Popular
            </Button>
            <Button variant="primary" className={activeLight === "option3" ? "active" : ""} onClick={() => setActiveLight("option3")}>
              Oldest
            </Button>
          </ButtonGroup>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortBy, setSortBy] = useState("popular");
    const [viewMode, setViewMode] = useState("grid");
    const [timeFilter, setTimeFilter] = useState("today");
    return <div style={{
      padding: "2rem",
      backgroundColor: "#f8f9fa"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
          <div>
            <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
              Sort by:
            </label>
            <ButtonGroup variant="segmented" color="primary" aria-label="Sort options">
              <Button variant="primary" className={sortBy === "latest" ? "active" : ""} onClick={() => setSortBy("latest")}>
                Latest
              </Button>
              <Button variant="primary" className={sortBy === "popular" ? "active" : ""} onClick={() => setSortBy("popular")}>
                Popular
              </Button>
              <Button variant="primary" className={sortBy === "oldest" ? "active" : ""} onClick={() => setSortBy("oldest")}>
                Oldest
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
              View:
            </label>
            <ButtonGroup variant="segmented" color="info" size="sm" aria-label="View options">
              <Button variant="primary" className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>
                List
              </Button>
              <Button variant="primary" className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>
                Grid
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
              Time Filter:
            </label>
            <ButtonGroup variant="segmented" color="success" size="lg" aria-label="Time filter options">
              <Button variant="primary" className={timeFilter === "today" ? "active" : ""} onClick={() => setTimeFilter("today")}>
                Today
              </Button>
              <Button variant="primary" className={timeFilter === "week" ? "active" : ""} onClick={() => setTimeFilter("week")}>
                This Week
              </Button>
              <Button variant="primary" className={timeFilter === "month" ? "active" : ""} onClick={() => setTimeFilter("month")}>
                This Month
              </Button>
            </ButtonGroup>
          </div>

          <div style={{
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "1rem"
        }}>
            <h4>Current Selection:</h4>
            <p>
              <strong>Sort:</strong> {sortBy}
            </p>
            <p>
              <strong>View:</strong> {viewMode}
            </p>
            <p>
              <strong>Time:</strong> {timeFilter}
            </p>
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const T=["Default","Medium","Large","Vertical","Toolbar","Segmented","SegmentedSizes","SegmentedColorVariants","SegmentedInteractive"];export{u as Default,g as Large,v as Medium,B as Segmented,j as SegmentedColorVariants,S as SegmentedInteractive,x as SegmentedSizes,h as Toolbar,y as Vertical,T as __namedExportsOrder,w as default};
