import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Filters } from "./filters";
import { useQueryParams } from "@/hooks/useQueryParams";
import useTranslation from "next-translate/useTranslation";
import {
  DROPDOWN_LABELS,
  FILTER_ITEMS,
  FILTER_LABELS,
  QUERY_PARAMS,
} from "@/constants/global";
import { ThemeProvider } from "styled-components";
import { Theme } from "@/constants/theme";

jest.mock("@/hooks/useQueryParams");
jest.mock("next-translate/useTranslation");

const mockUseQueryParams = useQueryParams;
const mockUseTranslation = useTranslation;

const wrapper = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

describe("Filters component", () => {
  beforeEach(() => {
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(),
      setQuery: jest.fn(),
    });

    mockUseTranslation.mockReturnValue({
      t: (key) => key,
    });
  });

  it("renders the Filters component correctly", () => {
    render(<Filters />, { wrapper });

    waitFor(() => {
      expect(screen.getByText(DROPDOWN_LABELS.GENRE)).toBeInTheDocument();
      expect(screen.queryByTestId(FILTER_LABELS.DRAMA)).toBeInTheDocument();
      expect(
        screen.getByLabelText(FILTER_LABELS.SCIENCE_FICTION)
      ).toBeInTheDocument();
      expect(screen.getByLabelText(FILTER_LABELS.COMEDY)).toBeInTheDocument();
      expect(screen.getByLabelText(FILTER_LABELS.ACTION)).toBeInTheDocument();
      expect(
        screen.getByText(DROPDOWN_LABELS.RATE_OF_MOVIES)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(FILTER_LABELS.HIGHEST_RATE)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(FILTER_LABELS.LOWEST_RATE)
      ).toBeInTheDocument();
    });
  });

  it("calls setQuery with the correct parameters when a genre is selected", () => {
    const setQuery = jest.fn();
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(),
      setQuery,
    });

    render(<Filters />, { wrapper });

    waitFor(() => {
      fireEvent.click(screen.getByLabelText(FILTER_LABELS.DRAMA));
      expect(setQuery).toHaveBeenCalledWith(
        QUERY_PARAMS.GENRE,
        FILTER_ITEMS.DRAMA
      );

      fireEvent.click(screen.getByLabelText(FILTER_LABELS.SCIENCE_FICTION));
      expect(setQuery).toHaveBeenCalledWith(
        QUERY_PARAMS.GENRE,
        FILTER_ITEMS.SCIENCE_FICTION
      );
    });
  });

  it("calls setQuery with the correct parameters when a sort option is selected", () => {
    const setQuery = jest.fn();
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(),
      setQuery,
    });

    render(<Filters />, { wrapper });

    waitFor(() => {
      fireEvent.click(screen.getByLabelText(FILTER_LABELS.HIGHEST_RATE));
      expect(setQuery).toHaveBeenCalledWith(
        QUERY_PARAMS.SORT,
        FILTER_ITEMS.HIGHEST_RATE
      );

      fireEvent.click(screen.getByLabelText(FILTER_LABELS.LOWEST_RATE));
      expect(setQuery).toHaveBeenCalledWith(
        QUERY_PARAMS.SORT,
        FILTER_ITEMS.LOWEST_RATE
      );
    });
  });
});
