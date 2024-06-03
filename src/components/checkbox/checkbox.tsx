import classNames from "classnames";
import React, { FC } from "react";
import * as Styled from "./checkbox.styled";
import { CheckBoxProps } from "./checkbox.types";

export const Checkbox: FC<CheckBoxProps> = (props) => {
  const { label, className, name, ...rest } = props;
  return (
    <Styled.Wrapper htmlFor={name}>
      <input
        type="checkbox"
        className={classNames("input")}
        name={name}
        {...rest}
      />
      {label && <span>{label}</span>}
    </Styled.Wrapper>
  );
};
