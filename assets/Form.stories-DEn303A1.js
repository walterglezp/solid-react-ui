import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CUs4BiuB.js";import{B as j}from"./Button-BEFhO4Oy.js";import{g as q}from"./classnames-helper-C6tUBjOJ.js";import{I}from"./InputError-BTrUxWsC.js";import{I as k}from"./Input-DVwCTlw2.js";import{S as B}from"./Select-B4x_oHpn.js";import{A as T}from"./Autoselect-DxqJPoW0.js";import{C as V}from"./CheckBox-BpXPkL7P.js";import{C as A}from"./CheckBoxIcon-2riRNHtv.js";import{I as L}from"./InputNumber-CipwkIBP.js";import{L as P}from"./Link-DZTEqmlO.js";import{I as R}from"./ImageDropZone-p6KynfqI.js";import{R as f}from"./Radio-B4FSbNbs.js";import{T as G}from"./TextArea-BeCSl4Qd.js";import"./Icon-BBbnfbwg.js";import"./Flex-lYRWHHvf.js";import"./validation-helper-Bjp8riig.js";import"./ThemeContext-B167Xqm_.js";import"./useClickOutside-DFL4AyUB.js";import"./uuid-helper-Cs3Zzn0-.js";import"./ScrollBar-V8uTD4Wh.js";const p=({inline:s=!1,className:a="",error:t="",children:i,noValidate:o=!0,...m})=>{const d=q({"d-flex":s,[a]:!!a});return e.jsxs(e.Fragment,{children:[e.jsx("form",{className:d,noValidate:o,...m,children:i}),t&&e.jsx(I,{error:t})]})};p.__docgenInfo={description:"",methods:[],displayName:"Form",props:{inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},noValidate:{defaultValue:{value:"true",computed:!1},required:!1}}};const re={title:"Form/Form",component:p,tags:["autodocs"]},r={render:()=>{const[s,a]=n.useState({name:"username",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[t,i]=n.useState({name:"country",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[o,m]=n.useState({name:"city",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[d,b]=n.useState({name:"quantity",formName:"login",error:"",value:1,section:0,validate:{required:!0}}),[l,g]=n.useState({name:"terms",formName:"login",error:"",value:!1,section:0,validate:{required:!0}}),[y,C]=n.useState({name:"images",formName:"login",error:"",value:[],section:0,validate:{required:!1}}),[u,c]=n.useState({name:"gender",formName:"login",error:"",value:"male",section:0,validate:{required:!0}}),[x,N]=n.useState({name:"bio",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),S=[{value:"nyc",label:"New York"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}];return e.jsxs(p,{children:[e.jsx(k,{label:e.jsx(e.Fragment,{children:"Username 👱"}),field:s,onChange:a}),e.jsx(B,{className:"mt-4",label:"Country 🌍",placeholder:"Select your country",field:t,variant:"md",onChange:i,options:[{value:"",label:"--"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"}]}),e.jsx(T,{className:"mt-4",label:"City 🌆",placeholder:"Start typing a city...",field:o,options:S,onChange:m}),e.jsx(L,{className:"mt-4",label:"Quantity",min:1,max:10,field:d,onChange:b}),e.jsx(R,{className:"mt-4",field:y,onChange:C,maxImages:5}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{children:"Select Gender"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(f,{field:u,checkedValue:"male",label:"Male",variant:!1,btnSize:"sm",onChange:c}),e.jsx(f,{field:u,checkedValue:"female",label:"Female",variant:!1,btnSize:"sm",onChange:c}),e.jsx(f,{field:u,checkedValue:"other",label:"Other",variant:!1,btnSize:"sm",onChange:c})]})]}),e.jsx(G,{className:"mt-4",label:"Bio",field:x,onChange:N,rows:4,cols:40}),e.jsx(V,{className:"mt-4",label:e.jsxs(e.Fragment,{children:["I accept the"," ",e.jsx(P,{to:"https://example.com/terms",variant:"info",blank:!0,children:"terms and conditions"})]}),field:l,onChange:g}),e.jsx("div",{className:"mt-3",children:e.jsx(A,{field:l,onChange:g,title:"Agree to terms",children:e.jsx("span",{style:{padding:"0.5rem 1rem",backgroundColor:l.value?"#198754":"#f8f9fa",borderRadius:"0.375rem",color:l.value?"#fff":"#000",userSelect:"none",cursor:"pointer"},children:"✅ Custom Toggle Consent"})})}),e.jsx(j,{variant:"primary",className:"mt-4",isLoading:!1,children:"Submit Form"})]})}};var F,v,h;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [usernameField, setUsernameField] = useState<FormFieldProps>({
      name: "username",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: true
      }
    });
    const [countryField, setCountryField] = useState<FormFieldProps>({
      name: "country",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: true
      }
    });
    const [cityField, setCityField] = useState<FormFieldProps>({
      name: "city",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: true
      }
    });
    const [quantityField, setQuantityField] = useState<FormFieldProps>({
      name: "quantity",
      formName: "login",
      error: "",
      value: 1,
      section: 0,
      validate: {
        required: true
      }
    });
    const [termsField, setTermsField] = useState<FormFieldProps>({
      name: "terms",
      formName: "login",
      error: "",
      value: false,
      section: 0,
      validate: {
        required: true
      }
    });
    const [imagesField, setImagesField] = useState<FormFieldProps & {
      value: string[];
    }>({
      name: "images",
      formName: "login",
      error: "",
      value: [],
      section: 0,
      validate: {
        required: false
      }
    });
    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "login",
      error: "",
      value: "male",
      section: 0,
      validate: {
        required: true
      }
    });
    const [bioField, setBioField] = useState<FormFieldProps>({
      name: "bio",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: false
      }
    });
    const cityOptions = [{
      value: "nyc",
      label: "New York"
    }, {
      value: "la",
      label: "Los Angeles"
    }, {
      value: "chi",
      label: "Chicago"
    }, {
      value: "hou",
      label: "Houston"
    }];
    return <Form>
        <Input label={<>Username 👱</>} field={usernameField} onChange={setUsernameField} />

        <Select className="mt-4" label="Country 🌍" placeholder="Select your country" field={countryField} variant="md" onChange={setCountryField} options={[{
        value: "",
        label: "--"
      }, {
        value: "us",
        label: "United States"
      }, {
        value: "ca",
        label: "Canada"
      }, {
        value: "mx",
        label: "Mexico"
      }]} />

        <Autoselect className="mt-4" label="City 🌆" placeholder="Start typing a city..." field={cityField} options={cityOptions} onChange={setCityField} />

        <InputNumber className="mt-4" label="Quantity" min={1} max={10} field={quantityField} onChange={setQuantityField} />

        <ImageDropZone className="mt-4" field={imagesField} onChange={setImagesField} maxImages={5} />

        <div className="mt-4">
          <h6>Select Gender</h6>
          <div className="d-flex gap-2">
            <Radio field={genderField} checkedValue="male" label="Male" variant={false} btnSize="sm" onChange={setGenderField} />
            <Radio field={genderField} checkedValue="female" label="Female" variant={false} btnSize="sm" onChange={setGenderField} />
            <Radio field={genderField} checkedValue="other" label="Other" variant={false} btnSize="sm" onChange={setGenderField} />
          </div>
        </div>

        <TextArea className="mt-4" label="Bio" field={bioField} onChange={setBioField} rows={4} cols={40} />

        <CheckBox className="mt-4" label={<>
              I accept the{" "}
              <Link to="https://example.com/terms" variant="info" blank>
                terms and conditions
              </Link>
            </>} field={termsField} onChange={setTermsField} />

        <div className="mt-3">
          <CheckBoxIcon field={termsField} onChange={setTermsField} title="Agree to terms">
            <span style={{
            padding: "0.5rem 1rem",
            backgroundColor: termsField.value ? "#198754" : "#f8f9fa",
            borderRadius: "0.375rem",
            color: termsField.value ? "#fff" : "#000",
            userSelect: "none",
            cursor: "pointer"
          }}>
              ✅ Custom Toggle Consent
            </span>
          </CheckBoxIcon>
        </div>

        <Button variant="primary" className="mt-4" isLoading={false}>
          Submit Form
        </Button>
      </Form>;
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const se=["Default"];export{r as Default,se as __namedExportsOrder,re as default};
