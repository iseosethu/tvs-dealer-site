// Directory: app/page.jsx (Home)
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <Carousel />
      <section className="mt-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to TVS Brilliant Motors</h1>
        <p className="mt-2">Your trusted TVS two-wheeler dealer in Chennai.</p>
      </section>
    </div>
  );
}