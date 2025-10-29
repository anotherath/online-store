interface SectionWrapperProps {
  title: string;
  linkText?: string;
  linkHref?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  title,
  linkText,
  linkHref,
  children,
}: SectionWrapperProps) {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>

        {linkText && linkHref && (
          <a href={linkHref} className="text-sm text-neutral-800 font-light">
            {linkText}
          </a>
        )}
      </div>

      {children}
    </section>
  );
}
