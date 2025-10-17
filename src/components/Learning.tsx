import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertCircle, Target, Brain, TrendingDown, Video, FileText, CheckCircle } from 'lucide-react';

export function Learning() {
  const lowEfficiencyTopics = [
    {
      id: 1,
      subject: 'Math',
      topic: 'Trigonometry - Identities',
      insight: 'Solved correctly, but used trial-and-error strategy',
      proficiency: 88,
      efficiency: 60,
      resources: 3,
    },
    {
      id: 2,
      subject: 'Physics',
      topic: 'Electrostatics - Gauss Law',
      insight: 'Multiple attempts needed, conceptual gaps detected',
      proficiency: 75,
      efficiency: 55,
      resources: 4,
    },
  ];

  const lowLTITopics = [
    {
      id: 1,
      subject: 'Math',
      topic: 'Quadratic Equations',
      insight: 'Can recall facts but struggles with novel applications',
      lti: 65,
      applications: ['Optimization', 'Trajectory', 'Economics'],
    },
    {
      id: 2,
      subject: 'Chemistry',
      topic: 'Chemical Equilibrium',
      insight: 'Theory strong, application to real-world scenarios weak',
      lti: 58,
      applications: ['Buffer Solutions', 'Industrial Processes'],
    },
  ];

  const highAnxietyTopics = [
    {
      id: 1,
      subject: 'Physics',
      topic: 'Rotational Dynamics',
      insight: 'Score drops significantly when stress is detected',
      avgStress: 75,
      practiceTests: 8,
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl text-white">Personalized Learning</h1>
          <p className="text-slate-400 mt-1">Focus areas identified by AI analysis</p>
        </div>

        {/* Low Efficiency - Strategy Guidance Needed */}
        <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              Low Efficiency (Strategy Guidance Needed)
            </CardTitle>
            <p className="text-yellow-200 text-sm">
              These topics show correct answers but inefficient problem-solving approach
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {lowEfficiencyTopics.map((topic) => (
              <Card key={topic.id} className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          {topic.subject}
                        </Badge>
                        <h3 className="text-xl text-white">{topic.topic}</h3>
                      </div>
                      <p className="text-yellow-200 text-sm mb-4">💡 {topic.insight}</p>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-slate-400 text-sm">Proficiency</p>
                          <p className="text-white">{topic.proficiency}%</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Efficiency</p>
                          <p className="text-yellow-400">{topic.efficiency}%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-white text-sm mb-3">Recommended Resources:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <Video className="w-4 h-4 mr-2" />
                        Strategy Video
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Method Guide
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Practice Set
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Low LTI - Application Practice Needed */}
        <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              Low LTI (Application Practice Needed)
            </CardTitle>
            <p className="text-blue-200 text-sm">
              Strong foundational knowledge, but needs work on transferring concepts to new contexts
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {lowLTITopics.map((topic) => (
              <Card key={topic.id} className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {topic.subject}
                        </Badge>
                        <h3 className="text-xl text-white">{topic.topic}</h3>
                      </div>
                      <p className="text-blue-200 text-sm mb-4">💡 {topic.insight}</p>
                      <div className="mb-4">
                        <p className="text-slate-400 text-sm mb-2">LTI Score</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-3 bg-slate-900 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                              style={{ width: `${topic.lti}%` }}
                            />
                          </div>
                          <span className="text-blue-400">{topic.lti}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">Application Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.applications.map((app) => (
                            <Badge key={app} className="bg-slate-800 text-slate-300 border-slate-600">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button className="bg-blue-500 hover:bg-blue-600 justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Start Application Challenge
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <Video className="w-4 h-4 mr-2" />
                        Cross-Domain Examples
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* High Anxiety Risk - Emotional Support Needed */}
        <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-red-400" />
              High Anxiety Risk (Emotional Support Needed)
            </CardTitle>
            <p className="text-red-200 text-sm">
              Performance affected by stress and anxiety in these areas
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {highAnxietyTopics.map((topic) => (
              <Card key={topic.id} className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                          {topic.subject}
                        </Badge>
                        <h3 className="text-xl text-white">{topic.topic}</h3>
                      </div>
                      <p className="text-red-200 text-sm mb-4">💡 {topic.insight}</p>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-slate-400 text-sm">Avg. Stress Level</p>
                          <p className="text-red-400">{topic.avgStress}%</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Practice Tests</p>
                          <p className="text-white">{topic.practiceTests}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-white text-sm mb-3">Recommended Approach:</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Practice with reduced time pressure initially</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Break down complex problems into smaller steps</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Use breathing exercises before attempting questions</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <Brain className="w-4 h-4 mr-2" />
                        Stress Management Tips
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Low-Pressure Practice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Progress Tracker */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-green-400" />
              Your Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-900/50 rounded-lg">
                <div className="text-4xl mb-2">📚</div>
                <p className="text-3xl text-white mb-1">12</p>
                <p className="text-slate-400 text-sm">Topics Completed</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-lg">
                <div className="text-4xl mb-2">⏱️</div>
                <p className="text-3xl text-white mb-1">24h</p>
                <p className="text-slate-400 text-sm">Practice Time</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-lg">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-3xl text-white mb-1">5</p>
                <p className="text-slate-400 text-sm">Topics in Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
