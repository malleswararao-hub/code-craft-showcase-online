
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

export const ProfileOne = () => {
  const [profileData] = useState<ProfileData>({
    name: "John Smith",
    role: "Senior Developer",
    department: "Engineering",
    avatar: "/placeholder.svg"
  });

  const [statusMessage, setStatusMessage] = useState<string>("Available for projects");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusMessage(event.target.value);
  };

  return (
    <Card className="max-w-lg mx-auto bg-card border border-border shadow-lg">
      <CardHeader className="text-center pb-4 border-b border-border">
        <div className="w-24 h-24 mx-auto mb-6">
          <img 
            src={profileData.avatar} 
            alt={`${profileData.name} avatar`}
            className="w-full h-full rounded-full object-cover border-4 border-muted shadow-md"
          />
        </div>
        <CardTitle className="text-2xl text-foreground font-serif mb-2">{profileData.name}</CardTitle>
        <p className="text-lg text-muted-foreground font-medium">{profileData.role}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">{profileData.department} Department</p>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-3">
          <Label htmlFor="status-message" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Status Message
          </Label>
          <Input
            id="status-message"
            type="text"
            value={statusMessage}
            onChange={handleStatusChange}
            disabled={!isEditing}
            placeholder="Enter your status..."
            className="w-full border-2 focus:border-primary transition-all duration-200"
          />
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
            className="flex-1 font-medium"
          >
            {isEditing ? "Cancel" : "Edit Status"}
          </Button>
          
          <Button
            disabled={!isEditing}
            variant="secondary"
            className="flex-1 font-medium"
            onClick={() => setIsEditing(false)}
          >
            Save Changes
          </Button>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current Status</p>
            <p className="text-foreground font-medium italic">"{statusMessage}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
