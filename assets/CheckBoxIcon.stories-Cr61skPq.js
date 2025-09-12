import{j as n,r as a}from"./iframe-DzMUKr-y.js";import{C as s}from"./CheckBoxIcon-dLmrvjHh.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";const m={title:"Form/CheckBoxIcon",component:s,tags:["autodocs"],args:{title:"Toggle Option",inline:!1},argTypes:{field:{control:!1},onChange:{control:!1},children:{control:!1}}},l=()=>{const[o,e]=a.useState({name:"icon-check",formName:"demo",value:!1,error:"",section:0,validate:{required:!0}});return[o,e]},r={render:o=>{const[e,t]=l();return n.jsx(s,{...o,field:e,onChange:t,children:n.jsx("span",{style:{padding:"0.75rem 1rem",backgroundColor:e.value?"#0d6efd":"#e9ecef",color:e.value?"#fff":"#000",borderRadius:"0.375rem",userSelect:"none",cursor:"pointer"},children:"Click Me"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [field, setField] = useField();
    return <CheckBoxIcon {...args} field={field} onChange={setField}>
        <span style={{
        padding: "0.75rem 1rem",
        backgroundColor: field.value ? "#0d6efd" : "#e9ecef",
        color: field.value ? "#fff" : "#000",
        borderRadius: "0.375rem",
        userSelect: "none",
        cursor: "pointer"
      }}>
          Click Me
        </span>
      </CheckBoxIcon>;
  }
}`,...r.parameters?.docs?.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,m as default};
