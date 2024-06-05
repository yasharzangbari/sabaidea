import { Category } from "@/types/movieList";

export const getGenre = (categories: Category[], byKey: string) => {
  // @ts-ignore
  return categories.map((category) => category[byKey]).join(",");
};
