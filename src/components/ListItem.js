import React, { useContext } from "react";
import { TouchableHighlight, StyleSheet, View, Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppContext from "../context/AppContext";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListItem = ({ name, index }) => {
  const { listItems, setList } = useContext(AppContext);

  const handleRemoveItem = () => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirmation = () => {
    Alert.alert(`Jesteś pewny że chcesz usunąć element ${name}?`, "Będzie to nieodwracalne działanie, ale zawsze będziesz mógł stworzyć go nowo.", [
      { text: "Tak, usuń", onPress: () => handleRemoveItem() },
      { text: "Nie, zostaw" },
    ]);
  };

  return (
    <View style={styles.container(listItems.length - 1 === index)}>
      <BouncyCheckbox
        size={25}
        fillColor="orange"
        unfillColor="#fff"
        text={name}
        textStyle={styles.label}
        innerIconStyle={{ borderWidth: 2 }}
        style={styles.checkboxContainer}
      />
      <TouchableHighlight onPress={() => handleConfirmation()} style={styles.iconWrapper} underlayColor="#DDDDDD">
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (isLast) => ({
    paddingBottom: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: isLast ? 0 : 1,
    borderBottomColor: "#eee",
  }),
  checkboxContainer: {
    flexGrow: 1,
  },
  label: {
    color: "#000",
  },
  iconWrapper: {
    padding: 4,
  },
});

export default ListItem;
