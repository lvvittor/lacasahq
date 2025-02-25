import Image from 'next/image'

interface Guest {
  name: string
  role: string
  imageUrl?: string
}

const guests: Guest[] = [
//   {
//     name: 'Tom McCarthy',
//     role: 'XXX of Nebular VC',
//     imageUrl: '/guests/tom-mccarthy.jpg' TODO: Found the image
//   },
  {
    name: 'Finn Murphy',
    role: 'Founder of Nebular VC',
    imageUrl: '/guests/finn-murphy.jpg'
  },
  {
    name: 'Jeffrey Wang',
    role: 'Researcher at OpenAI',
    imageUrl: '/guests/jeffrey-wang.jpg'
  },
  {
    name: 'Ben Levy',
    role: 'Partner at Blueyard Capital',
    imageUrl: '/guests/ben-levy.jpg'
  },
  {
    name: 'Kevin Zhang',
    role: 'Partner at Bain Capital',
    imageUrl: '/guests/kevin-zhang.jpg'
  },
  {
    name: 'Slater Stich',
    role: 'Partner at Bain Capital',
    imageUrl: '/guests/slater-stich.jpg'
  },
  {
    name: 'Jonathan Lei',
    role: 'On-Demand at Voltage Park',
    imageUrl: '/guests/jonathan-lei.jpg'
  },
  {
    name: 'Pranav Ramesh',
    role: 'Growth Engineer at Ramp',
    imageUrl: '/guests/pranav-ramesh.jpg'
  },
  {
    name: 'Dinesh Vasireddy',
    role: 'Computer Science at Harvard',
    imageUrl: '/guests/dinesh-vasireddy.jpg'
  },
  {
    name: 'Archika Dogra',
    role: 'Product at Databricks',
    imageUrl: '/guests/archika-dogra.jpeg'
  },
  {
    name: 'Jimmy Yun',
    role: 'Principal at 8VC',
    imageUrl: '/guests/jimmy-yun.jpg'
  },
  {
    name: 'Vivek Gopalan',
    role: 'Investment Team at 8VC',
    imageUrl: '/guests/vivek-gopalan.jpg'
  },
  {
    name: 'Cory Levy',
    role: 'Founder of Z Fellows',
    imageUrl: '/guests/cory-levy.jpg'
  },
  {
    name: 'Courtney Hudson-Paz',
    role: 'Founder of Time Initiative',
    imageUrl: '/guests/courtney-hudson-paz.jpg'
  },
  {
    name: 'Rohan Pandey',
    role: 'Researcher at OpenAI',
    imageUrl: '/guests/rohan-pandey.jpg'
  },
  {
    name: 'Brom Rector',
    role: 'Partner at Focalpoint',
    imageUrl: '/guests/brom-rector.jpeg'
  },
  {
    name: 'Samantha Tabone',
    role: 'Partner at Focalpoint',
    imageUrl: '/guests/samantha-tabone.jpeg'
  },
  {
    name: 'Joy Liu',
    role: 'Researcher at Berkeley AI',
    imageUrl: '/guests/joy-liu.jpeg'
  },
  {
    name: 'Rohan Mathur',
    role: 'Researcher at Berkeley AI',
    imageUrl: '/guests/rohan-mathur.jpeg'
  },
  {
    name: 'Owen Queen',
    role: 'PhD in CS at Stanford',
    imageUrl: '/guests/owen-queen.jpg'
  },
  {
    name: 'Sonith Sunku',
    role: 'Member of Z Fellows',
    imageUrl: '/guests/sonith-sunku.jpg'
  },
  {
    name: 'Aaron Erickson',
    role: 'Sr. Eng. Manager at Nvidia',
    imageUrl: '/guests/aaron-erickson.jpg'
  },
  {
    name: 'Jack Soslow',
    role: 'Partner at Andressen Horowitz',
    imageUrl: '/guests/jack-soslow.jpg'
  },
  {
    name: 'Jon Barron',
    role: 'Researcher at DeepMind',
    imageUrl: '/guests/jon-barron.jpg'
  },
  {
    name: 'Charles Frye',
    role: 'Dev Rel at Modal',
    imageUrl: '/guests/charles-frye.jpg'
  },
  {
    name: 'Menelaos Mazarakis',
    role: 'Founder of Anon Platform',
    imageUrl: '/guests/menelaos-mazarakis.jpg'
  },
  {
    name: 'Gadi Borovich',
    role: 'Founder of Anon Platform',
    imageUrl: '/guests/gadi-borovich.jpg'
  },
  {
    name: 'Aashay Sanghvi',
    role: 'Partner at Haystack',
    imageUrl: '/guests/aashay-sanghvi.jpg'
  },
  {
    name: 'Jaren Glover',
    role: 'Early Engineer at Robinhood',
    imageUrl: '/guests/jaren-glover.jpeg'
  },
  {
    name: 'Emanuel Adamiak',
    role: 'Engineer at Klyra Protocol',
    imageUrl: '/guests/emanuel-adamiak.jpeg'
  },
  {
    name: 'Jota Lanusse',
    role: 'Engineer at Klyra Protocol',
    imageUrl: '/guests/jota-lanusse.jpg'
  },
  {
    name: 'Vincent Po',
    role: 'Head of Scholars at Neo',
    imageUrl: '/guests/vincent-po.jpeg'
  },
  {
    name: 'Gabriel Vasquez',
    role: 'Partner at Andressen Horowitz',
    imageUrl: '/guests/gabriel-vasquez.jpeg'
  },
//   {
//     name: 'Marco Mascorro',
//     role: 'Partner at Andressen Horowitz',
//     imageUrl: '/guests/marco-mascorro.jpg'
//   },
  {
    name: 'Sam Rodriques',
    role: 'CEO at FutureHouse',
    imageUrl: '/guests/sam-rodriques.jpg'
  },
  {
    name: 'CC Gong',
    role: 'Principal at Menlo Ventures',
    imageUrl: '/guests/cc-gong.jpeg'
  },
  {
    name: 'Grace Lam',
    role: 'Researcher at Character AI',
    imageUrl: '/guests/grace-lam.jpeg'
  },
  {
    name: 'Molly Mielke ',
    role: 'Founding Partner at Moth Fund',
    imageUrl: '/guests/molly-mielke.jpeg'
  },
  {
    name: 'Gabriel Guimaraes',
    role: 'Early Engineer at Brex',
    imageUrl: '/guests/gabriel-guimaraes.jpg'
  },
  {
    name: 'John Luttig',
    role: 'Partner at Founders Fund',
    imageUrl: '/guests/john-luttig.jpg'
  },
  {
    name: 'Koren Gilbai',
    role: 'Associate at Founders Fund',
    imageUrl: '/guests/koren-gilbai.jpg'
  },
  {
    name: 'Ted Nyman',
    role: 'Formet CTO at GitHub',
    imageUrl: '/guests/ted-nyman.jpg'
  },
  {
    name: 'Kole Lee',
    role: 'Founder at Vigil',
    imageUrl: '/guests/kole-lee.jpg'
  },
//   {
//     name: 'Sarah Tavel',
//     role: 'Partner at Benchmark',
//     imageUrl: '/guests/sarah-tavel.jpeg'
//   },
  {
    name: 'Guillermo Rauch',
    role: 'CEO at Vercel',
    imageUrl: '/guests/guillermo-rauch.jpg'
  },
  {
    name: 'Sarah Ascherman',
    role: 'Investment Team at General Catalyst',
    imageUrl: '/guests/sarah-asherman.jpeg'
  },
  {
    name: 'Anant Pai',
    role: 'Investment Team at General Catalyst',
    imageUrl: '/guests/anant-pai.jpeg'
  },
  {
    name: 'Nmachi Jidenma',
    role: 'Investment Team at General Catalyst',
    imageUrl: '/guests/nmachi-jidenma.jpeg'
  },
]

export function Guests() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-lg px-6 lg:px-0">
        <h2 className="mb-2 text-4xl font-medium">House guests</h2>
        <p className="mb-8 text-lg text-zinc-400">Quality over quantity. We leverage our collective expersite to help our members meet other builders and discover new ways of impacting the world.</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-2">
          {guests.map((guest, index) => (
            <div key={index} className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
              <div className="size-12 shrink-0">
                {guest.imageUrl ? (
                  <Image
                    src={guest.imageUrl}
                    alt={guest.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-slate-6 object-cover grayscale"
                  />
                ) : (
                  <div className="flex items-center justify-center size-12 text-xl font-medium text-white rounded-full bg-zinc-800">
                    {guest.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium">{guest.name}</span>
                </div>
                <span className="block text-sm text-zinc-400 leading-[1.6]">
                  {guest.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 