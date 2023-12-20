import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "@/context";
import ListItem from "../ListItem";

const List = () => {
  const { contacts } = useContext(AppContext);

  if (!contacts.length) {
    return <Text style={styles.noContacts}>Nie masz żadnych kontaktów. Dodaj za pomocą ikony w prawym górnym rogu</Text>;
  }

  return (
    <View style={styles.container}>
      {contacts?.map((contact, i) => (
        <ListItem {...contact} index={i} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 10,
  },
  noContacts: {
    color: "#fff",
  },
});

export default List;
