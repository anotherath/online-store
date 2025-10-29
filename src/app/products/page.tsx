import ProductCard from "@/components/cards/ProductCard";
import PageWrapper from "@/components/commons/PageWrapper";

export default function Products() {
  return (
    <PageWrapper title="Products" titleCenter>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <ProductCard
          href="/product/ln-004"
          title="Tailored Wide Trousers"
          price="USD 129"
          imagePrimary="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          imageSecondary="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
    </PageWrapper>
  );
}
