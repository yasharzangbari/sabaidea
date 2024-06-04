import { Movie, Movies } from "@/types/movieList";
import { useMemo } from "react";
import { useQueryParams } from "../useQueryParams";
import { FILTER_ITEMS, QUERY_PARAMS } from "@/constants/global";
import { getGenre } from "@/utils/getGenre";

export const useFilters = (data: Movies) => {
  const { queryParam } = useQueryParams();
  const genre = queryParam.get(QUERY_PARAMS.GENRE);
  const sort = queryParam.get(QUERY_PARAMS.SORT);

  const ascendingSort = (a: Movie, b: Movie) => {
    if (a.rate_avrage < b.rate_avrage) return 1;
    return -1;
  };

  const descendingSort = (a: Movie, b: Movie) => {
    if (a.rate_avrage > b.rate_avrage) return 1;
    return -1;
  };

  const compare = useMemo(() => {
    if (sort === FILTER_ITEMS.HIGHEST_RATE) return ascendingSort;
    if (sort === FILTER_ITEMS.LOWEST_RATE) return descendingSort;
    return () => 0;
  }, [sort, ascendingSort, descendingSort]);

  const filterMovies = useMemo(() => {
    let filteredData = data;
    if (genre) {
      filteredData = data.filter((item) =>
        getGenre(item.categories, "title_en").includes(genre)
      );
    }
    return filteredData.sort(compare);
  }, [data, genre, compare]);

  return { filterMovies };
};
