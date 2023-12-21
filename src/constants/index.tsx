import type { ContactList } from "@/types";
import * as Yup from "yup";

export const INITIAL_CONTACT_VALUE: ContactList = [
  { id: 1, contactName: "Andrzej Ważka", phone: "123123123", favourite: false },
  { id: 2, contactName: "Robert Fajny", phone: "124123123", favourite: true, note: "Ulubiony kolega do fify" },
  { id: 3, contactName: "Łucja Genialna", phone: "670545756", favourite: true },
  { id: 4, contactName: "Karol Poważny", phone: "697456234", favourite: false, mail: "test@wp.pl" },
  { id: 5, contactName: "Rektor wydziału", phone: "234745896", favourite: false, mail: "rektor@wp.pl", note: "Nie lubimy tego Pana :)" },
];

const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Handling form validation
export const USER_SCHEMA = Yup.object({
  contactName: Yup.string().required("Imię i nazwisko jest wymagane"),
  phone: Yup.string()
    .min(9, "Nr telefonu jest za krótki")
    .matches(PHONE_REGEX, "Nr telefonu nie jest poprawny")
    .required("Nr telefonu jest wymagany"),
  mail: Yup.string().email("Email nie jest poprawny"),
});
