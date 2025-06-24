import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./ScrollBar-V8uTD4Wh.js";import"./classnames-helper-C6tUBjOJ.js";const A={title:"Common/ScrollBar",component:n,tags:["autodocs"],args:{axis:"vertical",variant:"grey",height:"200px",width:"300px"},argTypes:{axis:{control:"radio",options:["horizontal","vertical","both"]},variant:{control:"radio",options:["grey","light"]},height:{control:"text"},width:{control:"text"},children:{control:!1}}},f=r=>Array.from({length:r},(B,a)=>e.jsxs("p",{style:{margin:0,padding:"0.5rem"},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. #",a+1]},a)),t={args:{axis:"vertical"},render:r=>e.jsx(n,{...r,children:f(20)})},s={args:{axis:"horizontal",height:"120px"},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{display:"flex",gap:"2rem",width:"1000px"},children:Array.from({length:10},(B,a)=>e.jsxs("div",{style:{minWidth:"100px",padding:"1rem",background:"#dee2e6",borderRadius:"0.25rem",textAlign:"center"},children:["Box ",a+1]},a))})})},o={args:{axis:"both",height:"200px",width:"400px"},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{width:"800px",height:"400px",background:"#f8f9fa"},children:e.jsx("p",{style:{padding:"1rem"},children:"Scroll me both ways! 👀"})})})},i={args:{variant:"light",axis:"vertical"},render:r=>e.jsx(n,{...r,children:f(15)})};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    axis: "vertical"
  },
  render: args => <ScrollBar {...args}>{generateParagraphs(20)}</ScrollBar>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,p,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,x,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var y,v,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "light",
    axis: "vertical"
  },
  render: args => <ScrollBar {...args}>{generateParagraphs(15)}</ScrollBar>
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const k=["Vertical","Horizontal","BothAxes","LightTheme"];export{o as BothAxes,s as Horizontal,i as LightTheme,t as Vertical,k as __namedExportsOrder,A as default};
