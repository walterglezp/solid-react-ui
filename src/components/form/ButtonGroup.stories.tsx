import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Form/ButtonGroup",
  tags: ["autodocs"],
  args: {
    size: "sm",
    vertical: false,
    variant: "group",
    "aria-label": "Button group",
    role: "group",
  },
  argTypes: {
    children: { control: false }, // hide from Controls panel
    variant: {
      control: "select",
      options: ["group", "toolbar", "segmented"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Medium: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Toolbar: Story = {
  args: {
    variant: "toolbar",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup size="sm" role="group" aria-label="Group 1">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" role="group" aria-label="Group 2">
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

export const Segmented: Story = {
  args: {
    variant: "segmented",
    color: "primary",
    "aria-label": "Sort options",
  },
  render: (args) => {
    const [activeButton, setActiveButton] = useState("popular");

    return (
      <ButtonGroup {...args}>
        <Button
          variant="primary"
          className={activeButton === "latest" ? "active" : ""}
          onClick={() => setActiveButton("latest")}
        >
          Latest
        </Button>
        <Button
          variant="primary"
          className={activeButton === "popular" ? "active" : ""}
          onClick={() => setActiveButton("popular")}
        >
          Popular
        </Button>
        <Button
          variant="primary"
          className={activeButton === "oldest" ? "active" : ""}
          onClick={() => setActiveButton("oldest")}
        >
          Oldest
        </Button>
      </ButtonGroup>
    );
  },
};

export const SegmentedSizes: Story = {
  render: () => {
    const [activeSmall, setActiveSmall] = useState("option2");
    const [activeMedium, setActiveMedium] = useState("option1");
    const [activeLarge, setActiveLarge] = useState("option3");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        <div>
          <h4>Small Segmented Control</h4>
          <ButtonGroup
            variant="segmented"
            color="primary"
            size="sm"
            aria-label="Small options"
          >
            <Button
              variant="primary"
              className={activeSmall === "option1" ? "active" : ""}
              onClick={() => setActiveSmall("option1")}
            >
              Day
            </Button>
            <Button
              variant="primary"
              className={activeSmall === "option2" ? "active" : ""}
              onClick={() => setActiveSmall("option2")}
            >
              Week
            </Button>
            <Button
              variant="primary"
              className={activeSmall === "option3" ? "active" : ""}
              onClick={() => setActiveSmall("option3")}
            >
              Month
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4>Medium Segmented Control</h4>
          <ButtonGroup
            variant="segmented"
            color="success"
            size="md"
            aria-label="Medium options"
          >
            <Button
              variant="primary"
              className={activeMedium === "option1" ? "active" : ""}
              onClick={() => setActiveMedium("option1")}
            >
              Latest
            </Button>
            <Button
              variant="primary"
              className={activeMedium === "option2" ? "active" : ""}
              onClick={() => setActiveMedium("option2")}
            >
              Popular
            </Button>
            <Button
              variant="primary"
              className={activeMedium === "option3" ? "active" : ""}
              onClick={() => setActiveMedium("option3")}
            >
              Oldest
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4>Large Segmented Control</h4>
          <ButtonGroup
            variant="segmented"
            color="danger"
            size="lg"
            aria-label="Large options"
          >
            <Button
              variant="primary"
              className={activeLarge === "option1" ? "active" : ""}
              onClick={() => setActiveLarge("option1")}
            >
              All Items
            </Button>
            <Button
              variant="primary"
              className={activeLarge === "option2" ? "active" : ""}
              onClick={() => setActiveLarge("option2")}
            >
              Favorites
            </Button>
            <Button
              variant="primary"
              className={activeLarge === "option3" ? "active" : ""}
              onClick={() => setActiveLarge("option3")}
            >
              Recent
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
};

export const SegmentedColorVariants: Story = {
  render: () => {
    const [activePrimary, setActivePrimary] = useState("option2");
    const [activeSecondary, setActiveSecondary] = useState("option1");
    const [activeSuccess, setActiveSuccess] = useState("option3");
    const [activeDanger, setActiveDanger] = useState("option1");
    const [activeWarning, setActiveWarning] = useState("option2");
    const [activeInfo, setActiveInfo] = useState("option3");
    const [activeLight, setActiveLight] = useState("option2");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div>
          <h3>All Color Variants</h3>
          <p style={{ marginBottom: "1.5rem", color: "#6c757d" }}>
            Segmented controls support all theme color variants for different
            contexts and branding needs.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Primary</h4>
          <ButtonGroup
            variant="segmented"
            color="primary"
            aria-label="Primary options"
          >
            <Button
              variant="primary"
              className={activePrimary === "option1" ? "active" : ""}
              onClick={() => setActivePrimary("option1")}
            >
              Latest
            </Button>
            <Button
              variant="primary"
              className={activePrimary === "option2" ? "active" : ""}
              onClick={() => setActivePrimary("option2")}
            >
              Popular
            </Button>
            <Button
              variant="primary"
              className={activePrimary === "option3" ? "active" : ""}
              onClick={() => setActivePrimary("option3")}
            >
              Oldest
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Secondary</h4>
          <ButtonGroup
            variant="segmented"
            color="secondary"
            aria-label="Secondary options"
          >
            <Button
              variant="primary"
              className={activeSecondary === "option1" ? "active" : ""}
              onClick={() => setActiveSecondary("option1")}
            >
              Draft
            </Button>
            <Button
              variant="primary"
              className={activeSecondary === "option2" ? "active" : ""}
              onClick={() => setActiveSecondary("option2")}
            >
              Review
            </Button>
            <Button
              variant="primary"
              className={activeSecondary === "option3" ? "active" : ""}
              onClick={() => setActiveSecondary("option3")}
            >
              Published
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Success</h4>
          <ButtonGroup
            variant="segmented"
            color="success"
            aria-label="Success options"
          >
            <Button
              variant="primary"
              className={activeSuccess === "option1" ? "active" : ""}
              onClick={() => setActiveSuccess("option1")}
            >
              Passed
            </Button>
            <Button
              variant="primary"
              className={activeSuccess === "option2" ? "active" : ""}
              onClick={() => setActiveSuccess("option2")}
            >
              Completed
            </Button>
            <Button
              variant="primary"
              className={activeSuccess === "option3" ? "active" : ""}
              onClick={() => setActiveSuccess("option3")}
            >
              Verified
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Danger</h4>
          <ButtonGroup
            variant="segmented"
            color="danger"
            aria-label="Danger options"
          >
            <Button
              variant="primary"
              className={activeDanger === "option1" ? "active" : ""}
              onClick={() => setActiveDanger("option1")}
            >
              Failed
            </Button>
            <Button
              variant="primary"
              className={activeDanger === "option2" ? "active" : ""}
              onClick={() => setActiveDanger("option2")}
            >
              Error
            </Button>
            <Button
              variant="primary"
              className={activeDanger === "option3" ? "active" : ""}
              onClick={() => setActiveDanger("option3")}
            >
              Critical
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Warning</h4>
          <ButtonGroup
            variant="segmented"
            color="warning"
            aria-label="Warning options"
          >
            <Button
              variant="primary"
              className={activeWarning === "option1" ? "active" : ""}
              onClick={() => setActiveWarning("option1")}
            >
              Pending
            </Button>
            <Button
              variant="primary"
              className={activeWarning === "option2" ? "active" : ""}
              onClick={() => setActiveWarning("option2")}
            >
              Review
            </Button>
            <Button
              variant="primary"
              className={activeWarning === "option3" ? "active" : ""}
              onClick={() => setActiveWarning("option3")}
            >
              Attention
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Info</h4>
          <ButtonGroup
            variant="segmented"
            color="info"
            aria-label="Info options"
          >
            <Button
              variant="primary"
              className={activeInfo === "option1" ? "active" : ""}
              onClick={() => setActiveInfo("option1")}
            >
              Today
            </Button>
            <Button
              variant="primary"
              className={activeInfo === "option2" ? "active" : ""}
              onClick={() => setActiveInfo("option2")}
            >
              Week
            </Button>
            <Button
              variant="primary"
              className={activeInfo === "option3" ? "active" : ""}
              onClick={() => setActiveInfo("option3")}
            >
              Month
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Light</h4>
          <ButtonGroup
            variant="segmented"
            color="light"
            aria-label="Light options"
          >
            <Button
              variant="primary"
              className={activeLight === "option1" ? "active" : ""}
              onClick={() => setActiveLight("option1")}
            >
              Latest
            </Button>
            <Button
              variant="primary"
              className={activeLight === "option2" ? "active" : ""}
              onClick={() => setActiveLight("option2")}
            >
              Popular
            </Button>
            <Button
              variant="primary"
              className={activeLight === "option3" ? "active" : ""}
              onClick={() => setActiveLight("option3")}
            >
              Oldest
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
};

export const SegmentedInteractive: Story = {
  render: () => {
    const [sortBy, setSortBy] = useState("popular");
    const [viewMode, setViewMode] = useState("grid");
    const [timeFilter, setTimeFilter] = useState("today");

    return (
      <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              Sort by:
            </label>
            <ButtonGroup
              variant="segmented"
              color="primary"
              aria-label="Sort options"
            >
              <Button
                variant="primary"
                className={sortBy === "latest" ? "active" : ""}
                onClick={() => setSortBy("latest")}
              >
                Latest
              </Button>
              <Button
                variant="primary"
                className={sortBy === "popular" ? "active" : ""}
                onClick={() => setSortBy("popular")}
              >
                Popular
              </Button>
              <Button
                variant="primary"
                className={sortBy === "oldest" ? "active" : ""}
                onClick={() => setSortBy("oldest")}
              >
                Oldest
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              View:
            </label>
            <ButtonGroup
              variant="segmented"
              color="info"
              size="sm"
              aria-label="View options"
            >
              <Button
                variant="primary"
                className={viewMode === "list" ? "active" : ""}
                onClick={() => setViewMode("list")}
              >
                List
              </Button>
              <Button
                variant="primary"
                className={viewMode === "grid" ? "active" : ""}
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              Time Filter:
            </label>
            <ButtonGroup
              variant="segmented"
              color="success"
              size="lg"
              aria-label="Time filter options"
            >
              <Button
                variant="primary"
                className={timeFilter === "today" ? "active" : ""}
                onClick={() => setTimeFilter("today")}
              >
                Today
              </Button>
              <Button
                variant="primary"
                className={timeFilter === "week" ? "active" : ""}
                onClick={() => setTimeFilter("week")}
              >
                This Week
              </Button>
              <Button
                variant="primary"
                className={timeFilter === "month" ? "active" : ""}
                onClick={() => setTimeFilter("month")}
              >
                This Month
              </Button>
            </ButtonGroup>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          >
            <h4>Current Selection:</h4>
            <p>
              <strong>Sort:</strong> {sortBy}
            </p>
            <p>
              <strong>View:</strong> {viewMode}
            </p>
            <p>
              <strong>Time:</strong> {timeFilter}
            </p>
          </div>
        </div>
      </div>
    );
  },
};
