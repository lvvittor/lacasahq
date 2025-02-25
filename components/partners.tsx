import Image from 'next/image'

export function Partners() {
  // TODO: replace links with images in the public folder
  // TODO: https://x.com/mejiasebas is also a partner?
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">
          Supported by our partners.
        </h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-5 w-fit"
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Andreessen_Horowitz_new_logo.svg"
            alt="Andreessen Horowitz Logo"
            height={20}
            width={80}
          />
          <Image
            className="h-5 w-fit invert"
            src="https://framerusercontent.com/images/izVZE6ficH5m2lJO9dbvUcE2c5A.svg"
            alt="Nevular Logo"
            height={20}
            width={80}
          />
          <Image
            className="h-15 w-fit invert"
            src="https://framerusercontent.com/images/YffD9J7GeFlsDEKDto2KjBr7U.svg"
            alt="Moth Fund Logo"
            height={20}
            width={80}
          />
        </div>
      </div>
    </section>
  );
}
