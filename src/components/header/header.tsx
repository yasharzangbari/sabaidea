import React from "react";

import * as Styled from "./header.styled";
import { Filters } from "../filters";
import Link from "next/link";
import { Button } from "../button";
import { BUTTON_SIZE } from "../button/button.types";
import { routes } from "@/constants/routes";
import useTranslation from "next-translate/useTranslation";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Styled.Header>
      <Filters />
      <Link href={routes.home} passHref>
        <Button title={t("home")} size={BUTTON_SIZE.SMALL} />
      </Link>
    </Styled.Header>
  );
};
