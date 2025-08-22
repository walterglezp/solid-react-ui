import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import type { IconNameProps } from "./Icon";
import React from "react";

const meta: Meta<typeof Icon> = {
  title: "Graphics/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

const iconNames: IconNameProps[] = [
  "coding",
  "mortarboard",
  "github",
  "linkedin",
  "verified",
  "gear",
  "laptop-error",
  "magnifier",
  "broom",
  "trash-alt",
  "ac",
  "arrow-left",
  "arrow-right",
  "bell",
  "calendar",
  "caret-left",
  "caret-right",
  "check-mark-fill",
  "chevron-left",
  "chevron-right",
  "children",
  "compress",
  "couple",
  "dashboard",
  "details-info",
  "expand",
  "edit",
  "envelope",
  "eye",
  "eye-slash",
  "exclamation-circle-fill",
  "facebook",
  "garage",
  "global",
  "go-back",
  "instagram",
  "image",
  "images",
  "iron",
  "hair-dryer",
  "home-fill",
  "language",
  "logo-agents",
  "logo-business",
  "logo-houses",
  "logo-cars",
  "logo-market",
  "logo-restaurants",
  "manage",
  "map-mark",
  "menu-dots",
  "message",
  "messages",
  "minus",
  "parking",
  "pets",
  "phone-old",
  "plus",
  "pool",
  "question-fill",
  "save-disc",
  "star",
  "share",
  "shield",
  "sort-down",
  "sort-up",
  "support",
  "swap-arrows",
  "three-dots",
  "thumbs-up",
  "toilet-paper",
  "twitter",
  "tv",
  "user",
  "user-img",
  "user-shield",
  "user-settings",
  "x",
  "x-circle",
  "x-circle-fill",
  "x-square-fill",
  "youtube",
  "washer",
  "google",
  "mail-send",
  "chevron-up",
  "chevron-down",
  "arrow-up",
  "arrow-down",
  "caret-up",
  "caret-down",
  "download",
  "upload",
  "refresh",
  "heart",
  "heart-fill",
  "play",
  "pause",
  "stop",
  "volume",
  "volume-mute",
  "lock",
  "unlock",
  "warning",
  "info",
  "success",
  "error",
  "file",
  "folder",
  "camera",
  "video",
  "search",
  "filter",
  "settings",
];

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
        gap: "20px",
        padding: "1rem",
      }}
    >
      {iconNames.map((iconName) => (
        <div
          key={iconName}
          style={{
            textAlign: "center",
            fontSize: "12px",
            wordBreak: "break-word",
          }}
        >
          <Icon name={iconName} size={32} />
          <div style={{ marginTop: "0.5rem" }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};
