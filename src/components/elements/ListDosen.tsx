import { Mail } from "lucide-react";
import AvatarUrl from "public/avatar.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PaginationSection from "./PaginationSection";
type ListDosenProps = {};

const ListDosen: React.FC<ListDosenProps> = () => {
  return (
    <Card className="flex items-center px-4">
      {/* <Avatar className="size-28">
        <AvatarImage src={AvatarUrl.src} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <img
        src={AvatarUrl.src}
        alt={"Ribka"}
        className={"size-32 rounded-full object-cover"}
      />

      <div>
        <CardHeader>
          <CardTitle>Ribka Rusman Zendrato</CardTitle>
          <CardDescription>
            Departemen Teknik Informatika - Program Studi Teknik Informatika
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mining Repositori Kode, Pengujian Perangkat lunak</p>
        </CardContent>
        <CardFooter className="space-x-1.5 text-muted-foreground">
          <Mail /> <span className="text-xs">pNpZn@example.com</span>
        </CardFooter>
      </div>
    </Card>
  );
};
export default ListDosen;

export const ListsDosen: React.FC<ListDosenProps> = () => {
  return (
    <div className="space-y-4">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <ListDosen key={idx} />
        ))}
      <PaginationSection />
    </div>
  );
};
