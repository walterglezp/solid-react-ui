import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-BrzKnVn_.js";import{R as a}from"./Radio-BzBOatXR.js";import"./uuid-Cs3Zzn0-.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Dk7fbBIA.js";const h={title:"Form/Radio",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:[!1,"primary","secondary","success","danger","warning","info","light","dark","link"]},btnSize:{control:"radio",options:["sm","md","lg"]}}},r={render:()=>{const[n,d]=i.useState({name:"gender",formName:"signup",error:"",value:"male",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Select Gender"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(a,{field:n,checkedValue:"male",label:"Male",variant:!1,btnSize:"sm",onChange:d}),e.jsx(a,{field:n,checkedValue:"female",label:"Female",variant:"danger",btnSize:"sm",onChange:d}),e.jsx(a,{field:n,checkedValue:"other",label:"Other",variant:"success",btnSize:"sm",onChange:d})]})]})}};var t,l,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    }}>\r
        <h4>Select Gender</h4>\r
        <div className="d-flex gap-2">\r
          <Radio field={genderField} checkedValue="male" label="Male" variant={false} btnSize="sm" onChange={setGenderField} />\r
          <Radio field={genderField} checkedValue="female" label="Female" variant="danger" btnSize="sm" onChange={setGenderField} />\r
          <Radio field={genderField} checkedValue="other" label="Other" variant="success" btnSize="sm" onChange={setGenderField} />\r
        </div>\r
      </div>;
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,h as default};
