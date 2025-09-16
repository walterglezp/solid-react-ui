import{j as t}from"./iframe-cc5ZmNpn.js";import{T as o}from"./Tooltip-C7wENgHb.js";import{B as n}from"./Button-B-BbZ53a.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";const B={title:"Common/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:`
A modern, accessible tooltip component that displays helpful information when hovering over or focusing on an element.

## Features
- Multiple position options (top, right, bottom, left)
- Configurable delay for better UX
- Accessible with proper ARIA attributes
- Modern design matching the design system
- Smooth animations and transitions
- Focus support for keyboard navigation
        `}}},tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","right","bottom","left"],description:"Position of the tooltip relative to the trigger element"},content:{control:{type:"text"},description:"Content to display in the tooltip"},delay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay in milliseconds before showing the tooltip"},disabled:{control:{type:"boolean"},description:"Whether the tooltip is disabled"},className:{control:{type:"text"},description:"Additional CSS classes for styling"}},args:{content:"This is a helpful tooltip",position:"top",delay:200,disabled:!1}},e={args:{content:"This is a default tooltip",children:t.jsx(n,{variant:"primary",children:"Hover me"})}},r={args:{position:"top",content:"Tooltip positioned at the top",children:t.jsx(n,{variant:"secondary",children:"Top Tooltip"})}},i={args:{position:"right",content:"Tooltip positioned at the right",children:t.jsx(n,{variant:"success",children:"Right Tooltip"})}},s={args:{position:"bottom",content:"Tooltip positioned at the bottom",children:t.jsx(n,{variant:"warning",children:"Bottom Tooltip"})}},a={args:{position:"left",content:"Tooltip positioned at the left",children:t.jsx(n,{variant:"danger",children:"Left Tooltip"})}},c={args:{content:"This is a much longer tooltip content that will wrap to multiple lines when it exceeds the maximum width",children:t.jsx(n,{variant:"primary",outline:!0,children:"Long Content"})}},l={args:{content:"Hi!",children:t.jsx(n,{variant:"secondary",outline:!0,children:"Short"})}},d={args:{content:t.jsxs("div",{children:[t.jsx("strong",{children:"Bold text"})," and ",t.jsx("em",{children:"italic text"})]}),children:t.jsx(n,{variant:"success",outline:!0,children:"React Content"})}},p={args:{delay:0,content:"Instant tooltip (no delay)",children:t.jsx(n,{variant:"warning",outline:!0,children:"Fast"})}},u={args:{delay:1e3,content:"Slow tooltip (1 second delay)",children:t.jsx(n,{variant:"danger",outline:!0,children:"Slow"})}},m={args:{disabled:!0,content:"You should not see this tooltip",children:t.jsx(n,{variant:"secondary",disabled:!0,children:"Disabled Tooltip"})}},h={args:{children:t.jsx("div",{}),content:""},render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"60px",padding:"60px",alignItems:"center",justifyItems:"center"},children:[t.jsx("div",{}),t.jsx(o,{position:"top",content:"Top position",children:t.jsx(n,{variant:"primary",children:"Top"})}),t.jsx("div",{}),t.jsx(o,{position:"left",content:"Left position",children:t.jsx(n,{variant:"secondary",children:"Left"})}),t.jsx("div",{style:{padding:"20px",backgroundColor:"var(--color-gray-100)",borderRadius:"var(--border-radius-md)",textAlign:"center"},children:"Center Reference"}),t.jsx(o,{position:"right",content:"Right position",children:t.jsx(n,{variant:"success",children:"Right"})}),t.jsx("div",{}),t.jsx(o,{position:"bottom",content:"Bottom position",children:t.jsx(n,{variant:"warning",children:"Bottom"})}),t.jsx("div",{})]}),parameters:{docs:{description:{story:"All four position options displayed in a grid layout for easy comparison."}}}},g={args:{children:t.jsx("div",{}),content:""},render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[t.jsx(o,{content:"Button tooltip",children:t.jsx(n,{variant:"primary",children:"Button"})}),t.jsx(o,{content:"Text tooltip",children:t.jsx("span",{style:{padding:"8px 12px",backgroundColor:"var(--color-primary-100)",borderRadius:"var(--border-radius-md)",cursor:"help"},children:"Hover this text"})}),t.jsx(o,{content:"Icon tooltip",children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",backgroundColor:"var(--color-info-500)",color:"white",borderRadius:"50%",cursor:"help",fontWeight:"bold"},children:"?"})})]}),parameters:{docs:{description:{story:"Tooltips can be used with different types of trigger elements."}}}},y={args:{children:t.jsx("div",{}),content:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsx(o,{content:"Accessible via keyboard focus",children:t.jsx("button",{style:{padding:"8px 16px",border:"2px solid var(--color-primary-500)",borderRadius:"var(--border-radius-md)",backgroundColor:"transparent",color:"var(--color-primary-500)",cursor:"pointer"},children:"Focus me with Tab"})}),t.jsx(o,{content:"Also accessible via keyboard",children:t.jsx("a",{href:"#",onClick:v=>v.preventDefault(),style:{color:"var(--color-primary-500)",textDecoration:"underline"},children:"Focusable link"})})]}),parameters:{docs:{description:{story:"Tooltips are accessible via keyboard navigation and work with focusable elements."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: "This is a default tooltip",
    children: <Button variant="primary">Hover me</Button>
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    position: "top",
    content: "Tooltip positioned at the top",
    children: <Button variant="secondary">Top Tooltip</Button>
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    position: "right",
    content: "Tooltip positioned at the right",
    children: <Button variant="success">Right Tooltip</Button>
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    content: "Tooltip positioned at the bottom",
    children: <Button variant="warning">Bottom Tooltip</Button>
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    position: "left",
    content: "Tooltip positioned at the left",
    children: <Button variant="danger">Left Tooltip</Button>
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: "This is a much longer tooltip content that will wrap to multiple lines when it exceeds the maximum width",
    children: <Button variant="primary" outline>
        Long Content
      </Button>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Hi!",
    children: <Button variant="secondary" outline>
        Short
      </Button>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div>
        <strong>Bold text</strong> and <em>italic text</em>
      </div>,
    children: <Button variant="success" outline>
        React Content
      </Button>
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    content: "Instant tooltip (no delay)",
    children: <Button variant="warning" outline>
        Fast
      </Button>
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 1000,
    content: "Slow tooltip (1 second delay)",
    children: <Button variant="danger" outline>
        Slow
      </Button>
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    content: "You should not see this tooltip",
    children: <Button variant="secondary" disabled>
        Disabled Tooltip
      </Button>
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    content: ""
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "60px",
    padding: "60px",
    alignItems: "center",
    justifyItems: "center"
  }}>
      <div></div>
      <Tooltip position="top" content="Top position">
        <Button variant="primary">Top</Button>
      </Tooltip>
      <div></div>

      <Tooltip position="left" content="Left position">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <div style={{
      padding: "20px",
      backgroundColor: "var(--color-gray-100)",
      borderRadius: "var(--border-radius-md)",
      textAlign: "center"
    }}>
        Center Reference
      </div>
      <Tooltip position="right" content="Right position">
        <Button variant="success">Right</Button>
      </Tooltip>

      <div></div>
      <Tooltip position="bottom" content="Bottom position">
        <Button variant="warning">Bottom</Button>
      </Tooltip>
      <div></div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All four position options displayed in a grid layout for easy comparison."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    content: ""
  },
  render: () => <div style={{
    display: "flex",
    gap: "20px",
    alignItems: "center"
  }}>
      <Tooltip content="Button tooltip">
        <Button variant="primary">Button</Button>
      </Tooltip>

      <Tooltip content="Text tooltip">
        <span style={{
        padding: "8px 12px",
        backgroundColor: "var(--color-primary-100)",
        borderRadius: "var(--border-radius-md)",
        cursor: "help"
      }}>
          Hover this text
        </span>
      </Tooltip>

      <Tooltip content="Icon tooltip">
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        backgroundColor: "var(--color-info-500)",
        color: "white",
        borderRadius: "50%",
        cursor: "help",
        fontWeight: "bold"
      }}>
          ?
        </span>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tooltips can be used with different types of trigger elements."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div />,
    content: ""
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <Tooltip content="Accessible via keyboard focus">
        <button style={{
        padding: "8px 16px",
        border: "2px solid var(--color-primary-500)",
        borderRadius: "var(--border-radius-md)",
        backgroundColor: "transparent",
        color: "var(--color-primary-500)",
        cursor: "pointer"
      }}>
          Focus me with Tab
        </button>
      </Tooltip>

      <Tooltip content="Also accessible via keyboard">
        <a href="#" onClick={e => e.preventDefault()} style={{
        color: "var(--color-primary-500)",
        textDecoration: "underline"
      }}>
          Focusable link
        </a>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tooltips are accessible via keyboard navigation and work with focusable elements."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const w=["Default","Top","Right","Bottom","Left","LongContent","ShortContent","WithReactContent","FastDelay","SlowDelay","Disabled","AllPositions","WithDifferentTriggers","Accessibility"];export{y as Accessibility,h as AllPositions,s as Bottom,e as Default,m as Disabled,p as FastDelay,a as Left,c as LongContent,i as Right,l as ShortContent,u as SlowDelay,r as Top,g as WithDifferentTriggers,d as WithReactContent,w as __namedExportsOrder,B as default};
