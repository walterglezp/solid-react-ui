import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';
import { themes, lightTheme } from './presets';
import { createTheme } from '../utils/theme-utils';
import { Button } from '../components/form/Button';
import { Container } from '../components/layout/Container';
import { Row } from '../components/layout/Row';
import { Column } from '../components/layout/Column';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theme/ThemeShowcase',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

const ThemeDemo: React.FC = () => (
  <Container>
    <Row>
      <Column>
        <h2>Theme Showcase</h2>
        <p>This demonstrates the new theme system with enhanced customization.</p>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Colors</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Sizes</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Typography</h3>
          <div style={{ 
            fontFamily: 'var(--theme-font-family-base)',
            color: 'var(--theme-text)'
          }}>
            <h1 style={{ fontSize: 'var(--theme-font-size-4xl)', margin: '0 0 1rem 0' }}>
              Heading 1
            </h1>
            <h2 style={{ fontSize: 'var(--theme-font-size-3xl)', margin: '0 0 1rem 0' }}>
              Heading 2
            </h2>
            <p style={{ fontSize: 'var(--theme-font-size-base)', margin: '0 0 1rem 0' }}>
              Body text with base font size
            </p>
            <p style={{ 
              fontSize: 'var(--theme-font-size-sm)', 
              color: 'var(--theme-text-secondary)',
              margin: '0 0 1rem 0'
            }}>
              Secondary text with smaller font size
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Spacing & Layout</h3>
          <div style={{ display: 'flex', gap: 'var(--theme-spacing-4)' }}>
            <div style={{ 
              padding: 'var(--theme-spacing-4)',
              background: 'var(--theme-surface)',
              borderRadius: 'var(--theme-border-radius-md)',
              border: `1px solid var(--theme-border)`
            }}>
              Card with theme spacing
            </div>
            <div style={{ 
              padding: 'var(--theme-spacing-6)',
              background: 'var(--theme-surface)',
              borderRadius: 'var(--theme-border-radius-lg)',
              border: `1px solid var(--theme-border)`
            }}>
              Card with larger spacing
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Shadows</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ 
              padding: '1rem',
              background: 'var(--theme-background)',
              borderRadius: 'var(--theme-border-radius-md)',
              boxShadow: 'var(--theme-shadow-sm)'
            }}>
              Small shadow
            </div>
            <div style={{ 
              padding: '1rem',
              background: 'var(--theme-background)',
              borderRadius: 'var(--theme-border-radius-md)',
              boxShadow: 'var(--theme-shadow-md)'
            }}>
              Medium shadow
            </div>
            <div style={{ 
              padding: '1rem',
              background: 'var(--theme-background)',
              borderRadius: 'var(--theme-border-radius-md)',
              boxShadow: 'var(--theme-shadow-lg)'
            }}>
              Large shadow
            </div>
          </div>
        </div>
      </Column>
    </Row>
  </Container>
);

export const LightTheme: Story = {
  args: {
    theme: themes.light,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  args: {
    theme: themes.dark,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const CorporateTheme: Story = {
  args: {
    theme: themes.corporate,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const MinimalTheme: Story = {
  args: {
    theme: themes.minimal,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const CustomTheme: Story = {
  args: {
    theme: createTheme(lightTheme, {
      colors: {
        ...lightTheme.colors,
        primary: '#9333ea',
        secondary: '#64748b',
        success: '#10b981',
        background: '#fafafa',
        surface: '#ffffff',
      },
      borderRadius: {
        ...lightTheme.borderRadius,
        base: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
      },
    }),
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

