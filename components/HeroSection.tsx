"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mic, MessageSquare, BarChart4 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConversationInterface } from './ConversationInterface';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const conversationRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowConversation(true);
    setTimeout(() => {
      conversationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Wait for render
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Speak & Learn
              </span>{" "}
              Any Language
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md sm:max-w-2xl md:max-w-3xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Master any language by talking to an intelligent AI that teaches, corrects, and tracks your 
            fluency like a native tutor. Start speaking confidently in minutes.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="text-base h-12 px-6 sm:px-8"
              onClick={handleGetStarted}
            >
              Get Started For Free
            </Button>
            <Link href="/#how-it-works">
              <Button size="lg" variant="outline" className="text-base h-12 px-6 sm:px-8">
                How It Works
              </Button>
            </Link>
          </motion.div>

          {showConversation && (
            <div
              ref={conversationRef}
              className="w-full max-w-full sm:max-w-2xl md:max-w-3xl mb-8"
            >
              <ConversationInterface language="en" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}