import type { StyleProp, TextStyle, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  inputClass?: StyleProp<TextStyle>;
}
