interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  titleCenter?: boolean;
}

export default function PageWrapper({
  title,
  children,
  className = "",
  id,
  titleCenter = false,
}: PageWrapperProps) {
  return (
    <section
      id={id}
      className={`container mx-auto px-8 py-14 md:py-20 ${className}`}
    >
      {title && (
        <div className={`mb-8 ${titleCenter ? "text-center" : ""}`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
        </div>
      )}

      {children}
    </section>
  );
}
