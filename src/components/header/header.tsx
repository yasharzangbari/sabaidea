import React from "react";

import * as Styled from "./header.styled";
import { Filters } from "../filters";

export const Header = () => {
  return (
    <Styled.Header>
      <Filters />
    </Styled.Header>
  );
};
