import { languages } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Language</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a language to start your learning journey with LingoAI. Each language comes with customized learning paths and native pronunciation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {languages.map((language) => (
            <Link href={`/conversation/${language.code}`} key={language.code}>
              <Card className="h-full hover:shadow-md transition-all cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: language.color }}
                    >
                      {language.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{language.name}</h2>
                      <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-1">Proficiency Levels</div>
                    <div className="flex gap-2 flex-wrap">
                      {language.levels.map((level) => (
                        <span 
                          key={level} 
                          className="inline-block px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-1">Regional Variants</div>
                    <div className="flex gap-2 flex-wrap">
                      {language.regions.map((region) => (
                        <span 
                          key={region} 
                          className="inline-block px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}