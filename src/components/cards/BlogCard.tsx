import Link from "next/link";

interface BlogCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

export default function BlogCard({
  href,
  image,
  title,
  description,
}: BlogCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>

      <p className="mt-2 text-neutral-600 text-sm leading-6">{description}</p>
    </Link>
  );
}
