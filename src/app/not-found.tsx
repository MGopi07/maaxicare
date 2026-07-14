import Link from "next/link";
import { Pill, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg border border-slate-100">
            <Pill className="h-16 w-16 text-primary" />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-500 mb-8 max-w-md">
        Oops! The page you are looking for seems to have been misplaced. Don't worry, we can help you find your way back to health.
      </p>
      <Link href="/" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
        <Home className="h-5 w-5" /> Back to Home
      </Link>
    </div>
  );
}
