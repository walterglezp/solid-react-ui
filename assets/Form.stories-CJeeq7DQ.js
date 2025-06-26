import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DpKYFrtY.js";import{B as I}from"./Button-BEFhO4Oy.js";import{g as q}from"./classnames-helper-C6tUBjOJ.js";import{I as x}from"./InputError-Di-54Bas.js";import{I as w}from"./Icon-BbGGDe-6.js";import{v as T}from"./validation-helper-Dk7fbBIA.js";import{S as R}from"./Select-BIeh-eHd.js";import{A as V}from"./Autoselect-DlsMukcb.js";import{C as P}from"./CheckBox-Hi0hi3x0.js";import{C as L}from"./CheckBoxIcon-DRNi3Bhh.js";import{I as A}from"./InputNumber-r7Bjhgdf.js";import{L as B}from"./Link-DZTEqmlO.js";import{I as z}from"./ImageDropZone-C-fyb3L8.js";import{R as v}from"./Radio-BzBOatXR.js";import{T as U}from"./TextArea-DmcVfRqE.js";import"./Flex-lYRWHHvf.js";import"./ThemeContext-8-f6zBTN.js";import"./uuid-Cs3Zzn0-.js";import"./ScrollBar-V8uTD4Wh.js";const b=({inline:l=!1,className:r="",error:t="",children:i,noValidate:m=!0,...a})=>{const s=q({"d-flex":l,[r]:!!r});return e.jsxs(e.Fragment,{children:[e.jsx("form",{className:s,noValidate:m,...a,children:i}),t&&e.jsx(x,{error:t})]})};b.__docgenInfo={description:"",methods:[],displayName:"Form",props:{inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},noValidate:{defaultValue:{value:"true",computed:!1},required:!1}}};const k=({label:l,append:r,variant:t="md",className:i="",disabled:m=!1,field:a,onChange:s,...c})=>{const o=q({"input-group":!0,[`input-group-${t}`]:!0,"invalid-field":!!a.error,[i]:!!i}),u=g=>{T({...a,value:g.target.value},s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:o,children:[l&&e.jsx("span",{className:"input-group-text",children:l}),e.jsx("input",{...c,disabled:m,className:"form-control",name:a.name,value:a.value,onChange:u,onBlur:u}),a.value&&e.jsx("span",{className:"input-group-text",children:e.jsx(w,{className:"cursor-pointer",name:"x",size:13,onClick:()=>s({...a,value:""})})}),r&&e.jsx("span",{className:"input-group-text",children:r})]}),a.error&&e.jsx(x,{error:a.error})]})};k.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},append:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},field:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: FormFieldValueProps;
  name: string;
  formName: string;
  error: string;
  section: number;
  validate: ValidateProps;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:`| string
| number
| boolean
| File
| File[]
| null
| Array<string>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"},{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"formName",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"section",value:{name:"number",required:!0}},{key:"validate",value:{name:"signature",type:"object",raw:`{
  noValidate?: boolean;
  required?: boolean;
  minStrLength?: number;
  maxStrLength?: number;
  type?: "number" | "text" | "email" | "password";
  minImages?: number;
  maxImages?: number;
  isImagesList?: boolean;
  fileSize?: number;
  dateTimePicker?: boolean;
  dateTimeRangePicker?: boolean;
  email?: boolean;
  phone?: boolean;
  integer?: boolean;
  isYoutubeUrl?: boolean;
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(field: FormFieldProps) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: FormFieldValueProps;
  name: string;
  formName: string;
  error: string;
  section: number;
  validate: ValidateProps;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:`| string
| number
| boolean
| File
| File[]
| null
| Array<string>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"},{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"formName",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"section",value:{name:"number",required:!0}},{key:"validate",value:{name:"signature",type:"object",raw:`{
  noValidate?: boolean;
  required?: boolean;
  minStrLength?: number;
  maxStrLength?: number;
  type?: "number" | "text" | "email" | "password";
  minImages?: number;
  maxImages?: number;
  isImagesList?: boolean;
  fileSize?: number;
  dateTimePicker?: boolean;
  dateTimeRangePicker?: boolean;
  email?: boolean;
  phone?: boolean;
  integer?: boolean;
  isYoutubeUrl?: boolean;
}`,signature:{properties:[{key:"noValidate",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"minStrLength",value:{name:"number",required:!1}},{key:"maxStrLength",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:'"number" | "text" | "email" | "password"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"password"'}],required:!1}},{key:"minImages",value:{name:"number",required:!1}},{key:"maxImages",value:{name:"number",required:!1}},{key:"isImagesList",value:{name:"boolean",required:!1}},{key:"fileSize",value:{name:"number",required:!1}},{key:"dateTimePicker",value:{name:"boolean",required:!1}},{key:"dateTimeRangePicker",value:{name:"boolean",required:!1}},{key:"email",value:{name:"boolean",required:!1}},{key:"phone",value:{name:"boolean",required:!1}},{key:"integer",value:{name:"boolean",required:!1}},{key:"isYoutubeUrl",value:{name:"boolean",required:!1}}]},required:!0}}]}},name:"field"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const te={title:"Form/Form",component:b,tags:["autodocs"]},d={render:()=>{const[l,r]=n.useState({name:"username",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[t,i]=n.useState({name:"country",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[m,a]=n.useState({name:"city",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[s,c]=n.useState({name:"quantity",formName:"login",error:"",value:1,section:0,validate:{required:!0}}),[o,u]=n.useState({name:"terms",formName:"login",error:"",value:!1,section:0,validate:{required:!0}}),[g,N]=n.useState({name:"images",formName:"login",error:"",value:[],section:0,validate:{required:!1}}),[p,f]=n.useState({name:"gender",formName:"login",error:"",value:"male",section:0,validate:{required:!0}}),[C,S]=n.useState({name:"bio",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),j=[{value:"nyc",label:"New York"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"}];return e.jsxs(b,{children:[e.jsx(k,{label:e.jsx(e.Fragment,{children:"Username 👱"}),field:l,onChange:r}),e.jsx(R,{className:"mt-4",label:"Country 🌍",placeholder:"Select your country",field:t,variant:"md",onChange:i,options:[{value:"",label:"--"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"}]}),e.jsx(V,{className:"mt-4",label:"City 🌆",placeholder:"Start typing a city...",field:m,options:j,onChange:a}),e.jsx(A,{className:"mt-4",label:"Quantity",min:1,max:10,field:s,onChange:c}),e.jsx(z,{className:"mt-4",field:g,onChange:N,maxImages:5}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{children:"Select Gender"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(v,{field:p,checkedValue:"male",label:"Male",variant:!1,btnSize:"sm",onChange:f}),e.jsx(v,{field:p,checkedValue:"female",label:"Female",variant:!1,btnSize:"sm",onChange:f}),e.jsx(v,{field:p,checkedValue:"other",label:"Other",variant:!1,btnSize:"sm",onChange:f})]})]}),e.jsx(U,{className:"mt-4",label:"Bio",field:C,onChange:S,rows:4,cols:40}),e.jsx(P,{className:"mt-4",label:e.jsxs(e.Fragment,{children:["I accept the"," ",e.jsx(B,{to:"https://example.com/terms",variant:"info",blank:!0,children:"terms and conditions"})]}),field:o,onChange:u}),e.jsx("div",{className:"mt-3",children:e.jsx(L,{field:o,onChange:u,title:"Agree to terms",children:e.jsx("span",{style:{padding:"0.5rem 1rem",backgroundColor:o.value?"#198754":"#f8f9fa",borderRadius:"0.375rem",color:o.value?"#fff":"#000",userSelect:"none",cursor:"pointer"},children:"✅ Custom Toggle Consent"})})}),e.jsx(I,{variant:"primary",className:"mt-4",isLoading:!1,children:"Submit Form"})]})}};var y,F,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(F=d.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const ie=["Default"];export{d as Default,ie as __namedExportsOrder,te as default};
