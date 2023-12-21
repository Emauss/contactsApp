import type { ContactBox } from "@/types";

export const compareFunc = (a: ContactBox, b: ContactBox) => {
  if (a.contactName < b.contactName) {
    return -1;
  }
  if (a.contactName > b.contactName) {
    return 1;
  }
  return 0;
};
