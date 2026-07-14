import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  image: string;
}

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group h-28 flex-shrink-0 w-48 mx-3 cursor-pointer">
      <div className="relative w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        <Image 
          src={brand.image} 
          alt={brand.name} 
          fill 
          className="object-contain" 
        />
      </div>
      <span className="font-bold text-sm text-slate-500 group-hover:text-primary text-center leading-tight transition-colors">
        {brand.name}
      </span>
    </div>
  );
}
