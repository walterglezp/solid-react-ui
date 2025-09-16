import{r as s,j as e}from"./iframe-cc5ZmNpn.js";import{R as n}from"./Radio-j7r25wq-.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";const p={title:"Form/Radio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},a={render:()=>{const[l,r]=s.useState({name:"gender",formName:"signup",error:"",value:"male",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Select Gender"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(n,{field:l,checkedValue:"male",label:"Male",onChange:r}),e.jsx(n,{field:l,checkedValue:"female",label:"Female",onChange:r}),e.jsx(n,{field:l,checkedValue:"other",label:"Other",onChange:r})]})]})}},d={render:()=>{const[l,r]=s.useState({name:"color",formName:"demo",error:"",value:"primary",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Radio Colors"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(n,{field:l,checkedValue:"primary",label:"Primary",color:"primary",onChange:r}),e.jsx(n,{field:l,checkedValue:"secondary",label:"Secondary",color:"secondary",onChange:r}),e.jsx(n,{field:l,checkedValue:"success",label:"Success",color:"success",onChange:r}),e.jsx(n,{field:l,checkedValue:"danger",label:"Danger",color:"danger",onChange:r}),e.jsx(n,{field:l,checkedValue:"warning",label:"Warning",color:"warning",onChange:r}),e.jsx(n,{field:l,checkedValue:"info",label:"Info",color:"info",onChange:r})]})]})}},i={render:()=>{const[l,r]=s.useState({name:"size",formName:"demo",error:"",value:"sm",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Radio Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(n,{field:l,checkedValue:"sm",label:"Small",size:"sm",color:"primary",onChange:r}),e.jsx(n,{field:l,checkedValue:"md",label:"Medium",size:"md",color:"primary",onChange:r}),e.jsx(n,{field:l,checkedValue:"lg",label:"Large",size:"lg",color:"primary",onChange:r})]})]})}},o={render:()=>{const[l,r]=s.useState({name:"disabled",formName:"demo",error:"",value:"option1",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Disabled Radio Buttons"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(n,{field:l,checkedValue:"option1",label:"Selected & Disabled",color:"primary",disabled:!0,onChange:r}),e.jsx(n,{field:l,checkedValue:"option2",label:"Unselected & Disabled",color:"primary",disabled:!0,onChange:r})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "signup",
      error: "",
      value: "male",
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Select Gender</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <Radio field={genderField} checkedValue="male" label="Male" onChange={setGenderField} />
          <Radio field={genderField} checkedValue="female" label="Female" onChange={setGenderField} />
          <Radio field={genderField} checkedValue="other" label="Other" onChange={setGenderField} />
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [colorField, setColorField] = useState<FormFieldProps>({
      name: "color",
      formName: "demo",
      error: "",
      value: "primary",
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Radio Colors</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <Radio field={colorField} checkedValue="primary" label="Primary" color="primary" onChange={setColorField} />
          <Radio field={colorField} checkedValue="secondary" label="Secondary" color="secondary" onChange={setColorField} />
          <Radio field={colorField} checkedValue="success" label="Success" color="success" onChange={setColorField} />
          <Radio field={colorField} checkedValue="danger" label="Danger" color="danger" onChange={setColorField} />
          <Radio field={colorField} checkedValue="warning" label="Warning" color="warning" onChange={setColorField} />
          <Radio field={colorField} checkedValue="info" label="Info" color="info" onChange={setColorField} />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sizeField, setSizeField] = useState<FormFieldProps>({
      name: "size",
      formName: "demo",
      error: "",
      value: "sm",
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Radio Sizes</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}>
          <Radio field={sizeField} checkedValue="sm" label="Small" size="sm" color="primary" onChange={setSizeField} />
          <Radio field={sizeField} checkedValue="md" label="Medium" size="md" color="primary" onChange={setSizeField} />
          <Radio field={sizeField} checkedValue="lg" label="Large" size="lg" color="primary" onChange={setSizeField} />
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [disabledField, setDisabledField] = useState<FormFieldProps>({
      name: "disabled",
      formName: "demo",
      error: "",
      value: "option1",
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      padding: "2rem"
    }}>
        <h4>Disabled Radio Buttons</h4>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column"
      }}>
          <Radio field={disabledField} checkedValue="option1" label="Selected & Disabled" color="primary" disabled={true} onChange={setDisabledField} />
          <Radio field={disabledField} checkedValue="option2" label="Unselected & Disabled" color="primary" disabled={true} onChange={setDisabledField} />
        </div>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","Colors","Sizes","Disabled"];export{d as Colors,a as Default,o as Disabled,i as Sizes,g as __namedExportsOrder,p as default};
