import { cn } from "@/lib/utils";
import { Instagram, Mail } from "lucide-react";
import { buttonVariants } from "../ui/button";
import React from "react";
import { IconBrandInstagram } from "@tabler/icons-react";

type WelcomingSectionProps = {};

const WelcomingSection: React.FC<WelcomingSectionProps> = () => {
  return (
    <article
      className="sm:p-4 z-10 space-y-4 flex flex-col justify-center items-center sm:items-start  "
      data-aos="fade-up-right"
    >
      <h1 className="font-bold md:text-7xl text-3xl text-center sm:text-left -rotate-1">
        <span className=" underline  underline-offset-2 decoration-yellow-500">
          Fisika Komputasi
        </span>
        <br />
        Universitas Brawijaya
      </h1>
      <p className="sm:w-2/4 w-[90%] md:text-sm  text-center truncate text-wrap sm:text-left text-xs text-muted-foreground">
        Selamat Datang di Web Fisika Komputasi! Fisika Komputasi, sebuah dunia
        penuh keajaiban di mana prinsip fisika bertemu kekuatan komputasi untuk
        memecahkan teka-teki sains terumit.
        <span className="hidden sm:block">
          Web ini dipersembahkan bagi para peminat fisika komputasi, membuka
          gerbang ilmu pengetahuan dan sumber daya berharga untuk mempelajari
          dan menerapkan bidang ini. Temukan tutorial, contoh aplikasi, berita
          terbaru, dan banyak lagi, yang siap mengantarkan Anda menjelajahi
          dunia fisika komputasi yang penuh potensi. Mari bersama-sama
          mengembangkan ilmu dan teknologi, demi masa depan yang cemerlang!
        </span>
      </p>
      <div className="flex items-center space-x-1.5 w-fit">
        <div className="flex space-x-1.5 items-center">
          <IconBrandInstagram size={20} className="" />
          <span className="text-xs text-muted-foreground">@manikandareas</span>
        </div>
        <a
          href="mailto:vitoandareas15@gmail"
          className="flex space-x-1.5 items-center "
        >
          <Mail size={20} />
          <span className="text-xs text-muted-foreground">
            vitoandareas15@gmail.com
          </span>
        </a>
      </div>
      <a
        href="/profile/sejarah"
        className={cn(
          buttonVariants({ size: "lg" }),
          "bg-yellow-500 hover:bg-yellow-600"
        )}
      >
        More about us
      </a>
    </article>
  );
};
export default WelcomingSection;
