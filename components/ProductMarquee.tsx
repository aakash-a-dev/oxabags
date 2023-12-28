import { getFeaturedProducts } from "@/sanity/lib/sanity.query";
import ProductCarouselMarquee from "./ProductsCarouselMarquee";

export default async function ProductMarquee() {
  const products = await getFeaturedProducts();
  return (
    <section className=" py-8">
      <ProductCarouselMarquee products={products} />
    </section>
  );
}
