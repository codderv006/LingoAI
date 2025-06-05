"use client";

import { motion } from 'framer-motion';
import { Mic, Brain, BarChart4, Repeat, MessageSquare, BookOpen, Lightbulb, BookText } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: "Voice Conversations",
    description: "Practice speaking naturally with our AI tutor using ElevenLabs voice technology"
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "AI remembers your progress, preferences, and learning style for tailored lessons"
  },
  {
    icon: BarChart4,
    title: "Progress Tracking",
    description: "Visualize your improvement with detailed analytics on vocabulary, pronunciation, and grammar"
  },
  {
    icon: Repeat,
    title: "Pronunciation Feedback",
    description: "Get real-time feedback on your accent and pronunciation with specific tips"
  },
  {
    icon: MessageSquare,
    title: "Real-world Scenarios",
    description: "Practice in simulated conversations like ordering at restaurants or asking for directions"
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Learn through our 10-step methodology from phonetics to fluent conversation"
  },
  {
    icon: Lightbulb,
    title: "Cultural Context",
    description: "Understand idioms, expressions, and cultural nuances beyond direct translations"
  },
  {
    icon: BookText,
    title: "10 Major Languages",
    description: "Learn any of 10 major world languages with region-specific accents and expressions"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn Naturally Through Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform makes language learning intuitive and effective through these key features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border rounded-xl p-6 transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}