import{r as t,j as e}from"./iframe-uRyd9Bza.js";import{g as V}from"./classnames-helper-C6tUBjOJ.js";import{I as A}from"./Icon-BCBBvEMd.js";import{u as H}from"./useClickOutside-CtDk1SQb.js";import{C as i}from"./CheckBox-CuD8oTcj.js";import{D as M}from"./DatePicker-wHBEh7jH.js";import{I as Q}from"./InputRange-Inte1d4t.js";import{S as $}from"./Select-DQHkABLe.js";import"./validation-helper-Bjp8riig.js";import"./InputError-CAtgTlMu.js";import"./Flex-Cq9rXk7-.js";import"./CalendarWeekDayNames-BLk1Hmwk.js";import"./Input-Bwt0aftA.js";/* empty css              *//* empty css                   */const z=({title:a,children:o,collapsible:s=!1,defaultCollapsed:h=!1})=>{const[d,c]=t.useState(h),p=()=>{s&&c(!d)};return e.jsxs("div",{className:"search-input__filter",children:[e.jsxs("div",{className:V({"search-input__filter-header":!0,"search-input__filter-header--clickable":s}),onClick:p,children:[e.jsx("h4",{className:"search-input__filter-title",children:a}),s&&e.jsx(A,{name:d?"chevron-down":"chevron-up",size:16,className:"search-input__filter-toggle"})]}),!d&&e.jsx("div",{className:"search-input__filter-content",children:o})]})},L=({className:a,placeholder:o="Search...",value:s="",onSearch:h,onValueChange:d,disabled:c=!1,showSearchButton:p=!0,searchButtonText:C="Search",children:g,popupTitle:y="Filters",showFilters:F=!1,onFiltersChange:x})=>{const[S,b]=t.useState(s),[u,r]=t.useState(F),m=t.useRef(null),w=t.useRef(null);H(m,()=>{r(!1),x?.(!1)}),t.useEffect(()=>{b(s)},[s]),t.useEffect(()=>{r(F)},[F]);const I=V({"search-input":!0,"search-input--disabled":c,"search-input--popup-open":u,[`${a}`]:!!a}),P=v=>{const E=v.target.value;b(E),d?.(E)},j=()=>{h?.(S)},B=v=>{v.key==="Enter"&&j()},f=()=>{if(!c&&g){const v=!u;r(v),x?.(v)}},k=!!(g&&t.Children.count(g)>0);return e.jsxs("div",{className:I,children:[e.jsxs("div",{className:"search-input__container",children:[e.jsx("div",{className:"search-input__search-icon",children:e.jsx(A,{name:"search",size:20})}),e.jsx("input",{ref:w,type:"text",className:"search-input__input",placeholder:o,value:S,onChange:P,onKeyDown:B,disabled:c}),k&&e.jsx("button",{type:"button",className:V({"search-input__filter-button":!0,"search-input__filter-button--active":u}),onClick:f,disabled:c,"aria-label":"Toggle filters",children:e.jsx(A,{name:"filter",size:20})}),p&&e.jsx("button",{type:"button",className:"search-input__search-button",onClick:j,disabled:c,children:C})]}),k&&u&&e.jsxs("div",{className:"search-input__popup",ref:m,children:[e.jsxs("div",{className:"search-input__popup-header",children:[e.jsx("h3",{className:"search-input__popup-title",children:y}),e.jsx("button",{type:"button",className:"search-input__popup-close",onClick:f,"aria-label":"Close filters",children:e.jsx(A,{name:"x",size:18})})]}),e.jsx("div",{className:"search-input__popup-content",children:g})]})]})},l=L;l.Filter=z;L.__docgenInfo={description:"",methods:[],displayName:"SearchInputBase",props:{className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search..."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSearchButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},popupTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Filters"',computed:!1}},showFilters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(show: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const n=(a,o=!1)=>({name:a,formName:"search",value:o,error:"",section:0,validate:{}}),se={title:"Form/SearchInput",component:l,parameters:{layout:"centered",docs:{description:{component:`
A powerful search input component with advanced filtering capabilities.

## Features
- Compact search interface with filter popup
- Composable Filter components with collapsible sections
- Scrollable popup for many filters
- Support for any form components inside filters
- Date pickers, checkboxes, selects, ranges, etc.
- Responsive design
- Click outside to close
- Amazon-style compact filtering

## Usage
\`\`\`tsx
<SearchInput>
  <SearchInput.Filter title="Features">
    <CheckBox field={organicField} label="Organic" />
    <CheckBox field={shippingField} label="Free shipping" />
  </SearchInput.Filter>
  <SearchInput.Filter title="Price Range">
    <InputRange field={priceField} min={0} max={1000} />
  </SearchInput.Filter>
</SearchInput>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text for the search input"},value:{control:{type:"text"},description:"Current search value"},searchButtonText:{control:{type:"text"},description:"Text displayed on the search button"},showSearchButton:{control:{type:"boolean"},description:"Whether to show the search button"},disabled:{control:{type:"boolean"},description:"Whether the component is disabled"},popupTitle:{control:{type:"text"},description:"Title shown in the filter popup header"},children:{description:"Filter components to be displayed in the popup"},onSearch:{description:"Callback fired when search is performed"},onValueChange:{description:"Callback fired when input value changes"},onFiltersChange:{description:"Callback fired when filter popup is opened/closed"}},args:{placeholder:"Search products...",searchButtonText:"Search",showSearchButton:!0,disabled:!1,popupTitle:"Filters"}},T={args:{onSearch:a=>window.alert(`Searching for: "${a}"`),onValueChange:a=>console.log("Search value:",a)}},O={args:{showSearchButton:!1,placeholder:"Type and press Enter to search...",onSearch:a=>window.alert(`Searching for: "${a}"`)},parameters:{docs:{description:{story:"Search input without the search button. Search is triggered by pressing Enter."}}}},_={render:()=>{const[a,o]=t.useState(n("organic",!1)),[s,h]=t.useState(n("shipping",!1)),[d,c]=t.useState(n("premium",!1));return e.jsx(l,{placeholder:"Search products...",onSearch:p=>window.alert(`Searching for: "${p}"`),popupTitle:"Product Filters",children:e.jsxs(l.Filter,{title:"Features",children:[e.jsx(i,{field:a,onChange:o,label:"Organic Products"}),e.jsx(i,{field:s,onChange:h,label:"Free Shipping"}),e.jsx(i,{field:d,onChange:c,label:"Premium Quality"})]})})},parameters:{docs:{description:{story:"Search input with basic checkbox filters in a popup."}}}},N={render:()=>{const[a,o]=t.useState(n("organic",!1)),[s,h]=t.useState(n("shipping",!1)),[d,c]=t.useState(n("premium",!1)),[p,C]=t.useState(n("eco",!1)),[g,y]=t.useState(n("local",!1)),[F,x]=t.useState(n("minPrice","")),[S,b]=t.useState(n("maxPrice","")),[u,r]=t.useState(n("rating","")),[m,w]=t.useState(n("date","")),[I,P]=t.useState(n("brand","")),j=[{value:"",label:"Any Rating"},{value:"4",label:"4+ Stars"},{value:"3",label:"3+ Stars"},{value:"2",label:"2+ Stars"}],B=[{value:"",label:"Any Brand"},{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"sony",label:"Sony"},{value:"lg",label:"LG"}];return e.jsxs(l,{placeholder:"Search for anything...",onSearch:f=>window.alert(`Searching for: "${f}"`),popupTitle:"Advanced Filters",children:[e.jsxs(l.Filter,{title:"Features",collapsible:!0,children:[e.jsx(i,{field:a,onChange:o,label:"Organic Products"}),e.jsx(i,{field:s,onChange:h,label:"Free Shipping"}),e.jsx(i,{field:d,onChange:c,label:"Premium Quality"}),e.jsx(i,{field:p,onChange:C,label:"Eco-Friendly"}),e.jsx(i,{field:g,onChange:y,label:"Local Sellers"})]}),e.jsx(l.Filter,{title:"Price Range",children:e.jsxs("div",{className:"price-range",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:"$"}),e.jsx("input",{className:"form-control",placeholder:"Min",value:String(F.value||""),onChange:f=>x({...F,value:f.target.value})})]}),e.jsx("span",{className:"range-separator",children:"to"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:"$"}),e.jsx("input",{className:"form-control",placeholder:"Max",value:String(S.value||""),onChange:f=>b({...S,value:f.target.value})})]})]})}),e.jsx(l.Filter,{title:"Customer Reviews",children:e.jsx($,{field:u,onChange:r,options:j,placeholder:"Select minimum rating..."})}),e.jsx(l.Filter,{title:"Brand",children:e.jsx($,{field:I,onChange:P,options:B,placeholder:"Select brand..."})}),e.jsx(l.Filter,{title:"Created Date",collapsible:!0,defaultCollapsed:!0,children:e.jsx(M,{field:m,onChange:w})})]})},parameters:{docs:{description:{story:"Comprehensive search input with multiple filter types including checkboxes, price range, ratings, brand selection, and date picker. Some filters are collapsible."}}}},R={render:()=>{const[a,o]=t.useState(n("field1",!1)),[s,h]=t.useState(n("field2",!1)),[d,c]=t.useState(n("field3",!1)),[p,C]=t.useState(n("field4",!1)),[g,y]=t.useState(n("field5",!1)),[F,x]=t.useState(n("field6",!1)),[S,b]=t.useState(n("field7",!1)),[u,r]=t.useState(n("field8",!1)),[m,w]=t.useState(n("field9",!1)),[I,P]=t.useState(n("field10",!1)),[j,B]=t.useState(n("price","")),[f,k]=t.useState(n("date",""));return e.jsxs(l,{placeholder:"Search in large catalog...",onSearch:v=>window.alert(`Searching for: "${v}"`),popupTitle:"All Filters",children:[e.jsxs(l.Filter,{title:"Product Features",children:[e.jsx(i,{field:a,onChange:o,label:"Organic"}),e.jsx(i,{field:s,onChange:h,label:"Free Shipping"}),e.jsx(i,{field:d,onChange:c,label:"Premium Quality"}),e.jsx(i,{field:p,onChange:C,label:"Eco-Friendly"}),e.jsx(i,{field:g,onChange:y,label:"Bestseller"})]}),e.jsxs(l.Filter,{title:"Seller Benefits",children:[e.jsx(i,{field:F,onChange:x,label:"Local Seller"}),e.jsx(i,{field:S,onChange:b,label:"Verified Seller"}),e.jsx(i,{field:u,onChange:r,label:"Fast Delivery"}),e.jsx(i,{field:m,onChange:w,label:"Return Policy"}),e.jsx(i,{field:I,onChange:P,label:"Customer Support"})]}),e.jsx(l.Filter,{title:"Price Range",children:e.jsx(Q,{field:j,onChange:B,min:0,max:1e3,step:10,label:"Price ($0 - $1000)"})}),e.jsx(l.Filter,{title:"Availability Date",children:e.jsx(M,{field:f,onChange:k})}),e.jsx(l.Filter,{title:"More Features",collapsible:!0,defaultCollapsed:!0,children:e.jsxs("div",{style:{padding:"20px",textAlign:"center",color:"#666"},children:["Additional filters can be added here...",e.jsx("br",{}),"This demonstrates scrollable content in the popup."]})})]})},parameters:{docs:{description:{story:"Search input with many filters to demonstrate scrollable popup behavior. The popup becomes scrollable when content exceeds the maximum height."}}}},q={render:()=>{const[a,o]=t.useState("magic john fan"),[s,h]=t.useState(!1),[d,c]=t.useState([]),[p,C]=t.useState(n("organic",!0)),[g,y]=t.useState(n("shipping",!1)),[F,x]=t.useState(n("rating","4")),S=[{value:"",label:"Any Rating"},{value:"4",label:"4+ Stars"},{value:"3",label:"3+ Stars"},{value:"2",label:"2+ Stars"}],b=r=>{r.trim()&&(c(m=>[...m.slice(-4),r]),window.alert(`Searching for: "${r}"`))},u=()=>{let r=0;return p.value&&r++,g.value&&r++,F.value&&r++,r};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"600px"},children:[e.jsxs(l,{value:a,onValueChange:o,onSearch:b,showFilters:s,onFiltersChange:h,placeholder:"Search for products...",popupTitle:`Filters ${u()>0?`(${u()} active)`:""}`,children:[e.jsxs(l.Filter,{title:"Product Features",children:[e.jsx(i,{field:p,onChange:C,label:"Organic Products"}),e.jsx(i,{field:g,onChange:y,label:"Free Shipping"})]}),e.jsx(l.Filter,{title:"Customer Reviews",children:e.jsx($,{field:F,onChange:x,options:S,placeholder:"Select minimum rating..."})})]}),e.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Current Search:"}),' "',a,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"Filters Open:"})," ",s?"Yes":"No"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Active Filters:"})," ",u()]}),d.length>0&&e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Recent Searches:"})}),e.jsx("ul",{style:{margin:"0",padding:"0 0 0 20px",fontSize:"12px"},children:d.map((r,m)=>e.jsxs("li",{style:{marginBottom:"2px"},children:['"',r,'"']},m))})]})]})]})},parameters:{docs:{description:{story:"Interactive example showing controlled state with active filter count and search history. This demonstrates the full power of the composable filter system."}}}},D={render:()=>{const[a]=t.useState(n("organic",!1)),[o]=t.useState(n("shipping",!1));return e.jsx(l,{disabled:!0,value:"Disabled search",placeholder:"This search is disabled...",popupTitle:"Disabled Filters",children:e.jsxs(l.Filter,{title:"Features",children:[e.jsx(i,{field:a,onChange:()=>{},label:"Organic Products"}),e.jsx(i,{field:o,onChange:()=>{},label:"Free Shipping"})]})})},parameters:{docs:{description:{story:"Disabled state of the search input with filters."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: query => window.alert(\`Searching for: "\${query}"\`),
    onValueChange: value => console.log("Search value:", value)
  }
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    showSearchButton: false,
    placeholder: "Type and press Enter to search...",
    onSearch: query => window.alert(\`Searching for: "\${query}"\`)
  },
  parameters: {
    docs: {
      description: {
        story: "Search input without the search button. Search is triggered by pressing Enter."
      }
    }
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [organicField, setOrganicField] = useState(createFormField("organic", false));
    const [shippingField, setShippingField] = useState(createFormField("shipping", false));
    const [premiumField, setPremiumField] = useState(createFormField("premium", false));
    return <SearchInput placeholder="Search products..." onSearch={query => window.alert(\`Searching for: "\${query}"\`)} popupTitle="Product Filters">
        <SearchInput.Filter title="Features">
          <CheckBox field={organicField} onChange={setOrganicField} label="Organic Products" />
          <CheckBox field={shippingField} onChange={setShippingField} label="Free Shipping" />
          <CheckBox field={premiumField} onChange={setPremiumField} label="Premium Quality" />
        </SearchInput.Filter>
      </SearchInput>;
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with basic checkbox filters in a popup."
      }
    }
  }
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Feature checkboxes
    const [organicField, setOrganicField] = useState(createFormField("organic", false));
    const [shippingField, setShippingField] = useState(createFormField("shipping", false));
    const [premiumField, setPremiumField] = useState(createFormField("premium", false));
    const [ecoField, setEcoField] = useState(createFormField("eco", false));
    const [localField, setLocalField] = useState(createFormField("local", false));

    // Price range
    const [minPriceField, setMinPriceField] = useState(createFormField("minPrice", ""));
    const [maxPriceField, setMaxPriceField] = useState(createFormField("maxPrice", ""));

    // Rating filter
    const [ratingField, setRatingField] = useState(createFormField("rating", ""));

    // Date filter
    const [dateField, setDateField] = useState(createFormField("date", ""));

    // Brand filter
    const [brandField, setBrandField] = useState(createFormField("brand", ""));
    const ratingOptions = [{
      value: "",
      label: "Any Rating"
    }, {
      value: "4",
      label: "4+ Stars"
    }, {
      value: "3",
      label: "3+ Stars"
    }, {
      value: "2",
      label: "2+ Stars"
    }];
    const brandOptions = [{
      value: "",
      label: "Any Brand"
    }, {
      value: "apple",
      label: "Apple"
    }, {
      value: "samsung",
      label: "Samsung"
    }, {
      value: "sony",
      label: "Sony"
    }, {
      value: "lg",
      label: "LG"
    }];
    return <SearchInput placeholder="Search for anything..." onSearch={query => window.alert(\`Searching for: "\${query}"\`)} popupTitle="Advanced Filters">
        <SearchInput.Filter title="Features" collapsible>
          <CheckBox field={organicField} onChange={setOrganicField} label="Organic Products" />
          <CheckBox field={shippingField} onChange={setShippingField} label="Free Shipping" />
          <CheckBox field={premiumField} onChange={setPremiumField} label="Premium Quality" />
          <CheckBox field={ecoField} onChange={setEcoField} label="Eco-Friendly" />
          <CheckBox field={localField} onChange={setLocalField} label="Local Sellers" />
        </SearchInput.Filter>

        <SearchInput.Filter title="Price Range">
          <div className="price-range">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input className="form-control" placeholder="Min" value={String(minPriceField.value || "")} onChange={e => setMinPriceField({
              ...minPriceField,
              value: e.target.value
            })} />
            </div>
            <span className="range-separator">to</span>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input className="form-control" placeholder="Max" value={String(maxPriceField.value || "")} onChange={e => setMaxPriceField({
              ...maxPriceField,
              value: e.target.value
            })} />
            </div>
          </div>
        </SearchInput.Filter>

        <SearchInput.Filter title="Customer Reviews">
          <Select field={ratingField} onChange={setRatingField} options={ratingOptions} placeholder="Select minimum rating..." />
        </SearchInput.Filter>

        <SearchInput.Filter title="Brand">
          <Select field={brandField} onChange={setBrandField} options={brandOptions} placeholder="Select brand..." />
        </SearchInput.Filter>

        <SearchInput.Filter title="Created Date" collapsible defaultCollapsed>
          <DatePicker field={dateField} onChange={setDateField} />
        </SearchInput.Filter>
      </SearchInput>;
  },
  parameters: {
    docs: {
      description: {
        story: "Comprehensive search input with multiple filter types including checkboxes, price range, ratings, brand selection, and date picker. Some filters are collapsible."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Many checkboxes to demonstrate scrolling
    const [field1, setField1] = useState(createFormField("field1", false));
    const [field2, setField2] = useState(createFormField("field2", false));
    const [field3, setField3] = useState(createFormField("field3", false));
    const [field4, setField4] = useState(createFormField("field4", false));
    const [field5, setField5] = useState(createFormField("field5", false));
    const [field6, setField6] = useState(createFormField("field6", false));
    const [field7, setField7] = useState(createFormField("field7", false));
    const [field8, setField8] = useState(createFormField("field8", false));
    const [field9, setField9] = useState(createFormField("field9", false));
    const [field10, setField10] = useState(createFormField("field10", false));
    const [priceField, setPriceField] = useState(createFormField("price", ""));
    const [dateField, setDateField] = useState(createFormField("date", ""));
    return <SearchInput placeholder="Search in large catalog..." onSearch={query => window.alert(\`Searching for: "\${query}"\`)} popupTitle="All Filters">
        <SearchInput.Filter title="Product Features">
          <CheckBox field={field1} onChange={setField1} label="Organic" />
          <CheckBox field={field2} onChange={setField2} label="Free Shipping" />
          <CheckBox field={field3} onChange={setField3} label="Premium Quality" />
          <CheckBox field={field4} onChange={setField4} label="Eco-Friendly" />
          <CheckBox field={field5} onChange={setField5} label="Bestseller" />
        </SearchInput.Filter>

        <SearchInput.Filter title="Seller Benefits">
          <CheckBox field={field6} onChange={setField6} label="Local Seller" />
          <CheckBox field={field7} onChange={setField7} label="Verified Seller" />
          <CheckBox field={field8} onChange={setField8} label="Fast Delivery" />
          <CheckBox field={field9} onChange={setField9} label="Return Policy" />
          <CheckBox field={field10} onChange={setField10} label="Customer Support" />
        </SearchInput.Filter>

        <SearchInput.Filter title="Price Range">
          <InputRange field={priceField} onChange={setPriceField} min={0} max={1000} step={10} label="Price ($0 - $1000)" />
        </SearchInput.Filter>

        <SearchInput.Filter title="Availability Date">
          <DatePicker field={dateField} onChange={setDateField} />
        </SearchInput.Filter>

        <SearchInput.Filter title="More Features" collapsible defaultCollapsed>
          <div style={{
          padding: "20px",
          textAlign: "center",
          color: "#666"
        }}>
            Additional filters can be added here...
            <br />
            This demonstrates scrollable content in the popup.
          </div>
        </SearchInput.Filter>
      </SearchInput>;
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with many filters to demonstrate scrollable popup behavior. The popup becomes scrollable when content exceeds the maximum height."
      }
    }
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState("magic john fan");
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    // Filter states
    const [organicField, setOrganicField] = useState(createFormField("organic", true));
    const [shippingField, setShippingField] = useState(createFormField("shipping", false));
    const [ratingField, setRatingField] = useState(createFormField("rating", "4"));
    const ratingOptions = [{
      value: "",
      label: "Any Rating"
    }, {
      value: "4",
      label: "4+ Stars"
    }, {
      value: "3",
      label: "3+ Stars"
    }, {
      value: "2",
      label: "2+ Stars"
    }];
    const handleSearch = (query: string) => {
      if (query.trim()) {
        setSearchHistory(prev => [...prev.slice(-4), query]);
        window.alert(\`Searching for: "\${query}"\`);
      }
    };
    const getActiveFiltersCount = () => {
      let count = 0;
      if (organicField.value) count++;
      if (shippingField.value) count++;
      if (ratingField.value) count++;
      return count;
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      maxWidth: "600px"
    }}>
        <SearchInput value={searchValue} onValueChange={setSearchValue} onSearch={handleSearch} showFilters={isFiltersOpen} onFiltersChange={setIsFiltersOpen} placeholder="Search for products..." popupTitle={\`Filters \${getActiveFiltersCount() > 0 ? \`(\${getActiveFiltersCount()} active)\` : ""}\`}>
          <SearchInput.Filter title="Product Features">
            <CheckBox field={organicField} onChange={setOrganicField} label="Organic Products" />
            <CheckBox field={shippingField} onChange={setShippingField} label="Free Shipping" />
          </SearchInput.Filter>

          <SearchInput.Filter title="Customer Reviews">
            <Select field={ratingField} onChange={setRatingField} options={ratingOptions} placeholder="Select minimum rating..." />
          </SearchInput.Filter>
        </SearchInput>

        <div style={{
        fontSize: "14px",
        color: "#666"
      }}>
          <p>
            <strong>Current Search:</strong> "{searchValue}"
          </p>
          <p>
            <strong>Filters Open:</strong> {isFiltersOpen ? "Yes" : "No"}
          </p>
          <p>
            <strong>Active Filters:</strong> {getActiveFiltersCount()}
          </p>

          {searchHistory.length > 0 && <div>
              <p>
                <strong>Recent Searches:</strong>
              </p>
              <ul style={{
            margin: "0",
            padding: "0 0 0 20px",
            fontSize: "12px"
          }}>
                {searchHistory.map((search, index) => <li key={index} style={{
              marginBottom: "2px"
            }}>
                    "{search}"
                  </li>)}
              </ul>
            </div>}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing controlled state with active filter count and search history. This demonstrates the full power of the composable filter system."
      }
    }
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [organicField] = useState(createFormField("organic", false));
    const [shippingField] = useState(createFormField("shipping", false));
    return <SearchInput disabled value="Disabled search" placeholder="This search is disabled..." popupTitle="Disabled Filters">
        <SearchInput.Filter title="Features">
          <CheckBox field={organicField} onChange={() => {}} label="Organic Products" />
          <CheckBox field={shippingField} onChange={() => {}} label="Free Shipping" />
        </SearchInput.Filter>
      </SearchInput>;
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state of the search input with filters."
      }
    }
  }
}`,...D.parameters?.docs?.source}}};const oe=["Basic","WithoutSearchButton","BasicFilters","ComprehensiveFilters","ScrollableFilters","Interactive","Disabled"];export{T as Basic,_ as BasicFilters,N as ComprehensiveFilters,D as Disabled,q as Interactive,R as ScrollableFilters,O as WithoutSearchButton,oe as __namedExportsOrder,se as default};
