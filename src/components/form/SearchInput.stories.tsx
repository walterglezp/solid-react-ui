import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { CheckBox } from "./CheckBox";
import { DatePicker } from "./date/DatePicker";
import { InputRange } from "./InputRange";
import { Select } from "./Select";
import type { FormFieldProps } from "./Form";

// Helper function to create form fields
const createFormField = (name: string, value: any = false): FormFieldProps => ({
  name,
  formName: "search",
  value,
  error: "",
  section: 0,
  validate: {},
});

const meta = {
  title: "Form/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A powerful search input component with advanced filtering capabilities.

## Features
- Compact search interface with filter popup
- Composable Filter components with collapsible sections
- Scrollable popup for many filters
- Support for any form components inside filters
- Date pickers, checkboxes, selects, ranges, etc.
- Responsive design
- Click outside to close
- Amazon-style compact filtering

## Usage
\`\`\`tsx
<SearchInput>
  <SearchInput.Filter title="Features">
    <CheckBox field={organicField} label="Organic" />
    <CheckBox field={shippingField} label="Free shipping" />
  </SearchInput.Filter>
  <SearchInput.Filter title="Price Range">
    <InputRange field={priceField} min={0} max={1000} />
  </SearchInput.Filter>
</SearchInput>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the search input",
    },
    value: {
      control: { type: "text" },
      description: "Current search value",
    },
    searchButtonText: {
      control: { type: "text" },
      description: "Text displayed on the search button",
    },
    showSearchButton: {
      control: { type: "boolean" },
      description: "Whether to show the search button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the component is disabled",
    },
    popupTitle: {
      control: { type: "text" },
      description: "Title shown in the filter popup header",
    },
    children: {
      description: "Filter components to be displayed in the popup",
    },
    onSearch: {
      description: "Callback fired when search is performed",
    },
    onValueChange: {
      description: "Callback fired when input value changes",
    },
    onFiltersChange: {
      description: "Callback fired when filter popup is opened/closed",
    },
  },
  args: {
    placeholder: "Search products...",
    searchButtonText: "Search",
    showSearchButton: true,
    disabled: false,
    popupTitle: "Filters",
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onSearch: (query) => window.alert(`Searching for: "${query}"`),
    onValueChange: (value) => console.log("Search value:", value),
  },
};

export const WithoutSearchButton: Story = {
  args: {
    showSearchButton: false,
    placeholder: "Type and press Enter to search...",
    onSearch: (query) => window.alert(`Searching for: "${query}"`),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Search input without the search button. Search is triggered by pressing Enter.",
      },
    },
  },
};

export const BasicFilters: Story = {
  render: () => {
    const [organicField, setOrganicField] = useState(
      createFormField("organic", false),
    );
    const [shippingField, setShippingField] = useState(
      createFormField("shipping", false),
    );
    const [premiumField, setPremiumField] = useState(
      createFormField("premium", false),
    );

    return (
      <SearchInput
        placeholder="Search products..."
        onSearch={(query) => window.alert(`Searching for: "${query}"`)}
        popupTitle="Product Filters"
      >
        <SearchInput.Filter title="Features">
          <CheckBox
            field={organicField}
            onChange={setOrganicField}
            label="Organic Products"
          />
          <CheckBox
            field={shippingField}
            onChange={setShippingField}
            label="Free Shipping"
          />
          <CheckBox
            field={premiumField}
            onChange={setPremiumField}
            label="Premium Quality"
          />
        </SearchInput.Filter>
      </SearchInput>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with basic checkbox filters in a popup.",
      },
    },
  },
};

export const ComprehensiveFilters: Story = {
  render: () => {
    // Feature checkboxes
    const [organicField, setOrganicField] = useState(
      createFormField("organic", false),
    );
    const [shippingField, setShippingField] = useState(
      createFormField("shipping", false),
    );
    const [premiumField, setPremiumField] = useState(
      createFormField("premium", false),
    );
    const [ecoField, setEcoField] = useState(createFormField("eco", false));
    const [localField, setLocalField] = useState(
      createFormField("local", false),
    );

    // Price range
    const [minPriceField, setMinPriceField] = useState(
      createFormField("minPrice", ""),
    );
    const [maxPriceField, setMaxPriceField] = useState(
      createFormField("maxPrice", ""),
    );

    // Rating filter
    const [ratingField, setRatingField] = useState(
      createFormField("rating", ""),
    );

    // Date filter
    const [dateField, setDateField] = useState(createFormField("date", ""));

    // Brand filter
    const [brandField, setBrandField] = useState(createFormField("brand", ""));

    const ratingOptions = [
      { value: "", label: "Any Rating" },
      { value: "4", label: "4+ Stars" },
      { value: "3", label: "3+ Stars" },
      { value: "2", label: "2+ Stars" },
    ];

    const brandOptions = [
      { value: "", label: "Any Brand" },
      { value: "apple", label: "Apple" },
      { value: "samsung", label: "Samsung" },
      { value: "sony", label: "Sony" },
      { value: "lg", label: "LG" },
    ];

    return (
      <SearchInput
        placeholder="Search for anything..."
        onSearch={(query) => window.alert(`Searching for: "${query}"`)}
        popupTitle="Advanced Filters"
      >
        <SearchInput.Filter title="Features" collapsible>
          <CheckBox
            field={organicField}
            onChange={setOrganicField}
            label="Organic Products"
          />
          <CheckBox
            field={shippingField}
            onChange={setShippingField}
            label="Free Shipping"
          />
          <CheckBox
            field={premiumField}
            onChange={setPremiumField}
            label="Premium Quality"
          />
          <CheckBox
            field={ecoField}
            onChange={setEcoField}
            label="Eco-Friendly"
          />
          <CheckBox
            field={localField}
            onChange={setLocalField}
            label="Local Sellers"
          />
        </SearchInput.Filter>

        <SearchInput.Filter title="Price Range">
          <div className="price-range">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                className="form-control"
                placeholder="Min"
                value={String(minPriceField.value || "")}
                onChange={(e) =>
                  setMinPriceField({ ...minPriceField, value: e.target.value })
                }
              />
            </div>
            <span className="range-separator">to</span>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                className="form-control"
                placeholder="Max"
                value={String(maxPriceField.value || "")}
                onChange={(e) =>
                  setMaxPriceField({ ...maxPriceField, value: e.target.value })
                }
              />
            </div>
          </div>
        </SearchInput.Filter>

        <SearchInput.Filter title="Customer Reviews">
          <Select
            field={ratingField}
            onChange={setRatingField}
            options={ratingOptions}
            placeholder="Select minimum rating..."
          />
        </SearchInput.Filter>

        <SearchInput.Filter title="Brand">
          <Select
            field={brandField}
            onChange={setBrandField}
            options={brandOptions}
            placeholder="Select brand..."
          />
        </SearchInput.Filter>

        <SearchInput.Filter title="Created Date" collapsible defaultCollapsed>
          <DatePicker field={dateField} onChange={setDateField} />
        </SearchInput.Filter>
      </SearchInput>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive search input with multiple filter types including checkboxes, price range, ratings, brand selection, and date picker. Some filters are collapsible.",
      },
    },
  },
};

export const ScrollableFilters: Story = {
  render: () => {
    // Many checkboxes to demonstrate scrolling
    const [field1, setField1] = useState(createFormField("field1", false));
    const [field2, setField2] = useState(createFormField("field2", false));
    const [field3, setField3] = useState(createFormField("field3", false));
    const [field4, setField4] = useState(createFormField("field4", false));
    const [field5, setField5] = useState(createFormField("field5", false));
    const [field6, setField6] = useState(createFormField("field6", false));
    const [field7, setField7] = useState(createFormField("field7", false));
    const [field8, setField8] = useState(createFormField("field8", false));
    const [field9, setField9] = useState(createFormField("field9", false));
    const [field10, setField10] = useState(createFormField("field10", false));

    const [priceField, setPriceField] = useState(createFormField("price", ""));
    const [dateField, setDateField] = useState(createFormField("date", ""));

    return (
      <SearchInput
        placeholder="Search in large catalog..."
        onSearch={(query) => window.alert(`Searching for: "${query}"`)}
        popupTitle="All Filters"
      >
        <SearchInput.Filter title="Product Features">
          <CheckBox field={field1} onChange={setField1} label="Organic" />
          <CheckBox field={field2} onChange={setField2} label="Free Shipping" />
          <CheckBox
            field={field3}
            onChange={setField3}
            label="Premium Quality"
          />
          <CheckBox field={field4} onChange={setField4} label="Eco-Friendly" />
          <CheckBox field={field5} onChange={setField5} label="Bestseller" />
        </SearchInput.Filter>

        <SearchInput.Filter title="Seller Benefits">
          <CheckBox field={field6} onChange={setField6} label="Local Seller" />
          <CheckBox
            field={field7}
            onChange={setField7}
            label="Verified Seller"
          />
          <CheckBox field={field8} onChange={setField8} label="Fast Delivery" />
          <CheckBox field={field9} onChange={setField9} label="Return Policy" />
          <CheckBox
            field={field10}
            onChange={setField10}
            label="Customer Support"
          />
        </SearchInput.Filter>

        <SearchInput.Filter title="Price Range">
          <InputRange
            field={priceField}
            onChange={setPriceField}
            min={0}
            max={1000}
            step={10}
            label="Price ($0 - $1000)"
          />
        </SearchInput.Filter>

        <SearchInput.Filter title="Availability Date">
          <DatePicker field={dateField} onChange={setDateField} />
        </SearchInput.Filter>

        <SearchInput.Filter title="More Features" collapsible defaultCollapsed>
          <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
            Additional filters can be added here...
            <br />
            This demonstrates scrollable content in the popup.
          </div>
        </SearchInput.Filter>
      </SearchInput>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Search input with many filters to demonstrate scrollable popup behavior. The popup becomes scrollable when content exceeds the maximum height.",
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("magic john fan");
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    // Filter states
    const [organicField, setOrganicField] = useState(
      createFormField("organic", true),
    );
    const [shippingField, setShippingField] = useState(
      createFormField("shipping", false),
    );
    const [ratingField, setRatingField] = useState(
      createFormField("rating", "4"),
    );

    const ratingOptions = [
      { value: "", label: "Any Rating" },
      { value: "4", label: "4+ Stars" },
      { value: "3", label: "3+ Stars" },
      { value: "2", label: "2+ Stars" },
    ];

    const handleSearch = (query: string) => {
      if (query.trim()) {
        setSearchHistory((prev) => [...prev.slice(-4), query]);
        window.alert(`Searching for: "${query}"`);
      }
    };

    const getActiveFiltersCount = () => {
      let count = 0;
      if (organicField.value) count++;
      if (shippingField.value) count++;
      if (ratingField.value) count++;
      return count;
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <SearchInput
          value={searchValue}
          onValueChange={setSearchValue}
          onSearch={handleSearch}
          showFilters={isFiltersOpen}
          onFiltersChange={setIsFiltersOpen}
          placeholder="Search for products..."
          popupTitle={`Filters ${getActiveFiltersCount() > 0 ? `(${getActiveFiltersCount()} active)` : ""}`}
        >
          <SearchInput.Filter title="Product Features">
            <CheckBox
              field={organicField}
              onChange={setOrganicField}
              label="Organic Products"
            />
            <CheckBox
              field={shippingField}
              onChange={setShippingField}
              label="Free Shipping"
            />
          </SearchInput.Filter>

          <SearchInput.Filter title="Customer Reviews">
            <Select
              field={ratingField}
              onChange={setRatingField}
              options={ratingOptions}
              placeholder="Select minimum rating..."
            />
          </SearchInput.Filter>
        </SearchInput>

        <div style={{ fontSize: "14px", color: "#666" }}>
          <p>
            <strong>Current Search:</strong> "{searchValue}"
          </p>
          <p>
            <strong>Filters Open:</strong> {isFiltersOpen ? "Yes" : "No"}
          </p>
          <p>
            <strong>Active Filters:</strong> {getActiveFiltersCount()}
          </p>

          {searchHistory.length > 0 && (
            <div>
              <p>
                <strong>Recent Searches:</strong>
              </p>
              <ul
                style={{ margin: "0", padding: "0 0 0 20px", fontSize: "12px" }}
              >
                {searchHistory.map((search, index) => (
                  <li key={index} style={{ marginBottom: "2px" }}>
                    "{search}"
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing controlled state with active filter count and search history. This demonstrates the full power of the composable filter system.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    const [organicField] = useState(createFormField("organic", false));
    const [shippingField] = useState(createFormField("shipping", false));

    return (
      <SearchInput
        disabled
        value="Disabled search"
        placeholder="This search is disabled..."
        popupTitle="Disabled Filters"
      >
        <SearchInput.Filter title="Features">
          <CheckBox
            field={organicField}
            onChange={() => {}}
            label="Organic Products"
          />
          <CheckBox
            field={shippingField}
            onChange={() => {}}
            label="Free Shipping"
          />
        </SearchInput.Filter>
      </SearchInput>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state of the search input with filters.",
      },
    },
  },
};
