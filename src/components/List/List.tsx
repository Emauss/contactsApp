import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AppContext from "@/context";
import ListItem from "../ListItem";

const List = () => {
  const { contacts } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {contacts.map((contact, i) => (
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
});

export default List;
