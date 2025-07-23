import{g as U,T as s,j as e,t as l,l as g}from"./iframe-Btc7p_dI.js";import{B as a}from"./Button-DHymxSod.js";import{C as X}from"./Container-BT4D2WU1.js";import{R as Y,C as Z}from"./Column-DmiVCGS3.js";import"./classnames-helper-C6tUBjOJ.js";const $=(r,n)=>{var u,x,y,f,j,v,S,b,w,z,k,R,T,C,P,D,B,W;const o={...r,...n,colors:{...r.colors,...n.colors},colorShades:{...r.colorShades,...n.colorShades},typography:{...r.typography,...n.typography,fontFamily:{...r.typography.fontFamily,...(u=n.typography)==null?void 0:u.fontFamily},fontSize:{...r.typography.fontSize,...(x=n.typography)==null?void 0:x.fontSize},fontWeight:{...r.typography.fontWeight,...(y=n.typography)==null?void 0:y.fontWeight},lineHeight:{...r.typography.lineHeight,...(f=n.typography)==null?void 0:f.lineHeight},letterSpacing:{...r.typography.letterSpacing,...(j=n.typography)==null?void 0:j.letterSpacing}},spacing:{...r.spacing,...n.spacing},borderRadius:{...r.borderRadius,...n.borderRadius},shadows:{...r.shadows,...n.shadows},breakpoints:{...r.breakpoints,...n.breakpoints},zIndex:{...r.zIndex,...n.zIndex},transitions:{...r.transitions,...n.transitions,duration:{...r.transitions.duration,...(v=n.transitions)==null?void 0:v.duration},easing:{...r.transitions.easing,...(S=n.transitions)==null?void 0:S.easing}},components:{...r.components,...n.components,button:{...r.components.button,...(b=n.components)==null?void 0:b.button,sizes:{...r.components.button.sizes,...(z=(w=n.components)==null?void 0:w.button)==null?void 0:z.sizes},variants:{...r.components.button.variants,...(R=(k=n.components)==null?void 0:k.button)==null?void 0:R.variants}},input:{...r.components.input,...(T=n.components)==null?void 0:T.input,sizes:{...r.components.input.sizes,...(P=(C=n.components)==null?void 0:C.input)==null?void 0:P.sizes},states:{...r.components.input.states,...(B=(D=n.components)==null?void 0:D.input)==null?void 0:B.states}},card:{...r.components.card,...(W=n.components)==null?void 0:W.card}}};return["primary","secondary","success","info","warning","danger"].forEach(p=>{o.colorShades[p]||(o.colorShades[p]=U(o.colors[p]))}),o},te={title:"Theme/ThemeShowcase",component:s,parameters:{layout:"fullscreen"}},t=()=>e.jsx(X,{children:e.jsx(Y,{children:e.jsxs(Z,{children:[e.jsx("h2",{children:"Theme Showcase"}),e.jsx("p",{children:"This demonstrates the new theme system with enhanced customization."}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{children:"Colors"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"danger",children:"Danger"})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{children:"Typography"}),e.jsxs("div",{style:{fontFamily:"var(--theme-font-family-base)",color:"var(--theme-text)"},children:[e.jsx("h1",{style:{fontSize:"var(--theme-font-size-4xl)",margin:"0 0 1rem 0"},children:"Heading 1"}),e.jsx("h2",{style:{fontSize:"var(--theme-font-size-3xl)",margin:"0 0 1rem 0"},children:"Heading 2"}),e.jsx("p",{style:{fontSize:"var(--theme-font-size-base)",margin:"0 0 1rem 0"},children:"Body text with base font size"}),e.jsx("p",{style:{fontSize:"var(--theme-font-size-sm)",color:"var(--theme-text-secondary)",margin:"0 0 1rem 0"},children:"Secondary text with smaller font size"})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{children:"Spacing & Layout"}),e.jsxs("div",{style:{display:"flex",gap:"var(--theme-spacing-4)"},children:[e.jsx("div",{style:{padding:"var(--theme-spacing-4)",background:"var(--theme-surface)",borderRadius:"var(--theme-border-radius-md)",border:"1px solid var(--theme-border)"},children:"Card with theme spacing"}),e.jsx("div",{style:{padding:"var(--theme-spacing-6)",background:"var(--theme-surface)",borderRadius:"var(--theme-border-radius-lg)",border:"1px solid var(--theme-border)"},children:"Card with larger spacing"})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{children:"Shadows"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx("div",{style:{padding:"1rem",background:"var(--theme-background)",borderRadius:"var(--theme-border-radius-md)",boxShadow:"var(--theme-shadow-sm)"},children:"Small shadow"}),e.jsx("div",{style:{padding:"1rem",background:"var(--theme-background)",borderRadius:"var(--theme-border-radius-md)",boxShadow:"var(--theme-shadow-md)"},children:"Medium shadow"}),e.jsx("div",{style:{padding:"1rem",background:"var(--theme-background)",borderRadius:"var(--theme-border-radius-md)",boxShadow:"var(--theme-shadow-lg)"},children:"Large shadow"})]})]})]})})}),i={args:{theme:l.light},render:r=>e.jsx(s,{...r,children:e.jsx(t,{})})},d={args:{theme:l.dark},render:r=>e.jsx(s,{...r,children:e.jsx(t,{})})},m={args:{theme:l.corporate},render:r=>e.jsx(s,{...r,children:e.jsx(t,{})})},c={args:{theme:l.minimal},render:r=>e.jsx(s,{...r,children:e.jsx(t,{})})},h={args:{theme:$(g,{colors:{...g.colors,primary:"#9333ea",secondary:"#64748b",success:"#10b981",background:"#fafafa",surface:"#ffffff"},borderRadius:{...g.borderRadius,base:"1rem",md:"1.25rem",lg:"1.5rem"}})},render:r=>e.jsx(s,{...r,children:e.jsx(t,{})})};var H,I,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    theme: themes.light
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var F,M,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    theme: themes.dark
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var V,_,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    theme: themes.corporate
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,A,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    theme: themes.minimal
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    theme: createTheme(lightTheme, {
      colors: {
        ...lightTheme.colors,
        primary: '#9333ea',
        secondary: '#64748b',
        success: '#10b981',
        background: '#fafafa',
        surface: '#ffffff'
      },
      borderRadius: {
        ...lightTheme.borderRadius,
        base: '1rem',
        md: '1.25rem',
        lg: '1.5rem'
      }
    })
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const oe=["LightTheme","DarkTheme","CorporateTheme","MinimalTheme","CustomTheme"];export{m as CorporateTheme,h as CustomTheme,d as DarkTheme,i as LightTheme,c as MinimalTheme,oe as __namedExportsOrder,te as default};
