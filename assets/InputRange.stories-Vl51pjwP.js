import{j as e,r as l}from"./iframe-uRyd9Bza.js";import{I as j}from"./InputRange-Inte1d4t.js";import"./classnames-helper-C6tUBjOJ.js";import"./InputError-CAtgTlMu.js";import"./Icon-BCBBvEMd.js";import"./Flex-Cq9rXk7-.js";import"./validation-helper-Bjp8riig.js";const J={title:"Form/InputRange",component:j,tags:["autodocs"],parameters:{docs:{description:{component:"A customizable range input component with various display options, tick marks, tooltips, and value formatting."}}},argTypes:{variant:{description:"Size variant of the range input",control:{type:"select"},options:["sm","md","lg"]},showValue:{description:"Show current value display",control:{type:"boolean"}},showMinMax:{description:"Show min/max labels",control:{type:"boolean"}},showTicks:{description:"Show tick marks",control:{type:"boolean"}},showTooltip:{description:"Show tooltip on hover",control:{type:"boolean"}},disabled:{description:"Disable the input",control:{type:"boolean"}}}},t=({initialValue:a=50,min:r=0,max:s=100,step:i=1,label:o="Range Input",showValue:n=!0,showMinMax:M=!1,showTicks:S=!1,showTooltip:T=!1,variant:C="md",disabled:W=!1,formatValue:I,ticks:L,minLabel:D,maxLabel:P})=>{const[k,F]=l.useState(a),[$,R]=l.useState(""),z={value:k,name:"range-input",formName:"test-form",error:$,section:0,validate:{}},E=V=>{F(V.value),V.value<30?R("Value should be at least 30"):R("")};return e.jsxs("div",{style:{padding:"20px",maxWidth:"500px"},children:[e.jsx(j,{field:z,onChange:E,label:o,min:r,max:s,step:i,variant:C,showValue:n,showMinMax:M,showTicks:S,showTooltip:T,disabled:W,formatValue:I,ticks:L,minLabel:D,maxLabel:P}),e.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:["Current value: ",k]})]})},c={render:()=>e.jsx(t,{}),parameters:{docs:{description:{story:"Basic range input with default settings."}}}},p={render:()=>e.jsx(t,{showMinMax:!0}),parameters:{docs:{description:{story:"Range input displaying minimum and maximum values."}}}},d={render:()=>e.jsx(t,{showTicks:!0,ticks:11}),parameters:{docs:{description:{story:"Range input with tick marks for visual guidance."}}}},u={render:()=>e.jsx(t,{showTooltip:!0}),parameters:{docs:{description:{story:"Range input with tooltip showing value on hover."}}}},m={render:()=>e.jsx(t,{min:-50,max:150,initialValue:25,step:5,showMinMax:!0,minLabel:"Cold",maxLabel:"Hot",formatValue:a=>`${a}°F`}),parameters:{docs:{description:{story:"Custom range with temperature formatting and custom labels."}}}},h={render:()=>e.jsx(t,{min:0,max:1e3,initialValue:250,step:10,label:"Price Range",showMinMax:!0,showTicks:!0,ticks:6,formatValue:a=>`$${a.toLocaleString()}`}),parameters:{docs:{description:{story:"Price range selector with currency formatting."}}}},g={render:()=>e.jsx(t,{min:0,max:100,initialValue:75,step:1,label:"Volume",showValue:!0,showTooltip:!0,formatValue:a=>`${a}%`}),parameters:{docs:{description:{story:"Volume control with percentage display."}}}},x={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(t,{variant:"sm",label:"Small Range"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (Default)"}),e.jsx(t,{variant:"md",label:"Medium Range"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsx(t,{variant:"lg",label:"Large Range"})]})]}),parameters:{docs:{description:{story:"Different size variants of the range input."}}}},v={render:()=>e.jsx(t,{disabled:!0,initialValue:30}),parameters:{docs:{description:{story:"Disabled range input state."}}}},w={render:()=>e.jsx(t,{label:"",showValue:!0}),parameters:{docs:{description:{story:"Range input without label, showing only the value."}}}},b={render:()=>{const[a,r]=l.useState(20),s={value:a,name:"range-input",formName:"test-form",error:"Value must be at least 30",section:0,validate:{}},i=o=>{r(o.value)};return e.jsx("div",{style:{padding:"20px",maxWidth:"500px"},children:e.jsx(j,{field:s,onChange:i,label:"Range with Error",min:0,max:100,showValue:!0})})},parameters:{docs:{description:{story:"Range input with error state styling."}}}},y={render:()=>e.jsx(t,{min:0,max:200,initialValue:120,step:10,label:"Feature-Rich Range",showValue:!0,showMinMax:!0,showTicks:!0,showTooltip:!0,ticks:11,variant:"lg",formatValue:a=>`${a} units`,minLabel:"Min",maxLabel:"Max"}),parameters:{docs:{description:{story:"Range input with all features enabled - ticks, tooltip, min/max labels, custom formatting."}}}},N=()=>{const[a,r]=l.useState({min:0,max:100,step:1,variant:"md",showValue:!0,showMinMax:!1,showTicks:!1,showTooltip:!1,disabled:!1,ticks:5}),[s,i]=l.useState(50),o={value:s,name:"playground-range",formName:"playground-form",error:"",section:0,validate:{}};return e.jsxs("div",{style:{padding:"20px",maxWidth:"600px"},children:[e.jsx("h3",{children:"Interactive Playground"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"30px"},children:[e.jsx("div",{children:e.jsxs("label",{children:["Min:",e.jsx("input",{type:"number",value:a.min,onChange:n=>r({...a,min:Number(n.target.value)}),style:{marginLeft:"8px",width:"80px"}})]})}),e.jsx("div",{children:e.jsxs("label",{children:["Max:",e.jsx("input",{type:"number",value:a.max,onChange:n=>r({...a,max:Number(n.target.value)}),style:{marginLeft:"8px",width:"80px"}})]})}),e.jsx("div",{children:e.jsxs("label",{children:["Step:",e.jsx("input",{type:"number",value:a.step,onChange:n=>r({...a,step:Number(n.target.value)}),style:{marginLeft:"8px",width:"80px"}})]})}),e.jsx("div",{children:e.jsxs("label",{children:["Variant:",e.jsxs("select",{value:a.variant,onChange:n=>r({...a,variant:n.target.value}),style:{marginLeft:"8px"},children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a.showValue,onChange:n=>r({...a,showValue:n.target.checked})}),"Show Value"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a.showMinMax,onChange:n=>r({...a,showMinMax:n.target.checked})}),"Show Min/Max"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a.showTicks,onChange:n=>r({...a,showTicks:n.target.checked})}),"Show Ticks"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a.showTooltip,onChange:n=>r({...a,showTooltip:n.target.checked})}),"Show Tooltip"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a.disabled,onChange:n=>r({...a,disabled:n.target.checked})}),"Disabled"]})}),a.showTicks&&e.jsx("div",{children:e.jsxs("label",{children:["Ticks:",e.jsx("input",{type:"number",min:2,max:20,value:a.ticks,onChange:n=>r({...a,ticks:Number(n.target.value)}),style:{marginLeft:"8px",width:"80px"}})]})})]}),e.jsx(j,{field:o,onChange:n=>i(n.value),label:"Playground Range",min:a.min,max:a.max,step:a.step,variant:a.variant,showValue:a.showValue,showMinMax:a.showMinMax,showTicks:a.showTicks,showTooltip:a.showTooltip,disabled:a.disabled,ticks:a.showTicks?a.ticks:void 0}),e.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:["Current value: ",s]})]})},f={render:()=>e.jsx(N,{}),parameters:{docs:{description:{story:"Interactive playground to test all InputRange features and configurations."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Basic range input with default settings."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper showMinMax={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input displaying minimum and maximum values."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper showTicks={true} ticks={11} />,
  parameters: {
    docs: {
      description: {
        story: "Range input with tick marks for visual guidance."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper showTooltip={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input with tooltip showing value on hover."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper min={-50} max={150} initialValue={25} step={5} showMinMax={true} minLabel="Cold" maxLabel="Hot" formatValue={value => \`\${value}°F\`} />,
  parameters: {
    docs: {
      description: {
        story: "Custom range with temperature formatting and custom labels."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper min={0} max={1000} initialValue={250} step={10} label="Price Range" showMinMax={true} showTicks={true} ticks={6} formatValue={value => \`$\${value.toLocaleString()}\`} />,
  parameters: {
    docs: {
      description: {
        story: "Price range selector with currency formatting."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper min={0} max={100} initialValue={75} step={1} label="Volume" showValue={true} showTooltip={true} formatValue={value => \`\${value}%\`} />,
  parameters: {
    docs: {
      description: {
        story: "Volume control with percentage display."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  }}>
      <div>
        <h4>Small</h4>
        <InputRangeWrapper variant="sm" label="Small Range" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <InputRangeWrapper variant="md" label="Medium Range" />
      </div>
      <div>
        <h4>Large</h4>
        <InputRangeWrapper variant="lg" label="Large Range" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different size variants of the range input."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper disabled={true} initialValue={30} />,
  parameters: {
    docs: {
      description: {
        story: "Disabled range input state."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper label="" showValue={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input without label, showing only the value."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(20);
    const field: FormFieldProps = {
      value,
      name: "range-input",
      formName: "test-form",
      error: "Value must be at least 30",
      section: 0,
      validate: {}
    };
    const handleChange = (updatedField: FormFieldProps) => {
      setValue(updatedField.value as number);
    };
    return <div style={{
      padding: "20px",
      maxWidth: "500px"
    }}>
        <InputRange field={field} onChange={handleChange} label="Range with Error" min={0} max={100} showValue={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Range input with error state styling."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InputRangeWrapper min={0} max={200} initialValue={120} step={10} label="Feature-Rich Range" showValue={true} showMinMax={true} showTicks={true} showTooltip={true} ticks={11} variant="lg" formatValue={value => \`\${value} units\`} minLabel="Min" maxLabel="Max" />,
  parameters: {
    docs: {
      description: {
        story: "Range input with all features enabled - ticks, tooltip, min/max labels, custom formatting."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePlayground />,
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to test all InputRange features and configurations."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const K=["Default","WithMinMax","WithTicks","WithTooltip","CustomRange","PriceRange","VolumeControl","SizeVariants","DisabledState","WithoutLabel","WithError","FullyLoaded","Playground"];export{m as CustomRange,c as Default,v as DisabledState,y as FullyLoaded,f as Playground,h as PriceRange,x as SizeVariants,g as VolumeControl,b as WithError,p as WithMinMax,d as WithTicks,u as WithTooltip,w as WithoutLabel,K as __namedExportsOrder,J as default};
