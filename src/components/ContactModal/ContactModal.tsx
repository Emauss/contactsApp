import AppContext from "@/context";
import { useContext, useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Alert, Modal } from "react-native";
import Button from "../Button";

export const ContactModal = () => {
  const { contacts, setContacts } = useContext(AppContext);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    if (!inputValue) {
      alert("Uzupełnij input");
      return;
    }

    if (contacts.length > 10) {
      Alert.alert(`Nie pędź tak szybko!`, "na pewno masz aż tyle kontaktów? :)", [
        { text: "Pewnie że mam, dorzucamy!" },
        { text: "Dobra, to już był ostatni." },
      ]);
    }

    setInputValue("");
    // setContacts((prev) => [...prev, inputValue]);
  };

  return (
    <Modal visible>
      <SafeAreaView style={styles.header}>
        <TextInput style={styles.input} value={inputValue} onChangeText={(val) => setInputValue(val)} placeholder="Wpisz zadanie" />
        <Button onClick={() => handleAddItem()} />
      </SafeAreaView>
    </Modal>
  );
};

export default ContactModal;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 5,
    flexGrow: 1,
    height: 40,
    backgroundColor: "#fff",
  },
});
