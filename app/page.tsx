import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/ui/card';
import Button from '../components/ui/button';

const IMAGES: string[] = [
  'https://johnkeanestudios.com/Images/StudioBanner.png',
  'https://johnkeanestudios.com/Images/j.keane2.jpg',
  'https://johnkeanestudios.com/Images/console.JPG',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-XRsf5pa26Ds9QCgS57vbyWIA.png?st=2026-01-13T12%3A13%3A19Z&se=2026-01-13T14%3A13%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=c4071b20-fbe5-4cbe-8e48-4476b70c6a90&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T13%3A13%3A19Z&ske=2026-01-14T13%3A13%3A19Z&sks=b&skv=2024-08-04&sig=54XZclfVAhQQb5JClcZv46hE/zCh0IalThSFTDXqMFc%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-eBKHWaMEZeqtvUsAV36whhQ8.png?st=2026-01-13T12%3A13%3A40Z&se=2026-01-13T14%3A13%3A40Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=e12db1aa-1007-44fd-8388-3a70fd6a4956&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T09%3A27%3A53Z&ske=2026-01-14T09%3A27%3A53Z&sks=b&skv=2024-08-04&sig=tpkO2EcYE%2Bt44uwPKAESFPrgHbPU%2BQoZ%2B3KvX6dEXvM%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-mVRSciL7EskvchGw5tNMzPax.png?st=2026-01-13T12%3A14%3A03Z&se=2026-01-13T14%3A14%3A03Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=75dd98d5-7f83-456f-ae8d-a58a7fba1b61&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T12%3A56%3A51Z&ske=2026-01-14T12%3A56%3A51Z&sks=b&skv=2024-08-04&sig=XdpsChRgdhBiVZwNfacW9X9qCNOBxWNYLsuW5kzAdZ0%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-FAPekiDGwF4hge7Sg8IeJmOq.png?st=2026-01-13T12%3A14%3A45Z&se=2026-01-13T14%3A14%3A45Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=7aed557a-269d-4dda-ab8b-c66e34024151&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T13%3A14%3A45Z&ske=2026-01-14T13%3A14%3A45Z&sks=b&skv=2024-08-04&sig=NvG5uo0srWBmJHh3NwbJYeXbcvzhaAwILvu5h89ZAQc%3D'
];

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="relative w-full h-[420px] rounded-lg overflow-hidden glass-card">
        <HeroImage src={IMAGES[0]} alt="Studio Banner" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-tight">Welcome to John Keane Studios</h1>
          <div className="mt-6 flex gap-3">
            <Link href="/html/contact">
              <Button label="Contact Us" />
            </Link>
            <Link href="/html/about">
              <Button label="About" variant="ghost" />
            </Link>
          </div>
        </div>
      </div>

      {/* Image gallery that renders all provided images */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Array.isArray(IMAGES) ? IMAGES : []).map((src, idx) => (
          <Card key={idx}>
            <GalleryImage src={src} alt={`studio-${idx}`} />
          </Card>
        ))}
      </div>

      {/* Minimal factual footer content area is rendered by global Footer component */}
    </section>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const safeSrc = encodeURI(src);
  return (
    <Image src={safeSrc} alt={alt} fill sizes="100vw" style={{ objectFit: 'cover' }} unoptimized priority />
  );
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const safeSrc = encodeURI(src);
  return (
    <div className="w-full h-48 relative rounded-md overflow-hidden">
      <Image src={safeSrc} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: 'cover' }} unoptimized />
    </div>
  );
}
