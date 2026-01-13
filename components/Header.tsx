import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/html/about' },
  { label: 'Discography', href: '/html/discography' },
  { label: 'Recording Services', href: '/html/recordingservices' },
  { label: 'Client List', href: '/html/clientlist' },
  { label: 'Equipment', href: '/html/equipment' },
  { label: 'Music Clips', href: '/html/clips' },
  { label: 'Photos', href: '/html/photos' },
  { label: 'Contact', href: '/html/contact' }
];

export default function Header() {
  const banner = 'https://johnkeanestudios.com/Images/StudioBanner.png';
  const safeBanner = encodeURI(banner);

  return (
    <header className="header-sticky sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-44 h-10">
            <Image src={safeBanner} alt="Keane Studios" unoptimized fill sizes="176px" style={{ objectFit: 'cover' }} />
          </div>
          <div className="ml-2 text-sm text-muted-foreground">Keane Studios</div>
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-6">
            {(Array.isArray(NAV_LINKS) ? NAV_LINKS : []).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile simplified nav */}
          <div className="md:hidden">
            <Link href="/html/contact" className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
