import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/data/blog';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface BlogListProps {
  onPostClick: (slug: string) => void;
}

export default function BlogList({ onPostClick }: BlogListProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="pt-32 pb-24 px-6" data-testid="section-blog-list">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-[#5a5a72] text-lg">{t('blog.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="fi bg-white border border-[rgba(124,92,252,0.1)] rounded-2xl overflow-hidden hover:border-[rgba(124,92,252,0.25)] transition-all cursor-pointer group"
              onClick={() => onPostClick(post.slug)}
              data-testid={`card-blog-${post.slug}`}
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={post.image}
                  alt={lang === 'ar' ? post.titleAr : post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] font-medium text-[#9b8afb] bg-[rgba(124,92,252,0.1)] px-2.5 py-1 rounded-full">
                    {lang === 'ar' ? post.categoryAr : post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-[#8a8aa0]">
                    <Clock className="w-3 h-3" />
                    {post.readTime} {t('blog.min_read')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#9b8afb] transition-colors">
                  {lang === 'ar' ? post.titleAr : post.title}
                </h3>
                <p className="text-[14px] text-[#5a5a72] leading-relaxed mb-4 line-clamp-2">
                  {lang === 'ar' ? post.excerptAr : post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#9b8afb]">
                  {t('blog.read_more')}
                  {lang === 'en' ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
