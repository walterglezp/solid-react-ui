import{r as a,j as r}from"./iframe-CCjepWBu.js";import{T as o}from"./TextArea-fDROcruV.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./InputError-jIwtEdDA.js";import"./Icon-CVi0seOY.js";import"./Flex-BrdwESsa.js";import"./validation-helper-Bjp8riig.js";/* empty css              */const f={title:"Form/TextArea",component:o,tags:["autodocs"]},e={render:()=>{const[t,i]=a.useState({name:"bio",formName:"profile",error:"",value:"",section:0,validate:{required:!0}});return r.jsx("div",{style:{maxWidth:"600px",padding:"2rem"},children:r.jsx(o,{label:"Bio",field:t,onChange:i,rows:5,cols:50,variant:"md"})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [bioField, setBioField] = useState<FormFieldProps>({
      name: "bio",
      formName: "profile",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: true
      }
    });
    return <div style={{
      maxWidth: "600px",
      padding: "2rem"
    }}>
        <TextArea label="Bio" field={bioField} onChange={setBioField} rows={5} cols={50} variant="md" />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,f as default};
