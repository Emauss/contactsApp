import { Formik } from "formik";
import * as Yup from "yup";
import LayoutDefault from "@/layouts/LayoutDefault";
import React, { useContext } from "react";
import { Text, TouchableHighlight, View, StyleSheet, Pressable, GestureResponderEvent, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { ContactBox, FormValues, RootStackParamList } from "@/types";
import type { StackNavigationProp } from "@react-navigation/stack";
import AppContext from "@/context";
import ScreenTitle from "@/components/ScreenTitle";
import Input from "@/components/Input";
import { USER_SCHEMA } from "@/constants";

const ContactAdd = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const initialValues: FormValues = { contactName: "", phone: "", mail: "", note: "" };
  const { contacts, setContacts } = useContext(AppContext);

  const handleAddContact = (values: FormValues) => {
    const newContactData: ContactBox = { id: contacts.length + 1, ...values, phone: Number(values.phone) };
    setContacts((prev) => [...prev, newContactData]);
    navigation.goBack();
  };

  return (
    <LayoutDefault>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}>
        <View style={styles().container}>
          <TouchableHighlight onPress={() => navigation.goBack()} style={styles().iconWrapper} underlayColor="#DDDDDD">
            <Ionicons contactName="chevron-back" size={26} color="#3388ff" />
          </TouchableHighlight>
          <ScreenTitle title="Dodaj kontakt" />
          <View style={styles().inivisibleItem}>
            <Ionicons contactName="add-outline" size={26} color="#3388ff" />
          </View>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={USER_SCHEMA}
          onSubmit={(values: FormValues) => handleAddContact(values)}
          // validator={userSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Input
                label="Imię i nazwisko"
                onTextChange={handleChange("contactName")}
                value={values.contactName}
                autoComplete="name"
                placeholder="Imię i nazwisko"
                onBlur={handleBlur("contactName")}
              />
              {errors.contactName && <Text style={styles().errorText}>{errors.contactName}</Text>}
              <Input
                label="Telefon"
                onTextChange={handleChange("phone")}
                value={values.phone.toString()}
                autoComplete="tel"
                placeholder="Wpisz nr telefonu"
                onBlur={handleBlur("phone")}
                keyboardType="numeric"
                inputMode="numeric"
              />
              {errors.phone && <Text style={styles().errorText}>{errors.phone}</Text>}
              <Input
                label="E-mail"
                onTextChange={handleChange("mail")}
                value={values.mail}
                autoComplete="email"
                placeholder="Dodaj e-mail"
                onBlur={handleBlur("mail")}
              />
              {errors.mail && <Text style={styles().errorText}>{errors.mail}</Text>}
              <Input
                label="Notatki"
                multiline
                inputClass={styles().textArea}
                onTextChange={handleChange("note")}
                value={values.note}
                placeholder="Notatki..."
                onBlur={handleBlur("note")}
              />
              <Pressable
                onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
                style={({ pressed }) => styles(pressed).submitButton}
              >
                <Text style={styles().submitText}>Dodaj</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </LayoutDefault>
  );
};

const styles = (pressed?: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 25,
    },
    iconWrapper: {
      padding: 4,
      flexShrink: 1,
    },
    inivisibleItem: {
      opacity: 0,
      padding: 4,
      flexShrink: 1,
    },
    submitButton: {
      backgroundColor: pressed ? "#DDD" : "#000",
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
      marginVertical: 20,
    },
    submitText: {
      color: "#3388ff",
      fontSize: 20,
      textAlign: "center",
    },
    textArea: {
      height: 100,
      textAlignVertical: "top",
    },
    errorText: { fontSize: 10, color: "red" },
  });

export default ContactAdd;
