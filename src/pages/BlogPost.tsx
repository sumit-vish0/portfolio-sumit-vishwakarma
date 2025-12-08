import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog not found</h1>
            <Link to="/blogs" className="text-primary hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30 mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Author</p>
                  <p className="text-foreground font-medium">{blog.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime} read</span>
              </div>
              <button className="ml-auto p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="glass-card-glow rounded-2xl overflow-hidden mb-12 neon-border">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
