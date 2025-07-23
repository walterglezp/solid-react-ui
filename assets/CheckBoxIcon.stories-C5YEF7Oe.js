import{j as n,r as d}from"./iframe-Btc7p_dI.js";import{C as l}from"./CheckBoxIcon-g8Kytmet.js";import"./classnames-helper-C6tUBjOJ.js";import"./validation-helper-Bjp8riig.js";const g={title:"Form/CheckBoxIcon",component:l,tags:["autodocs"],args:{title:"Toggle Option",inline:!1},argTypes:{field:{control:!1},onChange:{control:!1},children:{control:!1}}},i=()=>{const[o,e]=d.useState({name:"icon-check",formName:"demo",value:!1,error:"",section:0,validate:{required:!0}});return[o,e]},r={render:o=>{const[e,c]=i();return n.jsx(l,{...o,field:e,onChange:c,children:n.jsx("span",{style:{padding:"0.75rem 1rem",backgroundColor:e.value?"#0d6efd":"#e9ecef",color:e.value?"#fff":"#000",borderRadius:"0.375rem",userSelect:"none",cursor:"pointer"},children:"Click Me"})})}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,g as default};
