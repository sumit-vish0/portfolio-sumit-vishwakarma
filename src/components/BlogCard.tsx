import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
}: BlogCardProps) => {
  return (
    <article className="group glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon)/0.15)]">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-72 shrink-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30">
              {category}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Read More */}
          <Link
            to={`/blogs/${id}`}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all group/link"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
