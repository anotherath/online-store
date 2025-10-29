export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text content */}
        <div>
          <h3 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight">
            Minimal. Intentional. Timeless.
          </h3>
          <p className="text-neutral-700 leading-7">
            We create elevated essentials for modern women. Each piece is
            thoughtfully crafted with premium fabrics, cut for movement, and
            designed to live effortlessly across seasons.
          </p>
          <p className="mt-4 text-neutral-700 leading-7">
            Built on a philosophy of less but better, we focus on silhouettes
            that flatter, details that matter, and quality that lasts.
          </p>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg bg-neutral-100">
          <img
            src="https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Studio"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
