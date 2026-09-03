"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { api } from "@/services/api";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
    setLoading(true);
    const params: any = { page: currentPage, per_page: 9 };
    
    api.blogs.getAll(params)
      .then((res) => {
        setBlogs(res?.data || res || []);
        if (res?.meta?.last_page) {
          setTotalPages(res.meta.last_page);
        } else {
          setTotalPages(1);
        }
      })
      .catch((err) => console.error("Error fetching blogs", err))
      .finally(() => setLoading(false));
  }, [currentPage]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Blogs</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Stay updated with the latest medical news, wellness advice, and tips for a healthier lifestyle.
          </p>
          
        </div>

        {loading ? (
          <div className="min-h-[40vh] flex items-center justify-center text-slate-500 font-medium">Loading articles...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.length > 0 ? blogs.map((blog) => (
                <Link key={blog.id || blog.slug || blog.title} href={`/blog/${blog.slug || blog.id}`} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image 
                      src={blog.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"} 
                      alt={blog.title || "Blog Image"} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {blog.category || "Wellness"}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(blog.date || blog.created_at)}
                      </div>
                      {blog.author && (
                        <div className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {blog.author}
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1">
                      {blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : "Read more to find out...")}
                    </p>
                    <div className="text-primary font-semibold flex items-center gap-2 mt-auto">
                      Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-full text-center py-20 text-slate-500">
                  <p className="text-lg font-medium mb-2">No articles found</p>
                  <p>Try adjusting your search terms.</p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                >
                  Previous
                </button>
                
                <div className="flex items-center gap-2 mx-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-xl font-bold flex items-center justify-center transition-colors ${
                        currentPage === page 
                          ? 'bg-primary text-white shadow-md' 
                          : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
