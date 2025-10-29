interface LookbookCardProps {
  image: string;
  alt?: string;
  heightClass?: string; // linh hoạt chiều cao nếu cần
}

export default function LookbookCard({
  image,
  alt = "Lookbook",
  heightClass = "h-[520px]",
}: LookbookCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={alt}
        className={`${heightClass} w-full object-cover transition-transform duration-700 hover:scale-105`}
      />
    </div>
  );
}
