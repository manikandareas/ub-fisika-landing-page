import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

export const isSidebarOpen = atom(false);

// export const useSidebarStore = useStore(isSidebarOpen)
