import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-Dpetp53f.js";import{T as u}from"./ThemeContext-CtVk02Hb.js";import{B as s}from"./Button-BEFhO4Oy.js";import"./classnames-helper-C6tUBjOJ.js";const R={title:"Theme/ThemeProvider",component:u,tags:["autodocs"],args:{value:{name:"light",borderRadius:"0.25rem"}},argTypes:{value:{control:!1},children:{control:!1}}},r={render:a=>{var o,n;const[t,d]=v.useState(((o=a.value)==null?void 0:o.borderRadius)??"0.25rem"),c=((n=a.value)==null?void 0:n.name)??"light";return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("label",{className:"form-label mb-2",children:"Border Radius"}),e.jsxs("select",{className:"form-select mb-3 w-auto",value:t,onChange:p=>d(p.target.value),children:[e.jsx("option",{value:"0rem",children:"None"}),e.jsx("option",{value:"0.25rem",children:"Small (4px)"}),e.jsx("option",{value:"0.375rem",children:"Medium (6px)"}),e.jsx("option",{value:"0.5rem",children:"Large (8px)"}),e.jsx("option",{value:"1rem",children:"Extra Large (16px)"})]}),e.jsxs(u,{value:{name:c,borderRadius:t},children:[e.jsx(s,{variant:"primary",children:"Primary Button"})," ",e.jsx(s,{variant:"success",children:"Success Button"})]})]})}};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [radius, setRadius] = useState(args.value?.borderRadius ?? "0.25rem");
    const themeName = args.value?.name ?? "light";
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

        <ThemeProvider value={{
        name: themeName as ThemeName,
        borderRadius: radius
      }}>
          <Button variant="primary">Primary Button</Button>{" "}
          <Button variant="success">Success Button</Button>
        </ThemeProvider>
      </div>;
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["RadiusDemo"];export{r as RadiusDemo,B as __namedExportsOrder,R as default};
