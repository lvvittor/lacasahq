import Link from 'next/link'

const links = {
    about: [
        {
            title: 'Our Story',
            href: '/our-story',
        },
        {
            title: 'Community',
            href: '/community',
        },
        {
            title: 'FAQ',
            href: '/faq',
        },
        {
            title: 'Apply',
            href: '/apply',
        },
    ],
    socials: [
        {
            title: 'Twitter',
            href: 'https://twitter.com',
        },
        {
            title: 'Contact',
            href: 'mailto:hello@southparkcommons.com',
        },
    ],
}

export const SiteFooter = () => {
    return (
        <footer className="mt-16 border-t border-dashed bg-white py-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-0">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600">La Casa</p>
                        <p className="text-sm text-gray-600">San Francisco, CA</p>
                        <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {Object.entries(links).map(([section, items]) => (
                            <div key={section} className="flex flex-col gap-4">
                                {items.map((item, index) => (
                                    <Link 
                                        key={`${section}-${index}`}
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}