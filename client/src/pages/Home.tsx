import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Bot,
  BarChart3,
  Headphones,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* ✅ Hero Section (OPTIMIZED) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                AI-Powered Excellence
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground">
              The Future of <br />
              <span className="text-primary">Smart Call Centers</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sondos AI transforms customer interactions with real-time sentiment analysis,
              intelligent routing, and automated quality assurance.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition"
                >
                  Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base rounded-full border border-muted text-foreground"
                >
                  Learn More
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ Stats Section (LIGHT) */}
      <section className="py-12 border-y border-border/50 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40%", label: "Cost Reduction" },
              { value: "24/7", label: "Availability" },
              { value: "95%", label: "Resolution Rate" },
              { value: "<1s", label: "Response Time" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section id="features" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider">
              Our Technology
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Built for the Modern Enterprise
            </h3>
            <p className="text-muted-foreground text-base">
              Our AI tools integrate seamlessly with your infrastructure to improve every customer interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="AI-Powered Routing"
              description="Route calls instantly based on customer data and intent."
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-time Sentiment"
              description="Analyze emotions during calls to improve interactions."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Automated QA"
              description="Automatically review and improve call quality."
            />
            <FeatureCard
              icon={Bot}
              title="Intelligent Agents"
              description="AI agents handle calls naturally and efficiently."
            />
            <FeatureCard
              icon={Headphones}
              title="Agent Assist"
              description="Give agents real-time suggestions and guidance."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Seamless Integration"
              description="Connect easily with your CRM and tools."
            />
          </div>
        </div>
      </section>

      {/* ✅ CTA Section (SIMPLIFIED) */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to revolutionize your customer support?
          </h2>
          <p className="text-white/80 mb-6">
            Join companies using Sondos AI to deliver better customer experiences.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-white text-primary font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}