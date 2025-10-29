import LookbookCard from "../cards/LookbookCard";
import SectionWrapper from "../commons/SectionWrapper";

export default function LookbookSection() {
  return (
    <SectionWrapper title="Lookbook" linkText="Explore" linkHref="/">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LookbookCard image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600" />

        <LookbookCard image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600" />

        <LookbookCard image="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
    </SectionWrapper>
  );
}
