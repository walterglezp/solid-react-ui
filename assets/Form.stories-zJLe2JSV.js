import{j as e,r as n}from"./iframe-CCjepWBu.js";import{B as A}from"./Button-D9psk07Z.js";import{g as T}from"./classnames-helper-C6tUBjOJ.js";import{I as w}from"./InputError-jIwtEdDA.js";import{I as R}from"./Input-DusT4nL9.js";import{S as E}from"./Select-C5-AYNag.js";import{A as V}from"./Autoselect-v4DsGQJA.js";import{C as h}from"./CheckBox-D_bgudjW.js";import{C as O}from"./CheckBoxIcon-DxXW4E7g.js";import{I as U}from"./InputNumber-h5hIVcY_.js";import{L as M}from"./Link-DO3TpPmo.js";import{I as Q}from"./ImageDropZone-EZrFeb-S.js";import{R as v}from"./Radio-cyvcRjnE.js";import{T as _}from"./TextArea-fDROcruV.js";import{D as H}from"./DatePicker-BZ8bcFBK.js";import{D as J}from"./DateTimePicker-BsDYrVDO.js";import{D as K}from"./DateTimeRangePicker-DJQkdkQi.js";import{C as W}from"./Calendar-C8RAQLeU.js";import{I as a}from"./Icon-CVi0seOY.js";import{L as Y,a as i}from"./ListGroupItem-BLJ7qjTe.js";import"./preload-helper-D9Z9MdNV.js";import"./Flex-BrdwESsa.js";import"./validation-helper-Bjp8riig.js";/* empty css              */import"./useClickOutside-BmzIjh_n.js";/* empty css                   */import"./ScrollBar-BjwXsqoL.js";import"./ModalDialog-BlS_Cc8d.js";import"./CalendarWeekDayNames-DczzGK2_.js";import"./getHours-C3_Z2HQp.js";const x=({inline:o=!1,className:s="",error:l="",children:m,noValidate:d=!0,...c})=>{const u=T({"d-flex":o,[s]:!!s});return e.jsxs(e.Fragment,{children:[e.jsx("form",{className:u,noValidate:d,...c,children:m}),l&&e.jsx(w,{error:l})]})};x.__docgenInfo={description:"",methods:[],displayName:"Form",props:{inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},noValidate:{defaultValue:{value:"true",computed:!1},required:!1}}};const Se={title:"Form/Form",component:x,tags:["autodocs"]},r={render:()=>{const[o,s]=n.useState({name:"username",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[l,m]=n.useState({name:"country",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[d,c]=n.useState({name:"city",formName:"login",error:"",value:"",section:0,validate:{required:!0}}),[u,F]=n.useState({name:"quantity",formName:"login",error:"",value:1,section:0,validate:{required:!0}}),[t,g]=n.useState({name:"terms",formName:"login",error:"",value:!1,section:0,validate:{required:!0}}),[N,b]=n.useState({name:"images",formName:"login",error:"",value:[],section:0,validate:{required:!1}}),[f,p]=n.useState({name:"gender",formName:"login",error:"",value:"male",section:0,validate:{required:!0}}),[C,j]=n.useState({name:"bio",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),[y,I]=n.useState({name:"notifications",formName:"login",error:"",value:!0,section:0,validate:{required:!1}}),[z,S]=n.useState({name:"birthdate",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),[D,q]=n.useState({name:"appointment",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),[k,P]=n.useState({name:"eventDate",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),[B,L]=n.useState({name:"calendar",formName:"login",error:"",value:"",section:0,validate:{required:!1}}),G=[{value:"nyc",label:"New York"},{value:"la",label:"Los Angeles"},{value:"chi",label:"Chicago"},{value:"hou",label:"Houston"},{value:"fl",label:"Florida"},{value:"sf",label:"San Francisco"},{value:"bos",label:"Boston"},{value:"mia",label:"Miami"},{value:"dal",label:"Dallas"},{value:"sea",label:"Seattle"},{value:"dc",label:"Washington D.C."},{value:"phx",label:"Phoenix"},{value:"atx",label:"Austin"},{value:"den",label:"Denver"},{value:"or",label:"Oregon"}];return e.jsxs(x,{children:[e.jsx(R,{label:e.jsx(a,{className:"ms-2 text-secondary",name:"user",size:15}),field:o,onChange:s}),e.jsx(E,{className:"mt-4",label:"Country 🌍",placeholder:"Select your country",field:l,variant:"md",onChange:m,options:[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"br",label:"Brazil"}]}),e.jsx(V,{className:"mt-4",label:"City 🌆",placeholder:"Start typing a city...",field:d,options:G,onChange:c}),e.jsx(U,{className:"mt-4",label:"Quantity",min:1,max:10,field:u,onChange:F}),e.jsx(Q,{className:"mt-4",field:N,onChange:b,maxImages:5}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{children:"Select Gender"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(v,{className:"me-2",field:f,checkedValue:"male",label:"Male",color:"primary",size:"md",onChange:p}),e.jsx(v,{className:"me-2",field:f,checkedValue:"female",label:"Female",color:"success",size:"md",onChange:p}),e.jsx(v,{field:f,checkedValue:"other",label:"Other",color:"info",size:"md",onChange:p})]})]}),e.jsx(_,{className:"mt-4",label:"Bio",field:C,onChange:j,rows:4,cols:40}),e.jsx(h,{className:"mt-4",label:e.jsxs(e.Fragment,{children:["I accept the"," ",e.jsx(M,{to:"https://example.com/terms",variant:"info",blank:!0,children:"terms and conditions"})]}),field:t,color:"primary",size:"md",onChange:g}),e.jsx(h,{className:"mt-3",label:"Enable push notifications",field:y,color:"success",size:"md",isSwitch:!0,onChange:I}),e.jsx("div",{className:"mt-3",children:e.jsx(O,{field:t,onChange:g,title:"Agree to terms",children:e.jsx("span",{style:{padding:"0.5rem 1rem",backgroundColor:t.value?"#198754":"#f8f9fa",borderRadius:"0.375rem",color:t.value?"#fff":"#000",userSelect:"none",cursor:"pointer"},children:"✅ Custom Toggle Consent"})})}),e.jsx(H,{className:"mt-4",label:"Birth Date 📅",field:z,onChange:S}),e.jsx(J,{className:"mt-4",label:"Appointment Date & Time 🕐",field:D,onChange:q}),e.jsx(K,{className:"mt-4",label:"Event Duration 📆",field:k,onChange:P}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"form-label",children:"Select Date from Calendar"}),e.jsx(W,{field:B,onChange:L})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{children:"Available Options"}),e.jsxs(Y,{children:[e.jsx(i,{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{name:"home-fill",size:20,className:"me-2 text-primary"}),e.jsx("span",{children:"Dashboard"})]})}),e.jsx(i,{active:!0,children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{name:"user",size:20,className:"me-2 text-success"}),e.jsx("span",{children:"Profile Settings"})]})}),e.jsx(i,{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{name:"gear",size:20,className:"me-2 text-info"}),e.jsx("span",{children:"Account Preferences"})]})}),e.jsx(i,{disabled:!0,children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{name:"shield",size:20,className:"me-2 text-muted"}),e.jsx("span",{children:"Premium Features (Locked)"})]})})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{children:"Icon Showcase"}),e.jsxs("div",{className:"d-flex flex-wrap gap-3 p-3",style:{backgroundColor:"#f8f9fa",borderRadius:"0.5rem"},children:[e.jsx(a,{name:"user",size:24,className:"text-primary me-2"}),e.jsx(a,{name:"home-fill",size:24,className:"text-success me-2"}),e.jsx(a,{name:"gear",size:24,className:"text-info me-2"}),e.jsx(a,{name:"magnifier",size:24,className:"text-warning me-2"}),e.jsx(a,{name:"thumbs-up",size:24,className:"text-danger me-2"}),e.jsx(a,{name:"star",size:24,className:"text-warning me-2"}),e.jsx(a,{name:"bell",size:24,className:"text-secondary me-2"}),e.jsx(a,{name:"envelope",size:24,className:"text-primary me-2"}),e.jsx(a,{name:"calendar",size:24,className:"text-info me-2"}),e.jsx(a,{name:"support",size:24,className:"text-muted me-2"}),e.jsx(a,{name:"plus",size:24,className:"text-success me-2"}),e.jsx(a,{name:"minus",size:24,className:"text-danger me-2"}),e.jsx(a,{name:"edit",size:24,className:"text-secondary me-2"}),e.jsx(a,{name:"trash-alt",size:24,className:"text-danger me-2"}),e.jsx(a,{name:"shield",size:24,className:"text-warning me-2"}),e.jsx(a,{name:"eye",size:24,className:"text-success me-2"})]})]}),e.jsx(A,{variant:"primary",className:"mt-4",isLoading:!0,size:"lg",children:"Submit Form"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    const [notificationsField, setNotificationsField] = useState<FormFieldProps>({
      name: "notifications",
      formName: "login",
      error: "",
      value: true,
      section: 0,
      validate: {
        required: false
      }
    });
    const [birthdateField, setBirthdateField] = useState<FormFieldProps>({
      name: "birthdate",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: false
      }
    });
    const [appointmentField, setAppointmentField] = useState<FormFieldProps>({
      name: "appointment",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: false
      }
    });
    const [eventDateField, setEventDateField] = useState<FormFieldProps>({
      name: "eventDate",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: {
        required: false
      }
    });
    const [calendarField, setCalendarField] = useState<FormFieldProps>({
      name: "calendar",
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
    }, {
      value: "fl",
      label: "Florida"
    }, {
      value: "sf",
      label: "San Francisco"
    }, {
      value: "bos",
      label: "Boston"
    }, {
      value: "mia",
      label: "Miami"
    }, {
      value: "dal",
      label: "Dallas"
    }, {
      value: "sea",
      label: "Seattle"
    }, {
      value: "dc",
      label: "Washington D.C."
    }, {
      value: "phx",
      label: "Phoenix"
    }, {
      value: "atx",
      label: "Austin"
    }, {
      value: "den",
      label: "Denver"
    }, {
      value: "or",
      label: "Oregon"
    }];
    return <Form>
        <Input label={<Icon className="ms-2 text-secondary" name="user" size={15} />} field={usernameField} onChange={setUsernameField} />

        <Select className="mt-4" label="Country 🌍" placeholder="Select your country" field={countryField} variant="md" onChange={setCountryField} options={[{
        value: "us",
        label: "United States"
      }, {
        value: "ca",
        label: "Canada"
      }, {
        value: "mx",
        label: "Mexico"
      }, {
        value: "uk",
        label: "United Kingdom"
      }, {
        value: "fr",
        label: "France"
      }, {
        value: "de",
        label: "Germany"
      }, {
        value: "jp",
        label: "Japan"
      }, {
        value: "cn",
        label: "China"
      }, {
        value: "in",
        label: "India"
      }, {
        value: "br",
        label: "Brazil"
      }]} />

        <Autoselect className="mt-4" label="City 🌆" placeholder="Start typing a city..." field={cityField} options={cityOptions} onChange={setCityField} />

        <InputNumber className="mt-4" label="Quantity" min={1} max={10} field={quantityField} onChange={setQuantityField} />

        <ImageDropZone className="mt-4" field={imagesField} onChange={setImagesField} maxImages={5} />

        <div className="mt-4">
          <h6>Select Gender</h6>
          <div className="d-flex gap-2">
            <Radio className="me-2" field={genderField} checkedValue="male" label="Male" color="primary" size="md" onChange={setGenderField} />
            <Radio className="me-2" field={genderField} checkedValue="female" label="Female" color="success" size="md" onChange={setGenderField} />
            <Radio field={genderField} checkedValue="other" label="Other" color="info" size="md" onChange={setGenderField} />
          </div>
        </div>

        <TextArea className="mt-4" label="Bio" field={bioField} onChange={setBioField} rows={4} cols={40} />

        <CheckBox className="mt-4" label={<>
              I accept the{" "}
              <Link to="https://example.com/terms" variant="info" blank>
                terms and conditions
              </Link>
            </>} field={termsField} color="primary" size="md" onChange={setTermsField} />

        <CheckBox className="mt-3" label="Enable push notifications" field={notificationsField} color="success" size="md" isSwitch={true} onChange={setNotificationsField} />

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

        <DatePicker className="mt-4" label="Birth Date 📅" field={birthdateField} onChange={setBirthdateField} />

        <DateTimePicker className="mt-4" label="Appointment Date & Time 🕐" field={appointmentField} onChange={setAppointmentField} />

        <DateTimeRangePicker className="mt-4" label="Event Duration 📆" field={eventDateField} onChange={setEventDateField} />

        <div className="mt-4">
          <label className="form-label">Select Date from Calendar</label>
          <Calendar field={calendarField} onChange={setCalendarField} />
        </div>

        <div className="mt-4">
          <h6>Available Options</h6>
          <ListGroup>
            <ListGroupItem>
              <div className="d-flex align-items-center">
                <Icon name="home-fill" size={20} className="me-2 text-primary" />
                <span>Dashboard</span>
              </div>
            </ListGroupItem>
            <ListGroupItem active>
              <div className="d-flex align-items-center">
                <Icon name="user" size={20} className="me-2 text-success" />
                <span>Profile Settings</span>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex align-items-center">
                <Icon name="gear" size={20} className="me-2 text-info" />
                <span>Account Preferences</span>
              </div>
            </ListGroupItem>
            <ListGroupItem disabled>
              <div className="d-flex align-items-center">
                <Icon name="shield" size={20} className="me-2 text-muted" />
                <span>Premium Features (Locked)</span>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>

        <div className="mt-4">
          <h6>Icon Showcase</h6>
          <div className="d-flex flex-wrap gap-3 p-3" style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "0.5rem"
        }}>
            <Icon name="user" size={24} className="text-primary me-2" />
            <Icon name="home-fill" size={24} className="text-success me-2" />
            <Icon name="gear" size={24} className="text-info me-2" />
            <Icon name="magnifier" size={24} className="text-warning me-2" />
            <Icon name="thumbs-up" size={24} className="text-danger me-2" />
            <Icon name="star" size={24} className="text-warning me-2" />
            <Icon name="bell" size={24} className="text-secondary me-2" />
            <Icon name="envelope" size={24} className="text-primary me-2" />
            <Icon name="calendar" size={24} className="text-info me-2" />
            <Icon name="support" size={24} className="text-muted me-2" />
            <Icon name="plus" size={24} className="text-success me-2" />
            <Icon name="minus" size={24} className="text-danger me-2" />
            <Icon name="edit" size={24} className="text-secondary me-2" />
            <Icon name="trash-alt" size={24} className="text-danger me-2" />
            <Icon name="shield" size={24} className="text-warning me-2" />
            <Icon name="eye" size={24} className="text-success me-2" />
          </div>
        </div>

        <Button variant="primary" className="mt-4" isLoading={true} size="lg">
          Submit Form
        </Button>
      </Form>;
  }
}`,...r.parameters?.docs?.source}}};const De=["Default"];export{r as Default,De as __namedExportsOrder,Se as default};
