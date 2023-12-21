import type { Dispatch } from "react";
import { GestureResponderEvent } from "react-native";

export type ContactBox = {
  id: number;
  contactName: string;
  phone: string;
  favourite?: boolean;
  mail?: string;
  note?: string;
};

export type ContactList = ContactBox[];

export type ContextValue = {
  contacts: ContactList;
  setContacts: Dispatch<React.SetStateAction<ContactList>>;
};

export type LayoutProps = {
  children?: JSX.Element;
};

export type RootStackParamList = {
  ContactDetails?: ContactBox;
  ContactAdd?: ContactBox;
  Home?: ContactBox;
};

export type FormValues = {
  contactName: string;
  phone: string;
  mail: string;
  note: string;
};

export type SubmitButton = (e: GestureResponderEvent) => void;
