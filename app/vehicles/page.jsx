// Directory: app/vehicles/page.jsx
const vehicles = [
  { name: 'Apache RTR 160', img: '/images/apache.jpg' },
  { name: 'TVS Jupiter', img: '/images/jupiter.jpg' },
  { name: 'TVS Ntorq 125', img: '/images/ntorq.jpg' }
];

export default function Vehicles() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Available Vehicles</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {vehicles.map((v, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center">
            <img src={v.img} alt={v.name} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg">{v.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}