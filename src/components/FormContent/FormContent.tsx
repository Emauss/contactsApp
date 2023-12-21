import Input from "../Input";
import { StyleSheet, Text } from "react-native";
import type { FormContentProps } from "./types";

const FormContent = ({ handleChange, handleBlur, values, errors }: FormContentProps) => {
  return (
    <>
      <Input
        label="Imię i nazwisko"
        onTextChange={handleChange("contactName")}
        value={values.contactName}
        autoComplete="name"
        placeholder="Imię i nazwisko"
        onBlur={handleBlur("contactName")}
      />
      {errors.contactName && <Text style={styles.errorText}>{errors.contactName}</Text>}
      <Input
        label="Telefon"
        onTextChange={handleChange("phone")}
        value={values.phone}
        autoComplete="tel"
        placeholder="Wpisz nr telefonu"
        onBlur={handleBlur("phone")}
        keyboardType="numeric"
        inputMode="numeric"
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      <Input
        label="E-mail"
        onTextChange={handleChange("mail")}
        value={values.mail}
        autoComplete="email"
        placeholder="Dodaj e-mail"
        onBlur={handleBlur("mail")}
      />
      {errors.mail && <Text style={styles.errorText}>{errors.mail}</Text>}
      <Input
        label="Notatki"
        multiline
        inputClass={styles.textArea}
        onTextChange={handleChange("note")}
        value={values.note}
        placeholder="Notatki..."
        onBlur={handleBlur("note")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  errorText: { fontSize: 10, color: "red" },
});

export default FormContent;
