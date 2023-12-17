import { createContext } from "react";
import type { ContextValue } from "@/types";

const AppContext = createContext<ContextValue>(null);

export default AppContext;
