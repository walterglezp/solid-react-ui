import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{g as M}from"./classnames-helper-C6tUBjOJ.js";const f=({size:e="",className:s="",children:g,...x})=>{const v=M({container:e==="",[`container-${e}`]:e!==""&&e!=="fluid","container-fluid":e==="fluid",[s]:!!s});return h.jsx("div",{className:v,...x,children:g})};f.__docgenInfo={description:"",methods:[],displayName:"Container",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl" | "xxl" | "fluid" | ""',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xxl"'},{name:"literal",value:'"fluid"'},{name:"literal",value:'""'}]},description:"",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["HTMLAttributes"]};const D={title:"Layout/Container",component:f,tags:["autodocs"]},a={args:{children:"Default container"}},r={args:{size:"fluid",children:"Fluid container (100%)"}},n={args:{size:"md",children:"Medium container"}};var t,l,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Default container"
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var o,u,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: "fluid",
    children: "Fluid container (100%)"
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium container"
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const F=["Default","Fluid","Medium"];export{a as Default,r as Fluid,n as Medium,F as __namedExportsOrder,D as default};
