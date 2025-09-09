import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import { themes } from "./presets";
import type { FormFieldProps } from "../components/form/Form";

// Layout components
import { Container } from "../components/layout/Container";
import { Row } from "../components/layout/Row";
import { Column } from "../components/layout/Column";
import { Flex } from "../components/layout/Flex";

// Form components
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";
import { InputNumber } from "../components/form/InputNumber";
import { InputRange } from "../components/form/InputRange";
import { TextArea } from "../components/form/TextArea";
import { Select } from "../components/form/Select";
import { CheckBox } from "../components/form/CheckBox";
import { Radio } from "../components/form/Radio";
import { DatePicker } from "../components/form/date/DatePicker";

// Navigation components
import { Link } from "../components/navigation/Link";

// List components
import { ListGroup } from "../components/list/ListGroup";
import { ListGroupItem } from "../components/list/ListGroupItem";

// Common components
import { Alert } from "../components/common/Alert";
import { Badge } from "../components/common/Badge";
import { ModalDialog } from "../components/common/ModalDialog";
import { Tooltip } from "../components/common/Tooltip";
import { StarRating } from "../components/common/StarRating";
import { FormatCurrency } from "../components/common/FormatCurrency";
import { Accordion } from "../components/common/Accordion";

// Graphic components
import { Icon } from "../components/graphic/Icon";

const meta: Meta<typeof ThemeProvider> = {
  title: "Theme/Dashboard Showcase",
  component: ThemeProvider,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

const DashboardShowcase: React.FC = () => {
  // Form field states
  const [nameField, setNameField] = useState<FormFieldProps>({
    name: "name",
    formName: "dashboard",
    error: "",
    value: "John Doe",
    section: 0,
    validate: { required: true },
  });

  const [emailField, setEmailField] = useState<FormFieldProps>({
    name: "email",
    formName: "dashboard",
    error: "",
    value: "john@example.com",
    section: 0,
    validate: { required: true },
  });

  const [ageField, setAgeField] = useState<FormFieldProps>({
    name: "age",
    formName: "dashboard",
    error: "",
    value: 28,
    section: 0,
    validate: { required: false },
  });

  const [rangeField, setRangeField] = useState<FormFieldProps>({
    name: "range",
    formName: "dashboard",
    error: "",
    value: 65,
    section: 0,
    validate: { required: false },
  });

  const [bioField, setBioField] = useState<FormFieldProps>({
    name: "bio",
    formName: "dashboard",
    error: "",
    value:
      "Software developer passionate about creating great user experiences.",
    section: 0,
    validate: { required: false },
  });

  const [countryField, setCountryField] = useState<FormFieldProps>({
    name: "country",
    formName: "dashboard",
    error: "",
    value: "us",
    section: 0,
    validate: { required: true },
  });

  const [activeField, setActiveField] = useState<FormFieldProps>({
    name: "active",
    formName: "dashboard",
    error: "",
    value: true,
    section: 0,
    validate: { required: false },
  });

  const [roleField, setRoleField] = useState<FormFieldProps>({
    name: "role",
    formName: "dashboard",
    error: "",
    value: "developer",
    section: 0,
    validate: { required: true },
  });

  const [dateField, setDateField] = useState<FormFieldProps>({
    name: "date",
    formName: "dashboard",
    error: "",
    value: "",
    section: 0,
    validate: { required: false },
  });

  const [rating, setRating] = useState(4);
  const [showModal, setShowModal] = useState(false);

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ];

  const accordionItems = [
    {
      id: "settings",
      title: "Account Settings",
      content:
        "Manage your account preferences, notifications, and privacy settings.",
    },
    {
      id: "billing",
      title: "Billing Information",
      content:
        "View and update your billing details, payment methods, and subscription status.",
    },
    {
      id: "security",
      title: "Security",
      content:
        "Configure two-factor authentication, change password, and review login activity.",
    },
  ];

  return (
    <Container>
      {/* Header Section */}
      <Row>
        <Column>
          <Flex direction="row" justify="between" align="center">
            <h1>Dashboard</h1>
            <Flex direction="row" align="center">
              <Badge variant="success">Online</Badge>
              <Badge variant="info">Pro</Badge>
              <Button variant="primary" size="sm">
                <Icon name="gear" size={16} />
                Settings
              </Button>
            </Flex>
          </Flex>
        </Column>
      </Row>

      {/* Alerts Section */}
      <Row>
        <Column>
          <Alert variant="success">
            <Icon name="check-mark-fill" size={16} />
            Your profile has been successfully updated!
          </Alert>
        </Column>
      </Row>

      <Row>
        <Column size="3">
          {/* Quick Stats */}
          <h3>Quick Stats</h3>
          <ListGroup>
            <ListGroupItem>
              <Flex direction="row" justify="between" align="center">
                <span>Total Users</span>
                <Badge variant="primary">1,234</Badge>
              </Flex>
            </ListGroupItem>
            <ListGroupItem>
              <Flex direction="row" justify="between" align="center">
                <span>Revenue</span>
                <FormatCurrency value={12450.75} />
              </Flex>
            </ListGroupItem>
            <ListGroupItem>
              <Flex direction="row" justify="between" align="center">
                <span>Rating</span>
                <StarRating rating={rating} onRatingChange={setRating} />
              </Flex>
            </ListGroupItem>
          </ListGroup>
        </Column>

        <Column size="9">
          {/* Main Content Area */}
          <Row>
            <Column>
              <h2>User Profile Settings</h2>
            </Column>
          </Row>

          <Row>
            <Column size="6">
              {/* Personal Information Form */}
              <h3>Personal Information</h3>

              <Input
                label="Full Name"
                field={nameField}
                onChange={setNameField}
                placeholder="Enter your full name"
              />

              <Input
                label="Email Address"
                field={emailField}
                onChange={setEmailField}
                placeholder="Enter your email"
                type="email"
              />

              <InputNumber
                label="Age"
                field={ageField}
                onChange={setAgeField}
                min={18}
                max={100}
              />

              <InputRange
                label="Experience Level"
                field={rangeField}
                onChange={setRangeField}
                min={0}
                max={100}
                step={5}
              />

              <TextArea
                label="Bio"
                field={bioField}
                onChange={setBioField}
                rows={4}
              />

              <Select
                label="Country"
                field={countryField}
                onChange={setCountryField}
                options={countryOptions}
              />
            </Column>

            <Column size="6">
              {/* Account Settings */}
              <h3>Account Settings</h3>

              <CheckBox
                label="Account Active"
                field={activeField}
                onChange={setActiveField}
              />

              <h4>User Role</h4>
              <Radio
                label="Developer"
                field={roleField}
                onChange={setRoleField}
                checkedValue="developer"
              />
              <Radio
                label="Designer"
                field={roleField}
                onChange={setRoleField}
                checkedValue="designer"
              />
              <Radio
                label="Manager"
                field={roleField}
                onChange={setRoleField}
                checkedValue="manager"
              />

              <DatePicker
                label="Join Date"
                field={dateField}
                onChange={setDateField}
              />

              <Flex direction="row">
                <Tooltip content="Save all changes">
                  <Button variant="success" size="md">
                    <Icon name="save-disc" size={16} />
                    Save Changes
                  </Button>
                </Tooltip>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setShowModal(true)}
                >
                  Preview
                </Button>

                <Link to="/help" variant="primary">
                  Need Help?
                </Link>
              </Flex>
            </Column>
          </Row>

          {/* Image Gallery Section */}
          <Row>
            <Column>
              <h3>Gallery</h3>
              <Flex direction="row">
                <img
                  src="https://via.placeholder.com/200x150/4f46e5/ffffff?text=Image+1"
                  alt="Gallery Image 1"
                  style={{ marginRight: "1rem", borderRadius: "8px" }}
                />
                <img
                  src="https://via.placeholder.com/200x150/059669/ffffff?text=Image+2"
                  alt="Gallery Image 2"
                  style={{ marginRight: "1rem", borderRadius: "8px" }}
                />
                <img
                  src="https://via.placeholder.com/200x150/dc2626/ffffff?text=Image+3"
                  alt="Gallery Image 3"
                  style={{ borderRadius: "8px" }}
                />
              </Flex>
            </Column>
          </Row>

          {/* Settings Accordion */}
          <Row>
            <Column>
              <h3>Advanced Settings</h3>
              <Accordion items={accordionItems} />
            </Column>
          </Row>

          {/* Action Buttons */}
          <Row>
            <Column>
              <h3>Actions</h3>
              <Flex direction="row">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="success">Success Action</Button>
                <Button variant="info">Info Action</Button>
                <Button variant="warning">Warning Action</Button>
                <Button variant="danger">Danger Action</Button>
              </Flex>
            </Column>
          </Row>
        </Column>
      </Row>

      {/* Modal Dialog */}
      <ModalDialog
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Profile Preview"
        size="lg"
      >
        <h4>Profile Summary</h4>
        <p>
          <strong>Name:</strong> {String(nameField.value)}
        </p>
        <p>
          <strong>Email:</strong> {String(emailField.value)}
        </p>
        <p>
          <strong>Age:</strong> {String(ageField.value)}
        </p>
        <p>
          <strong>Country:</strong>{" "}
          {
            countryOptions.find((opt) => opt.value === countryField.value)
              ?.label
          }
        </p>
        <p>
          <strong>Bio:</strong> {String(bioField.value)}
        </p>
        <p>
          <strong>Rating:</strong> <StarRating rating={rating} readonly />
        </p>

        <Flex direction="row">
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Flex>
      </ModalDialog>
    </Container>
  );
};

export const LightTheme: Story = {
  args: {
    theme: themes.light,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <DashboardShowcase />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete dashboard showcase demonstrating all UI components in the Light theme.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: themes.dark,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <DashboardShowcase />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete dashboard showcase demonstrating all UI components in the Dark theme.",
      },
    },
  },
};
