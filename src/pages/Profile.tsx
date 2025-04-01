
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Trophy, Code, BarChart2, Calendar, FireExtinguisher, Fire, Award } from 'lucide-react';

// Sample user profile data
const profileData = {
  username: 'CodeNinja',
  name: 'Alex Johnson',
  joinDate: 'Aug 2022',
  rank: 345,
  totalScore: 4250,
  challengesSolved: 87,
  streak: 12,
  badges: [
    { title: 'Algorithm Master', description: 'Solved 50 algorithm challenges' },
    { title: 'Problem Solver', description: 'Solved challenges in 5 different categories' },
    { title: 'Fire Streak', description: 'Maintained a 10-day coding streak' }
  ],
  skills: [
    { name: 'Arrays', level: 85 },
    { name: 'Strings', level: 75 },
    { name: 'Dynamic Programming', level: 60 },
    { name: 'Trees', level: 70 },
    { name: 'Graphs', level: 45 },
  ],
  recentActivities: [
    { action: 'Solved', challenge: 'Two Sum', date: '2 days ago', difficulty: 'Easy' },
    { action: 'Attempted', challenge: 'LRU Cache', date: '3 days ago', difficulty: 'Medium' },
    { action: 'Solved', challenge: 'Valid Parentheses', date: '5 days ago', difficulty: 'Easy' },
  ]
};

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile sidebar */}
          <div className="w-full md:w-80 space-y-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-2">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>{profileData.username}</CardTitle>
                <CardDescription>{profileData.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Member since</span>
                    <span>{profileData.joinDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Global rank</span>
                    <span className="font-semibold">#{profileData.rank}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total score</span>
                    <span className="font-semibold">{profileData.totalScore}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Streak</span>
                    <div className="flex items-center gap-1">
                      <Fire className="h-4 w-4 text-amber-500" />
                      <span className="font-semibold">{profileData.streak} days</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileData.badges.map((badge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{badge.title}</h4>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">{profileData.challengesSolved}</div>
                      <p className="text-sm text-muted-foreground">Challenges solved</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        Rank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">#{profileData.rank}</div>
                      <p className="text-sm text-muted-foreground">Global position</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Fire className="h-5 w-5 text-amber-500" />
                        Streak
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">{profileData.streak} days</div>
                      <p className="text-sm text-muted-foreground">Current streak</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart2 className="h-5 w-5 text-primary" />
                      Skills
                    </CardTitle>
                    <CardDescription>
                      Your proficiency in different coding topics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profileData.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>
                      Your recent challenge attempts and solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profileData.recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 bg-muted rounded-lg">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            {activity.action === 'Solved' ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <Code className="w-5 h-5 text-amber-500" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{activity.action}</span>
                              <span className="text-primary hover:underline cursor-pointer">{activity.challenge}</span>
                              <Badge variant={
                                activity.difficulty === 'Easy' ? 'outline' : 
                                activity.difficulty === 'Medium' ? 'secondary' : 'destructive'
                              } className="text-xs">
                                {activity.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="submissions">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Code className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No submissions yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start solving challenges to build your submission history
                      </p>
                      <Button asChild>
                        <a href="/dashboard">Explore Challenges</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <div className="text-center py-12">
                  <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Detailed badge progress tracking will be available soon
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="text-center py-12">
                  <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Profile Settings</h3>
                  <p className="text-muted-foreground mb-4">
                    Sign in to customize your profile settings
                  </p>
                  <Button>Sign In</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
