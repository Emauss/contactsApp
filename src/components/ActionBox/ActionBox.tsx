import { StyleSheet, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { ActionBoxProps } from "./types";

const ActionBox = ({ icon, title, onPress, isDisabled = false }: ActionBoxProps) => {
  return (
    <Pressable style={({ pressed }) => styles(pressed, isDisabled).actionBox} onPress={onPress} disabled={isDisabled}>
      <>
        <Ionicons name={icon} size={24} color="#3388ff" />
        <Text style={styles().actionBoxTitle}>{title}</Text>
      </>
    </Pressable>
  );
};

const styles = (pressed?: boolean, isDisabled?: boolean) =>
  StyleSheet.create({
    actionBox: {
      backgroundColor: pressed ? "#DDD" : "#000",
      padding: 8,
      alignItems: "center",
      borderRadius: 10,
      flex: 1,
      aspectratio: 1,
      flexGrow: 1,
      opacity: isDisabled ? 0.5 : 1,
    },
    actionBoxTitle: {
      fontSize: 12,
      color: "#3388ff",
      marginTop: 4,
    },
  });

export default ActionBox;
