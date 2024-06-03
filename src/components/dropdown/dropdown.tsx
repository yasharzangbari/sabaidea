import React, { FC, useState } from "react";
import * as Styled from "./dropdown.styled";
import { ArrowDown } from "../icons";
import { Checkbox } from "../checkbox";
import useTranslation from "next-translate/useTranslation";

export const DropDown: FC<any> = ({ label, children }) => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState<boolean>(false);
  const openDropDown = () => setToggle(!toggle);

  return (
    <Styled.DropDownWrapper>
      <Styled.DropDown onClick={openDropDown}>
        <Styled.DropDownLabel>
          <Styled.DropDownText>{label}</Styled.DropDownText>
          <ArrowDown />
        </Styled.DropDownLabel>
      </Styled.DropDown>
      {toggle && <Styled.DropDownContent>{children}</Styled.DropDownContent>}
    </Styled.DropDownWrapper>
  );
};
