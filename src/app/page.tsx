"use client";

import useTranslation from "next-translate/useTranslation";
import * as Styled from "./page.styled";
import { ThemeProvider } from "styled-components";
import { Theme } from "@/constants/theme";
import { routes } from "@/constants/routes";
import { BUTTON_SIZE } from "@/components/button/button.types";
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={Theme}>
      <Styled.HomeContainer>
        <Link href={routes.movies} passHref>
          <Button title={t("movieList")} size={BUTTON_SIZE.MEDIUM} />
        </Link>
      </Styled.HomeContainer>
    </ThemeProvider>
  );
}
