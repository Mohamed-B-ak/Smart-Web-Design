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
    <article className="pt-32 pb-24 px-6" data-testid="section-blog-post">
      <div className="max-w-[760px] mx-auto">
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

        <div className="mb-8">
          <span className="text-[12px] font-medium text-[#7b2cbf] bg-[rgba(90,24,154,0.1)] px-3 py-1 rounded-full">
            {lang === "ar" ? post.categoryAr : post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {lang === "ar" ? post.titleAr : post.title}
        </h1>

        <div className="flex items-center gap-6 mb-8 text-[13px] text-[#8878a0]">
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

        <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none text-[#3a3a52] leading-relaxed text-[16px] space-y-4">
          {post.content?.split("\n").map((paragraph, i) =>
            paragraph.trim() ? (
              paragraph.startsWith("##") ? (
                <h2
                  key={i}
                  className="text-xl font-bold text-[#1a0a2e] mt-8 mb-2"
                >
                  {paragraph.replace(/^##\s*/, "")}
                </h2>
              ) : paragraph.startsWith("#") ? (
                <h1
                  key={i}
                  className="text-2xl font-bold text-[#1a0a2e] mt-8 mb-2"
                >
                  {paragraph.replace(/^#\s*/, "")}
                </h1>
              ) : (
                <p key={i}>{paragraph}</p>
              )
            ) : null,
          )}
        </div>
      </div>
    </article>
  );
}
