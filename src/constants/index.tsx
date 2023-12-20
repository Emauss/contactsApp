import type { ContactList } from "@/types";

export const INITIAL_CONTACT_VALUE: ContactList = [
  { id: 1, contactName: "Andrzej Ważka", phone: 123123123, favourite: false },
  { id: 2, contactName: "Robert Fajny", phone: 124123123, favourite: true, note: "Ulubiony kolega do fify" },
  { id: 3, contactName: "Łucja Genialna", phone: 670545756, favourite: true },
  { id: 4, contactName: "Karol Poważny", phone: 697456234, favourite: false, mail: "test@wp.pl" },
  { id: 5, contactName: "Rektor wydziału", phone: 234745896, favourite: false, mail: "rektor@wp.pl", note: "Nie lubimy tego Pana :)" },
];
