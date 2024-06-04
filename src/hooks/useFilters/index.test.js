import { renderHook } from "@testing-library/react";
import { useFilters } from ".";
import { useQueryParams } from "../useQueryParams";
import { QUERY_PARAMS, FILTER_ITEMS } from "@/constants/global";

jest.mock("../useQueryParams");

const mockUseQueryParams = useQueryParams;

describe("useFilters", () => {
  const mockMovies = [
    {
      id: 1,
      title: "دموکراسی",
      rate_avrage: 4.5,
      categories: [{ title_en: FILTER_ITEMS.ACTION }],
    },
    {
      id: 2,
      title: "تلخ اما شیرین",
      rate_avrage: 3.2,
      categories: [{ title_en: FILTER_ITEMS.COMEDY }],
    },
    {
      id: 3,
      title: "سیرک بزرگ",
      rate_avrage: 5.0,
      categories: [{ title_en: FILTER_ITEMS.ACTION }],
    },
  ];

  beforeEach(() => {
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(),
    });
  });

  it("should filter movies by genre", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(
        `?${QUERY_PARAMS.GENRE}=${FILTER_ITEMS.ACTION}`
      ),
    });

    const { result } = renderHook(() => useFilters(mockMovies));

    expect(result.current.filterMovies).toEqual([
      {
        id: 1,
        title: "دموکراسی",
        rate_avrage: 4.5,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
      {
        id: 3,
        title: "سیرک بزرگ",
        rate_avrage: 5.0,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
    ]);
  });

  it("should sort movies by highest rate", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(
        `?${QUERY_PARAMS.SORT}=${FILTER_ITEMS.HIGHEST_RATE}`
      ),
    });

    const { result } = renderHook(() => useFilters(mockMovies));

    expect(result.current.filterMovies).toEqual([
      {
        id: 3,
        title: "سیرک بزرگ",
        rate_avrage: 5.0,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
      {
        id: 1,
        title: "دموکراسی",
        rate_avrage: 4.5,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
      {
        id: 2,
        title: "تلخ اما شیرین",
        rate_avrage: 3.2,
        categories: [{ title_en: FILTER_ITEMS.COMEDY }],
      },
    ]);
  });

  it("should sort movies by lowest rate", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: new URLSearchParams(
        `?${QUERY_PARAMS.SORT}=${FILTER_ITEMS.LOWEST_RATE}`
      ),
    });

    const { result } = renderHook(() => useFilters(mockMovies));

    expect(result.current.filterMovies).toEqual([
      {
        id: 2,
        title: "تلخ اما شیرین",
        rate_avrage: 3.2,
        categories: [{ title_en: FILTER_ITEMS.COMEDY }],
      },
      {
        id: 1,
        title: "دموکراسی",
        rate_avrage: 4.5,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
      {
        id: 3,
        title: "سیرک بزرگ",
        rate_avrage: 5.0,
        categories: [{ title_en: FILTER_ITEMS.ACTION }],
      },
    ]);
  });

  it("should not filter or sort movies if no query params are set", () => {
    const { result } = renderHook(() => useFilters(mockMovies));

    expect(result.current.filterMovies).toEqual(mockMovies);
  });
});
