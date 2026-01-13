export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.04)] mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-sm">Copyright 2011, johnkeanestudios.com</div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Navigation</div>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/html/about" className="hover:text-accent">About</a></li>
            <li><a href="/html/discography" className="hover:text-accent">Discography</a></li>
            <li><a href="/html/recordingservices" className="hover:text-accent">Recording Services</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Studio</div>
          <ul className="text-sm space-y-1">
            <li><a href="/html/clientlist" className="hover:text-accent">Client List</a></li>
            <li><a href="/html/equipment" className="hover:text-accent">Equipment</a></li>
            <li><a href="/html/clips" className="hover:text-accent">Music Clips</a></li>
            <li><a href="/html/photos" className="hover:text-accent">Photos</a></li>
            <li><a href="/html/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
