import { StyleSheet, View, Text } from "react-native";
import type { ScreenTitleProps } from "./types";

const ScreenTitle = ({ title }: ScreenTitleProps) => {
  return <Text style={styles.heading}>{title}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    marginBottom: 8,
    marginTop: 5,
    flexGrow: 1,
  },
});

export default ScreenTitle;
