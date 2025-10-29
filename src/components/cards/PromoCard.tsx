import Link from "next/link";

interface PromoCardProps {
  href: string;
  image: string;
  label: string;
}

export default function PromoCard({ href, image, label }: PromoCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={label}
        className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-wide text-black backdrop-blur-sm">
          {label}
        </span>
      </div>
    </Link>
  );
}
