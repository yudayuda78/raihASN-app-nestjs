import { Button } from "../ui/Button";
import { HeroContent } from "../composite/HeroContent";
import { BannerSell } from "../composite/BannerSell";
import { PriceList } from "../composite/PriceList";
import { FaqContent } from "../composite/FaqContent";
import { StrengthContent } from "../composite/StrengthContent";
import { AboutHomeContent } from "../composite/AboutHomeContent";
import { ProductContent } from "../composite/ProductContent";
import { ApplyContent } from "../composite/ApplyContent";

export function HomeContent() {
  return (
    <div>
      <HeroContent />
      <AboutHomeContent />
      <StrengthContent />

      <ProductContent />
      <BannerSell />
      <PriceList bgColor="bg-[#5c40c2]" />
      <FaqContent />
      <ApplyContent />
    </div>
  );
}
