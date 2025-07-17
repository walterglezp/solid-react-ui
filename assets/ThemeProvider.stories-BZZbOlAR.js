import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-D2js7Dxf.js";import{d as l,T as i}from"./ThemeContext-CEWTfHBS.js";import{B as o}from"./Button-BEFhO4Oy.js";import"./classnames-helper-C6tUBjOJ.js";const j={title:"Theme/ThemeProvider",component:i,tags:["autodocs"],args:{value:l},argTypes:{value:{control:!1},children:{control:!1}}},r={render:u=>{var a;const[m,d]=p.useState(((a=u.value)==null?void 0:a.borderRadius)??"0.25rem");return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("label",{className:"form-label mb-2",children:"Border Radius"}),e.jsxs("select",{className:"form-select mb-3 w-auto",value:m,onChange:c=>d(c.target.value),children:[e.jsx("option",{value:"0rem",children:"None"}),e.jsx("option",{value:"0.25rem",children:"Small (4px)"}),e.jsx("option",{value:"0.375rem",children:"Medium (6px)"}),e.jsx("option",{value:"0.5rem",children:"Large (8px)"}),e.jsx("option",{value:"1rem",children:"Extra Large (16px)"})]}),e.jsxs(i,{value:l,children:[e.jsx(o,{variant:"primary",children:"Primary Button"})," ",e.jsx(o,{variant:"success",children:"Success Button"})]})]})}};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [radius, setRadius] = useState(args.value?.borderRadius ?? "0.25rem");
    return <div style={{
      padding: "2rem"
    }}>
        <label className="form-label mb-2">Border Radius</label>
        <select className="form-select mb-3 w-auto" value={radius} onChange={e => setRadius(e.target.value)}>
          <option value="0rem">None</option>
          <option value="0.25rem">Small (4px)</option>
          <option value="0.375rem">Medium (6px)</option>
          <option value="0.5rem">Large (8px)</option>
          <option value="1rem">Extra Large (16px)</option>
        </select>

        <ThemeProvider value={defaultThemeValue}>
          <Button variant="primary">Primary Button</Button>{" "}
          <Button variant="success">Success Button</Button>
        </ThemeProvider>
      </div>;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const B=["RadiusDemo"];export{r as RadiusDemo,B as __namedExportsOrder,j as default};
