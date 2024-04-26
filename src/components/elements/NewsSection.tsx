import { items } from "@/constants/bentoGrid";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import PaginationSection from "./PaginationSection";

type NewsSectionProps = {};

const NewsSection: React.FC<NewsSectionProps> = () => {
  return (
    <div className="space-y-4">
      <BentoGrid className=" mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <PaginationSection />
    </div>
  );
};
export default NewsSection;
