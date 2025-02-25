import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/bridge.png"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="absolute bottom-16 left-8 max-w-2xl p-4 md:bottom-24 md:left-16">
          <h1 className="text-balance text-4xl font-bold text-white md:text-6xl">
            Bringing global talent to Silicon Valley.
          </h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            A community house for exceptional international students and recent graduates, 
            making the Silicon Valley dream accessible to talented engineers.
          </p>
        </div>
      </div>
    </section>
  );
}
