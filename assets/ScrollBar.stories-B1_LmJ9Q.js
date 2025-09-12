import{j as e}from"./iframe-CCjepWBu.js";import{S as n}from"./ScrollBar-BjwXsqoL.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";const m={title:"Common/ScrollBar",component:n,tags:["autodocs"],args:{axis:"vertical",variant:"grey",height:"200px",width:"300px"},argTypes:{axis:{control:"radio",options:["horizontal","vertical","both"]},variant:{control:"radio",options:["grey","light"]},height:{control:"text"},width:{control:"text"},children:{control:!1}}},l=r=>Array.from({length:r},(d,a)=>e.jsxs("p",{style:{margin:0,padding:"0.5rem"},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. #",a+1]},a)),t={args:{axis:"vertical"},render:r=>e.jsx(n,{...r,children:l(20)})},s={args:{axis:"horizontal",height:"120px"},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{display:"flex",gap:"2rem",width:"1000px"},children:Array.from({length:10},(d,a)=>e.jsxs("div",{style:{minWidth:"100px",padding:"1rem",background:"#dee2e6",borderRadius:"0.25rem",textAlign:"center"},children:["Box ",a+1]},a))})})},o={args:{axis:"both",height:"200px",width:"400px"},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{width:"800px",height:"400px",background:"#f8f9fa"},children:e.jsx("p",{style:{padding:"1rem"},children:"Scroll me both ways! 👀"})})})},i={args:{variant:"light",axis:"vertical"},render:r=>e.jsx(n,{...r,children:l(15)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    axis: "vertical"
  },
  render: args => <ScrollBar {...args}>{generateParagraphs(20)}</ScrollBar>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    axis: "horizontal",
    height: "120px"
  },
  render: args => <ScrollBar {...args}>
      <div style={{
      display: "flex",
      gap: "2rem",
      width: "1000px"
    }}>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} style={{
        minWidth: "100px",
        padding: "1rem",
        background: "#dee2e6",
        borderRadius: "0.25rem",
        textAlign: "center"
      }}>
            Box {i + 1}
          </div>)}
      </div>
    </ScrollBar>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    axis: "both",
    height: "200px",
    width: "400px"
  },
  render: args => <ScrollBar {...args}>
      <div style={{
      width: "800px",
      height: "400px",
      background: "#f8f9fa"
    }}>
        <p style={{
        padding: "1rem"
      }}>Scroll me both ways! 👀</p>
      </div>
    </ScrollBar>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "light",
    axis: "vertical"
  },
  render: args => <ScrollBar {...args}>{generateParagraphs(15)}</ScrollBar>
}`,...i.parameters?.docs?.source}}};const x=["Vertical","Horizontal","BothAxes","LightTheme"];export{o as BothAxes,s as Horizontal,i as LightTheme,t as Vertical,x as __namedExportsOrder,m as default};
