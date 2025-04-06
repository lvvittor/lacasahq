"use client";
import Image from "next/image";
import { PixelTrail } from "@/components/ui/pixel-trail";
import Typewriter from "@/components/ui/typewriter";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { cn } from "@/lib/utils";
// import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center gap-4 bg-black text-center text-pretty">
        <div className="absolute w-full h-full">
          <Image
            src="/hero_image.png"
            alt="San francisco bay area"
            className="w-full h-full object-cover absolute inset-0 opacity-70"
            fill
            priority
            quality={100}
          />
          <div className="absolute inset-0 after:content-[''] after:absolute after:inset-0 after:bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] after:opacity-10 after:animate-[animateGrain_8s_steps(10)_infinite]" />
        </div>

        <div className="absolute inset-0 z-1">
          <PixelTrail
            pixelSize={24}
            fadeDuration={500}
            pixelClassName="bg-white"
          />
        </div>

        {/* <div className="z-10">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100/70 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200/70 dark:border-white/5 dark:bg-neutral-900/70 dark:hover:bg-neutral-800/70"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ February House Update</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div> */}
        <div className="w-1/2 tracking-tight font-calendas text-white text-6xl opacity-75">
          <span>A home for exceptional</span>
          <br />
          <Typewriter
            text={[
              "international",
              "argentine",
              "american",
              "swedish",
              "polish",
              "paraguayan",
            ]}
            speed={100}
            className="italic"
            waitTime={3500}
            deleteSpeed={100}
            cursorChar={""}
          />
          <span> engineers.</span>
        </div>
      </div>

      <div className="absolute top-8 right-15">
        <div className="text-white text-xl font-calendas tracking-tight opacity-70">
          lacasahq.com
        </div>
      </div>

      <div className="absolute bottom-8 right-15">
        <div className="text-white tracking-tight text-right">
          <div className="mb-0 font-mono text-md opacity-60">CURRENT ART</div>
          <div className="font-calendas text-lg opacity-65">
            "A new home", by Lucas Vittor
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-15">
        <div className="text-white text-xl font-calendas tracking-tight opacity-70">
          La Casa
        </div>
      </div>
    </section>
  );
}
