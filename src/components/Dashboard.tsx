import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { User, TestResult } from '../types';
import { mockTestResults, weeklyStressData, overallProgressData, achievements } from '../utils/mockData';
import { TrendingUp, Award, Target, Brain, Zap, Trophy } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
  onNavigate: (page: string) => void;
}

export function Dashboard({ user, onNavigate }: DashboardProps) {
  const recentTests = mockTestResults.slice(0, 3);
  const overallProficiency = 82;
  const averageEfficiency = 75;

  return (
    <div className="flex-1 overflow-auto bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-white">Welcome back, {user.name}! 👋</h1>
            <p className="text-slate-400 mt-1">Here's your learning overview</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => onNavigate('test')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Take Test
            </Button>
            <Button 
              onClick={() => onNavigate('challenges')}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              View Challenges
            </Button>
          </div>
        </div>

        {/* User Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Level & XP</p>
                  <p className="text-2xl text-white mt-1">Level {user.level}</p>
                  <p className="text-cyan-400 text-sm mt-1">{user.xp} XP</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Global Rank</p>
                  <p className="text-2xl text-white mt-1">#{user.rank}</p>
                  <p className="text-green-400 text-sm mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Top 5%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Learning Streak</p>
                  <p className="text-2xl text-white mt-1">{user.streak} Days</p>
                  <p className="text-orange-400 text-sm mt-1">🔥 Keep it up!</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Optimal State</p>
                  <p className="text-2xl text-white mt-1">{user.optimalLearningState.focus}%</p>
                  <p className="text-purple-400 text-sm mt-1">{user.optimalLearningState.timeOfDay}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Overall Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="text-5xl text-cyan-400">{overallProficiency}%</div>
                  <div className="mb-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      +4% this month
                    </Badge>
                  </div>
                </div>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={overallProgressData}>
                      <Line 
                        type="monotone" 
                        dataKey="accuracy" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Average Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="text-5xl text-purple-400">{averageEfficiency}%</div>
                  <div className="mb-2">
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      Efficient Strategy
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2 items-end h-24">
                  {[85, 70, 78, 65, 75, 82, 75].map((val, i) => (
                    <div key={i} className="flex-1 bg-purple-500/30 rounded-t" style={{ height: `${val}%` }} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight & Cognitive Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Next Targeted Skill
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-white">Chemistry: Quantum Mechanics</p>
                  <p className="text-slate-300 mt-2">High LTI Potential - Ready for application challenges</p>
                </div>
                <Button 
                  onClick={() => onNavigate('challenges')}
                  className="w-full bg-cyan-500 hover:bg-cyan-600"
                >
                  Start Application Challenge
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Cognitive Load Trends (Weekly)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={weeklyStressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar dataKey="stress" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tests */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Tests (Strategy Focus)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTests.map((test) => (
                <div 
                  key={test.id}
                  className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
                  onClick={() => onNavigate('analytics')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      test.subject === 'Physics' ? 'bg-blue-500/20' :
                      test.subject === 'Math' ? 'bg-purple-500/20' :
                      'bg-green-500/20'
                    }`}>
                      <span className="text-2xl">
                        {test.subject === 'Physics' ? '⚛️' : test.subject === 'Math' ? '📐' : '🧪'}
                      </span>
                    </div>
                    <div>
                      <p className="text-white">{test.subject} - {test.chapter}</p>
                      <p className="text-slate-400 text-sm">{new Date(test.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-cyan-400">{test.score}%</p>
                      <Badge className={
                        test.strategyBreakdown.efficient > 70 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : test.strategyBreakdown.efficient > 50
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }>
                        {test.strategyBreakdown.efficient > 70 ? 'Efficient' : 
                         test.strategyBreakdown.trialAndError > 50 ? 'Trial & Error' : 'Mixed'}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                      : 'bg-slate-900/50 border border-slate-700 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className="text-white text-sm">{achievement.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
