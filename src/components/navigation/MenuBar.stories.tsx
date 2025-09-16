import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MenuBar, type MenuBarSectionProps } from "./MenuBar";
import { type MenuSectionProps } from "./Menu";

const meta: Meta<typeof MenuBar> = {
  title: "Navigation/MenuBar",
  component: MenuBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["absolute", "fixed", "relative", "sticky"],
    },
    placement: {
      control: { type: "radio" },
      options: ["top", "bottom"],
    },
    height: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    activeColor: {
      control: "color",
    },
    activeTextColor: {
      control: "color",
    },
    showLabels: {
      control: "boolean",
    },
    compact: {
      control: "boolean",
    },
    zIndex: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

const createSampleSections = (activeItemId?: string): MenuBarSectionProps[] => [
  {
    id: "left-section",
    alignment: "left",
    items: [
      {
        id: "home",
        label: "Home",
        icon: "home-fill",
        badge: "5",
        active: activeItemId === "home",
      },
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "dashboard",
        active: activeItemId === "dashboard",
      },
      {
        id: "products",
        label: "Products",
        icon: "logo-market",
        badge: "12",
        active: activeItemId === "products",
      },
    ],
  },
  {
    id: "center-section",
    alignment: "center",
    items: [
      {
        id: "search",
        label: "Search",
        icon: "magnifier",
        active: activeItemId === "search",
      },
    ],
  },
  {
    id: "right-section",
    alignment: "right",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        badge: "5",
        active: activeItemId === "notifications",
      },
      {
        id: "messages",
        label: "Messages",
        icon: "message",
        badge: "NEW",
        active: activeItemId === "messages",
      },
      {
        id: "profile",
        label: "Profile",
        icon: "user",
        active: activeItemId === "profile",
      },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar sections={sections} position="relative" />
        <div style={{ padding: "2rem" }}>
          <h1>Default MenuBar</h1>
          <p>A horizontal navigation menu bar with relative positioning.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
        </div>
      </div>
    );
  },
};

export const FixedTop: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar
          sections={sections}
          position="fixed"
          placement="top"
          height="64px"
        />
        <div style={{ paddingTop: "80px", padding: "2rem" }}>
          <h1>Fixed Top MenuBar</h1>
          <p>Menu bar fixed to the top of the viewport.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{ height: "150vh", padding: "2rem 0" }}>
            <p>Scroll down to see the fixed positioning in action...</p>
            <div style={{ marginTop: "50vh" }}>
              <h2>Middle Content</h2>
              <p>The menu bar stays fixed at the top while scrolling.</p>
            </div>
            <div style={{ marginTop: "50vh" }}>
              <h2>Bottom Content</h2>
              <p>Still fixed at the top!</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const FixedBottom: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <div style={{ paddingBottom: "80px", padding: "2rem" }}>
          <h1>Fixed Bottom MenuBar</h1>
          <p>Menu bar fixed to the bottom of the viewport.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{ height: "150vh", padding: "2rem 0" }}>
            <p>Scroll to see the fixed positioning in action...</p>
            <div style={{ marginTop: "50vh" }}>
              <h2>Middle Content</h2>
              <p>The menu bar stays fixed at the bottom while scrolling.</p>
            </div>
            <div style={{ marginTop: "50vh" }}>
              <h2>Top Content</h2>
              <p>Menu bar is still at the bottom!</p>
            </div>
          </div>
        </div>
        <MenuBar
          sections={sections}
          position="fixed"
          placement="bottom"
          height="64px"
        />
      </div>
    );
  },
};

export const Sticky: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Content Above Sticky Menu</h1>
          <p>This content appears above the sticky menu bar.</p>
        </div>
        <MenuBar sections={sections} position="sticky" height="64px" />
        <div style={{ padding: "2rem" }}>
          <h1>Sticky MenuBar</h1>
          <p>Menu bar becomes sticky when you scroll past it.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div style={{ height: "200vh", padding: "2rem 0" }}>
            <p>
              Scroll down and watch the menu bar stick to the top of the
              viewport.
            </p>
            <div style={{ marginTop: "50vh" }}>
              <h2>Middle Content</h2>
              <p>The menu bar is now sticky at the top.</p>
            </div>
            <div style={{ marginTop: "50vh" }}>
              <h2>Bottom Content</h2>
              <p>Still sticky!</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const AbsolutePositioning: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [placement, setPlacement] = useState<"top" | "bottom">("top");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <MenuBar
          sections={sections}
          position="absolute"
          placement={placement}
          height="64px"
        />
        <div
          style={{
            padding: placement === "top" ? "80px 2rem 2rem" : "2rem 2rem 80px",
          }}
        >
          <h1>Absolute Positioning</h1>
          <p>Menu bar with absolute positioning within its container.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{ marginTop: "2rem" }}>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Placement:
            </label>
            <button
              onClick={() => setPlacement("top")}
              style={{
                marginRight: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: placement === "top" ? "#007bff" : "#fff",
                color: placement === "top" ? "#fff" : "#000",
                border: "1px solid #007bff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Top
            </button>
            <button
              onClick={() => setPlacement("bottom")}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: placement === "bottom" ? "#007bff" : "#fff",
                color: placement === "bottom" ? "#fff" : "#000",
                border: "1px solid #007bff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Bottom
            </button>
          </div>

          <div style={{ marginTop: "4rem", height: "100vh" }}>
            <h2>Page Content</h2>
            <p>
              The absolutely positioned menu bar is positioned relative to its
              parent container.
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const CompactAndIconOnly: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [compact, setCompact] = useState(false);
    const [showLabels, setShowLabels] = useState(true);

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar
          sections={sections}
          position="relative"
          compact={compact}
          showLabels={showLabels}
        />
        <div style={{ padding: "2rem" }}>
          <h1>Compact & Icon-Only Options</h1>
          <p>Toggle compact mode and label visibility.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="checkbox"
                checked={compact}
                onChange={(e) => setCompact(e.target.checked)}
              />
              Compact Mode
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="checkbox"
                checked={showLabels}
                onChange={(e) => setShowLabels(e.target.checked)}
              />
              Show Labels
            </label>
          </div>
        </div>
      </div>
    );
  },
};

export const WithDropdowns: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const userDropdownSections: MenuSectionProps[] = [
      {
        id: "account",
        items: [
          {
            id: "profile",
            label: "View Profile",
            icon: "user",
            onClick: () => setActiveItem("profile"),
          },
          {
            id: "settings",
            label: "Account Settings",
            icon: "gear",
            onClick: () => setActiveItem("settings"),
          },
          {
            id: "billing",
            label: "Billing",
            icon: "logo-market",
            badge: "Pro",
            onClick: () => setActiveItem("billing"),
          },
        ],
      },
      {
        id: "actions",
        items: [
          {
            id: "help",
            label: "Help & Support",
            icon: "support",
            onClick: () => setActiveItem("help"),
          },
          {
            id: "logout",
            label: "Sign Out",
            icon: "go-back",
            onClick: () => setActiveItem("logout"),
          },
        ],
      },
    ];

    const moreDropdownSections: MenuSectionProps[] = [
      {
        id: "tools",
        title: "Tools",
        items: [
          {
            id: "analytics",
            label: "Analytics",
            icon: "magnifier",
            description: "View insights and reports",
            onClick: () => setActiveItem("analytics"),
          },
          {
            id: "integrations",
            label: "Integrations",
            icon: "manage",
            badge: "3",
            onClick: () => setActiveItem("integrations"),
          },
        ],
      },
      {
        id: "admin",
        title: "Administration",
        items: [
          {
            id: "users",
            label: "User Management",
            icon: "user",
            onClick: () => setActiveItem("users"),
          },
          {
            id: "system",
            label: "System Settings",
            icon: "gear",
            onClick: () => setActiveItem("system"),
          },
        ],
      },
    ];

    const sections: MenuBarSectionProps[] = [
      {
        id: "left-section",
        alignment: "left",
        items: [
          {
            id: "home",
            label: "Home",
            icon: "home-fill",
            active: activeItem === "home",
            onClick: () => setActiveItem("home"),
          },
          {
            id: "dashboard",
            label: "Dashboard",
            icon: "dashboard",
            active: activeItem === "dashboard",
            onClick: () => setActiveItem("dashboard"),
          },
          {
            id: "products",
            label: "Products",
            icon: "logo-market",
            badge: "12",
            active: activeItem === "products",
            onClick: () => setActiveItem("products"),
          },
        ],
      },
      {
        id: "center-section",
        alignment: "center",
        items: [
          {
            id: "more",
            label: "More",
            icon: "three-dots",
            dropdown: moreDropdownSections,
            dropdownPlacement: "bottom-center",
          },
        ],
      },
      {
        id: "right-section",
        alignment: "right",
        items: [
          {
            id: "notifications",
            label: "Notifications",
            icon: "bell",
            badge: "5",
            active: activeItem === "notifications",
            onClick: () => setActiveItem("notifications"),
          },
          {
            id: "user-menu",
            label: "Walter G.",
            icon: "user",
            dropdown: userDropdownSections,
            dropdownPlacement: "bottom-right",
          },
        ],
      },
    ];

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar sections={sections} position="relative" height="64px" />
        <div style={{ padding: "2rem" }}>
          <h1>MenuBar with Dropdowns</h1>
          <p>Click on "More" or the user menu to see dropdown functionality.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div
            style={{
              marginTop: "2rem",
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <h2>Features Demonstrated:</h2>
            <ul>
              <li>
                <strong>User Menu Dropdown:</strong> Click on "Walter G." (right
                side)
              </li>
              <li>
                <strong>More Menu Dropdown:</strong> Click on "More" (center)
              </li>
              <li>
                <strong>Different Placements:</strong> User menu drops
                bottom-right, More menu drops bottom-center
              </li>
              <li>
                <strong>Click Outside:</strong> Dropdowns close when clicking
                outside
              </li>
              <li>
                <strong>Menu Sections:</strong> Dropdowns can have multiple
                sections with titles
              </li>
              <li>
                <strong>Badges & Icons:</strong> Dropdown items support badges
                and icons
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};

export const WithLogoAndImages: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections: MenuBarSectionProps[] = [
      {
        id: "left-section",
        alignment: "left",
        items: [
          {
            id: "logo",
            label: (
              <img
                src="https://placehold.co/120x32/000000/FFF?text=Company+Logo&font=roboto"
                alt="Company Logo"
                style={{
                  height: "32px",
                  maxWidth: "120px",
                  objectFit: "contain",
                }}
              />
            ),
            onClick: () => setActiveItem("logo"),
          },
        ],
      },
      {
        id: "center-section",
        alignment: "center",
        items: [
          {
            id: "home",
            label: "Home",
            icon: "home-fill",
            active: activeItem === "home",
            onClick: () => setActiveItem("home"),
          },
          {
            id: "products",
            label: "Products",
            icon: "logo-market",
            active: activeItem === "products",
            onClick: () => setActiveItem("products"),
          },
        ],
      },
      {
        id: "right-section",
        alignment: "right",
        items: [
          {
            id: "profile-img",
            label: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5278/5278732.png"
                  alt="Profile"
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span>John Doe</span>
              </div>
            ),
            active: activeItem === "profile-img",
            onClick: () => setActiveItem("profile-img"),
          },
          {
            id: "sign-in",
            label: "Sign In",
            active: activeItem === "sign-in",
            onClick: () => setActiveItem("sign-in"),
          },
          {
            id: "register",
            label: "Register",
            active: activeItem === "register",
            onClick: () => setActiveItem("register"),
          },
        ],
      },
    ];

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar sections={sections} position="relative" height="64px" />
        <div style={{ padding: "2rem" }}>
          <h1>MenuBar with Logo and Images</h1>
          <p>
            Demonstrates using React.ReactNode labels for custom content like
            logos and profile images.
          </p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div
            style={{
              marginTop: "2rem",
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <h2>Features Demonstrated:</h2>
            <ul>
              <li>
                <strong>Logo Image:</strong> Company logo on the left using img
                tag
              </li>
              <li>
                <strong>Profile Image:</strong> User profile with avatar and
                name
              </li>
              <li>
                <strong>Sign In/Register:</strong> Authentication options on the
                right
              </li>
              <li>
                <strong>Mixed Content:</strong> Images, text, and icons in the
                same menu
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};

export const PlainVariant: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");

    const sections: MenuBarSectionProps[] = [
      {
        id: "left-section",
        alignment: "left",
        items: [
          {
            id: "logo",
            label: (
              <img
                src="https://placehold.co/120x32/000000/FFF?text=Company+Logo&font=roboto"
                alt="Company Logo"
                style={{
                  height: "32px",
                  maxWidth: "120px",
                  objectFit: "contain",
                }}
              />
            ),
            href: "https://example.com",
          },
        ],
      },
      {
        id: "center-section",
        alignment: "center",
        items: [
          {
            id: "home",
            label: "Home",
            active: activeItem === "home",
            onClick: () => setActiveItem("home"),
          },
          {
            id: "about",
            label: "About",
            active: activeItem === "about",
            onClick: () => setActiveItem("about"),
          },
          {
            id: "services",
            label: "Services",
            active: activeItem === "services",
            onClick: () => setActiveItem("services"),
          },
          {
            id: "contact",
            label: "Contact",
            active: activeItem === "contact",
            onClick: () => setActiveItem("contact"),
          },
        ],
      },
      {
        id: "right-section",
        alignment: "right",
        items: [
          {
            id: "sign-in",
            label: "Sign In",
            active: activeItem === "sign-in",
            onClick: () => setActiveItem("sign-in"),
          },
          {
            id: "register",
            label: "Register",
            active: activeItem === "register",
            onClick: () => setActiveItem("register"),
          },
        ],
      },
    ];

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar
          sections={sections}
          variant="plain"
          position="relative"
          height="64px"
        />
        <div style={{ padding: "2rem" }}>
          <h1>Plain MenuBar Variant</h1>
          <p>A transparent menu bar with no background, border, or shadow.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>
          <div
            style={{
              marginTop: "2rem",
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <h2>Features:</h2>
            <ul>
              <li>
                <strong>Transparent Background:</strong> No background color
              </li>
              <li>
                <strong>No Border:</strong> Clean, borderless appearance
              </li>
              <li>
                <strong>No Shadow:</strong> Flat design without elevation
              </li>
              <li>
                <strong>Clickable Logo:</strong> Logo links to
                https://example.com
              </li>
              <li>
                <strong>Perfect for:</strong> Overlays, hero sections, minimal
                designs
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomThemeColors: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("home");
    const [activeColor, setActiveColor] = useState("#10B981");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const sections = createSampleSections(activeItem).map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        onClick: () => setActiveItem(item.id),
      })),
    }));

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <MenuBar
          sections={sections}
          position="relative"
          activeColor={activeColor}
          backgroundColor={backgroundColor}
          height="64px"
        />
        <div style={{ padding: "2rem" }}>
          <h1>Custom Theme Colors</h1>
          <p>Customize the active colors and background of the menu bar.</p>
          <p>
            Active item: <strong>{activeItem}</strong>
          </p>

          <div style={{ marginTop: "2rem" }}>
            <h3>Active Colors:</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            >
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

            <h3>Background Colors:</h3>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button
                onClick={() => setBackgroundColor("#ffffff")}
                style={{
                  backgroundColor: "#ffffff",
                  color: "black",
                  border: "1px solid #ccc",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                White
              </button>
              <button
                onClick={() => setBackgroundColor("#1F2937")}
                style={{
                  backgroundColor: "#1F2937",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Dark
              </button>
              <button
                onClick={() => setBackgroundColor("#F3F4F6")}
                style={{
                  backgroundColor: "#F3F4F6",
                  color: "black",
                  border: "1px solid #ccc",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Light Gray
              </button>
              <button
                onClick={() =>
                  setBackgroundColor(
                    "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                  )
                }
                style={{
                  background:
                    "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Gradient
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
