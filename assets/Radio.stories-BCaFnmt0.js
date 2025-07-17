import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-D2js7Dxf.js";import{R as n}from"./Radio-B4FSbNbs.js";import"./uuid-helper-Cs3Zzn0-.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";const h={title:"Form/Radio",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:[!1,"primary","secondary","success","danger","warning","info","light","dark","link"]},btnSize:{control:"radio",options:["sm","md","lg"]}}},a={render:()=>{const[r,d]=i.useState({name:"gender",formName:"signup",error:"",value:"male",section:0,validate:{required:!0}});return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h4",{children:"Select Gender"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(n,{field:r,checkedValue:"male",label:"Male",variant:!1,btnSize:"sm",onChange:d}),e.jsx(n,{field:r,checkedValue:"female",label:"Female",variant:"danger",btnSize:"sm",onChange:d}),e.jsx(n,{field:r,checkedValue:"other",label:"Other",variant:"success",btnSize:"sm",onChange:d})]})]})}};var t,l,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        <div className="d-flex gap-2">
          <Radio field={genderField} checkedValue="male" label="Male" variant={false} btnSize="sm" onChange={setGenderField} />
          <Radio field={genderField} checkedValue="female" label="Female" variant="danger" btnSize="sm" onChange={setGenderField} />
          <Radio field={genderField} checkedValue="other" label="Other" variant="success" btnSize="sm" onChange={setGenderField} />
        </div>
      </div>;
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,h as default};
