import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchInput, Filter } from "./SearchInput";

describe("SearchInput", () => {
  test("renders basic search input", () => {
    render(<SearchInput />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("renders with custom placeholder", () => {
    render(<SearchInput placeholder="Search for items..." />);

    expect(
      screen.getByPlaceholderText("Search for items..."),
    ).toBeInTheDocument();
  });

  test("renders without search button when showSearchButton is false", () => {
    render(<SearchInput showSearchButton={false} />);

    expect(screen.queryByText("Search")).not.toBeInTheDocument();
  });

  test("renders custom search button text", () => {
    render(<SearchInput searchButtonText="Find" />);

    expect(screen.getByText("Find")).toBeInTheDocument();
  });

  test("displays search icon", () => {
    render(<SearchInput />);

    const searchIcon = document.querySelector(".search-input__search-icon svg");
    expect(searchIcon).toBeInTheDocument();
  });

  test("handles input value changes", () => {
    const mockOnValueChange = vi.fn();

    render(<SearchInput onValueChange={mockOnValueChange} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test query" } });

    expect(mockOnValueChange).toHaveBeenCalledWith("test query");
  });

  test("calls onSearch when search button is clicked", () => {
    const mockOnSearch = vi.fn();

    render(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });

  test("calls onSearch when Enter key is pressed", () => {
    const mockOnSearch = vi.fn();

    render(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "keyboard search" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnSearch).toHaveBeenCalledWith("keyboard search");
  });

  test("does not show filter button when no children provided", () => {
    render(<SearchInput />);

    expect(screen.queryByLabelText("Toggle filters")).not.toBeInTheDocument();
  });

  test("shows filter button when children are provided", () => {
    render(
      <SearchInput>
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    expect(screen.getByLabelText("Toggle filters")).toBeInTheDocument();
  });

  test("opens filter popup when filter button is clicked", async () => {
    render(
      <SearchInput popupTitle="Test Filters">
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(screen.getByText("Test Filters")).toBeInTheDocument();
      expect(screen.getByText("Test Filter")).toBeInTheDocument();
      expect(screen.getByText("Filter content")).toBeInTheDocument();
    });
  });

  test("closes filter popup when close button is clicked", async () => {
    render(
      <SearchInput popupTitle="Test Filters">
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(screen.getByText("Test Filters")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close filters");
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText("Test Filters")).not.toBeInTheDocument();
    });
  });

  test("applies disabled state correctly", () => {
    render(<SearchInput disabled />);

    const input = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByText("Search");

    expect(input).toBeDisabled();
    expect(searchButton).toBeDisabled();

    const container = document.querySelector(".search-input");
    expect(container).toHaveClass("search-input--disabled");
  });

  test("uses provided value prop", () => {
    render(<SearchInput value="initial value" />);

    const input = screen.getByDisplayValue("initial value");
    expect(input).toBeInTheDocument();
  });

  test("updates input when value prop changes", () => {
    const { rerender } = render(<SearchInput value="first value" />);

    expect(screen.getByDisplayValue("first value")).toBeInTheDocument();

    rerender(<SearchInput value="second value" />);

    expect(screen.getByDisplayValue("second value")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const customClass = "custom-search-class";
    render(<SearchInput className={customClass} />);

    const container = document.querySelector(".search-input");
    expect(container).toHaveClass(customClass);
  });

  test("calls onFiltersChange when popup state changes", async () => {
    const mockOnFiltersChange = vi.fn();

    render(
      <SearchInput onFiltersChange={mockOnFiltersChange}>
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    fireEvent.click(filterButton);

    expect(mockOnFiltersChange).toHaveBeenCalledWith(true);

    await waitFor(() => {
      expect(screen.getByText("Test Filter")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close filters");
    fireEvent.click(closeButton);

    expect(mockOnFiltersChange).toHaveBeenCalledWith(false);
  });

  test("handles empty search gracefully", () => {
    const mockOnSearch = vi.fn();

    render(<SearchInput onSearch={mockOnSearch} />);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("");
  });

  test("filter button shows active state when popup is open", async () => {
    render(
      <SearchInput>
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    expect(filterButton).not.toHaveClass("search-input__filter-button--active");

    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(filterButton).toHaveClass("search-input__filter-button--active");
    });
  });

  test("controlled popup state works correctly", () => {
    const { rerender } = render(
      <SearchInput showFilters={false}>
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    expect(screen.queryByText("Test Filter")).not.toBeInTheDocument();

    rerender(
      <SearchInput showFilters={true}>
        <Filter title="Test Filter">
          <div>Filter content</div>
        </Filter>
      </SearchInput>,
    );

    expect(screen.getByText("Test Filter")).toBeInTheDocument();
  });
});

describe("Filter", () => {
  test("renders filter with title and content", () => {
    render(
      <Filter title="Test Filter">
        <div>Filter content</div>
      </Filter>,
    );

    expect(screen.getByText("Test Filter")).toBeInTheDocument();
    expect(screen.getByText("Filter content")).toBeInTheDocument();
  });

  test("shows content by default when not collapsible", () => {
    render(
      <Filter title="Test Filter">
        <div>Filter content</div>
      </Filter>,
    );

    expect(screen.getByText("Filter content")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("shows collapse toggle when collapsible", () => {
    render(
      <Filter title="Test Filter" collapsible>
        <div>Filter content</div>
      </Filter>,
    );

    expect(screen.getByText("Test Filter")).toBeInTheDocument();
    expect(screen.getByText("Filter content")).toBeInTheDocument();

    const header = screen
      .getByText("Test Filter")
      .closest(".search-input__filter-header");
    expect(header).toHaveClass("search-input__filter-header--clickable");
  });

  test("collapses content when defaultCollapsed is true", () => {
    render(
      <Filter title="Test Filter" collapsible defaultCollapsed>
        <div>Filter content</div>
      </Filter>,
    );

    expect(screen.getByText("Test Filter")).toBeInTheDocument();
    expect(screen.queryByText("Filter content")).not.toBeInTheDocument();
  });

  test("toggles content when collapsible header is clicked", async () => {
    render(
      <Filter title="Test Filter" collapsible defaultCollapsed>
        <div>Filter content</div>
      </Filter>,
    );

    expect(screen.queryByText("Filter content")).not.toBeInTheDocument();

    const header = screen
      .getByText("Test Filter")
      .closest(".search-input__filter-header");
    fireEvent.click(header!);

    await waitFor(() => {
      expect(screen.getByText("Filter content")).toBeInTheDocument();
    });

    fireEvent.click(header!);

    await waitFor(() => {
      expect(screen.queryByText("Filter content")).not.toBeInTheDocument();
    });
  });

  test("renders complex filter content", () => {
    render(
      <Filter title="Complex Filter">
        <div>
          <input type="checkbox" id="test1" />
          <label htmlFor="test1">Option 1</label>
          <input type="checkbox" id="test2" />
          <label htmlFor="test2">Option 2</label>
          <select>
            <option>Choose option</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
          </select>
        </div>
      </Filter>,
    );

    expect(screen.getByText("Complex Filter")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Choose option")).toBeInTheDocument();
  });
});

describe("SearchInput Integration", () => {
  test("multiple filters render correctly", () => {
    render(
      <SearchInput>
        <Filter title="Filter 1">
          <div>Content 1</div>
        </Filter>
        <Filter title="Filter 2">
          <div>Content 2</div>
        </Filter>
        <Filter title="Filter 3" collapsible defaultCollapsed>
          <div>Content 3</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    fireEvent.click(filterButton);

    expect(screen.getByText("Filter 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Filter 2")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.getByText("Filter 3")).toBeInTheDocument();
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument(); // collapsed
  });

  test("popup scrolls when content is too tall", () => {
    render(
      <SearchInput>
        <Filter title="Filter 1">
          <div style={{ height: "200px" }}>Tall content 1</div>
        </Filter>
        <Filter title="Filter 2">
          <div style={{ height: "200px" }}>Tall content 2</div>
        </Filter>
        <Filter title="Filter 3">
          <div style={{ height: "200px" }}>Tall content 3</div>
        </Filter>
      </SearchInput>,
    );

    const filterButton = screen.getByLabelText("Toggle filters");
    fireEvent.click(filterButton);

    const popupContent = document.querySelector(".search-input__popup-content");
    expect(popupContent).toBeInTheDocument();
    expect(popupContent).toHaveStyle("overflow-y: auto");
  });
});
