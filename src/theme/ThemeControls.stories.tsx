import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../components/layout/Container";
import { Row } from "../components/layout/Row";
import { Column } from "../components/layout/Column";
import { Alert } from "../components/common/Alert";
import { Badge } from "../components/common/Badge";
import { Icon } from "../components/graphic/Icon";

// This story demonstrates how global theme controls affect all components
const meta: Meta = {
  title: "Theme/Theme Controls",
  parameters: {
    docs: {
      description: {
        component:
          "Use the Storybook toolbar controls to switch between Light and Dark themes and see how they affect all components. This story provides instructions for using the theme controls.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const ThemeControlsInstructions: React.FC = () => {
  return (
    <Container>
      <Row>
        <Column>
          <h1>Theme Control Instructions</h1>

          <Alert variant="info">
            <Icon name="details-info" size={16} />
            Use the toolbar controls above to switch between Light and Dark
            themes and see real-time changes.
          </Alert>

          <h2>How to Use Theme Controls</h2>

          <h3>Available Themes</h3>
          <ul>
            <li>
              <Badge variant="primary">Light Theme</Badge> - Clean, bright
              interface perfect for daytime use
            </li>
            <li>
              <Badge variant="secondary">Dark Theme</Badge> - Modern dark
              interface ideal for low-light environments
            </li>
          </ul>

          <h3>Theme Features</h3>
          <ul>
            <li>
              <strong>Consistent Color Palette:</strong> All components
              automatically adapt to the selected theme
            </li>
            <li>
              <strong>Accessibility:</strong> Both themes maintain proper
              contrast ratios for readability
            </li>
            <li>
              <strong>Component Harmony:</strong> Forms, navigation, alerts, and
              all UI elements work seamlessly together
            </li>
          </ul>

          <h3>What You'll See</h3>
          <p>When you switch themes, observe how these elements change:</p>
          <ul>
            <li>Background and surface colors</li>
            <li>Text and border colors</li>
            <li>Button and form element styling</li>
            <li>Shadow and elevation effects</li>
            <li>Icon and accent colors</li>
          </ul>

          <Alert variant="success">
            <Icon name="check-mark-fill" size={16} />
            Visit the <strong>Dashboard Showcase</strong> stories to see all
            components in action with both themes!
          </Alert>
        </Column>
      </Row>
    </Container>
  );
};

export const Instructions: Story = {
  render: () => <ThemeControlsInstructions />,
  parameters: {
    docs: {
      description: {
        story:
          "Instructions for using the Storybook theme controls. Switch between Light and Dark themes using the toolbar above.",
      },
    },
  },
};
