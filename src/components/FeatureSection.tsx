
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose CodeForge?</h2>
          
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Realistic Coding Environment</h3>
                <p className="text-muted-foreground mb-4">
                  Our platform provides a realistic IDE experience with syntax highlighting, 
                  code completion, and support for multiple programming languages including 
                  Java, Python, JavaScript, C++, and more.
                </p>
                <Button asChild variant="outline">
                  <Link to="/dashboard">Try it now</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-code rounded-lg p-6 text-white font-mono text-sm">
                <pre className="overflow-x-auto">
                  <code>
{`function findMaxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Test case
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarraySum(arr)); // Output: 6`}
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Algorithms</h4>
                      <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-1">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Data Structures</h4>
                      <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-1">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Problem Solving</h4>
                      <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-1">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Track Your Progress</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor your coding journey with detailed performance analytics. Track your 
                  problem-solving skills, identify areas for improvement, and watch your rank 
                  climb as you complete more challenges.
                </p>
                <Button asChild variant="outline">
                  <Link to="/profile">View Profile</Link>
                </Button>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Compete and Collaborate</h3>
                <p className="text-muted-foreground mb-4">
                  Join coding contests, hackathons, and compete with programmers from around the world. 
                  Collaborate with peers, share solutions, and learn from the community to accelerate 
                  your growth as a developer.
                </p>
                <Button asChild variant="outline">
                  <Link to="/leaderboard">View Leaderboard</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        1
                      </div>
                      <span className="font-medium">DevNinja</span>
                    </div>
                    <span className="font-semibold">9850 pts</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/80 text-white rounded-full flex items-center justify-center">
                        2
                      </div>
                      <span className="font-medium">CodeMaster</span>
                    </div>
                    <span className="font-semibold">9720 pts</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/60 text-white rounded-full flex items-center justify-center">
                        3
                      </div>
                      <span className="font-medium">AlgoWizard</span>
                    </div>
                    <span className="font-semibold">9510 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
