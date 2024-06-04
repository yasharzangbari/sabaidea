import React, { FC, useState } from "react";
import * as Styled from "./dropdown.styled";
import { ArrowDown } from "../icons";

export const DropDown: FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleDropDown = () => setToggle(!toggle);

  return (
    <Styled.DropDownWrapper>
      <Styled.DropDown onClick={toggleDropDown}>
        <Styled.DropDownLabel>
          <Styled.DropDownText>{label}</Styled.DropDownText>
          <ArrowDown />
        </Styled.DropDownLabel>
      </Styled.DropDown>
      {toggle && <Styled.DropDownContent>{children}</Styled.DropDownContent>}
    </Styled.DropDownWrapper>
  );
};
