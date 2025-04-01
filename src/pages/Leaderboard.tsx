
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Award, Globe, Calendar, Trophy, Medal } from 'lucide-react';

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, username: 'DevNinja', score: 9850, country: 'Japan', challengesSolved: 432 },
  { rank: 2, username: 'CodeMaster', score: 9720, country: 'United States', challengesSolved: 415 },
  { rank: 3, username: 'AlgoWizard', score: 9510, country: 'India', challengesSolved: 405 },
  { rank: 4, username: 'ByteBuilder', score: 9350, country: 'Germany', challengesSolved: 389 },
  { rank: 5, username: 'LogicLegend', score: 9210, country: 'China', challengesSolved: 378 },
  { rank: 6, username: 'SyntaxSage', score: 9090, country: 'South Korea', challengesSolved: 370 },
  { rank: 7, username: 'BitBaron', score: 8970, country: 'Canada', challengesSolved: 365 },
  { rank: 8, username: 'QueryQueen', score: 8845, country: 'Australia', challengesSolved: 352 },
  { rank: 9, username: 'FunctionFury', score: 8720, country: 'United Kingdom', challengesSolved: 340 },
  { rank: 10, username: 'RecursiveRanger', score: 8590, country: 'Brazil', challengesSolved: 332 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Global Leaderboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See where you stand among the best coders in the world. Climb the ranks by solving more challenges and participating in competitions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-semibold">Top Rankings</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              The top ranked developers based on their performance in coding challenges and contests.
            </div>
          </div>
          
          <div className="flex-1 bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold">Weekly Contest</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              Next contest starts in <span className="font-medium text-foreground">2 days, 14 hours</span>. Join to compete for prizes and ranking points!
            </div>
          </div>
          
          <div className="flex-1 bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Your Rank</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              Sign in to see your global ranking and track your progress over time.
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <div className="p-4 border-b">
            <Tabs defaultValue="global">
              <TabsList>
                <TabsTrigger value="global" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Global
                </TabsTrigger>
                <TabsTrigger value="monthly" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="contests" className="gap-2">
                  <Trophy className="h-4 w-4" />
                  Contests
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Challenges Solved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className={user.rank <= 3 ? 'bg-primary/5' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {user.rank === 1 ? (
                          <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                        ) : user.rank === 2 ? (
                          <Trophy className="h-5 w-5 text-zinc-400 mr-2" />
                        ) : user.rank === 3 ? (
                          <Trophy className="h-5 w-5 text-amber-700 mr-2" />
                        ) : (
                          <span className="text-muted-foreground font-medium w-5 mr-2">{user.rank}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{user.username}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                      {user.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {user.score.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                      {user.challengesSolved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">1,324</span> users
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
