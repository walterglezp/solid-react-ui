import{r as s,j as e}from"./iframe-uRyd9Bza.js";import{M as T}from"./ModalDialog-MVt3T24d.js";import{I as S}from"./Icon-BCBBvEMd.js";import{g as A}from"./classnames-helper-C6tUBjOJ.js";const C=({images:r,isOpen:i,onClose:a,initialIndex:o=0,className:l,altText:c,showCounter:d=!0,showNavigation:h=!0,enableKeyboardNavigation:g=!0})=>{const[t,u]=s.useState(o);s.useEffect(()=>{u(o)},[o,r]),s.useEffect(()=>{t>=r.length?u(Math.max(0,r.length-1)):t<0&&u(0)},[t,r.length]);const V=s.useCallback(()=>{r.length>1&&u(m=>(m+1)%r.length)},[r.length]),N=s.useCallback(()=>{r.length>1&&u(m=>(m-1+r.length)%r.length)},[r.length]);if(s.useEffect(()=>{if(!i||!g)return;const m=w=>{switch(w.key){case"ArrowLeft":w.preventDefault(),N();break;case"ArrowRight":w.preventDefault(),V();break;case"Escape":w.preventDefault(),a();break}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i,g,N,V,a]),!i||r.length===0)return null;const _=r[t],M=Array.isArray(c)?c[t]||`Image ${t+1}`:c||`Image ${t+1}`,E=A({"image-viewer":!0,[l??""]:!!l}),k=r.length>1;return e.jsx(T,{className:E,isOpen:i,size:"xl",onClose:a,children:e.jsxs("div",{className:"image-viewer__content",children:[k&&h&&e.jsx("button",{className:"image-viewer__nav image-viewer__nav--previous",onClick:N,"aria-label":"Previous image",children:e.jsx(S,{name:"chevron-left",size:24})}),e.jsx("div",{className:"image-viewer__image-container",children:e.jsx("img",{src:_,alt:M,className:"image-viewer__image"})}),k&&h&&e.jsx("button",{className:"image-viewer__nav image-viewer__nav--next",onClick:V,"aria-label":"Next image",children:e.jsx(S,{name:"chevron-right",size:24})}),k&&d&&e.jsxs("div",{className:"image-viewer__counter",children:[t+1," of ",r.length]}),e.jsx("button",{className:"image-viewer__close",onClick:a,"aria-label":"Close image viewer",children:e.jsx(S,{name:"x",size:20})})]})})};C.__docgenInfo={description:"",methods:[],displayName:"ImageViewer",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of image URLs to display"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the viewer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the viewer is closed"},initialIndex:{required:!1,tsType:{name:"number"},description:"Initial image index to display",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},altText:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Alt text for images (can be array or single string)"},showCounter:{required:!1,tsType:{name:"boolean"},description:'Show image counter (e.g., "1 of 5")',defaultValue:{value:"true",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"Show navigation arrows",defaultValue:{value:"true",computed:!1}},enableKeyboardNavigation:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"true",computed:!1}}}};const U={title:"Graphics/ImageViewer",component:C,tags:["autodocs"],parameters:{docs:{description:{component:"A modal image viewer with navigation controls for displaying single or multiple images in a gallery format."}}},argTypes:{images:{description:"Array of image URLs to display",control:{type:"object"}},isOpen:{description:"Whether the viewer is open",control:{type:"boolean"}},initialIndex:{description:"Initial image index to display",control:{type:"number"}},showCounter:{description:"Show image counter (e.g., '1 of 5')",control:{type:"boolean"}},showNavigation:{description:"Show navigation arrows",control:{type:"boolean"}},enableKeyboardNavigation:{description:"Enable keyboard navigation (arrow keys, escape)",control:{type:"boolean"}}}},n=["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"],q=[n[0]],p=({images:r,initialIndex:i=0,showCounter:a=!0,showNavigation:o=!0,enableKeyboardNavigation:l=!0})=>{const[c,d]=s.useState(!1);return e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>d(!0),style:{padding:"12px 24px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px"},children:["Open Image Viewer (",r.length," image",r.length!==1?"s":"",")"]}),e.jsx(C,{images:r,isOpen:c,onClose:()=>d(!1),initialIndex:i,showCounter:a,showNavigation:o,enableKeyboardNavigation:l})]})},x={render:()=>e.jsx(p,{images:q}),parameters:{docs:{description:{story:"ImageViewer with a single image. Navigation controls are hidden when there's only one image."}}}},f={render:()=>e.jsx(p,{images:n}),parameters:{docs:{description:{story:"ImageViewer with multiple images. Use navigation arrows or keyboard (left/right arrows) to navigate between images."}}}},y={render:()=>e.jsx(p,{images:n,initialIndex:2}),parameters:{docs:{description:{story:"ImageViewer starting from a specific image index (3rd image in this example)."}}}},v={render:()=>e.jsx(p,{images:n,showCounter:!1}),parameters:{docs:{description:{story:"ImageViewer with the counter hidden."}}}},b={render:()=>e.jsx(p,{images:n,showNavigation:!1}),parameters:{docs:{description:{story:"ImageViewer with navigation arrows hidden. Users can still navigate with keyboard arrows."}}}},I={render:()=>e.jsx(p,{images:n,showCounter:!1,showNavigation:!1,enableKeyboardNavigation:!1}),parameters:{docs:{description:{story:"Minimal ImageViewer with all navigation controls disabled."}}}},R=()=>{const[r,i]=s.useState(!1),[a,o]=s.useState(n.slice(0,3)),[l,c]=s.useState(0),d=()=>{a.length<n.length&&o([...a,n[a.length]])},h=()=>{a.length>1&&o(a.slice(0,-1))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx("button",{onClick:()=>i(!0),style:{padding:"12px 24px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Open Viewer"}),e.jsx("button",{onClick:d,disabled:a.length>=n.length,style:{padding:"8px 16px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",opacity:a.length>=n.length?.5:1},children:"Add Image"}),e.jsx("button",{onClick:h,disabled:a.length<=1,style:{padding:"8px 16px",backgroundColor:"#dc3545",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",opacity:a.length<=1?.5:1},children:"Remove Image"}),e.jsxs("span",{children:["Images: ",a.length]})]}),e.jsx("div",{children:e.jsxs("label",{children:["Start Index:",e.jsx("input",{type:"number",min:0,max:a.length-1,value:l,onChange:g=>c(Math.max(0,Math.min(a.length-1,parseInt(g.target.value)||0))),style:{marginLeft:"8px",padding:"4px",width:"60px"}})]})}),e.jsx(C,{images:a,isOpen:r,onClose:()=>i(!1),initialIndex:l,altText:a.map((g,t)=>`Nature Image ${t+1}`)})]})},j={render:()=>e.jsx(R,{}),parameters:{docs:{description:{story:"Interactive example showing dynamic image management and controlled props."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={singleImage} />,
  parameters: {
    docs: {
      description: {
        story: "ImageViewer with a single image. Navigation controls are hidden when there's only one image."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={sampleImages} />,
  parameters: {
    docs: {
      description: {
        story: "ImageViewer with multiple images. Use navigation arrows or keyboard (left/right arrows) to navigate between images."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={sampleImages} initialIndex={2} />,
  parameters: {
    docs: {
      description: {
        story: "ImageViewer starting from a specific image index (3rd image in this example)."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={sampleImages} showCounter={false} />,
  parameters: {
    docs: {
      description: {
        story: "ImageViewer with the counter hidden."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={sampleImages} showNavigation={false} />,
  parameters: {
    docs: {
      description: {
        story: "ImageViewer with navigation arrows hidden. Users can still navigate with keyboard arrows."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ImageViewerWrapper images={sampleImages} showCounter={false} showNavigation={false} enableKeyboardNavigation={false} />,
  parameters: {
    docs: {
      description: {
        story: "Minimal ImageViewer with all navigation controls disabled."
      }
    }
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing dynamic image management and controlled props."
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const z=["SingleImage","MultipleImages","StartFromMiddle","NoCounter","NoNavigation","MinimalViewer","ControlledViewer"];export{j as ControlledViewer,I as MinimalViewer,f as MultipleImages,v as NoCounter,b as NoNavigation,x as SingleImage,y as StartFromMiddle,z as __namedExportsOrder,U as default};
