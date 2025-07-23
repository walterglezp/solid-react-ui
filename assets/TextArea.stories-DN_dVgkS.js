import{r as d,j as r}from"./iframe-Btc7p_dI.js";import{T as i}from"./TextArea-DZjPyQOf.js";import"./classnames-helper-C6tUBjOJ.js";import"./InputError-DveFmxaA.js";import"./Icon-BYjfzI_Q.js";import"./Flex-BpYkVn-f.js";import"./validation-helper-Bjp8riig.js";const v={title:"Form/TextArea",component:i,tags:["autodocs"]},e={render:()=>{const[n,s]=d.useState({name:"bio",formName:"profile",error:"",value:"",section:0,validate:{required:!0}});return r.jsx("div",{style:{maxWidth:"600px",padding:"2rem"},children:r.jsx(i,{label:"Bio",field:n,onChange:s,rows:5,cols:50,variant:"md"})})}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,v as default};
