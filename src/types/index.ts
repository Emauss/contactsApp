import type { Dispatch } from "react";

export type ContactBox = {
  contactName: string;
  phone: number;
  favourite?: boolean;
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
