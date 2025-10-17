import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ExamType } from '../types';

interface LoginPageProps {
  onLogin: (username: string, examType: ExamType) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [examType, setExamType] = useState<ExamType>('JEE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, examType);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center text-white">AI-DAS Platform</CardTitle>
          <CardDescription className="text-center text-slate-400">
            Adaptive Student Practice & Analytics System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-300">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-slate-300">Select Exam Type</Label>
              <RadioGroup value={examType} onValueChange={(value) => setExamType(value as ExamType)}>
                <div className="flex items-center space-x-2 p-3 border border-slate-600 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                  <RadioGroupItem value="JEE" id="jee" className="border-slate-500" />
                  <Label htmlFor="jee" className="flex-1 cursor-pointer text-white">
                    <div>JEE (Joint Entrance Examination)</div>
                    <div className="text-sm text-slate-400">Math, Physics, Chemistry</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border border-slate-600 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                  <RadioGroupItem value="NEET" id="neet" className="border-slate-500" />
                  <Label htmlFor="neet" className="flex-1 cursor-pointer text-white">
                    <div>NEET (National Eligibility Entrance Test)</div>
                    <div className="text-sm text-slate-400">Biology, Physics, Chemistry</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
