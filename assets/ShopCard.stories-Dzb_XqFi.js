import{j as e}from"./iframe-DzMUKr-y.js";import{g as H}from"./classnames-helper-C6tUBjOJ.js";import{S as K}from"./StarRating-BJGy-lMI.js";import{B as T}from"./Badge-TkeHwFTw.js";import{I as B}from"./Icon-CpeLWG6P.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-DGdOx2Tq.js";const r=({className:y,image:A,imageAlt:_,title:W,salesCount:k,rating:b,reviewCount:j,price:S,originalPrice:w,discountPercentage:C,freeShipping:G=!1,topSale:N=!1,onClick:P,onAddToCart:v})=>{const F=H({"shop-card":!0,"shop-card--clickable":!!P,[`${y}`]:!!y}),x=f=>`$${f.toFixed(2)}`,q=f=>{f.stopPropagation(),v?.()};return e.jsxs("div",{className:F,onClick:P,children:[e.jsxs("div",{className:"shop-card__image-container",children:[e.jsx("img",{src:A,alt:_,className:"shop-card__image"}),G&&e.jsx(T,{variant:"success",size:"sm",className:"shop-card__free-shipping-badge",children:"Free shipping"}),N&&e.jsx(T,{variant:"warning",size:"sm",icon:"star",className:"shop-card__top-sale-badge",children:"Top Sale"})]}),e.jsxs("div",{className:"shop-card__content",children:[e.jsx("h3",{className:"shop-card__title",children:W}),e.jsx("p",{className:"shop-card__sales",children:k}),e.jsxs("div",{className:"shop-card__rating",children:[e.jsx(K,{rating:b,readonly:!0,size:"sm",compact:!0}),e.jsxs("span",{className:"shop-card__rating-text",children:[b.toFixed(1)," | ",j," sold"]})]}),e.jsxs("div",{className:"shop-card__pricing",children:[e.jsx("span",{className:"shop-card__current-price",children:x(S)}),w&&w>S&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"shop-card__original-price",children:x(w)}),C&&e.jsxs("span",{className:"shop-card__discount",children:["(-",C,"%)"]})]})]})]}),v&&e.jsx("button",{type:"button",className:"shop-card__add-to-cart-button",onClick:q,"aria-label":"Add to cart",children:e.jsx(B,{name:"plus",size:16})})]})};r.__docgenInfo={description:"",methods:[],displayName:"ShopCard",props:{className:{required:!1,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},imageAlt:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},salesCount:{required:!0,tsType:{name:"string"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},reviewCount:{required:!0,tsType:{name:"number"},description:""},price:{required:!0,tsType:{name:"number"},description:""},originalPrice:{required:!1,tsType:{name:"number"},description:""},discountPercentage:{required:!1,tsType:{name:"number"},description:""},freeShipping:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},topSale:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAddToCart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V={title:"Common/ShopCard",component:r,parameters:{layout:"centered",docs:{description:{component:`
A product card component designed for e-commerce applications.

## Features
- Product image display with free shipping badge overlay
- Product title with text truncation support
- Sales count display
- Star rating with review count
- Price display with discount support
- Clickable card with hover effects
- Responsive design
- White background with subtle shadow and 6px border radius
        `}}},tags:["autodocs"],argTypes:{image:{control:{type:"text"},description:"Product image URL"},imageAlt:{control:{type:"text"},description:"Alt text for the product image"},title:{control:{type:"text"},description:"Product title"},salesCount:{control:{type:"text"},description:"Sales count description"},rating:{control:{type:"number",min:0,max:5,step:.1},description:"Product rating (0-5)"},reviewCount:{control:{type:"number"},description:"Number of reviews/sold items"},price:{control:{type:"number",min:0,step:.01},description:"Current price"},originalPrice:{control:{type:"number",min:0,step:.01},description:"Original price (before discount)"},discountPercentage:{control:{type:"number",min:0,max:100},description:"Discount percentage"},freeShipping:{control:{type:"boolean"},description:"Whether to show free shipping badge"},topSale:{control:{type:"boolean"},description:"Whether to show top sale badge"},onAddToCart:{description:"Callback function when add to cart button is clicked"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{image:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=center",imageAlt:"Product image",title:"100ft Expandable Water Hose",salesCount:"9.6K+ overall shop sales",rating:4.5,reviewCount:145,price:23.19,originalPrice:28.99,discountPercentage:20,freeShipping:!0,topSale:!1}},t={},a={args:{freeShipping:!0},parameters:{docs:{description:{story:"Product card with free shipping badge displayed on the image."}}}},o={args:{freeShipping:!1},parameters:{docs:{description:{story:"Product card without free shipping badge."}}}},s={args:{topSale:!0},parameters:{docs:{description:{story:"Product card with top sale badge displayed in the top right corner."}}}},n={args:{topSale:!0,freeShipping:!0},parameters:{docs:{description:{story:"Product card with both top sale and free shipping badges."}}}},i={args:{price:19.99,originalPrice:39.99,discountPercentage:50},parameters:{docs:{description:{story:"Product card showing discounted pricing with original price crossed out."}}}},c={args:{price:25.99,originalPrice:void 0,discountPercentage:void 0},parameters:{docs:{description:{story:"Product card showing regular pricing without discount."}}}},d={args:{rating:2.3,reviewCount:12,title:"Budget Garden Hose",salesCount:"500+ overall shop sales",price:9.99},parameters:{docs:{description:{story:"Product card with lower rating and fewer reviews."}}}},p={args:{rating:4.9,reviewCount:2453,title:"Premium Garden Hose - Professional Grade",salesCount:"50K+ overall shop sales",price:49.99,originalPrice:59.99,discountPercentage:17},parameters:{docs:{description:{story:"Product card with high rating and many reviews."}}}},l={args:{title:"Extra Long Professional Grade Expandable Garden Water Hose with Brass Fittings and Storage Bag - 100ft Maximum Length",salesCount:"25K+ overall shop sales"},parameters:{docs:{description:{story:"Product card with long title that gets truncated with ellipsis."}}}},u={args:{onClick:()=>window.alert("Product card clicked!")},parameters:{docs:{description:{story:"Product card with click handler - hover to see the cursor change and click for interaction."}}}},g={args:{onAddToCart:()=>window.alert("Added to cart!")},parameters:{docs:{description:{story:"Product card with add to cart button in the bottom right corner. The button is subtle initially and becomes prominent on hover."}}}},m={args:{onClick:()=>window.alert("Product card clicked!"),onAddToCart:()=>window.alert("Added to cart!"),freeShipping:!0,topSale:!0},parameters:{docs:{description:{story:"Fully interactive product card with click handler, add to cart button, and both badges. Notice how clicking the add to cart button doesn't trigger the card click."}}}},h={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",maxWidth:"900px"},children:[e.jsx(r,{image:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=center",imageAlt:"Garden hose",title:"100ft Expandable Water Hose",salesCount:"9.6K+ overall shop sales",rating:4.5,reviewCount:145,price:23.19,originalPrice:28.99,discountPercentage:20,freeShipping:!0,topSale:!0,onAddToCart:()=>window.alert("Added Garden Hose to cart!")}),e.jsx(r,{image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=280&h=200&fit=crop&crop=center",imageAlt:"Garden tools",title:"Professional Garden Tool Set",salesCount:"3.2K+ overall shop sales",rating:4.2,reviewCount:89,price:34.99,originalPrice:49.99,discountPercentage:30,freeShipping:!1,onAddToCart:()=>window.alert("Added Garden Tools to cart!")}),e.jsx(r,{image:"https://images.unsplash.com/photo-1585329062339-53db6eb5e1fb?w=280&h=200&fit=crop&crop=center",imageAlt:"Watering can",title:"Vintage Metal Watering Can",salesCount:"1.8K+ overall shop sales",rating:4.7,reviewCount:234,price:19.99,freeShipping:!0,onAddToCart:()=>window.alert("Added Watering Can to cart!")})]}),parameters:{layout:"padded",docs:{description:{story:"Multiple product cards displayed in a responsive grid layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    freeShipping: true
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with free shipping badge displayed on the image."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    freeShipping: false
  },
  parameters: {
    docs: {
      description: {
        story: "Product card without free shipping badge."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    topSale: true
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with top sale badge displayed in the top right corner."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    topSale: true,
    freeShipping: true
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with both top sale and free shipping badges."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    price: 19.99,
    originalPrice: 39.99,
    discountPercentage: 50
  },
  parameters: {
    docs: {
      description: {
        story: "Product card showing discounted pricing with original price crossed out."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    price: 25.99,
    originalPrice: undefined,
    discountPercentage: undefined
  },
  parameters: {
    docs: {
      description: {
        story: "Product card showing regular pricing without discount."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 2.3,
    reviewCount: 12,
    title: "Budget Garden Hose",
    salesCount: "500+ overall shop sales",
    price: 9.99
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with lower rating and fewer reviews."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.9,
    reviewCount: 2453,
    title: "Premium Garden Hose - Professional Grade",
    salesCount: "50K+ overall shop sales",
    price: 49.99,
    originalPrice: 59.99,
    discountPercentage: 17
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with high rating and many reviews."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Extra Long Professional Grade Expandable Garden Water Hose with Brass Fittings and Storage Bag - 100ft Maximum Length",
    salesCount: "25K+ overall shop sales"
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with long title that gets truncated with ellipsis."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => window.alert("Product card clicked!")
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with click handler - hover to see the cursor change and click for interaction."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onAddToCart: () => window.alert("Added to cart!")
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with add to cart button in the bottom right corner. The button is subtle initially and becomes prominent on hover."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => window.alert("Product card clicked!"),
    onAddToCart: () => window.alert("Added to cart!"),
    freeShipping: true,
    topSale: true
  },
  parameters: {
    docs: {
      description: {
        story: "Fully interactive product card with click handler, add to cart button, and both badges. Notice how clicking the add to cart button doesn't trigger the card click."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "900px"
  }}>
      <ShopCard image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=center" imageAlt="Garden hose" title="100ft Expandable Water Hose" salesCount="9.6K+ overall shop sales" rating={4.5} reviewCount={145} price={23.19} originalPrice={28.99} discountPercentage={20} freeShipping={true} topSale={true} onAddToCart={() => window.alert("Added Garden Hose to cart!")} />
      <ShopCard image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=280&h=200&fit=crop&crop=center" imageAlt="Garden tools" title="Professional Garden Tool Set" salesCount="3.2K+ overall shop sales" rating={4.2} reviewCount={89} price={34.99} originalPrice={49.99} discountPercentage={30} freeShipping={false} onAddToCart={() => window.alert("Added Garden Tools to cart!")} />
      <ShopCard image="https://images.unsplash.com/photo-1585329062339-53db6eb5e1fb?w=280&h=200&fit=crop&crop=center" imageAlt="Watering can" title="Vintage Metal Watering Can" salesCount="1.8K+ overall shop sales" rating={4.7} reviewCount={234} price={19.99} freeShipping={true} onAddToCart={() => window.alert("Added Watering Can to cart!")} />
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Multiple product cards displayed in a responsive grid layout."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const $=["Default","WithFreeShipping","WithoutFreeShipping","WithTopSale","TopSaleWithFreeShipping","WithDiscount","WithoutDiscount","LowRating","HighRating","LongTitle","Clickable","WithAddToCart","FullyInteractive","ProductGrid"];export{u as Clickable,t as Default,m as FullyInteractive,p as HighRating,l as LongTitle,d as LowRating,h as ProductGrid,n as TopSaleWithFreeShipping,g as WithAddToCart,i as WithDiscount,a as WithFreeShipping,s as WithTopSale,c as WithoutDiscount,o as WithoutFreeShipping,$ as __namedExportsOrder,V as default};
