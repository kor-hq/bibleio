import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../ui/ProductCard";
import { Button } from "@bibleio/design";

export default function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true });
  return (
    <div className="w-full" ref={emblaRef}>
      <div className="flex gap-24 w-fit">
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
        <ProductCard title="h" description="asd">
          <Button variant="primary">Button</Button>
        </ProductCard>
      </div>
    </div>
  );
}
