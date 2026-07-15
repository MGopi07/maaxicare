import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
        <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 text-center flex-1 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
          <h3 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
