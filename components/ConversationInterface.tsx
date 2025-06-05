"use client";

import { useState, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, Send, Volume2, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

interface ConversationInterfaceProps {
  language: any;
}

export function ConversationInterface({ language }: ConversationInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  // ElevenLabs conversation hook
  const conversation = useConversation({
    agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID as string,
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message) => {
      if (message.message) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'assistant',
            content: message.message,
            timestamp: new Date(),
          }
        ]);
      }
    },
    onError: (error) => console.error('Error:', error),
  });
  
  // Start conversation when component mounts
  useEffect(() => {
    const initConversation = async () => {
      try {
        if (isVoiceMode) {
          // Request microphone permission
          await navigator.mediaDevices.getUserMedia({ audio: true });
        }
        
        // Add initial system message based on language
        setMessages([
          {
            id: Date.now().toString(),
            role: 'assistant',
            content: `Welcome to your ${language.name} learning session! I'll be your tutor today. Would you like to start with pronunciation practice, vocabulary, or have a simple conversation?`,
            timestamp: new Date(),
          }
        ]);
        
        // Start the conversation with the agent
        await conversation.startSession();
      } catch (error) {
        console.error('Failed to start conversation:', error);
      }
    };
    
    initConversation();
    
    // Cleanup
    return () => {
      conversation.endSession();
    };
  }, []);
  
  // Switch to text mode (from mic button)
  const switchToTextMode = () => {
    setIsVoiceMode(false);
  };

  // Switch to voice mode (from mic icon beside text box)
  const switchToVoiceMode = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsVoiceMode(true);
    } catch (error) {
      console.error('Microphone permission denied:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    
    // Add user message to state
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Send message to ElevenLabs conversation
    if (conversation.status === 'connected') {
      await conversation.sendUserMessage(inputText);
    }
    
    // Clear input
    setInputText('');
  };
  
  // Stop conversation (but allow to continue later)
  const handleStopConversation = async () => {
    try {
      await conversation.endSession();
      setIsStopped(true);
    } catch (error) {
      console.error('Failed to end conversation:', error);
    }
  };

  // Continue conversation after stopping
  const handleContinueConversation = async () => {
    try {
      await conversation.startSession();
      setIsStopped(false);
    } catch (error) {
      console.error('Failed to continue conversation:', error);
    }
  };

  // Handler to start a new conversation
  const handleStartNewConversation = async () => {
    try {
      await conversation.endSession();
      setMessages([
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: `Welcome to your ${language.name} learning session! I'll be your tutor today. Would you like to start with pronunciation practice, vocabulary, or have a simple conversation?`,
          timestamp: new Date(),
        }
      ]);
      await conversation.startSession();
      setIsStopped(false);
    } catch (error) {
      console.error('Failed to start new conversation:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Practice {language.name}</h2>
        <div className="flex items-center gap-2">
          <Label htmlFor="voice-mode" className="text-sm">Voice Mode</Label>
          <Switch
            id="voice-mode"
            checked={isVoiceMode}
            onCheckedChange={(checked) => setIsVoiceMode(checked)}
            disabled={isStopped}
          />
          {/* Stop Conversation Button */}
          <Button
            size="sm"
            variant="destructive"
            onClick={handleStopConversation}
            className="ml-2"
            disabled={isStopped}
          >
            Stop Conversation
          </Button>
          {/* Continue Conversation Button */}
          {isStopped && (
            <Button
              size="sm"
              variant="default"
              onClick={handleContinueConversation}
              className="ml-2"
            >
              Continue Conversation
            </Button>
          )}
          {/* Start New Conversation Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={handleStartNewConversation}
            className="ml-2"
          >
            Start New Conversation
          </Button>
        </div>
      </div>
      
      <Card className="border bg-card">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 h-[500px]">
            <div className="flex-1 overflow-y-auto space-y-4 p-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[80%]",
                    message.role === 'user' ? "ml-auto" : ""
                  )}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback style={{ backgroundColor: language.color }}>
                        {language.icon}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div className={cn(
                    "rounded-lg p-3",
                    message.role === 'user' 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  )}>
                    <p>{message.content}</p>
                    {message.role === 'assistant' && (
                      <div className="mt-2 flex items-center gap-2">
                        <Button size="icon" variant="ghost" className="h-6 w-6">
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {conversation.isSpeaking && !isStopped && (
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback style={{ backgroundColor: language.color }}>
                      {language.icon}
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted flex items-center gap-2">
                    <span className="text-muted-foreground">Thinking</span>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="border-t pt-4">
              {isVoiceMode && !isStopped ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-16 h-16">
                    <Button
                      size="icon"
                      className={cn(
                        "w-16 h-16 rounded-full transition-all",
                        !conversation.isSpeaking ? "bg-primary hover:bg-primary/90" : "bg-destructive hover:bg-destructive/90"
                      )}
                      onClick={switchToTextMode}
                      disabled={isStopped}
                      title="Switch to text mode"
                    >
                      <Mic className="h-8 w-8" />
                    </Button>
                    {!conversation.isSpeaking && (
                      <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'm listening... (Click mic to switch to text)
                  </p>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={`Type your message in ${language.name} or English...`}
                    className="min-h-[60px]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    disabled={isStopped}
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSendMessage}
                    disabled={inputText.trim() === '' || isStopped}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                  {/* Mic icon to switch back to voice mode */}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={switchToVoiceMode}
                    disabled={isStopped}
                    title="Switch to voice mode"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}