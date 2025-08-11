import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";
import { Autoselect } from "./Autoselect";
import { CheckBox } from "./CheckBox";
import { CheckBoxIcon } from "./CheckBoxIcon";
import { InputNumber } from "./InputNumber";
import { Link } from "../navigation/Link";
import { ImageDropZone } from "./ImageDropZone";
import { Radio } from "./Radio";
import { TextArea } from "./TextArea";
import { DatePicker } from "./date/DatePicker";
import { DateTimePicker } from "./date/DateTimePicker";
import { DateTimeRangePicker } from "./date/DateTimeRangePicker";
import { Calendar } from "./date/Calendar";
import type { FormFieldProps } from "./Form";
import { Icon } from "../graphic/Icon";
import { ListGroup } from "../list/ListGroup";
import { ListGroupItem } from "../list/ListGroupItem";

const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    const [usernameField, setUsernameField] = useState<FormFieldProps>({
      name: "username",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    const [countryField, setCountryField] = useState<FormFieldProps>({
      name: "country",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    const [cityField, setCityField] = useState<FormFieldProps>({
      name: "city",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    const [quantityField, setQuantityField] = useState<FormFieldProps>({
      name: "quantity",
      formName: "login",
      error: "",
      value: 1,
      section: 0,
      validate: { required: true },
    });

    const [termsField, setTermsField] = useState<FormFieldProps>({
      name: "terms",
      formName: "login",
      error: "",
      value: false,
      section: 0,
      validate: { required: true },
    });

    const [imagesField, setImagesField] = useState<
      FormFieldProps & { value: string[] }
    >({
      name: "images",
      formName: "login",
      error: "",
      value: [],
      section: 0,
      validate: { required: false },
    });

    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "login",
      error: "",
      value: "male",
      section: 0,
      validate: { required: true },
    });

    const [bioField, setBioField] = useState<FormFieldProps>({
      name: "bio",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
    });

    const [notificationsField, setNotificationsField] =
      useState<FormFieldProps>({
        name: "notifications",
        formName: "login",
        error: "",
        value: true,
        section: 0,
        validate: { required: false },
      });

    const [birthdateField, setBirthdateField] = useState<FormFieldProps>({
      name: "birthdate",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
    });

    const [appointmentField, setAppointmentField] = useState<FormFieldProps>({
      name: "appointment",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
    });

    const [eventDateField, setEventDateField] = useState<FormFieldProps>({
      name: "eventDate",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
    });

    const [calendarField, setCalendarField] = useState<FormFieldProps>({
      name: "calendar",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
    });

    const cityOptions = [
      { value: "nyc", label: "New York" },
      { value: "la", label: "Los Angeles" },
      { value: "chi", label: "Chicago" },
      { value: "hou", label: "Houston" },
      { value: "fl", label: "Florida" },
      { value: "sf", label: "San Francisco" },
      { value: "bos", label: "Boston" },
      { value: "mia", label: "Miami" },
      { value: "dal", label: "Dallas" },
      { value: "sea", label: "Seattle" },
      { value: "dc", label: "Washington D.C." },
      { value: "phx", label: "Phoenix" },
      { value: "atx", label: "Austin" },
      { value: "den", label: "Denver" },
      { value: "or", label: "Oregon" },
    ];

    return (
      <Form>
        <Input
          label={<Icon className="ms-2 text-secondary" name="user" size={15} />}
          field={usernameField}
          onChange={setUsernameField}
        />

        <Select
          className="mt-4"
          label="Country 🌍"
          placeholder="Select your country"
          field={countryField}
          variant="md"
          onChange={setCountryField}
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "mx", label: "Mexico" },
            { value: "uk", label: "United Kingdom" },
            { value: "fr", label: "France" },
            { value: "de", label: "Germany" },
            { value: "jp", label: "Japan" },
            { value: "cn", label: "China" },
            { value: "in", label: "India" },
            { value: "br", label: "Brazil" },
          ]}
        />

        <Autoselect
          className="mt-4"
          label="City 🌆"
          placeholder="Start typing a city..."
          field={cityField}
          options={cityOptions}
          onChange={setCityField}
        />

        <InputNumber
          className="mt-4"
          label="Quantity"
          min={1}
          max={10}
          field={quantityField}
          onChange={setQuantityField}
        />

        <ImageDropZone
          className="mt-4"
          field={imagesField}
          onChange={setImagesField}
          maxImages={5}
        />

        <div className="mt-4">
          <h6>Select Gender</h6>
          <div className="d-flex gap-2">
            <Radio
              className="me-2"
              field={genderField}
              checkedValue="male"
              label="Male"
              color="primary"
              size="md"
              onChange={setGenderField}
            />
            <Radio
              className="me-2"
              field={genderField}
              checkedValue="female"
              label="Female"
              color="success"
              size="md"
              onChange={setGenderField}
            />
            <Radio
              field={genderField}
              checkedValue="other"
              label="Other"
              color="info"
              size="md"
              onChange={setGenderField}
            />
          </div>
        </div>

        <TextArea
          className="mt-4"
          label="Bio"
          field={bioField}
          onChange={setBioField}
          rows={4}
          cols={40}
        />

        <CheckBox
          className="mt-4"
          label={
            <>
              I accept the{" "}
              <Link to="https://example.com/terms" variant="info" blank>
                terms and conditions
              </Link>
            </>
          }
          field={termsField}
          color="primary"
          size="md"
          onChange={setTermsField}
        />

        <CheckBox
          className="mt-3"
          label="Enable push notifications"
          field={notificationsField}
          color="success"
          size="md"
          isSwitch={true}
          onChange={setNotificationsField}
        />

        <div className="mt-3">
          <CheckBoxIcon
            field={termsField}
            onChange={setTermsField}
            title="Agree to terms"
          >
            <span
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: termsField.value ? "#198754" : "#f8f9fa",
                borderRadius: "0.375rem",
                color: termsField.value ? "#fff" : "#000",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              ✅ Custom Toggle Consent
            </span>
          </CheckBoxIcon>
        </div>

        <DatePicker
          className="mt-4"
          label="Birth Date 📅"
          field={birthdateField}
          onChange={setBirthdateField}
        />

        <DateTimePicker
          className="mt-4"
          label="Appointment Date & Time 🕐"
          field={appointmentField}
          onChange={setAppointmentField}
        />

        <DateTimeRangePicker
          className="mt-4"
          label="Event Duration 📆"
          field={eventDateField}
          onChange={setEventDateField}
        />

        <div className="mt-4">
          <label className="form-label">Select Date from Calendar</label>
          <Calendar field={calendarField} onChange={setCalendarField} />
        </div>

        <div className="mt-4">
          <h6>Available Options</h6>
          <ListGroup>
            <ListGroupItem>
              <div className="d-flex align-items-center">
                <Icon
                  name="home-fill"
                  size={20}
                  className="me-2 text-primary"
                />
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
          <div
            className="d-flex flex-wrap gap-3 p-3"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "0.5rem" }}
          >
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
      </Form>
    );
  },
};
