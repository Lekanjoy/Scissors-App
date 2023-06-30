import LinkShortenerForm from "@/components/shortener-form";
import { render, fireEvent, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import React from "react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("LinkShortenerForm", () => {
  beforeEach(() => {
    useRouter.mockReturnValue(null); // Mock useRouter to return null or any dummy value
  });

  it("renders a form", () => {
    render(<LinkShortenerForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("renders a text input type url to shorten link in the form and handles user input correctly", () => {
    render(<LinkShortenerForm />);
    const inputUrl = screen.getByTestId("url-input");
    expect(inputUrl).toBeInTheDocument();

    // Simulate user input by changing the value property
    fireEvent.change(inputUrl, { target: { value: "https://example.com" } });
    // Check if the value has been updated correctly
    expect(inputUrl.value).toBe("https://example.com");
  });

  it("renders a button for the form", () => {
    render(<LinkShortenerForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
