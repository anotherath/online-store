import BlogCard from "@/components/cards/BlogCard";
import PageWrapper from "@/components/commons/PageWrapper";

export default function Blog() {
  return (
    <PageWrapper title="Blog" titleCenter>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogCard
          href="/page/blog"
          title="Monochrome done right"
          description="Styling tips for subtle contrasts and clean lines."
          image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
    </PageWrapper>
  );
}
