import PromoCard from "../cards/PromoCard";
import SectionWrapper from "../commons/SectionWrapper";

const featuredItems = [
  {
    label: "New Arrivals",
    image:
      "https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg?auto=compress&cs=tinysrgb&w=1600",
    href: "/new",
  },
  {
    label: "Best Sellers",
    image:
      "https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600",
    href: "/best-sellers",
  },
  {
    label: "Sale",
    image:
      "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    href: "/sale",
  },
];

export default function FeaturedSection() {
  return (
    <SectionWrapper title="Featured" linkText="View all" linkHref="/products">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <PromoCard key={item.label} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
