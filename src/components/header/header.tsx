import React from "react";
import { DropDown } from "../dropdown";
import { Checkbox } from "../checkbox";
import useTranslation from "next-translate/useTranslation";
import * as Styled from "./header.styled";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Styled.Header>
      <Styled.ContentWrapper>
        <DropDown label={t("rateOfMovies")}>
          <Styled.DropDownItems>
            <Checkbox label={t("highestRate")} />
            <Checkbox label={t("lowestRate")} />
          </Styled.DropDownItems>
        </DropDown>

        <DropDown label={t("genre")}>
          <Styled.DropDownContent>
            <Styled.DropDownItems>
              <Checkbox label={t("drama")} />
              <Checkbox label={t("scienceFiction")} />
            </Styled.DropDownItems>
            <Styled.DropDownItems>
              <Checkbox label={t("comedy")} />
              <Checkbox label={t("action")} />
            </Styled.DropDownItems>
          </Styled.DropDownContent>
        </DropDown>
      </Styled.ContentWrapper>
    </Styled.Header>
  );
};
