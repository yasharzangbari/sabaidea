"use client";

import useTranslation from "next-translate/useTranslation";
import * as Styled from "./page.styled";
import { routes } from "@/constants/routes";
import { BUTTON_SIZE } from "@/components/button/button.types";
import Link from "next/link";
import { Button } from "@/components";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Styled.HomeContainer>
      <Link href={routes.movies} passHref>
        <Button title={t("movieList")} size={BUTTON_SIZE.MEDIUM} />
      </Link>
    </Styled.HomeContainer>
  );
}
