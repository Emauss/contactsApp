import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { ListItemProps } from "./types";
import AppContext from "@/context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "@/types";

const ListItem = (props: ListItemProps) => {
  const { contactName, favourite, id } = props;
  const { contacts } = useContext(AppContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const css = styles({ isLast: contacts.length === id });

  return (
    <View style={css.container}>
      <TouchableOpacity style={css.contactCta} onPress={() => navigation.navigate("ContactDetails", { ...props })}>
        <Text style={css.contactName}>{contactName}</Text>
        {favourite && <Ionicons name="star" size={20} color="yellow" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    container: {
      paddingBottom: 8,
      marginBottom: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: props.isLast ? 0 : 0.5,
      borderBottomColor: "#545454",
    },
    contactCta: {
      flexGrow: 1,
      padding: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contactName: {
      color: "#fff",
      fontSize: 18,
    },
  });

export default ListItem;
