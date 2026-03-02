import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-mesh">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 shadow-sm mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                  AI-Powered Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-foreground">
                The Future of <br />
                <span className="text-gradient">Smart Call Centers</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Sondos AI transforms customer interactions with real-time
              sentiment analysis, intelligent routing, and automated quality
              assurance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full border-2 border-muted hover:bg-muted/50 text-foreground transition-all"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40%", label: "Cost Reduction" },
              { value: "24/7", label: "Availability" },
              { value: "95%", label: "Resolution Rate" },
              { value: "<1s", label: "Response Time" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider">
              Our Technology
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for the Modern Enterprise
            </h3>
            <p className="text-muted-foreground text-lg">
              Our comprehensive suite of AI tools integrates seamlessly with
              your existing infrastructure to elevate every customer touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="AI-Powered Routing"
              description="Instantly route calls to the best-suited agent based on customer history, sentiment, and query complexity."
              delay={0.1}
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-time Sentiment"
              description="Monitor customer emotions live during calls and provide agents with instant cues to de-escalate situations."
              delay={0.2}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Automated QA"
              description="Review 100% of calls automatically. Identify compliance risks and coaching opportunities instantly."
              delay={0.3}
            />
            <FeatureCard
              icon={Bot}
              title="Intelligent Agents"
              description="Deploy voice and chat bots that handle complex queries naturally, freeing humans for high-value tasks."
              delay={0.4}
            />
            <FeatureCard
              icon={Headphones}
              title="Agent Assist"
              description="Equip agents with real-time knowledge base suggestions and next-best-action recommendations."
              delay={0.5}
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Seamless Integration"
              description="Connects effortlessly with Salesforce, Zendesk, and major telephony providers in minutes."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-0">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to revolutionize your customer support?
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Join forward-thinking companies using Sondos AI to deliver
              exceptional experiences at scale.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 shadow-xl transition-all font-bold"
                >
                  Get Started Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
