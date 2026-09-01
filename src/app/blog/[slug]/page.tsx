"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ChevronRight, Share2 } from "lucide-react";
import { api } from "@/services/api";

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.blogs.getSingle(slug)
      .then((res) => {
        const data = res?.data || res;
        setBlog(data);
      })
      .catch((err) => console.error("Error fetching blog", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500 font-medium">Loading article...</div>;
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-800 font-medium truncate max-w-xs">{blog.title}</span>
        </div>

        {/* Article Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 uppercase tracking-wider">
            {blog.category || "Wellness"}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400">Written by</p>
                <p className="text-slate-900">{blog.author || "Maaxicare Team"}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {blog.date || blog.created_at || "Recently"}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-lg border border-slate-100">
          <Image 
            src={blog.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"} 
            alt={blog.title || "Blog Image"} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content & Sidebar */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Removed Social Share for lucide compat */}

          {/* Main Content */}
          <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl">
            {/* Render HTML content safely */}
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <p className="text-slate-500 italic">No content available for this article.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
