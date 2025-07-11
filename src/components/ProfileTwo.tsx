
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ProfileData {
  name: string;
  role: string;
  department: string;
  avatar: string;
}

export const ProfileTwo = () => {
  const [profileData] = useState<ProfileData>({
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    department: "Product Design",
    avatar: "/placeholder.svg"
  });

  const [remarks, setRemarks] = useState<string>("Working on mobile app redesign");
  const [availability, setAvailability] = useState<string>("busy");
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleRemarksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
  };

  const getAvailabilityColor = () => {
    switch (availability) {
      case "available": return "bg-green-500";
      case "busy": return "bg-red-500";
      case "away": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-card border-border">
      <CardHeader className="text-center relative">
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <img 
            src={profileData.avatar} 
            alt={`${profileData.name} avatar`}
            className="w-full h-full rounded-full object-cover border-2 border-primary"
          />
          <div 
            className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-background ${getAvailabilityColor()}`}
          />
        </div>
        <CardTitle className="text-foreground">{profileData.name}</CardTitle>
        <p className="text-muted-foreground">{profileData.role}</p>
        <p className="text-sm text-muted-foreground">{profileData.department} Department</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="availability">Availability Status</Label>
          <select 
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
          >
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="away">Away</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remarks">Current Work</Label>
          <Input
            id="remarks"
            type="text"
            value={remarks}
            onChange={handleRemarksChange}
            placeholder="What are you working on?"
            className="w-full"
          />
        </div>
        
        <Button 
          onClick={() => setShowDetails(!showDetails)}
          variant="outline"
          className="w-full"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        
        {showDetails && (
          <div className="p-3 bg-muted rounded-md space-y-2">
            <p className="text-sm"><strong>Status:</strong> {availability}</p>
            <p className="text-sm"><strong>Current Work:</strong> {remarks}</p>
            <p className="text-sm"><strong>Department:</strong> {profileData.department}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
