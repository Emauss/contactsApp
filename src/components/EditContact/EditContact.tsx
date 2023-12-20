import type { ContactBox } from "@/types";
import { useContext, useState } from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import { toggleEditButton } from "./utils";
import AppContext from "@/context";
import { useNavigation } from "@react-navigation/native";
import Input from "../Input";

const EditContact = ({ contactName, mail, phone, id, note }: ContactBox) => {
  const navigation = useNavigation();
  const { contacts, setContacts } = useContext(AppContext);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [phoneInput, setPhoneInput] = useState<string>(phone.toString());
  const [emailInput, setEmailInput] = useState<string>(mail || "");
  const [noteInput, setNoteInput] = useState<string>(note || "");

  const handleSaveData = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, phone: parseInt(phoneInput), mail: emailInput, note: noteInput } : contact
    );
    setContacts(updatedContacts);
    toggleEditButton(setEditMode);
    navigation.goBack();
  };

  const handleEditButton = (): void => {
    if (!editMode) {
      toggleEditButton(setEditMode);
      return;
    }

    Alert.alert(`Poczekaj chwilę!`, `Czy jesteś pewny że wprowadziłeś poprawne dane dla kontaktu ${contactName}?`, [
      { text: "Tak, pewnie", onPress: handleSaveData },
      { text: "Nie, poczekaj" },
    ]);
  };

  const handleRemoveItem = () => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
    navigation.goBack();
  };

  const handleConfirmation = () => {
    Alert.alert(
      `Jesteś pewny że chcesz usunąć kontakt ${contactName}?`,
      "Będzie to nieodwracalne działanie, ale zawsze będziesz mógł stworzyć go nowo.",
      [{ text: "Tak, usuń", onPress: () => handleRemoveItem() }, { text: "Nie, zostaw" }]
    );
  };

  return (
    <>
      <Pressable onPress={handleEditButton} style={({ pressed }) => styles(pressed).editButton}>
        <Text style={styles().editText}>{editMode ? "Zapisz" : "Edytuj"}</Text>
      </Pressable>
      {editMode && (
        <View>
          <Input label="Telefon" setValue={setPhoneInput} value={phoneInput} autoComplete="tel" placeholder="Wpisz nr telefonu" />
          <Input label="E-mail" setValue={setEmailInput} value={emailInput} autoComplete="email" placeholder="Wpisz e-mail" />
          <Input label="Notatki" multiline inputClass={styles().textArea} setValue={setNoteInput} value={noteInput} placeholder="Notatki..." />
          <Pressable onPress={handleConfirmation} style={({ pressed }) => [styles(pressed).editButton, styles().removeButton]}>
            <Text style={[styles().editText, styles().removeText]}>Usuń</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = (editButtonPressed?: boolean) =>
  StyleSheet.create({
    editButton: {
      backgroundColor: editButtonPressed ? "#DDD" : "#000",
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 10,
    },
    editText: {
      color: "#3388ff",
      fontSize: 20,
      textAlign: "center",
    },
    textArea: {
      height: 100,
      textAlignVertical: "top",
    },
    removeButton: {
      marginTop: 8,
      marginBottom: 10,
    },
    removeText: {
      color: "red",
    },
  });

export default EditContact;
