import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              <span className="neon-text">Blogs</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              My thoughts on technology and business, welcome to subscribe
            </p>
          </div>

          {/* Subscribe Button */}
          <div className="text-center mb-12">
            <button className="px-6 py-3 bg-secondary text-foreground rounded-xl border border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--neon)/0.2)] transition-all">
              Subscribe My Blogs
            </button>
          </div>

          {/* Vertical Blog Name */}
          <div className="hidden xl:block fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
            <span className="text-6xl font-bold text-muted/20 tracking-widest font-mono">
              SumitBlogs
            </span>
          </div>

          {/* Blog List */}
          <div className="space-y-6">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                image={blog.image}
                author={blog.author}
                date={blog.date}
                readTime={blog.readTime}
                category={blog.category}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
