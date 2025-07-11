
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
  skills: string[];
}

export const ProfileThree = () => {
  const [profileData] = useState<ProfileData>({
    name: "Mike Chen",
    role: "DevOps Engineer",
    department: "Infrastructure",
    avatar: "/placeholder.svg",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"]
  });

  const [personalNote, setPersonalNote] = useState<string>("Always ready to help with deployments!");
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [lastActivity, setLastActivity] = useState<string>("2 minutes ago");

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalNote(event.target.value);
    setLastActivity("Just now");
  };

  const profileStyle = {
    opacity: isOnline ? 1 : 0.7,
    transform: isOnline ? "scale(1)" : "scale(0.98)",
    transition: "all 0.3s ease"
  };

  return (
    <Card className="max-w-md mx-auto bg-card border-border" style={profileStyle}>
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <img 
            src={profileData.avatar} 
            alt={`${profileData.name} avatar`}
            className="w-full h-full rounded-full object-cover border-2 border-primary"
          />
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
        <CardTitle className="text-foreground">{profileData.name}</CardTitle>
        <p className="text-muted-foreground">{profileData.role}</p>
        <p className="text-sm text-muted-foreground">{profileData.department} Department</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Skills</Label>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="personal-note">Personal Note</Label>
          <Input
            id="personal-note"
            type="text"
            value={personalNote}
            onChange={handleNoteChange}
            placeholder="Share something about yourself..."
            className="w-full"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label htmlFor="online-status">Online Status</Label>
            <input
              id="online-status"
              type="checkbox"
              checked={isOnline}
              onChange={(e) => setIsOnline(e.target.checked)}
              className="w-4 h-4"
            />
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            disabled={!isOnline}
            className="text-xs"
          >
            Send Message
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          Last active: {lastActivity}
        </div>
        
        <div className="p-3 bg-muted rounded-md">
          <p className="text-sm font-medium">Personal Note:</p>
          <p className="text-sm text-muted-foreground mt-1">{personalNote}</p>
        </div>
      </CardContent>
    </Card>
  );
};
