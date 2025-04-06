"use client";

import Image from "next/image";
import { useState } from "react";
import goldenBridgeImage from "@/public/illustrations/golden-bridge.png";

export function Guests() {
  const [hoveredGuest, setHoveredGuest] = useState<{
    name: string;
    role: string;
    rect?: DOMRect;
  } | null>(null);

  const guestStickers = [
    //   {
    //     name: 'Sarah Tavel',
    //     role: 'Partner at Benchmark',
    //   },
    // {
    //   name: "Finn Murphy",
    //   role: "Nebular VC",
    //   width: 100,
    //   height: 100,
    //   style: {
    //     top: "15%",
    //     left: "10%",
    //     transform: "rotate(-5deg)",
    //   },
    //   illustrationPath: "/illustrations/guests/finn-murphy.png",
    // },
    {
      name: "Jeffrey Wang",
      role: "Researcher at OpenAI",
      width: 120,
      height: 120,
      style: {
        top: "21%",
        left: "26%",
        transform: "rotate(10deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/jeffrey-wang.png",
    },
    {
      name: "Kevin Zhang",
      role: "Partner at Bain Capital",
      width: 100,
      height: 100,
      style: {
        top: "40%",
        right: "5%",
        transform: "rotate(0deg) scaleX(-1)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/kevin-zhang.png",
    },
    {
      name: "Slater Stich",
      role: "Partner at Bain Capital",
      width: 100,
      height: 100,
      style: {
        top: "32%",
        left: "65%",
        transform: "rotate(2deg)",
        opacity: "95%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/slater-stich.png",
    },
    {
      name: "Gabriel Guimaraes",
      role: "Early Engineer at Brex",
      width: 100,
      height: 100,
      style: {
        top: "22%",
        left: "67%",
        transform: "rotate(4deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/gabriel-guimaraes.png",
    },
    {
      name: "Jonathan Lei",
      role: "On-Demand at Voltage Park",
      width: 100,
      height: 100,
      style: {
        top: "19%",
        left: "80%",
        transform: "rotate(-1deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/jonathan-lei.png",
    },
    {
      name: "Jimmy Yun",
      role: "Principal at 8VC",
      width: 130,
      height: 130,
      style: {
        top: "37%",
        right: "8%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "3",
      },
      illustrationPath: "/illustrations/guests/jimmy-yun.png",
    },
    {
      name: "Vivek Gopalan",
      role: "Investment Team at 8VC",
      width: 100,
      height: 100,
      style: {
        top: "5%",
        right: "7%",
        transform: "rotate(6deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/vivek-gopalan.png",
    },
    {
      name: "Cory Levy",
      role: "Founder of Z Fellows",
      width: 100,
      height: 100,
      style: {
        top: "38%",
        right: "27%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/cory-levy.png",
    },
    {
      name: "Courtney Hudson-Paz",
      role: "Founder of Time Initiative",
      width: 100,
      height: 100,
      style: {
        top: "5%",
        right: "45%",
        transform: "rotate(5deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/courtney-hudson-paz.png",
    },
    {
      name: "Rohan Pandey",
      role: "Researcher at OpenAI",
      width: 210,
      height: 210,
      style: {
        top: "30%",
        left: "1%",
        transform: "rotate(-15deg)",
        opacity: "95%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/rohan-pandey.png",
    },
    {
      name: "Brom Rector",
      role: "Partner at Focalpoint",
      width: 100,
      height: 100,
      style: {
        top: "34%",
        left: "29.75%",
        transform: "rotate(-5deg) scaleX(-1)",
        opacity: "100%",
        zIndex: "5",
      },
      illustrationPath: "/illustrations/guests/brom-rector.png",
    },
    {
      name: "Samantha Tabone",
      role: "Partner at Focalpoint",
      width: 100,
      height: 100,
      style: {
        top: "42%",
        left: "88%",
        transform: "rotate(-6deg)",
        opacity: "100%",
        zIndex: "3",
      },
      illustrationPath: "/illustrations/guests/samantha-tabone.png",
    },
    {
      name: "Joy Liu",
      role: "Researcher at Berkeley AI",
      width: 100,
      height: 100,
      style: {
        top: "25%",
        right: "7%",
        transform: "rotate(4deg)",
        opacity: "95%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/joy-liu.png",
    },
    {
      name: "Sonith Sunku",
      role: "Member of Z Fellows",
      width: 100,
      height: 100,
      style: {
        top: "15%",
        left: "30%",
        transform: "rotate(-5deg) scaleX(-1)",
        opacity: "95%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/sonith-sunku.png",
    },
    {
      name: "Ben Levy",
      role: "Partner at Blueyard Capital",
      width: 100,
      height: 100,
      style: {
        top: "40%",
        right: "32%",
        transform: "rotate(0deg) scaleX(-1)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/ben-levy.png",
    },
    {
      name: "Owen Queen",
      role: "PhD in CS at Stanford",
      width: 100,
      height: 100,
      style: {
        top: "43%",
        right: "2.25%",
        transform: "rotate(-1.5deg)",
        opacity: "100%",
        zIndex: "3",
      },
      illustrationPath: "/illustrations/guests/owen-queen.png",
    },
    {
      name: "Charles Frye",
      role: "Dev Rel at Modal",
      width: 90,
      height: 90,
      style: {
        top: "33%",
        right: "4%",
        transform: "rotate(-7deg) ",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/charles-frye.png",
    },
    {
      name: "Archika Dogra",
      role: "Product at Databricks",
      width: 90,
      height: 90,
      style: {
        top: "28%",
        left: "33%",
        transform: "rotate(3deg)",
        opacity: "95%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/archika-dogra.png",
    },
        {
      name: "Nmachi Jidenma",
      role: "Investment Team at General Catalyst",
      width: 100,
      height: 100,
      style: {
        top: "35%",
        right: "13%",
        transform: "rotate(0deg)",
        opacity: "95%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/nmachi-jidenma.png",
    },
    {
      name: "Pranav Ramesh",
      role: "Growth Engineer at Ramp",
      width: 100,
      height: 100,
      style: {
        top: "24%",
        left: "29%",
        transform: "rotate(4deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/pranav-ramesh.png",
    },
    {
      name: "Vincent Po",
      role: "Head of Scholars at Neo",
      width: 100,
      height: 100,
      style: {
        top: "18%",
        left: "34%",
        transform: "rotate(15deg) scaleX(-1)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/vincent-po.png",
    },
    {
      name: "Jon Barron",
      role: "Researcher at DeepMind",
      width: 85,
      height: 85,
      style: {
        top: "36.75%",
        left: "21%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/jon-barron.png",
    },
    {
      name: "Menelaos Mazarakis",
      role: "Founder of Anon Platform",
      width: 100,
      height: 100,
      style: {
        top: "31.75%",
        right: "0%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/menelaos-mazarakis.png",
    },
    {
      name: "Gadi Borovich",
      role: "Founder of Antigravity Capital",
      width: 100,
      height: 100,
      style: {
        top: "36%",
        right: "17%",
        transform: "rotate(-3deg)",
        opacity: "95%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/gadi-borovich.png",
    },
    {
      name: "Jaren Glover",
      role: "Early Engineer at Robinhood",
      width: 100,
      height: 100,
      style: {
        top: "12%",
        left: "88%",
        transform: "rotate(-6deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/jaren-glover.png",
    },
    {
      name: "Emanuel Adamiak",
      role: "Engineer at Klyra Protocol",
      width: 100,
      height: 100,
      style: {
        top: "11%",
        left: "9%",
        transform: "rotate(10deg) scaleX(-1)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/emanuel-adamiak.png",
    },
    {
      name: "Koren Gilbai",
      role: "Associate at Founders Fund",
      width: 120,
      height: 120,
      style: {
        top: "24%",
        right: "31%",
        transform: "rotate(0deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/koren-gilbai.png",
    },
    {
      name: "CC Gong",
      role: "Principal at Menlo Ventures",
      width: 100,
      height: 100,
      style: {
        top: "33%",
        right: "34%",
        transform: "rotate(-5deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/cc-gong.png",
    },
    {
      name: "Anant Pai",
      role: "Investment Team at General Catalyst",
      width: 100,
      height: 100,
      style: {
        top: "30%",
        left: "40%",
        transform: "rotate(-3deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/anant-pai.png",
    },
    {
      name: "Jack Soslow",
      role: "Partner at Andressen Horowitz",
      width: 100,
      height: 100,
      style: {
        top: "31%",
        left: "45%",
        transform: "rotate(-4deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/jack-soslow.png",
    },
    {
      name: "Dinesh Vasireddy",
      role: "Computer Science at Harvard",
      width: 100,
      height: 100,
      style: {
        top: "40%",
        left: "43%",
        transform: "rotate(-5deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/dinesh-vasireddy.png",
    },
    {
      name: "Gabriel Vasquez",
      role: "Partner at Andressen Horowitz",
      width: 100,
      height: 100,
      style: {
        top: "28%",
        left: "50%",
        transform: "rotate(-3deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/gabriel-vasquez.png",
    },
    {
      name: "Aaron Erickson",
      role: "Sr. Eng. Manager at Nvidia",
      width: 100,
      height: 100,
      style: {
        top: "36.25%",
        left: "48%",
        transform: "rotate(1deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/aaron-erickson.png",
    },
    {
      name: "Sam Rodriques",
      role: "CEO at FutureHouse",
      width: 100,
      height: 100,
      style: {
        top: "24.7%",
        left: "10%",
        transform: "rotate(0deg) scaleX(-1)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/sam-rodriques.png",
    },
    {
      name: "Grace Lam",
      role: "Researcher at Character AI",
      width: 100,
      height: 100,
      style: {
        top: "27%",
        left: "22%",
        transform: "rotate(-10deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/grace-lam.png",
    },
    {
      name: "Rohan Mathur",
      role: "Researcher at Berkeley AI",
      width: 100,
      height: 100,
      style: {
        top: "43%",
        left: "2%",
        transform: "rotate(-10deg) scaleX(-1)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/rohan-mathur.png",
    },
    {
      name: "Aashay Sanghvi",
      role: "Partner at Haystack",
      width: 85,
      height: 85,
      style: {
        top: "25%",
        left: "77%",
        transform: "rotate(0deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/aashay-sanghvi.png",
    },
    {
      name: "Molly Mielke ",
      role: "Founding Partner at Moth Fund",
      width: 100,
      height: 100,
      style: {
        top: "20%",
        left: "7%",
        transform: "rotate(-10deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/molly-mielke.png",
    },
    {
      name: "John Luttig",
      role: "Partner at Founders Fund",
      width: 100,
      height: 100,
      style: {
        top: "20%",
        right: "3%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "1",
      },
      illustrationPath: "/illustrations/guests/john-luttig.png",
    },
    {
      name: "Ted Nyman",
      role: "Formet CTO at GitHub",
      width: 100,
      height: 100,
      style: {
        top: "30%",
        left: "25%",
        transform: "rotate(0deg)",
        opacity: "100%",
        zIndex: "4",
      },
      illustrationPath: "/illustrations/guests/ted-nyman.png",
    },
    {
      name: "Kole Lee",
      role: "Founder at Vigil",
      width: 100,
      height: 100,
      style: {
        top: "42%",
        left: "60%",
        transform: "rotate(-4deg)",
        opacity: "100%",
        zIndex: "2",
      },
      illustrationPath: "/illustrations/guests/kole-lee.png",
    },
    {
      name: "Guillermo Rauch",
      role: "CEO at Vercel",
      width: 90,
      height: 90,
      style: {
        top: "30%",
        right: "37%",
        transform: "rotate(0deg)",
        opacity: "100%",
      },
      illustrationPath: "/illustrations/guests/guillermo-rauch.png",
    },
    {
      name: "Sarah Ascherman",
      role: "Investment Team at General Catalyst",
      width: 100,
      height: 100,
      style: {
        top: "5%",
        left: "25%",
        transform: "rotate(7deg)",
        opacity: "95%",
      },
      illustrationPath: "/illustrations/guests/sarah-ascherman.png",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="relative w-full h-screen">
        <h2 className="relative top-0 right-0 m-4 text-4xl font-calendas">
          House guests
        </h2>

        {/* Guest illustrations container */}
        <div className="relative w-full h-full">
          <Image
            src={goldenBridgeImage}
            alt="Background"
            className="w-full h-1/2 object-cover"
          />
          {guestStickers.map((sticker, index) => (
            <div
              key={index}
              className="absolute cursor-pointer transition-transform hover:scale-110"
              style={sticker.style}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredGuest({
                  name: sticker.name,
                  role: sticker.role,
                  rect,
                });
              }}
              onMouseLeave={() => setHoveredGuest(null)}
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

        {/* Tooltip with Guest Data */}
        {hoveredGuest && hoveredGuest.rect && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: hoveredGuest.rect.left + hoveredGuest.rect.width / 2,
              top: hoveredGuest.rect.bottom + 10,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-xl text-white max-w-[220px]">
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-medium text-sm">{hoveredGuest.name}</p>
                  <p className="text-xs text-zinc-300">{hoveredGuest.role}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
