"use client";

import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface ProgressTrackerProps {
  language: any;
}

export function ProgressTracker({ language }: ProgressTrackerProps) {
  const [period, setPeriod] = useState('week');
  
  // Mock data for progress stats
  const progressStats = {
    fluencyLevel: 'A1',
    fluencyScore: 32,
    vocabularyCount: 78,
    accuracyScore: 64,
    pronunciationScore: 71,
    streakDays: 5,
    totalPracticeTime: '3h 45m',
    sessionsCompleted: 12,
  };
  
  // Mock data for charts
  const activityData = [
    { name: 'Mon', minutes: 15 },
    { name: 'Tue', minutes: 30 },
    { name: 'Wed', minutes: 10 },
    { name: 'Thu', minutes: 45 },
    { name: 'Fri', minutes: 20 },
    { name: 'Sat', minutes: 60 },
    { name: 'Sun', minutes: 25 },
  ];
  
  const skillsData = [
    { name: 'Pronunciation', value: 71, color: '#3366FF' },
    { name: 'Vocabulary', value: 58, color: '#00B8A9' },
    { name: 'Grammar', value: 45, color: '#FF8C42' },
    { name: 'Fluency', value: 32, color: '#F35588' },
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Stat Cards */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Fluency Level
            </CardTitle>
            <CardDescription>CEFR Standard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">{progressStats.fluencyLevel}</div>
              <div className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium">
                Beginner
              </div>
            </div>
            <Progress 
              value={progressStats.fluencyScore} 
              className="h-2 mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {progressStats.fluencyScore}% to {progressStats.fluencyLevel.charAt(0)}{parseInt(progressStats.fluencyLevel.charAt(1)) + 1}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Vocabulary
            </CardTitle>
            <CardDescription>Words Learned</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{progressStats.vocabularyCount}</div>
            <Progress 
              value={(progressStats.vocabularyCount / 500) * 100} 
              className="h-2 mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              {500 - progressStats.vocabularyCount} words to go for level completion
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Daily Streak
            </CardTitle>
            <CardDescription>Consecutive Days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{progressStats.streakDays}</div>
            <div className="grid grid-cols-7 gap-1 mt-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div 
                  key={i}
                  className={`h-2 rounded-full ${i < progressStats.streakDays ? 'bg-primary' : 'bg-muted'}`}
                ></div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Keep it up! 2 more days to reach your weekly goal
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Practice Time
            </CardTitle>
            <CardDescription>Total Learning Time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{progressStats.totalPracticeTime}</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs">Sessions</div>
              <div className="text-xs font-medium">{progressStats.sessionsCompleted}</div>
            </div>
            <Progress 
              value={(progressStats.sessionsCompleted / 20) * 100} 
              className="h-2 mt-1" 
            />
            <p className="text-xs text-muted-foreground mt-1">
              20 sessions recommended for this level
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {/* Activity History Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <CardTitle>Activity History</CardTitle>
              <Tabs 
                defaultValue="week" 
                className="w-full sm:w-[260px]"
                value={period}
                onValueChange={setPeriod}
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <CardDescription>
              Your daily practice minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] sm:h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="minutes" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Skills Breakdown Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Breakdown</CardTitle>
            <CardDescription>
              Your language skills distribution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] sm:h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {skillsData.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <span className="text-xs">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>
            Your latest milestones and badges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: "First Conversation", date: "2 days ago", icon: "🗣️" },
              { title: "5-Day Streak", date: "Today", icon: "🔥" },
              { title: "50+ Words Learned", date: "3 days ago", icon: "📚" },
              { title: "Perfect Pronunciation", date: "Yesterday", icon: "🎯" },
            ].map((achievement, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h3 className="font-medium text-sm">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}