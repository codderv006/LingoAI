"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { languages } from '@/lib/data';

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Some of the Languages We Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey with any of these 10 languages, complete with native pronunciation and cultural expressions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: language.color }}
                  >
                    {language.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}