export const toggleEditButton = (set: (value: React.SetStateAction<boolean>) => void) => {
  set((prev) => !prev);
};
