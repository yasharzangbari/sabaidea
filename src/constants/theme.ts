export enum FONT_WEIGHT {
  regular = 300,
  bold = 700,
}

export const spacing = {
  none: "0px",
  xxs: "2px",
  xs: "4px",
  ssm: "6px",
  sm: "10px",
  md: "12px",
  xmd: "14px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "40px",
  "5xl": "48px",
  "6xl": "64px",
} as const;

export const rounding = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  full: "999px",
} as const;

export const Theme = {
  colors: {
    lightGray: "#eee",
    gray: "gray",
    black: "#404040",
    gold: "#FFC100",
    goldHover: "#FFB000",
    white: "#fff",
    darkBlack: "#171717",
    darkGray: "#232222",
    gradient:
      "linear-gradient( to bottom,rgba(97, 93, 93, 0.9),rgb(11, 10, 10))",
  },
  fontWeight: FONT_WEIGHT,
  spacing: spacing,
  rounding: rounding,
} as const;
