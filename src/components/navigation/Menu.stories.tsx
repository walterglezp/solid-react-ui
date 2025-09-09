import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Menu, type MenuSectionProps } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["fixed", "regular"],
    },
    placement: {
      control: { type: "radio" },
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    visible: {
      control: "boolean",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
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
type Story = StoryObj<typeof Menu>;

const createSampleSections = (activeItemId?: string): MenuSectionProps[] => [
  {
    id: "navigation",
    title: "Navigation",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "home-fill",
        active: activeItemId === "dashboard",
      },
      {
        id: "profile",
        label: "Profile",
        icon: "user",
        active: activeItemId === "profile",
      },
      {
        id: "settings",
        label: "Settings",
        icon: "gear",
        active: activeItemId === "settings",
      },
    ],
  },
  {
    id: "actions",
    title: "Actions",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        badge: "3",
        active: activeItemId === "notifications",
      },
      {
        id: "messages",
        label: "Messages",
        icon: "envelope",
        description: "Unread messages",
        badge: "12",
        active: activeItemId === "messages",
      },
      {
        id: "help",
        label: "Help & Support",
        icon: "support",
        active: activeItemId === "help",
      },
    ],
  },
  {
    id: "account",
    items: [
      {
        id: "logout",
        label: "Sign Out",
        icon: "go-back",
        active: activeItemId === "logout",
      },
    ],
  },
];

export const Regular: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("dashboard");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Menu sections={sections} position="regular" width="300px" />
          <div
            style={{
              flex: 1,
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <h1>Regular Menu</h1>
            <p>This menu is positioned regularly within the document flow.</p>
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const Fixed: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState("profile");
    const [placement, setPlacement] = useState<
      "top-left" | "top-right" | "bottom-left" | "bottom-right"
    >("top-right");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => {
          setActiveItem(item.id);
          setVisible(false);
        },
      })),
    }));

    return (
      <div
        style={{ height: "100vh", padding: "2rem", backgroundColor: "#f8f9fa" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h1>Fixed Menu</h1>
            <p>Click the button to show a fixed-positioned menu overlay.</p>
          </div>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={() => setVisible(true)}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Show Menu
            </button>

            <select
              value={placement}
              onChange={(e) => setPlacement(e.target.value as any)}
              style={{
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
            </select>
          </div>

          <div
            style={{
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
            <p>
              Menu placement: <strong>{placement}</strong>
            </p>
          </div>
        </div>

        <Menu
          sections={sections}
          position="fixed"
          placement={placement}
          visible={visible}
          onClose={() => setVisible(false)}
          width="320px"
        />
      </div>
    );
  },
};

export const ContextMenu: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeItem, setActiveItem] = useState("");

    const sections: MenuSectionProps[] = [
      {
        id: "edit",
        items: [
          {
            id: "copy",
            label: "Copy",
            icon: "share",
            onClick: () => {
              setActiveItem("copy");
              setVisible(false);
            },
          },
          {
            id: "paste",
            label: "Paste",
            icon: "envelope",
            onClick: () => {
              setActiveItem("paste");
              setVisible(false);
            },
          },
          {
            id: "cut",
            label: "Cut",
            icon: "edit",
            onClick: () => {
              setActiveItem("cut");
              setVisible(false);
            },
          },
        ],
      },
      {
        id: "actions",
        items: [
          {
            id: "delete",
            label: "Delete",
            icon: "trash-alt",
            onClick: () => {
              setActiveItem("delete");
              setVisible(false);
            },
          },
          {
            id: "rename",
            label: "Rename",
            icon: "edit",
            onClick: () => {
              setActiveItem("rename");
              setVisible(false);
            },
          },
        ],
      },
    ];

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    return (
      <div
        style={{ height: "100vh", padding: "2rem", backgroundColor: "#f8f9fa" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1>Context Menu</h1>
          <p>
            Right-click anywhere in the gray area below to show the context
            menu.
          </p>

          <div
            style={{
              flex: 1,
              backgroundColor: "#e9ecef",
              borderRadius: "8px",
              padding: "2rem",
              cursor: "context-menu",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onContextMenu={handleContextMenu}
            onClick={() => setVisible(false)}
          >
            <div style={{ textAlign: "center", color: "#6c757d" }}>
              <p>Right-click me!</p>
              {activeItem && (
                <p>
                  Last action: <strong>{activeItem}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        {visible && (
          <div
            style={{
              position: "fixed",
              left: `${position.x}px`,
              top: `${position.y}px`,
              zIndex: 1000,
            }}
          >
            <Menu
              sections={sections}
              position="regular"
              visible={visible}
              onClose={() => setVisible(false)}
              width="200px"
            />
          </div>
        )}
      </div>
    );
  },
};

export const CompactMenu: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("save");

    const sections: MenuSectionProps[] = [
      {
        id: "file",
        title: "File",
        items: [
          {
            id: "save",
            label: "Save",
            icon: "save-disc",
            active: activeItem === "save",
            onClick: () => setActiveItem("save"),
          },
          {
            id: "export",
            label: "Export",
            icon: "share",
            onClick: () => setActiveItem("export"),
          },
        ],
      },
      {
        id: "edit",
        title: "Edit",
        items: [
          {
            id: "undo",
            label: "Undo",
            icon: "arrow-left",
            onClick: () => setActiveItem("undo"),
          },
          {
            id: "redo",
            label: "Redo",
            icon: "arrow-right",
            disabled: true,
          },
        ],
      },
    ];

    return (
      <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
        <h1>Compact Menu</h1>
        <p>A compact menu suitable for toolbar dropdowns or small spaces.</p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <Menu
            sections={sections}
            position="regular"
            width="220px"
            height="300px"
          />

          <div
            style={{
              flex: 1,
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomThemeColors: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("inbox");
    const [activeColor, setActiveColor] = useState("#8B5CF6"); // Purple theme

    const sections: MenuSectionProps[] = [
      {
        id: "mail",
        title: "Mail",
        items: [
          {
            id: "inbox",
            label: "Inbox",
            icon: "envelope",
            badge: "24",
            active: activeItem === "inbox",
            onClick: () => setActiveItem("inbox"),
          },
          {
            id: "sent",
            label: "Sent",
            icon: "mail-send",
            onClick: () => setActiveItem("sent"),
          },
          {
            id: "drafts",
            label: "Drafts",
            icon: "edit",
            badge: "3",
            onClick: () => setActiveItem("drafts"),
          },
        ],
      },
      {
        id: "actions",
        title: "Actions",
        items: [
          {
            id: "notifications",
            label: "Notifications",
            icon: "bell",
            badge: "NEW",
            onClick: () => setActiveItem("notifications"),
          },
          {
            id: "settings",
            label: "Settings",
            icon: "gear",
            onClick: () => setActiveItem("settings"),
          },
        ],
      },
    ];

    return (
      <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
        <h1>Custom Theme Colors</h1>
        <p>Menu with customizable active state colors.</p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <Menu
            sections={sections}
            position="regular"
            width="280px"
            activeColor={activeColor}
            activeTextColor="white"
          />

          <div
            style={{
              flex: 1,
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>

            <div style={{ marginTop: "2rem" }}>
              <h3>Try different colors:</h3>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1rem",
                  flexWrap: "wrap",
                }}
              >
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
                  onClick={() => setActiveColor("#F59E0B")}
                  style={{
                    backgroundColor: "#F59E0B",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Orange
                </button>
                <button
                  onClick={() => setActiveColor("#06B6D4")}
                  style={{
                    backgroundColor: "#06B6D4",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cyan
                </button>
                <button
                  onClick={() => setActiveColor("#EC4899")}
                  style={{
                    backgroundColor: "#EC4899",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Pink
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const MenuWithBadges: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("inbox");

    const sections: MenuSectionProps[] = [
      {
        id: "mail",
        title: "Mail",
        items: [
          {
            id: "inbox",
            label: "Inbox",
            icon: "envelope",
            badge: "24",
            active: activeItem === "inbox",
            onClick: () => setActiveItem("inbox"),
          },
          {
            id: "sent",
            label: "Sent",
            icon: "mail-send",
            onClick: () => setActiveItem("sent"),
          },
          {
            id: "drafts",
            label: "Drafts",
            icon: "edit",
            badge: "3",
            onClick: () => setActiveItem("drafts"),
          },
          {
            id: "spam",
            label: "Spam",
            icon: "shield",
            badge: "156",
            onClick: () => setActiveItem("spam"),
          },
        ],
      },
      {
        id: "folders",
        title: "Folders",
        items: [
          {
            id: "work",
            label: "Work",
            icon: "manage",
            badge: "NEW",
            onClick: () => setActiveItem("work"),
          },
          {
            id: "personal",
            label: "Personal",
            icon: "manage",
            onClick: () => setActiveItem("personal"),
          },
        ],
      },
    ];

    return (
      <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
        <h1>Menu with Badges</h1>
        <p>Menu items can display badges for counts or status indicators.</p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <Menu sections={sections} position="regular" width="280px" />

          <div
            style={{
              flex: 1,
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <p>
              Active item: <strong>{activeItem}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
};
