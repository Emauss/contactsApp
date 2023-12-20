import { View, TextInput, Text, StyleSheet } from "react-native";
import type { InputProps } from "./types";

const Input = ({ label, value, setValue, onTextChange, inputClass, ...props }: InputProps): JSX.Element => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, inputClass]}
        value={value}
        onChangeText={onTextChange ? (val) => onTextChange(val) : (val) => setValue(val)}
        autoComplete="off"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 8,
  },
  input: {
    borderRightWidth: 0,
    borderRadius: 10,
    padding: 5,
    flexGrow: 1,
    height: 40,
    backgroundColor: "#fff",
  },
  label: {
    marginBottom: 4,
    color: "#3388ff",
  },
});

export default Input;
