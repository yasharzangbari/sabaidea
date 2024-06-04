import { Category } from "@/types/movieList";

export const getGenre = (categories: Category[]) => {
  return categories.map((category) => category.title).join(",");
};
