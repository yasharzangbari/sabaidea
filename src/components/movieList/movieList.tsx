import React, { FC } from "react";
import { Movies } from "@/types/movieList";
import * as Styled from "./movieList.styled";
import useTranslation from "next-translate/useTranslation";
import { MovieListPropType } from "./movieList.types";
import { Card } from "../card";
import { getGenre } from "@/app/utils/getGenre";

export const MovieList: FC<MovieListPropType> = ({ movies }) => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Title>{t("allMOviesAndSeries")}</Styled.Title>
      <Styled.List>
        {movies?.map((movie) => {
          const genre = getGenre(movie.categories);
          return (
            <Card
              key={movie.id}
              image={movie.pic.movie_img_b}
              rate={movie.rate_avrage}
              interested={movie.avg_rate_label}
              title={movie.movie_title}
              genre={genre}
            />
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
};
