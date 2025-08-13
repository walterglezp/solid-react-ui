import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SideMenu, type SideMenuSectionProps } from "./SideMenu";

const meta: Meta<typeof SideMenu> = {
  title: "Navigation/SideMenu",
  component: SideMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    collapsed: {
      control: "boolean",
    },
    width: {
      control: "text",
    },
    collapsedWidth: {
      control: "text",
    },
    position: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    activeColor: {
      control: "color",
    },
    activeTextColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideMenu>;

const createSampleSections = (
  activeItemId?: string,
): SideMenuSectionProps[] => [
  {
    id: "account",
    title: "Account",
    items: [
      {
        id: "profile",
        label: "Account",
        icon: "user",
        active: activeItemId === "profile",
      },
      {
        id: "privacy",
        label: "Privacy",
        icon: "shield",
        active: activeItemId === "privacy",
      },
      {
        id: "security",
        label: "Security & permissions",
        icon: "shield",
        active: activeItemId === "security",
      },
      {
        id: "orders",
        label: "Your orders",
        icon: "logo-market",
        description: "Review 4 orders",
        active: activeItemId === "orders",
      },
      {
        id: "share",
        label: "Share profile",
        icon: "share",
        active: activeItemId === "share",
      },
    ],
  },
  {
    id: "content",
    title: "Content & Display",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        active: activeItemId === "notifications",
      },
      {
        id: "live",
        label: "LIVE",
        icon: "tv",
        active: activeItemId === "live",
      },
      {
        id: "music",
        label: "Music",
        icon: "star",
        active: activeItemId === "music",
      },
      {
        id: "activity",
        label: "Activity center",
        icon: "support",
        active: activeItemId === "activity",
      },
      {
        id: "content-prefs",
        label: "Content preferences",
        icon: "gear",
        active: activeItemId === "content-prefs",
      },
      {
        id: "audience",
        label: "Audience controls",
        icon: "user",
        active: activeItemId === "audience",
      },
      {
        id: "ads",
        label: "Ads",
        icon: "star",
        disabled: true,
      },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Main Content Area</h1>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <p>Menu is {collapsed ? "collapsed" : "expanded"}</p>
        </div>
      </div>
    );
  },
};

export const Collapsed: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("notifications");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu sections={sections} collapsed={true} />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Collapsed Menu</h1>
          <p>The menu shows only icons when collapsed</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("messages");

    const sections: SideMenuSectionProps[] = [
      {
        id: "main",
        title: "Main Navigation",
        items: [
          {
            id: "dashboard",
            label: "Dashboard",
            icon: "home-fill",
            active: activeItem === "dashboard",
            onClick: () => setActiveItem("dashboard"),
          },
          {
            id: "messages",
            label: "Messages",
            icon: "envelope",
            badge: "12",
            active: activeItem === "messages",
            onClick: () => setActiveItem("messages"),
          },
          {
            id: "notifications",
            label: "Notifications",
            icon: "bell",
            badge: "3",
            active: activeItem === "notifications",
            onClick: () => setActiveItem("notifications"),
          },
          {
            id: "tasks",
            label: "Tasks",
            icon: "support",
            badge: "24",
            active: activeItem === "tasks",
            onClick: () => setActiveItem("tasks"),
          },
        ],
      },
      {
        id: "management",
        title: "Management",
        items: [
          {
            id: "users",
            label: "User Management",
            icon: "user",
            description: "Manage system users",
            active: activeItem === "users",
            onClick: () => setActiveItem("users"),
          },
          {
            id: "settings",
            label: "System Settings",
            icon: "gear",
            active: activeItem === "settings",
            onClick: () => setActiveItem("settings"),
          },
          {
            id: "analytics",
            label: "Analytics",
            icon: "magnifier",
            badge: "NEW",
            active: activeItem === "analytics",
            onClick: () => setActiveItem("analytics"),
          },
        ],
      },
    ];

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>SideMenu with Badges</h1>
          <p>Shows badges and descriptions on menu items</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    const sections: SideMenuSectionProps[] = [
      {
        id: "navigation",
        title: "Navigation",
        items: [
          {
            id: "home",
            label: "Home",
            icon: "home-fill",
          },
          {
            id: "profile",
            label: "Profile",
            icon: "user",
          },
          {
            id: "settings",
            label: "Settings",
            icon: "gear",
          },
        ],
      },
    ];

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          width="320px"
          collapsedWidth="80px"
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Custom Width Menu</h1>
          <p>Expanded width: 320px, Collapsed width: 80px</p>
        </div>
      </div>
    );
  },
};

export const RightPosition: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Right-Positioned SideMenu</h1>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <p>Menu is positioned on the right side</p>
        </div>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          position="right"
        />
      </div>
    );
  },
};

export const PositionComparison: Story = {
  render: () => {
    const [leftCollapsed, setLeftCollapsed] = useState(false);
    const [rightCollapsed, setRightCollapsed] = useState(false);
    const [leftActiveItem, setLeftActiveItem] = useState("profile");
    const [rightActiveItem, setRightActiveItem] = useState("notifications");

    const leftSections = createSampleSections(leftActiveItem).map(
      (section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          onClick: () => setLeftActiveItem(item.id),
        })),
      }),
    );

    const rightSections = createSampleSections(rightActiveItem).map(
      (section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          onClick: () => setRightActiveItem(item.id),
        })),
      }),
    );

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={leftSections}
          collapsed={leftCollapsed}
          onToggleCollapse={() => setLeftCollapsed(!leftCollapsed)}
          position="left"
        />
        <div
          style={{
            flex: 1,
            padding: "2rem",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <h1>Left vs Right Positioning</h1>
          <p>
            Left Active: <strong>{leftActiveItem}</strong>
          </p>
          <p>
            Right Active: <strong>{rightActiveItem}</strong>
          </p>
          <p>Compare side menus positioned on both sides</p>
        </div>
        <SideMenu
          sections={rightSections}
          collapsed={rightCollapsed}
          onToggleCollapse={() => setRightCollapsed(!rightCollapsed)}
          position="right"
        />
      </div>
    );
  },
};

export const CustomThemeColors: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const [activeColor, setActiveColor] = useState("#10B981"); // Green theme

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          activeColor={activeColor}
          activeTextColor="white"
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Custom Theme Colors</h1>
          <p>Customize the active state color of menu items.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{ marginTop: "2rem" }}>
            <h3>Try different colors:</h3>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button
                onClick={() => setActiveColor("#10B981")}
                style={{
                  backgroundColor: "#10B981",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Green
              </button>
              <button
                onClick={() => setActiveColor("#3B82F6")}
                style={{
                  backgroundColor: "#3B82F6",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Blue
              </button>
              <button
                onClick={() => setActiveColor("#8B5CF6")}
                style={{
                  backgroundColor: "#8B5CF6",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Purple
              </button>
              <button
                onClick={() => setActiveColor("#EF4444")}
                style={{
                  backgroundColor: "#EF4444",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Red
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const IOSStyleSettings: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("account");

    // Recreate the exact iOS Settings menu structure from the image
    const sections: SideMenuSectionProps[] = [
      {
        id: "account-section",
        title: "Account",
        items: [
          {
            id: "account",
            label: "Account",
            icon: "user",
            active: activeItem === "account",
            onClick: () => setActiveItem("account"),
          },
          {
            id: "privacy",
            label: "Privacy",
            icon: "shield",
            active: activeItem === "privacy",
            onClick: () => setActiveItem("privacy"),
          },
          {
            id: "security",
            label: "Security & permissions",
            icon: "shield",
            active: activeItem === "security",
            onClick: () => setActiveItem("security"),
          },
          {
            id: "orders",
            label: "Your orders",
            icon: "logo-market",
            description: "Review 4 orders",
            active: activeItem === "orders",
            onClick: () => setActiveItem("orders"),
          },
          {
            id: "share-profile",
            label: "Share profile",
            icon: "share",
            active: activeItem === "share-profile",
            onClick: () => setActiveItem("share-profile"),
          },
        ],
      },
      {
        id: "content-display",
        title: "Content & Display",
        items: [
          {
            id: "notifications",
            label: "Notifications",
            icon: "bell",
            active: activeItem === "notifications",
            onClick: () => setActiveItem("notifications"),
          },
          {
            id: "live",
            label: "LIVE",
            icon: "tv",
            active: activeItem === "live",
            onClick: () => setActiveItem("live"),
          },
          {
            id: "music",
            label: "Music",
            icon: "star",
            active: activeItem === "music",
            onClick: () => setActiveItem("music"),
          },
          {
            id: "activity-center",
            label: "Activity center",
            icon: "support",
            active: activeItem === "activity-center",
            onClick: () => setActiveItem("activity-center"),
          },
          {
            id: "content-preferences",
            label: "Content preferences",
            icon: "gear",
            active: activeItem === "content-preferences",
            onClick: () => setActiveItem("content-preferences"),
          },
          {
            id: "audience-controls",
            label: "Audience controls",
            icon: "user",
            active: activeItem === "audience-controls",
            onClick: () => setActiveItem("audience-controls"),
          },
          {
            id: "ads",
            label: "Ads",
            icon: "star",
            active: activeItem === "ads",
            onClick: () => setActiveItem("ads"),
          },
        ],
      },
    ];

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        <SideMenu
          sections={sections}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Settings and Privacy</h1>
          <p>iOS-style side menu matching the provided design</p>
          <p>
            Active section: <strong>{activeItem}</strong>
          </p>
          <p>Try collapsing the menu to see icon-only mode!</p>
        </div>
      </div>
    );
  },
};
