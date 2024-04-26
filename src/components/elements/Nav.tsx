import { ArrowRight, ChevronRight, Sidebar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavigationBarMenu } from "./NavigationMenu";
import { useStore } from "@nanostores/react";
import { isSidebarOpen } from "@/store/SidebarStore";
import { ModeToggle } from "./ModeToggle";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <>
      <header className="hidden lg:flex justify-between border-b px-4 py-2 z-50 items-center">
        <a href="/">
          <Avatar title="Fisika Komputasi">
            <AvatarImage alt="FK" src="/logo.png" />
            <AvatarFallback>FK</AvatarFallback>
          </Avatar>
        </a>
        <NavigationBarMenu />
        <ModeToggle />
      </header>
      <header className="lg:hidden py-2 bg-background flex justify-center items-center space-x-2 relative">
        <ChevronRight
          onClick={() => isSidebarOpen.set(true)}
          className="absolute top-1/2 -translate-y-1/2 left-2 text-stone-500"
        />
        <a href="/">
          <Avatar title="Fisika Komputasi">
            <AvatarImage src="/logo.png" />
            <AvatarFallback>Fisika Komputasi</AvatarFallback>
          </Avatar>
        </a>
        <h1 className="font-semibold">Fisika Komputasi</h1>
      </header>
    </>
  );
};
export default Nav;
