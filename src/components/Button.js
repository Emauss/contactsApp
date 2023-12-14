import { StyleSheet, Text, View, Pressable } from "react-native";

const Button = ({ onClick }) => (
  <View style={styles.buttonContainer}>
    <Pressable style={({ pressed }) => styles.button(pressed)} onPress={onClick}>
      <Text style={styles.buttonLabel}>Dodaj zadanie</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  button: (pressed) => ({
    transform: [{ scale: pressed ? 0.98 : 1 }],
    padding: 8,
    backgroundColor: "orange",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  }),
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
