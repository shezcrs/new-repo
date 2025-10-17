import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockTestResults, subjectWiseAccuracy } from '../utils/mockData';
import { 
  LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell 
} from 'recharts';
import { TrendingUp, Brain, Target, Zap } from 'lucide-react';

export function Analytics() {
  const [selectedTest, setSelectedTest] = useState(mockTestResults[0]);

  // Overall strategy data
  const overallStrategyData = [
    { strategy: 'Efficient', Math: 78, Physics: 70, Chemistry: 85 },
    { strategy: 'Trial & Error', Math: 15, Physics: 20, Chemistry: 10 },
    { strategy: 'Guessing', Math: 7, Physics: 10, Chemistry: 5 },
  ];

  // Radar chart data
  const radarData = [
    { subject: 'Accuracy', value: 82 },
    { subject: 'Speed', value: 75 },
    { subject: 'Focus', value: 78 },
    { subject: 'Transferability', value: 72 },
    { subject: 'Efficiency', value: 80 },
  ];

  // Cognitive Load vs Accuracy
  const cognitiveLoadData = [
    { load: 20, accuracy: 92 },
    { load: 35, accuracy: 86 },
    { load: 50, accuracy: 78 },
    { load: 65, accuracy: 70 },
    { load: 80, accuracy: 62 },
  ];

  // LTI Heatmap data
  const ltiHeatmap = [
    { concept: 'Kinematics', app1: 85, app2: 72, app3: 68 },
    { concept: 'Thermodynamics', app1: 78, app2: 85, app3: 70 },
    { concept: 'Algebra', app1: 65, app2: 70, app3: 72 },
  ];

  return (
    <div className="flex-1 overflow-auto bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl text-white">Analytics & Insights</h1>
          <p className="text-slate-400 mt-1">Deep dive into your learning patterns</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tests">Test History</TabsTrigger>
            <TabsTrigger value="strategy">Strategy Analysis</TabsTrigger>
            <TabsTrigger value="lti">LTI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Performance Radar */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Overall Performance Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#475569" />
                    <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="Your Profile" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Subject-wise Accuracy */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Subject-wise Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(subjectWiseAccuracy).map(([subject, accuracy]) => (
                    <div key={subject}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">{subject}</span>
                        <span className="text-cyan-400">{accuracy}%</span>
                      </div>
                      <div className="h-3 bg-slate-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all"
                          style={{ width: `${accuracy}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cognitive Load vs Accuracy */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  Cognitive Load vs Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis 
                      type="number" 
                      dataKey="load" 
                      name="Cognitive Load" 
                      stroke="#94a3b8"
                      label={{ value: 'Cognitive Load (%)', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="accuracy" 
                      name="Accuracy" 
                      stroke="#94a3b8"
                      label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      cursor={{ strokeDasharray: '3 3' }}
                    />
                    <Scatter data={cognitiveLoadData} fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
                <p className="text-slate-400 text-sm mt-4 text-center">
                  Higher cognitive load correlates with lower accuracy. Focus on stress management techniques.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Test List */}
              <Card className="lg:col-span-1 bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Test History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {mockTestResults.map((test) => (
                    <button
                      key={test.id}
                      onClick={() => setSelectedTest(test)}
                      className={`w-full p-3 rounded-lg border transition-all text-left ${
                        selectedTest.id === test.id
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm">{test.subject}</span>
                        <span className="text-cyan-400 text-sm">{test.score}%</span>
                      </div>
                      <p className="text-slate-400 text-xs">{new Date(test.date).toLocaleDateString()}</p>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Test Details */}
              <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{selectedTest.chapter}</CardTitle>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {selectedTest.level}
                    </Badge>
                  </div>
                  <p className="text-slate-400 text-sm">{new Date(selectedTest.date).toLocaleDateString()}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="text-slate-400 text-sm">Attempted</p>
                      <p className="text-2xl text-white mt-1">{selectedTest.attempted}</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="text-slate-400 text-sm">Unattempted</p>
                      <p className="text-2xl text-white mt-1">{selectedTest.unattempted}</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="text-slate-400 text-sm">Correct</p>
                      <p className="text-2xl text-green-400 mt-1">{selectedTest.correct}</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <p className="text-slate-400 text-sm">Wrong</p>
                      <p className="text-2xl text-red-400 mt-1">{selectedTest.wrong}</p>
                    </div>
                  </div>

                  {/* AI-DAS Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg border border-purple-700/50">
                      <p className="text-purple-300 text-sm">Efficiency Score</p>
                      <p className="text-3xl text-white mt-2">{selectedTest.efficiency}%</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 rounded-lg border border-yellow-700/50">
                      <p className="text-yellow-300 text-sm">Cognitive Load</p>
                      <p className="text-2xl text-white mt-2">{selectedTest.cognitiveLoadIndex}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-lg border border-green-700/50">
                      <p className="text-green-300 text-sm">LTI Score</p>
                      <p className="text-3xl text-white mt-2">{selectedTest.lti}%</p>
                    </div>
                  </div>

                  {/* Emotional Timeline */}
                  <div>
                    <h4 className="text-white mb-3">Emotional Profile (Time-Series)</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={selectedTest.emotionalTimeline}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="questionNumber" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                          labelStyle={{ color: '#e2e8f0' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="intensity" 
                          stroke="#8b5cf6" 
                          strokeWidth={2}
                          dot={{ fill: '#8b5cf6', r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Strategy Breakdown */}
                  <div>
                    <h4 className="text-white mb-3">Strategy Usage Breakdown</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/50">
                        <p className="text-green-300 text-sm">Efficient</p>
                        <p className="text-2xl text-white mt-1">{selectedTest.strategyBreakdown.efficient}%</p>
                      </div>
                      <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
                        <p className="text-yellow-300 text-sm">Trial & Error</p>
                        <p className="text-2xl text-white mt-1">{selectedTest.strategyBreakdown.trialAndError}%</p>
                      </div>
                      <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/50">
                        <p className="text-red-300 text-sm">Guessing</p>
                        <p className="text-2xl text-white mt-1">{selectedTest.strategyBreakdown.guessing}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6 mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  Strategy Classification Across Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={overallStrategyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="strategy" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend />
                    <Bar dataKey="Math" fill="#a855f7" />
                    <Bar dataKey="Physics" fill="#3b82f6" />
                    <Bar dataKey="Chemistry" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Strategy Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-700/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-300 text-sm">Efficient Strategy</p>
                      <p className="text-2xl text-white">78%</p>
                    </div>
                  </div>
                  <p className="text-green-200 text-sm">Strong problem-solving approach. Keep it up!</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border-yellow-700/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-yellow-300 text-sm">Trial & Error</p>
                      <p className="text-2xl text-white">15%</p>
                    </div>
                  </div>
                  <p className="text-yellow-200 text-sm">Room for improvement in conceptual clarity.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-red-700/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-red-300 text-sm">Guessing</p>
                      <p className="text-2xl text-white">7%</p>
                    </div>
                  </div>
                  <p className="text-red-200 text-sm">Minimize guessing with better preparation.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lti" className="space-y-6 mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Learning Transferability Index (LTI) Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left p-3 text-slate-400">Concept</th>
                        <th className="text-center p-3 text-slate-400">Application 1</th>
                        <th className="text-center p-3 text-slate-400">Application 2</th>
                        <th className="text-center p-3 text-slate-400">Application 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ltiHeatmap.map((row) => (
                        <tr key={row.concept} className="border-b border-slate-700">
                          <td className="p-3 text-white">{row.concept}</td>
                          <td className="p-3">
                            <div className={`p-2 rounded text-center ${
                              row.app1 >= 80 ? 'bg-green-500/30 text-green-300' :
                              row.app1 >= 60 ? 'bg-yellow-500/30 text-yellow-300' :
                              'bg-red-500/30 text-red-300'
                            }`}>
                              {row.app1}%
                            </div>
                          </td>
                          <td className="p-3">
                            <div className={`p-2 rounded text-center ${
                              row.app2 >= 80 ? 'bg-green-500/30 text-green-300' :
                              row.app2 >= 60 ? 'bg-yellow-500/30 text-yellow-300' :
                              'bg-red-500/30 text-red-300'
                            }`}>
                              {row.app2}%
                            </div>
                          </td>
                          <td className="p-3">
                            <div className={`p-2 rounded text-center ${
                              row.app3 >= 80 ? 'bg-green-500/30 text-green-300' :
                              row.app3 >= 60 ? 'bg-yellow-500/30 text-yellow-300' :
                              'bg-red-500/30 text-red-300'
                            }`}>
                              {row.app3}%
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex gap-6 justify-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500/30 rounded" />
                    <span className="text-slate-400">High LTI (&gt;80%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500/30 rounded" />
                    <span className="text-slate-400">Medium LTI (60-80%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500/30 rounded" />
                    <span className="text-slate-400">Low LTI (&lt;60%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
