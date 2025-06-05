"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { languages } from '@/lib/data';

export function LanguagesSection() {
  return (
    <section id="languages" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Some of the Languages We Support
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey with any of these 10 languages, complete with native pronunciation and cultural expressions
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden h-full cursor-pointer border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center text-white text-xl sm:text-2xl font-bold"
                    style={{ backgroundColor: language.color }}
                  >
                    {language.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{language.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{language.nativeName}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}