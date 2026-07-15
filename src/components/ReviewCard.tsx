import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full w-full flex flex-col">
      <div className="flex items-center gap-1 mb-3 text-yellow-400 shrink-0">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
        ))}
      </div>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed italic flex-grow">"{review.text}"</p>
      <div className="flex items-center justify-between mt-auto shrink-0 pt-4 border-t border-slate-50">
        <h4 className="font-semibold text-slate-900 text-sm">{review.name}</h4>
        <span className="text-xs text-slate-400">{review.date}</span>
      </div>
    </div>
  );
}
