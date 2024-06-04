import { getGenre } from ".";

const MockData = {
  categories: [
    {
      title_en: "drama",
      title: "درام",
      link_type: "list",
      link_key: "drama",
    },
    {
      title_en: "family",
      title: "خانوادگی",
      link_type: "list",
      link_key: "family",
    },
  ],
};

describe("getGenre", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should give an string with comma separate of genre movies english title", () => {
    const result = getGenre(MockData.categories, "title_en");
    expect(result).toBe("drama,family");
  });

  it("it should give an string with comma separate of genre movies persian title", () => {
    const result = getGenre(MockData.categories, "title");
    expect(result).toBe("درام,خانوادگی");
  });
});
