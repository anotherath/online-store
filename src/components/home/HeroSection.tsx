export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden bg-neutral-100 aspect-21/9">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/8441652/8441652-sd_960_506_25fps.mp4"
          poster="https://images.pexels.com/photos/6466466/pexels-photo-6466466.jpeg?auto=compress&cs=tinysrgb&w=1600"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/28 via-black/12 to-transparent flex items-center">
          <div className="container py-10 px-8 mx-auto">
            <div className="max-w-xl md:max-w-2xl">
              <p className="uppercase tracking-widest text-xs text-white/80 mb-3">
                Spring / Summer 24
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] text-white">
                Effortless silhouettes in monochrome
              </h1>
              <p className="mt-4 text-white/80 max-w-prose">
                Clean lines. Gentle textures. Pieces designed for movement and
                ease.
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                  href="/#featured"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
