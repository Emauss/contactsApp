import type { LayoutProps } from "@/types";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default LayoutDefault;
