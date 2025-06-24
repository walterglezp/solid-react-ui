import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-BrzKnVn_.js";import{I as s}from"./ImageDropZone-OVfHrPRk.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Dk7fbBIA.js";import"./Icon-BEhuKhOU.js";import"./InputError-X709TiMY.js";import"./Flex-lYRWHHvf.js";import"./ScrollBar-V8uTD4Wh.js";const I={title:"Form/ImageDropZone",component:s,tags:["autodocs"]},e={render:()=>{const[t,n]=i.useState({name:"images",formName:"sampleForm",error:"",section:0,validate:{required:!1},value:[]});return r.jsx("div",{style:{maxWidth:"100%",padding:"2rem"},children:r.jsx(s,{field:t,onChange:n,maxImages:6})})}};var a,m,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    }}>\r
        <ImageDropZone field={imagesField} onChange={setImagesField} maxImages={6} />\r
      </div>;
  }
}`,...(o=(m=e.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,I as default};
