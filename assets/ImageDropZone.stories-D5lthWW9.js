import{r as i,j as r}from"./iframe-Btc7p_dI.js";import{I as t}from"./ImageDropZone-HKTKYmwv.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";import"./Icon-BYjfzI_Q.js";import"./InputError-DveFmxaA.js";import"./Flex-BpYkVn-f.js";import"./ScrollBar-CfqWELZt.js";const F={title:"Form/ImageDropZone",component:t,tags:["autodocs"]},e={render:()=>{const[m,o]=i.useState({name:"images",formName:"sampleForm",error:"",section:0,validate:{required:!1},value:[]});return r.jsx("div",{style:{maxWidth:"100%",padding:"2rem"},children:r.jsx(t,{field:m,onChange:o,maxImages:6})})}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [imagesField, setImagesField] = useState<FormFieldProps & {
      value: string[];
    }>({
      name: "images",
      formName: "sampleForm",
      error: "",
      section: 0,
      validate: {
        required: false
      },
      value: []
    });
    return <div style={{
      maxWidth: "100%",
      padding: "2rem"
    }}>
        <ImageDropZone field={imagesField} onChange={setImagesField} maxImages={6} />
      </div>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,F as default};
