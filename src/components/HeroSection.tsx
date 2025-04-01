
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Code, Brain, Award, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Your Coding Skills with <span className="text-accent">CodeForge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Practice coding, prepare for interviews, and compete in challenges to level up your programming skills
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full font-medium">
              <Link to="/dashboard">Start Practicing</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-medium">
              <Link to="/leaderboard">View Leaderboard</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Coding Challenges</h3>
            <p className="text-muted-foreground">Practice with over 100+ coding challenges across multiple programming languages</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skill Building</h3>
            <p className="text-muted-foreground">Improve algorithm skills, problem-solving, and technical interview preparation</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitions</h3>
            <p className="text-muted-foreground">Compete in weekly coding contests and climb the global leaderboard</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">Connect with a community of programmers to learn and grow together</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
