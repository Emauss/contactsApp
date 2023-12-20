import ActionBox from "@/components/ActionBox";
import EditContact from "@/components/EditContact";
import ScreenTitle from "@/components/ScreenTitle";
import AppContext from "@/context";
import LayoutDefault from "@/layouts/LayoutDefault";
import type { ContactBox, ContactList, RootStackParamList } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useContext, useState } from "react";
import { StyleSheet, TouchableHighlight, View, Linking, KeyboardAvoidingView, Platform } from "react-native";

const ContactDetails = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { contactName, phone, favourite, id, mail } = route.params as ContactBox;
  const [isFavourite, setIsFavourite] = useState<boolean>(favourite);
  const { setContacts } = useContext(AppContext);

  const getPreparedContacts = (list: ContactList) => {
    return list.map((contact) => (contact.id === id ? { ...contact, favourite: !contact.favourite } : contact));
  };

  const handleFavourite = () => {
    setIsFavourite((prev) => !prev);
    setContacts(getPreparedContacts);
  };

  return (
    <LayoutDefault>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => navigation.goBack()} style={styles.iconWrapper} underlayColor="#DDDDDD">
            <Ionicons name="chevron-back" size={26} color="#3388ff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={handleFavourite} style={styles.iconWrapper} underlayColor="#DDDDDD">
            <Ionicons name={isFavourite ? "star" : "star-outline"} size={20} color="yellow" />
          </TouchableHighlight>
        </View>
        <View style={styles.avatarWrapper}>
          <Ionicons name="person-circle" size={160} color="gray" />
        </View>
        <ScreenTitle title={contactName} />
        <View style={styles.actions}>
          <ActionBox title="Wiadomość" icon="chatbubble" onPress={() => Linking.openURL(`sms:${phone}`)} key={`${phone}-sms`} />
          <ActionBox title="Zadzwoń" icon="call" onPress={() => Linking.openURL(`tel:${phone}`)} key={`${phone}-call`} />
          <ActionBox title="Email" icon="mail" isDisabled={!mail} onPress={() => Linking.openURL(`mailto:${mail}`)} />
          <ActionBox title="Wideo" icon="videocam" isDisabled />
        </View>
        <EditContact {...(route.params as ContactBox)} />
      </KeyboardAvoidingView>
    </LayoutDefault>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconWrapper: {
    padding: 4,
    flexShrink: 1,
  },
  avatarWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  actions: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
});

export default ContactDetails;
