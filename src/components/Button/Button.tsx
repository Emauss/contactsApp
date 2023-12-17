import { StyleSheet, Text, View, Pressable } from "react-native";

const Button = ({ onClick }) => {
  return (
    <View style={styles().buttonContainer}>
      <Pressable style={({ pressed }) => styles({ pressed }).button} onPress={onClick}>
        <Text style={styles().buttonLabel}>Dodaj zadanie</Text>
      </Pressable>
    </View>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    buttonContainer: {
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 0,
      marginRight: 0,
    },
    button: {
      transform: [{ scale: props?.pressed ? 0.98 : 1 }],
      padding: 8,
      backgroundColor: "#b5b5b5",
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      height: 40,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    buttonLabel: {
      color: "#1663c0",
      fontSize: 16,
    },
  });

export default Button;
