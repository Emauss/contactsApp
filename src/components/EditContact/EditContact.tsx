import type { ContactBox, FormValues, SubmitButton } from "@/types";
import { useContext, useState } from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import { toggleEditButton } from "./utils";
import AppContext from "@/context";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { USER_SCHEMA } from "@/constants";
import FormContent from "../FormContent";

const EditContact = ({ contactName, mail, phone, id, note }: ContactBox) => {
  const navigation = useNavigation();
  const { contacts, setContacts } = useContext(AppContext);
  const initialValues: FormValues = { contactName, phone, mail, note };
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleSaveData = (values: FormValues) => {
    const updatedContacts = contacts.map((contact) => (contact.id === id ? { ...contact, ...values } : contact));
    setContacts(updatedContacts);
    toggleEditButton(setEditMode);
    navigation.goBack();
  };

  const handleEditButton = (values: FormValues): void => {
    if (!editMode) {
      toggleEditButton(setEditMode);
      return;
    }

    Alert.alert(`Poczekaj chwilę!`, `Czy jesteś pewny że wprowadziłeś poprawne dane dla kontaktu ${contactName}?`, [
      { text: "Tak, pewnie", onPress: () => handleSaveData(values) },
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
    <Formik initialValues={initialValues} validationSchema={USER_SCHEMA} onSubmit={(values: FormValues) => handleEditButton(values)}>
      {(formikProps) => (
        <>
          <Pressable onPress={formikProps.handleSubmit as unknown as SubmitButton} style={({ pressed }) => styles(pressed).editButton}>
            <Text style={styles().editText}>{editMode ? "Zapisz" : "Edytuj"}</Text>
          </Pressable>
          {editMode && (
            <View>
              <FormContent {...formikProps} />
              <Pressable onPress={handleConfirmation} style={({ pressed }) => [styles(pressed).editButton, styles().removeButton]}>
                <Text style={[styles().editText, styles().removeText]}>Usuń</Text>
              </Pressable>
            </View>
          )}
        </>
      )}
    </Formik>
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
    removeButton: {
      marginTop: 8,
    },
    removeText: {
      color: "red",
    },
  });

export default EditContact;
