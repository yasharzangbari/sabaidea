"use client";
import { Header, MovieList } from "@/components";
import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";
import MoviesAndSeries from "../../../assets/data.json";

type props = {};
const Movies: FC<props> = (props) => {
  return (
    <>
      <Header />
      <MovieList movies={MoviesAndSeries} />
    </>
  );
};

export default Movies;
