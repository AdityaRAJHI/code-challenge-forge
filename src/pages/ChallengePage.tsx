
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Play, PanelLeft, Check, Clock, BarChart, ThumbsUp, MessageSquare, Info } from 'lucide-react';

// Sample challenge data
const challengeData = {
  '1': {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
    difficulty: 'Easy',
    category: 'Arrays',
    solvedCount: 12450,
    timeEstimate: '15 min',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    starterCode: `function twoSum(nums, target) {
  // Your code here
};`
  },
  '2': {
    id: '2',
    title: 'Valid Parentheses',
    description: 'Given a string `s` containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.',
    difficulty: 'Easy',
    category: 'Stacks',
    solvedCount: 10320,
    timeEstimate: '20 min',
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\''
    ],
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    starterCode: `function isValid(s) {
  // Your code here
};`
  }
};

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const challenge = challengeData[id || '1']; // Default to first challenge if ID not found
  const [code, setCode] = useState(challenge.starterCode);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  if (!challenge) {
    return <div>Challenge not found</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <div className="border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <PanelLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-medium truncate">{challenge.title}</h1>
              <Badge variant={
                challenge.difficulty === 'Easy' ? 'success' : 
                challenge.difficulty === 'Medium' ? 'warning' : 'destructive'
              }>
                {challenge.difficulty}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span className="hidden md:inline">Like</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex gap-1">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden md:inline">Discuss</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex gap-1">
                <Info className="h-4 w-4" />
                <span className="hidden md:inline">Hint</span>
              </Button>
              <Button variant="default" size="sm" className="gap-1">
                <Play className="h-4 w-4" />
                <span className="hidden md:inline">Run</span>
              </Button>
              <Button variant="default" size="sm" className="gap-1">
                <Check className="h-4 w-4" />
                <span className="hidden md:inline">Submit</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-grow flex">
          {/* Problem description sidebar */}
          <div className={`border-r w-full lg:w-1/3 xl:w-1/4 bg-card overflow-auto transition-all ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{challenge.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{challenge.timeEstimate}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>{challenge.solvedCount} solved</span>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  {challenge.description.split('\n').map((paragraph, i) => (
                    <p key={i} className="my-2 text-foreground">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Examples</h3>
                <div className="space-y-4">
                  {challenge.examples.map((example, i) => (
                    <div key={i} className="bg-muted p-4 rounded-md">
                      <div className="mb-2">
                        <strong>Input:</strong> {example.input}
                      </div>
                      <div className="mb-2">
                        <strong>Output:</strong> {example.output}
                      </div>
                      {example.explanation && (
                        <div>
                          <strong>Explanation:</strong> {example.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Constraints</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {challenge.constraints.map((constraint, i) => (
                    <li key={i} className="text-muted-foreground">{constraint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Code editor */}
          <div className="flex-1 flex flex-col">
            <Tabs defaultValue="code" className="flex-grow flex flex-col">
              <div className="border-b px-4">
                <TabsList className="p-0">
                  <TabsTrigger value="code">Code</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="code" className="flex-grow p-0 m-0">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="code-input w-full h-full rounded-none resize-none border-0 font-mono text-sm p-4"
                  spellCheck={false}
                />
              </TabsContent>
              <TabsContent value="results" className="flex-grow p-0 m-0">
                <div className="p-4">
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-muted-foreground">Run your code to see results</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChallengePage;
