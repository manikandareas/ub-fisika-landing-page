import { cn } from "@/lib/utils";
import { isSidebarOpen } from "@/store/SidebarStore";
import { useStore } from "@nanostores/react";
import { Sidebar as SidebarFlowBite } from "flowbite-react";
import {
  ChevronLeft,
  ContactRound,
  FolderArchive,
  Home,
  Rss,
  Users2,
} from "lucide-react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const $isSidebarOpen = useStore(isSidebarOpen);
  return (
    <SidebarFlowBite
      className={cn(
        "fixed top-0 left-0 h-screen z-20 transition-all ease-in-out  -translate-x-full",
        {
          "translate-x-0": $isSidebarOpen,
        }
      )}
      aria-label="Sidebar with multi-level dropdown example"
    >
      <div className="flex py-1 justify-between mb-4 items-center">
        <div className="flex items-center gap-1.5">
          <img alt="Avatar" src="/logo.png" width={30} height={30} />
          <h1 className="font-bold text-lg">Fisika Komputasi</h1>
        </div>
        <button onClick={() => isSidebarOpen.set(!$isSidebarOpen)}>
          <ChevronLeft size={20} />
        </button>
      </div>
      <SidebarFlowBite.Items className="">
        <SidebarFlowBite.ItemGroup>
          <SidebarFlowBite.Item href="/" icon={Home}>
            Home
          </SidebarFlowBite.Item>
          <SidebarFlowBite.Collapse icon={Users2} label="Profile">
            <SidebarFlowBite.Item href="/profile/sejarah">
              Sejarah
            </SidebarFlowBite.Item>
            <SidebarFlowBite.Item href="/profile/visi-misi-dan-tujuan">
              Visi Misi & Tujuan
            </SidebarFlowBite.Item>
            <SidebarFlowBite.Item href="/profile/dosen">
              Dosen
            </SidebarFlowBite.Item>
            <SidebarFlowBite.Item href="/profile/daftar-fasilitas">
              Fasilitas
            </SidebarFlowBite.Item>
          </SidebarFlowBite.Collapse>
          <SidebarFlowBite.Item href="/arsip" icon={FolderArchive}>
            Arsip
          </SidebarFlowBite.Item>
          <SidebarFlowBite.Item href="/news" icon={Rss}>
            News
          </SidebarFlowBite.Item>
          <SidebarFlowBite.Item href="/contacts" icon={ContactRound}>
            Contacts
          </SidebarFlowBite.Item>
        </SidebarFlowBite.ItemGroup>
      </SidebarFlowBite.Items>
    </SidebarFlowBite>
  );
};
export default Sidebar;

// "use client";

// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

// export function Component() {
//   return (
//     <Sidebar aria-label="Sidebar with multi-level dropdown example">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#" icon={HiChartPie}>
//             Dashboard
//           </Sidebar.Item>
//           <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
//             <Sidebar.Item href="#">Products</Sidebar.Item>
//             <Sidebar.Item href="#">Sales</Sidebar.Item>
//             <Sidebar.Item href="#">Refunds</Sidebar.Item>
//             <Sidebar.Item href="#">Shipping</Sidebar.Item>
//           </Sidebar.Collapse>
//           <Sidebar.Item href="#" icon={HiInbox}>
//             Inbox
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiShoppingBag}>
//             Products
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiArrowSmRight}>
//             Sign In
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiTable}>
//             Sign Up
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// }
