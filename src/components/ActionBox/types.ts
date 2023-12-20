import { Ionicons } from "@expo/vector-icons";

export type ActionBoxProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
  isDisabled?: boolean;
};
