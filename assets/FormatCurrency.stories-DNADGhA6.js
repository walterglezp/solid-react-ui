import{j as n}from"./iframe-uRyd9Bza.js";import{F as e,f as x}from"./FormatCurrency-CTyFmbnT.js";const j={title:"Common/FormatCurrency",component:e,parameters:{layout:"centered",docs:{description:{component:`
A component for formatting currency values using the Intl.NumberFormat API.

## Features
- Support for all major world currencies
- Automatic locale-based formatting
- Flexible decimal precision control
- Multiple currency display options (symbol, code, name)
- Error handling with fallback values
- Currency-specific default configurations
- Accessibility features with tooltips
- Utility function for programmatic use
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"number"},description:"The numeric value to format"},currency:{control:{type:"text"},description:"Currency code (ISO 4217)"},locale:{control:{type:"text"},description:"Locale for formatting (BCP 47)"},minimumFractionDigits:{control:{type:"number",min:0,max:20},description:"Minimum number of decimal places"},maximumFractionDigits:{control:{type:"number",min:0,max:20},description:"Maximum number of decimal places"},currencyDisplay:{control:{type:"select"},options:["symbol","narrowSymbol","code","name"],description:"How to display the currency"},currencySign:{control:{type:"select"},options:["standard","accounting"],description:"How to display negative values"},useGrouping:{control:{type:"boolean"},description:"Whether to use grouping separators"},fallback:{control:{type:"text"},description:"Fallback text for invalid values"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{value:1234.56,currency:"USD",locale:"en-US",currencyDisplay:"symbol",currencySign:"standard",useGrouping:!0,fallback:"—"}},i={args:{value:1234.56}},s={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"USD:"})," ",n.jsx(e,{value:1234.56,currency:"USD"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"EUR:"})," ",n.jsx(e,{value:1234.56,currency:"EUR"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"GBP:"})," ",n.jsx(e,{value:1234.56,currency:"GBP"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"JPY:"})," ",n.jsx(e,{value:1234.56,currency:"JPY"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"CAD:"})," ",n.jsx(e,{value:1234.56,currency:"CAD"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"AUD:"})," ",n.jsx(e,{value:1234.56,currency:"AUD"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"CHF:"})," ",n.jsx(e,{value:1234.56,currency:"CHF"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"CNY:"})," ",n.jsx(e,{value:1234.56,currency:"CNY"})]})]}),parameters:{docs:{description:{story:"Different currencies with their specific formatting rules."}}}},t={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"US English:"})," ",n.jsx(e,{value:1234.56,currency:"USD",locale:"en-US"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"British English:"})," ",n.jsx(e,{value:1234.56,currency:"GBP",locale:"en-GB"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"German:"})," ",n.jsx(e,{value:1234.56,currency:"EUR",locale:"de-DE"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"French:"})," ",n.jsx(e,{value:1234.56,currency:"EUR",locale:"fr-FR"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Spanish:"})," ",n.jsx(e,{value:1234.56,currency:"EUR",locale:"es-ES"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Japanese:"})," ",n.jsx(e,{value:1234.56,currency:"JPY",locale:"ja-JP"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Portuguese:"})," ",n.jsx(e,{value:1234.56,currency:"BRL",locale:"pt-BR"})]})]}),parameters:{docs:{description:{story:"Same value formatted according to different locales and their conventions."}}}},o={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Symbol:"})," ",n.jsx(e,{value:1234.56,currency:"USD",currencyDisplay:"symbol"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Narrow Symbol:"})," ",n.jsx(e,{value:1234.56,currency:"USD",currencyDisplay:"narrowSymbol"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Code:"})," ",n.jsx(e,{value:1234.56,currency:"USD",currencyDisplay:"code"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Name:"})," ",n.jsx(e,{value:1234.56,currency:"USD",currencyDisplay:"name"})]})]}),parameters:{docs:{description:{story:"Different ways to display currency information."}}}},a={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"No decimals:"})," ",n.jsx(e,{value:1234.567,minimumFractionDigits:0,maximumFractionDigits:0})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"1 decimal:"})," ",n.jsx(e,{value:1234.567,minimumFractionDigits:1,maximumFractionDigits:1})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"2 decimals:"})," ",n.jsx(e,{value:1234.567,minimumFractionDigits:2,maximumFractionDigits:2})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"3 decimals:"})," ",n.jsx(e,{value:1234.567,minimumFractionDigits:3,maximumFractionDigits:3})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Variable (0-2):"})," ",n.jsx(e,{value:1234.5,minimumFractionDigits:0,maximumFractionDigits:2})]})]}),parameters:{docs:{description:{story:"Control decimal precision with minimum and maximum fraction digits."}}}},c={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Standard:"})," ",n.jsx(e,{value:-1234.56,currencySign:"standard"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Accounting:"})," ",n.jsx(e,{value:-1234.56,currencySign:"accounting"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Zero:"})," ",n.jsx(e,{value:0})]})]}),parameters:{docs:{description:{story:"Different ways to display negative values and zero."}}}},l={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Thousands:"})," ",n.jsx(e,{value:12345.67})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Millions:"})," ",n.jsx(e,{value:123456789e-1})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Billions:"})," ",n.jsx(e,{value:1234567890123e-2})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Without grouping:"})," ",n.jsx(e,{value:123456789e-1,useGrouping:!1})]})]}),parameters:{docs:{description:{story:"Formatting large numbers with and without grouping separators."}}}},d={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Valid number:"})," ",n.jsx(e,{value:123.45})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Invalid number (NaN):"})," ",n.jsx(e,{value:NaN})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Infinity:"})," ",n.jsx(e,{value:1/0})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Custom fallback:"})," ",n.jsx(e,{value:NaN,fallback:"N/A"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Very small number:"})," ",n.jsx(e,{value:.001})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Very large number:"})," ",n.jsx(e,{value:Number.MAX_SAFE_INTEGER})]})]}),parameters:{docs:{description:{story:"How the component handles invalid or edge case values."}}}},u={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"E-commerce Product Prices"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[n.jsxs("div",{children:["Regular Price: ",n.jsx(e,{value:299.99})]}),n.jsxs("div",{style:{textDecoration:"line-through",color:"#999"},children:["Original Price: ",n.jsx(e,{value:399.99})]}),n.jsxs("div",{style:{color:"#e74c3c",fontWeight:"bold"},children:["You Save: ",n.jsx(e,{value:100})]})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Banking Statement"}),n.jsxs("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"2px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"300px"},children:[n.jsx("span",{children:"Opening Balance"}),n.jsx(e,{value:5432.1})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"300px",color:"#e74c3c"},children:[n.jsx("span",{children:"Transaction Fee"}),n.jsx(e,{value:-25,currencySign:"accounting"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"300px",borderTop:"1px solid #ddd",paddingTop:"4px",fontWeight:"bold"},children:[n.jsx("span",{children:"Closing Balance"}),n.jsx(e,{value:5407.1})]})]})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"International Pricing"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[n.jsxs("div",{children:["🇺🇸 ",n.jsx(e,{value:99.99,currency:"USD",locale:"en-US"})]}),n.jsxs("div",{children:["🇪🇺 ",n.jsx(e,{value:89.99,currency:"EUR",locale:"de-DE"})]}),n.jsxs("div",{children:["🇬🇧 ",n.jsx(e,{value:79.99,currency:"GBP",locale:"en-GB"})]}),n.jsxs("div",{children:["🇯🇵 ",n.jsx(e,{value:10999,currency:"JPY",locale:"ja-JP"})]})]})]})]}),parameters:{docs:{description:{story:"Real-world usage examples in different contexts like e-commerce, banking, and international pricing."}}}},m={render:()=>{const v=[29.99,149.5,1299.99,45,.99],y=v.reduce((p,r)=>p+r,0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Shopping Cart (using formatCurrency utility)"}),v.map((p,r)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"200px"},children:[n.jsxs("span",{children:["Item ",r+1]}),n.jsx("code",{children:x(p)})]},r)),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"200px",borderTop:"1px solid #ddd",paddingTop:"8px",fontWeight:"bold"},children:[n.jsx("span",{children:"Total"}),n.jsx("code",{children:x(y)})]})]})},parameters:{docs:{description:{story:"Using the formatCurrency utility function for programmatic formatting."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234.56
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>USD:</strong> <FormatCurrency value={1234.56} currency="USD" />
      </div>
      <div>
        <strong>EUR:</strong> <FormatCurrency value={1234.56} currency="EUR" />
      </div>
      <div>
        <strong>GBP:</strong> <FormatCurrency value={1234.56} currency="GBP" />
      </div>
      <div>
        <strong>JPY:</strong> <FormatCurrency value={1234.56} currency="JPY" />
      </div>
      <div>
        <strong>CAD:</strong> <FormatCurrency value={1234.56} currency="CAD" />
      </div>
      <div>
        <strong>AUD:</strong> <FormatCurrency value={1234.56} currency="AUD" />
      </div>
      <div>
        <strong>CHF:</strong> <FormatCurrency value={1234.56} currency="CHF" />
      </div>
      <div>
        <strong>CNY:</strong> <FormatCurrency value={1234.56} currency="CNY" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different currencies with their specific formatting rules."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>US English:</strong>{" "}
        <FormatCurrency value={1234.56} currency="USD" locale="en-US" />
      </div>
      <div>
        <strong>British English:</strong>{" "}
        <FormatCurrency value={1234.56} currency="GBP" locale="en-GB" />
      </div>
      <div>
        <strong>German:</strong>{" "}
        <FormatCurrency value={1234.56} currency="EUR" locale="de-DE" />
      </div>
      <div>
        <strong>French:</strong>{" "}
        <FormatCurrency value={1234.56} currency="EUR" locale="fr-FR" />
      </div>
      <div>
        <strong>Spanish:</strong>{" "}
        <FormatCurrency value={1234.56} currency="EUR" locale="es-ES" />
      </div>
      <div>
        <strong>Japanese:</strong>{" "}
        <FormatCurrency value={1234.56} currency="JPY" locale="ja-JP" />
      </div>
      <div>
        <strong>Portuguese:</strong>{" "}
        <FormatCurrency value={1234.56} currency="BRL" locale="pt-BR" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Same value formatted according to different locales and their conventions."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>Symbol:</strong>{" "}
        <FormatCurrency value={1234.56} currency="USD" currencyDisplay="symbol" />
      </div>
      <div>
        <strong>Narrow Symbol:</strong>{" "}
        <FormatCurrency value={1234.56} currency="USD" currencyDisplay="narrowSymbol" />
      </div>
      <div>
        <strong>Code:</strong>{" "}
        <FormatCurrency value={1234.56} currency="USD" currencyDisplay="code" />
      </div>
      <div>
        <strong>Name:</strong>{" "}
        <FormatCurrency value={1234.56} currency="USD" currencyDisplay="name" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different ways to display currency information."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>No decimals:</strong>{" "}
        <FormatCurrency value={1234.567} minimumFractionDigits={0} maximumFractionDigits={0} />
      </div>
      <div>
        <strong>1 decimal:</strong>{" "}
        <FormatCurrency value={1234.567} minimumFractionDigits={1} maximumFractionDigits={1} />
      </div>
      <div>
        <strong>2 decimals:</strong>{" "}
        <FormatCurrency value={1234.567} minimumFractionDigits={2} maximumFractionDigits={2} />
      </div>
      <div>
        <strong>3 decimals:</strong>{" "}
        <FormatCurrency value={1234.567} minimumFractionDigits={3} maximumFractionDigits={3} />
      </div>
      <div>
        <strong>Variable (0-2):</strong>{" "}
        <FormatCurrency value={1234.5} minimumFractionDigits={0} maximumFractionDigits={2} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Control decimal precision with minimum and maximum fraction digits."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>Standard:</strong>{" "}
        <FormatCurrency value={-1234.56} currencySign="standard" />
      </div>
      <div>
        <strong>Accounting:</strong>{" "}
        <FormatCurrency value={-1234.56} currencySign="accounting" />
      </div>
      <div>
        <strong>Zero:</strong> <FormatCurrency value={0} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different ways to display negative values and zero."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>Thousands:</strong> <FormatCurrency value={12345.67} />
      </div>
      <div>
        <strong>Millions:</strong> <FormatCurrency value={12345678.9} />
      </div>
      <div>
        <strong>Billions:</strong> <FormatCurrency value={12345678901.23} />
      </div>
      <div>
        <strong>Without grouping:</strong>{" "}
        <FormatCurrency value={12345678.9} useGrouping={false} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Formatting large numbers with and without grouping separators."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div>
        <strong>Valid number:</strong> <FormatCurrency value={123.45} />
      </div>
      <div>
        <strong>Invalid number (NaN):</strong> <FormatCurrency value={NaN} />
      </div>
      <div>
        <strong>Infinity:</strong> <FormatCurrency value={Infinity} />
      </div>
      <div>
        <strong>Custom fallback:</strong>{" "}
        <FormatCurrency value={NaN} fallback="N/A" />
      </div>
      <div>
        <strong>Very small number:</strong> <FormatCurrency value={0.001} />
      </div>
      <div>
        <strong>Very large number:</strong>{" "}
        <FormatCurrency value={Number.MAX_SAFE_INTEGER} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "How the component handles invalid or edge case values."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          E-commerce Product Prices
        </h4>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>
          <div>
            Regular Price: <FormatCurrency value={299.99} />
          </div>
          <div style={{
          textDecoration: "line-through",
          color: "#999"
        }}>
            Original Price: <FormatCurrency value={399.99} />
          </div>
          <div style={{
          color: "#e74c3c",
          fontWeight: "bold"
        }}>
            You Save: <FormatCurrency value={100.0} />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Banking Statement
        </h4>
        <div style={{
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }}>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "300px"
        }}>
            <span>Opening Balance</span>
            <FormatCurrency value={5432.1} />
          </div>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "300px",
          color: "#e74c3c"
        }}>
            <span>Transaction Fee</span>
            <FormatCurrency value={-25.0} currencySign="accounting" />
          </div>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "300px",
          borderTop: "1px solid #ddd",
          paddingTop: "4px",
          fontWeight: "bold"
        }}>
            <span>Closing Balance</span>
            <FormatCurrency value={5407.1} />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          International Pricing
        </h4>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px"
      }}>
          <div>
            🇺🇸 <FormatCurrency value={99.99} currency="USD" locale="en-US" />
          </div>
          <div>
            🇪🇺 <FormatCurrency value={89.99} currency="EUR" locale="de-DE" />
          </div>
          <div>
            🇬🇧 <FormatCurrency value={79.99} currency="GBP" locale="en-GB" />
          </div>
          <div>
            🇯🇵 <FormatCurrency value={10999} currency="JPY" locale="ja-JP" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Real-world usage examples in different contexts like e-commerce, banking, and international pricing."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const prices = [29.99, 149.5, 1299.99, 45.0, 0.99];
    const total = prices.reduce((sum, price) => sum + price, 0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Shopping Cart (using formatCurrency utility)
        </h4>
        {prices.map((price, index) => <div key={index} style={{
        display: "flex",
        justifyContent: "space-between",
        minWidth: "200px"
      }}>
            <span>Item {index + 1}</span>
            <code>{formatCurrency(price)}</code>
          </div>)}
        <div style={{
        display: "flex",
        justifyContent: "space-between",
        minWidth: "200px",
        borderTop: "1px solid #ddd",
        paddingTop: "8px",
        fontWeight: "bold"
      }}>
          <span>Total</span>
          <code>{formatCurrency(total)}</code>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Using the formatCurrency utility function for programmatic formatting."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","MultipleCurrencies","MultipleLocales","CurrencyDisplayOptions","PrecisionControl","NegativeValues","LargeNumbers","ErrorHandling","RealWorldExamples","UtilityFunction"];export{o as CurrencyDisplayOptions,i as Default,d as ErrorHandling,l as LargeNumbers,s as MultipleCurrencies,t as MultipleLocales,c as NegativeValues,a as PrecisionControl,u as RealWorldExamples,m as UtilityFunction,f as __namedExportsOrder,j as default};
