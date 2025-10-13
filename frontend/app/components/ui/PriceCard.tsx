export function PriceCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm text-center hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-3xl font-extrabold text-[#5c40c2] mb-4">{price}</p>

      <ul className="text-gray-600 mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            <span className="text-[#8fde62] text-lg">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-[#5c40c2] text-white font-semibold py-2 rounded-lg hover:bg-[#4a34a6] transition">
        Pilih Paket
      </button>
    </div>
  );
}
