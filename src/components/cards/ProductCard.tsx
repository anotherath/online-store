import Link from "next/link";

interface ProductCardProps {
  href: string;
  title: string;
  price: string;
  imagePrimary: string;
  imageSecondary?: string;
}

export default function ProductCard({
  href,
  title,
  price,
  imagePrimary,
  imageSecondary,
}: ProductCardProps) {
  return (
    <div className="w-full">
      <Link href={href} className="block">
        <div className="group relative flex flex-col overflow-hidden transition-all bg-white">
          {/* Image block */}
          <div className="relative overflow-hidden bg-neutral-100 aspect-3/4">
            <img
              src={imagePrimary}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {imageSecondary && (
              <img
                src={imageSecondary}
                alt={`${title} secondary`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>

          {/* Info */}
          <div className="p-4 flex-1 flex flex-col items-center text-center">
            <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
            <div className="mt-2 text-sm font-semibold text-neutral-900">
              {price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
