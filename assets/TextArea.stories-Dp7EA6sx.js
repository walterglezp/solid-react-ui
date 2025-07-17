import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-D2js7Dxf.js";import{T as a}from"./TextArea-Dgdkl0pQ.js";import"./classnames-helper-C6tUBjOJ.js";import"./InputError-DHuUm-6t.js";import"./Icon-Ci5RhWdH.js";import"./Flex-lYRWHHvf.js";import"./validation-helper-Bjp8riig.js";const F={title:"Form/TextArea",component:a,tags:["autodocs"]},e={render:()=>{const[n,s]=d.useState({name:"bio",formName:"profile",error:"",value:"",section:0,validate:{required:!0}});return r.jsx("div",{style:{maxWidth:"600px",padding:"2rem"},children:r.jsx(a,{label:"Bio",field:n,onChange:s,rows:5,cols:50,variant:"md"})})}};var o,t,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,F as default};
