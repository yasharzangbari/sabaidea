"use client";
import { Checkbox, DropDown, Header } from "@/components";
import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";
type props = {};
const Movies: FC<props> = (props) => {
  const { t } = useTranslation();
  return <Header />;
};

export default Movies;
