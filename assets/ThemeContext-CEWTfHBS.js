import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-D2js7Dxf.js";const m=(n,e=.2)=>{const r=parseInt(n.replace("#",""),16),t=Math.round(2.55*e*100),i=Math.max(0,(r>>16)-t),d=Math.max(0,(r>>8&255)-t),c=Math.max(0,(r&255)-t);return`#${(1<<24|i<<16|d<<8|c).toString(16).slice(1)}`},s={name:"light",borderRadius:"1rem",focusBorderColor:"#bec4c9",focusBorderThickness:"1px",primary:"#4d6bfe",secondary:"#6c757d",success:"#198754",info:"#0dcaf0",warning:"#ffc107",danger:"#dc3545"},a=o.createContext(s),y=({children:n,value:e=s})=>(o.useEffect(()=>{const r=document.documentElement;r.style.setProperty("--bs-border-radius",e.borderRadius),r.style.setProperty("--bs-border-radius-sm",e.borderRadiusSm??e.borderRadius),r.style.setProperty("--bs-border-radius-lg",e.borderRadiusLg??e.borderRadius),r.style.setProperty("--focus-border-color",e.focusBorderColor),r.style.setProperty("--focus-border-thickness",e.focusBorderThickness),r.style.setProperty("--bs-primary",e.primary??s.primary??""),r.style.setProperty("--bs-secondary",e.secondary??s.secondary??""),r.style.setProperty("--bs-success",e.success??s.success??""),r.style.setProperty("--bs-info",e.info??s.info??""),r.style.setProperty("--bs-warning",e.warning??s.warning??""),r.style.setProperty("--bs-danger",e.danger??s.danger??""),r.style.setProperty("--bs-btn-bg",e.primary??s.primary??""),r.style.setProperty("--bs-btn-border-color",e.primary??s.primary??""),r.style.setProperty("--bs-btn-hover-bg",m(e.primary??s.primary??""))},[e]),u.jsx(a.Provider,{value:e,children:n})),p=()=>o.useContext(a);y.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: ThemeName;
  borderRadius: string;
  borderRadiusSm?: string;
  borderRadiusLg?: string;
  focusBorderColor: string;
  focusBorderThickness: string;
  primary?: string;
  secondary?: string;
  success?: string;
  info?: string;
  warning?: string;
  danger?: string;
}`,signature:{properties:[{key:"name",value:{name:"union",raw:'"light" | "dark" | "dark-thin" | "custom"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"dark-thin"'},{name:"literal",value:'"custom"'}],required:!0}},{key:"borderRadius",value:{name:"string",required:!0}},{key:"borderRadiusSm",value:{name:"string",required:!1}},{key:"borderRadiusLg",value:{name:"string",required:!1}},{key:"focusBorderColor",value:{name:"string",required:!0}},{key:"focusBorderThickness",value:{name:"string",required:!0}},{key:"primary",value:{name:"string",required:!1}},{key:"secondary",value:{name:"string",required:!1}},{key:"success",value:{name:"string",required:!1}},{key:"info",value:{name:"string",required:!1}},{key:"warning",value:{name:"string",required:!1}},{key:"danger",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  name: "light",
  borderRadius: "1rem",
  focusBorderColor: "#bec4c9",
  focusBorderThickness: "1px",
  primary: "#4d6bfe",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
}`,computed:!1}}}};export{y as T,s as d,p as u};
