import ScreenTitle from "@/components/ScreenTitle";
import LayoutDefault from "@/layouts/LayoutDefault";
import type { ContactBox, RootStackParamList } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, TouchableHighlight, View } from "react-native";

const ContactDetails = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { contactName, phone, favourite } = route.params as ContactBox;

  return (
    <LayoutDefault>
      <>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => navigation.goBack()} style={styles.iconWrapper} underlayColor="#DDDDDD">
            <Ionicons name="chevron-back" size={26} color="#3388ff" />
          </TouchableHighlight>
          <ScreenTitle title={contactName} />
          <TouchableHighlight onPress={() => console.log("handleFavourite")} style={styles.iconWrapper} underlayColor="#DDDDDD">
            <Ionicons name={favourite ? "star" : "star-outline"} size={20} color="yellow" />
          </TouchableHighlight>
        </View>
        <View style={styles.avatarWrapper}>
          <Ionicons name="person-circle" size={150} color="gray" />
        </View>
      </>
    </LayoutDefault>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
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
});

export default ContactDetails;
