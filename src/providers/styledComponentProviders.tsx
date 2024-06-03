"use client";

import { Theme } from "@/constants/theme";
import React, { ReactNode, FC } from "react";
import { ThemeProvider } from "styled-components";

type PropTypes = {
  children: ReactNode;
};

const StyledComponentProviders: FC<PropTypes> = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children} </ThemeProvider>;
};

export default StyledComponentProviders;
