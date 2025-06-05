"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConversationInterface } from '@/components/ConversationInterface';
import { ProgressTracker } from '@/components/ProgressTracker';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { languages } from '@/lib/data';
import { LearningSteps } from '@/components/LearningSteps';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ConversationPage() {
  const params = useParams();
  const router = useRouter();
  const [language, setLanguage] = useState<any>(null);
  
  useEffect(() => {
    if (params.language) {
      const lang = languages.find(l => l.code === params.language);
      if (lang) {
        setLanguage(lang);
      } else {
        router.push('/languages');
      }
    }
  }, [params.language, router]);
  
  if (!language) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link href="/languages">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Languages
              </Button>
            </Link>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: language.color }}
                >
                  {language.icon}
                </div>
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">
                    {language.name}
                    <Badge variant="outline" className="ml-2">A1 Beginner</Badge>
                  </h1>
                  <p className="text-muted-foreground">{language.nativeName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">Change Level</Button>
                <Button size="sm">Practice Now</Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="conversation">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="conversation">Conversation</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            </TabsList>
            
            <TabsContent value="conversation" className="mt-0">
              <ConversationInterface language={language} />
            </TabsContent>
            
            <TabsContent value="progress" className="mt-0">
              <ProgressTracker language={language} />
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-0">
              <LearningSteps language={language} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}