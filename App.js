import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, SafeAreaView, Text, ScrollView, Alert } from "react-native";
import Button from "./src/components/Button";
import List from "./src/components/List";
import AppContext from "./src/context/AppContext";
import { INITIAL_LIST_VALUE } from "./src/constants";

const App = () => {
  const [list, setList] = useState(INITIAL_LIST_VALUE);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (!inputValue) {
      alert("Uzupełnij input");
      return;
    }

    if (list.length > 6) {
      Alert.alert(`Nie pędź tak szybko!`, "zastanów się czy dasz radę tyle rzeczy dzisiaj zrobić.", [
        { text: "Pewnie że dam, do boju!" },
        { text: "Dobra, to już był ostatni." },
      ]);
    }

    setInputValue("");
    setList((prev) => [...prev, inputValue]);
  };

  return (
    <AppContext.Provider value={{ listItems: list, setList }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>List zadań na dziś</Text>
          <View style={styles.header}>
            <TextInput style={styles.input} value={inputValue} onChangeText={(val) => setInputValue(val)} placeholder="Wpisz zadanie" />
            <Button onClick={() => handleAddItem()} />
          </View>
          <List />
        </ScrollView>
        <StatusBar animated barStyle="dark-content" backgroundColor="#fff" style="auto" />
      </SafeAreaView>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F8782",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10,
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
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 15,
    marginTop: 5,
  },
  header: {
    display: "flex",
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default App;
