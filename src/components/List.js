import { useContext } from "react";
import AppContext from "../context/AppContext";
import ListItem from "./ListItem";
import { View, StyleSheet } from "react-native";

const List = () => {
  const { listItems } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {listItems.map((label, i) => (
        <ListItem name={label} index={i} key={i} />
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
