import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  titleAr: string;
  content: string;
  category: string;
  categoryAr: string;
  readTime: string;
  image: string;
  date: string;
  author?: string;
}

interface BlogPostProps {
  post: Post;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  const { lang, t } = useLanguage();

  return (
    <article
      className="pt-32 pb-24 px-6"
      data-testid="section-blog-post"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-[760px] mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[14px] text-[#7b2cbf] hover:text-[#1a0a2e] mb-8 transition-colors"
          data-testid="button-back-blog"
        >
          {lang === "en" ? (
            <ArrowLeft className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
          {t("blog.back")}
        </button>

        {/* Category */}
        <div className="mb-8">
          <span className="text-[12px] font-medium text-[#7b2cbf] bg-[rgba(90,24,154,0.1)] px-3 py-1 rounded-full">
            {lang === "ar" ? post.categoryAr : post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#1a0a2e]">
          {lang === "ar" ? post.titleAr : post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 mb-8 text-[13px] text-[#8878a0] flex-wrap">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.author || "Rédaction"}
          </span>

          <span>{post.date?.substring(0, 10)}</span>

          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime} {t("blog.min_read")}
          </span>
        </div>

        {/* Image */}
        <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-10">
          <img
            src={post.image}
            alt={lang === "ar" ? post.titleAr : post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog content */}
        <div
          className="
          prose
          prose-lg
          max-w-none
          prose-headings:text-[#1a0a2e]
          prose-headings:font-bold
          prose-h2:mt-10
          prose-h2:mb-4
          prose-p:text-[#3a3a52]
          prose-p:leading-relaxed
          prose-a:text-[#7b2cbf]
          prose-a:font-semibold
          prose-a:underline
          hover:prose-a:text-[#5a189a]
          prose-strong:text-[#1a0a2e]
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
