import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  image: string;
}

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white rounded-[2rem] p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center gap-4 group h-[150px] md:h-[170px] flex-shrink-0 w-[160px] md:w-[190px] cursor-pointer">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-50 ring-[6px] ring-slate-50 group-hover:ring-primary/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-700 mix-blend-multiply p-1"
          unoptimized
        />
      </div>
      <span className="font-bold text-sm md:text-[15px] text-slate-700 group-hover:text-primary text-center leading-tight transition-colors">
        {brand.name}
      </span>
    </div>
  );
}
