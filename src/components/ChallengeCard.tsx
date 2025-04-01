
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck, Clock, Star, ArrowRight } from 'lucide-react';

interface ChallengeCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  solvedCount: number;
  timeEstimate: string;
}

const DifficultyBadge: React.FC<{ difficulty: 'Easy' | 'Medium' | 'Hard' }> = ({ difficulty }) => {
  const colorMap = {
    Easy: 'bg-green-100 text-green-800 hover:bg-green-100',
    Medium: 'bg-amber-100 text-amber-800 hover:bg-amber-100',
    Hard: 'bg-red-100 text-red-800 hover:bg-red-100',
  };
  
  return (
    <Badge variant="outline" className={`${colorMap[difficulty]} font-medium`}>
      {difficulty}
    </Badge>
  );
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  id,
  title,
  description,
  difficulty,
  category,
  solvedCount,
  timeEstimate,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Badge variant="secondary" className="mr-2">{category}</Badge>
            <DifficultyBadge difficulty={difficulty} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CircleCheck className="h-4 w-4" />
            <span>{solvedCount} solved</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{timeEstimate}</span>
          </div>
        </div>
        <Link to={`/challenge/${id}`} className="text-accent flex items-center gap-1 font-medium hover:underline">
          Solve <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
