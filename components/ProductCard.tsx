import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Product } from "@/lib/types";
import { AspectRatio } from "./ui/aspect-ratio";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <Card className="flex h-full flex-col justify-around">
        <CardHeader className="flex items-center justify-center p-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={urlForImage(product.images)}
              width={200}
              height={200}
              alt={product.name}
              loading="lazy"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <CardTitle className="line-clamp-2 max-w-[200px] text-pretty text-sm font-medium sm:text-base">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm">
            {product.category.name}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full p-2 pt-0">
          <p className="font-medium text-primary">₹ {product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
