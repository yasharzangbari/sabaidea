"use client";
import { Checkbox } from "@/components";
import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";
type props = {};
const Movies: FC<props> = (props) => {
  const { t } = useTranslation();
  return <Checkbox label={t("highestRate")} />;
};

export default Movies;
