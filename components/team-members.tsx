import Image from 'next/image'

interface Member {
  name: string
  role: string
  country: string
  imageUrl?: string
}

const members: Member[] = [
  {
    name: 'Lucas Vittor',
    role: 'Founding Eng at Mutt Data',
    imageUrl: '/members/lucas-vittor.jpg',
    country: '🇦🇷'
  },
  {
    name: 'Gabriel Petersson',
    role: 'Sora Engineer at OpenAI',
    imageUrl: '/members/gabriel-petersson.jpg',
    country: '🇸🇪'
  },
  {
    name: 'Emil Fagerholm',
    role: 'Technical Member at Lovable',
    imageUrl: '/members/emil-fagerholm.jpg',
    country: '🇸🇪'
  },
  {
    name: 'Kacper Kielak',
    role: 'Researcher at Magic.dev',
    imageUrl: '/members/kacper-kielak.jpg',
    country: '🇵🇱'
  },
  {
    name: 'Noah Lofquist',
    role: 'Founder of Tzafon',
    imageUrl: '/members/noah-lofquist.jpg',
    country: '🇸🇪'
  },
  {
    name: 'Ayush Noori',
    role: 'Researcher at Zitnik Lab, HMS',
    imageUrl: '/members/ayush-noori.jpg',
    country: '🇺🇸'
  },
  {
    name: 'Ayush Menon',
    role: 'Founder of Katana',
    imageUrl: '/members/ayush-menon.jpg',
    country: '🇺🇸'
  },
  {
    name: 'James Zhou',
    role: 'Software Engineer at 11x',
    imageUrl: '/members/james-zhou.jpg',
    country: '🇺🇸'
  },
  {
    name: 'Matheus Mendes',
    role: 'Software Eng at Midjourney',
    imageUrl: '/members/matheus-mendes.jpg',
    country: '🇸🇪'
  },
  {
    name: 'Rikard Radovac',
    role: 'ML Engineer at Labelf AI',
    imageUrl: '/members/rikard-radovac.jpg',
    country: '🇸🇪'
  },
  {
    name: 'Ernesto Nam',
    role: 'Software Engineer at 11x',
    imageUrl: '/members/ernesto-nam.jpg',
    country: '🇵🇾'
  },
  {
    name: 'Iñaki Arango',
    role: 'Founder of Recyco',
    imageUrl: '/members/inaki-arango.jpg',
    country: '🇦🇷'
  }
]

export function TeamMembers() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-lg px-6 lg:px-0">
        <h2 className="mb-2 text-4xl font-medium">Members</h2>
        <p className="mb-8 text-lg text-zinc-400">La Casa is a community of international builders and domain-experts that live in the same house.</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-2">
          {members.map((member, index) => (
            <div key={index} className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
              <div className="size-12 shrink-0">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-slate-6 object-cover grayscale"
                  />
                ) : (
                  <div className="flex items-center justify-center size-12 text-xl font-medium text-white rounded-full bg-zinc-800">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium">{member.name} <span className="text-xs">{member.country}</span></span>
                </div>
                <span className="block text-sm text-zinc-400 leading-[1.6]">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 