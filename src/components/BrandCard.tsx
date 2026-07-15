import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  image: string;
}

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 group h-[120px] flex-shrink-0 w-[160px] cursor-pointer">
      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-50 ring-4 ring-slate-50 group-hover:ring-primary/10 transition-all duration-300">
        <Image 
          src={brand.image} 
          alt={brand.name} 
          fill 
          sizes="80px"
          className="object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <span className="font-bold text-[13px] text-slate-700 group-hover:text-primary text-center leading-tight transition-colors">
        {brand.name}
      </span>
    </div>
  );
}
