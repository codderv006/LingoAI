"use client";

import { learningSteps } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Mic, 
  Book, 
  Pen, 
  MessageSquare, 
  Repeat, 
  MessageCircle, 
  Headphones, 
  Edit, 
  Globe, 
  BarChart 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LearningStepsProps {
  language: any;
}

export function LearningSteps({ language }: LearningStepsProps) {
  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      mic: Mic,
      book: Book,
      pen: Pen,
      'message-square': MessageSquare,
      repeat: Repeat,
      'message-circle': MessageCircle,
      headphones: Headphones,
      edit: Edit,
      globe: Globe,
      'bar-chart': BarChart,
    };
    
    const IconComponent = icons[iconName] || Book;
    return IconComponent;
  };
  
  return (
    <div>
      <div className="mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Curriculum Overview</CardTitle>
                <p className="text-muted-foreground mt-1">
                  {language.name} - Level A1 (Beginner)
                </p>
              </div>
              <Badge>In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <Button>Continue</Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">10</div>
                <p className="text-xs text-muted-foreground">Chapters</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">Lessons</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">Exercises</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Assessments</p>
              </div>
            </div>
            
            <div className="mb-2 text-sm font-medium">Next Lessons:</div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Book className="h-4 w-4 text-muted-foreground" />
                <span>Common Greetings and Introductions</span>
              </li>
              <li className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-muted-foreground" />
                <span>Pronunciation: Basic Vowel Sounds</span>
              </li>
              <li className="flex items-center gap-2">
                <Pen className="h-4 w-4 text-muted-foreground" />
                <span>Basic Sentence Structure</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">10-Step Learning Journey</h2>
        <p className="text-muted-foreground mb-4">
          Our structured approach ensures comprehensive language acquisition through these key stages
        </p>
      </div>
      
      <div className="space-y-4">
        {learningSteps.map((step, index) => {
          const IconComponent = getIconComponent(step.icon);
          const isCompleted = index < 2;
          const isCurrent = index === 2;
          const isUpcoming = index > 2;
          
          return (
            <Card 
              key={step.id}
              className={`border-l-4 transition-all ${
                isCompleted 
                  ? "border-l-green-500" 
                  : isCurrent 
                    ? "border-l-blue-500" 
                    : "border-l-gray-200 dark:border-l-gray-800"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    isCompleted 
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" 
                      : isCurrent 
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" 
                        : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">
                        {step.title}
                        {isCompleted && (
                          <Badge variant="outline" className="ml-2 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                            Completed
                          </Badge>
                        )}
                        {isCurrent && (
                          <Badge variant="outline" className="ml-2 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                            In Progress
                          </Badge>
                        )}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        Step {step.id} of 10
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    {(isCompleted || isCurrent) && (
                      <div className="mt-4 flex gap-2">
                        {isCompleted && (
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                        )}
                        {isCurrent && (
                          <Link href={`/conversation/${language.code}`}>
                            <Button size="sm">
                              Continue
                            </Button>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}