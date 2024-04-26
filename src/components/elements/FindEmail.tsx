import { Search } from "lucide-react";
import { Input } from "../ui/input";

type FindEmailProps = {};

const FindEmail: React.FC<FindEmailProps> = () => {
  return (
    <div className="lg:w-1/4 relative group mb-2">
      <Input className="" placeholder="Find someone..." />
      <Search
        size={18}
        className="absolute  text-muted-foreground right-3 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};
export default FindEmail;
