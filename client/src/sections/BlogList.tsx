import { useLanguage } from "@/context/LanguageContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";

interface BlogListProps {
  onPostClick: (slug: string) => void;
}

export default function BlogList({ onPostClick }: BlogListProps) {
  const { lang, t } = useLanguage();
  const { posts, loading, error } = useBlogPosts();

  if (loading)
    return (
      <div className="pt-32 text-center text-[#7b2cbf] text-xl">
        Chargement des articles...
      </div>
    );

  if (error)
    return <div className="pt-32 text-center text-red-500">{error}</div>;

  if (posts.length === 0)
    return (
      <div className="pt-32 text-center text-[#4a3a62] text-xl">
        No articles found.
      </div>
    );

  return (
    <section className="pt-32 pb-24 px-6" data-testid="section-blog-list">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-[#4a3a62] text-lg">{t("blog.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl overflow-hidden hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 cursor-pointer group"
              onClick={() => onPostClick(post.slug)}
              data-testid={`card-blog-${post.slug}`}
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={post.image}
                  alt={lang === "ar" ? post.titleAr : post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] font-medium text-[#7b2cbf] bg-[rgba(90,24,154,0.1)] px-2.5 py-1 rounded-full">
                    {lang === "ar" ? post.categoryAr : post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-[#8878a0]">
                    <Clock className="w-3 h-3" />
                    {post.readTime} {t("blog.min_read")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#7b2cbf] transition-colors">
                  {lang === "ar" ? post.titleAr : post.title}
                </h3>
                <p className="text-[14px] text-[#4a3a62] leading-relaxed mb-4 line-clamp-2">
                  {lang === "ar" ? post.excerptAr : post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#7b2cbf]">
                  {t("blog.read_more")}
                  {lang === "en" ? (
                    <ArrowRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  )}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
