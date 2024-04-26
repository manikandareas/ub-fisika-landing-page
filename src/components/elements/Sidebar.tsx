import { cn } from "@/lib/utils";
import { isSidebarOpen } from "@/store/SidebarStore";
import { useStore } from "@nanostores/react";
import { ChevronLeft } from "lucide-react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const $isSidebarOpen = useStore(isSidebarOpen);
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 w-2/3 z-50 h-screen bg-neutral-950 border-r transition-all ease-in-out",
        $isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex p-4 justify-end">
        <button onClick={() => isSidebarOpen.set(false)}>
          <ChevronLeft />
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
