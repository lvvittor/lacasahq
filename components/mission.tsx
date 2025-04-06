"use client";
import { useState } from "react";
import Image from "next/image";

export const Mission = () => {
  const [hoveredSticker, setHoveredSticker] = useState<{
    name: string;
    role: string;
    country: string;
    illustrationPath: string;
    rect?: DOMRect;
  } | null>(null);

  const memberStickers = [
    {
      name: "Iñaki Arango",
      role: "Founder of Recyco",
      country: "🇦🇷",
      width: 90,
      height: 90,
      style: {
        top: "12%",
        left: "12%",
        transform: "rotate(-5deg)",
      },
      illustrationPath: "/illustrations/inaki.png",
    },
    {
      name: "Gabriel Petersson",
      role: "Sora Engineer at OpenAI",
      country: "🇸🇪",
      width: 120,
      height: 120,
      style: {
        top: "20%",
        left: "13%",
        transform: "rotate(5deg)",
      },
      illustrationPath: "/illustrations/gabriel.png",
    },
    {
      name: "Emil Fagerholm",
      role: "Technical Member at Lovable",
      country: "🇸🇪",
      width: 90,
      height: 90,
      style: {
        top: "14%",
        right: "10%",
        transform: "rotate(-10deg)",
      },
      illustrationPath: "/illustrations/emil.png",
    },
    {
      name: "James Zhou",
      role: "Software Engineer at 11x",
      country: "🇺🇸",
      width: 80,
      height: 80,
      style: {
        top: "52%",
        right: "11%",
        transform: "rotate(5deg)",
      },
      illustrationPath: "/illustrations/james.png",
    },
    {
      name: "Ernesto Nam",
      role: "Software Engineer at 11x",
      country: "🇵🇾",
      width: 100,
      height: 100,
      style: {
        top: "62%",
        right: "12%",
        transform: "rotate(-5deg)",
      },
      illustrationPath: "/illustrations/ernesto-nam.png",
    },
    {
      name: "Rikard Radovac",
      role: "ML Engineer at Labelf AI",
      country: "🇸🇪",
      width: 90,
      height: 90,
      style: {
        top: "22%",
        right: "12%",
        transform: "rotate(-5deg)",
      },
      illustrationPath: "/illustrations/rikard.png",
    },
    {
      name: "Kacper Kielak",
      role: "Researcher at Magic.dev",
      country: "🇵🇱",
      width: 90,
      height: 90,
      style: {
        top: "7%",
        left: "43%",
        transform: "rotate(-10deg)",
      },
      illustrationPath: "/illustrations/kacper.png",
    },
    {
      name: "Ayush Noori",
      role: "Researcher at Zitnik Lab, HMS",
      country: "🇺🇸",
      width: 110,
      height: 110,
      style: {
        top: "8%",
        left: "45%",
      },
      illustrationPath: "/illustrations/ayush-noori.png",
    },
    {
      name: "Matheus Mendes",
      role: "Software Eng at Midjourney",
      country: "🇸🇪",
      width: 100,
      height: 100,
      style: {
        top: "55%",
        left: "12%",
      },
      illustrationPath: "/illustrations/matheus.png",
    },
    {
      name: "Lucas Vittor",
      role: "Founding Eng at Mutt Data",
      country: "🇦🇷",
      width: 120,
      height: 120,
      style: {
        top: "65%",
        left: "10%",
        transform: "rotate(-5deg)",
      },
      illustrationPath: "/illustrations/lucas.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-32">
      {/* Stickers Container */}
      <div className="absolute inset-0">
        {memberStickers.map((sticker, index) => (
          <div 
            key={index}
            className="absolute cursor-pointer transition-transform hover:scale-110"
            style={sticker.style}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setHoveredSticker({ 
                name: sticker.name,
                role: sticker.role,
                country: sticker.country,
                illustrationPath: sticker.illustrationPath,
                rect
              });
            }}
            onMouseLeave={() => setHoveredSticker(null)}
          >
            <Image
              src={sticker.illustrationPath}
              alt={sticker.name}
              width={sticker.width}
              height={sticker.height}
            />
          </div>
        ))}
      </div>

      {/* Tooltip with Member Data */}
      {hoveredSticker && hoveredSticker.rect && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: hoveredSticker.rect.left + (hoveredSticker.rect.width / 2),
            top: hoveredSticker.rect.bottom + 10,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-xl text-white max-w-[220px]">
            <div className="flex items-center gap-2 mb-1">
              <div>
                <p className="font-medium text-sm">
                  {hoveredSticker.name} <span>{hoveredSticker.country}</span>
                </p>
                <p className="text-xs text-zinc-300">{hoveredSticker.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-5xl space-y-0 px-6 md:space-y-8">
        <h2 className="pt-36 text-4xl font-medium text-center font-calendas leading-tight max-w-lg mx-auto">
          We look <span className="italic font-serif">for</span> ambitious,
          young, international talent to live with us for a month.
        </h2>
        <div className="space-y-0 max-w-3xl mx-auto">
          <p className="text-sm text-center">
            La Casa is a nomad house where people like you can make stuff and
            meet our guests IRL. We focus on extreme talent density, and in
            return, you can live rent-free.
          </p>
        </div>
      </div>
    </section>
  );
};
