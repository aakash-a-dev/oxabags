import ProductsMarquee from "./ProductsMarquee";

export default async function ProductsMarqueeWrapper() {
  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      slug: { current: "mechanical-keyboard" },
      images: "/products/1.png",
      size: "Full Size",
      fabric: "Plastic/Metal",
      color: "Black",
      weight: "1.2kg",
      price: 4999,
      description: "A high-quality mechanical keyboard with customizable RGB lighting.",
      features: "RGB Lighting, Cherry MX Switches, N-Key Rollover",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 100,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      slug: { current: "wireless-mouse" },
      images: "/products/2.png",
      size: "Medium",
      fabric: "Plastic",
      color: "Grey",
      weight: "150g",
      price: 1499,
      description: "Ergonomic wireless mouse with adjustable DPI settings.",
      features: "Adjustable DPI, Ergonomic Design, Long Battery Life",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 200,
    },
    {
      id: 3,
      name: "Gaming Headset",
      slug: { current: "gaming-headset" },
      images: "/products/3.png", 
      size: "One Size",
      fabric: "Plastic/Leather",
      color: "Red & Black",
      weight: "300g",
      price: 2999,
      description: "Immersive gaming headset with surround sound and noise-cancelling microphone.",
      features: "Surround Sound, Noise-Cancelling Mic, Comfortable Earcups",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 150,
    },
    {
      id: 4,
      name: "Laptop Cooling Pad",
      slug: { current: "laptop-cooling-pad" },
      images: "/products/4.png",
      size: "15-17 inch",
      fabric: "Metal/Plastic",
      color: "Black",
      weight: "700g",
      price: 999,
      description: "Portable laptop cooling pad with dual fans for efficient cooling.",
      features: "Dual Fans, Adjustable Height, USB Powered",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 80,
    },
    {
      id: 5,
      name: "USB Hub 3.0",
      slug: { current: "usb-hub-3-0" },
      images: "/products/5.png",
      size: "Compact",
      fabric: "Plastic",
      color: "White",
      weight: "100g",
      price: 699,
      description: "High-speed USB 3.0 hub with 4 ports for easy connectivity.",
      features: "4 USB Ports, USB 3.0, Compact Design",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 250,
    },
    {
      id: 6,
      name: "External Hard Drive 1TB",
      slug: { current: "external-hard-drive-1tb" },
      images: "/products/6.png",
      size: "1TB",
      fabric: "Plastic/Metal",
      color: "Black",
      weight: "250g",
      price: 4999,
      description: "Portable external hard drive with 1TB of storage and USB 3.0 support.",
      features: "1TB Storage, USB 3.0, Shock Resistant",
      showOnHomepage: true,
      category: { name: "Computer Accessories" },
      quantity: 120,
    },
  ];


  return (
    <section className="py-4 md:py-10">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Our Most Popular Products
      </h2>
      <ProductsMarquee products={products} />
    </section>
  );
}
