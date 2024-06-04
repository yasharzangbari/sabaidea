"use client";
import { Checkbox, DropDown, Header, MovieList } from "@/components";
import { Card } from "@/components/card";
import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";
import MoviesAndSeries from "../../../assets/data.json";

type props = {};
const Movies: FC<props> = (props) => {
  const { t } = useTranslation();
  console.log("MoviesAndSeries", MoviesAndSeries);
  return (
    <>
      <Header />
      <MovieList movies={MoviesAndSeries} />
    </>
  );
};

export default Movies;
