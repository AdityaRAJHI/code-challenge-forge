
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import ChallengeCard from '../components/ChallengeCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const popularChallenges = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Popular Challenges</h2>
            <Button asChild variant="outline">
              <Link to="/dashboard">View all challenges</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} {...challenge} />
            ))}
          </div>
        </div>
      </section>
      
      <FeatureSection />
      
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Coding Skills?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of developers who are mastering coding challenges and 
            preparing for technical interviews on CodeForge.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link to="/dashboard">Get Started Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
