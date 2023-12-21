import { Formik } from "formik";
import LayoutDefault from "@/layouts/LayoutDefault";
import React, { useContext } from "react";
import { Text, TouchableHighlight, View, StyleSheet, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { ContactBox, FormValues, RootStackParamList, SubmitButton } from "@/types";
import type { StackNavigationProp } from "@react-navigation/stack";
import AppContext from "@/context";
import ScreenTitle from "@/components/ScreenTitle";
import { USER_SCHEMA } from "@/constants";
import FormContent from "@/components/FormContent";

const ContactAdd = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const initialValues: FormValues = { contactName: "", phone: "", mail: "", note: "" };
  const { contacts, setContacts } = useContext(AppContext);

  const handleAddContact = (values: FormValues) => {
    const newContactData: ContactBox = { id: contacts.length + 1, ...values };
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
        <Formik initialValues={initialValues} validationSchema={USER_SCHEMA} onSubmit={(values: FormValues) => handleAddContact(values)}>
          {(formikProps) => (
            <>
              <FormContent {...formikProps} />
              <Pressable onPress={formikProps.handleSubmit as unknown as SubmitButton} style={({ pressed }) => styles(pressed).submitButton}>
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
  });

export default ContactAdd;
