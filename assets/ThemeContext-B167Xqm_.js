import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CUs4BiuB.js";const s={name:"light",borderRadius:"0.375rem"},d=t.createContext(s),o=({children:a,value:e=s})=>(t.useEffect(()=>{const r=document.documentElement;e.borderRadius&&(r.style.setProperty("--bs-border-radius",e.borderRadius),r.style.setProperty("--bs-border-radius-sm",e.borderRadiusSm??e.borderRadius),r.style.setProperty("--bs-border-radius-lg",e.borderRadiusLg??e.borderRadius))},[e.borderRadius,e.borderRadiusSm,e.borderRadiusLg]),i.jsx(d.Provider,{value:e,children:a})),m=()=>t.useContext(d);o.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: ThemeName;
  borderRadius: string;
  borderRadiusSm?: string;
  borderRadiusLg?: string;
}`,signature:{properties:[{key:"name",value:{name:"union",raw:'"light" | "dark" | "dark-thin" | "custom"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"dark-thin"'},{name:"literal",value:'"custom"'}],required:!0}},{key:"borderRadius",value:{name:"string",required:!0}},{key:"borderRadiusSm",value:{name:"string",required:!1}},{key:"borderRadiusLg",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  name: "light",
  borderRadius: "0.375rem", // default 6px
}`,computed:!1}}}};export{o as T,m as u};
