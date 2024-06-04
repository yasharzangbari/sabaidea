import { Category } from "@/types/movieList";

export const getGenre = (categories: Category[], byKey: string) => {
  return categories.map((category) => category[byKey]).join(",");
};
