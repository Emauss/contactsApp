import React, { useState } from "react";

import AppContext from "./src/context/AppContext";
import { INITIAL_CONTACT_VALUE } from "./src/constants";
import { ContactList } from "@/types";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/pages/Home";
import ContactDetails from "@/pages/ContactDetails";
import ContactAdd from "@/pages/ContactAdd";

const Stack = createNativeStackNavigator();

const App = () => {
  const [contacts, setContacts] = useState<ContactList>(INITIAL_CONTACT_VALUE);

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ contacts, setContacts }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ContactAdd" component={ContactAdd} />
          <Stack.Screen name="ContactDetails" component={ContactDetails} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
