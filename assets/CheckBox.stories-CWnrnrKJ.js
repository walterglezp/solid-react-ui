import{r as t,j as e}from"./iframe-CCjepWBu.js";import{C as r}from"./CheckBox-D_bgudjW.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";import"./InputError-jIwtEdDA.js";import"./Icon-CVi0seOY.js";import"./Flex-BrdwESsa.js";const w={title:"Form/CheckBox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},isSwitch:{control:"boolean"}}},c={render:()=>{const[n,o]=t.useState({name:"terms",formName:"signup",error:"",value:!1,section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Checkbox Options"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(r,{field:n,label:"Accept Terms and Conditions",onChange:o}),e.jsx(r,{field:{...n,name:"newsletter"},label:"Subscribe to Newsletter",onChange:o}),e.jsx(r,{field:{...n,name:"notifications"},label:"Enable Notifications",onChange:o})]})]})}},m={render:()=>{const[n,o]=t.useState({primary:!0,secondary:!1,success:!0,danger:!1,warning:!0,info:!1}),i=(l,s)=>({name:l,formName:"demo",error:"",value:s,section:0,validate:{required:!0}}),a=l=>s=>{o(d=>({...d,[l]:s.value}))};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"CheckBox Colors"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(r,{field:i("primary",n.primary),label:"Primary",color:"primary",onChange:a("primary")}),e.jsx(r,{field:i("secondary",n.secondary),label:"Secondary",color:"secondary",onChange:a("secondary")}),e.jsx(r,{field:i("success",n.success),label:"Success",color:"success",onChange:a("success")}),e.jsx(r,{field:i("danger",n.danger),label:"Danger",color:"danger",onChange:a("danger")}),e.jsx(r,{field:i("warning",n.warning),label:"Warning",color:"warning",onChange:a("warning")}),e.jsx(r,{field:i("info",n.info),label:"Info",color:"info",onChange:a("info")})]})]})}},h={render:()=>{const[n,o]=t.useState({sm:!0,md:!1,lg:!0}),i=(l,s)=>({name:l,formName:"demo",error:"",value:s,section:0,validate:{required:!0}}),a=l=>s=>{o(d=>({...d,[l]:s.value}))};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"CheckBox Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{field:i("sm",n.sm),label:"Small",size:"sm",color:"primary",onChange:a("sm")}),e.jsx(r,{field:i("md",n.md),label:"Medium",size:"md",color:"primary",onChange:a("md")}),e.jsx(r,{field:i("lg",n.lg),label:"Large",size:"lg",color:"primary",onChange:a("lg")})]})]})}},u={render:()=>{const[n,o]=t.useState({name:"disabled",formName:"demo",error:"",value:!0,section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Disabled CheckBox"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(r,{field:n,label:"Checked & Disabled",color:"primary",disabled:!0,onChange:o}),e.jsx(r,{field:{...n,value:!1},label:"Unchecked & Disabled",color:"primary",disabled:!0,onChange:o})]})]})}},g={render:()=>{const[n,o]=t.useState({notifications:!0,darkMode:!1,autoSave:!0,publicProfile:!1}),i=(l,s)=>({name:l,formName:"settings",error:"",value:s,section:0,validate:{required:!1}}),a=l=>s=>{o(d=>({...d,[l]:s.value}))};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Switch Variants"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(r,{field:i("notifications",n.notifications),label:"Push Notifications",color:"primary",isSwitch:!0,onChange:a("notifications")}),e.jsx(r,{field:i("darkMode",n.darkMode),label:"Dark Mode",color:"secondary",isSwitch:!0,onChange:a("darkMode")}),e.jsx(r,{field:i("autoSave",n.autoSave),label:"Auto Save",color:"success",isSwitch:!0,onChange:a("autoSave")}),e.jsx(r,{field:i("publicProfile",n.publicProfile),label:"Public Profile",color:"warning",isSwitch:!0,onChange:a("publicProfile")})]})]})}},f={render:()=>{const[n,o]=t.useState({sm:!0,md:!1,lg:!0}),i=(l,s)=>({name:l,formName:"demo",error:"",value:s,section:0,validate:{required:!1}}),a=l=>s=>{o(d=>({...d,[l]:s.value}))};return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Switch Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{field:i("sm",n.sm),label:"Small",size:"sm",color:"primary",isSwitch:!0,onChange:a("sm")}),e.jsx(r,{field:i("md",n.md),label:"Medium",size:"md",color:"primary",isSwitch:!0,onChange:a("md")}),e.jsx(r,{field:i("lg",n.lg),label:"Large",size:"lg",color:"primary",isSwitch:!0,onChange:a("lg")})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [termsField, setTermsField] = useState<FormFieldProps>({
      name: "terms",
      formName: "signup",
      error: "",
      value: false,
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Checkbox Options</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <CheckBox field={termsField} label="Accept Terms and Conditions" onChange={setTermsField} />
          <CheckBox field={{
          ...termsField,
          name: "newsletter"
        }} label="Subscribe to Newsletter" onChange={setTermsField} />
          <CheckBox field={{
          ...termsField,
          name: "notifications"
        }} label="Enable Notifications" onChange={setTermsField} />
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [colorFields, setColorFields] = useState({
      primary: true,
      secondary: false,
      success: true,
      danger: false,
      warning: true,
      info: false
    });
    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "demo",
      error: "",
      value,
      section: 0,
      validate: {
        required: true
      }
    });
    const handleChange = (name: string) => (field: FormFieldProps) => {
      setColorFields(prev => ({
        ...prev,
        [name]: field.value
      }));
    };
    return <div style={{
      padding: "2rem"
    }}>
        <h4>CheckBox Colors</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <CheckBox field={createField("primary", colorFields.primary)} label="Primary" color="primary" onChange={handleChange("primary")} />
          <CheckBox field={createField("secondary", colorFields.secondary)} label="Secondary" color="secondary" onChange={handleChange("secondary")} />
          <CheckBox field={createField("success", colorFields.success)} label="Success" color="success" onChange={handleChange("success")} />
          <CheckBox field={createField("danger", colorFields.danger)} label="Danger" color="danger" onChange={handleChange("danger")} />
          <CheckBox field={createField("warning", colorFields.warning)} label="Warning" color="warning" onChange={handleChange("warning")} />
          <CheckBox field={createField("info", colorFields.info)} label="Info" color="info" onChange={handleChange("info")} />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sizeFields, setSizeFields] = useState({
      sm: true,
      md: false,
      lg: true
    });
    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "demo",
      error: "",
      value,
      section: 0,
      validate: {
        required: true
      }
    });
    const handleChange = (name: string) => (field: FormFieldProps) => {
      setSizeFields(prev => ({
        ...prev,
        [name]: field.value
      }));
    };
    return <div style={{
      padding: "2rem"
    }}>
        <h4>CheckBox Sizes</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}>
          <CheckBox field={createField("sm", sizeFields.sm)} label="Small" size="sm" color="primary" onChange={handleChange("sm")} />
          <CheckBox field={createField("md", sizeFields.md)} label="Medium" size="md" color="primary" onChange={handleChange("md")} />
          <CheckBox field={createField("lg", sizeFields.lg)} label="Large" size="lg" color="primary" onChange={handleChange("lg")} />
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [disabledField, setDisabledField] = useState<FormFieldProps>({
      name: "disabled",
      formName: "demo",
      error: "",
      value: true,
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Disabled CheckBox</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <CheckBox field={disabledField} label="Checked & Disabled" color="primary" disabled={true} onChange={setDisabledField} />
          <CheckBox field={{
          ...disabledField,
          value: false
        }} label="Unchecked & Disabled" color="primary" disabled={true} onChange={setDisabledField} />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [switchFields, setSwitchFields] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      publicProfile: false
    });
    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "settings",
      error: "",
      value,
      section: 0,
      validate: {
        required: false
      }
    });
    const handleChange = (name: string) => (field: FormFieldProps) => {
      setSwitchFields(prev => ({
        ...prev,
        [name]: field.value
      }));
    };
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Switch Variants</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <CheckBox field={createField("notifications", switchFields.notifications)} label="Push Notifications" color="primary" isSwitch={true} onChange={handleChange("notifications")} />
          <CheckBox field={createField("darkMode", switchFields.darkMode)} label="Dark Mode" color="secondary" isSwitch={true} onChange={handleChange("darkMode")} />
          <CheckBox field={createField("autoSave", switchFields.autoSave)} label="Auto Save" color="success" isSwitch={true} onChange={handleChange("autoSave")} />
          <CheckBox field={createField("publicProfile", switchFields.publicProfile)} label="Public Profile" color="warning" isSwitch={true} onChange={handleChange("publicProfile")} />
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sizeFields, setSizeFields] = useState({
      sm: true,
      md: false,
      lg: true
    });
    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "demo",
      error: "",
      value,
      section: 0,
      validate: {
        required: false
      }
    });
    const handleChange = (name: string) => (field: FormFieldProps) => {
      setSizeFields(prev => ({
        ...prev,
        [name]: field.value
      }));
    };
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Switch Sizes</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}>
          <CheckBox field={createField("sm", sizeFields.sm)} label="Small" size="sm" color="primary" isSwitch={true} onChange={handleChange("sm")} />
          <CheckBox field={createField("md", sizeFields.md)} label="Medium" size="md" color="primary" isSwitch={true} onChange={handleChange("md")} />
          <CheckBox field={createField("lg", sizeFields.lg)} label="Large" size="lg" color="primary" isSwitch={true} onChange={handleChange("lg")} />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const k=["Default","Colors","Sizes","Disabled","Switch","SwitchSizes"];export{m as Colors,c as Default,u as Disabled,h as Sizes,g as Switch,f as SwitchSizes,k as __namedExportsOrder,w as default};
