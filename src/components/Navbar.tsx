
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Code2, Trophy, User, BarChart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">CodeForge</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Challenges
          </Link>
          <Link to="/leaderboard" className={`nav-link ${location.pathname === '/leaderboard' ? 'active' : ''}`}>
            Leaderboard
          </Link>
          <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button>Sign up</Button>
          
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-4 py-4">
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <BarChart className="h-5 w-5" />
                    <span>Challenges</span>
                  </Link>
                  <Link 
                    to="/leaderboard" 
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Trophy className="h-5 w-5" />
                    <span>Leaderboard</span>
                  </Link>
                  <Link 
                    to="/profile" 
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 space-y-2">
                    <Button className="w-full" variant="outline">Sign in</Button>
                    <Button className="w-full">Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
