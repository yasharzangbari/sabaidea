import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckBoxProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
> & {
  label?: string;
};
