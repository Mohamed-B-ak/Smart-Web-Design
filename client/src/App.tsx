import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { LanguageProvider } from "@/context/LanguageContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import LogoCarousel from "@/sections/LogoCarousel";
import ScaleBanner from "@/sections/ScaleBanner";
import WhatIs from "@/sections/WhatIs";

import Testimonials from "@/sections/Testimonials";
import TalksLikePeople from "@/sections/TalksLikePeople";
import Highlights from "@/sections/Highlights";
import Features from "@/sections/Features";
import QA from "@/sections/QA";
import Omnichannel from "@/sections/Omnichannel";
import Telephony from "@/sections/Telephony";

import Integrations from "@/sections/Integrations";
import FAQ from "@/sections/FAQ";
import CTABanner from "@/sections/CTABanner";

import Footer from "@/sections/Footer";
import BlogList from "@/sections/BlogList";
import BlogPost from "@/sections/BlogPost";
import Healthcare from "@/pages/Healthcare";
import Ecommerce from "@/pages/Ecommerce";
import CallCenter from "@/pages/CallCenter";
import RealEstate from "@/pages/RealEstate";

import Restaurant from "@/pages/Restaurant";
import Legal from "@/pages/Legal";
import CarDealership from "@/pages/CarDealership";
import DebtCollection from "@/pages/DebtCollection";

import Partner from "@/pages/Partner";
import SavingsCalculator from "@/sections/SavingsCalculator";
import IntegrationsPage from "@/pages/IntegrationsPage";
import Demo from "@/pages/Demo";
import Technology from "@/pages/Technology";
import Governance from "@/pages/Governance";

function HomePage() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <ScaleBanner />
      <WhatIs />
      <SavingsCalculator />
      <Testimonials />
      <TalksLikePeople />

      <Highlights />
      <Features />
      <QA />
      <Omnichannel />
      <Telephony />

      <Integrations />
      <FAQ />
      <CTABanner />
    </main>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="pt-32 pb-16 px-6 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-[#5a5a72] mt-4">Coming soon...</p>
    </main>
  );
}

function BlogListPage() {
  const [, navigate] = useLocation();
  return (
    <main>
      <BlogList onPostClick={(slug) => navigate(`/blog/${slug}`)} />
    </main>
  );
}

// ❌ Remplacez TOUTE cette fonction :
function BlogPostPage({ slug }: { slug: string }) {
  const [, navigate] = useLocation();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <PlaceholderPage title="404 - Post Not Found" />;
  }

  return (
    <main>
      <BlogPost post={post} onBack={() => navigate("/blog")} />
    </main>
  );
}

function AppContent() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("vis");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );

      document.querySelectorAll(".fi").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f4f0fa]">
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} />

        <Route path="/partner" component={Partner} />
        <Route path="/healthcare" component={Healthcare} />

        <Route path="/call-center" component={CallCenter} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/technology" component={Technology} />
        <Route path="/governance" component={Governance} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/legal" component={Legal} />
        <Route path="/car-dealership" component={CarDealership} />
        <Route path="/debt-collection" component={DebtCollection} />
        <Route path="/blog">{() => <BlogListPage />}</Route>
        <Route path="/blog/:slug">
          {(params) => <BlogPostPage slug={params.slug} />}
        </Route>
        <Route path="/integrations" component={IntegrationsPage} />
        {/* ✅ AJOUTE CETTE LIGNE */}
        <Route path="/Demo" component={Demo} />

        <Route>{() => <PlaceholderPage title="404 - Page Not Found" />}</Route>
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppContent />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
