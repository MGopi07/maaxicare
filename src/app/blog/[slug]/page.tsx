"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ChevronRight, Search, PlayCircle } from "lucide-react";
import { api } from "@/services/api";

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState<any>(null);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Recent";
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    } catch (e) {
      return dateString;
    }
  };

  useEffect(() => {
    // Fetch current blog
    api.blogs.getSingle(slug)
      .then((res) => {
        const data = res?.data || res;
        setBlog(data);
      })
      .catch((err) => console.error("Error fetching blog", err))
      .finally(() => setLoading(false));

    // Fetch recent blogs for the sidebar
    api.blogs.getAll({ per_page: 4 })
      .then((res) => setRecentBlogs(res?.data || res || []))
      .catch((err) => console.error("Error fetching recent blogs", err));
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center text-primary font-medium">Loading article...</div>;
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-12 pb-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Article Header (Minimal layout matching design) */}
        <div className="mb-14 mt-4 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-6 py-1.5 rounded-full border border-primary/30 text-primary font-bold text-[10px] sm:text-xs mb-6 tracking-wide">
            {blog.category || "Wellness"}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-500 font-medium">
            <Calendar className="h-4 w-4 text-secondary" />
            {formatDate(blog.date || blog.created_at)}
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              
              {/* Featured Image inside the card */}
              <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full bg-slate-50 border-b border-slate-100">
                <Image 
                  src={blog.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"} 
                  alt={blog.title || "Blog Image"} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10 md:p-14 prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl text-slate-600 leading-relaxed">
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <p className="italic text-slate-400 font-medium">No content available for this article.</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Search Widget */}
            <div className="bg-white p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="font-black text-slate-900 uppercase tracking-[0.15em] mb-5 text-sm">
                Search
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-5 pr-12 text-sm text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-400 transition-colors" 
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="font-black text-slate-900 uppercase tracking-[0.15em] mb-6 text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,168,89,0.4)]"></span>
                Categories
              </h3>
              <div className="space-y-3">
                {["Wellness", "Nutrition", "Health Insights", "Fitness"].map((cat, i) => (
                  <Link key={i} href="/blog" className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-slate-50 group transition-all border border-transparent hover:border-slate-100">
                    <span className="text-slate-600 font-bold group-hover:text-primary transition-colors text-sm">{cat}</span>
                    <span className="bg-slate-50 group-hover:bg-primary/10 text-slate-500 group-hover:text-primary text-xs py-1 px-3 rounded-xl font-black transition-colors border border-slate-100 group-hover:border-primary/20">
                      {Math.floor(Math.random() * 10) + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="font-black text-slate-900 uppercase tracking-[0.15em] mb-6 text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,168,89,0.4)]"></span>
                Recent Posts
              </h3>
              <div className="space-y-5">
                {recentBlogs.length > 0 ? recentBlogs.map((recent) => (
                  <Link key={recent.id || recent.slug} href={`/blog/${recent.slug || recent.id}`} className="flex gap-4 group items-center p-2 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                    <div className="relative h-[72px] w-[90px] rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-200">
                      <Image 
                        src={recent.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80"} 
                        fill 
                        alt="Recent" 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-black text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2 uppercase tracking-wide">
                        {recent.title}
                      </h4>
                      <div className="text-[10px] text-slate-500 flex items-center gap-1.5 font-bold tracking-[0.15em] uppercase">
                        <Calendar className="h-3 w-3" /> 
                        {formatDate(recent.date || recent.created_at)}
                      </div>
                    </div>
                  </Link>
                )) : (
                  <div className="text-sm text-slate-400 font-medium italic">No recent posts found.</div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
