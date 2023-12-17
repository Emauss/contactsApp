import { StyleSheet, TouchableHighlight, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import type { RootStackParamList } from "@/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ScreenTitle from "../ScreenTitle";

const Heading = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.inivisibleItem}>
        <Ionicons name="add-outline" size={26} color="#3388ff" />
      </View>
      <ScreenTitle title="Lista konktaktów" />
      <TouchableHighlight onPress={() => navigation.navigate("ContactAdd")} style={styles.iconWrapper} underlayColor="#DDDDDD">
        <Ionicons name="add-outline" size={26} color="#3388ff" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  inivisibleItem: {
    opacity: 0,
    padding: 4,
    flexShrink: 1,
  },
  iconWrapper: {
    padding: 4,
    flexShrink: 1,
  },
});

export default Heading;
