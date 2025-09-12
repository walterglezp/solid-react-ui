import{j as r}from"./iframe-DzMUKr-y.js";import{L as a,a as t}from"./ListGroupItem-CvcIaZic.js";import"./preload-helper-D9Z9MdNV.js";import"./classnames-helper-C6tUBjOJ.js";const p={title:"List/ListGroup",component:a,tags:["autodocs"],args:{variant:"basic",numbered:!1},argTypes:{variant:{control:"radio",options:["default","flush"]},numbered:{control:"boolean"}}},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(t,{children:"Item 1"}),r.jsx(t,{children:"Item 2"})]})},s={args:{variant:"flush",numbered:!0},render:o=>r.jsxs(a,{...o,children:[r.jsx(t,{children:"One"}),r.jsx(t,{children:"Two"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ListGroup {...args}>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
    </ListGroup>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "flush",
    numbered: true
  },
  render: args => <ListGroup {...args}>
      <ListGroupItem>One</ListGroupItem>
      <ListGroupItem>Two</ListGroupItem>
    </ListGroup>
}`,...s.parameters?.docs?.source}}};const c=["BasicList","FlushNumbered"];export{e as BasicList,s as FlushNumbered,c as __namedExportsOrder,p as default};
