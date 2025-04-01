
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChallengeCard from '../components/ChallengeCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortAsc, Check } from 'lucide-react';

// Sample challenge data
const challenges = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy' as const,
    category: 'Arrays',
    solvedCount: 12450,
    timeEstimate: '15 min',
  },
  {
    id: '2',
    title: 'Valid Parentheses',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    difficulty: 'Easy' as const,
    category: 'Stacks',
    solvedCount: 10320,
    timeEstimate: '20 min',
  },
  {
    id: '3',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium' as const,
    category: 'Strings',
    solvedCount: 8765,
    timeEstimate: '30 min',
  },
  {
    id: '4',
    title: 'Merge Two Sorted Lists',
    description: 'Merge two sorted linked lists and return it as a sorted list.',
    difficulty: 'Easy' as const,
    category: 'Linked Lists',
    solvedCount: 9542,
    timeEstimate: '25 min',
  },
  {
    id: '5',
    title: 'LRU Cache',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    difficulty: 'Medium' as const,
    category: 'Design',
    solvedCount: 6234,
    timeEstimate: '45 min',
  },
  {
    id: '6',
    title: 'Trapping Rain Water',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    difficulty: 'Hard' as const,
    category: 'Arrays',
    solvedCount: 4327,
    timeEstimate: '60 min',
  },
];

const categories = [
  'All',
  'Arrays',
  'Strings',
  'Linked Lists',
  'Trees',
  'Graphs',
  'Dynamic Programming',
  'Sorting',
  'Searching',
  'Stacks',
  'Queues',
  'Heaps',
  'Design'
];

const Dashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = activeCategory === 'All' || challenge.category === activeCategory;
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Coding Challenges</h1>
            <p className="text-muted-foreground">Practice, learn, and prepare for technical interviews</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <SortAsc className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search challenges..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Challenges</TabsTrigger>
            <TabsTrigger value="easy">Easy</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="hard">Hard</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {activeCategory === category && <Check className="ml-1 h-3 w-3" />}
              </Badge>
            ))}
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} {...challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="easy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges
                .filter(challenge => challenge.difficulty === 'Easy')
                .map((challenge) => (
                  <ChallengeCard key={challenge.id} {...challenge} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="medium" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges
                .filter(challenge => challenge.difficulty === 'Medium')
                .map((challenge) => (
                  <ChallengeCard key={challenge.id} {...challenge} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="hard" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges
                .filter(challenge => challenge.difficulty === 'Hard')
                .map((challenge) => (
                  <ChallengeCard key={challenge.id} {...challenge} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Sign in to track your completed challenges</p>
              <Button className="mt-4">Sign In</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
