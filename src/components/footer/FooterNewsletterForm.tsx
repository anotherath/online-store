export default function FooterNewsletterForm() {
  return (
    <form className="flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-md border px-4 py-5 border-neutral-300
                   focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white
                   hover:bg-black/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
